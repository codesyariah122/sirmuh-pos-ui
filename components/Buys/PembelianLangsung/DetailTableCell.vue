<template>
  <tr
  class="border-b border-gray-200 dark:border-gray-700 text-lg"
  >
  <th
  scope="row"
  class="p-4 text-lg"
  >
  {{ $moment(item.created_at).format("LLLL") }}
</th>

<td class="whitespace-nowrap p-4 text-lg">
  <span
  class="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 font-medium rounded border border-blue-400"
  >
  {{ item.kode }}
</span>
</td>

<td class="p-4 text-lg">
  <span class="bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded border border-indigo-400">
    {{ item.kas_kode }}
  </span>
</td>

<td class="whitespace-nowrap p-4 text-lg">
  <span v-if="item.kas_biaya !== null" class="bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded border border-indigo-400">
    {{ item.kas_biaya }}
  </span>
</td>

<td class="px-6 py-4 text-right">
  {{ $format(item.biayabongkar) }}
</td>

<td class="px-6 py-4 text-right">
  {{ $format(item.jumlah) }}
</td>

<td class="px-6 py-4 text-right">
  {{ $format(item.diterima) }}
</td>

<td class="px-6 py-4 text-right">
  {{ item.kembali !== null ? $format(item.kembali) : $format(Number(item.diterima) - Number(item.jumlah)) }}
</td>

<td class="px-6 py-4 text-lg text-center">
  <span
  v-html="generateLunas({ lunas: item.lunas, visa: item.visa })"
  ></span>
</td>

<td class="px-6 py-4 text-right">
  {{ $format(item.hutang) }}
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
  class="bg-green-100 me-2 px-2.5 py-0.5 text-green-800 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
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
