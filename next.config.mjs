/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Enables static expor
  // trailingSlash: true,
  images: {
    remotePatterns: [{ hostname: "api.dicebear.com" }],
  },
};

export default nextConfig;
