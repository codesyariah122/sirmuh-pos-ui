<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div v-if="success">
      <div
        ref="alertNotifs"
        class="flex justify-center w-full bg-transparent mt-4"
      >
        <div>
          <molecules-success-alert
            :success="success"
            :messageAlert="messageAlert"
            @close-alert="closeSuccessAlert"
          />
        </div>
      </div>
      <div class="flex justify-center w-full bg-transparent mt-2">
        <button
          @click="backTo"
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Check Data Barang
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="updateFotoBarang">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Foto Barang {{ detail.nama }}
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4 py-6">
            <div
              v-if="previewUrl || detail.photo"
              class="flex justify-between w-full"
            >
              <div class="grow">
                <img
                  :src="
                    previewUrl
                      ? previewUrl
                      : `${storageUrl}/${detail.photo}` || detail.photo !== null
                      ? `${storageUrl}/${detail.photo}`
                      : previewUrl
                  "
                  class="h-auto w-full"
                />
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

            <div v-else class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6 w-full"
                  @dragover="handleDragOver"
                  @dragleave="handleDragLeave"
                  @drop="handleDrop"
                >
                  <h2 class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    Upload Foto Barang Disini !
                  </h2>
                  <i
                    class="fa-solid fa-cloud-arrow-up text-5xl text-gray-500"
                  ></i>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                </div>
                <input
                  ref="fileInput"
                  id="dropzone-file"
                  type="file"
                  class="w-full hidden"
                  @change="handleFileInput"
                />
              </label>
            </div>

            <div
              v-if="validations.photo"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.photo[0] }}
              </div>
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
              <span v-else><i class="fa-solid fa-plus"></i> Update Foto</span>
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
      loading: null,
      success: null,
      messageAlert: null,
      options: "",
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      storageUrl: process.env.NUXT_ENV_STORAGE_URL,
      input: {},
      validations: [],
      previewUrl: "",
      photo: [],
      isDragging: null,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {},

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
      this.previewUrl = files;
      this.uploadFiles(files);
    },

    handleFileInput(event) {
      const files = event.target.files;
      this.previewUrl = files;
      this.uploadFiles(files);
    },

    uploadFiles(files) {
      this.input.photo = files[0];
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
      console.log("Ok remove preview");
      this.previewUrl = "";
      this.$set(this.detail, "photo", null);
    },

    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },

    backTo() {
      if (this.current) {
        this.$router.push({
          path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.pageData}`,
          query: {
            current: this.current,
          },
        });
      } else {
        console.log("Pasti kadie tolol vue js");
        this.$router.go(-1);
      }
    },

    updateFotoBarang() {
      this.loading = true;

      this.options = "edit-barang";

      if (this.input.photo !== undefined) {
        const endPoint = `/update-photo-barang/${this.detail.id}`;
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${this.token.token}`,
          },
        };

        let formData = new FormData();
        formData.append("photo", this.input.photo);

        this.$api
          .post(endPoint, formData, config)
          .then(({ data }) => {
            if (data.success) {
              this.success = true;
              this.messageAlert = data.message + "," + this.detail.nama;
              this.validations = [];
              this.$swal({
                title: this.detail.nama,
                text: data.message + "," + this.detail.nama,
                imageUrl: this.previewUrl,
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: this.detail.nama,
              });

              setTimeout(() => {
                this.loading = false;
                this.input = {};
              }, 500);
            } else {
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: data.message,
              });
              setTimeout(() => {
                this.loading = false;
                this.input = {};
                this.previewUrl = "";
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
      } else {
        console.log("input photo null");
        this.success = true;
        this.messageAlert =
          "Tidak ada perubahan data image barang " + "," + this.detail.nama;
        this.validations = [];
        this.$swal({
          title: this.detail.nama,
          text:
            "Tidak ada perubahan data image barang " + "," + this.detail.nama,
          imageUrl: `${this.storageUrl}/${this.detail.photo}`,
          imageWidth: 400,
          imageHeight: 400,
          imageAlt: this.detail.nama,
        });
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
  },
};
</script>
