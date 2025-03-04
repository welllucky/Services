import { IFirebase } from "@/types";
import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { FirebaseAbstract } from "../../abstractions";
import { AppMonitoring } from "../AppMonitoringClient";

class FirebaseAgent implements IFirebase {
  private readonly firebaseApp: FirebaseAbstract;

  private readonly appMonitoring: AppMonitoring;

  private _isAnalyticsInitialized: boolean = false;

  constructor(firebaseApp: FirebaseAbstract, appMonitoring: AppMonitoring) {
    this.appMonitoring = appMonitoring;
    this.firebaseApp = firebaseApp;
    this._isAnalyticsInitialized = false;
  }

  public getFirebaseApp(): FirebaseApp | null {
    try {
      return this.firebaseApp.getFirebaseApp();
    } catch (error) {
      this.appMonitoring.captureException(error);
      return null;
    }
  }

  public async initializeAnalytics(): Promise<Analytics | null> {
    try {
      const instance = await this.firebaseApp.initializeAnalytics();

      if (!instance) {
        this._isAnalyticsInitialized = false;
        return Promise.resolve(null);
      }

      this._isAnalyticsInitialized = true;
      return Promise.resolve(instance);
    } catch (error) {
      this.appMonitoring.captureException(error);
      return null;
    }
  }

  isAnalyticsInitialized() {
    return this._isAnalyticsInitialized;
  }
}

export { FirebaseAgent };
