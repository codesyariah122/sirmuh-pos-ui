<template>
  <nav aria-label="Page navigation example z-0">
    <ul class="flex flex-wrap list-style-none">
      <div v-for="(link, idx) in links" :key="idx">
        <li v-if="link.label === '&laquo; Previous'" class="page-item">
          <a
            :class="`page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  ${
              paging.current > 1
                ? 'cursor-pointer text-white bg-blueGray-800'
                : 'pointer-events-none text-blueGray-800'
            } focus:shadow-none`"
            @click="fetchAllData((paging.current -= 1))"
            tabindex="-1"
            aria-disabled="true"
            v-html="laquo"
          ></a>
        </li>

        <li v-else-if="link.active" class="page-item active">
          <a
            :class="`page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded hover:text-white hover:bg-blueGray-800 shadow-md focus:shadow-md ${
              link.active
                ? 'pointer-events-none text-white bg-blueGray-800'
                : 'cursor-pointer text-blueGray-900'
            }`"
            @click="fetchAllData(parseInt(link.label))"
            >{{ link.label }}</a
          >
        </li>

        <li
          v-else-if="link.label === 'Next &raquo;'"
          :class="`page-item ${
            paging.current === paging.last ? 'disabled' : ''
          }`"
        >
          <a
            :class="`page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${
              paging.current === paging.last
                ? 'pointer-events-none text-blueGray-800'
                : 'cursor-pointer text-white bg-blueGray-800'
            }`"
            @click="fetchAllData((paging.current += 1))"
            v-html="raquo"
          ></a>
        </li>

        <li v-else class="page-item">
          <a
            :class="`page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-blueGray-900 font-semibold hover:text-blueGray-700 hover:bg-blueGray-800 focus:shadow-none ${
              link.active ? 'pointer-events-none' : 'cursor-pointer'
            }`"
            @click="fetchAllData(parseInt(link.label))"
            >{{ link.label }}</a
          >
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["links", "paging", "category"],
  data() {
    return {
      laquo: "<i class='fa-solid fa-chevron-left'></i>",
      raquo: "<i class='fa-solid fa-chevron-right'></i>",
      keywords: this.$route.query["keywords"],
    };
  },
  methods: {
    fetchAllData(
      page = 1,
      keywords = this.keywords,
      barcode = "",
      category_id = this.category_id
    ) {
      console.log(keywords)
      this.$emit("fetch-data", page, keywords, barcode, category_id);
    },
  },
};
</script>
