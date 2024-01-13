/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      }
     
    ]
  },
   env: {
        MONGODB_URI:"mongodb+srv://haroonulhassan1:3770@cluster1.qgoqwti.mongodb.net/evantaa"
      },
  
}


