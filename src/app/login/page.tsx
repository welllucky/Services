import { auth } from "@/auth";
import { LoginPage } from "@/screens";
import { LoginPageProps } from "@/screens/Login/Login.types";
import { redirect } from "next/navigation";

const Login = async ({ searchParams }: LoginPageProps) => {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return <LoginPage searchParams={searchParams} />;
};

export default Login;
export const runtime = "nodejs";
