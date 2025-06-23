import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',  // Ensures relative paths for assets
  server: {
    https: true,
    open: true,
    host: true,  // Allow external devices like Oculus to access
    port: 3000,
  },
  plugins: [
    react(),
    mkcert(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        'assets/**/*', // Include all files from the assets folder
        'vite.svg',
        'react.svg',
      ],
      manifest: {
        name: 'Safety',
        short_name: 'AdaniVR',
        description: 'VR induction training modules',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,png,jpg,jpeg,svg,mp4,glb,mp3,hdr}', // Ensure all assets are included
        ],
        maximumFileSizeToCacheInBytes: 200 * 1024 * 1024,  // Cache limit of 200MB
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,  // Cache static assets from the same origin
            handler: 'StaleWhileRevalidate',  // Serve from cache first but update in the background
            options: {
              cacheName: 'asset-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 24 * 60 * 60,  // Cache for 60 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /assets\/.*\.(mp4|png|jpg|jpeg|svg|glb|mp3|hdr)$/,  // Cache large media assets from the public/assets folder
            handler: 'CacheFirst',  // Serve cached version first for large files
            options: {
              cacheName: 'asset-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 24 * 60 * 60,  // Cache for 60 days
              },
              cacheableResponse: {
                statuses: [0, 200, 206],  // Include 206 for partial video content
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,  // Cache Google Fonts
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 365 * 24 * 60 * 60,  // Cache for 1 year
              },
            },
          },
        ],
        navigateFallback: '/index.html',  // Fallback to index.html for SPA routing
        navigateFallbackDenylist: [/^\/api\//],  // Avoid caching API requests
      },
    }),
  ],
});
