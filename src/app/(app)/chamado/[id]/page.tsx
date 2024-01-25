import { IssuePage, IssuePageProps } from "@/screens";

export default function Issue({ params }: { params: IssuePageProps }) {
  return <IssuePage id={params.id} />;
}
