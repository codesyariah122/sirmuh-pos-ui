<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <th class="border-t-0 px-6 border-l-0 border-r-0 text-lg p-8 text-left">
        {{ $moment(column.tanggal).format("L") }}
      </th>

      <th class="border-t-0 px-6 border-l-0 border-r-0 text-lg p-8 text-left">
        {{ column.kode }}
      </th>

      <td class="whitespace-nowrap p-8 text-lg">
        <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          {{column.supplier}}
        </span>
      </td>

      <td class="whitespace-nowrap p-8 text-lg">
        {{column.kode_kas}}
      </td>

      <td class="whitespace-nowrap p-8 text-lg">
        {{ $format(column.jumlah) }}
      </td>

      <td class="whitespace-nowrap p-8 text-lg">
        <span
          v-html="generateLunas({ lunas: column.lunas, visa: column.visa })"
        ></span>
      </td>

      <td class="whitespace-nowrap p-8 text-lg">
        {{ column.operator }}
      </td>

      <td
        v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-left"
      >
        <dropdowns-table-dropdown
          @deleted-data="deletedData"
          @restored-data="restoredData"
          :id="column.id"
          :types="types"
          cellType="trash"
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
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
    };
  },

  mounted() {},

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
  },
};
</script>
