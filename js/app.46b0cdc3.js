(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],u=0,b=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(b.length)b.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"11ba":function(t,e,a){"use strict";a("ab28")},"22ba":function(t,e,a){"use strict";a("a2ac")},"2c1b":function(t,e,a){},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("Menu")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-card",[a("v-toolbar",{attrs:{color:"#EEEEEE",height:"0px"},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"#1976D2"}}),t._l(t.title.length,(function(e,n){return a("v-tab",{key:n,attrs:{href:"#"+t.title[n].name}},[t._v(" "+t._s(t.title[n].name.toUpperCase())+" "),a("v-icon",[t._v(" "+t._s(t.title[n].icon)+" ")])],1)}))],2)]},proxy:!0}])}),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.title.length,(function(e,n){return a("v-tab-item",{key:n,attrs:{value:t.title[n].name}},[a("Header",{attrs:{title:t.title[n].description}}),a(t.title[n].name,{tag:"component"}),a("Footer")],1)})),1)],1)],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{"justify-center":""}},[a("v-card-actions",[a("p",{attrs:{id:"title"}},[t._v(t._s(t.title))])])],1)],1)},c=[],d={name:"Title",props:{title:{type:String,default:function(){return{title:null}}}},created:function(){}},u=d,b=(a("e1ab"),a("2877")),f=a("6544"),v=a.n(f),m=a("99d9"),j=a("a722"),p=Object(b["a"])(u,l,c,!1,null,"103c6cc6",null),h=p.exports;v()(p,{VCardActions:m["a"],VLayout:j["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-card-actions",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[t._v("© "+t._s((new Date).getFullYear())+" David LUN")])],1)],1)],1)},_=[],y=a("b0af"),k={},C=Object(b["a"])(k,g,_,!1,null,null,null),w=C.exports;v()(C,{VCard:y["a"],VCardActions:m["a"],VCardText:m["c"],VLayout:j["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{"justify-center":""}},[a("v-card-actions",[a("v-card",{attrs:{flat:""}},[a("div",[t._v(" "+t._s(t.intro_current)+" ")]),a("div",[t._v(" "+t._s(t.intro_passion)+" ")])])],1)],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-card-actions",[a("a",{attrs:{href:"https://github.com/lunkaleung",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-github")])],1),a("a",{attrs:{href:"https://www.linkedin.com/in/lunkaleung",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-linkedin")])],1),a("a",{attrs:{href:"https://stackoverflow.com/users/2857403/lun",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-stack-overflow")])],1),a("a",{attrs:{href:"mailto:lunkaleung@gmail.com",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-email")])],1)])],1)],1)},O=[],E={name:"About",data:function(){return{intro_current:"Hi there 👋 I am a Cloud DevOps engineer based in Hong Kong.",intro_passion:"I am very passionate about System Architecture and Big Data technologies.123"}},created:function(){}},V=E,z=(a("dec5"),a("132d")),D=Object(b["a"])(V,x,O,!1,null,"1ca91724",null),S=D.exports;v()(D,{VCard:y["a"],VCardActions:m["a"],VIcon:z["a"],VLayout:j["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("div",[a("v-timeline",{attrs:{reverse:t.reverse,dense:t.$vuetify.breakpoint.smAndDown}},[a("v-timeline-item",{key:1},[a("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v("2010 - 2013")]),a("v-card",{staticClass:"elevation-2"},[a("v-card-title",{staticClass:"headline"},[t._v(" Bachelor of Sciences in Computer Science ")]),a("v-card-subtitle",[t._v(" Hong Kong Baptist University ")]),a("v-card-text",[a("ul",[a("li",[t._v("Object Oriented Programming (Java)")]),a("li",[t._v("Database Management")]),a("li",[t._v("Data Structure and Algorithms")]),a("li",[t._v("Computer Organization")]),a("li",[t._v("Structured Programming (C)")]),a("li",[t._v("Operating System")]),a("li",[t._v("Software Engineering")]),a("li",[t._v("Design and Analysis of Algorithms")]),a("li",[t._v("Data Communication and Networking")]),a("li",[t._v("Internet and the World Wide Web")]),a("li",[t._v("Introduction to Web Intelligence")]),a("li",[t._v("Database System Implementaion")]),a("li",[t._v("Mobile Computing")]),a("li",[t._v("Interactive Computing for Visual Communication")])])])],1)],1),a("v-timeline-item",{key:2},[a("span",{attrs:{slot:"opposite"},slot:"opposite"},[t._v("2008 - 2010")]),a("v-card",{staticClass:"elevation-2"},[a("v-card-title",{staticClass:"headline"},[t._v(" Higher Diploma in Software Engineering ")]),a("v-card-subtitle",[t._v(" Hong Kong Institute of Vocational Education (Tsing Yi) ")]),a("v-card-text",[a("ul",[a("li",[t._v("Computer Organization & Operating System")]),a("li",[t._v("Database Principles & Administration")]),a("li",[t._v("Networking Technology")]),a("li",[t._v("Programming (Java)")]),a("li",[t._v("Advanced Programming (Java)")]),a("li",[t._v("GUI Programming")]),a("li",[t._v("Internet and Server Programming (PHP)")]),a("li",[t._v("Object Oriented Technology")]),a("li",[t._v("Software Development Process & Methodology")]),a("li",[t._v("E-Commerce Application Development")]),a("li",[t._v("Advanced Development & Tools")]),a("li",[t._v("Enterprise Software")]),a("li",[t._v("Mobile Computing (Java)")]),a("li",[t._v("Contemporary Topics in Software Engineering")])])])],1)],1)],1)],1)])],1)},T=[],I={data:function(){return{reverse:!0}}},P=I,B=a("7496"),M=a("8414"),W=a("1e06"),$=Object(b["a"])(P,A,T,!1,null,null,null),H=$.exports;v()($,{VApp:B["a"],VCard:y["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VTimeline:M["a"],VTimelineItem:W["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Chart",{attrs:{width:"",height:"",id:"this.chart_id",type:"polarArea",title:"Career Chart",labels:["Programming Langauage","Big Data","Cloud","Development","Data","Orange"],data:[70,60,40,25,40,10],backgroundColor:["#F5B7B1","#D2B4DE","#AED6F1","#ABEBC6","#FAD7A0","#EDBB99"],"border-color":"rgba(0, 0, 0, 0.5)","border-width":"2",fill:"false"}})},F=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:this.radar_style},[a("canvas",{attrs:{id:t.id}}),t.is_showed?a("div",t._l(this.items[this.label],(function(e,n){return a("div",{key:n},[a("v-chip",{staticClass:"ma-2",attrs:{color:t.backgroundColor[t.background_color_index]}},[t._v(" "+t._s(e)+" ")])],1)})),0):t._e()])},U=[],N=(a("cb29"),a("30ef")),K=a.n(N),q={name:"Chart",data:function(){return{is_showed:!1,background_color_index:-1,label:"",items:{"Programming Langauage":{a:"11",sdsd:"34"},"Big Data":{b:"123"}}}},computed:{style:function(){var t=this.loggedIn?"100%":"400px",e=this.loggedIn?"1200px":"400px";return{height:e,width:t}},radar_style:function(){var t="auto",e="90%",a="flex";return{margin:t,width:e,display:a}}},created:function(){},props:["id","width","height","type","title","labels","data","fill","backgroundColor","borderColor","borderWidth"],methods:{drawChart:function(){var t=document.getElementById(this.id),e=document.getElementById(this.id).getContext("2d"),a=new K.a(e,{type:this.type?this.type:"bar",data:{labels:this.labels,datasets:[{label:this.title,data:this.data,fill:this.fill,backgroundColor:this.backgroundColor,borderColor:this.borderColor,borderWidth:this.borderWidth?this.borderWidth:1}]},options:{responsive:!0,legend:{display:!0,labels:{boxWidth:20,boxHeight:2}},elements:{line:{tension:0,borderWidth:3}},tooltips:{callbacks:{title:function(t,e){return e.labels[t[0].index]}}}}});return{radar_chart:t,chart:a}},clickChart:function(t,e){var a=this;t.onclick=function(t){var n=e.getElementsAtEvent(t);if(n[0]){var r=n[0]["_chart"].config.data,s=n[0]["_index"],i=r.labels[s];a.label=i,a.background_color_index=s,this.style.marginLeft="-25%",a.is_showed=!0}}}},mounted:function(){var t=this.drawChart();this.clickChart(t["radar_chart"],t["chart"])}},Y=q,G=(a("22ba"),a("cc20")),Q=Object(b["a"])(Y,J,U,!1,null,"57033557",null),R=Q.exports;v()(Q,{VChip:G["a"]});var X={components:{Chart:R},data:function(){return{chart_id:"chart"}},methods:{select:function(t){console.log(t)}}},Z=X,tt=Object(b["a"])(Z,L,F,!1,null,"6d24dd35",null),et=tt.exports,at={components:{Header:h,Footer:w,About:S,Education:H,Skill:et},name:"Menu",data:function(){return{tab:"about",title:[{name:"about",icon:"mdi-badge-account-horizontal-outline",description:"About Me"},{name:"education",icon:"mdi-school-outline",description:"Education Qualification"},{name:"skill",icon:"mdi-laptop",description:"Skill Set"}]}},created:function(){}},nt=at,rt=(a("11ba"),a("71a3")),st=a("c671"),it=a("fe57"),ot=a("aac8"),lt=a("9a96"),ct=a("71d9"),dt=Object(b["a"])(nt,i,o,!1,null,"93a50e88",null),ut=dt.exports;v()(dt,{VApp:B["a"],VCard:y["a"],VIcon:z["a"],VTab:rt["a"],VTabItem:st["a"],VTabs:it["a"],VTabsItems:ot["a"],VTabsSlider:lt["a"],VToolbar:ct["a"]});var bt={name:"App",components:{Menu:ut},data:function(){return{}}},ft=bt,vt=a("f6c4"),mt=Object(b["a"])(ft,r,s,!1,null,null,null),jt=mt.exports;v()(mt,{VApp:B["a"],VMain:vt["a"]});var pt=a("f309");n["a"].use(pt["a"]);var ht=new pt["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:ht,render:function(t){return t(jt)}}).$mount("#app")},a2ac:function(t,e,a){},ab28:function(t,e,a){},dec5:function(t,e,a){"use strict";a("2c1b")},e1ab:function(t,e,a){"use strict";a("fc83")},fc83:function(t,e,a){}});
//# sourceMappingURL=app.46b0cdc3.js.map