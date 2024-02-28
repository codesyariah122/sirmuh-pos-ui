<template>
  <div class="flex justify-center space-x-2">
    <!-- <a
      class="text-blueGray-400 py-1 px-6 font-bold text-2xl"
      href="#!"
      @click="toggleDropdown"
      ref="btnDropdownRef"
    >
      <i class="fas fa-ellipsis-v"></i>
    </a> -->
    <div v-if="cellType === 'data'">
      <ul
        class="py-2 text-2xl text-gray-700 dark:text-gray-200 flex justify-center space-x-2"
        aria-labelledby="dropdownDefaultButton"
      >
        <li
          v-if="
            types !== 'data-pelanggan' &&
            types !== 'data-supplier' &&
            types !== 'karyawan' &&
            types !== 'kas' &&
            types !== 'data-laporan-hutang' &&
            types !== 'bayar-hutang' &&
            types !== 'data-biaya' && 
            types !== 'purchase-order'
          "
        >
          <button
            @click="detailDataRedirect(queryData)"
            role="button"
            class="text-2xl py-2 px-4 font-normal block w-full bg-transparent text-sky-400 hover:text-white cursor-pointer hover:bg-gray-400"
          >
            <i class="fa-solid fa-circle-info"></i>
          </button>
        </li>
        <li v-if="types !== 'data-role-management' && types !== 'bayar-hutang'">
          <button
            @click="redirectEditPage"
            class="text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-800 hover:text-white cursor-pointer hover:bg-gray-400"
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </li>
        <li v-if="types !== 'data-role-management' && types !== 'bayar-hutang'">
          <button
            @click.prevent="deletedData"
            class="text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 hover:text-white cursor-pointer hover:bg-gray-400"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </li>
        <li v-else>
          <button
            v-if="role === 1 && types !== 'bayar-hutang' && types !== 'data-role-management'"
            @click="redirectEditPage"
            class="text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-800 hover:text-white cursor-pointer hover:bg-gray-400"
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </li>
      </ul>
    </div>

    <div v-if="cellType === 'transaksi'">
      <ul
        class="flex justify-start py-2 text-2xl dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <button
            @click="detailDataRedirect(queryData)"
            role="button"
            class="text-2xl py-2 px-4 font-normal block w-full bg-transparent text-sky-400 hover:text-white cursor-pointer hover:bg-gray-400"
          >
            <i class="fa-solid fa-circle-info"></i>
          </button>
        </li>
        <li>
          <button
            @click="redirectCetak(queryData)"
            role="button"
            class="text-2xl py-2 px-4 font-normal block w-full bg-transparent text-blue-700 cursor-pointer hover:bg-gray-400 hover:text-white"
          >
            <i class="fa-solid fa-print"></i>
          </button>
        </li>
        <!-- <li>
          <button
            v-if="role === 1"
            @click="redirectEditPage"
            class="text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-800 hover:text-white cursor-pointer hover:bg-gray-400"
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </li> -->
        <li>
          <button v-if="types === 'purchase-order'"
            @click="redirectTerimaPo(queryData)"
            class="text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-800 hover:text-white cursor-pointer hover:bg-gray-400"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </li>
        <li v-if="role === 1">
          <button
            @click.prevent="deletedData"
            class="text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 hover:text-white cursor-pointer hover:bg-gray-400"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>

    <div v-if="cellType === 'trash'">
      <ul
        class="py-2 text-2xl dark:text-gray-200 flex justify-center space-x-2"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <button
            @click="restoredData"
            class="text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-700 cursor-pointer hover:bg-gray-400 hover:text-white"
          >
            <i class="fa-solid fa-rotate"></i>
          </button>
        </li>

        <li>
          <button
            @click="deletedData"
            class="text-2xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-700 cursor-pointer hover:bg-gray-400 hover:text-white"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>

    <div v-if="cellType === 'bayar'">
      <ul
        class="flex justify-center space-x-4 py-2 text-2xl text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <button
            @click="detailDataRedirect(queryData)"
            class="text-2xl font-normal block w-full whitespace-nowrap bg-transparent text-blue-700 cursor-pointer hover:bg-gray-400 hover:text-blue-600"
          >
            <i class="fa-solid fa-circle-info"></i>
          </button>
        </li>

        <li v-if="types === 'bayar-hutang' || types === 'piutang-pelanggan'">
          <button
            @click="redirectCetak(queryData)"
            class="text-md py-0 font-normal block w-full whitespace-nowrap bg-transparent text-teal-400 cursor-pointer hover:bg-gray-400 hover:text-teal-600"
          >
            <i class="fa-solid fa-print"></i>
          </button>
        </li>

        <li v-if="types === 'bayar-hutang'|| types === 'piutang-pelanggan'">
          <button
            v-if="dataItem.lunas == 'False' || dataItem.lunas == 0"
            @click="redirectBayarHutang(queryData)"
            class="text-md py-0 font-normal block w-full whitespace-nowrap bg-transparent text-emerald-700 cursor-pointer hover:bg-gray-400 hover:text-emerald-600"
          >
            <i v-if="types === 'bayar-hutang'" class="fa-solid fa-credit-card"></i>
            <i v-if="types === 'piutang-pelanggan'" class="fa-solid fa-cash-register" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  props: {
    dataItem: {
      type: Object,
      default: function () {
        return {};
      },
    },
    id: {
      type: [Number, String],
      default: "",
    },
    role: {
      tye: [Number, String],
      default: "",
    },
    types: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
    userStatus: {
      type: Object,
      default: function () {
        return {
          status: "",
          user_id: null,
        };
      },
    },
    cellType: {
      type: String,
      default: "data",
    },
    queryMiddle: {
      type: String,
      default: "",
    },
    queryType: {
      type: String,
      default: "",
    },
    detailUrl: {
      type: String,
      default: "",
    },
    queryData: {
      type: [String, Number],
      default: "",
    },
    param: {
      type: [String, Number],
      default: "",
    },
    parentRoute: {
      type: String,
      default: null,
    },
    typeRoute: {
      type: String,
      default: null,
    },
    campaigns: {
      type: Number,
      default: 0,
    },
    donationStatus: {
      type: String,
      default: "PENDING",
    },
    transactionId: {
      type: String,
      default: "",
    },
    transactionReceipt: {
      type: String,
      default: "",
    },
    paging: {
      type: [Array, Object],
      default: function () {
        return {};
      },
    },
    cetakTitle: {
      type: String,
      default: "-",
    },
  },

  data() {
    return {
      dropdownPopoverShow: false,
      showModal: false,
    };
  },

  mounted() {
    // console.log(this.role);
  },

  methods: {
    toggleDropdown(event) {
      event.preventDefault();
      this.dropdownPopoverShow = !this.dropdownPopoverShow;

      if (this.dropdownPopoverShow) {
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
        document.addEventListener("click", this.hideDropdown);
      } else {
        // Menghapus event listener dari dokumen
        document.removeEventListener("click", this.hideDropdown);
      }
    },

    toggleModal: function () {
      this.showModal = !this.showModal;
      // this.$emit('accept-payment', id)
      setTimeout(() => {
        this.dropdownPopoverShow = false;
      }, 500);
    },

    redirectBayarHutang(kode) {
      let url;
      switch(this.types){
        case "bayar-hutang":
          url = `/dashboard/transaksi/bayar-hutang/${kode}`;
        break;

        case "piutang-pelanggan":
          url = `/dashboard/transaksi/terima-piutang/piutang-pelanggan/${kode}`;
        break;
      }
      this.$router.push({
        path: url,
        query: {
          current: this.paging.current,
          id: this.id,
        },
      });
    },

    redirectTerimaPo(kode) {
      const url = `/dashboard/transaksi/beli/purchase-order/terima-po/${this.id}`
      this.$router.push({
        path: url,
        query: {
          type: this.queryType,
          faktur: kode,
          accept: "terima-po"
        }
      })
    },

    redirectCetak(kode) {
      localStorage.setItem("cetak_code", JSON.stringify({ ref_code: kode }));
      let url = "";
      switch (this.cetakTitle) {
        case "Pembelian":
          url = `/dashboard/transaksi/beli/${this.queryMiddle}/cetak`;
          break;
        case "Penjualan":
          url = `/dashboard/transaksi/jual/${this.queryMiddle}/cetak`;
          break;
        case "bayarHutang":
          url = `/dashboard/transaksi/bayar-hutang/cetak`;
          break;
        case "piutangPelanggan":
          url = `/dashboard/transaksi/terima-piutang/piutang-pelanggan/cetak`;
          break;
      }
      this.$router.push({
        path: url,
        query: {
          kode: kode,
        },
      });
    },

    hideDropdown(event) {
      const targetElement = event.target;

      if (
        this.$refs.btnDropdownRef &&
        !this.$refs.btnDropdownRef.contains(targetElement) &&
        this.$refs.popoverDropdownRef &&
        !this.$refs.popoverDropdownRef.contains(targetElement)
      ) {
        this.dropdownPopoverShow = false;
        // Menghapus event listener dari dokumen
        document.removeEventListener("click", this.hideDropdown);
      }
    },

    redirectEditPage() {
      if (
        this.types === "barang-by-suppliers" ||
        this.types === "barang-by-warehouse" ||
        this.types === "barang-all" ||
        this.types === "pembelian-langsung" || 
        this.types === "purchase-order" ||
        this.types === "penjualan-toko" ||
        this.types === "penjualan-po"
      ) {
        this.$router.push({
          path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.queryMiddle}/edit/${this.param}`,
          query: {
            type: this.queryType,
            current: this.paging.current,
          },
        });
      } else {
        this.$router.push({
          path: `/dashboard/${this.parentRoute}/${this.queryMiddle}/edit/${this.param}`,
        });
      }

      // this.$router.push({
      //   path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.queryMiddle}/edit/${this.param}`,
      //   query: {
      //     type: this.queryType,
      //     current: this.paging.current,
      //   },
      // });
    },

    deletedData() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit("deleted-data", this.id);
          this.dropdownPopoverShow = false;
        }
      });
    },

    activationUser(user_id) {
      this.$emit("activation-user", user_id);
      setTimeout(() => {
        this.dropdownPopoverShow = false;
      }, 500);
    },

    restoredData() {
      this.$emit("restored-data", this.id);
      this.dropdownPopoverShow = false;
    },

    detailDataRedirect(param) {
      switch (this.queryType) {
        case "BARANG_BY_SUPPLIERS":
        case "BARANG_BY_WAREHOUSE":
          this.$router.push({
            // path: `/dashboard/${this.queryMiddle}/detail/${param}`,
            // path: `/dashboard/master/barang/detail/${this.queryMiddle}/${param}`,
            path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.queryMiddle}/detail/${param}`,
            query: {
              type: this.queryType,
              current: this.paging.current,
            },
          });
          break;
        case "PEMBELIAN_LANGSUNG":
        case "PURCHASE_ORDER":
        case "PENJUALAN_TOKO":
        case "PENJUALAN_PO":
        case "PIUTANG_PELANGGAN":
        case "DATA_ROLE_USER":
        case "DATA_ROLE_MANAGEMENT":
          this.$router.push({
            // path: `/dashboard/${this.queryMiddle}/detail/${param}`,
            // path: `/dashboard/master/barang/detail/${this.queryMiddle}/${param}`,
            path: `/dashboard/${this.parentRoute}/${this.typeRoute}/${this.queryMiddle}/detail/${this.param}`,
            query: {
              type: this.queryType,
              current: this.paging.current,
            },
          });
          break;
        case "BAYAR_HUTANG":
          this.$router.push({
            // path: `/dashboard/${this.queryMiddle}/detail/${param}`,
            // path: `/dashboard/master/barang/detail/${this.queryMiddle}/${param}`,
            path: `/dashboard/${this.parentRoute}/${this.typeRoute}/detail/${param}`,
            query: {
              type: this.queryType,
              query: this.id,
            },
          });
          break;
        default:
          this.$router.push({
            // path: `/dashboard/${this.queryMiddle}/detail/${param}`,
            path: `/detail/${this.queryMiddle}/${param}`,
            query: {
              type: this.queryType,
              current: this.paging.current,
            },
          });
      }
    },

    acceptPayment(id) {
      this.$emit("accept-payment", id);
      setTimeout(() => {
        this.dropdownPopoverShow = false;
      }, 500);
    },
  },
};
</script>
