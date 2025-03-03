"use client";

import { Cookies } from "react-cookie";
import { FirebaseAbstract, HTTPClient, SentryAbstract } from "./abstractions";
import { RemoteConfig } from "./abstractions/RemoteConfig";
import { AppMonitoring, FeatureFlagAgent, FirebaseAgent } from "./infra";

const sentry = new SentryAbstract();
const firebase = new FirebaseAbstract({
  apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "",
});

export const httpClient = new HTTPClient();
export const cookie = new Cookies();
export const appMonitoringClient = new AppMonitoring(sentry);

export const firebaseAgent = new FirebaseAgent(firebase, appMonitoringClient);
const remoteConfig = new RemoteConfig(firebaseAgent);
export const featureFlagAgent = new FeatureFlagAgent(
  remoteConfig,
  appMonitoringClient,
);
