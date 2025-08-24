import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { RegisterPage } from "@/screens";

const Register = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return <RegisterPage />;
};

export default Register;
export const runtime = "nodejs";
