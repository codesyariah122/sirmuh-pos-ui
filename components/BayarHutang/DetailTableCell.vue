<template>
  <tr
  class="bg-white border-b hover:bg-gray-50"
  >
  <th
  scope="row"
  class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2"
  >
  {{ $moment(item.created_at).format("LLLL") }}
</th>
<th
scope="row"
class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2"
>
<span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  {{ item.kode }}
</span>
</th>
<th
scope="row"
class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2"
>
<div class="flex justify-between space-x-2">
  <div>
    <span class="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
      {{ item.kode_pembelian }}
    </span>
  </div>

  <div>
    <button @click="$nuxt.copyClipboard(item.kode_pembelian, item.id)" data-tooltip-target="tooltip-account-id" class="text-info-800 dark:text-blueGray-400 hover:bg-blueGray-100 dark:hover:bg-blueGray-800 rounded-lg inline-flex items-center justify-center">
      <span v-if="$nuxt.successCopy && item.id === $nuxt.copyId" class="inline-flex items-center">
        <i class="fa-solid fa-square-check text-info-700"></i>
      </span>
      <span v-else id="default-icon-account-id">
        <i class="fa-solid fa-copy"></i>
      </span>
    </button>
  </div>
</div>
</th>

<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
  <span
  class="bg-green-100 text-green-800 rounded me-2 px-2.5 py-0.5  border border-green-400"
  >
  {{ item.nama_supplier }}
</span>
</td>

<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2">
  <span
  class="bg-green-100 text-green-800 me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
  >
  {{ item.operator }}
</span>
</td>
<td class="whitespace-nowrap p-4 text-lg border-l-2 border-r-2 text-right">
  {{ $format(item.jumlah_hutang) }}
</td>

<td class="px-6 py-4 text-center border-l-2 border-r-2">
  <span
  v-html="generateLunas({ lunas: item.lunas, visa: item.visa })"
  ></span>
</td>
<td class="px-6 py-4 w-80 border-l-2 border-r-2" v-if="item.lunas == 0">
  <span
  v-if="$_.size(timelines) > 0"
  class="bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
  >
  Angsuran
</span>
<span
v-else
:class="`${item.visa === 'HUTANG' ? 'bg-red-100 text-red-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400' : 'bg-green-100 text-green-800 text-lg border-l-2 border-r-2 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'}`"
>
{{ item.visa }}
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
