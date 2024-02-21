<template>
  <div>
    <div
    class="relative flex flex-col min-w-0 break-words bg-transparent mb-4 shadow-sm rounded"
    >
    <hr class="w-full" />
  </div>
  <div
  class="relative flex flex-col min-w-0 break-words bg-transparent w-96 mb-6 shadow-sm rounded"
  >
  <div>
    <div class="flex justify-start space-x-0">
      <div class="flex-none w-36">
        <h4 class="font-bold text-md text-white">Ref No</h4>
      </div>
      <div class="shrink-0 w-full">
        <div class="flex justify-between space-x-2">
          <div class="shrink-0 w-30 text-black">
            <input type="text" v-model="detail.kode" />
          </div>
          <div class="flex-none w-30 text-black">
            <datepicker
            v-model="input.tanggal"
            :value="detail.tanggal"
            :config="datePickerConfig"
            @input="handleTanggalPenjualan($event)"
            placeholder="Tanggal Penjualan"
            :format="dateFormat"
            :style="{ width: '100%', height: '10vh' }"
            ></datepicker>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="flex justify-start space-x-0">
      <div class="flex-none w-36">
        <h4 class="font-bold text-md text-white">Pilih Pelanggan</h4>
      </div>
      <div v-if="!changePelangganShow" class="text-black">
        <input type="text" disabled :value="detail.nama_pelanggan" />
      </div>
      <div v-else class="shrink-0 w-60 text-black">
        <div v-if="loadingPelangganList">
          <div role="status">
            <svg
            aria-hidden="true"
            class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
            />
            <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        <span class="text-white">Preparing data pelanggan</span>
      </div>
      <div v-else>
        <Select2
        v-model="selectedPelanggan"
        :settings="{
          allowClear: true,
          dropdownCss: { top: 'auto', bottom: 'auto' },
        }"
        :options="[
          { id: null, text: 'Pilih Pelanggan' },
          ...pelanggans,
          ]"
          @change="changePelanggan($event)"
          @select="changePelanggan($event)"
          placeholder="Pilih Pelanggan"
          />
        </div>
      </div>

      <div class="px-6" v-if="!changePelangganShow">
        <button
        @click="showChangePelanggan"
        class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        <i class="fa-solid fa-repeat"></i>
      </button>
    </div>
  </div>

  <div
  v-if="error && validation?.pelanggan"
  class="mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
  role="alert"
  >
  <span class="font-medium">Danger alert!</span>
  {{ validation?.pelanggan[0] }}
</div>
</div>
<div v-if="loadingPelanggan">
  <div role="status">
    <svg
    aria-hidden="true"
    class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    fill="currentColor"
    />
    <path
    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    fill="currentFill"
    />
  </svg>
  <span class="sr-only">Loading...</span>
</div>
<span class="text-white font-semibold">Preparing alamat pelanggan</span>
</div>
<div v-else>
  <div
  v-if="showDetailPelanggan && detailPelanggan"
  class="flex justify-start space-x-0 mt-6"
  >
  <div class="flex-none w-36">
    <h4 class="font-bold text-md text-white">Alamat Pelanggan</h4>
  </div>
  <div class="shrink-0 w-60 text-black">
    <textarea
    v-if="detailPelanggan?.alamt"
    class="text-black"
    :value="detailPelanggan?.alamat"
    disabled
    ></textarea>
    <span v-else class="text-2xl font-bold text-white left-16">
      -
    </span>
  </div>
</div>
</div>
<div v-if="detail.pelanggan">
  <div class="flex justify-start space-x-0 py-6">
    <div class="flex-none w-36">
      <h4 class="font-bold text-md text-white">Pilih Kode Kas</h4>
    </div>
    <div class="shrink-0 w-60 text-black">
      <div v-if="loadingKasList">
        <div role="status">
          <svg
          aria-hidden="true"
          class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
          />
          <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
      <span class="text-white">Preparing data pelanggan</span>
    </div>
    <div v-else>
      <Select2
      v-model="selectedKodeKas"
      :settings="{
        allowClear: true,
        dropdownCss: { top: 'auto', bottom: 'auto' },
      }"
      :options="[{ id: null, text: 'Pilih Kode Kas' }, ...kas]"
      @change="changeKodeKas($event)"
      @select="changeKodeKas($event)"
      placeholder="Pilih Kode Kas"
      />
    </div>
  </div>
</div>
<div
v-if="error && validation?.kode_kas"
class="mt-6 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
role="alert"
>
<span class="font-medium">Danger alert!</span>
{{ validation?.kode_kas[0] }}
</div>
</div>
<div v-if="loadingKas">
  <div role="status">
    <svg
    aria-hidden="true"
    class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
    fill="currentColor"
    />
    <path
    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
    fill="currentFill"
    />
  </svg>
  <span class="sr-only">Loading...</span>
</div>
<span class="text-white font-semibold">Preparing data kas</span>
</div>
<div v-else>
  <div
  v-if="showDetailKas && detailKas"
  class="flex justify-start space-x-0 mt-6"
  >
  <div class="flex-none w-36">
    <h4 class="font-bold text-md text-white">Saldo Kas</h4>
  </div>
  <div class="shrink-0 w-60 text-black">
    <input type="text" disabled :value="$format(detailKas.saldo)" />
  </div>
</div>
</div>

<div>
  <div class="flex justify-start space-x-0 py-6">
    <div class="flex-none w-36">
      <h4 class="font-bold text-md text-white">Keterangan</h4>
    </div>
    <div class="shrink-0 w-full">
      <label
      for="keterangan"
      class="block mb-2 text-sm font-medium text-white dark:text-white"
      >Keterangan Beli</label
      >
      <textarea
      id="keterangan"
      rows="4"
      class="block text-black p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Tambahkan keterangan..."
      :disabled="!showDetailKas"
      v-model="input.keterangan"
      @input="inputKeterangan($event)"
      ></textarea>
    </div>
  </div>
</div>

<div>
  <div class="flex justify-start space-x-0">
    <div class="flex-none w-36">
      <h4 class="font-bold text-md">Pilih Pembayaran</h4>
    </div>
    <div v-if="detail.po == 'False'" class="shrink-0 w-60">
      <Select2
      v-model="$roundup(detail.tempo) === 0 ? 'cash' : input.pembayaran"
      :settings="{
        allowClear: true,
        dropdownCss: { top: 'auto', bottom: 'auto' },
      }"
      :options="[
        { id: null, text: 'Pilih Pembayaran' },
        ...pembayarans,
        ]"
        @change="changePembayaran($event)"
        @select="changePembayaran($event)"
        placeholder="Pilih Kode Kas"
        />
      </div>
      <div v-else class="shrink-0 w-60">
        <Select2
        v-model="input.pembayaran"
        :settings="{
          allowClear: true,
          dropdownCss: { top: 'auto', bottom: 'auto' },
        }"
        :options="[
          { id: null, text: 'Pilih Pembayaran' },
          ...pembayarans,
          ]"
          @change="changePembayaran($event)"
          @select="changePembayaran($event)"
          placeholder="Pilih Kode Kas"
          />
        </div>
      </div>
    </div>
  </div>

  <div
  class="bg-transparent mb-4 shadow-sm rounded w-full overflow-x-auto overflow-y-auto"
  >
  <div>
    <table class="w-full text-md border-collapse border-b">
      <thead
      class="text-xs bg-transparent border-b border-t dark:border-gray-700 text-white uppercase dark:bg-gray-700 dark:text-gray-400"
      >
      <tr>
        <th class="px-6 py-3">Nama Barang</th>
        <th class="px-6 py-3 w-10">Qty</th>
        <th class="px-6 py-3">Satuan</th>
        <th class="px-6 py-3">Harga</th>

        <th class="px-6 py-3">Supplier</th>
        <th class="px-6 py-3">Rupiah</th>
        <th class="px-6 py-3">Expired</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr
      v-for="(barang, idx) in items"
      :key="idx"
      class="bg-transparent border-b"
      >
      <th
      scope="row"
      class="px-6 py-4 font-medium whitespace-nowrap text-left"
      >
      <div class="flex justify-between">
        <div>
          {{ barang.nama_barang }}({{ barang.kode_barang }})
        </div>
        <div>
          <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
      </div>
    </th>

    <th
    scope="row"
    class="px-6 py-4 font-medium whitespace-nowrap text-left"
    >
    <div class="flex justify-between">
      <div>
        <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
          {{ barang.nama_supplier }}({{barang.supplier}})
        </span>
      </div>
      <div>
        <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i class="fa-solid fa-pen-to-square"></i></button>
      </div>
    </div>

  </th>

  <td class="px-6 py-4 text-black">
    <input
    class="w-20"
    type="number"
    v-model="barang.qty"
    @input="updateQty(detail.id, barang.id, $event)"
    min="1"
    />
  </td>

  <td class="px-6 py-4">
    {{ barang.satuan }}
  </td>

  <td v-if="editingItemId === barang.id" class="px-6 py-4 text-black">
    <input
    class="w-auto"
    type="number"
    v-model="barang.harga"
    @input="updateHarga(detail.id, barang.id, $event)"
    min="1"
    />
  </td>
  <td v-else class="px-6 py-4">
    <div class="flex justify-between space-x-2">
      <div class="font-bold">
        {{ $format(barang.harga) }}
      </div>
      <div class="-mt-2">
        <button
        @click="gantiHarga(barang.id)"
        class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        <i class="fa-solid fa-repeat"></i>
      </button>
    </div>
  </div>
</td>

<td class="px-6 py-4">
  {{ $format(barang.harga * barang.qty) }}
</td>

<td class="px-6 py-4">
  {{ barang.ada_expired_date ? $moment(barang.barang_expired).locale("id").format("LL") : '-' }}
</td>
<td class="px-10 py-4">
  <button
  @click="deletedBarangCarts(barang.id)"
  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
  >
  <i class="fa-solid fa-trash-can text-red-600 text-xl"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<form @submit.prevent="updatePenjualan(false)">
  <div
  class="bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"
  >
  <div v-if="!showKembali" class="shrink w-[80vw]">
    <div
    class="grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center"
    >
    <div class="col-span-full">
      <h4 class="font-bold text-4xl">
        {{ input.total }}
      </h4>
    </div>
  </div>
  <div class="grid grid-cols-1 h-12">
    <div class="col-span-full p-2">
      <h6 class="text-lg font-bold">
        {{ terbilang }}
      </h6>
    </div>
  </div>
</div>

<div v-else class="shrink w-[80vw]">
  <div
  class="grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center"
  >
  <div class="col-span-full">
    <h4 class="font-bold text-4xl">
      {{ showKembali ? input.kembali : input.total}}
    </h4>
  </div>
</div>
<div class="grid grid-cols-1 h-12">
  <div class="col-span-full p-2">
    <h6 class="text-lg font-bold">
      {{ terbilang }}
    </h6>
  </div>
</div>
</div>

<div>
  <ul class="w-80 text-sm font-medium text-white bg-transparent">
    <li class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Total</label>
        </div>
        <div>
          <input
          type="text"
          disabled
          class="h-8 text-black"
          v-model="input.total"
          />
        </div>
      </div>
    </li>
    <li class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Diskon</label>
        </div>
        <div>
          <input
          type="number"
          class="h-8 text-black"
          v-model="input.diskon"
          @input="handleDiskonInput"
          />
        </div>
      </div>
    </li>
    <li class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">PPN</label>
        </div>
        <div>
          <input
          disabled
          type="number"
          value="0"
          class="h-8 text-black"
          v-model="input.ppn"
          @input="recalculateTotalBayar(input.diskon)"
          />
        </div>
      </div>
    </li>
    <li v-if="!showDp" class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Bayar (Cash)</label>
        </div>
        <div>
          <input
          :disabled="showBayar"
          type="text"
          class="h-8 text-black"
          v-model="input.bayar"
          @input="changeBayar($event)"
          @focus="clearBayar"
          @blur="selesaiMengetik($event)"
          tabindex="0"
          />
        </div>
      </div>
    </li>

    <li v-else class="w-full py-2">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Bayar (DP)</label>
        </div>
        <div>
          <input
          type="text"
          class="h-8 text-black"
          v-model="input.bayarDp"
          @input="changeBayar($event)"
          @focus="clearBayar"
          tabindex="0"
          />
        </div>
      </div>
    </li>
    <div v-if="loadingKembali && !showDp">
      <div role="status">
        <svg
        aria-hidden="true"
        class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
        />
        <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
    <span class="font-semibold">Preparing bayar</span>
  </div>
  <li v-else class="w-full py-2">
    <div v-if="masukPiutang">
      <div class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Hutang</label>
        </div>
        <div>
          <input
          type="text"
          class="h-8 text-black"
          disabled
          v-model="piutang"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="showKembali" class="grid grid-cols-3 gap-0">
        <div>
          <label class="font-bold">Kembali</label>
        </div>
        <div>
          <input
          type="text"
          class="h-8 text-black"
          disabled
          v-model="input.kembaliRupiah"
          />
        </div>
      </div>
    </div>
  </li>
</ul>
</div>
</div>

<div class="flex justify-end mt-6">
  <div>
    <button
    class="text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
    >
    <div v-if="loading">
      <svg
      aria-hidden="true"
      role="status"
      class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
      />
      <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="#1C64F2"
      />
    </svg>
    Loading...
  </div>
  <div v-else>
    <i class="fa-regular fa-floppy-disk"></i> Simpan Transaksi
  </div>
</button>
</div>
</div>
</form>

<div v-if="loading">
  <molecules-row-loading :loading="loading" :options="options" />
</div>
</div>
</template>

<script>
  import { getData } from "~/hooks/index";
  import Datepicker from "vue2-datepicker";
  import "vue2-datepicker/index.css";

  export default {
    components: {
      Datepicker,
    },

    props: {
      detail: {
        type: Object,
      default: function () {
        return {};
      },
    },
    items: {
      type: Array,
    default: function () {
      return [];
    },
  },
},

data() {
  return {
    id: this.$route.params.id,
    datePickerConfig: {
      range: false,
    },
    dateFormat: "YYYY-MM-DD",
    loading: null,
    options: null,
    api_url: process.env.NUXT_ENV_API_URL,
    api_token: process.env.NUXT_ENV_APP_TOKEN,
    barangs: [],
    barangCarts: [],
    listDraftCarts: [],
    currentPage: 1,
    changeAgain: false,
    selectedPelanggan: this.detail && this.detail.id_pelanggan ? this.detail.id_pelanggan : null,
    selectedBarang: null,
    selectedKodeKas: this.detail && this.detail.kas_kode ? this.detail.kas_id : null,
    selectedSupplier: null,
    supplier: {},
    suppliers: [],
    pelanggans: [],
    kas: [],
    detailKas: {},
    showDetailKas: null,
    loadingKas: null,
    loadingKasList: null,
    showKembali: this.detail && this.detail?.kembali ? true : null,
    loadingKembali: null,
    detailPelanggan: {
      alamat: this.detail && this.detail?.pelanggan ? this.detail?.alamat : null
    },
    showDetailPelanggan: this.detail && this.detail?.pelanggan ? true : null,
    loadingPelanggan: null,
    loadingPelangganList: null,
    loadingBarang: null,
    showGantiHarga: null,
    diskonByBarang: 0,
    lastItemPembelianId: null,
    showBayar: this.detail && this.detail?.bayar ? false : true,
    showDp: false,
    masukPiutang: null,
    hutang: "Rp. 0",
    pembayaranChange: this.detail.lunas == 1 ? 'cash' : null,
    bayarDpRp: "Rp. 0",
    input: {
      tanggal: new Date(),
      reference_code: null,
      bayar: this.detail && this.detail?.bayar ? this.$format(this?.detail?.bayar) : null,
      diterima: null,
      barang: null,
      qty: 1,
      diskon: 0,
      ppn: 0,
      total: this.detail && this.detail?.jumlah ? this.$format(this?.detail?.jumlah) : 'Rp. 0',
      supplier: Number(this.$route.query["supplier"]),
      pembayaran: "cash",
      kode_kas: null,
      kembali: this.detail && this.detail?.kembali ? `Kembali ${this.$format(this.detail.kembali)}` : "Rp. 0",
      diskon_rupiah: 0,
      jatuhTempo: 0,
      kembaliRupiah: this.detail && this.detail?.kembali ? this.$format(this.detail?.kembali) : "Rp. 0",
      piutang: 0,
      bayarDp: 0
    },
    lastItemPenjualanId: null,
    editingItemId: null,
    error: false,
    validation: [],
    total: this.detail && this.detail?.jumlah ? this?.detail?.jumlah : 0,
    bayar: this.detail && this.detail?.bayar ? this?.detail?.bayar : 0,
    kembali: "Rp. 0",
    terbilang: "Nol Rupiah",
    addQty: false,
    qtyById: 1,
    formatCalculateRupiah: 0,
    changePelangganShow: this.detail && this.detail.id_pelanggan ? false : true,
    draft: false,
    pembayarans: [
      { id: "cash", text: "cash" },
      { id: "custom", text: "custom" },
      ],
  };
},

beforeMount() {
  this.authTokenStorage();
},

mounted() {
  this.getBarangLists();
  this.getDataPelanggan();
  this.getKasData();
  this.generateTerbilang(null);
},

methods: {
  generateTerbilang(jml = null) {
    if(this.detail) {
      const jumlah = jml !== null ? jml : Number(this.detail.jumlah);
      const endPoint = `/generate-terbilang?jml=${jumlah}`;
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };
      this.$api
      .get(endPoint, config)
      .then(({ data }) => {
        this.terbilang = data?.data
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },

  gantiHarga(itemId=null, barangId=null) {
    if (itemId) {
      this.editingItemId = itemId;
    }

    if(barangId) {
      this.editingItemId = barangId
    }
  },

  updateQty(id, itemId, e) {
    this.showKembali = false
    const newQty = e.target.value
    const prepareData = {
      item_id: itemId,
      qty: newQty
    }
    if(newQty) {        
      setTimeout(() => {
        this.updateItemPenjualan(id, prepareData)
        // this.checkSaldo();
      }, 1000)
    }
  },

  updateHarga(id, itemId, e) {
    const newHarga = e.target.value;
    const prepareData = {
      item_id: itemId,
      harga_beli: newHarga,

    }
    if(newHarga) {        
      setTimeout(() => {
        this.updateItemPenjualan(id, prepareData)
        // this.draftItemPembelian(true);
        // this.updateStokBarang();
        this.showGantiHarga = false
        // this.checkSaldo();
      }, 1000);
    }
  },

  changeBarang(newValue) {
    if (newValue && newValue.id !== undefined) {
        // Matiin dulu
        // const listDraftsItem = localStorage.getItem("ref_code")
        //   ? JSON.parse(localStorage.getItem("ref_code"))
        //   : null;
        // console.log(listDraftsItem.ref_code);
        // if (listDraftsItem.ref_code !== null) {
        //   this.listupdateItemPenjualan(this.input.reference_code);
        // } else {
        //   this.getDetailBarang(newValue?.id);
        // }
      this.getDetailBarang(newValue?.id);
    } else {
      console.log("Value Is Null");
    }
  },

  showChangePelanggan() {
    this.changePelangganShow = !this.changePelangganShow;
    this.selectedBarang = null;
    this.barangs = [];
  },

  changePelanggan(newValues) {
    if (newValues && newValues.id !== undefined) {
      const pelangganId = Number(newValues.id);
      if (!isNaN(pelangganId)) {
        this.changePelangganShow = false
        this.selectedPelanggan = pelangganId;
        this.getPelangganDetail(pelangganId);
        this.input.pelanggan = pelangganId;
        this.input.nama_pelanggan = newValues.text
      }
    }
  },

  changeDiterima(e) {
    this.loadingKembali = true;
    this.showKembali = true;
    const bayar = Number(e.target.value);
    const numberResult = parseInt(this.input.total.replace(/[^0-9]/g, ""));
    const kembali = bayar - numberResult;
    this.input.kembali = kembali;
    this.kembali = this.$format(kembali);
      // this.total = `Kembali : Rp. ${kembali}`;
    this.kembali = `Kembali : RP. ${kembali}`;
    this.kembaliRupiah = this.$format(kembali);
    this.input.bayar = bayar;
    this.input.diterima = bayar;
    this.generateKembali(this.input.diskon, numberResult, numberResult);
    setTimeout(() => {
      this.loadingKembali = false;
    }, 1500);
  },

  selesaiMengetik(e) {
    const bayar = Number(e.target.value);
    if(bayar >= this.total) {
      const kembali = bayar - this.total;
      this.input.piutang = 0;
      this.input.kembali = this.$format(kembali);
        // this.total = `Kembali : Rp. ${kembali}`;
      this.kembali = `Kembali : RP. ${kembali}`;
      this.input.kembaliRupiah = this.$format(kembali);
      this.masukPiutang = false;
    } else {
      this.$swal({
        title: "Pilih Jenis Pembayaran?",
        text: "Untuk pembayaran DP, pilih jenis pembayaran terlbih dahulu?",
        icon: "question"
      })
      this.$emit('rebuild-data', true)
    }
    
  },

  changeBayar(e) {
    this.loadingKembali = true;
    const bayar = Number(e.target.value);
    const numberResult = parseInt(this.input.total.replace(/[^0-9]/g, ""));
    this.showKembali = true;
    if (this.showDp) {
     const piutang = this.total - bayar;
     this.input.piutang = piutang;
     this.masukPiutang = true;
     this.kembali = `Piutang : Rp. ${piutang}`;
     this.piutang = this.$format(piutang);
     this.input.kembali = null;
     this.input.bayarDp = bayar
     this.input.bayarDpRp = this.$format(e.target.value);
   }
   this.input.bayar = bayar;
   this.input.diterima = bayar;
   this.generateKembali(this.input.diskon, numberResult, numberResult);
   setTimeout(() => {
    this.loadingKembali = false;
          // this.checkSaldo()
  }, 1500);
 },

 clearBayar() {
  this.input.bayar = null;
  this.input.bayarDp = null;
},

generatePembayaran(value) {
  const minggu = 7;
  this.input.pembayaran = value;
 
  switch (value) {
  case "cash":
    this.input.jatuhTempo = 0;
    this.showDp = false;
    break;

  case "1 Minggu":
    this.input.jatuhTempo = 1 * minggu;
    this.showDp = true;
    break;

  case "2 Minggu":
    this.input.jatuhTempo = 2 * minggu;
    this.showDp = true;
    break;

  case "3 Minggu":
    this.input.jatuhTempo = 3 * minggu;
    this.showDp = true;
    break;

  case "4 Minggu":
    this.input.jatuhTempo = 4 * minggu;
    this.showDp = true;
    break;
  }
},

changePembayaran(newValue) {
  this.generatePembayaran(newValue.text);
},

transformPelangganLists(rawData) {
  return rawData
  .filter((item) => item && item.id)
  .map((item) => ({
    id: item.id,
    text: item.nama,
  }));
},

transformBarangLists(rawData) {
  return rawData
  .filter((item) => item && item.kode)
  .map((item) => ({
    id: item.id,
    text: `${item.nama} - ${item.kategori}`,
  }));
},

transformSupplierLists(rawData) {
  return rawData
  .filter((item) => item && item.kode)
  .map((item) => ({
    id: item.id,
    text: item.nama,
  }));
},

transformDataKasLists(rawData) {
  return rawData
  .filter((item) => item && item.kode)
  .map((item) => ({
    id: item.id,
    text: `${item.nama} - ${item.kode}`,
  }));
},

transformItemPenjualan(results) {
 if (results !== undefined && results.length > 0) {
  return results.map((result) => {
    this.lastItemPembelianId = result.id;
    this.selectedPelanggan = result.id_pelanggan
    this.input.pelanggan = result.id_pelanggan
    this.input.nama_pelanggan = result.nama_pelanggan
    this.diskonByBarang = this.$roundup(result.diskon);
    const qtyBarang = result.qty;
    result.qty = qtyBarang > 1 ? qtyBarang : 1;
    const formatCalculateRupiah =
    result.qty > 1 ? result.qty * result.harga : result.harga;
    const transformedBarang = {
      id: result.id,
      nama: result.barang_nama,
      kode_barang: result.barang_kode,
      kode: result.kode,
      satuan: result.satuan,
      harga: result.harga,
      supplier_id: result.id_supplier,
      kode_supplier: result.kode_supplier,
      nama_supplier: result.nama_supplier,
      kode_pelanggan: result.kode_pelanggan,
      nama_pelanggan: result.nama_pelanggan,
      harga_toko: this.$roundup(result.harga_toko),
      harga_toko: result.harga_toko,
      "%": "",
      harga_partai: result.harga_partai,
      "%": "",
      harga_cabang: result.harga_cabang,
      "%": "",
      disc: result.diskon,
      expired: result.ada_expired_date ? result.expired : null,
      qty: Number(result.qty),
      formatCalculateRupiah: formatCalculateRupiah,
      pelanggan_id: result.id_pelanggan,
    };
    return transformedBarang;
  });
} else {
  this.diskonByBarang = this.$roundup(results.diskon);
  const transformedBarang = {
    id: results.id,
    nama: results.nama_barang,
    kode_barang: results.kode_barang,
    kode: results.kode,
    kode_supplier: results.kode_supplier,
    nama_supplier: results.nama_supplier,
    kode_pelanggan: results.kode_pelanggan,
    nama_pelanggan: results.nama_pelanggan,
    satuan: results.satuan,
    harga: results.harga,
    harga_toko: this.$roundup(results.harga_toko),
    harga_toko: results.harga_toko,
    "%": "",
    harga_partai: results.harga_partai,
    "%": "",
    harga_cabang: results.harga_cabang,
    "%": "",
    disc: results.diskon,
    expired: results.ada_expired_date ? results.expired : null,
    qty: Number(results.qty),
    formatCalculateRupiah: results.formatCalculateRupiah,
    pelanggan_id: results.id_pelanggan,
  };

  return transformedBarang;
}
return [];
},

transformBarang(result) {
  const transformedBarang = {
    id: result.id,
    nama: result.nama,
    kode: result.kode,
    kode_barang: result.kode,
    satuan: result.satuan,
    harga_toko: result.hpp,
    harga_toko: result.harga_toko,
    "%": "",
    harga_partai: result.harga_partai,
    "%": "",
    harga_cabang: result.harga_cabang,
    "%": "",
    disc: result.diskon,
    supplier_id: result.id_supplier,
    nama_supplier: result.nama_supplier,
    supplier_kode: result.supplier_kode,
    expired: result.ada_expired_date ? result.expired : null,
    qty: Number(result.qty),
    formatCalculateRupiah: result.formatCalculateRupiah,
  };

  return transformedBarang;
},

inputKeterangan(e) {
  this.input.keterangan = e.target.value;
},

changeKodeKas(newValues) {
  if (newValues && newValues.id !== undefined) {
    const kasId = Number(newValues.id);
    if (!isNaN(kasId)) {
      this.selectedKodeKas = kasId;
      this.getKasDetail(kasId);
      this.input.kode_kas = kasId;
      this.showBayar = false;
    }
  }
},

async getPelangganDetail(id) {
  this.loadingPelanggan = true;
  const data = await getData({
    api_url: `${this.api_url}/data-pelanggan/${id}`,
    token: this.token.token,
    api_key: this.api_token,
  });
  const result = data?.data[0];

  setTimeout(() => {
    this.showDetailPelanggan = true;
    this.detailPelanggan = result;
    this.loadingPelanggan = false;
  }, 1500);
},

async getDataPelanggan() {
  this.loadingPelangganList = true;
  const getAllPages = async () => {
    let allData = [];
    let currentPage = 1;
    let totalPages = 1;

    while (currentPage <= totalPages) {
      const data = await getData({
        api_url: `${this.api_url}/data-pelanggan?page=${currentPage}`,
        token: this.token.token,
        api_key: this.api_token,
      });

      allData = allData.concat(data?.data);
      totalPages = data?.meta?.last_page;
      currentPage++;
    }

    return allData;
  };

  getAllPages()
  .then((data) => {
    this.pelanggans = this.transformPelangganLists(data);
  })
  .finally(() => {
    setTimeout(() => {
      this.loadingPelangganList = false;
    }, 1000);
  })
  .catch((err) => console.log(err));
},

async getKasDetail(id) {
  this.loadingKas = true;
  const data = await getData({
    api_url: `${this.api_url}/data-kas/${id}`,
    token: this.token.token,
    api_key: this.api_token,
  });
  const result = data?.data[0];

  setTimeout(() => {
    this.showDetailKas = true;
    this.detailKas = result;
    this.loadingKas = false;
  }, 1500);
},

hitungBayarSetelahDiskon(diskon) {
  const diskonValue = Number(diskon);
  if (!isNaN(diskonValue)) {
    const diskonAmount = (diskonValue / 100) * this.total;
    this.bayar = this.total - diskonAmount;
  }
},

async getBarangLists() {
  this.loadingBarang = true;
  const getAllPages = async () => {
    let allData = [];
    let currentPage = 1;
    let totalPages = 1;

    while (currentPage <= totalPages) {
      const data = await getData({
        api_url: `${this.api_url}/data-barang?page=${currentPage}`,
        token: this.token.token,
        api_key: this.api_token,
      });

      allData = allData.concat(data?.data);
      totalPages = data?.meta?.last_page;
      currentPage++;
    }

    return allData;
  };

  getAllPages()
  .then((data) => {
    this.barangs = this.transformBarangLists(data);
  })
  .finally(() => {
    setTimeout(() => {
      this.loadingBarang = false;
    }, 1500);
  })
  .catch((err) => console.log(err));
},

async getDetailPelanggan(id) {
  const data = await getData({
    api_url: `${this.api_url}/data-supplier/${id}`,
    token: this.token.token,
    api_key: this.api_token,
  });
  const result = data?.data[0];
  this.supplier = result;
},

async getDetailBarang(id) {
  const data = await getData({
    api_url: `${this.api_url}/data-barang/${id}`,
    token: this.token.token,
    api_key: this.api_token,
  });
  if (data && data?.data) {
    const result = data?.data;
        // const selectedBarang = { ...result };
    const selectedBarang = this.transformBarang(result);
    const idBarang = selectedBarang.id;
    const qtyBarang = selectedBarang.qty;
    selectedBarang.id = idBarang;
    selectedBarang.qty = qtyBarang > 1 ? qtyBarang : 1;
    selectedBarang.formatCalculateRupiah =
    selectedBarang.qty > 1
    ? selectedBarang.qty * selectedBarang.harga_toko
    : selectedBarang.harga_toko;

    const existingItem = result.id === id;

    if (!existingItem) {
      if (this.listDraftCarts.length > 0) {
        this.listDraftCarts.push(selectedBarang);
        this.updateItemPenjualan(true, true, idBarang);
      } else {
        this.barangCarts.push(selectedBarang);
        this.updateItemPenjualan(false, false, idBarang);
      }

      this.loadCalculate();

      this.showBayar = false;
    } else {
      this.$swal({
        icon: "error",
        title: "Oops...",
        text: `${selectedBarang.nama}, sudah ditambahkan!!`,
      });
    }
  }
},

updateStokBarang() {
  const endPoint = `/update-stok-barang-all`;
  const config = {
    headers: {
      Authorization: `Bearer ${this.token.token}`,
    },
  };

  const dataDraft = {
    type: "pembelian",
    kode: this.input.reference_code,
    barangs: this.items.map((item) => {
      return {
        id: item.id_barang,
        kode: item.kode,
        qty: item.qty,
      };
    }),
  };

  this.$api
  .post(endPoint, dataDraft, config)
  .then(({ data }) => {
          // console.log(data)
    if (data?.success) {
      this.draft = false;
    }
  })
  .catch((err) => {
    console.log(err);
  });
},

checkSaldo() {
  this.loading = true;
  this.$nuxt.globalLoadingMessage = "Proses pengecekan saldo ...";
  this.options = "penjualan-toko";
  const endPoint = `/check-saldo/${this.detail.kas_id}?entitas=${this.detail.jumlah}`;
  const config = {
    headers: {
      Authorization: `Bearer ${this.token.token}`,
    },
  };

  this.$api
  .get(endPoint, config)
  .then((data) => {
    if (data?.data?.error) {
      this.$swal({
        icon: "error",
        title: "Oops...",
        text: data?.data?.message,
      });
    }
  })
  .finally(() => {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  })
  .catch((err) => {
    console.log(err);
  });
},

deletedBarangCarts(idBarang, idItemPembelian) {
  const endPoint = `/delete-item-penjualan/${idItemPembelian}`;
  console.log(endPoint);
  const config = {
    headers: {
      Authorization: `Bearer ${this.token.token}`,
    },
  };

  this.$api
  .delete(endPoint, config)
  .then(({ data }) => {
    if (data.success) {
      this.listDraftCarts = this.listDraftCarts.filter(
        (item) => item.id !== idItemPembelian
        );
      this.barangCarts = this.barangCarts.filter(
        (item) => item.id !== idBarang
        );

      this.showGantiHarga = false;
      this.selectedBarang = null;
      this.loadCalculate();
    }
  })
  .catch((err) => {
    console.log(err);
  });
},

pad(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
},

async getKasData() {
  this.loadingKasList = true;
  const getAllPages = async () => {
    let allData = [];
    let currentPage = 1;
    let totalPages = 1;

    while (currentPage <= totalPages) {
      const data = await getData({
        api_url: `${this.api_url}/data-kas?page=${currentPage}`,
        token: this.token.token,
        api_key: this.api_token,
      });

      allData = allData.concat(data?.data);
      totalPages = data?.meta?.last_page;
      currentPage++;
    }

    return allData;
  };

  getAllPages()
  .then((data) => {
    this.kas = this.transformDataKasLists(data);
  })
  .finally(() => {
    setTimeout(() => {
      this.loadingKasList = false;
    }, 1500);
  })
  .catch((err) => console.log(err));
},

handleDiskonInput() {
  const diskon = Number(this.input.diskon);

  this.recalculateTotalBayar(diskon);
},

recalculateTotalBayar(diskon) {
  const total = this.total;

  const diskonDecimal = diskon / 100;

  const nilaiDiskon = total * diskonDecimal;

  const totalBayar = total - nilaiDiskon;

  this.total = totalBayar;
  this.input.diskon = diskon;
  this.input.diskon_rupiah = totalBayar;
  this.input.total = this.$format(totalBayar);

  setTimeout(() => {
    this.updateItemPenjualan(true);
  }, 500);
},

recalculateJumlahRupiah(isi = 0, diskon = 0) {
  this.total = this.barangCarts.reduce((acc, item) => {
    return acc + (item.formatCalculateRupiah || 0);
  }, 0);

  const diskonAmount = (diskon / 100) * this.total;
  this.total -= diskonAmount;

  const ppnAmount = (this.input.ppn / 100) * this.total;
  this.total += ppnAmount;

  this.bayar = this.total * 0.8; 
},

updatePenjualan(draft) {
  this.loading = true
  this.$nuxt.globalLoadingMessage = "Proses menyimpan data penjualan ...";
  const endPoint = `/data-penjualan-toko/${this.id}`;
  const prepareItem = {
    pelanggan: this.input.pelanggan ? this.input.pelanggan : this.detail.id_pelanggan,
    jumlah: Number(this.detail.jumlah),
    bayar: this.input.bayar ? this.input.bayar : this.detail.bayar,
    bayarDp: this.input.bayarDp ? this.input.bayarDp : 0,
    kode_kas: this.input.kode_kas ? this.input.kode_kas : this.detail.kode_kas,
    piutang: this.input.piutang,
    jt: this.input.jatuhTempo,
    pembayaran: this.input.pembayaran
  }

  console.log(prepareItem)

  setTimeout(() => {
    this.loading = false
  }, 1000)

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${this.token.token}`,
    },
  };

  this.$api
  .put(endPoint, prepareItem, config)
  .then(({data}) => {
   if (data?.error) {
    this.$swal({
      icon: "error",
      title: "Oops...",
      text: data.message,
    });
  }
  if (data?.success) {
    const ref_code = { ref_code: this.detail.kode };
    localStorage.removeItem("ref_code");
    localStorage.setItem("cetak_code", JSON.stringify(ref_code));
    this.$swal({
      position: "top-end",
      icon: "success",
      title: data?.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
})
  .finally(() => {
    this.$emit('rebuild-data', false)
    setTimeout(() => {
      this.loading = false;
      const path = "/dashboard/transaksi/jual/penjualan-toko/cetak";
      this.$router.push({
        path: path,
        query: {
          kode: this.input.reference_code !== null ? this.input.reference_code : this.detail.kode,
        },
      });
    }, 1000);
  })
  .catch((err) => {
    console.log(err);
  });
},

loadCalculateItemPembelianDetect() {
  this.total = this.listDraftCarts.reduce((acc, item) => {
    if (
      Number(item.harga_toko) !== undefined &&
      !isNaN(Number(item.harga_toko))
      ) {
      if (Number(item.qty) > 1) {
        return acc + item.formatCalculateRupiah;
      } else {
        return acc + Number(item.harga_toko);
      }
    } else {
      return acc;
    }
  }, 0);
  this.input.total = this.$format(this.total);
  this.input.bayar = this.$format(this.total);
  this.generateKembali(this.input.diskon, this.total, this.total);
},

updateItemPenjualan(itemId, item) {
  this.loading = true
  this.$nuxt.globalLoadingMessage = "Proses update item penjualan ...";
  const endPoint = `/data-item-penjualan/${itemId}`;
  const prepareItem = {
    item_id: item.item_id,
    qty: item.qty !== undefined ? item.qty : null,
    harga: item.harga !== undefined ? item.harga : null
  }

  const config = {
    headers: {
      Authorization: `Bearer ${this.token.token}`,
    },
  };

  this.$api
  .put(endPoint, prepareItem, config)
  .then(({data}) => {
    if(data.success) {
      this.showKembali = false
      this.showBayar = false
      const kembali = Number(data.data.bayar) - Number(data.data.jumlah)
      this.kembaliRupiah = this.$format(kembali)
      this.kembali = this.$format(kembali)
      this.input.total = this.$format(data.data.bayar)
      this.input.bayar = this.$format(data.data.bayar)
            // this.$emit('rebuild-data', false)
    }
  })
  .finally(() => {
    this.$emit('rebuild-data', false)
    setTimeout(() => {
      this.loading = false
    }, 1000)
  })
  .catch((err) => {
    console.log(err);
  });
},

loadCalculate() {
  this.total = this.barangCarts.reduce((acc, item) => {
    if (
      Number(item.harga_toko) !== undefined &&
      !isNaN(Number(item.harga_toko))
      ) {
      if (Number(item.qty) > 1) {
        return acc + item.formatCalculateRupiah;
      } else {
        return acc + Number(item.harga_toko);
      }
    } else {
      return acc;
    }
  }, 0);
  this.input.total = this.$format(this.total);
  this.input.bayar = this.$format(this.total);
  this.generateKembali(this.input.diskon, this.total, this.total);
},

async generateKembali(diskon = 0, total = 0, bayar = 0) {
  const data = await getData({
    api_url: `${this.api_url}/load-form-penjualan/${diskon}/${total}/${bayar}`,
    token: this.token.token,
    api_key: this.api_token,
  });
  this.terbilang = data?.terbilang;
},
},

computed: {
  token() {
    return this.$store.getters["auth/getAuthToken"];
  },
},

watch: {
  notifs() {
    if (this.$nuxt.notifs && this.$_.size(this.$nuxt.notifs) > 0) {
      if (this.$nuxt.notifs[0].routes === "penjualan-toko-edit" || this.$nuxt.notifs[0].routes === "penjualan-toko") {
        this.$emit('rebuild-data', false)
      }
    }
  },
}
};
</script>
