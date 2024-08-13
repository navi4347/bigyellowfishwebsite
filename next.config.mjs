/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'stalwartint.com', 'wordpress.bigyellowfish.io', 'secure.gravatar.com'],
  },
  async redirects() {
    return [
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms.html',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/bigyellow-client-terms.html',
        destination: '/bigyellow-client-terms',
        permanent: true,
      },
      {
        source: '/bigyellow-privacy-policy.html',
        destination: '/bigyellow-privacy-policy',
        permanent: true,
      },
      {
        source: '/bigyellow-terms.html',
        destination: '/bigyellow-terms',
        permanent: true,
      },
      {
        source: '/client-terms.html',
        destination: '/client-terms',
        permanent: true,
      },
      {
        source: '/sayflex-client-terms.html',
        destination: '/sayflex-client-terms',
        permanent: true,
      },
      {
        source: '/sayflex-privacy-policy.html',
        destination: '/sayflex-privacy-policy',
        permanent: true,
      },
      {
        source: '/sayflex-terms.html',
        destination: '/sayflex-terms',
        permanent: true,
      },
      {
        source: '/yb-client-terms.html',
        destination: '/yb-client-terms',
        permanent: true,
      },
      {
        source: '/yb-privacy-policy.html',
        destination: '/yb-privacy-policy',
        permanent: true,
      },
      {
        source: '/yb-terms.html',
        destination: '/yb-terms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
