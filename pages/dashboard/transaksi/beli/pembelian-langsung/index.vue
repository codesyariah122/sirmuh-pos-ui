<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12' : '-ml-10 max-w-full'}`">
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
        @filter-data="handleFilterBarang"
        @close-alert="closeSuccessAlert"
        @deleted-data="deleteBarang"
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
    this.getPembelianLangsung(this.current ? Number(this.current) : 1, {});
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
      if (types === "pembelian-langsung") {
        this.getPembelianLangsung(1, param);
      }
    },

    getPembelianLangsung(page = 1, param = {}) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0]?.user?.email === this.$nuxt.userData.email) {
          this.loading = true;
        } else {
          if (
            this.current ||
            this.$route.query["success"] === "add-new-pembelian-langsung"
          ) {
            this.loading = true;
          } else {
            this.loading = false;
          }
        }
      } else {
        this.loading = true;
      }

      this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data pembelian langsung ...";

      getData({
        api_url: `${this.api_url}/data-pembelian-langsung`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          let cells = [];
          if (data?.success) {
            data?.data?.map((cell) => {
              const prepareCell = {
                id: cell?.id,
                nama_barang: cell?.nama_barang,
                satuan_barang: cell?.satuan_barang,
                harga_beli: cell?.harga_beli,
                tanggal: cell?.tanggal,
                kode: cell?.kode,
                qty: cell?.qty,
                nama_supplier: cell?.nama_supplier,
                alamat_supplier: cell?.alamat_supplier,
                kode_kas: cell?.kode_kas,
                jumlah: cell?.jumlah,
                lunas: cell?.lunas,
                hutang: cell?.hutang,
                jt: cell?.jt,
                visa: cell?.visa,
                keterangan: cell?.keterangan,
                operator: cell?.operator,
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
            }, 2500);
          }
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },

    deleteBarang(id) {
      this.loading = true;
      this.options = "delete-barang";
      deleteData({
        api_url: `${this.api_url}/data-barang/${id}`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          console.log(data);
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
        if (this.$nuxt.notifs[0].routes === "pembelian-langsung") {
          this.getPembelianLangsung(this.paging.current, {}, false);
        }
      }
    },
  },
};
</script>
