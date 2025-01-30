import { MyIssuesPage } from "@/screens/";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus chamados",
};

const MyIssues = async () => (
  // const cookiesStore = cookies();
  // const accessToken = cookiesStore.get(CS_KEY_ACCESS_TOKEN)?.value || "";
  // const session = await auth(accessToken);

  // if (!session?.user.canCreateTicket) {
  //   return <NoMobileDevicePage />;
  // }

  <MyIssuesPage />
);
export default MyIssues;
