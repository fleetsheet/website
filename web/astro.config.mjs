// @ts-check
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField, fontProviders } from 'astro/config'

export default defineConfig({
  adapter: vercel({
    middlewareMode: 'edge',
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'never',
  env: {
    schema: {
      WEBSITE_URL: envField.string({
        context: 'client',
        access: 'public',
      }),
      VERCEL_ENV: envField.enum({
        values: ['production', 'preview', 'development'],
        context: 'server',
        access: 'public',
      }),
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Sora',
      cssVariable: '--font-sora',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Sora-Variable.woff2'],
            weight: '100 800',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Hanken Grotesk',
      cssVariable: '--font-hanken-grotesk',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/HankenGrotesk-Variable.woff2'],
            weight: '100 900',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/HankenGrotesk-Italic-Variable.woff2'],
            weight: '100 900',
            style: 'italic',
          },
        ],
      },
    },
  ],
})
