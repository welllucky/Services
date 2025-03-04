import { Analytics } from "firebase/analytics";

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
  isAnalyticsInitialized: () => boolean;
}
