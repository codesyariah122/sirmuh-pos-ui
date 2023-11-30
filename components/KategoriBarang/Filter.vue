<style lang="scss">
/* Untuk mempengaruhi tampilan opsi terpilih ketika dihover */
select:hover {
  background-color: #060501;
}

/* Untuk mempengaruhi tampilan opsi terpilih ketika diklik */
select:active,
select:focus {
  background-color: #060501;
}

/* Untuk mempengaruhi tampilan opsi-opsi di dalam elemen <select> */
option {
  background-color: #060501; /* Warna latar belakang opsi */
  color: white; /* Warna teks opsi */
}

/* Untuk mempengaruhi tampilan opsi-opsi ketika dihover */
option:hover {
  background-color: #060501;
}

/* Untuk mempengaruhi tampilan opsi terpilih di dalam elemen <select> */
option:checked {
  background-color: #060501;
}
</style>

<template>
  <div class="flex flex-wrap">
    <div class="w-[450px]">
      <ul
        class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row cursor-pointer"
      >
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(1)"
            v-bind:class="{
              'text-white bg-gray-900': openTab !== 1,
              'text-white bg-[#866629]': openTab === 1,
            }"
          >
            <i class="fa-solid fa-boxes-stacked text-base mr-1"></i> KODE
            KATEGORI
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
                  placeholder="Filter berdasarkan kode kategori ..."
                  class="px-3 py-3 placeholder-blueGray-500 text-white relative bg-blueGray-900 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10 border hover:border-[#060501]"
                  v-model="input.title"
                  :style="{ 'background-color': '#060501' }"
                />
                <span
                  class="z-10 h-full leading-snug font-normal text-center text-blueGray-500 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
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
      categories: [],
      selectedCategory: null,
      searchQuery: "",
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

    onSearchChange(query) {
      // Perbarui nilai pencarian saat input pencarian berubah
      this.searchQuery = query;
    },

    handleFilter(e) {
      const kode = e.target.value;
      this.$emit("filter-data", {
        kode: kode,
      });
    },
  },
  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
    filteredCategories() {
      return this.categories
        .filter((category) =>
          category.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .slice(0, 5);
    },
  },
};
</script>
