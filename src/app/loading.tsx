import { FcLogoMobile } from "@/assets";
import { LoginMobile, Logo } from "@/screens/login/styles";

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<LoginMobile>
			<Logo>
				<FcLogoMobile />
			</Logo>
		</LoginMobile>
	);
}
