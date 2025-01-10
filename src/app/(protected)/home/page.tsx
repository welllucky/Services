import { auth } from "@/auth";
import { Homepage as Home } from "@/screens";

const Homepage = async () => {
  const session = await auth();

  return <Home user={session?.user} />;
};

export default Homepage;
export const runtime = "nodejs";
