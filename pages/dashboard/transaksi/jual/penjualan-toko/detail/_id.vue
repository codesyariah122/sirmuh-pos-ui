<template>
  <div>
    <div class="flex flex-wrap mt-12">
      <div class="w-full">
        <cards-card-detail-data
        color="light"
        :item="item"
        :timelines="itemspenjualan"
        :headers="headers"
        :title="nama"
        timelineTitle="Detail Item Penjualan Toko"
        timeTitle=""
        tableSetting="detail"
        types="transaksi"
        cellType="penjualan-toko"
        parentRoute="transaksi/jual"
        :stringRoute="stringRoute"
        :typeRoute="typeRoute"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { DETAIL_PENJUALAN_TOKO_TABLE } from "~/utils/table-detail-penjualan-toko";
  import { getData } from "~/hooks/index";

  export default {
    name: "penjualan-toko-detail",
    layout: "admin",

    data() {
      return {
        loading: false,
        options: "penjualan-toko-detail",
        headers: [...DETAIL_PENJUALAN_TOKO_TABLE],
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
      this.getDetailPenjualanToko();
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

      getDetailPenjualanToko() {
        getData({
          api_url: `${this.api_url}/data-penjualan-toko/${this.id}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          this.item = data.data;
          this.itemspenjualan = data.items;
          this.nama = "Penjulan Toko";
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
            this.getDetailPenjualanToko();
          }
        }
      },
    },
  };
</script>
