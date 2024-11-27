import { IssuePage, IssuePageProps } from "@/screens";

const Issue = async ({ params }: { params: IssuePageProps }) => (
  // const cookiesStore = cookies();
  // const accessToken = cookiesStore.get(CS_KEY_ACCESS_TOKEN)?.value || "";
  // const session = await auth(accessToken);

  // if (!session?.user.canResolveTicket) {
  //   return <NoMobileDevicePage />;
  // }

  <IssuePage id={params.id} />
);
export default Issue;
