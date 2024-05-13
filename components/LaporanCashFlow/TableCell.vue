<template>
  <tbody>
    <tr v-for="(column, idx) in columns" :key="idx">
      <th
      class="whitespace-nowrap p-4 text-lg"
      style="width: 50px"
      >
      {{ $moment(column.tanggal).format("L") }}
    </th>
    <td
    class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
    >
    <span class="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
      {{ column.kode }}
    </span>
  </td>
  <td
  class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
  >
  <span class="bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400">
    {{ column.jenis_data }}
  </span>
</td>
<td
class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
>
{{ column.kategori }}
</td>
<td
class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right"
>
{{ $format(column.pemasukan) }}
</td>
<td
class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right"
>
{{ $format(column.pengeluaran) }}
</td>
<td class="whitespace-nowrap p-4 text-lg">
  <span v-if="column.pelanggan || column.supplier" class="bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
    {{ column.pelanggan || column.supplier }}
  </span>
  <span v-else></span>
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
