<template>
	<div class="flex flex-wrap">
		<div
		:class="`w-full ${routeName === 'add' ? 'lg:w-12/12' : 'lg:w-8/12'} px-4`"
		>
		<cards-card-settings
		pageType="pemakaianBarang"
		link="pemakaian-barang"
		title="Pemakaian Barang"
		methodType="add"
		:type="type"
		pageData="/backoffice/pemakaian-barang"
		/>
	</div>
</div>
</template>

<script>
/**
 * @param {string}
 * @returns {string}
 * @author Puji Ermanto <puji.ermanto@gmail.com>
 */
	import { getData } from "~/hooks/index";

	export default {
		name: "add-pemakaian-barang",
		layout: "admin",

		data() {
			return {
				routeName: this.$route.name.split("-").pop(),
				loadingDetail: null,
				successNew: null,
				messageNew: "",
				type: this.$route.query["type"],
			};
		},

		created() {
			this.checkNewData();
		},

		watch: {
			notifs() {
				if (this.notifs && this.$_.size(this.notifs) > 0) {
					if (this.$nuxt.notifs[0].routes === "pemakaian-barang") {
						console.log("Add Created");
					}
				}
			},
		},
	};
</script>
