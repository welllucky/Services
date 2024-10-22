import { signIn } from "@/auth";

export const signUpUser = async (email: string, password: string) => {
  "use server";

  await signIn("credentials", { email, password });
};
