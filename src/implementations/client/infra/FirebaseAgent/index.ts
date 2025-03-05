import { IAppMonitoring, IFirebase } from "@/types";
import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { FirebaseAbstract } from "../../abstractions";

class FirebaseAgent implements IFirebase {
  private readonly firebaseApp: FirebaseAbstract | null;

  private readonly appMonitoring: IAppMonitoring | null;

  private _isAnalyticsInitialized: boolean = false;

  constructor(firebaseApp: FirebaseAbstract, appMonitoring: IAppMonitoring) {
    try {
      if (!firebaseApp) {
        throw new Error("Firebase instance not initialized");
      }
      if (!appMonitoring) {
        throw new Error("AppMonitoring instance not initialized");
      }

      this.appMonitoring = appMonitoring;
      this.firebaseApp = firebaseApp;
      this._isAnalyticsInitialized = false;
    } catch (error) {
      this.firebaseApp = null;
      this.appMonitoring = null;
      this._isAnalyticsInitialized = false;
      // eslint-disable-next-line no-console
      console.error("Failed to initialize FirebaseAgent: ", { error });
    }
  }

  public getFirebaseApp(): FirebaseApp | null | undefined {
    try {
      return this.firebaseApp?.getFirebaseApp();
    } catch (error) {
      this.appMonitoring?.captureException(error);
      return null;
    }
  }

  public async initializeAnalytics(): Promise<Analytics | null> {
    try {
      const instance = await this.firebaseApp?.initializeAnalytics();

      if (!instance) {
        this._isAnalyticsInitialized = false;
        return Promise.resolve(null);
      }

      this._isAnalyticsInitialized = true;
      return Promise.resolve(instance);
    } catch (error) {
      this.appMonitoring?.captureException(error);
      return null;
    }
  }

  isAnalyticsInitialized() {
    return this._isAnalyticsInitialized;
  }
}

export default FirebaseAgent;
