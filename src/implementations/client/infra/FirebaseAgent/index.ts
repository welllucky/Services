import { FirebaseApp } from "firebase/app";

import { IAppMonitoring, IFirebase } from "@/types";

import { FirebaseAbstract } from "../../abstractions";

class FirebaseAgent implements IFirebase {
  private readonly firebaseApp: FirebaseAbstract | null;

  private readonly appMonitoring: IAppMonitoring | null;

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
    } catch (error) {
      this.firebaseApp = null;
      this.appMonitoring = null;

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
}

export default FirebaseAgent;
