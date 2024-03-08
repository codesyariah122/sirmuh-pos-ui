<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="DATA KAS"
        types="kas"
        queryType="DATA_KAS"
        queryMiddle="kas"
        :parentRoute="stringRoute"
        :typeRoute="typeRoute"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :orderBy="orderBy"
        :messageAlert="message_success"
        @filter-data="handleFilterKas"
        @close-alert="closeSuccessAlert"
        @deleted-data="deleteKas"
        @sort-data="handleSortData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getDataKas"
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
import { KAS_DATA_TABLE } from "~/utils/table-data-kas";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "kas",
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
      headers: [...KAS_DATA_TABLE],
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
    this.$nuxt.checkRolesAccess();
    this.generatePath();
    this.getDataKas(1, {}, true);
    this.checkUserLogin();
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
      if (types === "kas") {
        this.getDataKas(1, param, false);
      }
    },

    handleSortData(param, types) {
      if (types === "kas") {
        this.getDataKas(1, param, false);
      }
    },

    getDataKas(page = 1, param = {}, loading) {
      this.loading = loading;
      this.$nuxt.globalLoadingMessage = "Proses menyiapkan data kas ...";

      getData({
        api_url: `${this.api_url}/data-kas?page=${page}${
          param.nama
            ? "&keywords=" + param.nama
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
                kode: cell?.kode,
                nama: cell?.nama,
                saldo: cell?.saldo,
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

    deleteKas(id) {
      this.loading = true;
      this.options = "delete-kas";
      this.$nuxt.globalLoadingMessage = "Proses menghapus data kas ...";
      deleteData({
        api_url: `${this.api_url}/data-kas/${id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          if(data.error) {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
            this.loading = false;
          }
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
    notifs() {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        console.log("Yeee Created");
        if (this.$nuxt.notifs[0].routes) {
          this.getDataKas(this.paging.current, {}, false);
        }
      }
    },
  },
};
</script>
