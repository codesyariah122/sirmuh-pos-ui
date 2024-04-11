<template>
	<div>
		<div class="flex flex-wrap mt-12 px-6">
			<div class="w-full">
				<cards-card-detail-data
				color="light"
				:item="item"
				:timelines="[]"
				:headers="headers"
				title="pengeluaran"
				tables="off"
				timelineTitle="Detail Pengeluaran"
				timeTitle=""
				types="transaksi"
				cellType="pengeluaran"
				parentRoute="backoffice/pengeluaran"
				:stringRoute="stringRoute"
				:typeRoute="typeRoute"
				:loading="loadingDetail"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import { DETAIL_PEMBELIAN_LANGSUNG_TABLE } from "~/utils/table-detail-pembelian-langsung";
	import { getData } from "~/hooks/index";

	export default {
		name: "pengeluaran-detail",
		layout: "admin",

		data() {
			return {
				loadingDetail: null,
				options: "pembelian-langsung-detail",
				headers: [...DETAIL_PEMBELIAN_LANGSUNG_TABLE],
				query: this.$route.query["query"],
				id: this.$route.params.id,
				item: {},
				itempembelians: [],
				nama: "",
				routePath: this.$route.path,
				stringRoute: null,
				typeRoute: null,
			};
		},

		beforeMount() {
			this.$nuxt.authTokenStorage();
		},

		created() {
			this.$nuxt.checkNewData();
			this.getDetailPembelianLangsung(true);
			this.generatePath();
		},

		methods: {
			generatePath() {
				const pathSegments = this.routePath.split("/");
				const stringRoute = pathSegments[2];
				const typeRoute = pathSegments[3];
				this.stringRoute = stringRoute;
				this.typeRoute = typeRoute;
			},

			getDetailPembelianLangsung(loading) {
				this.loadingDetail = true
				this.$nuxt.globalLoadingMessage =
				"Proses menyiapkan detail  pembelian langsung ...";
				getData({
					api_url: `${this.api_url}/data-pengeluaran/${this.id}`,
					token: this.token.token,
					api_key: process.env.NUXT_ENV_APP_TOKEN,
				})
				.then((data) => {
					this.item = data.data;
					this.itempembelians = data.items;
					this.nama = "Pembelian Langsung";
				})
				.finally(() => {
					this.loadingDetail = false
				})
				.catch((err) => console.log(err));
			},
		},

		computed: {
			token() {
				return this.$store.getters["auth/getAuthToken"];
			},
		},

		watch: {
			notifs() {
				if (this.$_.size(this.notifs) > 0) {
					if (this.notifs[0].routes) {
						this.getDetailPembelianLangsung(false);
					}
				}
			},
		},
	};
</script>
