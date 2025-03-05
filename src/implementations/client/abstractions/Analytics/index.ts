// eslint-disable-next-line import/order
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
// eslint-disable-next-line import/no-unresolved
import { IAnalyticsAbstract } from "@/types";
import { FirebaseAbstract } from "../Firebase";
// eslint-disable-next-line import/no-unresolved

class FirebaseAnalytics implements IAnalyticsAbstract {
  private readonly firebaseInstance: FirebaseAbstract | null;

  private analyticsInstance: Analytics | null = null;

  constructor(firebaseInstance: FirebaseAbstract) {
    try {
      if (!firebaseInstance) {
        throw new Error("Firebase instance is not provided");
      }

      this.firebaseInstance = firebaseInstance;
    } catch (error) {
      this.firebaseInstance = null;
      // eslint-disable-next-line no-console
      console.error("Failed to initialize Firebase Analytics:", error);
    }
  }

  public async initialize(): Promise<Analytics | null> {
    if (!this.firebaseInstance) {
      throw new Error("Firebase instance is not provided");
    }
    const canInitializeAnalytics = await isSupported();

    const firebaseApp = this.firebaseInstance?.getFirebaseApp();

    if (!firebaseApp) {
      throw new Error("Firebase app is not initialized or is not provided");
    }

    if (!canInitializeAnalytics) {
      throw new Error("Firebase Analytics is not supported");
    }

    const analytics = getAnalytics(firebaseApp);

    this.analyticsInstance = analytics;

    return analytics;
  }

  public getAnalytics(): Analytics | null {
    if (!this.analyticsInstance) {
      throw new Error("Firebase Analytics instance is not initialized");
    }
    return this.analyticsInstance;
  }
}

// eslint-disable-next-line import/prefer-default-export
export { FirebaseAnalytics };
