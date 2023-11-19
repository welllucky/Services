import { ThemeProps } from "@/types";

const lightTheme: ThemeProps = {
	media: {
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
	},

	colors: {
		neutral: {
			5: "#4F5256",
			15: "#5C5E62",
			25: "#6D6F73",
			35: "#8F9194",
			45: "#A0A2A4",
			55: "#B2B3B5",
			65: "#C3C4C5",
			75: "#D4D5D6",
			85: "#E5E6E6",
			95: "#F6F7F7",

			default: "#F6F7F7",
			inverted: "#040405",
			opacity: "rgba(0,0,0, 0.8)",
		},
		red: {
			5: "#E8273F",
			15: "#EB3E53",
			25: "#ED5568",
			35: "#EF6B7C",
			45: "#F28290",
			55: "#F499A4",
			65: "#F7B0B8",
			75: "#F9C6CD",
			85: "#FBDDE1",
			95: "#FEF4F5",

			default: "#E71C35",
		},
		green: {
			5: "#81C44C",
			15: "#8ECA5F",
			25: "#9BD172",
			35: "#A9D785",
			45: "#B6DD98",
			55: "#C3E3AA",
			65: "#D0E9BD",
			75: "#DEF0D0",
			85: "#EBF6E3",
			95: "#F8FCF6",

			default: "#7AC143",
		},
		parGreen: {
			5: "#C4DA39",
			15: "#CADE4E",
			25: "#D1E263",
			35: "#D7E678",
			45: "#DDEA8D",
			55: "#E3EDA1",
			65: "#E9F1B6",
			75: "#F0F5CB",
			85: "#F6F9E0",
			95: "#FCFDF5",

			default: "#C1D82F",
		},
	},
};

export { lightTheme };
