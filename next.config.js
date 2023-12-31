/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "",
	compiler: {
		styledComponents: true,
	},
	pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
	experimental: {
		webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB", "INP"],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	optimizeFonts: true,
	// redirects: async () => {
	// 	return [
	// 		{
	// 			source: "/",
	// 			destination: "/chamados",
	// 			permanent: false,
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
