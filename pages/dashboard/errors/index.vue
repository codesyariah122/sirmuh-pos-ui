<template>
	<div>
	<div class="flex justify-center items-center mt-12">
		<div>
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
	</div>
</template>

<script>
	export default {
		name: "errors-index",
		layout: "admin",
	};
</script>
