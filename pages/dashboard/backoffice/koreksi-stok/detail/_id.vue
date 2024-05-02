<template>
  <div>
    <div class="flex flex-wrap mt-12 px-6">
      <div class="w-full">
        <cards-card-detail-data
        color="light"
        :item="item"
        :timelines="itempembelians"
        :headers="headers"
        :title="nama"
        tables="off"
        timelineTitle="Detail Item Koreksi"
        timeTitle=""
        types="transaksi"
        cellType="koreksi-stok"
        parentRoute="backoffice/koreksi-stok"
        :stringRoute="stringRoute"
        :typeRoute="typeRoute"
        :loading="loadingDetail"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { KOREKSI_DETAIL_TABLE } from "~/utils/table-detail-koreksi-stok";
  import { getData } from "~/hooks/index";

  export default {
    name: "koreksi-stok-detail",
    layout: "admin",

    data() {
      return {
        loadingDetail: null,
        options: "koreksi-stok-detail",
        headers: [...KOREKSI_DETAIL_TABLE],
        query: this.$route.query["query"],
        id: this.$route.params.id,
        item: {},
        itempembelians: [],
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
      this.getDetailKoreksi(true);
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

      getDetailKoreksi(loading) {
        this.loadingDetail = true
        this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan detail koreksi stok ...";
        getData({
          api_url: `${this.api_url}/koreksi-stok/${this.query}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          console.log(data)
          this.item = data.data;
          this.itempembelians = [];
          this.nama = "Koreksi Stok";
        })
        .finally(() => {
          this.loadingDetail = false
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
            this.getDetailKoreksi(false);
          }
        }
      },
    },
  };
</script>
