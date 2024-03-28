<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <th class="whitespace-nowrap p-4 text-lg text-left">
        {{ $moment(column.tanggal).format("LL") }}
      </th>
      <th class="whitespace-nowrap p-4 text-lg text-left">
        <span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
          {{ column.kode }}
        </span>
      </th>

      <td class="whitespace-nowrap p-4 text-lg">
        {{column.keterangan}}
      </td>
      
      <td class="whitespace-nowrap p-4 text-lg">
        <span class="bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          ({{column.kode_kas}})
        </span>
      </td>

      <td class="whitespace-nowrap p-4 text-lg text-right">
        {{ $format(column.jumlah) }}
      </td>
      <td class="whitespace-nowrap p-4 text-lg">
        <span class="bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
          {{ column.operator }}
        </span>
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
    deletedData(id) {
      this.$emit("deleted-data", id);
    },

    restoredData(id) {
      this.$emit("restored-data", id);
    },
  },
};
</script>
