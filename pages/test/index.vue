<template>
	<div class="container mx-auto px-4 py-36 h-full">
		<div class="flex content-center items-center justify-center h-full">
			<div class="w-full lg:w-4/12 px-4">
				<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0 h-auto">
					<div class="flex-auto px-4 lg:px-10 py-10 p-4">
						<h1>Testing login</h1>
					</div>
					<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
						<form class="max-w-sm mx-auto" @submit.prevent="loginTesting">
							<div class="mb-5">
								<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
								<input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" v-model="input.email" />
							</div>
							<div class="mb-5">
								<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
								<input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" v-model="input.password" />
							</div>
							<div class="flex items-start mb-5">
								<div class="flex items-center h-5">
									<input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
								</div>
								<label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
							</div>
							<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login </button>
						</form>

					</div>
				</div>
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
				input: {}
			}
		},

		methods: {
			loginTesting() {
				console.log(this.input)
			}
		}
	}
</script>