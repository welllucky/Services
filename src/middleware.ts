import { NextRequest, NextResponse, userAgent } from "next/server";
import {
  CS_KEY_USER_DEVICE_TYPE,
  CS_KEY_USER_RELIABLE_AGENT,
  HD_KEY_COMPANY_ID,
  HD_KEY_USER_DEVICE_TYPE,
  HD_KEY_USER_RELIABLE_AGENT,
} from "./utils";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();
  const companyId = process.env.SERVICES_COMPANY_ID ?? "";

  const { device, isBot } = userAgent(request);
  const clientDevice = device.type ?? "desktop";

  if (
    !request.cookies.get(CS_KEY_USER_DEVICE_TYPE) ||
    clientDevice !== "mobile" ||
    (clientDevice === "mobile" &&
      request.cookies.get(CS_KEY_USER_DEVICE_TYPE)?.value !== "mobile")
  ) {
    response.cookies.set(CS_KEY_USER_DEVICE_TYPE, clientDevice);
  }

  response.headers.set(HD_KEY_USER_DEVICE_TYPE, clientDevice);

  if (url.pathname.startsWith("/noMobileDevice") && clientDevice === "mobile") {
    return NextResponse.redirect(new URL("/", url));
  }

  if (isBot || device.type === "embed") {
    response.headers.set(HD_KEY_USER_RELIABLE_AGENT, "false");
    response.cookies.set(CS_KEY_USER_RELIABLE_AGENT, "false");
  } else {
    response.headers.set(HD_KEY_USER_RELIABLE_AGENT, "true");
    response.cookies.set(CS_KEY_USER_RELIABLE_AGENT, "true");
  }

  if (
    (clientDevice !== "mobile" || isBot) &&
    !url.pathname.startsWith("/noMobileDevice")
  ) {
    return NextResponse.redirect(new URL("/noMobileDevice", url));
  }

  if (companyId) response.headers.set(HD_KEY_COMPANY_ID, companyId);

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
