(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{813:function(t,e,r){"use strict";r.r(e);var n,o=r(18),l=(r(69),r(15),r(37),r(53),r(36),r(686)),d=r.n(l),c={props:{type:{type:String}},data:function(){return{api_url:"http://192.168.1.8:4041/api/v1",charts:[],loading:!1,title:"",panelCharts:[]}},beforeMount:function(){this.authTokenStorage()},methods:{authTokenStorage:function(){this.$store.dispatch("auth/storeAuthToken","auth")}},mounted:(n=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$nextTick((function(){var t,e=this,r={headers:{Accept:"application/json",Authorization:"Bearer ".concat(null==this||null===(t=this.token)||void 0===t?void 0:t.token)}};this.$api.defaults.headers.common["Sirmuh-Key"]="JSILKPJ7oVawvw48p7MicoYUcDYf5g8u",this.$api.get("/to-the-best/barang",r).then((function(t){var data=t.data;e.loading=!0,e.charts=null==data?void 0:data.data,e.title=data.message;var r=["#ed64a6","#4c51bf","#fc7e5e","#5f5f5f","#00d1b2","#ffdd57","#48c774","#00a5f7","#ff3860","#6772e5"],n=e.charts.map((function(t){return"".concat(t.nama," (").concat(t.supplier,")")})),o=e.charts.map((function(t){return parseFloat(t.total_qty)})),l=n.map((function(label,t){return{label:label,backgroundColor:r[t%r.length],borderColor:r[t%r.length]}}));e.panelCharts=l;var c={type:"bar",data:{labels:n,datasets:[{label:data.label,data:o,backgroundColor:r,borderColor:r,borderWidth:1,fill:!0,barThickness:25}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:e.title},tooltips:{mode:"index",intersect:!0},hover:{mode:"nearest",intersect:!0},legend:{display:!1,labels:{fontColor:"rgba(0,0,0,.4)"},align:"end",position:"right"},scales:{xAxes:[{display:!1,scaleLabel:{display:!1,labelString:"Barang"},gridLines:{display:!0},ticks:{display:!0}}],yAxes:[{display:!0,barPercentage:100,scaleLabel:{display:!0,labelString:data.label},gridLines:{borderDash:[2],drawBorder:!0,borderDashOffset:[2],color:"rgba(33, 37, 41, 0.2)",zeroLineColor:"rgba(33, 37, 41, 0.15)",zeroLineBorderDash:[10],zeroLineBorderDashOffset:[2]}}]}}},f=document.getElementById("chart-barang");f?window.myBar=new d.a(f,c):console.error("Element with ID 'chart-barang' not found")})).finally((function(){setTimeout((function(){e.loading=!1}),1500)}))}));case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}}},f=c,h=r(8),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 mt-12 shadow-lg rounded"},[t.panelCharts?e("div",[e("div",{staticClass:"rounded-t mb-0 px-4 py-3 bg-transparent"},[e("div",{staticClass:"flex flex-wrap items-center"},[e("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[e("h6",{staticClass:"uppercase text-blueGray-400 mb-1 text-xs font-semibold"},[t._v("\n            Top Product\n          ")]),t._v(" "),e("h2",{staticClass:"text-blueGray-700 text-xl font-semibold"},[t._v(t._s(t.title))])])])]),t._v(" "),t._m(0)]):e("div",{staticClass:"w-full lg:w-6/12 xl:w-6/12 px-4 py-4"},[t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"p-4 flex-auto"},[t("div",{staticClass:"relative h-350-px"},[t("canvas",{attrs:{id:"chart-barang"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"},[t("div",{staticClass:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"},[this._v("\n    loading...\n  ")])])}],!1,null,null,null);e.default=component.exports}}]);