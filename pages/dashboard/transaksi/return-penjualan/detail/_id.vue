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
        timelineTitle=""
        timeTitle=""
        tableSetting="detail"
        types="transaksi"
        cellType="return-penjualan"
        parentRoute="transaksi/return-penjualan"
        :stringRoute="stringRoute"
        :typeRoute="typeRoute"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { DETAIL_RETURN_PENJUALAN } from "~/utils/table-detail-return-penjualan";
  import { getData } from "~/hooks/index";

  export default {
    name: "return-penjualan-detail",
    layout: "admin",

    data() {
      return {
        loading: false,
        options: "return-penjualan-detail",
        headers: [...DETAIL_RETURN_PENJUALAN],
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
          api_url: `${this.api_url}/data-return-penjualan/${this.query}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          console.log(data)
          this.item = data?.data;
          this.itemspenjualan = data?.data
          this.nama = "Return Penjualan";
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
