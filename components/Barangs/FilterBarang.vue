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
            <i class="fa-solid fa-boxes-stacked text-base mr-1"></i> Nama Barang
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(2)"
            v-bind:class="{
              'text-white bg-gray-900': openTab !== 2,
              'text-white bg-emerald-600': openTab === 2,
            }"
          >
            <i class="fas fa-cog text-base mr-1"></i> Supplier Barang
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
            <i class="fa-regular fa-calendar-days text-base mr-1"></i> Tanggal
            Beli
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
                  placeholder="Pencarian data ..."
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
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <!-- <select
                @change="changeCategory($event)"
                id="category_campaign"
                name="category_campaign"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent bg-blueGray-900 border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected value="" class="text-white">
                  Pilih Kategori Barang
                </option>
                <option
                  v-for="(category, idx) in categories"
                  :key="idx"
                  :value="category"
                >
                  {{ category }}
                </option>
              </select> -->
              <!-- <multiselect
                @input="changeCategory"
                @search-change="onSearchChange"
                v-model="selectedCategory"
                class="py-2.5 px-0 w-full text-white bg-[#060501] border border-[#060501] cursor-pointer hover:text-white"
                placeholder="Pilih kategori..."
                open-direction="bottom"
                :options="filteredCategories"
                :max-height="200"
                style="margin-bottom: 10px"
              ></multiselect> -->
              <div v-if="loadingCategory">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                Preparing data supplier
              </div>
              <div v-else class="flex justify-between space-x-4">
                <div class="shrink w-[100%]">
                  <Select2
                    v-model="selectedCategory"
                    :settings="{ allowClear: true }"
                    :key="clearKey"
                    :options="[
                      { id: null, text: 'Pilih kategori' },
                      ...categories,
                    ]"
                    @change="changeCategory($event)"
                    @select="changeCategory($event)"
                    placeholder="Pilih Kategori Barang"
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
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <div class="flex justify-center">
                <div class="flex-none w-full">
                  <datepicker
                    v-model="selectedDate"
                    :config="datePickerConfig"
                    @input="handleDateChange"
                    placeholder="Tanggal Beli"
                    :format="dateFormat"
                    :style="{ width: '50vw' }"
                    range
                  ></datepicker>
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

  props: {
    resetFilterProcess: {
      type: Boolean,
    },
  },

  data() {
    return {
      loadingCategory: null,
      openTab: 1,
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      input: {},
      categories: [],
      selectedCategory: null,
      clearKey: 0,
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
    this.getCategoryDataBarang();
  },

  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },

    clearSelectedCategory() {
      this.selectedCategory = null;
      this.clearKey += 1;
      this.$emit("filter-data", {
        nama: "",
        supplier: null,
        start_date: "",
        end_date: "",
      });
    },

    changeCategory(newValues) {
      this.selectedCategory = newValues?.id;
      if (this.selectedCategory !== undefined) {
        if (newValues.selected) {
          console.log("Kesini");
          this.$emit("filter-data", {
            nama: "",
            supplier: this.selectedCategory,
            start_date: "",
            end_date: "",
          });
        }
      } else {
        console.log("kesini false");
        this.selectedCategory = null;
        this.clearKey += 1;
        this.$emit("filter-data", {
          nama: "",
          supplier: null,
          start_date: "",
          end_date: "",
        });
      }
    },

    transformCategoryData(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: `${item.nama} - ${item.kode}`,
        }));
    },

    getCategoryDataBarang() {
      this.loadingCategory = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-supplier?page=${currentPage}`,
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
          this.categories = this.transformCategoryData(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingCategory = false;
          }, 1500);
        })
        .catch((err) => console.log(err));
    },

    // handleDateChange(date) {
    //   if (date !== null) {
    //     const year = date.getFullYear();
    //     const month = date.getMonth();
    //     const day = date.getDate();
    //     const dateEnd = this.$moment(date).format("YYYY-MM-DD");

    //     this.$emit("filter-data", {
    //       nama: "",
    //       kategori: "",
    //       start_date: `${year}-${month + 1}-${day}`,
    //       tgl_terakhir: dateEnd,
    //     });
    //   } else {
    //     this.$emit("filter-data", {
    //       nama: "",
    //       kategori: "",
    //       start_date: "",
    //       tgl_terakhir: "",
    //     });
    //   }
    // },

    handleDateChange(date) {
      if (date !== null && date.length === 2) {
        this.$nuxt.startDownload = true;
        const startDate = this.$moment(date[0]).format("YYYY-MM-DD");
        const endDate = this.$moment(date[1]).format("YYYY-MM-DD");

        this.$emit("filter-data", {
          nama: "",
          kategori: "",
          start_date: startDate,
          tgl_terakhir: endDate,
        });
      } else {
        this.$emit("filter-data", {
          nama: "",
          kategori: "",
          start_date: "",
          tgl_terakhir: "",
        });
      }
    },

    handleFilter(e) {
      const nama = e.target.value;
      this.$emit("filter-data", {
        nama: nama,
        kategori: "",
        startDate: "",
        endDate: "",
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
