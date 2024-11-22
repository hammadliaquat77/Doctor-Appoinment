/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
            },
            {
                protocol: 'https',
                hostname: 'facebook.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
            },
            // {
            //     hostname: 'https://lh3.googleusercontent.com/a/ACg8ocLxuaG1y5CDi80jAKursn4Z10eG04kPFWSNCKXljtH-2V1VLf4=s96-c'
            // }
    ]
    }
};

export default nextConfig;
