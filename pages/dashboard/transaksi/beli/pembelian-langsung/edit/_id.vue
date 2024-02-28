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
        pageType="pembelianLangsung"
        link="transaksi"
        title="Edit Pembelian"
        methodType="edit"
        :type="type"
        pageData="/transaksi/beli/pembelian-langsung"
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
  name: "pembelian-langsung-edit",
  layout: "admin",

  data() {
    return {
      id: this.$route.params.id,
      detail: {},
      items: [],
      routeName: this.$route.name.split("-").pop(),
      loadingDetail: null,
      options: "edit-pembelian-langsung",
      successNew: null,
      messageNew: "",
      detail: {},
      type: this.$route.query["type"],
      loadingDetail: null,
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
     this.loadingDetail = true
     this.$nuxt.globalLoadingMessage =
     "Proses menyiapkan data pembelian langsung ...";

      const endPoint = `/data-pembelian-langsung/${this.id}`;
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
