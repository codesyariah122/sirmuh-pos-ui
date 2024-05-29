<template>
  <div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-24"
  >
  <!-- ... Bagian lain dari komponen CardProfile ... -->
  <div class="px-6">
    <div class="flex flex-wrap justify-center">
      <div class="w-full px-4 flex justify-center">
        <div class="relative">
          <img
          v-if="item.photo"
          :alt="title"
          :src="`${image_url}/${item.photo}`"
          class="shadow-xl rounded-full h-36 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
          />

          <div v-else>
            <img
            src="~/assets/img/default.jpg"
            alt="no-photo-barang"
            class="shadow-xl rounded-full h-36 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
            <button
            @click="redirectUpload(item.id, 'upload-gambar')"
            type="button"
            class="mt-2 ml-24 px-3 py-2 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
            <i class="fa-solid fa-plus"></i> &nbsp; Upload Gambar
          </button>
        </div>
      </div>
    </div>

    <div class="w-full px-4 text-center mt-20">
      <div class="flex justify-center py-4 lg:pt-4 pt-8">
        <div class="mr-2 p-6 text-center">
          <span
          class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
          >
          {{ $roundup(item.toko) }}
        </span>
        <span class="text-sm text-blueGray-400">Stok</span>
      </div>
      <div class="mr-2 p-6 text-center">
        <span
        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
        >
        {{ item.satuanbeli }}
      </span>
      <span class="text-sm text-blueGray-400">Satuan Beli</span>
    </div>
    <div class="lg:mr-2 p-3 text-center">
      <span
      class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
      >
      <img
      :src="`${image_url}/qrcodes/${item.kode_barcode}.png`"
      :alt="item.kode_barcode"
      class="w-80"
      />
    </span>
    <span class="text-sm text-blueGray-400">Qr Code</span>
  </div>
</div>
</div>
</div>
<div class="text-center mt-6">
  <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
    {{ $capitalize(title) }}
  </h3>
  <div
  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
  >
  <i class="fa-solid fa-layer-group mr-2 text-lg text-blueGray-400"></i>
  Kategori - {{ item?.kategori_barang }}
</div>
<div class="mb-2 text-blueGray-600 mt-10">
  <i
  class="fa-solid fa-boxes-packing mr-2 text-lg text-blueGray-400"
  ></i>
  Supplier -
  {{ item?.suppliers?.[0]?.nama || item.supplier || item.supplier }}
</div>
<div class="mb-2 text-blueGray-600">
  <i class="fa-solid fa-table-list mr-2 text-lg text-blueGray-400"></i>
  Kategori -
  {{ item?.kategoris?.[0]?.kode || item?.kategori || item.kategori }}
</div>

<div class="mb-2 text-blueGray-600">
  <i class="fa-solid fa-coins mr-2 text-lg text-blueGray-400"></i>
  Harga Beli -
  {{ $format(item?.hpp) }}
</div>
</div>
<div class="mt-10 py-10 border-t border-blueGray-200 text-center">
  <div class="flex flex-wrap justify-center">
    <div class="w-full lg:w-9/12 px-4">
      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
        {{ item.keterangan ? item.keterangan : "Belum ada keterangan ..." }}
      </p>
      <a href="javascript:void(0);" class="font-normal text-emerald-500">
        Show more
      </a>
    </div>
  </div>
</div>

<div class="mt-10 py-10 border-t border-bluGray-400 text-center">
  <div class="flex flex-wrap justify-center">
    <div class="w-full lg:w-9/12 px-4">
      <button v-if="token.token"
      type="button"
      @click="
      $router.push({
        path: `/dashboard/${parentRoute}/${selectedRoute}?current=${current}`,
      })
      "
      class="text-white bg-emerald-600 hover:bg-[#d6b02e] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      >
      <i class="fa-solid fa-arrow-left"></i> Kembali
    </button>
  </div>
</div>
</div>
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
    title: {
      type: String,
    },
    current: {
      type: String,
    default: null,
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
      asset_url: `${process.env.NUXT_ENV_ASSET_PUBLIC_URL}/assets/images/`,
      team2,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  methods: {
    redirectUpload(id, type) {
      this.$router.push({
        path: `/dashboard/${this.parentRoute}/${this.types}/upload/${id}`,
        query: {
          type: type,
          current: this.current,
        },
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
