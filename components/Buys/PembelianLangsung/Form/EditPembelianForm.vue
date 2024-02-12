<template>
  <div>
    <div>
      <pre>
        
      {{ detail }}
      </pre>
    </div>

    <div>
      <pre>
        {{ items }}
      </pre>
    </div>
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
            class="text-xs bg-transparent border-b border-t dark:border-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th class="px-6 py-3">Nama Barang</th>
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
                  @input="updateQty(barang.id_barang)"
                  min="1"
                />
              </td>

              <td class="px-6 py-4">
                {{ barang.satuan }}
              </td>

              <td v-if="showGantiHarga" class="px-6 py-4 text-black">
                <input
                  class="w-auto"
                  type="number"
                  v-model="barang.harga_beli"
                  @input="updateHarga(barang.id, $event)"
                  min="1"
                />
              </td>
              <td v-else class="px-6 py-4">
                <div class="flex justify-between -space-x-4">
                  <div class="font-bold">
                    {{ $format(barang.harga_beli) }}
                  </div>
                  <div>
                    <button
                      @click="gantiHarga(barang.id)"
                      class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover: dark: focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    >
                      <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                      >
                        <i class="fa-solid fa-repeat"></i>
                      </span>
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
                  v-if="lastItemPembelianId"
                  @click="deletedBarangCarts(barang.id, lastItemPembelianId)"
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

    <form @submit.prevent="simpanPembelian(false)">
      <div
        class="bg-transparent shadow-sm rounded w-full flex justify-start space-x-4 mt-6"
      >
        <div class="shrink w-[80vw]">
          <div
            class="grid grid-cols-1 bg-emerald-600 h-48 content-evenly justify-items-center"
          >
            <div class="col-span-full">
              <h4 class="font-bold text-4xl">
                {{ showKembali ? kembali : input.total }}
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
                  <!-- <input
                    v-if="diskonByBarang"
                    type="number"
                    class="h-8 text-black"
                    v-model="diskonByBarang"
                    @input="handleDiskonInput"
                  /> -->
                  <input
                    disabled
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
                      v-model="hutang"
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
      loadingReferenceCode: null,
      loadingSupplier: null,
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
      showKembali: this.detail && this.detail.bayar ? true : false,
      loadingKembali: null,
      showGantiHarga: null,
      diskonByBarang: 0,
      lastItemPembelianId: null,
      masukHutang: null,
      hutang: "Rp. 0",
      showDp: false,
      showBayar: true,
      bayarDpRp: "Rp. 0",
      pembayaranChange: this.detail.lunas == 1 ? 'cash' : null,
      input: {
        tanggal: new Date(),
        reference_code: null,
        bayar: this.detail && this.detail.bayar ? this.$format(this?.detail?.bayar) : null,
        barang: null,
        qty: 1,
        diskon: 0,
        ppn: 0,
        total: this.detail && this.detail.jumlah ? this.$format(this?.detail?.jumlah) : 'Rp. 0',
        supplier: Number(this.$route.query["supplier"]),
        pembayaran: 'cash',
        kode_kas: null,
        jatuhTempo: 0,
        hutang: 0,
        kembaliRupiah: this.detail && this.detail.bayar ? this.$format(Number(this.detail.bayar) - Number(this.detail.jumlah)) : "Rp. 0",
        bayarDp: 0,
      },
      error: false,
      validation: [],
      total: 0,
      bayar: 0,
      kembali: 'Rp. 0',
      terbilang: "Nol Rupiah",
      addQty: false,
      qtyById: 1,
      formatCalculateRupiah: 0,
      changeSupplierShow: false,
      draft: false,
      pembayarans: [
        { id: "cash", text: "cash" },
        { id: "1 Minggu", text: "1 Minggu" },
        { id: "2 Minggu", text: "2 Minggu" },
        { id: "3 Minggu", text: "3 Minggu" },
        { id: "4 Minggu", text: "4 Minggu" },
        { id: "custom", text: "custom" },
      ],
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },


  mounted() {
    this.getDetailSupplier();
    this.getBarangLists();
    this.getSupplierLists();
    this.getKasData();
    this.generateTerbilang();
  },

  methods: {
    gantiHarga(id) {
      if (id) {
        this.showGantiHarga = true;
      }
    },

    generateTerbilang(jml = null) {
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
    },


    updateQty(id) {
      const selectedBarangQty = this.barangCarts.find((item) => item.id === id);

      if (selectedBarangQty) {
        const newQty =
          Number(selectedBarangQty.qty) > 1 ? Number(selectedBarangQty.qty) : 1;
        this.input.qty = newQty;
        selectedBarangQty.qty = newQty;
        selectedBarangQty.formatCalculateRupiah =
          newQty * selectedBarangQty.harga_beli;

        this.total = this.barangCarts.reduce((acc, item) => {
          if (
            Number(item.harga_beli) !== undefined &&
            !isNaN(Number(item.harga_beli))
          ) {
            if (Number(item.qty) > 1) {
              return acc + item.formatCalculateRupiah;
            } else {
              return acc + Number(item.harga_beli);
            }
          } else {
            return acc;
          }
        }, 0);

        this.input.total = this.$format(this.total);
        this.input.bayar = this.$format(this.total);

        this.generateKembali(this.input.diskon, this.total, this.total);
        this.recalculateJumlahRupiah(newQty, this.input.diskon);

        setTimeout(() => {
          // this.draftItemPembelian(true);
          // this.updateStokBarang();
          this.checkSaldo();
        }, 1000);
      } else {
        console.error("Item not found");
      }
    },

    updateHarga(id, e) {
      const newHarga = e.target.value;
      const selectedBarang = this.barangCarts.find((item) => item.id === id);
      selectedBarang.harga_beli = this.$roundup(newHarga);
      this.transformBarang(selectedBarang);

      selectedBarang.formatCalculateRupiah =
        this.input.qty * selectedBarang.harga_beli;

      this.total = this.barangCarts.reduce((acc, item) => {
        if (
          Number(item.harga_beli) !== undefined &&
          !isNaN(Number(item.harga_beli))
        ) {
          if (Number(item.qty) > 1) {
            return acc + item.formatCalculateRupiah;
          } else {
            return acc + Number(item.harga_beli);
          }
        } else {
          return acc;
        }
      }, 0);

      this.input.total = this.$format(this.total);
      this.input.bayar = this.$format(this.total);

      this.generateKembali(this.input.diskon, this.total, this.total);
      this.recalculateJumlahRupiah(this.input.qty, this.input.diskon);

      setTimeout(() => {
        // this.draftItemPembelian(true);
        // this.updateStokBarang();
        this.checkSaldo();
      }, 1000);
    },

    showChangeSupplier() {
      this.changeSupplierShow = !this.changeSupplierShow;
    },

    changeBarang(newValue) {
      if (newValue && newValue.id !== undefined) {
        // Matiin dulu
        // const listDraftsItem = localStorage.getItem("ref_code")
        //   ? JSON.parse(localStorage.getItem("ref_code"))
        //   : null;
        // console.log(listDraftsItem.ref_code);
        // if (listDraftsItem.ref_code !== null) {
        //   this.listDraftItemPembelian(this.input.reference_code);
        // } else {
        //   this.getDetailBarang(newValue?.id);
        // }
        this.getDetailBarang(newValue?.id);
      } else {
        console.log("Value Is Null");
      }
    },

    changeSupplier(newValue) {
      const supplierId = newValue.id;
      if (supplierId !== undefined) {
        this.selectedSupplier = null;
        this.supplierId = supplierId;
        this.getDetailSupplier();

        this.$router.push({
          path: `/dashboard/transaksi/beli/pembelian-langsung/add`,
          query: {
            type: "PEMBELIAN_LANGSUNG",
            supplier: supplierId,
          },
        });
        this.changeSupplierShow = false;
        this.getBarangLists();
      }
    },

    changeBayar(e) {
      this.loadingKembali = true;
      this.showKembali = true;
      const bayar = Number(e.target.value);
      const numberResult = parseInt(this.input.total.replace(/[^0-9]/g, ""));
      const kembali = bayar - numberResult;

      if (this.showDp) {
        this.input.hutang = Math.abs(kembali);
        this.masukHutang = true;
        this.kembali = `Hutang : Rp. ${Math.abs(kembali)}`;
        this.hutang = this.$format(Math.abs(kembali));
        this.input.kembali = null;
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
      this.generateKembali(this.input.diskon, numberResult, numberResult);
      setTimeout(() => {
        this.loadingKembali = false;
        this.checkSaldo();
      }, 1500);
    },

    clearBayar() {
      this.input.bayar = null;
    },

    generatePembayaran(value) {
      const minggu = 7;
      this.input.pembayaran = value;
      if (value !== "cash") {
        this.showDp = true;
      }
      switch (value) {
        case "cash":
          this.input.jatuhTempo = 0;
          break;

        case "1 Minggu":
          this.input.jatuhTempo = 1 * minggu;
          break;

        case "2 Minggu":
          this.input.jatuhTempo = 2 * minggu;
          break;

        case "3 Minggu":
          this.input.jatuhTempo = 3 * minggu;
          break;

        case "4 Minggu":
          this.input.jatuhTempo = 4 * minggu;
          break;
      }
    },

    changePembayaran(newValue) {
      this.generatePembayaran(newValue.text);
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
          id: item.id ,
          text: item.nama,
        }));
    },

    transformBarangLists(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.id,
          text: `${item.nama} - ${item.kategori} (${item.kode})`,
        }));
    },

    transformBarang(result) {
      this.diskonByBarang = this.$roundup(result.diskon);
      const transformedBarang = {
        id: result.id,
        nama: result.nama,
        kode: result.kode,
        satuan: result.satuan,
        harga_beli: this.$roundup(result.hpp),
        harga_toko: result.harga_toko,
        "%": "",
        harga_partai: result.harga_partai,
        "%": "",
        harga_cabang: result.harga_cabang,
        "%": "",
        diskon: result.diskon,
        expired: result.ada_expired_date ? result.expired : null,
        qty: Number(result.qty),
        formatCalculateRupiah: result.formatCalculateRupiah,
      };

      return transformedBarang;
    },

    getSupplierLists() {
      this.loadingSupplier = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-supplier?page=${currentPage}`,
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
          this.suppliers = this.transformSupplierLists(data);
        })
        .finally(() => {
          setTimeout(() => {
            this.loadingSupplier = false;
          }, 1500);
        })
        .catch((err) => console.log(err));
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

    hitungBayarSetelahDiskon(diskon) {
      const diskonValue = Number(diskon);
      if (!isNaN(diskonValue)) {
        const diskonAmount = (diskonValue / 100) * this.total;
        this.bayar = this.total - diskonAmount;
      }
    },

    async getBarangLists() {
      this.loading = true;
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-barang-by-suppliers/${this.supplierId}?page=${currentPage}`,
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
            this.loading = false;
          }, 1500);
        })
        .catch((err) => console.log(err));
    },

    async getDetailSupplier() {
      this.loading = true;
      if(this.supplierId) {        
        const data = await getData({
          api_url: `${this.api_url}/data-supplier/${this.supplierId}`,
          token: this.token.token,
          api_key: this.api_token,
        });
        if (data.success) {
          const result = data?.data;
          this.supplier = result;
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        }
      }
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
            ? selectedBarang.qty * selectedBarang.hpp
            : selectedBarang.hpp;

        const existingItem = result.id === id;

        if (!existingItem) {
          this.barangCarts.push(selectedBarang);

          this.loadCalculate();

          setTimeout(() => {
            this.draftItemPembelian(true);
            // this.updateStokBarang();
            this.checkSaldo();
          }, 1000);

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
      const endPoint = `/update-stok-barang`;
      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };
      const dataDraft = {
        type: "pembelian-langsung",
        kode: this.input.reference_code,
        barangs: this.barangCarts.map((item) => {
          return {
            id: item.id,
            kode: item.kode,
            qty: item.qty,
          };
        }),
      };

      this.$api
        .post(endPoint, dataDraft, config)
        .then(({ data }) => {
          if (data?.draft) {
            this.draft = true;
            this.input.reference_code = data?.data;
            // this.listDraftItemPembelian(data?.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deletedBarangCarts(idBarang, idItemPembelian) {
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
    },

    pad(number) {
      if (number < 10) {
        return "0" + number;
      }
      return number;
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
        this.draftItemPenjualan(true);
      }, 500);
    },

    checkSaldo() {
      this.loading = true;
      this.$nuxt.globalLoadingMessage = "Proses pengecekan saldo ...";
      this.options = "pembelian-langsung";
      const endPoint = `/check-saldo/${this.input.kode_kas}?entitas=${this.total}`;
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

    simpanPembelian(draft) {
      // di matiin dulu sementara
      this.loading = !draft ? true : false;
      this.$nuxt.globalLoadingMessage = "Proses menyimpan transaksi ...";
      this.updateStokBarang();
      // this.loading = true;
      this.options = "pembelian-langsung";
      const endPoint = `/data-pembelian-langsung`;
      const config = {
        headers: {
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      const tanggal =
        this.input.tanggal.getFullYear() +
        "-" +
        this.pad(this.input.tanggal.getMonth() + 1) +
        "-" +
        this.pad(this.input.tanggal.getDate());

      const prepareBarang = this.barangCarts.map((item) => ({
        id: item.id,
        qty: item.qty,
      }));

      let formData = new FormData();
      formData.append("ref_code", this.input.reference_code);
      formData.append("draft", draft);
      formData.append("tanggal", tanggal);
      formData.append("supplier", this.input.supplier);
      formData.append("kode_kas", this.input.kode_kas);
      formData.append("keterangan", this.input.keterangan);
      formData.append("pembayaran", this.input.pembayaran);
      formData.append("jt", this.input.jatuhTempo);
      formData.append("diskon", this.input.diskon);
      formData.append("ppn", this.input.ppn);
      formData.append("jumlah", this.total);

      if (!this.showDp) {
        formData.append(
          "bayar",
          this.showKembali ? this.input.bayar : this.total
        );
      } else {
        formData.append("bayar", this.input.bayarDp);
      }
      formData.append(
        "diterima",
        this.showKembali ? this.input.diterima : this.total
      );
      formData.append("hutang", this.input.hutang);
      formData.append("operator", this.$nuxt.userData.name);
      formData.append("qty", this.input.qty);
      formData.append("barangs", JSON.stringify(prepareBarang));

      this.$api
        .post(endPoint, formData, config)
        .then(({ data }) => {
          if (data?.error) {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
          if (data?.success && !draft) {
            const ref_code = { ref_code: this.input.reference_code };
            localStorage.removeItem("ref_code");
            localStorage.setItem("cetak_code", JSON.stringify(ref_code));
            this.$swal({
              position: "top-end",
              icon: "success",
              title: data?.message,
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              this.loading = false;
              const path = this.input.jatuhTempo
                ? "/dashboard/transaksi/beli/purchase-order/cetak"
                : "/dashboard/transaksi/beli/pembelian-langsung/cetak";
              this.$router.push({
                path: path,
                query: {
                  kode: this.input.reference_code,
                },
              });
            }, 1000);
          }
        })

        .catch((error) => {
          this.loading = false;
          this.error = true;
          this.$swal({
            title: "Data belum lengkap?",
            text: "Periksa kembali kolom input data!!",
            icon: "question",
          });
          this.validation = error.response.data;
        });
    },

    loadCalculate() {
      this.total = this.barangCarts.reduce((acc, item) => {
        if (
          Number(item.harga_beli) !== undefined &&
          !isNaN(Number(item.harga_beli))
        ) {
          if (Number(item.qty) > 1) {
            return acc + item.formatCalculateRupiah;
          } else {
            return acc + Number(item.harga_beli);
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
};
</script>
