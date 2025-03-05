import { Analytics } from "firebase/analytics";
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
  initializeAnalytics(): Promise<Analytics | null>;
  isAnalyticsInitialized(): boolean;
  getFirebaseApp(): FirebaseApp | null | undefined;
}
