<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <div class="flex justify-start space-x-6">
        <div>
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

        <div>
          <button
          @click="clearSelectedData"
          class="text-white bg-red-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
          <i class="fa-solid fa-filter-circle-xmark"></i>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import Datepicker from "vue2-datepicker";
  import "vue2-datepicker/index.css";

  export default {
    name: "emerald-tabs",
    components: {
      Datepicker,
    },

    data() {
      return {
        api_url: process.env.NUXT_ENV_API_URL,
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        input: {},
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

    methods: {
      toggleTabs: function (tabNumber) {
        this.openTab = tabNumber;
      },

      handleDateChange(date) {
        if (date !== null && date.length === 2) {
          const startDate = this.$moment(date[0]).format("YYYY-MM-DD");
          const endDate = this.$moment(date[1]).format("YYYY-MM-DD");
          this.$nuxt.startDownload = true;
          this.$emit("filter-data", {
            keyword: "",
            kode: "",
            start_date: startDate,
            end_date: endDate,
          });
        } else {
          this.$emit("filter-data", {
            keyword: "",
            kode: "",
            start_date: "",
            end_date: "",
          });
        }
      },

      handleFilter(e) {
        const keyword = e.target.value;
        this.$nuxt.startDownload = true;
        this.$emit("filter-data", {
          keyword: keyword,
          startDate: "",
          endDate: "",
        });
      },

      clearSelectedData() {
        this.$nuxt.startDownload = false;
        this.selectedDate = null;
        this.clearKey += 1;
        this.$emit("filter-data", {
          keyword: "",
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
