import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
// import mkcert from 'vite-plugin-mkcert';


export default defineConfig({
  plugins: [sveltekit()],
	ssr: {
		noExternal: ['three']
	},
	server: {
        proxy: {}
    },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
});
