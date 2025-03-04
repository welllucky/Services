export interface FeatureFlagsOptions {
  isTicketEventsAvailable?: boolean;
  isMaintenanceMode?: boolean;
}

export type CompanyType = {
  id: number;
  name: string;
  location: string;
  emailPrefix: string;
};

export type LanguageType = {
  default: string;
  available: string[];
};

export type DateTimeFormatType = {
  date: {
    format: string;
    firstDay: string;
  };
  time: {
    utc: number;
    format: string;
  };
};

export type InternationalizationType = {
  language: LanguageType;
  currency: string;
  dateTime: DateTimeFormatType;
};

export type BackofficeType = {
  active: boolean;
  url: string;
};

export type ApplicationType = {
  devices: string[];
  backoffice: BackofficeType;
  features: string[];
  allowedEnvs: string[];
};

export type ConfigType = {
  featureFlags: FeatureFlagsOptions;
  company: CompanyType;
  internationalization: InternationalizationType;
  application: ApplicationType;
};
