(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],f=0,p=[];f<u.length;f++)o=u[f],a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1a1c1d96":"a67bb06b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1a1c1d96":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1a1c1d96":"0e433876"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],c=u.getAttribute("data-href");if(c===r||c===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},p.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var c,f=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=u(e),c=function(t){p.onerror=p.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:p})},12e4);p.onerror=p.onload=c,f.appendChild(p)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var l=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("8bbf"),o=n.n(r),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},e._l(e.routes,function(t){return n("router-link",{key:t.name,staticClass:"link",class:{active:t.isActive},attrs:{to:t.name}},[e._v(e._s(t.title))])})),n("router-view")],1)},i=[],u=(n("f559"),n("7f7f"),n("7514"),{name:"EntryApp",data:function(){return{routes:[{name:"/sub-app-ts",title:"sub-app-ts"},{name:"/sub-app-js",title:"sub-app-js"}]}},watch:{$route:function(e){var t=e.path;if("undefined"!==typeof t){var n=this.routes.find(function(e){return e.isActive});n&&(n.isActive=!1);var r=this.routes.find(function(e){var n=e.name;return t.startsWith(n)});r&&(r.isActive=!0)}}}}),s=u,c=(n("7c55"),n("2877")),f=Object(c["a"])(s,a,i,!1,null,null,null);f.options.__file="App.vue";var p=f.exports,l=n("8c4f"),d=n("b2ea"),h=n.n(d),v=new h.a({poolName:"__share_pool__"});o.a.use(l["a"]);var m=v.getRoutes(),b=new l["a"]({routes:m.concat([{path:"/",redirect:{name:"sub-app-ts"}},{path:"*",component:function(){return n.e("chunk-1a1c1d96").then(n.bind(null,"9703"))}}])}),g=b,y=n("2f62");o.a.use(y["a"]);var w=new y["a"].Store({state:{name:"entry-app"},mutations:{},actions:{}}),_=w,j=n("3835"),k=(n("ac6a"),n("ffc1"),new o.a({methods:{on:function(){this.$on.apply(this,arguments)},once:function(){this.$once.apply(this,arguments)},off:function(){this.$off.apply(this,arguments)},emit:function(){this.$emit.apply(this,arguments)}}})),O={$bus:k,$sharedMethods:{CreateRegister:d["CreateRegister"]}},A={install:function(e){Object.defineProperties(e.prototype,Object.entries(O).reduce(function(e,t){var n=Object(j["a"])(t,2),r=n[0],o=n[1];return e[r]={get:function(){return o}},e},{}))}};o.a.config.productionTip=!1,o.a.use(A),v.mountStoreInstance(_),new o.a({router:g,store:_,render:function(e){return e(p)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),o=n.n(r);o.a},"8bbf":function(e,t){e.exports=Vue}});