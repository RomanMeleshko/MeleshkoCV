import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      components: "/src/components",
      directives: "/src/directives",
      models: "/src/models",
      store: "/src/store",
      assets: "/src/assets",
      scss: "/src/scss",
      views: "/src/views"
    }
  }
})
