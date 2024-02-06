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
        Check Data Karyawan
      </button>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form @submit.prevent="runUpdateData">
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Data Karyawan
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="nama"
              >
                Nama Karyawan
              </label>
              <input
                id="nama"
                type="text"
                placeholder="Nama Barang"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                v-model="detail.nama"
                @input="inputNama"
              />
            </div>

            <div
              v-if="validations.nama"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.nama[0] }}
              </div>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Jabatan
              </label>
              <Select2
                v-if="detail.users"
                v-model="detail.users[0].role"
                :settings="{ allowClear: true }"
                :options="[{ id: null, text: 'Pilih Jabatan' }, ...roles]"
                @change="changeRole($event)"
                @select="changeRole($event)"
                placeholder="Pilih Jabatan"
              />
            </div>
            <div
              v-if="validations.jabatan"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.jabatan[0] }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap mt-4">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <button
                type="button"
                role="button"
                @click="showChangePassword"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  <span v-if="$nuxt.showInputPassword"
                    ><i class="fa-solid fa-ban"></i>&nbsp;Cancel</span
                  >
                  <span v-else>
                    <i class="fa-solid fa-user-shield"></i>&nbsp; Change
                    Password!</span
                  >
                </span>
              </button>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                v-if="detail.users"
                v-model="detail.users[0].email"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                @input="inputEmail"
              />
            </div>
            <div
              v-if="validations.jabatan"
              class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <i class="fa-solid fa-circle-info"></i>
              <div class="px-2">
                {{ validations.jabatan[0] }}
              </div>
            </div>
          </div>
        </div>

        <div v-if="$nuxt.showInputPassword" class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-6">
              <input
                v-model="input.current_password"
                id="current-password"
                :class="`${
                  error
                    ? 'pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600'
                    : 'pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2'
                }`"
                type="password"
                placeholder="Current Password"
              />
              <i
                @click="showingPassword('#current-password')"
                :class="`fa ${
                  hidePassword ? 'fa-eye-slash' : 'fa-eye'
                } eye_1 absolute top-10 right-3 cursor-pointer`"
              ></i>
            </div>
            <div v-if="validations.current_password" class="flex py-6">
              <div
                class="flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
                role="alert"
              >
                <span class="font-medium"
                  ><i class="fa-solid fa-circle-exclamation"></i>&nbsp;{{
                    validations.current_password[0]
                  }}</span
                >
              </div>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-6">
              <input
                v-model="input.new_password"
                id="new-password"
                :class="`${
                  error
                    ? 'pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600'
                    : 'pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2'
                }`"
                type="password"
                placeholder="New Password"
              />
              <i
                @click="showingPassword('#new-password')"
                :class="`fa ${
                  hidePassword ? 'fa-eye-slash' : 'fa-eye'
                } eye_1 absolute top-10 right-3 cursor-pointer`"
              ></i>
            </div>
          </div>

          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-6">
              <input
                v-model="input.new_password_confirmation"
                id="new-password-confirmation"
                :class="`${
                  error
                    ? 'pass1 h-12 w-full mt-6 rounded-lg outline-none p-2 border border-solid border-red-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-red-600'
                    : 'pass1 h-12 w-full border mt-6 rounded-lg outline-none p-2'
                }`"
                type="password"
                placeholder="New Password Confirmation"
              />
              <i
                @click="showingPassword('#new-password-confirmation')"
                :class="`fa ${
                  hidePassword ? 'fa-eye-slash' : 'fa-eye'
                } eye_1 absolute top-10 right-3 cursor-pointer`"
              ></i>
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
              <span v-else
                ><i class="fa-solid fa-plus"></i> Update Karyawan</span
              >
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
      selectedRole: null,
      roles: [],
      image_url: process.env.NUXT_ENV_STORAGE_URL,
      loading: null,
      success: null,
      messageAlert: null,
      options: "",
      api_url: process.env.NUXT_ENV_API_URL,
      api_token: process.env.NUXT_ENV_APP_TOKEN,
      input: {},
      validations: [],
      hidePassword: true,
      error: false,
    };
  },

  beforeMount() {
    this.authTokenStorage();
  },

  mounted() {
    this.getListRole();
  },

  methods: {
    closeSuccessAlert() {
      this.success = false;
      this.message = "";
    },

    showingPassword(selector) {
      const password = document.querySelector(selector);
      if (password.type === "password") {
        password.type = "text";
        this.hidePassword = false;
      } else {
        password.type = "password";
        this.hidePassword = true;
      }
    },

    showChangePassword() {
      this.$nuxt.checkUpdatePasswordUserKaryawan();
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

    inputNama(e) {
      this.input.nama = e.target.value;
      console.log(e.target.value);
    },

    inputEmail(e) {
      this.input.email = e.target.value;
    },

    changeRole(newValues) {
      if (newValues.id !== undefined) {
        this.selectedRole = newValues?.id;
      }
    },

    transformRoleList(rawData) {
      return rawData
        .filter((item) => item && item.name)
        .map((item) => ({
          id: item.id,
          text: item.name,
        }));
    },

    getListRole() {
      const getAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
          const data = await getData({
            api_url: `${this.api_url}/data-role-management`,
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
          this.roles = this.transformRoleList(data);
        })
        .catch((err) => console.log(err));
    },

    updateKaryawan() {
      this.options = "data-karyawan";
      const prepareData = {
        nama: this.input.nama ? this.input.nama : this.detail.nama,
        jabatan: this.selectedRole
          ? this.selectedRole
          : this.detail.users[0].role,
      };

      const endPoint = `/data-karyawan/${this.slug}`;
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

    updateUserProfile(id) {
      this.options = "profile-settings";
      const prepareData = {
        name: this.input.nama ? this.input.nama : this.detail.nama,
        email: this.input.email ? this.input.email : this.detail.users[0].email,
      };
      console.log(id);
      const endPoint = `/update-user-data-karyawan/${id}`;
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token.token}`,
        },
      };

      this.$api
        .put(endPoint, prepareData, config)
        .then(({ data }) => {
          if (data.success) {
            console.log("success profile update");
          } else {
            console.log("error update profile user");
          }
        })

        .catch((err) => {
          console.error(err);
        });
    },

    updateKaryawanUserPassword(id) {
      try {
        if (this.token !== null) {
          this.error = false;
          this.validations = [];
          this.loading = true;
          this.options = "change-password";
          const endPoint = `/update-password-karyawan-user/${id}`;
          const config = {
            headers: {
              Accept: "application/json",
            },
          };

          const dataPassword = {
            current_password: this.input.current_password,
            new_password: this.input.new_password,
            new_password_confirmation: this.input.new_password_confirmation,
          };

          this.$api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.token.token}`;
          this.$api.defaults.headers.common["Dku-Api-Key"] = this.api_token;

          this.$api
            .put(endPoint, dataPassword, config)
            .then(({ data }) => {
              if (data.error) {
                this.$toast.show(data.message, {
                  type: "error",
                  duration: 1500,
                  position: "top-right",
                  icon: "triangle-exclamation",
                });
                this.error = true;
                this.message_error = data.message;
              }

              if (data.success) {
                this.$toast.show(data.message, {
                  type: "success",
                  duration: 1500,
                  position: "top-right",
                  icon: "check-double",
                });
                this.success = true;
                this.message_success = data.message;
              }
            })
            .finally(() => {
              setTimeout(() => {
                this.loading = false;
                this.options = "";
                this.input = {};
              }, 1500);
            })
            .catch((err) => {
              this.validations = err?.response?.data;
            });
        }
      } catch (err) {
        console.error(err);
      }
    },

    runUpdateData() {
      this.loading = true;
      if (this.$nuxt.changeUserPassword) {
        this.updateKaryawanUserPassword(this.detail.users[0].id);

        setTimeout(() => {
          this.updateKaryawan();
          this.updateUserProfile(this.detail.users[0].id);
        }, 1500);
      } else {
        this.updateKaryawan();
        this.updateUserProfile(this.detail.users[0].id);
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
