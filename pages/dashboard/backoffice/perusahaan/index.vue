<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light" 
        title="DATA PERUSAHAAN" 
        types="perusahaan" 
        queryType="DATA_PERUSAHAAN"
        queryMiddle="perusahaan"
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
        @deleted-data="deleteBarang" />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination :links="links" :paging="paging" @fetch-data="getBarangData" />
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
import { PERUSAHAAN_DATA_TABLE } from "~/utils/table-data-perusahaan";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "perusahaan",
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
      headers: [...PERUSAHAAN_DATA_TABLE],
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
    this.getBarangData(this.current ? Number(this.current) : 1, {}, true);
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
      if (types === "data-perusahaan") {
        this.getBarangData(1, param, false);
      }
    },

    getBarangData(page = 1, param = {}, loading) {
      this.loading = loading;
      this.$nuxt.globalLoadingMessage = "Proses menyiapkan data perusahaan ...";

      getData({
        api_url: `${this.api_url}/data-perusahaan?page=${page}${param.nama
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
                name: cell?.name,
                logo: cell?.logo,
                banner: cell?.banner,
                phone: cell?.phone,
                email: cell?.email,
                address: cell?.address,
                about: cell?.about,
                kota: cell?.kota,
                provinsi: cell?.provinsi,
                negara: cell?.negara,
                koordinat: cell?.koordinat,
                npwp: cell?.npwp,
                nppkp: cell?.nppkp,
                kode_lokasi: cell?.kode_lokasi,
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
      this.options = "delete-perusahaan";
      deleteData({
        api_url: `${this.api_url}/data-barang/${id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if (data.success) {
            this.message_success = data.message;
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
        this.getBarangData(this.paging.current, {}, false);
      }
    },
  },
};
</script>
