<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <cards-card-table
        color="dark"
        title="DATA LAPORAN PEMBELIAN PERIODE"
        types="laporan-pembelian-periode"
        queryType="DATA_LAPORAN_PEMBELIAN_PERIODE"
        queryMiddle="laporan-pembelian-periode"
        :headers="headers"
        :columns="items"
        :loading="loading"
        :success="success"
        :messageAlert="message_success"
        @filter-data="handleFilterLaporanPembelianPeriode"
        @close-alert="closeSuccessAlert"
        @deleted-data="deletePelanggan"
        @download-data="downloadData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
            :links="links"
            :paging="paging"
            @fetch-data="getDataLaporanPembelianPeriode"
          />
        </div>
      </div>
    </div>

    <div class="w-full">
      <!-- Modal Supplier List -->
      <div v-if="showModalLaporanPeriode">
        <div
          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
        >
          <div class="relative w-96 my-6 mx-auto max-w-sm">
            <!--content-->
            <div
              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            >
              <!--header-->
              <div
                class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
              >
                <button
                  class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold"
                  v-on:click="toggleModal()"
                >
                  <span class="text-black h-6 w-6 text-2xl block">
                    <i class="fa-solid fa-xmark text-lg"></i>
                  </span>
                </button>
              </div>
              <!--body-->
              <div class="relative p-6 flex-auto">
                <div>
                  <Select2
                    v-model="selectedPerusahaan"
                    :settings="{
                      allowClear: true,
                      dropdownCss: { top: 'auto', bottom: 'auto' },
                    }"
                    :options="[
                      { id: null, text: 'Pilih Perusahaan' },
                      ...perusahaans,
                    ]"
                    @change="changePerusahaan($event)"
                    @select="changePerusahaan($event)"
                    placeholder="Pilih Perusahaan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="showModalLaporanPeriode"
          class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
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
import { getData } from "~/hooks/index";
import { PERIODE_PEMBELIAN_LAPORAN_DATA_TABLE } from "~/utils/table-data-laporan-pembelian-periode";

export default {
  name: "table-data-laporan-pembelian-periode",
  layout: "admin",

  data() {
    return {
      showModalLaporanPeriode: false,
      selectedPerusahaan: null,
      perusahaans: [],
      start_date: null,
      end_date: null,
      current: this.$route.query["current"],
      loading: null,
      options: "",
      success: null,
      message_success: "",
      headers: [...PERIODE_PEMBELIAN_LAPORAN_DATA_TABLE],
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      server_url: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
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

  beforeMount() {
    this.authTokenStorage();
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.getPerusahaanLists();
    this.getDataLaporanPembelianPeriode();
    this.checkUserLogin();
  },

  methods: {
    handleFilterLaporanPembelianPeriode(param, types) {
      if (types === "laporan-pembelian-periode") {
        this.start_date = param.start_date;
        this.end_date = param.end_date;
        this.getDataLaporanPembelianPeriode(1, param);
      }
    },

    changePerusahaan(newValue) {
      const perusahaanId = newValue.id;
      if (perusahaanId !== undefined) {
        const printUrl = `${this.server_url}/laporan/pembelian/laporan-pembelian-periode/${perusahaanId}/${this.start_date}/${this.end_date}`;
        window.open(printUrl, "_blank");
        this.showModalLaporanPeriode = !this.showModalLaporanPeriode;
        this.selectedPerusahaan = null;
        this.$nuxt.startDownload = false;
      }
    },

    getDataLaporanPembelianPeriode(page = 1, param = {}) {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        if (this.$nuxt.notifs[0]?.user?.email === this.$nuxt.userData.email) {
          this.loading = true;
        } else {
          if (this.current) {
            this.loading = true;
          } else {
            this.loading = false;
          }
        }
      } else {
        this.loading = true;
      }
      this.$nuxt.globalLoadingMessage =
        "Proses menyiapkan data laporan pembelian periode ...";

      getData({
        api_url: `${this.api_url}/laporan-pembelian-periode?page=${page}${
          param.keyword
            ? "&keywords=" + param.keyword
            : param.kode
            ? "&kode=" + param.kode
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
            data?.data?.map((cell) => {
              const prepareCell = {
                id: cell?.id,
                tanggal: cell?.tanggal,
                kode: cell?.kode,
                suplier: cell?.suplier,
                operator: cell?.operator,
                bayar: cell?.bayar,
                diskon: cell?.diskon,
                tax: cell?.tax,
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
            }, 500);
          }
        })
        .catch((err) => console.log(err));
    },

    downloadData(download) {
      if (download) {
        this.showModalLaporanPeriode = true;
      }
    },

    deletePelanggan(id) {
      this.loading = true;
      this.options = "delete-pemasukan";
      deleteData({
        api_url: `${this.api_url}/laporan-pembelian-periode/${id}`,
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

    transformPerusahaanLists(rawData) {
      return rawData
        .filter((item) => item && item.id)
        .map((item) => ({
          id: item.id,
          text: item.name,
        }));
    },

    async getPerusahaanLists() {
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-perusahaan?page=${currentPage}`,
            token: this.token.token,
            api_key: this.api_token,
          });

          allData = allData.concat(data?.data);
          totalPages = data?.meta?.last_page;
          currentPage++;
        }

        return allData;
      };

      getAllPages()
        .then((data) => {
          this.perusahaans = this.transformPerusahaanLists(data);
        })
        .catch((err) => console.log(err));
    },

    toggleModal: function () {
      this.showModalLaporanPeriode = !this.showModalLaporanPeriode;
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.$nuxt.notifs) > 0) {
        this.getDataLaporanPembelianPeriode(this.paging.current);
      }
    },
  },
};
</script>
