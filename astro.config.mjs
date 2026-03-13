// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  collections: {
    landings: {
      type: 'content',
      schema: {
        slug: ({ z }) => z.string(),
        company: ({ z }) => z.string(),
        headline: ({ z }) => z.string(),
        subtitle: ({ z }) => z.string(),
        cta: ({ z }) => z.string(),
        // Add other fields as needed for your landing page content
      },
    },
  },
});
