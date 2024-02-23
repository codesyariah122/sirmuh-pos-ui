<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
  >
    <div v-if="panelCharts">
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Top Customer
            </h6>
            <h2 class="text-white text-xl font-semibold">{{ title }}</h2>
          </div>
        </div>
      </div>

      <div class="p-4 flex-auto">
        <div class="relative h-350-px">
          <canvas id="pelanggan-chart"></canvas>
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
      let endPoint = "/to-the-best/pelanggan";
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
            parseFloat(item.total_penjualan)
          );
          const mergedArray = labels.map((label, index) => ({
            label: label,
            backgroundColor: predefinedColors[index % predefinedColors.length],
            borderColor: predefinedColors[index % predefinedColors.length],
          }));

          this.panelCharts = mergedArray;

          let config = {
            type: "line",
            data: {
              labels: labels,
              datasets: [
                {
                  label: data.label,
                  data: dataResult,
                  backgroundColor: predefinedColors,
                  borderColor: "#4c51bf",
                  borderWidth: 1,
                  fill: true,
                  barThickness: 25,
                  pointRadius: 8,
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              title: {
                display: false,
                text: "Sales Charts",
                fontColor: "white",
              },
              legend: {
                display: false,
                labels: {
                  fontColor: "white",
                },
                align: "end",
                position: "bottom",
                generateLabels: function (chart) {
                  const labels =
                    Chart.defaults.global.legend.labels.generateLabels(chart);

                  labels.forEach((label) => {
                    const datasetIndex = label.datasetIndex;
                    label.text = `${label.text} (${newData[datasetIndex].year})`;
                  });

                  return labels;
                },
              },
              tooltips: {
                mode: "index",
                intersect: false,
              },
              hover: {
                mode: "nearest",
                intersect: true,
              },
              scales: {
                xAxes: [
                  {
                    ticks: {
                      fontColor: "rgba(255,255,255,.7)",
                    },
                    display: false,
                    scaleLabel: {
                      display: false,
                      labelString: "Month",
                      fontColor: "white",
                    },
                    gridLines: {
                      display: false,
                      borderDash: [2],
                      borderDashOffset: [2],
                      color: "rgba(33, 37, 41, 0.3)",
                      zeroLineColor: "rgba(0, 0, 0, 0)",
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2],
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      fontColor: "rgba(255,255,255,.7)",
                    },
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: data.label,
                      fontColor: "white",
                    },
                    gridLines: {
                      borderDash: [3],
                      borderDashOffset: [3],
                      drawBorder: true,
                      color: "rgba(255, 255, 255, 0.15)",
                      zeroLineColor: "rgba(33, 37, 41, 0)",
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2],
                    },
                  },
                ],
              },
            },
          };

          let ctx = document.getElementById("pelanggan-chart").getContext("2d");
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
