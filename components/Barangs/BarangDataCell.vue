<template>
  <tbody>
    <tr
    v-for="(column, idx) in columns"
    :key="idx"
    class="border-b border-gray-200 dark:border-gray-700 text-lg hover:bg-gray-50 dark:hover:bg-gray-600"
    >
    <th class="whitespace-nowrap p-4 text-left text-lg border-l-2 border-r-2">
      <span class="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
        {{ column.kode }}
      </span>
    </th>

    <td class="font-semibold p-4 text-lg border-l-2 border-r-2">
      {{ column.nama }}
    </td>

    <td class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2">
      {{ parseFloat(column.stok ?? 0) }} {{ column.satuan }} <span v-html="generateTrend(parseFloat(column.stok), parseFloat(column.stok_akhir))"></span>
    </td>

    <td class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2">
      {{ parseFloat(column.stok_akhir ?? 0) }} {{ column.satuan }}
    </td>

    <td class="whitespace-nowrap p-8 text-lg text-right">
      {{ $format(column.hpp) }}
    </td>

    <td class="whitespace-nowrap p-8 text-lg text-right border-l-2 border-r-2">
      {{ $format(column.harga_toko) }}
    </td>

    <td class="whitespace-nowrap p-8 text-lg text-right border-l-2 border-r-2">
      {{ $format(column.harga_partai) }}
    </td>

    <td class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2">
      <span
      class="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded  border border-green-400"
      >
      {{
        column?.suppliers && column?.suppliers[0]?.nama
        ? column?.suppliers[0]?.nama
        : column.supplier_nama
      }}
      -
      {{
        column?.suppliers && column?.suppliers[0]?.nama
        ? column?.suppliers[0]?.kode
        : column.kode_supplier
      }}
    </span>
  </td>

  <td class="whitespace-nowrap p-6 text-lg border-l-2 border-r-2">
    <img
    :src="`${image_url}/barcodes/${column.barcode}_barcode.png`"
    class="w-[85px] h-[50px]"
    />
    <small class="text-xs">{{column.barcode}}</small>
  </td>

  <td
  v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
  class="whitespace-nowrap p-4 text-left border-l-2 border-r-2"
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
  queryMiddle="barang-by-suppliers"
  queryType="BARANG_BY_SUPPLIERS"
  detailUrl="/dashboard/master/barang/barang-by-suppliers"
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
    generateTrend(stok_kini, stok_akhir) {
      let icon = stok_kini > stok_akhir && stok_akhir !== 0  ? '<i class="fa-solid fa-arrow-trend-down text-red-700"></i>' : stok_akhir === 0 ? '' : '<i class="fa-solid fa-arrow-trend-up text-emerald-600"></i>';
      return icon;
    },

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
