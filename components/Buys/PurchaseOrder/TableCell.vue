<template>
  <tbody>
    <tr v-for="(column, idx) in columns" :key="idx">
      <th class="whitespace-nowrap p-4 text-lg">
        {{ $moment(column.tanggal).format("L") }}
      </th>

      <th class="whitespace-nowrap p-4 text-lg">
        <span
        class="bg-blue-100 me-2 px-2.5 py-0.5 text-blue-800 rounded  border border-blue-400"
        >
        {{ column.kode }}
      </span>
    </th>

    <td
    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right"
    >
    {{ $format(column.jumlah) }}
  </td>

  <td class="whitespace-nowrap p-4 text-lg">
    <span
    class="bg-green-100 me-2 px-2.5 py-0.5  text-green-800 rounded  border border-green-400"
    >
    {{ column.nama_supplier }} ({{ column.supplier }})
  </span>
</td>

<td class="whitespace-nowrap p-8 text-lg text-center">
  <span
  v-html="generateLunas({ lunas: column.lunas, visa: column.visa })"
  ></span>
</td>

<td class="whitespace-nowrap p-8 text-lg">
  <span class="bg-purple-100  text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded border border-purple-400">
    {{ column.operator }}
  </span>
</td>

<td
v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
class="whitespace-nowrap p-8 text-lg"
>
<dropdowns-table-dropdown
@deleted-data="deletedData"
@restored-data="restoredData"
:id="column.id"
:types="types"
:param="column.id"
:paging="paging"
cellType="transaksi"
:role="roleId"
:queryData="column.kode"
:parentRoute="parentRoute"
:typeRoute="typeRoute"
:paramData="{lunas: column.lunas, hutang: column.hutang, stop_qty: column.stop_qty, return: column.return}"
cetakTitle="Pembelian P.O"
queryMiddle="purchase-order"
queryType="PURCHASE_ORDER"
detailUrl="/dashboard/transaksi/beli/purchase-order"
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
      groupedData: [],
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.groupData();
    this.checkUserLogin();
  },

  methods: {
    generateLunas(data) {
      let icon;
      if (data.lunas == "True" && data.visa !== "HUTANG") {
        icon = `<i class="fa-solid fa-check fa-lg text-emerald-600"></i>`;
      } else {
        icon = '<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>';
      }
      return icon;
    },
    deletedData(id) {
      this.$emit("deleted-data", id);
    },

    restoredData(id) {
      this.$emit("restored-data", id);
    },

    groupData() {
      const grouped = {};
      this.columns.forEach((column) => {
        if (!grouped[column.kode]) {
          grouped[column.kode] = [];
        }
        grouped[column.kode].push(column);
      });

      this.groupedData = Object.values(grouped);
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
