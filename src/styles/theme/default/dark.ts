import { ThemeProps } from "@/types";

const darkTheme: ThemeProps = {
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
			5: "#47494D",
			15: "#3E4144",
			25: "#36383B",
			35: "#2E2F32",
			45: "#252728",
			55: "#1D1E1F",
			65: "#151617",
			75: "#0C0D0E",
			85: "#040405",

			default: "#040405",
			inverted: "#F6F7F7",
			opacity: "rgba(0,0,0, 0.8)",
		},
		red: {
			5: "#BE0F2C",
			15: "#AA0E27",
			25: "#960C23",
			35: "#820A1E",
			45: "#6E0919",
			55: "#5A0715",
			65: "#460610",
			75: "#1E0207",
			85: "#040405",
			95: "#0A0102",

			default: "#E71C35",
		},
		green: {
			5: "#74B740",
			15: "#68A439",
			25: "#5A8F19",
			35: "#4F7D2C",
			45: "#436A25",
			55: "#37571E",
			65: "#2B4417",
			75: "#1F3011",
			85: "#121D0A",
			95: "#060A03",

			default: "#7AC143",
		},
		parGreen: {
			5: "#B7CD2D",
			15: "#A4B828",
			25: "#91A223",
			35: "#7D8C1F",
			45: "#6A771A",
			55: "#576115",
			65: "#444C10",
			75: "#30360C",
			85: "#1D2007",
			95: "#0A0B02",

			default: "#C1D82F",
		},
	},
};

export { darkTheme };
