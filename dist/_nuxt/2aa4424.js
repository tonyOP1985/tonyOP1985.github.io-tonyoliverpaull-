(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10,14],{242:function(t,e,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("0a428108",content,!1,{sourceMap:!1})},243:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("17e71064",content,!1,{sourceMap:!1})},247:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("0a0d0fe5",content,!1,{sourceMap:!1})},251:function(t,e,n){"use strict";n(242)},252:function(t,e,n){var o=n(39)(!1);o.push([t.i,'.btn[data-v-020aa5e6]{display:block;font-family:"Montserrat",sans-serif;width:160px;margin:10px 0;padding:10px 0;background-color:#30c9e8;color:#fff;text-decoration:none;text-align:center;font-size:1rem;cursor:pointer;letter-spacing:1px;transition:all .2s ease}.btn[data-v-020aa5e6]:hover{background-color:#02abd6}',""]),t.exports=o},253:function(t,e,n){"use strict";n(243)},254:function(t,e,n){var o=n(39)(!1);o.push([t.i,'ul[data-v-24c5bae4]{list-style:none}ul li[data-v-24c5bae4]{padding-left:20px}ul li[data-v-24c5bae4]:before{content:"\\2014";position:absolute;margin-left:-20px}',""]),t.exports=o},261:function(t,e,n){"use strict";n.r(e);var o={props:{btnText:{type:String,required:!0},link:{type:String,required:!0}}},r=(n(251),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"btn",attrs:{href:t.link,target:"_blank"}},[t._v("\n  "+t._s(t.btnText)+"\n")])}),[],!1,null,"020aa5e6",null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var o={props:{technologies:{type:Array,required:!0}}},r=(n(253),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Technologies Used")]),t._v(" "),n("ul",t._l(t.technologies,(function(e,o){return n("li",{key:o},[t._v("\n      "+t._s(e)+"\n    ")])})),0)])}),[],!1,null,"24c5bae4",null);e.default=component.exports},267:function(t,e,n){"use strict";n(247)},268:function(t,e,n){var o=n(39)(!1);o.push([t.i,".project-info[data-v-69a3c44a]{width:40%}@media (max-width:700px){.project-info[data-v-69a3c44a]{width:100%}}",""]),t.exports=o},277:function(t,e,n){"use strict";n.r(e);var o=n(261),r=n(262),c={components:{Link:o.default,TheTechnologiesList:r.default},props:{project:{type:Object,required:!0}}},l=(n(267),n(20)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-info"},[n("p",[t._v(t._s(t.project.text))]),t._v(" "),t.project.code?n("Link",{attrs:{link:t.project.code,btnText:"View Code"}}):t._e(),t._v(" "),t.project.projectLink?n("Link",{attrs:{link:t.project.projectLink,btnText:"View Project"}}):t._e(),t._v(" "),n("TheTechnologiesList",{attrs:{technologies:t.project.technology}})],1)}),[],!1,null,"69a3c44a",null);e.default=component.exports}}]);