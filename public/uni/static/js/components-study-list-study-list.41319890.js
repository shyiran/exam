(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-study-list-study-list"],{"0acf":function(t,i,a){"use strict";var e=a("524a"),n=a.n(e);n.a},"48af":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[t._l(t.list,(function(i,e){return[a("v-uni-view",{staticClass:"study-li",attrs:{"data-index":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goH5.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"study-li-img",attrs:{src:i.thumb}}),i.url_a||"1"==t.listType?t._e():a("v-uni-image",{staticClass:"study-li-play",attrs:{src:"/static/images/play.png"}}),a("v-uni-view",{staticClass:"study-li-des"},[t._v(t._s(i.title))]),a("v-uni-view",{staticClass:"study-li-date"},[t._v(t._s(i.addtime))])],1)]}))],2)},s=[]},"524a":function(t,i,a){var e=a("7390");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("0b80905a",e,!0,{sourceMap:!1,shadowMode:!1})},7262:function(t,i,a){"use strict";a.r(i);var e=a("48af"),n=a("c7c7");for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("0acf");var u,l=a("f0c5"),r=Object(l["a"])(n["default"],e["b"],e["c"],!1,null,"0aed2318",null,!1,e["a"],u);i["default"]=r.exports},7390:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".study-li-play[data-v-0aed2318]{position:absolute;width:%?68?%;height:%?68?%;right:40%;top:21%}.study-li-date[data-v-0aed2318]{font-size:%?28?%;color:#969696}.study-li-des[data-v-0aed2318]{letter-spacing:%?1?%;width:100%;-webkit-line-clamp:2;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;height:%?92?%;overflow:hidden;font-size:%?32?%}.study-li-img[data-v-0aed2318]{width:100%;height:%?230?%}.study-li[data-v-0aed2318]{width:48.5%;float:left;margin-top:%?20?%;position:relative}.study-li[data-v-0aed2318]:nth-of-type(2n){margin-left:3%}",""]),t.exports=i},8097:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={props:{list:{type:Array,value:[]},listType:{type:String,value:""}},data:function(){return{}},methods:{goH5:function(t){var i=t.currentTarget.dataset.index;this.list[i].url_a?uni.navigateTo({url:"/pages/webview/index?url="+this.list[i].url_a}):"1"==this.listType?uni.navigateTo({url:"/pages/danghistory/index?id="+this.list[i].id}):uni.navigateTo({url:"/pages/reading_list/index?id="+this.list[i].id})}}};i.default=e},c7c7:function(t,i,a){"use strict";a.r(i);var e=a("8097"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a}}]);