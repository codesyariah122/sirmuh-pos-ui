<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full  px-6 mb-12' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="ALL DATA BARANG"
        types="barang-all"
        queryType="DATA_BARANG"
        queryMiddle="barang-all"
        :orderBy="orderBy"
        :parentRoute="stringRoute"
        :typeRoute="typeRoute"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :messageAlert="message_success"
        @filter-data="handleFilterKategoriBarang"
        @close-alert="closeSuccessAlert"
        @deleted-data="deleteBarang"
        @sort-data="handleSortData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getBarangAll"
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
import { BARANG_ALL } from "~/utils/table-barang-all";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "barang-all",
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
      headers: [...BARANG_ALL],
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
      orderBy: {
        field: "nama",
        name: "nama",
        type: "ASC",
      },
    };
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.getBarangAll(
      this.current ? Number(this.current) : 1,
      {},
      true
    );
    this.checkUserLogin();
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

    handleFilterKategoriBarang(param, types) {
      if (types === "barang-by-warehouse") {
        this.getBarangAll(1, param, false);
      }
    },

    handleSortData(param, types) {
      if (types === "barang-by-warehouse") {
        this.getBarangAll(1, param, false);
      }
    },

    getBarangAll(page = 1, param = {}, loading) {
      this.loading = loading;
      this.$nuxt.globalLoadingMessage = "Proses menyiapkan data barang ...";
      getData({
        api_url: `${this.api_url}/barang-all?page=${page}${
          param.nama
            ? "&keywords=" + param.nama
            : param.kategori
            ? "&kategori=" + param.kategori
            : param.start_date && param.end_date
            ? "&tgl_terakhir=" + param.start_date + param.end_date
            : param.start_date
            ? "&tgl_terakhir=" + param.start_date
            : param.end_date
            ? "&tgl_terakhir=" + param.end_date
            : param.method
            ? "&sort_name=" + param.name + "&sort_type=" + param.type
            : ""
        }`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if (data.success) {
            this.loading = false;
          }

          let cells = [];
          data?.data?.map((cell) => {
            const prepareCell = {
              id: cell?.id,
              kode: cell?.kode,
              nama: cell?.nama,
              total: cell?.total_stok,
              kategori: cell?.kategori_barang,
              satuan: cell?.satuan,
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
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
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

          if (data.error) {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
            this.loading = false;
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
        this.getBarangAll(this.paging.current);
      }
    },
    dataNotifs() {
      if (this.$_.size(this.notifs) > 0) {
        if (this.token.token === this.tokenLogins) {
          // this.$toast.show(this.messageNotif, {
          //   type: "info",
          //   duration: 5000,
          //   position: "top-right",
          // });
          this.message_success = this.messageNotif;
        }
        this.getBarangAll(this.current_page, {}, false);
      }
    },
  },
};
</script>
