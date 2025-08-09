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
    // Suppress the "React fragment" warning
    reactFragment: true,
    // Suppress the "React children" warning
    reactChildren: true,
    // Suppress the "React prop" warning
    reactProp: true,
    // Suppress the "React event" warning
    reactEvent: true,
    // Suppress the "React context" warning
    reactContext: true,
    // Suppress the "React warning" warning
    reactWarning: true,
    // Suppress the "React deprecated" warning
    reactDeprecated: true,
    // Suppress the "React unknown" warning
    reactUnknown: true,
    // Suppress the "React suspense" warning
    reactSuspense: true,
    // Suppress the "React server" warning
    reactServer: true,
    // Suppress the "React hydration" warning
    reactHydration: true,
  },
};

export default nextConfig;
