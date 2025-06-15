/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: 'http://localhost:7070/api/v1/',
        WEB_URL: 'http://localhost:3000/',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/videotube22/image/upload/**',
            },
        ]
    }
};

export default nextConfig;
