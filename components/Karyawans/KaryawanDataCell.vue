<template>
  <tbody>
    <tr
    v-for="column in columns"
    :key="column.id"
    class="bg-white border-b text-lg border-l-2 border-r-2 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
    <th class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 text-left border-l-2 border-r-2">
      {{ column.nama }}
    </th>

    <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
      <span class="bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
        {{column.kode}}
      </span>
    </td>

    <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
      {{ column.level }}
    </td>

    <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
      {{ column.users && column.users.length > 0 ? column?.users[0]?.email : '-'}}
    </td>

    <td v-if="column.users" class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 text-center">
      <span>
        <i v-if="column?.users[0]?.is_login" class="fa-solid fa-circle text-success-600 text-2xl"></i>
        <i v-else class="fa-solid fa-circle text-red-600 text-2xl"></i>
      </span>
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
    :role="roleId"
    :queryData="column.kode"
    :parentRoute="parentRoute"
    :typeRoute="typeRoute"
    queryMiddle="karyawan"
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
    types: {
      type: String,
    },
    paging: {
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
