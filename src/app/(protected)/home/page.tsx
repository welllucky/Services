import { auth } from "@/auth";
import { Homepage as Home } from "@/screens";
import { redirect } from "next/navigation";

const Homepage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <Home user={{ ...session.user, accessToken: session?.accessToken ?? "" }} />
  );
};

export default Homepage;
export const runtime = "nodejs";
