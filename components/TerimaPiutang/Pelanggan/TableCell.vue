<template>
  <tbody>
    <tr v-for="(column, idx) in columns" :key="idx">
      <th class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
        {{ $moment(column.tanggal).format("L") }}
      </th>

      <th class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
        <span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded  border border-blue-400">
          {{ column.kode }}
        </span>
      </th>

      <td class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2">
        <span
        class="bg-green-100 me-2 px-2.5 py-0.5 text-green-800 rounded border border-green-400"
        >
        {{ column.pelanggan }}
      </span>
    </td>

    <td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 text-center">
     <span
     v-html="generateLunas({ lunas: column.lunas, visa: column.visa })"
     ></span>
   </td>

   <td class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2 text-right">
    {{ $format(column.jumlah) }}
  </td>

  <td class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2">
    <span class="bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded border border-purple-400">
      {{ column.operator }}
    </span>
  </td>

  <td
  v-if="column.token !== token.token"
  class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2"
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
  cetakTitle="piutangPelanggan"
  queryMiddle="piutang-pelanggan"
  queryType="PIUTANG_PELANGGAN"
  detailUrl="/dashboard/transaksi/terima-piutang"
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
    generateJT(tgl, tempo) {
      const tanggalJatuhTempo = this.$moment(tgl).add(tempo, 'days');
      const hariSisa = tanggalJatuhTempo.diff(this.$moment(), 'days');

      // return `Jatuh tempo dalam ${hariSisa} hari lagi, pada ${tanggalJatuhTempo.format('LL')}`;
      return `${hariSisa} hari lagi`;
    },

    generateLunas(data) {
      let icon;
      if (data.lunas === "True" || data.visa === "LUNAS") {
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
