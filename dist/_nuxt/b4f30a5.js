(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{907:function(t,e,n){"use strict";n.r(e);var o=n(152),l=(n(15),n(53),n(37),[{id:1,title:"tanggal transaksi"},{id:2,title:"kode piutang"},{id:26,title:"kode faktur"},{id:15,title:"lunas"},{id:16,title:"status"},{id:3,title:"pelanggan"},{id:5,title:"operator"},{id:9,title:"total belanja"},{id:10,title:"dibayarkan"},{id:11,title:"piutang"},{id:12,title:"total angsuran"},{id:25,title:"sisa piutang"},{id:14,title:"kas transaksi"}]),r=n(670),d={name:"terima-piutang-detail",layout:"admin",data:function(){return{loading:null,headers:Object(o.a)(l),options:"piutang-pelanggan-detail",query:this.$route.query.query,kode:this.$route.params.kode,item:{},angsurans:[],nama:"",routePath:this.$route.path,stringRoute:null,typeRoute:null}},beforeMount:function(){this.$nuxt.authTokenStorage()},created:function(){this.$nuxt.checkNewData(),this.getDetailHutang(!0),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},getDetailHutang:function(t){var e=this;this.loading=t,this.$nuxt.globalLoadingMessage="Proses menyiapkan detail piutang ...",Object(r.b)({api_url:"".concat(this.api_url,"/data-piutang/").concat(this.kode),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){e.item=data.data,e.angsurans=data.angsurans,e.nama=e.angsurans.length>0?"Angsuran":"Piutang"})).finally((function(){setTimeout((function(){e.loading=!1}),1500)})).catch((function(t){return console.log(t)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}},watch:{notifs:function(){this.$_.size(this.notifs)>0&&this.notifs[0].routes&&this.getDetailHutang(!1)}}},c=n(8),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("div",[e("molecules-row-loading",{attrs:{loading:t.loading,options:t.options}})],1):e("div",{staticClass:"flex flex-wrap mt-12 px-6"},[e("div",{staticClass:"w-full"},[e("cards-card-detail-data",{attrs:{color:"light",item:t.item,timelines:t.angsurans,headers:t.headers,title:t.nama,tableSetting:"detail",timelineTitle:"Detail Item Piutang",timeTitle:"Angsuran Ke",types:"transaksi",cellType:"piutang-pelanggan",parentRoute:"transaksi/terima-piutang",stringRoute:t.stringRoute,typeRoute:t.typeRoute}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MoleculesRowLoading:n(226).default,CardsCardDetailData:n(720).default})}}]);