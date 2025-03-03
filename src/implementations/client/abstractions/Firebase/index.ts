import { FirebaseKeys } from "@/types";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";

export class FirebaseAbstract {
  private firebaseInstance: FirebaseApp | null = null;

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

    this.firebaseInstance = app;
  }

  public async initializeFirebase(): Promise<FirebaseApp | null> {
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

    return app;
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
    return this.firebaseInstance;
  }
}
