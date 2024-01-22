import { z, defineCollection } from "astro:content";

const article = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    date: z.date(),
    ogImage: z.string(),
    coverImage: image(),
    coverImageDescription: z.string(),
    keywords: z.array(z.string())
  })
})

export const collections = { article }
