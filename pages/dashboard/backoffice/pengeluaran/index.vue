<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="DATA PENGELUARAN"
        types="pengeluaran"
        queryType="DATA_PENGELUARAN"
        queryMiddle="pengeluaran"
        parentRoute="backoffice"
        :typeRoute="typeRoute"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :paging="paging"
        :messageAlert="message_success"
        @filter-data="handleFilterPengeluaran"
        @close-alert="closeSuccessAlert"
        @deleted-data="deleteBarang"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getDataPengeluaran"
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
import { PENGELUARAN_DATA_TABLE } from "~/utils/table-data-pengeluaran";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "pengeluaran",
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
      headers: [...PENGELUARAN_DATA_TABLE],
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
    this.getDataPengeluaran(this.current ? Number(this.current) : 1, {view_all: true}, true);
    this.generatePath();
  },

  methods: {
    handleFilterPengeluaran(param, types) {
      if (types === "pengeluaran") {
        console.log(param)
        if(param.biaya) {
          this.$router.push({
            path: '/dashboard/backoffice/pengeluaran',
            query: {
              biaya: param.biaya
            }
          })
        } else {
          this.$router.push('/dashboard/backoffice/pengeluaran')
        }
        this.getDataPengeluaran(1, param, false);
      }
    },

    generatePath() {
      const pathSegments = this.routePath.split("/");
      const stringRoute = pathSegments[2];
      const typeRoute = pathSegments[3];
      this.stringRoute = stringRoute;
      this.typeRoute = typeRoute;
    },

    getDataPengeluaran(page = 1, param = {}, loading) {
      this.loading = loading;
      this.$nuxt.globalLoadingMessage = "Proses menyiapkan data pengeluaran ...";

      const biaya = this.$route.query["biaya"];
      const endPoint = `${this.api_url}/data-pengeluaran?page=${page}&view_all=${param.view_all !== undefined ? param.view_all : true}${param.date ? "&date_transaction=" + param.date :""}${param.biaya ? '&biaya='+param.biaya : biaya ? '&biaya='+biaya : ''}`

      getData({
        api_url: endPoint,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          let cells = [];
          if (data?.success) {
            data.data.map((cell) => {
              const prepareCell = {
                id: cell?.id,
                kode: cell?.kode,
                tanggal: cell?.tanggal,
                kd_biaya: cell?.kd_biaya,
                nama_biaya: cell?.biaya_nama,
                keterangan: cell?.keterangan,
                kode_kas: cell?.kode_kas,
                nama_kas: cell?.nama_kas,
                jumlah: cell?.jumlah,
                operator: cell?.operator,
                pr: cell?.pr,
                deleted_at: cell?.deleted_at,
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

    deleteBarang(id) {
      this.loading = true;
      this.options = "delete-pengeluaran";
      deleteData({
        api_url: `${this.api_url}/data-pengeluaran/${id}`,
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
        if (this.$nuxt.notifs.find(item => item.routes === "pengeluaran")) {
          this.getDataPengeluaran(this.paging.current, {}, false);
        }
      }
    },
  },
};
</script>
