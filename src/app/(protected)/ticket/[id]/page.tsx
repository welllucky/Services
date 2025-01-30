import { IssuePage, IssuePageProps } from "@/screens";

const Issue = async ({ params }: { params: IssuePageProps }) => (
  <IssuePage id={params.id} />
);
export default Issue;
