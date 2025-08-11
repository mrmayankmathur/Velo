/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // More comprehensive configuration to suppress various warnings
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Suppress hydration warnings more effectively
  compiler: {
    // Suppress the "Extra attributes from the server" warning
    reactRemoveProperties: true,
  },
};

export default nextConfig;
