<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full px-6' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="BAYAR HUTANG"
      types="bayar-hutang"
      queryType="BAYAR_HUTANG"
      queryMiddle="bayar-hutang"
      :current="current"
      :parentRoute="stringRoute"
      :typeRoute="typeRoute"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :paging="paging"
      :messageAlert="message_success"
      @filter-data="handleFilterData"
      @close-alert="closeSuccessAlert"
      @deleted-data="deleteBarang"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getLaporanHutang"
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
 * @author Puji Ermanto <puji.ermanto@gmail.com>
 */
  import { BAYAR_HUTANG_TABLE } from "~/utils/table-bayar-hutang";
  import { getData, deleteData } from "~/hooks/index";

  export default {
    name: "bayar-hutang",
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
        headers: [...BAYAR_HUTANG_TABLE],
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
      this.$nuxt.checkNewData();
    },

    mounted() {
      this.getLaporanHutang(this.current ? Number(this.current) : 1, {view_all: true}, true);
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

      handleFilterData(param, types) {
        if (types === "bayar-hutang") {
          if(param.supplier) {
            this.$router.push({
              path: '/dashboard/transaksi/bayar-hutang',
              query: {
                supplier: param.supplier
              }
            })
          } else {
            this.$router.push('/dashboard/transaksi/bayar-hutang');
          }
          this.getLaporanHutang(1, param, true);
        }
      },

      getLaporanHutang(page = 1, param = {}, loading) {

        this.loading = loading;

        this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data hutang  ...";

        const supplier = this.$route.query["supplier"];

        const endPoint = `${this.api_url}/data-hutang?page=${page}&view_all=${this.$nuxt.viewAllHutang === undefined ? true : this.$nuxt.viewAllHutang}${param.date ? "&date_transaction=" + param.date :""}${param.supplier ? '&supplier='+param.supplier : supplier ? '&supplier='+supplier : ''}`

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
                kode: cell?.kode,
                tanggal: cell?.tanggal_pembelian,
                supplier: cell?.supplier,
                jumlah: cell?.jumlah,
                sisa: cell?.po == "True" ? cell?.jumlah - cell?.bayar : cell?.jumlah,
                tempo: cell?.jatuh_tempo,
                operator: cell?.operator,
                lunas: cell?.lunas,
                visa: cell?.visa,
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
          setTimeout(() => {
            this.loading = false;
            this.$nuxt.globalLoadingMessage = ""
          }, 1500)
        })
        .catch((err) => {
          console.log("ERROR ANJIGN")
          console.log(err)
        });
      },

      deleteBarang(id) {
        this.loading = true;
        this.options = "delete-barang";
        deleteData({
          api_url: `${this.api_url}/data-barang/${id}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          console.log(data);
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
            setTimeout(() => {
              this.loading = false;
              this.options = "";
            }, 1500);
          }
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
        if (this.$_.size(this.notifs) > 0) {
          console.log(this.notifs[0])
          if (this.$nuxt.notifs.find(item => item.routes === 'data-barang') || this.$nuxt.notifs.find(item => item.routes === 'bayar-hutang') || this.$nuxt.notifs.find(item => item.routes === 'pembelian-langsung') || this.$nuxt.notifs.find(item => item.routes === 'purchase-order')) {
            this.getLaporanHutang(this.paging.current, {}, false);
          }
        }
      },
    },
  };
</script>
