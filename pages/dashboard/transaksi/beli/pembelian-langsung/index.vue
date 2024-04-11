<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full px-6' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="PEMBELIAN BARANG KE SUPPLIER"
      types="pembelian-langsung"
      queryType="PEMBELIAN_LANGSUNG"
      queryMiddle="pembelian-langsung"
      :parentRoute="stringRoute"
      :typeRoute="typeRoute"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :paging="paging"
      :messageAlert="message_success"
      @filter-data="handleFilter"
      @close-alert="closeSuccessAlert"
      @deleted-data="deletedPembelian"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getPembelianLangsung"
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
  import { PEMBELIAN_LANGSUNG_TABLE } from "~/utils/table-pembelian-langsung";
  import { getData, deleteData } from "~/hooks/index";

  export default {
    name: "pembelian-langsung",
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
        headers: [...PEMBELIAN_LANGSUNG_TABLE],
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
      this.getPembelianLangsung(
        this.current ? Number(this.current) : 1,
        {view_all: false},
        true
        );
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

      handleFilter(param, types) {
        if (types === "pembelian-langsung") {
          if(param.supplier) {
            this.$router.push({
              path: '/dashboard/transaksi/beli/pembelian-langsung',
              query: {
                supplier: param.supplier
              }
            })
          } else {
            this.$router.push({
              path: '/dashboard/transaksi/beli/pembelian-langsung',
              query: {
                view_all: param.view_all
              }
            })
          }
          this.getPembelianLangsung(1, param, true);
        }
      },

      getPembelianLangsung(page = 1, param = {}, loading) {
        this.loading = loading;
        this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data pembelian langsung ...";

        const supplier = this.$route.query["supplier"];
        const endPoint = `${this.api_url}/data-pembelian-langsung?page=${page}&view_all=${this.$nuxt.viewAllPembelianLangsung}${param.date ? "&date_transaction=" + param.date :""}${param.supplier ? '&supplier='+param.supplier : supplier ? '&supplier='+supplier : ''}`

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
                tanggal: cell?.tanggal,
                kode: cell?.kode,
                kode_kas: cell?.kode_kas,
                jumlah: cell?.jumlah,
                lunas: cell?.lunas,
                operator: cell?.operator,
                supplier: cell?.supplier,
                nama_supplier: cell?.nama_supplier,
                return: cell?.return
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
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
      },

      deletedPembelian(id) {
        this.loading = true;
        this.options = "pembelian-langsung";
        deleteData({
          api_url: `${this.api_url}/data-pembelian-langsung/${id}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
          if (data.success) {
            this.message_success = data.message;
            this.success = true;

            this.scrollToTop();
            this.getPembelianLangsung(1, {}, false)
            setTimeout(() => {
              this.loading = false;
              this.$swal({
                position: "top-end",
                icon: "success",
                title: data.message,
                showConfirmButton: false,
                timer: 1500
              })
              this.options = "";
            }, 500);
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false
            this.$nuxt.globalLoadingMessage = "";
            this.getPembelianLangsung(1, {}, false)
          }, 500)
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
          if (this.$nuxt.notifs.find(item => item.routes === "pembelian-langsung")) {
            this.getPembelianLangsung(this.paging.current, {}, false);
          }
        }
      },
    },
  };
</script>
