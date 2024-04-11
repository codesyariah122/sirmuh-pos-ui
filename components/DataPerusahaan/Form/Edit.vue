<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div
      v-if="success"
      ref="alertNotifs"
      class="flex justify-center w-full bg-transparent mt-4"
    >
      <molecules-success-alert
        :success="success"
        :messageAlert="messageAlert"
        @close-alert="closeSuccessAlert"
      />
    </div>

    <div v-if="success" class="flex justify-center bg-transparent mt-2 mb-2">
      <button
        @click="backTo"
        type="button"
        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Check Data Perusahaan
      </button>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="updatePelanggan">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Data Perusahaan
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-12">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="nama"
              >
                Nama Perusahaan
              </label>
              <input
                id="nama"
                type="text"
                placeholder="Nama Barang"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="detail.nama"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-12">
            <div class="relative w-full mb-2">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Logo
              </label>
              <span class="w-12 h-12 text-sm text-white bg-blueGray-200 border-0 border-none inline-flex items-center justify-center rounded-full">
                <div v-if="detail.logo === null">
                  <div role="status">
                    <svg aria-hidden="true" class="w-4 h-4 me-0 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <span class="text-3xl">😖</span>
                </div>
                <img v-else
                :alt="detail.nama"
                :src="`${image_url}/tokos/${detail.logo}`"
                class="shadow-xl rounded-full h-16 align-middle border-none absolute max-w-120-px"
                />
              </span>
            </div>
            <div class="px-2">
              <button
                v-on:click="toggleModal()"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                type="button"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Change Logo
                </span>
              </button>

              <div
                v-if="showModal"
                class="overflow-x-hidden overflow-y-auto fixed inset-0 bg-gray-300 dark:bg-gray-300 bg-opacity-50 z-50 outline-none focus:outline-none justify-center items-center flex"
              >
                <div class="relative w-auto my-6 mx-auto max-w-6xl inset-0">
                  <form>
                    <!--content-->
                    <div
                      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                    >
                      <!--header-->
                      <div
                        class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
                      >
                        <h3 class="text-3xl font-semibold">Change Logo</h3>
                        <button
                          class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          v-on:click="toggleModal()"
                        >
                          <span
                            class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                          >
                            ×
                          </span>
                        </button>
                      </div>
                      <!--body-->
                      <div class="relative p-6 flex-auto">
                        <div class="w-full lg:w-12/12 px-4 py-6">
                          <div
                            v-if="previewUrl && input.photo !== null"
                            class="flex justify-between w-full"
                          >
                            <div class="grow">
                              <img :src="previewUrl" class="h-auto w-full" />
                            </div>
                            <div class="relative h-32 w-32">
                              <button
                                @click="removePreview"
                                class="bg-transparent rounded-lg absolute top-[-1rem] right-[-2rem] h-16 w-16"
                              >
                                <i
                                  class="fa-solid fa-xmark text-2xl text-gray-700 font-bold"
                                ></i>
                              </button>
                            </div>
                          </div>
                          <div
                            v-else
                            class="flex items-center justify-center w-full"
                          >
                            <label
                              for="dropzone-file"
                              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                              <div
                                class="flex flex-col items-center justify-center pt-5 pb-6"
                                @dragover="handleDragOver"
                                @dragleave="handleDragLeave"
                                @drop="handleDrop"
                              >
                                <h2
                                  class="mb-4 text-sm text-gray-500 dark:text-gray-400"
                                >
                                  Upload Foto Here !
                                </h2>
                                <i
                                  class="fa-solid fa-cloud-arrow-up text-5xl text-gray-500"
                                ></i>
                                <p
                                  class="mb-2 text-sm text-gray-500 dark:text-gray-400"
                                >
                                  <span class="font-semibold"
                                    >Click to upload</span
                                  >
                                  or drag and drop
                                </p>
                              </div>
                              <input
                                ref="fileInput"
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                                @change="handleFileInput"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <!--footer-->
                      <div
                        class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
                      >
                        <button
                          class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          v-on:click="toggleModal()"
                        >
                          Close
                        </button>
                        <!-- <button
                          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          v-on:click="toggleModal()"
                        >
                          Save Changes
                        </button> -->
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="telp"
              >
                Telpon Perusahaan
              </label>
              <vue-tel-input
                name="telp"
                id="telp"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="62+xxxx xxxx xxx"
                v-model="detail.telp"
                style="height: 50px"
              ></vue-tel-input>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
              >
                Kode Lokasi
              </label>
              <input
                id="pekerjaan"
                type="text"
                placeholder="Pekerjaan Pelanggan"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="detail.pekerjaan"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="nama"
              >
                Alamat Pelanggan
              </label>
              <wysiwyg v-model="detail.alamat" class="w-full" />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Kota
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kota"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Propinsi
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.propinsi"
              />
            </div>
          </div>
        </div>


        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Negara
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.negara"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Slogan
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.header"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Referensi
            </h6>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Pembelian
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_pembelian"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Pengeluaran Biaya
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_pengeluaran"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Return Pembelian
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_return_pembelian"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Bayar Piutang
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_bayar_piutang"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Terima Barang Return
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_terima_return"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Mutasi Kas
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_mutasi_kas"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Penjualan Toko
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_penjualan_toko"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Penyesuaian Stok
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_penyesuaian_stok"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Return Penjualan
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_return_penjualan"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="pekerjaan"
                >
                Penukaran Point
              </label>
              <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan Pelanggan"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              v-model="detail.kd_tukar_point"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4 py-6">
            <button
              type="submit"
              class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <div v-if="loading">
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </div>
              <span v-else><i class="fa-solid fa-plus"></i> Update Data</span>
            </button>

            <div v-if="loading">
              <molecules-row-loading :loading="loading" :options="options" />
            </div>
          </div>
        </div>
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
    detail: {
      type: [Object, Array],
    },
    slug: {
      type: String,
    },
    current: {
      type: [Number, String],
      default: null,
    },
    pageData: {
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
  },

  components: {
    Datepicker,
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      img_url: process.env.NUXT_ENV_ASSET_PUBLIC_URL,
      loading: null,
      success: null,
      messageAlert: null,
      showModal: false,
      options: "",
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      input: {},
      previewUrl: "",
      validations: [],
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      this.previewUrl = this.previewUrl !== "" ? "" : this.previewUrl;
    },

    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },

    backTo() {
      if (this.current) {
        this.$router.push({
          // path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.pageData}`,
          path: `/dashboard/${this.parentRoute}/${this.pageData}`,
          query: {
            current: this.current,
          },
        });
      } else {
        this.$router.go(-1);
      }
    },

    updatePelanggan() {
      this.loading = true;
      this.options = "data-pelanggan";
      const prepareData = {
        nama: this.input.nama ? this.input.nama : this.detail.nama,
        email: this.input.email ? this.input.email : this.detail.email,
        telp: this.input.telp ? this.input.telp : this.detail.telp,
        alamat: this.input.alamat ? this.input.alamat : this.detail.alamat,
        pekerjaan: this.input.pekerjaan
          ? this.input.pekerjaan
          : this.detail.pekerjaan,
      };

      const endPoint = `/data-pelanggan/${this.slug}`;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
        .put(endPoint, prepareData, config)
        .then(({ data }) => {
          if (data.success) {
            this.success = true;
            this.messageAlert = data.message;
            this.validations = [];
            this.$swal({
              position: "top-end",
              icon: "success",
              title: data?.message,
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              this.loading = false;
              this.input = {};
            }, 500);
            // setTimeout(() => {
            //   this.$router.go(-1);
            // }, 1500);
          } else {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
            setTimeout(() => {
              this.loading = false;
              this.input = {};
            }, 1000);
          }
        })
        .catch((err) => {
          this.validations = err.response.data;
          this.success = false;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
    },

    handleDragOver(event) {
      event.preventDefault();
      this.isDragging = true;
    },
    handleDragLeave() {
      this.isDragging = false;
    },
    handleDrop(event) {
      event.preventDefault();
      this.isDragging = false;

      const files = event.dataTransfer.files;
      this.uploadFiles(files);
    },

    handleFileInput(event) {
      const files = event.target.files;
      this.uploadFiles(files);
    },

    uploadFiles(files) {
      this.uploadProcess(files[0]);
      const fileInput = this.$refs.fileInput;

      if (fileInput.files && fileInput.files.length > 0) {
        console.log("kesini");
        const file = fileInput.files[0];

        const reader = new FileReader();

        reader.onload = (e) => {
          this.previewUrl = e.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        event.preventDefault();
        const file = files[0];

        const reader = new FileReader();

        reader.onload = (e) => {
          this.previewUrl = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    },

    uploadProcess(photo) {
      try {
        if (this.token !== null) {
          this.loading = true;
          this.options = "change-photo";

          const formData = new FormData();
          formData.append("photo", photo);

          const endPoint = `/update-profile-photo`;
          const config = {
            headers: {
              Accept: "application/json",
            },
          };

          this.$api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.token.token}`;
          this.$api.defaults.headers.common["Dku-Api-Key"] = this.api_token;

          this.$api
            .post(endPoint, formData, config)
            .then(({ data }) => {
              if (data.success) {
                this.$toast.show(data.message, {
                  type: "success",
                  duration: 1500,
                  position: "top-right",
                  icon: "check-double",
                });
                this.$emit("refetch-data");
                this.success = true;
                this.message_success = data.message;
                this.showModal = false;
              }
            })
            .finally(() => {
              setTimeout(() => {
                this.loading = false;
                this.options = "";
              }, 1500);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } catch (err) {
        console.error(err);
      }
    },

    removePreview() {
      this.previewUrl = "";
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
