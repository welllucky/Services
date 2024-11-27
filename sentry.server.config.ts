// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import packageJson from "./package.json";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate:
    process.env.NEXT_PUBLIC_NODE_ENV === "development" ? 1.0 : 0.8,

  environment: process.env.NEXT_PUBLIC_NODE_ENV,

  release: packageJson.version,

  spotlight: process.env.NEXT_PUBLIC_NODE_ENV === "development",

  enabled: process.env.NEXT_PUBLIC_HOST_ENV !== "local",
});
