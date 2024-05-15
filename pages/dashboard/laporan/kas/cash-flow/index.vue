<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-12' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="DATA LAPORAN CASH FLOW"
      types="laporan-cash-flow"
      queryType="DATA_LAPORAN_CASH_FLOW"
      queryMiddle="laporan-cash-flow"
      tableSetting="laporan"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :messageAlert="message_success"
      @filter-data="handleFilterCashFlow"
      @close-alert="closeSuccessAlert"
      @deleted-data="deletePelanggan"
      @download-data="downloadData"
      />

      <div class="mt-6 -mb-2">
        <div class="flex justify-center items-center">
          <molecules-pagination
          :links="links"
          :paging="paging"
          @fetch-data="getDataLaporanCashFlow"
          />
        </div>
      </div>
    </div>

    <div class="w-full">
      <!-- Modal Supplier List -->
      <div v-if="showModalLaporanCashFlow">
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
  v-if="showModalLaporanCashFlow"
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
  import { LAPORAN_DATA_CASH_FLOW } from "~/utils/table-data-laporan-cash-flow";

  export default {
    name: "laporan-cash-flow",
    layout: "admin",

    data() {
      return {
        showModalLaporanCashFlow: false,
        selectedPerusahaan: null,
        perusahaans: [],
        start_date: null,
        end_date: null,
        current: this.$route.query["current"],
        loading: null,
        options: "",
        success: null,
        message_success: "",
        headers: [...LAPORAN_DATA_CASH_FLOW],
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
      this.getDataLaporanCashFlow(1, {});
      this.checkUserLogin();
    },

    methods: {
      handleFilterCashFlow(param, types) {
        if (types === "laporan-cash-flow") {
          if(param.start_date && param.end_date || param.start_date || param.end_date) {
            this.start_date = param.start_date;
            this.end_date = param.end_date;

            this.$router.push({
              path: '/dashboard/laporan/kas/cash-flow',
              query: {
                start_date: param.start_date,
                end_date: param.end_date
              }
            })

          } else {
            this.$router.push('/dashboard/laporan/kas/cash-flow')
          }
          this.getDataLaporanCashFlow(1, param);
        }
      },

      changePerusahaan(newValue) {
        const perusahaanId = newValue.id;
        if (perusahaanId !== undefined) {
          const printUrl = `${this.server_url}/laporan/kas/cash-flow/${perusahaanId}/${this.start_date}/${this.end_date}`;
          window.open(printUrl, "_blank");
          this.showModalLaporanCashFlow = !this.showModalLaporanCashFlow;
          this.selectedPerusahaan = null;
          this.$nuxt.startDownload = false;
        }
      },

      getDataLaporanCashFlow(page = 1, param = {}) {
        this.loading = true;
        this.$nuxt.globalLoadingMessage = "Proses menyiapkan data laporan pembelian periode ...";

        const start_date = this.$route.query["start_date"],
        end_date = this.$route.query["end_date"];

        const endPoint = `${this.api_url}/laporan-cash-flow?page=${page}&start_date=${param.start_date ? param.start_date : start_date}&end_date=${param.end_date ? param.end_date : end_date}`

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
                tanggal: cell?.data?.tanggal,
                kode: cell?.data?.kode,
                jenis_data: cell?.data?.jenis_data,
                nama_biaya: cell?.data?.nama_biaya,
                kategori: null,
                pemasukan: !isNaN(cell?.total_pemasukan) ? cell?.total_pemasukan : 0,
                pengeluaran: !isNaN(cell?.total_pengeluaran) ? cell?.total_pengeluaran : 0,
                pelanggan: cell?.data?.pelanggan,
                supplier: cell?.data?.supplier
              };
              cells.push(prepareCell);
            });
            this.items = [...cells];

            this.links = data?.meta?.links;
            this.paging.current = Number(data?.meta?.current_page);
            this.paging.from = Number(data?.meta?.from);
            this.paging.last = Number(data?.meta?.last_page);
            this.paging.per_page = Number(data?.meta?.per_page);
            this.paging.total = Number(data?.meta?.total);

            setTimeout(() => {
              this.loading = false;
            }, 500);
          }
        })
        .catch((err) => console.log(err));
      },

      downloadData(download) {
        if (download) {
          this.showModalLaporanCashFlow = true;
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
        this.showModalLaporanCashFlow = !this.showModalLaporanCashFlow;
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
          this.getDataLaporanCashFlow(this.paging.current);
        }
      },
    },
  };
</script>
