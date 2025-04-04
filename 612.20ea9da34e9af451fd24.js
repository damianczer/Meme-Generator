"use strict";(self.webpackChunkmeme_generator=self.webpackChunkmeme_generator||[]).push([[612],{612:(e,o,t)=>{t.r(o),t.d(o,{default:()=>y});var r=t(540),n=t(72),a=t.n(n),c=t(825),i=t.n(c),l=t(659),s=t.n(l),u=t(56),d=t.n(u),m=t(159),g=t.n(m),p=t(113),f=t.n(p),b=t(745),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=g();a()(b.A,h);b.A&&b.A.locals&&b.A.locals;function k(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)e[r]=t[r]}return e}var x=function e(o,t){function r(e,r,n){if("undefined"!=typeof document){"number"==typeof(n=k({},t,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in n)n[c]&&(a+="; "+c,!0!==n[c]&&(a+="="+n[c].split(";")[0]));return document.cookie=e+"="+o.write(r,e)+a}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},n=0;n<t.length;n++){var a=t[n].split("="),c=a.slice(1).join("=");try{var i=decodeURIComponent(a[0]);if(r[i]=o.read(c,i),e===i)break}catch(e){}}return e?r[e]:r}},remove:function(e,o){r(e,"",k({},o,{expires:-1}))},withAttributes:function(o){return e(this.converter,k({},this.attributes,o))},withConverter:function(o){return e(k({},this.converter,o),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(o)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),v=t(744),w=t(188);const y=e=>{let{isOpen:o,onClose:t,onSelect:n,selectedOption:a}=e;const c="dc_meme_generator_settings",[i,l]=(0,r.useState)((()=>"dark"===x.get(c)));(0,r.useEffect)((()=>{document.documentElement.setAttribute("data-theme",i?"dark":"light"),x.set(c,i?"dark":"light",{expires:365})}),[i]);const s=e=>{n(e),t()};return r.createElement("nav",{className:"menu "+(o?"open":"")},r.createElement("button",{className:"menu-close",onClick:t},r.createElement(v.g,{icon:w.GRI})),r.createElement("div",{className:"menu-profile"},r.createElement(v.g,{icon:w.VFr,className:"profile-icon"}),r.createElement("p",{className:"username"},"Anonymous")),r.createElement("ul",null,r.createElement("li",{className:"Generator"===a?"active":"",onClick:()=>s("Generator")},"Generator",r.createElement(v.g,{icon:w.f2_,className:"menu-icon"})),r.createElement("li",{className:"Gallery"===a?"active":"",onClick:()=>s("Gallery")},"Gallery",r.createElement(v.g,{icon:w.Cyq,className:"menu-icon"})),r.createElement("li",{className:"About"===a?"active":"",onClick:()=>s("About")},"About",r.createElement(v.g,{icon:w.iW_,className:"menu-icon"}))),r.createElement("div",{className:"dark-mode-toggle"},r.createElement(v.g,{icon:w.oMq,className:"toggle-icon"}),r.createElement("label",{className:"switch"},r.createElement("input",{type:"checkbox",checked:i,onChange:()=>{l(!i)}}),r.createElement("span",{className:"slider"})),r.createElement(v.g,{icon:w.PJS,className:"toggle-icon"})))}},745:(e,o,t)=>{t.d(o,{A:()=>i});var r=t(601),n=t.n(r),a=t(314),c=t.n(a)()(n());c.push([e.id,':root{--header-background-color: #edf5fc;--footer-background-color: #edf5fc;--main-background-color: #e2e6ee;--menu-background-color: rgb(82 122 234);--text-color: #000000;--menu-button-background-color: #0000006b;--menu-button-background-hover-color: #3b3b3ba6;--menu-button-active-background-color: #182b65;--header-color: #0a5993;--grey-color: #8d8d8d;--white-color: #ffffff;--black-color: #000000}[data-theme=dark]{--header-background-color: #1d1e21;--footer-background-color: #1d1e21;--main-background-color: #272727;--menu-background-color: #161616;--text-color: #ffffff;--menu-button-background-color: #333333a6;--menu-button-background-hover-color: #3b3b3ba6;--menu-button-active-background-color: #184965}@keyframes ring{0%{transform:rotate(0deg) scale(1)}25%{transform:rotate(-15deg) scale(2)}50%{transform:rotate(15deg) scale(2)}75%{transform:rotate(-15deg) scale(2)}100%{transform:rotate(0deg) scale(1)}}@keyframes fade-in-out{0%{opacity:0;transform:translateY(-10px)}10%,90%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-10px)}}.menu{position:fixed;top:0;left:0;width:200px;height:100%;background:var(--menu-background-color);transform:translateX(-100%);transition:transform .3s ease-in-out;z-index:1000;padding:25px;display:flex;flex-direction:column;justify-content:space-between;height:100%;overflow-y:auto}.menu ul{list-style:none;padding:0}.menu ul li{margin:15px 0;background-color:var(--menu-button-background-color);padding:10px;border-radius:5px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;color:var(--white-color)}.menu ul li .menu-icon{margin-left:10px;color:var(--white-color)}.menu ul li:hover{background-color:var(--menu-button-background-hover-color)}.menu ul li.active{background-color:var(--menu-button-active-background-color)}.menu .menu-profile{text-align:center;margin-bottom:20px}.menu .menu-profile .profile-icon{width:80px;height:80px;border-radius:50%;color:var(--white-color)}.menu .menu-profile .username{margin-top:10px;font-size:20px;color:var(--white-color)}.menu .menu-close{background:none;border:none;font-size:24px;color:var(--white-color);cursor:pointer;position:absolute;top:10px;right:10px;display:none;z-index:1100}@media(min-width: 769px){.menu{transform:translateX(0)}}@media(max-width: 768px){.menu .menu-close{display:block}}.dark-mode-toggle{display:flex;align-items:center;justify-content:center;margin-top:auto;padding-bottom:50px}.dark-mode-toggle .toggle-icon{font-size:20px;color:var(--white-color);margin:0 10px}.dark-mode-toggle .switch{position:relative;display:inline-block;width:40px;height:20px}.dark-mode-toggle .switch input{opacity:0;width:0;height:0}.dark-mode-toggle .switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--menu-button-background-color);transition:.4s;border-radius:20px}.dark-mode-toggle .switch .slider:before{position:absolute;content:"";height:14px;width:14px;left:3px;bottom:3px;background-color:var(--white-color);transition:.4s;border-radius:50%}.dark-mode-toggle .switch input:checked+.slider{background-color:rgba(37,193,41,.92)}.dark-mode-toggle .switch input:checked+.slider:before{transform:translateX(20px)}',""]);const i=c}}]);