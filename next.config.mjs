import { join } from "path";
import createMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,

  // Experimental optimizations
  experimental: {
    inlineCss: true, // Inline CSS into HTML to eliminate render-blocking stylesheet requests
    optimizePackageImports: [
      "framer-motion",
      "motion",
      "@radix-ui/react-icons",
      "lucide-react",
      "react-icons",
      "@icons-pack/react-simple-icons",
    ], // Tree-shake unused exports
    webpackBuildWorker: true, // Faster builds with workers
  },

  // Webpack optimizations for bundle size
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Remove Next.js hardcoded polyfills (Array.at, Array.flat, Object.fromEntries, etc.)
      // These are unnecessary — browserslist targets Chrome 109+, Safari 17+, Firefox 115+
      // which natively support all polyfilled features including URL.canParse.
      config.resolve.alias = {
        ...config.resolve.alias,
        // Alias both polyfill entry points to false (empty module)
        'next/dist/build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-nomodule': false,
      };

      // Replace any remaining polyfill imports with empty modules via NormalModuleReplacementPlugin.
      // This catches polyfills that slip through the alias (e.g., resolved via different paths).
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /next[\\/]dist[\\/]build[\\/]polyfills/,
          (resource) => {
            resource.request = join(process.cwd(), 'lib/empty-module.js');
          }
        )
      );

      // Remove the hardcoded polyfill-nomodule CopyFilePlugin.
      // Next.js unconditionally bundles a 68 KiB polyfill-nomodule chunk via CopyFilePlugin
      // regardless of browserslist. Filter it out since our targets don't need it.
      config.plugins = config.plugins.filter((plugin) => {
        if (plugin.constructor.name === 'CopyFilePlugin' && plugin.filePath) {
          return !plugin.filePath.includes('polyfill-nomodule');
        }
        return true;
      });

      // Merge splitChunks with Next.js defaults instead of replacing them
      const existingSplitChunks = config.optimization.splitChunks || {};
      config.optimization.splitChunks = {
        ...existingSplitChunks,
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 128000, // More aggressive splitting for faster parse on mobile
        cacheGroups: {
          ...(existingSplitChunks.cacheGroups || {}),
          // React & React-DOM in separate chunk
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: "react",
            priority: 40,
            reuseExistingChunk: true,
          },
          // Separate framer-motion into its own chunk
          framerMotion: {
            test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
            name: "framer-motion",
            priority: 30,
            reuseExistingChunk: true,
          },
          // Separate other UI libraries
          uiLibs: {
            test: /[\\/]node_modules[\\/](@radix-ui|lucide-react|react-icons)[\\/]/,
            name: "ui-libs",
            priority: 20,
            reuseExistingChunk: true,
          },
        },
      };

      config.optimization.moduleIds = 'deterministic';

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
    // MUST be true for static export (output: "export")
    // GitHub Pages doesn't support dynamic image optimization
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Loader for static export - generates proper srcset
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
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

export default withBundleAnalyzer(withMDX(nextConfig));
