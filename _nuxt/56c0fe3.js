(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,5,6],{261:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("68e5667a",content,!0,{sourceMap:!1})},268:function(t,e,n){"use strict";n.r(e);var r=n(45),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"feather feather-monitor",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("rect",{attrs:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}}),e("line",{attrs:{x1:"8",y1:"21",x2:"16",y2:"21"}}),e("line",{attrs:{x1:"12",y1:"17",x2:"12",y2:"21"}})])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r=n(45),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"feather feather-sun",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"5"}}),e("line",{attrs:{x1:"12",y1:"1",x2:"12",y2:"3"}}),e("line",{attrs:{x1:"12",y1:"21",x2:"12",y2:"23"}}),e("line",{attrs:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}}),e("line",{attrs:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}}),e("line",{attrs:{x1:"1",y1:"12",x2:"3",y2:"12"}}),e("line",{attrs:{x1:"21",y1:"12",x2:"23",y2:"12"}}),e("line",{attrs:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}}),e("line",{attrs:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}})])}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);var r=n(45),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"feather feather-moon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}})])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n(261)},274:function(t,e,n){var r=n(94)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nul[data-v-fbad70d0]{\n  list-style:none;\n  padding:0;\n  margin:0\n}\nul li[data-v-fbad70d0]{\n  display:inline-block;\n  padding:5px\n}\np[data-v-fbad70d0]{\n  margin:0;\n  padding-top:5px;\n  padding-bottom:20px\n}\n.feather[data-v-fbad70d0]{\n  position:relative;\n  top:0;\n  cursor:pointer;\n  padding:7px;\n  background-color:var(--bg-secondary);\n  border:2px solid var(--border-color);\n  margin:0;\n  border-radius:5px;\n  transition:all .1s ease\n}\n.feather[data-v-fbad70d0]:hover{\n  top:-3px\n}\n.feather.preferred[data-v-fbad70d0]{\n  border-color:var(--color-primary);\n  top:-3px\n}\n.feather.selected[data-v-fbad70d0]{\n  color:var(--color-primary)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},276:function(t,e,n){"use strict";n.r(e);var r=n(268),o=n(269),l=n(270),c={components:{IconSystem:r.default,IconLight:o.default,IconDark:l.default},data:function(){return{colors:["system","light","dark"]}},methods:{setMode:function(t){this.$colorMode.preference=t},getClasses:function(t){return this.$colorMode.unknown?{}:{preferred:t===this.$colorMode.preference,selected:t===this.$colorMode.value}}}},d=(n(273),n(45)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.colors,(function(e,i){return n("li",{key:i},[n("button",{class:t.getClasses(e),on:{click:function(n){return t.setMode(e)}}},[n("icon-"+e,{tag:"component"})],1)])})),0)])}),[],!1,null,"fbad70d0",null);e.default=component.exports}}]);