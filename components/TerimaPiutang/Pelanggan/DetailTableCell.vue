<template>
  <tr
  class="bg-white border-b"
  >
  <th
  scope="row"
  class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap"
  >
  {{ $moment(item.created_at).format("LLLL") }}
</th>
<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
  <span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded border border-blue-400">
    {{ item.kode }}
  </span>
</td>
<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
  <div class="flex justify-between space-x-2">
    <div>
      <span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded border border-blue-400">
        {{ item.kode_penjualan }}
      </span>
    </div>

    <div>
      <button @click="$nuxt.copyClipboard(item.kode_penjualan, item.id)" class="text-info-800 rounded-lg inline-flex items-center justify-center">
        <span v-if="$nuxt.successCopy && item.id === $nuxt.copyId" class="inline-flex items-center">
          <i class="fa-solid fa-square-check text-info-700"></i>
        </span>
        <span v-else id="default-icon-account-id">
          <i class="fa-solid fa-copy"></i>
        </span>
      </button>
    </div>
  </div>
</td>
<td class="px-6 py-4 text-center">
  <span
  v-html="generateLunas({ lunas: item.lunas, visa: item.visa })"
  ></span>
</td>


<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2" v-if="item.lunas == 0">
  <span
  v-if="$_.size(timelines) > 0"
  class="bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded border border-red-400"
  >
  Angsuran
</span>
<span
v-else
class="bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded border border-red-400"
>
{{ item.visa }}
</span>
</td>
<td class="px-6 py-4" v-else>
  <span
  :class="`${item.visa === 'HUTANG' ? 'bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded border border-red-400' : 'bg-green-100 text-green-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded border border-green-400'}`"
  >{{ item.visa }}</span
  >
</td>

<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 text-center">
  <span class="bg-green-100 text-green-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
    {{ item.nama_pelanggan }}
  </span>
</td>

<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 text-center">
  <span class="bg-purple-100 text-purple-800 font-bold me-2 px-2.5 py-0.5 rounded border border-purple-400">
    {{ item.operator }}
  </span>
</td>

<td class="px-6 py-4 text-right text-lg border-l-2 border-r-2">
  {{ $format(item.jumlah_penjualan) }}
</td>
<td class="px-6 py-4 text-right text-lg border-l-2 border-r-2">
  {{ $format(item.jumlah_penjualan - item.jumlah_piutang) }}
</td>
<td class="px-6 py-4 text-right text-lg border-l-2 border-r-2">
  {{ $format(item.jumlah_piutang ) }}
</td>
<td class="px-6 py-4 text-right text-lg border-l-2 border-r-2">
  {{ $format(item.bayar_penjualan) }}
</td>
<td class="px-6 py-4 text-right text-lg border-l-2 border-r-2">
  {{ $format(item.piutang_penjualan) }}
</td>
<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
  <span class="bg-green-100 text-green-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
    {{ item.kas_nama }} ({{ item.kode_kas }})
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
