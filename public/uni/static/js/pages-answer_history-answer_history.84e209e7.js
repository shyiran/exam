(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-answer_history-answer_history"],{3725:function(t,a,n){var i=n("728e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("3a83e92e",i,!0,{sourceMap:!1,shadowMode:!1})},"3b1d":function(t,a,n){"use strict";var i=n("3725"),e=n.n(i);e.a},4313:function(t,a,n){"use strict";n.r(a);var i=n("8d65"),e=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},"728e":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".answer-wrap[data-v-4120a776]{width:94%;margin:0 auto}.answer-item[data-v-4120a776]{height:%?140?%;padding-top:%?20?%;border-bottom:%?2?% solid #f0f0f0}.answer-item-one[data-v-4120a776]{font-size:%?32?%;position:relative}.answer-item-two[data-v-4120a776]{margin-top:%?20?%;font-size:%?24?%;color:#969696}.answer-item-one-hms[data-v-4120a776]{display:inline-block;margin-left:%?70?%}.answer-item-one-score[data-v-4120a776]{display:inline-block;color:#ac060a;width:32%;text-align:right;position:absolute;right:0}.answer-duration-value[data-v-4120a776]{margin-left:%?20?%}.answer-duration-integral-title[data-v-4120a776]{margin-left:%?60?%}.answer-duration-integral[data-v-4120a776]{margin-left:%?20?%}.kong-wrap[data-v-4120a776]{position:absolute;top:40%;left:50%;-webkit-transform:translate(-40%,-50%);transform:translate(-40%,-50%);text-align:center}.kong-wrap .xiangzi[data-v-4120a776]{display:block;width:%?150?%;height:%?150?%}",""]),t.exports=a},7358:function(t,a,n){"use strict";var i;n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return s})),n.d(a,"a",(function(){return i}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"answer-wrap"},[t._l(t.hisList,(function(a,n){return t.hisList.length>0?i("v-uni-view",{key:n,staticClass:"answer-item"},[i("v-uni-view",{staticClass:"answer-item-one"},[i("v-uni-text",{staticClass:"answer-item-one-ymd"},[t._v(t._s(a.begin_ymd))]),i("v-uni-text",{staticClass:"answer-item-one-hms"},[t._v(t._s(a.begin_hms)+"答题")]),i("v-uni-text",{staticClass:"answer-item-one-score"},[t._v("积分:  "+t._s(a.res_integral)+"分")])],1),i("v-uni-view",{staticClass:"answer-item-two"},[i("v-uni-text",{staticClass:"answer-duration"},[t._v("答题用时:")]),i("v-uni-text",{staticClass:"answer-duration-value"},[t._v(t._s(a.duration))]),i("v-uni-text",{staticClass:"answer-duration-integral-title"},[t._v("得分:")]),i("v-uni-text",{staticClass:"answer-duration-integral"},[t._v(t._s(a.score)+"分")])],1)],1):t._e()})),1==t.isKong?i("v-uni-view",{staticClass:"kong-wrap"},[i("v-uni-image",{staticClass:"xiangzi",attrs:{src:n("754d"),mode:"aspectFill"}}),i("v-uni-text",{staticClass:"font_24 color_96"},[t._v("暂无记录")])],1):t._e()],2)],1)},s=[]},"754d":function(t,a,n){t.exports=n.p+"static/img/xiangzi.33acb457.png"},"8d65":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=getApp(),e={data:function(){return{hisList:[],isKong:!1}},onReady:function(){this.getAnswerHistory()},methods:{getAnswerHistory:function(){var t=this;uni.request({url:i.globalData.site_url+"/appapi/?s=Tests.GetAnswerHistory",method:"GET",data:{uid:i.globalData.userInfo.id,token:i.globalData.userInfo.token},success:function(a){0==a.data.data.code||(uni.showToast({icon:"none",title:a.data.data.msg}),700!=a.data.data.code)?(t.hisList=a.data.data.info[0],a.data.data.info[0].length<=0&&(t.isKong=!0)):uni.navigateTo({url:"../login/index"})},fail:function(){}})}}};a.default=e},acad:function(t,a,n){"use strict";n.r(a);var i=n("7358"),e=n("4313");for(var s in e)"default"!==s&&function(t){n.d(a,t,(function(){return e[t]}))}(s);n("3b1d");var r,o=n("f0c5"),u=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"4120a776",null,!1,i["a"],r);a["default"]=u.exports}}]);