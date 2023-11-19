type ThemeKey = {
	[key: string]: string;
};

type ThemeModule = {
	[key: string]: ThemeKey[];
};

type ThemeSection = {
	[key: string]: ThemeModule[];
};

type ThemeProps = {
	media: {
		mobileS: string;
		mobileM: string;
		mobileL: string;
		mobileXL: string;
		tabletS: string;
		tablet: string;
		laptop: string;
		laptopL: string;
		desktopS: string;
		desktop: string;
	};
	colors: {
		neutral: {
			[key: string]: string;
			default: string;
			inverted: string;
			opacity: string;
		};
		red: {
			[key: string]: string;
			default: string;
		};
		green: {
			[key: string]: string;
			default: string;
		};
		parGreen: {
			[key: string]: string;
			default: string;
		};
	};
};

export type { ThemeProps };
