/* eslint-disable brace-style */
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";

import { FirebaseFeatures, IAnalyticsAbstract } from "@/types";

import { FirebaseAbstract } from "../Firebase";

class FirebaseAnalytics
  extends FirebaseFeatures<Analytics>
  implements IAnalyticsAbstract
{
  constructor(firebaseInstance: FirebaseAbstract) {
    if (!firebaseInstance) {
      throw new Error("Firebase instance is not provided");
    }

    super(firebaseInstance);
  }

  public async initialize() {
    const canInitialize = await isSupported();
    const feature = await this.initializeFeature<unknown>(
      "Firebase Analytics",
      getAnalytics,
      canInitialize,
    );

    return Boolean(feature);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { FirebaseAnalytics };
