// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import packageJson from "./package.json";

// import * as Spotlight from "@spotlightjs/spotlight";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.5,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: false,
      blockAllMedia: false,
    }),
    Sentry.browserProfilingIntegration(),
    Sentry.browserTracingIntegration(),
  ],

  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.online\/api/],

  profilesSampleRate: 1.0,

  environment: process.env.NEXT_PUBLIC_HOST_ENV,

  release: packageJson.version,

  spotlight: process.env.NEXT_PUBLIC_NODE_ENV === "development",

  enabled: process.env.NEXT_PUBLIC_HOST_ENV !== "local",
});

// if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
//   Spotlight.init();
// }
