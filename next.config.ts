import type { NextConfig } from "next";

/**
 * إعدادات Next.js
 * تكوين hostnames للصور الخارجية وتحسين الأداء
 */
const nextConfig: NextConfig = {
  // تكوين hostnames للصور الخارجية
  images: {
    // السماح بتحميل الصور من Unsplash
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "player.vimeo.com",
        port: "",
        pathname: "/**",
      },
    ],
    // تحسين جودة الصور
    formats: ["image/webp", "image/avif"],
    // تحسين الأداء
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // إعدادات إضافية للأداء
  compress: true,
  poweredByHeader: false,

  // إعدادات إضافية للبناء
  output: "standalone",
  trailingSlash: false,
};

export default nextConfig;
