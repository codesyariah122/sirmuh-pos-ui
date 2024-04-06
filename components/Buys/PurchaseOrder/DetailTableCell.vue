<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th
      scope="row"
      class="whitespace-nowrap p-4 text-lg"
    >
      {{ $moment(item.tanggal).format("LL") }}
    </th>

    <td class="whitespace-nowrap p-4 text-lg">
      <span
        class="bg-blue-100 me-2 px-2.5 py-0.5 text-blue-800 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
      >
        {{ item.kode }}
      </span>
    </td>

    <td class="whitespace-nowrap p-4 text-lg">
      <span class="bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
        {{ item.kas_kode }} ({{ item.kas_nama }})
      </span>
    </td>

    <td class="px-6 py-4 text-right">
      {{ $format(item.jumlah) }}
    </td>

    <td class="px-6 py-4 text-right">
      {{ $format(item.bayar) }}
    </td>

    <td class="px-6 py-4 text-right">
      {{ $format(item.diterima) }}
    </td>

    <td class="px-6 py-4 text-right">
      {{ item.kembali ? $format(item.kembali) : $format(item.diterima - item.bayar) }}
    </td>

    <td class="px-6 py-4 text-lg text-center">
      <span
        v-html="generateLunas({ lunas: item.lunas, visa: item.visa })"
      ></span>
    </td>

    <td class="px-6 py-4 text-right">
      {{ $format(item.hutang) }}
    </td>

    <td class="px-6 py-4">
      {{ $roundup(item.tempo) > 0 ? `${$roundup(item.tempo)}  Hari` : "-" }}
    </td>

    <td class="px-6 py-4">
      {{
        $roundup(item.tempo) > 0
          ? $moment(item.tanggal).add(item.tempo, "days").format("LL")
          : "-"
      }}
    </td>

    <td class="px-6 py-4 text-center">
      {{
        item.keterangan !== "undefined"
          ? item.keterangan
          : "-"
      }}
    </td>

    <td class="whitespace-nowrap p-4 text-lg">
      <span
          class="bg-green-100 text-green-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
        >
        {{ item.operator }}
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return {};
      },
    },
    timelines: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  methods: {
    generateLunas(data) {
      let icon;
      if (data.lunas == 1 || data.visa === "LUNAS") {
        icon = `<i class="fa-solid fa-check fa-lg text-emerald-600"></i>`;
      } else {
        icon = '<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>';
      }
      return icon;
    },
  },
};
</script>
