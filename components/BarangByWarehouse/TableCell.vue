<template>
  <tbody>
    <tr v-for="column in columns" :key="column.id">
      <td class="p-4 text-left text-lg border-l-2 border-r-2 w-90">
        <span v-if="column.nama !== null" class="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
          {{column.nama}}
        </span>
        <span v-else class="bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 border border-yellow-400">
          (Tidak ada kategori)
        </span>
      </td>
      <td v-if="column.satuan === 'KG'" class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2">
        {{$convweight(column.total)}}
      </td>
      <td v-else class="whitespace-nowrap p-8 text-lg border-l-2 border-r-2">
        {{ $roundup(column.total) }} ({{ column.satuan }})
      </td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    props: {
      columns: {
        type: [Array, Object],
      default: function () {
        return {}; // or any other appropriate default value
      },
    },
    parentRoute: {
      type: String,
    default: null,
    },
    typeRoute: {
      type: String,
    default: null,
    },
    types: {
      type: String,
    },
    paging: {
      type: [Array, Object],
    default: function () {
        return {}; // or any other appropriate default value
      },
    },
  },

  data() {
    return {
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      userData: [],
      name: "",
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.checkUserLogin();
  },

  methods: {
    deletedData(id) {
      this.$emit("deleted-data", id);
    },

    restoredData(id) {
      this.$emit("restored-data", id);
    },

    checkUserLogin() {
      if (this.$_.isObject(this.token)) {
        const endPoint = `${this.api_url}/user-data`;
        const config = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this?.token?.token}`,
            "Content-Type": "application/json",
            "Sirmuh-Key": process.env.NUXT_ENV_APP_TOKEN,
          },
        };
        this.$api
        .get(endPoint, config)
        .then(({ data }) => {
          this.userData = data?.data;
          this.name = data?.data?.name;
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Error Access!",
        });
        this.$router.replace("/");
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
