import { NextRequest, NextResponse, userAgent } from "next/server";
import {
  CS_KEY_USER_DEVICE_TYPE,
  CS_KEY_USER_RELIABLE_AGENT,
  HD_KEY_USER_DEVICE_TYPE,
  HD_KEY_USER_RELIABLE_AGENT
} from "./utils";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();

  const { device, isBot } = userAgent(request);
  const clientDevice = device.type ?? "desktop";

  console.log("clientDevice: ", clientDevice);

  if (
    !request.cookies.get(CS_KEY_USER_DEVICE_TYPE) ||
    clientDevice !== "mobile"
  ) {
    response.cookies.set(CS_KEY_USER_DEVICE_TYPE, clientDevice);
  }

  response.headers.set(HD_KEY_USER_DEVICE_TYPE, clientDevice);

  if (url.pathname.startsWith("/noMobileDevice") && clientDevice === "mobile") {
    return NextResponse.redirect(new URL("/", url));
  }

  if (
    clientDevice !== "mobile" &&
    !url.pathname.startsWith("/noMobileDevice")
  ) {
    url.pathname = "/noMobileDevice";
    return NextResponse.redirect(url, 307);
  }

  if (isBot || device.type === "console" || device.type === "embed") {
    response.headers.set(HD_KEY_USER_RELIABLE_AGENT, "false");
    response.cookies.set(CS_KEY_USER_RELIABLE_AGENT, "false");
  } else {
    response.headers.set(HD_KEY_USER_RELIABLE_AGENT, "true");
    response.cookies.set(CS_KEY_USER_RELIABLE_AGENT, "true");
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
