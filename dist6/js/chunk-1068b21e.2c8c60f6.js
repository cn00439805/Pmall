(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1068b21e"],{"101e":function(e,t,i){e.exports=i.p+"img/bg2.0420283f.jpg"},"34c9":function(e,t,i){"use strict";var s=i("84b1"),n=i.n(s);n.a},"4bbe":function(e,t,i){e.exports=i.p+"img/douyifan.ec53de0a.jpg"},6511:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home-wrapper"},[i("section",{staticClass:"first",style:"background-image:url("+e.backgroundImg+")"},[i("div",{staticClass:"bg"},[i("div",{staticClass:"user-wrapper"},[i("div",{staticClass:"username",class:e.isFill?"fill":"blank",attrs:{id:"username"}}),i("p",{class:{show:e.isALlFillComplete}},[e._v("Is an associate professor of Information Systems and Information Management at School of Management, Fudan University, China.")])])]),i("div",{staticClass:"xiala",class:{show:e.isALlFillComplete},on:{click:e.xiala}},[i("i",{class:{clicked:e.isXialaClick}})])]),i("section",{ref:"Profile",staticClass:"profile"},[i("div",{staticClass:"sec-inner"},[i("div",{staticClass:"nav",style:"position:"+(e.isFixed?"fixed":"absolute")},[i("nav",e._l(e.sections,(function(t){return i("li",{key:t,on:{click:function(i){return e.jumpTo(t)}}},[e._v(e._s(t))])})),0)]),e._m(0),e._m(1)])]),i("section",{ref:"Experiences",staticClass:"experiences pink"},[e._m(2)]),i("section",{ref:"Publications",staticClass:"publications"},[e._m(3)]),i("section",{ref:"Projects",staticClass:"projects pink"},[e._m(4)]),i("section",{ref:"Teaching",staticClass:"teaching"},[e._m(5)]),i("section",{ref:"Message",staticClass:"message pink"},[e._m(6)]),i("section",{ref:"Contact",staticClass:"contact"},[e._m(7)])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"title"},[i("h2",[e._v("Profile")]),i("em",[e._v("I am an unconventional teacher")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("div",{staticClass:"cl"},[s("h3",[e._v("About me")]),s("p",[e._v("Dr. Yifan Dou is an associate professor of Information Systems and Information Management at School of Management, Fudan University, China. He received his Ph.D. in Management Science and Engineering and B.S. in Information Systems and Information Management, both from Tsinghua University. His research interests include the economics of information systems, digital platforms, and supply chain management. Dr. Yifan Dou has published in peer-reviewed academic journals and conference proceedings including Information Systems Research, European Journal of Operational Research, and proceedings of ICIS and HICSS. He also received the Meritorious Service Award from Management Science. Dr. Yifan Dou is currently a member of AIS, INFORMS, and POMS.")])]),s("div",{staticClass:"cc"},[s("img",{attrs:{src:i("4bbe")}})]),s("div",{staticClass:"cr"},[s("h3",[e._v("Details")]),s("div",{staticClass:"cr-inner"},[s("dl",[s("dt",[e._v("Name：")]),s("dd",[e._v("Yifan Dou")])]),s("dl",[s("dt",[e._v("Age：")]),s("dd",[e._v("35")])]),s("dl",[s("dt",[e._v("Hobby：")]),s("dd",[e._v("baseball")])]),s("dl",[s("dt",[e._v("E-mail：")]),s("dd",[e._v("yfdou@fudan.edu.cn")])]),s("dl",[s("dt",[e._v("Tel：")]),s("dd",[e._v("+86-21-2501-1145")])])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sec-inner"},[i("div",{staticClass:"title"},[i("h2",[e._v("Experiences")]),i("em",[e._v("An extraordinary experience")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sec-inner"},[i("div",{staticClass:"title"},[i("h2",[e._v("Publications")]),i("em",[e._v("Some interesting findings")])]),i("div",{staticClass:"content"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sec-inner"},[i("div",{staticClass:"title"},[i("h2",[e._v("Projects")]),i("em",[e._v("We have some different findings")])]),i("div",{staticClass:"content"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sec-inner"},[i("div",{staticClass:"title"},[i("h2",[e._v("Teaching")]),i("em",[e._v("We are taking these courses")])]),i("div",{staticClass:"content"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sec-inner"},[i("div",{staticClass:"title"},[i("h2",[e._v("Message")]),i("em",[e._v("I want to say something. . .")])]),i("div",{staticClass:"content"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sec-inner"},[i("div",{staticClass:"title"},[i("h2",[e._v("Contact")]),i("em",[e._v("Please contact me")])]),i("div",{staticClass:"content"})])}];i("2f62");i("df2e");var a=i("f813"),c=i.n(a),o=i("101e"),r=i.n(o),l={name:"VoiceReg",data:function(){return{isXialaClick:!1,isFixed:!1,isFill:!1,isALlFillComplete:!1,backgroundImg:null,sections:["Profile","Experiences","Publications","Projects","Teaching","Message","Contact"]}},watch:{},computed:{},beforeRouteLeave:function(e,t,i){i()},mounted:function(){var e=this,t=new Image;t.onload=function(t){e.backgroundImg=r.a;new Vivus("username",{file:e.mySvg,duration:2400},(function(t){e.isFill=!0,setTimeout((function(t){e.isALlFillComplete=!0}),1400)}))},t.src=r.a},created:function(){window.addEventListener("scroll",this.scrolling,!1),window.addEventListener("resize",this.scrolling,!1),this.mySvg=c.a},beforeDestroy:function(){window.removeEventListener("scroll",this.scrolling,!1),window.removeEventListener("resize",this.scrolling,!1)},methods:{xiala:function(){this.jumpTo("Profile"),this.isXialaClick=!0},jumpTo:function(e){var t=this.$refs[e],i=t.offsetTop;window.scrollTo({top:i,left:0,behavior:"smooth"})},scrolling:function(e){var t=document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=t>document.documentElement.clientHeight&&document.documentElement.clientWidth>1200}}},d=l,m=(i("34c9"),i("2877")),u=Object(m["a"])(d,s,n,!1,null,"6af3af54",null);t["default"]=u.exports},"84b1":function(e,t,i){},f813:function(e,t,i){e.exports=i.p+"img/YIFANDOU.e0142691.svg"}}]);
//# sourceMappingURL=chunk-1068b21e.2c8c60f6.js.map