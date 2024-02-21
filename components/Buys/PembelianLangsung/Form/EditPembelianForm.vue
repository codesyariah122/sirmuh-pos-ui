<template>
  <div>
    <div
      class="relative flex flex-col min-w-0 break-words bg-transparent w-96 mb-6 shadow-sm rounded"
    >
      <div>
        <div class="flex justify-start space-x-0">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Ref No</h4>
          </div>
          <div class="shrink-0 w-full">
            <div class="flex justify-between space-x-2">
              <div class="shrink-0 w-30 text-black">
                <input type="text" v-model="detail.kode" disabled />
              </div>
              <div class="flex-none w-30">
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
            <h4 class="font-bold text-md">Pilih Kode Kas</h4>
          </div>
          <div class="shrink-0 w-60 text-black">
            <div v-if="loadingSupplier">
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
              <span class="text-white">Preparing data kas</span>
            </div>
            <div v-else>
              <Select2
              disabled
                v-model="detail.kas_id"
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
        <span class="font-semibold">Preparing data kas</span>
      </div>
      <div v-else>
        <div
          v-if="showDetailKas && detailKas"
          class="flex justify-start space-x-0 mt-6"
        >
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Saldo Kas</h4>
          </div>
          <div class="shrink-0 w-60 text-black">
            <input type="text" disabled :value="$format(detailKas.saldo)" />
          </div>
        </div>
        <div
          v-else
          class="flex justify-start space-x-0 mt-6"
        >
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Saldo Kas</h4>
          </div>
          <div class="shrink-0 w-60 text-black">
            <input type="text" disabled :value="$format(detail.kas_saldo)" />
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-start space-x-0 py-6">
          <div class="flex-none w-36">
            <h4 class="font-bold text-md">Keterangan</h4>
          </div>
          <div class="shrink-0 w-full">
            <label for="keterangan" class="block mb-2 text-sm font-medium dark:"
              >Keterangan Beli</label
            >
            <textarea
              id="keterangan"
              rows="4"
              class="block p-2.5 w-full text-sm text-blueGray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            /> {{input.pembayaran}}
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
            class="text-xs bg-transparent border-b border-t dark:border-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="px-6 py-3">Barang</th>
              <th class="px-6 py-3">SUpplier</th>
              <th class="px-6 py-3 w-10">Qty</th>
              <th class="px-6 py-3">Satuan</th>
              <th class="px-6 py-3">Harga Beli</th>
              <!-- <th class="px-6 py-3">(%)</th>
              <th class="px-6 py-3">Harga Partai</th>
              <th class="px-6 py-3">(%)</th>
              <th class="px-6 py-3">Harga Cabang</th>
              <th class="px-6 py-3">(%)</th> -->
              <!-- <th class="px-6 py-3">Disc</th> -->
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
                  @focus="clearQty(barang)"
                />
              </td>

              <td class="px-6 py-4">
                {{ barang.satuan }}
              </td>

              <td v-if="editingItemId === barang.id" class="px-6 py-4 text-black">
                <input
                  class="w-auto"
                  type="number"
                  v-model="barang.harga_beli"
                  @input="updateHarga(detail.id, barang.id, $event)"
                  min="1"
                />
              </td>
              <td v-else class="px-6 py-4">
                <div class="flex justify-between space-x-2">
                  <div class="font-bold">
                    {{ $format(barang.harga_beli) }}
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
                {{ $format(barang.harga_beli * barang.qty) }}
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

          <tbody v-if="loadingItem || loadingDelete || loadingSaldo">
            <tr>
              <th colspan="3" scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-center overflow-x-hidden">
                <div role="status">
                  <svg aria-hidden="true" class="w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  <span class="sr-only">Loading...</span>
                </div>
                <span v-if="loadingItem">Loading item pembelian ...</span>
                <span v-if="loadingDelete">Loading item deleted ...</span>
                <span v-if="loadingSaldo">Proses pengecekan saldo ...</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <form @submit.prevent="updatePembelian(false)">
      <div
        class="bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"
      >
        <div v-if="detail.jumlah === detail.diterima && !showKembali" class="shrink w-[80vw]">
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
                {{ showKembali ? kembali : input.total}}
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
          <ul class="w-80 text-sm font-medium bg-transparent">
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
                    disabled
                    type="number"
                    class="h-8 text-black"
                    v-model="input.diskon"
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
                    @input="recalculateTotalBayar(input.qty, input.diskon)"
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
                  :disabled="showDp"
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
              <div v-if="masukHutang">
                <div class="grid grid-cols-3 gap-0">
                  <div>
                    <label class="font-bold">Hutang</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      class="h-8 text-black"
                      disabled
                      v-model="input.hutangRupiah"
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
            class="bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
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
      options: "pembelian-langsung",
      loadingReferenceCode: this.detail.kode ? this.detail.kode : null,
      loadingSupplier: null,
      loadingSaldo: null,
      loadingItem: null,
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
      currentPage: 1,
      changeAgain: false,
      selectedBarang: null,
      selectedKodeKas: null,
      selectedSupplier: null,
      supplierId: this.$route.query["supplier"],
      supplier: {},
      suppliers: [],
      kas: [],
      detailKas: {},
      showDetailKas: null,
      loadingKas: null,
      showKembali: this.detail && this.detail?.bayar >= this.detail.jumlah && this.detail.lunas == "True"  ? false : true,
      loadingKembali: this.detail && this.detail?.bayar > this.detail.jumlah ? false : null,
      showGantiHarga: null,
      editingItemId: null,
      diskonByBarang: 0,
      lastItemPembelianId: null,
      masukHutang: this.detail.lunas === "False" ? true : false,
      hutang: "Rp. 0",
      showDp: this.detail.lunas == "False" ? true : false,
      showBayar: false,
      bayarDpRp: this.detail.lunas == "False" ? this.detail.bayar : "Rp. 0",
      pembayaranChange: this.detail.lunas == "True" ? 'cash' : null,
      input: {
        tanggal: new Date(),
        reference_code: null,
        bayar: this.detail && this.detail.bayar ? this.$format(this?.detail?.bayar) : 0,
        barang: null,
        qty: 1,
        diskon: 0,
        ppn: 0,
        total: this.detail && this.detail.jumlah ? this.$format(this?.detail?.jumlah) : 'Rp. 0',
        supplier: Number(this.$route.query["supplier"]),
        pembayaran: null,
        kode_kas: null,
        jatuhTempo: this.detail && this.detail.tempo ? this.detail.tempo : 0,
        hutang: this.detail && this.detail?.lunas == "True" ? 0 : this.detail?.hutang,
        kembaliRupiah: this.detail && this.detail.bayar >= this.detail.jumlah ? this.$format(Number(this.detail.bayar) - Number(this.detail.jumlah)) : "Rp. 0",
        hutangRupiah: this.detail && this.detail?.lunas == "True" ? 'Rp. 0' : this.$format(this.detail?.hutang),
        bayarDp: this.detail && this.detail?.bayar ? this.$format(this?.detail?.bayar) : 0,
      },
      error: false,
      validation: [],
      total: 0,
      bayar: 0,
      kembali: this.detail && this.detail?.lunas == "True" ? `Kembali ${this.$format(Number(this.detail.bayar) - Number(this.detail.jumlah))}` : `Hutang ${this.$format(this.detail.hutang)}`,
      terbilang: "Nol Rupiah",
      addQty: false,
      qtyById: 1,
      formatCalculateRupiah: 0,
      changeSupplierShow: false,
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
    this.getKasData();
    this.generateTerbilang(null);
    this.generateTempo(Number(this.detail.tempo))
  },

  methods: {
    gantiHarga(itemId=null, barangId=null) {
      if (itemId) {
        this.editingItemId = itemId;
      }

      if(barangId) {
        this.editingItemId = barangId
      }
    },

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

    updateQty(id, itemId, e) {
      this.showKembali = false
      const newQty = e.target.value
      const prepareData = {
        item_id: itemId,
        qty: newQty
      }
      if(newQty) {        
      this.updateItemPembelian(id, prepareData)
        setTimeout(() => {
          this.checkSaldo();
        }, 500)
      }
    },

    updateHarga(id, itemId, e) {
      const newHarga = e.target.value;
      const prepareData = {
        item_id: itemId,
        harga_beli: newHarga,

      }
      if(newHarga) {        
        this.updateItemPembelian(id, prepareData)
        setTimeout(() => {
          this.showGantiHarga = false
          this.checkSaldo();
        }, 500);
      }
    },


    changeBayar(e) {
      this.loadingKembali = true;
      this.showKembali = true;
      const bayar = Number(e.target.value);
      const numberResult = parseInt(this.input.total.replace(/[^0-9]/g, ""));
      const kembali = Math.abs(bayar - numberResult);

      if(this.showDp) {
        this.input.hutang = kembali;
        this.masukHutang = true
        this.kembali = `Hutang : ${this.$format(kembali)}`
        this.input.hutangRupiah = this.$format(kembali)
      } else {
        this.input.hutang = 0;
        this.input.kembali = this.$format(kembali);
        // this.total = `Kembali : Rp. ${kembali}`;
        this.kembali = `Kembali : RP. ${kembali}`;
        this.input.kembaliRupiah = this.$format(kembali);
        this.masukHutang = false;
      }

      this.input.bayar = bayar;
      this.input.diterima = bayar;
      this.generateTerbilang(numberResult);
      setTimeout(() => {
        this.loadingKembali = false;
        this.checkSaldo();
      }, 1500);
    },

    clearQty(barang) {
      barang.qty = null
    },

    clearBayar() {
      this.input.bayar = null;
      this.input.bayarDp = null;
    },

    generateTempo(value) {
      switch (value) {
        case 0:
          this.input.pembayaran = 'cash'
          break;

        case 7:
          this.input.pembayaran = '1 Minggu'
          break;

        case 14:
          this.input.pembayaran = "2 Minggu"
          break;

        case 21:
          this.input.pembayaran = "3 Minggu"
          break;

        case 28:
          this.input.pembayaran = "4 Minggu"
          break;
      }
    },

    generatePembayaran(value) {
      const minggu = 7;
      this.input.pembayaran = value;
      
      switch (value) {
        case "cash":
          this.input.jatuhTempo = 0;
          this.showDp = false;
          break;

        case "custom":
          this.input.jatuhTempo = 40 * minggu;
          this.showDp = true;
          break;
      }
    },

    changePembayaran(newValue) {
      this.generatePembayaran(newValue.text);
    },

    transformDataKasLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id ,
          text: `${item.nama} - ${item.kode}`,
        }));
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
        }
      }
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

    deletedBarangCarts(idBarang, idItemPembelian) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.selectedBarang = null;
          const endPoint = `/delete-item-pembelian/${idItemPembelian}`;
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
        }
      })
    },

    async getKasData() {
      this.loadingKas = true;
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
            this.loadingKas = false;
          }, 1500);
        })
        .catch((err) => console.log(err));
    },

    checkSaldo() {
      this.loadingSaldo = true;
      this.$nuxt.globalLoadingMessage = "Proses pengecekan saldo ...";
      this.options = "pembelian-langsung";
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
          this.loadingSaldo = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    recalculateJumlahRupiah(isi = 0, diskon = 0) {
      this.total = this.barangCarts.reduce((acc, item) => {
        return acc + (item.formatCalculateRupiah || 0);
      }, 0);

      const diskonAmount = (diskon / 100) * this.total;
      this.total -= diskonAmount;

      // Apply tax
      const ppnAmount = (this.input.ppn / 100) * this.total;
      this.total += ppnAmount;

      // Update payment amount (contoh: bayar adalah 80% dari total)
      this.bayar = this.total * 0.8; // sesuaikan sesuai dengan logika bisnis Anda
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

    updatePembelian(draft) {
      this.loading = true
      this.$nuxt.globalLoadingMessage = "Proses menyimpan data pembelian ...";
      this.updateStokBarang()
      const endPoint = `/data-pembelian-langsung/${this.id}`;      
      const prepareItem = {
        jumlah: Number(this.detail.jumlah),
        bayar: this.input.bayar ? this.input.bayar : this.detail.bayar,
        bayarDpRp: this.input.bayarDpRp ? Number(this.input.bayarDpRp) : this.detail.bayar,
        diterima: this.input.diterima ? this.input.diterima : this.detail.diterima,
        kode_kas: this.input.kode_kas ? this.input.kode_kas : this.detail.kode_kas,
        hutang: this.input.hutang,
        masuk_hutang: this.input.pembayaran !== 'cash' ? true : false,
        jt: this.input.jatuhTempo,
      }

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
          const path = "/dashboard/transaksi/beli/pembelian-langsung/cetak";
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

    updateItemPembelian(itemId, item) {
      this.loadingItem = true
      const endPoint = `/data-item-pembelian/${itemId}`;
      const prepareItem = {
        item_id: item.item_id,
        qty: item.qty !== undefined ? item.qty : null,
        harga_beli: item.harga_beli !== undefined ? item.harga_beli : null,
        jt: this.input.jatuhTempo ? this.input.jatuhTempo : this.detail.tempo
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
            if(data.data.lunas === "True") {              
              this.showKembali = false
              this.showBayar = false
              const kembali = Number(data.data.bayar) - Number(data.data.jumlah)
              this.kembaliRupiah = this.$format(kembali)
              this.kembali = this.$format(kembali)
              this.input.total = this.$format(data.data.bayar)
              this.input.bayar = this.$format(data.data.bayar)
            } else {
              this.showKembali = false
              this.showBayar = false
              this.kembali = this.$format(data.data.hutang)
              this.input.total = data.data.jumlah
              this.input.bayar = this.$format(data.data.bayar)
              this.input.hutangRupiah = this.$format(data.data.hutang)
              this.input.hutang = data.data.hutang
            }
          }
        })
        .finally(() => {
          this.$emit('rebuild-data', false)
          this.loadingItem = false
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
