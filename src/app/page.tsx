import { redirect } from "next/navigation";

import { auth } from "@/auth";

const EntryPoint = async () => {
  const session = await auth();

  // skipcq: JS-0116
  async function leadUser(isAuthenticated: boolean) {
    "use server";

    redirect(isAuthenticated ? "/home" : "/login");
  }

  return leadUser(Boolean(session?.user));
};

export default EntryPoint;

export const runtime = "nodejs";
