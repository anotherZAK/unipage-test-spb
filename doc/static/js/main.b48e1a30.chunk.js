(this["webpackJsonpunipage-test"]=this["webpackJsonpunipage-test"]||[]).push([[0],{30:function(t,e,n){},38:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(20),r=n.n(s),a=(n(29),n(9)),i=(n(30),n(1)),u=function(){return Object(i.jsxs)("div",{className:"outer-container",children:[Object(i.jsx)("h1",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),Object(i.jsx)("p",{className:"intro",children:"\u0412\u044b \u043f\u043e-\u043f\u0440\u0435\u0436\u043d\u0435\u043c\u0443 \u043d\u0430\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435 \u0434\u0432\u0443\u043c\u044f \u043f\u0430\u043b\u044c\u0446\u0430\u043c\u0438 \u0438 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0443 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u0432\u043e\u0434\u0430 \u0442\u0435\u043a\u0441\u0442\u0430?"}),Object(i.jsx)("p",{className:"intro",children:"\u041d\u0430 \u043d\u0430\u0448\u0451\u043c \u0441\u0430\u0439\u0442\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0436\u0435\u0442 \u0432 \u043e\u0431\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0438 \u0434\u043e\u0441\u0442\u0438\u0447\u044c \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0430 \u0432 \u043d\u0430\u0432\u044b\u043a\u0435 \u043f\u0435\u0447\u0430\u0442\u0438."}),Object(i.jsx)(a.b,{className:"btn btn-primary",to:"/blind-printing-simulator",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0442\u0440\u0435\u043d\u0430\u0436\u0451\u0440\u0443"})]})},o=n(18),j=n.n(o),b=n(22),l=n(8),d=/[\u0430-\u044f\u04510-9- .,?!:;)("%\u2116]/i,O="symbol",m="symbol symbol--passed",f="symbol symbol--unpassed",x=(n(38),n(23)),h=n.n(x),p=function(t){var e=t.data,n=t.printAccuracy,s=t.count,r=t.numberOfCorrectSymbols,a=t.statisticComplete,u=Math.round(r/s*60),o=Object(c.useState)(0),j=Object(l.a)(o,2),b=j[0],d=j[1];return Object(c.useEffect)((function(){d(h.a.utc(1e3*s).format("mm:ss"))}),[s]),Object(i.jsxs)("div",{className:a||"statistic",children:[Object(i.jsxs)("div",{className:"statistic__accuracy",children:["\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043f\u0435\u0447\u0430\u0442\u0438:"," ",s?((e.text.length-n)/e.text.length*100).toFixed(2):"","%"]}),Object(i.jsxs)("div",{className:"statistic__speed",children:["\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043f\u0435\u0447\u0430\u0442\u0438: ",s?u:0," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432/\u043c\u0438\u043d."]}),Object(i.jsxs)("div",{className:"statistic__time",children:["\u0412\u0440\u0435\u043c\u044f \u043f\u0435\u0447\u0430\u0442\u0438: ",s?b:0," \u0441."]})]})},v=(n(40),function(t){var e=t.data,n=0,s=e.classNames,r=Object(c.useState)(!1),a=Object(l.a)(r,2),u=a[0],o=a[1],j=Object(c.useState)(0),b=Object(l.a)(j,2),O=b[0],x=b[1],h=Object(c.useState)(0),v=Object(l.a)(h,2),N=v[0],y=v[1],g=Object(c.useRef)(null),k=Object(c.useState)(0),w=Object(l.a)(k,2),S=w[0],E=w[1];Object(c.useEffect)((function(){window.addEventListener("keydown",function(){var t=!1,c=0;return function(r){var a=d.test(r.key)?r.key:null;if(a&&e.text[n]===a)s[n]=m,n++,E(n),t=!1,o(!0);else{if(!a)return;s[n]=f,t||(c++,x(c)),t=!0}n===e.text.length&&o(!1)}}())}),[s,e.text,n]),Object(c.useEffect)((function(){return u?_():C(),function(){return clearInterval(g.current)}}),[u]);var _=function(){g.current=setInterval((function(){y((function(t){return t+1}))}),1e3)},C=function(){clearInterval(g.current)};return Object(i.jsxs)("div",{className:"text-block",children:[Object(i.jsx)(p,{data:e,printAccuracy:O,count:N,numberOfCorrectSymbols:S}),Object(i.jsx)("div",{children:e.text.split("").map((function(t,e){return Object(i.jsx)("span",{className:s[e],children:t},e)}))})]})}),N=n(13),y=(n(41),function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(""),u=Object(l.a)(r,2),o=u[0],d=u[1],m=function(){var t=Object(b.a)(j.a.mark((function t(){var e,n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,t.next=4,fetch("https://fish-text.ru/get?&number=1");case 4:return n=t.sent,t.next=7,n.json();case 7:(e=t.sent).classNames=Array.from({length:e.text.length},(function(){return O})),s(e),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),c=t.t0,d(c);case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){m()}),[]);return n?Object(i.jsxs)("div",{className:"outer-container",children:[Object(i.jsx)("h2",{children:"\u0422\u0440\u0435\u043d\u0430\u0436\u0451\u0440 \u0441\u043b\u0435\u043f\u043e\u0439 \u043f\u0435\u0447\u0430\u0442\u0438"}),Object(i.jsx)(v,{data:n}),Object(i.jsx)(a.b,{className:"btn btn-dark",to:"/",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(i.jsx)("button",{className:"btn btn-info",onClick:function(){s(""),d(""),m()},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"})]}):o?Object(i.jsxs)("div",{className:"outer-container outer-container--error",children:[Object(i.jsx)("div",{className:"error-msg",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"}),Object(i.jsx)("div",{children:Object(i.jsx)(a.b,{className:"btn btn-dark",to:"/",children:"\u041d\u0430\u0437\u0430\u0434"})})]}):Object(i.jsxs)("div",{className:"outer-container outer-container--spinner",children:[Object(i.jsx)(N.a,{animation:"grow",variant:"dark"}),Object(i.jsx)(N.a,{animation:"grow",variant:"dark"}),Object(i.jsx)(N.a,{animation:"grow",variant:"dark"})]})}),g=n(24),k=n(3),w=function(){return Object(i.jsx)(g.a,{children:Object(i.jsxs)(a.a,{children:[Object(i.jsx)(k.a,{path:"/",exact:!0,component:u}),Object(i.jsx)(k.a,{path:"/blind-printing-simulator",component:y})]})})};r.a.render(Object(i.jsx)(w,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b48e1a30.chunk.js.map