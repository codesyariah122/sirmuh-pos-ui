<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-12' : 'max-w-full'}`">
      <cards-card-table
        color="light"
        title="LAPORAN LABA RUGI"
        types="data-laba-rugi"
        queryType="DATA_LABA_RUGI"
        queryMiddle="data-laba-rugi"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :messageAlert="message_success"
        @filter-data="handleFilterLabaRugi"
        @close-alert="closeSuccessAlert"
        @deleted-data="deletePelanggan"
        @download-data="downloadData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getDataLabaRugi"
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
import { LABA_RUGI_DATA_TABLE } from "~/utils/table-data-laba-rugi";
import { getData, deleteData } from "~/hooks/index";

export default {
  name: "laporan-laba-rugi",
  layout: "admin",

  data() {
    return {
      current: this.$route.query["current"],
      loading: null,
      options: "",
      success: null,
      message_success: "",
      headers: [...LABA_RUGI_DATA_TABLE],
      api_url: process.env.NUXT_ENV_API_URL,
      items: [],
      links: [],
      showModalLaporanLabaRugi: "",
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
    this.getDataLabaRugi();
    this.checkUserLogin();
  },

  methods: {
    handleFilterLabaRugi(param, types) {
      if (types === "data-laba-rugi") {
        if(param.pelanggan) {
          this.$router.push({
            path: '/dashboard/laporan/laba-rugi',
            query: {
              pelanggan: param.pelanggan
            }
          })
        } else {
          this.$router.push('/dashboard/laporan/laba-rugi')
        }
        this.getDataLabaRugi(1, param, false);
      }
    },

    getDataLabaRugi(page = 1, param = {}, loading) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0]?.user?.email === this.$nuxt.userData.email) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      } else {
        if (loading) {
          this.loading = loading;
        } else {
          this.loading = true;
        }
      }

      this.$nuxt.globalLoadingMessage = "Proses menyiapkan data laba rugi ...";

      const pelanggan = this.$route.query["pelanggan"];
      const endPoint = `${this.api_url}/data-laba-rugi?page=${page}&view_all=${param.view_all}${param.date ? "&date_transaction=" + param.date :""}${param.pelanggan ? '&pelanggan='+param.pelanggan : pelanggan ? "&pelanggan="+pelanggan : ""}${param.keyword ? '&keywords='+param.keyword : ''}`

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
                kode_barang: cell?.kode_barang,
                nama_barang: cell?.nama_barang,
                h_jual: cell?.harga_toko,
                penjualan: cell?.penjualan,
                hpp: cell?.hpp_barang,
                diskon: cell?.diskon,
                labarugi: cell?.labarugi,
                operator: cell?.operator,
                pelanggan: cell?.pelanggan,
                nama_pelanggan: cell?.nama_pelanggan,
                keterangan: cell?.keterangan
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

    downloadData(download) {
      if (download) {
        this.showModalLaporanPeriode = true;
      }
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0].routes === "penjualan-toko") {
          this.getDataLabaRugi(this.paging.current, {}, false);
        }
      }
    },
  },
};
</script>
