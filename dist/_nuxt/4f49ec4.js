(window.webpackJsonp=window.webpackJsonp||[]).push([[44,12],{574:function(t,e,l){t.exports=l.p+"img/team-2-800x800.3e08ef1.jpg"},583:function(t,e,l){"use strict";l.r(e);l(53),l(26),l(54),l(30),l(292);var n={props:{detail:{type:Object,default:function(){return{}}},link:{type:String,default:null}},data:function(){return{image_url:"http://api.dompetkebaikanumat.cc.id/storage"}},methods:{backTo:function(){var t=this;setTimeout((function(){t.$store.dispatch("success/removeStoreSuccess","success-form"),t.$router.push("/dashboard/".concat(t.link))}),1e3)}}},r=l(3),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-6"},[e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"w-full px-4 flex justify-center"},[e("div",{staticClass:"relative"},[e("div",{staticClass:"shadow-xl rounded-md h-auto align-middle border-none bg-white absolute -m-16 -ml-20 lg:-ml-16 max-w-250-px",domProps:{innerHTML:t._s(t.detail.barcode)}})])]),t._v(" "),e("div",{staticClass:"w-full px-4 text-center mt-20"},[e("div",{staticClass:"flex justify-center py-4 lg:pt-4 pt-8"},[e("div",{staticClass:"mr-4 p-3 text-center"},[e("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[t._v("\n                "+t._s("Y"===t.detail.publish?"publish":"draft")+"\n              ")]),t._v(" "),e("span",{staticClass:"text-sm text-blueGray-400"},[t._v("Status")])])])])]),t._v(" "),e("div",{staticClass:"text-center mt-6"},[e("h3",{staticClass:"text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"},[t._v("\n          "+t._s(t.detail.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"mt-4 mb-4"},[e("img",{staticClass:"shadow-xl h-auto",attrs:{alt:"detail-campaign-banner",src:"".concat(t.image_url,"/").concat(t.detail.banner)}})]),t._v(" "),e("div",{staticClass:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[e("i",{staticClass:"fas fa-calendar-days mr-2 text-lg text-blueGray-400"}),t._v("\n          Akhir Tayang - "+t._s(t.detail.end_campaign?t.$moment(t.detail.end_campaign).format("LLLL"):"-")+"\n        ")]),t._v(" "),e("div",{staticClass:"mb-2 text-blueGray-600 mt-10"},[e("i",{staticClass:"fas fa-newspaper mr-2 text-lg text-blueGray-400"}),t._v("\n          Author - "+t._s(t.detail.author)+"\n        ")])]),t._v(" "),e("div",{staticClass:"mt-10 py-10 border-t border-blueGray-200 text-left"},[e("div",{staticClass:"flex flex-wrap justify-start"},[e("div",{staticClass:"w-full lg:w-9/12 px-4"},[e("div",{staticClass:"mb-4 text-lg leading-relaxed text-blueGray-700",domProps:{innerHTML:t._s(t.$decode(t.detail.description))}}),t._v(" "),e("button",{staticClass:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",attrs:{type:"button"},on:{click:t.backTo}},[e("i",{staticClass:"fa-solid fa-chevron-left fa-lg"}),t._v(" Back\n            ")])])])])])}),[],!1,null,null,null);e.default=component.exports},584:function(t,e,l){"use strict";l.r(e);l(53),l(23),l(292),l(30);var n=l(574),r=l.n(n),c={props:{detail:{type:Object,default:function(){return{}}},link:{type:String,default:null},methodType:{type:String,default:null},successNew:{type:Boolean,default:null},messageNew:{type:String,default:""}},data:function(){return{team2:r.a,image_url:"http://api.dompetkebaikanumat.cc.id"}},mounted:function(){console.log(this.link)},methods:{backTo:function(){var t=this;setTimeout((function(){t.$store.dispatch("success/removeStoreSuccess","success-form"),t.$router.push("/dashboard/".concat(t.link))}),1e3)},closeSuccessAlert:function(){this.$emit("close-alert")}}},o=l(3),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"w-full px-4 flex justify-center"},[e("div",{staticClass:"relative"},[e("img",{staticClass:"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px",attrs:{alt:"...",src:"".concat(t.image_url,"/").concat(t.detail.photo)}})])]),t._v(" "),e("div",{staticClass:"w-full px-4 text-center mt-20"},["add"!==t.methodType?e("div",{staticClass:"flex justify-center py-4 lg:pt-4 pt-8"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]):t._e()])]),t._v(" "),e("div",{staticClass:"text-center mt-12"},[e("h3",{staticClass:"text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"},[t._v("\n        "+t._s(t.detail.users[0].name)+"\n      ")]),t._v(" "),t.successNew?e("div",{staticClass:"flex justify-center"},[e("molecules-success-alert",{attrs:{success:t.successNew,messageAlert:t.messageNew},on:{"close-alert":t.closeSuccessAlert}})],1):t._e(),t._v(" "),"add"!==t.methodType?e("div",{staticClass:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"},[e("i",{staticClass:"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"}),t._v("\n        "+t._s(t.detail.city)+", "+t._s(t.detail.district)+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"mb-2 text-blueGray-600 mt-10"},[e("i",{staticClass:"fas fa-paper-plane mr-2 text-lg text-blueGray-400"}),t._v("\n        Email - "+t._s(t.detail.users[0].email)+"\n      ")]),t._v(" "),e("div",{staticClass:"mb-2 text-blueGray-600"},[e("i",{staticClass:"fas fa-circle-user mr-2 text-lg text-blueGray-400"}),t._v("\n        Username - "+t._s(t.detail.username)+"\n      ")])]),t._v(" "),e("div",{staticClass:"mt-10 py-10 border-t border-blueGray-200 text-center"},["add"!==t.methodType?e("div",{staticClass:"flex flex-wrap justify-center"},[t._m(3)]):t._e(),t._v(" "),e("button",{staticClass:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",attrs:{type:"button"},on:{click:t.backTo}},[e("i",{staticClass:"fa-solid fa-chevron-left fa-lg"}),t._v(" Back\n      ")])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mr-4 p-3 text-center"},[e("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[t._v("\n              22\n            ")]),t._v(" "),e("span",{staticClass:"text-sm text-blueGray-400"},[t._v("Friends")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mr-4 p-3 text-center"},[e("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[t._v("\n              10\n            ")]),t._v(" "),e("span",{staticClass:"text-sm text-blueGray-400"},[t._v("Photos")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"lg:mr-4 p-3 text-center"},[e("span",{staticClass:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},[t._v("\n              89\n            ")]),t._v(" "),e("span",{staticClass:"text-sm text-blueGray-400"},[t._v("Comments")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full lg:w-9/12 px-4"},[e("p",{staticClass:"mb-4 text-lg leading-relaxed text-blueGray-700"},[t._v("\n            An artist of considerable range, Jenna the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and\n            records all of his own music, giving it a warm, intimate feel with\n            a solid groove structure. An artist of considerable range.\n          ")]),t._v(" "),e("a",{staticClass:"font-normal text-emerald-500",attrs:{href:"javascript:void(0);"}},[t._v("\n            Show more\n          ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesSuccessAlert:l(577).default})},587:function(t,e,l){"use strict";l.r(e);l(292);var n={props:{pageType:{type:String,default:null},link:{type:String,default:null},methodType:{type:String,default:null},title:{type:String,default:null},successNew:{type:Boolean,default:null},messageNew:{type:String,default:""},detail:{type:Object,default:function(){return{}}}},methods:{closeSuccessAlert:function(){this.$emit("close-alert")}}},r=l(3),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return t.successNew||"add"!==t.methodType?e("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"},["campaignData"===t.pageType?e("campaigns-form-detail",{attrs:{detail:t.detail,link:t.link}}):t._e(),t._v(" "),"userData"===t.pageType?e("users-form-detail",{attrs:{detail:t.detail,link:t.link,methodType:t.methodType,successNew:t.successNew,messageNew:t.messageNew},on:{"close-alert":t.closeSuccessAlert}}):t._e()],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CampaignsFormDetail:l(583).default,UsersFormDetail:l(584).default})},639:function(t,e,l){"use strict";l.r(e);l(23),l(9),l(53),l(30);var n=l(575),r={name:"users-data-add",layout:"admin",data:function(){return{routeName:this.$route.name.split("-").pop(),loadingDetail:null,successNew:null,messageNew:"",detail:{},type:this.$route.query.type}},beforeMount:function(){this.storedFormData()},created:function(){this.dataManagementEvent()},mounted:function(){this.detailUser(this.formData?this.formData.data[0]:this.routeName)},methods:{storedFormData:function(){this.$store.dispatch("success/storedFormData","success-form")},detailUser:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loadingDetail=!0,e&&Object(n.c)({api_url:"".concat(this.api_url,"/fitur/user-management/").concat(e),token:this.token.token,api_key:"zPl71ZUii2HJebSKS9qD3baeWqgjxZTJ"}).then((function(e){var data=e.data;data&&(t.successNew=!0,t.messageNew="".concat(data.username,", data successfully added !"),t.detail=data)})).finally((function(){setTimeout((function(){t.loadingDetail=!1}),500)})).catch((function(t){return console.log(t)}))}},computed:{formData:function(){return this.$store.getters["success/formData"]}},watch:{dataNotifs:function(){this.dataNotifs&&this.$_.size(this.dataNotifs)>0&&(this.storedFormData(),this.detailUser(this.formData?this.formData.data[0]:""))}}},c=r,o=l(3),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap"},[t.successNew?e("div",{class:"w-full ".concat("add"===t.routeName?"lg:w-12/12":"lg:w-8/12"," px-4")},[e("cards-card-profile",{attrs:{pageType:"userData",link:"users-data",title:"Add New User Dashboard Admin",methodType:"add",successNew:t.successNew,messageNew:t.messageNew,detail:t.detail}})],1):e("div",{class:"w-full ".concat("add"===t.routeName?"lg:w-12/12":"lg:w-8/12"," px-4")},[e("cards-card-settings",{attrs:{pageType:"userData",link:"users-data",title:"Add New User Dashboard Admin",methodType:"add",type:t.type},on:{"detail-data":t.detailUser}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardProfile:l(587).default,CardsCardSettings:l(595).default})}}]);