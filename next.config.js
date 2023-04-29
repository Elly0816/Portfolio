/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['tailwindui.com', 'images.unsplash.com'],
    }
}

module.exports = nextConfig