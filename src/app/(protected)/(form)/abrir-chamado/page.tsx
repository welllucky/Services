import { Metadata } from "next";
import { CreateIssuePage } from "@/screens";

export const metadata: Metadata = {
  title: { default: "Abrir chamado", template: "%s | Services" },
};

const OpenIssue = () => <CreateIssuePage />;

export default OpenIssue;
