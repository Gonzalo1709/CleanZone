/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "czwebpageresources.s3.amazonaws.com",
        pathname: "**",
      },
    ],
  },
  // reactStrictMode: true,
  // env: {
  //   CURRENT_BRANCH: process.env.CURRENT_BRANCH,
  // }
};

export default nextConfig;
