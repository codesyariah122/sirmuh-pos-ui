<template>
  <div>
    <ul class="w-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        Tanggal : {{ $moment(item.tanggal).format("LL") }}
      </li>
      <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
        Kode : <span class="bg-blue-100 me-2 px-2.5 py-0.5 text-blue-800 rounded border border-blue-400">{{ item.kode }}</span>
      </li>
      <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
        Barang : <span class="bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded border border-indigo-400">{{ item.nama_barang }} ({{ item.kode_barang }})</span>
      </li>
      <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
        Stok Lalu : {{ parseFloat(item.stok_lalu) }}{{item.satuan}}
      </li>
      <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
        Stok Kini : {{ parseFloat(item.stok_kini) }}{{item.satuan}}
      </li>
      <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
        Selisih : {{ parseFloat(item.selisih) }}{{item.satuan}}
      </li>
      <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
        Harga Satuan : {{ $format(item.hpp) }}
      </li>
      <li class="w-full px-4 py-2 rounded-b-lg">
        <label for="message"class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alasan : </label>
        <textarea id="message" disabled v-model="item.alasan" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="item.alasan"></textarea>
      </li>
    </ul>
  </div>
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
