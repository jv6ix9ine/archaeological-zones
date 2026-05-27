

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
    // optimizeFonts: true,
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

export default nextConfig
