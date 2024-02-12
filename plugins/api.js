/**
 *
 * @param  props
 * @returns Inject
 * @author Puji Ermanto <puji.ermanto@gmail.com>
 */

export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create();
  const api_url = process.env.NUXT_ENV_API_URL;
  // api.interceptors.request.use(config => {
  //   delete config.url;
  //   return config;
  // });

  // Set baseURL to something different
  api.setBaseURL(api_url);
  api.defaults.headers.common["Accept"] = "application/json";
  api.defaults.headers.common["Content-Type"] = "application/json";
  api.defaults.headers.common["Sirmuh-Key"] = process.env.NUXT_ENV_APP_TOKEN;

  // Inject to context as $api
  inject("api", api);
}
