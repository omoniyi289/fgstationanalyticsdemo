webpackJsonp([70],{1472:function(t,e,s){var n=s(1473);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(5)("ccc4ff12",n,!0,{})},1473:function(t,e,s){(t.exports=s(2)(!1)).push([t.i,".bg-info-card .btn-info,.card-body .form-control{-webkit-transition:initial;transition:initial}",""])},1474:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(3);const n="mini-toastr",i="error",o="warn",a="success",c="info",r=n,l=`${n}__notification`,d=`${n}-notification__title`,u=`${n}-notification__icon`,p=`${n}-notification__message`,f=`-${i}`,m=`-${o}`,g=`-${a}`,y=`-${c}`;function v(t){const e=function t(e,s,n){s=s||{},n=n||"";for(let i in e)if(e.hasOwnProperty(i)){const o=e[i];o&&"object"==typeof o&&!(o instanceof Date||o instanceof RegExp)?t(o,s,n+i+" "):s[n]&&"object"==typeof s[n]?s[n][i]=o:(s[n]={},s[n][i]=o)}return s}(t);let s=JSON.stringify(e,null,2);return s=(s=s.replace(/"([^"]*)": {/g,"$1 {").replace(/"([^"]*)"/g,"$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g,"$1: $2;").replace(/},/g,"}\n").replace(/ &([.:])/g,"$1")).substr(1,s.lastIndexOf("}")-1)}const h={types:{ERROR:i,WARN:o,SUCCESS:a,INFO:c},animation:function t(e,s){e.style.opacity&&e.style.opacity>.05?e.style.opacity=e.style.opacity-.05:e.style.opacity&&e.style.opacity<=.1?e.parentNode&&(e.parentNode.removeChild(e),s&&s()):e.style.opacity=.9,setTimeout(()=>t.apply(this,[e,s]),1e3/30)},timeout:3e3,icons:{},appendTarget:document.body,node:b(),style:{[`.${r}`]:{position:"fixed","z-index":99999,right:"12px",top:"12px"},[`.${l}`]:{cursor:"pointer",padding:"12px 18px",margin:"0 0 6px 0","background-color":"#000",opacity:.8,color:"#fff","border-radius":"3px","box-shadow":"#3c3b3b 0 0 12px",width:"300px",[`&.${f}`]:{"background-color":"#D5122B"},[`&.${m}`]:{"background-color":"#F5AA1E"},[`&.${g}`]:{"background-color":"#7AC13E"},[`&.${y}`]:{"background-color":"#4196E1"},"&:hover":{opacity:1,"box-shadow":"#000 0 0 12px"}},[`.${d}`]:{"font-weight":"500"},[`.${p}`]:{display:"inline-block","vertical-align":"middle",width:"240px",padding:"0 12px"}}};function b(t="div"){return document.createElement(t)}function w(t,e,s){const n=b();n.className=s,n.appendChild(document.createTextNode(e)),t.appendChild(n)}var x={config:h,isInitialised:!1,showMessage(t,e,s,n,r,u){const v={};Object.assign(v,this.config),Object.assign(v,u);const h=b();return h.className=`${l} ${function(t){return t===a?g:t===o?m:t===i?f:t===c?y:""}(s)}`,h.onclick=function(){v.animation(h,null)},e&&w(h,e,d),v.icons[s]&&function(t,e,s){const n=b(s.icons[e].nodeType),i=s.icons[e].attrs;for(const t in i)i.hasOwnProperty(t)&&n.setAttribute(t,i[t]);t.appendChild(n)}(h,s,v),t&&w(h,t,p),v.node.insertBefore(h,v.node.firstChild),setTimeout(()=>v.animation(h,r),n||v.timeout),r&&r(),this},init(t){const e={};return Object.assign(e,h),Object.assign(e,t),this.config=e,function(t){let e=document.head||document.getElementsByTagName("head")[0],s=b("style");s.id=`${n}-styles`,s.type="text/css",s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t)),e.appendChild(s)}(v(e.style)),e.node.id=r,e.node.className=r,e.appendTarget.appendChild(e.node),Object.keys(e.types).forEach(t=>{this[e.types[t]]=function(s,n,i,o,a){return this.showMessage(s,n,e.types[t],i,o,a),this}.bind(this)}),this.isInitialised=!0,this},setIcon(t,e="i",s=[]){s.class=s.class?s.class+" "+u:u,this.config.icons[t]={nodeType:e,attrs:s}}};x.init();e.default={name:"notification",data:function(){return{switchVal:!0,types:["error","warn","info","success"],title:"Your title",msg:"Your message",type:"error"}},created:function(){x.setIcon("error","i",{class:"fa fa-times"}),x.setIcon("warn","i",{class:"fa fa-exclamation-triangle"}),x.setIcon("info","i",{class:"fa fa-info-circle"}),x.setIcon("success","i",{class:"fa fa-arrow-circle-o-down"}),this.successMsg()},methods:{successMsg:function(){x.success("Some success msg","Success title")},infoMsg:function(){x.info("Some info msg","Note title")},warnMsg:function(){x.warn("Some waqrning msg","Warning")},errorMsg:function(){x.error("Some error msg","Error")},dynamicMsg:function(){x[this.type](this.msg,this.title)}}}},1475:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 col-sm-12"},[s("b-card",{staticClass:"bg-primary-card",attrs:{header:"Predefined Messages","header-tag":"h4"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-sm-6"},[s("button",{staticClass:"alert btn-success mt-sm-1",attrs:{type:"button"},on:{click:function(e){t.successMsg()}}},[s("strong",[t._v("Success!")]),t._v(" Your message has been sent successfully.\n                        ")])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-sm-6"},[s("button",{staticClass:"alert btn-info mt-sm-1 text-white",attrs:{type:"button"},on:{click:function(e){t.infoMsg()}}},[s("strong",[t._v("Note!")]),t._v(" Please read the comments carefully.\n                        ")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 col-sm-6"},[s("button",{staticClass:"alert btn-warning  mt-sm-1 text-white",attrs:{type:"button"},on:{click:function(e){t.warnMsg()}}},[s("strong",[t._v("Warning!")]),t._v(" There was a problem with your network connection.\n                        ")])]),t._v(" "),s("div",{staticClass:"col-lg-6 col-sm-6"},[s("button",{staticClass:"text-white alert btn-danger mt-sm-1",attrs:{type:"button"},on:{click:function(e){t.errorMsg()}}},[s("strong",[t._v("Error!")]),t._v(" A problem has been occurred while submitting your data.\n                        ")])])])])],1)]),t._v(" "),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-lg-12 col-12"},[s("b-card",{staticClass:"bg-info-card",attrs:{header:"Dynamic Messages","header-tag":"h4"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-7 offset-lg-3 col-12"},[s("label",{attrs:{for:"title"}},[t._v("Title:")]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),s("label",{attrs:{for:"msg"}},[t._v("Message:")]),t._v(" "),s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"form-control resize_vertical",attrs:{id:"msg",rows:"4"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})]),t._v(" "),s("div",t._l(t.types,function(e){return s("div",[s("label",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{id:"radioStacked1",name:"type",type:"radio"},domProps:{value:e,checked:t._q(t.type,e)},on:{change:function(s){t.type=e}}}),t._v(" "),s("span",{domProps:{textContent:t._s(e)}})])])})),t._v(" "),s("div",{attrs:{CLASS:"text-center"}},[s("button",{staticClass:"btn btn-info mt-3 text-white",attrs:{type:"button"},on:{click:function(e){t.dynamicMsg()}}},[t._v("Submit")])])])])])],1)])])},staticRenderFns:[]}},1749:function(t,e,s){var n=s(18)(s(1474),s(1475),!1,function(t){s(1472)},null,null);t.exports=n.exports}});