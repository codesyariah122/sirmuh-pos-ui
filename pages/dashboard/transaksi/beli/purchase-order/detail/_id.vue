<template>
  <div>
    <div class="flex flex-wrap mt-12 px-6">
      <div class="w-full">
        <cards-card-detail-data
        color="light"
        :item="item"
        :items="items"
        :timelines="itempembelians"
        :headers="headers"
        :title="nama"
        timelineTitle="Detail Item Purchase Order"
        timeTitle=""
        types="transaksi"
        cellType="purchase-order"
        parentRoute="transaksi/beli"
        :stringRoute="stringRoute"
        :typeRoute="typeRoute"
        :loading="loading"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { DETAIL_PURCHASE_ORDER_TABLE } from "~/utils/table-detail-purchase-order";
  import { getData } from "~/hooks/index";

  export default {
    name: "purchase-order-detail",
    layout: "admin",

    data() {
      return {
        loading: false,
        options: "pembelian-langsung-detail",
        headers: [...DETAIL_PURCHASE_ORDER_TABLE],
        query: this.$route.query["query"],
        id: this.$route.params.id,
        item: {},
        items: [],
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
      this.getDetailPembelianLangsung(true);
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

      getDetailPembelianLangsung(loading) {
        this.loading = loading;
        this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan detail purchase order ...";
        getData({
          api_url: `${this.api_url}/data-purchase-order/${this.id}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          this.item = data.data;
          this.items = data.items;
          this.itempembelians = data.purchase_orders;
          this.nama = "Purchase Order";
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
            this.getDetailPembelianLangsung(false);
          }
        }
      },
    },
  };
</script>
