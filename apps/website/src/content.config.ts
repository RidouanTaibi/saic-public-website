import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    layout: z.string().optional(),
  }),
});

export const collections = { docs };