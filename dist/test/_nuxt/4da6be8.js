(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{743:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var l=[{id:1,title:"tanggal pembelian"},{id:2,title:"no faktur"},{id:6,title:"kode kas"},{id:86,title:"Kas Biaya"},{id:88,title:"Biaya Bongkar"},{id:7,title:"subtotal"},{id:13,title:"total"},{id:15,title:"kembali"},{id:8,title:"lunas"},{id:9,title:"hutang"},{id:11,title:"keterangan"},{id:12,title:"operator"}]},995:function(t,e,n){"use strict";n.r(e);var l=n(152),o=(n(15),n(53),n(743)),r=n(670),d={name:"pembelian-langsung-detail",layout:"admin",data:function(){return{loadingDetail:null,options:"pembelian-langsung-detail",headers:Object(l.a)(o.a),query:this.$route.query.query,id:this.$route.params.id,item:{},itempembelians:[],nama:"",routePath:this.$route.path,stringRoute:null,typeRoute:null}},beforeMount:function(){this.$nuxt.authTokenStorage()},created:function(){this.$nuxt.checkNewData(),this.getDetailPembelianLangsung(!0),this.generatePath()},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},getDetailPembelianLangsung:function(t){var e=this;this.loadingDetail=!0,this.$nuxt.globalLoadingMessage="Proses menyiapkan detail  pembelian langsung ...",Object(r.b)({api_url:"".concat(this.api_url,"/data-pembelian-langsung/").concat(this.id),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){e.item=data.data,e.itempembelians=data.items,e.nama="Pembelian Langsung"})).finally((function(){e.loadingDetail=!1})).catch((function(t){return console.log(t)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}},watch:{notifs:function(){this.$_.size(this.notifs)>0&&this.notifs[0].routes&&this.getDetailPembelianLangsung(!1)}}},c=n(8),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex flex-wrap mt-12"},[e("div",{staticClass:"w-full"},[e("cards-card-detail-data",{attrs:{color:"light",item:t.item,timelines:t.itempembelians,headers:t.headers,title:t.nama,timelineTitle:"Detail Item Pembelian",tableSetting:"detail",timeTitle:"",types:"transaksi",cellType:"pembelian-langsung",parentRoute:"transaksi/beli",stringRoute:t.stringRoute,typeRoute:t.typeRoute,loading:t.loadingDetail}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardDetailData:n(719).default})}}]);