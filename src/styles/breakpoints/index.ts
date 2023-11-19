const breakpoints = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	mobileXL: "480px",
	tabletS: "576px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktopS: "1980px",
	desktop: "2560px",
};

export type Breakpoints = typeof breakpoints;
breakpoints satisfies Breakpoints;
export { breakpoints };
