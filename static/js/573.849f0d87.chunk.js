/*! For license information please see 573.849f0d87.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunktestapp2=globalThis.webpackChunktestapp2||[]).push([[573],{573:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>f,keyboardDidClose:()=>w,keyboardDidOpen:()=>c,keyboardDidResize:()=>l,resetKeyboardAssist:()=>h,setKeyboardClose:()=>g,setKeyboardOpen:()=>b,startKeyboardAssist:()=>n,trackViewportChanges:()=>D});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},r=!1;const h=()=>{a={},d={},r=!1},n=e=>{p(e),e.visualViewport&&(d=f(e.visualViewport),e.visualViewport.onresize=()=>{D(e),c()||l(e)?b(e):w(e)&&g(e)})},p=e=>{e.addEventListener("keyboardDidShow",(t=>b(e,t))),e.addEventListener("keyboardDidHide",(()=>g(e)))},b=(e,t)=>{u(e,t),r=!0},g=e=>{y(e),r=!1},c=()=>{const e=(a.height-d.height)*d.scale;return!r&&a.width===d.width&&e>150},l=e=>r&&!w(e),w=e=>r&&d.height===e.innerHeight,u=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-d.height,o=new CustomEvent(s,{detail:{keyboardHeight:i}});e.dispatchEvent(o)},y=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},D=e=>{a=Object.assign({},d),d=f(e.visualViewport)},f=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=573.849f0d87.chunk.js.map