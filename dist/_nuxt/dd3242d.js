(window.webpackJsonp=window.webpackJsonp||[]).push([[350,42,109,110,161,174],{637:function(t,e,n){"use strict";n.d(e,"b",(function(){return r.a})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return f}));var r=n(639),o=n(18),l=(n(69),n(14),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(18),o=(n(69),n(14),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.api_url,r=e.token,t.next=5,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+r,"Sirmuh-Key":e.api_key}});case 5:if((o=t.sent).ok){t.next=8;break}throw new Error("Data not found!");case 8:return t.next=10,o.json();case 10:return l=t.sent,t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())},705:function(t,e,n){t.exports=n.p+"img/thumbnail-bg.a18858a.jpg"},783:function(t,e,n){"use strict";n.r(e);var r={props:{tokos:{type:[Array,Object]}},data:function(){return{date:(new Date).getFullYear()}},methods:{redirectToMedsos:function(t){window.open(t)}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"relative bg-black pt-8 pb-6"},[e("div",{staticClass:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20",staticStyle:{transform:"translateZ(0)"}},[e("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[e("polygon",{staticClass:"text-blueGray-900 fill-current",attrs:{points:"2560 0 2560 100 0 100"}})])]),t._v(" "),e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"flex flex-wrap text-center lg:text-left"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("h4",{staticClass:"text-3xl font-semibold text-blueGray-300"},[t._v("\n          SIROJUL MUHTADIN\n        ")]),t._v(" "),e("h5",{staticClass:"text-lg mt-0 mb-2 text-blueGray-600"},[t._v("\n          "+t._s(t.$capitalize("Yayasan Sirojul Muhtadin | Bandung"))+"\n        ")]),t._v(" "),e("address",{staticClass:"text-blueGray-300"},[t._v("\n          "+t._s(t.$capitalize("Kp. Citaliktik Rt 01 Rw 02 Desa Pananjung "))+"\n        ")]),t._v(" "),e("div",{staticClass:"mt-6 lg:mb-0 mb-6"},[e("button",{staticClass:"bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",attrs:{type:"button"},on:{click:function(e){return t.redirectToMedsos("https://www.tiktok.com/@sirmuhmedia")}}},[e("i",{staticClass:"fa-brands fa-tiktok"})]),t._v(" "),e("button",{staticClass:"bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",attrs:{type:"button"},on:{click:function(e){return t.redirectToMedsos("https://www.facebook.com/MultimediaSIRMUH/?locale=id_ID")}}},[e("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),e("button",{staticClass:"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",attrs:{type:"button"},on:{click:function(e){return t.redirectToMedsos("https://www.youtube.com/@aaahmadsutana")}}},[e("i",{staticClass:"fa-brands fa-youtube"})]),t._v(" "),e("button",{staticClass:"bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",attrs:{type:"button"},on:{click:function(e){return t.redirectToMedsos("https://www.instagram.com/kobas_sirmuh/?hl=id")}}},[e("i",{staticClass:"fa-brands fa-instagram"})])])]),t._v(" "),t._m(0)]),t._v(" "),e("hr",{staticClass:"my-6 border-blueGray-300"}),t._v(" "),e("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center"},[e("div",{staticClass:"w-full md:w-4/12 px-4 mx-auto text-center"},[e("div",{staticClass:"text-sm text-blueGray-500 font-semibold py-1"},[t._v("\n          Copyright © "+t._s(t.date)+" "+t._s(t.$capitalize("sirojul muhtadin"))+" "),e("br"),t._v(" "),e("a",{staticClass:"text-blueGray-500 hover:text-blueGray-800",attrs:{href:"https://www.creative-tim.com?ref=vn-footer"}},[t._v("\n            Digital Kreatif Solusindo\n          ")]),t._v("\n          .\n        ")])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("div",{staticClass:"flex flex-wrap items-top mb-6"},[e("div",{staticClass:"w-full lg:w-4/12 px-4 ml-auto"},[e("span",{staticClass:"block uppercase text-blueGray-500 text-sm font-semibold mb-2"},[t._v("\n              Useful Links\n            ")]),t._v(" "),e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:"https://www.creative-tim.com/presentation?ref=vn-footer"}},[t._v("\n                  About Us\n                ")])]),t._v(" "),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:"https://blog.creative-tim.com?ref=vn-footer"}},[t._v("\n                  Blog\n                ")])]),t._v(" "),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:"https://www.github.com/creativetimofficial?ref=vn-footer"}},[t._v("\n                  Github\n                ")])]),t._v(" "),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:"https://www.creative-tim.com/bootstrap-themes/free?ref=vn-footer"}},[t._v("\n                  Free Products\n                ")])])])]),t._v(" "),e("div",{staticClass:"w-full lg:w-4/12 px-4"},[e("span",{staticClass:"block uppercase text-blueGray-500 text-sm font-semibold mb-2"},[t._v("\n              Other Resources\n            ")]),t._v(" "),e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:"https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer"}},[t._v("\n                  MIT License\n                ")])]),t._v(" "),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:"https://creative-tim.com/terms?ref=vn-footer"}},[t._v("\n                  Terms & Conditions\n                ")])]),t._v(" "),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:"https://creative-tim.com/privacy?ref=vn-footer"}},[t._v("\n                  Privacy Policy\n                ")])]),t._v(" "),e("li",[e("a",{staticClass:"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",attrs:{href:"https://creative-tim.com/contact-us?ref=vn-footer"}},[t._v("\n                  Contact Us\n                ")])])])])])])}],!1,null,null,null);e.default=component.exports},784:function(t,e,n){"use strict";n.r(e);n(309),n(62);var r={props:{banner:{type:[String,Number]}},data:function(){return{image_url:"https://sirmuh.api.dksindo.com/storage",bannerImg:null,bgOffline:n(705)}},mounted:function(){},methods:{generateBanner:function(){this.bannerImg="".concat(this.image_url,"/tokos/").concat(this.banner)}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"},[e("div",{staticClass:"absolute top-0 w-full h-full bg-center bg-cover",style:"background-image: url(".concat(null!==t.bannerImg?t.bannerImg:t.bgOffline,")")},[e("span",{staticClass:"w-full h-full absolute opacity-75 bg-black",attrs:{id:"blackOverlay"}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"top-auto boder-0 border-b-0 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px",staticStyle:{transform:"translateZ(0)"}},[e("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[e("polygon",{staticClass:"text-blueGray-200 fill-current",attrs:{points:"2560 0 2560 100 0 100"}})])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container relative mx-auto"},[e("div",{staticClass:"items-center flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 lg:px-4 ml-auto mr-auto text-center"},[e("div",{staticClass:"lg:pr-12"},[e("h1",{staticClass:"text-white font-semibold lg:text-5xl"},[t._v("\n            SIROJUL MUHTADIN OFFICIAL WEBSITE\n          ")]),t._v(" "),e("p",{staticClass:"mt-4 lg:text-lg text-blueGray-200"},[t._v("\n            Keindahan Kebersamaan Dalam menuntut Ilmu "),e("br"),t._v(" "),e("span",{staticClass:"font-bold"},[t._v("Aa Ahmad Sutana")]),t._v(" "),e("a",{attrs:{href:"https://www.youtube.com/channel/UC05rQzcIZJoEW9q9LgmjCMQ"}},[e("span",{staticClass:"text-blue-600"},[t._v("#ponpessirojulmuhtadin")])])])])])])])}],!1,null,null,null);e.default=component.exports},931:function(t,e,n){"use strict";n.r(e);var r=n(41),o=(n(14),n(20),n(334),n(36),n(38),n(37),n(29),n(783)),l=n(637),c={name:"index",components:{FooterComponent:o.default},data:function(){return{api_url:"https://sirmuh.api.dksindo.com/api/v1",tokos:[],coordinates:{lat:"",lng:""},center:[],koordinat:{},banner:""}},mounted:function(){this.getDataToko()},methods:{getDataToko:function(){var t=this;this.loading=!0,Object(l.b)({api_url:"".concat(this.api_url,"/data-toko"),api_key:"U5kIlcZf2khaDqmxCm3ucvYGEQAYyd0l"}).then((function(e){var data=e.data;t.tokos=data;var n=t.tokos[0].koordinat.match(/POINT\(([-\d.]+) ([-\d.]+)\)/);if(n){var r=parseFloat(n[2]),o=parseFloat(n[1]);t.coordinates.lat=r,t.coordinates.lng=o}else console.error("Format koordinat tidak sesuai")})).finally((function(){setTimeout((function(){t.loading=!1}),1500)})).catch((function(t){return console.log(t)}))},transformKoordinat:function(){var t=this;return this.tokos.forEach((function(e){t.banner=e.banner;var n=e.koordinat.replace("POINT(","").replace(")","").split(" ").map((function(t){return parseFloat(t)})),o=Object(r.a)(n,2),l=o[0],c=o[1];e.koordinat={longitude:l,latitude:c}}))}}},f=n(8),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("main",[e("landing-jumbotron",{attrs:{banner:t.banner}}),t._v(" "),e("landing-cardPanel",{attrs:{tokos:t.tokos}})],1),t._v(" "),e("footer-component",{attrs:{tokos:t.tokos}}),t._v(" "),t.$nuxt.logoutSound?e("audio",{staticClass:"hidden",attrs:{autoplay:"",src:"".concat(t.$nuxt.soundUrl,"/login.mp3"),preload:"auto"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandingJumbotron:n(784).default})}}]);