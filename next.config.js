/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production",
  },
  generateBuildId: () => {
    return Promise.resolve(`build-id-${new Date()}`);
  },
  reactStrictMode: process.env.NODE_ENV === "development",
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  experimental: {
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB", "INP"],
  },
  optimizeFonts: true,
  env: {
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APIS_BASE_URL: process.env.NEXT_PUBLIC_APIS_BASE_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT:
      process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT,
    SERVICES_COMPANY_ID: process.env.SERVICES_COMPANY_ID,
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
  dest: "public",
  // disable: false,
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "sw.js",
  reloadOnOnline: true,
});

module.exports = withPWA(nextConfig);
