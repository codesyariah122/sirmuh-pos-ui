<template>
	<div class="flex flex-wrap">
		<div v-if="loading">
			<molecules-row-loading :loading="loading" :options="options" />
		</div>
		<div v-else
		:class="`w-full ${
			routeName === 'edit' ? 'lg:w-12/12' : 'lg:w-12/12'
		} px-4`">
			<cards-card-settings
			color="dark"
			pageType="kirimReturn"
			link="transaksi"
			:title="`Kembalikan Barang dari Return : ${kode}`"
			methodType="return"
			:type="type"
			pageData="/transaksi/return-pembelian"
			:detail="detail"
			@rebuild-data="getReturnPembelian"
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
export default {
  name: "return-pembelian",
  layout: "admin",

  data() {
    return {
      id: this.$route.params.id,
      detail: {},
      items: [],
      orders: [],
      loading: false,
      routeName: this.$route.name.split("-").pop(),
      options: 'return-pembelian',
      successNew: null,
      messageNew: "",
      detail: {},
      type: this.$route.query["type"],
      kode: this.$route.query["kode"]
    };
  },

  beforeMount() {
    this.authTokenStorage();
    this.storedFormData();
  },

  created() {
    this.$nuxt.checkNewData();
  },

  mounted() {
    this.getReturnPembelian(true);
  },

  methods: {
    getReturnPembelian(loading) {
      this.loading = loading
      if(loading) {
        this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data pembelian ...";
      }

      const endPoint = `/data-${this.type}/${this.id}`;
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
        .get(endPoint, config)
        .then((data) => {
          this.detail = data.data.data;
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    storedFormData() {
      this.$store.dispatch("success/storedFormData", "success-form");
    },
  },

  computed: {
    formData() {
      return this.$store.getters["success/formData"];
    },
  },

  watch: {
    notifs() {
      if (this.$nuxt.notifs && this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs.find(item => item.routes === "penjualan-po") || this.$nuxt.notifs.find(item => item.routes === "penjualan-po-edit") || this.$nuxt.notifs.find(item => item.routes === "piutang-pelanggan") || this.$nuxt.notifs.find(notif => notif.routes === "data-barang")) {
          this.storedFormData();
          this.getReturnPembelian(false)
        }
      }
    },
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
