"use server";

import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import { cookies } from "next/headers";

export const auth = async () => {
  const cookieStore = cookies();

  const accessToken = cookieStore.get(CS_KEY_ACCESS_TOKEN)?.value ?? "";

  return { isAuthenticated: !!accessToken, accessToken };
};
