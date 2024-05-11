/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  generateBuildId: async () => {
    return `build-id-${new Date()}`
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production'
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP']
  },
  // logging: {
  //   fetches: {
  //     fullUrl: true
  //   }
  // },
  optimizeFonts: true,
  env: {
    NEXT_PUBLIC_APIS_BASE_URL: process.env.NEXT_PUBLIC_APIS_BASE_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  }
}

const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: false,
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
  sw: 'sw.js',
  reloadOnOnline: true
})

module.exports = withPWA(nextConfig)
