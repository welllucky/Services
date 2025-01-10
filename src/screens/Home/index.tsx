"use client";

// import { issueApi } from "@/utils";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";
import { IssuesPageUI } from "../Issues/UI";

interface HomepageProps {
  user?: IUser | null;
}

const Homepage = ({ user }: HomepageProps) => {
  const router = useRouter();
  // const { data, isLoading } = issueApi.getInProgressIssues();

  return (
    <IssuesPageUI
      data={null}
      isLoading={false}
      router={router}
      user={user}
    />
  );
};

export { Homepage };
