<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="DATA PEMAKAIAN BARANG"
      types="pemakaian-barang"
      queryType="DATA_PEMAKAIAN_BARANG"
      queryMiddle="pemakaian-barang"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :paging="paging"
      :messageAlert="message_success"
      parentRoute="backoffice"
      :typeRoute="typeRoute"
      @filter-data="handleFilterPemakaianBarang"
      @close-alert="closeSuccessAlert"
      @deleted-data="deletePemakaianBarang"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getDataPemakaianBarang"
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
  import { PEMAKAIAN_DATA_TABLE } from "~/utils/table-data-pemakaian";
  import { getData, deleteData } from "~/hooks/index";

  export default {
    name: "pemakaian-barang",
    layout: "admin",

    data() {
      return {
        routePath: this.$route.path,
        stringRoute: null,
        typeRoute: null,
        current: this.$route.query["current"],
        loading: null,
        options: "",
        success: null,
        message_success: "",
        headers: [...PEMAKAIAN_DATA_TABLE],
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
      this.getDataPemakaianBarang(this.current ? Number(this.current) : 1, {}, true);
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

      handleFilterPemakaianBarang(param, types) {
        if (types === "pemakaian-barang") {
          this.getDataPemakaianBarang(1, param);
        }
      },

      getDataPemakaianBarang(page = 1, param = {}, loading) {
        this.loading = loading
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data pemakaian barang ...";
        getData({
          api_url: `${this.api_url}/pemakaian-barang?page=${page}${
            param.nama
            ? "&keywords=" + param.nama
            : param.kategori
            ? "&kategori=" + param.kategori
            : param.tgl_terakhir
            ? "&tgl_terakhir=" + param.tgl_terakhir
            : ""
          }`,
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
                operator: cell?.operator,
                barang: cell?.nama_barang,
                kode_barang: cell?.kode_barang,
                qty: cell?.qty,
                satuan: cell?.satuan,
                keperluan: cell?.keperluan,
                keterangan: cell?.keterangan,
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

            setTimeout(() => {
              this.loading = false;
            }, 1500);
          }
        })
        .catch((err) => console.log(err));
      },

      deletePemakaianBarang(id) {
        this.loading = true;
        this.options = "delete-pemakaian-barang";
        deleteData({
          api_url: `${this.api_url}/data-pemakaian-barang/${id}`,
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
          console.log(this.$_.size(this.$nuxt.notifs))
          if (this.$nuxt.notifs.find(item => item.routes === "pemakaian-barang")) {
            this.getDataPemakaianBarang(this.paging.current, {}, false);
          }
        }
      },
    },
  };
</script>
