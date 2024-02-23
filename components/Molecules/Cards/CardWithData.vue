<template>
  <ul>
    <li v-if="statDescripiron.type === 'TOTAL_USER'">
      <span
        class="mr-2"
        :class="[data.user_online ? 'text-emerald-600' : statPercentColor]"
      >
        <i
          v-if="data.user_online"
          class="fa-solid fa-circle text-success-600 text-xs"
        ></i>

        {{ data.user_online ? data.user_online : `-` }}
      </span>
      <span class="whitespace-nowrap text-emerald-600">
        {{ statDescripiron.user_online }}</span
      >
      <ul class="mt-4">
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i class="fa-solid fa-gauge text-xs text-blueGray-800"></i>
            {{ data.admin ? data.admin : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.admin }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i class="fa-solid fa-cash-register text-xs text-blueGray-800"></i>
            {{ data.kasir ? data.kasir : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.kasir }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i
              class="fa-solid fa-cart-flatbed-suitcase text-xs text-blueGray-800"
            ></i>
            {{ data.gudang ? data.gudang : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.gudang }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i class="fa-solid fa-user-tie text-xs text-blueGray-800"></i>
            {{ data.kasirGudang ? data.kasirGudang : `0` }}
          </span>
          <span class="whitespace-nowrap">{{
            statDescripiron.kasirGudang
          }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i
              class="fa-solid fa-screwdriver-wrench text-xs text-blueGray-800"
            ></i>
            {{ data.produksi ? data.produksi : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.produksi }}</span>
        </li>
      </ul>
    </li>

    <li v-if="statDescripiron.type === 'TOTAL_BARANG'">
      <span class="text-blueGray-800 font-bold">
        {{ statDescripiron.total_barang }}
      </span>
      <div class="block w-full overflow-x-auto mt-4">
        <!-- Projects table -->
        <table
          class="items-center w-full bg-blueGray-500 border-collapse shadow-xl"
        >
          <thead>
            <tr>
              <th
                class="px-6 bg-blue-gray-900 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                No
              </th>
              <th
                class="px-6 bg-blue-gray-300 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Kode Barang
              </th>
              <th
                class="px-6 bg-blue-gray-300 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Nama Barang
              </th>
              <th
                class="px-6 bg-blue-gray-300 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Stok
              </th>
              <th
                class="px-6 bg-blue-gray-300 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Supplier
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(limit, idx) in data" :key="idx">
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700"
              >
                {{ (idx += 1) }}
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700"
              >
                {{ limit.kode }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700"
              >
                {{ limit.nama }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700"
              >
                {{ limit.toko }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700"
              >
                <span
                  class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                >
                  {{ limit.nama_supplier }} ({{ limit.kode_supplier }})
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>

    <li v-if="statDescripiron.type === 'TOP_SELLINGS'">
      <ul class="mt-4">
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i class="fa-solid fa-gauge text-xs text-blueGray-800"></i>
            {{ statDescripiron.kode }}
          </span>
          <span class="whitespace-nowrap">
            {{ data.kode ? data.kode : `0` }}</span
          >
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i class="fa-solid fa-cash-register text-xs text-blueGray-800"></i>
            {{ statDescripiron.nama }}
          </span>
          <span class="whitespace-nowrap">{{
            data.nama ? data.nama : `0`
          }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i
              class="fa-solid fa-cart-flatbed-suitcase text-xs text-blueGray-800"
            ></i>
            {{ statDescripiron.stok }}
          </span>
          <span class="whitespace-nowrap"
            >{{ data.toko ? $numeral(data.toko).format("0,0") : `-` }}
            {{ data.satuanbeli }}</span
          >
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i
              class="fa-solid fa-cart-flatbed-suitcase text-xs text-blueGray-800"
            ></i>
            {{ statDescripiron.tanggal }}
          </span>
          <span class="whitespace-nowrap">
            {{
              data.tanggal
                ? $moment(data.tanggal).locale("id").format("LL")
                : `-`
            }}</span
          >
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i
              class="fa-solid fa-cart-flatbed-suitcase text-xs text-blueGray-800"
            ></i>
            {{ statDescripiron.total_qty }}
          </span>
          <span class="whitespace-nowrap"
            >{{
              data.total_qty ? $numeral(data.total_qty).format("0,0") : `-`
            }}
            {{ data.satuan }}</span
          >
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i
              class="fa-solid fa-cart-flatbed-suitcase text-xs text-blueGray-800"
            ></i>
            {{ statDescripiron.total_penjualan }}
          </span>
          <span class="whitespace-nowrap">{{
            data.total_penjualan ? $format(data.total_penjualan) : `-`
          }}</span>
        </li>
      </ul>
    </li>

    <li v-if="statDescripiron.type === 'HUTANG_PIUTANG'">
      <span class="text-blueGray-800 font-bold">
        {{ statDescripiron.title }}
      </span>
      <div class="block w-full overflow-x-auto overflow-y-auto h-72 mt-4">
        <!-- Projects table -->
        <table
          class="items-center w-full bg-blueGray-800 border-collapse table-sticky-card"
        >
          <thead class="sticky-header">
            <tr>
              <th
                class="px-6 bg-blue-gray-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                No
              </th>
              <th
                class="px-6 bg-blue-gray-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Jenis
              </th>
              <th
                class="px-6 bg-blue-gray-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Keterangan
              </th>
              <th
                class="px-6 bg-blue-gray-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Tanggal
              </th>
              <th
                class="px-6 bg-blue-gray-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Jumlah
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(limits, date, idx) in data" :key="idx">
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
              >
                {{ (idx += 1) }}
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white"
              >
                {{ limits[0].jenis }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white"
              >
                {{ limits[0].keterangan }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white"
              >
                {{ $moment(limits[0].jatuh_tempo).locale("id").format("LL") }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white"
              >
                {{ $format(limits[0].jumlah) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
    <li>
      <hr class="my-4 md:min-w-full" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    statPercentColor: {
      type: String,
      default: "text-emerald-500",
    },
    data: {
      type: [Object, Array],
      default: () => {
        return {};
      },
    },
    statDescripiron: {
      type: [Object, Array],
      default: () => {
        return {};
      },
    },

    statPercent: {
      type: String,
      default: "3.48",
    },
  },
};
</script>
