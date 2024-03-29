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
      </div>
      <div class="flex justify-start space-x-6 mt-6">
        <div class="col-span-full">
          <div class="flex items-center">
            <input
              :checked="$nuxt.viewAllMutasi"
              id="checked-checkbox"
              type="checkbox"
              value=""
              @change="handleView"
              v-model="$nuxt.viewAllMutasi"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{$nuxt.viewAllMutasi ? 'Tampilkan bulan ini saja' : 'Menampilkan seluruh data'}}</label
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
      loadingJenisPemasukan: null,
      openTab: 1,
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      input: {},
      categories: [],
      selectedJenis: null,
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
      jenispemasukans: [],
    };
  },
  beforeMount() {
    this.authTokenStorage();
  },

  methods: {
    handleView() {
      this.$emit("filter-data", {
        keywords: "",
        date: "",
        view_all: this.$nuxt.viewAllMutasi,
      });
    },

    handleDateChange(date) {
      if (date !== null && date.length === 2) {
        this.$nuxt.startDownload = true;
        const startDate = this.$moment(date[0]).format("YYYY-MM-DD");
        const endDate = this.$moment(date[1]).format("YYYY-MM-DD");

        this.$emit("filter-data", {
          keywords: "",
          start_date: startDate,
          end_date: endDate,
          view_all: this.$nuxt.viewAllMutasi,
        });
      } else {
        const dateTransaction = this.$moment(date).format("YYYY-MM-DD");

        this.$emit("filter-data", {
          keywords: "",
          date: dateTransaction,
          view_all: this.$nuxt.viewAllMutasi,
        });
      }
    },

    handleFilter(e) {
      const keywords = e.target.value;
      this.$emit("filter-data", {
        keyword: keywords,
        date: "",
        view_all: this.$nuxt.viewAllMutasi,
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
