(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["intercom-app"],{"./src/udemy/js/intercom/app.js":function(e,t,a){"use strict";a.r(t);var n=a("./node_modules/mobx/lib/mobx.module.js");var r=a("./src/udemy/js/eu-cookie-message/eu-cookie-message.mobx-store.ts");var c=a("./src/udemy/js/utils/get-config-data.js");var s=a("./src/udemy/js/utils/get-request-data.js");var i=a("./src/udemy/js/utils/ud-me.js");var o=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var n=a.Intercom;if(typeof n==="function"){n("reattach_activator");n("update",t)}else{var r=function e(){e.c(arguments)};r.q=[];r.c=function(e){r.q.push(e)};a.Intercom=r;var c=function e(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src="https://widget.intercom.io/widget/".concat(t.app_id);var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n)};if(document.readyState==="complete"){c()}else if(a.attachEvent){a.attachEvent("onload",c)}else{a.addEventListener("load",c,false)}}};var u=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;var a=t.history;if(t.Intercom&&!a.hasIntercomPatch){var n=a.pushState;a.pushState=function(e){if(typeof a.onpushstate=="function"){a.onpushstate({state:e})}t.Intercom("update");return n.apply(a,arguments)};a.hasIntercomPatch=true}};a.d(t,"default",(function(){return f}));var d=Object(c["a"])();var p=Object(s["a"])();var m=function(){var e=babelHelpers.asyncToGenerator(regeneratorRuntime.mark((function e(t){var a,c;return regeneratorRuntime.wrap((function e(s){while(1){switch(s.prev=s.next){case 0:s.next=2;return Object(n["B"])((function(){return!i["a"].isLoading}));case 2:a={};c=d.third_party.intercom.app_id;if(i["a"].id){Object.assign(a,{app_id:c,email:i["a"].email,name:i["a"].title,created_at:i["a"].created,user_id:i["a"].id,user_hash:t.intercom_user_hash})}if(p.extraIntercomData){Object.assign(a,p.extraIntercomData)}a.hide_default_launcher=Object(r["b"])()||a.hide_default_launcher;return s.abrupt("return",a);case 8:case"end":return s.stop()}}}),e)})));return function t(a){return e.apply(this,arguments)}}();function f(e,t){return l.apply(this,arguments)}function l(){l=babelHelpers.asyncToGenerator(regeneratorRuntime.mark((function e(t,a){var n;return regeneratorRuntime.wrap((function e(r){while(1){switch(r.prev=r.next){case 0:if(!(t.classList.contains("ud-component--intercom--app")&&d.features.intercom_chat)){r.next=7;break}r.next=3;return m(a);case 3:n=r.sent;o(n);window.Intercom("boot",n);u();case 7:case"end":return r.stop()}}}),e)})));return l.apply(this,arguments)}}}]);
//# sourceMappingURL=intercom-app.f1ad71df47798d7537a6.js.map