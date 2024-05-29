<template>
  <div class="flex justify-between space-x-4">
    <div class="w-6/12">
      <tabs :options="{ useUrlFragment: false, defaultTabHash: timelines.origins[0].id, }" >
        <tab v-for="(item, idx) in timelines.origins" :key="idx" :name="item.barang_asal" >
          <ul v-for="(item, idx) in timelines.origins.filter(timeline => timeline.id === item.id)" :key="idx+=1"  class="w-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white -mt-12">
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div  class="flex justify-between space-x-6">
                <div>
                  Barang :
                </div>
                <div>
                  {{ item.nama_barang_asal }}
                </div>
              </div>
            </li>

            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex justify-between space-x-6">
                <div>
                  Qty :
                </div>
                <div>
                  {{ item.qty_asal }}{{item.satuan_barang_asal}}
                </div>
              </div>
            </li>

            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex justify-between space-x-6">
                <div>
                  Stok Barang :
                </div>
                <div>
                  {{ parseFloat(item.stok_barang_asal) }}{{item.satuan_barang_asal}}
                </div>
              </div>
            </li>

            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex justify-between space-x-6">
                <div>
                  Harga :
                </div>
                <div>
                  {{ $format(item.harga) }}
                </div>
              </div>
            </li>

            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex justify-between space-x-6">
                <div>
                  Jumlah :
                </div>
                <div>
                  {{ $format(item.total) }}
                </div>
              </div>
            </li>
          </ul>
        </tab>
      </tabs>
    </div>

    <div class="mt-48">
      <div class="flex items-center">
        <div class="z-10 flex items-center justify-center w-6 h-6 shrink-0 text-2xl text-emerald-800">
          <i class="fa-solid fa-right-left"></i>
        </div>
      </div>
    </div>

    <div class="w-6/12">
      <tabs :options="{ useUrlFragment: false, defaultTabHash: timelines.dests[0].id, }" >
        <tab v-for="(item, idx) in timelines.dests" :key="idx" :name="item.barang_tujuan" >
          <ul v-for="(item, idx) in timelines.dests.filter(timeline => timeline.id === item.id)" :key="idx+=1"  class="w-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white -mt-12">
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div  class="flex justify-between space-x-6">
                <div>
                  Barang :
                </div>
                <div>
                  {{ item.nama_barang_dest }}
                </div>
              </div>
            </li>

            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex justify-between space-x-6">
                <div>
                  Qty :
                </div>
                <div>
                  {{ parseFloat(item.qty_tujuan) }}{{item.satuan_barang_dest}}
                </div>
              </div>
            </li>

            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex justify-between space-x-6">
                <div>
                  Stok Barang :
                </div>
                <div>
                  {{ parseFloat(item.stok_barang_dest) }}{{item.satuan_barang_dest}}
                </div>
              </div>
            </li>

            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex justify-between space-x-6">
                <div>
                  Harga :
                </div>
                <div>
                  {{ $format(item.harga) }}
                </div>
              </div>
            </li>

            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div class="flex justify-between space-x-6">
                <div>
                  Jumlah :
                </div>
                <div>
                  {{ $format(item.total) }}
                </div>
              </div>
            </li>
          </ul>
        </tab>
      </tabs>
    </div>
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
