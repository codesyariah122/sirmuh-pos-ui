(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1045:function(e,t,l){"use strict";l.r(t);var n={mounted:function(){var e=window.google,map=document.getElementById("map-canvas"),t=map.getAttribute("data-lat"),l=map.getAttribute("data-lng"),n=new e.maps.LatLng(t,l),o={zoom:12,scrollwheel:!1,center:n,mapTypeId:e.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#5e72e4"},{visibility:"on"}]}]};map=new e.maps.Map(map,o);var marker=new e.maps.Marker({position:n,map:map,animation:e.maps.Animation.DROP,title:"Hello World!"}),r=new e.maps.InfoWindow({content:'<div class="info-window-content"><h2>Vue Notus</h2><p>A beautiful UI Kit and Admin for Tailwind CSS. It is Free and Open Source.</p></div>'});e.maps.event.addListener(marker,"click",(function(){r.open(map,marker)}))}},o=l(8),component=Object(o.a)(n,(function(){return(0,this._self._c)("div",{staticClass:"relative w-full rounded h-600-px",attrs:{id:"map-canvas","data-lat":"40.748817","data-lng":"-73.985428"}})}),[],!1,null,null,null);t.default=component.exports}}]);