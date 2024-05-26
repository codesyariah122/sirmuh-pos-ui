import Echo from "laravel-echo";

window.Pusher = require("pusher-js");

console.log("Pusher Key:", process.env.NUXT_ENV_PUSHER_KEY);
console.log("Pusher Cluster:", process.env.NUXT_ENV_PUSHER_CLUSTER);

window.Echo = new Echo({
  broadcaster: "pusher",
  key: process.env.NUXT_ENV_PUSHER_KEY,
  cluster: process.env.NUXT_ENV_PUSHER_CLUSTER,
  useTLS: true,
  wsHost: 'ws-ap1.pusher.com',
  wsPort: 80,
  wssPort: 443,
  disableStats: true,
  enabledTransports: ['ws', 'wss']
});