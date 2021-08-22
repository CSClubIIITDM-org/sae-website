import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';
import { windi } from 'svelte-windicss-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [windi({})],

  kit: {
    target: '#svelte',
    adapter: staticAdapter(),

    vite: {
      plugins: [windi({})],
    },
  },
};

export default config;
