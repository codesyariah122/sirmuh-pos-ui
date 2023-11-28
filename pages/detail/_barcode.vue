<template>
  <div>
    <div class="flex flex-wrap pt-48">
      <div class="w-full">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        >
          <div class="px-4 py-5 flex-auto">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <caption
                  class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800"
                >
                  Detail Barang
                  {{
                    nama ? nama : ""
                  }}
                  <p
                    class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"
                  >
                    Browse a list of Flowbite products designed to help you work
                    and play, stay organized, get answers, keep in touch, grow
                    your business, and more.
                  </p>
                </caption>
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th
                      v-for="column in columns"
                      :key="column.id"
                      scope="col"
                      class="px-6 py-3"
                    >
                      {{ column.title }}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="item in items"
                    :key="item.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      v-if="item.kode"
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ item.kode }}
                    </th>
                    <td class="px-6 py-4">
                      {{ item.nama }}
                    </td>
                    <td class="px-6 py-4">
                      {{ item.kategori }}
                    </td>
                    <td class="px-6 py-4">
                      {{ item.satuan }}
                    </td>
                    <td class="px-6 py-4">
                      {{ item.isi }}
                    </td>
                    <td class="px-6 py-4">
                      {{ item.stok }}
                    </td>
                    <td class="px-6 py-4">
                      {{ item.hpp }}
                    </td>
                    <td class="px-6 py-4">
                      {{ $format(item.harga_toko) }}
                    </td>
                    <td class="px-6 py-4">
                      {{ item.supplier }}
                    </td>
                    <td class="px-6 py-4">
                      {{
                        $moment(item.tgl_terakhir)
                          .locale("id")
                          .format("DD MMMM")
                      }}
                    </td>
                    <td class="px-6 py-4">
                      {{ $format(item.harga_terakhir) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DETAIL_BARANG_TABLE } from "~/utils/tables-organizations";
import { getData } from "~/hooks/index";

export default {
  data() {
    return {
      barcode: this.$route.params.barcode,
      columns: DETAIL_BARANG_TABLE,
      items: [],
      nama: "",
    };
  },

  mounted() {
    this.getDetailBarang();
  },

  methods: {
    getDetailBarang() {
      getData({
        api_url: `${this.api_url}/detail?type=barang${
          this.barcode ? "&query=" + this.barcode : ""
        }`,
        api_key: process.env.NUXT_ENV_APP_TOKEN,
      })
        .then(({ data }) => {
          let cells = [];
          data?.map((cell) => {
            this.nama = cell.nama;
            const prepareCell = {
              kode: cell?.kode,
              nama: cell?.nama,
              kategori: cell?.kategori,
              satuan: cell?.satuan,
              isi: cell?.isi,
              stok: cell?.toko,
              hpp: cell?.hpp,
              harga_toko: cell?.harga_toko,
              supplier: cell?.supplier,
              tgl_terakhir: cell?.tgl_terakhir,
              harga_terakhir: cell?.harga_terakhir,
            };
            cells.push(prepareCell);
          });
          this.items = [...cells];
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
