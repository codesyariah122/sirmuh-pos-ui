<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full px-6' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="BAYAR HUTANG"
        types="bayar-hutang"
        queryType="BAYAR_HUTANG"
        queryMiddle="bayar-hutang"
        :current="current"
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
            @fetch-data="getLaporanHutang"
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
import { BAYAR_HUTANG_TABLE } from "~/utils/table-bayar-hutang";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "bayar-hutang",
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
      headers: [...BAYAR_HUTANG_TABLE],
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

  mounted() {
    this.checkNewData();
    this.getLaporanHutang(this.current ? Number(this.current) : 1, {}, true);
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
        this.getLaporanHutang(1, param, false);
      }
    },

    getLaporanHutang(page = 1, param = {}, loading) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        // console.log(this.$nuxt.notifs[0].user.email);
        // console.log(this.$nuxt.userData.email);

        if (this.$nuxt.notifs[0].user.email === this.$nuxt.userData.email) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      } else {
        this.loading = loading;
      }
      this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data laporan hutang ...";
      getData({
        api_url: `${this.api_url}/data-hutang?page=${page}${
          param.nama
            ? "&keywords=" + param.keywords
            : param.method
            ? "&sort_name=" + param.name + "&sort_type=" + param.type
            : param.start_date && param.end_date
            ? "&start_date=" + param.start_date + "&end_date=" + param.end_date
            : param.start_date
            ? "&start_date=" + param.start_date
            : param.end_date
            ? "&end_date=" + param.end_date
            : ""
        }`,
        token: this.token.token,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then((data) => {
          let cells = [];
          if (data?.success) {
            data?.data?.data?.map((cell) => {
              console.log(cell);
              const prepareCell = {
                id: cell?.id,
                nama_barang: cell.barang_nama,
                kode: cell?.kode,
                tanggal: cell?.tanggal,
                supplier: cell?.supplier,
                nama_supplier: cell?.nama_supplier,
                jumlah: cell?.jumlah,
                jumlah_pembelian: cell?.jumlah_pembelian,
                diterima: cell?.diterima,
                tempo: cell?.jatuh_tempo,
                keterangan: cell?.keterangan,
                kode_kas: cell?.kode_kas,
                qty: cell?.qty,
                satuan: cell?.satuan,
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
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        })
        .catch((err) => console.log(err));
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
      if (this.$nuxt.notifs[0].routes === "pembelian-langsung") {
        this.getLaporanHutang(this.paging.current, {}, false);
      }
    },
  },
};
</script>
