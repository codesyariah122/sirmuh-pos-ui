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
        Check Data Barang
      </button>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="updateBarang">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Data Hutang
        </h6>
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
      loading: null,
      success: null,
      messageAlert: null,
      options: "",
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      input: {},
      validations: [],
      datePickerConfig: {
        range: false,
      },
      dateFormat: "YYYY-MM-DD",
      previewUrl: "",
      photo: [],
      categories: [],
      purchaseLimits: [],
      sellingLimits: [],
      suppliers: [],
      isDragging: null,
      selectedCategory: null,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.getCategoryDataBarang();
    this.getSatuanBeliList();
    this.getSatuanJualList();
    this.getSupplierLists();
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
      this.previewUrl = "";
    },

    changeCategory(newValues) {
      if (newValues && newValues.text) {
        this.input.kategori = newValues.text;
      }
    },

    changeSupplier(newValues) {
      if (newValues && newValues.text) {
        this.input.supplier = newValues.kode;
      }
    },

    changeSatuanBeli(newValues) {
      if (newValues) {
        this.input.satuanbeli = newValues.text;
      }
    },

    changeSatuanJual(newValues) {
      if (newValues) {
        this.input.satuanjual = newValues.text;
      }
    },

    transformCategoryData(rawData) {
      return rawData
        .filter((item) => item && item.kode)
        .map((item) => ({
          id: item.kode,
          text: item.kode,
        }));
    },

    transformSatuanBeli(rawData) {
      return rawData
        .filter((item) => item && item.nama)
        .map((item) => ({
          id: item.nama,
          text: item.nama,
        }));
    },

    transformSatuanJual(rawData) {
      return rawData
        .filter((item) => item && item.nama)
        .map((item) => ({
          id: item.nama,
          text: item.nama,
        }));
    },

    transformSupplierData(rawData) {
      return rawData
        .filter((item) => item && item.nama)
        .map((item) => ({
          id: item.nama,
          text: `${item.nama} - ${item.kode}`,
        }));
    },

    handleDateChange(date) {
      this.input.tglbeli = date;
      this.$set(this.input, "tgl_terakhir", date);
    },

    getDefaultDate() {
      return new Date();
    },
    handleExpiredDate(newDate) {
      this.input.expired = newDate;
    },

    handleAddExpired() {
      this.input.ada_expired_date != this.input.ada_expired_date;
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
          this.categories = this.transformCategoryData(data);
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
          this.purchaseLimits = this.transformSatuanBeli(data);
        })
        .catch((err) => console.log(err));
    },

    getSatuanJualList() {
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/satuan-jual?page=${currentPage}`,
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
          this.sellingLimits = this.transformSatuanJual(data);
        })
        .catch((err) => console.log(err));
    },

    getSupplierLists() {
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
          this.suppliers = this.transformSupplierData(data);
        })
        .catch((err) => console.log(err));
    },

    generateKode() {
      const words =
        (this.input?.nama && this.input?.nama.split(" ")) || this.detail.nama;
      const kategori = this.input.kategori
        ? this.input.kategori.split(" ")
        : "";
      let kategoriGenerate = [];

      if (kategori.length > 0) {
        const firstChar = kategori[0].substring(0, 1).toUpperCase();
        const middleChar =
          kategori[0].length > 1
            ? kategori[0].substring(1, 2).toUpperCase()
            : "";
        const lastChar = kategori[0].slice(-1).toUpperCase();

        kategoriGenerate = [firstChar, middleChar, lastChar];
      }

      let substringArray = [
        words[0]?.substring(0, 1).toUpperCase(),
        words[0]?.length > 2 ? words[0].substring(2, 3).toUpperCase() : "",
        words[0]?.slice(-1).toUpperCase(),
      ];

      if (words.length > 1) {
        substringArray.push(words[1].substring(0, 1).toUpperCase());
      }

      if (words.length > 2) {
        substringArray.push(words[2].substring(0, 1).toUpperCase());
      }

      this.detail.kode =
        substringArray.join("") + "." + kategoriGenerate.join("");
      this.detail.barcode =
        substringArray.join("") + "." + kategoriGenerate.join("");

      this.input.kode =
        substringArray.join("") + "." + kategoriGenerate.join("");
      this.input.barcode =
        substringArray.join("") + "." + kategoriGenerate.join("");
    },

    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },

    backTo() {
      if (this.current) {
        this.$router.push({
          // path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.pageData}`,
          path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.pageData}`,
          query: {
            current: this.current,
          },
        });
      } else {
        this.$router.go(-1);
      }
    },

    updateBarang() {
      this.loading = true;

      this.options = "data-barang";

      const prepareData = {
        nama: this.input.nama ? this.input.nama : this.detail.nama,
        kategori: this.input.kategori
          ? this.input.kategori
          : this.detail.kategori,
        kode: this.input.kode ? this.input.kode : this.detail.kode,
        barcode: this.input.barcode
          ? this.input.barcode
          : this.detail.kode_barcode,
        supplier: this.input.supplier
          ? this.input.supplier
          : this.detail.supplier,
        ada_expired_date: this.input.ada_expired_date
          ? "True"
          : this.detail.ada_expired_date,
        expired:
          this.input.ada_expired_date === "True"
            ? this.$moment(this.input.expired).format("YYYY-MM-DD")
            : this.detail.expired,
        satuanbeli: this.input.satuanbeli
          ? this.input.satuanbeli
          : this.detail.satuanbeli,
        hargabeli: this.input.hargabeli
          ? this.input.hargabeli
          : this.detail.hpp,
        satuanjual: this.input.satuanjual
          ? this.input.satuanjual
          : this.detail.satuan,
        hargajual: this.input.hargajual
          ? this.input.hargajual
          : this.detail.harga_toko,
        isi: this.input.isi ? this.input.isi : this.detail.isi,
        stok: this.input.stok ? this.input.stok : this.detail.toko,
        diskon: this.input.diskon ? this.input.diskon : this.detail.diskon,
        tglbeli: this.input.tglbeli
          ? this.$moment(this.input.tglbeli).format("YYYY-MM-DD")
          : this.detail.tgl_terakhir,
        photo: this.input.photo ? this.input.photo : this.detail.photo,
      };

      console.log(prepareData);

      const endPoint = `/data-barang/${this.slug}`;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
        .put(endPoint, prepareData, config)
        .then(({ data }) => {
          if (data.error) {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
          }
          if (data.success) {
            this.success = true;
            this.messageAlert = data.message;
            this.validations = [];
            this.$swal({
              title: `Update data ${data?.data[0]?.nama}`,
              text: data.message,
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: this.input.nama ? this.input.nama : this.detail.nama,
            });

            setTimeout(() => {
              this.loading = false;
              this.input = {};
              this.previewUrl = "";
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
              this.previewUrl = "";
            }, 1000);
          }
        })
        .catch((err) => {
          this.validations = err.response.data;
          this.success = false;
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: err.message,
          });
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
    },

    getDefaultDate() {
      return new Date();
    },
  },

  computed: {
    token() {
      return this.$store.getters["auth/getAuthToken"];
    },
    computedExpiredDate: {
      get() {
        return this.input.ada_expired_date === "False" ? false : true;
      },
      set(value) {
        this.input.ada_expired_date = value ? "True" : "False";
      },
    },
    previewImg() {
      return this.detail.photo
        ? `${process.env.NUXT_ENV_STORAGE_URL}/${this.detail.photo}`
        : require("~/assets/img/default.jpg");
    },
    supplier() {
      return this.detail.suppliers && this.detail?.suppliers[0]
        ? this.detail.suppliers[0].nama
        : "Loading.." || this.detail.supplier;
    },

    formattedDate: {
      get() {
        const dateObject = new Date(
          this.input.tgl_terakhir
            ? this.input.tgl_terakhir
            : this.detail.tgl_terakhir
        );
        // Check if it's a valid Date
        if (!isNaN(dateObject.getTime())) {
          return dateObject;
        } else {
          // If not a valid Date, use the default value
          return this.getDefaultDate();
        }
      },
      set(value) {
        // Handle the date change if needed
        this.handleDateChange(value);
      },
    },

    formattedExpiredDate: {
      get() {
        const dateObject = new Date(
          this.input.expired ? this.input.expired : this.detail.expired
        );
        // Check if it's a valid Date
        if (!isNaN(dateObject.getTime())) {
          return dateObject;
        } else {
          // If not a valid Date, use the default value
          return this.getDefaultDate();
        }
      },
      set(value) {
        // Handle the date change if needed
        this.handleExpiredDate(value);
      },
    },

    selectSupplier: {
      get() {
        const supplier = this.input.supplier
          ? this.input.supplier
          : this.supplier;
        // Check if it's a valid Date
        if (supplier) {
          return supplier;
        } else {
          // If not a valid Date, use the default value
          return;
        }
      },
      set(value) {
        // Handle the date change if needed
        this.changeSupplier(value);
      },
    },
  },

  watch: {
    "detail.expired": {
      handler(newValue) {
        this.input.expired = newValue;
      },

      deep: true,
    },
  },
};
</script>
