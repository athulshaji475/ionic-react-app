"use strict";(globalThis.webpackChunktestapp2=globalThis.webpackChunktestapp2||[]).push([[377],{377:(t,e,n)=>{n.r(e),n.d(e,{getCLS:()=>d,getFCP:()=>v,getFID:()=>f,getLCP:()=>h,getTTFB:()=>S});var i,a,r=function(t){return{name:t,value:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,delta:0,entries:[],id:"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),isFinal:!1}},o=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},s=!1,u=!1,c=function(t){s=!t.persisted},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u||(addEventListener("pagehide",c),addEventListener("beforeunload",(function(){})),u=!0),addEventListener("visibilitychange",(function(e){var n=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:n,isUnloading:s})}),{capture:!0,once:e})},l=function(t,e,n,i){var a;return function(){n&&e.isFinal&&n.disconnect(),e.value>=0&&(i||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(a||0),(e.delta||e.isFinal||void 0===a)&&(t(e),a=e.value))}},d=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=r("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),e())},s=o("layout-shift",a);s&&(e=l(t,i,s,n),p((function(t){var n=t.isUnloading;s.takeRecords().map(a),n&&(i.isFinal=!0),e()})))},m=function(){return void 0===i&&(i="hidden"===document.visibilityState?0:1/0,p((function(t){var e=t.timeStamp;return i=e}),!0)),{get timeStamp(){return i}}},v=function(t){var e,n=r("FCP"),i=m(),a=o("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<i.timeStamp&&(n.value=t.startTime,n.isFinal=!0,n.entries.push(t),e())}));a&&(e=l(t,n,a))},f=function(t){var e=r("FID"),n=m(),i=function(t){t.startTime<n.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,s())},a=o("first-input",i),s=l(t,e,a);a?p((function(){a.takeRecords().map(i),a.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<n.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],s())}))},g=function(){return a||(a=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})}))}))),a},h=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=r("LCP"),a=m(),s=function(t){var n=t.startTime;n<a.timeStamp?(i.value=n,i.entries.push(t)):i.isFinal=!0,e()},u=o("largest-contentful-paint",s);if(u){e=l(t,i,u,n);var c=function(){i.isFinal||(u.takeRecords().map(s),i.isFinal=!0,e())};g().then(c),p(c,!0)}},S=function(t){var e,n=r("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],n.isFinal=!0,t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=377.dea59219.chunk.js.map