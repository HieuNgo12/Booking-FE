import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Đảm bảo rằng các yêu cầu đến /tours sẽ được chuyển tiếp đến http://localhost:5000
      '/tours': 'http://localhost:5000',
    },
  },
})
