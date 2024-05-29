<template>
	<div class="container mx-auto px-4 py-36 h-full">
		<div class="flex content-center items-center justify-center space-x-12 h-full">
			<div>
				<table class="border">
					<thead>
						<tr>
							<th>Account</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(list, idx) in lists">
							<td> {{list.account}} </td>
							<td class="text-right"> {{list.amount}} </td>
						</tr>
					</tbody>
				</table>
			</div>

			<div>
				<h2 class="font-semibold"> Total : {{$format(amounts)}} </h2>
			</div>
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
					{account: '4321', amount: 1000000}
					]
			}
		},

		methods: {},

		computed: {
			amounts() {
				return this.$_.reduce(this.lists, (n, item) => {
					return n + item.amount
				}, 0)
			}
		}
	}
</script>