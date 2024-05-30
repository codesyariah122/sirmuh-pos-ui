<template>
	<div>
		<ol class="relative border-s border-gray-200 dark:border-gray-700">                  
			<li v-for="(item, idx) in items" class="ms-6 mb-6">
				<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
					<img v-if="item.photo" class="rounded-full shadow-lg" :src="item.photo" :alt="item.user"/>
				</span>
				<div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
					<time class="mb-1 text-md font-semibold text-gray-500 sm:order-last sm:mb-0">
						{{$moment(item.tanggal).fromNow()}}
					</time>
					<div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">
						{{item.keterangan}} <a :href="item.routes" class="px-4 font-semibold text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Check {{item.route_name}}</a> </div>
					</div>
				</li>
			</ol>
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