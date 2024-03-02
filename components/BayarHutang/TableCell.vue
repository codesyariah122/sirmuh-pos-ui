<template>
  <tbody>
    <tr v-for="(column, idx) in columns" :key="idx">
      <th class="border-t-0 px-6 border-l-0 border-r-0 text-lg p-8 text-left">
        {{ $moment(column.tanggal).format("YYYY-MM-DD") }}
      </th>

      <th class="border-t-0 px-6 border-l-0 border-r-0 text-lg p-8 text-left">
        <span
          class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
        >
          {{ column.kode }}
        </span>
      </th>

      <td class="whitespace-nowrap p-4 text-lg">
        {{ column.supplier }}
      </td>

      <td class="text-right whitespace-nowrap p-8 text-lg">
        {{ $format(column.jumlah) }}
      </td>

      <td class="text-right whitespace-nowrap p-8 text-lg">
        {{ column.sisa < 0 ? 'Rp. 0' : $format(column.sisa) }}
      </td>

      <td class="whitespace-nowrap p-8 text-lg">
        {{ $roundup(column.tempo) }} Hari
      </td>

      <td class="whitespace-nowrap p-8 text-lg">
        {{ $moment(column.tanggal).add(column.tempo, "days").format("LL") }}
      </td>

      <td class="whitespace-nowrap p-8 text-lg">
        {{ column.operator }}
      </td>

      <td
        v-if="column.token !== token.token"
        class="whitespace-nowrap p-8 text-lg"
      >
        <dropdowns-table-dropdown
          @deleted-data="deletedData"
          @restored-data="restoredData"
          :id="column.id"
          :types="types"
          :param="column.id"
          :paging="paging"
          :noFaktur="column.kode"
          cellType="bayar"
          :role="roleId"
          :queryData="column.kode"
          :parentRoute="parentRoute"
          :typeRoute="typeRoute"
          cetakTitle="bayarHutang"
          queryMiddle="bayar-hutang"
          queryType="BAYAR_HUTANG"
          detailUrl="/dashboard/transaksi/bayar-hutang"
          :dataItem="column"
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
    typeRoute: {
      type: [String, Number],
      default: null,
    },
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      userData: [],
      name: "",
      roleId: this.$nuxt.roleId,
      groupedData: [],
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  created() {
    this.$nuxt.checkUserLogin();
  },

  mounted() {
    this.groupData();
  },

  methods: {
    generateLunas(data) {
      let icon;
      if (data.lunas === 1 || data.visa === "LUNAS") {
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
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
