<template>
  <div>
    <div class="flex justify-start space-x-4 p-2 mb-2">
      <div>
        <button
          @click="changeType('nota-kecil')"
          class="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          Cetak Nota Kecil
        </button>
      </div>

      <div>
        <button
          @click="changeType('nota-besar')"
          class="bg-yellow-600 text-white active:bg-yellow-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          Cetak Nota Besar
        </button>
      </div>

      <div v-if="showModalPembelian">
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
                <div v-if="loading">
                  <div role="status">
                    <svg aria-hidden="true" class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <span class="text-black font-bold">
                    Preparing data perusahaan
                  </span>
                </div>
                <div v-else>
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
          v-if="showModalPembelian"
          class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "~/hooks/index";

export default {
  data() {
    return {
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      server_url: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
      kode: this.$route.query["kode"],
      loading: null,
      showModalPembelian: false,
      selectedPerusahaan: null,
      perusahaans: [],
      type: "",
      showType: null,
      detailPerusahaan: {},
      showPrint: false,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.getPerusahaanLists();
  },

  methods: {
    changeType(type) {
      this.type = type;
      this.showModalPembelian = !this.showModalPembelian;
    },

    changePerusahaan(newValue) {
      const perusahaanId = newValue.id;
      if (perusahaanId !== undefined) {
        const printUrl = `${this.server_url}/transaksi/beli/cetak-nota/${this.type}/${this.kode}/${perusahaanId}`;
        window.open(printUrl, "_blank");
        this.showModalPembelian = !this.showModalPembelian;
        this.selectedPerusahaan = null;

        setTimeout(() => {
          this.showType = null;
          this.type = "";
        }, 500);
      }
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
      this.loading = true
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
        .finally(() => {
          setTimeout(() => {
            this.loading = false
          }, 500)
        })
        .catch((err) => console.log(err));
    },

    toggleModal: function () {
      this.showModalPembelian = !this.showModalPembelian;
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
