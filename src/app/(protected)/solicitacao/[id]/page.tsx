import { auth } from "@/auth";
import { IssuePage, IssuePageProps, NoMobileDevicePage } from "@/screens";

const Issue = async ({ params }: { params: IssuePageProps }) => {
  const session = await auth();
  if (!session?.user.canResolveTicket) {
    return <NoMobileDevicePage />;
  }

  return <IssuePage id={params.id} />;
};

export default Issue;
