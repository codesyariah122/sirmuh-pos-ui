<template>
	<div>
		<div class="flex justify-center items-center mt-4">
			<div class="text-center">
				<h4 class="font-bold text-blueGray-700">Ooopps!!!</h4>
				<blockquote class="font-semibold text-pink-600">
					Koneksi internet sedang buruk !!
				</blockquote>
			</div>
		</div>		
		<div class="flex justify-center items-center mt-4">
			<div class="text-center">
				<img :src="require('~/assets/img/engineer.jpg')" class="w-60 mx-auto">
			</div>
		</div>

		<div class="flex justify-center items-center mt-6">
			<div>	
				<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
					<li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
							<svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
							</svg>
							Speed : {{this.$nuxt.internet.speed}} Kbps
						</span>
					</li>
					<li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
						<span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
							<svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
							</svg>
							Time : {{this.$nuxt.internet.time_taken}}ms
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "errors-index",
		layout: "admin",
	};
</script>
