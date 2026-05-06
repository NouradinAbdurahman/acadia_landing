/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  /** Permanent HTTP redirect — same-origin, preserves cookies (e.g. theme). */
  async redirects() {
    return [
      { source: '/support', destination: '/contact', permanent: true },
      { source: '/support/', destination: '/contact', permanent: true },
    ]
  },
}

export default nextConfig
