import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,

  // Exclude legacy polyfills for modern browsers (saves 14 KiB)
  // Targets Chrome 100+, Safari 15+, Firefox 100+ per browserslist
  excludeDefaultMomentLocales: true,
  swcMinify: true,

  // Experimental optimizations
  experimental: {
    optimizeCss: true, // Optimize CSS loading
    optimizePackageImports: [
      "framer-motion",
      "@radix-ui/react-icons",
      "lucide-react",
      "react-icons",
    ], // Tree-shake unused exports
    webpackBuildWorker: true, // Faster builds with workers
  },

  // Webpack optimizations for bundle size
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimize client-side bundle
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        minimize: true,
        moduleIds: 'deterministic', // Better long-term caching
        splitChunks: {
          chunks: "all",
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 244000, // Split large chunks (244KB gzipped ~= 1MB uncompressed)
          cacheGroups: {
            // React & React-DOM in separate chunk
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: "react",
              priority: 40,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Separate framer-motion into its own chunk
            framerMotion: {
              test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
              name: "framer-motion",
              priority: 30,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Separate other UI libraries
            uiLibs: {
              test: /[\\/]node_modules[\\/](@radix-ui|lucide-react|react-icons)[\\/]/,
              name: "ui-libs",
              priority: 20,
              reuseExistingChunk: true,
            },
            // Default vendor chunk
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendor",
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };

      // Reduce bundle size by excluding source maps in production
      if (config.mode === 'production') {
        config.devtool = false;
      }
    }
    return config;
  },

  // Performance optimizations for LCP
  poweredByHeader: false,
  generateEtags: true,

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    // Optimized device sizes for better responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  compress: true,
  productionBrowserSourceMaps: false,
  // Note: headers() and redirects() don't work with output: "export"
  // Cache headers are handled via public/_headers (Netlify/Cloudflare) and vercel.json (Vercel)
  // Redirects should be configured in the deployment platform settings
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      [
        "rehype-pretty-code",
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          keepBackground: true,
          defaultLang: "plaintext",
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
