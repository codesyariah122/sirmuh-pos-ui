<template>
  <tbody>
    <tr
    v-for="column in columns"
    :key="column.id"
    class="border-b border-gray-200"
    >
    <th class="whitespace-nowrap p-4 text-lg text-left border-l-2 border-r-2">
      <span class="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400">
        {{ column.kode }}
      </span>
    </th>

    <td class="whitespace-nowrap p-4 text-lg font-semibold border-l-2 border-r-2">
      {{ column.nama }}
    </td>

    <td class="p-4 text-lg border-l-2 border-r-2">
      {{ column.alamat }}
    </td>

    <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
      {{ column.telp }}
    </td>

    <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
      {{ column.email }}
    </td>

    <td class="whitespace-nowrap p-4 text-lg text-right border-l-2 border-r-2">
      {{ $format(column.saldo_piutang) }}
    </td>

    <td
    v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
    class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2"
    >
    <dropdowns-table-dropdown
    @deleted-data="deletedData"
    @restored-data="restoredData"
    :id="column.id"
    :types="types"
    :param="column.id"
    :paging="paging"
    cellType="data"
    :parentRoute="parentRoute"
    :typeRoute="typeRoute"
    :role="roleId"
    :queryData="column.kode"
    queryMiddle="data-pelanggan"
    queryType="edit"
    />
  </td>
</tr>
</tbody>
</template>

<script>
  export default {
    props: {
      columns: {
        type: Array,
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
