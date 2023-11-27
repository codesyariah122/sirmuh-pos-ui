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
            <i class="fa-solid fa-gauge text-xs text-blueGray-200"></i>
            {{ data.admin ? data.admin : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.admin }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i class="fa-solid fa-cash-register text-xs text-blueGray-200"></i>
            {{ data.kasir ? data.kasir : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.kasir }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i
              class="fa-solid fa-cart-flatbed-suitcase text-xs text-blueGray-200"
            ></i>
            {{ data.gudang ? data.gudang : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.gudang }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i class="fa-solid fa-user-tie text-xs text-blueGray-200"></i>
            {{ data.kasirGudang ? data.kasirGudang : `0` }}
          </span>
          <span class="whitespace-nowrap">{{
            statDescripiron.kasirGudang
          }}</span>
        </li>
        <li class="mb-2">
          <span class="mr-2" :class="[statPercentColor]">
            <i
              class="fa-solid fa-screwdriver-wrench text-xs text-blueGray-200"
            ></i>
            {{ data.produksi ? data.produksi : `0` }}
          </span>
          <span class="whitespace-nowrap">{{ statDescripiron.produksi }}</span>
        </li>
      </ul>
    </li>
    <li v-if="statDescripiron.type === 'TOTAL_BARANG'">
      <span class="text-blueGray-300 font-bold">
        {{ statDescripiron.total_barang }}
      </span>
      <div class="block w-full overflow-x-auto mt-4">
        <!-- Projects table -->
        <table class="items-center w-full bg-blueGray-400 border-collapse">
          <thead>
            <tr>
              <th
                class="px-6 bg-blue-gray-300 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                No
              </th>
              <th
                class="px-6 bg-blue-gray-300 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Kode Barang
              </th>
              <th
                class="px-6 bg-blue-gray-300 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Nama Barang
              </th>
              <th
                class="px-6 bg-blue-gray-300 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
              >
                Stok
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(limit, idx) in data" :key="idx">
              <th
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
              >
                {{ (idx += 1) }}
              </th>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white"
              >
                {{ limit.kode }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white"
              >
                {{ limit.nama }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white"
              >
                {{ limit.toko }}
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
