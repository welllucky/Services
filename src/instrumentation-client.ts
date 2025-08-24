import * as Sentry from "@sentry/nextjs";

import packageJson from "../package.json";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  tracesSampleRate: 1.0,

  replaysOnErrorSampleRate: 1.0,

  replaysSessionSampleRate: 0.5,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
    Sentry.browserProfilingIntegration(),
    Sentry.browserTracingIntegration(),
    Sentry.openFeatureIntegration(),
  ],

  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.online\/api/],

  profilesSampleRate: 1.0,

  environment: process.env.NEXT_PUBLIC_HOST_ENV,

  release: packageJson.version,

  enabled: process.env.NEXT_PUBLIC_HOST_ENV !== "local",

  transport: Sentry.makeBrowserOfflineTransport(Sentry.makeFetchTransport),
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
