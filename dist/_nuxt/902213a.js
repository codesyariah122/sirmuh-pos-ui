(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{856:function(t,e,n){"use strict";n.r(e);n(15),n(30),n(53),n(37),n(117),n(79);var r=n(717),o=n.n(r),l={props:{type:{type:String}},data:function(){return{api_url:"https://sirmuh.api.dksindo.com/api/v1",charts:[],loading:!1,title:"",panelCharts:[]}},beforeMount:function(){this.authTokenStorage()},created:function(){this.checkNewData()},mounted:function(){this.startChart()},methods:{authTokenStorage:function(){this.$store.dispatch("auth/storeAuthToken","auth")},startChart:function(){var t,e=this,n={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(t=this.token)||void 0===t?void 0:t.token)}};this.$api.defaults.headers.common["Sirmuh-Key"]="JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",this.$api.get("/to-the-best/barang",n).then((function(t){var data=t.data;e.loading=!0,e.charts=null==data?void 0:data.data,e.title=data.message;var n=["#ed64a6","#4c51bf","#fc7e5e","#5f5f5f","#00d1b2","#ffdd57","#48c774","#00a5f7","#ff3860","#6772e5"],r=e.charts.map((function(t){return"".concat(t.nama," (").concat(t.supplier,")")})),l=e.charts.map((function(t){return parseFloat(t.total_qty)})),d=r.map((function(label,t){return{label:label,backgroundColor:n[t%n.length],borderColor:n[t%n.length]}}));e.panelCharts=d;var c={type:"bar",data:{labels:r,datasets:[{label:data.label,data:l,backgroundColor:n,borderColor:n,borderWidth:1,fill:!0,barThickness:25}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:e.title},tooltips:{mode:"index",intersect:!0},hover:{mode:"nearest",intersect:!0},legend:{display:!1,labels:{fontColor:"rgba(0,0,0,.4)"},align:"end",position:"right"},scales:{xAxes:[{display:!1,scaleLabel:{display:!1,labelString:"Barang"},gridLines:{display:!0},ticks:{display:!0}}],yAxes:[{display:!0,barPercentage:100,scaleLabel:{display:!0,labelString:data.label},gridLines:{borderDash:[2],drawBorder:!0,borderDashOffset:[2],color:"rgba(33, 37, 41, 0.2)",zeroLineColor:"rgba(33, 37, 41, 0.15)",zeroLineBorderDash:[10],zeroLineBorderDashOffset:[2]}}]}}},h=document.getElementById("chart-barang");h?window.myBar=new o.a(h,c):console.error("Element with ID 'chart-barang' not found")})).finally((function(){setTimeout((function(){e.loading=!1}),1500)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}},watch:{notifs:function(){this.$_.size(this.$nuxt.notifs)>0&&(this.$nuxt.notifs.find((function(t){return["data-barang","pembelian-langsung","purchase-order","penjualan-toko","penjualan-partai","penjualan-po","return-pembelian"].includes(t.routes)}))&&this.startChart())}}},d=n(8),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 mt-12 shadow-lg rounded"},[t.panelCharts?e("div",[e("div",{staticClass:"rounded-t mb-0 px-4 py-3 bg-transparent"},[e("div",{staticClass:"flex flex-wrap items-center"},[e("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[e("h6",{staticClass:"uppercase text-blueGray-400 mb-1 text-xs font-semibold"},[t._v("\n            Top Product Weekly\n          ")]),t._v(" "),e("h2",{staticClass:"text-blueGray-700 text-xl font-semibold"},[t._v(t._s(t.title))])])])]),t._v(" "),t._m(0)]):e("div",{staticClass:"w-full lg:w-6/12 xl:w-6/12 px-4 py-4"},[t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"p-4 flex-auto"},[t("div",{staticClass:"relative h-350-px"},[t("canvas",{attrs:{id:"chart-barang"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},[t("div",{staticClass:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"},[this._v("\n    loading...\n  ")])])}],!1,null,null,null);e.default=component.exports}}]);