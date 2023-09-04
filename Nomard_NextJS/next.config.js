/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/contact",
        destination:"https://naver.com",
        permanent:false
      }
    ]
  }
}

module.exports = nextConfig
