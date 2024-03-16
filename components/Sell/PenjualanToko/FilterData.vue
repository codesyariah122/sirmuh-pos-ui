<template>
  <div class="flex flex-wrap mt-12">
    <div class="w-full">
      <div class="flex justify-start space-x-6">
        <div>
          <datepicker
            v-model="selectedDate"
            :config="datePickerConfig"
            @input="handleDateChange"
            placeholder="Tanggal Beli"
            :format="dateFormat"
            :style="{ width: '20vw' }"
          ></datepicker>
        </div>

        <div v-if="loadingSupplier">
          <div role="status">
            <svg aria-hidden="true" class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            <span class="sr-only">Loading...</span>
          </div>
          Preparing data supplier ...
        </div>
        <div v-else class="shrink-0 w-80">
          <Select2
          v-model="selectedSupplier"
          :settings="{
            allowClear: true,
            dropdownCss: { top: 'auto', bottom: 'auto' },
          }"
          :options="[{ id: null, text: 'Pilih Supplier' }, ...suppliers]"
          @change="changeSupplier($event)"
          @select="changeSupplier($event)"
          placeholder="Pilih Supplier"
          />
        </div>

        <div>
          <button
          @click="clearSelectedData"
          class="text-white bg-red-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            <i class="fa-solid fa-filter-circle-xmark"></i>
          </button>
        </div>
      </div>
      <div class="flex justify-start space-x-6 mt-6">
        <div class="col-span-full">
          <div class="flex items-center">
            <input
              :checked="$nuxt.viewAll"
              id="checked-checkbox"
              type="checkbox"
              value=""
              @change="handleView"
              v-model="$nuxt.viewAll"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{$nuxt.viewAll ? 'Tampilkan data hari ini saja' : 'Tampilkan seluruh data'}}</label
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
      viewAll: true,
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

  mounted() {
    this.getSupplierLists();
  },

  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },

    clearSelectedData() {
      this.selectedSupplier = "";
      this.clearKey += 1;
      this.$emit("filter-data", {
        keywords: "",
        supplier: this.selectedSupplier,
        date: "",
        view_all: this.$nuxt.viewAll,
      });
    },

    changeSupplier(newValue) {
      const supplier = newValue.id;
      if (supplier !== undefined) {
        this.$emit("filter-data", {
          keywords: "",
          supplier: supplier,
          date: "",
          view_all: this.$nuxt.viewAll,
        });
      }
    },

    transformSupplierLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: `${item.nama} - ${item.kode}`,
        }));
    },

    getSupplierLists() {
      this.loadingSupplier = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/list-of-suppliers?page=${currentPage}`,
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
          this.suppliers = this.transformSupplierLists(data);
        })
        .finally(() => {
          this.loadingSupplier = false;
        })
        .catch((err) => console.log(err));
    },

    handleView() {
      console.log(this.$nuxt.viewAll)
      this.$emit("filter-data", {
        keywords: "",
        supplier: null,
        date: "",
        view_all: this.$nuxt.viewAll,
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
          keywords: "",
          supplier: "",
          kategori: "",
          start_date: startDate,
          end_date: endDate,
          view_all: this.$nuxt.viewAll,
        });
      } else {
        const dateTransaction = this.$moment(date).format("YYYY-MM-DD");

        this.$emit("filter-data", {
          keywords: "",
          supplier: "",
          kategori: "",
          date: dateTransaction,
          view_all: this.$nuxt.viewAll,
        });
      }
    },

    handleFilter(e) {
      const keywords = e.target.value;
      this.$emit("filter-data", {
        keyword: keywords,
        kategori: "",
        date: "",
        view_all: this.$nuxt.viewAll,
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
