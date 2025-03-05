import { FirebaseKeys } from "@/types";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";

class FirebaseAbstract {
  private readonly firebaseInstance: FirebaseApp | null = null;

  private readonly config: FirebaseKeys;

  constructor(config: FirebaseKeys) {
    this.config = config;

    const app = initializeApp(
      {
        apiKey: this.config.apikey,
        authDomain: this.config.authDomain,
        projectId: this.config.projectId,
        storageBucket: this.config.storageBucket,
        messagingSenderId: this.config.messagingSenderId,
        appId: this.config.appId,
        measurementId: this.config.measurementId,
      },
      "services",
    );

    if (!app) {
      throw new Error("Firebase instance not initialized");
    }

    this.firebaseInstance = app;
  }

  public async initializeAnalytics(): Promise<Analytics | null> {
    if (!this.firebaseInstance) {
      throw new Error("Firebase instance not initialized");
    }

    const canInitializeAnalytics = await isSupported();

    if (canInitializeAnalytics) {
      const analytics = getAnalytics(this.firebaseInstance);

      return analytics;
    }
    return null;
  }

  public getFirebaseApp(): FirebaseApp | null {
    if (!this.firebaseInstance) {
      // eslint-disable-next-line no-console
      console.warn(
        "Firebase not initialized. Call initializeFirebase() first.",
      );
    }
    return this.firebaseInstance;
  }
}

// eslint-disable-next-line import/prefer-default-export
export { FirebaseAbstract };
