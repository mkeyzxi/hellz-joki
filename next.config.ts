import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // <-- Tambahkan ini agar tidak error saat build gambar statis
  },
}

export default nextConfig
