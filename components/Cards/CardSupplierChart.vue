<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div v-if="panelCharts">
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
              Top Supplier
            </h6>
            <h2 class="text-blueGray-700 text-xl font-semibold">{{ title }}</h2>
          </div>
        </div>
      </div>

      <div class="p-4 flex-auto">
        <div class="relative h-350-px">
          <canvas id="supplier-chart"></canvas>
        </div>
      </div>
    </div>
    <div v-else class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4">
      <div
        class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      >
        <div
          class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"
        >
          loading...
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";

export default {
  props: {
    type: {
      type: String,
    },
  },
  data() {
    return {
      api_url: process.env.NUXT_ENV_API_URL,
      charts: [],
      loading: false,
      title: "",
      panelCharts: [],
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
      let endPoint = "/to-the-best/supplier";
      const configApi = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this?.token?.token}`,
        },
      };

      this.$api.defaults.headers.common["Sirmuh-Key"] =
        process.env.NUXT_ENV_APP_TOKEN;
      this.$api
        .get(endPoint, configApi)
        .then(({ data }) => {
          this.loading = true;
          this.charts = data?.data;
          this.title = data.message;

          // Ambil 10 barang terlaris
          const predefinedColors = [
            "#ed64a6",
            "#4c51bf",
            "#fc7e5e",
            "#5f5f5f",
            "#00d1b2",
            "#ffdd57",
            "#48c774",
            "#00a5f7",
            "#ff3860",
            "#6772e5",
          ];
          const labels = this.charts.map((item) => item.nama);
          const dataResult = this.charts.map((item) =>
            parseFloat(item.total_pembelian)
          );
          const mergedArray = labels.map((label, index) => ({
            label: label,
            backgroundColor: predefinedColors[index % predefinedColors.length],
            borderColor: predefinedColors[index % predefinedColors.length],
          }));

          this.panelCharts = mergedArray;

          let config = {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  label: data.label,
                  data: dataResult,
                  backgroundColor: predefinedColors,
                  borderColor: predefinedColors,
                  borderWidth: 1,
                  fill: true,
                  barThickness: 25,
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              title: {
                display: false,
                text: this.title,
              },
              tooltips: {
                mode: "index",
                intersect: true,
              },
              hover: {
                mode: "nearest",
                intersect: true,
              },
              legend: {
                display: false,
                labels: {
                  fontColor: "rgba(0,0,0,.4)",
                },
                align: "end",
                position: "right",
              },
              scales: {
                xAxes: [
                  {
                    display: false,
                    scaleLabel: {
                      display: false,
                      labelString: "Barang",
                    },
                    gridLines: {
                      display: true,
                    },
                    ticks: {
                      display: true,
                    },
                  },
                ],
                yAxes: [
                  {
                    display: true,
                    barPercentage: 100,
                    scaleLabel: {
                      display: true,
                      labelString: "Total Penjualan",
                    },
                    gridLines: {
                      borderDash: [2],
                      drawBorder: true,
                      borderDashOffset: [2],
                      color: "rgba(33, 37, 41, 0.2)",
                      zeroLineColor: "rgba(33, 37, 41, 0.15)",
                      zeroLineBorderDash: [10],
                      zeroLineBorderDashOffset: [2],
                    },
                  },
                ],
              },
            },
          };

          let ctx = document.getElementById("supplier-chart").getContext("2d");
          window.myBar = new Chart(ctx, config);
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
