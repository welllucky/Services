import { ReactNode, createContext, useContext, useMemo } from "react";
import { useMediaQuery } from "usehooks-ts";

interface AppContextProps {
	isClientSmallMobile: boolean;
	isClientMediumMobile: boolean;
	isClientMobile: boolean;
	isClientDesktop: boolean;
	isClientTablet: boolean;
	isClientLaptop: boolean;
	isClientTV: boolean;
}

interface AppProviderProps {
	children: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

export const AppProvider = ({ children }: AppProviderProps) => {
	const isClientSmallMobile = useMediaQuery("(max-width: 320px)");
	const isClientMediumMobile = useMediaQuery("(max-width: 375px)");
	const isClientMobile = useMediaQuery("(max-width: 430px) ");
	const isClientTablet = useMediaQuery("(max-width: 768px)");
	const isClientLaptop = useMediaQuery("(max-width: 1024px)");
	const isClientDesktop = useMediaQuery("(max-width: 1440px)");
	const isClientTV = useMediaQuery("(max-width: 2560px)");

	const AppContextValue = useMemo(() => {
		return {
			isClientSmallMobile,
			isClientMediumMobile,
			isClientMobile,
			isClientDesktop,
			isClientTablet,
			isClientLaptop,
			isClientTV,
		};
	}, [
		isClientSmallMobile,
		isClientMediumMobile,
		isClientMobile,
		isClientDesktop,
		isClientTablet,
		isClientLaptop,
		isClientTV,
	]);

	return (
		<AppContext.Provider value={AppContextValue}>
			{children}
		</AppContext.Provider>
	);
};

export const useApp = (): AppContextProps => {
	const context = useContext(AppContext);
	if (!context) throw new Error("useApp must be used within an AppProvider");
	return context;
};
