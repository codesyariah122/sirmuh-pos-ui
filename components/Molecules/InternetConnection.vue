<template>
	<div v-if="showBanner" id="bottom-banner" tabindex="-1" class="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
		<div class="flex items-center mx-auto">
			<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
				<span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
					<i class="fa-solid fa-gauge-simple"></i>
				</span>
				<div>Trafik Koneksi Intertnet Anda <i v-if="internet.time_taken > 0" class="fa-regular text-emerald-600 fa-thumbs-up"></i> <i v-else class="fa-regular text-red-700 fa-thumbs-down"></i>
					<div class="flex items-center justify-between space-x-4 ms-0 text-sm font-medium text-blue-600 md:ms-1 md:inline-flex dark:text-blue-500 hover:underline">
						<div>
							Waktu download : {{internet && internet?.time_taken}}ms &nbsp; <i v-if="internet.time_taken > 0" class=" fa-solid text-emerald-600  fa-arrow-up-short-wide"></i> <i v-if="internet.taken <= 0" class="fa-solid text-red-700 fa-arrow-down-wide-short"></i> 
						</div>
						<div>
							Kecepatan : {{internet && internet?.speed}} Mbps &nbsp; <i v-if="internet.time_taken > 0" class="fa-solid text-emerald-600 fa-gauge-high"></i> <i v-if="internet.time_taken <= 0" class="fa-solid fa-gauge text-red-700"></i>
						</div>
					</div>
				</div>
			</p>
		</div>
		<div class="flex items-center">
			<button @click="hideBanner" data-dismiss-target="#bottom-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close banner</span>
			</button>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				showBanner: true,
				internet: {}
			}
		},

		beforeMount() {
			this.authTokenStorage();
		},

		mounted() {
			this.pingConnection()
		},

		methods: {
			hideBanner() {
				this.showBanner = false;
			},

			authTokenStorage() {
				this.$store.dispatch("auth/storeAuthToken", "auth");
			},

			pingConnection() {
				const pingServer = () => {
					const endPoint = `/ping-test`;
					const config = {
						headers: {
							Accept: "application/json",
							Authorization: `Bearer ${this?.token?.token}`,
						},
					};

					this.$api.defaults.headers.common["Sirmuh-Key"] = process.env.NUXT_ENV_APP_TOKEN;

					this.$api.get(endPoint, config)
					.then(({ data }) => {
						if (data.success) {
							this.internet = data;
							if (data.speed <= 0 || data.speed < 256) {
								console.log(`Speed : ${data.speed}`)
                        		// this.$router.push('/dashboard/errors');
							}
						}
					})
					.catch((err) => {
						console.log("Error Access " + err.message);
					})
					.finally(() => {
						setTimeout(pingServer, 5000); 
					});
				};

				pingServer();
			},
		},

		computed: {
			token() {
				return this.$store.getters["auth/getAuthToken"];
			},
		},
	}
</script>