<template>
  <div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
  >
  <div v-if="panelCharts">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
            Total Income Weekly
          </h6>
          <h2 class="text-gray-50 text-xl font-semibold">{{ title }}</h2>
        </div>
      </div>
    </div>

    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <canvas id="chart-pemasukan"></canvas>
      </div>
    </div>
  </div>
  <div v-else class="w-full lg:w-6/12 xl:w-6/12 px-4 py-4">
    <div
    class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50"
    >
    <div
    class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse"
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

    mounted: async function () {
      this.$nextTick(function () {
        let endPoint = "/pemasukan-weekly";
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
          const labels = this.charts.map((pemasukan) => `${this.$moment(pemasukan.week_start).format('LL')} - ${this.$moment(pemasukan.week_end).format('LL')}`);
          const dataResult = this.charts.map((pemasukan) =>
            parseFloat(pemasukan.total_pemasukan)
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
                label: labels,
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
                display: true,
                labels: {
                  fontColor: "#fff",
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
                      fontColor: "rgba(255,255,255,.7)",  // Set x-axis text color to white
                    },
                  },
                  ],
                yAxes: [
                {
                  display: true,
                  barPercentage: 100,
                  scaleLabel: {
                    display: true,
                    labelString: data.label,
                      fontColor: "rgba(255,255,255,.7)",  // Set y-axis label text color to white
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
                    ticks: {
                      fontColor: "rgba(255,255,255,.7)",  // Set y-axis text color to white
                    },
                  },
                  ],
              },
            },
          };

          let ctx = document.getElementById("chart-pemasukan");
          if (ctx) {
            window.myBar = new Chart(ctx, config);
          } else {
            console.error("Element with ID 'chart-barang' not found");
          }
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
