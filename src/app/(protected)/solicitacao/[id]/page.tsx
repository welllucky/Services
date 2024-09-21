import { IssuePage } from "@/screens";

const Issue = ({
  params,
}: {
  params: {
    id: string;
  };
}) => <IssuePage id={params.id} />;

export default Issue;
