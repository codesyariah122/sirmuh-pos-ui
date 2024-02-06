<template>
  <div class="flex flex-wrap">
    <div
      :class="`w-full ${type === 'edit' ? 'lg:w-12/12' : 'lg:w-12/12'} px-4`"
    >
      <cards-card-settings
        color="dark"
        pageType="bayarHutang"
        link="bayar-hutang"
        :title="`Bayar Hutang ${kodeBayar}`"
        types="bayar-hutang"
        queryType="BAYAR_HUTANG"
        queryMiddle="bayar-hutang"
        pageData="bayar-hutang"
        methodType="edit"
        parentRoute="transaksi"
        :typeRoute="typeRoute"
        :selectedRoute="selectedRoute"
        :type="type"
        :kodeBayar="kodeBayar"
        :current="current"
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
  name: "kode-bayar-hutang",
  layout: "admin",

  data() {
    return {
      loading: null,
      kodeBayar: this.$route.params.kode,
      kode: this.$route.params.kode,
      idHutang: this.$route.query["id"],
      current: this.$route.query["current"],
      routePath: this.$route.path,
      typeRoute: null,
      selectedRoute: null,
      loadingDetail: null,
      successNew: null,
      messageNew: "",
      type: this.$route.query["type"],
      options: this.globalOptions,
    };
  },

  beforeMount() {
    this.authTokenStorage();
    this.storedFormData();
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.generatePath();
  },

  methods: {
    generatePath() {
      const pathSegments = this.routePath.split("/");
      const stringRoute = pathSegments[2];
      const typeRoute = pathSegments[3];
      const selectedRoute = pathSegments[4];
      this.stringRoute = stringRoute;
      this.typeRoute = typeRoute;
      this.selectedRoute = selectedRoute;
    },

    storedFormData() {
      this.$store.dispatch("success/storedFormData", "success-form");
    },
  },

  computed: {
    formData() {
      return this.$store.getters["success/formData"];
    },
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },

  watch: {
    notifs() {
      if (this.notifs && this.$_.size(this.notifs) > 0) {
        if (this.$nuxt.notifs[0].routes === "data-barang") {
          this.storedFormData();
          this.detailHutang(null, false);
        }
      }
    },
  },
};
</script>
