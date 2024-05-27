<template>
  <div>
    <div v-if="loading">
      <molecules-row-loading :loading="loading" :options="options" />
    </div>
    <div class="flex flex-wrap mt-12">
      <div class="w-full">
        <cards-card-detail-data
        color="light"
        :item="item"
        :timelines="angsurans"
        :headers="headers"
        :title="nama"
        timelineTitle="Detail Item Hutang"
        tableSetting="detail"
        timeTitle="Angsuran Ke"
        types="transaksi"
        cellType="bayar-hutang"
        parentRoute="transaksi/bayar-hutang"
        :stringRoute="stringRoute"
        :typeRoute="typeRoute"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { DETAIL_BAYAR_HUTANG_TABLE } from "~/utils/table-detail-bayar-hutang";
  import { getData } from "~/hooks/index";

  export default {
    name: "bayar-hutang-detail",
    layout: "admin",

    data() {
      return {
        loading: null,
        headers: [...DETAIL_BAYAR_HUTANG_TABLE],
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
      this.getDetailHutang();
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

      getDetailHutang() {
        this.loading = true;
        this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data detail bayar hutang ...";

        getData({
          api_url: `${this.api_url}/data-hutang/${this.query}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          this.item = data.data;
          this.angsurans = data.angsurans;
          this.nama = this.angsurans.length > 0 ? "Angsuran" : "Hutang";
        })
        .finally(() => {
          this.loading = false
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
            this.getDetailHutang();
          }
        }
      },
    },
  };
</script>
