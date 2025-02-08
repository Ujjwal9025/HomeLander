import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // Use import.meta.url instead of process.cwd()

  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_ENDPOINT,
          secure: false,
        },
      },
    },
    plugins: [react()],
  };
});
