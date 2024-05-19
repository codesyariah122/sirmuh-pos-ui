<template>
  <div>
    <div class="flex flex-wrap mt-12 px-6">
      <div class="w-full">
        <cards-card-detail-data
        color="light"
        :item="item"
        :timelines="itembarangs"
        :headers="headers"
        :title="nama"
        :timelineTitle="`Detail Pemakaian Barang ${item.kode}`"
        timeTitle=""
        types="backoffice"
        tableSetting="detail"
        cellType="pemakaian-barang"
        parentRoute="backoffice/pemakaian-barang"
        :stringRoute="stringRoute"
        :typeRoute="typeRoute"
        :loading="loadingDetail"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { DETAIL_PEMAKAIAN_DATA_TABLE } from "~/utils/table-detail-pemakaian-barang";
  import { getData } from "~/hooks/index";

  export default {
    name: "pembelian-langsung-detail",
    layout: "admin",

    data() {
      return {
        loadingDetail: null,
        options: "pemakaian-barang-detail",
        headers: [...DETAIL_PEMAKAIAN_DATA_TABLE],
        query: this.$route.query["query"],
        id: this.$route.params.id,
        item: {},
        itembarangs: {},
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
      this.generatePath();
    },

    mounted() {
      this.getDetailPemakaianBarang(true);
    },

    methods: {
      generatePath() {
        const pathSegments = this.routePath.split("/");
        const stringRoute = pathSegments[2];
        const typeRoute = pathSegments[3];
        this.stringRoute = stringRoute;
        this.typeRoute = typeRoute;
      },

      getDetailPemakaianBarang(loading) {
        this.loadingDetail = true
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan detail pemakaian barang ...";

        getData({
          api_url: `${this.api_url}/pemakaian-barang/${this.query}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          this.item = data.data;
          this.itembarangs = data?.data;
          this.nama = `Pemakaian Barang ${this.item.kode}`;
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
            this.getDetailPemakaianBarang(false);
          }
        }
      },
    },
  };
</script>
