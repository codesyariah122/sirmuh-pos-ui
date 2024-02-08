<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <th
        class="border-t-0 px-6 border-l-0 border-r-0 text-xl w-12 p-4 text-left"
        style="width: 50px"
      >
        {{ column.kode }}
      </th>

      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4"
      >
        {{ column.nama }}
      </td>

      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4"
      >
        {{ column.alamat }}
      </td>

      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4"
      >
        {{ column.telp }}
      </td>

      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4"
      >
        {{ $format(column.saldo_piutang) }}
      </td>

      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4"
      >
        {{ $format(column.max_piutang) }}
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
