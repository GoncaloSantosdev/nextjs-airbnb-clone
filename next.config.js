/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com']
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiZ29uY2Fsb3NhbnRvczAxIiwiYSI6ImNsYXg3eGc4NDA3MjIzcG05ZXFicmc1aTYifQ.jPgeW7IJoEvqrBwsWGcjrw'
  },
  reactStrictMode: true,
}

module.exports = nextConfig
