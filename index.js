/*
 * anime.js v3.2.2
 * (c) 2023 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var i={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},M={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},j=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],l={CSS:{},springs:{}};function C(n,e,t){return Math.min(Math.max(n,e),t)}function u(n,e){return-1<n.indexOf(e)}function o(n,e){return n.apply(null,e)}var w={arr:function(n){return Array.isArray(n)},obj:function(n){return u(Object.prototype.toString.call(n),"Object")},pth:function(n){return w.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||w.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return w.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return w.hex(n)||w.rgb(n)||w.hsl(n)},key:function(n){return!i.hasOwnProperty(n)&&!M.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function d(n){n=/\(([^)]+)\)/.exec(n);return n?n[1].split(",").map(function(n){return parseFloat(n)}):[]}function c(r,t){var n=d(r),e=C(w.und(n[0])?1:n[0],.1,100),a=C(w.und(n[1])?100:n[1],.1,100),o=C(w.und(n[2])?10:n[2],.1,100),n=C(w.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/e),i=o/(2*Math.sqrt(a*e)),c=i<1?u*Math.sqrt(1-i*i):0,s=i<1?(i*u-n)/c:-n+u;function f(n){var e=t?t*n/1e3:n,e=i<1?Math.exp(-e*i*u)*(+Math.cos(c*e)+s*Math.sin(c*e)):(1+s*e)*Math.exp(-e*u);return 0===n||1===n?n:1-e}return t?f:function(){var n=l.springs[r];if(n)return n;for(var e=0,t=0;;)if(1===f(e+=1/6)){if(16<=++t)break}else t=0;return n=e*(1/6)*1e3,l.springs[r]=n}}function q(e){return void 0===e&&(e=10),function(n){return Math.ceil(C(n,1e-6,1)*e)*(1/e)}}var H=function(b,e,M,t){if(0<=b&&b<=1&&0<=M&&M<=1){var x=new Float32Array(11);if(b!==e||M!==t)for(var n=0;n<11;++n)x[n]=k(.1*n,b,M);return function(n){return b===e&&M===t||0===n||1===n?n:k(r(n),e,t)}}function r(n){for(var e=0,t=1;10!==t&&x[t]<=n;++t)e+=.1;var r=e+.1*((n-x[--t])/(x[t+1]-x[t])),a=O(r,b,M);if(.001<=a){for(var o=n,u=r,i=b,c=M,s=0;s<4;++s){var f=O(u,i,c);if(0===f)return u;u-=(k(u,i,c)-o)/f}return u}if(0===a)return r;for(var l,d,p=n,h=e,g=e+.1,m=b,v=M,y=0;0<(l=k(d=h+(g-h)/2,m,v)-p)?g=d:h=d,1e-7<Math.abs(l)&&++y<10;);return d}};function r(n,e){return 1-3*e+3*n}function k(n,e,t){return((r(e,t)*n+(3*t-6*e))*n+3*e)*n}function O(n,e,t){return 3*r(e,t)*n*n+2*(3*t-6*e)*n+3*e}e={linear:function(){return function(n){return n}}},t={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===e&&(e=.5);var t=C(n=void 0===n?1:n,1,10),r=C(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach(function(n,e){t[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(t).forEach(function(n){var r=t[n];e["easeIn"+n]=r,e["easeOut"+n]=function(e,t){return function(n){return 1-r(e,t)(1-n)}},e["easeInOut"+n]=function(e,t){return function(n){return n<.5?r(e,t)(2*n)/2:1-r(e,t)(-2*n+2)/2}},e["easeOutIn"+n]=function(e,t){return function(n){return n<.5?(1-r(e,t)(1-2*n))/2:(r(e,t)(2*n-1)+1)/2}}});var e,t,s=e;function P(n,e){if(w.fnc(n))return n;var t=n.split("(")[0],r=s[t],a=d(n);switch(t){case"spring":return c(n,e);case"cubicBezier":return o(H,a);case"steps":return o(q,a);default:return o(r,a)}}function a(n){try{return document.querySelectorAll(n)}catch(n){}}function I(n,e){for(var t,r=n.length,a=2<=arguments.length?e:void 0,o=[],u=0;u<r;u++)u in n&&(t=n[u],e.call(a,t,u,n))&&o.push(t);return o}function f(n){return n.reduce(function(n,e){return n.concat(w.arr(e)?f(e):e)},[])}function p(n){return w.arr(n)?n:(n=w.str(n)?a(n)||n:n)instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n]}function h(n,e){return n.some(function(n){return n===e})}function g(n){var e,t={};for(e in n)t[e]=n[e];return t}function x(n,e){var t,r=g(n);for(t in n)r[t]=(e.hasOwnProperty(t)?e:n)[t];return r}function D(n,e){var t,r=g(n);for(t in e)r[t]=(w.und(n[t])?e:n)[t];return r}function V(n){var e,t,r,a,o,u,i;return w.rgb(n)?(e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=n))?"rgba("+e[1]+",1)":t:w.hex(n)?(e=(e=n).replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+",1)"):w.hsl(n)?(t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t=n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),n=parseInt(t[1],10)/360,u=parseInt(t[2],10)/100,i=parseInt(t[3],10)/100,t=t[4]||1,0==u?r=a=o=i:(r=c(u=2*i-(i=i<.5?i*(1+u):i+u-i*u),i,n+1/3),a=c(u,i,n),o=c(u,i,n-1/3)),"rgba("+255*r+","+255*a+","+255*o+","+t+")"):void 0;function c(n,e,t){return t<0&&(t+=1),1<t&&--t,t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}}function B(n){n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(n)return n[1]}function m(n,e){return w.fnc(n)?n(e.target,e.id,e.total):n}function v(n,e){return n.getAttribute(e)}function y(n,e,t){var r,a,o;return h([t,"deg","rad","turn"],B(e))?e:(r=l.CSS[e+t],w.und(r)?(a=document.createElement(n.tagName),(n=n.parentNode&&n.parentNode!==document?n.parentNode:document.body).appendChild(a),a.style.position="absolute",a.style.width=100+t,o=100/a.offsetWidth,n.removeChild(a),n=o*parseFloat(e),l.CSS[e+t]=n):r)}function $(n,e,t){var r;if(e in n.style)return r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0",t?y(n,e,t):e}function b(n,e){return w.dom(n)&&!w.inp(n)&&(!w.nil(v(n,e))||w.svg(n)&&n[e])?"attribute":w.dom(n)&&h(j,e)?"transform":w.dom(n)&&"transform"!==e&&$(n,e)?"css":null!=n[e]?"object":void 0}function W(n){if(w.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function X(n,e,t,r){var a=u(e,"scale")?1:0+(u(a=e,"translate")||"perspective"===a?"px":u(a,"rotate")||u(a,"skew")?"deg":void 0),o=W(n).get(e)||a;return t&&(t.transforms.list.set(e,o),t.transforms.last=e),r?y(n,o,r):o}function T(n,e,t,r){switch(b(n,e)){case"transform":return X(n,e,r,t);case"css":return $(n,e,t);case"attribute":return v(n,e);default:return n[e]||0}}function E(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=B(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function Y(n,e){var t;return w.col(n)?V(n):/\s/g.test(n)?n:(t=(t=B(n))?n.substr(0,n.length-t.length):n,e?t+e:t)}function F(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function Z(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);0<a&&(r+=F(e,o)),e=o}return r}function G(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return 2*Math.PI*v(n,"r");case"rect":return 2*v(t=n,"width")+2*v(t,"height");case"line":return F({x:v(t=n,"x1"),y:v(t,"y1")},{x:v(t,"x2"),y:v(t,"y2")});case"polyline":return Z(n);case"polygon":return e=n.points,Z(n)+F(e.getItem(e.numberOfItems-1),e.getItem(0))}var e,t}function Q(n,e){var e=e||{},n=e.el||function(n){for(var e=n.parentNode;w.svg(e)&&w.svg(e.parentNode);)e=e.parentNode;return e}(n),t=n.getBoundingClientRect(),r=v(n,"viewBox"),a=t.width,t=t.height,e=e.viewBox||(r?r.split(" "):[0,0,a,t]);return{el:n,viewBox:e,x:+e[0],y:+e[1],w:a,h:t,vW:e[2],vH:e[3]}}function z(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Y(w.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:w.str(n)||e?r.split(t):[]}}function A(n){return I(n?f(w.arr(n)?n.map(p):p(n)):[],function(n,e,t){return t.indexOf(n)===e})}function _(n){var t=A(n);return t.map(function(n,e){return{target:n,id:e,total:t.length,transforms:{list:W(n)}}})}function R(e){for(var t=I(f(e.map(function(n){return Object.keys(n)})),function(n){return w.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),a={},n=0;n<t.length;n++)!function(n){var r=t[n];a[r]=e.map(function(n){var e,t={};for(e in n)w.key(e)?e==r&&(t.value=n[e]):t[e]=n[e];return t})}(n);return a}function J(n,e){var t,r=[],a=e.keyframes;for(t in e=a?D(R(a),e):e)w.key(t)&&r.push({name:t,tweens:function(n,t){var e,r=g(t),a=(/^spring/.test(r.easing)&&(r.duration=c(r.easing)),w.arr(n)&&(2===(e=n.length)&&!w.obj(n[0])?n={value:n}:w.fnc(t.duration)||(r.duration=t.duration/e)),w.arr(n)?n:[n]);return a.map(function(n,e){n=w.obj(n)&&!w.pth(n)?n:{value:n};return w.und(n.delay)&&(n.delay=e?0:t.delay),w.und(n.endDelay)&&(n.endDelay=e===a.length-1?t.endDelay:0),n}).map(function(n){return D(n,r)})}(e[t],n)});return r}function K(i,c){var s;return i.tweens.map(function(n){var n=function(n,e){var t,r={};for(t in n){var a=m(n[t],e);w.arr(a)&&1===(a=a.map(function(n){return m(n,e)})).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(n,c),e=n.value,t=w.arr(e)?e[1]:e,r=B(t),a=T(c.target,i.name,r,c),o=s?s.to.original:a,u=w.arr(e)?e[0]:o,a=B(u)||B(a),r=r||a;return w.und(t)&&(t=o),n.from=z(u,r),n.to=z(E(t,u),r),n.start=s?s.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=P(n.easing,n.duration),n.isPath=w.pth(e),n.isPathTargetInsideSVG=n.isPath&&w.svg(c.target),n.isColor=w.col(n.from.original),n.isColor&&(n.round=1),s=n})}var U={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){var o;r.list.set(e,t),e!==r.last&&!a||(o="",r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o)}};function nn(n,u){_(n).forEach(function(n){for(var e in u){var t=m(u[e],n),r=n.target,a=B(t),o=T(r,e,a,n),t=E(Y(t,a||B(o)),o),a=b(r,e);U[a](r,e,t,n.transforms,!0)}})}function en(n,e){return I(f(n.map(function(o){return e.map(function(n){var e,t,r=o,a=b(r.target,n.name);if(a)return t=(e=K(n,r))[e.length-1],{type:a,property:n.name,animatable:r,tweens:e,duration:t.end,delay:e[0].delay,endDelay:t.endDelay}})})),function(n){return!w.und(n)})}function tn(n,e){function t(n){return n.timelineOffset||0}var r=n.length,a={};return a.duration=r?Math.max.apply(Math,n.map(function(n){return t(n)+n.duration})):e.duration,a.delay=r?Math.min.apply(Math,n.map(function(n){return t(n)+n.delay})):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map(function(n){return t(n)+n.duration-n.endDelay})):e.endDelay,a}var rn=0;var N,S=[],an=("undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){L.suspendWhenDocumentHidden&&(n()?N=cancelAnimationFrame(N):(S.forEach(function(n){return n._onDocumentVisibility()}),an()))}),function(){!(N||n()&&L.suspendWhenDocumentHidden)&&0<S.length&&(N=requestAnimationFrame(on))});function on(n){for(var e=S.length,t=0;t<e;){var r=S[t];r.paused?(S.splice(t,1),e--):(r.tick(n),t++)}N=0<t?requestAnimationFrame(on):void 0}function n(){return document&&document.hidden}function L(n){var c,s=0,f=0,l=0,d=0,p=null;function h(n){var e=window.Promise&&new Promise(function(n){return p=n});return n.finished=e}e=x(i,n=n=void 0===n?{}:n),t=J(r=x(M,n),n),n=_(n.targets),r=tn(t=en(n,t),r),a=rn,rn++;var e,t,r,a,k=D(e,{id:a,children:[],animatables:n,animations:t,duration:r.duration,delay:r.delay,endDelay:r.endDelay});h(k);function g(){var n=k.direction;"alternate"!==n&&(k.direction="normal"!==n?"normal":"reverse"),k.reversed=!k.reversed,c.forEach(function(n){return n.reversed=k.reversed})}function m(n){return k.reversed?k.duration-n:n}function o(){s=0,f=m(k.currentTime)*(1/L.speed)}function v(n,e){e&&e.seek(n-e.timelineOffset)}function y(e){for(var n=0,t=k.animations,r=t.length;n<r;){for(var a=t[n],o=a.animatable,u=a.tweens,i=u.length-1,c=u[i],i=(i&&(c=I(u,function(n){return e<n.end})[0]||c),C(e-c.start-c.delay,0,c.duration)/c.duration),s=isNaN(i)?1:c.easing(i),f=c.to.strings,l=c.round,d=[],p=c.to.numbers.length,h=void 0,g=0;g<p;g++){var m=void 0,v=c.to.numbers[g],y=c.from.numbers[g]||0,m=c.isPath?function(e,t,n){function r(n){return e.el.getPointAtLength(1<=t+(n=void 0===n?0:n)?t+n:0)}var a=Q(e.el,e.svg),o=r(),u=r(-1),i=r(1),c=n?1:a.w/a.vW,s=n?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}(c.value,s*v,c.isPathTargetInsideSVG):y+s*(v-y);!l||c.isColor&&2<g||(m=Math.round(m*l)/l),d.push(m)}var b=f.length;if(b)for(var h=f[0],M=0;M<b;M++){f[M];var x=f[M+1],w=d[M];isNaN(w)||(h+=x?w+x:w+" ")}else h=d[0];U[a.type](o.target,a.property,h,o.transforms),a.currentValue=h,n++}}function b(n){k[n]&&!k.passThrough&&k[n](k)}function u(n){var e=k.duration,t=k.delay,r=e-k.endDelay,a=m(n);if(k.progress=C(a/e*100,0,100),k.reversePlayback=a<k.currentTime,c){var o=a;if(k.reversePlayback)for(var u=d;u--;)v(o,c[u]);else for(var i=0;i<d;i++)v(o,c[i])}!k.began&&0<k.currentTime&&(k.began=!0,b("begin")),!k.loopBegan&&0<k.currentTime&&(k.loopBegan=!0,b("loopBegin")),a<=t&&0!==k.currentTime&&y(0),(r<=a&&k.currentTime!==e||!e)&&y(e),t<a&&a<r?(k.changeBegan||(k.changeBegan=!0,k.changeCompleted=!1,b("changeBegin")),b("change"),y(a)):k.changeBegan&&(k.changeCompleted=!0,k.changeBegan=!1,b("changeComplete")),k.currentTime=C(a,0,e),k.began&&b("update"),e<=n&&(f=0,k.remaining&&!0!==k.remaining&&k.remaining--,k.remaining?(s=l,b("loopComplete"),k.loopBegan=!1,"alternate"===k.direction&&g()):(k.paused=!0,k.completed||(k.completed=!0,b("loopComplete"),b("complete"),!k.passThrough&&"Promise"in window&&(p(),h(k)))))}return k.reset=function(){var n=k.direction;k.passThrough=!1,k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.loopBegan=!1,k.changeBegan=!1,k.completed=!1,k.changeCompleted=!1,k.reversePlayback=!1,k.reversed="reverse"===n,k.remaining=k.loop,c=k.children;for(var e=d=c.length;e--;)k.children[e].reset();(k.reversed&&!0!==k.loop||"alternate"===n&&1===k.loop)&&k.remaining++,y(k.reversed?k.duration:0)},k._onDocumentVisibility=o,k.set=function(n,e){return nn(n,e),k},k.tick=function(n){u(((l=n)+(f-(s=s||l)))*L.speed)},k.seek=function(n){u(m(n))},k.pause=function(){k.paused=!0,o()},k.play=function(){k.paused&&(k.completed&&k.reset(),k.paused=!1,S.push(k),o(),an())},k.reverse=function(){g(),k.completed=!k.reversed,o()},k.restart=function(){k.reset(),k.play()},k.remove=function(n){cn(A(n),k)},k.reset(),k.autoplay&&k.play(),k}function un(n,e){for(var t=e.length;t--;)h(n,e[t].animatable.target)&&e.splice(t,1)}function cn(n,e){var t=e.animations,r=e.children;un(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;un(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return L.version="3.2.2",L.speed=1,L.suspendWhenDocumentHidden=!0,L.running=S,L.remove=function(n){for(var e=A(n),t=S.length;t--;)cn(e,S[t])},L.get=T,L.set=nn,L.convertPx=y,L.path=function(n,e){var t=w.str(n)?a(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:Q(t),totalLength:G(t)*(r/100)}}},L.setDashoffset=function(n){var e=G(n);return n.setAttribute("stroke-dasharray",e),e},L.stagger=function(n,e){var i=(e=void 0===e?{}:e).direction||"normal",c=e.easing?P(e.easing):null,s=e.grid,f=e.axis,l=e.from||0,d="first"===l,p="center"===l,h="last"===l,g=w.arr(n),m=g?parseFloat(n[0]):parseFloat(n),v=g?parseFloat(n[1]):0,y=B(g?n[1]:n)||0,b=e.start||0+(g?m:0),M=[],x=0;return function(n,e,t){if(d&&(l=0),p&&(l=(t-1)/2),h&&(l=t-1),!M.length){for(var r,a,o,u=0;u<t;u++)s?(r=p?(s[0]-1)/2:l%s[0],a=p?(s[1]-1)/2:Math.floor(l/s[0]),r=r-u%s[0],a=a-Math.floor(u/s[0]),o=Math.sqrt(r*r+a*a),"x"===f&&(o=-r),M.push(o="y"===f?-a:o)):M.push(Math.abs(l-u)),x=Math.max.apply(Math,M);c&&(M=M.map(function(n){return c(n/x)*x})),"reverse"===i&&(M=M.map(function(n){return f?n<0?-1*n:-n:Math.abs(x-n)}))}return b+(g?(v-m)/x:m)*(Math.round(100*M[e])/100)+y}},L.timeline=function(u){var i=L(u=void 0===u?{}:u);return i.duration=0,i.add=function(n,e){var t=S.indexOf(i),r=i.children;function a(n){n.passThrough=!0}-1<t&&S.splice(t,1);for(var o=0;o<r.length;o++)a(r[o]);t=D(n,x(M,u)),t.targets=t.targets||u.targets,n=i.duration,t.autoplay=!1,t.direction=i.direction,t.timelineOffset=w.und(e)?n:E(e,n),a(i),i.seek(t.timelineOffset),e=L(t),a(e),r.push(e),n=tn(r,u);return i.delay=n.delay,i.endDelay=n.endDelay,i.duration=n.duration,i.seek(0),i.reset(),i.autoplay&&i.play(),i},i},L.easing=P,L.penner=s,L.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},L});








let first_slide = document.querySelector('.main')
let second_slide = document.querySelector('.game')
let Start = document.querySelector('.upg-btn')


let sec = document.querySelector('.next')
let fir = document.querySelector('.nnext')


let firs_upg = document.querySelector('.first-upgrade')
let second_upg = document.querySelector('.sec-upgrade')


let coin_valut = document.querySelector('.coin')
let first_car = document.querySelector('.first-car')
let second_car = document.querySelector('.second-car')




first_car.addEventListener('click', function(){
    coin++
coin_valut.innerHTML = coin



})

let achivementsnotifications = document.querySelector('.quetionnotification')

let achivementsnotificationsNum = 0

let quetionnotificationSEC = document.querySelector('.quetionnotificationSEC')

let achivementsnotificationsNumTWO = 0

document.querySelector('.coin').innerHTML =  document.querySelector('.coin').innerHTML


let coin = 50000000



let massege = 0
let massegeInner = document.querySelector('.massage')

function massagePer(){
    if(massege === 0 ){
        massegeInner.style.display = 'none'
     
    }
    if(massege > 0 ){
        massegeInner.style.display = 'inline'
        massegeInner.innerHTML = massege
       
    }
} 


second_car.addEventListener('click', function(){
    coin++
    coin++
    coin++
    coin++
    coin++


    coin_valut.innerHTML = coin
  
    })

    let newmechanic = document.querySelector('.mechanic')


    ///////////
    let newmechanicSecond = document.querySelector('.mechanicc')

   let buySeconddd = 'buy'

    newmechanicSecond.addEventListener('click', function(){
     
    
if(buySeconddd === 'buy'){
    if(daleSecond === 'daleee'){
           
        if(dozvilSecond === 'dozvilll'){
      
            if(coin_valut.innerHTML >= 200000){
              coin = coin - 200000
              coin_valut.innerHTML = coin

              newmechanicSecond.innerHTML = 'You bought it'
              newmechanicSecond.style.background = 'url(img/button/3434.970.jpg)'
              newmechanicSecond.style.backgroundSize = 'cover'

             
             
              setInterval(dozSecond, 50)
              
   buySeconddd = 'lol'
          
              
          }else{
            IfDontHaveMoney()
      
    }
        }
         
      


     }
 
}
}
            

 
    
   
  )
    //////////



    let buyyyyyyyyyy = 'buyyyyyyyyyy'

    newmechanic.addEventListener('click', function(){
     
    
        if(buyyyyyyyyyy === 'buyyyyyyyyyy'){
            if(dale === 'dalee'){
           
              if(dozvill === 'dozvilll'){
            
                  if(coin_valut.innerHTML >= 50000){
                    coin = coin - 50000
                    coin_valut.innerHTML = coin
     
                    newmechanic.innerHTML = 'You bought it'
                    newmechanic.style.background = 'url(img/button/3434.970.jpg)'
                    newmechanic.style.backgroundSize = 'cover'
                    
                   
                    setInterval(doz, 1000)
                    buyyyyyyyyyy = 'lol'
                    
                }else{
                    IfDontHaveMoney()
            
          }
              }
               
            }


           }
       
      }



 
///////////////////////////////
   
  )


    let buyyyyyyyyy = 'buyyyyyyyyy'

    newmechanic.addEventListener('click', function(){
     
    
        if(buyyyyyyyyy === 'buyyyyyyyyy'){
            if(dale === 'dale'){
              if(dozvill === 'dozvill'){
            
                  if(coin_valut.innerHTML >= 40000){
                    coin = coin - 40000
                    coin_valut.innerHTML = coin
     
                    newmechanic.innerHTML = 'Update mechanic 50000$ lv4'
                   
                    setInterval(doz, 500)
                    setInterval(doz, 500)
                   
                    dozvill = 'dozvilll'
                    dale = 'dalee'
                    buyyyyyyyyy = 'lol'
                   
                    
                }else{
                  
                    IfDontHaveMoney()
            
          }
              }
               
            }


           }
       
      }

 

   
  )

  //////////
  
  let buySecondddd = 'buy'

  newmechanicSecond.addEventListener('click', function(){
   
  if(buySecondddd === 'buy'){
    if(daleSecond === 'dalee'){
        if(dozvilSecond === 'dozvill'){
      
            if(coin_valut.innerHTML >= 150000){
              coin = coin - 150000
              coin_valut.innerHTML = coin

              newmechanicSecond.innerHTML = 'Update mechanic 200000$ lv4'
             
              setInterval(dozSecond, 500)
              setInterval(dozSecond, 500)
              setInterval(dozSecond, 500)
              setInterval(dozSecond, 500)
             
              dozvilSecond = 'dozvilll'
              daleSecond = 'daleee'
          
             
              
          }else{
            
            IfDontHaveMoney()
      
    }
        }
         
      }

  }
     
        

         
     
    }



 
)

  //////////



    let buyyyyyyyy = 'buyyyyyyyy'

    let dozvill = 'no'
    newmechanic.addEventListener('click', function(){
     

          if(buyyyyyyyy === 'buyyyyyyyy'){
              if(dale === 'dale'){
                if(dozvil === 'dozvil'){
              
              
                    if(coin_valut.innerHTML >= 35000){
                      coin = coin - 35000
                      coin_valut.innerHTML = coin
       
                      newmechanic.innerHTML = 'Update mechanic 40000$ lv3'
       
                     
                     
                      setInterval(doz, 500)
                      buyyyyyyyy = 'lol'
                      dozvill = 'dozvill'
                      
                  }else{
                    IfDontHaveMoney()
              
            }
                }
                 
              }


             }
         
        }

   

     
    )
    //////////////////
let machsec = 0
let buySecond ='buy'
let quetionsqsTWOtwoo = document.querySelector('.get-or-noThirTWO')
    newmechanicSecond.addEventListener('click', function(){
     

      if(buySecond === 'buy'){
        if(daleSecond === 'dale'){
            if(dozvilSecond === 'dozvil'){

                
          
          
                if(coin_valut.innerHTML >= 100000){
                  coin = coin - 100000
                  coin_valut.innerHTML = coin

                  setInterval(dozSecond, 500)
                  setInterval(dozSecond, 500)
                  setInterval(dozSecond, 500)
   
                  newmechanicSecond.innerHTML = 'Update mechanic 150000$ lv3'

                  ///////////////////////////////
                  quetionsqsTWOtwoo.style.background = 'green'
                  quetionsqsTWOtwoo.innerHTML = 'Claim'
                  quetionsqsTWOtwoo.style.cursor = 'pointer'
                  per()
                  let garageQuetionn = 'noyes'
          
                  quetionsqsTWOtwoo.addEventListener('click', function(){
                      if(garageQuetionn === 'noyes'){
                          coin_valut.innerHTML =   +coin_valut.innerHTML + 100000
                          coin = coin + 100000
                          
                           garageQuetionn = 'noyesno'
                           quetionsqsTWOtwoo.style.background = 'grey'
                           quetionsqsTWOtwoo.innerHTML = 'Claimed'
                      }
                     
                     
                  })


                  //////////////////////////////////


   
                  dozvilSecond = 'dozvill'
                  daleSecond = 'dalee'

                  buySecond ='lol'
              }else{
                
                IfDontHaveMoney()
          
        }
            }
             
          }


         }
     
    
      }
             

   

     
    )
  
    //////////////////
  

    let header = document.querySelector('header')
    
Start.addEventListener('click', function(){
    first_slide.style.display = 'none'
    second_slide.style.display = 'flex'
    firs_upg.style.display = 'flex'
    header.style.display = 'none'
 
})


let quetionsTWO = 'one'


fir.addEventListener('click', function(){
     quetionsTWO = 'one'
    firs_upg.style.display = 'flex'
    second_upg.style.display = 'none'
    quetionsBtnOpenSEC.checked = false
    quetionsSEC.style.bottom = '-30%'
    achivementsnotifications.style.display = 'inline'
})


let quetionsqsTWO = document.querySelector('.get-or-noSecTWO')



let newGarage = document.querySelector('.garage')
let newMotor = document.querySelector('.motor')
let newWheels = document.querySelector('.wheels')
let newSuvenirs = document.querySelector('.suvenirs')
let newPendant = document.querySelector('.pendant')
let newturbine = document.querySelector('.turbine')

///////////////////////////////////////
let buySeconddddd ='buy'
let newMotorSecond = document.querySelector('.motorr')
let newMotorSecondSUv = document.querySelector('.motorrr-two')
newMotorSecond.addEventListener('click', function(){


    if(buySeconddddd ==='buy'){
        if(coin_valut.innerHTML >= 200000){
            coin = coin - 200000
            coin_valut.innerHTML = coin
    
            second_car.addEventListener('click', function(){
    
                for (let i = 0; i < 150; i += 1) {
                   coin[i] = coin++
                }
       
                
                    
                    coin_valut.innerHTML = coin
            })
            achuvemant = achuvemant +1
            massege = massege + 1
            newMotorSecond.innerHTML = 'You bought it'
            newMotorSecond.style.background = 'url(img/button/3434.970.jpg)'
            newMotorSecond.style.backgroundSize = 'cover'
            newMotorSecondSUv.style.background = 'url(img/sec/Engine.png)'
            newMotorSecondSUv.style.backgroundSize = '100% 100%'
            massagePer()
            per()
            buySeconddddd  ='lol'
            
        }else{
          
            IfDontHaveMoney()
        }
    }

  


}
)
////////////////////////////////////////////////////////

let newWheelsSecond = document.querySelector('.wheelss')
let buySecondddddd ='buy'
let newWheelsSecondSuv = document.querySelector('.wheelsac-two')
newWheelsSecond.addEventListener('click', function(){

if(buySecondddddd === 'buy'){
    if(coin_valut.innerHTML >= 80000){
        coin = coin - 80000
        coin_valut.innerHTML = coin

        second_car.addEventListener('click', function(){

            for (let i = 0; i < 50; i += 1) {
               coin[i] = coin++
            }
   
            
                
                coin_valut.innerHTML = coin
        })
        achuvemant = achuvemant +1
        massege = massege + 1
        newWheelsSecond.innerHTML = 'You bought it'
        newWheelsSecond.style.background = 'url(img/button/3434.970.jpg)'
        newWheelsSecond.style.backgroundSize = 'cover'
        newWheelsSecondSuv.style.background = 'url(img/sec/asanti-ab050bd-mogul-6-26x10-6-et30-gloss-black-w-machined-face-a1-png.webp)'
        per()
        massagePer()
        newWheelsSecondSuv.style.backgroundSize = '100% 100%'
        buySecondddddd ='lol'
        
        
    }else{
      
        IfDontHaveMoney()
    }
}


   


}
)
///////////////////////////////////////////////////


let newSuvenirsSecond = document.querySelector('.suvenirss')
let newSuvenirsSecondSuv = document.querySelector('.ronaldo-two')
let buySeconddddddd = 'buy'
newSuvenirsSecond.addEventListener('click', function(){


if(buySeconddddddd === 'buy'){
    if(coin_valut.innerHTML >= 5000){
        coin = coin - 5000
        coin_valut.innerHTML = coin

        second_car.addEventListener('click', function(){

            for (let i = 0; i < 25; i += 1) {
               coin[i] = coin++
            }
   
            
                
                coin_valut.innerHTML = coin
        })
        achuvemant = achuvemant +1
        massege = massege + 1
        newSuvenirsSecond.innerHTML = 'You bought it'
        newSuvenirsSecond.style.background = 'url(img/button/3434.970.jpg)'
        newSuvenirsSecond.style.backgroundSize = 'cover'
        newSuvenirsSecondSuv.style.background = 'url(img/sec/824.png)'
        newSuvenirsSecondSuv.style.backgroundSize = '100% 100%'
        massagePer()
        per()
        buySeconddddddd = 'lol'
        
    }else{
      
        IfDontHaveMoney()
    }

}

   

}
)

//////////////////////////////////////////


let newPendantSecond = document.querySelector('.pendantt')
let buySecondddddddd = 'buy'
let newPendantSecondSuv = document.querySelector('.pendan-two')
newPendantSecond.addEventListener('click', function(){


if(buySecondddddddd === 'buy'){
    if(coin_valut.innerHTML >= 25000){
        coin = coin - 25000
        coin_valut.innerHTML = coin

        second_car.addEventListener('click', function(){

            for (let i = 0; i < 50; i += 1) {
               coin[i] = coin++
            }
   
            
                
                coin_valut.innerHTML = coin
        })
        /////////////////////////////////
        quetionsqsTWO.style.background = 'green'
        quetionsqsTWO.innerHTML = 'Claim'
        quetionsqsTWO.style.cursor = 'pointer'
        per()
        let ggarageQuetion = 'noyes'

        quetionsqsTWO.addEventListener('click', function(){
            if(ggarageQuetion === 'noyes'){
                coin_valut.innerHTML =   +coin_valut.innerHTML + 15000
                coin = coin + 15000
                
                 ggarageQuetion = 'noyesno00'
                 quetionsqsTWO.style.background = 'grey'
                 quetionsqsTWO.innerHTML = 'Claimed'
            }
           
           
        })
        ////////////////////////////////
        achuvemant = achuvemant +1
        massege = massege + 1
        newPendantSecond.innerHTML = 'You bought it'
        newPendantSecond.style.background = 'url(img/button/3434.970.jpg)'
        newPendantSecond.style.backgroundSize = 'cover'
        newPendantSecondSuv.style.background = 'url(img/sec/12a8bfebf261846e21406023edab5d557.png)'
        newPendantSecondSuv.style.backgroundSize = '100% 100%'
        massagePer()
        per()
        buySecondddddddd = 'lol'
        
    }else{
      
        IfDontHaveMoney()
    }
}

   


}
)
////////////////////////////////////////////


let newturbineSecond = document.querySelector('.turbinee')
let buySeconddddddddd = 'buy'
let newturbineSecondSuv = document.querySelector('.turb-two')
newturbineSecond.addEventListener('click', function(){


if(buySeconddddddddd === 'buy'){
    if(coin_valut.innerHTML >= 150000){
        coin = coin - 150000
        coin_valut.innerHTML = coin

        second_car.addEventListener('click', function(){

            for (let i = 0; i < 100; i += 1) {
               coin[i] = coin++
            }
   
            
                
                coin_valut.innerHTML = coin
        })
        achuvemant = achuvemant +1
        massege = massege + 1
        newturbineSecond.innerHTML = 'You bought it'
        newturbineSecond.style.background = 'url(img/button/3434.970.jpg)'
        newturbineSecond.style.backgroundSize = 'cover'
        newturbineSecondSuv.style.background = 'url(img/sec/xturbo-kopiya.png.pagespeed.ic.f6PJOP2V.png)'
        newturbineSecondSuv.style.backgroundSize = '100% 100%'
        massagePer()
        per()
        buySeconddddddddd = 'lol'
        
    }else{
      
        IfDontHaveMoney()
    }

}

   
    
    }
)
/////////////////////////////////////////////////////
 








///////////////////////////////////////////////////////////////first
        let buyy = 'buyy'
        let motorpo = document.querySelector('.motorrr')
        newMotor.addEventListener('click', function(){
            if(buyy === 'buyy'){
                if(coin_valut.innerHTML >= 10000){
                    coin = coin - 10000
                    coin_valut.innerHTML = coin

                    first_car.addEventListener('click', function(){
                                   coin++
                                   coin++
                                   coin++
                                   coin++
                            coin_valut.innerHTML = coin
                    })
                    achuvemant = achuvemant +1
                    newMotor.innerHTML = 'You bought it'
                    newMotor.style.background = 'url(img/button/3434.970.jpg)'
                    newMotor.style.backgroundSize = 'cover'
                    motorpo.style.background = 'url(img/motor.webp)'
                    motorpo.style.backgroundSize = '100% 100%'
                    massege = massege + 1
                    per()
                    massagePer()
                    buyy = 'lol'
                    
                }else{
                   
                    IfDontHaveMoney()
                }
           
            
            }})


            let buyyy = 'buyyy'

            newSuvenirs.addEventListener('click', function(){
                if(buyyy === 'buyyy'){
                    if(coin_valut.innerHTML >= 100){
                        coin = coin - 100
                        coin_valut.innerHTML = coin
    
                        first_car.addEventListener('click', function(){
                                       coin++
                                
                                coin_valut.innerHTML = coin
                        })
                        achuvemant = achuvemant +1
                        newSuvenirs.innerHTML = 'You bought it'
                        newSuvenirs.style.background = 'url(img/button/3434.970.jpg)'
                        newSuvenirs.style.backgroundSize = 'cover'
                        ronaldo.style.background = 'url(img/dog.png)'
                        ronaldo.style.backgroundSize = '100% 100%'
                        massege = massege + 1
                        per()
                        massagePer()
                        buyyy = 'lol'
                        
                    }else{
                      
                        IfDontHaveMoney()
                    }
               
                
                }})


             

                let buyyyy = 'buyyyy'
                let wheelsac = document.querySelector('.wheelsac')
                
                newWheels.addEventListener('click', function(){
                    if(buyyyy === 'buyyyy'){
                        if(coin_valut.innerHTML >= 1000){
                            coin = coin - 1000
                            coin_valut.innerHTML = coin
        
                            first_car.addEventListener('click', function(){
                                           coin++
                                           coin++
                                    
                                    coin_valut.innerHTML = coin
                            })
        
                            newWheels.innerHTML = 'You bought it'
                            newWheels.style.background = 'url(img/button/3434.970.jpg)'
                            newWheels.style.backgroundSize = 'cover'
                            wheelsac.style.background = 'url(img/col.png)'
                            wheelsac.style.backgroundSize = '100% 100%'
                            massege = massege + 1
                            massagePer()
                            

                            achuvemant = achuvemant +1
                            per()
                            ///////////////////////
                            achivementsnotificationsNum =  achivementsnotificationsNum + 1
                            achivementsnotifications.innerHTML = achivementsnotificationsNum
                            achivementsnotifications.style.display = 'inline'
                
                         
                               
                                    claimQuetionThir.style.background = 'green'
                                    claimQuetionThir.innerHTML = 'Claim'
                                    claimQuetionThir.style.cursor = 'pointer'
                            
                                
                                    wheelQuetion = 'noyes'
                          
                            
                       
                                claimQuetionThir.addEventListener('click', function(){
                                    if(wheelQuetion === 'noyes'){
                                        coin_valut.innerHTML =   +coin_valut.innerHTML + 5000
                                        coin = coin + 5000
                                        
                                    
                                        claimQuetionThir.style.background = 'grey'
                                        claimQuetionThir.innerHTML = 'Claimed'
                                        wheelQuetion = 'noyesno'
                                    }
                                    
                                })
                                
                           
                            
                       
                            
                            

                            //////////////////////





                            buyyyy = 'lol'
                            
                        }else{
                            IfDontHaveMoney()
                        }
                   
                    
                    }})




                    let buy = 'buy'
                    let newwGarage = 'Nogarage'

    let garagepo = document.querySelector('.garagee')

   

    newGarage.addEventListener('click', function(){
        if(buy === 'buy'){
            if(coin_valut.innerHTML >= 50000){
                coin = coin - 50000
                coin_valut.innerHTML = coin
                massege = massege + 1
                achuvemant = achuvemant +1
                suvenirConteinerSecondOpeNOOPEN = 'yes'
                newGarage.innerHTML = 'You bought it'
                newGarage.style.background = 'url(img/button/3434.970.jpg)'
                newGarage.style.backgroundSize = 'cover'
                newwGarage = 'garage'
                garagepo.style.background = 'url(img/garage/fadfce82daef92615329df2ea50e3fd3.jpg)'
                garagepo.style.backgroundSize = '100% 100%'
                
                massagePer()

                    achivementsnotificationsNum =  achivementsnotificationsNum + 1
            achivementsnotifications.innerHTML = achivementsnotificationsNum
            achivementsnotifications.style.display = 'inline'

              




////////////////////////////////////


        claimQuetionSec.style.background = 'green'
        claimQuetionSec.innerHTML = 'Claim'
        claimQuetionSec.style.cursor = 'pointer'
        per()
        garageQuetion = 'noyes'

        claimQuetionSec.addEventListener('click', function(){
            if(garageQuetion === 'noyes'){
                coin_valut.innerHTML =   +coin_valut.innerHTML + 20000
                coin = coin + 20000
                
                 garageQuetion = 'noyesno'
                claimQuetionSec.style.background = 'grey'
                claimQuetionSec.innerHTML = 'Claimed'
            }
           
           
        })


///////////////////////////////////

                buy = 'lol'
                
            }else{
              
                IfDontHaveMoney()
            }
       
        
        }})


    let shop  = document.querySelector('.shop')
    let open = 'close'
        
        sec.addEventListener('click', function(){

            if(newwGarage === 'garage'){
 
                firs_upg.style.display = 'none'
                second_upg.style.display = 'flex'
                shop.style.left = '-40%'
                quetions.style.bottom = '-40%'
                shopBtnCheckk.checked = false
                quetionsBtnOpen.checked = false
                quetionsTWO = 'TWO'

                

                achivementsnotifications.style.display = 'none'
           
       

                anime({
                    targets: '.shop',
                    left: '-50%' ,
                    duration: 500,
                    easing: 'linear'
                })

                anime({
                    targets: '.shopp',
                    left: '-50%' ,
                    duration: 100,
                    easing: 'linear'
                })


            }else{

                if(open === 'open'){
                    shop.scrollBy({
                        top: 1460,
                        behavior : "smooth"
                      });
                
                      setTimeout(function(){
                        newGarage.style.background = 'red'
                        },400)
                        
                
                      setTimeout(function(){
                        newGarage.style.background =  'url(https://st2.depositphotos.com/5647624/45006/i/450/depositphotos_450060830-stock-photo-spanners-many-wrenches-industrial-background.jpg)'
                        newGarage.style.backgroundSize = '100% 100%'
                    },900)
                }
                



if(open === 'close'){
    shopBtnCheck.checked = true
    open = 'open'
    anime({
        targets: '.shop',
        left: 0 ,
        duration: 500,
        easing: 'linear'
    })
        setTimeout(function(){
            shop.scrollBy({
                top: 1460,
                behavior : "smooth"
              });
              
},700)



setTimeout(function(){
newGarage.style.background = 'red'
},1000)


    
    setTimeout(function(){
        newGarage.style.background =  'url(https://st2.depositphotos.com/5647624/45006/i/450/depositphotos_450060830-stock-photo-spanners-many-wrenches-industrial-background.jpg)'
        newGarage.style.backgroundSize = '100% 100%'
    },1700)

}




}

             
       
         } )







      




         let buyyyyy = 'buyyyyy'
         let ronaldo = document.querySelector('.ronaldo')
         let ropenda = document.querySelector('.pendan')
    

         newPendant.addEventListener('click', function(){
             if(buyyyyy === 'buyyyyy'){
                 if(coin_valut.innerHTML >= 500){
                     coin = coin - 500
                     coin_valut.innerHTML = coin
 
                     first_car.addEventListener('click', function(){
                                
                                    coin++
                             
                             coin_valut.innerHTML = coin
                     })
                     achuvemant = achuvemant +1
                     newPendant.innerHTML = 'You bought it'
                     newPendant.style.background = 'url(img/button/3434.970.jpg)'
                     newPendant.style.backgroundSize = 'cover'
                     ropenda.style.background = 'url(img/endant.png)'
                     ropenda.style.backgroundSize = '100% 100%'
                     massege = massege + 1


                    
                     massagePer()
                     per()
                     buyyyyy = 'lol'
                     
                 }else{
                   
                    IfDontHaveMoney()
                 }
            
             
             }})



   
   
   
   


             
         let buyyyyyy = 'buyyyyyy'
         let turb = document.querySelector('.turb')
         newturbine.addEventListener('click', function(){
             if(buyyyyyy === 'buyyyyyy'){
                 if(coin_valut.innerHTML >= 5000){
                     coin = coin - 5000
                     coin_valut.innerHTML = coin
 
                     first_car.addEventListener('click', function(){
                                    coin++
                                    coin++
                             
                             coin_valut.innerHTML = coin
                     })
                     per()
                     newturbine.innerHTML = 'You bought it'
                     newturbine.style.background = 'url(img/button/3434.970.jpg)'
                     newturbine.style.backgroundSize = 'cover'
                     turb.style.background = 'url(img/xturbo-kopiya.png.pagespeed.ic.f6PJOP2VlE.png)'
                     turb.style.backgroundSize = '100% 100%'
                     achuvemant = achuvemant +1
                     massege = massege + 1
                     massagePer()
                   
                     buyyyyyy = 'lol'
                     
                 }else{
                   
                    IfDontHaveMoney()
                 }
            
             
             }})


             //////////////////
       
             let  masterPeopleSecond = document.querySelector('.master-clickerr')
             let  masterPeopleSecondSuv = document.querySelector('.mechanicacc-two')

              let daleSecond = 'dale'
              let dozvilSecond = 'no'

               let domcratSecondCar = document.querySelector('.domcratt')

                let buySecondd = 'buy'

             newmechanicSecond.addEventListener('click', function(){
           if(buySecondd === 'buy'){
            if(coin_valut.innerHTML >= 50000){
                coin = coin - 50000
                coin_valut.innerHTML = coin

    

                setInterval(dozSecond, 1000)
                massege = massege + 1
                achuvemant = achuvemant + 1
                newmechanicSecond.innerHTML = 'Update mechanic 100000$ lv2'
                masterPeopleSecond.style.display = 'flex'
                second_car.style.left = ' 56%'
                  domcratSecondCar.style.display = 'flex'
                  second_car.style.rotate = '-8deg'
                  second_car.style.top = ' 56%'
                  masterPeopleSecondSuv.style.background = 'url(img/sec/Avtomekhanik-s-vyezdom-kruglosutochno.webp)'
                  masterPeopleSecondSuv.style.backgroundSize= '100% 100%'
                  massagePer()
                  ///////////////////
                  let innermaches = document.querySelector('.get-or-nojsdd')
                  machsec = machsec + 1
                  innermaches.innerHTML = machsec
                  ///////////////////
                  per()
                buySecondd = 'lol'
                
                daleSecond = 'dale'
                dozvilSecond = 'dozvil'
                
            }else{
              
                IfDontHaveMoney()
            }
       
           }
     
           
                })
                //  let coinnSecond = 0
                function dozSecond(){
                   
                        for(let i = 0; i < 30; i += 1)
                    coin[i] = coin++
        
                       
                        coin_valut.innerHTML = coin
                    }
            
                     
                    
            

          


         

             let buyyyyyyy = 'buyyyyyyy'
             let  masterPeople =document.querySelector('.master-clicker')
             let dozvil = 'no'
        
            let mack = document.querySelector('.mechanicacc')
              let dale = 'dale'
                 let domcrat = document.querySelector('.domcrat')
             newmechanic.addEventListener('click', function(){
                if(buyyyyyyy === 'buyyyyyyy'){
                    if(coin_valut.innerHTML >= 20000){
                        coin = coin - 20000
                        coin_valut.innerHTML = coin
    
            
    
                        
                       
                        newmechanic.innerHTML = 'Update mechanic 35000$ lv2'
                        masterPeople.style.display = 'flex'
                        per()
                      first_car.style.left = '56%'
                      first_car.style.rotate = '-10deg'
                      first_car.style.top = '50%'
                      domcrat.style.display = 'flex'
                      mack.style.background = 'url(img/mechanick.webp)'
                      mack.style.backgroundSize = '100% 100%'
                      massege = massege + 1
                      massagePer()
                        buyyyyyyy = 'lol'
                        achuvemant = achuvemant +1
                        dale = 'dale'
                        dozvil = 'dozvil'
                        
                    }else{
                      
                        IfDontHaveMoney()
                    }
               
                
                }})
                //  let coin = 0
                function doz(){
                    if(dozvil === 'dozvil'){
                        for(let i = 0; i < 15; i += 1)
                    coin[i] = coin++
                    
                       
                    coin_valut.innerHTML = coin
                        
                       
                       
                    }
            
                     
                    
                }   

          setInterval(doz, 1000)
////////////////////////////////////////////////////first and
 

        
/////////////header
        let aboutScrol = document.querySelector('.about-btn')

        

        aboutScrol.addEventListener('click', function(){

            MainClose.style.display = 'flex'
            Developers.style.display = 'none'
            leaders.style.display = 'none'
            window.scrollBy({
                top: 735,
                behavior : "smooth"
              });
        })
        
      
        
        let leadersBtn = document.querySelector('.game-btn')
        let leaders = document.querySelector('.leader-board')
        let main = document.querySelector('.main')

        leadersBtn.addEventListener('click', function(){
            leaders.style.display = 'flex'
            main.style.display = 'none'
            Developers.style.display = 'none'
        })
        
        //////////////////////////////////header and
    
        let MainClose= document.querySelector('.main')
        
        
        
        let goHomeTwo= document.querySelector('.btn-2')
        
        goHomeTwo.addEventListener('click', function(){
            header.style.display = 'flex'
            MainClose.style.display = 'flex'
            second_slide.style.display = 'none'
            firs_upg.style.display = 'none'
            second_upg.style.display = 'none'
      
           
        })







        //////////galery
        let slideIndex = 1;
        showSlides(slideIndex);
        
        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        // Thumbnail image controls
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("demo");
          let captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "flex";
          dots[slideIndex-1].className += " active";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }
        /////////////and galey




        ///////////////////shop
        let shopBtn = document.querySelector('.shopOpen')
        let shopBtnn = document.querySelector('.shopOpenn')
        let ShopClose = document.querySelector('.Close-shop')
        let ShopClosee = document.querySelector('.Close-shopp')
        let shopBtnCheck = document.querySelector('.shopOpencheck')
        let shopBtnCheckk = document.querySelector('.shopOpencheckk')


        shopBtn.addEventListener('click', function(){
        
            
                shopBtnCheck.checked = true
                open = 'open'
               
           
               
                anime({
                    targets: '.shop',
                    left: 0 ,
                    duration: 500,
                    easing: 'linear'
                })
            
         
           
        })

              let shopopenorclose = 1

        shopBtnn.addEventListener('click', function(){
         
            if(shopopenorclose === 1 ){
                shopBtnCheckk.checked = true
                open = 'open'
               
                anime({
                    targets: '.shopp',
                    left: 0 ,
                    duration: 500,
                    easing: 'linear'
                })
            }
            
           
        
     
       
    })

        ShopClose.addEventListener('click', function(){
            shopBtnCheck.checked = false
            open = 'close'
            anime({
                targets: '.shop',
                left: "-50%" ,
                duration: 500,
                easing: 'linear'
            })
        })

        ShopClosee.addEventListener('click', function(){
            shopBtnCheck.checked = false
            open = 'close'
            anime({
                targets: '.shopp',
                left: "-50%" ,
                duration: 500,
                easing: 'linear'
            })
        })
////////////////// shop and




/////////////////achivements
let suvenirConteinerBtn = document.querySelector('.suvenir-conteiner-btn')
let suvenirConteiner = document.querySelector('.suvenir-conteiner')
let suvenirConteinerClose = document.querySelector('.suvenir-conteiner-Close')



let suvenirConteinerCloseSecond = document.querySelector('.suvenir-conteiner-CloseSecond')




suvenirConteinerBtn.addEventListener('click', function(){
    suvenirConteiner.style.display = 'flex'
    massegeInner.style.display = 'none'
    massege = 0

})
        


suvenirConteinerClose.addEventListener('click', function(){
    suvenirConteiner.style.display = 'none'
})

suvenirConteinerCloseSecond.addEventListener('click', function(){
    suvenirConteinerSecond.style.display = 'none'
})





/////////////////achivements and



// let fortuneBtnClose = document.querySelector('.fortune-conteiner-Close')
// let fortuneBtnOpen= document.querySelector('.fortune')
// let fortune= document.querySelector('.fortune-conteiner')


// fortuneBtnOpen.addEventListener('click', function(){
//     fortune.style.display = 'flex'
// })

// fortuneBtnClose.addEventListener('click', function(){
//     fortune.style.display = 'none'
// })





//////////////////////stady haw play
let infConBeck = document.querySelector('.inf-hay-play-game-con')
let lets= document.querySelector('.lets')
let nextInf= document.querySelector('.inf-nex-inf')
let tInfConteiner= document.querySelector('.photo-hav-play')
let skip = document.querySelector('.skip')
let first = 1

skip.addEventListener('click', function(){
    infConBeck.style.display = 'none'
                    first = 6
})

nextInf.addEventListener('click', function(){

if(first === 1){
    tInfConteiner.style.background = 'url(img/inf-ob/third.png)'
    tInfConteiner.style.backgroundSize = '100% 100%'
    first = 2
}else{
    if(first === 2){
        tInfConteiner.style.background = 'url(img/inf-ob/second.png)'
        tInfConteiner.style.backgroundSize = '100% 100%'
        first = 3
    }else{
        if(first === 3){
            tInfConteiner.style.background = 'url(img/inf-ob/four.png)'
            tInfConteiner.style.backgroundSize = '100% 100%'
            first = 4
        }else{  
              if(first === 4){
                  tInfConteiner.style.background = 'url(img/inf-ob/last.png)'
                  tInfConteiner.style.backgroundSize = '100% 100%'
                  lets.innerHTML = 'Let`s play'
                  first = 5
              }else{
                    if(first === 5){
                    infConBeck.style.display = 'none'
                    first = 6
      }
     }
    }
   }
  }
})
//////////////////////stady haw play and

let infbtnOpen = document.querySelector('.tooltip')

infbtnOpen.addEventListener('click', function(){
    infConBeck.style.display = 'flex'
    first = 1
    tInfConteiner.style.background = 'url(img/inf-ob/firs.png)'
    tInfConteiner.style.backgroundSize = '100% 100%'
    lets.innerHTML = 'Next'
})


let quetionsBtnOpen = document.querySelector('.quetionsqs')
let quetions = document.querySelector('.quetions')
let quetionsClose = document.querySelector('.quetions-conteiner-Close')

let quetionsBtnOpenSEC = document.querySelector('.quetionsqsss')
let quetionsSEC = document.querySelector('.quetions-two')
let quetionsCloseSEC= document.querySelector('.quetions-conteiner-CloseSEC')


quetionsBtnOpenSEC.addEventListener('click', function(){
    if(quetionsTWO === 'TWO'){
        quetionsSEC.style.bottom = 0
    }
    
})

quetionsCloseSEC.addEventListener('click', function(){
    quetionsSEC.style.bottom = '-30%'
    quetionsBtnOpenSEC.checked = false 
})

quetionsBtnOpen.addEventListener('click', function(){
    if(quetionsTWO === 'one'){
        quetions.style.bottom = 0
    }
    

})



quetionsClose.addEventListener('click', function(){
    quetions.style.bottom = '-30%'
    quetionsBtnOpen.checked = false
})

let claimQuetion = document.querySelector('.get-or-noFir')
let claimQuetioncon = document.querySelector('.get-or-no')

let claimQuetionSec = document.querySelector('.get-or-noThir')
let claimQuetionThir = document.querySelector('.get-or-noSec')


let achuvemant = 0

let claimQuetiondoz = 'no'
let lolo = 1
let lolisjh = 1
let claimQuetiondozTWO = 'no'

function per(){
    if(lolo === 1){
        if(achuvemant === 3){
            achivementsnotificationsNum =  achivementsnotificationsNum + 1
            achivementsnotifications.innerHTML = achivementsnotificationsNum
            achivementsnotifications.style.display = 'inline'

            claimQuetioncon.style.background = 'green'
            claimQuetioncon.innerHTML = 'Claim'
            claimQuetioncon.style.cursor= 'pointer'
    
            claimQuetiondoz = 'yes'
            lolo = 2
            
        }
       
          claimQuetion.innerHTML = achuvemant
  }

  if(lolisjh === 1){
    if(achuvemant === 8){
        quetion8ACHCLAIM.style.background = 'green'
        quetion8ACHCLAIM.innerHTML = 'Claim'
        quetion8ACHCLAIM.style.cursor= 'pointer'

        claimQuetiondozTWO = 'yes'
   
        lolisjh = 2
        
    }
   
    achivementsQuetion8.innerHTML = achuvemant
}
}
let quetion8ACHCLAIM = document.querySelector('.get-or-noSEC')
quetion8ACHCLAIM.addEventListener('click', function(){
    if(claimQuetiondozTWO === 'yes'){
        quetion8ACHCLAIM.style.background = 'grey'
        quetion8ACHCLAIM.innerHTML = 'Claimed'

        coin = coin + 25000
        coin_valut.innerHTML =   +coin_valut.innerHTML + 25000

        claimQuetiondozTWO = 'no'
    } 
})

claimQuetioncon.addEventListener('click', function(){
    if(claimQuetiondoz === 'yes'){
        claimQuetioncon.style.background = 'grey'
        claimQuetioncon.innerHTML = 'Claimed'

        coin = coin + 5000
        coin_valut.innerHTML =   +coin_valut.innerHTML + 5000

        claimQuetiondoz = 'no'
    }
})




function IfDontHaveMoney(){
    coin_valut.style.color = 'red'
    coin_valut.style.scale = '1.2'
    setTimeout(function(){
        coin_valut.style.color = 'gold'
        coin_valut.style.scale = '1'
    },500)
    setTimeout(function(){
        coin_valut.style.color = 'red'
        coin_valut.style.scale = '1.2'
    },1000)
    setTimeout(function(){
        coin_valut.style.color = 'gold'
        coin_valut.style.scale = '1'
    },1500)
}


let suvenirConteinerSecond = document.querySelector('.suvenir-conteinerSecond')
let suvenirConteinerSecondOpen = document.querySelector('.next-Acivements')
let suvenirConteinerSecondOpeNOOPEN = 'no'

let nextAcivementsSecond = document.querySelector('.next-AcivementsSecond')

nextAcivementsSecond.addEventListener('click', function(){
    suvenirConteiner.style.display = 'flex'
    suvenirConteinerSecond.style.display = 'none'
})

suvenirConteinerSecondOpen.addEventListener('click', function(){
 if(suvenirConteinerSecondOpeNOOPEN === 'yes'){
    suvenirConteiner.style.display = 'none'
    suvenirConteinerSecond.style.display = 'flex'
 }else{
    if(suvenirConteinerSecondOpeNOOPEN === 'no'){
        suvenirConteiner.style.display = 'none'
        suvenirConteinerSecond.style.display = 'none'
        

        anime({
            targets: '.shop',
            left: 0 ,
            duration: 500,
            easing: 'linear'
        })
setTimeout(() => {
    
    
    shop.scrollBy({
        top: 1460,
        behavior : "smooth"
      });
}, 700);
        
    
          setTimeout(function(){
            newGarage.style.background = 'red'
            },1000)
            
    
          setTimeout(function(){
            newGarage.style.background =  'url(https://st2.depositphotos.com/5647624/45006/i/450/depositphotos_450060830-stock-photo-spanners-many-wrenches-industrial-background.jpg)'
            newGarage.style.backgroundSize = '100% 100%'
        },1500)
    }
 }
  
})



let conWelOpen = document.querySelector('.go-home-btn')

conWelOpen.addEventListener('click', function(){
   setTimeout(() => {
    window.scrollTo({
        top: 0,
        behavior : "smooth"
    })
   }, 500);
   Developers.style.display = 'none'
    MainClose.style.display = 'block'
    leaders.style.display = 'none'
})


let firsDev = document.querySelector('.firs-dev')
let secDev = document.querySelector('.sec-dev')
let thirdDev = document.querySelector('.third-dev')
let fourDev = document.querySelector('.four-dev')

let perDevNext = document.querySelector('.NextDev')
let perDevBack = document.querySelector('.BackDev')

let Developers = document.querySelector('.dev')

let developersOpen = document.querySelector('.developers-btn')

developersOpen.addEventListener('click', function(){
    MainClose.style.display = 'none'
    Developers.style.display = 'flex'
    leaders.style.display = 'none'
})
        
let Dev =  'SecondDev'

perDevNext.addEventListener('click', function(){

if(Dev === 'SecondDev'){
    firsDev.style.display = 'none'
    secDev.style.display = 'flex'

    perDevBack.style.display = 'flex'

    Dev =  'ThirdDev'
}else{

   if( Dev === 'ThirdDev'){
    firsDev.style.display = 'none'
    secDev.style.display = 'none'
    thirdDev.style.display = 'flex'

    perDevBack.style.display = 'flex'

    Dev =  'FourDev'
   }else{


    if(Dev === 'FourDev'){
        firsDev.style.display = 'none'
        secDev.style.display = 'none'
        thirdDev.style.display = 'none'
        fourDev.style.display = 'flex'

        perDevNext.style.display = 'none'
        perDevBack.style.display = 'flex'
    
       
    }
}
}

})

perDevBack.addEventListener('click', function(){
    if(Dev === 'SecondDev'){
        perDevBack.style.display = 'none'


        secDev.style.display = 'none'
        firsDev.style.display = 'flex'
    }
   if(Dev === 'ThirdDev'){
    secDev.style.display = 'flex'
    thirdDev.style.display = 'none'
 
    Dev = 'SecondDev'  
 }else{
    if(Dev === 'FourDev'){
        thirdDev.style.display = 'flex'
        fourDev.style.display = 'none'


        perDevBack.style.display = 'flex'
        perDevNext.style.display = 'flex'
        Dev =  'ThirdDev'
    }
   }
})


let achivementsQuetion8 = document.querySelector('.get-or-noSECONDQU')



