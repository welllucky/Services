"use client";

import { OpenFeature } from "@openfeature/react-sdk";
import { Cookies } from "react-cookie";

import {
  FirebaseAbstract,
  FirebaseAnalytics,
  FirebaseRemoteConfig,
  HTTPClient,
  SentryAbstract,
} from "./abstractions";
import {
  Analytics,
  AppMonitoring,
  FeatureFlag,
  FirebaseAgent,
  ServicesFlagsProvider,
} from "./infra";

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
const firebaseRemoteConfig = new FirebaseRemoteConfig(firebase);
const firebaseAnalytics = new FirebaseAnalytics(firebase);

// ==============================================

// Implementations
export const httpClient = new HTTPClient();
export const cookie = new Cookies();
export const appMonitoringClient = new AppMonitoring(sentry);
export const firebaseAgent = new FirebaseAgent(firebase, appMonitoringClient);
export const featureFlag = new FeatureFlag(
  firebaseRemoteConfig,
  appMonitoringClient,
);
export const analytics = new Analytics(firebaseAnalytics, appMonitoringClient);

export const servicesFlagsProvider = OpenFeature.setProvider(
  new ServicesFlagsProvider(firebaseRemoteConfig),
)
  // .addHooks(new OpenFeatureIntegrationHook())
  .getClient();
