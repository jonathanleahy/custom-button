!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["custom-button"]=t():e["custom-button"]=t()}(window,function(){return r=[function(e,t,r){"use strict";e.exports=r(2)},function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return n});var t=r(0),u=r.n(t);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=l(r),t=(e=n?(e=l(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var n=function(e){var t=o;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e);var r,n=i(o);function o(){var e=this,t=o;if(e instanceof t)return n.apply(this,arguments);throw new TypeError("Cannot call a class as a function")}return t=o,(e=[{key:"render",value:function(){return u.a.createElement("button",null,"Hello")}}])&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(t.Component)},function(q,e,t){"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=t(3),t="function"==typeof Symbol&&Symbol.for,p=t?Symbol.for("react.element"):60103,l=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,n=t?Symbol.for("react.strict_mode"):60108,o=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.forward_ref"):60112,i=t?Symbol.for("react.suspense"):60113,s=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}function j(){}function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=h.prototype;var t=O.prototype=new j,g=(t.constructor=O,a(t,h.prototype),t.isPureReactComponent=!0,{current:null}),S=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)S.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var i=Array(f),l=0;l<f;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:p,type:e,key:u,ref:c,props:o,_owner:g.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===p}var x=/\/+/g,k=[];function E(e,t,r,n){var o;return k.length?((o=k.pop()).result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o):{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,k.length<10&&k.push(e)}function C(e,t,r){return null==e?0:function e(t,r,n,o){var u=!1;if(null===(t="undefined"!=(f=typeof t)&&"boolean"!==f?t:null))u=!0;else switch(f){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case p:case l:u=!0}}if(u)return n(o,t,""===r?"."+$(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f,i=r+$(f=t[c],c);u+=e(f,i,n,o)}else if("function"==typeof(i=null!==t&&"object"==typeof t&&"function"==typeof(i=d&&t[d]||t["@@iterator"])?i:null))for(t=i.call(t),c=0;!(f=t.next()).done;)u+=e(f=f.value,i=r+$(f,c++),n,o);else if("object"===f)throw n=""+t,Error(b(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return u}(e,"",t,r)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(e=e.key,r={"=":"=0",":":"=2"},"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var r}function A(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,function(e){return e}):null!=e&&(P(e)&&(t=o+(!(o=e).key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+r,e={$$typeof:p,type:o.type,key:t,ref:o.ref,props:o.props,_owner:o._owner}),n.push(e))}function M(e,t,r,n,o){var u="";C(e,U,t=E(t,u=null!=r?(""+r).replace(x,"$&/")+"/":u,n,o)),R(t)}var T={current:null};function I(){var e=T.current;if(null===e)throw Error(b(321));return e}t={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:a};e.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;C(e,A,t=E(null,null,t,r)),R(t)},count:function(e){return C(e,function(){return null},null)},toArray:function(e){var t=[];return M(e,t,null,function(e){return e}),t},only:function(e){if(P(e))return e;throw Error(b(143))}},e.Component=h,e.Fragment=r,e.Profiler=o,e.PureComponent=O,e.StrictMode=n,e.Suspense=i,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t,e.cloneElement=function(e,t,r){if(null==e)throw Error(b(267,e));var n=a({},e.props),o=e.key,u=e.ref,c=e._owner;if(null!=t)for(f in void 0!==t.ref&&(u=t.ref,c=g.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)S.call(t,f)&&!_.hasOwnProperty(f)&&(n[f]=(void 0===t[f]&&void 0!==i?i:t)[f]);var f=arguments.length-2;if(1===f)n.children=r;else if(1<f){for(var i=Array(f),l=0;l<f;l++)i[l]=arguments[l+2];n.children=i}return{$$typeof:p,type:e.type,key:o,ref:u,props:n,_owner:c}},e.createContext=function(e,t){return(e={$$typeof:c,_calculateChangedBits:t=void 0===t?null:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},e.createElement=w,e.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:f,render:e}},e.isValidElement=P,e.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},e.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},e.useCallback=function(e,t){return I().useCallback(e,t)},e.useContext=function(e,t){return I().useContext(e,t)},e.useDebugValue=function(){},e.useEffect=function(e,t){return I().useEffect(e,t)},e.useImperativeHandle=function(e,t,r){return I().useImperativeHandle(e,t,r)},e.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},e.useMemo=function(e,t){return I().useMemo(e,t)},e.useReducer=function(e,t,r){return I().useReducer(e,t,r)},e.useRef=function(e){return I().useRef(e)},e.useState=function(e){return I().useState(e)},e.version="16.14.0"},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},n)).join("")?void 0:1}catch(e){return}}()?Object.assign:function(e,t){for(var r,n=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),o=1;o<arguments.length;o++){for(var u in r=Object(arguments[o]))l.call(r,u)&&(n[u]=r[u]);if(i)for(var c=i(r),f=0;f<c.length;f++)a.call(r,c[f])&&(n[c[f]]=r[c[f]])}return n}}],n={},o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1);function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,n});