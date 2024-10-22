import { auth } from "@/auth";
import { MyIssuesPage, NoMobileDevicePage } from "@/screens/";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus chamados",
};

const MyIssues = async () => {
  const session = await auth();
  if (!session?.user.canCreateTicket) {
    return <NoMobileDevicePage />;
  }

  return <MyIssuesPage />;
};

export default MyIssues;
