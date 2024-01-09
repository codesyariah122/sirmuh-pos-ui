<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      >
        {{ column.name }}
      </td>

      <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      >
        {{ column.total_user }}
      </td>

      <td
        v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
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
