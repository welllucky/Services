"use client";

import { NavigationBar } from "@/components";
import navigationOptions from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { NoMobileDevice } from "@/screens/NoMobileDevice";
import { useApp } from "@/utils";
import { usePathname } from "next/navigation";
import { ReactNode, useDebugValue, useEffect, useMemo, useState } from "react";
import { useIsClient } from "usehooks-ts";

export default function Template({ children }: { children: ReactNode }) {
	const { isClientMediumMobile, isClientMobile, isClientSmallMobile } =
		useApp();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isClientMediumMobile || isClientMobile || isClientSmallMobile);
	}, [isClientMediumMobile, isClientMobile, isClientSmallMobile]);

	const isClient = useIsClient();
	useDebugValue(isMobile);

	const isRequestsPage = useMemo(() => {
		return usePathname() === "/solicitacoes";
	}, [usePathname]);

	if (!isMobile && isClient) {
		return <NoMobileDevice />;
	}

	return (
		<FlexContainer
			backgroundColor={isRequestsPage ? "#E2F3D5" : "#F5F5F5"}
			full={true}>
			{children}{" "}
			<NavigationBar
				color={isRequestsPage ? "#D8FFB9" : "#F8FCF6"}
        highlightTextColor={isRequestsPage ? "#4D7D28" : "#7AC143"} 
				options={navigationOptions}
			/>
		</FlexContainer>
	);
}
