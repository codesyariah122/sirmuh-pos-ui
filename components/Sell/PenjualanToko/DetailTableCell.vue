<template>
  <tr
  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
  <th
  scope="row"
  class="px-6 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white font-medium"
  >
  {{ $moment(item.tanggal).format("LL") }}
</th>

<td class="whitespace-nowrap p-4 text-lg">
  <span
  class="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
  >
  {{ item.kode }}
</span>
</td>

<td class="whitespace-nowrap p-4 text-lg">
  <span class="bg-indigo-100 text-indigo-800  font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
    {{ item.kas_kode }} ({{ item.kas_nama }})
  </span>
</td>

<td class="whitespace-nowrap p-4 text-lg">
  <span class="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
    {{item.nama_pelanggan}} - ({{item.pelanggan}})
  </span>
</td>

<td class="px-6 py-4 text-right text-lg">
  {{ $format(item.jumlah) }}
</td>

<td class="px-6 py-4 text-right text-lg">
  {{ $format(item.bayar) }}
</td>

<td class="px-6 py-4 text-right text-lg">
  {{ $format(item.dikirim) }}
</td>

<td class="whitespace-nowrap p-4 text-lg">
  <span v-if="item.status === 'DIKIRIM'" class="bg-green-100 text-green-800  font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
    {{item.status}}
  </span>

  <span v-if="item.status === 'PROSES'" class="bg-yellow-100 text-yellow-800  font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400">
    {{item.status}}
  </span>

  <span v-if="item.status === 'HOLD'" class="bg-red-100 text-red-800  font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
    {{item.status}}
  </span>
</td>

<td class="px-6 py-4 text-right text-lg">
  {{ $format(item.biayakirim) }}
</td>

<td class="px-6 py-4 text-right text-lg">
  {{ $format(item.kembali) }}
</td>

<td class="px-6 py-4 text-lg text-center">
  <span
  v-html="generateLunas({ lunas: item.lunas, visa: item.visa })"
  ></span>
</td>

<td class="px-6 py-4 text-right text-lg">
  {{ $format(item.piutang) }}
</td>

<td class="px-6 py-4">
  {{
    item.keterangan !== "undefined" || item.keterangan !== null
    ? item.keterangan
    : "-"
  }}
</td>

<td class="whitespace-nowrap p-4 text-lg">
  <span class="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
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
    if (data.lunas == 1 || data.lunas === "True" || data.visa === "LUNAS") {
      icon = `<i class="fa-solid fa-check fa-lg text-emerald-600"></i>`;
    } else {
      icon = '<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>';
    }
    return icon;
  },
},
};
</script>
