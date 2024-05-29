<template>
	<div class="container mx-auto px-4 py-36 h-full">
		<div class="flex content-center items-center justify-center h-full">
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'test',
		layout: 'default',
		data() {
			return {
				string: '',
				lists: [
					{account: '123', amount: 500000},
					{account: '321', amount: 1000000}
					]
			}
		},

		methods: {
			
		},

		computed: {
			amounts() {
				this.lists.reduce((n, item) => {
					return n + item.amount
				})
			}
		}
	}
</script>