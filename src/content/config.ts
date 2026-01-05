import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    coverImage: z.string().optional(),
    emojiCover: z.string().optional(),
    gradientFrom: z.string().optional(),
    gradientTo: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('WhatStats Team'),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
