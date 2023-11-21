/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    assetPrefix: isProd ? '/Infinite/' : undefined,
    output: 'export',
}

module.exports = nextConfig

