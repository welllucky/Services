import { MetadataRoute } from "next";
// import { theme } from "@/styles";

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
        src: "../../public/windows11/SmallTile.scale-100.png",
        sizes: "71x71",
      },
      {
        src: "../../public/windows11/SmallTile.scale-125.png",
        sizes: "89x89",
      },
      {
        src: "../../public/windows11/SmallTile.scale-150.png",
        sizes: "107x107",
      },
      {
        src: "../../public/windows11/SmallTile.scale-200.png",
        sizes: "142x142",
      },
      {
        src: "../../public/windows11/SmallTile.scale-400.png",
        sizes: "284x284",
      },
      {
        src: "../../public/windows11/Square150x150Logo.scale-100.png",
        sizes: "150x150",
      },
      {
        src: "../../public/windows11/Square150x150Logo.scale-125.png",
        sizes: "188x188",
      },
      {
        src: "../../public/windows11/Square150x150Logo.scale-150.png",
        sizes: "225x225",
      },
      {
        src: "../../public/windows11/Square150x150Logo.scale-200.png",
        sizes: "300x300",
      },
      {
        src: "../../public/windows11/Square150x150Logo.scale-400.png",
        sizes: "600x600",
      },
      {
        src: "../../public/windows11/Wide310x150Logo.scale-100.png",
        sizes: "310x150",
      },
      {
        src: "../../public/windows11/Wide310x150Logo.scale-125.png",
        sizes: "388x188",
      },
      {
        src: "../../public/windows11/Wide310x150Logo.scale-150.png",
        sizes: "465x225",
      },
      {
        src: "../../public/windows11/Wide310x150Logo.scale-200.png",
        sizes: "620x300",
      },
      {
        src: "../../public/windows11/Wide310x150Logo.scale-400.png",
        sizes: "1240x600",
      },
      {
        src: "../../public/windows11/LargeTile.scale-100.png",
        sizes: "310x310",
      },
      {
        src: "../../public/windows11/LargeTile.scale-125.png",
        sizes: "388x388",
      },
      {
        src: "../../public/windows11/LargeTile.scale-150.png",
        sizes: "465x465",
      },
      {
        src: "../../public/windows11/LargeTile.scale-200.png",
        sizes: "620x620",
      },
      {
        src: "../../public/windows11/LargeTile.scale-400.png",
        sizes: "1240x1240",
      },
      {
        src: "../../public/windows11/Square44x44Logo.scale-100.png",
        sizes: "44x44",
      },
      {
        src: "../../public/windows11/Square44x44Logo.scale-125.png",
        sizes: "55x55",
      },
      {
        src: "../../public/windows11/Square44x44Logo.scale-150.png",
        sizes: "66x66",
      },
      {
        src: "../../public/windows11/Square44x44Logo.scale-200.png",
        sizes: "88x88",
      },
      {
        src: "../../public/windows11/Square44x44Logo.scale-400.png",
        sizes: "176x176",
      },
      {
        src: "../../public/windows11/StoreLogo.scale-100.png",
        sizes: "50x50",
      },
      {
        src: "../../public/windows11/StoreLogo.scale-125.png",
        sizes: "63x63",
      },
      {
        src: "../../public/windows11/StoreLogo.scale-150.png",
        sizes: "75x75",
      },
      {
        src: "../../public/windows11/StoreLogo.scale-200.png",
        sizes: "100x100",
      },
      {
        src: "../../public/windows11/StoreLogo.scale-400.png",
        sizes: "200x200",
      },
      {
        src: "../../public/windows11/SplashScreen.scale-100.png",
        sizes: "620x300",
      },
      {
        src: "../../public/windows11/SplashScreen.scale-125.png",
        sizes: "775x375",
      },
      {
        src: "../../public/windows11/SplashScreen.scale-150.png",
        sizes: "930x450",
      },
      {
        src: "../../public/windows11/SplashScreen.scale-200.png",
        sizes: "1240x600",
      },
      {
        src: "../../public/windows11/SplashScreen.scale-400.png",
        sizes: "2480x1200",
      },
      {
        src: "../../public/windows11/Square44x44Logo.targetsize-16.png",
        sizes: "16x16",
      },
      {
        src: "../../public/windows11/Square44x44Logo.targetsize-20.png",
        sizes: "20x20",
      },
      {
        src: "../../public/windows11/Square44x44Logo.targetsize-24.png",
        sizes: "24x24",
      },
      {
        src: "../../public/windows11/Square44x44Logo.targetsize-30.png",
        sizes: "30x30",
      },
      {
        src: "../../public/windows11/Square44x44Logo.targetsize-32.png",
        sizes: "32x32",
      },
      {
        src: "../../public/windows11/Square44x44Logo.targetsize-36.png",
        sizes: "36x36",
      },
      {
        src: "../../public/windows11/Square44x44Logo.targetsize-40.png",
        sizes: "40x40",
      },
      {
        src: "../../public/windows11/Square44x44Logo.targetsize-44.png",
        sizes: "44x44",
      },
      {
        src: "../../public/windows11/Square44x44Logo.targetsize-48.png",
        sizes: "48x48",
      },
      {
        src: "../../public/ios/16.png",
        sizes: "16x16",
      },
      {
        src: "../../public/ios/20.png",
        sizes: "20x20",
      },
      {
        src: "../../public/ios/29.png",
        sizes: "29x29",
      },
      {
        src: "../../public/ios/32.png",
        sizes: "32x32",
      },
      {
        src: "../../public/ios/40.png",
        sizes: "40x40",
      },
      {
        src: "../../public/ios/50.png",
        sizes: "50x50",
      },
      {
        src: "../../public/ios/57.png",
        sizes: "57x57",
      },
      {
        src: "../../public/ios/58.png",
        sizes: "58x58",
      },
      {
        src: "../../public/ios/60.png",
        sizes: "60x60",
      },
      {
        src: "../../public/ios/64.png",
        sizes: "64x64",
      },
      {
        src: "../../public/ios/72.png",
        sizes: "72x72",
      },
      {
        src: "../../public/ios/76.png",
        sizes: "76x76",
      },
      {
        src: "../../public/ios/80.png",
        sizes: "80x80",
      },
      {
        src: "../../public/ios/87.png",
        sizes: "87x87",
      },
      {
        src: "../../public/ios/100.png",
        sizes: "100x100",
      },
      {
        src: "../../public/ios/114.png",
        sizes: "114x114",
      },
      {
        src: "../../public/ios/120.png",
        sizes: "120x120",
      },
      {
        src: "../../public/ios/128.png",
        sizes: "128x128",
      },
      {
        src: "../../public/ios/144.png",
        sizes: "144x144",
        purpose: "any",
      },
      {
        src: "../../public/ios/152.png",
        sizes: "152x152",
      },
      {
        src: "../../public/ios/167.png",
        sizes: "167x167",
      },
      {
        src: "../../public/ios/180.png",
        sizes: "180x180",
      },
      {
        src: "../../public/ios/192.png",
        sizes: "192x192",
      },
      {
        src: "../../public/ios/256.png",
        sizes: "256x256",
      },
      {
        src: "../../public/ios/512.png",
        sizes: "512x512",
      },
      {
        src: "../../public/ios/1024.png",
        sizes: "1024x1024",
      },
      {
        src: "../../public/favicon-16x16.png",
      },
      {
        src: "../../public/favicon-32x32.png",
      },
      {
        src: "../../public/favicon.ico",
        type: "image/x-icon",
      },
    ],
    id: "l3-services",
    display_override: ["window-controls-overlay", "standalone", "fullscreen"],
    lang: "pt",
    prefer_related_applications: false,
    categories: ["business", "government", "utilities"],
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
