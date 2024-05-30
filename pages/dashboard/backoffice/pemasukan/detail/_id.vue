<template>
	<div>
		<div class="flex flex-wrap mt-12 px-6">
			<div class="w-full">
				<cards-card-detail-data
				color="light"
				:item="item"
				:timelines="[]"
				:headers="headers"
				title="pemasukan"
				tables="off"
				timelineTitle="Detail Pemasukan"
				timeTitle=""
				types="transaksi"
				cellType="pemasukan"
				parentRoute="backoffice/pemasukan"
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
		name: "pemasukan-detail",
		layout: "admin",

		data() {
			return {
				loadingDetail: null,
				options: "pemasukan",
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
			this.getDetailPemasukan(true);
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

			getDetailPemasukan(loading) {
				this.loadingDetail = true
				this.$nuxt.globalLoadingMessage =
				"Proses menyiapkan detail  pemasukan ...";
				getData({
					api_url: `${this.api_url}/data-pemasukan/${this.query}`,
					token: this.token.token,
					api_key: process.env.NUXT_ENV_APP_TOKEN,
				})
				.then((data) => {
					this.item = data.data;
					this.itempembelians = data.items;
					this.nama = "Pemasukan";
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
						this.getDetailPemasukan(false);
					}
				}
			},
		},
	};
</script>
