<template>
  <tbody>
    <tr
    v-for="column in columns"
    :key="column.id"
    class="border-b border-gray-200 text-lg border-l-2 border-r-2"
    >
    <td class="p-4 text-lg border-l-2 border-r-2 text-left font-medium w-60">
      {{ column.nama }}
    </td>

    <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 text-left w-40">
      <span
      class="bg-blue-100 me-2 px-2.5 py-0.5 text-blue-800 font-semibold rounded  border border-blue-400">
      {{ column.kode }}
    </span>
  </td>

  <td class="w-12 p-4 text-right text-lg border-l-2 border-r-2">
    {{ $format(column.saldo_awal) }}
  </td>

  <td class="w-12 p-4 text-right text-lg border-l-2 border-r-2">
    <div class="flex justify-end space-x-4">
      <div>
        {{ $format(column.saldo) }}
      </div>
      <div>
        <span v-html="generateSaldo(parseFloat(column.saldo), parseFloat(column.saldo_awal))"></span>
      </div>
    </div>
  </td>
  <td
  v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
  class="w-12 p-4 text-left text-lg border-l-2 border-r-2"
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
  queryMiddle="kas"
  queryType="edit"
  />
</td>
</tr>
</tbody>
</template>

<script>
  export default {
    name: "kas-data-cell",
    props: {
      columns: {
        type: Array,
      default: function () {
        return {}; // or any other appropriate default value
      },
    },
    types: {
      type: String,
    },
    parentRoute: {
      type: String,
    default: null,
    },
    typeRoute: {
      type: String,
    default: null,
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
    generateSaldo(saldo, saldo_awal) {
      let icon = saldo > saldo_awal ? '<i class="fa-solid fa-arrow-trend-up text-emerald-600"></i>' : '<i class="fa-solid fa-arrow-trend-down text-red-700"></i>';
      return icon;
    },

    redirectUpload(id, type) {
      this.$router.push({
        path: `/dashboard/data-barang/upload/${id}`,
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
