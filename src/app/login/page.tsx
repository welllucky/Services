import { auth } from "@/auth";
import { LoginPage } from "@/screens";
import { redirect } from "next/navigation";

const Login = async ({
  searchParams,
}: {
  searchParams: {
    redirectTo: string;
  };
}) => {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return <LoginPage redirectTo={searchParams?.redirectTo} />;
};

export default Login;
export const runtime = "nodejs";
