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
                  class="px-3 py-3 placeholder-blueGray-500 text-white relative bg-blueGray-900 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10 border hover:border-[#060501]"
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
      this.$emit("filter-data", {
        keyword: keyword,
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
