/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.wav$/,
      type: "asset/resource", // Tells webpack to output the file as a resource
    })
    return config
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
}

export default nextConfig
