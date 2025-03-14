"use client";

import { TicketDto } from "@/types";
import { useRouter } from "next/navigation";
import IssuesPageUI from "./UI";

interface MyIssuesPageProps {
  data?: TicketDto[] | null;
}

const MyIssuesPage = ({ data }: MyIssuesPageProps) => {
  const router = useRouter();

  return (
    <IssuesPageUI
      data={data}
      router={router}
    />
  );
};

export default MyIssuesPage;
