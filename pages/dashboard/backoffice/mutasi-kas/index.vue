<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="DATA MUTASI"
        types="mutasi-kas"
        queryType="DATA_MUTASI"
        queryMiddle="mutasi-kas"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :paging="paging"
        :messageAlert="message_success"
        parentRoute="backoffice"
        :typeRoute="typeRoute"
        @filter-data="handleFilterBarang"
        @close-alert="closeSuccessAlert"
        @deleted-data="deleteBarang"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getBarangData"
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
import { MUTASIKAS_DATA_TABLE } from "~/utils/table-mutasi-kas";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "mutasi-kas",
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
      headers: [...MUTASIKAS_DATA_TABLE],
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
    this.getBarangData(this.current ? Number(this.current) : 1, {});
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
      if (types === "data-mutasi") {
        this.getBarangData(1, param);
      }
    },

    getBarangData(page = 1, param = {}) {
      this.loading = true
       this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data mutasi kas ...";

      getData({
        api_url: `${this.api_url}/mutasi-kas?page=${page}${
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
                tanggal: cell?.tanggal,
                kode: cell?.kode,
                debet: cell?.debet,
                kredit: cell?.kredit,
                keterangan: cell?.keterangan,
                rupiah: cell?.rupiah,
                operator: cell?.operator,
                expired:
                  cell?.ada_expired_date !== "False" ? cell?.expired : null,
                suppliers: cell?.suppliers && cell?.suppliers,
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
          }, 500);
        })
        .catch((err) => console.log(err));
    },

    deleteBarang(id) {
      this.loading = true;
      this.options = "delete-mutasi";
      deleteData({
        api_url: `${this.api_url}/data-mutasi/${id}`,
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
        this.getBarangData(this.paging.current);
      }
    },
  },
};
</script>
