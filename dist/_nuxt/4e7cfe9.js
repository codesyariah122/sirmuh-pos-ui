(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{897:function(t,e,n){"use strict";n.r(e);var o=n(152),l=(n(15),n(53),[{id:1,title:"tanggal"},{id:2,title:"kode"},{id:3,title:"operator"},{id:4,title:"total"},{id:7,title:"keperluan"},{id:8,title:"keterangan"}]),r=n(670),c={name:"pembelian-langsung-detail",layout:"admin",data:function(){return{loadingDetail:null,options:"pemakaian-barang-detail",headers:Object(o.a)(l),query:this.$route.query.query,id:this.$route.params.id,item:{},itembarangs:{},nama:"",routePath:this.$route.path,stringRoute:null,typeRoute:null}},beforeMount:function(){this.$nuxt.authTokenStorage()},created:function(){this.$nuxt.checkNewData(),this.generatePath()},mounted:function(){this.getDetailPemakaianBarang(!0)},methods:{generatePath:function(){var t=this.routePath.split("/"),e=t[2],n=t[3];this.stringRoute=e,this.typeRoute=n},getDetailPemakaianBarang:function(t){var e=this;this.loadingDetail=!0,this.$nuxt.globalLoadingMessage="Proses menyiapkan detail pemakaian barang ...",Object(r.b)({api_url:"".concat(this.api_url,"/pemakaian-barang/").concat(this.query),token:this.token.token,api_key:"JSILKPJ7oVawvw48p7MicoYUcDYf5g8u"}).then((function(data){e.item=data.data,e.itembarangs=null==data?void 0:data.items,e.nama="Pemakaian Barang ".concat(e.item.kode)})).finally((function(){e.loadingDetail=!1})).catch((function(t){return console.log(t)}))}},computed:{token:function(){return this.$store.getters["auth/getAuthToken"]}},watch:{notifs:function(){this.$_.size(this.notifs)>0&&this.notifs[0].routes&&this.getDetailPemakaianBarang(!1)}}},d=n(8),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex flex-wrap mt-12 px-6"},[e("div",{staticClass:"w-full"},[e("cards-card-detail-data",{attrs:{color:"light",item:t.item,timelines:t.itembarangs,headers:t.headers,title:t.nama,timelineTitle:"Detail Item Pemakaian Barang ".concat(t.item.kode),timeTitle:"",types:"backoffice",tableSetting:"detail",cellType:"pemakaian-barang",parentRoute:"backoffice/pemakaian-barang",stringRoute:t.stringRoute,typeRoute:t.typeRoute,loading:t.loadingDetail}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsCardDetailData:n(719).default})}}]);