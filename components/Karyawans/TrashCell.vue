<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <th class="w-12 p-4 text-left" style="width: 50px">
        {{ column.nama }}
      </th>

      <td class="whitespace-nowrap p-4">
        {{ column.kode }}
      </td>

      <td class="whitespace-nowrap p-4">
        {{ column.level }}
      </td>

      <td class="whitespace-nowrap p-4">
        <ul v-if="column.users">
          <li v-for="user in column.users" :key="user.id">
            {{ user.email }}
          </li>
        </ul>
        <span v-else>-</span>
      </td>

      <td
        v-if="column.token !== token.token && column.name !== 'VICKY ANDRIANI'"
        class="whitespace-nowrap p-4"
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
