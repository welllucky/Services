"use client";

import { IUser } from "@/types";
import { issueApi } from "@/utils";
import { useRouter } from "next/navigation";
import { IssuesPageUI } from "../Issues/UI";

interface HomepageProps {
  user?: IUser | null;
}

const Homepage = ({ user }: HomepageProps) => {
  const router = useRouter();
  const { data: res, isLoading } = issueApi.getInProgressIssues(
    user?.accessToken ?? "",
  );

  return (
    <IssuesPageUI
      data={res?.data}
      isLoading={isLoading}
      router={router}
      user={user}
    />
  );
};

export { Homepage };
