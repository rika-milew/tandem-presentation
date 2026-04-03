import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        presentation1: 'team-presentation.html',
        presentation2: 'mentor-presentation.html',
      },
    },
  },
});