import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://olivia-simmons.vercel.app",
      lastModified: new Date()
    }
  ];
}
