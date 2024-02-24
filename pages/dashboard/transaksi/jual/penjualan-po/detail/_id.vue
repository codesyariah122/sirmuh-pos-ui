<template>
  <div>
    <div class="flex flex-wrap mt-12 px-6">
      <div class="w-full">
        <cards-card-detail-data
          color="light"
          :item="item"
          :timelines="itemspenjualan"
          :headers="headers"
          :title="nama"
          timelineTitle="Detail Item Penjualan P.O"
          timeTitle=""
          types="transaksi"
          cellType="penjualan-po"
          parentRoute="transaksi/jual"
          :stringRoute="stringRoute"
          :typeRoute="typeRoute"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { DETAIL_PENJUALAN_PO_TABLE } from "~/utils/table-detail-penjualan-po";
import { getData } from "~/hooks/index";

export default {
  name: "penjualan-po-detail",
  layout: "admin",

  data() {
    return {
      loading: null,
      options: "penjualan-po-detail",
      headers: [...DETAIL_PENJUALAN_PO_TABLE],
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
    this.getDetailPenjualanPo(true);
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

    getDetailPenjualanPo(loading) {
      getData({
        api_url: `${this.api_url}/data-penjualan-po/${this.id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          this.item = data.data;
          this.itemspenjualan = data.items;
          this.nama = "Penjulan P.O";
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
          this.getDetailPenjualanPo(false);
        }
      }
    },
  },
};
</script>
