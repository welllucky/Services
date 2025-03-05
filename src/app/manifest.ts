import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const url = process.env.BASE_URL;
  return {
    id: url ?? "services",
    name: "Services",
    short_name: "Services",
    description:
      "Desburocratizador do gerenciamento de chamados, bem vindo ao Services.",
    theme_color: "#57a722",
    background_color: "#f5f5f5",
    dir: "ltr",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
    start_url: url ?? "/",
    display_override: ["window-controls-overlay", "standalone", "fullscreen"],
    lang: "pt-BR",
    prefer_related_applications: false,
    categories: ["business", "utilities", "productivity"],
    protocol_handlers: [
      {
        protocol: "web+ticket",
        title: "Ticket",
        url: "/ticket/%s",
      },
      {
        protocol: "web+issue",
        title: "Issue",
        url: "/issue/%s",
      },
      {
        protocol: "web+openTicket",
        title: "Open Ticket",
        url: "/open-ticket?resume=%s&description=%s&category=%s&priority=%s&date=%s",
      },
    ],
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        purpose: "any",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        type: "image/x-icon",
        purpose: "any",
        sizes: "48x48",
      },
      {
        src: "/android/services-android-logo-48.png",
        sizes: "48x48",
        purpose: "any",
      },
      {
        src: "/android/services-android-logo-72.png",
        sizes: "72x72",
        purpose: "any",
      },
      {
        src: "/android/services-android-logo-96.png",
        sizes: "96x96",
        purpose: "any",
      },
      {
        src: "/android/services-android-logo-192.png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/android/services-android-logo-512.png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/ios/services-ios-logo-16.png",
        sizes: "16x16",
        purpose: "any",
      },
      {
        src: "/ios/services-ios-logo-32.png",
        sizes: "32x32",
        purpose: "any",
      },
      {
        src: "/ios/services-ios-logo-50.png",
        sizes: "50x50",
        purpose: "any",
      },
      {
        src: "/ios/services-ios-logo-72.png",
        sizes: "72x72",
        purpose: "any",
      },
      {
        src: "/ios/services-ios-logo-100.png",
        sizes: "100x100",
        purpose: "any",
      },

      {
        src: "/ios/services-ios-logo-192.png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "/ios/services-ios-logo-256.png",
        sizes: "256x256",
        purpose: "any",
      },
      {
        src: "/ios/services-ios-logo-512.png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/ios/services-ios-logo-1024.png",
        sizes: "1024x1024",
        purpose: "any",
      },
      {
        src: "/windows/large/services-windows-logo-310.png",
        sizes: "310x310",
        purpose: "any",
      },
      {
        src: "/windows/large/services-windows-logo-388.png",
        sizes: "388x388",
        purpose: "any",
      },
      {
        src: "/windows/large/services-windows-logo-465.png",
        sizes: "465x465",
        purpose: "any",
      },
      {
        src: "/windows/large/services-windows-logo-620.png",
        sizes: "620x620",
        purpose: "any",
      },
      {
        src: "/windows/large/services-windows-logo-1240.png",
        sizes: "1240x1240",
        purpose: "any",
      },
      {
        src: "/windows/small/services-windows-logo-71.png",
        sizes: "71x71",
        purpose: "any",
      },
      {
        src: "/windows/small/services-windows-logo-89.png",
        sizes: "89x89",
        purpose: "any",
      },
      {
        src: "/windows/small/services-windows-logo-107.png",
        sizes: "107x107",
        purpose: "any",
      },
      {
        src: "/windows/small/services-windows-logo-142.png",
        sizes: "142x142",
        purpose: "any",
      },
      {
        src: "/windows/small/services-windows-logo-284.png",
        sizes: "284x284",
        purpose: "any",
      },
      {
        src: "/windows/splash/services-windows-logo-1.png",
        sizes: "620x300",
        purpose: "any",
      },
      {
        src: "/windows/splash/services-windows-logo-2.png",
        sizes: "775x375",
        purpose: "any",
      },
      {
        src: "/windows/splash/services-windows-logo-3.png",
        sizes: "930x450",
        purpose: "any",
      },
      {
        src: "/windows/splash/services-windows-logo-4.png",
        sizes: "1240x600",
        purpose: "any",
      },
      {
        src: "/windows/splash/services-windows-logo-5.png",
        sizes: "2480x1200",
        purpose: "any",
      },
      {
        src: "/windows/store/services-windows-logo-50.png",
        sizes: "50x50",
        purpose: "any",
      },
      {
        src: "/windows/store/services-windows-logo-63.png",
        sizes: "63x63",
        purpose: "any",
      },
      {
        src: "/windows/store/services-windows-logo-75.png",
        sizes: "75x75",
        purpose: "any",
      },
      {
        src: "/windows/store/services-windows-logo-100.png",
        sizes: "100x100",
        purpose: "any",
      },
    ],
  };
}
