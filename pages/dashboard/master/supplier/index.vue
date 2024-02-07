<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12  px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="DATA SUPPLIER"
        types="data-supplier"
        queryType="DATA_SUPPLIER"
        queryMiddle="supplier"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :messageAlert="message_success"
        parentRoute="master"
        :typeRoute="typeRoute"
        :orderBy="orderBy"
        @filter-data="handleFilterSupplier"
        @close-alert="closeSuccessAlert"
        @deleted-data="deleteSupplier"
        @sort-data="handleSortData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getDataSupplier"
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
import { SUPPLIER_DATA_TABLE } from "~/utils/table-supplier";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "supplier",
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
      headers: [...SUPPLIER_DATA_TABLE],
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
    this.getDataSupplier(1, {}, true);
  },

  mounted() {
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
      if (types === "data-supplier") {
        this.getDataSupplier(1, param);
      }
    },

    handleSortData(param, types) {
      if (types === "data-supplier") {
        this.getDataSupplier(1, param, false);
      }
    },

    getDataSupplier(page = 1, param = {}) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (
          this.$nuxt.notifs[0].user &&
          this.$nuxt.notifs[0]?.user?.email === this.$nuxt.userData.email
        ) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      } else {
        this.loading = true;
      }
      this.$nuxt.globalLoadingMessage = "Proses menyiapkan data supplier ...";
      getData({
        api_url: `${this.api_url}/data-supplier?page=${page}${
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
                nama: cell?.nama,
                kode: cell?.kode,
                kota: cell?.kota,
                alamat: cell?.alamat,
                telp: cell?.telp,
                fax: cell?.fax,
                email: cell?.email,
                saldo_piutang: cell?.saldo_piutang,
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

    deleteSupplier(id) {
      this.loading = true;
      this.options = "delete-supplier";
      deleteData({
        api_url: `${this.api_url}/data-supplier/${id}`,
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
        .finally(() => {
          this.scrollToTop();
          setTimeout(() => {
            this.loading = false;
            this.options = "";
          }, 1500);
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
        if (this.$nuxt.notifs[0].routes === "supplier") {
          this.getDataSupplier(this.paging.current, {}, false);
        }
      }
    },
  },
};
</script>
