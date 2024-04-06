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
      @deleted-data="deletedPembelian"
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
      this.getPurchaseOrder(this.current ? Number(this.current) : 1, {view_all: false}, true);
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
          if(param.supplier) {
            this.$router.push({
              path: '/dashboard/transaksi/beli/purchase-order',
              query: {
                supplier: param.supplier
              }
            })
          } else {
            this.$router.push('/dashboard/transaksi/beli/purchase-order')
          }
          this.getPurchaseOrder(1, param, true);
        }
      },

      getPurchaseOrder(page = 1, param = {}, loading) {
        this.loading = loading;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data purchase order ...";

        const supplier = this.$route.query["supplier"];
        const endPoint = `${this.api_url}/data-purchase-order?page=${page}&view_all=${param.view_all}${param.date ? "&date_transaction=" + param.date :""}${param.supplier ? '&supplier='+param.supplier : supplier ? '&supplier='+supplier : ''}`

        getData({
          api_url: endPoint,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
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
                bayar: cell?.bayar,
                diterima: cell?.diterima,
                kembali: cell?.kembali,
                hutang: cell?.hutang,
                lunas: cell?.lunas,
                operator: cell?.operator,
                supplier: cell?.supplier,
                nama_supplier: cell?.nama_supplier,
                stop_qty: cell?.stop_qty,
                return: cell?.return
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
          this.$nuxt.globalLoadingMessage = "";
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
      },

      deletedPembelian(id) {
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
            this.success = true;

            this.scrollToTop();
            this.getPurchaseOrder(1, {}, false)
            setTimeout(() => {
              this.loading = false;
              this.$swal({
                position: "top-end",
                icon: "success",
                title: data.message,
                showConfirmButton: false,
                timer: 1500
              })
              this.options = "";
            }, 500);
          }

          if(data.error) {
            this.success = false;
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: data.message,
            })
          }
        })
        .finally(() =>{
          setTimeout(() => {
            this.getPurchaseOrder(1, {}, false)
            this.loading = false
          }, 500)
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
          if (this.$nuxt.notifs.find(notif => notif.routes === 'purchase-order')) {
            this.getPurchaseOrder(this.paging.current, {}, false);
          }
        }
      },
    },
  };
</script>
