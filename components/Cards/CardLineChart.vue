<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
  >
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
    <div v-else class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
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
      const jmlMonth = 3;
      const endPoint = `/laba-rugi/${jmlMonth}`;
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
          this.title = data.message;
          const newData = data?.data.map((item) => {
            const { year, month, total_laba } = item;
            const monthName = this.$moment({ year, month: month - 1 }).format(
              "MMMM"
            );
            const formattedLaba = this.$format(parseFloat(total_laba));
            return { monthName, total_laba: formattedLaba, year };
          });
          let config = {
            type: "bar",
            data: {
              labels: newData.map((item) => item.monthName),
              datasets: [
                {
                  label: new Date().getFullYear(),
                  backgroundColor: ["#ed64a6", "#ff429d"],
                  borderColor: "#4c51bf",
                  data: newData.map((item) =>
                    parseFloat(item.total_laba.replace(/[^\d.-]/g, ""))
                  ),
                  fill: false,
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
                    display: true,
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

          var ctx = document.getElementById("line-chart").getContext("2d");
          window.myLine = new Chart(ctx, config);
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
