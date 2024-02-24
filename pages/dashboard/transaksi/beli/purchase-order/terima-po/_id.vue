<template>
  <div class="flex flex-wrap">
    <div v-if="loadingDetail">
      <molecules-row-loading :loading="loadingDetail" :options="options" />
    </div>
    <div v-else
      :class="`w-full ${
        routeName === 'edit' ? 'lg:w-12/12' : 'lg:w-12/12'
      } px-4`"
    >
      <cards-card-settings
        color="dark"
        pageType="purchaseOrder"
        link="transaksi"
        :title="`Terima P.O - ${faktur}`"
        methodType="edit"
        :type="type"
        pageData="/transaksi/beli/purchase-order"
        :detail="detail"
        :items="items"
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
  name: "purchase-order-edit",
  layout: "admin",

  data() {
    return {
      id: this.$route.params.id,
      detail: {},
      items: [],
      routeName: this.$route.name.split("-").pop(),
      loadingDetail: null,
      options: 'edit-purchase-order',
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
      this.loadingDetail = loading
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
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingDetail = false;
          }, 1000);
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
        if (this.$nuxt.notifs[0].routes === "pembelian-langsung") {
          this.storedFormData();
        }
      }
    },
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
