<template>
	<div class="flex flex-wrap mt-2">
		<div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
			<div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
				<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
			</div>
		</div>
	</div>
</template>