<template>
  <thead class="sticky-header">
    <tr>
      <th
        v-for="header in headers"
        :key="header.id"
        class="px-6 align-middle border border-solid py-3 text-lg uppercase border-l-0 border-r-0 font-semibold text-left"
        :class="[
          `${
            color === 'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-blueGray-900 text-blueGray-300 border-blueGray-700'
          }`,
          `${header.id === 1 ? 'w-60' : ''}`,
        ]"
      >
        <div class="flex justify-between space-x-4">
          <div>{{ header.title }}</div>
          <div>
            <div
              v-html="generateOrderBy(header.title)"
              @click="sortData(orderByType)"
            />
          </div>
        </div>
      </th>

      <th
        v-if="types !== 'user-role' && types !== 'transaksi' && types !== 'barang-by-warehouse'"
        class="px-6 align-middle border border-solid py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        :class="[
          color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-blueGray-900 text-blueGray-300 border-blueGray-700',
        ]"
      >
        Options
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    color: {
      default: "light",
      validator: function (value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
    headers: {
      type: Array,
    },
    types: {
      type: String,
      default: "",
    },
    orderBy: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },

  data() {
    return {
      orderByType: this.orderBy.type,
    };
  },

  mounted() {},

  methods: {
    sortData(type) {
      let newSort;
      switch (this.types) {
        case "data-pelanggan":
          newSort = {
            method: "sortData",
            field: "nama",
            name: "nama",
            type: type,
          };
          break;

        case "barang-by-suppliers":
        case "barang-by-warehouse":
          newSort = {
            method: "sortData",
            field: "nama",
            name: "barang.nama",
            type: type,
          };
          break;

        case "data-supplier":
          newSort = {
            method: "sortData",
            field: "nama",
            name: "nama",
            type: type,
          };
          break;

        case "karyawan":
          newSort = {
            method: "sortData",
            field: "nama",
            name: "nama",
            type: type,
          };
          break;

        case "kas":
          newSort = {
            method: "sortData",
            field: "nama",
            name: "nama",
            type: type,
          };
          break;

        case "data-laporan-hutang":
          newSort = {
            method: "sortData",
            field: "tanggal",
            name: "tanggal",
            type: type,
          };
          break;
      }
      this.orderByType = type === "ASC" ? "DESC" : "ASC";
      this.$emit("sort-data", newSort);
    },

    generateOrderBy(field) {
      if (field === this.orderBy.field) {
        return `<span class="mr-2 cursor-pointer text-md">${
          this.orderByType === "ASC"
            ? '<i class="fa-solid fa-sort-up"></i>'
            : '<i class="fa-solid fa-sort-down"></i>'
        }</span>`;
      }
    },
  },
};
</script>
