// src/routes/index.js
import { defineConfig } from 'svelte-kit';
import About from './About.svelte';

export default defineConfig({
  kit: {
    // ... other kit configurations
    files: {
      routes: {
        About, // Explicitly include the About component
      },
    },
  },
});
