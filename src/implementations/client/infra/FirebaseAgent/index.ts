import { IFirebase } from "@/types";
import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { FirebaseAbstract } from "../../abstractions";
import { AppMonitoring } from "../AppMonitoringClient";

export class FirebaseAgent implements IFirebase {
  private readonly firebaseApp: FirebaseAbstract;

  private readonly appMonitoring: AppMonitoring;

  constructor(firebaseApp: FirebaseAbstract, appMonitoring: AppMonitoring) {
    this.appMonitoring = appMonitoring;
    this.firebaseApp = firebaseApp;
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
      return this.firebaseApp.initializeAnalytics();
    } catch (error) {
      this.appMonitoring.captureException(error);
      return null;
    }
  }

  public async initializeFirebase(): Promise<FirebaseApp | null> {
    try {
      return this.firebaseApp.initializeFirebase();
    } catch (error) {
      this.appMonitoring.captureException(error);
      return null;
    }
  }
}
