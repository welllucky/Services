"use client";

import { appMonitoringClient } from "@/implementations/client";
import { ServerErrorPage } from "@/screens";
import NextError from "next/error";
import { useEffect } from "react";

const GlobalError = ({
  error,
}: Readonly<{
  error: Error & { digest?: string };
}>) => {
  useEffect(() => {
    appMonitoringClient.captureException(error);
  }, [error]);

  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html lang="pt-BR">
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
        <ServerErrorPage />
      </body>
    </html>
  );
};

export default GlobalError;
