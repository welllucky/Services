import { IssuePage, IssuePageProps } from "@/screens";

const Issue = ({ params }: { params: IssuePageProps }) => {
  return <IssuePage id={params.id} />;
};

export default Issue;
