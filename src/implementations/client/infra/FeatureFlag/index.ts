/* eslint-disable max-classes-per-file */
import {
  AnyProviderEvent,
  ClientProviderStatus,
  EvaluationContext,
  JsonValue,
  Logger,
  Provider,
  ProviderEventEmitter,
  ResolutionDetails,
} from "@openfeature/react-sdk";

import {
  FeatureFlagsOptions,
  IAppMonitoring,
  IFeatureFlag,
  ReturnKeyType,
} from "@/types";

const messages = {
  errorTypeMessage: (
    flagKey: string,
    type: "boolean" | "string" | "number" | "object",
  ) => `The flag value for key: ${flagKey} is not a ${type}`,
  errorKeyMessage: (flagKey: string) =>
    `The flag key: ${flagKey} does not exist`,
  errorValueIsNullMessage: (flagKey: string) =>
    `The flag value for key: ${flagKey} is null`,
  errorUnknownMessage: (flagKey: string) =>
    `An unknown error occurred while resolving the flag key: ${flagKey}`,
  successMessage: (flagKey: string, flagValue: unknown) =>
    `Flag value for key: ${flagKey} is ${flagValue}`,
};

class FeatureFlag implements IFeatureFlag {
  private readonly client: IFeatureFlag | null;

  private readonly appMonitoring: IAppMonitoring | null;

  constructor(
    featureFlagAgent: IFeatureFlag,
    appMonitoring: IAppMonitoring,
  ) {
    try {
      if (!featureFlagAgent) {
        throw new Error("FeatureFlag instance was not initialized.");
      }

      if (!appMonitoring) {
        throw new Error("AppMonitoring instance was not initialized.");
      }

      this.appMonitoring = appMonitoring;
      this.client = featureFlagAgent;
    } catch (error) {
      this.appMonitoring = null;
      this.client = null;
      // eslint-disable-next-line no-console
      console.error("Failed to initialize FeatureFlag: ", { error });
    }
  }

  get(key: string, returnType: ReturnKeyType = "boolean") {
    try {
      return this.client?.get(key, returnType);
    } catch (error) {
      this.appMonitoring?.captureException(error);
      return null;
    }
  }

  getAll() {
    try {
      const rawValues = this.client?.getAll();

      if (!rawValues) {
        throw new Error("Flags are not returned from the client.");
      }

      return Object.entries(rawValues).reduce(
        (convertedValues, [key, value]) => {
          // Check if value has the expected methods
          if (typeof value === "object" && value !== null && "getSource" in value && typeof (value as { getSource: () => string }).getSource === "function") {
            if ((value as { getSource: () => string }).getSource() === "static") return convertedValues;
          }

          const flagKey = key as keyof FeatureFlagsOptions;

          // Get the raw value, handling both object and primitive types
          let rawValue: string;
          if (typeof value === "object" && value !== null && "asString" in value && typeof (value as { asString: () => string }).asString === "function") {
            rawValue = (value as { asString: () => string }).asString().trim();
          } else {
            rawValue = String(value).trim();
          }
          let parsedValue;

          if (rawValue === "true" || rawValue === "false") {
            if (typeof value === "object" && value !== null && "asBoolean" in value && typeof (value as { asBoolean: () => boolean }).asBoolean === "function") {
              parsedValue = (value as { asBoolean: () => boolean }).asBoolean();
            } else {
              parsedValue = rawValue === "true";
            }
            // eslint-disable-next-line no-restricted-globals
          } else if (!isNaN(Number(rawValue)) && rawValue !== "") {
            if (typeof value === "object" && value !== null && "asNumber" in value && typeof (value as { asNumber: () => number }).asNumber === "function") {
              parsedValue = (value as { asNumber: () => number }).asNumber();
            } else {
              parsedValue = Number(rawValue);
            }
          } else {
            try {
              parsedValue = JSON.parse(rawValue);
            } catch {
              parsedValue = rawValue;
            }
          }

          // eslint-disable-next-line no-param-reassign, security/detect-object-injection
          convertedValues[flagKey] = parsedValue;
          return convertedValues;
        },
        {} as Partial<FeatureFlagsOptions>,
      ) as FeatureFlagsOptions;
    } catch (error) {
      this.appMonitoring?.captureException(error);
      return {} as FeatureFlagsOptions;
    }
  }

  setFallbacks(fallbacks: FeatureFlagsOptions) {
    try {
      this.client?.setFallbacks(fallbacks);
    } catch (error) {
      this.appMonitoring?.captureException(error);
    }
  }

  async lookup() {
    try {
      await this.client?.lookup();
    } catch (error) {
      this.appMonitoring?.captureException(error);
    }
  }

  async initialize(
    defaultValues: FeatureFlagsOptions = {} as FeatureFlagsOptions,
  ) {
    try {
      const result = await this.client?.initialize();
      this.setFallbacks(defaultValues);
      await this.lookup();

      return result ?? false;
    } catch (error) {
      this.appMonitoring?.captureException(error);
      return false;
    }
  }

  async close() {
    try {
      const result = await this.client?.close();
      return result ?? false;
    } catch (error) {
      this.appMonitoring?.captureException(error);
      return false;
    }
  }
}

class ServicesFlagsProvider implements Provider {
  private readonly agent: IFeatureFlag;

  readonly metadata = {
    name: ServicesFlagsProvider.name,
  };

  status: ClientProviderStatus = ClientProviderStatus.NOT_READY;

  readonly runsOn = "client";

  hooks = [];

  events:
    | ProviderEventEmitter<AnyProviderEvent, Record<string, unknown>>
    | undefined;

  constructor(agent: IFeatureFlag) {
    this.agent = agent;
  }

  /**
   * trackingEventName: string,
   * context: EvaluationContext,
   * trackingEventDetails: TrackingEventDetails,
   */
  track?(): void {
    throw new Error("Method not implemented.");
  }

  /**
   * oldContext: EvaluationContext,
   * newContext: EvaluationContext,
   */
  onContextChange?(): Promise<void> | void {
    throw new Error("Method not implemented.");
  }

  resolveBooleanEvaluation(
    flagKey: string,
    defaultValue: boolean,
    _context: EvaluationContext,
    logger: Logger,
  ): ResolutionDetails<boolean> {
    try {
      const flagValue = this.agent.get(flagKey, "boolean");

      if (flagValue === null) {
        logger.warn(messages.errorValueIsNullMessage(flagKey));
        return {
          value: defaultValue,
          errorMessage: messages.errorValueIsNullMessage(flagKey),
        };
      }

      if (typeof flagValue === "boolean") {
        logger.debug(messages.successMessage(flagKey, flagValue));
        return {
          value: flagValue,
        };
      }
      logger.error(messages.errorTypeMessage(flagKey, "boolean"));
      return {
        value: defaultValue,
        errorMessage: messages.errorTypeMessage(flagKey, "boolean"),
      };
    } catch (error) {
      logger.error(error);
      return {
        value: defaultValue,
        errorMessage: messages.errorUnknownMessage(flagKey),
      };
    }
  }

  resolveStringEvaluation(
    flagKey: string,
    defaultValue: string,
    _context: EvaluationContext,
    logger: Logger,
  ): ResolutionDetails<string> {
    try {
      const flagValue = this.agent.get(flagKey, "string");

      if (flagValue === null) {
        logger.warn(messages.errorValueIsNullMessage(flagKey));
        return {
          value: defaultValue,
          errorMessage: messages.errorValueIsNullMessage(flagKey),
        };
      }

      if (typeof flagValue === "string") {
        logger.debug(messages.successMessage(flagKey, flagValue));
        return {
          value: flagValue,
        };
      }
      logger.error(messages.errorTypeMessage(flagKey, "string"));
      return {
        value: defaultValue,
        errorMessage: messages.errorTypeMessage(flagKey, "string"),
      };
    } catch (error) {
      logger.error(error);
      return {
        value: defaultValue,
        errorMessage: messages.errorUnknownMessage(flagKey),
      };
    }
  }

  resolveNumberEvaluation(
    flagKey: string,
    defaultValue: number,
    _context: EvaluationContext,
    logger: Logger,
  ): ResolutionDetails<number> {
    try {
      const flagValue = this.agent.get(flagKey, "number");

      if (flagValue === null) {
        logger.warn(messages.errorValueIsNullMessage(flagKey));
        return {
          value: defaultValue,
          errorMessage: messages.errorValueIsNullMessage(flagKey),
        };
      }

      if (typeof flagValue === "number") {
        logger.debug(messages.successMessage(flagKey, flagValue));
        return {
          value: flagValue,
        };
      }
      logger.error(messages.errorTypeMessage(flagKey, "number"));
      return {
        value: defaultValue,
        errorMessage: messages.errorTypeMessage(flagKey, "number"),
      };
    } catch (error) {
      logger.error(error);
      return {
        value: defaultValue,
        errorMessage: messages.errorUnknownMessage(flagKey),
      };
    }
  }

  resolveObjectEvaluation<T extends JsonValue>(
    flagKey: string,
    defaultValue: T,
    _context: EvaluationContext,
    logger: Logger,
  ): ResolutionDetails<T> {
    try {
      const flagValue = this.agent.get(flagKey, "object");

      if (flagValue === null) {
        logger.warn(messages.errorValueIsNullMessage(flagKey));
        return {
          value: defaultValue,
          errorMessage: messages.errorValueIsNullMessage(flagKey),
        };
      }

      if (typeof flagValue === "object") {
        logger.debug(messages.successMessage(flagKey, flagValue));
        return {
          value: flagValue as T,
        };
      }
      logger.error(messages.errorTypeMessage(flagKey, "object"));
      return {
        value: defaultValue,
        errorMessage: messages.errorTypeMessage(flagKey, "object"),
      };
    } catch (error) {
      logger.error(error);

      return {
        value: defaultValue,
        errorMessage: messages.errorUnknownMessage(flagKey),
      };
    }
  }

  async onClose(): Promise<void> {
    this.status = ClientProviderStatus.NOT_READY;
  }

  // context?: EvaluationContext
  async initialize(): Promise<void> {
    try {
      if (this.status === ClientProviderStatus.READY) {
        return;
      }

      await this.agent.initialize();

      this.status = this.agent.isInitialized
        ? ClientProviderStatus.READY
        : ClientProviderStatus.NOT_READY;
    } catch (error) {
      this.status = ClientProviderStatus.FATAL;
      throw error;
    }
  }
}

export { FeatureFlag, ServicesFlagsProvider };
