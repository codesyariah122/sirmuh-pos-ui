<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
            Top Chart
          </h6>
          <h2 class="text-blueGray-700 text-xl font-semibold">{{ title }}</h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <canvas id="bar-chart"></canvas>
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
      solds: [],
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
      const endPoint = `/barang-terlaris`;
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
          this.solds = data?.data;
          this.title = `${this.$_.size(this.solds)} ${data.message}`;

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
          const labels = this.solds.map((product) => product.nama);
          const dataQty = this.solds.map((product) =>
            parseFloat(product.total_qty)
          );
          const mergedArray = labels.map((label, index) => ({
            label: label,
            backgroundColor: predefinedColors[index % predefinedColors.length],
            borderColor: predefinedColors[index % predefinedColors.length],
          }));

          this.panelCharts = mergedArray;

          console.log(mergedArray);

          let config = {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Total Quantity",
                  data: dataQty,
                  backgroundColor: predefinedColors,
                  borderColor: predefinedColors,
                  borderWidth: 1,
                  fill: true,
                  barThickness: 8,
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
                    barPercentage: 10,
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

          let ctx = document.getElementById("bar-chart").getContext("2d");
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
