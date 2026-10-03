/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // CONFIRM: photography is currently loaded from the client's existing site host.
      // Before launch, replace with high-resolution originals saved in /public/images.
      { protocol: "https", hostname: "img1.wsimg.com" },
    ],
  },
  poweredByHeader: false,
};
export default nextConfig;
