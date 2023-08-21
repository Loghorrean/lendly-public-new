/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.lendix.site",
                port: "",
                pathname: "/image/**",
            },
            {
                protocol: "https",
                hostname: "cdn.lendly.ru",
                port: "",
                pathname: "/image/**",
            },
        ],
    },
}

module.exports = nextConfig
