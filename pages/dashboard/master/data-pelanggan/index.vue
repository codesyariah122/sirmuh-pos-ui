<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12  px-6' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="DATA PELANGGAN"
      types="data-pelanggan"
      queryType="DATA_PELANGGAN"
      queryMiddle="data-pelanggan"
      :orderBy="orderBy"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :messageAlert="message_success"
      parentRoute="master"
      :typeRoute="typeRoute"
      @filter-data="handleFilterPelanggan"
      @close-alert="closeSuccessAlert"
      @deleted-data="deletePelanggan"
      @sort-data="handleSortData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getDataPelanggan"
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
  import { PELANGGAN_DATA_TABLE } from "~/utils/table-pelanggan";
  import { getData, deleteData } from "~/hooks/index";

  export default {
    name: "data-pelanggan",
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
        headers: [...PELANGGAN_DATA_TABLE],
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
      this.$nuxt.checkNewData();
    },

    mounted() {
      this.getDataPelanggan(1, {}, true);
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

      handleFilterPelanggan(param, types) {
        if (types === "data-pelanggan") {
          this.getDataPelanggan(1, param, false);
        }
      },

      handleSortData(param, types) {
        if (types === "data-pelanggan") {
          this.getDataPelanggan(1, param, false);
        }
      },

      getDataPelanggan(page = 1, param = {}, loading) {
        this.loading = loading;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data pelanggan ...";
        getData({
          api_url: `${this.api_url}/data-pelanggan?page=${page}${
            param.nama
            ? "&keywords=" + param.nama
            : param.sales
            ? "&sales=" + param.sales
            : param.kode
            ? "&kode=" + param.kode
            : param.method
            ? "&sort_name=" + param.name + "&sort_type=" + param.type
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
                nama: cell?.nama,
                kode: cell?.kode,
                alamat: cell?.alamat,
                telp: cell?.telp,
                pekerjaan: cell?.pekerjaan,
                tgl_lahir: cell?.tgl_lahir,
                saldo_piutang: cell?.saldo_piutang,
                point: cell?.point,
                sales: cell?.sales,
                area: cell?.area,
                max_piutang: cell?.max_piutang,
                kota: cell?.kota,
                rayon: cell?.rayon,
                saldo_tabungan: cell?.saldo_tabungan,
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
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        })
        .catch((err) => console.log(err));
      },

      deletePelanggan(id) {
        this.loading = true;
        this.$nuxt.globalLoadingMessage = "Proses menghapus data pelanggan ...";

        this.options = "delete-data-pelanggan";
        deleteData({
          api_url: `${this.api_url}/data-pelanggan/${id}`,
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
            }, 500);
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
      notifs: {
        handler() {
          if (this.$_.size(this.notifs) > 0) {
            const relevantNotif = this.notifs.find((notif) => 
              ["data-pelanggan"].includes(notif.routes)
              );
            console.log(relevantNotif);
            if (relevantNotif) {
              this.getDataPelanggan(this.paging.current, {}, false);
            }
          }
        },
        immediate: true,
      }
    }
  }
</script>
