(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1837:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},3246:function(n,t,e){"use strict";e.r(t);var i=e("f6cb"),o=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=o.a},"328c":function(n,t,e){"use strict";var i=e("7621"),o=e.n(i);o.a},5669:function(n,t,e){"use strict";e.r(t);var i=e("1837"),o=e("3246");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("328c");var r=e("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},7621:function(n,t,e){},dea7:function(n,t,e){"use strict";(function(n){e("8181"),e("921b");i(e("66fd"));var t=i(e("5669"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},f6cb:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(e("a34a")),o=e("cc5c");function u(n){return n&&n.__esModule?n:{default:n}}function r(n){return s(n)||c(n)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function s(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}function d(n,t,e,i,o,u,r){try{var a=n[u](r),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(i,o)}function f(n){return function(){var t=this,e=arguments;return new Promise(function(i,o){var u=n.apply(t,e);function r(n){d(u,i,o,r,a,"next",n)}function a(n){d(u,i,o,r,a,"throw",n)}r(void 0)})}}var l=function(){return e.e("components/uni-ui/uni-badge/uni-badge").then(e.bind(null,"8772"))},p=function(){return e.e("components/uni-ui/uni-grid/uni-grid").then(e.bind(null,"898a"))},g=function(){return e.e("components/uni-ui/uni-grid-item/uni-grid-item").then(e.bind(null,"5898"))},h=function(){return e.e("components/uni-ui/uni-load-more/uni-load-more").then(e.bind(null,"c9bd"))},v=function(){return e.e("components/goodlist/goodlist").then(e.bind(null,"9e06"))},m={data:function(){return{swipers:[],goods:[],pageindex:1,flag:!1,navs:[{icons:"iconfont icon-ziyuan",title:"极客超市",path:"/pages/goods/goods"},{icons:"iconfont icon-tupian",title:"社区图片",path:"/pages/pics/pics"},{icons:"iconfont icon-guanyuwomen",title:"联系我们",path:"/pages/contact/contact"},{icons:"iconfont icon-shipin",title:"学习视频",path:"/pages/videos/videos"}]}},onLoad:function(){this.getSwipers(),this.getProducts()},methods:{getSwipers:function(){var n=f(i.default.mark(function n(){var t;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.myRequestGet)("/api/getlunbo");case 2:t=n.sent,0===t.status&&(this.swipers=t.message);case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),getProducts:function(){var n=f(i.default.mark(function n(){var t;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.myRequestGet)("/api/getgoods",{pageindex:this.pageindex});case 2:t=n.sent,0===t.status&&(this.goods=[].concat(r(this.goods),r(t.message)));case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),goSuperMarket:function(t){n.navigateTo({url:t.path})}},onReachBottom:function(){this.pageindex++,this.pageindex<=2?this.getProducts():this.flag=!0},components:{uniBadge:l,uniGrid:p,uniGridItem:g,uniLoadMore:h,goodlist:v}};t.default=m}).call(this,e("6e42")["default"])}},[["dea7","common/runtime","common/vendor"]]]);