import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

function devApiPlugin(): Plugin {
  return {
    name: 'dev-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/send-enquiry') {
          if (req.method === 'OPTIONS') {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.statusCode = 200;
            res.end();
            return;
          }

          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });
            req.on('end', async () => {
              try {
                dotenv.config({ override: true });
                // Dynamically load api/send-enquiry via Vite's ssrLoadModule
                const mod = await server.ssrLoadModule('/api/send-enquiry.ts');
                const handler = mod.default;

                const resWrapper = {
                  setHeader: (key: string, val: string) => res.setHeader(key, val),
                  status: (code: number) => {
                    res.statusCode = code;
                    return resWrapper;
                  },
                  json: (data: any) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  },
                  end: () => res.end(),
                };

                const reqWrapper = {
                  method: 'POST',
                  body: body,
                  headers: req.headers,
                };

                await handler(reqWrapper, resWrapper);
              } catch (err: any) {
                console.error('[Vite Dev API Error]:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: err.message || 'Internal dev server error' }));
              }
            });
            return;
          }

          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), devApiPlugin()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});

