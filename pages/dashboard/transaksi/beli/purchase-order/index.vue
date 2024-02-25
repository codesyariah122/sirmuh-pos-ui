<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="PURCHASE ORDER"
      types="purchase-order"
      queryType="PURCHASE_ORDER"
      queryMiddle="purchase-order"
      :current="current"
      :parentRoute="stringRoute"
      :typeRoute="typeRoute"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :paging="paging"
      :messageAlert="message_success"
      @filter-data="handleFilterBarang"
      @close-alert="closeSuccessAlert"
      @deleted-data="deleteBarang"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getPurchaseOrder"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @param {string}
 * @returns {string}
 * @author Puji Ermanto <puuji.ermanto@gmail.com>
 */
  import { PURCHASE_ORDER_TABLE } from "~/utils/table-purchase-order";
  import { getData, deleteData } from "~/hooks/index";

  export default {
    name: "purchase-order",
    layout: "admin",

    data() {
      return {
        current: this.$route.query["current"],
        routePath: this.$route.path,
        stringRoute: null,
        typeRoute: null,
        loading: null,
        options: "",
        success: null,
        message_success: "",
        headers: [...PURCHASE_ORDER_TABLE],
        api_url: process.env.NUXT_ENV_API_URL,
        items: [],
        links: [],
        paging: {
          current: null,
          from: null,
          last: null,
          per_page: null,
          total: null,
        },
      };
    },

    created() {
      this.checkNewData();
    },

    mounted() {
      this.getPurchaseOrder(this.current ? Number(this.current) : 1, {}, true);
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

      handleFilterBarang(param, types) {
        if (types === "purchase-order") {
          if(param.view_all) {
            this.getPurchaseOrder(1, param, true);
          } else {
            this.getPurchaseOrder(1, param, false);
          }
        }
      },

      getPurchaseOrder(page = 1, param = {}, loading) {
        this.loading = loading;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data purchase order ...";

        getData({
          api_url: `${this.api_url}/data-purchase-order?page=${page}${
            param.view_all ? "&view_all=" + param.view_all : false
          }`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          console.log(data)
          let cells = [];
          if (data?.success) {
            data?.data?.map((cell) => {
              const prepareCell = {
                id: cell?.id,
                tanggal: cell?.tanggal,
                kode: cell?.kode,
                kode_kas: cell?.kode_kas,
                kas_nama: cell?.kas_nama,
                jumlah: cell?.jumlah,
                hutang: cell?.hutang,
                lunas: cell?.lunas,
                operator: cell?.operator,
                supplier: cell?.supplier,
                nama_supplier: cell?.nama_supplier
              };
              cells.push(prepareCell);
            });
            this.items = [...cells];

            this.links = data?.meta?.links;
            this.paging.current = data?.meta?.current_page;
            this.paging.from = data?.meta?.from;
            this.paging.last = data?.meta?.last_page;
            this.paging.per_page = data?.meta?.per_page;
            this.paging.total = data?.meta?.total;
          }
        })
        .finally(() => {
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
      },

      deleteBarang(id) {
        this.loading = true;
        this.options = "delete-purchase-order";
        deleteData({
          api_url: `${this.api_url}/data-purchase-order/${id}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          if (data.success) {
            this.message_success = data.message;
            // if (this.$_.size(this.$nuxt.notifs) > 0) {
            //   if (
            //     this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email
            //   ) {
            //     this.$toast.show("Data barang successfully move to trash !", {
            //       type: "info",
            //       duration: 5000,
            //       position: "top-right",
            //       icon: "circle-exclamation",
            //     });
            //   }
            // }
            this.success = true;
            this.scrollToTop();
          }
        })
        .finally(() =>{
          setTimeout(() => {
            this.loading = false
          }, 100)
        })
        .catch((err) => console.log(err));
      },

      closeSuccessAlert() {
        this.success = false;
        this.message = "";
      },
    },

    watch: {
      notifs() {
        if (this.$_.size(this.$nuxt.notifs) > 0) {
          console.log(this.$nuxt.notifs[0].routes);
          if (this.$nuxt.notifs[0].routes) {
            this.getPurchaseOrder(this.paging.current, {}, false);
          }
        }
      },
    },
  };
</script>
