import { auth } from "@/auth";
import { redirect } from "next/navigation";

const EntryPoint = async () => {
  const session = await auth();

  async function leadUser(isAuthenticated: boolean) {
    "use server";

    redirect(isAuthenticated ? "/home" : "/login");
  }

  return leadUser(!!session?.user);
};

export default EntryPoint;

export const runtime = "nodejs";
