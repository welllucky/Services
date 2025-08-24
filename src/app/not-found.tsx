import { Metadata } from "next";

import { NotFoundPage } from "@/screens";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "Página não encontrada",
  robots: {
    follow: false,
    googleBot: undefined,
    index: false,
    noarchive: true,
  },
};

const NotFound = () => {
  return <NotFoundPage />;
};

export default NotFound;
