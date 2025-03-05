"use client";

import { Cookies } from "react-cookie";
import {
  FirebaseAbstract,
  HTTPClient,
  RemoteConfig,
  SentryAbstract,
} from "./abstractions";
import { AppMonitoringClient, FeatureFlag, FirebaseAgent } from "./infra";

// Configurations
const firebaseConfig = {
  apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "",
};

// ==============================================

// Third-party abstractions
const sentry = new SentryAbstract();
const firebase = new FirebaseAbstract(firebaseConfig);
const remoteConfig = new RemoteConfig(firebase);

// ==============================================

// Implementations
export const httpClient = new HTTPClient();
export const cookie = new Cookies();
export const appMonitoringClient = new AppMonitoringClient(sentry);
export const firebaseAgent = new FirebaseAgent(firebase, appMonitoringClient);
export const featureFlag = new FeatureFlag(remoteConfig, appMonitoringClient);
