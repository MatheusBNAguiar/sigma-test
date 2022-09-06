import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
  fileServerFolder: 'dist',
  fixturesFolder: false,
  e2e: {
    baseUrl: 'http://localhost:8080/',
    setupNodeEvents(on) {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      on('file:preprocessor', vitePreprocessor(path.resolve(__dirname, './vite.config.ts')));
    },
  },
});
