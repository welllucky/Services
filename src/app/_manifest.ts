import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
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
    start_url: "/",
    icons: [
      {
        src: "/public/android/services-android-logo-48.png",
        sizes: "48x48",
      },
      {
        src: "/public/android/services-android-logo-72.png",
        sizes: "72x72",
      },
      {
        src: "/public/android/services-android-logo-96.png",
        sizes: "96x96",
      },
      {
        src: "/public/android/services-android-logo-144.png",
        sizes: "144x144",
      },
      {
        src: "/public/android/services-android-logo-192.png",
        sizes: "192x192",
      },
      {
        src: "/public/android/services-android-logo-512.png",
        sizes: "512x512",
      },
      {
        src: "/public/ios/services-ios-logo-48.png",
        sizes: "48x48",
      },
      {
        src: "/public/ios/services-ios-logo-72.png",
        sizes: "72x72",
      },
      {
        src: "/public/ios/services-ios-logo-96.png",
        sizes: "96x96",
      },
      // {
      //   src: "/public/ios/services-ios-logo-144.png",
      //   sizes: "144x144",
      // },
      {
        src: "/public/ios/services-ios-logo-192.png",
        sizes: "192x192",
      },
      {
        src: "/public/ios/services-ios-logo-512.png",
        sizes: "512x512",
      },
      {
        src: "/public/windows/large/services-windows-logo-100.png",
        sizes: "100x100",
      },
      {
        src: "/public/windows/large/services-windows-logo-125.png",
        sizes: "125x125",
      },
      {
        src: "/public/windows/large/services-windows-logo-150.png",
        sizes: "150x150",
      },
      {
        src: "/public/windows/large/services-windows-logo-200.png",
        sizes: "200x200",
      },
      {
        src: "/public/windows/large/services-windows-logo-400.png",
        sizes: "400x400",
      },
      {
        src: "/public/windows/small/services-windows-logo-100.png",
        sizes: "100x100",
      },
      {
        src: "/public/windows/small/services-windows-logo-125.png",
        sizes: "125x125",
      },
      {
        src: "/public/windows/small/services-windows-logo-150.png",
        sizes: "150x150",
      },
      {
        src: "/public/windows/small/services-windows-logo-200.png",
        sizes: "200x200",
      },
      {
        src: "/public/windows/small/services-windows-logo-400.png",
        sizes: "400x400",
      },
      {
        src: "/public/windows/splash/services-windows-logo-100.png",
        sizes: "100x100",
      },
      {
        src: "/public/windows/splash/services-windows-logo-125.png",
        sizes: "125x125",
      },
      {
        src: "/public/windows/splash/services-windows-logo-150.png",
        sizes: "150x150",
      },
      {
        src: "/public/windows/splash/services-windows-logo-200.png",
        sizes: "200x200",
      },
      {
        src: "/public/windows/splash/services-windows-logo-400.png",
        sizes: "400x400",
      },
      {
        src: "/public/windows/store/services-windows-logo-100.png",
        sizes: "100x100",
      },
      {
        src: "/public/windows/store/services-windows-logo-125.png",
        sizes: "125x125",
      },
      {
        src: "/public/windows/store/services-windows-logo-150.png",
        sizes: "150x150",
      },
      {
        src: "/public/windows/store/services-windows-logo-200.png",
        sizes: "200x200",
      },
      {
        src: "/public/windows/store/services-windows-logo-400.png",
        sizes: "400x400",
      },
      {
        src: "/public/favicon-16x16.png",
      },
      {
        src: "/public/favicon-32x32.png",
      },
      {
        src: "/public/favicon.ico",
        type: "image/x-icon",
      },
    ],
    id: "l3-services",
    display_override: ["window-controls-overlay", "standalone", "fullscreen"],
    lang: "pt-BR",
    prefer_related_applications: false,
    categories: ["business", "utilities", "productivity"],
    protocol_handlers: [
      {
        protocol: "web+chamado",
        title: "Chamado",
        url: "/chamado/%s",
      },
      {
        protocol: "web+solicitacao",
        title: "Solicitação",
        url: "/solicitação/%s",
      },
      {
        protocol: "web+abrirChamado",
        title: "Abrir Chamado",
        url: "/abrir-chamado?resumo=%s?descricao=%s?categoria=%s?prioridade=%s?data=%s",
      },
    ],
  };
}
