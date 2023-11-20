(window.webpackJsonp=window.webpackJsonp||[]).push([[37,13,15,16,18],{617:function(e,t,r){"use strict";r.r(t);var l=r(600),o=r.n(l),d={mounted:function(){this.$nextTick((function(){var e={type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:(new Date).getFullYear(),backgroundColor:"#4c51bf",borderColor:"#4c51bf",data:[65,78,66,44,56,67,75],fill:!1},{label:(new Date).getFullYear()-1,fill:!1,backgroundColor:"#fff",borderColor:"#fff",data:[40,68,86,74,56,60,87]}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:"Sales Charts",fontColor:"white"},legend:{labels:{fontColor:"white"},align:"end",position:"bottom"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!0,scaleLabel:{display:!1,labelString:"Month",fontColor:"white"},gridLines:{display:!1,borderDash:[2],borderDashOffset:[2],color:"rgba(33, 37, 41, 0.3)",zeroLineColor:"rgba(0, 0, 0, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}],yAxes:[{ticks:{fontColor:"rgba(255,255,255,.7)"},display:!0,scaleLabel:{display:!1,labelString:"Value",fontColor:"white"},gridLines:{borderDash:[3],borderDashOffset:[3],drawBorder:!1,color:"rgba(255, 255, 255, 0.15)",zeroLineColor:"rgba(33, 37, 41, 0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}]}}},t=document.getElementById("line-chart").getContext("2d");window.myLine=new o.a(t,e)}))}},n=r(3),component=Object(n.a)(d,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"},[t("div",{staticClass:"rounded-t mb-0 px-4 py-3 bg-transparent"},[t("div",{staticClass:"flex flex-wrap items-center"},[t("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[t("h6",{staticClass:"uppercase text-blueGray-100 mb-1 text-xs font-semibold"},[e._v("\n          Overview\n        ")]),e._v(" "),t("h2",{staticClass:"text-white text-xl font-semibold"},[e._v("\n          Sales value\n        ")])])])]),e._v(" "),t("div",{staticClass:"p-4 flex-auto"},[t("div",{staticClass:"relative h-350-px"},[t("canvas",{attrs:{id:"line-chart"}})])])])}],!1,null,null,null);t.default=component.exports},618:function(e,t,r){"use strict";r.r(t);var l=r(600),o=r.n(l),d={mounted:function(){this.$nextTick((function(){var e={type:"bar",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:(new Date).getFullYear(),backgroundColor:"#ed64a6",borderColor:"#ed64a6",data:[30,78,56,34,100,45,13],fill:!1,barThickness:8},{label:(new Date).getFullYear()-1,fill:!1,backgroundColor:"#4c51bf",borderColor:"#4c51bf",data:[27,68,86,74,10,4,87],barThickness:8}]},options:{maintainAspectRatio:!1,responsive:!0,title:{display:!1,text:"Orders Chart"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},legend:{labels:{fontColor:"rgba(0,0,0,.4)"},align:"end",position:"bottom"},scales:{xAxes:[{display:!1,scaleLabel:{display:!0,labelString:"Month"},gridLines:{borderDash:[2],borderDashOffset:[2],color:"rgba(33, 37, 41, 0.3)",zeroLineColor:"rgba(33, 37, 41, 0.3)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}],yAxes:[{display:!0,scaleLabel:{display:!1,labelString:"Value"},gridLines:{borderDash:[2],drawBorder:!1,borderDashOffset:[2],color:"rgba(33, 37, 41, 0.2)",zeroLineColor:"rgba(33, 37, 41, 0.15)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]}}]}}},t=document.getElementById("bar-chart").getContext("2d");window.myBar=new o.a(t,e)}))}},n=r(3),component=Object(n.a)(d,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"},[t("div",{staticClass:"rounded-t mb-0 px-4 py-3 bg-transparent"},[t("div",{staticClass:"flex flex-wrap items-center"},[t("div",{staticClass:"relative w-full max-w-full flex-grow flex-1"},[t("h6",{staticClass:"uppercase text-blueGray-400 mb-1 text-xs font-semibold"},[e._v("\n          Performance\n        ")]),e._v(" "),t("h2",{staticClass:"text-blueGray-700 text-xl font-semibold"},[e._v("\n          Total orders\n        ")])])])]),e._v(" "),t("div",{staticClass:"p-4 flex-auto"},[t("div",{staticClass:"relative h-350-px"},[t("canvas",{attrs:{id:"bar-chart"}})])])])}],!1,null,null,null);t.default=component.exports},620:function(e,t,r){"use strict";r.r(t);var l=r(3),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"},[t("div",{staticClass:"rounded-t mb-0 px-4 py-3 border-0"},[t("div",{staticClass:"flex flex-wrap items-center"},[t("div",{staticClass:"relative w-full px-4 max-w-full flex-grow flex-1"},[t("h3",{staticClass:"font-semibold text-base text-blueGray-700"},[e._v("\n          Page visits\n        ")])]),e._v(" "),t("div",{staticClass:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"},[t("button",{staticClass:"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",attrs:{type:"button"}},[e._v("\n          See all\n        ")])])])]),e._v(" "),t("div",{staticClass:"block w-full overflow-x-auto"},[t("table",{staticClass:"items-center w-full bg-transparent border-collapse"},[t("thead",[t("tr",[t("th",{staticClass:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"},[e._v("\n            Page name\n          ")]),e._v(" "),t("th",{staticClass:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"},[e._v("\n            Visitors\n          ")]),e._v(" "),t("th",{staticClass:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"},[e._v("\n            Unique users\n          ")]),e._v(" "),t("th",{staticClass:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"},[e._v("\n            Bounce rate\n          ")])])]),e._v(" "),t("tbody",[t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            /argon/\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            4,569\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            340\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("i",{staticClass:"fas fa-arrow-up text-emerald-500 mr-4"}),e._v("\n            46,53%\n          ")])]),e._v(" "),t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            /argon/index.html\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            3,985\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            319\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("i",{staticClass:"fas fa-arrow-down text-orange-500 mr-4"}),e._v("\n            46,53%\n          ")])]),e._v(" "),t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            /argon/charts.html\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            3,513\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            294\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("i",{staticClass:"fas fa-arrow-down text-orange-500 mr-4"}),e._v("\n            36,49%\n          ")])]),e._v(" "),t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            /argon/tables.html\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            2,050\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            147\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("i",{staticClass:"fas fa-arrow-up text-emerald-500 mr-4"}),e._v("\n            50,87%\n          ")])]),e._v(" "),t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            /argon/profile.html\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            1,795\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            190\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("i",{staticClass:"fas fa-arrow-down text-red-500 mr-4"}),e._v("\n            46,53%\n          ")])])])])])])}],!1,null,null,null);t.default=component.exports},621:function(e,t,r){"use strict";r.r(t);var l=r(3),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"},[t("div",{staticClass:"rounded-t mb-0 px-4 py-3 border-0"},[t("div",{staticClass:"flex flex-wrap items-center"},[t("div",{staticClass:"relative w-full px-4 max-w-full flex-grow flex-1"},[t("h3",{staticClass:"font-semibold text-base text-blueGray-700"},[e._v("\n          Social traffic\n        ")])]),e._v(" "),t("div",{staticClass:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"},[t("button",{staticClass:"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",attrs:{type:"button"}},[e._v("\n          See all\n        ")])])])]),e._v(" "),t("div",{staticClass:"block w-full overflow-x-auto"},[t("table",{staticClass:"items-center w-full bg-transparent border-collapse"},[t("thead",{staticClass:"thead-light"},[t("tr",[t("th",{staticClass:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"},[e._v("\n            Referral\n          ")]),e._v(" "),t("th",{staticClass:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"},[e._v("\n            Visitors\n          ")]),e._v(" "),t("th",{staticClass:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"})])]),e._v(" "),t("tbody",[t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            Facebook\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            1,480\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("div",{staticClass:"flex items-center"},[t("span",{staticClass:"mr-2"},[e._v("60%")]),e._v(" "),t("div",{staticClass:"relative w-full"},[t("div",{staticClass:"overflow-hidden h-2 text-xs flex rounded bg-red-200"},[t("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500",staticStyle:{width:"60%"}})])])])])]),e._v(" "),t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            Facebook\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            5,480\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("div",{staticClass:"flex items-center"},[t("span",{staticClass:"mr-2"},[e._v("70%")]),e._v(" "),t("div",{staticClass:"relative w-full"},[t("div",{staticClass:"overflow-hidden h-2 text-xs flex rounded bg-emerald-200"},[t("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500",staticStyle:{width:"70%"}})])])])])]),e._v(" "),t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            Google\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            4,807\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("div",{staticClass:"flex items-center"},[t("span",{staticClass:"mr-2"},[e._v("80%")]),e._v(" "),t("div",{staticClass:"relative w-full"},[t("div",{staticClass:"overflow-hidden h-2 text-xs flex rounded bg-purple-200"},[t("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500",staticStyle:{width:"80%"}})])])])])]),e._v(" "),t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            Instagram\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            3,678\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("div",{staticClass:"flex items-center"},[t("span",{staticClass:"mr-2"},[e._v("75%")]),e._v(" "),t("div",{staticClass:"relative w-full"},[t("div",{staticClass:"overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200"},[t("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500",staticStyle:{width:"75%"}})])])])])]),e._v(" "),t("tr",[t("th",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"},[e._v("\n            twitter\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[e._v("\n            2,645\n          ")]),e._v(" "),t("td",{staticClass:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},[t("div",{staticClass:"flex items-center"},[t("span",{staticClass:"mr-2"},[e._v("30%")]),e._v(" "),t("div",{staticClass:"relative w-full"},[t("div",{staticClass:"overflow-hidden h-2 text-xs flex rounded bg-orange-200"},[t("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500",staticStyle:{width:"30%"}})])])])])])])])])])}],!1,null,null,null);t.default=component.exports},650:function(e,t,r){"use strict";r.r(t);var l=r(617),o=r(618),d=r(620),n=r(621),c={name:"dashboard-role",layout:"admin",components:{CardLineChart:l.default,CardBarChart:o.default,CardPageVisits:d.default,CardSocialTraffic:n.default}},x=r(3),component=Object(x.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"flex flex-wrap"},[t("div",{staticClass:"w-full xl:w-8/12 mb-12 xl:mb-0 px-4"},[t("card-line-chart")],1),e._v(" "),t("div",{staticClass:"w-full xl:w-4/12 px-4"},[t("card-bar-chart")],1)]),e._v(" "),t("div",{staticClass:"flex flex-wrap mt-4"},[t("div",{staticClass:"w-full xl:w-8/12 mb-12 xl:mb-0 px-4"},[t("card-page-visits")],1),e._v(" "),t("div",{staticClass:"w-full xl:w-4/12 px-4"},[t("card-social-traffic")],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);