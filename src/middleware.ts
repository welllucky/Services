import { NextRequest, NextResponse, userAgent } from "next/server";

import {
  CS_KEY_COMPANY_ID,
  CS_KEY_USER_DEVICE_TYPE,
  CS_KEY_USER_RELIABLE_AGENT,
  HD_KEY_COMPANY_ID,
  HD_KEY_USER_DEVICE_TYPE,
  HD_KEY_USER_RELIABLE_AGENT,
} from "@/constraints";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();
  const companyId = process.env.SERVICES_COMPANY_ID ?? "";
  const { device, isBot } = userAgent(request);
  const clientDevice = device.type ?? "desktop";
  const isMobile = clientDevice === "mobile";
  const isEmbed = device.type === "embed";
  const rdParam = url.searchParams.get("rd");
  const isNoMobilePage = url.pathname.startsWith("/noMobileDevice");

  // Se o parâmetro rd=client, então o redirecionamento já foi iniciado pelo cliente
  // e não devemos redirecionar no servidor
  const isRedirectFromClient = rdParam === "client";

  const isReliableAgent = (!isBot && !isEmbed) || rdParam === "1";

  // Configura cookies e headers
  response.headers.set(HD_KEY_USER_DEVICE_TYPE, clientDevice);
  response.cookies.set(CS_KEY_USER_DEVICE_TYPE, clientDevice);
  response.headers.set(HD_KEY_USER_RELIABLE_AGENT, String(isReliableAgent));
  response.cookies.set(CS_KEY_USER_RELIABLE_AGENT, String(isReliableAgent));

  // Não redirecionar se vier de um redirecionamento do cliente
  if (isRedirectFromClient) {
    return response;
  }

  // Redireciona para noMobileDevice se não for mobile e não estiver na página noMobileDevice
  if (!isMobile && !isNoMobilePage) {
    return NextResponse.redirect(new URL("/noMobileDevice?rd=server", url));
  }

  // Redireciona para home se for mobile e estiver na página noMobileDevice
  if (isNoMobilePage && isMobile && isReliableAgent) {
    return NextResponse.redirect(new URL("/?rd=server", url));
  }

  // Configura cookie de companyId
  if (companyId) {
    response.headers.set(HD_KEY_COMPANY_ID, companyId);
    response.cookies.set(CS_KEY_COMPANY_ID, companyId);
  }

  return response;
}

// export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon*|maintenance|500|sitemap.xml|ios|windows|android|robots.txt|monitoring|public|config.json|manifest|android/*).*)",
  ],
};
