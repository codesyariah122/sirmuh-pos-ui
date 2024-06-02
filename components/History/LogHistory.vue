<template>
	<div>
		<ol v-if="items.length > 0" class="relative border-s border-gray-200">          
			<li v-for="(item, idx) in items" class="ms-6 mb-6">
				<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
					<img v-if="item.photo" class="rounded-full shadow-lg" :src="item.photo" :alt="item.user"/>
				</span>
				<div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex">
					<time class="mb-1 text-md font-semibold text-gray-500 sm:order-last sm:mb-0">
						{{$moment(item.tanggal).fromNow()}}
					</time>
					<div class="text-sm font-normal text-gray-500">
						{{item.keterangan}} <a :href="item.routes" class="px-4 font-semibold text-blue-600 hover:underline cursor-pointer">Check {{item.route_name}}</a> </div>
					</div>
				</li>
			</ol>

			<div v-else class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50" role="alert">
				<svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
				</svg>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium">Warning alert!</span> Belum ada aktifitas apapun 😴😪🥱💤🛌🏼.
				</div>
			</div>
		</div>
	</template>


	<script>
		export default {
			props: {
				items: {
					type: [Array]
				}
			},

			computed: {
				vectorImg() {
					return require('~/assets/img/vue.jpg')
				}
			}
		}
	</script>