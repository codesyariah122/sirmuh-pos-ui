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
            <i class="fa-solid fa-boxes-stacked text-base mr-1"></i> Filter Data
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
            Karyawan
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
                  placeholder="Pencarian data karyawan ..."
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
              <div class="flex justify-between space-x-4">
                <div class="shrink w-[85%] text-black">
                  <Select2
                    v-model="selectedKode"
                    :settings="{ allowClear: true }"
                    :options="[{ id: null, text: 'Pilih Kode' }, ...kodes]"
                    @change="changeKode($event)"
                    @select="changeKode($event)"
                    placeholder="Pilih Berdasarkan Kode Karyawan"
                  />
                </div>

                  <div>
                    <button
                    @click="clearSelectedCategory"
                    class="text-white bg-red-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                    <i class="fa-solid fa-filter-circle-xmark"></i>
                  </button>
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
  name: "emerald-tabs",
  components: {
    Datepicker,
  },

  data() {
    return {
      openTab: 1,
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      input: {},
      kodes: [],
      selectedKode: null,
      currentPage: 1,
      totalPages: 1,
      startDate: null,
      endDate: null,
      selectedDate: [],
      datePickerConfig: {
        range: false,
      },
      dateFormat: "YYYY-MM-DD",
    };
  },
  beforeMount() {
    this.authTokenStorage();
  },
  created() {
    this.getKodeKaryawan();
  },

  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },

    clearSelectedCategory() {
      this.selectedKode = null;
      this.clearKey += 1;
      this.$emit("filter-data", {
        nama: "",
        kode: null,
        sort_name: "",
        sort_type: "",
      });
    },

    changeKode(newValues) {
      this.selectedKode = newValues?.text;
      if (this.selectedKode !== undefined) {
        this.$emit("filter-data", {
          nama: "",
          kode: this.selectedKode,
          sort_name: "",
          sort_type: "",
        });
      }
    },

    transformKodeKaryawan(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: item.kode,
        }));
    },

    getKodeKaryawan() {
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-karyawan?page=${currentPage}`,
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
          this.kodes = this.transformKodeKaryawan(data);
        })
        .catch((err) => console.log(err));
    },

    handleFilter(e) {
      const nama = e.target.value;
      this.$emit("filter-data", {
        nama: nama,
        kode: "",
        sort_name: "",
        sort_type: "",
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
