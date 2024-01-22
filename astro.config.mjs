import {defineConfig} from 'astro/config'
import {getRawFonts} from './src/utils/getRawFonts'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import expressiveCode from 'astro-expressive-code'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://reactjs.tips',
  integrations: [
    tailwind(),
    expressiveCode({
      themes: ['github-dark']
    }),
    mdx(),
    icon(),
    sitemap()
  ],
  vite: {
    plugins: [getRawFonts(['.ttf'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
})
