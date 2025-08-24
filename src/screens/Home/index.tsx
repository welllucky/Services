import { IUser, TicketDto } from "@/types";

import HomePageUI from "./UI";

interface HomepageProps {
  user?: IUser | null;
  data?: TicketDto[] | null;
}

const Homepage = ({ user, data }: HomepageProps) => {
  return (
    <HomePageUI
      data={data}
      user={user}
    />
  );
};

export default Homepage;
