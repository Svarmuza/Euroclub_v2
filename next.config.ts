import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            { source: '/about', destination: '/hr/o-nama', permanent: true },
            { source: '/programi', destination: '/hr/programi', permanent: true },
            { source: '/cijene', destination: '/hr/cijene', permanent: true },
            { source: '/najcesca-pitanja', destination: '/hr/najcesca-pitanja', permanent: true },
            { source: '/junior-camp', destination: '/hr/junior-programi', permanent: true },
            { source: '/teen-program', destination: '/hr/teen-programi', permanent: true },
            { source: '/en/euroclub-prices', destination: '/en/prices', permanent: true }
        ];
    }
};

export default withNextIntl(nextConfig);
