"use client";

import { NavigationBar } from "@/components";
import navigationOptions from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { NoMobileDevice } from "@/screens/NoMobileDevice";
import Homepage from "@/screens/home";
import { useApp } from "@/utils";
import { useEffect, useState } from "react";

export default function Home() {
	const { isClientMediumMobile, isClientMobile, isClientSmallMobile } =
		useApp();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isClientMediumMobile || isClientMobile || isClientSmallMobile);
	}, [isClientMediumMobile, isClientMobile, isClientSmallMobile]);

	if (!isMobile) {
		return <NoMobileDevice />;
	}

	return (
		<>
			<FlexContainer
				$backgroundColor={"#F5F5F5"}
				$full={true}>
				<Homepage />
				<NavigationBar
					color={"#F8FCF6"}
					$highlightTextColor={"#7AC143"}
					options={navigationOptions}
				/>
			</FlexContainer>
		</>
	);
}
