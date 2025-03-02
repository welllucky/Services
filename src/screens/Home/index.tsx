"use client";

import { IUser, TicketDto } from "@/types";
import { useRouter } from "next/navigation";
import { HomePageUI } from "./UI";

interface HomepageProps {
  user?: IUser | null;
  data?: TicketDto[] | null;
}

const Homepage = ({ user, data }: HomepageProps) => {
  const router = useRouter();

  return (
    <HomePageUI
      data={data}
      router={router}
      user={user}
    />
  );
};

export { Homepage };
