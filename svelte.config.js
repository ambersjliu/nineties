import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// other configuration options...
	
		prerender: {
		  // other prerender options...
	
		  handleHttpError: ({ request, error }) => {
			// Log the error or handle it as needed
			console.error(`HTTP error for ${request.url}: ${error.message}`);
	
			// Return a response object with status 200 to ignore the error and continue building
			return {
			  status: 200,
			};
		  },
		},
		adapter : adapter()
	  },
};

export default config;
