<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <th
        class="border-t-0 px-6 border-l-0 border-r-0 text-xs w-12 p-4 text-left"
        style="width: 50px"
      >
        {{ column.kode }}
      </th>

      <td
        class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      >
        {{ column.nama }}
      </td>

      <!-- <td
        v-if="column.photo !== null"
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      >
        <img :src="`${image_url}/${column.photo}`" class="w-[600px]" />
      </td>

      <td
        v-else
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      >
        <img
          :src="require('~/assets/img/default.jpg')"
          alt="default image product if no photo product"
        />
      </td> -->

      <td class="whitespace-nowrap p-8">
        {{ $roundup(column.stok) }}
      </td>

      <td class="whitespace-nowrap p-8">
        {{ column.satuan }}
      </td>

      <td class="whitespace-nowrap p-8">
        {{ $format(column.hpp) }}
      </td>

      <td class="whitespace-nowrap p-8">
        {{ $format(column.harga_toko) }}
      </td>

      <td class="whitespace-nowrap p-8">
        <span
          class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
        >
          {{
            column?.suppliers && column?.suppliers[0]?.nama
              ? column?.suppliers[0]?.nama
              : column.supplier
          }}
        </span>
      </td>

      <td class="whitespace-nowrap p-8">
        <img
          :src="`${image_url}/qrcodes/${column.barcode}.png`"
          class="w-[70px]"
        />
      </td>

      <td class="whitespace-nowrap p-8">
        {{
          column.expired !== null
            ? $moment(column.expired).locale("id").format("dddd, D MMMM")
            : "-"
        }}
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
