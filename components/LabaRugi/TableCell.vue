<template>
  <tbody>
    <tr v-for="(column, idx) in columns" :key="idx">
      <th
        class="whitespace-nowrap p-4 text-lg"
      >
        {{ $moment(column.tanggal).format("LL") }}
      </th>
      <td
        class="whitespace-nowrap p-4 text-lg"
      >
        <span class="bg-blue-100 px-2.5 py-0.5 text-blue-800 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
          {{ column.kode }}
        </span>
      </td>
      <td
        class="whitespace-nowrap p-4 text-lg"
      >
        <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
          <span class="font-medium">{{ column.keterangan }}</span>
        </div>
      </td>
      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right"
      >
        {{ $format(column.penjualan) }}
      </td>
      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right"
      >
        {{ $format(column.hpp) }}
      </td>
      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right"
      >
        {{ $format(column.labarugi) }}
      </td>
      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
      >
        <span class="bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
          {{ column.operator }}
        </span>
      </td>

      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
      >
        <span class="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
          {{column.nama_pelanggan}}({{column.pelanggan}})
        </span>
      </td>
      
      <td
        v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left"
      >
        <dropdowns-table-dropdown
          @deleted-data="deletedData"
          @restored-data="restoredData"
          :id="column.id"
          :types="types"
          :param="column.id"
          :paging="paging"
          cellType="data"
          :role="roleId"
          :queryData="column.kode"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          queryMiddle="laporan-pembelian-periode"
          queryType="DATA_LAPORAN_PEMBELIAN_PERIODE"
        />
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    columns: {
      type: [Array, Object],
      default: function () {
        return {}; // or any other appropriate default value
      },
    },
    parentRoute: {
      type: String,
      default: null,
    },
    typeRoute: {
      type: String,
      default: null,
    },
    types: {
      type: String,
    },
    paging: {
      type: [Array, Object],
      default: function () {
        return {}; // or any other appropriate default value
      },
    },
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      userData: [],
      name: "",
      roleId: null,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.checkUserLogin();
  },

  methods: {
    redirectUpload(id, type) {
      this.$router.push({
        path: `/dashboard/${this.parentRoute}/${this.typeRoute}/data-barang/upload/${id}`,
        query: {
          type: type,
          current: this.paging.current,
        },
      });
    },
    deletedData(id) {
      this.$emit("deleted-data", id);
    },

    restoredData(id) {
      this.$emit("restored-data", id);
    },

    checkUserLogin() {
      if (this.$_.isObject(this.token)) {
        const endPoint = `${this.api_url}/user-data`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this?.token?.token}`,
            "Content-Type": "application/json",
            "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
          },
        };
        this.$api
          .get(endPoint, config)
          .then(({ data }) => {
            this.userData = data?.data;
            this.name = data?.data?.name;
            this.roleId = data?.data?.role;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Error Access!",
        });
        this.$router.replace("/");
      }
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
