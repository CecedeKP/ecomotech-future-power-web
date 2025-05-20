import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  base: mode === 'production' ? '/ecomotech-future-power-web/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          'vendor-utils': ['framer-motion', 'lucide-react', '@emailjs/browser'],
          // Split page chunks
          'page-home': ['./src/pages/Index.tsx'],
          'page-contact': ['./src/pages/Contact.tsx'],
          // Split component chunks
          'components-ui': [
            './src/components/ui/button.tsx',
            './src/components/ui/dialog.tsx',
            './src/components/ui/input.tsx',
            './src/components/ui/textarea.tsx',
            './src/components/ui/success-dialog.tsx',
          ],
          'components-layout': [
            './src/components/Navbar.tsx',
            './src/components/Footer.tsx',
          ],
        },
        // Optimize chunk size
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Increase chunk size warning limit if needed
    chunkSizeWarningLimit: 600,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})); 