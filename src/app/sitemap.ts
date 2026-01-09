import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  return [
    {
      url: "https://nelvo.co/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://nelvo.co/en",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://nelvo.co/features",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nelvo.co/en/features",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nelvo.co/pricing",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nelvo.co/en/pricing",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nelvo.co/use-cases",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nelvo.co/en/use-cases",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://nelvo.co/integrations",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
        {
          url: "https://nelvo.co/en/integrations",
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.8,
        },
        {
          url: "https://nelvo.co/faq",
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.7,
        },
        {
          url: "https://nelvo.co/en/faq",
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.7,
        },
        {
          url: "https://nelvo.co/status",
          lastModified: now,
          changeFrequency: "daily",
          priority: 0.6,
        },
        {
          url: "https://nelvo.co/en/status",
          lastModified: now,
          changeFrequency: "daily",
          priority: 0.6,
        },
        {
          url: "https://nelvo.co/privacy-policy",
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.5,
        },
        {
          url: "https://nelvo.co/en/privacy-policy",
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.5,
        },
        {
          url: "https://nelvo.co/terms",
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.5,
        },
        {
          url: "https://nelvo.co/en/terms",
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.5,
        },
      ];
    }
