<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12  px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="DATA BIAYA"
        types="data-biaya"
        queryType="DATA_BIAYA"
        queryMiddle="biaya"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :parentRoute="stringRoute"
        :typeRoute="typeRoute"
        :messageAlert="message_success"
        @filter-data="handleFilterKas"
        @close-alert="closeSuccessAlert"
        @deleted-data="deletePelanggan"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getDataBiaya"
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
import { BIAYA_DATA_TABLE } from "~/utils/table-data-biaya";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "biaya",
  layout: "admin",

  data() {
    return {
      current: this.$route.query["current"],
      sort: this.$route.query["sort"],
      routePath: this.$route.path,
      stringRoute: null,
      typeRoute: null,
      loading: null,
      options: "",
      success: null,
      message_success: "",
      headers: [...BIAYA_DATA_TABLE],
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
    this.getDataBiaya(1, {}, true);
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

    handleFilterKas(param, types) {
      if (types === "data-biaya") {
        this.getDataBiaya(1, param, false);
      }
    },

    getDataBiaya(page = 1, param = {}, loading) {
      this.loading = loading;
      getData({
        api_url: `${this.api_url}/data-biaya?page=${page}${
          param.nama
            ? "&keywords=" + param.nama
            : param.kode
            ? "&kode=" + param.kode
            : this.sort
            ? "&sort=" + this.sort
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
                nama: cell?.nama,
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
            }, 500);
          }
        })
        .catch((err) => console.log(err));
    },

    deletePelanggan(id) {
      this.loading = true;
      this.options = "delete-biaya";
      deleteData({
        api_url: `${this.api_url}/data-biaya/${id}`,
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
        if (this.$nuxt.notifs[0].routes === "biaya") {
          this.getDataBiaya(this.paging.current, {}, false);
        }
      }
    },
  },
};
</script>
