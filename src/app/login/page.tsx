import { LoginPage } from "@/screens";
import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = async ({
  searchParams,
}: {
  searchParams: {
    redirectTo: string;
  };
}) => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get(CS_KEY_ACCESS_TOKEN)?.value;

  if (accessToken) {
    redirect("/");
  }

  return <LoginPage redirectTo={searchParams?.redirectTo} />;
};

export default Login;
