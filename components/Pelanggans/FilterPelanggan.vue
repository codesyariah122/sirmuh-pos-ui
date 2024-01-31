<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul
        class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row cursor-pointer"
      >
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(1)"
            v-bind:class="{
              'text-white bg-gray-900': openTab !== 1,
              'text-white bg-emerald-600': openTab === 1,
            }"
          >
            <i class="fa-solid fa-boxes-stacked text-base mr-1"></i> Pencarian
            Data
          </a>
        </li>

        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(3)"
            v-bind:class="{
              'text-white bg-gray-900': openTab !== 3,
              'text-white bg-emerald-600': openTab === 3,
            }"
          >
            <i class="fa-regular fa-calendar-days text-base mr-1"></i> Kode
            Pelanggan
          </a>
        </li>
      </ul>

      <div
        class="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 shadow-sm rounded"
      >
        <div class="px-0 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <input
                  @keyup="handleFilter($event)"
                  type="text"
                  placeholder="Filter berdasarkan nama pelanggan dan kode pelanggan ..."
                  class="px-3 py-3 placeholder-blueGray-500 relative bg-blueGray-900 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10 border hover:border-[#060501]"
                  v-model="input.nama"
                />
                <span
                  class="z-10 h-full leading-snug font-normal text-center text-blueGray-500 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>

            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <div class="flex justify-center">
                <div class="flex-none w-full text-black">
                  <Select2
                    v-model="selectedKode"
                    :settings="{ allowClear: true }"
                    :options="[
                      { id: null, text: 'Pilih Kode Pelanggan' },
                      ...kodes,
                    ]"
                    @change="changeKodePelanggan($event)"
                    @select="changeKodePelanggan($event)"
                    placeholder="Pilih Berdasarkan Kode Pelanggan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "~/hooks/index";
import Datepicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "filter-pelanggan",
  components: {
    Datepicker,
  },

  data() {
    return {
      openTab: 1,
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      input: {},
      sales: [],
      kodes: [],
      selectedKode: null,
      selectedSales: null,
      currentPage: 1,
      totalPages: 1,
    };
  },
  beforeMount() {
    this.authTokenStorage();
  },
  created() {
    this.getListPelangganSales();
    this.getListPelangganKodes();
  },

  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },

    changeCategory(newValues) {
      this.selectedSales = newValues?.text;
      if (this.selectedSales !== undefined) {
        this.$emit("filter-data", {
          nama: "",
          kategori: this.selectedSales,
          start_date: "",
          end_date: "",
        });
      }
    },

    changeKodePelanggan(newValues) {
      this.selectedKode = newValues?.text;
      if (this.selectedKode !== undefined) {
        this.$emit("filter-data", {
          nama: "",
          sales: "",
          kode: this.selectedKode,
        });
      }
    },

    transformPelangganSales(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: item.sales,
        }));
    },

    getListPelangganSales() {
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-pelanggan?page=${currentPage}`,
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
          this.sales = this.transformPelangganSales(data);
        })
        .catch((err) => console.log(err));
    },

    transformPelangganKodes(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: item.kode,
        }));
    },

    getListPelangganKodes() {
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-pelanggan?page=${currentPage}`,
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
          this.kodes = this.transformPelangganKodes(data);
        })
        .catch((err) => console.log(err));
    },

    handleFilter(e) {
      const nama = e.target.value;
      this.$emit("filter-data", {
        nama: nama,
        sales: "",
        kode: "",
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
