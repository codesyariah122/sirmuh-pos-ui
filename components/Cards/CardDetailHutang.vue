<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-24"
  >
    <div class="flex flex-wrap items-between mt-6 p-4">
      <div class="relative w-full max-w-full flex-grow flex-1">
        <h3 class="font-bold text-xl text-blueGray-700">
          Detail {{ $_.size(angsurans) > 0 ? "Angsuran" : "" }} Hutang
        </h3>
      </div>
      <div>
        <button
          @click="backTo"
          class="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          <i class="fa-solid fa-arrow-left-long"></i> Kembali
        </button>
      </div>
    </div>
    <div class="mt-6 p-4">
      <div class="overflow-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Kode Hutang</th>
              <th scope="col" class="px-6 py-3">Tanggal</th>
              <th scope="col" class="px-6 py-3">Supplier</th>
              <th scope="col" class="px-6 py-3">Alamat Supplier</th>
              <th scope="col" class="px-6 py-3">Operator</th>
              <th scope="col" class="px-6 py-3">Barang</th>
              <th scope="col" class="px-6 py-3">Harga Beli</th>
              <th scope="col" class="px-6 py-3">QTY</th>
              <th scope="col" class="px-6 py-3">Total Bayar</th>
              <th scope="col" class="px-6 py-3">Dibayarkan</th>
              <th scope="col" class="px-6 py-3">Hutang</th>
              <th scope="col" class="px-6 py-3">Angsuran Terakhir</th>
              <th scope="col" class="px-6 py-3">Diterima</th>
              <th scope="col" class="px-6 py-3">Kas</th>
              <th scope="col" class="px-6 py-3">Lunas</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">Tempo</th>
              <th scope="col" class="px-6 py-3">Jatuh Tempo</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
                >
                  {{ item.kode }}
                </span>
              </th>
              <td class="px-6 py-4">
                {{ $moment(item.tanggal).format("LL") }}
              </td>
              <td class="px-6 py-4">
                {{ item.nama_supplier }}
              </td>
              <td class="px-6 py-4">
                {{ item.alamat }}
              </td>
              <td class="px-6 py-4">
                {{ item.operator }}
              </td>
              <td class="px-6 py-4">
                {{ item.nama_barang }} ({{ item.kode_barang }})
              </td>
              <td class="px-6 py-4">
                {{ $format(item.harga_beli) }}
              </td>
              <td class="px-6 py-4">
                {{ $roundup(item.qty_pembelian) }}
                {{ item.satuan_pembelian_barang }}
              </td>
              <td class="px-6 py-4">
                {{ $format(item.jumlah_pembelian) }}
              </td>
              <td class="px-6 py-4">
                {{ $format(item.jumlah_pembelian - item.jumlah_hutang) }}
              </td>
              <td class="px-6 py-4">
                {{ $format(item.jumlah_hutang) }}
              </td>
              <td class="px-6 py-4">
                {{ $format(item.bayar) }}
              </td>
              <td class="px-6 py-4">
                {{ $format(item.diterima) }}
              </td>
              <td class="px-6 py-4">
                {{ item.kas_nama }} ({{ item.kode_kas }})
              </td>
              <td class="px-6 py-4">
                <span
                  v-html="generateLunas({ lunas: item.lunas, visa: item.visa })"
                ></span>
              </td>
              <td class="px-6 py-4 w-80" v-if="item.lunas == 0">
                <span
                  v-if="$_.size(angsurans) > 0"
                  class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
                >
                  Angsuran
                </span>
                <span
                  v-else
                  class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
                >
                  {{ item.visa }}
                </span>
              </td>
              <td class="px-6 py-4" v-else>
                <span
                  class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
                  >{{ item.visa }}</span
                >
              </td>
              <td class="px-6 py-4">{{ $roundup(item.jatuh_tempo) }} Hari</td>
              <td class="px-6 py-4">
                {{ $moment(item.tanggal).add(item.tempo, "days").format("LL") }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mt-10 p-4">
      <div class="flex justify-start mb-8">
        <div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
            Detail Pembayaran Angsuran
          </h2>
        </div>
      </div>
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li v-for="angsuran in angsurans" :key="angsuran.id" class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >
            Angsuran Ke {{ angsuran.angsuran_ke }}
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Dibayarkan : {{ $format(angsuran.bayar_angsuran) }}
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Sisa HUtang : {{ $format(angsuran.jumlah) }}
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return {};
      },
    },
    angsurans: {
      type: Array,
      default: function () {
        return [];
      },
    },
    title: {
      type: String,
    },
    stringRoute: {
      type: String,
      default: null,
    },
    parentRoute: {
      type: String,
      default: null,
    },
    typeRoute: {
      type: String,
      default: null,
    },
    selectedRoute: {
      type: String,
      default: null,
    },
    types: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      team2,
    };
  },

  methods: {
    backTo() {
      this.$router.go(-1);
    },
    generateLunas(data) {
      let icon;
      if (data.lunas === 1 || data.visa === "LUNAS") {
        icon = `<i class="fa-solid fa-check fa-lg text-emerald-600"></i>`;
      } else {
        icon = '<i class="fa-solid fa-circle-minus text-red-600 fa-lg"></i>';
      }
      return icon;
    },
  },
};
</script>
