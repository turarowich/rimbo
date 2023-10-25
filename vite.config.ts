import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import sassDts from 'vite-plugin-sass-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), sassDts()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      styles: '/src/styles',
      pages: '/src/pages',
      core: '/src/core',
      ui: '/src/ui',
      providers: '/src/providers',
      hooks: '/src/hooks'
    }
  }
})
