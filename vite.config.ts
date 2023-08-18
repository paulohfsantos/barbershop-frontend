import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default ({ mode }: { mode: string }) => {
  const config = {
    plugins: [
      vue(),
    ],
    define: {
      'process.env': {
        BASE_URL: process.env.VITE_API_BASE_URL
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
  }

  return defineConfig(config)
}
