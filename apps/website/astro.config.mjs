// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            yaml(),
        ],
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'nl'],
        routing: {
            prefixDefaultLocale: false, // English pages won't have /en/, Dutch will have /nl/
        },
    },
});
