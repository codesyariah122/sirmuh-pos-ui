(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{855:function(t,e,o){"use strict";o.r(e);o(15),o(30),o(19),o(27),o(227),o(38),o(53),o(37);var n=o(717),r=o.n(n),l={data:function(){return{api_url:"https://sirmuh.api.dksindo.com/api/v1",profits:[],loading:!1,title:"",panelCharts:[]}},beforeMount:function(){this.authTokenStorage()},methods:{authTokenStorage:function(){this.$store.dispatch("auth/storeAuthToken","auth")}},mounted:function(){this.$nextTick((function(){var t,e=this,o="/laba-rugi/".concat(3),n={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(t=this.token)||void 0===t?void 0:t.token)}};this.$api.defaults.headers.common["Sirmuh-Key"]="JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",this.$api.get(o,n).then((function(t){var data=t.data;e.title=data.message;var o=null==data?void 0:data.data.map((function(t){var o=t.year,n=t.month,r=t.total_laba;return{monthName:e.$moment({year:o,month:n-1}).format("MMMM"),total_laba:r,year:o}})),n={type:"bar",data:{labels:o.map((function(t){return t.monthName})),datasets:[{label:(new Date).getFullYear(),backgroundColor:["#ed64a6","#ff429d"],borderColor:"#4c51bf",data:o.map((function(t){var e=parseFloat(t.total_laba.replace(/[^\d.-]/g,""));return isNaN(e)?0:e.toFixed(2)})),fill:!1}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:"Sales Charts",fontColor:"white"},legend:{display:!1,labels:{fontColor:"white"},align:"end",position:"bottom",generateLabels:function(t){var e=r.a.defaults.global.legend.labels.generateLabels(t);return e.forEach((function(label){var t=label.datasetIndex;label.text="".concat(label.text," (").concat(o[t].year,")")})),e}},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!0,scaleLabel:{display:!1,labelString:"Month",fontColor:"white"},gridLines:{display:!1,borderDash:[2],borderDashOffset:[2],color:"rgba(33, 37, 41, 0.3)",zeroLineColor:"rgba(0, 0, 0, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}],yAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!0,scaleLabel:{display:!0,labelString:data.label,fontColor:"white"},gridLines:{borderDash:[3],borderDashOffset:[3],drawBorder:!0,color:"rgba(255, 255, 255, 0.15)",zeroLineColor:"rgba(33, 37, 41, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}]}}},l=document.getElementById("line-chart").getContext("2d");window.myLine=new r.a(l,n)})).finally((function(){setTimeout((function(){e.loading=!1}),1500)}))}))},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},d=o(8),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700 mt-12"},[e("div",{staticClass:"rounded-t mb-0 px-4 py-3 bg-transparent"},[e("div",{staticClass:"flex flex-wrap items-center"},[e("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[e("h6",{staticClass:"uppercase text-blueGray-100 mb-1 text-xs font-semibold"},[t._v("\n          Laba\n        ")]),t._v(" "),e("h2",{staticClass:"text-white text-xl font-semibold"},[t._v("\n          "+t._s(t.title)+"\n        ")])])])]),t._v(" "),t.loading?e("div",{staticClass:"w-full lg:w-6/12 xl:w-6/12 px-4 py-4"},[t._m(0)]):e("div",{staticClass:"p-4 flex-auto"},[t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},[t("div",{staticClass:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"},[this._v("\n        loading...\n      ")])])},function(){var t=this._self._c;return t("div",{staticClass:"relative h-350-px"},[t("canvas",{attrs:{id:"line-chart"}})])}],!1,null,null,null);e.default=component.exports}}]);