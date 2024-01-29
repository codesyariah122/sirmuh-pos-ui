<template>
  <div class="flex flex-wrap mt-4">
    <div
      :class="`${
        $nuxt.showSidebar ? 'w-full mb-12 ml-6' : '-ml-10 max-w-full'
      }`"
    >
      <cards-card-table
        color="light"
        title="LAPORAN PEMBELIAN BARANG"
        types="laporan-pembelian-barang"
        queryType="LAPORAN PEMBELIAN BARANG"
        queryMiddle="laporan-pembelian-barang"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :messageAlert="message_success"
        @filter-data="handleFilterSupplier"
        @close-alert="closeSuccessAlert"
        @deleted-data="deletePelanggan"
        @download-data="downloadData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getDataKaryawan"
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
import { BARANG_PEMBELIAN_LAPORAN_DATA_TABLE } from "~/utils/table-data-laporan-pembelian-barang";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "laporan-pembelian-barang",
  layout: "admin",

  data() {
    return {
      current: this.$route.query["current"],
      loading: null,
      options: "",
      success: null,
      message_success: "",
      headers: [...BARANG_PEMBELIAN_LAPORAN_DATA_TABLE],
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
    this.getDataKaryawan();
    this.checkUserLogin();
  },

  methods: {
    handleFilterSupplier(param, types) {
      if (types === "data-pemasukan") {
        this.getDataKaryawan(1, param);
      }
    },

    getDataKaryawan(page = 1, param = {}) {
      this.loading = true;
      getData({
        api_url: `${this.api_url}/laporan-pembelian-barang?page=${page}${
          param.nama
            ? "&keywords=" + param.nama
            : param.kode
            ? "&kode=" + param.kode
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
                hpp: cell?.hpp,
                diskon: cell?.diskon,
                qty: cell?.qty,
                jumlah: cell?.jumlah,
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
        api_url: `${this.api_url}/laporan-pembelian-barang/${id}`,
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
        this.getDataKaryawan(this.paging.current);
      }
    },
  },
};
</script>
