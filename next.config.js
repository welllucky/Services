/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "",
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
};

module.exports = nextConfig;
