<template>
	<div>
		<tabs
        :options="{
          useUrlFragment: false,
          defaultTabHash: 1,
        }"
        >
          <tab
            v-for="item in items"
            :key="item.id"
            :name="`${item.nama_barang} (${item.kode_barang})`"
            :id="item.id"
          >
          	<div v-if="item.return === 'True'" class="flex justify-center">
          		<div>
            		<div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            			<svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            			</svg>
            			<span class="sr-only">Info</span>
            			<div>
            				<span class="font-medium">{{item.kode}}!</span> Sudah {{detail.return !== null ? "Di Return" : "dilakukan Return"}}.
            			</div>
            		</div>
            	</div>
          	</div>
            <div class="flex justify-start items-center overflow-x-auto">
            	<div>
            		<div
            			v-if="success"
            			ref="alertNotifs"
		            	class="flex justify-center w-full bg-transparent mt-36"
		            	>
		            		<molecules-success-alert
		            		:success="success"
		            		:messageAlert="messageAlert"
		            		@close-alert="closeSuccessAlert"
		            		/>
		            	</div>

		            	<div v-if="success" class="flex justify-center bg-transparent mt-2 mb-2">
		            		<button
		            		@click="backTo"
		            		type="button"
		            		class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
		            		>
		            		Check Data Pembelian
		            	</button>
		            </div>
            	</div>
              <div>
                <div class="relative w-screen overflow-x-auto shadow-sm sm:rounded-lg">
                	<form @submit.prevent="returnPenjualan" class="max-w-lg">
                		<div class="mb-0">
                			<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Transaksi</label>
                			<datepicker v-if="item.return === 'True'"
                			disabled
                			v-model="detail.tanggal_return"
                			:config="datePickerConfig"
                			@input="handleTanggalPenjualan($event)"
                			:placeholder="detail.tanggal_return"
                			:format="dateFormat"
                			:style="{ width: '100%', height: '10vh' }"
                			></datepicker>

                			<datepicker v-else
                			v-model="item.tanggal"
                			:config="datePickerConfig"
                			@input="handleTanggalPenjualan($event)"
                			:placeholder="detail.tanggal"
                			:format="dateFormat"
                			:style="{ width: '100%', height: '10vh' }"
                			></datepicker>
                		</div>

                		<div class="mb-2">
                			<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kas</label>
                			<input v-model="detail.kas_nama" disabled type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                		</div>

                		<div class="mb-2">
                			<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pelanggan</label>
                			<input v-model="detail.pelanggan" disabled type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                		</div>

                		<div class="mb-2">
                			<div class="flex justify-start mb-2 mt-4">
                				<div>
                					<div class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                						<i class="fa-solid fa-circle-info"></i>
                						<div>
                							<span class="font-medium">Warning alert!</span> Ubah nilai QTY terlebih dahulu sebelum melanjutkan return penjualan.
                						</div>
                					</div>
                				</div>
                			</div>
                			<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                			<div class="flex justify-start space-x-4">
                				<div v-if="item.return === 'True'">
                					<span> {{detail.qty}} </span>
                				</div>
                				<div v-else>
                					<input v-model="item.qty" :max="item.qty" type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @input="changeGantiItemQty($event, item.id, item)" @focus="setInitialQty(item)"/>
                				</div>
                				<div>
                					{{item.satuan}}
                				</div>
                			</div>
                		</div>

                		<div class="mb-2">
                			<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga Satuan</label>
                			<input v-if="item.return === 'True'" v-model="detail.harga" disabled type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                			<input v-else v-model="item.harga" disabled type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                		</div>

                		<div class="mb-2">
                			<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subtotal</label>
                			<input v-if="item.return === 'True'" v-model="detail.jumlah_return" disabled type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                			<input v-else v-model="item.subtotal" disabled type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                		</div>

                		<div class="mb-2">
                			<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alasan</label>
                			  <textarea v-if="item.return === 'True'" disabled id="message" @input="handleInputAlasan($event, item.id)" v-model="detail.alasan" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                			  <textarea v-else id="message" @input="handleInputAlasan($event, item.id)" v-model="input.alasan" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
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
                			<button v-if="item.return !== 'True'" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                				<i class="fa-solid fa-arrows-rotate"></i> Return Penjualan
                			</span>
                			</button>
                		</div>
                	</form>
                </div>
              </div>
            </div>
          </tab>
        </tabs>
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
			},
			items: {
				type: Array
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
				initialItemQty: null,
				editingItemQtyId: null,
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
			this.items.map(item => {
				if(this.detail.po === "True" && item.stop_qty === "False") {
					this.$swal({
						icon: "error",
						title: "Oops...",
						text: "Item P.O Belum diterima",
					});
					setTimeout(() => {
						this.$router.go(-1)
					}, 1000)
				}
			})
		},

		methods: {
			handleTanggalPenjualan() {

			},

			closeSuccessAlert() {
				this.success = false;
				this.messageAlert = "";
			},

			handleInputAlasan(e, id) {
				this.editingItemQtyId = id;
				this.input.alasan = e.target.value
			},

			setInitialQty(item) {
				this.initialItemQty = item.qty
			},

			changeGantiItemQty(e, id, item) {
				const newQty = parseFloat(this.initialItemQty) - parseFloat(e.target.value);
				this.editingItemQtyId = item.id;
				item.subtotal = parseFloat(item.harga) * newQty;
				item.harga = parseFloat(item.harga);
				this.input.qty = newQty;
				this.input.qtyReturn = parseFloat(e.target.value);
				this.input.harga = item.harga;
				this.input.subtotal = item.subtotal;
			},

			returnPenjualan() {
				this.loadingReturn = true
				const prepareItem = {
					penjualan_id: this.detail.id,
					kas_id: this.detail.kas_id,
					item_id: this.editingItemQtyId,
					item_qty: this.input.qty,
					item_qty_return: this.input.qtyReturn,
					item_harga: this.input.harga,
					item_subtotal: this.input.subtotal,
					alasan: this.input.alasan
				}

				const endPoint = `/data-return-penjualan`

				const config = {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						Authorization: `Bearer ${this.token.token}`,
					},
				}


				console.log(prepareItem)


				this.$api
				.post(endPoint, prepareItem, config)
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
              const path = "/dashboard/transaksi/return-penjualan";
              this.$router.push(path);
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