import * as Sentry from "@sentry/nextjs";
import packageJson from "./package.json";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  tracesSampleRate: 1.0,

  environment: process.env.NEXT_PUBLIC_HOST_ENV,

  release: packageJson.version,

  enabled: process.env.NEXT_PUBLIC_HOST_ENV !== "local",
});
