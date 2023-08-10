import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default ({ mode }: { mode: string }) => {
  const config = {
    plugins: [
      vue(),
    ],
    define: {
      'process.env': {
        // NODE_ENV: process.env.NODE_ENV,
        API_URL: process.env.VITE_API_URL,
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
