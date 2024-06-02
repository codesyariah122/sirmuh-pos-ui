<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700 mt-12">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
            Laba
          </h6>
          <h2 class="text-white text-xl font-semibold">
            {{ title }}
          </h2>
        </div>
      </div>
    </div>
    <div v-if="loading" class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4">
      <div class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          loading...
        </div>
      </div>
    </div>
    <div v-else class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="pie-chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
  import Chart from "chart.js";

  export default {
    data() {
      return {
        api_url: process.env.NUXT_ENV_API_URL,
        profits: [],
        loading: false,
        title: "",
      };
    },
    beforeMount() {
      this.authTokenStorage();
    },
    methods: {
      authTokenStorage() {
        this.$store.dispatch("auth/storeAuthToken", "auth");
      },
    },
    mounted: function () {
      this.$nextTick(function () {
        const endPoint = `/laba-rugi-weekly`;
        const configApi = {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this?.token?.token}`,
          },
        };

        this.$api.defaults.headers.common["Sirmuh-Key"] = process.env.NUXT_ENV_APP_TOKEN;
        this.$api
        .get(endPoint, configApi)
        .then(({ data }) => {
          this.title = data.message;
          const newData = data?.data.map((item) => {
            const { week_start, week_end, total_laba } = item;
            const weekRange = `${week_start} - ${week_end}`;
            return { weekRange, total_laba: total_laba };
          });

          let config = {
            type: "pie",
            data: {
              labels: newData.map((item) => item.weekRange),
              datasets: [
              {
                label: new Date().getFullYear(),
                backgroundColor: ["#ed64a6", "#ff429d", "#4c51bf"],
                data: newData.map((item) => {
                  const parsedValue = parseFloat(
                    item.total_laba.replace(/[^\d.-]/g, "")
                    );
                  return isNaN(parsedValue) ? 0 : parsedValue.toFixed(2);
                }),
                fill: false,
              },
              ],
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              legend: {
                display: true,
                labels: {
                  fontColor: "white",
                },
                position: "bottom",
              },
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    let dataset = data.datasets[tooltipItem.datasetIndex];
                    let total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
                    let currentValue = dataset.data[tooltipItem.index];
                    let percentage = Math.floor(((currentValue / parseFloat(total)) * 100) + 0.5);
                    return currentValue + ' (' + percentage + '%)';
                  },
                },
              },
            },
          };

          var ctx = document.getElementById("pie-chart").getContext("2d");
          window.myPie = new Chart(ctx, config);
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        });
      });
    },
    computed: {
      token() {
        return this.$store.getters["auth/getAuthToken"];
      },
    },
  };
</script>
