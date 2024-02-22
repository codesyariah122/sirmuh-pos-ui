<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ $moment(item.tanggal).format("LL") }}
    </th>

    <td class="px-6 py-4">
      <span
        class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
      >
        {{ item.kode }}
      </span>
    </td>

    <td class="px-6 py-4">{{ item.kas_kode }} ({{ item.kas_nama }})</td>

    <td class="px-6 py-4">
      {{ $format(item.jumlah) }}
    </td>

    <td class="px-6 py-4">
      {{ $format(item.diterima) }}
    </td>

    <td class="px-6 py-4">
      {{ item.lunas === "True" ? $format(Number(item.diterima) - Number(item.jumlah)) : '-' }}
    </td>

    <td class="px-6 py-4">
      <span
        v-html="generateLunas({ lunas: item.lunas, visa: item.visa })"
      ></span>
    </td>

    <td class="px-6 py-4">
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

    <td class="px-6 py-4">
      {{
        item.keterangan !== "undefined" || item.keterangan !== null
          ? item.keterangan
          : "-"
      }}
    </td>

    <td class="px-6 py-4">
      {{ item.operator }}
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
