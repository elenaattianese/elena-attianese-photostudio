/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true   // ci evita il loader esterno per ora
  }
}
module.exports = nextConfig