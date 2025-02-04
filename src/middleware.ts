import { NextRequest, NextResponse, userAgent } from "next/server";
import {
  CS_KEY_COMPANY_ID,
  CS_KEY_USER_DEVICE_TYPE,
  CS_KEY_USER_RELIABLE_AGENT,
  HD_KEY_COMPANY_ID,
  HD_KEY_USER_DEVICE_TYPE,
  HD_KEY_USER_RELIABLE_AGENT,
} from "./utils/alias";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();
  const companyId = process.env.SERVICES_COMPANY_ID ?? "";
  const { device, isBot } = userAgent(request);
  const clientDevice = device.type ?? "desktop";
  const isMobile = clientDevice === "mobile";
  const isEmbed = device.type === "embed";
  const isReliableAgent = !isBot || !isEmbed;
  const isNoMobilePage = url.pathname.startsWith("/noMobileDevice");

  response.headers.set(HD_KEY_USER_DEVICE_TYPE, clientDevice);
  response.cookies.set(CS_KEY_USER_DEVICE_TYPE, clientDevice);

  response.headers.set(HD_KEY_USER_RELIABLE_AGENT, String(isReliableAgent));
  response.cookies.set(CS_KEY_USER_RELIABLE_AGENT, String(isReliableAgent));

  if (isNoMobilePage && isMobile && isReliableAgent) {
    return NextResponse.redirect(new URL("/", url));
  }

  if ((!isMobile || !isReliableAgent) && !isNoMobilePage) {
    return NextResponse.redirect(new URL("/noMobileDevice", url));
  }

  if (companyId) {
    response.headers.set(HD_KEY_COMPANY_ID, companyId);
    response.cookies.set(CS_KEY_COMPANY_ID, companyId);
  }

  return response;
}

// export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon*|sitemap.xml|robots.txt|monitoring|public|manifest|android/*).*)",
  ],
};
