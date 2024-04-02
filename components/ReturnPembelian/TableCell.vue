<template>
  <tbody>
    <tr v-for="(column, idx) in columns" :key="idx">
      <th class="whitespace-nowrap p-4 text-lg">
        {{ $moment(column.tanggal).format("LL") }}
      </th>

      <th class="whitespace-nowrap p-4 text-lg">
        <span
          class="bg-blue-100 me-2 px-2.5 py-0.5 text-blue-800 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
        >
          {{ column.kode }}
        </span>
      </th>

      <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-right"
      >
        <span
          class="bg-indigo-200 me-2 px-2.5 py-0.5 text-indigo-800 rounded dark:bg-indigo-700 dark:text-indigo-400 border border-indigo-400"
        >
          {{ column.no_faktur }}
        </span>
      </td>

      <td class="whitespace-nowrap p-4 text-lg">
        <span class="bg-gray-100 text-gray-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
          {{ column.qty }} ({{ column.satuan }})
        </span>
      </td>

      <td class="whitespace-nowrap p-8 text-lg text-right">
        {{$format(column?.harga)}}
      </td>

      <td class="whitespace-nowrap p-8 text-lg text-right">
        {{$format(column?.jumlah)}}
      </td>

      <td class="whitespace-nowrap p-8 text-lg">
        <span class="bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          {{column.supplier}}
        </span>
      </td>

      <td class="whitespace-nowrap p-8 text-lg font-semibold text-italic">
        {{column.alasan}}
      </td>

      <td class="whitespace-nowrap p-8 text-lg">
        <span class="bg-purple-100  text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
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
          :pembelianType="pembelianType"
          :param="column.id"
          :paging="paging"
          cellType="transaksi"
          :role="roleId"
          :queryData="column.kode"
          :parentRoute="parentRoute"
          :paramData="{kembali: column.kembali, return: column.return}"
          :typeRoute="typeRoute"
          cetakTitle="Return Pembelian"
          queryMiddle="return-pembelian"
          queryType="RETURN_PEMBELIAN"
          detailUrl="/dashboard/transaksi/return-pembelian"
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
    pembelianType: {
      type: String
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
