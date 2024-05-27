<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-8' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="PENJUALAN PARTAI"
      types="penjualan-partai"
      queryType="PENJUALAN_PARTAI"
      queryMiddle="penjualan-partai"
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
      @rebuild-data="getPenjualanPartai"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getPenjualanPartai"
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
  import { PENJUALAN_PARTAI_TABLE } from "~/utils/table-penjualan-partai";
  import { getData, deleteData } from "~/hooks/index";

  export default {
    name: "penjualan-partai",
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
        headers: [...PENJUALAN_PARTAI_TABLE],
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
      this.getPenjualanPartai(this.current ? Number(this.current) : 1, {view_all: false}, true);
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
        if (types === "penjualan-partai") {
         if(param.pelanggan) {
          this.$router.push({
            path: '/dashboard/transaksi/jual/penjualan-partai',
            query: {
              pelanggan: param.pelanggan
            }
          })
        } else {
          this.$router.push('/dashboard/transaksi/jual/penjualan-partai')
        }
        this.getPenjualanPartai(1, param, true);
      }
    },

    getPenjualanPartai(page = 1, param = {}, loading) {
      this.loading = loading;
      this.$nuxt.globalLoadingMessage =
      "Proses menyiapkan data penjualan partai ...";

      const pelanggan = this.$route.query["pelanggan"];
      const endPoint = `${this.api_url}/data-penjualan-partai?page=${page}&view_all=${this.$nuxt.viewAllPenjualanPartai}${param.date ? "&date_transaction=" + param.date :""}${param.pelanggan ? '&pelanggan='+param.pelanggan : pelanggan ? "&pelanggan="+pelanggan : ""}${param.keyword ? '&keywords='+param.keyword : ''}`

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
              tanggal: cell?.tanggal,
              lunas: cell?.lunas,
              jumlah: cell?.jumlah,
              diskon: cell?.diskon,
              dikirim: cell?.dikirim,
              kode_kas: cell?.kode_kas,
              nama_kas: cell?.nama_kas,
              operator: cell?.operator,
              pelanggan: cell?.pelanggan,
              nama_pelanggan: cell?.nama_pelanggan,
              receive: cell?.receive,
              status: cell?.status,
              biayakirim: cell?.biayakirim,
              return: cell?.return,
              ppn: cell?.tax,
              ppn_rupiah: cell?.tax_rupiah
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
          this.$nuxt.globalLoadingMessage = "";
        }, 500);
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      });
    },

    deleteBarang(id) {
      this.loading = true;
      this.options = "delete-penjualan-toko";
      deleteData({
        api_url: `${this.api_url}/data-penjualan-toko/${id}`,
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
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs.find(item => item.routes === "penjualan-partai") ||  this.$nuxt.notifs.find(item => item.routes === "penjualan") || this.$nuxt.notifs.find(item => item.routes === "piutang-pelanggan") || this.$nuxt.notifs.find(item => item.routes === "data-barang")) {
          this.getPenjualanPartai(this.paging.current ? this.paging.current : 1, {}, false);
        }
      }
    },
  },
};
</script>
