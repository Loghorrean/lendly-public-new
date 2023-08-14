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
        ],
    },
}

module.exports = nextConfig
