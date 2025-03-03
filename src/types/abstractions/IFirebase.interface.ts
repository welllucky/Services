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
  initializeFirebase(): Promise<FirebaseApp | null>;
  initializeAnalytics(): Promise<Analytics | null>;
}
