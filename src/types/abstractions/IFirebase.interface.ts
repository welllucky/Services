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
