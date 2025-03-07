import { FirebaseApp } from "firebase/app";

export type FirebaseKeys = {
  apikey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

export interface IFirebase {
  getFirebaseApp(): FirebaseApp | null | undefined;
}

export interface IFirebaseFeature {
  initialize: () => Promise<boolean>;
  close: () => Promise<boolean>;
  isInitialized?: boolean;
}

export class FirebaseFeatures<T> {
  firebaseInstance: IFirebase | null | undefined;

  instance: T | null | undefined;

  isInitialized: boolean = false;

  constructor(firebase: IFirebase) {
    this.firebaseInstance = firebase;
  }

  protected async initializeFeature<K>(
    featureName: string,
    getFeature: (
      // eslint-disable-next-line no-unused-vars
      app?: FirebaseApp | undefined,
      // eslint-disable-next-line no-unused-vars
      options?: K,
    ) => T,
    isSupported: boolean,
    options?: K,
  ): Promise<T | null | undefined> {
    if (this.isInitialized) {
      return this.instance;
    }

    if (!this.firebaseInstance) {
      this.isInitialized = false;
      throw new Error("Firebase instance is not provided");
    }

    if (!isSupported) {
      this.isInitialized = false;
      throw new Error(`Firebase ${featureName} is not supported`);
    }

    const firebaseApp = this.firebaseInstance?.getFirebaseApp();

    if (!firebaseApp) {
      this.isInitialized = false;
      throw new Error("Firebase app is not initialized or is not provided");
    }

    const remoteConfig = getFeature(firebaseApp, options);

    this.instance = remoteConfig;

    this.isInitialized = true;

    return remoteConfig;
  }

  public async close() {
    this.isInitialized = false;
    this.instance = null;
    return Boolean(!this.instance);
  }
}
