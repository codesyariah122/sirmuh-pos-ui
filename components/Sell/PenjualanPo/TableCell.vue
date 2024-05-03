<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <th class="whitespace-nowrap p-4 text-lg">
        {{ $moment(column.tanggal).format("LL") }}
      </th>
      <th
      class="whitespace-nowrap p-4 text-lg"
      >
      <div class="flex justify-between space-x-12">
        <div>
          <span class="bg-blue-100 px-2.5 py-0.5 text-blue-800 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            {{ column.kode }}
          </span>
        </div>
      </div>
    </th>

    <td
    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-center"
    >
    <span v-html="generateLunas(column.lunas)"></span>
  </td>

  <td v-if="column.stop_qty === 'True'"
  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
  >
  <span class="bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
    On Proccess
  </span>
</td>

<td v-else
class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
>
<span v-if="column.receive === 'True'" class="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
  Dikirim
</span>
<span v-else class="bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-300 border border-red-300">
  Belum Dikirim
</span>
</td>

<td
class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right"
>
{{ $format(column.jumlah) }}
</td>

<td
class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
>
<span class="bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
  {{ column.operator }}
</span>
</td>

<td
v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
class="border-t-0 px-6 border-l-0 border-r-0 text-lg"
>
<dropdowns-table-dropdown
@deleted-data="deletedData"
@restored-data="restoredData"
:id="column.id"
:types="types"
:param="column.id"
:paging="paging"
cellType="transaksi"
:paramData="{lunas: column.lunas, piutang: column.piutang, stop_qty: column.stop_qty}"
:role="roleId"
:queryData="column.kode"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
cetakTitle="Penjualan"
queryMiddle="penjualan-po"
queryType="PENJUALAN_PO"
detailUrl="/dashboard/transaksi/jual/penjualan-po"
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
        return {};
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
    generateLunas(data) {
      return data === "True" || data === 1
      ? `<i class="fa-solid fa-check fa-lg text-emerald-600"></i>`
      : '<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>';
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
