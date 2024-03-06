<template>
  <div class="flex flex-wrap mt-12">
    <div class="w-full">
      <div class="flex justify-center">
        <div class="flex-none w-full">
          <datepicker
            v-model="selectedDate"
            :config="datePickerConfig"
            @input="handleDateChange"
            placeholder="Tanggal Beli"
            :format="dateFormat"
            :style="{ width: '50vw' }"
          ></datepicker>
        </div>
      </div>
      <div class="grid grid-cols-1 mt-6">
        <div class="col-span-full">
          <div class="flex items-center">
            <input
              :checked="viewAll"
              id="checked-checkbox"
              type="checkbox"
              value=""
              @change="handleView"
              v-model="viewAll"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Tampilkan Seluruh Data</label
            >
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
      viewAll: true,
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

    handleView() {
      console.log(this.viewAll)
      this.$emit("filter-data", {
        nama: "",
        supplier: null,
        start_date: "",
        end_date: "",
        view_all: this.viewAll,
      });
    },

    clearSelectedCategory() {
      this.selectedCategory = null;
      this.clearKey += 1;
      this.$emit("filter-data", {
        nama: "",
        supplier: null,
        start_date: "",
        end_date: "",
        view_all: false,
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
            view_all: false,
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
          end_date: endDate,
          view_all: this.viewAll,
        });
      } else {
        const dateTransaction = this.$moment(date).format("YYYY-MM-DD");

        this.$emit("filter-data", {
          nama: "",
          kategori: "",
          date: dateTransaction,
          view_all: this.viewAll,
        });
      }
    },

    handleFilter(e) {
      const nama = e.target.value;
      this.$emit("filter-data", {
        nama: nama,
        kategori: "",
        start_date: "",
        end_date: "",
        view_all: this.viewAll,
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
