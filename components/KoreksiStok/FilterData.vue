<template>
  <div class="flex flex-wrap mt-12">
    <div class="w-full">
      <div class="flex justify-start space-x-6">
        <div>
          <datepicker
          v-model="selectedDate"
          :config="datePickerConfig"
          @input="handleDateChange"
          placeholder="Tanggal Koreksi"
          :format="dateFormat"
          :style="{ width: '20vw' }"
          ></datepicker>
        </div>

        <div class="flex justify-start space-x-6">
          <div class="col-span-full">
            <div class="flex items-center">
              <input
              :checked="$nuxt.viewAllKoreksiStok"
              id="checked-checkbox"
              type="checkbox"
              value=""
              @change="handleView"
              v-model="$nuxt.viewAllKoreksiStok"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
              for="checked-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{$nuxt.viewAllKoreksiStok ? 'Tampilkan bulan ini saja' : 'Menampilkan seluruh data'}}</label
              >
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
        loadingSupplier: null,
        openTab: 1,
        api_url: process.env.NUXT_ENV_API_URL,
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        input: {},
        categories: [],
        selectedSupplier: null,
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
        selectedSupplier: null,
        suppliers: [],
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

      clearSelectedData() {
        this.selectedSupplier = "";
        this.clearKey += 1;
        this.$nuxt.viewAllKoreksiStok = true;
        this.$emit("filter-data", {
          keywords: "",
          supplier: this.selectedSupplier,
          date: "",
          view_all: true,
        });
      },

      handleView() {
        this.$emit("filter-data", {
          keywords: "",
          supplier: null,
          date: "",
          view_all: this.$nuxt.viewAllKoreksiStok,
        });
      },

      clearSelectedCategory() {
        this.selectedCategory = null;
        this.clearKey += 1;
        this.$emit("filter-data", {
          keywords: "",
          supplier: null,
          date: "",
          view_all: false,
        });
      },

      changeCategory(newValues) {
        this.selectedCategory = newValues?.id;
        if (this.selectedCategory !== undefined) {
          if (newValues.selected) {
            this.$emit("filter-data", {
              keywords: "",
              supplier: this.selectedCategory,
              date: "",
              view_all: false,
            });
          }
        } else {
          this.selectedCategory = null;
          this.clearKey += 1;
          this.$emit("filter-data", {
            keywords: "",
            supplier: "",
            start_date: "",
            end_date: "",
            view_all: false,
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

      handleDateChange(date) {
        if (date !== null && date.length === 2) {
          this.$nuxt.startDownload = true;
          const startDate = this.$moment(date[0]).format("YYYY-MM-DD");
          const endDate = this.$moment(date[1]).format("YYYY-MM-DD");

          this.$emit("filter-data", {
            keywords: "",
            supplier: "",
            kategori: "",
            start_date: startDate,
            end_date: endDate,
            view_all: this.$nuxt.viewAllKoreksiStok,
          });
        } else {
          const dateTransaction = this.$moment(date).format("YYYY-MM-DD");

          this.$emit("filter-data", {
            keywords: "",
            supplier: "",
            kategori: "",
            date: dateTransaction,
            view_all: this.$nuxt.viewAllKoreksiStok,
          });
        }
      },

      handleFilter(e) {
        const keywords = e.target.value;
        this.$emit("filter-data", {
          keyword: keywords,
          kategori: "",
          date: "",
          view_all: this.$nuxt.viewAllKoreksiStok,
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
