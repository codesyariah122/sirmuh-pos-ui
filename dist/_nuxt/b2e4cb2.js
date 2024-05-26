(window.webpackJsonp=window.webpackJsonp||[]).push([[217,49,53,55,59],{1020:function(t,e,r){"use strict";r.r(e);var n=r(846),l=r(847),o=r(848),d=r(849),c={name:"dashboard-role",layout:"admin",components:{CardLineChart:n.default,CardBarChart:l.default,CardSupplierChart:o.default,CardPelangganChart:d.default}},f=r(8),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full xl:w-6/12 mb-12 xl:mb-0 px-12"},[e("card-bar-chart")],1),t._v(" "),e("div",{staticClass:"w-full xl:w-6/12 mb-12 xl:mb-0 px-12"},[e("card-line-chart")],1)]),t._v(" "),e("div",{staticClass:"flex flex-wrap mt-4"},[e("div",{staticClass:"w-full xl:w-6/12 mb-12 xl:mb-0 px-12"},[e("card-supplier-chart")],1),t._v(" "),e("div",{staticClass:"w-full xl:w-6/12 px-12"},[e("card-pelanggan-chart")],1)])])}),[],!1,null,null,null);e.default=component.exports},846:function(t,e,r){"use strict";r.r(e);r(15),r(37),r(20),r(29),r(226),r(38),r(53),r(36);var n=r(720),l=r.n(n),o={data:function(){return{api_url:"https://sirmuh.api.dksindo.com/api/v1",profits:[],loading:!1,title:"",panelCharts:[]}},beforeMount:function(){this.authTokenStorage()},methods:{authTokenStorage:function(){this.$store.dispatch("auth/storeAuthToken","auth")}},mounted:function(){this.$nextTick((function(){var t,e=this,r="/laba-rugi/".concat(3),n={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(t=this.token)||void 0===t?void 0:t.token)}};this.$api.defaults.headers.common["Sirmuh-Key"]="JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",this.$api.get(r,n).then((function(t){var data=t.data;e.title=data.message;var r=null==data?void 0:data.data.map((function(t){var r=t.year,n=t.month,l=t.total_laba;return{monthName:e.$moment({year:r,month:n-1}).format("MMMM"),total_laba:l,year:r}})),n={type:"bar",data:{labels:r.map((function(t){return t.monthName})),datasets:[{label:(new Date).getFullYear(),backgroundColor:["#ed64a6","#ff429d"],borderColor:"#4c51bf",data:r.map((function(t){var e=parseFloat(t.total_laba.replace(/[^\d.-]/g,""));return isNaN(e)?0:e.toFixed(2)})),fill:!1}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:"Sales Charts",fontColor:"white"},legend:{display:!1,labels:{fontColor:"white"},align:"end",position:"bottom",generateLabels:function(t){var e=l.a.defaults.global.legend.labels.generateLabels(t);return e.forEach((function(label){var t=label.datasetIndex;label.text="".concat(label.text," (").concat(r[t].year,")")})),e}},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!0,scaleLabel:{display:!1,labelString:"Month",fontColor:"white"},gridLines:{display:!1,borderDash:[2],borderDashOffset:[2],color:"rgba(33, 37, 41, 0.3)",zeroLineColor:"rgba(0, 0, 0, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}],yAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!0,scaleLabel:{display:!0,labelString:data.label,fontColor:"white"},gridLines:{borderDash:[3],borderDashOffset:[3],drawBorder:!0,color:"rgba(255, 255, 255, 0.15)",zeroLineColor:"rgba(33, 37, 41, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}]}}},o=document.getElementById("line-chart").getContext("2d");window.myLine=new l.a(o,n)})).finally((function(){setTimeout((function(){e.loading=!1}),1500)}))}))},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},d=r(8),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700 mt-12"},[e("div",{staticClass:"rounded-t mb-0 px-4 py-3 bg-transparent"},[e("div",{staticClass:"flex flex-wrap items-center"},[e("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[e("h6",{staticClass:"uppercase text-blueGray-100 mb-1 text-xs font-semibold"},[t._v("\n          Laba\n        ")]),t._v(" "),e("h2",{staticClass:"text-white text-xl font-semibold"},[t._v("\n          "+t._s(t.title)+"\n        ")])])])]),t._v(" "),t.loading?e("div",{staticClass:"w-full lg:w-6/12 xl:w-6/12 px-4 py-4"},[t._m(0)]):e("div",{staticClass:"p-4 flex-auto"},[t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},[t("div",{staticClass:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"},[this._v("\n        loading...\n      ")])])},function(){var t=this._self._c;return t("div",{staticClass:"relative h-350-px"},[t("canvas",{attrs:{id:"line-chart"}})])}],!1,null,null,null);e.default=component.exports},847:function(t,e,r){"use strict";r.r(e);var n,l=r(18),o=(r(70),r(15),r(37),r(53),r(36),r(720)),d=r.n(o),c={props:{type:{type:String}},data:function(){return{api_url:"https://sirmuh.api.dksindo.com/api/v1",charts:[],loading:!1,title:"",panelCharts:[]}},beforeMount:function(){this.authTokenStorage()},methods:{authTokenStorage:function(){this.$store.dispatch("auth/storeAuthToken","auth")}},mounted:(n=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$nextTick((function(){var t,e=this,r={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(t=this.token)||void 0===t?void 0:t.token)}};this.$api.defaults.headers.common["Sirmuh-Key"]="JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",this.$api.get("/to-the-best/barang",r).then((function(t){var data=t.data;e.loading=!0,e.charts=null==data?void 0:data.data,e.title=data.message;var r=["#ed64a6","#4c51bf","#fc7e5e","#5f5f5f","#00d1b2","#ffdd57","#48c774","#00a5f7","#ff3860","#6772e5"],n=e.charts.map((function(t){return"".concat(t.nama," (").concat(t.supplier,")")})),l=e.charts.map((function(t){return parseFloat(t.total_qty)})),o=n.map((function(label,t){return{label:label,backgroundColor:r[t%r.length],borderColor:r[t%r.length]}}));e.panelCharts=o;var c={type:"bar",data:{labels:n,datasets:[{label:data.label,data:l,backgroundColor:r,borderColor:r,borderWidth:1,fill:!0,barThickness:25}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:e.title},tooltips:{mode:"index",intersect:!0},hover:{mode:"nearest",intersect:!0},legend:{display:!1,labels:{fontColor:"rgba(0,0,0,.4)"},align:"end",position:"right"},scales:{xAxes:[{display:!1,scaleLabel:{display:!1,labelString:"Barang"},gridLines:{display:!0},ticks:{display:!0}}],yAxes:[{display:!0,barPercentage:100,scaleLabel:{display:!0,labelString:data.label},gridLines:{borderDash:[2],drawBorder:!0,borderDashOffset:[2],color:"rgba(33, 37, 41, 0.2)",zeroLineColor:"rgba(33, 37, 41, 0.15)",zeroLineBorderDash:[10],zeroLineBorderDashOffset:[2]}}]}}},f=document.getElementById("chart-barang");f?window.myBar=new d.a(f,c):console.error("Element with ID 'chart-barang' not found")})).finally((function(){setTimeout((function(){e.loading=!1}),1500)}))}));case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},f=c,h=r(8),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 mt-12 shadow-lg rounded"},[t.panelCharts?e("div",[e("div",{staticClass:"rounded-t mb-0 px-4 py-3 bg-transparent"},[e("div",{staticClass:"flex flex-wrap items-center"},[e("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[e("h6",{staticClass:"uppercase text-blueGray-400 mb-1 text-xs font-semibold"},[t._v("\n            Top Product\n          ")]),t._v(" "),e("h2",{staticClass:"text-blueGray-700 text-xl font-semibold"},[t._v(t._s(t.title))])])])]),t._v(" "),t._m(0)]):e("div",{staticClass:"w-full lg:w-6/12 xl:w-6/12 px-4 py-4"},[t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"p-4 flex-auto"},[t("div",{staticClass:"relative h-350-px"},[t("canvas",{attrs:{id:"chart-barang"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},[t("div",{staticClass:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"},[this._v("\n    loading...\n  ")])])}],!1,null,null,null);e.default=component.exports},848:function(t,e,r){"use strict";r.r(e);r(15),r(37),r(36);var n=r(720),l=r.n(n),o={props:{type:{type:String}},data:function(){return{api_url:"https://sirmuh.api.dksindo.com/api/v1",charts:[],loading:!1,title:"",panelCharts:[]}},beforeMount:function(){this.authTokenStorage()},methods:{authTokenStorage:function(){this.$store.dispatch("auth/storeAuthToken","auth")}},mounted:function(){this.$nextTick((function(){var t,e=this,r={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(t=this.token)||void 0===t?void 0:t.token)}};this.$api.defaults.headers.common["Sirmuh-Key"]="JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",this.$api.get("/to-the-best/supplier",r).then((function(t){var data=t.data;e.loading=!0,e.charts=null==data?void 0:data.data,e.title=data.message;var r=["#ed64a6","#4c51bf","#fc7e5e","#5f5f5f","#00d1b2","#ffdd57","#48c774","#00a5f7","#ff3860","#6772e5"],n=e.charts.map((function(t){return t.nama})),o=e.charts.map((function(t){return parseFloat(t.total_pembelian)})),d=n.map((function(label,t){return{label:label,backgroundColor:r[t%r.length],borderColor:r[t%r.length]}}));e.panelCharts=d;var c={type:"bar",data:{labels:n,datasets:[{label:data.label,data:o,backgroundColor:r,borderColor:r,borderWidth:1,fill:!0,barThickness:25}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:e.title},tooltips:{mode:"index",intersect:!0},hover:{mode:"nearest",intersect:!0},legend:{display:!1,labels:{fontColor:"rgba(0,0,0,.4)"},align:"end",position:"right"},scales:{xAxes:[{display:!1,scaleLabel:{display:!1,labelString:"Barang"},gridLines:{display:!0},ticks:{display:!0}}],yAxes:[{display:!0,barPercentage:100,scaleLabel:{display:!0,labelString:data.label},gridLines:{borderDash:[2],drawBorder:!0,borderDashOffset:[2],color:"rgba(33, 37, 41, 0.2)",zeroLineColor:"rgba(33, 37, 41, 0.15)",zeroLineBorderDash:[10],zeroLineBorderDashOffset:[2]}}]}}},f=document.getElementById("supplier-chart").getContext("2d");window.myBar=new l.a(f,c)})).finally((function(){setTimeout((function(){e.loading=!1}),1500)}))}))},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},d=r(8),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"},[t.panelCharts?e("div",[e("div",{staticClass:"rounded-t mb-0 px-4 py-3 bg-transparent"},[e("div",{staticClass:"flex flex-wrap items-center"},[e("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[e("h6",{staticClass:"uppercase text-blueGray-400 mb-1 text-xs font-semibold"},[t._v("\n            Top Supplier\n          ")]),t._v(" "),e("h2",{staticClass:"text-blueGray-700 text-xl font-semibold"},[t._v(t._s(t.title))])])])]),t._v(" "),t._m(0)]):e("div",{staticClass:"w-full lg:w-6/12 xl:w-6/12 px-4 py-4"},[t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"p-4 flex-auto"},[t("div",{staticClass:"relative h-350-px"},[t("canvas",{attrs:{id:"supplier-chart"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},[t("div",{staticClass:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"},[this._v("\n    loading...\n  ")])])}],!1,null,null,null);e.default=component.exports},849:function(t,e,r){"use strict";r.r(e);r(15),r(37),r(38),r(53),r(36);var n=r(720),l=r.n(n),o={props:{type:{type:String}},data:function(){return{api_url:"https://sirmuh.api.dksindo.com/api/v1",charts:[],loading:!1,title:"",panelCharts:[]}},beforeMount:function(){this.authTokenStorage()},methods:{authTokenStorage:function(){this.$store.dispatch("auth/storeAuthToken","auth")}},mounted:function(){this.$nextTick((function(){var t,e=this,r={headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(null==this||null===(t=this.token)||void 0===t?void 0:t.token)}};this.$api.defaults.headers.common["Sirmuh-Key"]="JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",this.$api.get("/to-the-best/pelanggan",r).then((function(t){var data=t.data;e.loading=!0,e.charts=null==data?void 0:data.data,e.title=data.message;var r=["#ed64a6","#4c51bf","#fc7e5e","#5f5f5f","#00d1b2","#ffdd57","#48c774","#00a5f7","#ff3860","#6772e5"],n=e.charts.map((function(t){return t.nama})),o=e.charts.map((function(t){return parseFloat(t.total_penjualan)})),d=n.map((function(label,t){return{label:label,backgroundColor:r[t%r.length],borderColor:r[t%r.length]}}));e.panelCharts=d;var c={type:"line",data:{labels:n,datasets:[{label:data.label,data:o,backgroundColor:r,borderColor:"#4c51bf",borderWidth:1,fill:!0,barThickness:25,pointRadius:8}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:"Sales Charts",fontColor:"white"},legend:{display:!1,labels:{fontColor:"white"},align:"end",position:"bottom",generateLabels:function(t){var e=l.a.defaults.global.legend.labels.generateLabels(t);return e.forEach((function(label){var t=label.datasetIndex;label.text="".concat(label.text," (").concat(newData[t].year,")")})),e}},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!1,scaleLabel:{display:!1,labelString:"Month",fontColor:"white"},gridLines:{display:!1,borderDash:[2],borderDashOffset:[2],color:"rgba(33, 37, 41, 0.3)",zeroLineColor:"rgba(0, 0, 0, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}],yAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!0,scaleLabel:{display:!0,labelString:data.label,fontColor:"white"},gridLines:{borderDash:[3],borderDashOffset:[3],drawBorder:!0,color:"rgba(255, 255, 255, 0.15)",zeroLineColor:"rgba(33, 37, 41, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}]}}},f=document.getElementById("pelanggan-chart").getContext("2d");window.myBar=new l.a(f,c)})).finally((function(){setTimeout((function(){e.loading=!1}),1500)}))}))},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},d=r(8),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"},[t.panelCharts?e("div",[e("div",{staticClass:"rounded-t mb-0 px-4 py-3 bg-transparent"},[e("div",{staticClass:"flex flex-wrap items-center"},[e("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[e("h6",{staticClass:"uppercase text-blueGray-100 mb-1 text-xs font-semibold"},[t._v("\n            Top Customer\n          ")]),t._v(" "),e("h2",{staticClass:"text-white text-xl font-semibold"},[t._v(t._s(t.title))])])])]),t._v(" "),t._m(0)]):e("div",{staticClass:"w-full lg:w-6/12 xl:w-6/12 px-4 py-4"},[t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"p-4 flex-auto"},[t("div",{staticClass:"relative h-350-px"},[t("canvas",{attrs:{id:"pelanggan-chart"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},[t("div",{staticClass:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"},[this._v("\n        loading...\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);