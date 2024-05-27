<template>
  <div>
    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div>
    <div v-else class="flex flex-wrap mt-12">
      <div class="w-full">
        <cards-card-detail-data
        color="light"
        :item="item"
        :timelines="itemspenjualan"
        :headers="headers"
        :title="nama"
        tableSetting="detail"
        timelineTitle="Detail Item Penjualan Partai"
        timeTitle=""
        types="transaksi"
        cellType="penjualan-partai"
        parentRoute="transaksi/jual"
        :stringRoute="stringRoute"
        :typeRoute="typeRoute"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { DETAIL_PENJUALAN_PARTAI_TABLE } from "~/utils/table-detail-penjualan-partai";
  import { getData } from "~/hooks/index";

  export default {
    name: "penjualan-partai-detail",
    layout: "admin",

    data() {
      return {
        loading: false,
        options: "penjualan-toko-detail",
        headers: [...DETAIL_PENJUALAN_PARTAI_TABLE],
        query: this.$route.query["query"],
        id: this.$route.params.id,
        item: {},
        itemspenjualan: [],
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
      this.getDetailPenjualanToko(true);
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

      getDetailPenjualanToko(loading) {
        this.loading = loading;
        this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan detail penjualan toko ...";

        getData({
          api_url: `${this.api_url}/data-penjualan-partai/${this.id}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          this.item = data.data;
          this.itemspenjualan = data.items;
          this.nama = "Penjulan Partai";
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1000);
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
            this.getDetailPenjualanToko(false);
          }
        }
      },
    },
  };
</script>
