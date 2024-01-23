<template>
  <div>
    <div class="flex justify-start space-x-4 p-2">
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

      <div v-if="showModal">
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
          v-if="showModal"
          class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
      </div>
    </div>
    <div v-if="showType" class="flex justify-start space-x-4 p-2">
      <pre>
        {{ type }}
    </pre
      >
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
      kode: this.$route.query["kode"],
      loading: null,
      showModal: false,
      selectedPerusahaan: null,
      perusahaans: [],
      type: "",
      showType: null,
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
      this.showModal = !this.showModal;
    },

    changePerusahaan(newValue) {
      const perusahaanId = newValue.id;
      if (perusahaanId !== undefined) {
        console.log(perusahaanId);
        this.dataPembelianLangsung(this.type);
        this.showModal = !this.showModal;
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

    getPerusahaanLists() {
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
      this.showModal = !this.showModal;
    },

    dataPembelianLangsung(type) {
      console.log(type);
      this.loading = true;
      const endPoint = `/cetak-pembelian-langsung/${type}/${this.kode}`;
      console.log(endPoint);

      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this?.token?.token}`,
          "Content-Type": "application/json",
          "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
        },
      };
      this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          if (data?.success) {
            this.showType = true;
          }
          console.log(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
