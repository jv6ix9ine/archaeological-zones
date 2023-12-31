/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
            // {
            //     source: '/panel',
            //     destination: '/home',
            //     permanent: true,
            // },
        ]
    },
    optimizeFonts: true,
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**.**.**',
                port: '',
                pathname:'/**'
            },
        ]
    }
}

module.exports = nextConfig
