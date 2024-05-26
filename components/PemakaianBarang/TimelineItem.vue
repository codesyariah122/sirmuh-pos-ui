<template>
  <div>
    <tabs :options="{ useUrlFragment: false, defaultTabHash: timelines[0].id, }" >
      <tab v-for="(item, idx) in timelines" :key="item.id" class="h-48" :suffix="`&nbsp;<span class='absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-6 -end-2 dark:border-gray-900'>${parseFloat(item.qty_asal)}${item.satuan_barang_asal}</span>`" :name="item.barang_asal" >
        <div class="block w-full overflow-x-auto overflow-y-auto h-60 -mt-10">
          <table class="items-center border-collapse table-sticky w-full">
            <thead class="sticky-header">
              <tr>
                <th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Nama Barang
                </th>
                <th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Qty
                </th>
                <th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Stok Barang
                </th>
                <th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Harga
                </th>
                <th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Jumlah
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in timelines.filter(timeline => timeline.id === item.id)" :key="idx+=1">
                <th class="whitespace-nowrap p-4 text-md text-center">{{ item.nama_barang_asal }}</th>
                <td class="whitespace-nowrap p-4 text-md text-center">{{ parseFloat(item.qty_asal) }}{{item.satuan_barang_asal}}</td>
                <td class="whitespace-nowrap p-4 text-md text-center">{{ parseFloat(item.stok_barang_asal) }}{{item.satuan_barang_asal}}</td>
                <td class="whitespace-nowrap p-4 text-md text-right">{{ $format(item.harga) }}</td>
                <td class="px-6 py-4 text-right text-md text-right">{{ $format(item.total) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
  export default {
    props: {
      timelines: {
        type: [Object, Array],
      default: function () {
        return [];
      },
    },
    timeTitle: {
      type: String,
    default: null,
    },
  },

  data() {
    return {
      storage_url: process.env.NUXT_ENV_STORAGE_URL
    }
  }
};
</script>
