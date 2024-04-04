<template>
  <div class="flex flex-wrap">
 <!--    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div> -->
    <div
      :class="`w-full ${
        routeName === 'edit' ? 'lg:w-12/12' : 'lg:w-12/12'
      } px-4`"
    >
      <cards-card-settings
        color="dark"
        pageType="terimaPurchaseOrder"
        link="transaksi"
        :title="`Terima P.O : ${faktur}`"
        methodType="accept"
        :type="type"
        pageData="/transaksi/beli/purchase-order"
        :detail="detail"
        :items="items"
        :orders="orders"
        @rebuild-data="getDetailPembelian"
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
  name: "terima-purchase-order",
  layout: "admin",

  data() {
    return {
      id: this.$route.params.id,
      detail: {},
      items: [],
      orders: [],
      routeName: this.$route.name.split("-").pop(),
      loading: false,
      options: 'terima-purchase-order',
      successNew: null,
      messageNew: "",
      detail: {},
      type: this.$route.query["type"],
      faktur: this.$route.query["faktur"]
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
    this.getDetailPembelian(true);
  },

  methods: {
    getDetailPembelian(loading) {
      this.loading = loading
      if(loading) {
        this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data purchase order ...";
      }

      const endPoint = `/data-purchase-order/${this.id}`;
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
          this.items = data.data.items;
          this.orders = data.data.purchase_orders;
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
        if (this.$nuxt.notifs.find(notif => notif.routes === 'purchase-order') || this.$nuxt.notifs.find(notif => notif.routes === 'data-barang')) {
          this.storedFormData();
          this.getDetailPembelian(false)
        }
      }
    },
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
