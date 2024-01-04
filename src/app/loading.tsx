import { FcLogoMobile } from "@/assets";
import { LoginMobile, Logo } from "@/screens/login/styles";
import Image from "next/image";

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<LoginMobile>
			<Logo>
      <Image width={120} height={120} alt="Services logo" src="/android-chrome-512x512.png"/>
			</Logo>
		</LoginMobile>
	);
}
