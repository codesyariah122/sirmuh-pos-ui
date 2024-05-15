<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="DATA KOREKSI STOK"
      types="koreksi-stok"
      queryType="KOREKSI_STOK"
      queryMiddle="koreksi-stok"
      :parentRoute="stringRoute"
      :typeRoute="typeRoute"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :paging="paging"
      :messageAlert="message_success"
      @filter-data="handleFilterKoreksi"
      @close-alert="closeSuccessAlert"
      @deleted-data="deleteBarang"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getKoreksiStok"
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
  import { KOREKSI_DATA_TABLE } from "~/utils/table-data-koreksi";
  import { getData, deleteData } from "~/hooks/index";

  export default {
    name: "koreksi-stok",
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
        headers: [...KOREKSI_DATA_TABLE],
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
      this.getKoreksiStok(this.current ? Number(this.current) : 1, {}, true);
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

      handleFilterKoreksi(param, types) {
        if (types === "koreksi-stok") {
          this.getKoreksiStok(1, param, false);
        }
      },

      getKoreksiStok(page = 1, param = {}, loading) {
        this.loading = loading;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data ...";
        
        const endPoint = `${this.api_url}/koreksi-stok?page=${page}&view_all=${this.$nuxt.viewAllKoreksiStok}${param.date ? "&date_transaction=" + param.date :""}`

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
                uuid: cell?.uuid,
                kode: cell?.kode,
                tanggal: cell?.tanggal,
                selisih: cell?.selisih,
                satuan: cell?.satuan,
                operator: cell?.operator,
                lokasistok: cell?.lokasistok,
                jenis: cell?.jenis,
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
        this.options = "delete-koreksi-stok";
        deleteData({
          api_url: `${this.api_url}/data-koreksi-stok/${id}`,
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
          this.getKoreksiStok(this.paging.current, {}, false);
        }
      },
    },
  };
</script>
