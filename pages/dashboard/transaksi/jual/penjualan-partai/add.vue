<template>
  <div class="flex flex-wrap">
    <div
      :class="`w-full ${routeName === 'add' ? 'lg:w-12/12' : 'lg:w-8/12'} px-4`"
    >
      <cards-card-settings
        color="dark"
        pageType="penjualanPartai"
        link="transaksi"
        title="Tambah Penjualan Partai"
        methodType="add"
        :type="type"
        pageData="/transaksi/jual/penjualan-partai"
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
  name: "penjualan-toko-add",
  layout: "admin",

  data() {
    return {
      routeName: this.$route.name.split("-").pop(),
      loadingDetail: null,
      successNew: null,
      messageNew: "",
      detail: {},
      type: this.$route.query["type"],
    };
  },

  beforeMount() {
    this.storedFormData();
  },

  created() {
    this.checkNewData();
  },

  mounted() {},

  methods: {
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
      if (this.notifs && this.$_.size(this.notifs) > 0) {
        if (this.$nuxt.notifs[0].routes === "penjualan-toko") {
          this.storedFormData();
        }
      }
    },
  },
};
</script>
