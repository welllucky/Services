"use client";

import { ticketApi } from "@/utils";
import { useRouter } from "next/navigation";
import { IssuesPageUI } from "../Issues/UI";

const Homepage = () => {
  const router = useRouter();
  const { data, isLoading } = ticketApi.getInProgressTickets();

  return (
    <IssuesPageUI
      data={data}
      isLoading={isLoading}
      router={router}
    />
  );
};

export { Homepage };
