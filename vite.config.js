import { defineConfig } from 'vite'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "static",
  base: './',
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './static')
    },
  },
  build: {
    commonjsOptions: {
      esmExternals: true
    }
  }
})