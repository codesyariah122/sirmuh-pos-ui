<template>
	<div class="flex justify-start details-center overflow-x-auto">
		<div>
			<div class="relative w-screen overflow-x-auto shadow-sm sm:rounded-lg">
				<form @submit.prevent="returnPembelian" class="max-w-lg">
					<div class="mb-0">
						<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Transaksi</label>

						<datepicker
						v-model="detail.tanggal"
						:config="datePickerConfig"
						@input="handleTanggalPenjualan($event)"
						:placeholder="detail.tanggal"
						:format="dateFormat"
						:style="{ width: '100%', height: '10vh' }"
						></datepicker>
					</div>

					<div class="mb-2">
						<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Faktur</label>
						<input v-model="detail.no_faktur" disabled type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					</div>

					<div class="mb-2">
						<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barang</label>
						<input v-model="detail.nama_barang" disabled type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					</div>

					<div class="mb-2">
						<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier</label>
						<input v-model="detail.supplier" disabled type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					</div>

					<div class="mb-2">
						<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kas</label>
						<input v-model="detail.nama_kas" disabled type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					</div>

					<div class="mb-2">
						<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
						<div class="flex justify-start space-x-4">
							<div class="shrink-0 w-80">
								<input v-model="detail.qty" :max="detail.qty" type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @input="changeGantidetailQty($event, detail.id, detail)" @focus="setInitialQty(detail)"/>
							</div>
							<div>
								{{detail.satuan}}
							</div>
						</div>
					</div>

					<div class="mb-2">
						<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga Satuan</label>
						<input v-model="detail.harga" disabled type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					</div>

					<div class="mb-2">
						<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subtotal</label>
						<input v-model="detail.jumlah" disabled type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
					</div>

					<div class="mb-2">
						<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alasan</label>
						<textarea id="message" @input="handleInputAlasan($event, detail.id)" v-model="detail.alasan" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
						<div
						v-if="validations?.alasan"
						class="mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
						role="alert"
						>
						<span class="font-medium">{{ validations?.alasan[0] }}</span>
					</div>
				</div>

				<div class="mb-2">
					<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Operator</label>
					<input v-model="detail.operator" disabled type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
				</div>

				<div class="mb-6 mt-6">
					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						<div v-if="loadingReturn">
							<svg
							aria-hidden="true"
							role="status"
							class="inline w-4 h-4 mr-3 text-white animate-spin"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							>
							<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="#E5E7EB"
							/>
							<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentColor"
							/>
						</svg>
						Loading...
					</div>
					<span v-else>
						<i class="fa-solid fa-arrows-rotate"></i> Kembalikan Barang
					</span>
				</button>
			</div>
		</form>
	</div>
</div>
</div>
</template>

<script>
	import Datepicker from "vue2-datepicker";
	import "vue2-datepicker/index.css";

	export default {
		props: {
			detail: {
				type: Object,
			default: function() {
				return {}
			}
		}
	},

	components: {
		Datepicker,
	},

	data() {
		return {
			loadingReturn: false,
			id: this.$route.params.id,
			kode: this.$route.query['faktur'],
			initialdetailQty: null,
			editingdetailQtyId: null,
			input: {
				qty: null,
				qtyReturn: null,
				harga_beli: null,
				subtotal: null,
				alasan: null
			},
			success: null,
			messageAlert: '',
			datePickerConfig: {
				range: false,
			},
			validations: [],
			dateFormat: "YYYY-MM-DD",
			api_url: process.env.NUXT_ENV_API_URL,
			api_token: process.env.NUXT_ENV_APP_TOKEN,
		}
	},

	beforeMount() {
		this.authTokenStorage();
	},

	mounted() {
		if(this.detail.kembali === "True") {
			this.$router.go(-1)
		}
	},

	methods: {
		handleTanggalPenjualan() {

		},

		closeSuccessAlert() {
			this.success = false;
			this.messageAlert = "";
		},

		handleInputAlasan(e, id) {
			this.editingdetailQtyId = id;
			this.input.alasan = e.target.value
		},

		setInitialQty(detail) {
			this.initialdetailQty = detail.qty
		},

		changeGantidetailQty(e, id, detail) {
			const newQty = parseFloat(this.initialdetailQty) - parseFloat(e.target.value);
			this.editingdetailQtyId = detail.id;
			detail.subtotal = parseFloat(detail.harga) * newQty;
			detail.harga_beli = parseFloat(detail.harga);
			this.input.qty = newQty;
			this.input.qtyReturn = parseFloat(e.target.value);
			this.input.harga_beli = detail.harga;
			this.input.subtotal = detail.subtotal;
		},

		returnPembelian() {
			this.loadingReturn = true
			const preparedetail = {
				pembelian_id: this.detail.id_pembelian,
				kas_id: this.detail.kas_id,
				kode_barang: this.detail.kode_barang,
				item_qty: this.detail.qty,
				item_hargabeli: this.detail.harga,
				item_subtotal: this.detail.jumlah,
				alasan: this.input.alasan !== null ? this.input.alasan : this.detail.alasan
			}

			const endPoint = `/data-return-penjualan/${preparedetail.pembelian_id}`

			const config = {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.token.token}`,
				},
			}

			console.log(preparedetail)

			this.$api
			.put(endPoint, preparedetail, config)
			.then(({data}) => {
				if(data.error) {
					this.$swal({
						icon: "error",
						title: "Oops...",
						text: data.message,
					});
					this.loadingReturn = false
				}

				if(data.success) {
					localStorage.setItem("cetak_code", JSON.stringify(data?.data));
					this.$swal({
						position: "top-end",
						icon: "success",
						title: data?.message,
						showConfirmButton: false,
						timer: 1500,
					});
					this.success = true;
					this.messageAlert = data?.message;

					this.$emit('rebuild-data', false);

					setTimeout(() => {
						this.loadingReturn = false;
						const path = "/dashboard/transaksi/return-pembelian/cetak";
						this.$router.push({
							path: path,
							query: {
								kode: data.data,
							},
						});
					}, 1500);
				}
			})
			.catch(err => {
				this.loadingReturn  = false
				this.validations = err.response.data
			})
		}
	},

	computed: {
		token() {
			return this.$store.getters["auth/getAuthToken"];
		},
	},
}
</script>