import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'orderApp', // Name of the app
      filename: 'remoteEntry.js', // Remote entry file
      exposes: {
        './OrderComponent': './src/components/OrderComponent', // Expose a component
      },
      shared: ['react', 'react-dom'], // Shared dependencies
    })
  ],


 
});
