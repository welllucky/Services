import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "reflect-metadata";

const EntryPoint = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get(CS_KEY_ACCESS_TOKEN)?.value || "";

  async function leadUser(isAuthenticated: boolean) {
    "use server";

    redirect(isAuthenticated ? "/home" : "/login");
  }

  return leadUser(!!accessToken);
};

export default EntryPoint;
