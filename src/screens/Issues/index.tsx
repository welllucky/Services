"use client";

import { issueApi } from "@/utils/apis";
import { useRouter } from "next/navigation";
import { IssuesPageUI } from "./UI";

const MyIssuesPage = () => {
  const router = useRouter();
  const { data, isLoading } = issueApi.getIssues();

  return (
    <IssuesPageUI
      isLoading={isLoading}
      data={data}
      router={router}
    />
  );
};

export { MyIssuesPage };
