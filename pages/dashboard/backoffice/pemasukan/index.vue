<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="DATA PEMASUKAN"
        types="pemasukan"
        queryType="DATA_PEMASUKAN"
        queryMiddle="pemasukan"
        parentRoute="backoffice"
        :typeRoute="typeRoute"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :messageAlert="message_success"
        @filter-data="handleFilterSupplier"
        @close-alert="closeSuccessAlert"
        @deleted-data="deletePelanggan"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getDataPemasukan"
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
import { PEMASUKAN_DATA_TABLE } from "~/utils/table-data-pemasukan";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "pemasukan",
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
      headers: [...PEMASUKAN_DATA_TABLE],
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
    this.getDataPemasukan(1, {}, true);
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

    handleFilterSupplier(param, types) {
      if (types === "pemasukan") {
        if(param.jenis) {
          this.$router.push({
            path: '/dashboard/backoffice/pemasukan',
            query: {
              jenis: param.jenis
            }
          })
        } else {
          this.$router.push('/dashboard/backoffice/pemasukan')
        }
        this.getDataPemasukan(1, param, false);
      }
    },

    getDataPemasukan(page = 1, param = {}, loading) {
      this.loading = loading;
      this.$nuxt.globalLoadingMessage = "Proses menyiapkan data pemasukan ...";

      const jenis = this.$route.query["jenis"];
      const endPoint = `${this.api_url}/data-pemasukan?page=${page}&view_all=${param.view_all}${param.date ? "&date_transaction=" + param.date :""}${param.jenis ? '&jenis='+param.jenis : jenis ? '&jenis='+jenis : ''}`

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
                tanggal: cell?.tanggal,
                kode: cell?.kode,
                jenispelanggan: cell?.jenis_pemasukan_nama,
                tanggal: cell?.tanggal,
                kode_kas: cell?.kode_kas,
                nama_kas: cell?.nama_kas,
                jumlah: cell?.jumlah,
                operator: cell?.operator,
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

    deletePelanggan(id) {
      this.loading = true;
      this.options = "delete-pemasukan";
      deleteData({
        api_url: `${this.api_url}/data-pemasukan/${id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if (data.success) {
            this.message_success = data.message;
            // this.$toast.show("Data barang successfully move to trash !", {
            //   type: "info",
            //   duration: 5000,
            //   position: "top-right",
            //   icon: "circle-exclamation",
            // });
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
        this.getDataPemasukan(this.paging.current, {}, false);
      }
    },
  },
};
</script>
