<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="addNewBarang">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Identitas Barang
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="nama"
              >
                Nama Barang
              </label>
              <input
                id="nama"
                type="text"
                placeholder="Nama Barang"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                @input="generateKode"
                v-model="input.nama"
              />
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="kategori"
              >
                Kategori Barang
              </label>
              <Select2 v-model="input.kategori" :options="[{id: null, text: 'Pilih kategori'}, ...categories]" @change="changeCategory($event)" @select="changeCategory($event)" />
            </div>
          </div>
          
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="kode"
              >
                Kode Barang
              </label>
              <input
                id="kode"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="input.kode"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Barcode
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="input.barcode"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Satuan Isi
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="satuanbeli"
              >
                Satuan Beli
              </label>
              <Select2 v-model="input.satuanbeli" :options="[{id: null, text: 'Pilih Satuan Beli'}, ...purchaseLimits]" @change="changeSatuanBeli($event)" @select="changeSatuanBeli($event)" />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="satuanjual"
              >
                Satuan Jual
              </label>
              <input
                type="number"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="input.satuanjual"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Country
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="United States"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Postal Code
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="Postal Code"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Diskon Dan Point
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Address
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                City
              </label>
              <input
                type="email"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="New York"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Country
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="United States"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Postal Code
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="Postal Code"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Foto Barang
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4 py-6">
              <div v-if="previewUrl" class="flex justify-between w-full">
                <div class="grow">
                  <img :src="previewUrl" class="h-auto w-full">
                </div>
                <div class="relative h-32 w-32">
                  <button @click="removePreview" class="bg-transparent rounded-lg absolute top-[-1rem] right-[-2rem] h-16 w-16">
                    <i class="fa-solid fa-xmark text-2xl text-gray-700 font-bold"></i>
                  </button>
                </div>
              </div>
              <div v-else class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div 
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                  @dragover="handleDragOver"
                  @dragleave="handleDragLeave"
                  @drop="handleDrop"
                  >
                  <h2 class="mb-4 text-sm text-gray-500 dark:text-gray-400">Upload Foto Barang Disini !</h2>
                  <i class="fa-solid fa-cloud-arrow-up text-5xl text-gray-500"></i>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
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
              <span v-else><i class="fa-solid fa-plus"></i> Tambah Barang</span>
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

  export default {
    props: {
      type: {
        type: String,
      default: null,
      },
    },

    data(){
      return {
        loading: null,
        options: "",
        api_url: process.env.NUXT_ENV_API_URL,
        api_token: process.env.NUXT_ENV_APP_TOKEN,
        input: {}, 
        previewUrl: '',
        photo: [],
        categories: [],
        purchaseLimits: [],
        isDragging: null,
        selectedCategory: null,
      }
    },

    beforeMount() {
      this.authTokenStorage();
    },

    mounted() {
      this.getCategoryDataBarang();
      this.getSatuanBeliList();
    },

    methods: {
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
        this.input.banner = files[0]
        const fileInput = this.$refs.fileInput;

        if (fileInput.files && fileInput.files.length > 0) {
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

      removePreview() {
        this.previewUrl = '';
      },

      changeCategory(newValues) {
        this.input.kategori = newValues.text;
      },

      changeSatuanBeli(newValue) {
        this.input.satuanbeli = newValues.text
      },

      transformCategoryData(type, rawData) {
        if(type === "kategori-barang") {
            return rawData
            .filter(item => item && item.kode)
            .map(item => ({
              id: item.kode,
              text: item.kode,
            }));
        } else if(type === "satuanbeli") {
            return rawData
            .filter(item => item && item.nama)
            .map(item => ({
              id: item.id,
              text: item.nama,
            }));
        } else {
          console.log("Default")
        }
      },

      getCategoryDataBarang() {
        const getAllPages = async () => {
          let allData = [];
          let currentPage = 1;
          let totalPages = 1;

          while (currentPage <= totalPages) {
            const data = await getData({
              api_url: `${this.api_url}/data-kategori?page=${currentPage}`,
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
          this.categories = this.transformCategoryData('kategori-barang', data);
        })
        .catch((err) => console.log(err));
      },

      getSatuanBeliList() {
        const getAllPages = async () => {
          let allData = [];
          let currentPage = 1;
          let totalPages = 1;

          while (currentPage <= totalPages) {
            const data = await getData({
              api_url: `${this.api_url}/satuan-beli?page=${currentPage}`,
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
          this.purchaseLimits = this.transformCategoryData('satuanbeli', data);
        })
        .catch((err) => console.log(err));
      },

      generateKode() {
        const words = this.input.nama.split(' ');
        const kategori = this.selectedCategory ? this.selectedCategory.split(' ') : '';
        let kategoriGenerate = [];

        if (kategori.length > 0) {
          const firstChar = kategori[0].substring(0, 1).toUpperCase();
          const middleChar = kategori[0].length > 1 ? kategori[0].substring(1, 2).toUpperCase() : '';
          const lastChar = kategori[0].slice(-1).toUpperCase();

          kategoriGenerate = [firstChar, middleChar, lastChar];
        }

        let substringArray = [
          words[0].substring(0, 1).toUpperCase(),
          words[0].length > 2 ? words[0].substring(2, 3).toUpperCase() : '',
          words[0].slice(-1).toUpperCase(),
          ];

        if (words.length > 1) {
          substringArray.push(words[1].substring(0, 1).toUpperCase());
        }

        if (words.length > 2) {
          substringArray.push(words[2].substring(0, 1).toUpperCase());
        }

        this.input.kode = substringArray.join('') + '.' + kategoriGenerate.join('');
        this.input.barcode = substringArray.join('') + '.' + kategoriGenerate.join('');
      },

      addNewBarang(){
        console.log(this.input)
      }
    },

    computed: {
      token() {
        return this.$store.getters["auth/getAuthToken"];
      },
    }
  }
</script>