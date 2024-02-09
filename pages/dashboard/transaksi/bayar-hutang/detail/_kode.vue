<template>
  <div>
    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div>
    <div v-else class="flex flex-wrap mt-12">
      <div class="w-full">
        <cards-card-detail-hutang
          :item="item"
          :angsurans="angsurans"
          :title="nama"
          types="bayar-hutang"
          parentRoute="transaksi/bayar-hutang"
          :stringRoute="stringRoute"
          :typeRoute="typeRoute"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "~/hooks/index";

export default {
  name: "bayar-hutang-detail",
  layout: "admin",

  data() {
    return {
      loading: null,
      options: "bayar-hutang-detail",
      query: this.$route.query["query"],
      kode: this.$route.params.kode,
      item: {},
      angsurans: [],
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
    this.getDetailHutang(true);
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

    getDetailHutang(loading) {
      this.loading = loading;
      this.$nuxt.globalLoadingMessage = "Proses menyiapkan detail hutang ...";
      getData({
        api_url: `${this.api_url}/data-hutang/${this.query}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          this.item = data.data;
          this.angsurans = data.angsurans;
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1500);
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
          this.getDetailHutang(false);
        }
      }
    },
  },
};
</script>
