"use client";

import { issueApi } from "@/utils";
import { useRouter } from "next/navigation";
import { IssuesPageUI } from "../Issues/UI";

const Homepage = () => {
  const router = useRouter();
  const { data, isLoading } = issueApi.getInProgressIssues();

  return (
    <IssuesPageUI
      data={data}
      isLoading={isLoading}
      router={router}
    />
  );
};

export { Homepage };
