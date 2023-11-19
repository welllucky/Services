"use client";

import { NoMobileDevice } from "@/screens/NoMobileDevice";
import { useApp } from "@/utils";
import { ReactNode, useDebugValue, useEffect, useState } from "react";
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

	if (!isMobile && isClient) {
		return <NoMobileDevice />;
	}

	return <div>{children}</div>;
}
