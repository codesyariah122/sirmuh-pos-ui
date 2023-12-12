<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[
      color === 'light' ? 'bg-white' : 'bg-blueGray-800 text-white shadow-lg',
    ]"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-between">
        <div class="relative w-full px-2 max-w-full flex-grow flex-1">
          <h3
            class="font-bold text-xl"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            {{ title }}
            <i
              v-if="queryParam"
              class="fa-solid fa-trash-can-arrow-up text-lg"
            ></i>
          </h3>
        </div>
        <div v-if="!queryParam && types !== 'user-role'">
          <button
            type="button"
            @click="
              $router.push({
                path: `/dashboard/${queryMiddle}/add`,
                query: {
                  type: queryType,
                },
              })
            "
            class="text-white bg-[#866629] hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            <i class="fa-solid fa-plus"></i> Add
          </button>
        </div>

        <div v-else>
          <button
            v-if="types !== 'user-data'"
            @click="backTo"
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          >
            Back
          </button>
        </div>

        <div v-if="!queryParam && types !== 'user-role'">
          <button
            type="button"
            @click="
              total > 0
                ? $router.push({
                    path: `/dashboard/${queryMiddle}/trash`,
                    query: {
                      type: queryType,
                    },
                  })
                : null
            "
            class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <i class="fa-solid fa-trash"></i>
            <span class="sr-only">Notifications</span>
            <div
              class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
            >
              {{ total }}
            </div>
          </button>
        </div>
      </div>

      <div
        v-if="success"
        ref="alertNotifs"
        class="flex justify-center w-full bg-transparent mt-4"
      >
        <molecules-success-alert
          :success="success"
          :messageAlert="messageAlert"
          @close-alert="closeSuccessAlert"
        />
      </div>

      <div
        v-if="
          types === 'data-barang' ||
          types === 'data-kategori' ||
          types === 'bank-data'
        "
      >
        <div class="flex justify-start mt-6 mb-6 space-x-4">
          <div>
            <button
              @click="resetFilter"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reset Filter
              <i class="fa-solid fa-repeat"></i>
            </button>
          </div>

          <div v-if="types === 'data-barang'">
            <button
              @click="downloadData"
              type="button"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Export All
              <i class="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-start w-full bg-transparent mt-2">
        <div v-if="types === 'data-barang'">
          <barangs-filter-barang @filter-data="filterData" />
        </div>
        <div v-if="types === 'data-kategori'">
          <kategori-barang-filter @filter-data="filterData" />
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto overflow-y-auto h-[65vh]">
      <table class="items-center bg-blueGray-800 border-collapse table-sticky">
        <molecules-table-header
          :headers="headers"
          :color="color"
          :types="types"
        />

        <tr v-if="$_.size(columns) < 1">
          <td
            colspan="12"
            style="text-align: center; width: 100%; display: table-cell"
          >
            Empty data
          </td>
        </tr>

        <barangs-barang-data-cell
          v-if="types === 'data-barang'"
          :columns="columns"
          :types="types"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <kategori-barang-cell
          v-if="types === 'data-kategori'"
          :columns="columns"
          :types="types"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <barangs-trash-cell
          v-if="types === 'data-barang-trash'"
          :columns="columns"
          :types="types"
          @deleted-data="deletedData"
          @restored-data="restoredData"
        />

        <tr v-if="loading">
          <molecules-row-loading :loading="loading" :options="options" />
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { totalTrash } from "~/hooks/index";

export default {
  props: {
    color: {
      default: "light",
      validator: function (value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
    title: {
      type: String,
    },
    headers: {
      type: Array,
    },
    columns: {
      type: Array,
    },
    types: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: null,
    },
    options: {
      type: String,
      default: "",
    },
    queryType: {
      type: String,
      default: "",
    },
    queryRole: {
      type: String,
      default: "",
    },
    queryMiddle: {
      type: String,
      default: "",
    },
    success: {
      type: Boolean,
      default: null,
    },
    messageAlert: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      total: 0,
      queryParam: this.$route.query.type,
      api_url: process.env.NUXT_ENV_API_URL,
    };
  },

  created() {
    this.checkNewData();
  },

  mounted() {
    this.totalTrash();
  },

  methods: {
    backTo() {
      this.$router.go(-1);
    },

    deletedData(id) {
      this.$emit("deleted-data", id);
    },

    restoredData(id) {
      this.$emit("restored-data", id);
    },

    totalTrash() {
      totalTrash({
        api_url: `${this.api_url}/data-total-trash?type=${this.queryType}${
          this.queryRole ? "&roles=" + this.queryRole : ""
        }`,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
        token: this.token.token,
      })
        .then(({ data }) => {
          this.total = data;
        })
        .catch((err) => console.log(err));
    },

    closeSuccessAlert() {
      this.$emit("close-alert");
    },

    filterData(param) {
      this.$emit("filter-data", param, this.types);
    },

    resetFilter() {
      this.$emit("filter-data", {}, this.types);
    },

    downloadData() {
      if (this.types === "campaign-data") {
        this.$emit("download-data");
      }
    },
  },

  watch: {
    notifs() {
      if (this.$_.size(this.notifs) > 0) {
        // this.$toast.show(this.messageNotifs, {
        //   type: "info",
        //   duration: 5000,
        //   position: "top-right",
        // });
        this.totalTrash();
      }
    },
  },
};
</script>
