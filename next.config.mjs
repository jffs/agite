/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Oculta el botón flotante del logo / Dev Tools en desarrollo */
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
