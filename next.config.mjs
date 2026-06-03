/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 requires every quality used in <Image quality={…} /> to be
    // declared here. Hero uses 95 for the product screenshot; 75 is the
    // built-in default kept for everything else.
    qualities: [75, 95],
  },
};
export default nextConfig;
