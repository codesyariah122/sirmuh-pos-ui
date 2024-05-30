<template>
  <div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
  <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
    <form >
      <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Data Pengeluaran {{item.kode}}
      </h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="kode"
            >
            Kode
          </label>
          <input
          id="kode"
          type="text"
          placeholder="Kode Referensi"
          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          v-model="item.kode"
          disabled
          />
        </div>
      </div>

      <div class="w-full lg:w-6/12 px-4">
        <div class="relative w-full mb-3">
          <label
          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="tanggal"
          >
          Tanggal
        </label>
        <datepicker
        v-model="formattedTanggal"
        :config="datePickerConfig"
        :format="dateFormat"
        placeholder="Tanggal Penjualan"
        :style="{ width: '100%', height: '11vh' }"
        ></datepicker>
      </div>

    </div>

    <div class="w-full lg:w-6/12 px-4">
      <div class="relative w-full mb-3">
        <label
        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="biaya"
        >
        Biaya
      </label>
      <input
      type="text"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      v-model="item.biaya_nama"
      disabled
      />
    </div>
  </div>

  <div class="w-full lg:w-6/12 px-4">
    <div class="relative w-full mb-3">
      <label
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      htmlFor="kas"
      >
      Keterangan
    </label>
    <textarea
    id="kas"
    rows="4"
    class="block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Tambahkan keterangan..."
    disabled
    v-model="item.keterangan"
    ></textarea>
  </div>

</div>

<div class="w-full lg:w-6/12 px-4">
  <div class="relative w-full mb-3">
    <label
    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    htmlFor="kas"
    >
    Kas
  </label>
  <input
  type="text"
  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
  disabled
  v-model="item.nama_kas"
  />
</div>

</div>

<div class="w-full lg:w-6/12 px-4">
  <div class="relative w-full mb-3">
    <label
    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
    htmlFor="jumlah"
    >
    Jumlah
  </label>
  <input
  type="text"
  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
  disabled
  v-model="jumlah"
  />
</div>
</div>
</div>

<hr class="mt-6 border-b-1 border-blueGray-300" />
</form>
</div>
</div>
</template>

<script>
  import { getData } from "~/hooks/index";
  import Datepicker from "vue2-datepicker";
  import "vue2-datepicker/index.css";

  export default {
    props: {
      type: {
        type: String,
      default: null,
      },
      current: {
        type: [Number, String],
      default: null,
      },
      item: {
        type: [Array, Object]
      }
    },

    components: {
      Datepicker,
    },

    data() {
      return {
        datePickerConfig: {
          range: false,
        },
        dateFormat: "YYYY-MM-DD",
      }
    },

    computed: {
      jumlah() {
        return this.$format(this.item.jumlah)
      },
      formattedTanggal: {
        get() {
          return this.$moment(this.item.tanggal).toDate();
        },
        set(newDate) {
          this.item.tanggal = this.$moment(newDate).format('YYYY-MM-DD');
        }
      }
    },
  };
</script>
