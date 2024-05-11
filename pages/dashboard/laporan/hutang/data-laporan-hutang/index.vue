<template>
  <div class="flex flex-wrap mt-4">
    <div :class="`${$nuxt.showSidebar ? 'w-full mb-12 px-12' : 'max-w-full'}`">
      <cards-card-table
      color="light"
      title="DATA LAPORAN HUTANG"
      types="data-laporan-hutang"
      queryType="DATA_LAPORAN_HUTANG"
      queryMiddle="data-laporan-hutang"
      tableSetting="laporan"
      :headers="headers"
      :columns="items"
      :loading="loading"
      :success="success"
      :paging="paging"
      :messageAlert="message_success"
      :orderBy="orderBy"
      @filter-data="handleFilterLaporanHutang"
      @close-alert="closeSuccessAlert"
      @deleted-data="deleteBarang"
      @sort-data="handleSortData"
      @download-data="downloadData"
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

    <div class="w-full">
      <!-- Modal Supplier List -->
      <div v-if="showModalLaporanHutang">
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
  v-if="showModalLaporanHutang"
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
 * @author Puji Ermanto <puuji.ermanto@gmail.com>
 */
  import { HUTANG_DATA_TABLE } from "~/utils/table-hutang";
  import { getData, deleteData } from "~/hooks/index";

  export default {
    name: "data-laporan-hutang",
    layout: "admin",

    data() {
      return {
        current: this.$route.query["current"],
        loading: null,
        options: "",
        success: null,
        message_success: "",
        headers: [...HUTANG_DATA_TABLE],
        api_url: process.env.NUXT_ENV_API_URL,
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        server_url: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
        items: [],
        links: [],
        showModalLaporanHutang: null,
        selectedPerusahaan: null,
        perusahaans: [],
        start_date: null,
        end_date: null,
        paging: {
          current: null,
          from: null,
          last: null,
          per_page: null,
          total: null,
        },
        orderBy: {
          field: "tanggal",
          name: "tanggal",
          type: "ASC",
        },
      };
    },

    created() {
      this.checkNewData();
    },

    beforeMount() {
      this.authTokenStorage();
    },

    mounted() {
      this.getLaporanHutang(this.current ? Number(this.current) : 1, {}, true);
      this.getPerusahaanLists();
    },

    methods: {
      handleFilterLaporanHutang(param, types) {
        if (types === "data-laporan-hutang") {
          this.start_date = param.start_date;
          this.end_date = param.end_date;
          this.getLaporanHutang(1, param);
        }
      },

      changePerusahaan(newValue) {
        const perusahaanId = newValue.id;
        if (perusahaanId !== undefined) {
          const printUrl = `${this.server_url}/laporan/hutang/${perusahaanId}/${this.start_date}/${this.end_date}`;
          window.open(printUrl, "_blank");
          this.showModalLaporanHutang = !this.showModalLaporanHutang;
          this.selectedPerusahaan = null;
          this.$nuxt.startDownload = false;
        }
      },

      handleSortData(param, types) {
        if (types === "data-laporan-hutang") {
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
              const prepareCell = {
                id: cell?.id,
                kode: cell?.kode,
                tanggal: cell?.tanggal,
                supplier: cell?.supplier,
                jumlah: cell?.jumlah,
                tempo: cell?.jatuh_tempo,
                kode_kas: cell?.kode_kas,
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
          }, 1000);
        })
        .catch((err) => console.log(err));
      },

      deleteBarang(id) {
        this.loading = true;
        this.options = "delete-data-laporan-hutang";
        deleteData({
          api_url: `${this.api_url}/data-data-laporan-hutang/${id}`,
          token: this.token.token,
          api_key: process.env.NUXT_ENV_APP_TOKEN,
        })
        .then((data) => {
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

      downloadData(download) {
        if (download) {
          this.showModalLaporanHutang = true;
        }
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
    },

    computed: {
      token() {
        return this.$store.getters["auth/getAuthToken"];
      },
    },

    watch: {
      notifs() {
        if (this.$_.size(this.$nuxt.notifs) > 0) {
          this.getLaporanHutang(this.paging.current);
        }
      },
    },
  };
</script>
