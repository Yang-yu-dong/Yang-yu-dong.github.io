webpackJsonp([0],{"1PeA":function(t,e){},G2EG:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-bar"},[n("div",{staticClass:"bar-item"},[n("div",{staticClass:"bar-img"}),t._v(" "),n("div",{staticClass:"bar-content"},[n("h1",[t._v("学历")]),t._v(" "),n("p",[t._v("本科")])])]),t._v(" "),n("div",{staticClass:"bar-item"},[n("div",{staticClass:"bar-img"}),t._v(" "),n("div",{staticClass:"bar-content"},[n("h1",[t._v("年龄")]),t._v(" "),n("p",[t._v("24")])])]),t._v(" "),n("div",{staticClass:"bar-item"},[n("div",{staticClass:"bar-img"}),t._v(" "),n("div",{staticClass:"bar-content"},[n("h1",[t._v("坐标")]),t._v(" "),n("p",[t._v("深圳")])])]),t._v(" "),n("div",{staticClass:"bar-item"},[n("div",{staticClass:"bar-img"}),t._v(" "),n("div",{staticClass:"bar-content"},[n("h1",[t._v("状态")]),t._v(" "),n("p",[t._v("在职")])])])])}]};var a=n("VU/8")({name:"tag"},i,!1,function(t){n("T2p4")},null,null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"self-text"},[n("p",[t._v("2016年毕业于吉林大学珠海学院")]),t._v(" "),n("p",[t._v("工作期间一直从事于Web开发方面，包括前后端")]),t._v(" "),n("p",[t._v("JS的日新月异让我一直保持前进的状态")]),t._v(" "),n("p",[t._v("同事寻找后端的各种解决方案使我受益颇多")]),t._v(" "),n("p",[t._v("学习本无底，前进莫徬徨")])])}]};var o=n("VU/8")({name:"vtext"},c,!1,function(t){n("1PeA")},null,null).exports,r={name:"tech",props:{tecName:{type:Object,default:function(){return{}}}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tec"},[n("div",{staticClass:"tec-border"}),t._v(" "),n("div",{staticClass:"tec-name"},[t._v(t._s(t.tecName.name))]),t._v(" "),t._l(t.tecName.list,function(e,s){return n("span",{staticClass:"tec-item",style:"transform-origin:center 150px;transform:translateX(-50%) rotate("+360/t.tecName.list.length*s+"deg)"},[n("span",{class:"p-icon"+s},[t._v(t._s(e))])])})],2)},staticRenderFns:[]};var v={addHandler:function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},getEvent:function(t){return t||window.event},getTarget:function(){var t=this.getEvent();return t.target||t.srcElement},preventDefault:function(){var t=this.getEvent();t.preventDefault?t.preventDefault():t.returnValue=!0},stopPropagation:function(){var t=this.getEvent();t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},pageX:function(){var t=this.getEvent();return t.pageX?t.pageX:t.clientX+(document.body.scrollLeft||document.documentElement.scrollLeft)},pageY:function(){var t=this.getEvent();return t.pageY?t.pageY:t.clientY+(document.body.scrollTop||document.documentElement.scrollTop)},removeHandler:function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}},p={name:"App",data:function(){return{exShow:0,show:0,php:{name:"PHP",list:["Laravel","Mysql","Redis","Apache","Shell","ThinkPHP"]},js:{name:"前端",list:["Vue","Git","Scss","Webpack","jQuery","AJAX"]},experience:[{company:"重庆速率科技有限公司",time:"2016年1月份-2016年6月份",job:"前端开发",content:["主要负责网站首页制作，banner图片制作","技术栈：主要Jquery + Bootstrp",'代表作：<a href="http://www.0856r.com/">速率科技官网</a>',"两年前的作品，不要见怪"]},{company:"重庆小薇金服有限公司",time:"2016年6月份-2016年11月份",job:"PHP|前端开发",content:["主要是Edusoho的系统二次开发","当时遇到了很多的难点的，刚从学校毕业，没用过的Symfony框架，当时自己对前端require也是懵懵懂懂","边学边用还是完成的包括积分制，批量操作用户等功能","现已经停止运作"]},{company:"深圳烁途科技有限公司",time:"2016年11月份-至今",job:"全栈工程师",content:['代表作：<a href="https://www.exwayboard.com/index.php/Ch">烁途科技官网</a>  ',"技术栈：前期ThinkPHP+jQuery,后期：vue全家桶+lamp+laravel+redis","之所以选择换技术栈，因为前期只是单纯的展示型网站，后期还设计了商城，社区功能，为了给自己一些挑战，拓展下自己技术线","主要任务：基础功能的开发，网站后台采用element-ui+vue","其它任务：开发APP接口"]}],startY:0,endY:0,startTime:0,going:!1}},created:function(){var t=this;setTimeout(function(){t.show=1},300),window.onresize=function(e){e=e||window.event,document.body.clientWidth>=768?(document.body.scrollTop=0,document.documentElement.scrollTop=0):t.show=1}},mounted:function(){var t=this;this.$nextTick(function(){v.addHandler(window,"mousewheel",function(e){console.log("111"),(e=v.getEvent(e)).wheelDelta>0?t.__swipperUp():t.__swipperDown()}),v.addHandler(window,"DOMMouseScroll",function(e){(e=v.getEvent(e)).detail<0?t.__swipperUp():t.__swipperDown()})})},methods:{__swipperUp:function(){var t=this;document.body.clientWidth>=768&&this.show>1&&!this.going&&(this.show--,this.going=!0,setTimeout(function(){t.going=!1},1e3))},__swipperDown:function(){var t=this;if(document.body.clientWidth>=768){var e=document.getElementById("app").children.length;this.show<e&&!this.going&&(this.show++,this.going=!0,setTimeout(function(){t.going=!1},1e3))}},touchmove:function(t){if(document.body.clientWidth>=768){var e=t.changedTouches[0].clientY-this.startY;this.$refs.app.style.marginTop=.8*e+"px"}},touchstart:function(t){this.startY=t.touches[0].clientY,this.startTime=t.timeStamp},touchend:function(t){var e=t.changedTouches[0].clientY-this.startY,n=t.timeStamp-this.startTime,s=parseInt(this.$refs.app.style.marginTop);n<1e3?e<0?this.__swipperDown():e>0&&this.__swipperUp():document.body.clientHeight/2<Math.abs(s)&&(s<0?this.__swipperDown():s>0&&this.__swipperUp());this.$refs.app.style.marginTop="0px"},select:function(t){this.exShow=t}},components:{VTag:a,VText:o,VTech:n("VU/8")(r,l,!1,function(t){n("jf3O")},null,null).exports}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"app",style:"top:"+-100*(t.show-1)+"vh",attrs:{id:"app"},on:{touchmove:function(e){t.touchmove(e)},touchstart:function(e){t.touchstart(e)},touchend:function(e){t.touchend(e)}}},[s("section",{staticClass:"p-self section"},[s("transition",{attrs:{name:"section1"}},[s("article",{class:{"p-self-image":1==t.show}},[s("header",[s("img",{attrs:{src:n("uNKJ"),width:"200"}})]),t._v(" "),s("hr"),t._v(" "),s("section",[s("h1",[t._v("我叫杨煜东")]),t._v(" "),s("h1",[t._v("一个PHP程序员，会点前端")]),t._v(" "),s("h1",{staticClass:"p-email"},[t._v("\n                        youngyudong@foxmail.com\n                    ")]),t._v(" "),s("p",{staticClass:"github"},[s("a",{attrs:{href:"https://github.com/Yang-yu-dong",target:"_blank"}})])])])])],1),t._v(" "),s("section",{staticClass:"p-introduce section"},[s("div",{staticClass:"introduct-wampper"},[t._m(0),t._v(" "),s("v-tag"),t._v(" "),s("v-text")],1)]),t._v(" "),s("section",{staticClass:"p-experience section"},[s("div",{staticClass:"experience-wampper"},[t._m(1),t._v(" "),s("div",{staticClass:"experience-box"},[s("v-tech",{attrs:{tecName:t.php}}),t._v(" "),s("v-tech",{attrs:{tecName:t.js}})],1),t._v(" "),t._m(2)])]),t._v(" "),s("section",{staticClass:"p-comment section"},[s("div",{staticClass:"comment-wrampper"},[t._m(3),t._v(" "),s("div",{staticClass:"comment-box"},t._l(t.experience,function(e,n){return s("div",{staticClass:"comment-item",class:{"z-index":t.exShow===n}},[s("h3",[t._v(t._s(e.company))]),t._v(" "),s("p",{staticClass:"p-time"},[t._v(t._s(e.time))]),t._v(" "),s("p",{staticClass:"p-job"},[t._v(t._s(e.job))]),t._v(" "),s("ul",t._l(e.content,function(e){return s("li",{domProps:{innerHTML:t._s(e)}})}))])})),t._v(" "),s("nav",[s("ul",[s("li",{class:{selected:0===t.exShow},on:{click:function(e){t.select(0)}}}),t._v(" "),s("li",{class:{selected:1===t.exShow},on:{click:function(e){t.select(1)}}}),t._v(" "),s("li",{class:{selected:2===t.exShow},on:{click:function(e){t.select(2)}}})])]),t._v(" "),s("div",{staticClass:"comment-word"},[t._v("\n                自己的成长主要集中在烁途科技这段时间，自学了Vue、Laravel、webpack、npm等，由于工作大多时候是一个人，所以技术选型比较自由，想给自己更多的锻炼，喜欢去尝试最新的技术，我觉得我还能一直保持下去\n            ")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("关于我")]),t._v(" "),n("p",[t._v("(ABOUT ME)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("技能篇")]),t._v(" "),n("p",[t._v("(SKILL)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"experience-introduce"},[e("p",[this._v("\n                    前端确实覆盖十分广泛，自己主要的方向是Js原生语法;\n                    Jquery,Bootstrp在实习的时候运用得比较多Bootstrp;\n                    现在主要是Vue + vue-router + vuex;\n                    后端PHP框架用过ThinkPHP在一个基于Symfony的系统（Edusoho）进行过二次开发;\n                    Nginx也有接触数据库Mysql，Redis\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("工作经验")]),t._v(" "),n("p",[t._v("(EXPERIENCE)")])])}]};var h=n("VU/8")(p,u,!1,function(t){n("G2EG")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:h},template:"<App/>"})},T2p4:function(t,e){},jf3O:function(t,e){},uNKJ:function(t,e,n){t.exports=n.p+"static/img/psb.6cfa2cd.jpg"}},["NHnr"]);
//# sourceMappingURL=app.f4aba9556859da07d3ca.js.map