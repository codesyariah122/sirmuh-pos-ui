<template>
  <tr
  class="bg-white border-b"
  >
  <th
  scope="row"
  class="p-4 text-lg w-80"
  >
  {{ $moment(item.created_at).format("LLLL") }}
</th>

<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
  <span
  class="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5  rounded border border-blue-400"
  >
  {{ item.kode }}
</span>
</td>

<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
 <span
 class="bg-indigo-100 me-2 px-2.5 py-0.5 text-indigo-800 rounded border border-indigo-400"
 >
 {{ item.operator }}
</span>
</td>

<td class="px-6 py-4 text-right text-lg whitespace-nowrap p-4 border-l-2 border-r-2">
  {{ $format(item.total) }} 
</td>

<td class="px-6 py-4 text-right text-lg whitespace-nowrap p-4 border-l-2 border-r-2">
  {{ $format(item.biaya_operasional) }} 
</td>

<td class="px-6 py-4 text-right text-lg whitespace-nowrap p-4 border-l-2 border-r-2">
  {{ $format(item.harga_proses) }} 
</td>

<td class="px-6 py-4 text-right font-bold text-lg whitespace-nowrap p-4 border-l-2 border-r-2">
  {{ $format(item.harga_cetak) }} 
</td>

<td class="px-6 py-4 text-justify border-l-2 border-r-2">
  <span
  class="bg-yellow-100 me-2 px-2.5 py-0.5 text-yellow-800 rounded border border-yellow-400">
  {{ item.keperluan }}
</span>
</td>

<td class="px-6 py-4 w-40">
  {{ item.keterangan }}
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
