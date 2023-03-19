function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e,t){return Object.keys(t).forEach((function(n){"default"===n||"__esModule"===n||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),e}var a={},s={},o=n.parcelRequire25ef;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequire25ef=o),o.register("27Lyk",(function(t,n){var r,a;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},a=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("1b2ls",(function(t,n){
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,a,s;e(t.exports,"Fragment",(()=>r),(e=>r=e)),e(t.exports,"jsx",(()=>a),(e=>a=e)),e(t.exports,"jsxs",(()=>s),(e=>s=e));var i=o("acw62"),u=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,a={},s=null,o=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:u,type:e,key:s,ref:o,props:a,_owner:p.current}}r=l,a=f,s=f})),o.register("acw62",(function(e,t){e.exports=o("2pUnB")})),o.register("2pUnB",(function(t,n){
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,a,s,o,i,u,l,c,p,d,f,h,m,y,g,b,v,w,x,k,S,N,E,T,_,I,C,O,M,A,D,$,P,L,R;e(t.exports,"Children",(()=>r),(e=>r=e)),e(t.exports,"Component",(()=>a),(e=>a=e)),e(t.exports,"Fragment",(()=>s),(e=>s=e)),e(t.exports,"Profiler",(()=>o),(e=>o=e)),e(t.exports,"PureComponent",(()=>i),(e=>i=e)),e(t.exports,"StrictMode",(()=>u),(e=>u=e)),e(t.exports,"Suspense",(()=>l),(e=>l=e)),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>c),(e=>c=e)),e(t.exports,"cloneElement",(()=>p),(e=>p=e)),e(t.exports,"createContext",(()=>d),(e=>d=e)),e(t.exports,"createElement",(()=>f),(e=>f=e)),e(t.exports,"createFactory",(()=>h),(e=>h=e)),e(t.exports,"createRef",(()=>m),(e=>m=e)),e(t.exports,"forwardRef",(()=>y),(e=>y=e)),e(t.exports,"isValidElement",(()=>g),(e=>g=e)),e(t.exports,"lazy",(()=>b),(e=>b=e)),e(t.exports,"memo",(()=>v),(e=>v=e)),e(t.exports,"startTransition",(()=>w),(e=>w=e)),e(t.exports,"unstable_act",(()=>x),(e=>x=e)),e(t.exports,"useCallback",(()=>k),(e=>k=e)),e(t.exports,"useContext",(()=>S),(e=>S=e)),e(t.exports,"useDebugValue",(()=>N),(e=>N=e)),e(t.exports,"useDeferredValue",(()=>E),(e=>E=e)),e(t.exports,"useEffect",(()=>T),(e=>T=e)),e(t.exports,"useId",(()=>_),(e=>_=e)),e(t.exports,"useImperativeHandle",(()=>I),(e=>I=e)),e(t.exports,"useInsertionEffect",(()=>C),(e=>C=e)),e(t.exports,"useLayoutEffect",(()=>O),(e=>O=e)),e(t.exports,"useMemo",(()=>M),(e=>M=e)),e(t.exports,"useReducer",(()=>A),(e=>A=e)),e(t.exports,"useRef",(()=>D),(e=>D=e)),e(t.exports,"useState",(()=>$),(e=>$=e)),e(t.exports,"useSyncExternalStore",(()=>P),(e=>P=e)),e(t.exports,"useTransition",(()=>L),(e=>L=e)),e(t.exports,"version",(()=>R),(e=>R=e));var F=Symbol.for("react.element"),z=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,X={};function Z(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||Y}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=X,this.updater=n||Y}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,J(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ae=Object.prototype.hasOwnProperty,se={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function ie(e,t,n){var r,a={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)ae.call(t,r)&&!oe.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:F,type:e,key:s,ref:o,props:a,_owner:se.current}}function ue(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var le=/\/+/g;function ce(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function pe(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case F:case z:o=!0}}if(o)return a=a(o=e),e=""===r?"."+ce(o,0):r,re(a)?(n="",null!=e&&(n=e.replace(le,"$&/")+"/"),pe(a,t,n,"",(function(e){return e}))):null!=a&&(ue(a)&&(a=function(e,t){return{$$typeof:F,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(le,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=""===r?".":r+":",re(e))for(var i=0;i<e.length;i++){var u=r+ce(s=e[i],i);o+=pe(s,t,n,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Q&&e[Q]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),i=0;!(s=e.next()).done;)o+=pe(s=s.value,t,n,u=r+ce(s,i++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function de(e,t,n){if(null==e)return e;var r=[],a=0;return pe(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function fe(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var he={current:null},me={transition:null};r={map:de,forEach:function(e,t,n){de(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return de(e,(function(){t++})),t},toArray:function(e){return de(e,(function(e){return e}))||[]},only:function(e){if(!ue(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a=Z,s=B,o=V,i=te,u=U,l=q,c={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:me,ReactCurrentOwner:se},p=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=J({},e.props),a=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=se.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)ae.call(t,u)&&!oe.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==i?i[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){i=Array(u);for(var l=0;l<u;l++)i[l]=arguments[l+2];r.children=i}return{$$typeof:F,type:e.type,key:a,ref:s,props:r,_owner:o}},d=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:j,_context:e},e.Consumer=e},f=ie,h=function(e){var t=ie.bind(null,e);return t.type=e,t},m=function(){return{current:null}},y=function(e){return{$$typeof:W,render:e}},g=ue,b=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:fe}},v=function(e,t){return{$$typeof:K,type:e,compare:void 0===t?null:t}},w=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},x=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return he.current.useCallback(e,t)},S=function(e){return he.current.useContext(e)},N=function(){},E=function(e){return he.current.useDeferredValue(e)},T=function(e,t){return he.current.useEffect(e,t)},_=function(){return he.current.useId()},I=function(e,t,n){return he.current.useImperativeHandle(e,t,n)},C=function(e,t){return he.current.useInsertionEffect(e,t)},O=function(e,t){return he.current.useLayoutEffect(e,t)},M=function(e,t){return he.current.useMemo(e,t)},A=function(e,t,n){return he.current.useReducer(e,t,n)},D=function(e){return he.current.useRef(e)},$=function(e){return he.current.useState(e)},P=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)},L=function(){return he.current.useTransition()},R="18.2.0"})),o.register("Xw6Mv",(function(t,n){
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,a,s,i,u,l,c,p,d,f,h,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>r),(e=>r=e)),e(t.exports,"createPortal",(()=>a),(e=>a=e)),e(t.exports,"createRoot",(()=>s),(e=>s=e)),e(t.exports,"findDOMNode",(()=>i),(e=>i=e)),e(t.exports,"flushSync",(()=>u),(e=>u=e)),e(t.exports,"hydrate",(()=>l),(e=>l=e)),e(t.exports,"hydrateRoot",(()=>c),(e=>c=e)),e(t.exports,"render",(()=>p),(e=>p=e)),e(t.exports,"unmountComponentAtNode",(()=>d),(e=>d=e)),e(t.exports,"unstable_batchedUpdates",(()=>f),(e=>f=e)),e(t.exports,"unstable_renderSubtreeIntoContainer",(()=>h),(e=>h=e)),e(t.exports,"version",(()=>m),(e=>m=e));var y=o("acw62"),g=o("fO90s");function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,w={};function x(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(w[e]=t,e=0;e<t.length;e++)v.add(t[e])}var S=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),N=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},_={};function I(e,t,n,r,a,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){C[e]=new I(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];C[t]=new I(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){C[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){C[e]=new I(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){C[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){C[e]=new I(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){C[e]=new I(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){C[e]=new I(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){C[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)}));var O=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}function A(e,t,n,r){var a=C.hasOwnProperty(t)?C[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!N.call(_,e)||!N.call(T,e)&&(E.test(e)?_[e]=!0:(T[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(O,M);C[t]=new I(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(O,M);C[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(O,M);C[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){C[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)})),C.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){C[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)}));var D=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),P=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),B=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var q=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var K=Symbol.iterator;function G(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=K&&e[K]||e["@@iterator"])?e:null}var Q,Y=Object.assign;function J(e){if(void 0===Q)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var X=!1;function Z(e,t){if(!e||X)return"";X=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var a=t.stack.split("\n"),s=r.stack.split("\n"),o=a.length-1,i=s.length-1;1<=o&&0<=i&&a[o]!==s[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==s[i]){if(1!==o||1!==i)do{if(o--,0>--i||a[o]!==s[i]){var u="\n"+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=o&&0<=i);break}}}finally{X=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?J(e):""}function ee(e){switch(e.tag){case 5:return J(e.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case L:return"Fragment";case P:return"Portal";case F:return"Profiler";case R:return"StrictMode";case V:return"Suspense";case j:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case B:return(e.displayName||"Context")+".Consumer";case z:return(e._context.displayName||"Context")+".Provider";case U:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case H:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ae(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function se(e){e._valueTracker||(e._valueTracker=function(e){var t=ae(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function oe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ae(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ie(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ue(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function le(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ce(e,t){null!=(t=t.checked)&&A(e,"checked",t,!1)}function pe(e,t){ce(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?fe(e,t.type,n):t.hasOwnProperty("defaultValue")&&fe(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function de(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function fe(e,t,n){"number"===t&&ie(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var he=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ye(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(b(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ge(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(b(92));if(he(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function be(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ve(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function we(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?we(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ke,Se,Ne=(Se=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ke=ke||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Se(e,t)}))}:Se);function Ee(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_e=["Webkit","ms","Moz","O"];function Ie(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Te.hasOwnProperty(e)&&Te[e]?(""+t).trim():t+"px"}function Ce(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=Ie(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(Te).forEach((function(e){_e.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Te[t]=Te[e]}))}));var Oe=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Me(e,t){if(t){if(Oe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(b(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(b(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(b(62))}}function Ae(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function $e(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Pe=null,Le=null,Re=null;function Fe(e){if(e=Aa(e)){if("function"!=typeof Pe)throw Error(b(280));var t=e.stateNode;t&&(t=$a(t),Pe(e.stateNode,e.type,t))}}function ze(e){Le?Re?Re.push(e):Re=[e]:Le=e}function Be(){if(Le){var e=Le,t=Re;if(Re=Le=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function Ue(e,t){return e(t)}function Ve(){}var je=!1;function He(e,t,n){if(je)return e(t,n);je=!0;try{return Ue(e,t,n)}finally{je=!1,(null!==Le||null!==Re)&&(Ve(),Be())}}function We(e,t){var n=e.stateNode;if(null===n)return null;var r=$a(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(b(231,t,typeof n));return n}var qe=!1;if(S)try{var Ke={};Object.defineProperty(Ke,"passive",{get:function(){qe=!0}}),window.addEventListener("test",Ke,Ke),window.removeEventListener("test",Ke,Ke)}catch(Se){qe=!1}function Ge(e,t,n,r,a,s,o,i,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var Qe=!1,Ye=null,Je=!1,Xe=null,Ze={onError:function(e){Qe=!0,Ye=e}};function et(e,t,n,r,a,s,o,i,u){Qe=!1,Ye=null,Ge.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(b(188))}function at(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var s=a.alternate;if(null===s){if(null!==(r=a.return)){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return rt(a),e;if(s===r)return rt(a),t;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=a,r=s;else{for(var o=!1,i=a.child;i;){if(i===n){o=!0,n=a,r=s;break}if(i===r){o=!0,r=a,n=s;break}i=i.sibling}if(!o){for(i=s.child;i;){if(i===n){o=!0,n=s,r=a;break}if(i===r){o=!0,r=s,n=a;break}i=i.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(3!==n.tag)throw Error(b(188));return n.stateNode.current===n?e:t}(e))?st(e):null}function st(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=st(e);if(null!==t)return t;e=e.sibling}return null}var ot=g.unstable_scheduleCallback,it=g.unstable_cancelCallback,ut=g.unstable_shouldYield,lt=g.unstable_requestPaint,ct=g.unstable_now,pt=g.unstable_getCurrentPriorityLevel,dt=g.unstable_ImmediatePriority,ft=g.unstable_UserBlockingPriority,ht=g.unstable_NormalPriority,mt=g.unstable_LowPriority,yt=g.unstable_IdlePriority,gt=null,bt=null;var vt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(wt(e)/xt|0)|0},wt=Math.log,xt=Math.LN2;var kt=64,St=4194304;function Nt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Et(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,o=268435455&n;if(0!==o){var i=o&~a;0!==i?r=Nt(i):0!==(s&=o)&&(r=Nt(s))}else 0!==(o=n&~a)?r=Nt(o):0!==s&&(r=Nt(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&a)&&((a=r&-r)>=(s=t&-t)||16===a&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-vt(t)),r|=e[n],t&=~a;return r}function Tt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function _t(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function It(){var e=kt;return 0==(4194240&(kt<<=1))&&(kt=64),e}function Ct(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ot(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-vt(t)]=n}function Mt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var At=0;function Dt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var $t,Pt,Lt,Rt,Ft,zt=!1,Bt=[],Ut=null,Vt=null,jt=null,Ht=new Map,Wt=new Map,qt=[],Kt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gt(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Ht.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wt.delete(t.pointerId)}}function Qt(e,t,n,r,a,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},null!==t&&(null!==(t=Aa(t))&&Pt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Yt(e){var t=Ma(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ft(e.priority,(function(){Lt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Jt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=ln(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Aa(n))&&Pt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);De=r,n.target.dispatchEvent(r),De=null,t.shift()}return!0}function Xt(e,t,n){Jt(e)&&n.delete(t)}function Zt(){zt=!1,null!==Ut&&Jt(Ut)&&(Ut=null),null!==Vt&&Jt(Vt)&&(Vt=null),null!==jt&&Jt(jt)&&(jt=null),Ht.forEach(Xt),Wt.forEach(Xt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,zt||(zt=!0,g.unstable_scheduleCallback(g.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<Bt.length){en(Bt[0],e);for(var n=1;n<Bt.length;n++){var r=Bt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ut&&en(Ut,e),null!==Vt&&en(Vt,e),null!==jt&&en(jt,e),Ht.forEach(t),Wt.forEach(t),n=0;n<qt.length;n++)(r=qt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&null===(n=qt[0]).blockedOn;)Yt(n),null===n.blockedOn&&qt.shift()}var nn=D.ReactCurrentBatchConfig,rn=!0;function an(e,t,n,r){var a=At,s=nn.transition;nn.transition=null;try{At=1,on(e,t,n,r)}finally{At=a,nn.transition=s}}function sn(e,t,n,r){var a=At,s=nn.transition;nn.transition=null;try{At=4,on(e,t,n,r)}finally{At=a,nn.transition=s}}function on(e,t,n,r){if(rn){var a=ln(e,t,n,r);if(null===a)ra(e,t,r,un,n),Gt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Ut=Qt(Ut,e,t,n,r,a),!0;case"dragenter":return Vt=Qt(Vt,e,t,n,r,a),!0;case"mouseover":return jt=Qt(jt,e,t,n,r,a),!0;case"pointerover":var s=a.pointerId;return Ht.set(s,Qt(Ht.get(s)||null,e,t,n,r,a)),!0;case"gotpointercapture":return s=a.pointerId,Wt.set(s,Qt(Wt.get(s)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Gt(e,r),4&t&&-1<Kt.indexOf(e)){for(;null!==a;){var s=Aa(a);if(null!==s&&$t(s),null===(s=ln(e,t,n,r))&&ra(e,t,r,un,n),s===a)break;a=s}null!==a&&r.stopPropagation()}else ra(e,t,r,null,n)}}var un=null;function ln(e,t,n,r){if(un=null,null!==(e=Ma(e=$e(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return un=e,null}function cn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pt()){case dt:return 1;case ft:return 4;case ht:case mt:return 16;case yt:return 536870912;default:return 16}default:return 16}}var pn=null,dn=null,fn=null;function hn(){if(fn)return fn;var e,t,n=dn,r=n.length,a="value"in pn?pn.value:pn.textContent,s=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[s-t];t++);return fn=a.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function yn(){return!0}function gn(){return!1}function bn(e){function t(t,n,r,a,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?yn:gn,this.isPropagationStopped=gn,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var vn,wn,xn,kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(kn),Nn=Y({},kn,{view:0,detail:0}),En=bn(Nn),Tn=Y({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&"mousemove"===e.type?(vn=e.screenX-xn.screenX,wn=e.screenY-xn.screenY):wn=vn=0,xn=e),vn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),_n=bn(Tn),In=bn(Y({},Tn,{dataTransfer:0})),Cn=bn(Y({},Nn,{relatedTarget:0})),On=bn(Y({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=Y({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),An=bn(Mn),Dn=bn(Y({},kn,{data:0})),$n={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ln={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Ln[e])&&!!t[e]}function Fn(){return Rn}var zn=Y({},Nn,{key:function(e){if(e.key){var t=$n[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Pn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Bn=bn(zn),Un=bn(Y({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=bn(Y({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),jn=bn(Y({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Hn=Y({},Tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wn=bn(Hn),qn=[9,13,27,32],Kn=S&&"CompositionEvent"in window,Gn=null;S&&"documentMode"in document&&(Gn=document.documentMode);var Qn=S&&"TextEvent"in window&&!Gn,Yn=S&&(!Kn||Gn&&8<Gn&&11>=Gn),Jn=String.fromCharCode(32),Xn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ar(e,t,n,r){ze(r),0<(t=sa(t,"onChange")).length&&(n=new Sn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,or=null;function ir(e){Jr(e,0)}function ur(e){if(oe(Da(e)))return e}function lr(e,t){if("change"===e)return t}var cr=!1;if(S){var pr;if(S){var dr="oninput"in document;if(!dr){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),dr="function"==typeof fr.oninput}pr=dr}else pr=!1;cr=pr&&(!document.documentMode||9<document.documentMode)}function hr(){sr&&(sr.detachEvent("onpropertychange",mr),or=sr=null)}function mr(e){if("value"===e.propertyName&&ur(or)){var t=[];ar(t,or,e,$e(e)),He(ir,t)}}function yr(e,t,n){"focusin"===e?(hr(),or=n,(sr=t).attachEvent("onpropertychange",mr)):"focusout"===e&&hr()}function gr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return ur(or)}function br(e,t){if("click"===e)return ur(t)}function vr(e,t){if("input"===e||"change"===e)return ur(t)}var wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function xr(e,t){if(wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!N.call(t,a)||!wr(e[a],t[a]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sr(e,t){var n,r=kr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=kr(r)}}function Nr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Nr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Er(){for(var e=window,t=ie();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ie((e=t.contentWindow).document)}return t}function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function _r(e){var t=Er(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nr(n.ownerDocument.documentElement,n)){if(null!==r&&Tr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(r.start,a);r=void 0===r.end?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=Sr(n,s);var o=Sr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ir=S&&"documentMode"in document&&11>=document.documentMode,Cr=null,Or=null,Mr=null,Ar=!1;function Dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Ar||null==Cr||Cr!==ie(r)||("selectionStart"in(r=Cr)&&Tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Mr&&xr(Mr,r)||(Mr=r,0<(r=sa(Or,"onSelect")).length&&(t=new Sn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},Lr={},Rr={};function Fr(e){if(Lr[e])return Lr[e];if(!Pr[e])return e;var t,n=Pr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Rr)return Lr[e]=n[t];return e}S&&(Rr=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);var zr=Fr("animationend"),Br=Fr("animationiteration"),Ur=Fr("animationstart"),Vr=Fr("transitionend"),jr=new Map,Hr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(e,t){jr.set(e,t),x(t,[e])}for(var qr=0;qr<Hr.length;qr++){var Kr=Hr[qr];Wr(Kr.toLowerCase(),"on"+(Kr[0].toUpperCase()+Kr.slice(1)))}Wr(zr,"onAnimationEnd"),Wr(Br,"onAnimationIteration"),Wr(Ur,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(Vr,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Yr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,s,o,i,u){if(et.apply(this,arguments),Qe){if(!Qe)throw Error(b(198));var l=Ye;Qe=!1,Ye=null,Je||(Je=!0,Xe=l)}}(r,t,void 0,e),e.currentTarget=null}function Jr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],u=i.instance,l=i.currentTarget;if(i=i.listener,u!==s&&a.isPropagationStopped())break e;Yr(a,i,l),s=u}else for(o=0;o<r.length;o++){if(u=(i=r[o]).instance,l=i.currentTarget,i=i.listener,u!==s&&a.isPropagationStopped())break e;Yr(a,i,l),s=u}}}if(Je)throw e=Xe,Je=!1,Xe=null,e}function Xr(e,t){var n=t[Ia];void 0===n&&(n=t[Ia]=new Set);var r=e+"__bubble";n.has(r)||(na(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),na(n,e,r,t)}var ea="_reactListening"+Math.random().toString(36).slice(2);function ta(e){if(!e[ea]){e[ea]=!0,v.forEach((function(t){"selectionchange"!==t&&(Qr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ea]||(t[ea]=!0,Zr("selectionchange",!1,t))}}function na(e,t,n,r){switch(cn(t)){case 1:var a=an;break;case 4:a=sn;break;default:a=on}n=a.bind(null,t,n,e),a=void 0,!qe||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ra(e,t,n,r,a){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var i=r.stateNode.containerInfo;if(i===a||8===i.nodeType&&i.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var u=o.tag;if((3===u||4===u)&&((u=o.stateNode.containerInfo)===a||8===u.nodeType&&u.parentNode===a))return;o=o.return}for(;null!==i;){if(null===(o=Ma(i)))return;if(5===(u=o.tag)||6===u){r=s=o;continue e}i=i.parentNode}}r=r.return}He((function(){var r=s,a=$e(n),o=[];e:{var i=jr.get(e);if(void 0!==i){var u=Sn,l=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":u=Bn;break;case"focusin":l="focus",u=Cn;break;case"focusout":l="blur",u=Cn;break;case"beforeblur":case"afterblur":u=Cn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=_n;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=In;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=Vn;break;case zr:case Br:case Ur:u=On;break;case Vr:u=jn;break;case"scroll":u=En;break;case"wheel":u=Wn;break;case"copy":case"cut":case"paste":u=An;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=Un}var c=0!=(4&t),p=!c&&"scroll"===e,d=c?null!==i?i+"Capture":null:i;c=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=We(h,d))&&c.push(aa(h,m,f)))),p)break;h=h.return}0<c.length&&(i=new u(i,l,null,n,a),o.push({event:i,listeners:c}))}}if(0==(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===De||!(l=n.relatedTarget||n.fromElement)||!Ma(l)&&!l[_a])&&(u||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,u?(u=r,null!==(l=(l=n.relatedTarget||n.toElement)?Ma(l):null)&&(l!==(p=tt(l))||5!==l.tag&&6!==l.tag)&&(l=null)):(u=null,l=r),u!==l)){if(c=_n,m="onMouseLeave",d="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Un,m="onPointerLeave",d="onPointerEnter",h="pointer"),p=null==u?i:Da(u),f=null==l?i:Da(l),(i=new c(m,h+"leave",u,n,a)).target=p,i.relatedTarget=f,m=null,Ma(a)===r&&((c=new c(d,h+"enter",l,n,a)).target=f,c.relatedTarget=p,m=c),p=m,u&&l)e:{for(d=l,h=0,f=c=u;f;f=oa(f))h++;for(f=0,m=d;m;m=oa(m))f++;for(;0<h-f;)c=oa(c),h--;for(;0<f-h;)d=oa(d),f--;for(;h--;){if(c===d||null!==d&&c===d.alternate)break e;c=oa(c),d=oa(d)}c=null}else c=null;null!==u&&ia(o,i,u,c,!1),null!==l&&null!==p&&ia(o,p,l,c,!0)}if("select"===(u=(i=r?Da(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===u&&"file"===i.type)var y=lr;else if(rr(i))if(cr)y=vr;else{y=gr;var g=yr}else(u=i.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(y=br);switch(y&&(y=y(e,r))?ar(o,y,n,a):(g&&g(e,i,r),"focusout"===e&&(g=i._wrapperState)&&g.controlled&&"number"===i.type&&fe(i,"number",i.value)),g=r?Da(r):window,e){case"focusin":(rr(g)||"true"===g.contentEditable)&&(Cr=g,Or=r,Mr=null);break;case"focusout":Mr=Or=Cr=null;break;case"mousedown":Ar=!0;break;case"contextmenu":case"mouseup":case"dragend":Ar=!1,Dr(o,n,a);break;case"selectionchange":if(Ir)break;case"keydown":case"keyup":Dr(o,n,a)}var b;if(Kn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else tr?Zn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Yn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==v?"onCompositionEnd"===v&&tr&&(b=hn()):(dn="value"in(pn=a)?pn.value:pn.textContent,tr=!0)),0<(g=sa(r,v)).length&&(v=new Dn(v,e,null,n,a),o.push({event:v,listeners:g}),b?v.data=b:null!==(b=er(n))&&(v.data=b))),(b=Qn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Xn=!0,Jn);case"textInput":return(e=t.data)===Jn&&Xn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Kn&&Zn(e,t)?(e=hn(),fn=dn=pn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=sa(r,"onBeforeInput")).length&&(a=new Dn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=b))}Jr(o,t)}))}function aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sa(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,s=a.stateNode;5===a.tag&&null!==s&&(a=s,null!=(s=We(e,n))&&r.unshift(aa(e,s,a)),null!=(s=We(e,t))&&r.push(aa(e,s,a))),e=e.return}return r}function oa(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ia(e,t,n,r,a){for(var s=t._reactName,o=[];null!==n&&n!==r;){var i=n,u=i.alternate,l=i.stateNode;if(null!==u&&u===r)break;5===i.tag&&null!==l&&(i=l,a?null!=(u=We(n,s))&&o.unshift(aa(n,u,i)):a||null!=(u=We(n,s))&&o.push(aa(n,u,i))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var ua=/\r\n?/g,la=/\u0000|\uFFFD/g;function ca(e){return("string"==typeof e?e:""+e).replace(ua,"\n").replace(la,"")}function pa(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(b(425))}function da(){}var fa=null,ha=null;function ma(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ya="function"==typeof setTimeout?setTimeout:void 0,ga="function"==typeof clearTimeout?clearTimeout:void 0,ba="function"==typeof Promise?Promise:void 0,va="function"==typeof queueMicrotask?queueMicrotask:void 0!==ba?function(e){return ba.resolve(null).then(e).catch(wa)}:ya;function wa(e){setTimeout((function(){throw e}))}function xa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);tn(t)}function ka(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function Sa(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Na=Math.random().toString(36).slice(2),Ea="__reactFiber$"+Na,Ta="__reactProps$"+Na,_a="__reactContainer$"+Na,Ia="__reactEvents$"+Na,Ca="__reactListeners$"+Na,Oa="__reactHandles$"+Na;function Ma(e){var t=e[Ea];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_a]||n[Ea]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Sa(e);null!==e;){if(n=e[Ea])return n;e=Sa(e)}return t}n=(e=n).parentNode}return null}function Aa(e){return!(e=e[Ea]||e[_a])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Da(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(b(33))}function $a(e){return e[Ta]||null}var Pa=[],La=-1;function Ra(e){return{current:e}}function Fa(e){0>La||(e.current=Pa[La],Pa[La]=null,La--)}function za(e,t){La++,Pa[La]=e.current,e.current=t}var Ba={},Ua=Ra(Ba),Va=Ra(!1),ja=Ba;function Ha(e,t){var n=e.type.contextTypes;if(!n)return Ba;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,s={};for(a in n)s[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Wa(e){return null!=(e=e.childContextTypes)}function qa(){Fa(Va),Fa(Ua)}function Ka(e,t,n){if(Ua.current!==Ba)throw Error(b(168));za(Ua,t),za(Va,n)}function Ga(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(b(108,ne(e)||"Unknown",a));return Y({},n,r)}function Qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ba,ja=Ua.current,za(Ua,e),za(Va,Va.current),!0}function Ya(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Ga(e,t,ja),r.__reactInternalMemoizedMergedChildContext=e,Fa(Va),Fa(Ua),za(Ua,e)):Fa(Va),za(Va,n)}var Ja=null,Xa=!1,Za=!1;function es(e){null===Ja?Ja=[e]:Ja.push(e)}function ts(){if(!Za&&null!==Ja){Za=!0;var e=0,t=At;try{var n=Ja;for(At=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ja=null,Xa=!1}catch(t){throw null!==Ja&&(Ja=Ja.slice(e+1)),ot(dt,ts),t}finally{At=t,Za=!1}}return null}var ns=[],rs=0,as=null,ss=0,os=[],is=0,us=null,ls=1,cs="";function ps(e,t){ns[rs++]=ss,ns[rs++]=as,as=e,ss=t}function ds(e,t,n){os[is++]=ls,os[is++]=cs,os[is++]=us,us=e;var r=ls;e=cs;var a=32-vt(r)-1;r&=~(1<<a),n+=1;var s=32-vt(t)+a;if(30<s){var o=a-a%5;s=(r&(1<<o)-1).toString(32),r>>=o,a-=o,ls=1<<32-vt(t)+a|n<<a|r,cs=s+e}else ls=1<<s|n<<a|r,cs=e}function fs(e){null!==e.return&&(ps(e,1),ds(e,1,0))}function hs(e){for(;e===as;)as=ns[--rs],ns[rs]=null,ss=ns[--rs],ns[rs]=null;for(;e===us;)us=os[--is],os[is]=null,cs=os[--is],os[is]=null,ls=os[--is],os[is]=null}var ms=null,ys=null,gs=!1,bs=null;function vs(e,t){var n=Wl(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ws(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ms=e,ys=ka(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ms=e,ys=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==us?{id:ls,overflow:cs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Wl(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ms=e,ys=null,!0);default:return!1}}function xs(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function ks(e){if(gs){var t=ys;if(t){var n=t;if(!ws(e,t)){if(xs(e))throw Error(b(418));t=ka(n.nextSibling);var r=ms;t&&ws(e,t)?vs(r,n):(e.flags=-4097&e.flags|2,gs=!1,ms=e)}}else{if(xs(e))throw Error(b(418));e.flags=-4097&e.flags|2,gs=!1,ms=e}}}function Ss(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ms=e}function Ns(e){if(e!==ms)return!1;if(!gs)return Ss(e),gs=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ma(e.type,e.memoizedProps)),t&&(t=ys)){if(xs(e))throw Es(),Error(b(418));for(;t;)vs(e,t),t=ka(t.nextSibling)}if(Ss(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ys=ka(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ys=null}}else ys=ms?ka(e.stateNode.nextSibling):null;return!0}function Es(){for(var e=ys;e;)e=ka(e.nextSibling)}function Ts(){ys=ms=null,gs=!1}function _s(e){null===bs?bs=[e]:bs.push(e)}var Is=D.ReactCurrentBatchConfig;function Cs(e,t){if(e&&e.defaultProps){for(var n in t=Y({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Os=Ra(null),Ms=null,As=null,Ds=null;function $s(){Ds=As=Ms=null}function Ps(e){var t=Os.current;Fa(Os),e._currentValue=t}function Ls(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rs(e,t){Ms=e,Ds=As=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Di=!0),e.firstContext=null)}function Fs(e){var t=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:t,next:null},null===As){if(null===Ms)throw Error(b(308));As=e,Ms.dependencies={lanes:0,firstContext:e}}else As=As.next=e;return t}var zs=null;function Bs(e){null===zs?zs=[e]:zs.push(e)}function Us(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Bs(t)):(n.next=a.next,a.next=n),t.interleaved=n,Vs(e,r)}function Vs(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var js=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ws(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qs(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ks(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&Vu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Vs(e,n)}return null===(a=r.interleaved)?(t.next=t,Bs(r)):(t.next=a.next,a.next=t),r.interleaved=t,Vs(e,n)}function Gs(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Mt(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?a=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?a=s=t:s=s.next=t}else a=s=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var a=e.updateQueue;js=!1;var s=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(null!==i){a.shared.pending=null;var u=i,l=u.next;u.next=null,null===o?s=l:o.next=l,o=u;var c=e.alternate;null!==c&&((i=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===i?c.firstBaseUpdate=l:i.next=l,c.lastBaseUpdate=u))}if(null!==s){var p=a.baseState;for(o=0,c=l=u=null,i=s;;){var d=i.lane,f=i.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var h=e,m=i;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(h=m.payload)){p=h.call(f,p,d);break e}p=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(d="function"==typeof(h=m.payload)?h.call(f,p,d):h))break e;p=Y({},p,d);break e;case 2:js=!0}}null!==i.callback&&0!==i.lane&&(e.flags|=64,null===(d=a.effects)?a.effects=[i]:d.push(i))}else f={eventTime:f,lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(l=c=f,u=p):c=c.next=f,o|=d;if(null===(i=i.next)){if(null===(i=a.shared.pending))break;i=(d=i).next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}if(null===c&&(u=p),a.baseState=u,a.firstBaseUpdate=l,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===s&&(a.shared.lanes=0);Yu|=o,e.lanes=o,e.memoizedState=p}}function Js(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!=typeof a)throw Error(b(191,a));a.call(r)}}}var Xs=(new y.Component).refs;function Zs(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Y({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hl(),a=ml(e),s=qs(r,a);s.payload=t,null!=n&&(s.callback=n),null!==(t=Ks(e,s,a))&&(yl(t,e,a,r),Gs(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hl(),a=ml(e),s=qs(r,a);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Ks(e,s,a))&&(yl(t,e,a,r),Gs(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hl(),r=ml(e),a=qs(n,r);a.tag=2,null!=t&&(a.callback=t),null!==(t=Ks(e,a,r))&&(yl(t,e,r,n),Gs(t,e,r))}};function to(e,t,n,r,a,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!xr(n,r)||!xr(a,s))}function no(e,t,n){var r=!1,a=Ba,s=t.contextType;return"object"==typeof s&&null!==s?s=Fs(s):(a=Wa(t)?ja:Ua.current,s=(r=null!=(r=t.contextTypes))?Ha(e,a):Ba),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function ro(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function ao(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Xs,Hs(e);var s=t.contextType;"object"==typeof s&&null!==s?a.context=Fs(s):(s=Wa(t)?ja:Ua.current,a.context=Ha(e,s)),a.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Zs(e,t,s,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&eo.enqueueReplaceState(a,a.state,null),Ys(e,n,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function so(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var a=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=a.refs;t===Xs&&(t=a.refs={}),null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!=typeof e)throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function io(e){return(0,e._init)(e._payload)}function uo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Kl(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function i(e,t,n,r){return null===t||6!==t.tag?((t=Jl(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var s=n.type;return s===L?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===W&&io(s)===t.type)?((r=a(t,n.props)).ref=so(e,t,n),r.return=e,r):((r=Gl(n.type,n.key,n.props,null,e.mode,r)).ref=so(e,t,n),r.return=e,r)}function l(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Xl(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Ql(n,e.mode,r,s)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Jl(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case $:return(n=Gl(t.type,t.key,t.props,null,e.mode,n)).ref=so(e,null,t),n.return=e,n;case P:return(t=Xl(t,e.mode,n)).return=e,t;case W:return p(e,(0,t._init)(t._payload),n)}if(he(t)||G(t))return(t=Ql(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function d(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==a?null:i(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case $:return n.key===a?u(e,t,n,r):null;case P:return n.key===a?l(e,t,n,r):null;case W:return d(e,t,(a=n._init)(n._payload),r)}if(he(n)||G(n))return null!==a?null:c(e,t,n,r,null);oo(e,n)}return null}function f(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return i(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case $:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case P:return l(t,e=e.get(null===r.key?n:r.key)||null,r,a);case W:return f(e,t,n,(0,r._init)(r._payload),a)}if(he(r)||G(r))return c(t,e=e.get(n)||null,r,a,null);oo(t,r)}return null}function h(a,o,i,u){for(var l=null,c=null,h=o,m=o=0,y=null;null!==h&&m<i.length;m++){h.index>m?(y=h,h=null):y=h.sibling;var g=d(a,h,i[m],u);if(null===g){null===h&&(h=y);break}e&&h&&null===g.alternate&&t(a,h),o=s(g,o,m),null===c?l=g:c.sibling=g,c=g,h=y}if(m===i.length)return n(a,h),gs&&ps(a,m),l;if(null===h){for(;m<i.length;m++)null!==(h=p(a,i[m],u))&&(o=s(h,o,m),null===c?l=h:c.sibling=h,c=h);return gs&&ps(a,m),l}for(h=r(a,h);m<i.length;m++)null!==(y=f(h,a,m,i[m],u))&&(e&&null!==y.alternate&&h.delete(null===y.key?m:y.key),o=s(y,o,m),null===c?l=y:c.sibling=y,c=y);return e&&h.forEach((function(e){return t(a,e)})),gs&&ps(a,m),l}function m(a,o,i,u){var l=G(i);if("function"!=typeof l)throw Error(b(150));if(null==(i=l.call(i)))throw Error(b(151));for(var c=l=null,h=o,m=o=0,y=null,g=i.next();null!==h&&!g.done;m++,g=i.next()){h.index>m?(y=h,h=null):y=h.sibling;var v=d(a,h,g.value,u);if(null===v){null===h&&(h=y);break}e&&h&&null===v.alternate&&t(a,h),o=s(v,o,m),null===c?l=v:c.sibling=v,c=v,h=y}if(g.done)return n(a,h),gs&&ps(a,m),l;if(null===h){for(;!g.done;m++,g=i.next())null!==(g=p(a,g.value,u))&&(o=s(g,o,m),null===c?l=g:c.sibling=g,c=g);return gs&&ps(a,m),l}for(h=r(a,h);!g.done;m++,g=i.next())null!==(g=f(h,a,m,g.value,u))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),o=s(g,o,m),null===c?l=g:c.sibling=g,c=g);return e&&h.forEach((function(e){return t(a,e)})),gs&&ps(a,m),l}return function e(r,s,i,u){if("object"==typeof i&&null!==i&&i.type===L&&null===i.key&&(i=i.props.children),"object"==typeof i&&null!==i){switch(i.$$typeof){case $:e:{for(var l=i.key,c=s;null!==c;){if(c.key===l){if((l=i.type)===L){if(7===c.tag){n(r,c.sibling),(s=a(c,i.props.children)).return=r,r=s;break e}}else if(c.elementType===l||"object"==typeof l&&null!==l&&l.$$typeof===W&&io(l)===c.type){n(r,c.sibling),(s=a(c,i.props)).ref=so(r,c,i),s.return=r,r=s;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===L?((s=Ql(i.props.children,r.mode,u,i.key)).return=r,r=s):((u=Gl(i.type,i.key,i.props,null,r.mode,u)).ref=so(r,s,i),u.return=r,r=u)}return o(r);case P:e:{for(c=i.key;null!==s;){if(s.key===c){if(4===s.tag&&s.stateNode.containerInfo===i.containerInfo&&s.stateNode.implementation===i.implementation){n(r,s.sibling),(s=a(s,i.children||[])).return=r,r=s;break e}n(r,s);break}t(r,s),s=s.sibling}(s=Xl(i,r.mode,u)).return=r,r=s}return o(r);case W:return e(r,s,(c=i._init)(i._payload),u)}if(he(i))return h(r,s,i,u);if(G(i))return m(r,s,i,u);oo(r,i)}return"string"==typeof i&&""!==i||"number"==typeof i?(i=""+i,null!==s&&6===s.tag?(n(r,s.sibling),(s=a(s,i)).return=r,r=s):(n(r,s),(s=Jl(i,r.mode,u)).return=r,r=s),o(r)):n(r,s)}}var lo=uo(!0),co=uo(!1),po={},fo=Ra(po),ho=Ra(po),mo=Ra(po);function yo(e){if(e===po)throw Error(b(174));return e}function go(e,t){switch(za(mo,t),za(ho,e),za(fo,po),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xe(null,"");break;default:t=xe(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Fa(fo),za(fo,t)}function bo(){Fa(fo),Fa(ho),Fa(mo)}function vo(e){yo(mo.current);var t=yo(fo.current),n=xe(t,e.type);t!==n&&(za(ho,e),za(fo,n))}function wo(e){ho.current===e&&(Fa(fo),Fa(ho))}var xo=Ra(0);function ko(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var So=[];function No(){for(var e=0;e<So.length;e++)So[e]._workInProgressVersionPrimary=null;So.length=0}var Eo=D.ReactCurrentDispatcher,To=D.ReactCurrentBatchConfig,_o=0,Io=null,Co=null,Oo=null,Mo=!1,Ao=!1,Do=0,$o=0;function Po(){throw Error(b(321))}function Lo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function Ro(e,t,n,r,a,s){if(_o=s,Io=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=null===e||null===e.memoizedState?wi:xi,e=n(r,a),Ao){s=0;do{if(Ao=!1,Do=0,25<=s)throw Error(b(301));s+=1,Oo=Co=null,t.updateQueue=null,Eo.current=ki,e=n(r,a)}while(Ao)}if(Eo.current=vi,t=null!==Co&&null!==Co.next,_o=0,Oo=Co=Io=null,Mo=!1,t)throw Error(b(300));return e}function Fo(){var e=0!==Do;return Do=0,e}function zo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Oo?Io.memoizedState=Oo=e:Oo=Oo.next=e,Oo}function Bo(){if(null===Co){var e=Io.alternate;e=null!==e?e.memoizedState:null}else e=Co.next;var t=null===Oo?Io.memoizedState:Oo.next;if(null!==t)Oo=t,Co=e;else{if(null===e)throw Error(b(310));e={memoizedState:(Co=e).memoizedState,baseState:Co.baseState,baseQueue:Co.baseQueue,queue:Co.queue,next:null},null===Oo?Io.memoizedState=Oo=e:Oo=Oo.next=e}return Oo}function Uo(e,t){return"function"==typeof t?t(e):t}function Vo(e){var t=Bo(),n=t.queue;if(null===n)throw Error(b(311));n.lastRenderedReducer=e;var r=Co,a=r.baseQueue,s=n.pending;if(null!==s){if(null!==a){var o=a.next;a.next=s.next,s.next=o}r.baseQueue=a=s,n.pending=null}if(null!==a){s=a.next,r=r.baseState;var i=o=null,u=null,l=s;do{var c=l.lane;if((_o&c)===c)null!==u&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var p={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};null===u?(i=u=p,o=r):u=u.next=p,Io.lanes|=c,Yu|=c}l=l.next}while(null!==l&&l!==s);null===u?o=r:u.next=i,wr(r,t.memoizedState)||(Di=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{s=a.lane,Io.lanes|=s,Yu|=s,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jo(e){var t=Bo(),n=t.queue;if(null===n)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,s=t.memoizedState;if(null!==a){n.pending=null;var o=a=a.next;do{s=e(s,o.action),o=o.next}while(o!==a);wr(s,t.memoizedState)||(Di=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ho(){}function Wo(e,t){var n=Io,r=Bo(),a=t(),s=!wr(r.memoizedState,a);if(s&&(r.memoizedState=a,Di=!0),r=r.queue,ri(Go.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==Oo&&1&Oo.memoizedState.tag){if(n.flags|=2048,Xo(9,Ko.bind(null,n,r,a,t),void 0,null),null===ju)throw Error(b(349));0!=(30&_o)||qo(n,t,a)}return a}function qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Io.updateQueue)?(t={lastEffect:null,stores:null},Io.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Qo(t)&&Yo(e)}function Go(e,t,n){return n((function(){Qo(t)&&Yo(e)}))}function Qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch(e){return!0}}function Yo(e){var t=Vs(e,1);null!==t&&yl(t,e,1,-1)}function Jo(e){var t=zo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t.queue=e,e=e.dispatch=mi.bind(null,Io,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Io.updateQueue)?(t={lastEffect:null,stores:null},Io.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zo(){return Bo().memoizedState}function ei(e,t,n,r){var a=zo();Io.flags|=e,a.memoizedState=Xo(1|t,n,void 0,void 0===r?null:r)}function ti(e,t,n,r){var a=Bo();r=void 0===r?null:r;var s=void 0;if(null!==Co){var o=Co.memoizedState;if(s=o.destroy,null!==r&&Lo(r,o.deps))return void(a.memoizedState=Xo(t,n,s,r))}Io.flags|=e,a.memoizedState=Xo(1|t,n,s,r)}function ni(e,t){return ei(8390656,8,e,t)}function ri(e,t){return ti(2048,8,e,t)}function ai(e,t){return ti(4,2,e,t)}function si(e,t){return ti(4,4,e,t)}function oi(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ii(e,t,n){return n=null!=n?n.concat([e]):null,ti(4,4,oi.bind(null,t,e),n)}function ui(){}function li(e,t){var n=Bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Lo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ci(e,t){var n=Bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Lo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pi(e,t,n){return 0==(21&_o)?(e.baseState&&(e.baseState=!1,Di=!0),e.memoizedState=n):(wr(n,t)||(n=It(),Io.lanes|=n,Yu|=n,e.baseState=!0),t)}function di(e,t){var n=At;At=0!==n&&4>n?n:4,e(!0);var r=To.transition;To.transition={};try{e(!1),t()}finally{At=n,To.transition=r}}function fi(){return Bo().memoizedState}function hi(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yi(e))gi(t,n);else if(null!==(n=Us(e,t,n,r))){yl(n,e,r,hl()),bi(n,t,r)}}function mi(e,t,n){var r=ml(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yi(e))gi(t,a);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,i=s(o,n);if(a.hasEagerState=!0,a.eagerState=i,wr(i,o)){var u=t.interleaved;return null===u?(a.next=a,Bs(t)):(a.next=u.next,u.next=a),void(t.interleaved=a)}}catch(e){}null!==(n=Us(e,t,a,r))&&(yl(n,e,r,a=hl()),bi(n,t,r))}}function yi(e){var t=e.alternate;return e===Io||null!==t&&t===Io}function gi(e,t){Ao=Mo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bi(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Mt(e,n)}}var vi={readContext:Fs,useCallback:Po,useContext:Po,useEffect:Po,useImperativeHandle:Po,useInsertionEffect:Po,useLayoutEffect:Po,useMemo:Po,useReducer:Po,useRef:Po,useState:Po,useDebugValue:Po,useDeferredValue:Po,useTransition:Po,useMutableSource:Po,useSyncExternalStore:Po,useId:Po,unstable_isNewReconciler:!1},wi={readContext:Fs,useCallback:function(e,t){return zo().memoizedState=[e,void 0===t?null:t],e},useContext:Fs,useEffect:ni,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ei(4194308,4,oi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return ei(4,2,e,t)},useMemo:function(e,t){var n=zo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hi.bind(null,Io,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},zo().memoizedState=e},useState:Jo,useDebugValue:ui,useDeferredValue:function(e){return zo().memoizedState=e},useTransition:function(){var e=Jo(!1),t=e[0];return e=di.bind(null,e[1]),zo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Io,a=zo();if(gs){if(void 0===n)throw Error(b(407));n=n()}else{if(n=t(),null===ju)throw Error(b(349));0!=(30&_o)||qo(r,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,ni(Go.bind(null,r,s,e),[e]),r.flags|=2048,Xo(9,Ko.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=zo(),t=ju.identifierPrefix;if(gs){var n=cs;t=":"+t+"R"+(n=(ls&~(1<<32-vt(ls)-1)).toString(32)+n),0<(n=Do++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=$o++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xi={readContext:Fs,useCallback:li,useContext:Fs,useEffect:ri,useImperativeHandle:ii,useInsertionEffect:ai,useLayoutEffect:si,useMemo:ci,useReducer:Vo,useRef:Zo,useState:function(){return Vo(Uo)},useDebugValue:ui,useDeferredValue:function(e){return pi(Bo(),Co.memoizedState,e)},useTransition:function(){return[Vo(Uo)[0],Bo().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Wo,useId:fi,unstable_isNewReconciler:!1},ki={readContext:Fs,useCallback:li,useContext:Fs,useEffect:ri,useImperativeHandle:ii,useInsertionEffect:ai,useLayoutEffect:si,useMemo:ci,useReducer:jo,useRef:Zo,useState:function(){return jo(Uo)},useDebugValue:ui,useDeferredValue:function(e){var t=Bo();return null===Co?t.memoizedState=e:pi(t,Co.memoizedState,e)},useTransition:function(){return[jo(Uo)[0],Bo().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Wo,useId:fi,unstable_isNewReconciler:!1};function Si(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var a=n}catch(e){a="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:a,digest:null}}function Ni(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Ei(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var Ti="function"==typeof WeakMap?WeakMap:Map;function _i(e,t,n){(n=qs(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,sl=r),Ei(0,t)},n}function Ii(e,t,n){(n=qs(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Ei(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){Ei(0,t),"function"!=typeof r&&(null===ol?ol=new Set([this]):ol.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Ci(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Ti;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function Oi(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Mi(e,t,n,r,a){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=qs(-1,1)).tag=2,Ks(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Ai=D.ReactCurrentOwner,Di=!1;function $i(e,t,n,r){t.child=null===e?co(t,null,n,r):lo(t,e.child,n,r)}function Pi(e,t,n,r,a){n=n.render;var s=t.ref;return Rs(t,a),r=Ro(e,t,n,r,s,a),n=Fo(),null===e||Di?(gs&&n&&fs(t),t.flags|=1,$i(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,au(e,t,a))}function Li(e,t,n,r,a){if(null===e){var s=n.type;return"function"!=typeof s||ql(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Gl(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Ri(e,t,s,r,a))}if(s=e.child,0==(e.lanes&a)){var o=s.memoizedProps;if((n=null!==(n=n.compare)?n:xr)(o,r)&&e.ref===t.ref)return au(e,t,a)}return t.flags|=1,(e=Kl(s,r)).ref=t.ref,e.return=t,t.child=e}function Ri(e,t,n,r,a){if(null!==e){var s=e.memoizedProps;if(xr(s,r)&&e.ref===t.ref){if(Di=!1,t.pendingProps=r=s,0==(e.lanes&a))return t.lanes=e.lanes,au(e,t,a);0!=(131072&e.flags)&&(Di=!0)}}return Bi(e,t,n,r,a)}function Fi(e,t,n){var r=t.pendingProps,a=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},za(Ku,qu),qu|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,za(Ku,qu),qu|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,za(Ku,qu),qu|=r}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,za(Ku,qu),qu|=r;return $i(e,t,a,n),t.child}function zi(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bi(e,t,n,r,a){var s=Wa(n)?ja:Ua.current;return s=Ha(t,s),Rs(t,a),n=Ro(e,t,n,r,s,a),r=Fo(),null===e||Di?(gs&&r&&fs(t),t.flags|=1,$i(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,au(e,t,a))}function Ui(e,t,n,r,a){if(Wa(n)){var s=!0;Qa(t)}else s=!1;if(Rs(t,a),null===t.stateNode)ru(e,t),no(t,n,r),ao(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,i=t.memoizedProps;o.props=i;var u=o.context,l=n.contextType;"object"==typeof l&&null!==l?l=Fs(l):l=Ha(t,l=Wa(n)?ja:Ua.current);var c=n.getDerivedStateFromProps,p="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;p||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(i!==r||u!==l)&&ro(t,o,r,l),js=!1;var d=t.memoizedState;o.state=d,Ys(t,r,o,a),u=t.memoizedState,i!==r||d!==u||Va.current||js?("function"==typeof c&&(Zs(t,n,c,r),u=t.memoizedState),(i=js||to(t,n,i,r,d,u,l))?(p||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=l,r=i):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ws(e,t),i=t.memoizedProps,l=t.type===t.elementType?i:Cs(t.type,i),o.props=l,p=t.pendingProps,d=o.context,"object"==typeof(u=n.contextType)&&null!==u?u=Fs(u):u=Ha(t,u=Wa(n)?ja:Ua.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(i!==p||d!==u)&&ro(t,o,r,u),js=!1,d=t.memoizedState,o.state=d,Ys(t,r,o,a);var h=t.memoizedState;i!==p||d!==h||Va.current||js?("function"==typeof f&&(Zs(t,n,f,r),h=t.memoizedState),(l=js||to(t,n,l,r,d,h,u)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,u),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,u)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=u,r=l):("function"!=typeof o.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Vi(e,t,n,r,s,a)}function Vi(e,t,n,r,a,s){zi(e,t);var o=0!=(128&t.flags);if(!r&&!o)return a&&Ya(t,n,!1),au(e,t,s);r=t.stateNode,Ai.current=t;var i=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=lo(t,e.child,null,s),t.child=lo(t,null,i,s)):$i(e,t,i,s),t.memoizedState=r.state,a&&Ya(t,n,!0),t.child}function ji(e){var t=e.stateNode;t.pendingContext?Ka(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ka(0,t.context,!1),go(e,t.containerInfo)}function Hi(e,t,n,r,a){return Ts(),_s(a),t.flags|=256,$i(e,t,n,r),t.child}var Wi,qi,Ki,Gi,Qi={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ji(e,t,n){var r,a=t.pendingProps,s=xo.current,o=!1,i=0!=(128&t.flags);if((r=i)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),za(xo,1&s),null===e)return ks(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(i=a.children,e=a.fallback,o?(a=t.mode,o=t.child,i={mode:"hidden",children:i},0==(1&a)&&null!==o?(o.childLanes=0,o.pendingProps=i):o=Yl(i,a,0,null),e=Ql(e,a,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Yi(n),t.memoizedState=Qi,e):Xi(t,i));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,a,s,o){if(n)return 256&t.flags?(t.flags&=-257,Zi(e,t,o,r=Ni(Error(b(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,a=t.mode,r=Yl({mode:"visible",children:r.children},a,0,null),(s=Ql(s,a,o,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!=(1&t.mode)&&lo(t,e.child,null,o),t.child.memoizedState=Yi(o),t.memoizedState=Qi,s);if(0==(1&t.mode))return Zi(e,t,o,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var i=r.dgst;return r=i,Zi(e,t,o,r=Ni(s=Error(b(419)),r,void 0))}if(i=0!=(o&e.childLanes),Di||i){if(null!==(r=ju)){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!=(a&(r.suspendedLanes|o))?0:a)&&a!==s.retryLane&&(s.retryLane=a,Vs(e,a),yl(r,e,a,-1))}return Cl(),Zi(e,t,o,r=Ni(Error(b(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Ul.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,ys=ka(a.nextSibling),ms=t,gs=!0,bs=null,null!==e&&(os[is++]=ls,os[is++]=cs,os[is++]=us,ls=e.id,cs=e.overflow,us=t),t=Xi(t,r.children),t.flags|=4096,t)}(e,t,i,a,r,s,n);if(o){o=a.fallback,i=t.mode,r=(s=e.child).sibling;var u={mode:"hidden",children:a.children};return 0==(1&i)&&t.child!==s?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Kl(s,u)).subtreeFlags=14680064&s.subtreeFlags,null!==r?o=Kl(r,o):(o=Ql(o,i,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,i=null===(i=e.child.memoizedState)?Yi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Qi,a}return e=(o=e.child).sibling,a=Kl(o,{mode:"visible",children:a.children}),0==(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Xi(e,t){return(t=Yl({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Zi(e,t,n,r){return null!==r&&_s(r),lo(t,e.child,null,n),(e=Xi(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function eu(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ls(e.return,t,n)}function tu(e,t,n,r,a){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function nu(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail;if($i(e,t,r.children,n),0!=(2&(r=xo.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&eu(e,n,t);else if(19===e.tag)eu(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(za(xo,r),0==(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ko(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),tu(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ko(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}tu(t,!0,n,null,s);break;case"together":tu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ru(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function au(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Yu|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(b(153));if(null!==t.child){for(n=Kl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Kl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function su(e,t){if(!gs)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ou(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function iu(e,t,n){var r=t.pendingProps;switch(hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ou(t),null;case 1:case 17:return Wa(t.type)&&qa(),ou(t),null;case 3:return r=t.stateNode,bo(),Fa(Va),Fa(Ua),No(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Ns(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==bs&&(wl(bs),bs=null))),qi(e,t),ou(t),null;case 5:wo(t);var a=yo(mo.current);if(n=t.type,null!==e&&null!=t.stateNode)Ki(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(b(166));return ou(t),null}if(e=yo(fo.current),Ns(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ea]=t,r[Ta]=s,e=0!=(1&t.mode),n){case"dialog":Xr("cancel",r),Xr("close",r);break;case"iframe":case"object":case"embed":Xr("load",r);break;case"video":case"audio":for(a=0;a<Gr.length;a++)Xr(Gr[a],r);break;case"source":Xr("error",r);break;case"img":case"image":case"link":Xr("error",r),Xr("load",r);break;case"details":Xr("toggle",r);break;case"input":le(r,s),Xr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Xr("invalid",r);break;case"textarea":ge(r,s),Xr("invalid",r)}for(var o in Me(n,s),a=null,s)if(s.hasOwnProperty(o)){var i=s[o];"children"===o?"string"==typeof i?r.textContent!==i&&(!0!==s.suppressHydrationWarning&&pa(r.textContent,i,e),a=["children",i]):"number"==typeof i&&r.textContent!==""+i&&(!0!==s.suppressHydrationWarning&&pa(r.textContent,i,e),a=["children",""+i]):w.hasOwnProperty(o)&&null!=i&&"onScroll"===o&&Xr("scroll",r)}switch(n){case"input":se(r),de(r,s,!0);break;case"textarea":se(r),ve(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=da)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=we(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ea]=t,e[Ta]=r,Wi(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ae(n,r),n){case"dialog":Xr("cancel",e),Xr("close",e),a=r;break;case"iframe":case"object":case"embed":Xr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Gr.length;a++)Xr(Gr[a],e);a=r;break;case"source":Xr("error",e),a=r;break;case"img":case"image":case"link":Xr("error",e),Xr("load",e),a=r;break;case"details":Xr("toggle",e),a=r;break;case"input":le(e,r),a=ue(e,r),Xr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Y({},r,{value:void 0}),Xr("invalid",e);break;case"textarea":ge(e,r),a=ye(e,r),Xr("invalid",e)}for(s in Me(n,a),i=a)if(i.hasOwnProperty(s)){var u=i[s];"style"===s?Ce(e,u):"dangerouslySetInnerHTML"===s?null!=(u=u?u.__html:void 0)&&Ne(e,u):"children"===s?"string"==typeof u?("textarea"!==n||""!==u)&&Ee(e,u):"number"==typeof u&&Ee(e,""+u):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(w.hasOwnProperty(s)?null!=u&&"onScroll"===s&&Xr("scroll",e):null!=u&&A(e,s,u,o))}switch(n){case"input":se(e),de(e,r,!1);break;case"textarea":se(e),ve(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?me(e,!!r.multiple,s,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=da)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ou(t),null;case 6:if(e&&null!=t.stateNode)Gi(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(b(166));if(n=yo(mo.current),yo(fo.current),Ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ea]=t,(s=r.nodeValue!==n)&&null!==(e=ms))switch(e.tag){case 3:pa(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&pa(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Ea]=t,t.stateNode=r}return ou(t),null;case 13:if(Fa(xo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(gs&&null!==ys&&0!=(1&t.mode)&&0==(128&t.flags))Es(),Ts(),t.flags|=98560,s=!1;else if(s=Ns(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(b(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(b(317));s[Ea]=t}else Ts(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ou(t),s=!1}else null!==bs&&(wl(bs),bs=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&xo.current)?0===Gu&&(Gu=3):Cl())),null!==t.updateQueue&&(t.flags|=4),ou(t),null);case 4:return bo(),qi(e,t),null===e&&ta(t.stateNode.containerInfo),ou(t),null;case 10:return Ps(t.type._context),ou(t),null;case 19:if(Fa(xo),null===(s=t.memoizedState))return ou(t),null;if(r=0!=(128&t.flags),null===(o=s.rendering))if(r)su(s,!1);else{if(0!==Gu||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=ko(e))){for(t.flags|=128,su(s,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return za(xo,1&xo.current|2),t.child}e=e.sibling}null!==s.tail&&ct()>nl&&(t.flags|=128,r=!0,su(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ko(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),su(s,!0),null===s.tail&&"hidden"===s.tailMode&&!o.alternate&&!gs)return ou(t),null}else 2*ct()-s.renderingStartTime>nl&&1073741824!==n&&(t.flags|=128,r=!0,su(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=s.last)?n.sibling=o:t.child=o,s.last=o)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ct(),t.sibling=null,n=xo.current,za(xo,r?1&n|2:1&n),t):(ou(t),null);case 22:case 23:return El(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&qu)&&(ou(t),6&t.subtreeFlags&&(t.flags|=8192)):ou(t),null;case 24:case 25:return null}throw Error(b(156,t.tag))}function uu(e,t){switch(hs(t),t.tag){case 1:return Wa(t.type)&&qa(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return bo(),Fa(Va),Fa(Ua),No(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return wo(t),null;case 13:if(Fa(xo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(b(340));Ts()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Fa(xo),null;case 4:return bo(),null;case 10:return Ps(t.type._context),null;case 22:case 23:return El(),null;default:return null}}Wi=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},qi=function(){},Ki=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,yo(fo.current);var s,o=null;switch(n){case"input":a=ue(e,a),r=ue(e,r),o=[];break;case"select":a=Y({},a,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":a=ye(e,a),r=ye(e,r),o=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=da)}for(l in Me(n,r),n=null,a)if(!r.hasOwnProperty(l)&&a.hasOwnProperty(l)&&null!=a[l])if("style"===l){var i=a[l];for(s in i)i.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(w.hasOwnProperty(l)?o||(o=[]):(o=o||[]).push(l,null));for(l in r){var u=r[l];if(i=null!=a?a[l]:void 0,r.hasOwnProperty(l)&&u!==i&&(null!=u||null!=i))if("style"===l)if(i){for(s in i)!i.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&i[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(l,n)),n=u;else"dangerouslySetInnerHTML"===l?(u=u?u.__html:void 0,i=i?i.__html:void 0,null!=u&&i!==u&&(o=o||[]).push(l,u)):"children"===l?"string"!=typeof u&&"number"!=typeof u||(o=o||[]).push(l,""+u):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(w.hasOwnProperty(l)?(null!=u&&"onScroll"===l&&Xr("scroll",e),o||i===u||(o=[])):(o=o||[]).push(l,u))}n&&(o=o||[]).push("style",n);var l=o;(t.updateQueue=l)&&(t.flags|=4)}},Gi=function(e,t,n,r){n!==r&&(t.flags|=4)};var lu=!1,cu=!1,pu="function"==typeof WeakSet?WeakSet:Set,du=null;function fu(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Fl(e,t,n)}else n.current=null}function hu(e,t,n){try{n()}catch(n){Fl(e,t,n)}}var mu=!1;function yu(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,void 0!==s&&hu(t,n,s)}a=a.next}while(a!==r)}}function gu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bu(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function vu(e){var t=e.alternate;null!==t&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Ea],delete t[Ta],delete t[Ia],delete t[Ca],delete t[Oa])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wu(e){return 5===e.tag||3===e.tag||4===e.tag}function xu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ku(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=da));else if(4!==r&&null!==(e=e.child))for(ku(e,t,n),e=e.sibling;null!==e;)ku(e,t,n),e=e.sibling}function Su(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(Su(e,t,n),e=e.sibling;null!==e;)Su(e,t,n),e=e.sibling}var Nu=null,Eu=!1;function Tu(e,t,n){for(n=n.child;null!==n;)_u(e,t,n),n=n.sibling}function _u(e,t,n){if(bt&&"function"==typeof bt.onCommitFiberUnmount)try{bt.onCommitFiberUnmount(gt,n)}catch(e){}switch(n.tag){case 5:cu||fu(n,t);case 6:var r=Nu,a=Eu;Nu=null,Tu(e,t,n),Eu=a,null!==(Nu=r)&&(Eu?(e=Nu,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):Nu.removeChild(n.stateNode));break;case 18:null!==Nu&&(Eu?(e=Nu,n=n.stateNode,8===e.nodeType?xa(e.parentNode,n):1===e.nodeType&&xa(e,n),tn(e)):xa(Nu,n.stateNode));break;case 4:r=Nu,a=Eu,Nu=n.stateNode.containerInfo,Eu=!0,Tu(e,t,n),Nu=r,Eu=a;break;case 0:case 11:case 14:case 15:if(!cu&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var s=a,o=s.destroy;s=s.tag,void 0!==o&&(0!=(2&s)||0!=(4&s))&&hu(n,t,o),a=a.next}while(a!==r)}Tu(e,t,n);break;case 1:if(!cu&&(fu(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Fl(n,t,e)}Tu(e,t,n);break;case 21:Tu(e,t,n);break;case 22:1&n.mode?(cu=(r=cu)||null!==n.memoizedState,Tu(e,t,n),cu=r):Tu(e,t,n);break;default:Tu(e,t,n)}}function Iu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new pu),t.forEach((function(t){var r=Vl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Cu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var s=e,o=t,i=o;e:for(;null!==i;){switch(i.tag){case 5:Nu=i.stateNode,Eu=!1;break e;case 3:case 4:Nu=i.stateNode.containerInfo,Eu=!0;break e}i=i.return}if(null===Nu)throw Error(b(160));_u(s,o,a),Nu=null,Eu=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(e){Fl(a,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Ou(t,e),t=t.sibling}function Ou(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Cu(t,e),Mu(e),4&r){try{yu(3,e,e.return),gu(3,e)}catch(t){Fl(e,e.return,t)}try{yu(5,e,e.return)}catch(t){Fl(e,e.return,t)}}break;case 1:Cu(t,e),Mu(e),512&r&&null!==n&&fu(n,n.return);break;case 5:if(Cu(t,e),Mu(e),512&r&&null!==n&&fu(n,n.return),32&e.flags){var a=e.stateNode;try{Ee(a,"")}catch(t){Fl(e,e.return,t)}}if(4&r&&null!=(a=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,i=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===i&&"radio"===s.type&&null!=s.name&&ce(a,s),Ae(i,o);var l=Ae(i,s);for(o=0;o<u.length;o+=2){var c=u[o],p=u[o+1];"style"===c?Ce(a,p):"dangerouslySetInnerHTML"===c?Ne(a,p):"children"===c?Ee(a,p):A(a,c,p,l)}switch(i){case"input":pe(a,s);break;case"textarea":be(a,s);break;case"select":var d=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?me(a,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?me(a,!!s.multiple,s.defaultValue,!0):me(a,!!s.multiple,s.multiple?[]:"",!1))}a[Ta]=s}catch(t){Fl(e,e.return,t)}}break;case 6:if(Cu(t,e),Mu(e),4&r){if(null===e.stateNode)throw Error(b(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(t){Fl(e,e.return,t)}}break;case 3:if(Cu(t,e),Mu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){Fl(e,e.return,t)}break;case 4:default:Cu(t,e),Mu(e);break;case 13:Cu(t,e),Mu(e),8192&(a=e.child).flags&&(s=null!==a.memoizedState,a.stateNode.isHidden=s,!s||null!==a.alternate&&null!==a.alternate.memoizedState||(tl=ct())),4&r&&Iu(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(cu=(l=cu)||c,Cu(t,e),cu=l):Cu(t,e),Mu(e),8192&r){if(l=null!==e.memoizedState,(e.stateNode.isHidden=l)&&!c&&0!=(1&e.mode))for(du=e,c=e.child;null!==c;){for(p=du=c;null!==du;){switch(f=(d=du).child,d.tag){case 0:case 11:case 14:case 15:yu(4,d,d.return);break;case 1:fu(d,d.return);var h=d.stateNode;if("function"==typeof h.componentWillUnmount){r=d,n=d.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Fl(r,n,e)}}break;case 5:fu(d,d.return);break;case 22:if(null!==d.memoizedState){Pu(p);continue}}null!==f?(f.return=d,du=f):Pu(p)}c=c.sibling}e:for(c=null,p=e;;){if(5===p.tag){if(null===c){c=p;try{a=p.stateNode,l?"function"==typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none":(i=p.stateNode,o=null!=(u=p.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,i.style.display=Ie("display",o))}catch(t){Fl(e,e.return,t)}}}else if(6===p.tag){if(null===c)try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(t){Fl(e,e.return,t)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Cu(t,e),Mu(e),4&r&&Iu(e);case 21:}}function Mu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(wu(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(Ee(a,""),r.flags&=-33),Su(e,xu(e),a);break;case 3:case 4:var s=r.stateNode.containerInfo;ku(e,xu(e),s);break;default:throw Error(b(161))}}catch(t){Fl(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Au(e,t,n){du=e,Du(e,t,n)}function Du(e,t,n){for(var r=0!=(1&e.mode);null!==du;){var a=du,s=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||lu;if(!o){var i=a.alternate,u=null!==i&&null!==i.memoizedState||cu;i=lu;var l=cu;if(lu=o,(cu=u)&&!l)for(du=a;null!==du;)u=(o=du).child,22===o.tag&&null!==o.memoizedState?Lu(a):null!==u?(u.return=o,du=u):Lu(a);for(;null!==s;)du=s,Du(s,t,n),s=s.sibling;du=a,lu=i,cu=l}$u(e)}else 0!=(8772&a.subtreeFlags)&&null!==s?(s.return=a,du=s):$u(e)}}function $u(e){for(;null!==du;){var t=du;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:cu||gu(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!cu)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Cs(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Js(t,s,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Js(t,o,n)}break;case 5:var i=t.stateNode;if(null===n&&4&t.flags){n=i;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var l=t.alternate;if(null!==l){var c=l.memoizedState;if(null!==c){var p=c.dehydrated;null!==p&&tn(p)}}}break;default:throw Error(b(163))}cu||512&t.flags&&bu(t)}catch(e){Fl(t,t.return,e)}}if(t===e){du=null;break}if(null!==(n=t.sibling)){n.return=t.return,du=n;break}du=t.return}}function Pu(e){for(;null!==du;){var t=du;if(t===e){du=null;break}var n=t.sibling;if(null!==n){n.return=t.return,du=n;break}du=t.return}}function Lu(e){for(;null!==du;){var t=du;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gu(4,t)}catch(e){Fl(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(e){Fl(t,a,e)}}var s=t.return;try{bu(t)}catch(e){Fl(t,s,e)}break;case 5:var o=t.return;try{bu(t)}catch(e){Fl(t,o,e)}}}catch(e){Fl(t,t.return,e)}if(t===e){du=null;break}var i=t.sibling;if(null!==i){i.return=t.return,du=i;break}du=t.return}}var Ru,Fu=Math.ceil,zu=D.ReactCurrentDispatcher,Bu=D.ReactCurrentOwner,Uu=D.ReactCurrentBatchConfig,Vu=0,ju=null,Hu=null,Wu=0,qu=0,Ku=Ra(0),Gu=0,Qu=null,Yu=0,Ju=0,Xu=0,Zu=null,el=null,tl=0,nl=1/0,rl=null,al=!1,sl=null,ol=null,il=!1,ul=null,ll=0,cl=0,pl=null,dl=-1,fl=0;function hl(){return 0!=(6&Vu)?ct():-1!==dl?dl:dl=ct()}function ml(e){return 0==(1&e.mode)?1:0!=(2&Vu)&&0!==Wu?Wu&-Wu:null!==Is.transition?(0===fl&&(fl=It()),fl):0!==(e=At)?e:e=void 0===(e=window.event)?16:cn(e.type)}function yl(e,t,n,r){if(50<cl)throw cl=0,pl=null,Error(b(185));Ot(e,n,r),0!=(2&Vu)&&e===ju||(e===ju&&(0==(2&Vu)&&(Ju|=n),4===Gu&&xl(e,Wu)),gl(e,r),1===n&&0===Vu&&0==(1&t.mode)&&(nl=ct()+500,Xa&&ts()))}function gl(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-vt(s),i=1<<o,u=a[o];-1===u?0!=(i&n)&&0==(i&r)||(a[o]=Tt(i,t)):u<=t&&(e.expiredLanes|=i),s&=~i}}(e,t);var r=Et(e,e===ju?Wu:0);if(0===r)null!==n&&it(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&it(n),1===t)0===e.tag?function(e){Xa=!0,es(e)}(kl.bind(null,e)):es(kl.bind(null,e)),va((function(){0==(6&Vu)&&ts()})),n=null;else{switch(Dt(r)){case 1:n=dt;break;case 4:n=ft;break;case 16:default:n=ht;break;case 536870912:n=yt}n=jl(n,bl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bl(e,t){if(dl=-1,fl=0,0!=(6&Vu))throw Error(b(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var r=Et(e,e===ju?Wu:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Ol(e,r);else{t=r;var a=Vu;Vu|=2;var s=Il();for(ju===e&&Wu===t||(rl=null,nl=ct()+500,Tl(e,t));;)try{Al();break}catch(t){_l(e,t)}$s(),zu.current=s,Vu=a,null!==Hu?t=0:(ju=null,Wu=0,t=Gu)}if(0!==t){if(2===t&&(0!==(a=_t(e))&&(r=a,t=vl(e,a))),1===t)throw n=Qu,Tl(e,0),xl(e,r),gl(e,ct()),n;if(6===t)xl(e,r);else{if(a=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],s=a.getSnapshot;a=a.value;try{if(!wr(s(),a))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=Ol(e,r))&&(0!==(s=_t(e))&&(r=s,t=vl(e,s))),1===t))throw n=Qu,Tl(e,0),xl(e,r),gl(e,ct()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:case 5:Pl(e,el,rl);break;case 3:if(xl(e,r),(130023424&r)===r&&10<(t=tl+500-ct())){if(0!==Et(e,0))break;if(((a=e.suspendedLanes)&r)!==r){hl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ya(Pl.bind(null,e,el,rl),t);break}Pl(e,el,rl);break;case 4:if(xl(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-vt(r);s=1<<o,(o=t[o])>a&&(a=o),r&=~s}if(r=a,10<(r=(120>(r=ct()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fu(r/1960))-r)){e.timeoutHandle=ya(Pl.bind(null,e,el,rl),r);break}Pl(e,el,rl);break;default:throw Error(b(329))}}}return gl(e,ct()),e.callbackNode===n?bl.bind(null,e):null}function vl(e,t){var n=Zu;return e.current.memoizedState.isDehydrated&&(Tl(e,t).flags|=256),2!==(e=Ol(e,t))&&(t=el,el=n,null!==t&&wl(t)),e}function wl(e){null===el?el=e:el.push.apply(el,e)}function xl(e,t){for(t&=~Xu,t&=~Ju,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function kl(e){if(0!=(6&Vu))throw Error(b(327));Ll();var t=Et(e,0);if(0==(1&t))return gl(e,ct()),null;var n=Ol(e,t);if(0!==e.tag&&2===n){var r=_t(e);0!==r&&(t=r,n=vl(e,r))}if(1===n)throw n=Qu,Tl(e,0),xl(e,t),gl(e,ct()),n;if(6===n)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pl(e,el,rl),gl(e,ct()),null}function Sl(e,t){var n=Vu;Vu|=1;try{return e(t)}finally{0===(Vu=n)&&(nl=ct()+500,Xa&&ts())}}function Nl(e){null!==ul&&0===ul.tag&&0==(6&Vu)&&Ll();var t=Vu;Vu|=1;var n=Uu.transition,r=At;try{if(Uu.transition=null,At=1,e)return e()}finally{At=r,Uu.transition=n,0==(6&(Vu=t))&&ts()}}function El(){qu=Ku.current,Fa(Ku)}function Tl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ga(n)),null!==Hu)for(n=Hu.return;null!==n;){var r=n;switch(hs(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&qa();break;case 3:bo(),Fa(Va),Fa(Ua),No();break;case 5:wo(r);break;case 4:bo();break;case 13:case 19:Fa(xo);break;case 10:Ps(r.type._context);break;case 22:case 23:El()}n=n.return}if(ju=e,Hu=e=Kl(e.current,null),Wu=qu=t,Gu=0,Qu=null,Xu=Ju=Yu=0,el=Zu=null,null!==zs){for(t=0;t<zs.length;t++)if(null!==(r=(n=zs[t]).interleaved)){n.interleaved=null;var a=r.next,s=n.pending;if(null!==s){var o=s.next;s.next=a,r.next=o}n.pending=r}zs=null}return e}function _l(e,t){for(;;){var n=Hu;try{if($s(),Eo.current=vi,Mo){for(var r=Io.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}Mo=!1}if(_o=0,Oo=Co=Io=null,Ao=!1,Do=0,Bu.current=null,null===n||null===n.return){Gu=1,Qu=t,Hu=null;break}e:{var s=e,o=n.return,i=n,u=t;if(t=Wu,i.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var l=u,c=i,p=c.tag;if(0==(1&c.mode)&&(0===p||11===p||15===p)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Oi(o);if(null!==f){f.flags&=-257,Mi(f,o,i,0,t),1&f.mode&&Ci(s,l,t),u=l;var h=(t=f).updateQueue;if(null===h){var m=new Set;m.add(u),t.updateQueue=m}else h.add(u);break e}if(0==(1&t)){Ci(s,l,t),Cl();break e}u=Error(b(426))}else if(gs&&1&i.mode){var y=Oi(o);if(null!==y){0==(65536&y.flags)&&(y.flags|=256),Mi(y,o,i,0,t),_s(Si(u,i));break e}}s=u=Si(u,i),4!==Gu&&(Gu=2),null===Zu?Zu=[s]:Zu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Qs(s,_i(0,u,t));break e;case 1:i=u;var g=s.type,v=s.stateNode;if(0==(128&s.flags)&&("function"==typeof g.getDerivedStateFromError||null!==v&&"function"==typeof v.componentDidCatch&&(null===ol||!ol.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t,Qs(s,Ii(s,i,t));break e}}s=s.return}while(null!==s)}$l(n)}catch(e){t=e,Hu===n&&null!==n&&(Hu=n=n.return);continue}break}}function Il(){var e=zu.current;return zu.current=vi,null===e?vi:e}function Cl(){0!==Gu&&3!==Gu&&2!==Gu||(Gu=4),null===ju||0==(268435455&Yu)&&0==(268435455&Ju)||xl(ju,Wu)}function Ol(e,t){var n=Vu;Vu|=2;var r=Il();for(ju===e&&Wu===t||(rl=null,Tl(e,t));;)try{Ml();break}catch(t){_l(e,t)}if($s(),Vu=n,zu.current=r,null!==Hu)throw Error(b(261));return ju=null,Wu=0,Gu}function Ml(){for(;null!==Hu;)Dl(Hu)}function Al(){for(;null!==Hu&&!ut();)Dl(Hu)}function Dl(e){var t=Ru(e.alternate,e,qu);e.memoizedProps=e.pendingProps,null===t?$l(e):Hu=t,Bu.current=null}function $l(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=iu(n,t,qu)))return void(Hu=n)}else{if(null!==(n=uu(n,t)))return n.flags&=32767,void(Hu=n);if(null===e)return Gu=6,void(Hu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Hu=t);Hu=t=e}while(null!==t);0===Gu&&(Gu=5)}function Pl(e,t,n){var r=At,a=Uu.transition;try{Uu.transition=null,At=1,function(e,t,n,r){do{Ll()}while(null!==ul);if(0!=(6&Vu))throw Error(b(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-vt(n),s=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~s}}(e,s),e===ju&&(Hu=ju=null,Wu=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||il||(il=!0,jl(ht,(function(){return Ll(),null}))),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=Uu.transition,Uu.transition=null;var o=At;At=1;var i=Vu;Vu|=4,Bu.current=null,function(e,t){if(fa=rn,Tr(e=Er())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var o=0,i=-1,u=-1,l=0,c=0,p=e,d=null;t:for(;;){for(var f;p!==n||0!==a&&3!==p.nodeType||(i=o+a),p!==s||0!==r&&3!==p.nodeType||(u=o+r),3===p.nodeType&&(o+=p.nodeValue.length),null!==(f=p.firstChild);)d=p,p=f;for(;;){if(p===e)break t;if(d===n&&++l===a&&(i=o),d===s&&++c===r&&(u=o),null!==(f=p.nextSibling))break;d=(p=d).parentNode}p=f}n=-1===i||-1===u?null:{start:i,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ha={focusedElem:e,selectionRange:n},rn=!1,du=t;null!==du;)if(e=(t=du).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,du=e;else for(;null!==du;){t=du;try{var h=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var m=h.memoizedProps,y=h.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?m:Cs(t.type,m),y);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(b(163))}}catch(e){Fl(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,du=e;break}du=t.return}h=mu,mu=!1}(e,n),Ou(n,e),_r(ha),rn=!!fa,ha=fa=null,e.current=n,Au(n,e,a),lt(),Vu=i,At=o,Uu.transition=s}else e.current=n;if(il&&(il=!1,ul=e,ll=a),s=e.pendingLanes,0===s&&(ol=null),function(e){if(bt&&"function"==typeof bt.onCommitFiberRoot)try{bt.onCommitFiberRoot(gt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),gl(e,ct()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(al)throw al=!1,e=sl,sl=null,e;0!=(1&ll)&&0!==e.tag&&Ll(),s=e.pendingLanes,0!=(1&s)?e===pl?cl++:(cl=0,pl=e):cl=0,ts()}(e,t,n,r)}finally{Uu.transition=a,At=r}return null}function Ll(){if(null!==ul){var e=Dt(ll),t=Uu.transition,n=At;try{if(Uu.transition=null,At=16>e?16:e,null===ul)var r=!1;else{if(e=ul,ul=null,ll=0,0!=(6&Vu))throw Error(b(331));var a=Vu;for(Vu|=4,du=e.current;null!==du;){var s=du,o=s.child;if(0!=(16&du.flags)){var i=s.deletions;if(null!==i){for(var u=0;u<i.length;u++){var l=i[u];for(du=l;null!==du;){var c=du;switch(c.tag){case 0:case 11:case 15:yu(8,c,s)}var p=c.child;if(null!==p)p.return=c,du=p;else for(;null!==du;){var d=(c=du).sibling,f=c.return;if(vu(c),c===l){du=null;break}if(null!==d){d.return=f,du=d;break}du=f}}}var h=s.alternate;if(null!==h){var m=h.child;if(null!==m){h.child=null;do{var y=m.sibling;m.sibling=null,m=y}while(null!==m)}}du=s}}if(0!=(2064&s.subtreeFlags)&&null!==o)o.return=s,du=o;else e:for(;null!==du;){if(0!=(2048&(s=du).flags))switch(s.tag){case 0:case 11:case 15:yu(9,s,s.return)}var g=s.sibling;if(null!==g){g.return=s.return,du=g;break e}du=s.return}}var v=e.current;for(du=v;null!==du;){var w=(o=du).child;if(0!=(2064&o.subtreeFlags)&&null!==w)w.return=o,du=w;else e:for(o=v;null!==du;){if(0!=(2048&(i=du).flags))try{switch(i.tag){case 0:case 11:case 15:gu(9,i)}}catch(e){Fl(i,i.return,e)}if(i===o){du=null;break e}var x=i.sibling;if(null!==x){x.return=i.return,du=x;break e}du=i.return}}if(Vu=a,ts(),bt&&"function"==typeof bt.onPostCommitFiberRoot)try{bt.onPostCommitFiberRoot(gt,e)}catch(e){}r=!0}return r}finally{At=n,Uu.transition=t}}return!1}function Rl(e,t,n){e=Ks(e,t=_i(0,t=Si(n,t),1),1),t=hl(),null!==e&&(Ot(e,1,t),gl(e,t))}function Fl(e,t,n){if(3===e.tag)Rl(e,e,n);else for(;null!==t;){if(3===t.tag){Rl(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===ol||!ol.has(r))){t=Ks(t,e=Ii(t,e=Si(n,e),1),1),e=hl(),null!==t&&(Ot(t,1,e),gl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=hl(),e.pingedLanes|=e.suspendedLanes&n,ju===e&&(Wu&n)===n&&(4===Gu||3===Gu&&(130023424&Wu)===Wu&&500>ct()-tl?Tl(e,0):Xu|=n),gl(e,t)}function Bl(e,t){0===t&&(0==(1&e.mode)?t=1:(t=St,0==(130023424&(St<<=1))&&(St=4194304)));var n=hl();null!==(e=Vs(e,t))&&(Ot(e,t,n),gl(e,n))}function Ul(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Bl(e,n)}function Vl(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}null!==r&&r.delete(t),Bl(e,n)}function jl(e,t){return ot(e,t)}function Hl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wl(e,t,n,r){return new Hl(e,t,n,r)}function ql(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Kl(e,t){var n=e.alternate;return null===n?((n=Wl(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gl(e,t,n,r,a,s){var o=2;if(r=e,"function"==typeof e)ql(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case L:return Ql(n.children,a,s,t);case R:o=8,a|=8;break;case F:return(e=Wl(12,n,t,2|a)).elementType=F,e.lanes=s,e;case V:return(e=Wl(13,n,t,a)).elementType=V,e.lanes=s,e;case j:return(e=Wl(19,n,t,a)).elementType=j,e.lanes=s,e;case q:return Yl(n,a,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case z:o=10;break e;case B:o=9;break e;case U:o=11;break e;case H:o=14;break e;case W:o=16,r=null;break e}throw Error(b(130,null==e?e:typeof e,""))}return(t=Wl(o,n,t,a)).elementType=e,t.type=r,t.lanes=s,t}function Ql(e,t,n,r){return(e=Wl(7,e,r,t)).lanes=n,e}function Yl(e,t,n,r){return(e=Wl(22,e,r,t)).elementType=q,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return(e=Wl(6,e,null,t)).lanes=n,e}function Xl(e,t,n){return(t=Wl(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zl(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ct(0),this.expirationTimes=Ct(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,a,s,o,i,u){return e=new Zl(e,t,n,i,u),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Wl(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(s),e}function tc(e){if(!e)return Ba;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Wa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(b(171))}if(1===e.tag){var n=e.type;if(Wa(n))return Ga(e,n,t)}return t}function nc(e,t,n,r,a,s,o,i,u){return(e=ec(n,r,!0,e,0,s,0,i,u)).context=tc(null),n=e.current,(s=qs(r=hl(),a=ml(n))).callback=null!=t?t:null,Ks(n,s,a),e.current.lanes=a,Ot(e,a,r),gl(e,r),e}function rc(e,t,n,r){var a=t.current,s=hl(),o=ml(a);return n=tc(n),null===t.context?t.context=n:t.pendingContext=n,(t=qs(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ks(a,t,o))&&(yl(e,a,o,s),Gs(e,a,o)),o}function ac(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function sc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function oc(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}Ru=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Va.current)Di=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Di=!1,function(e,t,n){switch(t.tag){case 3:ji(t),Ts();break;case 5:vo(t);break;case 1:Wa(t.type)&&Qa(t);break;case 4:go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;za(Os,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(za(xo,1&xo.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Ji(e,t,n):(za(xo,1&xo.current),null!==(e=au(e,t,n))?e.sibling:null);za(xo,1&xo.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return nu(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),za(xo,xo.current),r)break;return null;case 22:case 23:return t.lanes=0,Fi(e,t,n)}return au(e,t,n)}(e,t,n);Di=0!=(131072&e.flags)}else Di=!1,gs&&0!=(1048576&t.flags)&&ds(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ru(e,t),e=t.pendingProps;var a=Ha(t,Ua.current);Rs(t,n),a=Ro(null,t,r,e,a,n);var s=Fo();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wa(r)?(s=!0,Qa(t)):s=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Hs(t),a.updater=eo,t.stateNode=a,a._reactInternals=t,ao(t,r,e,n),t=Vi(null,t,r,!0,s,n)):(t.tag=0,gs&&s&&fs(t),$i(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ru(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"==typeof e)return ql(e)?1:0;if(null!=e){if((e=e.$$typeof)===U)return 11;if(e===H)return 14}return 2}(r),e=Cs(r,e),a){case 0:t=Bi(null,t,r,e,n);break e;case 1:t=Ui(null,t,r,e,n);break e;case 11:t=Pi(null,t,r,e,n);break e;case 14:t=Li(null,t,r,Cs(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Bi(e,t,r,a=t.elementType===r?a:Cs(r,a),n);case 1:return r=t.type,a=t.pendingProps,Ui(e,t,r,a=t.elementType===r?a:Cs(r,a),n);case 3:e:{if(ji(t),null===e)throw Error(b(387));r=t.pendingProps,a=(s=t.memoizedState).element,Ws(e,t),Ys(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Hi(e,t,r,n,a=Si(Error(b(423)),t));break e}if(r!==a){t=Hi(e,t,r,n,a=Si(Error(b(424)),t));break e}for(ys=ka(t.stateNode.containerInfo.firstChild),ms=t,gs=!0,bs=null,n=co(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Ts(),r===a){t=au(e,t,n);break e}$i(e,t,r,n)}t=t.child}return t;case 5:return vo(t),null===e&&ks(t),r=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,o=a.children,ma(r,a)?o=null:null!==s&&ma(r,s)&&(t.flags|=32),zi(e,t),$i(e,t,o,n),t.child;case 6:return null===e&&ks(t),null;case 13:return Ji(e,t,n);case 4:return go(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=lo(t,null,r,n):$i(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,Pi(e,t,r,a=t.elementType===r?a:Cs(r,a),n);case 7:return $i(e,t,t.pendingProps,n),t.child;case 8:case 12:return $i(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,s=t.memoizedProps,o=a.value,za(Os,r._currentValue),r._currentValue=o,null!==s)if(wr(s.value,o)){if(s.children===a.children&&!Va.current){t=au(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var i=s.dependencies;if(null!==i){o=s.child;for(var u=i.firstContext;null!==u;){if(u.context===r){if(1===s.tag){(u=qs(-1,n&-n)).tag=2;var l=s.updateQueue;if(null!==l){var c=(l=l.shared).pending;null===c?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,null!==(u=s.alternate)&&(u.lanes|=n),Ls(s.return,n,t),i.lanes|=n;break}u=u.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(b(341));o.lanes|=n,null!==(i=o.alternate)&&(i.lanes|=n),Ls(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}$i(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Rs(t,n),r=r(a=Fs(a)),t.flags|=1,$i(e,t,r,n),t.child;case 14:return a=Cs(r=t.type,t.pendingProps),Li(e,t,r,a=Cs(r.type,a),n);case 15:return Ri(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Cs(r,a),ru(e,t),t.tag=1,Wa(r)?(e=!0,Qa(t)):e=!1,Rs(t,n),no(t,r,a),ao(t,r,a,n),Vi(null,t,r,!0,e,n);case 19:return nu(e,t,n);case 22:return Fi(e,t,n)}throw Error(b(156,t.tag))};var ic="function"==typeof reportError?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}function lc(e){this._internalRoot=e}function cc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function pc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function dc(){}function fc(e,t,n,r,a){var s=n._reactRootContainer;if(s){var o=s;if("function"==typeof a){var i=a;a=function(){var e=ac(o);i.call(e)}}rc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"==typeof r){var s=r;r=function(){var e=ac(o);s.call(e)}}var o=nc(t,r,e,0,null,!1,0,"",dc);return e._reactRootContainer=o,e[_a]=o.current,ta(8===e.nodeType?e.parentNode:e),Nl(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof r){var i=r;r=function(){var e=ac(u);i.call(e)}}var u=ec(e,0,!1,null,0,!1,0,"",dc);return e._reactRootContainer=u,e[_a]=u.current,ta(8===e.nodeType?e.parentNode:e),Nl((function(){rc(t,u,n,r)})),u}(n,t,e,a,r);return ac(o)}lc.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(b(409));rc(e,t,null,null)},lc.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Nl((function(){rc(null,e,null,null)})),t[_a]=null}},lc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&0!==t&&t<qt[n].priority;n++);qt.splice(n,0,e),0===n&&Yt(e)}},$t=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nt(t.pendingLanes);0!==n&&(Mt(t,1|n),gl(t,ct()),0==(6&Vu)&&(nl=ct()+500,ts()))}break;case 13:Nl((function(){var t=Vs(e,1);if(null!==t){var n=hl();yl(t,e,1,n)}})),oc(e,1)}},Pt=function(e){if(13===e.tag){var t=Vs(e,134217728);if(null!==t)yl(t,e,134217728,hl());oc(e,134217728)}},Lt=function(e){if(13===e.tag){var t=ml(e),n=Vs(e,t);if(null!==n)yl(n,e,t,hl());oc(e,t)}},Rt=function(){return At},Ft=function(e,t){var n=At;try{return At=e,t()}finally{At=n}},Pe=function(e,t,n){switch(t){case"input":if(pe(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=$a(r);if(!a)throw Error(b(90));oe(r),pe(r,a)}}}break;case"textarea":be(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},Ue=Sl,Ve=Nl;var hc={usingClientEntryPoint:!1,Events:[Aa,Da,$a,ze,Be,Sl]},mc={findFiberByHostInstance:Ma,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yc={bundleType:mc.bundleType,version:mc.version,rendererPackageName:mc.rendererPackageName,rendererConfig:mc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=at(e))?null:e.stateNode},findFiberByHostInstance:mc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{gt=gc.inject(yc),bt=gc}catch(Se){}}r=hc,a=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cc(t))throw Error(b(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:P,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},s=function(e,t){if(!cc(e))throw Error(b(299));var n=!1,r="",a=ic;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=ec(e,1,!1,null,0,n,0,r,a),e[_a]=t.current,ta(8===e.nodeType?e.parentNode:e),new uc(t)},i=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(b(188));throw e=Object.keys(e).join(","),Error(b(268,e))}return e=null===(e=at(t))?null:e.stateNode},u=function(e){return Nl(e)},l=function(e,t,n){if(!pc(t))throw Error(b(200));return fc(null,e,t,!0,n)},c=function(e,t,n){if(!cc(e))throw Error(b(405));var r=null!=n&&n.hydratedSources||null,a=!1,s="",o=ic;if(null!=n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=nc(t,null,e,1,null!=n?n:null,a,0,s,o),e[_a]=t.current,ta(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new lc(t)},p=function(e,t,n){if(!pc(t))throw Error(b(200));return fc(null,e,t,!1,n)},d=function(e){if(!pc(e))throw Error(b(40));return!!e._reactRootContainer&&(Nl((function(){fc(null,null,e,!1,(function(){e._reactRootContainer=null,e[_a]=null}))})),!0)},f=Sl,h=function(e,t,n,r){if(!pc(n))throw Error(b(200));if(null==e||void 0===e._reactInternals)throw Error(b(38));return fc(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),o.register("fO90s",(function(e,t){e.exports=o("gcnCG")})),o.register("gcnCG",(function(t,n){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,a,s,o,i,u,l,c,p,d,f,h,m,y,g,b,v,w,x;function k(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<E(a,t)))break e;e[r]=t,e[n]=a,n=r}}function S(e){return 0===e.length?null:e[0]}function N(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,s=a>>>1;r<s;){var o=2*(r+1)-1,i=e[o],u=o+1,l=e[u];if(0>E(i,n))u<a&&0>E(l,i)?(e[r]=l,e[u]=n,r=u):(e[r]=i,e[o]=n,r=o);else{if(!(u<a&&0>E(l,n)))break e;e[r]=l,e[u]=n,r=u}}}return t}function E(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(()=>r),(e=>r=e)),e(t.exports,"unstable_IdlePriority",(()=>a),(e=>a=e)),e(t.exports,"unstable_ImmediatePriority",(()=>s),(e=>s=e)),e(t.exports,"unstable_LowPriority",(()=>o),(e=>o=e)),e(t.exports,"unstable_NormalPriority",(()=>i),(e=>i=e)),e(t.exports,"unstable_Profiling",(()=>u),(e=>u=e)),e(t.exports,"unstable_UserBlockingPriority",(()=>l),(e=>l=e)),e(t.exports,"unstable_cancelCallback",(()=>c),(e=>c=e)),e(t.exports,"unstable_continueExecution",(()=>p),(e=>p=e)),e(t.exports,"unstable_forceFrameRate",(()=>d),(e=>d=e)),e(t.exports,"unstable_getCurrentPriorityLevel",(()=>f),(e=>f=e)),e(t.exports,"unstable_getFirstCallbackNode",(()=>h),(e=>h=e)),e(t.exports,"unstable_next",(()=>m),(e=>m=e)),e(t.exports,"unstable_pauseExecution",(()=>y),(e=>y=e)),e(t.exports,"unstable_requestPaint",(()=>g),(e=>g=e)),e(t.exports,"unstable_runWithPriority",(()=>b),(e=>b=e)),e(t.exports,"unstable_scheduleCallback",(()=>v),(e=>v=e)),e(t.exports,"unstable_shouldYield",(()=>w),(e=>w=e)),e(t.exports,"unstable_wrapCallback",(()=>x),(e=>x=e)),"object"==typeof performance&&"function"==typeof performance.now){var T=performance;r=function(){return T.now()}}else{var _=Date,I=_.now();r=function(){return _.now()-I}}var C=[],O=[],M=1,A=null,D=3,$=!1,P=!1,L=!1,R="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,z="undefined"!=typeof setImmediate?setImmediate:null;function B(e){for(var t=S(O);null!==t;){if(null===t.callback)N(O);else{if(!(t.startTime<=e))break;N(O),t.sortIndex=t.expirationTime,k(C,t)}t=S(O)}}function U(e){if(L=!1,B(e),!P)if(null!==S(C))P=!0,Z(V);else{var t=S(O);null!==t&&ee(U,t.startTime-e)}}function V(e,t){P=!1,L&&(L=!1,F(q),q=-1),$=!0;var n=D;try{for(B(t),A=S(C);null!==A&&(!(A.expirationTime>t)||e&&!Q());){var a=A.callback;if("function"==typeof a){A.callback=null,D=A.priorityLevel;var s=a(A.expirationTime<=t);t=r(),"function"==typeof s?A.callback=s:A===S(C)&&N(C),B(t)}else N(C);A=S(C)}if(null!==A)var o=!0;else{var i=S(O);null!==i&&ee(U,i.startTime-t),o=!1}return o}finally{A=null,D=n,$=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j,H=!1,W=null,q=-1,K=5,G=-1;function Q(){return!(r()-G<K)}function Y(){if(null!==W){var e=r();G=e;var t=!0;try{t=W(!0,e)}finally{t?j():(H=!1,W=null)}}else H=!1}if("function"==typeof z)j=function(){z(Y)};else if("undefined"!=typeof MessageChannel){var J=new MessageChannel,X=J.port2;J.port1.onmessage=Y,j=function(){X.postMessage(null)}}else j=function(){R(Y,0)};function Z(e){W=e,H||(H=!0,j())}function ee(e,t){q=R((function(){e(r())}),t)}a=5,s=1,o=4,i=3,u=null,l=2,c=function(e){e.callback=null},p=function(){P||$||(P=!0,Z(V))},d=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},f=function(){return D},h=function(){return S(C)},m=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},y=function(){},g=function(){},b=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},v=function(e,t,n){var a=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?a+n:a:n=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:M++,callback:t,priorityLevel:e,startTime:n,expirationTime:s=n+s,sortIndex:-1},n>a?(e.sortIndex=n,k(O,e),null===S(C)&&e===S(O)&&(L?(F(q),q=-1):L=!0,ee(U,n-a))):(e.sortIndex=s,k(C,e),P||$||(P=!0,Z(V))),e},w=Q,x=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}})),o.register("kjyEk",(function(e,t){})),o.register("cmoHh",(function(e,t){!function(e,t,n){function r(e){var t=this,n=function(){var e=4022871197,t=function(t){t=String(t);for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)};return t}();t.next=function(){var e=2091639*t.s0+2.3283064365386963e-10*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=n(" "),t.s1=n(" "),t.s2=n(" "),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function a(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function s(e,t){var n=new r(e),s=t&&t.state,o=n.next;return o.int32=function(){return 4294967296*n.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,s&&("object"==typeof s&&a(s,n),o.state=function(){return a(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.alea=s}(0,e,"function"==typeof define&&define)})),o.register("euRi5",(function(e,t){!function(e,t,n){function r(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function a(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function s(e,t){var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&("object"==typeof s&&a(s,n),o.state=function(){return a(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.xor128=s}(0,e,"function"==typeof define&&define)})),o.register("hDsEw",(function(e,t){!function(e,t,n){function r(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function a(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function s(e,t){var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&("object"==typeof s&&a(s,n),o.state=function(){return a(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.xorwow=s}(0,e,"function"==typeof define&&define)})),o.register("3J2Zm",(function(e,t){!function(e,t,n){function r(e){var t=this;t.next=function(){var e,n,r=t.x,a=t.i;return e=r[a],n=(e^=e>>>7)^e<<24,n^=(e=r[a+1&7])^e>>>10,n^=(e=r[a+3&7])^e>>>3,n^=(e=r[a+4&7])^e<<7,e=r[a+7&7],n^=(e^=e<<13)^e<<9,r[a]=n,t.i=a+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function a(e,t){return t.x=e.x.slice(),t.i=e.i,t}function s(e,t){null==e&&(e=+new Date);var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&(s.x&&a(s,n),o.state=function(){return a(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.xorshift7=s}(0,e,"function"==typeof define&&define)})),o.register("6Px8M",(function(e,t){!function(e,t,n){function r(e){var t=this;t.next=function(){var e,n,r=t.w,a=t.X,s=t.i;return t.w=r=r+1640531527|0,n=a[s+34&127],e=a[s=s+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=a[s]=n^e,t.i=s,n+(r^r>>>16)|0},function(e,t){var n,r,a,s,o,i=[],u=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,u=Math.max(u,t.length)),a=0,s=-32;s<u;++s)t&&(r^=t.charCodeAt((s+32)%t.length)),0===s&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,s>=0&&(o=o+1640531527|0,a=0==(n=i[127&s]^=r+o)?a+1:0);for(a>=128&&(i[127&(t&&t.length||0)]=-1),a=127,s=512;s>0;--s)r=i[a+34&127],n=i[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,i[a]=r^n;e.w=o,e.X=i,e.i=a}(t,e)}function a(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function s(e,t){null==e&&(e=+new Date);var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&(s.X&&a(s,n),o.state=function(){return a(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.xor4096=s}(0,e,"function"==typeof define&&define)})),o.register("lDm0S",(function(e,t){!function(e,t,n){function r(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,a=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^a,t.a=a-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function a(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function s(e,t){var n=new r(e),s=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/2097152}while(0===e);return e},o.int32=n.next,o.quick=o,s&&("object"==typeof s&&a(s,n),o.state=function(){return a(n,{})}),o}t&&t.exports?t.exports=s:n&&n.amd?n((function(){return s})):this.tychei=s}(0,e,"function"==typeof define&&define)})),o("27Lyk").register(JSON.parse('{"5CZhm":"index.c1a56faf.js","dEXh9":"icon-rock.e8eb56cf.svg","jnIko":"icon-scissors.a7538f63.svg","5y0iI":"icon-paper.14bc86d4.svg","b7PLn":"index.ff49a0e9.css"}'));var i,u={};u=o("1b2ls");var l;!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),i=(l=o("Xw6Mv")).createRoot,l.hydrateRoot;var c=o("acw62"),p={};p=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":
/*!******************************!*\
  !*** ./src/react-webcam.tsx ***!
  \******************************/
/*! exports provided: default */function(e,t,n){n.r(t);var r,a=n(/*! react */"react"),s=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};function i(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)}"undefined"!=typeof window&&(void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return t?new Promise((function(n,r){t.call(navigator,e,n,r)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}));var u=function(e){function t(t){var n=e.call(this,t)||this;return n.canvas=null,n.ctx=null,n.requestUserMediaId=0,n.unmounted=!1,n.state={hasUserMedia:!1},n}return s(t,e),t.prototype.componentDidMount=function(){var e=this.state,t=this.props;this.unmounted=!1,i()?(e.hasUserMedia||this.requestUserMedia(),t.children&&"function"!=typeof t.children&&console.warn("children must be a function")):t.onUserMediaError("getUserMedia not supported")},t.prototype.componentDidUpdate=function(e){var t=this.props;if(i()){var n=JSON.stringify(e.audioConstraints)!==JSON.stringify(t.audioConstraints),r=JSON.stringify(e.videoConstraints)!==JSON.stringify(t.videoConstraints),a=e.minScreenshotWidth!==t.minScreenshotWidth,s=e.minScreenshotHeight!==t.minScreenshotHeight;(r||a||s)&&(this.canvas=null,this.ctx=null),(n||r)&&(this.stopAndCleanup(),this.requestUserMedia())}else t.onUserMediaError("getUserMedia not supported")},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},t.stopMediaStream=function(e){e&&(e.getVideoTracks&&e.getAudioTracks?(e.getVideoTracks().map((function(t){e.removeTrack(t),t.stop()})),e.getAudioTracks().map((function(t){e.removeTrack(t),t.stop()}))):e.stop())},t.prototype.stopAndCleanup=function(){var e=this.state;e.hasUserMedia&&(t.stopMediaStream(this.stream),e.src&&window.URL.revokeObjectURL(e.src))},t.prototype.getScreenshot=function(e){var t=this.state,n=this.props;if(!t.hasUserMedia)return null;var r=this.getCanvas(e);return r&&r.toDataURL(n.screenshotFormat,n.screenshotQuality)},t.prototype.getCanvas=function(e){var t=this.state,n=this.props;if(!this.video)return null;if(!t.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var r=this.video.videoWidth,a=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var s=r/a;a=(r=n.minScreenshotWidth||this.video.clientWidth)/s,n.minScreenshotHeight&&a<n.minScreenshotHeight&&(r=(a=n.minScreenshotHeight)*s)}this.canvas=document.createElement("canvas"),this.canvas.width=(null==e?void 0:e.width)||r,this.canvas.height=(null==e?void 0:e.height)||a,this.ctx=this.canvas.getContext("2d")}var o=this.ctx,i=this.canvas;return o&&i&&(n.mirrored&&(o.translate(i.width,0),o.scale(-1,1)),o.imageSmoothingEnabled=n.imageSmoothing,o.drawImage(this.video,0,0,(null==e?void 0:e.width)||i.width,(null==e?void 0:e.height)||i.height),n.mirrored&&(o.scale(-1,1),o.translate(-i.width,0))),i},t.prototype.requestUserMedia=function(){var e=this,n=this.props,r=function(r,a){var s={video:void 0===a||a};n.audio&&(s.audio=void 0===r||r),e.requestUserMediaId++;var o=e.requestUserMediaId;navigator.mediaDevices.getUserMedia(s).then((function(n){e.unmounted||o!==e.requestUserMediaId?t.stopMediaStream(n):e.handleUserMedia(null,n)})).catch((function(t){e.handleUserMedia(t)}))};if("mediaDevices"in navigator)r(n.audioConstraints,n.videoConstraints);else{var a=function(e){return{optional:[{sourceId:e}]}},s=function(e){var t=e.deviceId;return"string"==typeof t?t:Array.isArray(t)&&t.length>0?t[0]:"object"==typeof t&&t.ideal?t.ideal:null};MediaStreamTrack.getSources((function(e){var t=null,o=null;e.forEach((function(e){"audio"===e.kind?t=e.id:"video"===e.kind&&(o=e.id)}));var i=s(n.audioConstraints);i&&(t=i);var u=s(n.videoConstraints);u&&(o=u),r(a(t),a(o))}))}},t.prototype.handleUserMedia=function(e,t){var n=this.props;if(e||!t)return this.setState({hasUserMedia:!1}),void n.onUserMediaError(e);this.stream=t;try{this.video&&(this.video.srcObject=t),this.setState({hasUserMedia:!0})}catch(e){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(t)})}n.onUserMedia(t)},t.prototype.render=function(){var e=this,t=this.state,n=this.props,r=n.audio,s=(n.forceScreenshotSourceSize,n.onUserMedia,n.onUserMediaError,n.screenshotFormat,n.screenshotQuality,n.minScreenshotWidth,n.minScreenshotHeight,n.audioConstraints,n.videoConstraints,n.imageSmoothing,n.mirrored),i=n.style,u=void 0===i?{}:i,l=n.children,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(n,["audio","forceScreenshotSourceSize","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),p=s?o(o({},u),{transform:(u.transform||"")+" scaleX(-1)"}):u,d={getScreenshot:this.getScreenshot.bind(this)};return a.createElement(a.Fragment,null,a.createElement("video",o({autoPlay:!0,src:t.src,muted:!r,playsInline:!0,ref:function(t){e.video=t},style:p},c)),l&&l(d))},t.defaultProps={audio:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},t}(a.Component);t.default=u},react:
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */function(t,n){t.exports=e}}).default}(o("acw62"));class d{refCount(e){return f("refCount")}incRef(e){return f("incRef")}timerAvailable(){return!0}time(e){return f("time")}read(e){return f("read")}readSync(e){return f("readSync")}readToGPU(e,t){return f("readToGPU")}numDataIds(){return f("numDataIds")}disposeData(e,t){return f("disposeData")}write(e,t,n){return f("write")}move(e,t,n,r,a){return f("move")}memory(){return f("memory")}floatPrecision(){return f("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return f("dispose")}}function f(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var h={};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function m(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,v(e,t,n)}function y(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,v(e,n,r),v(t,n,r)}function g(e,t,n){return Math.max(e,Math.min(t,n))}function b(e){return e%2==0?e:e+1}function v(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function w(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function x(e,t){const n=Math.random();return t*n+(1-n)*e}function k(e,t){let n=0;for(let r=0;r<e.length;r++){const a=Number(e[r])-Number(t[r]);n+=a*a}return n}function S(e,t){if(!e)throw new Error("string"==typeof t?t:t())}function N(e,t,n=""){S(C(e,t),(()=>n+` Shapes ${e} and ${t} must match`))}function E(e){S(null!=e,(()=>"The input to the tensor constructor must be a non-null value."))}function T(e,t=[],n=!1){if(null==t&&(t=[]),Array.isArray(e)||H(e)&&!n)for(let r=0;r<e.length;++r)T(e[r],t,n);else t.push(e);return t}function _(e){if(0===e.length)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function I(e){return 0===e.length}function C(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function O(e){return e%1==0}function M(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function A(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function D(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return m(t),t}function $(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function P(e,t=(e=>0),n,r=setTimeout){return new Promise(((a,s)=>{let o=0;const i=()=>{if(e())return void a();o++;const u=t(o);null!=n&&o>=n?s():r(i,u)};i()}))}function L(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(-1===e[t]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(-1===r){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===n)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const a=e.slice();return a[r]=t/n,a}function R(e,t){const n=t.length;return S((e=null==e?t.map(((e,t)=>t)):[].concat(e)).every((e=>e>=-n&&e<n)),(()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`)),S(e.every((e=>O(e))),(()=>`All values in axis param must be integers but got axis ${e}`)),e.map((e=>e<0?n+e:e))}function F(e,t){const n=[],r=[],a=null!=t&&Array.isArray(t)&&0===t.length,s=null==t||a?null:R(t,e).sort();let o=0;for(let t=0;t<e.length;++t){if(null!=s){if(s[o]===t&&1!==e[t])throw new Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(null==s[o]||s[o]>t)&&1===e[t]&&(n.push(e[t]),r.push(t)),s[o]<=t&&o++}1!==e[t]&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function z(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else{if("bool"!==e)throw new Error(`Unknown data type ${e}`);n=new Uint8Array(t)}return n}function B(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else{if("string"!==e)throw new Error(`Unknown data type ${e}`);n=new Array(t)}return n}function U(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function V(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function j(e,t){return"complex64"!==t&&(("float32"!==t||"complex64"===e)&&(("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)))}function H(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function W(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw new Error(`Unknown dtype ${e}`)}function q(e){if(null==e)return 0;let t=0;return e.forEach((e=>t+=e.length)),t}function K(e){return"string"==typeof e||e instanceof String}function G(e){return"boolean"==typeof e}function Q(e){return"number"==typeof e}function Y(e){return Array.isArray(e)?Y(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":Q(e)?"float32":K(e)?"string":G(e)?"bool":"float32"}function J(e){return!!(e&&e.constructor&&e.call&&e.apply)}function X(e,t){for(let n=t;n<e;++n)if(e%n==0)return n;return e}function Z(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function ee(e,t,n,r=!1){const a=new Array;if(1===t.length){const s=t[0]*(r?2:1);for(let t=0;t<s;t++)a[t]=n[e+t]}else{const s=t[0],o=t.slice(1),i=o.reduce(((e,t)=>e*t))*(r?2:1);for(let t=0;t<s;t++)a[t]=ee(e+t*i,o,n,r)}return a}function te(e,t,n=!1){if(0===e.length)return t[0];const r=e.reduce(((e,t)=>e*t))*(n?2:1);if(0===r)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return ee(0,e,t,n)}function ne(e,t){const n=re(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function re(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function ae(e,t){const n=e.reduce(((e,t)=>e*t),1);if(null==t||"float32"===t)return te(e,new Float32Array(n));if("int32"===t)return te(e,new Int32Array(n));if("bool"===t)return te(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function se(e){e.forEach((t=>{S(Number.isInteger(t)&&t>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`))}))}function oe(e,t,n){if(0===t)return 0;if(1===t)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function ie(e,t,n){if(0===t)return[];if(1===t)return[e];const r=new Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function ue(e){return e&&e.then&&"function"==typeof e.then}e(h,"shuffle",(()=>m)),e(h,"swap",(()=>v)),e(h,"shuffleCombo",(()=>y)),e(h,"clamp",(()=>g)),e(h,"nearestLargerEven",(()=>b)),e(h,"sum",(()=>w)),e(h,"randUniform",(()=>x)),e(h,"distSquared",(()=>k)),e(h,"assert",(()=>S)),e(h,"assertShapesMatch",(()=>N)),e(h,"arraysEqual",(()=>C)),e(h,"assertNonNull",(()=>E)),e(h,"flatten",(()=>T)),e(h,"isTypedArray",(()=>H)),e(h,"sizeFromShape",(()=>_)),e(h,"isScalarShape",(()=>I)),e(h,"isInt",(()=>O)),e(h,"tanh",(()=>M)),e(h,"sizeToSquarishShape",(()=>A)),e(h,"createShuffledIndices",(()=>D)),e(h,"rightPad",(()=>$)),e(h,"repeatedTry",(()=>P)),e(h,"inferFromImplicitShape",(()=>L)),e(h,"parseAxisParam",(()=>R)),e(h,"squeezeShape",(()=>F)),e(h,"getTypedArrayFromDType",(()=>z)),e(h,"getArrayFromDType",(()=>B)),e(h,"checkConversionForErrors",(()=>U)),e(h,"isValidDtype",(()=>V)),e(h,"hasEncodingLoss",(()=>j)),e(h,"bytesPerElement",(()=>W)),e(h,"bytesFromStringArray",(()=>q)),e(h,"isString",(()=>K)),e(h,"isBoolean",(()=>G)),e(h,"isNumber",(()=>Q)),e(h,"inferDtype",(()=>Y)),e(h,"isFunction",(()=>J)),e(h,"nearestDivisor",(()=>X)),e(h,"computeStrides",(()=>Z)),e(h,"toNestedArray",(()=>te)),e(h,"makeOnesTypedArray",(()=>ne)),e(h,"makeZerosTypedArray",(()=>re)),e(h,"makeZerosNestedTypedArray",(()=>ae)),e(h,"assertNonNegativeIntegerDimensions",(()=>se)),e(h,"locToIndex",(()=>oe)),e(h,"indexToLoc",(()=>ie)),e(h,"isPromise",(()=>ue));const le="tfjsflags";class ce{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=pe,this.populateURLFlags()}setPlatform(e,t){null!=this.platform&&(de().getBool("IS_TEST")||de().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},null!=this.urlFlags[e]){const t=this.urlFlags[e];de().getBool("IS_TEST")||de().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(ue(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const e=this.getQueryParams(this.global.location.search);if(le in e){e[le].split(",").forEach((e=>{const[t,n]=e.split(":");this.urlFlags[t]=function(e,t){if("true"===(t=t.toLowerCase())||"false"===t)return"true"===t;if(""+ +t===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}(t,n)}))}}}function pe(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((e,...n)=>(function(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}(t,n[0],n[1]),n.join("=")))),t}function de(){return fe}let fe=null;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var he,me,ye={},ge=ye={};function be(){throw new Error("setTimeout has not been defined")}function ve(){throw new Error("clearTimeout has not been defined")}function we(e){if(he===setTimeout)return setTimeout(e,0);if((he===be||!he)&&setTimeout)return he=setTimeout,setTimeout(e,0);try{return he(e,0)}catch(t){try{return he.call(null,e,0)}catch(t){return he.call(this,e,0)}}}!function(){try{he="function"==typeof setTimeout?setTimeout:be}catch(e){he=be}try{me="function"==typeof clearTimeout?clearTimeout:ve}catch(e){me=ve}}();var xe,ke=[],Se=!1,Ne=-1;function Ee(){Se&&xe&&(Se=!1,xe.length?ke=xe.concat(ke):Ne=-1,ke.length&&Te())}function Te(){if(!Se){var e=we(Ee);Se=!0;for(var t=ke.length;t;){for(xe=ke,ke=[];++Ne<t;)xe&&xe[Ne].run();Ne=-1,t=ke.length}xe=null,Se=!1,function(e){if(me===clearTimeout)return clearTimeout(e);if((me===ve||!me)&&clearTimeout)return me=clearTimeout,clearTimeout(e);try{return me(e)}catch(t){try{return me.call(null,e)}catch(t){return me.call(this,e)}}}(e)}}function _e(e,t){this.fun=e,this.array=t}function Ie(){}let Ce;function Oe(){if(null==Ce){let e;if("undefined"!=typeof window)e=window;else if(void 0!==n)e=n;else if(void 0!==ye)e=ye;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}Ce=e}return Ce}function Me(e,t){const n=function(){const e=Oe();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}ge.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ke.push(new _e(e,t)),1!==ke.length||Se||we(Te)},_e.prototype.run=function(){this.fun.apply(null,this.array)},ge.title="browser",ge.browser=!0,ge.env={},ge.argv=[],ge.version="",ge.versions={},ge.on=Ie,ge.addListener=Ie,ge.once=Ie,ge.off=Ie,ge.removeListener=Ie,ge.removeAllListeners=Ie,ge.emit=Ie,ge.prependListener=Ie,ge.prependOnceListener=Ie,ge.listeners=function(e){return[]},ge.binding=function(e){throw new Error("process.binding is not supported")},ge.cwd=function(){return"/"},ge.chdir=function(e){throw new Error("process.chdir is not supported")},ge.umask=function(){return 0};const Ae="Abs",De="Acos",$e="Acosh",Pe="Add",Le="AddN",Re="All",Fe="Any",ze="ArgMax",Be="ArgMin",Ue="Asin",Ve="Asinh",je="Atan",He="Atanh",We="Atan2",qe="AvgPool",Ke="AvgPool3D",Ge="BatchMatMul",Qe="BatchToSpaceND",Ye="Bincount",Je="BroadcastArgs",Xe="Cast",Ze="Ceil",et="ClipByValue",tt="Complex",nt="ComplexAbs",rt="Concat",at="Conv2D",st="Conv2DBackpropFilter",ot="Conv2DBackpropInput",it="Conv3D",ut="Conv3DBackpropInputV2",lt="Cos",ct="Cosh",pt="Cumprod",dt="Cumsum",ft="CropAndResize",ht="DenseBincount",mt="DepthToSpace",yt="DepthwiseConv2dNative",gt="DepthwiseConv2dNativeBackpropFilter",bt="DepthwiseConv2dNativeBackpropInput",vt="Diag",wt="Dilation2D",xt="RealDiv",kt="Einsum",St="Elu",Nt="Erf",Et="Equal",Tt="Exp",_t="ExpandDims",It="Expm1",Ct="FFT",Ot="Fill",Mt="FlipLeftRight",At="Floor",Dt="FloorDiv",$t="FusedBatchNorm",Pt="GatherV2",Lt="GatherNd",Rt="Greater",Ft="GreaterEqual",zt="Identity",Bt="IFFT",Ut="Imag",Vt="IsFinite",jt="IsInf",Ht="IsNan",Wt="LeakyRelu",qt="Less",Kt="LessEqual",Gt="LinSpace",Qt="Log",Yt="Log1p",Jt="LogicalAnd",Xt="LogicalNot",Zt="LogicalOr",en="LRN",tn="Max",nn="Maximum",rn="MaxPool",an="MaxPool3D",sn="MaxPoolWithArgmax",on="Mean",un="Min",ln="Minimum",cn="MirrorPad",pn="Mod",dn="Multinomial",fn="Multiply",hn="Neg",mn="NotEqual",yn="NonMaxSuppressionV3",gn="NonMaxSuppressionV4",bn="NonMaxSuppressionV5",vn="OnesLike",wn="OneHot",xn="Pack",kn="PadV2",Sn="Pow",Nn="Prelu",En="Prod",Tn="RaggedGather",_n="RaggedTensorToTensor",In="Range",Cn="Real",On="Reciprocal",Mn="Relu",An="Reshape",Dn="ResizeNearestNeighbor",$n="ResizeBilinear",Pn="Relu6",Ln="Reverse",Rn="Round",Fn="Rsqrt",zn="ScatterNd",Bn="SearchSorted",Un="Select",Vn="Selu",jn="Slice",Hn="Sin",Wn="Sinh",qn="Sign",Kn="Sigmoid",Gn="Softplus",Qn="Sqrt",Yn="Sum",Jn="SpaceToBatchND",Xn="SplitV",Zn="Softmax",er="SparseFillEmptyRows",tr="SparseReshape",nr="SparseSegmentMean",rr="SparseSegmentSum",ar="SparseToDense",sr="SquaredDifference",or="StridedSlice",ir="StringNGrams",ur="StringSplit",lr="StringToHashBucketFast",cr="Sub",pr="Tan",dr="Tanh",fr="Tile",hr="TopK",mr="Transform",yr="Transpose",gr="Unique",br="Unpack",vr="UnsortedSegmentSum",wr="ZerosLike",xr="Step",kr="FromPixels",Sr="RotateWithOffset",Nr="_FusedMatMul",Er="FusedConv2D",Tr="FusedDepthwiseConv2D";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _r(...e){de().getBool("IS_TEST")||de().getBool("PROD")||console.warn(...e)}const Ir=Me("kernelRegistry",(()=>new Map)),Cr=Me("gradRegistry",(()=>new Map));function Or(e,t){const n=Dr(e,t);return Ir.get(n)}function Mr(e){return Cr.get(e)}function Ar(e){const t=Ir.entries(),n=[];for(;;){const{done:r,value:a}=t.next();if(r)break;const[s,o]=a,[i]=s.split("_");i===e&&n.push(o)}return n}function Dr(e,t){return`${t}_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var $r={};e($r,"createScalarValue",(()=>wa)),e($r,"encodeString",(()=>Na)),e($r,"toTypedArray",(()=>xa)),e($r,"now",(()=>ka)),e($r,"fetch",(()=>Sa)),e($r,"decodeString",(()=>Ea));
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var Pr={};e(Pr,"hexToLong",(()=>ua)),e(Pr,"fingerPrint64",(()=>va));
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var Lr;Lr=Fr;var Rr=null;try{Rr=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(e){}function Fr(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function zr(e){return!0===(e&&e.__isLong__)}Fr.prototype.__isLong__,Object.defineProperty(Fr.prototype,"__isLong__",{value:!0}),Fr.isLong=zr;var Br={},Ur={};function Vr(e,t){var n,r,a;return t?(a=0<=(e>>>=0)&&e<256)&&(r=Ur[e])?r:(n=Hr(e,(0|e)<0?-1:0,!0),a&&(Ur[e]=n),n):(a=-128<=(e|=0)&&e<128)&&(r=Br[e])?r:(n=Hr(e,e<0?-1:0,!1),a&&(Br[e]=n),n)}function jr(e,t){if(isNaN(e))return t?Zr:Xr;if(t){if(e<0)return Zr;if(e>=Qr)return aa}else{if(e<=-Yr)return sa;if(e+1>=Yr)return ra}return e<0?jr(-e,t).neg():Hr(e%Gr|0,e/Gr|0,t)}function Hr(e,t,n){return new Fr(e,t,n)}Fr.fromInt=Vr,Fr.fromNumber=jr,Fr.fromBits=Hr;var Wr=Math.pow;function qr(e,t,n){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return Xr;if("number"==typeof t?(n=t,t=!1):t=!!t,(n=n||10)<2||36<n)throw RangeError("radix");var r;if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===r)return qr(e.substring(1),t,n).neg();for(var a=jr(Wr(n,8)),s=Xr,o=0;o<e.length;o+=8){var i=Math.min(8,e.length-o),u=parseInt(e.substring(o,o+i),n);if(i<8){var l=jr(Wr(n,i));s=s.mul(l).add(jr(u))}else s=(s=s.mul(a)).add(jr(u))}return s.unsigned=t,s}function Kr(e,t){return"number"==typeof e?jr(e,t):"string"==typeof e?qr(e,t):Hr(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}Fr.fromString=qr,Fr.fromValue=Kr;var Gr=4294967296,Qr=Gr*Gr,Yr=Qr/2,Jr=Vr(16777216),Xr=Vr(0);Fr.ZERO=Xr;var Zr=Vr(0,!0);Fr.UZERO=Zr;var ea=Vr(1);Fr.ONE=ea;var ta=Vr(1,!0);Fr.UONE=ta;var na=Vr(-1);Fr.NEG_ONE=na;var ra=Hr(-1,2147483647,!1);Fr.MAX_VALUE=ra;var aa=Hr(-1,-1,!0);Fr.MAX_UNSIGNED_VALUE=aa;var sa=Hr(0,-2147483648,!1);Fr.MIN_VALUE=sa;var oa=Fr.prototype;oa.toInt=function(){return this.unsigned?this.low>>>0:this.low},oa.toNumber=function(){return this.unsigned?(this.high>>>0)*Gr+(this.low>>>0):this.high*Gr+(this.low>>>0)},oa.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(sa)){var t=jr(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}return"-"+this.neg().toString(e)}for(var a=jr(Wr(e,6),this.unsigned),s=this,o="";;){var i=s.div(a),u=(s.sub(i.mul(a)).toInt()>>>0).toString(e);if((s=i).isZero())return u+o;for(;u.length<6;)u="0"+u;o=""+u+o}},oa.getHighBits=function(){return this.high},oa.getHighBitsUnsigned=function(){return this.high>>>0},oa.getLowBits=function(){return this.low},oa.getLowBitsUnsigned=function(){return this.low>>>0},oa.getNumBitsAbs=function(){if(this.isNegative())return this.eq(sa)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&0==(e&1<<t);t--);return 0!=this.high?t+33:t+1},oa.isZero=function(){return 0===this.high&&0===this.low},oa.eqz=oa.isZero,oa.isNegative=function(){return!this.unsigned&&this.high<0},oa.isPositive=function(){return this.unsigned||this.high>=0},oa.isOdd=function(){return 1==(1&this.low)},oa.isEven=function(){return 0==(1&this.low)},oa.equals=function(e){return zr(e)||(e=Kr(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&(this.high===e.high&&this.low===e.low)},oa.eq=oa.equals,oa.notEquals=function(e){return!this.eq(e)},oa.neq=oa.notEquals,oa.ne=oa.notEquals,oa.lessThan=function(e){return this.comp(e)<0},oa.lt=oa.lessThan,oa.lessThanOrEqual=function(e){return this.comp(e)<=0},oa.lte=oa.lessThanOrEqual,oa.le=oa.lessThanOrEqual,oa.greaterThan=function(e){return this.comp(e)>0},oa.gt=oa.greaterThan,oa.greaterThanOrEqual=function(e){return this.comp(e)>=0},oa.gte=oa.greaterThanOrEqual,oa.ge=oa.greaterThanOrEqual,oa.compare=function(e){if(zr(e)||(e=Kr(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},oa.comp=oa.compare,oa.negate=function(){return!this.unsigned&&this.eq(sa)?sa:this.not().add(ea)},oa.neg=oa.negate,oa.add=function(e){zr(e)||(e=Kr(e));var t=this.high>>>16,n=65535&this.high,r=this.low>>>16,a=65535&this.low,s=e.high>>>16,o=65535&e.high,i=e.low>>>16,u=0,l=0,c=0,p=0;return c+=(p+=a+(65535&e.low))>>>16,l+=(c+=r+i)>>>16,u+=(l+=n+o)>>>16,u+=t+s,Hr((c&=65535)<<16|(p&=65535),(u&=65535)<<16|(l&=65535),this.unsigned)},oa.subtract=function(e){return zr(e)||(e=Kr(e)),this.add(e.neg())},oa.sub=oa.subtract,oa.multiply=function(e){if(this.isZero())return Xr;if(zr(e)||(e=Kr(e)),Rr)return Hr(Rr.mul(this.low,this.high,e.low,e.high),Rr.get_high(),this.unsigned);if(e.isZero())return Xr;if(this.eq(sa))return e.isOdd()?sa:Xr;if(e.eq(sa))return this.isOdd()?sa:Xr;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Jr)&&e.lt(Jr))return jr(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,n=65535&this.high,r=this.low>>>16,a=65535&this.low,s=e.high>>>16,o=65535&e.high,i=e.low>>>16,u=65535&e.low,l=0,c=0,p=0,d=0;return p+=(d+=a*u)>>>16,c+=(p+=r*u)>>>16,p&=65535,c+=(p+=a*i)>>>16,l+=(c+=n*u)>>>16,c&=65535,l+=(c+=r*i)>>>16,c&=65535,l+=(c+=a*o)>>>16,l+=t*u+n*i+r*o+a*s,Hr((p&=65535)<<16|(d&=65535),(l&=65535)<<16|(c&=65535),this.unsigned)},oa.mul=oa.multiply,oa.divide=function(e){if(zr(e)||(e=Kr(e)),e.isZero())throw Error("division by zero");var t,n,r;if(Rr)return this.unsigned||-2147483648!==this.high||-1!==e.low||-1!==e.high?Hr((this.unsigned?Rr.div_u:Rr.div_s)(this.low,this.high,e.low,e.high),Rr.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?Zr:Xr;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return Zr;if(e.gt(this.shru(1)))return ta;r=Zr}else{if(this.eq(sa))return e.eq(ea)||e.eq(na)?sa:e.eq(sa)?ea:(t=this.shr(1).div(e).shl(1)).eq(Xr)?e.isNegative()?ea:na:(n=this.sub(e.mul(t)),r=t.add(n.div(e)));if(e.eq(sa))return this.unsigned?Zr:Xr;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();r=Xr}for(n=this;n.gte(e);){t=Math.max(1,Math.floor(n.toNumber()/e.toNumber()));for(var a=Math.ceil(Math.log(t)/Math.LN2),s=a<=48?1:Wr(2,a-48),o=jr(t),i=o.mul(e);i.isNegative()||i.gt(n);)i=(o=jr(t-=s,this.unsigned)).mul(e);o.isZero()&&(o=ea),r=r.add(o),n=n.sub(i)}return r},oa.div=oa.divide,oa.modulo=function(e){return zr(e)||(e=Kr(e)),Rr?Hr((this.unsigned?Rr.rem_u:Rr.rem_s)(this.low,this.high,e.low,e.high),Rr.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},oa.mod=oa.modulo,oa.rem=oa.modulo,oa.not=function(){return Hr(~this.low,~this.high,this.unsigned)},oa.and=function(e){return zr(e)||(e=Kr(e)),Hr(this.low&e.low,this.high&e.high,this.unsigned)},oa.or=function(e){return zr(e)||(e=Kr(e)),Hr(this.low|e.low,this.high|e.high,this.unsigned)},oa.xor=function(e){return zr(e)||(e=Kr(e)),Hr(this.low^e.low,this.high^e.high,this.unsigned)},oa.shiftLeft=function(e){return zr(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?Hr(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):Hr(0,this.low<<e-32,this.unsigned)},oa.shl=oa.shiftLeft,oa.shiftRight=function(e){return zr(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?Hr(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):Hr(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},oa.shr=oa.shiftRight,oa.shiftRightUnsigned=function(e){if(zr(e)&&(e=e.toInt()),0===(e&=63))return this;var t=this.high;return e<32?Hr(this.low>>>e|t<<32-e,t>>>e,this.unsigned):Hr(32===e?t:t>>>e-32,0,this.unsigned)},oa.shru=oa.shiftRightUnsigned,oa.shr_u=oa.shiftRightUnsigned,oa.toSigned=function(){return this.unsigned?Hr(this.low,this.high,!1):this},oa.toUnsigned=function(){return this.unsigned?this:Hr(this.low,this.high,!0)},oa.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},oa.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},oa.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},Fr.fromBytes=function(e,t,n){return n?Fr.fromBytesLE(e,t):Fr.fromBytesBE(e,t)},Fr.fromBytesLE=function(e,t){return new Fr(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},Fr.fromBytesBE=function(e,t){return new Fr(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};const ia=Lr.default||Lr;function ua(e){return ia.fromString(e,!0,16)}const la=ua("c3a5c85c97cb3127"),ca=ua("b492b66fbe98f273"),pa=ua("9ae16a3b2f90404f");function da(e){return e.xor(e.shru(47))}function fa(e,t,n){const r=e.slice(t,t+n);return ia.fromBytes(Array.from(r),!0,!0)}function ha(e,t){return fa(e,t,8)}function ma(e,t){return fa(e,t,4)}function ya(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function ga(e,t,n=ua("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let a=t.xor(r).mul(n);return a=a.xor(a.shru(47)),a=a.mul(n),a}function ba(e,t,n,r){return function(e,t,n,r,a,s){a=a.add(e),s=ya(s.add(a).add(r),21);const o=a;return a=(a=a.add(t)).add(n),s=s.add(ya(a,44)),[a.add(r),s.add(o)]}(ha(e,t),ha(e,t+8),ha(e,t+16),ha(e,t+24),n,r)}function va(e,t=e.length){const n=ia.fromNumber(81,!0);if(t<=32)return t<=16?function(e,t=e.length){if(t>=8){const n=pa.add(2*t),r=ha(e,0).add(pa),a=ha(e,t-8);return ga(ya(a,37).mul(n).add(r),ya(r,25).add(a).mul(n),n)}if(t>=4){const n=pa.add(2*t);return ga(ma(e,0).shl(3).add(t),ma(e,t-4),n)}if(t>0){const n=e[0]+(e[t>>1]<<8),r=t+(e[t-1]<<2);return da(pa.mul(n).xor(la.mul(r))).mul(pa)}return pa}(e,t):function(e,t=e.length){const n=pa.add(2*t),r=ha(e,0).mul(ca),a=ha(e,8),s=ha(e,t-8).mul(n),o=ha(e,t-16).mul(pa);return ga(ya(r.add(a),43).add(ya(s,30)).add(o),r.add(ya(a.add(pa),18)).add(s),n)}(e,t);if(t<=64)return function(e,t=e.length){const n=pa.add(2*t),r=ha(e,0).mul(pa),a=ha(e,8),s=ha(e,t-8).mul(n),o=ha(e,t-16).mul(pa),i=ya(r.add(a),43).add(ya(s,30)).add(o),u=ga(i,r.add(ya(a.add(pa),18)).add(s),n),l=ha(e,16).mul(n),c=ha(e,24),p=i.add(ha(e,t-32)).mul(n),d=u.add(ha(e,t-24)).mul(n);return ga(ya(l.add(c),43).add(ya(p,30)).add(d),l.add(ya(c.add(r),18)).add(p),n)}(e,t);let r=n,a=n.mul(ca).add(113),s=da(a.mul(pa).add(113)).mul(pa),o=[ia.UZERO,ia.UZERO],i=[ia.UZERO,ia.UZERO];r=r.mul(pa).add(ha(e,0));let u=0;const l=64*(t-1>>6),c=l+(t-1&63)-63;do{r=ya(r.add(a).add(o[0]).add(ha(e,u+8)),37).mul(ca),a=ya(a.add(o[1]).add(ha(e,u+48)),42).mul(ca),r=r.xor(i[1]),a=a.add(o[0]).add(ha(e,u+40)),s=ya(s.add(i[0]),33).mul(ca),o=ba(e,u,o[1].mul(ca),r.add(i[0])),i=ba(e,u+32,s.add(i[1]),a.add(ha(e,u+16))),[s,r]=[r,s],u+=64}while(u!==l);const p=ca.add(s.and(255).shl(1));return u=c,i[0]=i[0].add(t-1&63),o[0]=o[0].add(i[0]),i[0]=i[0].add(o[0]),r=ya(r.add(a).add(o[0]).add(ha(e,u+8)),37).mul(p),a=ya(a.add(o[1]).add(ha(e,u+48)),42).mul(p),r=r.xor(i[1].mul(9)),a=a.add(o[0].mul(9).add(ha(e,u+40))),s=ya(s.add(i[0]),33).mul(p),o=ba(e,u,o[1].mul(p),r.add(i[0])),i=ba(e,u+32,s.add(i[1]),a.add(ha(e,u+16))),[s,r]=[r,s],ga(ga(o[0],i[0],p).add(da(a).mul(la)).add(s),ga(o[1],i[1],p).add(r),p)}function wa(e,t){return"string"===t?Na(e):xa([e],t)}function xa(e,t){if("string"===t)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=T(e)),de().getBool("DEBUG")&&U(e,t),function(e,t){return e instanceof Float32Array&&"float32"===t||e instanceof Int32Array&&"int32"===t||e instanceof Uint8Array&&"bool"===t}(e,t))return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){const t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)0!==Math.round(e[n])&&(t[n]=1);return t}throw new Error(`Unknown data type ${t}`)}function ka(){return de().platform.now()}function Sa(e,t){return de().platform.fetch(e,t)}function Na(e,t="utf-8"){return t=t||"utf-8",de().platform.encode(e,t)}function Ea(e,t="utf-8"){return t=t||"utf-8",de().platform.decode(e,t)}r($r,h),r($r,Pr);class Ta{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new Ia)}profileKernel(e,t,n){let r;const a=()=>{r=n()};let s;const o=ka();if(this.backendTimer.timerAvailable())s=this.backendTimer.time(a);else{a();for(const e of r)e.dataSync();s=Promise.resolve({kernelMs:ka()-o})}if(de().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let t=0;t<r.length;t++){const n=r[t];n.data().then((t=>{_a(t,n.dtype,e)}))}return{kernelName:e,outputs:r,inputs:t,timeMs:s.then((e=>e.kernelMs)),extraInfo:s.then((e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():""))}}logKernelProfile(e){const{kernelName:t,outputs:n,timeMs:r,inputs:a,extraInfo:s}=e;n.forEach((e=>{Promise.all([e.data(),r,s]).then((n=>{this.logger.logKernelProfile(t,e,n[0],n[1],a,n[2])}))}))}}function _a(e,t,n){if("float32"!==t)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class Ia{logKernelProfile(e,t,n,r,a,s){const o="number"==typeof r?$(`${r}ms`,9):r.error,i=$(e,25),u=t.rank,l=t.size,c=$(t.shape.toString(),14);let p="";for(const e in a){const n=a[e];if(null!=n){const r=n.shape||t.shape,a=r.length;p+=`${e}: ${a}D ${a>0?r:""} `}}console.log(`%c${i}\t%c${o}\t%c${u}D ${c}\t%c${l}\t%c${p}\t%c${s}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ca(e,t,n){const r={},a={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){const s=e[n],o=s.inputs;for(const e in o){const n=o[e];let i=!1;for(let e=0;e<t.length;e++)if(r[n.id]){s.outputs.forEach((e=>r[e.id]=!0)),i=!0,a[s.id]=!0;break}if(i)break}}const s={};s[n.id]=!0;const o={};for(let t=e.length-1;t>=0;t--){const n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(s[n.outputs[e].id]){for(const e in r)s[r[e].id]=!0,o[n.id]=!0;break}}const i=[];for(let t=0;t<e.length;t++){const n=e[t];if(a[n.id]&&o[n.id]){const e={};for(const t in n.inputs){const a=n.inputs[t];r[a.id]&&(e[t]=a)}const t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,i.push(t)}}return i}function Oa(e,t,n,r){for(let a=t.length-1;a>=0;a--){const s=t[a],o=[];if(s.outputs.forEach((t=>{const n=e[t.id];null!=n?o.push(n):o.push(null)})),null==s.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const i=s.gradient(o);for(const t in s.inputs){if(!(t in i))throw new Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(i)}.`);const a=n((()=>i[t]()));if("float32"!==a.dtype)throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${a.dtype}'`);const o=s.inputs[t];if(!C(a.shape,o.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${t}' has shape '${a.shape}', which does not match the shape of the input '${o.shape}'`);if(null==e[o.id])e[o.id]=a;else{const t=e[o.id];e[o.id]=r(t,a),t.dispose()}}}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ma=20,Aa=3,Da=7;function $a(e,t,n,r){const a=Z(t),s=function(e,t,n,r){const a=_(t),s=r[r.length-1],o=new Array(s).fill(0),i=t.length,u="complex64"===n?Fa(e):e;if(i>1)for(let e=0;e<a/s;e++){const t=e*s;for(let e=0;e<s;e++)o[e]=Math.max(o[e],Pa(u[t+e],0,n).length)}return o}(e,t,n,a),o=t.length,i=Ra(e,t,n,a,s),u=["Tensor"];return r&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(i.map((e=>"    "+e)).join("\n")),u.join("\n")}function Pa(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(Da))} + ${parseFloat(e[1].toFixed(Da))}j`:K(e)?`'${e}'`:"bool"===n?La(e):parseFloat(e.toFixed(Da)).toString(),$(r,t)}function La(e){return 0===e?"false":"true"}function Ra(e,t,n,r,a,s=!0){const o="complex64"===n?2:1,i=t[0],u=t.length;if(0===u){if("complex64"===n){return[Pa(Fa(e)[0],0,n)]}return"bool"===n?[La(e[0])]:[e[0].toString()]}if(1===u){if(i>Ma){const t=Aa*o;let r=Array.from(e.slice(0,t)),s=Array.from(e.slice((i-Aa)*o,i*o));return"complex64"===n&&(r=Fa(r),s=Fa(s)),["["+r.map(((e,t)=>Pa(e,a[t],n))).join(", ")+", ..., "+s.map(((e,t)=>Pa(e,a[i-Aa+t],n))).join(", ")+"]"]}return["["+("complex64"===n?Fa(e):Array.from(e)).map(((e,t)=>Pa(e,a[t],n))).join(", ")+"]"]}const l=t.slice(1),c=r.slice(1),p=r[0]*o,d=[];if(i>Ma){for(let t=0;t<Aa;t++){const r=t*p,s=r+p;d.push(...Ra(e.slice(r,s),l,n,c,a,!1))}d.push("...");for(let t=i-Aa;t<i;t++){const r=t*p,s=r+p;d.push(...Ra(e.slice(r,s),l,n,c,a,t===i-1))}}else for(let t=0;t<i;t++){const r=t*p,s=r+p;d.push(...Ra(e.slice(r,s),l,n,c,a,t===i-1))}const f=2===u?",":"";d[0]="["+d[0]+f;for(let e=1;e<d.length-1;e++)d[e]=" "+d[e]+f;let h=",\n";for(let e=2;e<u;e++)h+="\n";return d[d.length-1]=" "+d[d.length-1]+"]"+(s?"":h),d}function Fa(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}class za{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=_(e),null!=n){const e=n.length;S(e===this.size,(()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===t)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||B(t,this.size),this.strides=Z(e)}set(e,...t){0===t.length&&(t=[0]),S(t.length===this.rank,(()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`));const n=this.locToIndex(t);this.values[n]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(const n of e){if(n<0||n>=this.shape[t]){const t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];const t=new Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return Ba().makeTensor(this.values,this.shape,this.dtype)}}let Ba=null,Ua=null,Va=null;class ja{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=_(e),this.strides=Z(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return Ua.buffer(this.shape,this.dtype,e)}bufferSync(){return Ua.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return te(this.shape,e,"complex64"===this.dtype)}arraySync(){return te(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();const e=Ba().read(this.dataId);if("string"===this.dtype){const t=await e;try{return t.map((e=>Ea(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),Ba().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=Ba().readSync(this.dataId);if("string"===this.dtype)try{return e.map((e=>Ea(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await Ba().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(Ba().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return Ua.print(this,e)}clone(){return this.throwIfDisposed(),Ua.clone(this)}toString(e=!1){return $a(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Ua.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),Ba().makeVariable(this,e,t,n)}}Object.defineProperty(ja,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),Me("Tensor",(()=>ja));class Ha extends ja{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!C(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Ba().disposeTensor(this),this.dataId=e.dataId,Ba().incRef(this,null)}dispose(){Ba().disposeVariable(this),this.isDisposedInternal=!0}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var Wa,qa,Ka,Ga,Qa,Ya,Ja,Xa,Za,es;Object.defineProperty(Ha,Symbol.hasInstance,{value:e=>e instanceof ja&&null!=e.assign&&e.assign instanceof Function}),(qa=Wa||(Wa={})).R0="R0",qa.R1="R1",qa.R2="R2",qa.R3="R3",qa.R4="R4",qa.R5="R5",qa.R6="R6",(Ga=Ka||(Ka={})).float32="float32",Ga.int32="int32",Ga.bool="int32",Ga.complex64="complex64",(Ya=Qa||(Qa={})).float32="float32",Ya.int32="int32",Ya.bool="bool",Ya.complex64="complex64",(Xa=Ja||(Ja={})).float32="float32",Xa.int32="float32",Xa.bool="float32",Xa.complex64="complex64",(es=Za||(Za={})).float32="complex64",es.int32="complex64",es.bool="complex64",es.complex64="complex64";const ts={float32:Ja,int32:Ka,bool:Qa,complex64:Za};function ns(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return ts[e][t]}function rs(e,t){if(e.dtype===t.dtype)return[e,t];const n=ns(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function as(e){const t=[];return ss(e,t,new Set),t}function ss(e,t,n){if(null==e)return;if(e instanceof ja)return void t.push(e);if(r=e,!Array.isArray(r)&&"object"!=typeof r)return;var r;const a=e;for(const e in a){const r=a[e];n.has(r)||(n.add(r),ss(r,t,n))}}function os(e){return null!=e.kernelName}class is{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map((e=>e.name))))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class us{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new is}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t];if(await this.initializeBackend(n).success)return void await this.setBackend(n)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{const{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(_r(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(null==this.registryFactory[e])throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;const{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Ta(this.backendInstance),!0}setupRegisteredKernels(){Ar(this.backendName).forEach((e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(e){Ar(e).forEach((t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])}))}initializeBackend(e){const t=this.registryFactory[e];if(null==t)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const n=t.factory();if(!n||n instanceof d||"function"!=typeof n.then)return this.registry[e]=n,{success:!0,asyncInit:!1};{const t=++this.pendingBackendInitId,r=n.then((n=>!(t<this.pendingBackendInitId)&&(this.registry[e]=n,this.pendingBackendInit=null,!0))).catch((n=>(t<this.pendingBackendInitId||(this.pendingBackendInit=null,_r(`Initialization of backend ${e} failed`),_r(n.stack||n.message)),!1)));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(t){return _r(`Initialization of backend ${e} failed`),_r(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority))}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const n=this.state.tensorInfo.get(t),r=n.backend,a=this.readSync(t),s=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,a,n.shape,n.dtype,s),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n,r=null;if(null==t){if("function"!=typeof e)throw new Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}return this.scopedRun((()=>this.startScope(r)),(()=>this.endScope(n)),(()=>(n=t(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n)))}scopedRun(e,t,n){e();try{const e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return us.nextTensorId++}nextVariableId(){return us.nextVariableId++}clone(e){const t=cs.runKernel(zt,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],(e=>({x:()=>{const t={x:e},n={dtype:"float32"};return cs.runKernel(Xe,t,n)}})),[],{}),t}runKernel(e,t,n){null==this.backendName&&this.backend;if(!(null!=Or(e,this.backendName)))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){const r=this.backend.numDataIds();let a=0;n.forEach((e=>{a+="complex64"===e.dtype?3:1}));const s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-a-s;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[];const r=this.isTapeOn(),a=this.state.numBytes,s=this.state.numTensors;let o,i;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const u=os(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(os(e)){const{kernelName:t,inputs:a,attrs:s}=e;null==this.backendName&&this.backend;const u=Or(t,this.backendName);S(null!=u,(()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`)),o=()=>{const e=this.backend.numDataIds();i=u.kernelFunc({inputs:a,attrs:s,backend:this.backend});const o=Array.isArray(i)?i:[i];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);const l=o.map((e=>null!=e.rank?e:this.makeTensorFromTensorInfo(e)));if(r){const e=this.getTensorsForGradient(t,a,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{const{forwardFunc:t}=e,a=e=>{r&&(n=e.map((e=>this.keep(this.clone(e)))))};o=()=>{const e=this.backend.numDataIds();i=this.tidy((()=>t(this.backend,a)));const n=Array.isArray(i)?i:[i];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,e,n),n}}const{inputs:l,attrs:c}=e,p=os(e)?null:e.backwardsFunc;let d;return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(d=this.profiler.profileKernel(u,l,(()=>o())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),t=d.outputs):t=o()})),r&&this.addTapeNode(u,l,t,p,n,c),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-s,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map((e=>null!=l[e]?l[e].shape:null)),outputShapes:t.map((e=>e.shape)),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(i)?t:t[0]}saveTensorsForBackwardMode(e){return e.map((e=>this.keep(this.clone(e))))}getTensorsForGradient(e,t,n){const r=Mr(e);if(null!=r){const e=r.inputsToSave||[],a=r.outputsToSave||[];let s;r.saveAllInputs?(S(Array.isArray(t),(()=>"saveAllInputs is true, expected inputs to be an array.")),s=Object.keys(t).map((e=>t[e]))):s=e.map((e=>t[e]));const o=n.filter(((e,t)=>a[t]));return s.concat(o)}return[]}makeTensor(e,t,n,r){if(null==e)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=e;"string"===n&&K(e[0])&&(a=e.map((e=>Na(e))));const s=r.write(a,t,n),o=new ja(t,n,s,this.nextTensorId());if(this.trackTensor(o,r),"string"===n){const e=this.state.tensorInfo.get(s),t=q(a);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){const a={dataId:e,shape:t,dtype:n=n||"float32"};return this.makeTensorFromTensorInfo(a,r)}makeTensorFromTensorInfo(e,t){const{dataId:n,shape:r,dtype:a}=e,s=new ja(r,a,n,this.nextTensorId());return this.trackTensor(s,t),s}makeVariable(e,t=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==e.dtype&&(e=e.cast(r));const a=new Ha(e,t,n,this.nextTensorId());if(null!=this.state.registeredVariables[a.name])throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let n=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(n=e.size*W(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof Ha||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){const t=e.size*W(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((e=>e.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,n,r,a,s){const o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},i=Mr(e);null!=i&&(r=i.gradFunc),null!=r&&(o.gradient=e=>(e=e.map(((e,t)=>{if(null==e){const e=n[t],r=re(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e})),r(e.length>1?e:e[0],a,s))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=as(e),n=new Set(t.map((e=>e.id)));for(let e=0;e<this.state.activeScope.track.length;e++){const t=this.state.activeScope.track[e];t.kept||n.has(t.id)||t.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach((e=>{e.kept||e.scopeId!==r.id||this.track(e)}))}gradients(e,t,n,r=!1){if(S(t.length>0,(()=>"gradients() received an empty list of xs.")),null!=n&&"float32"!==n.dtype)throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const a=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",e)));S(a instanceof ja,(()=>"The result y returned by f() must be a tensor."));const s=Ca(this.state.activeTape,t,a);if(!r&&0===s.length&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const e={};e[a.id]=null==n?function(e){const t=ne(_(e),"float32");return cs.makeTensor(t,e,"float32")}(a.shape):n,Oa(e,s,(e=>this.tidy(e)),ps);const r=t.map((t=>e[t.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((e=>{for(const t of e.saved)t.dispose()})),this.state.activeTape=null),{value:a,grads:r}}))}customGrad(e){return S(J(e),(()=>"The f passed in customGrad(f) must be a function.")),(...t)=>{let n;S(t.every((e=>e instanceof ja)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const r={};t.forEach(((e,t)=>{r[t]=e}));return this.runKernelFunc({forwardFunc:(r,a)=>(n=e(...t,a),S(n.value instanceof ja,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),S(J(n.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),n.value),backwardsFunc:(e,r)=>{const a=n.gradFunc(e,r),s=Array.isArray(a)?a:[a];S(s.length===t.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),S(s.every((e=>e instanceof ja)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const o={};return s.forEach(((e,t)=>{o[t]=()=>e})),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=ka(),n=await this.backend.time(e);return n.wallMs=ka()-t,n}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new is;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function ls(){const e=Oe();if(null==e._tfengine){const t=new ce(e);e._tfengine=new us(t)}var t;return t=e._tfengine.ENV,fe=t,Ba=()=>e._tfengine,e._tfengine}us.nextTensorId=0,us.nextVariableId=0;const cs=ls();function ps(e,t){const n={a:e,b:t};return cs.runKernel(Pe,n)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ds=de();
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fs(e,t){let n=e;if(H(e))return"string"===t?[]:[e.length];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||H(n)&&"string"!==t;)r.push(n.length),n=n[0];return Array.isArray(e)&&de().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&hs(e,r,[]),r}function hs(e,t,n){if(n=n||[],!Array.isArray(e)&&!H(e))return void S(0===t.length,(()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`));S(t.length>0,(()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`)),S(e.length===t[0],(()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`));const r=t.slice(1);for(let t=0;t<e.length;++t)hs(e[t],r,n.concat(t))}function ms(e,t,n,r){if("string_or_numeric"!==e){if(null==e)throw new Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function ys(e,t,n,r="numeric"){if(e instanceof ja)return ms(r,e.dtype,t,n),e;let a=Y(e);if("string"!==a&&["bool","int32","float32"].indexOf(r)>=0&&(a=r),ms(r,a,t,n),null==e||!H(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){const r=null==e?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const s=fs(e,a);H(e)||Array.isArray(e)||(e=[e]);const o="string"!==a?xa(e,a):T(e,[],!0);return cs.makeTensor(o,s,a)}function gs(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map(((e,a)=>ys(e,`${t}[${a}]`,n,r)))}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ds.registerFlag("DEBUG",(()=>!1),(e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),ds.registerFlag("IS_BROWSER",(()=>"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope)),ds.registerFlag("IS_NODE",(()=>void 0!==ye&&void 0!==ye.versions&&void 0!==ye.versions.node)),ds.registerFlag("IS_CHROME",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),ds.registerFlag("PROD",(()=>!1)),ds.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>ds.getBool("DEBUG"))),ds.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),ds.registerFlag("IS_TEST",(()=>!1)),ds.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>!0)),ds.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1)),ds.registerFlag("ENGINE_COMPILE_ONLY",(()=>!1)),ds.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",(()=>!1)),ds.registerFlag("USE_SETTIMEOUTCUSTOM",(()=>!1));const bs="__op";function vs(e){const t=Object.keys(e);if(1!==t.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+=bs;const a=(...e)=>{cs.startScope(n);try{const t=r(...e);return ue(t)&&console.error("Cannot return a Promise inside of tidy."),cs.endScope(t),t}catch(e){throw cs.endScope(null),e}};return Object.defineProperty(a,"name",{value:n,configurable:!0}),a}const ws=vs({complex_:function(e,t){const n=ys(e,"real","complex"),r=ys(t,"imag","complex");N(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const a={real:n,imag:r};return cs.runKernel(tt,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xs(e,t,n,r){if(null==r&&(r=Y(e)),"complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!H(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){se(t);const e=_(t),r=_(n);S(e===r,(()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`));for(let e=0;e<n.length;++e){const r=n[e],a=e!==n.length-1||r!==_(t.slice(e));S(n[e]===t[e]||!a,(()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `))}}return H(e)||Array.isArray(e)||(e=[e]),t=t||n,e="string"!==r?xa(e,r):T(e,[],!0),cs.makeTensor(e,t,r)}function ks(e,t,n){return xs(e,t,fs(e,n),n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ss={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var Ns,Es,Ts;Es=function(e){var t,n,r=Ps(e),a=r[0],s=r[1],o=new Ms(function(e,t,n){return 3*(t+n)/4-n}(0,a,s)),i=0,u=s>0?a-4:a;for(n=0;n<u;n+=4)t=Os[e.charCodeAt(n)]<<18|Os[e.charCodeAt(n+1)]<<12|Os[e.charCodeAt(n+2)]<<6|Os[e.charCodeAt(n+3)],o[i++]=t>>16&255,o[i++]=t>>8&255,o[i++]=255&t;2===s&&(t=Os[e.charCodeAt(n)]<<2|Os[e.charCodeAt(n+1)]>>4,o[i++]=255&t);1===s&&(t=Os[e.charCodeAt(n)]<<10|Os[e.charCodeAt(n+1)]<<4|Os[e.charCodeAt(n+2)]>>2,o[i++]=t>>8&255,o[i++]=255&t);return o},Ts=function(e){for(var t,n=e.length,r=n%3,a=[],s=16383,o=0,i=n-r;o<i;o+=s)a.push(Ls(e,o,o+s>i?i:o+s));1===r?(t=e[n-1],a.push(Cs[t>>2]+Cs[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],a.push(Cs[t>>10]+Cs[t>>4&63]+Cs[t<<2&63]+"="));return a.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var _s,Is,Cs=[],Os=[],Ms="undefined"!=typeof Uint8Array?Uint8Array:Array,As="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ds=0,$s=As.length;Ds<$s;++Ds)Cs[Ds]=As[Ds],Os[As.charCodeAt(Ds)]=Ds;function Ps(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Ls(e,t,n){for(var r,a,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(Cs[(a=r)>>18&63]+Cs[a>>12&63]+Cs[a>>6&63]+Cs[63&a]);return s.join("")}Os["-".charCodeAt(0)]=62,Os["_".charCodeAt(0)]=63,_s=function(e,t,n,r,a){var s,o,i=8*a-r-1,u=(1<<i)-1,l=u>>1,c=-7,p=n?a-1:0,d=n?-1:1,f=e[t+p];for(p+=d,s=f&(1<<-c)-1,f>>=-c,c+=i;c>0;s=256*s+e[t+p],p+=d,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=r;c>0;o=256*o+e[t+p],p+=d,c-=8);if(0===s)s=1-l;else{if(s===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=l}return(f?-1:1)*o*Math.pow(2,s-r)},Is=function(e,t,n,r,a,s){var o,i,u,l=8*s-a-1,c=(1<<l)-1,p=c>>1,d=23===a?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,h=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(i=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+p>=1?d/u:d*Math.pow(2,1-p))*u>=2&&(o++,u/=2),o+p>=c?(i=0,o=c):o+p>=1?(i=(t*u-1)*Math.pow(2,a),o+=p):(i=t*Math.pow(2,p-1)*Math.pow(2,a),o=0));a>=8;e[n+f]=255&i,f+=h,i/=256,a-=8);for(o=o<<a|i,l+=a;l>0;e[n+f]=255&o,f+=h,o/=256,l-=8);e[n+f-h]|=128*m};var Rs="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;Ns=Bs;var Fs=2147483647;function zs(e){if(e>Fs)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,Bs.prototype),t}function Bs(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return js(e)}return Us(e,t,n)}function Us(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Bs.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|Ks(e,t),r=zs(n),a=r.write(e,t);a!==n&&(r=r.slice(0,a));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(wo(e,Uint8Array)){var t=new Uint8Array(e);return Ws(t.buffer,t.byteOffset,t.byteLength)}return Hs(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(wo(e,ArrayBuffer)||e&&wo(e.buffer,ArrayBuffer))return Ws(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(wo(e,SharedArrayBuffer)||e&&wo(e.buffer,SharedArrayBuffer)))return Ws(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return Bs.from(r,t,n);var a=function(e){if(Bs.isBuffer(e)){var t=0|qs(e.length),n=zs(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||xo(e.length)?zs(0):Hs(e);if("Buffer"===e.type&&Array.isArray(e.data))return Hs(e.data)}(e);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Bs.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Vs(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function js(e){return Vs(e),zs(e<0?0:0|qs(e))}function Hs(e){for(var t=e.length<0?0:0|qs(e.length),n=zs(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function Ws(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,Bs.prototype),r}function qs(e){if(e>=Fs)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Fs.toString(16)+" bytes");return 0|e}function Ks(e,t){if(Bs.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||wo(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return go(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return bo(e).length;default:if(a)return r?-1:go(e).length;t=(""+t).toLowerCase(),a=!0}}function Gs(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return uo(this,t,n);case"utf8":case"utf-8":return ao(this,t,n);case"ascii":return oo(this,t,n);case"latin1":case"binary":return io(this,t,n);case"base64":return ro(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return lo(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function Qs(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function Ys(e,t,n,r,a){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),xo(n=+n)&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return-1;n=e.length-1}else if(n<0){if(!a)return-1;n=0}if("string"==typeof t&&(t=Bs.from(t,r)),Bs.isBuffer(t))return 0===t.length?-1:Js(e,t,n,r,a);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):Js(e,[t],n,r,a);throw new TypeError("val must be string, number or Buffer")}function Js(e,t,n,r,a){var s,o=1,i=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,i/=2,u/=2,n/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(a){var c=-1;for(s=n;s<i;s++)if(l(e,s)===l(t,-1===c?0:s-c)){if(-1===c&&(c=s),s-c+1===u)return c*o}else-1!==c&&(s-=s-c),c=-1}else for(n+u>i&&(n=i-u),s=n;s>=0;s--){for(var p=!0,d=0;d<u;d++)if(l(e,s+d)!==l(t,d)){p=!1;break}if(p)return s}return-1}function Xs(e,t,n,r){n=Number(n)||0;var a=e.length-n;r?(r=Number(r))>a&&(r=a):r=a;var s=t.length;r>s/2&&(r=s/2);for(var o=0;o<r;++o){var i=parseInt(t.substr(2*o,2),16);if(xo(i))return o;e[n+o]=i}return o}function Zs(e,t,n,r){return vo(go(t,e.length-n),e,n,r)}function eo(e,t,n,r){return vo(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function to(e,t,n,r){return vo(bo(t),e,n,r)}function no(e,t,n,r){return vo(function(e,t){for(var n,r,a,s=[],o=0;o<e.length&&!((t-=2)<0);++o)r=(n=e.charCodeAt(o))>>8,a=n%256,s.push(a),s.push(r);return s}(t,e.length-n),e,n,r)}function ro(e,t,n){return 0===t&&n===e.length?Ts(e):Ts(e.slice(t,n))}function ao(e,t,n){n=Math.min(e.length,n);for(var r=[],a=t;a<n;){var s,o,i,u,l=e[a],c=null,p=l>239?4:l>223?3:l>191?2:1;if(a+p<=n)switch(p){case 1:l<128&&(c=l);break;case 2:128==(192&(s=e[a+1]))&&(u=(31&l)<<6|63&s)>127&&(c=u);break;case 3:s=e[a+1],o=e[a+2],128==(192&s)&&128==(192&o)&&(u=(15&l)<<12|(63&s)<<6|63&o)>2047&&(u<55296||u>57343)&&(c=u);break;case 4:s=e[a+1],o=e[a+2],i=e[a+3],128==(192&s)&&128==(192&o)&&128==(192&i)&&(u=(15&l)<<18|(63&s)<<12|(63&o)<<6|63&i)>65535&&u<1114112&&(c=u)}null===c?(c=65533,p=1):c>65535&&(c-=65536,r.push(c>>>10&1023|55296),c=56320|1023&c),r.push(c),a+=p}return function(e){var t=e.length;if(t<=so)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=so));return n}(r)}Bs.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Bs.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Bs.prototype,"parent",{enumerable:!0,get:function(){if(Bs.isBuffer(this))return this.buffer}}),Object.defineProperty(Bs.prototype,"offset",{enumerable:!0,get:function(){if(Bs.isBuffer(this))return this.byteOffset}}),Bs.poolSize=8192,Bs.from=function(e,t,n){return Us(e,t,n)},Object.setPrototypeOf(Bs.prototype,Uint8Array.prototype),Object.setPrototypeOf(Bs,Uint8Array),Bs.alloc=function(e,t,n){return function(e,t,n){return Vs(e),e<=0?zs(e):void 0!==t?"string"==typeof n?zs(e).fill(t,n):zs(e).fill(t):zs(e)}(e,t,n)},Bs.allocUnsafe=function(e){return js(e)},Bs.allocUnsafeSlow=function(e){return js(e)},Bs.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Bs.prototype},Bs.compare=function(e,t){if(wo(e,Uint8Array)&&(e=Bs.from(e,e.offset,e.byteLength)),wo(t,Uint8Array)&&(t=Bs.from(t,t.offset,t.byteLength)),!Bs.isBuffer(e)||!Bs.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,a=0,s=Math.min(n,r);a<s;++a)if(e[a]!==t[a]){n=e[a],r=t[a];break}return n<r?-1:r<n?1:0},Bs.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Bs.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Bs.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=Bs.allocUnsafe(t),a=0;for(n=0;n<e.length;++n){var s=e[n];if(wo(s,Uint8Array))a+s.length>r.length?Bs.from(s).copy(r,a):Uint8Array.prototype.set.call(r,s,a);else{if(!Bs.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,a)}a+=s.length}return r},Bs.byteLength=Ks,Bs.prototype._isBuffer=!0,Bs.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)Qs(this,t,t+1);return this},Bs.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)Qs(this,t,t+3),Qs(this,t+1,t+2);return this},Bs.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)Qs(this,t,t+7),Qs(this,t+1,t+6),Qs(this,t+2,t+5),Qs(this,t+3,t+4);return this},Bs.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?ao(this,0,e):Gs.apply(this,arguments)},Bs.prototype.toLocaleString=Bs.prototype.toString,Bs.prototype.equals=function(e){if(!Bs.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Bs.compare(this,e)},Bs.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},Rs&&(Bs.prototype[Rs]=Bs.prototype.inspect),Bs.prototype.compare=function(e,t,n,r,a){if(wo(e,Uint8Array)&&(e=Bs.from(e,e.offset,e.byteLength)),!Bs.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===a&&(a=this.length),t<0||n>e.length||r<0||a>this.length)throw new RangeError("out of range index");if(r>=a&&t>=n)return 0;if(r>=a)return-1;if(t>=n)return 1;if(this===e)return 0;for(var s=(a>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0),i=Math.min(s,o),u=this.slice(r,a),l=e.slice(t,n),c=0;c<i;++c)if(u[c]!==l[c]){s=u[c],o=l[c];break}return s<o?-1:o<s?1:0},Bs.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Bs.prototype.indexOf=function(e,t,n){return Ys(this,e,t,n,!0)},Bs.prototype.lastIndexOf=function(e,t,n){return Ys(this,e,t,n,!1)},Bs.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var a=this.length-t;if((void 0===n||n>a)&&(n=a),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var s=!1;;)switch(r){case"hex":return Xs(this,e,t,n);case"utf8":case"utf-8":return Zs(this,e,t,n);case"ascii":case"latin1":case"binary":return eo(this,e,t,n);case"base64":return to(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return no(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},Bs.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var so=4096;function oo(e,t,n){var r="";n=Math.min(e.length,n);for(var a=t;a<n;++a)r+=String.fromCharCode(127&e[a]);return r}function io(e,t,n){var r="";n=Math.min(e.length,n);for(var a=t;a<n;++a)r+=String.fromCharCode(e[a]);return r}function uo(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var a="",s=t;s<n;++s)a+=ko[e[s]];return a}function lo(e,t,n){for(var r=e.slice(t,n),a="",s=0;s<r.length-1;s+=2)a+=String.fromCharCode(r[s]+256*r[s+1]);return a}function co(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function po(e,t,n,r,a,s){if(!Bs.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function fo(e,t,n,r,a,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function ho(e,t,n,r,a){return t=+t,n>>>=0,a||fo(e,0,n,4),Is(e,t,n,r,23,4),n+4}function mo(e,t,n,r,a){return t=+t,n>>>=0,a||fo(e,0,n,8),Is(e,t,n,r,52,8),n+8}Bs.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,Bs.prototype),r},Bs.prototype.readUintLE=Bs.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||co(e,t,this.length);for(var r=this[e],a=1,s=0;++s<t&&(a*=256);)r+=this[e+s]*a;return r},Bs.prototype.readUintBE=Bs.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||co(e,t,this.length);for(var r=this[e+--t],a=1;t>0&&(a*=256);)r+=this[e+--t]*a;return r},Bs.prototype.readUint8=Bs.prototype.readUInt8=function(e,t){return e>>>=0,t||co(e,1,this.length),this[e]},Bs.prototype.readUint16LE=Bs.prototype.readUInt16LE=function(e,t){return e>>>=0,t||co(e,2,this.length),this[e]|this[e+1]<<8},Bs.prototype.readUint16BE=Bs.prototype.readUInt16BE=function(e,t){return e>>>=0,t||co(e,2,this.length),this[e]<<8|this[e+1]},Bs.prototype.readUint32LE=Bs.prototype.readUInt32LE=function(e,t){return e>>>=0,t||co(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Bs.prototype.readUint32BE=Bs.prototype.readUInt32BE=function(e,t){return e>>>=0,t||co(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Bs.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||co(e,t,this.length);for(var r=this[e],a=1,s=0;++s<t&&(a*=256);)r+=this[e+s]*a;return r>=(a*=128)&&(r-=Math.pow(2,8*t)),r},Bs.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||co(e,t,this.length);for(var r=t,a=1,s=this[e+--r];r>0&&(a*=256);)s+=this[e+--r]*a;return s>=(a*=128)&&(s-=Math.pow(2,8*t)),s},Bs.prototype.readInt8=function(e,t){return e>>>=0,t||co(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Bs.prototype.readInt16LE=function(e,t){e>>>=0,t||co(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Bs.prototype.readInt16BE=function(e,t){e>>>=0,t||co(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Bs.prototype.readInt32LE=function(e,t){return e>>>=0,t||co(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Bs.prototype.readInt32BE=function(e,t){return e>>>=0,t||co(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Bs.prototype.readFloatLE=function(e,t){return e>>>=0,t||co(e,4,this.length),_s(this,e,!0,23,4)},Bs.prototype.readFloatBE=function(e,t){return e>>>=0,t||co(e,4,this.length),_s(this,e,!1,23,4)},Bs.prototype.readDoubleLE=function(e,t){return e>>>=0,t||co(e,8,this.length),_s(this,e,!0,52,8)},Bs.prototype.readDoubleBE=function(e,t){return e>>>=0,t||co(e,8,this.length),_s(this,e,!1,52,8)},Bs.prototype.writeUintLE=Bs.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||po(this,e,t,n,Math.pow(2,8*n)-1,0);var a=1,s=0;for(this[t]=255&e;++s<n&&(a*=256);)this[t+s]=e/a&255;return t+n},Bs.prototype.writeUintBE=Bs.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||po(this,e,t,n,Math.pow(2,8*n)-1,0);var a=n-1,s=1;for(this[t+a]=255&e;--a>=0&&(s*=256);)this[t+a]=e/s&255;return t+n},Bs.prototype.writeUint8=Bs.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,1,255,0),this[t]=255&e,t+1},Bs.prototype.writeUint16LE=Bs.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Bs.prototype.writeUint16BE=Bs.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Bs.prototype.writeUint32LE=Bs.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Bs.prototype.writeUint32BE=Bs.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Bs.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var a=Math.pow(2,8*n-1);po(this,e,t,n,a-1,-a)}var s=0,o=1,i=0;for(this[t]=255&e;++s<n&&(o*=256);)e<0&&0===i&&0!==this[t+s-1]&&(i=1),this[t+s]=(e/o>>0)-i&255;return t+n},Bs.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var a=Math.pow(2,8*n-1);po(this,e,t,n,a-1,-a)}var s=n-1,o=1,i=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===i&&0!==this[t+s+1]&&(i=1),this[t+s]=(e/o>>0)-i&255;return t+n},Bs.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Bs.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Bs.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Bs.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Bs.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||po(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Bs.prototype.writeFloatLE=function(e,t,n){return ho(this,e,t,!0,n)},Bs.prototype.writeFloatBE=function(e,t,n){return ho(this,e,t,!1,n)},Bs.prototype.writeDoubleLE=function(e,t,n){return mo(this,e,t,!0,n)},Bs.prototype.writeDoubleBE=function(e,t,n){return mo(this,e,t,!1,n)},Bs.prototype.copy=function(e,t,n,r){if(!Bs.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var a=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),a},Bs.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Bs.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var a=e.charCodeAt(0);("utf8"===r&&a<128||"latin1"===r)&&(e=a)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var s;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(s=t;s<n;++s)this[s]=e;else{var o=Bs.isBuffer(e)?e:Bs.from(e,r),i=o.length;if(0===i)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=o[s%i]}return this};var yo=/[^+/0-9A-Za-z-_]/g;function go(e,t){var n;t=t||1/0;for(var r=e.length,a=null,s=[],o=0;o<r;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!a){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}a=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),a=n;continue}n=65536+(a-55296<<10|n-56320)}else a&&(t-=3)>-1&&s.push(239,191,189);if(a=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function bo(e){return Es(function(e){if((e=(e=e.split("=")[0]).trim().replace(yo,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function vo(e,t,n,r){for(var a=0;a<r&&!(a+n>=t.length||a>=e.length);++a)t[a+n]=e[a];return a}function wo(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function xo(e){return e!=e}var ko=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,a=0;a<16;++a)t[r+a]=e[n]+e[a];return t}(),So=Ns;const No=4;async function Eo(e,t){const n=[],r=[],a=Array.isArray(e)?e.map((e=>e.name)):Object.keys(e);for(let s=0;s<a.length;++s){const o=a[s],i=Array.isArray(e)?e[s].tensor:e[o];if("float32"!==i.dtype&&"int32"!==i.dtype&&"bool"!==i.dtype&&"string"!==i.dtype&&"complex64"!==i.dtype)throw new Error(`Unsupported dtype in weight '${o}': ${i.dtype}`);const u={name:o,shape:i.shape,dtype:i.dtype};if("string"===i.dtype){const e=new Promise((async e=>{const t=await i.bytes(),n=t.reduce(((e,t)=>e+t.length),0)+No*t.length,r=new Uint8Array(n);let a=0;for(let e=0;e<t.length;e++){const n=t[e],s=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(s,a),a+=No,r.set(n,a),a+=n.length}e(r)}));r.push(e)}else r.push(i.data());null!=t&&(u.group=t),n.push(u)}return{data:_o(await Promise.all(r)),specs:n}}function To(e,t){const n={};let r,a=0;for(const s of t){const t=s.name,o=s.dtype,i=s.shape,u=_(i);let l;if("quantization"in s){const n=s.quantization;if("uint8"===n.dtype||"uint16"===n.dtype){if(!("min"in n)||!("scale"in n))throw new Error(`Weight ${s.name} with quantization ${n.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==n.dtype)throw new Error(`Weight ${s.name} has unknown quantization dtype ${n.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==o)throw new Error(`Weight ${s.name} is quantized with ${n.dtype} which only supports weights of type float32 not ${o}.`)}const i=Ss[n.dtype],c=e.slice(a,a+u*i),p="uint8"===n.dtype?new Uint8Array(c):new Uint16Array(c);if("float32"===o)if("uint8"===n.dtype||"uint16"===n.dtype){l=new Float32Array(p.length);for(let e=0;e<p.length;e++){const t=p[e];l[e]=t*n.scale+n.min}}else{if("float16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type float32.`);void 0===r&&(r=zo()),l=r(p)}else{if("int32"!==o)throw new Error(`Unsupported dtype in weight '${t}': ${o}`);if("uint8"!==n.dtype&&"uint16"!==n.dtype)throw new Error(`Unsupported quantization type ${n.dtype} for weight type int32.`);l=new Int32Array(p.length);for(let e=0;e<p.length;e++){const t=p[e];l[e]=Math.round(t*n.scale+n.min)}}a+=u*i}else if("string"===o){const t=_(s.shape);l=[];for(let n=0;n<t;n++){const t=new Uint32Array(e.slice(a,a+No))[0];a+=No;const n=new Uint8Array(e.slice(a,a+t));l.push(n),a+=t}}else{const r=Ss[o],s=e.slice(a,a+u*r);if("float32"===o)l=new Float32Array(s);else if("int32"===o)l=new Int32Array(s);else if("bool"===o)l=new Uint8Array(s);else{if("complex64"!==o)throw new Error(`Unsupported dtype in weight '${t}': ${o}`);{l=new Float32Array(s);const e=new Float32Array(l.length/2),r=new Float32Array(l.length/2);for(let t=0;t<e.length;t++)e[t]=l[2*t],r[t]=l[2*t+1];const a=ks(e,i,"float32"),o=ks(r,i,"float32");n[t]=ws(a,o),a.dispose(),o.dispose()}}a+=u*r}"complex64"!==o&&(n[t]=ks(l,i,o))}return n}function _o(e){if(null===e)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach((e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)}));const r=new Uint8Array(t);let a=0;return n.forEach((e=>{r.set(new Uint8Array(e.buffer),a),a+=e.byteLength})),r.buffer}const Io=void 0!==So&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function Co(e){return Io?So.byteLength(e):new Blob([e]).size}function Oo(e){if(Io)return So.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function Mo(e){if(Io){const t=So.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}function Ao(e){if(1===e.length)return e[0];let t=0;e.forEach((e=>{t+=e.byteLength}));const n=new Uint8Array(t);let r=0;return e.forEach((e=>{n.set(new Uint8Array(e),r),r+=e.byteLength})),n.buffer}function Do(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);const t=e.split("/");return t[t.length-1]}function $o(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),n}function Po(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),r}async function Lo(e,t){let n,r;return null!=e.weightsManifest&&([n,r]=await t(e.weightsManifest)),Po(e,n,r)}function Ro(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:Co(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:Co(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:e.weightData.byteLength}}function Fo(e){const t=[];for(const n of e)t.push(...n.weights);return t}function zo(){const e=function(){const e=e=>{let t=e<<13,n=0;for(;0==(8388608&t);)n-=8388608,t<<=1;return t&=-8388609,n+=947912704,t|n},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}(),t=function(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}(),n=function(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}();return r=>{const a=new ArrayBuffer(4*r.length),s=new Uint32Array(a);for(let a=0;a<r.length;a++){const o=r[a],i=e[n[o>>10]+(1023&o)]+t[o>>10];s[a]=i}return new Float32Array(a)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bo{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==Bo.instance&&(Bo.instance=new Bo),Bo.instance}static registerSaveRouter(e){Bo.getInstance().saveRouters.push(e)}static registerLoadRouter(e){Bo.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return Bo.getHandlers(e,"save")}static getLoadHandlers(e,t){return Bo.getHandlers(e,"load",t)}static getHandlers(e,t,n){const r=[];return("load"===t?Bo.getInstance().loadRouters:Bo.getInstance().saveRouters).forEach((t=>{const a=t(e,n);null!==a&&r.push(a)})),r}}const Uo=e=>Bo.registerSaveRouter(e),Vo=e=>Bo.registerLoadRouter(e),jo=e=>Bo.getSaveHandlers(e),Ho=(e,t)=>Bo.getLoadHandlers(e,t),Wo="tensorflowjs",qo="models_store",Ko="model_info_store";function Go(){if(!de().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Qo(e){const t=e.result;t.createObjectStore(qo,{keyPath:"modelPath"}),t.createObjectStore(Ko,{keyPath:"modelPath"})}class Yo{constructor(e){if(this.indexedDB=Go(),null==e||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise(((e,n)=>{const r=this.indexedDB.open(Wo,1);r.onupgradeneeded=()=>Qo(r),r.onsuccess=()=>{const a=r.result;if(null==t){const t=a.transaction(qo,"readonly"),r=t.objectStore(qo).get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return a.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(a.close(),n(r.error)),t.oncomplete=()=>a.close()}else{const r=Ro(t),s=a.transaction(Ko,"readwrite");let o=s.objectStore(Ko);const i=o.put({modelPath:this.modelPath,modelArtifactsInfo:r});let u;i.onsuccess=()=>{u=a.transaction(qo,"readwrite");const i=u.objectStore(qo).put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r});i.onsuccess=()=>e({modelArtifactsInfo:r}),i.onerror=e=>{o=s.objectStore(Ko);const t=o.delete(this.modelPath);t.onsuccess=()=>(a.close(),n(i.error)),t.onerror=e=>(a.close(),n(i.error))}},i.onerror=e=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}}},r.onerror=e=>n(r.error)}))}}Yo.URL_SCHEME="indexeddb://";const Jo=e=>{return de().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Yo.URL_SCHEME)?(t=e.slice(Yo.URL_SCHEME.length),new Yo(t)):null;var t};Bo.registerSaveRouter(Jo),Bo.registerLoadRouter(Jo);class Xo{constructor(){this.indexedDB=Go()}async listModels(){return new Promise(((e,t)=>{const n=this.indexedDB.open(Wo,1);n.onupgradeneeded=()=>Qo(n),n.onsuccess=()=>{const r=n.result,a=r.transaction(Ko,"readonly"),s=a.objectStore(Ko).getAll();s.onsuccess=()=>{const t={};for(const e of s.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},s.onerror=e=>(r.close(),t(s.error)),a.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)}))}async removeModel(e){var t;return e=(t=e).startsWith(Yo.URL_SCHEME)?t.slice(Yo.URL_SCHEME.length):t,new Promise(((t,n)=>{const r=this.indexedDB.open(Wo,1);r.onupgradeneeded=()=>Qo(r),r.onsuccess=()=>{const a=r.result,s=a.transaction(Ko,"readwrite"),o=s.objectStore(Ko),i=o.get(e);let u;i.onsuccess=()=>{if(null==i.result)return a.close(),n(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const r=o.delete(e),s=()=>{u=a.transaction(qo,"readwrite");const r=u.objectStore(qo).delete(e);r.onsuccess=()=>t(i.result.modelArtifactsInfo),r.onerror=e=>n(i.error)};r.onsuccess=s,r.onerror=e=>(s(),a.close(),n(i.error))}},i.onerror=e=>(a.close(),n(i.error)),s.oncomplete=()=>{null==u?a.close():u.oncomplete=()=>a.close()}},r.onerror=e=>n(r.error)}))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zo="/",ei="tensorflowjs_models",ti="info",ni="model_topology",ri="weight_specs",ai="weight_data",si="model_metadata";function oi(e){return{info:[ei,e,ti].join(Zo),topology:[ei,e,ni].join(Zo),weightSpecs:[ei,e,ri].join(Zo),weightData:[ei,e,ai].join(Zo),modelMetadata:[ei,e,si].join(Zo)}}function ii(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function ui(e){const t=e.split(Zo);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Zo)}class li{constructor(e){if(!de().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=oi(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=Ro(e);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,Oo(e.weightData));const a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch(e){throw ii(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;const a=this.LS.getItem(this.keys.modelMetadata);if(null!=a){const e=JSON.parse(a);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}const s=this.LS.getItem(this.keys.weightData);if(null==s)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=Mo(s),t}}li.URL_SCHEME="localstorage://";const ci=e=>{return de().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(li.URL_SCHEME)?(t=e.slice(li.URL_SCHEME.length),new li(t)):null;var t};Bo.registerSaveRouter(ci),Bo.registerLoadRouter(ci);class pi{constructor(){S(de().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),S("undefined"==typeof window||void 0!==window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const e={},t=ei+Zo,n=Zo+ti;for(let r=0;r<this.LS.length;++r){const a=this.LS.key(r);if(a.startsWith(t)&&a.endsWith(n)){e[ui(a)]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){var t;const n=oi(e=(t=e).startsWith(li.URL_SCHEME)?t.slice(li.URL_SCHEME.length):t);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(n.info));return ii(n),r}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const di="://";class fi{constructor(){this.managers={}}static getInstance(){return null==fi.instance&&(fi.instance=new fi),fi.instance}static registerManager(e,t){S(null!=e,(()=>"scheme must not be undefined or null.")),e.endsWith(di)&&(e=e.slice(0,e.indexOf(di))),S(e.length>0,(()=>"scheme must not be an empty string."));const n=fi.getInstance();S(null==n.managers[e],(()=>`A model store manager is already registered for scheme '${e}'.`)),n.managers[e]=t}static getManager(e){const t=fi.getInstance().managers[e];if(null==t)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(fi.getInstance().managers)}}function hi(e){if(-1===e.indexOf(di))throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${fi.getSchemes().join(",")}`);return{scheme:e.split(di)[0],path:e.split(di)[1]}}async function mi(e,t,n=!1){S(e!==t,(()=>`Old path and new path are the same: '${e}'`));const r=Bo.getLoadHandlers(e);S(r.length>0,(()=>`Copying failed because no load handler is found for source URL ${e}.`)),S(r.length<2,(()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`));const a=r[0],s=Bo.getSaveHandlers(t);S(s.length>0,(()=>`Copying failed because no save handler is found for destination URL ${t}.`)),S(s.length<2,(()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`));const o=s[0],i=hi(e).scheme,u=hi(e).path,l=i===hi(e).scheme,c=await a.load();n&&l&&await fi.getManager(i).removeModel(u);const p=await o.save(c);return n&&!l&&await fi.getManager(i).removeModel(u),p.modelArtifactsInfo}async function yi(){const e=fi.getSchemes(),t={};for(const n of e){const e=await fi.getManager(n).listModels();for(const r in e){t[n+di+r]=e[r]}}return t}async function gi(e){const t=hi(e);return fi.getManager(t.scheme).removeModel(t.path)}async function bi(e,t){return mi(e,t,!1)}async function vi(e,t){return mi(e,t,!0)}class wi{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){window&&de().getBool("USE_SETTIMEOUTCUSTOM")?(this.functionRefs.push(e),setTimeout((()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")}),t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",(e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();(0,this.functionRefs[e.data.index])(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}}),!0))):setTimeout(e,t)}}if(de().get("IS_BROWSER")){de().setPlatform("browser",new wi);try{fi.registerManager(li.URL_SCHEME,new pi)}catch(e){}try{fi.registerManager(Yo.URL_SCHEME,new Xo)}catch(e){}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xi=()=>o("kjyEk");let ki;
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Si(e,t="float32",n){return t=t||"float32",se(e),new za(e,t,n)}
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */de().get("IS_NODE")&&!de().get("IS_BROWSER")&&de().setPlatform("node",new class{constructor(){this.util=o("kjyEk"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return null!=de().global.fetch?de().global.fetch(e,t):(null==ki&&(ki=xi()),ki(e,t))}now(){const e=ye.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}});const Ni=vs({cast_:function(e,t){const n=ys(e,"x","cast");if(!V(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==n.dtype||"string"!==t&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");const r={x:n},a={dtype:t};return cs.runKernel(Xe,r,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ei=vs({clone_:function(e){const t={x:ys(e,"x","clone","string_or_numeric")};return cs.runKernel(zt,t)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ti(e,t=!1){console.log(e.toString(t))}ls();Ua={buffer:Si,cast:Ni,clone:Ei,print:Ti};const _i=vs({add_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=ys(e,"a","add"),r=ys(t,"b","add");[n,r]=rs(n,r);const a={a:n,b:r};return cs.runKernel(Pe,a)}});var Ii={};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ci(e,t,n){if(E(e),null!=t&&3!==t.length)throw new Error("tensor3d() requires shape to have three numbers");const r=fs(e,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return xs(e,t,r,n)}let Oi;function Mi(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==e)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,a=!1,s=!1,o=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&e instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)a=!0;else if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)s=!0;else if(null!=e.getContext)o=!0;else{if(!("undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap))throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);i=!0}if(null!=Or(kr,cs.backendName)){const n={pixels:e},r={numChannels:t};return cs.runKernel(kr,n,r)}const[u,l]=a?[e.videoWidth,e.videoHeight]:[e.width,e.height];let c,p;if(o)c=e.getContext("2d").getImageData(0,0,u,l).data;else if(r||n)c=e.data;else if(s||a||i){if(null==Oi)if("undefined"==typeof document){if("undefined"==typeof OffscreenCanvas||"undefined"==typeof OffscreenCanvasRenderingContext2D)throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");Oi=new OffscreenCanvas(1,1).getContext("2d")}else Oi=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Oi.canvas.width=u,Oi.canvas.height=l,Oi.drawImage(e,0,0,u,l),c=Oi.getImageData(0,0,u,l).data}if(4===t)p=new Int32Array(c);else{const e=u*l;p=new Int32Array(e*t);for(let n=0;n<e;n++)for(let e=0;e<t;++e)p[n*t+e]=c[4*n+e]}return Ci(p,[l,u,t],"int32")}function Ai(e){return"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(e instanceof ImageBitmap)&&function(e){return null!=e&&0!==e.width&&0!==e.height}(e)&&!function(e){return null!=e&&e.data instanceof Uint8Array}(e)}async function Di(e,t=3){let n=null;if(de().getBool("WRAP_TO_IMAGEBITMAP")&&Ai(e)){let t;try{t=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch(e){t=null}n=null!=t&&t.width===e.width&&t.height===e.height?t:e}else n=e;return Mi(n,t)}async function $i(e,t){let n=ys(e,"img","toPixels");if(!(e instanceof ja)){const e=n;n=Ni(e,"int32"),e.dispose()}if(2!==n.rank&&3!==n.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const[r,a]=n.shape.slice(0,2),s=2===n.rank?1:n.shape[2];if(s>4||2===s)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${s}`);if("float32"!==n.dtype&&"int32"!==n.dtype)throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);const o=await n.data(),i="float32"===n.dtype?255:1,u=new Uint8ClampedArray(a*r*4);for(let e=0;e<r*a;++e){const t=[0,0,0,255];for(let r=0;r<s;r++){const a=o[e*s+r];if("float32"===n.dtype){if(a<0||a>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${a}.`)}else if("int32"===n.dtype&&(a<0||a>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${a}.`);1===s?(t[0]=a*i,t[1]=a*i,t[2]=a*i):t[r]=a*i}const r=4*e;u[r+0]=Math.round(t[0]),u[r+1]=Math.round(t[1]),u[r+2]=Math.round(t[2]),u[r+3]=Math.round(t[3])}if(null!=t){t.width=a,t.height=r;const e=t.getContext("2d"),n=new ImageData(u,a,r);e.putImageData(n,0,0)}return n!==e&&n.dispose(),u}e(Ii,"fromPixelsAsync",(()=>Di)),e(Ii,"toPixels",(()=>$i)),e(Ii,"fromPixels",(()=>Pi));const Pi=vs({fromPixels_:Mi});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Li=vs({concat_:function(e,t=0){S(e.length>=1,(()=>"Pass at least one tensor to concat"));const n=gs(e,"tensors","concat","string_or_numeric");if("complex64"===n[0].dtype&&n.forEach((e=>{if("complex64"!==e.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${e.dtype}. `)})),1===n.length)return Ei(n[0]);const r=n,a={axis:t};return cs.runKernel(rt,r,a)}});const Ri=vs({concat2d_:function(e,t){return Li(e,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fi=vs({floorDiv_:function(e,t){let n=ys(e,"a","floorDiv"),r=ys(t,"b","floorDiv");[n,r]=rs(n,r);const a={a:n,b:r};return cs.runKernel(Dt,a)}});const zi=vs({div_:function(e,t){let n=ys(e,"a","div"),r=ys(t,"b","div");if([n,r]=rs(n,r),"int32"===n.dtype&&"int32"===r.dtype)return Fi(n,r);const a={a:n,b:r};return cs.runKernel(xt,a,{})}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bi=vs({expandDims_:function(e,t=0){const n=ys(e,"x","expandDims","string_or_numeric");S(t<=n.rank,(()=>"Axis must be <= rank of the tensor"));const r={input:n},a={dim:t};return cs.runKernel(_t,r,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ui(e,t){return cs.tidy(e,t)}function Vi(e){return cs.keep(e)}function ji(){return cs.backendName}Va=function(e){de().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")};var Hi={};e(Hi,"spectral",(()=>ff)),e(Hi,"signal",(()=>hf)),e(Hi,"image",(()=>mf)),e(Hi,"linalg",(()=>yf)),e(Hi,"losses",(()=>gf)),e(Hi,"sparse",(()=>bf)),e(Hi,"string",(()=>vf)),e(Hi,"abs",(()=>Wi)),e(Hi,"acos",(()=>qi)),e(Hi,"acosh",(()=>Ki)),e(Hi,"add",(()=>_i)),e(Hi,"addN",(()=>Gi)),e(Hi,"all",(()=>Qi)),e(Hi,"any",(()=>Yi)),e(Hi,"argMax",(()=>Ji)),e(Hi,"argMin",(()=>Xi)),e(Hi,"asin",(()=>Zi)),e(Hi,"asinh",(()=>eu)),e(Hi,"atan",(()=>tu)),e(Hi,"atan2",(()=>nu)),e(Hi,"atanh",(()=>ru)),e(Hi,"avgPool",(()=>fu)),e(Hi,"avgPool3d",(()=>hu)),e(Hi,"basicLSTMCell",(()=>wu)),e(Hi,"batchToSpaceND",(()=>xu)),e(Hi,"batchNorm",(()=>Su)),e(Hi,"batchNorm2d",(()=>Nu)),e(Hi,"batchNorm3d",(()=>Eu)),e(Hi,"batchNorm4d",(()=>Tu)),e(Hi,"bincount",(()=>_u)),e(Hi,"broadcastArgs",(()=>Iu)),e(Hi,"broadcastTo",(()=>Cu)),e(Hi,"buffer",(()=>Si)),e(Hi,"cast",(()=>Ni)),e(Hi,"ceil",(()=>Ou)),e(Hi,"clipByValue",(()=>Au)),e(Hi,"clone",(()=>Ei)),e(Hi,"complex",(()=>ws)),e(Hi,"concat",(()=>Li)),e(Hi,"concat1d",(()=>Du)),e(Hi,"concat2d",(()=>Ri)),e(Hi,"concat3d",(()=>$u)),e(Hi,"concat4d",(()=>Pu)),e(Hi,"conv1d",(()=>Ru)),e(Hi,"conv2d",(()=>Lu)),e(Hi,"conv2dTranspose",(()=>zu)),e(Hi,"conv3d",(()=>Bu)),e(Hi,"conv3dTranspose",(()=>Vu)),e(Hi,"cos",(()=>ju)),e(Hi,"cosh",(()=>Hu)),e(Hi,"cumprod",(()=>Wu)),e(Hi,"cumsum",(()=>qu)),e(Hi,"denseBincount",(()=>Ku)),e(Hi,"depthToSpace",(()=>Gu)),e(Hi,"depthwiseConv2d",(()=>Qu)),e(Hi,"diag",(()=>Yu)),e(Hi,"dilation2d",(()=>Ju)),e(Hi,"div",(()=>zi)),e(Hi,"divNoNan",(()=>nl)),e(Hi,"dot",(()=>rl)),e(Hi,"einsum",(()=>al)),e(Hi,"elu",(()=>sl)),e(Hi,"equal",(()=>Zu)),e(Hi,"erf",(()=>ol)),e(Hi,"euclideanNorm",(()=>bl)),e(Hi,"exp",(()=>vl)),e(Hi,"expandDims",(()=>Bi)),e(Hi,"expm1",(()=>wl)),e(Hi,"eye",(()=>kl)),e(Hi,"fill",(()=>Mu)),e(Hi,"floor",(()=>Sl)),e(Hi,"floorDiv",(()=>Fi)),e(Hi,"gather",(()=>Nl)),e(Hi,"greater",(()=>El)),e(Hi,"greaterEqual",(()=>Tl)),e(Hi,"imag",(()=>_l)),e(Hi,"isFinite",(()=>Il)),e(Hi,"isInf",(()=>Cl)),e(Hi,"isNaN",(()=>Ol)),e(Hi,"leakyRelu",(()=>Ml)),e(Hi,"less",(()=>Al)),e(Hi,"lessEqual",(()=>Dl)),e(Hi,"linspace",(()=>$l)),e(Hi,"localResponseNormalization",(()=>Pl)),e(Hi,"log",(()=>Ll)),e(Hi,"log1p",(()=>Rl)),e(Hi,"logSigmoid",(()=>Ul)),e(Hi,"logSoftmax",(()=>jl)),e(Hi,"logSumExp",(()=>Hl)),e(Hi,"logicalAnd",(()=>Wl)),e(Hi,"logicalNot",(()=>ql)),e(Hi,"logicalOr",(()=>Kl)),e(Hi,"logicalXor",(()=>Gl)),e(Hi,"lowerBound",(()=>Xl)),e(Hi,"matMul",(()=>mu)),e(Hi,"max",(()=>ll)),e(Hi,"maxPool",(()=>Zl)),e(Hi,"maxPool3d",(()=>ec)),e(Hi,"maxPoolWithArgmax",(()=>tc)),e(Hi,"maximum",(()=>nc)),e(Hi,"mean",(()=>rc)),e(Hi,"meshgrid",(()=>oc)),e(Hi,"min",(()=>cl)),e(Hi,"minimum",(()=>ic)),e(Hi,"mirrorPad",(()=>uc)),e(Hi,"mod",(()=>lc)),e(Hi,"moments",(()=>cc)),e(Hi,"mul",(()=>yu)),e(Hi,"multiRNNCell",(()=>pc)),e(Hi,"multinomial",(()=>dc)),e(Hi,"neg",(()=>zl)),e(Hi,"notEqual",(()=>fc)),e(Hi,"oneHot",(()=>hc)),e(Hi,"ones",(()=>sc)),e(Hi,"onesLike",(()=>mc)),e(Hi,"outerProduct",(()=>yc)),e(Hi,"pad",(()=>gc)),e(Hi,"pad1d",(()=>bc)),e(Hi,"pad2d",(()=>vc)),e(Hi,"pad3d",(()=>wc)),e(Hi,"pad4d",(()=>xc)),e(Hi,"pool",(()=>Sc)),e(Hi,"pow",(()=>pl)),e(Hi,"prelu",(()=>Nc)),e(Hi,"print",(()=>Ti)),e(Hi,"prod",(()=>Ec)),e(Hi,"raggedGather",(()=>Tc)),e(Hi,"raggedTensorToTensor",(()=>_c)),e(Hi,"rand",(()=>Ic)),e(Hi,"randomGamma",(()=>Bc)),e(Hi,"randomNormal",(()=>Uc)),e(Hi,"randomStandardNormal",(()=>Vc)),e(Hi,"randomUniform",(()=>jc)),e(Hi,"range",(()=>Hc)),e(Hi,"real",(()=>Wc)),e(Hi,"reciprocal",(()=>qc)),e(Hi,"relu",(()=>Kc)),e(Hi,"relu6",(()=>Gc)),e(Hi,"reshape",(()=>du)),e(Hi,"reverse",(()=>Qc)),e(Hi,"reverse1d",(()=>Yc)),e(Hi,"reverse2d",(()=>Jc)),e(Hi,"reverse3d",(()=>Xc)),e(Hi,"reverse4d",(()=>Zc)),e(Hi,"round",(()=>ep)),e(Hi,"rsqrt",(()=>tp)),e(Hi,"scalar",(()=>dl)),e(Hi,"selu",(()=>np)),e(Hi,"separableConv2d",(()=>rp)),e(Hi,"setdiff1dAsync",(()=>ap)),e(Hi,"sigmoid",(()=>gu)),e(Hi,"sign",(()=>sp)),e(Hi,"sin",(()=>op)),e(Hi,"sinh",(()=>ip)),e(Hi,"slice",(()=>bu)),e(Hi,"slice1d",(()=>up)),e(Hi,"slice2d",(()=>lp)),e(Hi,"slice3d",(()=>cp)),e(Hi,"slice4d",(()=>pp)),e(Hi,"softmax",(()=>dp)),e(Hi,"softplus",(()=>Bl)),e(Hi,"spaceToBatchND",(()=>kc)),e(Hi,"fft",(()=>fp)),e(Hi,"ifft",(()=>hp)),e(Hi,"irfft",(()=>mp)),e(Hi,"rfft",(()=>gp)),e(Hi,"split",(()=>yp)),e(Hi,"sqrt",(()=>fl)),e(Hi,"square",(()=>hl)),e(Hi,"squaredDifference",(()=>bp)),e(Hi,"squeeze",(()=>vp)),e(Hi,"stack",(()=>wp)),e(Hi,"step",(()=>xp)),e(Hi,"stridedSlice",(()=>kp)),e(Hi,"sub",(()=>Vl)),e(Hi,"sum",(()=>ml)),e(Hi,"tan",(()=>Sp)),e(Hi,"tanh",(()=>vu)),e(Hi,"tensor",(()=>ks)),e(Hi,"tensor1d",(()=>Np)),e(Hi,"tensor2d",(()=>Ep)),e(Hi,"tensor3d",(()=>Ci)),e(Hi,"tensor4d",(()=>Tp)),e(Hi,"tensor5d",(()=>_p)),e(Hi,"tensor6d",(()=>Ip)),e(Hi,"tile",(()=>xl)),e(Hi,"topk",(()=>Cp)),e(Hi,"truncatedNormal",(()=>Op)),e(Hi,"unique",(()=>Mp)),e(Hi,"unsortedSegmentSum",(()=>Ap)),e(Hi,"unstack",(()=>Dp)),e(Hi,"upperBound",(()=>$p)),e(Hi,"variable",(()=>Pp)),e(Hi,"where",(()=>el)),e(Hi,"whereAsync",(()=>Rp)),e(Hi,"zeros",(()=>ac)),e(Hi,"zerosLike",(()=>tl)),e(Hi,"op",(()=>vs)),e(Hi,"OP_SCOPE_SUFFIX",(()=>bs)),e(Hi,"fused",(()=>sd));const Wi=vs({abs_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t=ys(e,"x","abs");if("complex64"===t.dtype){const e={x:t};return cs.runKernel(nt,e)}{const e={x:t};return cs.runKernel(Ae,e)}}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qi=vs({acos_:function(e){const t={x:ys(e,"x","acos")};return cs.runKernel(De,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ki=vs({acosh_:function(e){const t={x:ys(e,"x","acosh")};return cs.runKernel($e,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gi=vs({addN_:function(e){S(Array.isArray(e),(()=>"The argument passed to tf.addN() must be a list of tensors")),S(e.length>=1,(()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`));const t=e.map(((e,t)=>ys(e,`tensors${t}`,"addN"))),n=t[0];t.forEach((e=>{if(e.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),t.forEach((e=>{if(!C(e.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));const r=t;return cs.runKernel(Le,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qi=vs({all_:function(e,t=null,n=!1){const r={x:ys(e,"x","all","bool")},a={axis:t,keepDims:n};return cs.runKernel(Re,r,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yi=vs({any_:function(e,t=null,n=!1){const r={x:ys(e,"x","any","bool")},a={axis:t,keepDims:n};return cs.runKernel(Fe,r,a)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ji=vs({argMax_:function(e,t=0){const n={x:ys(e,"x","argMax")},r={axis:t};return cs.runKernel(ze,n,r)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xi=vs({argMin_:function(e,t=0){const n={x:ys(e,"x","argMin")},r={axis:t};return cs.runKernel(Be,n,r)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zi=vs({asin_:function(e){const t={x:ys(e,"x","asin")};return cs.runKernel(Ue,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eu=vs({asinh_:function(e){const t={x:ys(e,"x","asinh")};return cs.runKernel(Ve,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tu=vs({atan_:function(e){const t={x:ys(e,"x","atan")};return cs.runKernel(je,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nu=vs({atan2_:function(e,t){let n=ys(e,"a","atan2"),r=ys(t,"b","atan2");[n,r]=rs(n,r);const a={a:n,b:r};return cs.runKernel(We,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ru=vs({atanh_:function(e){const t={x:ys(e,"x","atanh")};return cs.runKernel(He,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function au(e,t,n,r,a,s,o=!1,i="channelsLast"){let[u,l,c,p]=[-1,-1,-1,-1];if("channelsLast"===i)[u,l,c,p]=e;else{if("channelsFirst"!==i)throw new Error(`Unknown dataFormat ${i}`);[u,p,l,c]=e}const[d,f,,h]=t,[m,y]=ou(n),[g,b]=ou(r),v=iu(d,g),w=iu(f,b),{padInfo:x,outHeight:k,outWidth:S}=function(e,t,n,r,a,s,o,i,u){let l,c,p;if("number"==typeof e){l={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};const a=function(e,t,n,r,a){null==r&&(r=su(e,t,n));const s=e[0],o=e[1],i=uu((s-t+2*r)/n+1,a),u=uu((o-t+2*r)/n+1,a);return[i,u]}([t,n],s,r,e,i);c=a[0],p=a[1]}else if("same"===e){c=Math.ceil(t/r),p=Math.ceil(n/a);const e=Math.max(0,(c-1)*r+s-t),i=Math.max(0,(p-1)*a+o-n),u=Math.floor(e/2),d=e-u,f=Math.floor(i/2);l={top:u,bottom:d,left:f,right:i-f,type:"SAME"}}else if("valid"===e)l={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-s+1)/r),p=Math.ceil((n-o+1)/a);else{if("object"!=typeof e)throw Error(`Unknown padding parameter: ${e}`);{const d="channelsLast"===u?e[1][0]:e[2][0],f="channelsLast"===u?e[1][1]:e[2][1],h="channelsLast"===u?e[2][0]:e[3][0],m="channelsLast"===u?e[2][1]:e[3][1];l={top:d,bottom:f,left:h,right:m,type:0===d&&0===f&&0===h&&0===m?"VALID":"EXPLICIT"},c=uu((t-s+d+f)/r+1,i),p=uu((n-o+h+m)/a+1,i)}}return{padInfo:l,outHeight:c,outWidth:p}}(a,l,c,m,y,v,w,s,i),N=o?h*p:h;let E;return"channelsFirst"===i?E=[u,N,k,S]:"channelsLast"===i&&(E=[u,k,S,N]),{batchSize:u,dataFormat:i,inHeight:l,inWidth:c,inChannels:p,outHeight:k,outWidth:S,outChannels:N,padInfo:x,strideHeight:m,strideWidth:y,filterHeight:d,filterWidth:f,effectiveFilterHeight:v,effectiveFilterWidth:w,dilationHeight:g,dilationWidth:b,inShape:e,outShape:E,filterShape:t}}function su(e,t,n,r=1){const a=iu(t,r);return Math.floor((e[0]*(n-1)-n+a)/2)}function ou(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function iu(e,t){return t<=1?e:e+(e-1)*(t-1)}function uu(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function lu(e){const[t,n,r]=ou(e);return 1===t&&1===n&&1===r}function cu(e,t){return lu(e)||lu(t)}function pu(e,t,n){if(null!=n){if("string"==typeof t)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if("number"==typeof t)S(O(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`));else{if("object"!=typeof t)throw Error(`Error in ${e}: Unknown padding parameter: ${t}`);t.forEach((t=>{t.forEach((t=>{S(O(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`))}))}))}}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const du=vs({reshape_:function(e,t){const n={x:ys(e,"x","reshape","string_or_numeric")},r={shape:t};return cs.runKernel(An,n,r)}});const fu=vs({avgPool_:function(e,t,n,r,a){const s=ys(e,"x","avgPool","float32");S(cu(n,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`));let o=s,i=!1;3===s.rank&&(i=!0,o=du(s,[1,s.shape[0],s.shape[1],s.shape[2]])),S(4===o.rank,(()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`)),pu("avgPool",r,a);const u={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:a};let c=cs.runKernel(qe,u,l);return c=Ni(c,s.dtype),i?du(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hu=vs({avgPool3d_:function(e,t,n,r,a,s="NDHWC"){const o=ys(e,"x","avgPool3d","float32");let i=o,u=!1;4===o.rank&&(u=!0,i=du(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),S(5===i.rank,(()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`)),S("NDHWC"===s,(()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`)),pu("avgPool3d",r,a);const l={x:i},c={filterSize:t,strides:n,pad:r,dimRoundingMode:a,dataFormat:s};let p=cs.runKernel(Ke,l,c);return p=Ni(p,i.dtype),u?du(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mu=vs({matMul_:function(e,t,n=!1,r=!1){let a=ys(e,"a","matMul"),s=ys(t,"b","matMul");[a,s]=rs(a,s);const o={a:a,b:s},i={transposeA:n,transposeB:r};return cs.runKernel(Ge,o,i)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yu=vs({mul_:function(e,t){let n=ys(e,"a","mul"),r=ys(t,"b","mul");[n,r]=rs(n,r);const a={a:n,b:r};return cs.runKernel(fn,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gu=vs({sigmoid_:function(e){const t={x:ys(e,"x","sigmoid","float32")};return cs.runKernel(Kn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bu=vs({slice_:function(e,t,n){const r=ys(e,"x","slice","string_or_numeric");if(0===r.rank)throw new Error("Slicing scalar is not possible");const a={x:r},s={begin:t,size:n};return cs.runKernel(jn,a,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vu=vs({tanh_:function(e){const t={x:ys(e,"x","tanh","float32")};return cs.runKernel(dr,t)}});const wu=vs({basicLSTMCell_:function(e,t,n,r,a,s){const o=ys(e,"forgetBias","basicLSTMCell"),i=ys(t,"lstmKernel","basicLSTMCell"),u=ys(n,"lstmBias","basicLSTMCell"),l=ys(r,"data","basicLSTMCell"),c=ys(a,"c","basicLSTMCell"),p=ys(s,"h","basicLSTMCell"),d=Li([l,p],1),f=mu(d,i),h=_i(f,u),m=h.shape[0],y=h.shape[1]/4,g=[m,y],b=bu(h,[0,0],g),v=bu(h,[0,y],g),w=bu(h,[0,2*y],g),x=bu(h,[0,3*y],g),k=_i(yu(gu(b),vu(v)),yu(c,gu(_i(o,w))));return[k,yu(vu(k),gu(x))]}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xu=vs({batchToSpaceND_:function(e,t,n){const r=ys(e,"x","batchToSpaceND"),a=t.reduce(((e,t)=>e*t));S(r.rank>=1+t.length,(()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`)),S(n.length===t.length,(()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`)),S(r.shape[0]%a==0,(()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${a}`));const s={x:r},o={blockShape:t,crops:n};return cs.runKernel(Qe,s,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ku(e){let t;return t=0===e.rank||1===e.rank?du(e,[1,1,1,e.size]):2===e.rank?du(e,[1,1,e.shape[0],e.shape[1]]):3===e.rank?du(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}const Su=vs({batchNorm_:function(e,t,n,r,a,s){null==s&&(s=.001);const o=ys(e,"x","batchNorm"),i=ys(t,"mean","batchNorm"),u=ys(n,"variance","batchNorm");let l,c;null!=a&&(l=ys(a,"scale","batchNorm")),null!=r&&(c=ys(r,"offset","batchNorm")),S(i.rank===u.rank,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),S(null==c||i.rank===c.rank,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),S(null==l||i.rank===l.rank,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));const p={x:ku(o),scale:l,offset:c,mean:i,variance:u},d={varianceEpsilon:s},f=cs.runKernel($t,p,d);return du(f,o.shape)}});const Nu=vs({batchNorm2d_:function(e,t,n,r,a,s){const o=ys(e,"x","batchNorm"),i=ys(t,"mean","batchNorm"),u=ys(n,"variance","batchNorm");let l,c;return null!=a&&(l=ys(a,"scale","batchNorm")),null!=r&&(c=ys(r,"offset","batchNorm")),S(2===o.rank,(()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`)),S(2===i.rank||1===i.rank,(()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`)),S(2===u.rank||1===u.rank,(()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`)),null!=l&&S(2===l.rank||1===l.rank,(()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`)),null!=c&&S(2===c.rank||1===c.rank,(()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`)),Su(o,i,u,c,l,s)}});const Eu=vs({batchNorm3d_:function(e,t,n,r,a,s){const o=ys(e,"x","batchNorm"),i=ys(t,"mean","batchNorm"),u=ys(n,"variance","batchNorm");let l,c;return null!=a&&(l=ys(a,"scale","batchNorm")),null!=r&&(c=ys(r,"offset","batchNorm")),S(3===o.rank,(()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`)),S(3===i.rank||1===i.rank,(()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`)),S(3===u.rank||1===u.rank,(()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`)),null!=l&&S(3===l.rank||1===l.rank,(()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`)),null!=c&&S(3===c.rank||1===c.rank,(()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`)),Su(o,i,u,c,l,s)}});const Tu=vs({batchNorm4d_:function(e,t,n,r,a,s){const o=ys(e,"x","batchNorm"),i=ys(t,"mean","batchNorm"),u=ys(n,"variance","batchNorm");let l,c;return null!=a&&(l=ys(a,"scale","batchNorm")),null!=r&&(c=ys(r,"offset","batchNorm")),S(4===o.rank,(()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`)),S(4===i.rank||1===i.rank,(()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`)),S(4===u.rank||1===u.rank,(()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`)),null!=l&&S(4===l.rank||1===l.rank,(()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`)),null!=c&&S(4===c.rank||1===c.rank,(()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`)),Su(o,i,u,c,l,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _u=vs({bincount_:function(e,t,n){const r=ys(e,"x","bincount"),a=ys(t,"weights","bincount");S("int32"===r.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`)),S(n>=0,(()=>`size must be non-negative, but got ${n}.`)),S(a.size===r.size||0===a.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${a.shape}.`));const s={x:r,weights:a},o={size:n};return cs.runKernel(Ye,s,o)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Iu=vs({broadcastArgs_:function(e,t){const n=ys(e,"s0","broadcastArgs","int32"),r=ys(t,"s1","broadcastArgs","int32");if(1!==n.rank)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(1!==r.rank)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const a={s0:n,s1:r};return cs.runKernel(Je,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cu=vs({broadcastTo_:function(e,t){let n=ys(e,"broadcastTo","x");const r=n.shape;if(t.some((e=>!(e>0)||e%1!=0)))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=du(n,e)}const a=n.shape,s=Array.from(t);for(let e=t.length-1;e>=0;e--)if(a[e]===t[e])s[e]=1;else if(1!==n.shape[e])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(0===s.map(((e,t)=>e>1?t:-1)).filter((e=>e>=0)).length)return Ei(n);const o={x:n},i={reps:s};return cs.runKernel(fr,o,i)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ou=vs({ceil_:function(e){const t={x:ys(e,"x","ceil","float32")};return cs.runKernel(Ze,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mu(e,t,n){const r={shape:e,value:t,dtype:n};return cs.runKernel(Ot,{},r)}const Au=vs({clipByValue_:function(e,t,n){const r=ys(e,"x","clipByValue");if(S(t<=n,(()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`)),t===n)return Mu(r.shape,t,r.dtype);const a={x:r},s={clipValueMin:t,clipValueMax:n};return cs.runKernel(et,a,s)}});const Du=vs({concat1d_:function(e){return Li(e,0)}});const $u=vs({concat3d_:function(e,t){return Li(e,t)}});const Pu=vs({concat4d_:function(e,t){return Li(e,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lu=vs({conv2d_:function(e,t,n,r,a="NHWC",s=[1,1],o){const i=ys(e,"x","conv2d","float32"),u=ys(t,"filter","conv2d","float32");let l=i,c=!1;3===i.rank&&(c=!0,l=du(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(4===l.rank,(()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`)),S(4===u.rank,(()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`)),pu("conv2d",r,o);const p="NHWC"===a?l.shape[3]:l.shape[1];S(p===u.shape[2],(()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`)),S(cu(n,s),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`));const d={x:l,filter:u},f={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o},h=cs.runKernel(at,d,f);return c?du(h,[h.shape[1],h.shape[2],h.shape[3]]):h}});const Ru=vs({conv1d_:function(e,t,n,r,a="NWC",s=1,o){const i=ys(e,"x","conv1d"),u=ys(t,"filter","conv1d");let l=i,c=!1;2===i.rank&&(c=!0,l=du(i,[1,i.shape[0],i.shape[1]])),S(3===l.rank,(()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`)),S(3===u.rank,(()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`)),pu("conv1d",r,o),S(l.shape[2]===u.shape[1],(()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${u.shape[1]}.`)),S(cu(n,s),(()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${s}'`)),S("NWC"===a,(()=>`Error in conv1d: got dataFormat of ${a} but only NWC is currently supported.`));const p=du(u,[1,u.shape[0],u.shape[1],u.shape[2]]),d=du(l,[l.shape[0],1,l.shape[1],l.shape[2]]),f=Lu(d,p,[1,n],r,"NHWC",[1,s],o);return du(f,c?[f.shape[2],f.shape[3]]:[f.shape[0],f.shape[2],f.shape[3]])}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fu=vs({conv2DBackpropInput_:function(e,t,n,r,a,s="NHWC",o){S(e.length===t.rank,(()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`));let i=e,u=t,l=!1;3===t.rank&&(l=!0,u=du(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),S(4===i.length,(()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`)),S(4===u.rank,(()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`)),S(4===n.rank,(()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`));const c="NHWC"===s?i[3]:i[1],p="NHWC"===s?u.shape[3]:u.shape[1];S(c===n.shape[2],(()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[2]}.`)),S(p===n.shape[3],(()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${n.shape[3]}.`)),pu("conv2dDerInput",a,o);const d={dy:u,filter:n},f={strides:r,pad:a,dataFormat:s,dimRoundingMode:o,inputShape:i},h=cs.runKernel(ot,d,f);return l?du(h,[h.shape[1],h.shape[2],h.shape[3]]):h}});const zu=vs({conv2dTranspose_:function(e,t,n,r,a,s){const o=ys(e,"x","conv2dTranspose"),i=ys(t,"filter","conv2dTranspose");return Fu(n,o,i,r,a,"NHWC",s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bu=vs({conv3d_:function(e,t,n,r,a="NDHWC",s=[1,1,1]){const o=ys(e,"x","conv3d"),i=ys(t,"filter","conv3d");let u=o,l=!1;4===o.rank&&(l=!0,u=du(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),S(5===u.rank,(()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`)),S(5===i.rank,(()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`)),S(u.shape[4]===i.shape[3],(()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`)),S(cu(n,s),(()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`)),S("NDHWC"===a,(()=>`Error in conv3d: got dataFormat of ${a} but only NDHWC is currently supported.`));const c={x:u,filter:i},p={strides:n,pad:r,dataFormat:a,dilations:s},d=cs.runKernel(it,c,p);return l?du(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uu=vs({conv3DBackpropInput_:function(e,t,n,r,a){S(e.length===t.rank,(()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`));let s=e,o=t,i=!1;4===t.rank&&(i=!0,o=du(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),s=[1,e[0],e[1],e[2],e[3]]);const u=s[4],l=o.shape[4];S(5===s.length,(()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`)),S(5===o.rank,(()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`)),S(5===n.rank,(()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`)),S(u===n.shape[3],(()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`)),S(l===n.shape[4],(()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`));const c={dy:o,filter:n},p={pad:a,strides:r,inputShape:s},d=cs.runKernel(ut,c,p);return i?du(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}});const Vu=vs({conv3dTranspose_:function(e,t,n,r,a){const s=ys(e,"x","conv3dTranspose"),o=ys(t,"filter","conv3dTranspose");return Uu(n,s,o,r,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ju=vs({cos_:function(e){const t={x:ys(e,"x","cos","float32")};return cs.runKernel(lt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hu=vs({cosh_:function(e){const t={x:ys(e,"x","cosh","float32")};return cs.runKernel(ct,t)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wu=vs({cumprod_:function(e,t=0,n=!1,r=!1){const a={x:ys(e,"x","cumprod")},s={axis:t,exclusive:n,reverse:r};return cs.runKernel(pt,a,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qu=vs({cumsum_:function(e,t=0,n=!1,r=!1){const a={x:ys(e,"x","cumsum")},s={axis:t,exclusive:n,reverse:r};return cs.runKernel(dt,a,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ku=vs({denseBincount_:function(e,t,n,r=!1){const a=ys(e,"x","denseBincount"),s=ys(t,"weights","denseBincount");S("int32"===a.dtype,(()=>`Error in denseBincount: input dtype must be int32, but got ${a.dtype}`)),S(a.rank<=2,(()=>`Error in denseBincount: input must be at most rank 2, but got rank ${a.rank}.`)),S(n>=0,(()=>`size must be non-negative, but got ${n}.`)),S(s.size===a.size||0===s.size,(()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${a.shape}, weights shape: ${s.shape}.`));const o={x:a,weights:s},i={size:n,binaryOutput:r};return cs.runKernel(ht,o,i)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gu=vs({depthToSpace_:function(e,t,n="NHWC"){const r=ys(e,"x","depthToSpace","float32"),a="NHWC"===n?r.shape[1]:r.shape[2],s="NHWC"===n?r.shape[2]:r.shape[3],o="NHWC"===n?r.shape[3]:r.shape[1];S(t>1,(()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`)),S(a*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${a} and ${t}  for depthToSpace with input shape\n    ${r.shape}`)),S(s*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${s} and ${t} for depthToSpace with input shape\n        ${r.shape}`)),S(o%(t*t)==0,(()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`));const i={x:r},u={blockSize:t,dataFormat:n};return cs.runKernel(mt,i,u)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qu=vs({depthwiseConv2d_:function(e,t,n,r,a="NHWC",s=[1,1],o){const i=ys(e,"x","depthwiseConv2d","float32"),u=ys(t,"filter","depthwiseConv2d","float32");let l=i,c=!1;3===i.rank&&(c=!0,l=du(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(4===l.rank,(()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`)),S(4===u.rank,(()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`));const p="NHWC"===a?l.shape[3]:l.shape[1];S(p===u.shape[2],(()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`)),pu("depthwiseConv2d",r,o);const d={x:l,filter:u},f={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o},h=cs.runKernel(yt,d,f);return c?du(h,[h.shape[1],h.shape[2],h.shape[3]]):h}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yu=vs({diag_:function(e){const t={x:ys(e,"x","diag")};return cs.runKernel(vt,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ju=vs({dilation2d_:function(e,t,n,r,a=[1,1],s="NHWC"){const o=ys(e,"x","dilation2d"),i=ys(t,"filter","dilation2d");S(3===o.rank||4===o.rank,(()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`)),S(3===i.rank,(()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`)),S("NHWC"===s,(()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`));let u=o,l=!1;3===o.rank&&(u=du(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0);const c={x:u,filter:i},p={strides:n,pad:r,dilations:a},d=cs.runKernel(wt,c,p);return l?du(d,[d.shape[1],d.shape[2],d.shape[3]]):d}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xu(e,t){const n=[],r=Math.max(e.length,t.length);for(let a=0;a<r;a++){let r=e[e.length-a-1];null==r&&(r=1);let s=t[t.length-a-1];if(null==s&&(s=1),1===r)n.unshift(s);else if(1===s)n.unshift(r);else{if(r!==s){throw Error(`Operands could not be broadcast together with shapes ${e} and ${t}.`)}n.unshift(r)}}return n}const Zu=vs({equal_:function(e,t){let n=ys(e,"a","equal","string_or_numeric"),r=ys(t,"b","equal","string_or_numeric");[n,r]=rs(n,r),Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(Et,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const el=vs({where_:function(e,t,n){const r=ys(t,"a","where"),a=ys(n,"b","where"),s=ys(e,"condition","where","bool"),o=Xu(Xu(s.shape,r.shape),a.shape),i={condition:Cu(s,o),t:Cu(r,o),e:Cu(a,o)};return cs.runKernel(Un,i)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tl=vs({zerosLike_:function(e){const t={x:ys(e,"x","zerosLike")};return cs.runKernel(wr,t)}});const nl=vs({divNoNan_:function(e,t){let n=ys(e,"a","div"),r=ys(t,"b","div");[n,r]=rs(n,r);const a=zi(n,r),s=tl(a),o=Zu(r,s);return el(o,s,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rl=vs({dot_:function(e,t){const n=ys(e,"t1","dot"),r=ys(t,"t2","dot");S(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),(()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`));const a=1===n.rank?n.size:n.shape[1],s=1===r.rank?r.size:r.shape[0];if(S(a===s,(()=>`Error in dot: inner dimensions of inputs must match, but got ${a} and ${s}.`)),1===n.rank&&1===r.rank){const e=du(n,[1,-1]),t=du(r,[-1,1]),a=mu(e,t);return du(a,[])}if(1===n.rank&&2===r.rank){const e=du(n,[1,-1]),t=du(r,[r.shape[0],r.shape[1]]),a=mu(e,t);return du(a,[a.size])}if(2===n.rank&&1===r.rank){const e=du(r,[-1,1]),t=mu(n,e);return du(t,[t.size])}{const e=du(r,[r.shape[0],r.shape[1]]);return mu(n,e)}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const al=vs({einsum_:function(e,...t){const n=t.map(((e,t)=>ys(e,`tensors${t}`,"einsum"))),r={equation:e};return cs.runKernel(kt,n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sl=vs({elu_:function(e){const t={x:ys(e,"x","elu","float32")};return cs.runKernel(St,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ol=vs({erf_:function(e){let t=ys(e,"x","erf");S("int32"===t.dtype||"float32"===t.dtype,(()=>"Input dtype must be `int32` or `float32`.")),"int32"===t.dtype&&(t=Ni(t,"float32"));const n={x:t};return cs.runKernel(Nt,n)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var il={};function ul(e,t){return function(e,t,n){const r=e.length+t.length,a=[];let s=0,o=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?a.push(e[s++]):a.push(t[o++]);return a}(e,t.map((e=>1)),t)}e(il,"norm",(()=>gl));const ll=vs({max_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=null,n=!1){const r={x:ys(e,"x","max")},a={reductionIndices:t,keepDims:n};return cs.runKernel(tn,r,a)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cl=vs({min_:function(e,t=null,n=!1){const r={x:ys(e,"x","min")},a={axis:t,keepDims:n};return cs.runKernel(un,r,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pl=vs({pow_:function(e,t){let n=ys(e,"base","pow"),r=ys(t,"exp","pow");[n,r]=rs(n,r);const a={a:n,b:r};return cs.runKernel(Sn,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dl(e,t){if((H(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&H(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return xs(e,[],[],t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fl=vs({sqrt_:function(e){const t={x:ys(e,"x","sqrt","float32")};return cs.runKernel(Qn,t)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hl=vs({square_:function(e){const t=ys(e,"x","square");return cs.runKernel("Square",{x:t},{})}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ml=vs({sum_:function(e,t=null,n=!1){let r=ys(e,"x","sum");"bool"===r.dtype&&(r=Ni(r,"int32"));const a={x:r},s={axis:t,keepDims:n};return cs.runKernel(Yn,a,s)}});function yl(e,t,n=null){if(0===e.rank)return Wi(e);if(1!==e.rank&&null===n)return yl(du(e,[-1]),t,n);if(1===e.rank||"number"==typeof n||Array.isArray(n)&&1===n.length){if(1===t)return ml(Wi(e),n);if(t===1/0)return ll(Wi(e),n);if(t===-1/0)return cl(Wi(e),n);if("euclidean"===t||2===t)return fl(ml(pl(Wi(e),dl(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&2===n.length){if(1===t)return ll(ml(Wi(e),n[0]),n[1]-1);if(t===1/0)return ll(ml(Wi(e),n[1]),n[0]);if(t===-1/0)return cl(ml(Wi(e),n[1]),n[0]);if("fro"===t||"euclidean"===t)return fl(ml(hl(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const gl=vs({norm_:function(e,t="euclidean",n=null,r=!1){const a=yl(e=ys(e,"x","norm"),t,n);let s=a.shape;if(r){const t=R(n,e.shape);s=ul(a.shape,t)}return du(a,s)}});const bl=vs({euclideanNorm_:function(e,t=null,n=!1){return gl(e,"euclidean",t,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vl=vs({exp_:function(e){const t={x:ys(e,"x","exp")};return cs.runKernel(Tt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wl=vs({expm1_:function(e){const t={x:ys(e,"x","expm1")};return cs.runKernel(It,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xl=vs({tile_:function(e,t){const n=ys(e,"x","tile","string_or_numeric");S(n.rank===t.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`));const r={x:n},a={reps:t};return cs.runKernel(fr,r,a)}});const kl=vs({eye_:function(e,t,n,r="float32"){null==t&&(t=e);const a=Si([e,t],r),s=e<=t?e:t;for(let e=0;e<s;++e)a.set(1,e,e);const o=du(a.toTensor(),[e,t]);if(null==n)return o;if(1===n.length)return xl(Bi(o,0),[n[0],1,1]);if(2===n.length)return xl(Bi(Bi(o,0),0),[n[0],n[1],1,1]);if(3===n.length)return xl(Bi(Bi(Bi(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sl=vs({floor_:function(e){const t={x:ys(e,"x","floor","float32")};return cs.runKernel(At,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nl=vs({gather_:function(e,t,n=0,r=0){const a={x:ys(e,"x","gather"),indices:ys(t,"indices","gather","int32")},s={axis:n,batchDims:r};return cs.runKernel(Pt,a,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const El=vs({greater_:function(e,t){let n=ys(e,"a","greater","string_or_numeric"),r=ys(t,"b","greater","string_or_numeric");[n,r]=rs(n,r),Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(Rt,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tl=vs({greaterEqual_:function(e,t){let n=ys(e,"a","greaterEqual","string_or_numeric"),r=ys(t,"b","greaterEqual","string_or_numeric");[n,r]=rs(n,r),Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(Ft,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _l=vs({imag_:function(e){const t={input:ys(e,"input","imag")};return cs.runKernel(Ut,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Il=vs({isFinite_:function(e){const t={x:ys(e,"x","isFinite")};return cs.runKernel(Vt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cl=vs({isInf_:function(e){const t={x:ys(e,"x","isInf")};return cs.runKernel(jt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ol=vs({isNaN_:function(e){const t={x:ys(e,"x","isNaN")};return cs.runKernel(Ht,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ml=vs({leakyRelu_:function(e,t=.2){const n={x:ys(e,"x","leakyRelu")},r={alpha:t};return cs.runKernel(Wt,n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Al=vs({less_:function(e,t){let n=ys(e,"a","less","string_or_numeric"),r=ys(t,"b","less","string_or_numeric");[n,r]=rs(n,r),Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(qt,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dl=vs({lessEqual_:function(e,t){let n=ys(e,"a","lessEqual","string_or_numeric"),r=ys(t,"b","lessEqual","string_or_numeric");[n,r]=rs(n,r),Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(Kt,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $l(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:e,stop:t,num:n};return cs.runKernel(Gt,{},r)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pl=vs({localResponseNormalization_:function(e,t=5,n=1,r=1,a=.5){const s=ys(e,"x","localResponseNormalization");S(4===s.rank||3===s.rank,(()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${s.rank}.`)),S(O(t),(()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`));let o=s,i=!1;3===s.rank&&(i=!0,o=du(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const u={x:o},l={depthRadius:t,bias:n,alpha:r,beta:a},c=cs.runKernel(en,u,l);return i?du(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ll=vs({log_:function(e){const t={x:ys(e,"x","log","float32")};return cs.runKernel(Qt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rl=vs({log1p_:function(e){const t={x:ys(e,"x","log1p")};return cs.runKernel(Yt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fl(e){return cs.customGrad(e)}const zl=vs({neg_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const t={x:ys(e,"x","neg")};return cs.runKernel(hn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bl=vs({softplus_:function(e){const t={x:ys(e,"x","softplus")};return cs.runKernel(Gn,t)}});const Ul=vs({logSigmoid_:function(e){const t=ys(e,"x","logSigmoid");return Fl((e=>({value:zl(Bl(zl(e))),gradFunc:t=>yu(t,gu(zl(e)))})))(t)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vl=vs({sub_:function(e,t){let n=ys(e,"a","sub"),r=ys(t,"b","sub");[n,r]=rs(n,r);const a={a:n,b:r};return cs.runKernel(cr,a)}});const jl=vs({logSoftmax_:function(e,t=-1){const n=ys(e,"logits","logSoftmax");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Fl(((e,n)=>{const r=ll(e,t,!0),a=Vl(e,r),s=Vl(Ni(a,"float32"),Ll(ml(vl(a),t,!0)));n([s]);return{value:s,gradFunc:(e,n)=>{const[r]=n,a=vl(r);return Vl(e,yu(ml(e,t,!0),a))}}}))(n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hl=vs({logSumExp_:function(e,t=null,n=!1){const r=ys(e,"x","logSumExp"),a=R(t,r.shape),s=ll(r,a,!0),o=Vl(r,s),i=vl(o),u=ml(i,a),l=Ll(u),c=_i(du(s,l.shape),l);if(n){const e=ul(c.shape,a);return du(c,e)}return c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wl=vs({logicalAnd_:function(e,t){const n=ys(e,"a","logicalAnd","bool"),r=ys(t,"b","logicalAnd","bool");Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(Jt,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ql=vs({logicalNot_:function(e){const t={x:ys(e,"x","logicalNot","bool")};return cs.runKernel(Xt,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kl=vs({logicalOr_:function(e,t){const n=ys(e,"a","logicalOr","bool"),r=ys(t,"b","logicalOr","bool");Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(Zt,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gl=vs({logicalXor_:function(e,t){const n=ys(e,"a","logicalXor","bool"),r=ys(t,"b","logicalXor","bool");return Xu(n.shape,r.shape),Wl(Kl(e,t),ql(Wl(e,t)))}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ql={};e(Ql,"searchSorted",(()=>Jl));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Yl=2147483648;const Jl=vs({searchSorted_:function(e,t,n="left"){const r=ys(e,"sortedSequence","searchSorted"),a=ys(t,"values","searchSorted"),s=r.shape[r.shape.length-1],o=a.shape[a.shape.length-1],i=du(r,[-1,s]),u=du(a,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(_(u.shape)>=Yl)throw new Error(`values tensor size must less than ${Yl}`);if(i.shape[1]>=Yl)throw new Error(`trailing dim_size must less than ${Yl} for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:u},c={side:n};return cs.runKernel(Bn,l,c)}});function Xl(e,t){return Jl(e,t,"left")}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zl=vs({maxPool_:function(e,t,n,r,a){const s=ys(e,"x","maxPool");let o=s,i=!1;3===s.rank&&(i=!0,o=du(s,[1,s.shape[0],s.shape[1],s.shape[2]])),S(4===o.rank,(()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`)),S(cu(n,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`)),pu("maxPool",r,a);const u={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:a},c=cs.runKernel(rn,u,l);return i?du(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ec=vs({maxPool3d_:function(e,t=[1,1,1],n,r,a,s="NDHWC"){const o=ys(e,"x","maxPool3d");let i=o,u=!1;4===o.rank&&(u=!0,i=du(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),S(5===i.rank,(()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`)),S("NDHWC"===s,(()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`)),pu("maxPool3d",r,a);const l={x:i},c={filterSize:t,strides:n,pad:r,dimRoundingMode:a,dataFormat:s},p=cs.runKernel(an,l,c);return u?du(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tc=vs({maxPoolWithArgmax_:function(e,t,n,r,a=!1){const s={x:ys(e,"x","maxPoolWithArgmax")},o={filterSize:t,strides:n,pad:r,includeBatchInIndex:a},i=cs.runKernel(sn,s,o);return{result:i[0],indexes:i[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nc=vs({maximum_:function(e,t){let n=ys(e,"a","maximum"),r=ys(t,"b","maximum");[n,r]=rs(n,r),"bool"===n.dtype&&(n=Ni(n,"int32"),r=Ni(r,"int32")),Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(nn,a)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rc=vs({mean_:function(e,t=null,n=!1){const r={x:ys(e,"x","mean")},a={axis:t,keepDims:n};return cs.runKernel(on,r,a)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ac(e,t="float32"){if("complex64"===t){const t=ac(e,"float32"),n=ac(e,"float32");return ws(t,n)}const n=re(_(e),t);return cs.makeTensor(n,e,t)}function sc(e,t="float32"){if("complex64"===t){const t=sc(e,"float32"),n=ac(e,"float32");return ws(t,n)}const n=ne(_(e),t);return cs.makeTensor(n,e,t)}function oc(e,t,{indexing:n="xy"}={}){if("xy"!==n&&"ij"!==n)throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(void 0===e)return[];let r=ys(e,"x","meshgrid",e instanceof ja?e.dtype:"float32");if(void 0===t)return[r];let a=ys(t,"y","meshgrid",t instanceof ja?t.dtype:"float32");const s=_(r.shape),o=_(a.shape);return"xy"===n?(r=du(r,[1,-1]),a=du(a,[-1,1]),[mu(sc([o,1],r.dtype),r),mu(a,sc([1,s],a.dtype))]):(r=du(r,[-1,1]),a=du(a,[1,-1]),[mu(r,sc([1,o],r.dtype)),mu(sc([s,1],a.dtype),a)])}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ic=vs({minimum_:function(e,t){let n=ys(e,"a","minimum"),r=ys(t,"b","minimum");[n,r]=rs(n,r),"bool"===n.dtype&&(n=Ni(n,"int32"),r=Ni(r,"int32")),Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(ln,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uc=vs({mirrorPad_:function(e,t,n){S("reflect"===n||"symmetric"===n,(()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`));const r=ys(e,"x","mirrorPad");if(0===r.rank)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");S(t.length===r.rank,(()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`));const a="reflect"===n?1:0;for(let e=0;e<r.rank;e++)S(2===t[e].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),S(t[e][0]>=0&&t[e][0]<=r.shape[e]-a&&t[e][1]>=0&&t[e][1]<=r.shape[e]-a,(()=>`Padding in dimension ${e} cannot be greater than or equal to ${r.shape[e]-a} or less than 0 for input of shape ${r.shape}`));const s={paddings:t,mode:n},o={x:r};return cs.runKernel(cn,o,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lc=vs({mod_:function(e,t){let n=ys(e,"a","mod"),r=ys(t,"b","mod");[n,r]=rs(n,r);const a={a:n,b:r};return cs.runKernel(pn,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cc=vs({moments_:function(e,t=null,n=!1){const r=R(t,(e=ys(e,"x","moments")).shape),a=rc(e,r,n);let s=a.shape;n||(s=ul(a.shape,r));const o=hl(Vl(Ni(e,"float32"),du(a,s)));return{mean:a,variance:rc(o,r,n)}}});const pc=vs({multiRNNCell_:function(e,t,n,r){const a=ys(t,"data","multiRNNCell"),s=gs(n,"c","multiRNNCell"),o=gs(r,"h","multiRNNCell");let i=a;const u=[];for(let t=0;t<e.length;t++){const n=e[t](i,s[t],o[t]);u.push(n[0]),u.push(n[1]),i=n[1]}const l=[],c=[];for(let e=0;e<u.length;e+=2)l.push(u[e]),c.push(u[e+1]);return[l,c]}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dc=vs({multinomial_:function(e,t,n,r=!1){const a=ys(e,"logits","multinomial"),s=a.size,o=a.rank;if(s<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const i={logits:1===o?du(a,[1,-1]):a},u={numSamples:t,seed:n,normalized:r},l=cs.runKernel(dn,i,u);return 1===o?du(l,[l.size]):l}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fc=vs({notEqual_:function(e,t){let n=ys(e,"a","notEqual","string_or_numeric"),r=ys(t,"b","notEqual","string_or_numeric");[n,r]=rs(n,r),Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(mn,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hc=vs({oneHot_:function(e,t,n=1,r=0,a="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const s={indices:ys(e,"indices","oneHot","int32")},o={dtype:a,depth:t,onValue:n,offValue:r};return cs.runKernel(wn,s,o)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mc=vs({onesLike_:function(e){const t={x:ys(e,"x","onesLike")};return cs.runKernel(vn,t)}});const yc=vs({outerProduct_:function(e,t){const n=ys(e,"v1","outerProduct"),r=ys(t,"v2","outerProduct");S(1===n.rank&&1===r.rank,(()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`));const a=du(n,[-1,1]),s=du(r,[1,-1]);return mu(a,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gc=vs({pad_:function(e,t,n=0){const r=ys(e,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const a={paddings:t,constantValue:n},s={x:r};return cs.runKernel(kn,s,a)}});const bc=vs({pad1d_:function(e,t,n=0){return S(2===t.length,(()=>"Invalid number of paddings. Must be length of 2.")),gc(e,[t],n)}});const vc=vs({pad2d_:function(e,t,n=0){return S(2===t.length&&2===t[0].length&&2===t[1].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),gc(e,t,n)}});const wc=vs({pad3d_:function(e,t,n=0){return S(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),gc(e,t,n)}});const xc=vs({pad4d_:function(e,t,n=0){return S(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),gc(e,t,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kc=vs({spaceToBatchND_:function(e,t,n){const r=ys(e,"x","spaceToBatchND");S(r.rank>=1+t.length,(()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`)),S(n.length===t.length,(()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`)),S(r.shape.reduce(((e,r,a)=>a>0&&a<=t.length?e&&(r+n[a-1][0]+n[a-1][1])%t[a-1]==0:e),!0),(()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`));const a={x:r},s={blockShape:t,paddings:n};return cs.runKernel(Jn,a,s)}});const Sc=vs({pool_:function(e,t,n,r,a,s,o){null==a&&(a=[1,1]),null==s&&(s=1),0===r&&(r="valid");const i=ys(e,"x","maxPool");let u=i,l=!1;3===i.rank&&(l=!0,u=du(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(cu(s,a),(()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${a}'`));const c=function(e,t,n,r,a,s,o="channelsLast"){const[i,u]=ou(t);let l;if("channelsLast"===o)l=[i,u,e[3],e[3]];else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);l=[i,u,e[1],e[1]]}return au(e,l,n,r,a,s,!1,o)}(u.shape,t,s,a,r),p=[c.dilationHeight,c.dilationWidth];let d;d="same"===r?function(e,t){const n=e.map(((e,n)=>e+(e-1)*(t[n]-1))),r=n.map((e=>e-1)),a=r.map((e=>Math.floor(e/2))),s=r.map(((e,t)=>e-a[t]));return r.map(((e,t)=>[a[t],s[t]]))}([c.filterHeight,c.filterWidth],p):[[0,0],[0,0]];const f=1===p[0]&&1===p[1],[h,m]=function(e,t,n){const r=n.map((e=>e[0])),a=n.map((e=>e[1])),s=e.concat(r,a),o=t.map(((e,t)=>(e-s[t]%e)%e)),i=a.map(((e,t)=>e+o[t])),u=t.map(((e,t)=>[r[t],i[t]])),l=t.map(((e,t)=>[0,o[t]]));return[u,l]}([c.inHeight,c.inWidth],p,d),y=f?r:"valid",g=f?u:kc(u,p,h),b=("avg"===n?()=>fu(g,t,s,y,o):()=>Zl(g,t,s,y,o))(),v=f?b:xu(b,p,m);return l?du(v,[v.shape[1],v.shape[2],v.shape[3]]):v}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nc=vs({prelu_:function(e,t){const n={x:ys(e,"x","prelu"),alpha:ys(t,"alpha","prelu")};return cs.runKernel(Nn,n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ec=vs({prod_:function(e,t=null,n=!1){let r=ys(e,"x","prod");"bool"===r.dtype&&(r=Ni(r,"int32"));const a={x:r},s={axis:t,keepDims:n};return cs.runKernel(En,a,s)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tc=vs({raggedGather_:function(e,t,n,r){const a={paramsNestedSplits:e.map(((e,t)=>ys(e,`tensors${t}`,"raggedGather","int32"))),paramsDenseValues:ys(t,"paramsDenseValues","raggedGather"),indices:ys(n,"indices","raggedGather","int32")},s={outputRaggedRank:r},o=cs.runKernel(Tn,a,s);return{outputNestedSplits:o.slice(0,o.length-1),outputDenseValues:o[o.length-1]}}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _c=vs({raggedTensorToTensor_:function(e,t,n,r,a){const s=ys(e,"shape","raggedTensorToTensor","int32"),o=ys(t,"values","raggedTensorToTensor"),i={shape:s,values:o,defaultValue:ys(n,"defaultValue","raggedTensorToTensor",o.dtype),rowPartitionTensors:r.map(((e,t)=>ys(e,`tensors${t}`,"raggedTensorToTensor","int32")))},u={rowPartitionTypes:a};return cs.runKernel(_n,i,u)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ic=vs({rand_:function(e,t,n){const r=_(e);let a=null;if(null==n||"float32"===n)a=new Float32Array(r);else if("int32"===n)a=new Int32Array(r);else{if("bool"!==n)throw new Error(`Unknown data type ${n}`);a=new Uint8Array(r)}for(let e=0;e<r;e++)a[e]=t();return cs.makeTensor(a,e,n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Cc={},Oc=o("cmoHh"),Mc=o("euRi5"),Ac=o("hDsEw"),Dc=o("3J2Zm"),$c=o("6Px8M"),Pc=o("lDm0S"),Lc={};!function(e,t,n){var r,a=256,s=6,i="random",u=n.pow(a,s),l=n.pow(2,52),c=2*l,p=a-1;function d(o,p,d){var b=[],v=y(m((p=1==p?{entropy:!0}:p||{}).entropy?[o,g(t)]:null==o?function(){try{var n;return r&&(n=r.randomBytes)?n=n(a):(n=new Uint8Array(a),(e.crypto||e.msCrypto).getRandomValues(n)),g(n)}catch(n){var s=e.navigator,o=s&&s.plugins;return[+new Date,e,o,e.screen,g(t)]}}():o,3),b),w=new f(b),x=function(){for(var e=w.g(s),t=u,n=0;e<l;)e=(e+n)*a,t*=a,n=w.g(1);for(;e>=c;)e/=2,t/=2,n>>>=1;return(e+n)/t};return x.int32=function(){return 0|w.g(4)},x.quick=function(){return w.g(4)/4294967296},x.double=x,y(g(w.S),t),(p.pass||d||function(e,t,r,a){return a&&(a.S&&h(a,w),e.state=function(){return h(w,{})}),r?(n[i]=e,t):e})(x,v,"global"in p?p.global:this==n,p.state)}function f(e){var t,n=e.length,r=this,s=0,o=r.i=r.j=0,i=r.S=[];for(n||(e=[n++]);s<a;)i[s]=s++;for(s=0;s<a;s++)i[s]=i[o=p&o+e[s%n]+(t=i[s])],i[o]=t;(r.g=function(e){for(var t,n=0,s=r.i,o=r.j,i=r.S;e--;)t=i[s=p&s+1],n=n*a+i[p&(i[s]=i[o=p&o+t])+(i[o]=t)];return r.i=s,r.j=o,n})(a)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function m(e,t){var n,r=[],a=typeof e;if(t&&"object"==a)for(n in e)try{r.push(m(e[n],t-1))}catch(e){}return r.length?r:"string"==a?e:e+"\0"}function y(e,t){for(var n,r=e+"",a=0;a<r.length;)t[p&a]=p&(n^=19*t[p&a])+r.charCodeAt(a++);return g(t)}function g(e){return String.fromCharCode.apply(0,e)}if(y(n.random(),t),Lc){Lc=d;try{r=o("kjyEk")}catch(e){}}else"function"==typeof define&&define.amd?define((function(){return d})):n["seed"+i]=d}("undefined"!=typeof self?self:Lc,[],Math),Lc.alea=Oc,Lc.xor128=Mc,Lc.xorwow=Ac,Lc.xorshift7=Dc,Lc.xor4096=$c,Lc.tychei=Pc,Cc=Lc;class Rc{constructor(e,t,n,r,a){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const s=a||Math.random();this.random=Cc.alea(s.toString())}nextValue(){if(!isNaN(this.nextVal)){const e=this.nextVal;return this.nextVal=NaN,e}let e,t,n=!1;for(;!n;){let r,a,s;do{r=2*this.random()-1,a=2*this.random()-1,s=r*r+a*a}while(s>=1||0===s);const o=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*r*o,t=this.mean+this.stdDev*a*o,this.truncated&&!this.isValidTruncated(e)||(n=!0)}return this.truncated&&!this.isValidTruncated(t)||(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class Fc{constructor(e,t,n,r){this.alpha=e,this.beta=1/t,this.dtype=n;const a=r||Math.random();this.randu=Cc.alea(a.toString()),this.randn=new Rc(0,1,n,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,n,r,a,s;for(;;){do{r=this.randn.nextValue(),s=1+this.c*r}while(s<=0);if(s*=s*s,e=r*r,t=1-.331*e*e,n=.5*e+this.d*(1-s+Math.log(s)),a=this.randu(),a<t||Math.log(a)<n)break}return s=1/this.beta*this.d*s,this.alpha<1&&(s*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(s)}convertValue(e){return"float32"===this.dtype?e:Math.round(e)}}class zc{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=e,this.range=t-e,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=Cc.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}const Bc=vs({randomGamma_:function(e,t,n=1,r="float32",a){if(null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error(`Unsupported data type ${r}`);const s=new Fc(t,n,r,a),o=Si(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=s.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uc=vs({randomNormal_:function(e,t=0,n=1,r,a){if(null!=r&&"bool"===r)throw new Error(`Unsupported data type ${r}`);const s=new Rc(t,n,r,!1,a),o=Si(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=s.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vc=vs({randomStandardNormal_:function(e,t,n){if(null!=t&&"bool"===t)throw new Error(`Unsupported data type ${t}`);return Uc(e,0,1,t,n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jc=vs({randomUniform_:function(e,t=0,n=1,r="float32",a){const s=Si(e,r),o=new zc(t,n,null,a);for(let e=0;e<s.values.length;e++)s.values[e]=o.nextValue();return s.toTensor()}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hc(e,t,n=1,r="float32"){if(0===n)throw new Error("Cannot have a step of zero");const a={start:e,stop:t,step:n,dtype:r};return cs.runKernel(In,{},a)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wc=vs({real_:function(e){const t={input:ys(e,"input","real")};return cs.runKernel(Cn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qc=vs({reciprocal_:function(e){const t={x:ys(e,"x","reciprocal")};return cs.runKernel(On,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kc=vs({relu_:function(e){const t={x:ys(e,"x","relu")};return cs.runKernel(Mn,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gc=vs({relu6_:function(e){const t={x:ys(e,"x","relu6")};return cs.runKernel(Pn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qc=vs({reverse_:function(e,t){const n={x:ys(e,"x","reverse")},r={dims:t};return cs.runKernel(Ln,n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yc=vs({reverse1d_:function(e){const t=ys(e,"x","reverse");return S(1===t.rank,(()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`)),Qc(t,0)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jc=vs({reverse2d_:function(e,t){const n=ys(e,"x","reverse");return S(2===n.rank,(()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`)),Qc(n,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xc=vs({reverse3d_:function(e,t){const n=ys(e,"x","reverse");return S(3===n.rank,(()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`)),Qc(n,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zc=vs({reverse4d_:function(e,t){const n=ys(e,"x","reverse");return S(4===n.rank,(()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`)),Qc(n,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ep=vs({round_:function(e){const t={x:ys(e,"x","round")};return cs.runKernel(Rn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tp=vs({rsqrt_:function(e){const t={x:ys(e,"x","rsqrt","float32")};return cs.runKernel(Fn,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const np=vs({selu_:function(e){const t={x:ys(e,"x","selu")};return cs.runKernel(Vn,t)}});const rp=vs({separableConv2d_:function(e,t,n,r,a,s=[1,1],o="NHWC"){const i=ys(e,"x","separableConv2d"),u=ys(t,"depthwiseFilter","separableConv2d"),l=ys(n,"pointwiseFilter","separableConv2d");let c=i,p=!1;if(3===i.rank&&(p=!0,c=du(i,[1,i.shape[0],i.shape[1],i.shape[2]])),"NCHW"===o)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");S(4===c.rank,(()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`)),S(4===u.rank,(()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`)),S(4===l.rank,(()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`)),S(1===l.shape[0],(()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`)),S(1===l.shape[1],(()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`));const d=u.shape[2],f=u.shape[3];S(l.shape[2]===d*f,(()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*f}, but got ${l.shape[2]}.`));const h=Qu(c,u,r,a,o,s),m=Lu(h,l,1,"valid",o);return p?du(m,[m.shape[1],m.shape[2],m.shape[3]]):m}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ap=async function(e,t){const n=ys(e,"x","setdiff1d"),r=ys(t,"y","setdiff1d");S(n.dtype===r.dtype,(()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`)),S(1===n.rank,(()=>`x should be 1D tensor, but got x (${n.shape}).`)),S(1===r.rank,(()=>`y should be 1D tensor, but got y (${r.shape}).`));const a=await n.data(),s=await r.data(),o=new Set(s);let i=0;for(let e=0;e<a.length;e++)o.has(a[e])||i++;const u=new za([i],n.dtype),l=new za([i],"int32");for(let e=0,t=0;e<a.length;e++)o.has(a[e])||(u.values[t]=a[e],l.values[t]=e,t++);return[u.toTensor(),l.toTensor()]};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sp=vs({sign_:function(e){const t={x:ys(e,"x","sign")};return cs.runKernel(qn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const op=vs({sin_:function(e){const t={x:ys(e,"x","sin","float32")};return cs.runKernel(Hn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ip=vs({sinh_:function(e){const t={x:ys(e,"x","sinh")};return cs.runKernel(Wn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const up=vs({slice1d_:function(e,t,n){const r=ys(e,"x","slice1d");return S(1===r.rank,(()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`)),bu(r,[t],[n])}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lp=vs({slice2d_:function(e,t,n){const r=ys(e,"x","slice2d");return S(2===r.rank,(()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`)),bu(r,t,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cp=vs({slice3d_:function(e,t,n){const r=ys(e,"x","slice3d");return S(3===r.rank,(()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`)),bu(r,t,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pp=vs({slice4d_:function(e,t,n){const r=ys(e,"x","slice4d");return S(4===r.rank,(()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`)),bu(r,t,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dp=vs({softmax_:function(e,t=-1){const n=ys(e,"logits","softmax","float32");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},a={dim:t};return cs.runKernel(Zn,r,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fp=vs({fft_:function(e){S("complex64"===e.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`));const t={input:e};return cs.runKernel(Ct,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hp=vs({ifft_:function(e){S("complex64"===e.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`));const t={input:e};return cs.runKernel(Bt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mp=vs({irfft_:function(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const a=du(e,[n,t]);r=hp(a)}else{const a=[n,2*(t-1)],s=du(Wc(e),[n,t]),o=du(_l(e),[n,t]),i=Qc(bu(s,[0,1],[n,t-2]),1),u=yu(Qc(bu(o,[0,1],[n,t-2]),1),dl(-1)),l=Li([s,i],1),c=Li([o,u],1),p=du(ws(l,c),[a[0],a[1]]);r=hp(p)}if(r=Wc(r),3===e.rank&&0!==e.shape[0]){const t=r,n=e.shape[0];r=du(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yp=vs({split_:function(e,t,n=0){const r={x:ys(e,"x","split")},a={numOrSizeSplits:t,axis:n};return cs.runKernel(Xn,r,a)}});const gp=vs({rfft_:function(e,t){S("float32"===e.dtype,(()=>`The dtype for rfft() must be real value but got ${e.dtype}`));let n=e.shape[e.shape.length-1];const r=e.size/n;let a;if(null!=t&&t<n){const r=e.shape.map((e=>0)),s=e.shape.map((e=>e));s[e.shape.length-1]=t,a=bu(e,r,s),n=t}else if(null!=t&&t>n){const r=e.shape.map((e=>e));r[e.shape.length-1]=t-n,a=Li([e,ac(r)],e.shape.length-1),n=t}else a=e;const s=tl(a),o=du(ws(a,s),[r,n]),i=fp(o),u=Math.floor(n/2)+1,l=Wc(i),c=_l(i),p=yp(l,[u,n-u],l.shape.length-1),d=yp(c,[u,n-u],c.shape.length-1),f=a.shape.slice();return f[a.shape.length-1]=u,du(ws(p[0],d[0]),f)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bp=vs({squaredDifference_:function(e,t){let n=ys(e,"a","squaredDifference"),r=ys(t,"b","squaredDifference");[n,r]=rs(n,r),Xu(n.shape,r.shape);const a={a:n,b:r};return cs.runKernel(sr,a,{})}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vp=vs({squeeze_:function(e,t){const n=ys(e,"x","squeeze","string_or_numeric");return du(n,F(n.shape,t).newShape)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wp=vs({stack_:function(e,t=0){const n=gs(e,"tensors","stack","string_or_numeric");S(n.length>=1,(()=>"Pass at least one tensor to tf.stack")),n.length>0&&S(t<=n[0].rank,(()=>"Axis must be <= rank of the tensor"));const r=n,a={axis:t};return cs.runKernel(xn,r,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xp=vs({step_:function(e,t=0){const n={x:ys(e,"x","step")},r={alpha:t};return cs.runKernel(xr,n,r)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kp=vs({stridedSlice_:function(e,t,n,r,a=0,s=0,o=0,i=0,u=0){const l={x:ys(e,"x","stridedSlice","string_or_numeric")},c={begin:t,end:n,strides:r,beginMask:a,endMask:s,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:u};return cs.runKernel(or,l,c)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sp=vs({tan_:function(e){const t={x:ys(e,"x","tan","float32")};return cs.runKernel(pr,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Np(e,t){E(e);const n=fs(e,t);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return xs(e,null,n,t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ep(e,t,n){if(E(e),null!=t&&2!==t.length)throw new Error("tensor2d() requires shape to have two numbers");const r=fs(e,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return xs(e,t,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tp(e,t,n){if(E(e),null!=t&&4!==t.length)throw new Error("tensor4d() requires shape to have four numbers");const r=fs(e,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return xs(e,t,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _p(e,t,n){if(E(e),null!=t&&5!==t.length)throw new Error("tensor5d() requires shape to have five numbers");const r=fs(e,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return xs(e,t,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ip(e,t,n){if(E(e),null!=t&&6!==t.length)throw new Error("tensor6d() requires shape to have six numbers");const r=fs(e,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return xs(e,t=t||r,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cp=vs({topk_:function(e,t=1,n=!0){const r=ys(e,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const a=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>a)throw new Error(`'k' passed to topk() must be <= the last dimension (${a}) but got ${t}`);const s={x:r},o={k:t,sorted:n},[i,u]=cs.runKernel(hr,s,o);return{values:i,indices:u}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Op=vs({truncatedNormal_:function(e,t=0,n=1,r,a){if(null!=r&&"bool"===r)throw new Error("Unsupported data type $ { dtype }");const s=new Rc(t,n,r,!0,a),o=Si(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=s.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mp=vs({unique_:function(e,t=0){const n=ys(e,"x","unique","string_or_numeric");S(n.rank>0,(()=>"The input tensor must be at least 1D"));const r={x:n},a={axis:t},[s,o]=cs.runKernel(gr,r,a);return{values:s,indices:o}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ap=vs({unsortedSegmentSum_:function(e,t,n){const r=ys(e,"x","unsortedSegmentSum"),a=ys(t,"segmentIds","unsortedSegmentSum","int32");S(O(n),(()=>"numSegments must be of dtype int"));const s={x:r,segmentIds:a},o={numSegments:n};return cs.runKernel(vr,s,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dp=vs({unstack_:function(e,t=0){const n=ys(e,"x","unstack","string_or_numeric");S(t>=-n.shape.length&&t<n.shape.length,(()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`));const r={value:n},a={axis:t};return cs.runKernel(br,r,a)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $p(e,t){return Jl(e,t,"right")}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pp(e,t=!0,n,r){return cs.makeVariable(e,t,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lp(e,t){const n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);const r=Si(e,"int32"),a=Si([n.length,e.length],"int32");for(let t=0;t<n.length;t++){const s=r.indexToLoc(n[t]),o=t*e.length;a.values.set(s,o)}return a.toTensor()}const Rp=async function(e){const t=ys(e,"condition","whereAsync","bool"),n=await t.data(),r=Lp(t.shape,n);return e!==t&&t.dispose(),r};var Fp={};e(Fp,"booleanMaskAsync",(()=>zp));const zp=
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function(e,t,n){const r=ys(e,"tensor","boolMask"),a=ys(t,"mask","boolMask","bool"),s=null==n?0:n,o=a.rank,i=r.shape;S(o>0,(()=>"mask cannot be scalar")),N(i.slice(s,s+o),a.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let e=s;e<s+o;e++)u*=i[e];const l=i.slice(0,s).concat([u],i.slice(s+o)),c=du(r,l),p=du(a,[-1]),d=await Rp(p),f=vp(d,[1]),h=Nl(c,f,s);return e!==r&&r.dispose(),t!==a&&a.dispose(),f.dispose(),c.dispose(),p.dispose(),d.dispose(),h};var Bp={};e(Bp,"transpose",(()=>Up));const Up=vs({transpose_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=ys(e,"x","transpose");if(null==t&&(t=r.shape.map(((e,t)=>t)).reverse()),S(r.rank===t.length,(()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`)),t.forEach((e=>{S(e>=0&&e<r.rank,(()=>"All entries in 'perm' must be between 0 and "+(r.rank-1)+` but got ${t}`))})),r.rank<=1)return r.clone();const a={x:r},s={perm:t};return"complex64"===r.dtype?Ui((()=>{let e=Wc(r),t=_l(r);return e=cs.runKernel(yr,{x:e},s),t=cs.runKernel(yr,{x:t},s),n&&(t=zl(t)),ws(e,t)})):cs.runKernel(yr,a,s)}});var Vp={};e(Vp,"movingAverage",(()=>jp));const jp=vs({movingAverage_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r,a=!0){const s=ys(e,"v","movingAverage"),o=ys(t,"x","movingAverage"),i=ys(n,"decay","movingAverage");var u,l;l=o,S((u=s).dtype===l.dtype,(()=>`The dtypes of the first(${u.dtype}) and second(${l.dtype}) input must match`)),S(C(s.shape,o.shape),(()=>"Shape mismatch in v and x"));const c=dl(1),p=Vl(c,i);let d=yu(Vl(o,s),p);if(a){S(null!=r,(()=>"When using zeroDebias: true, step is required."));const e=ys(r,"step","movingAverage");d=zi(d,Vl(c,pl(i,e)))}return _i(s,d)}});var Hp={};function Wp(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(0===n.length){if(0===t.size)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}!
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,a=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw new Error(s+` update.rank < ${a}. `);if(e.length<r+(n.rank-a))throw new Error(s+` Output shape length < ${r+(n.rank-a)}`);if(n.rank!==a+e.length-r)throw new Error(s+" update.rank != "+(a+e.length-r));for(let e=0;e<a;++e)if(n.shape[e]!==t.shape[e])throw new Error(s+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-a;++t)if(n.shape[t+a]!==e[t+r])throw new Error(s+` updates.shape[${t+a}] (${n.shape[t+a]}) != shape[${t+a}] (${e[t+a]})`)}(n,t,e)}e(Hp,"scatterND",(()=>qp));const qp=vs({scatterND_:function(e,t,n){const r=ys(e,"indices","scatterND","int32"),a=ys(t,"updates","scatterND");Wp(a,r,n);const s={indices:r,updates:a},o={shape:n};return cs.runKernel(zn,s,o)}});var Kp={};e(Kp,"sparseToDense",(()=>Gp));const Gp=vs({sparseToDense_:function(e,t,n,r=0){const a=ys(e,"sparseIndices","sparseToDense","int32"),s=ys(t,"sparseValues","sparseToDense","string_or_numeric"),o=ys(r,"defaultValue","sparseToDense",s.dtype);!
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r){if("int32"!==e.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const a=e.rank>0?e.shape[0]:1,s=e.rank>1?e.shape[1]:1;if(n.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${s}.`);const o=t.size;if(0!==t.rank&&(1!==t.rank||o!==a))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${a}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(a,s,n,o);const i={sparseIndices:a,sparseValues:s,defaultValue:o},u={outputShape:n};return cs.runKernel(ar,i,u)}});var Qp={};e(Qp,"gatherND",(()=>Yp));const Yp=vs({gatherND_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=ys(t,"indices","gatherND","int32"),r={params:ys(e,"x","gatherND","string_or_numeric"),indices:n};return cs.runKernel(Lt,r)}});var Jp={};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Xp(e,t){if(null==t)return e.shape.slice();if(C(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)null==t[r]&&null!=e.shape[r]?n.push(e.shape[r]):n.push(t[r]);return n}return t}e(Jp,"dropout",(()=>Zp));const Zp=vs({dropout_:function(e,t,n,r){const a=ys(e,"x","dropout");if(S("float32"===a.dtype,(()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${a.dtype} tensor instead.`)),S(t>=0&&t<1,(()=>`rate must be a float in the range [0, 1), but got ${t}.`)),0===t)return e instanceof ja?a.clone():a;const s=Xp(a,n),o=1-t,i=zi(Sl(_i(jc(s,0,1,"float32",r),o)),o);return yu(a,i)}});var ed={};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function td(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function nd(e,t,n){const r=1-e%2,a=new Float32Array(e);for(let s=0;s<e;++s){const o=2*Math.PI*s/(e+r-1);a[s]=t-n*Math.cos(o)}return Np(a,"float32")}e(ed,"enclosingPowerOfTwo",(()=>td)),e(ed,"cosineWindow",(()=>nd));var rd={};e(rd,"inTopKAsync",(()=>ad));const ad=
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function(e,t,n=1){const r=ys(e,"predictions","inTopK"),a=ys(t,"targets","inTopK");S(r.rank>1,(()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`)),S(r.rank-1===a.rank,(()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${a.rank}`)),N(r.shape.slice(0,r.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const s=r.shape[r.shape.length-1];S(n>0&&n<=s,(()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${n}`));const o=await r.data(),i=await a.data(),[u,l]=[o.length/s,s],c=z("bool",u);for(let e=0;e<u;e++){const t=e*l,r=o.subarray(t,t+l),a=[];for(let e=0;e<r.length;e++)a.push({value:r[e],index:e});a.sort(((e,t)=>t.value-e.value)),c[e]=0;for(let t=0;t<n;t++)if(a[t].index===i[e]){c[e]=1;break}}return e!==r&&r.dispose(),t!==a&&a.dispose(),ks(c,a.shape,"bool")};var sd={};e(sd,"conv2d",(()=>pd)),e(sd,"depthwiseConv2d",(()=>hd)),e(sd,"matMul",(()=>md));const od=vs({conv2DBackpropFilter_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r,a,s="NHWC",o){let i=e;3===e.rank&&(i=du(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;3===u.rank&&(u=du(t,[1,t.shape[0],t.shape[1],t.shape[2]])),S(4===i.rank,(()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`)),S(4===u.rank,(()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`)),S(4===n.length,(()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`));const l="NHWC"===s?i.shape[3]:i.shape[1],c="NHWC"===s?u.shape[3]:u.shape[1];S(l===n[2],(()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`)),S(c===n[3],(()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${n[3]}).`)),pu("conv2dDerFilter",a,o);const p={x:i,dy:u},d={strides:r,pad:a,dataFormat:s,dimRoundingMode:o,filterShape:n};return cs.runKernel(st,p,d)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function id(e,t,n){if(null==n||"linear"===n)return e;if("relu"===n)return yu(e,xp(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function ud(e,t){let n=t;const r=function(e,t){const n=[];for(let r=0;r<t.length;r++){const a=e[e.length-r-1],s=t.length-r-1,o=t[s];(null==a||1===a&&o>1)&&n.unshift(s)}return n}(e.shape,t.shape);return r.length>0&&(n=ml(n,r)),du(n,e.shape)}function ld(e,t,n,r){if("linear"===t)return e;if("relu"===t)return Kc(e);if("elu"===t)return sl(e);if("relu6"===t)return Gc(e);if("prelu"===t)return Nc(e,n);if("leakyrelu"===t)return Ml(e,r);if("sigmoid"===t)return gu(e);throw new Error(`Unknown fused activation ${t}.`)}const cd=(e,t)=>!(e>0)||"linear"===t;const pd=vs({fusedConv2d_:function({x:e,filter:t,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(u=u||"linear",!1===cd(cs.state.gradientDepth,u)){S("NHWC"===a,(()=>`Error in fused conv2d: got dataFormat of ${a} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`));let p=Lu(e,t,n,r,a,s,o);return null!=i&&(p=_i(p,i)),ld(p,u,l,c)}const p=ys(e,"x","conv2d","float32"),d=ys(t,"filter","conv2d","float32");let f=p,h=!1;3===p.rank&&(h=!0,f=du(p,[1,p.shape[0],p.shape[1],p.shape[2]])),S(4===f.rank,(()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`)),S(4===d.rank,(()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`)),pu("fused conv2d",r,o);const m="NHWC"===a?f.shape[3]:f.shape[1];S(d.shape[2]===m,(()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`)),S(cu(n,s),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`));const y=au(f.shape,d.shape,n,s,r,o);let g,b;if(null!=i&&(g=ys(i,"bias","fused conv2d"),[g]=rs(g,p),"NHWC"===a?Xu(y.outShape,g.shape):(S(g.shape.length<=1,(()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${g.shape.length}.`)),S(0===g.shape.length||g.shape[0]===y.outChannels||1===g.shape[0],(()=>`Error in fused conv2d: bias shape (${g.shape}) is not compatible with the number of output channels (${y.outChannels})`)))),null!=l){const e=l.shape;if(S(e.length<=1||3===e.length,(()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`)),1===e.length)S(1===e[0]||e[0]===y.outChannels,(()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${y.outChannels}).`));else if(3===e.length)try{Xu(e,y.outShape)}catch(t){const n=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${y.outShape}).`;throw Error(n)}b=ys(l,"prelu weights","fused conv2d")}const v=(e,t)=>{S("NHWC"===a,(()=>`Error in gradient of fused conv2D: got dataFormat of ${a} but only NHWC is currently supported.`));const[o,i,l,c]=t,p=id(e,l,u);S(lu(s),(()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`));const d=[Fu(i.shape,p,o,n,r),od(i,p,o.shape,n,r)];if(null!=c){const e=ud(c,p);d.push(e)}return d},w={x:f,filter:d,bias:g,preluActivationWeights:b},x={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:u,leakyreluAlpha:c};if(null==i){const e=Fl(((e,t,n)=>{let r=cs.runKernel(Er,w,x);return n([t,e,r]),h&&(r=du(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:v}}));return e(f,d)}{const e=Fl(((e,t,n,r)=>{let a=cs.runKernel(Er,w,x);return r([t,e,a,n]),h&&(a=du(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:v}}));return e(f,d,g)}}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dd=vs({depthwiseConv2dNativeBackpropFilter_:function(e,t,n,r,a,s=[1,1],o){let i=e;3===e.rank&&(i=du(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;3===u.rank&&(u=du(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:i,dy:u},c={strides:r,pad:a,dimRoundingMode:o,dilations:s,filterShape:n};return cs.runKernel(gt,l,c)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fd=vs({depthwiseConv2dNativeBackpropInput_:function(e,t,n,r,a,s=[1,1],o){let i=t,u=!1;3===t.rank&&(u=!0,i=du(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:i,filter:n},c={strides:r,pad:a,dimRoundingMode:o,dilations:s,inputShape:e},p=cs.runKernel(bt,l,c);return u?du(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});const hd=vs({fusedDepthwiseConv2d_:function({x:e,filter:t,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(!1===cd(cs.state.gradientDepth,u)){let p=Qu(e,t,n,r,a,s,o);return null!=i&&(p=_i(p,i)),ld(p,u,l,c)}const p=ys(e,"x","depthwiseConv2d","float32"),d=ys(t,"filter","depthwiseConv2d","float32");let f=p,h=!1;3===p.rank&&(h=!0,f=du(p,[1,p.shape[0],p.shape[1],p.shape[2]])),S(4===f.rank,(()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`)),S(4===d.rank,(()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`)),S(f.shape[3]===d.shape[2],(()=>`Error in fused depthwiseConv2d: number of input channels (${f.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`)),null==s&&(s=[1,1]),S(cu(n,s),(()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`)),pu("fused depthwiseConv2d",r,o);const m=au(f.shape,d.shape,n,s,r,o,!0);let y,g;null!=i&&(y=ys(i,"bias","fused conv2d"),[y]=rs(y,p),Xu(m.outShape,y.shape)),null!=l&&(g=ys(l,"prelu weights","fused depthwiseConv2d"));const b=(e,t)=>{S(lu(s),(()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`));const[a,i,l,c]=t,p=id(e,l,u),d=fd(i.shape,p,a,n,r,s,o),f=dd(i,p,a.shape,n,r,s,o);if(null!=c){return[d,f,ud(y,p)]}return[d,f]},v={x:f,filter:d,bias:y,preluActivationWeights:g},w={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:o,activation:u,leakyreluAlpha:c};if(null==i){const e=Fl(((e,t,n)=>{let r=cs.runKernel(Tr,v,w);return n([t,e,r]),h&&(r=du(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:b}}));return e(f,d)}{const e=Fl(((e,t,n,r)=>{let a=cs.runKernel(Tr,v,w);return r([t,e,a,n]),h&&(a=du(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:b}}));return e(f,d,y)}}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const md=vs({fusedMatMul_:function({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:a,activation:s="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(!1===cd(cs.state.gradientDepth,s)){let u=mu(e,t,n,r);return null!=a&&(u=_i(u,a)),ld(u,s,o,i)}let u=ys(e,"a","fused matMul"),l=ys(t,"b","fused matMul");[u,l]=rs(u,l);const c=n?u.shape[u.rank-2]:u.shape[u.rank-1],p=r?l.shape[l.rank-1]:l.shape[l.rank-2],d=n?u.shape[u.rank-1]:u.shape[u.rank-2],f=r?l.shape[l.rank-2]:l.shape[l.rank-1],h=u.shape.slice(0,-2),m=l.shape.slice(0,-2),y=_(h),g=_(m);S(c===p,(()=>`Error in fused matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${u.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`));const b=Xu(u.shape.slice(0,-2),l.shape.slice(0,-2)).concat([d,f]),v=du(u,n?[y,c,d]:[y,d,c]),w=du(l,r?[g,f,p]:[g,p,f]);let x,k;null!=a&&(x=ys(a,"bias","fused matMul"),[x]=rs(x,u),Xu(b,x.shape)),null!=o&&(k=ys(o,"prelu weights","fused matMul"));const N=(e,t)=>{const[o,i,u,l]=t,c=id(du(e,u.shape),u,s);let p,d;if(n||r?!n&&r?(p=mu(c,i,!1,!1),d=mu(c,o,!0,!1)):n&&!r?(p=mu(i,c,!1,!0),d=mu(o,c,!1,!1)):(p=mu(i,c,!0,!0),d=mu(c,o,!0,!0)):(p=mu(c,i,!1,!0),d=mu(o,c,!0,!1)),null!=a){return[p,d,ud(l,c)]}return[p,d]},E={a:v,b:w,bias:x,preluActivationWeights:k},T={transposeA:n,transposeB:r,activation:s,leakyreluAlpha:i};if(null==a){const e=Fl(((e,t,n)=>{const r=cs.runKernel(Nr,E,T);return n([e,t,r]),{value:du(r,b),gradFunc:N}}));return e(v,w)}{const e=Fl(((e,t,n,r)=>{const a=cs.runKernel(Nr,E,T);return r([e,t,a,n]),{value:du(a,b),gradFunc:N}}));return e(v,w,x)}}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yd=vs({hammingWindow_:function(e){return nd(e,.54,.46)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gd=vs({hannWindow_:function(e){return nd(e,.5,.5)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bd=vs({frame_:function(e,t,n,r=!1,a=0){let s=0;const o=[];for(;s+t<=e.size;)o.push(bu(e,s,t)),s+=n;if(r)for(;s<e.size;){const r=s+t-e.size,i=Li([bu(e,s,t-r),Mu([r],a)]);o.push(i),s+=n}return 0===o.length?Ep([],[0,t]):du(Li(o),[o.length,t])}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vd=vs({stft_:function(e,t,n,r,a=gd){null==r&&(r=td(t));const s=bd(e,t,n),o=yu(s,a(t));return gp(o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wd=vs({cropAndResize_:function(e,t,n,r,a="bilinear",s=0){const o=ys(e,"image","cropAndResize"),i=ys(t,"boxes","cropAndResize","float32"),u=ys(n,"boxInd","cropAndResize","int32"),l=i.shape[0];S(4===o.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`)),S(2===i.rank&&4===i.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`)),S(1===u.rank&&u.shape[0]===l,(()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`)),S(2===r.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`)),S(r[0]>=1&&r[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${r}`)),S("bilinear"===a||"nearest"===a,(()=>`method must be bilinear or nearest, but was ${a}`));const c={image:o,boxes:i,boxInd:u},p={method:a,extrapolationValue:s,cropSize:r};return cs.runKernel(ft,c,p)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xd=vs({flipLeftRight_:function(e){const t=ys(e,"image","flipLeftRight","float32");S(4===t.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`));const n={image:t};return cs.runKernel(Mt,n,{})}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kd=vs({grayscaleToRGB_:function(e){const t=ys(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];S(t.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`)),S(1===r,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`));const a=new Array(t.rank);return a.fill(1,0,n),a[n]=3,xl(t,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sd=vs({rotateWithOffset_:function(e,t,n=0,r=.5){const a=ys(e,"image","rotateWithOffset","float32");S(4===a.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`));const s={image:a},o={radians:t,fillValue:n,center:r};return cs.runKernel(Sr,s,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(e,t,n,r,a,s){null==r&&(r=.5),null==a&&(a=Number.NEGATIVE_INFINITY),null==s&&(s=0);const o=e.shape[0];return n=Math.min(n,o),S(0<=r&&r<=1,(()=>`iouThreshold must be in [0, 1], but was '${r}'`)),S(2===e.rank,(()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`)),S(4===e.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`)),S(1===t.rank,(()=>"scores must be a 1D tensor")),S(t.shape[0]===o,(()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`)),S(0<=s&&s<=1,(()=>`softNmsSigma must be in [0, 1], but was '${s}'`)),{maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:s}}const Ed=vs({nonMaxSuppression_:function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){const s=ys(e,"boxes","nonMaxSuppression","float32"),o=ys(t,"scores","nonMaxSuppression","float32"),i=Nd(s,o,n,r,a),u={maxOutputSize:n=i.maxOutputSize,iouThreshold:r=i.iouThreshold,scoreThreshold:a=i.scoreThreshold};return cs.runKernel(yn,{boxes:s,scores:o},u)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Td(e,t,n){const r=function(e,t,n){return function(e,t,n){let r=0,a=e.length,s=0,o=!1;for(;r<a;){s=r+(a-r>>>1);const i=n(t,e[s]);i>0?r=s+1:(a=s,o=!i)}return o?r:-r-1}(e,t,n||_d)}(e,t,n),a=r<0?-(r+1):r;e.splice(a,0,t)}function _d(e,t){return e>t?1:e<t?-1:0}function Id(e,t,n,r,a){return Md(e,t,n,r,a,0)}function Cd(e,t,n,r,a,s){return Md(e,t,n,r,a,0,!1,s,!0)}function Od(e,t,n,r,a,s){return Md(e,t,n,r,a,s,!0)}function Md(e,t,n,r,a,s,o=!1,i=!1,u=!1){const l=[];for(let e=0;e<t.length;e++)t[e]>a&&l.push({score:t[e],boxIndex:e,suppressBeginIndex:0});l.sort($d);const c=s>0?-.5/s:0,p=[],d=[];for(;p.length<n&&l.length>0;){const t=l.pop(),{score:n,boxIndex:s,suppressBeginIndex:o}=t;if(n<a)break;let i=!1;for(let n=p.length-1;n>=o;--n){const o=Ad(e,s,p[n]);if(o>=r){i=!0;break}if(t.score=t.score*Dd(r,c,o),t.score<=a)break}t.suppressBeginIndex=p.length,i||(t.score===n?(p.push(s),d.push(t.score)):t.score>a&&Td(l,t,$d))}const f=p.length,h=n-f;i&&h>0&&(p.push(...new Array(h).fill(0)),d.push(...new Array(h).fill(0)));const m={selectedIndices:p};return o&&(m.selectedScores=d),u&&(m.validOutputs=f),m}function Ad(e,t,n){const r=e.subarray(4*t,4*t+4),a=e.subarray(4*n,4*n+4),s=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(a[0],a[2]),c=Math.min(a[1],a[3]),p=Math.max(a[0],a[2]),d=Math.max(a[1],a[3]),f=(i-s)*(u-o),h=(p-l)*(d-c);if(f<=0||h<=0)return 0;const m=Math.max(s,l),y=Math.max(o,c),g=Math.min(i,p),b=Math.min(u,d),v=Math.max(g-m,0)*Math.max(b-y,0);return v/(f+h-v)}function Dd(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function $d(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}const Pd=async function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){const s=ys(e,"boxes","nonMaxSuppressionAsync"),o=ys(t,"scores","nonMaxSuppressionAsync"),i=Nd(s,o,n,r,a);n=i.maxOutputSize,r=i.iouThreshold,a=i.scoreThreshold;const u=await Promise.all([s.data(),o.data()]),l=u[0],c=u[1],{selectedIndices:p}=Id(l,c,n,r,a);return s!==e&&s.dispose(),o!==t&&o.dispose(),Np(p,"int32")};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ld=vs({nonMaxSuppressionWithScore_:function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=ys(e,"boxes","nonMaxSuppression"),i=ys(t,"scores","nonMaxSuppression"),u=Nd(o,i,n,r,a,s),l={boxes:o,scores:i},c={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:a=u.scoreThreshold,softNmsSigma:s=u.softNmsSigma},p=cs.runKernel(bn,l,c);return{selectedIndices:p[0],selectedScores:p[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rd=async function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){const o=ys(e,"boxes","nonMaxSuppressionAsync"),i=ys(t,"scores","nonMaxSuppressionAsync"),u=Nd(o,i,n,r,a,s);n=u.maxOutputSize,r=u.iouThreshold,a=u.scoreThreshold,s=u.softNmsSigma;const l=await Promise.all([o.data(),i.data()]),c=l[0],p=l[1],{selectedIndices:d,selectedScores:f}=Od(c,p,n,r,a,s);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:Np(d,"int32"),selectedScores:Np(f)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fd=vs({nonMaxSuppressionPadded_:function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=ys(e,"boxes","nonMaxSuppression"),i=ys(t,"scores","nonMaxSuppression"),u=Nd(o,i,n,r,a,null),l={boxes:o,scores:i},c={maxOutputSize:u.maxOutputSize,iouThreshold:u.iouThreshold,scoreThreshold:u.scoreThreshold,padToMaxOutputSize:s},p=cs.runKernel(gn,l,c);return{selectedIndices:p[0],validOutputs:p[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zd=async function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){const o=ys(e,"boxes","nonMaxSuppressionAsync"),i=ys(t,"scores","nonMaxSuppressionAsync"),u=Nd(o,i,n,r,a,null),l=u.maxOutputSize,c=u.iouThreshold,p=u.scoreThreshold,[d,f]=await Promise.all([o.data(),i.data()]),{selectedIndices:h,validOutputs:m}=Cd(d,f,l,c,p,s);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:Np(h,"int32"),validOutputs:dl(m,"int32")}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bd=vs({resizeBilinear_:function(e,t,n=!1,r=!1){const a=ys(e,"images","resizeBilinear");S(3===a.rank||4===a.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${a.rank}.`)),S(2===t.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`)),S(!1===r||!1===n,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let s=a,o=!1;3===a.rank&&(o=!0,s=du(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const[]=t,i={images:s},u={alignCorners:n,halfPixelCenters:r,size:t},l=cs.runKernel($n,i,u);return o?du(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ud=vs({resizeNearestNeighbor_:function(e,t,n=!1,r=!1){const a=ys(e,"images","resizeNearestNeighbor");S(3===a.rank||4===a.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${a.rank}.`)),S(2===t.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`)),S("float32"===a.dtype||"int32"===a.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),S(!1===r||!1===n,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let s=a,o=!1;3===a.rank&&(o=!0,s=du(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const[]=t,i={images:s},u={alignCorners:n,halfPixelCenters:r,size:t},l=cs.runKernel(Dn,i,u);return o?du(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vd=vs({threshold_:function(e,t="binary",n=!1,r=.5){const a=ys(e,"image","threshold"),s=a.shape[0]*a.shape[1];let o,i,u,l,c=yu(Np([r]),255);if(S(3===a.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${a.rank}.`)),S(3===a.shape[2]||1===a.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${a.shape[2]}.`)),S("int32"===a.dtype||"float32"===a.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${a.dtype}.`)),S("otsu"===t||"binary"===t,(()=>`Method must be binary or otsu, but was ${t}`)),3===a.shape[2]){[o,i,u]=yp(a,[1,1,1],-1);const e=yu(o,.2989),t=yu(i,.587),n=yu(u,.114);l=_i(_i(e,t),n)}else l=e;if("otsu"===t){c=function(e,t){let n,r,a,s,o,i,u=Np([-1]),l=Np([0]),c=Np([0]);for(let p=0;p<e.size-1;p++){n=bu(e,0,p+1),r=bu(e,p+1),o=zi(ml(n),t),i=zi(ml(r),t);const d=ml(yu(n,Hc(0,n.size)));a=zi(d,ml(n));const f=Mu(r.shape,n.size),h=_i(Hc(0,r.size),f),m=yu(r,h);s=zi(ml(m),ml(r));const y=Vl(a,s),g=Vl(a,s),b=yu(o,i);c=yu(yu(b,y),g);const v=El(c,l);l=el(v,c,l),u=el(v,Np([p]),u)}return u}(_u(Ni(ep(l),"int32"),ks([]),256),s)}const p=n?Dl(l,c):El(l,c);return Ni(yu(p,255),"int32")}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jd=vs({transform_:function(e,t,n="nearest",r="constant",a=0,s){const o=ys(e,"image","transform","float32"),i=ys(t,"transforms","transform","float32");S(4===o.rank,(()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`)),S(2===i.rank&&(i.shape[0]===o.shape[0]||1===i.shape[0])&&8===i.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),S(null==s||2===s.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`));const u={image:o,transforms:i},l={interpolation:n,fillMode:r,fillValue:a,outputShape:s};return cs.runKernel(mr,u,l)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hd=vs({bandPart_:function(e,t,n){S(t%1==0,(()=>`bandPart(): numLower must be an integer, got ${t}.`)),S(n%1==0,(()=>`bandPart(): numUpper must be an integer, got ${n}.`));const r=ys(e,"a","bandPart");S(r.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`));const a=r.shape,[s,o]=r.shape.slice(-2);if(!(t<=s))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${s}).`);if(!(n<=o))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);t<0&&(t=s),n<0&&(n=o);const i=du(Hc(0,s,1,"int32"),[-1,1]),u=Hc(0,o,1,"int32"),l=Vl(i,u),c=Wl(Dl(l,dl(+t,"int32")),Tl(l,dl(-n,"int32"))),p=ac([s,o],r.dtype);return du(wp(Dp(du(r,[-1,s,o])).map((e=>el(c,e,p)))),a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wd=vs({gramSchmidt_:function(e){let t;if(Array.isArray(e)){t=!1,S(null!=e&&e.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const n=e[0].shape[0];for(let t=1;t<e.length;++t)S(e[t].shape[0]===n,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`))}else t=!0,e=yp(e,e.shape[0],0).map((e=>vp(e,[0])));S(e.length<=e[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`));const n=[],r=e;for(let t=0;t<e.length;++t)n.push(cs.tidy((()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){const t=yu(ml(yu(n[r],e)),n[r]);e=Vl(e,t)}return zi(e,gl(e,"euclidean"))})));return t?wp(n,0):n}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qd(e,t=!1){return cs.tidy((()=>{S(2===e.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`));const n=e.shape[0],r=e.shape[1];let a=kl(n),s=Ei(e);const o=Ep([[1]],[1,1]);let i=Ei(o);const u=n>=r?r:n;for(let e=0;e<u;++e){const t=s,u=i,l=a;[i,s,a]=cs.tidy((()=>{const t=bu(s,[e,e],[n-e,1]),u=gl(t),l=bu(s,[e,e],[1,1]),c=el(El(l,0),Ep([[-1]]),Ep([[1]])),p=Vl(l,yu(c,u)),d=zi(t,p);i=1===d.shape[0]?Ei(o):Li([o,bu(d,[1,0],[d.shape[0]-1,d.shape[1]])],0);const f=zl(zi(mu(c,p),u)),h=bu(s,[e,0],[n-e,r]),m=yu(f,i),y=Up(i);if(0===e)s=Vl(h,mu(m,mu(y,h)));else{const t=Vl(h,mu(m,mu(y,h)));s=Li([bu(s,[0,0],[e,r]),t],0)}const g=Up(m),b=bu(a,[0,e],[n,a.shape[1]-e]);if(0===e)a=Vl(b,mu(mu(b,i),g));else{const t=Vl(b,mu(mu(b,i),g));a=Li([bu(a,[0,0],[n,e]),t],1)}return[i,s,a]})),as([t,u,l]).forEach((e=>e.dispose()))}return!t&&n>r&&(a=bu(a,[0,0],[n,r]),s=bu(s,[0,0],[r,r])),[a,s]}))}const Kd=vs({qr_:function(e,t=!1){if(S(e.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`)),2===e.rank)return qd(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce(((e,t)=>e*t)),r=Dp(du(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),a=[],s=[];r.forEach((e=>{const[n,r]=qd(e,t);a.push(n),s.push(r)}));return[du(wp(a,0),e.shape),du(wp(s,0),e.shape)]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Gd,Qd;(Qd=Gd||(Gd={}))[Qd.NONE=0]="NONE",Qd[Qd.MEAN=1]="MEAN",Qd[Qd.SUM=2]="SUM",Qd[Qd.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";const Yd=vs({computeWeightedLoss_:function(e,t,n=Gd.SUM_BY_NONZERO_WEIGHTS){const r=ys(e,"losses","computeWeightedLoss");let a=null;null!=t&&(a=ys(t,"weights","computeWeightedLoss"));const s=null==a?r:yu(r,a);if(n===Gd.NONE)return s;if(n===Gd.SUM)return ml(s);if(n===Gd.MEAN){if(null==a)return rc(s);{const e=r.size/a.size,t=zi(ml(s),ml(a));return e>1?zi(t,dl(e)):t}}if(n===Gd.SUM_BY_NONZERO_WEIGHTS){if(null==a)return zi(ml(s),dl(r.size));{const e=yu(a,sc(r.shape)),t=Ni(ml(fc(e,dl(0))),"float32");return zi(ml(s),t)}}throw Error(`Unknown reduction: ${n}`)}});const Jd=vs({absoluteDifference_:function(e,t,n,r=Gd.SUM_BY_NONZERO_WEIGHTS){const a=ys(e,"labels","absoluteDifference"),s=ys(t,"predictions","absoluteDifference");let o=null;null!=n&&(o=ys(n,"weights","absoluteDifference")),N(a.shape,s.shape,"Error in absoluteDifference: ");const i=Wi(Vl(a,s));return Yd(i,o,r)}});const Xd=vs({cosineDistance_:function(e,t,n,r,a=Gd.SUM_BY_NONZERO_WEIGHTS){const s=ys(e,"labels","cosineDistance"),o=ys(t,"predictions","cosineDistance");let i=null;null!=r&&(i=ys(r,"weights","cosineDistance")),N(s.shape,o.shape,"Error in cosineDistance: ");const u=dl(1),l=Vl(u,ml(yu(s,o),n,!0));return Yd(l,i,a)}});const Zd=vs({hingeLoss_:function(e,t,n,r=Gd.SUM_BY_NONZERO_WEIGHTS){let a=ys(e,"labels","hingeLoss");const s=ys(t,"predictions","hingeLoss");let o=null;null!=n&&(o=ys(n,"weights","hingeLoss")),N(a.shape,s.shape,"Error in hingeLoss: ");const i=dl(1);a=Vl(yu(dl(2),a),i);const u=Kc(Vl(i,yu(a,s)));return Yd(u,o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ef=vs({huberLoss_:function(e,t,n,r=1,a=Gd.SUM_BY_NONZERO_WEIGHTS){const s=ys(e,"labels","huberLoss"),o=ys(t,"predictions","huberLoss");let i=null;null!=n&&(i=ys(n,"weights","huberLoss")),N(s.shape,o.shape,"Error in huberLoss: ");const u=dl(r),l=Wi(Vl(o,s)),c=ic(l,u),p=Vl(l,c),d=_i(yu(dl(.5),hl(c)),yu(u,p));return Yd(d,i,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tf=vs({logLoss_:function(e,t,n,r=1e-7,a=Gd.SUM_BY_NONZERO_WEIGHTS){const s=ys(e,"labels","logLoss"),o=ys(t,"predictions","logLoss");let i=null;null!=n&&(i=ys(n,"weights","logLoss")),N(s.shape,o.shape,"Error in logLoss: ");const u=dl(1),l=dl(r),c=zl(yu(s,Ll(_i(o,l)))),p=yu(Vl(u,s),Ll(_i(Vl(u,o),l))),d=Vl(c,p);return Yd(d,i,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nf=vs({meanSquaredError_:function(e,t,n,r=Gd.SUM_BY_NONZERO_WEIGHTS){const a=ys(e,"labels","meanSquaredError"),s=ys(t,"predictions","meanSquaredError");let o=null;null!=n&&(o=ys(n,"weights","meanSquaredError")),N(a.shape,s.shape,"Error in meanSquaredError: ");const i=bp(a,s);return Yd(i,o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rf=vs({sigmoidCrossEntropy_:function(e,t,n,r=0,a=Gd.SUM_BY_NONZERO_WEIGHTS){let s=ys(e,"multiClassLabels","sigmoidCrossEntropy");const o=ys(t,"logits","sigmoidCrossEntropy");let i=null;if(null!=n&&(i=ys(n,"weights","sigmoidCrossEntropy")),N(s.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const e=dl(r),t=dl(1),n=dl(.5);s=_i(yu(s,Vl(t,e)),yu(n,e))}const u=function(e,t){const n=ys(e,"labels","sigmoidCrossEntropyWithLogits"),r=ys(t,"logits","sigmoidCrossEntropyWithLogits");N(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const a=Kc(r),s=yu(r,n),o=Rl(vl(zl(Wi(r))));return _i(Vl(a,s),o)}(s,o);return Yd(u,i,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const af=vs({softmaxCrossEntropy_:function(e,t,n,r=0,a=Gd.SUM_BY_NONZERO_WEIGHTS){let s=ys(e,"onehotLabels","softmaxCrossEntropy");const o=ys(t,"logits","softmaxCrossEntropy");let i=null;if(null!=n&&(i=ys(n,"weights","softmaxCrossEntropy")),N(s.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const e=dl(r),t=dl(1),n=dl(s.shape[1]);s=_i(yu(s,Vl(t,e)),zi(e,n))}const u=function(e,t,n=-1){if(-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);const r=Fl(((e,t,r)=>{const a=Hl(t,[n],!0),s=Vl(Ni(t,"float32"),a);r([e,s]);const o=zl(yu(s,e));return{value:ml(o,[n]),gradFunc:(e,t)=>{const[r,a]=t,s=ul(e.shape,[n]);return[yu(du(e,s),Vl(Ni(r,"float32"),vl(a))),yu(du(e,s),Vl(vl(a),Ni(r,"float32")))]}}}));return r(e,t)}(s,o);return Yd(u,i,a)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sf=vs({sparseFillEmptyRows_:function(e,t,n,r){const a=ys(e,"indices","sparseFillEmptyRows","int32"),s=ys(t,"values","sparseFillEmptyRows"),o=ys(n,"denseShape","sparseFillEmptyRows","int32"),i=ys(r,"defaultValue","sparseFillEmptyRows",s.dtype);if(2!==a.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${a.shape}`);if(1!==s.rank)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(1!==o.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(0!==i.rank)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const u={indices:a,values:s,denseShape:o,defaultValue:i},l=cs.runKernel(er,u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const of=vs({sparseReshape_:function(e,t,n){const r=ys(e,"inputIndices","sparseReshape","int32"),a=ys(t,"inputShape","sparseReshape","int32"),s=ys(n,"newShape","sparseReshape","int32");if(2!==r.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${r.shape}`);if(1!==a.rank)throw new Error(`Input shape should be Tensor1D but received shape ${a.shape}`);if(1!==s.rank)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);const o={inputIndices:r,inputShape:a,newShape:s},i=cs.runKernel(tr,o);return{outputIndices:i[0],outputShape:i[1]}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uf=vs({sparseSegmentMean_:function(e,t,n){const r=ys(e,"data","sparseSegmentMean"),a=ys(t,"indices","sparseSegmentMean","int32"),s=ys(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${a.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return cs.runKernel(nr,o)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lf=vs({sparseSegmentSum_:function(e,t,n){const r=ys(e,"data","sparseSegmentSum"),a=ys(t,"indices","sparseSegmentSum","int32"),s=ys(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${a.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${s.shape}`);const o={data:r,indices:a,segmentIds:s};return cs.runKernel(rr,o)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cf=vs({stringNGrams_:function(e,t,n,r,a,s,o,i){const u=ys(e,"data","stringNGrams","string");if("string"!==u.dtype)throw new Error("Data must be of datatype string");if(1!==u.shape.length)throw new Error(`Data must be a vector, saw: ${u.shape}`);const l=ys(t,"dataSplits","stringNGrams");if("int32"!==l.dtype)throw new Error("Data splits must be of datatype int32");const c={separator:n,nGramWidths:r,leftPad:a,rightPad:s,padWidth:o,preserveShortSequences:i},p={data:u,dataSplits:l},d=cs.runKernel(ir,p,c);return{nGrams:d[0],nGramsSplits:d[1]}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pf=vs({stringSplit_:function(e,t,n=!0){const r=ys(e,"input","stringSplit","string"),a=ys(t,"delimiter","stringSplit","string");if(1!==r.rank)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==a.rank)throw new Error(`Delimiter should be a scalar but received shape ${a.shape}`);const s={skipEmpty:n},o={input:r,delimiter:a},i=cs.runKernel(ur,o,s);return{indices:i[0],values:i[1],shape:i[2]}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const df=vs({stringToHashBucketFast_:function(e,t){const n=ys(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const a={input:n};return cs.runKernel(lr,a,r)}}),ff={fft:fp,ifft:hp,rfft:gp,irfft:mp},hf={hammingWindow:yd,hannWindow:gd,frame:bd,stft:vd},mf={flipLeftRight:xd,grayscaleToRGB:kd,resizeNearestNeighbor:Ud,resizeBilinear:Bd,rotateWithOffset:Sd,cropAndResize:wd,nonMaxSuppression:Ed,nonMaxSuppressionAsync:Pd,nonMaxSuppressionWithScore:Ld,nonMaxSuppressionWithScoreAsync:Rd,nonMaxSuppressionPadded:Fd,nonMaxSuppressionPaddedAsync:zd,threshold:Vd,transform:jd},yf={bandPart:Hd,gramSchmidt:Wd,qr:Kd},gf={absoluteDifference:Jd,computeWeightedLoss:Yd,cosineDistance:Xd,hingeLoss:Zd,huberLoss:ef,logLoss:tf,meanSquaredError:nf,sigmoidCrossEntropy:rf,softmaxCrossEntropy:af},bf={sparseFillEmptyRows:sf,sparseReshape:of,sparseSegmentMean:uf,sparseSegmentSum:lf},vf={stringNGrams:cf,stringSplit:pf,stringToHashBucketFast:df};r(Hi,Fp),r(Hi,Bp),r(Hi,il),r(Hi,Vp),r(Hi,Hp),r(Hi,Ql),r(Hi,Kp),r(Hi,Qp),r(Hi,Jp),r(Hi,ed),r(Hi,rd);var wf={};e(wf,"copyModel",(()=>bi)),e(wf,"listModels",(()=>yi)),e(wf,"moveModel",(()=>vi)),e(wf,"removeModel",(()=>gi)),e(wf,"browserFiles",(()=>Nf)),e(wf,"browserHTTPRequest",(()=>Df)),e(wf,"concatenateArrayBuffers",(()=>Ao)),e(wf,"decodeWeights",(()=>To)),e(wf,"encodeWeights",(()=>Eo)),e(wf,"fromMemory",(()=>Rf)),e(wf,"fromMemorySync",(()=>Ff)),e(wf,"getLoadHandlers",(()=>Ho)),e(wf,"getModelArtifactsForJSON",(()=>Lo)),e(wf,"getModelArtifactsForJSONSync",(()=>Po)),e(wf,"getModelArtifactsInfoForJSON",(()=>Ro)),e(wf,"getSaveHandlers",(()=>jo)),e(wf,"getWeightSpecs",(()=>Fo)),e(wf,"http",(()=>Af)),e(wf,"isHTTPScheme",(()=>Of)),e(wf,"loadWeights",(()=>_f)),e(wf,"registerLoadRouter",(()=>Vo)),e(wf,"registerSaveRouter",(()=>Uo)),e(wf,"weightsLoaderFactory",(()=>If)),e(wf,"withSaveHandler",(()=>zf)),e(wf,"withSaveHandlerSync",(()=>Bf));function xf(e){return new Promise((e=>setTimeout(e))).then(e)}class kf{constructor(e){if(!de().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(kf.URL_SCHEME)&&(e=e.slice(kf.URL_SCHEME.length)),null!=e&&0!==e.length||(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}async save(e){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const n=$o(e,[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}]),r=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),a=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=r,await xf((()=>a.dispatchEvent(new MouseEvent("click")))),null!=e.weightData){const e=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=t,await xf((()=>e.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:Ro(e)}}}}kf.URL_SCHEME="downloads://";class Sf{constructor(e){if(null==e||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise(((e,t)=>{const n=new FileReader;n.onload=n=>{const r=JSON.parse(n.target.result),a=r.modelTopology;if(null==a)return void t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));if(null==r.weightsManifest)return void t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));if(0===this.weightsFiles.length)return void e({modelTopology:a});const s=Lo(r,(e=>this.loadWeights(e)));e(s)},n.onerror=e=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)}))}loadWeights(e){const t=[],n=[];for(const r of e)t.push(...r.weights),n.push(...r.paths);const r=this.checkManifestAndWeightFiles(e),a=n.map((e=>this.loadWeightsFile(e,r[e])));return Promise.all(a).then((e=>[t,Ao(e)]))}loadWeightsFile(e,t){return new Promise(((n,r)=>{const a=new FileReader;a.onload=e=>{const t=e.target.result;n(t)},a.onerror=t=>r(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(t)}))}checkManifestAndWeightFiles(e){const t=[],n=this.weightsFiles.map((e=>Do(e.name))),r={};for(const a of e)a.paths.forEach((e=>{const a=Do(e);if(-1!==t.indexOf(a))throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(t.push(a),-1===n.indexOf(a))throw new Error(`Weight file with basename '${a}' is not provided.`);r[e]=this.weightsFiles[n.indexOf(a)]}));if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}function Nf(e){return new Sf(e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ef(e,t,n,r){!function(e){S(null!=e&&Array.isArray(e)&&e.length>0,(()=>"promises must be a none empty array"))}(e),function(e,t){S(e>=0&&e<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`)),S(t>=0&&t<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`)),S(t>=e,(()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`))}(n=null==n?0:n,r=null==r?1:r);let a=0;return Promise.all(e.map((s=>(s.then((s=>{const o=n+ ++a/e.length*(r-n);return t(o),s})),s))))}async function Tf(e,t){null==t&&(t={});const n=null==t.fetchFunc?de().platform.fetch:t.fetchFunc,r=e.map((e=>n(e,t.requestInit,{isBinary:!0}))),a=(null==t.onProgress?await Promise.all(r):await Ef(r,t.onProgress,0,.5)).map((e=>e.arrayBuffer()));return null==t.onProgress?await Promise.all(a):await Ef(a,t.onProgress,.5,1)}async function _f(e,t="",n,r){return If((e=>Tf(e,{requestInit:r})))(e,t,n)}function If(e){return async(t,n="",r)=>{const a=t.map((()=>!1)),s={},o=null!=r?r.map((()=>!1)):[],i=[];if(t.forEach(((e,t)=>{let n=0;e.weights.forEach((e=>{const u="quantization"in e?e.quantization.dtype:e.dtype,l=Ss[u]*_(e.shape),c=()=>{a[t]=!0,null==s[t]&&(s[t]=[]),s[t].push({manifestEntry:e,groupOffset:n,sizeBytes:l})};null!=r?r.forEach(((t,n)=>{t===e.name&&(c(),o[n]=!0)})):c(),i.push(e.name),n+=l}))})),!o.every((e=>e))){const e=r.filter(((e,t)=>!o[t]));throw new Error(`Could not find weights in manifest with names: ${e.join(", ")}. \nManifest JSON has weights with names: ${i.join(", ")}.`)}const u=a.reduce(((e,t,n)=>(t&&e.push(n),e)),[]),l=[];u.forEach((e=>{t[e].paths.forEach((e=>{const t=n+(n.endsWith("/")?"":"/")+e;l.push(t)}))}));const c=await e(l),p={};let d=0;return u.forEach((e=>{const n=t[e].paths.length;let r=0;for(let e=0;e<n;e++)r+=c[d+e].byteLength;const a=new ArrayBuffer(r),o=new Uint8Array(a);let i=0;for(let e=0;e<n;e++){const t=new Uint8Array(c[d+e]);o.set(t,i),i+=t.byteLength}s[e].forEach((e=>{const t=To(a.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(const e in t)p[e]=t[e]})),d+=n})),p}}Bo.registerSaveRouter((e=>de().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(kf.URL_SCHEME)?function(e="model"){return new kf(e)}(e.slice(kf.URL_SCHEME.length)):null));class Cf{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?(S("function"==typeof t.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=t.fetchFunc):this.fetch=de().platform.fetch,S(null!=e&&e.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(e)&&S(2===e.length,(()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`)),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const n=$o(e,[{paths:["./model.weights.bin"],weights:e.weightSpecs}]);t.body.append("model.json",new Blob([JSON.stringify(n)],{type:"application/json"}),"model.json"),null!=e.weightData&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin");const r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:Ro(e),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async load(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch(e){let t=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t)}const n=t.modelTopology,r=t.weightsManifest;if(null==n&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Lo(t,(e=>this.loadWeights(e)))}async loadWeights(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),a=n>t?e.substring(n):"";return[r+"/",a]}(t),a=this.weightPathPrefix||n,s=Fo(e),o=[],i=[];for(const t of e)for(const e of t.paths)null!=this.weightUrlConverter?i.push(this.weightUrlConverter(e)):o.push(a+e+r);this.weightUrlConverter&&o.push(...await Promise.all(i));return[s,Ao(await Tf(o,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress}))]}}function Of(e){return null!=e.match(Cf.URL_SCHEME_REGEX)}Cf.URL_SCHEME_REGEX=/^https?:\/\//;const Mf=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc))return null;{let n=!0;if(n=Array.isArray(e)?e.every((e=>Of(e))):Of(e),n)return Af(e,t)}return null};function Af(e,t){return new Cf(e,t)}function Df(e,t){return Af(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Bo.registerSaveRouter(Mf),Bo.registerLoadRouter(Mf);class $f{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class Pf{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class Lf{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function Rf(e,t,n,r){return new Lf(Ff(...arguments))}function Ff(e,t,n,r){if(1===arguments.length){return null!=e.modelTopology||null!=e.weightSpecs?new $f(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new $f({modelTopology:e}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new $f({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r})}function zf(e){return new Pf(e)}function Bf(e){return new Pf(e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var Uf,Vf,jf;de().registerFlag("KEEP_INTERMEDIATE_TENSORS",(()=>!1),(e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")})),(Vf=Uf||(Uf={}))[Vf.DT_INVALID=0]="DT_INVALID",Vf[Vf.DT_FLOAT=1]="DT_FLOAT",Vf[Vf.DT_DOUBLE=2]="DT_DOUBLE",Vf[Vf.DT_INT32=3]="DT_INT32",Vf[Vf.DT_UINT8=4]="DT_UINT8",Vf[Vf.DT_INT16=5]="DT_INT16",Vf[Vf.DT_INT8=6]="DT_INT8",Vf[Vf.DT_STRING=7]="DT_STRING",Vf[Vf.DT_COMPLEX64=8]="DT_COMPLEX64",Vf[Vf.DT_INT64=9]="DT_INT64",Vf[Vf.DT_BOOL=10]="DT_BOOL",Vf[Vf.DT_QINT8=11]="DT_QINT8",Vf[Vf.DT_QUINT8=12]="DT_QUINT8",Vf[Vf.DT_QINT32=13]="DT_QINT32",Vf[Vf.DT_BFLOAT16=14]="DT_BFLOAT16",Vf[Vf.DT_QINT16=15]="DT_QINT16",Vf[Vf.DT_QUINT16=16]="DT_QUINT16",Vf[Vf.DT_UINT16=17]="DT_UINT16",Vf[Vf.DT_COMPLEX128=18]="DT_COMPLEX128",Vf[Vf.DT_HALF=19]="DT_HALF",Vf[Vf.DT_RESOURCE=20]="DT_RESOURCE",Vf[Vf.DT_VARIANT=21]="DT_VARIANT",Vf[Vf.DT_UINT32=22]="DT_UINT32",Vf[Vf.DT_UINT64=23]="DT_UINT64",Vf[Vf.DT_FLOAT_REF=101]="DT_FLOAT_REF",Vf[Vf.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",Vf[Vf.DT_INT32_REF=103]="DT_INT32_REF",Vf[Vf.DT_UINT8_REF=104]="DT_UINT8_REF",Vf[Vf.DT_INT16_REF=105]="DT_INT16_REF",Vf[Vf.DT_INT8_REF=106]="DT_INT8_REF",Vf[Vf.DT_STRING_REF=107]="DT_STRING_REF",Vf[Vf.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",Vf[Vf.DT_INT64_REF=109]="DT_INT64_REF",Vf[Vf.DT_BOOL_REF=110]="DT_BOOL_REF",Vf[Vf.DT_QINT8_REF=111]="DT_QINT8_REF",Vf[Vf.DT_QUINT8_REF=112]="DT_QUINT8_REF",Vf[Vf.DT_QINT32_REF=113]="DT_QINT32_REF",Vf[Vf.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",Vf[Vf.DT_QINT16_REF=115]="DT_QINT16_REF",Vf[Vf.DT_QUINT16_REF=116]="DT_QUINT16_REF",Vf[Vf.DT_UINT16_REF=117]="DT_UINT16_REF",Vf[Vf.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",Vf[Vf.DT_HALF_REF=119]="DT_HALF_REF",Vf[Vf.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",Vf[Vf.DT_VARIANT_REF=121]="DT_VARIANT_REF",Vf[Vf.DT_UINT32_REF=122]="DT_UINT32_REF",Vf[Vf.DT_UINT64_REF=123]="DT_UINT64_REF",function(e){let t;!function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"}(t=e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))}(jf||(jf={}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Hf={};function Wf(e){return Hf[e]}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qf(e,t,n,r,a){const s=t.inputParams[e];if(s&&void 0!==s.inputIndexStart){const e=s.inputIndexStart,o=0===s.inputIndexEnd?void 0:void 0===s.inputIndexEnd?e+1:s.inputIndexEnd;if("tensor"===s.type)return Kf(t.inputNames[s.inputIndexStart],n,r,a);if("tensors"===s.type){return t.inputNames.slice(e,o).map((e=>Kf(e,n,r,a)))}const i=Kf(t.inputNames.slice(e)[0],n,r,a),u=i.dataSync();return"number"===s.type?u[0]:$d2cc08cc2aa8032f$exports.util.toNestedArray(i.shape,u)}const o=t.attrParams[e];return o&&o.value}function Kf(e,t,n,r){const[a,s]=Jf(e);if(null!=r){const e=r.getHashTableHandleByName(a);if(null!=e)return e}const o=n.currentContextIds.find((e=>!!t[Yf(a,e)]));return void 0!==o?t[Yf(a,o)][s]:void 0}function Gf(e,t,n){return t[Yf(e,n.currentContextId)]}function Qf(e,t){const[n,r,a]=Jf(e);return[Yf(n,t&&t.currentContextId),r,a]}function Yf(e,t){return t?`${e}-${t}`:e}function Jf(e){const t=e.split(":");if(1===t.length)return[e,0,void 0];const n=t[0],r=3===t.length?t[1]:void 0;return[n,Number(t[t.length-1]),r]}function Xf(e,t,n){let r=qf("pad",e,t,n);if("explicit"===r){r=qf("explicitPaddings",e,t,n);const a=[[0,0],[0,0],[0,0],[0,0]];for(let e=0;e<4;e++)a[e][0]=r[2*e],a[e][1]=r[2*e+1];return a}return r}function Zf(e){return e.kept?e:Ei(e)}var eh={};e(eh,"json",(()=>th));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const th=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var nh={};e(nh,"json",(()=>rh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const rh=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var ah={};e(ah,"json",(()=>sh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const sh=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var oh={};e(oh,"json",(()=>ih));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ih=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var uh={};e(uh,"json",(()=>lh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const lh=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var ch={};e(ch,"json",(()=>ph));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ph=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var dh={};e(dh,"json",(()=>fh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const fh=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var hh={};e(hh,"json",(()=>mh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const mh=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var yh={};e(yh,"json",(()=>gh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const gh=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}];var bh={};e(bh,"json",(()=>vh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const vh=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var wh={};e(wh,"json",(()=>xh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const xh=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var kh={};e(kh,"json",(()=>Sh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Sh=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}];var Nh={};e(Nh,"json",(()=>Eh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Eh=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}];var Th={};e(Th,"json",(()=>_h));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _h=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var Ih={};e(Ih,"json",(()=>Ch));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ch=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}];var Oh={};e(Oh,"json",(()=>Mh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Mh=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var Ah={};e(Ah,"json",(()=>Dh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Dh=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var $h={};e($h,"json",(()=>Ph));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ph=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var Lh={};e(Lh,"json",(()=>Rh));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Rh=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var Fh=Ns;class zh{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[].concat(...[eh,nh,ah,oh,uh,ch,dh,hh,yh,bh,wh,kh,Nh,Th,Ih,Oh,Ah,$h,Lh].map((e=>e.json)));this.opMappers=e.reduce(((e,t)=>(e[t.tfOpName]=t,e)),{})}transformGraph(e,t={}){const n=e.node,r=[],a=[],s=[],o=n.reduce(((e,t)=>(e[t.name]=this.mapNode(t),t.op.startsWith("Placeholder")?r.push(e[t.name]):"Const"===t.op?a.push(e[t.name]):null!=t.input&&0!==t.input.length||s.push(e[t.name]),e)),{});let i=[];const u=[];let l={},c={};null!=t&&(l=this.mapSignatureEntries(t.inputs),c=this.mapSignatureEntries(t.outputs));const p=Object.keys(o);p.forEach((e=>{const t=o[e];t.inputNames.forEach(((e,n)=>{const[r,,a]=Qf(e),s=o[r];if(null!=s.outputs){const e=s.outputs.indexOf(a);if(-1!==e){const a=`${r}:${e}`;t.inputNames[n]=a}}t.inputs.push(s),s.children.push(t)}))})),0===Object.keys(c).length?p.forEach((e=>{const t=o[e];0===t.children.length&&u.push(t)})):Object.keys(c).forEach((e=>{const[t]=Qf(e),n=o[t];null!=n&&(n.signatureKey=c[e],u.push(n))})),Object.keys(l).length>0?Object.keys(l).forEach((e=>{const[t]=Qf(e),n=o[t];n&&(n.signatureKey=l[e],i.push(n))})):i=r;let d={};null!=e.library&&null!=e.library.function&&(d=e.library.function.reduce(((e,t)=>(e[t.signature.name]=this.mapFunction(t),e)),{}));const f={nodes:o,inputs:i,outputs:u,weights:a,placeholders:r,signature:t,functions:d};return s.length>0&&(f.initNodes=s),f}mapSignatureEntries(e){return Object.keys(e||{}).reduce(((t,n)=>(t[e[n].name]=n,t)),{})}mapNode(e){const t=Wf(e.op)||this.opMappers[e.op]||{};null==e.attr&&(e.attr={});const n={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map((e=>e.startsWith("^")?e.slice(1):e)),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return null!=t.inputs&&(n.inputParams=t.inputs.reduce(((e,t)=>(e[t.name]={type:t.type,inputIndexStart:t.start,inputIndexEnd:t.end},e)),{})),null!=t.attrs&&(n.attrParams=t.attrs.reduce(((t,n)=>{const r=n.type;let a;switch(n.type){case"string":a=Uh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Uh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":a=Jh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Jh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":a=jh(e.attr,n.tfName,n.defaultValue||0),void 0===a&&n.tfDeprecatedName&&(a=jh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":a=Yh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Yh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":a=Vh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Vh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":a=Zh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Zh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":a=Qh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Qh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":a=Xh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Xh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":a=qh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=qh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":a=Kh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Kh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":a=Wh(e.attr,n.tfName,n.defaultValue),void 0===a&&n.tfDeprecatedName&&(a=Wh(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${e.op}`)}return t[n.name]={value:a,type:r},t}),{})),n}mapFunction(e){const t=e.nodeDef,n=[];let r={};null!=t&&(r=t.reduce(((e,t)=>(e[t.name]=this.mapNode(t),"Const"===t.op&&n.push(e[t.name]),e)),{}));const a=[],s=[];e.signature.inputArg.forEach((e=>{const[t]=Qf(e.name),n={name:t,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Hh(e.type),type:"dtype"}},children:[]};n.signatureKey=e.name,a.push(n),r[t]=n}));Object.keys(r).forEach((e=>{const t=r[e];t.inputNames.forEach(((e,n)=>{const[a,,s]=Qf(e),o=r[a];if(null!=o.outputs){const e=o.outputs.indexOf(s);if(-1!==e){const r=`${a}:${e}`;t.inputNames[n]=r}}t.inputs.push(o),o.children.push(t)}))}));const o=e.ret;e.signature.outputArg.forEach((e=>{const[t,n]=Qf(o[e.name]),a=r[t];null!=a&&(a.defaultOutput=n,s.push(a))}));const i=this.mapArgsToSignature(e);return{nodes:r,inputs:a,outputs:s,weights:n,placeholders:[],signature:i}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce(((e,t)=>(e[t.name]=this.mapArgToTensorInfo(t),e)),{}),outputs:e.signature.outputArg.reduce(((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n,e.ret),t)),{})}}mapArgToTensorInfo(e,t){let n=e.name;return null!=t&&(n=t[n]),{name:n,dtype:e.type}}}function Bh(e,t){const n=Array.isArray(e)?String.fromCharCode.apply(null,e):function(e){const t=de().global;if(void 0!==t.atob)return t.atob(e);if(void 0!==Fh)return new Fh(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}(e);return t?n:n.toLowerCase()}function Uh(e,t,n,r=!1){const a=e[t];return null!=a?Bh(a.s,r):n}function Vh(e,t,n){const r=e[t];return r?r.b:n}function jh(e,t,n){const r=e[t]||{},a=null!=r.i?r.i:null!=r.f?r.f:n;return"number"==typeof a?a:parseInt(a,10)}function Hh(e){switch("string"==typeof e&&(e=Uf[e]),e){case Uf.DT_FLOAT:case Uf.DT_HALF:return"float32";case Uf.DT_INT32:case Uf.DT_INT64:case Uf.DT_INT8:case Uf.DT_UINT8:return"int32";case Uf.DT_BOOL:return"bool";case Uf.DT_DOUBLE:return"float32";case Uf.DT_STRING:return"string";default:return null}}function Wh(e,t,n){const r=e[t];return r&&r.func?r.func.name:n}function qh(e,t,n){const r=e[t];return r&&r.type?Hh(r.type):n}function Kh(e,t,n){const r=e[t];return r&&r.list&&r.list.type?r.list.type.map((e=>Hh(e))):n}function Gh(e){if(!e.unknownRank)return null!=e.dim?e.dim.map((e=>"number"==typeof e.size?e.size:parseInt(e.size,10))):[]}function Qh(e,t,n){const r=e[t];return r&&r.shape?Gh(r.shape):n}function Yh(e,t,n){const r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map((e=>"number"==typeof e?e:parseInt(e,10))):n}function Jh(e,t,n,r=!1){const a=e[t];return a&&a.list&&a.list.s?a.list.s.map((e=>Bh(e,r))):n}function Xh(e,t,n){const r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map((e=>Gh(e))):n}function Zh(e,t,n){const r=e[t];return r&&r.list&&r.list.b?r.list.b:n}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class em{constructor(e,t,n){this.node=e,this.tensorMap=t,this.context=n,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map((e=>this.getInput(e))),null!=e.rawAttrs&&(this.attrs=Object.keys(e.rawAttrs).reduce(((e,t)=>(e[t]=this.getAttr(t),e)),{}))}getInput(e){return Kf(e,this.tensorMap,this.context)}getAttr(e,t){const n=this.node.rawAttrs[e];if(null!=n.tensor)return Kf(e,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return jh(this.node.rawAttrs,e,t);if(null!=n.s)return Uh(this.node.rawAttrs,e,t);if(null!=n.b)return Vh(this.node.rawAttrs,e,t);if(null!=n.shape)return Qh(this.node.rawAttrs,e,t);if(null!=n.type)return qh(this.node.rawAttrs,e,t);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return Yh(this.node.rawAttrs,e,t);if(null!=n.list.s)return Jh(this.node.rawAttrs,e,t);if(null!=n.list.shape)return Xh(this.node.rawAttrs,e,t);if(null!=n.list.b)return Zh(this.node.rawAttrs,e,t);if(null!=n.list.type)return Kh(this.node.rawAttrs,e,t)}return t}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var tm={};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */r(tm,Hi);const nm=(e,t,n,r=tm)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(qf("a",e,t,n),qf("b",e,t,n))];case"AddN":return[r.addN(qf("tensors",e,t,n))];case"FloorMod":case"Mod":return[r.mod(qf("a",e,t,n),qf("b",e,t,n))];case"Mul":return[r.mul(qf("a",e,t,n),qf("b",e,t,n))];case"RealDiv":case"Div":return[r.div(qf("a",e,t,n),qf("b",e,t,n))];case"DivNoNan":return[r.divNoNan(qf("a",e,t,n),qf("b",e,t,n))];case"FloorDiv":return[r.floorDiv(qf("a",e,t,n),qf("b",e,t,n))];case"Sub":return[r.sub(qf("a",e,t,n),qf("b",e,t,n))];case"Minimum":return[r.minimum(qf("a",e,t,n),qf("b",e,t,n))];case"Maximum":return[r.maximum(qf("a",e,t,n),qf("b",e,t,n))];case"Pow":return[r.pow(qf("a",e,t,n),qf("b",e,t,n))];case"SquaredDifference":return[r.squaredDifference(qf("a",e,t,n),qf("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},rm=(e,t,n,r=tm)=>{switch(e.op){case"Abs":case"ComplexAbs":return[r.abs(qf("x",e,t,n))];case"Acos":return[r.acos(qf("x",e,t,n))];case"Acosh":return[r.acosh(qf("x",e,t,n))];case"Asin":return[r.asin(qf("x",e,t,n))];case"Asinh":return[r.asinh(qf("x",e,t,n))];case"Atan":return[r.atan(qf("x",e,t,n))];case"Atan2":return[r.atan2(qf("x",e,t,n),qf("y",e,t,n))];case"Atanh":return[r.atanh(qf("x",e,t,n))];case"Ceil":return[r.ceil(qf("x",e,t,n))];case"Complex":return[r.complex(qf("real",e,t,n),qf("imag",e,t,n))];case"Cos":return[r.cos(qf("x",e,t,n))];case"Cosh":return[r.cosh(qf("x",e,t,n))];case"Elu":return[r.elu(qf("x",e,t,n))];case"Erf":return[r.erf(qf("x",e,t,n))];case"Exp":return[r.exp(qf("x",e,t,n))];case"Expm1":return[r.expm1(qf("x",e,t,n))];case"Floor":return[r.floor(qf("x",e,t,n))];case"Log":return[r.log(qf("x",e,t,n))];case"Log1p":return[r.log1p(qf("x",e,t,n))];case"Imag":return[r.imag(qf("x",e,t,n))];case"Neg":return[r.neg(qf("x",e,t,n))];case"Reciprocal":return[r.reciprocal(qf("x",e,t,n))];case"Real":return[r.real(qf("x",e,t,n))];case"Relu":return[r.relu(qf("x",e,t,n))];case"Round":return[r.round(qf("x",e,t,n))];case"Selu":return[r.selu(qf("x",e,t,n))];case"Sigmoid":return[r.sigmoid(qf("x",e,t,n))];case"Sin":return[r.sin(qf("x",e,t,n))];case"Sign":return[r.sign(qf("x",e,t,n))];case"Sinh":return[r.sinh(qf("x",e,t,n))];case"Softplus":return[r.softplus(qf("x",e,t,n))];case"Sqrt":return[r.sqrt(qf("x",e,t,n))];case"Square":return[r.square(qf("x",e,t,n))];case"Tanh":return[r.tanh(qf("x",e,t,n))];case"Tan":return[r.tan(qf("x",e,t,n))];case"ClipByValue":return[r.clipByValue(qf("x",e,t,n),qf("clipValueMin",e,t,n),qf("clipValueMax",e,t,n))];case"Relu6":return[r.relu6(qf("x",e,t,n))];case"Rsqrt":return[r.rsqrt(Kf(e.inputNames[0],t,n))];case"Prod":return[r.prod(qf("x",e,t,n),qf("axes",e,t,n))];case"LeakyRelu":return[r.leakyRelu(qf("x",e,t,n),qf("alpha",e,t,n))];case"Prelu":return[r.prelu(qf("x",e,t,n),qf("alpha",e,t,n))];case"IsNan":return[r.isNaN(Kf(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function am(e,t,n=""){if("number"!=typeof e&&"number"!=typeof t){$d2cc08cc2aa8032f$exports.util.assert(e.length===t.length,(()=>n+` Shapes ${e} and ${t} must match`));for(let r=0;r<e.length;r++){const a=e[r],s=t[r];$d2cc08cc2aa8032f$exports.util.assert(a<0||s<0||a===s,(()=>n+` Shapes ${e} and ${t} must match`))}}}function sm(e){return"number"!=typeof e&&!e.some((e=>e<0))}function om(e,t,n){let r=im(e,n);const a=!sm(r);if(a&&0===t.length)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(a&&t.forEach((e=>{r=im(e.shape,r)})),!sm(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function im(e,t){if("number"==typeof e)return t;if("number"==typeof t)return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);const n=[];for(let r=0;r<e.length;++r){const a=e[r],s=t[r];if(a>=0&&s>=0&&a!==s)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[r]=a>=0?a:s}return n}class um{constructor(e,t,n,r,a,s,o){this.name=e,this.dtype=t,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=a,this.dynamicSize=s,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=dl(0),Vi(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach((t=>{null!=e&&e.has(t.tensor.id)||t.tensor.dispose()})),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map((e=>this.read(e)))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const n=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},\n          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=t.shape),am(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);n.tensor=t,Vi(t),n.written=!0,this.tensors[e]=n}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach(((e,n)=>this.write(e,t[n])))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let t=0;t<this.size();t++)e.push(t)}if(0===e.length)return ks([],[0].concat(this.elementShape));const n=this.readMany(e);return am(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),wp(n,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(0===this.size())return ks([],[0].concat(this.elementShape));const t=[];for(let e=0;e<this.size();e++)t.push(e);const n=this.readMany(t);return am(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),Li(n,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const n=Math.max(...e);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(e,Dp(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let n=0;const r=e.map((e=>(n+=e,n)));if(n!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const a=0===n?0:t.size/n,s=[];Ui((()=>{t=du(t,[1,n,a]);for(let n=0;n<e.length;++n){const o=[0,0===n?0:r[n-1],0],i=[1,e[n],a];s[n]=du(bu(t,o,i),this.elementShape)}return s}));const o=[];for(let t=0;t<e.length;t++)o[t]=t;this.writeMany(o,s)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class lm{constructor(e,t,n,r=-1){this.tensors=e,this.elementShape=t,this.elementDtype=n,null!=e&&e.forEach((e=>{if(n!==e.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${e.dtype}`);am(t,e.shape,"TensorList shape mismatch: "),Vi(e)})),this.idTensor=dl(0),this.maxNumElements=r,Vi(this.idTensor)}get id(){return this.idTensor.id}copy(){return new lm([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach((t=>{null!=e&&e.has(t.id)||t.dispose()})),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,n=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(-1!==n&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);am(e,this.elementShape,"TensorList shape mismatch: ");const r=om(this.elementShape,this.tensors,e);return Ui((()=>{const e=this.tensors.map((e=>du(e,r)));return wp(e,0)}))}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(0===this.size())throw new Error("Trying to pop from an empty list.");const n=om(this.elementShape,this.tensors,e),r=this.tensors.pop();return r.kept=!1,am(r.shape,e,"TensorList shape mismatch: "),du(r,n)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(am(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Vi(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(-1!==this.maxNumElements&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new lm([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let n=0;n<Math.min(this.tensors.length,e);++n)t.tensors[n]=this.tensors[n];return t}getItem(e,t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[e])throw new Error(`element at index ${e} is null.`);am(this.tensors[e].shape,t,"TensorList shape mismatch: ");const r=om(this.elementShape,this.tensors,t);return du(this.tensors[e],r)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||-1!==this.maxNumElements&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);am(this.elementShape,t.shape,"TensorList shape mismatch: "),Vi(t),null!=this.tensors[e]&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,n){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);am(this.elementShape,n,"TensorList shape mismatch: "),e=e.slice(0,this.size());const r=om(this.elementShape,this.tensors,n);return 0===e.length?ks([],[0].concat(r)):Ui((()=>{const t=e.map((e=>du(this.tensors[e],r)));return wp(t,0)}))}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);am(this.elementShape,t,"TensorList shape mismatch: ");const n=om(this.elementShape,this.tensors,t);return 0===this.size()?ks([],[0].concat(n)):Ui((()=>{const e=this.tensors.map((e=>du(e,n)));return Li(e,0)}))}}function cm(e,t,n){const r=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);am(e.shape.slice(1),t,"TensorList shape mismatch: ");const a=Dp(e);return new lm(a,t,r)}function pm(e,t,n,r){return new lm([],e,t,r)}function dm(e,t,n,r){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const a=Math.max(...t);if(null!=r&&-1!==r&&a>=r)throw new Error(`Max index must be < array size (${a}  vs. ${r})`);const s=new lm([],n,e.dtype,r),o=Dp(e,0);return t.forEach(((e,t)=>{s.setItem(e,o[t])})),s}function fm(e,t,n){let r=0;const a=t.map((e=>(r+=e,r)));if(r!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${r}, and tensor's shape is: ${e.shape}`);const s=im(e.shape.slice(1),n),o=0===r?0:e.size/r,i=Ui((()=>{const n=[];e=du(e,[1,r,o]);for(let r=0;r<t.length;++r){const i=[0,0===r?0:a[r-1],0],u=[1,t[r],o];n[r]=du(bu(e,i,u),s)}return e.dispose(),n})),u=new lm([],n,e.dtype,t.length);for(let e=0;e<i.length;e++)u.setItem(e,i[e]);return u}const hm=async(e,t,n)=>{switch(e.op){case"If":case"StatelessIf":{const r=qf("thenBranch",e,t,n),a=qf("elseBranch",e,t,n),s=qf("cond",e,t,n),o=qf("args",e,t,n);return(await s.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[a].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=qf("body",e,t,n),a=qf("cond",e,t,n),s=qf("args",e,t,n),o=await n.functionMap[a].executeFunctionAsync(s,n.tensorArrayMap,n.tensorListMap),i=s.map((e=>e.id));let u=await o[0].data();o.forEach((e=>{e.kept||-1!==i.indexOf(e.id)||e.dispose()}));let l=s;for(;u[0];){const e=l;l=await n.functionMap[r].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);const t=l.map((e=>e.id));e.forEach((e=>{e.kept||-1!==i.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()}));const s=await n.functionMap[a].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);u=await s[0].data(),s.forEach((e=>{e.kept||-1!==i.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()}))}return l}case"LoopCond":return[Zf(qf("pred",e,t,n))];case"Switch":{const r=qf("pred",e,t,n);let a=qf("data",e,t,n);return a.kept||(a=Zf(a)),(await r.data())[0]?[void 0,a]:[a,void 0]}case"Merge":{const r=e.inputNames.find((e=>void 0!==Kf(e,t,n)));if(r){return[Zf(Kf(r,t,n))]}return}case"Enter":{const r=qf("frameName",e,t,n),a=qf("tensor",e,t,n);return n.enterFrame(r),[Zf(a)]}case"Exit":{const r=qf("tensor",e,t,n);return n.exitFrame(),[Zf(r)]}case"NextIteration":{const r=qf("tensor",e,t,n);return n.nextIteration(),[Zf(r)]}case"TensorArrayV3":{const r=qf("size",e,t,n),a=qf("dtype",e,t,n),s=qf("elementShape",e,t,n),o=qf("dynamicSize",e,t,n),i=qf("clearAfterRead",e,t,n),u=qf("identicalElementShapes",e,t,n),l=qf("name",e,t,n),c=new um(l,a,r,s,u,o,i);return n.addTensorArray(c),[c.idTensor,dl(1)]}case"TensorArrayWriteV3":{const r=qf("tensorArrayId",e,t,n),a=qf("index",e,t,n),s=qf("tensor",e,t,n),o=n.getTensorArray(r.id);return o.write(a,s),[o.idTensor]}case"TensorArrayReadV3":{const r=qf("tensorArrayId",e,t,n),a=qf("index",e,t,n);return[n.getTensorArray(r.id).read(a)]}case"TensorArrayGatherV3":{const r=qf("tensorArrayId",e,t,n),a=qf("indices",e,t,n),s=qf("dtype",e,t,n);return[n.getTensorArray(r.id).gather(a,s)]}case"TensorArrayScatterV3":{const r=qf("tensorArrayId",e,t,n),a=qf("indices",e,t,n),s=qf("tensor",e,t,n),o=n.getTensorArray(r.id);return o.scatter(a,s),[o.idTensor]}case"TensorArrayConcatV3":{const r=qf("tensorArrayId",e,t,n),a=n.getTensorArray(r.id),s=qf("dtype",e,t,n);return[a.concat(s)]}case"TensorArraySplitV3":{const r=qf("tensorArrayId",e,t,n),a=qf("tensor",e,t,n),s=qf("lengths",e,t,n),o=n.getTensorArray(r.id);return o.split(s,a),[o.idTensor]}case"TensorArraySizeV3":{const r=qf("tensorArrayId",e,t,n);return[dl(n.getTensorArray(r.id).size(),"int32")]}case"TensorArrayCloseV3":{const r=qf("tensorArrayId",e,t,n),a=n.getTensorArray(r.id);return a.clearAndClose(),[a.idTensor]}case"TensorListSetItem":{const r=qf("tensorListId",e,t,n),a=qf("index",e,t,n),s=qf("tensor",e,t,n),o=n.getTensorList(r.id);return o.setItem(a,s),[o.idTensor]}case"TensorListGetItem":{const r=qf("tensorListId",e,t,n),a=qf("index",e,t,n),s=qf("elementShape",e,t,n),o=qf("elementDType",e,t,n);return[n.getTensorList(r.id).getItem(a,s,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=qf("indices",e,t,n),a=dm(qf("tensor",e,t,n),r,qf("elementShape",e,t,n),qf("numElements",e,t,n));return n.addTensorList(a),[a.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=qf("elementShape",e,t,n),a=qf("elementDType",e,t,n);let s;s="TensorListReserve"===e.op?"numElements":"maxNumElements";const o=qf(s,e,t,n),i=pm(r,a,0,"TensorListReserve"===e.op?-1:o);return n.addTensorList(i),[i.idTensor]}case"TensorListGather":{const r=qf("tensorListId",e,t,n),a=qf("indices",e,t,n),s=qf("elementShape",e,t,n),o=qf("elementDType",e,t,n);return[n.getTensorList(r.id).gather(a,o,s)]}case"TensorListStack":{const r=qf("tensorListId",e,t,n),a=qf("elementShape",e,t,n),s=qf("elementDType",e,t,n),o=qf("numElements",e,t,n);return[n.getTensorList(r.id).stack(a,s,o)]}case"TensorListFromTensor":{const r=cm(qf("tensor",e,t,n),qf("elementShape",e,t,n),qf("elementDType",e,t,n));return n.addTensorList(r),[r.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=qf("tensorListId",e,t,n),a=n.getTensorList(r.id),s=qf("dtype",e,t,n),o=qf("elementShape",e,t,n);return[a.concat(s,o)]}case"TensorListPushBack":{const r=qf("tensorListId",e,t,n),a=qf("tensor",e,t,n),s=n.getTensorList(r.id);return s.pushBack(a),[s.idTensor]}case"TensorListPopBack":{const r=qf("tensorListId",e,t,n),a=qf("elementShape",e,t,n),s=qf("elementDType",e,t,n);return[n.getTensorList(r.id).popBack(a,s)]}case"TensorListSplit":{const r=qf("tensor",e,t,n),a=qf("elementShape",e,t,n),s=fm(r,qf("lengths",e,t,n),a);return n.addTensorList(s),[s.idTensor]}case"TensorListLength":{const r=qf("tensorListId",e,t,n);return[dl(n.getTensorList(r.id).size(),"int32")]}case"TensorListResize":{const r=qf("tensorListId",e,t,n),a=qf("size",e,t,n),s=n.getTensorList(r.id).resize(a);return n.addTensorList(s),[s.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function mm(e,t,n){const[r,a]=qf("fusedOps",e,t,n),s="biasadd"===r,o=!s,i="prelu"===a,u="fusedbatchnorm"===r,l=qf("numArgs",e,t,n);if(s){if(i&&2!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&s&&1!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const c=qf("strides",e,t,n),p=Xf(e,t,n),d=qf("dataFormat",e,t,n).toUpperCase(),f=qf("dilations",e,t,n);let[h,m]=qf("args",e,t,n);o&&(m=h,h=void 0);return{stride:c,pad:p,dataFormat:d,dilations:f,biasArg:h,preluArg:m,activationFunc:a,leakyreluAlpha:qf("leakyreluAlpha",e,t,n)}}const ym=(e,t,n,r=tm)=>{switch(e.op){case"Conv1D":{const a=qf("stride",e,t,n),s=qf("pad",e,t,n),o=qf("dataFormat",e,t,n).toUpperCase(),i=qf("dilation",e,t,n);return[r.conv1d(qf("x",e,t,n),qf("filter",e,t,n),a,s,o,i)]}case"Conv2D":{const a=qf("strides",e,t,n),s=Xf(e,t,n),o=qf("dataFormat",e,t,n).toUpperCase(),i=qf("dilations",e,t,n);return[r.conv2d(qf("x",e,t,n),qf("filter",e,t,n),[a[1],a[2]],s,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:a,pad:s,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=mm(e,t,n);return[r.fused.conv2d({x:qf("x",e,t,n),filter:qf("filter",e,t,n),strides:[a[1],a[2]],pad:s,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:a,pad:s,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=mm(e,t,n);return[r.fused.depthwiseConv2d({x:qf("x",e,t,n),filter:qf("filter",e,t,n),strides:[a[1],a[2]],pad:s,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const a=qf("outputShape",e,t,n),s=qf("strides",e,t,n),o=Xf(e,t,n);return[r.conv2dTranspose(qf("x",e,t,n),qf("filter",e,t,n),a,[s[1],s[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const a=qf("strides",e,t,n),s=Xf(e,t,n),o=qf("dilations",e,t,n),i=qf("dataFormat",e,t,n).toUpperCase();return[r.depthwiseConv2d(qf("input",e,t,n),qf("filter",e,t,n),[a[1],a[2]],s,i,[o[1],o[2]])]}case"Conv3D":{const a=qf("strides",e,t,n),s=qf("pad",e,t,n),o=qf("dataFormat",e,t,n).toUpperCase(),i=qf("dilations",e,t,n);return[r.conv3d(qf("x",e,t,n),qf("filter",e,t,n),[a[1],a[2],a[3]],s,o,[i[1],i[2],i[3]])]}case"AvgPool":{const a=qf("strides",e,t,n),s=qf("pad",e,t,n),o=qf("kernelSize",e,t,n);return[r.avgPool(qf("x",e,t,n),[o[1],o[2]],[a[1],a[2]],s)]}case"MaxPool":{const a=qf("strides",e,t,n),s=qf("pad",e,t,n),o=qf("kernelSize",e,t,n);return[r.maxPool(qf("x",e,t,n),[o[1],o[2]],[a[1],a[2]],s)]}case"MaxPoolWithArgmax":{const a=qf("strides",e,t,n),s=qf("pad",e,t,n),o=qf("kernelSize",e,t,n),i=qf("includeBatchInIndex",e,t,n),{result:u,indexes:l}=r.maxPoolWithArgmax(qf("x",e,t,n),[o[1],o[2]],[a[1],a[2]],s,i);return[u,l]}case"AvgPool3D":{const a=qf("strides",e,t,n),s=qf("pad",e,t,n),o=qf("kernelSize",e,t,n);return[r.avgPool3d(qf("x",e,t,n),[o[1],o[2],o[3]],[a[1],a[2],a[3]],s)]}case"MaxPool3D":{const a=qf("strides",e,t,n),s=qf("pad",e,t,n),o=qf("kernelSize",e,t,n);return[r.maxPool3d(qf("x",e,t,n),[o[1],o[2],o[3]],[a[1],a[2],a[3]],s)]}case"Dilation2D":{const a=qf("strides",e,t,n),s=qf("pad",e,t,n),o=qf("dilations",e,t,n),i=a[1],u=a[2],l=o[1],c=o[2];return[r.dilation2d(qf("x",e,t,n),qf("filter",e,t,n),[i,u],s,[l,c],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},gm=(e,t,n,r=tm)=>{switch(e.op){case"Fill":{const a=qf("shape",e,t,n),s=qf("dtype",e,t,n),o=qf("value",e,t,n);return[r.fill(a,o,s)]}case"LinSpace":{const a=qf("start",e,t,n),s=qf("stop",e,t,n),o=qf("num",e,t,n);return[r.linspace(a,s,o)]}case"Multinomial":{const a=qf("logits",e,t,n),s=qf("numSamples",e,t,n),o=qf("seed",e,t,n);return[r.multinomial(a,s,o)]}case"OneHot":{const a=qf("indices",e,t,n),s=qf("depth",e,t,n),o=qf("onValue",e,t,n),i=qf("offValue",e,t,n),u=qf("dtype",e,t,n);return[r.oneHot(a,s,o,i,u)]}case"Ones":return[r.ones(qf("shape",e,t,n),qf("dtype",e,t,n))];case"OnesLike":return[r.onesLike(qf("x",e,t,n))];case"RandomStandardNormal":return[r.randomStandardNormal(qf("shape",e,t,n),qf("dtype",e,t,n),qf("seed",e,t,n))];case"RandomUniform":return[r.randomUniform(qf("shape",e,t,n),qf("minval",e,t,n),qf("maxval",e,t,n),qf("dtype",e,t,n))];case"Range":{const a=qf("start",e,t,n),s=qf("stop",e,t,n),o=qf("step",e,t,n);return[r.range(a,s,o,qf("dtype",e,t,n))]}case"TruncatedNormal":{const a=qf("shape",e,t,n),s=qf("mean",e,t,n),o=qf("stdDev",e,t,n),i=qf("seed",e,t,n);return[r.truncatedNormal(a,s,o,qf("dtype",e,t,n),i)]}case"Zeros":return[r.zeros(qf("shape",e,t,n),qf("dtype",e,t,n))];case"ZerosLike":return[r.zerosLike(qf("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bm(e,t,n){return{boxes:qf("boxes",e,t,n),scores:qf("scores",e,t,n),maxOutputSize:qf("maxOutputSize",e,t,n),iouThreshold:qf("iouThreshold",e,t,n),scoreThreshold:qf("scoreThreshold",e,t,n),softNmsSigma:qf("softNmsSigma",e,t,n)}}const vm=async(e,t,n,r,a=tm)=>{switch(e.op){case"NonMaxSuppressionV5":{const{boxes:r,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:u,softNmsSigma:l}=bm(e,t,n),c=await a.image.nonMaxSuppressionWithScoreAsync(r,s,o,i,u,l);return[c.selectedIndices,c.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:r,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:u}=bm(e,t,n),l=qf("padToMaxOutputSize",e,t,n),c=await a.image.nonMaxSuppressionPaddedAsync(r,s,o,i,u,l);return[c.selectedIndices,c.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:r,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:u}=bm(e,t,n);return[await a.image.nonMaxSuppressionAsync(r,s,o,i,u)]}case"Where":{const r=a.cast(qf("condition",e,t,n),"bool"),s=[await a.whereAsync(r)];return r.dispose(),s}case"ListDiff":return a.setdiff1dAsync(qf("x",e,t,n),qf("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}},wm=(e,t,n,r=tm)=>{switch(e.op){case"LowerBound":{const a=qf("sortedSequence",e,t,n),s=qf("values",e,t,n);return[r.lowerBound(a,s)]}case"TopKV2":{const a=qf("x",e,t,n),s=qf("k",e,t,n),o=qf("sorted",e,t,n),i=r.topk(a,s,o);return[i.values,i.indices]}case"UpperBound":{const a=qf("sortedSequence",e,t,n),s=qf("values",e,t,n);return[r.upperBound(a,s)]}case"Unique":{const a=qf("x",e,t,n),s=r.unique(a);return[s.values,s.indices]}case"UniqueV2":{const a=qf("x",e,t,n),s=qf("axis",e,t,n),o=r.unique(a,s);return[o.values,o.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},xm=(e,t,n,r=tm)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const a=qf("default",e,t,n);return[Kf(e.name,t,n)||a];case"Placeholder":return[Kf(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":return[Zf(qf("x",e,t,n))];case"IdentityN":return qf("x",e,t,n).map((e=>Zf(e)));case"Snapshot":return[Zf(qf("x",e,t,n))];case"Shape":return[r.tensor1d(qf("x",e,t,n).shape,"int32")];case"ShapeN":return qf("x",e,t,n).map((e=>r.tensor1d(e.shape)));case"Size":return[r.scalar(qf("x",e,t,n).size,"int32")];case"Rank":return[r.scalar(qf("x",e,t,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const s=qf("x",e,t,n),o=qf("data",e,t,n),i=qf("message",e,t,n),u=qf("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(i);for(let e=0;e<o.length;e++)console.log(Array.prototype.slice.call(o[e].dataSync()).slice(0,u));return[s];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class km{constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=dl(0),this.tensorMap=new Map,Vi(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach((e=>e.dispose())),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return dl(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const n=await e.data();return this.tensorMap.forEach((e=>e.dispose())),this.tensorMap.clear(),Ui((()=>{const e=Dp(t),r=n.length,a=e.length;$d2cc08cc2aa8032f$exports.util.assert(r===a,(()=>`The number of elements doesn't match, keys has ${r} elements, the values has ${a} elements.`));for(let t=0;t<r;t++){const r=n[t],a=e[t];Vi(a),this.tensorMap.set(r,a)}return this.handle}))}async find(e,t){this.checkKeyAndValueTensor(e,t);const n=await e.data();return Ui((()=>{const e=[];for(let r=0;r<n.length;r++){const a=n[r],s=this.findWithDefault(a,t);e.push(s)}return wp(e)}))}findWithDefault(e,t){const n=this.tensorMap.get(e);return null!=n?n:t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}const Sm=async(e,t,n,r)=>{switch(e.op){case"HashTable":case"HashTableV2":{const a=qf("keyDType",e,t,n),s=qf("valueDType",e,t,n),o=new km(a,s);return r.addHashTable(e.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{const a=qf("tableHandle",e,t,n,r),s=qf("keys",e,t,n),o=qf("values",e,t,n),i=r.getHashTableById(a.id);return[await i.import(s,o)]}case"LookupTableFind":case"LookupTableFindV2":{const a=qf("tableHandle",e,t,n,r),s=qf("keys",e,t,n),o=qf("defaultValue",e,t,n),i=r.getHashTableById(a.id);return[await i.find(s,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const a=qf("tableHandle",e,t,n,r);return[r.getHashTableById(a.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},Nm=(e,t,n,r=tm)=>{switch(e.op){case"ResizeBilinear":{const a=qf("images",e,t,n),s=qf("size",e,t,n),o=qf("alignCorners",e,t,n),i=qf("halfPixelCenters",e,t,n);return[r.image.resizeBilinear(a,[s[0],s[1]],o,i)]}case"ResizeNearestNeighbor":{const a=qf("images",e,t,n),s=qf("size",e,t,n),o=qf("alignCorners",e,t,n),i=qf("halfPixelCenters",e,t,n);return[r.image.resizeNearestNeighbor(a,[s[0],s[1]],o,i)]}case"CropAndResize":{const a=qf("image",e,t,n),s=qf("boxes",e,t,n),o=qf("boxInd",e,t,n),i=qf("cropSize",e,t,n),u=qf("method",e,t,n),l=qf("extrapolationValue",e,t,n);return[r.image.cropAndResize(a,s,o,i,u,l)]}case"ImageProjectiveTransformV3":{const a=qf("images",e,t,n),s=qf("transforms",e,t,n),o=qf("outputShape",e,t,n),i=qf("fillValue",e,t,n),u=qf("interpolation",e,t,n),l=qf("fillMode",e,t,n);return[r.image.transform(a,s,u.toLowerCase(),l.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},Em=(e,t,n,r=tm)=>{switch(e.op){case"Equal":return[r.equal(qf("a",e,t,n),qf("b",e,t,n))];case"NotEqual":return[r.notEqual(qf("a",e,t,n),qf("b",e,t,n))];case"Greater":return[r.greater(qf("a",e,t,n),qf("b",e,t,n))];case"GreaterEqual":return[r.greaterEqual(qf("a",e,t,n),qf("b",e,t,n))];case"Less":return[r.less(qf("a",e,t,n),qf("b",e,t,n))];case"LessEqual":return[r.lessEqual(qf("a",e,t,n),qf("b",e,t,n))];case"LogicalAnd":return[r.logicalAnd(qf("a",e,t,n),qf("b",e,t,n))];case"LogicalNot":return[r.logicalNot(qf("a",e,t,n))];case"LogicalOr":return[r.logicalOr(qf("a",e,t,n),qf("b",e,t,n))];case"Select":case"SelectV2":return[r.where(qf("condition",e,t,n),qf("a",e,t,n),qf("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Tm=(e,t,n,r=tm)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(qf("a",e,t,n),qf("b",e,t,n),qf("transposeA",e,t,n),qf("transposeB",e,t,n))];case"Einsum":return[r.einsum(qf("equation",e,t,n),...qf("tensors",e,t,n))];case"Transpose":return[r.transpose(qf("x",e,t,n),qf("perm",e,t,n))];case"_FusedMatMul":const[a,s]=qf("fusedOps",e,t,n),o="biasadd"===a,i="prelu"===s,u=qf("numArgs",e,t,n),l=qf("leakyreluAlpha",e,t,n);if(o){if(i&&2!==u)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&1!==u)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[c,p]=qf("args",e,t,n);return[r.fused.matMul({a:qf("a",e,t,n),b:qf("b",e,t,n),transposeA:qf("transposeA",e,t,n),transposeB:qf("transposeB",e,t,n),bias:c,activation:s,preluActivationWeights:p,leakyreluAlpha:l})];default:throw TypeError(`Node type ${e.op} is not implemented`)}},_m=(e,t,n,r=tm)=>{switch(e.op){case"EuclideanNorm":return[r.euclideanNorm(qf("x",e,t,n),qf("axis",e,t,n),qf("keepDims",e,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[r.batchNorm(qf("x",e,t,n),qf("mean",e,t,n),qf("variance",e,t,n),qf("offset",e,t,n),qf("scale",e,t,n),qf("epsilon",e,t,n))];case"LRN":return[r.localResponseNormalization(qf("x",e,t,n),qf("radius",e,t,n),qf("bias",e,t,n),qf("alpha",e,t,n),qf("beta",e,t,n))];case"Softmax":return[r.softmax(qf("x",e,t,n))];case"LogSoftmax":return[r.logSoftmax(qf("x",e,t,n))];case"SparseToDense":return[r.sparseToDense(qf("sparseIndices",e,t,n),qf("outputShape",e,t,n),qf("sparseValues",e,t,n),qf("defaultValue",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Im=(e,t,n,r=tm)=>{switch(e.op){case"Max":{const a=qf("axis",e,t,n),s=qf("keepDims",e,t,n);return[r.max(qf("x",e,t,n),a,s)]}case"Mean":{const a=qf("axis",e,t,n),s=qf("keepDims",e,t,n);return[r.mean(qf("x",e,t,n),a,s)]}case"Min":{const a=qf("axis",e,t,n),s=qf("keepDims",e,t,n);return[r.min(qf("x",e,t,n),a,s)]}case"Sum":{const a=qf("axis",e,t,n),s=qf("keepDims",e,t,n);return[r.sum(qf("x",e,t,n),a,s)]}case"All":{const a=qf("axis",e,t,n),s=qf("keepDims",e,t,n);return[r.all(qf("x",e,t,n),a,s)]}case"Any":{const a=qf("axis",e,t,n),s=qf("keepDims",e,t,n);return[r.any(qf("x",e,t,n),a,s)]}case"ArgMax":{const a=qf("axis",e,t,n);return[r.argMax(qf("x",e,t,n),a)]}case"ArgMin":{const a=qf("axis",e,t,n);return[r.argMin(qf("x",e,t,n),a)]}case"Prod":{const a=qf("axis",e,t,n),s=qf("keepDims",e,t,n);return[r.prod(qf("x",e,t,n),a,s)]}case"Cumprod":{const a=qf("axis",e,t,n),s=qf("exclusive",e,t,n),o=qf("reverse",e,t,n);return[r.cumprod(qf("x",e,t,n),a,s,o)]}case"Cumsum":{const a=qf("axis",e,t,n),s=qf("exclusive",e,t,n),o=qf("reverse",e,t,n);return[r.cumsum(qf("x",e,t,n),a,s,o)]}case"Bincount":const a=qf("x",e,t,n),s=qf("weights",e,t,n),o=qf("size",e,t,n);return[r.bincount(a,s,o)];case"DenseBincount":{const a=qf("x",e,t,n),s=qf("weights",e,t,n),o=qf("size",e,t,n),i=qf("binaryOutput",e,t,n);return[r.denseBincount(a,s,o,i)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},Cm=(e,t,n,r=tm)=>{switch(e.op){case"ConcatV2":case"Concat":{const a=qf("n",e,t,n),s=qf("axis",e,t,n);let o=qf("tensors",e,t,n);return o=o.slice(0,a),[r.concat(o,s)]}case"Gather":{const a=qf("x",e,t,n),s=qf("indices",e,t,n);return[r.gather(a,r.cast(s,"int32"),0)]}case"GatherV2":{const a=qf("axis",e,t,n),s=qf("batchDims",e,t,n),o=qf("x",e,t,n),i=qf("indices",e,t,n);return[r.gather(o,r.cast(i,"int32"),a,s)]}case"Reverse":{const a=qf("dims",e,t,n),s=[];for(let e=0;e<a.length;e++)a[e]&&s.push(e);const o=qf("x",e,t,n);return[r.reverse(o,s)]}case"ReverseV2":{const a=qf("axis",e,t,n),s=qf("x",e,t,n);return[r.reverse(s,a)]}case"Slice":{const a=qf("begin",e,t,n),s=qf("size",e,t,n);return[r.slice(qf("x",e,t,n),a,s)]}case"StridedSlice":{const a=qf("begin",e,t,n),s=qf("end",e,t,n),o=qf("strides",e,t,n),i=qf("beginMask",e,t,n),u=qf("endMask",e,t,n),l=qf("ellipsisMask",e,t,n),c=qf("newAxisMask",e,t,n),p=qf("shrinkAxisMask",e,t,n),d=qf("x",e,t,n);return[r.stridedSlice(d,a,s,o,i,u,l,c,p)]}case"Pack":return Ui((()=>{const a=qf("axis",e,t,n),s=qf("tensors",e,t,n),o=s[0].shape,i=r.squeeze(s[0]).shape,u=s.map((e=>{const t=$d2cc08cc2aa8032f$exports.util.arraysEqual(e.shape,o);if(!t&&!$d2cc08cc2aa8032f$exports.util.arraysEqual(r.squeeze(e).shape,i))throw new Error("the input tensors shape does not match");return t?e:r.reshape(e,o)}));return[r.stack(u,a)]}));case"Unpack":{const a=qf("axis",e,t,n),s=qf("tensor",e,t,n);return r.unstack(s,a)}case"Tile":{const a=qf("reps",e,t,n);return[r.tile(qf("x",e,t,n),a)]}case"Split":case"SplitV":{const a=qf("axis",e,t,n),s=qf("numOrSizeSplits",e,t,n),o=qf("x",e,t,n);return r.split(o,s,a)}case"ScatterNd":{const a=qf("indices",e,t,n),s=qf("values",e,t,n),o=qf("shape",e,t,n);return[r.scatterND(a,s,o)]}case"GatherNd":{const a=qf("x",e,t,n),s=qf("indices",e,t,n);return[r.gatherND(a,s)]}case"SparseToDense":{const a=qf("sparseIndices",e,t,n),s=qf("outputShape",e,t,n),o=qf("sparseValues",e,t,n),i=qf("defaultValue",e,t,n);return[r.sparseToDense(a,o,s,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},Om=(e,t,n,r=tm)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:a,outputValues:s,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(qf("indices",e,t,n),qf("values",e,t,n),qf("denseShape",e,t,n),qf("defaultValue",e,t,n));return[a,s,o,i]}case"SparseReshape":{const{outputIndices:a,outputShape:s}=r.sparse.sparseReshape(qf("inputIndices",e,t,n),qf("inputShape",e,t,n),qf("newShape",e,t,n));return[a,s]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(qf("data",e,t,n),qf("indices",e,t,n),qf("segmentIds",e,t,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(qf("data",e,t,n),qf("indices",e,t,n),qf("segmentIds",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Mm=(e,t,n,r=tm)=>{switch(e.op){case"FFT":return[r.fft(qf("x",e,t,n))];case"IFFT":return[r.ifft(qf("x",e,t,n))];case"RFFT":return[r.rfft(qf("x",e,t,n))];case"IRFFT":return[r.irfft(qf("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Am=(e,t,n,r=tm)=>{switch(e.op){case"StringNGrams":{const{nGrams:a,nGramsSplits:s}=r.string.stringNGrams(qf("data",e,t,n),qf("dataSplits",e,t,n),qf("separator",e,t,n),qf("nGramWidths",e,t,n),qf("leftPad",e,t,n),qf("rightPad",e,t,n),qf("padWidth",e,t,n),qf("preserveShortSequences",e,t,n));return[a,s]}case"StringSplit":{const{indices:a,values:s,shape:o}=r.string.stringSplit(qf("input",e,t,n),qf("delimiter",e,t,n),qf("skipEmpty",e,t,n));return[a,s,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(qf("input",e,t,n),qf("numBuckets",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},Dm=(e,t,n,r=tm)=>{switch(e.op){case"Cast":return[r.cast(qf("x",e,t,n),qf("dtype",e,t,n))];case"ExpandDims":{const a=qf("axis",e,t,n);return[r.expandDims(qf("x",e,t,n),a)]}case"Squeeze":{const a=qf("axis",e,t,n);return[r.squeeze(qf("x",e,t,n),a)]}case"Reshape":return[r.reshape(qf("x",e,t,n),qf("shape",e,t,n))];case"MirrorPad":return[r.mirrorPad(qf("x",e,t,n),qf("padding",e,t,n),qf("mode",e,t,n))];case"PadV2":case"Pad":return[r.pad(qf("x",e,t,n),qf("padding",e,t,n),qf("constantValue",e,t,n))];case"SpaceToBatchND":{const a=qf("blockShape",e,t,n),s=qf("paddings",e,t,n);return[r.spaceToBatchND(qf("x",e,t,n),a,s)]}case"BatchToSpaceND":{const a=qf("blockShape",e,t,n),s=qf("crops",e,t,n);return[r.batchToSpaceND(qf("x",e,t,n),a,s)]}case"DepthToSpace":{const a=qf("blockSize",e,t,n),s=qf("dataFormat",e,t,n).toUpperCase();return[r.depthToSpace(qf("x",e,t,n),a,s)]}case"BroadcastTo":return[r.broadcastTo(qf("x",e,t,n),qf("shape",e,t,n))];case"BroadcastArgs":return[r.broadcastArgs(qf("s0",e,t,n),qf("s1",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};function $m(e,t,n,r,a=Ui){const s=((e,t,n)=>{switch(e.category){case"arithmetic":return a((()=>nm(e,t,n)));case"basic_math":return a((()=>rm(e,t,n)));case"control":return hm(e,t,n);case"convolution":return a((()=>ym(e,t,n)));case"creation":return a((()=>gm(e,t,n)));case"dynamic":return vm(e,t,n);case"evaluation":return a((()=>wm(e,t,n)));case"image":return a((()=>Nm(e,t,n)));case"graph":return a((()=>xm(e,t,n)));case"logical":return a((()=>Em(e,t,n)));case"matrices":return a((()=>Tm(e,t,n)));case"normalization":return a((()=>_m(e,t,n)));case"reduction":return a((()=>Im(e,t,n)));case"slice_join":return a((()=>Cm(e,t,n)));case"sparse":return a((()=>Om(e,t,n)));case"spectral":return a((()=>Mm(e,t,n)));case"string":return a((()=>Am(e,t,n)));case"transformation":return a((()=>Dm(e,t,n)));case"hash_table":return Sm(e,t,n,r);case"custom":const s=Wf(e.op);if(s&&s.customExecutor)return s.customExecutor(new em(e,t,n));throw TypeError(`Custom op ${e.op} is not registered.`);default:throw TypeError(`Unknown op '${e.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return $d2cc08cc2aa8032f$exports.util.isPromise(s)?s.then((e=>[].concat(e))):[].concat(s)}class Pm{constructor(e={},t={},n={},r={}){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=n,this.functionMap=r,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const n=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(n))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map((e=>0===e.id&&0===e.iterationId?"":`${e.frameName}-${e.iterationId}`)).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()}nextIteration(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");{this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lm(e,t,n,r){const a=new Set,s=[];let o=null,i=null;const u=new Set,l=Object.keys(e).map((e=>Jf(e)[0]));let c=[];null!=r&&(c=r.map((e=>Jf(e.name)[0])));const p=[...t];for(;p.length>0;){const e=p.pop();(Um(e)||Vm(e)||jm(e))&&null==o&&(o=e,i=o.children.map((e=>e.name)).filter((e=>a.has(e)))),a.add(e.name),null==n[e.name]&&(-1===l.indexOf(e.name)&&-1===c.indexOf(e.name)&&(0!==e.inputs.length?e.inputs.forEach((e=>{u.has(e.name)||(u.add(e.name),p.push(e))})):s.push(e.name)))}return{inputs:e,outputs:t,usedNodes:a,missingInputs:s,dynamicNode:o,syncInputs:i}}function Rm(e,t,n){const{usedNodes:r,inputs:a}=n,s=[],o=Object.keys(a).map((e=>Jf(e)[0])).map((t=>e.nodes[t])),i=e.initNodes;o.forEach((e=>{r.has(e.name)&&s.push(e)})),e.weights.forEach((e=>{r.has(e.name)&&s.push(e)})),null!=i&&i.forEach((e=>{r.has(e.name)&&s.push(e)}));const u=new Set,l=[];for(;s.length>0;){const e=s.pop();u.add(e.name),t[e.name]||l.push(e),e.children.forEach((e=>{!u.has(e.name)&&r.has(e.name)&&e.inputs.every((e=>u.has(e.name)))&&s.push(e)}))}return l}const Fm=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],zm=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],Bm=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function Um(e){return Fm.indexOf(e.op)>=0}function Vm(e){return zm.indexOf(e.op)>=0}function jm(e){return Bm.indexOf(e.op)>=0}class Hm{constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,null!=e.functions&&Object.keys(e.functions).forEach((t=>{this._functionExecutorMap[t]=new Hm(e.functions[t],this)}))}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map((t=>e[t].map((e=>e.id))));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map((e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0})))}get outputs(){return this._outputs.map((e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0})))}get inputNodes(){return this._inputs.map((e=>e.signatureKey||e.name))}get outputNodes(){return this._outputs.map((e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t}))}get functions(){return Object.keys(this._functions).reduce(((e,t)=>(e[t]=this._functions[t].signature,e)),{})}getCompilationKey(e,t){const n=e.map((e=>e.name)).sort(),r=t.map((e=>e.name)).sort();return n.join(this.SEPERATOR)+"--"+r.join(this.SEPERATOR)}compile(e,t){const n=Lm(e,t,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:a,syncInputs:s}=n;if(null!=a)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${s}]`);if(r.length>0){const n=t.map((e=>e.name)),a=Object.keys(e);throw new Error(`Cannot compute the outputs [${n}] from the provided inputs [${a}]. Missing the following inputs: [${r}]`)}return Rm(this.graph,this.weightMap,n)}execute(e,t){e=this.mapInputs(e);const n=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const r=n.map((e=>this.graph.nodes[Jf(e)[0]])),a=t.map((e=>Jf(e)[0]));let s=a.map((e=>this.graph.nodes[e]));this.resetIntermediateTensors(),0===s.length&&(s=this._outputs);const o=this.getCompilationKey(r,s);let i=this.compiledMap.get(o);null==i&&(i=this.compile(e,s),this.compiledMap.set(o,i));const u={},l={};return Ui((()=>{const n=new Pm(this.weightMap,u,l,this.functionExecutorMap),r=Object.assign({},this.weightMap);Object.keys(e).forEach((t=>{const[n,a]=Jf(t),s=[];s[a]=e[t],r[n]=s}));const s=this.getFrozenTensorIds(r),o={};for(let e=0;e<i.length;e++){const t=i[e];if(!r[t.name]){const e=$m(t,r,n,this._resourceManager);if($d2cc08cc2aa8032f$exports.util.isPromise(e))throw new Error(`The execution of the op '${t.op}' returned a promise. Please use model.executeAsync() instead.`);r[t.name]=e,this.checkTensorForDisposal(t.name,t,r,n,s,a,o)}}return null==this.parent&&n.dispose(s),t.map((e=>Kf(e,r,n)))}))}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map((t=>e[t])).map((e=>e.map((e=>e.id)))));return new Set(t)}checkTensorForDisposal(e,t,n,r,a,s,o){"control"!==t.category&&-1===s.indexOf(e)&&(n[e].forEach((e=>{null!=e&&(o[e.id]=(o[e.id]||0)+t.children.length)})),t.inputs.forEach((e=>{if("control"!==e.category){const s=Gf(e.name,n,r);null!=s&&s.forEach((e=>{if(e&&!e.kept&&!a.has(e.id)){const n=o[e.id];if(1===n){if(this.keepTensorForDebug){const[n,a]=Qf(t.name,r);this.intermediateTensors[n]||(this.intermediateTensors[n]=[]),this.intermediateTensors[n][a]=e}else e.dispose();delete o[e.id]}else null!=n&&o[e.id]--}}))}})))}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach((e=>this.intermediateTensors[e].forEach((e=>e.dispose())))),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach((e=>{this.tensorsMap[e].forEach((e=>{!e||e.kept||e.isDisposed||this.keepIds.has(e.id)||e.dispose()}))}))}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const e in this.intermediateTensors)this.intermediateTensors[e].forEach((e=>e.dispose())),delete this.intermediateTensors[e]}async _executeAsync(e,t,n=!1,r={},a={}){n||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepTensorForDebug=de().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(e){console.warn(e.message)}this.resetIntermediateTensors();const s=new Pm(this.weightMap,r,a,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(e,s,t,n);const o=t.map((e=>Kf(e,this.tensorsMap,s))),i=o.map((e=>e.id)),u=Object.keys(e).map((t=>e[t].id));return this.keepIds=new Set([...i,...u,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),null==this.parent&&s.dispose(this.keepIds),o}async executeFunctionAsync(e,t,n){const r=e.reduce(((e,t,n)=>(e[this.inputs[n].name]=t,e)),{});return this._executeAsync(r,this.outputNodes,!0,t,n)}async executeWithControlFlow(e,t,n,r){const a=Object.keys(e),s=a.map((e=>this.graph.nodes[Jf(e)[0]])),o=n.map((e=>Jf(e)[0]));let i=o.map((e=>this.graph.nodes[e]));0===i.length&&(i=this._outputs);const{usedNodes:u,missingInputs:l,dynamicNode:c,syncInputs:p}=Lm(e,i,this.weightMap,this._initNodes),d=[...s,...this.graph.weights,...this._initNodes||[]].map((e=>({node:e,contexts:t.currentContext}))),f=Object.assign({},this.weightMap);Object.keys(e).forEach((t=>{const[n,r]=Jf(t),a=[];a[r]=e[t],f[n]=a}));const h={},m=this.getFrozenTensorIds(f),y={};for(;d.length>0;){const e=this.processStack(s,d,t,f,y,m,o,h,u);await Promise.all(e)}null!=c||r||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const g=i.filter((e=>!Um(e)&&!Kf(e.name,f,t))).map((e=>e.name));if(g.length>0){let e="";throw null!=c&&(e=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${p}]`),new Error(`Cannot compute the outputs [${g}] from the provided inputs [${a}]. Consider providing the following inputs: [${l}]. ${e}`)}return f}processStack(e,t,n,r,a,s,o,i,u){const l=[];for(;t.length>0;){const e=t.pop();n.currentContext=e.contexts;let c="";if("Enter"===e.node.op&&qf("isConstant",e.node,r,n)&&([c]=Qf(e.node.name,n)),null==r[e.node.name]){const p=$m(e.node,r,n,this._resourceManager);c||([c]=Qf(e.node.name,n));const d=n.currentContext;$d2cc08cc2aa8032f$exports.util.isPromise(p)?l.push(p.then((l=>(r[c]=l,n.currentContext=d,this.checkTensorForDisposal(c,e.node,r,n,s,o,i),this.processChildNodes(e.node,t,n,r,a,u),l)))):(r[c]=p,this.checkTensorForDisposal(c,e.node,r,n,s,o,i),this.processChildNodes(e.node,t,n,r,a,u))}else this.processChildNodes(e.node,t,n,r,a,u)}return l}processChildNodes(e,t,n,r,a,s){e.children.forEach((e=>{const[o]=Qf(e.name,n);!a[o]&&s.has(e.name)&&("Merge"===e.op?e.inputNames.some((e=>!!Kf(e,r,n)))&&(a[o]=!0,t.push({contexts:n.currentContext,node:e})):e.inputNames.every((e=>!!Kf(e,r,n)))&&(a[o]=!0,t.push({contexts:n.currentContext,node:e})))}))}dispose(){Object.keys(this.weightMap).forEach((e=>this.weightMap[e].forEach((e=>e.dispose()))))}checkInputShapeAndType(e){Object.keys(e).forEach((t=>{const n=e[t],[r]=Jf(t),a=this.graph.nodes[r];if(a.attrParams.shape&&a.attrParams.shape.value){const e=a.attrParams.shape.value,t=e.length===n.shape.length&&n.shape.every(((t,n)=>-1===e[n]||e[n]===t));$d2cc08cc2aa8032f$exports.util.assert(t,(()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${e}], but was [${n.shape}]`))}a.attrParams.dtype&&a.attrParams.dtype.value&&$d2cc08cc2aa8032f$exports.util.assert(n.dtype===a.attrParams.dtype.value,(()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${n.dtype}`))}))}mapInputs(e){const t={};for(const n in e)if(null!=this._signature&&null!=this._signature.inputs&&null!=this._signature.inputs[n]){t[this._signature.inputs[n].name]=e[n]}else t[n]=e[n];return t}checkInputs(e){const t=Object.keys(e).filter((e=>{const[t]=Jf(e);return null==this.graph.nodes[t]}));if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map((e=>{if(null!=this._signature&&null!=this._signature.outputs&&null!=this._signature.outputs[e]){return this._signature.outputs[e].name}return e}),{})}checkOutputs(e){e.forEach((e=>{const[t]=Jf(e);if(!this.graph.nodes[t])throw new Error(`The output '${e}' is not found in the graph`)}))}}class Wm{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}const qm="?tfjs-format=file",Km="model.json";class Gm{constructor(e,t={},n=$d2cc08cc2aa8032f$exports.io){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=n,null==t&&(this.loadOptions={}),this.resourceManager=new Wm}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const e=this.modelUrl;if(null!=e.load)this.handler=e;else if(null!=this.loadOptions.requestInit)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(0===t.length)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),null==this.handler.load)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return $d2cc08cc2aa8032f$exports.util.isPromise(e)?e.then((e=>this.loadSync(e))):this.loadSync(e)}loadSync(e){this.artifacts=e;const t=this.artifacts.modelTopology;let n=this.artifacts.signature;if(null!=this.artifacts.userDefinedMetadata){const e=this.artifacts.userDefinedMetadata;null!=e.signature&&(n=e.signature),null!=e.structuredOutputKeys&&(this.structuredOutputKeys=e.structuredOutputKeys)}this.signature=n,this.version=`${t.versions.producer}.${t.versions.minConsumer}`;const r=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new Hm(zh.Instance.transformGraph(t,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(r),this.executor.resourceManager=this.resourceManager,null!=e.modelInitializer&&null!=e.modelInitializer.node){const t=zh.Instance.transformGraph(e.modelInitializer);this.initializer=new Hm(t),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(e,t){if("string"==typeof e){const t=this.io.getSaveHandlers(e);if(0===t.length)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw new Error(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(null==e.save)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}predict(e,t){const n=this.execute(e,this.outputNodes);if(this.structuredOutputKeys){const e={};return(n instanceof ja?[n]:n).forEach(((t,n)=>e[this.structuredOutputKeys[n]]=t)),e}return n}normalizeInputs(e){if(!(e instanceof ja||Array.isArray(e)))return e;if((e=Array.isArray(e)?e:[e]).length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${e.length} input tensors.`);return this.inputNodes.reduce(((t,n,r)=>(t[n]=e[r],t)),{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}execute(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const n=this.executor.execute(e,t);return n.length>1?n:n[0]}async executeAsync(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const n=await this.executor.executeAsync(e,t);return n.length>1?n:n[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce(((t,n)=>(t[n]=[e[n]],t)),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function Qm(e,t={},n=$d2cc08cc2aa8032f$exports.io){if(null==e)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==t&&(t={}),t.fromTFHub&&"string"==typeof e&&(e=function(e){e.endsWith("/")||(e+="/");return`${e}${Km}${qm}`}
/** @license See the LICENSE file. */(e));const r=new Gm(e,t,n);return await r.load(),r}function Ym(e,t,n,r){return new(n||(n=Promise))((function(a,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function i(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))}function Jm(e,t){var n,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}function Xm(e){return[Math.abs(e.endPoint[0]-e.startPoint[0]),Math.abs(e.endPoint[1]-e.startPoint[1])]}function Zm(e){return[e.startPoint[0]+(e.endPoint[0]-e.startPoint[0])/2,e.startPoint[1]+(e.endPoint[1]-e.startPoint[1])/2]}function ey(e,t){void 0===t&&(t=1.5);var n=Zm(e),r=Xm(e),a=[t*r[0]/2,t*r[1]/2];return{startPoint:[n[0]-a[0],n[1]-a[1]],endPoint:[n[0]+a[0],n[1]+a[1]],palmLandmarks:e.palmLandmarks}}function ty(e){var t=Zm(e),n=Xm(e),r=Math.max.apply(Math,n)/2;return{startPoint:[t[0]-r,t[1]-r],endPoint:[t[0]+r,t[1]+r],palmLandmarks:e.palmLandmarks}}function ny(e,t){var n=[e.endPoint[0]-e.startPoint[0],e.endPoint[1]-e.startPoint[1]],r=[n[0]*t[0],n[1]*t[1]];return{startPoint:[e.startPoint[0]+r[0],e.startPoint[1]+r[1]],endPoint:[e.endPoint[0]+r[0],e.endPoint[1]+r[1]],palmLandmarks:e.palmLandmarks}}var ry=function(){function e(e,t,n,r,a,s){this.model=e,this.width=t,this.height=n,this.iouThreshold=a,this.scoreThreshold=s,this.anchors=r.map((function(e){return[e.x_center,e.y_center]})),this.anchorsTensor=Ep(this.anchors),this.inputSizeTensor=Np([t,n]),this.doubleInputSizeTensor=Np([2*t,2*n])}return e.prototype.normalizeBoxes=function(e){var t=this;return Ui((function(){var n=bu(e,[0,0],[-1,2]),r=bu(e,[0,2],[-1,2]),a=_i(zi(n,t.inputSizeTensor),t.anchorsTensor),s=zi(r,t.doubleInputSizeTensor),o=yu(Vl(a,s),t.inputSizeTensor),i=yu(_i(a,s),t.inputSizeTensor);return Ri([o,i],1)}))},e.prototype.normalizeLandmarks=function(e,t){var n=this;return Ui((function(){var r=_i(zi(du(e,[-1,7,2]),n.inputSizeTensor),n.anchors[t]);return yu(r,n.inputSizeTensor)}))},e.prototype.getBoundingBoxes=function(e){return Ym(this,void 0,void 0,(function(){var t,n,r,a,s,o,i,u,l,c,p,d,f,h,m,y=this;return Jm(this,(function(g){switch(g.label){case 0:return t=Ui((function(){return yu(Vl(e,.5),2)})),"webgl"===ji()?(r=de().get("WEBGL_PACK_DEPTHWISECONV"),de().set("WEBGL_PACK_DEPTHWISECONV",!0),n=this.model.predict(t),de().set("WEBGL_PACK_DEPTHWISECONV",r)):n=this.model.predict(t),a=vp(n),s=Ui((function(){return vp(gu(bu(a,[0,0],[-1,1])))})),o=bu(a,[0,1],[-1,4]),i=this.normalizeBoxes(o),u=console.warn,console.warn=function(){},l=mf.nonMaxSuppression(i,s,1,this.iouThreshold,this.scoreThreshold),console.warn=u,[4,l.array()];case 1:return c=g.sent(),p=[t,n,l,a,i,o,s],0===c.length?(p.forEach((function(e){return e.dispose()})),[2,null]):(d=c[0],f=bu(i,[d,0],[1,-1]),h=bu(a,[d,5],[1,14]),m=Ui((function(){return du(y.normalizeLandmarks(h,d),[-1,2])})),p.push(h),p.forEach((function(e){return e.dispose()})),[2,{boxes:f,palmLandmarks:m}])}}))}))},e.prototype.estimateHandBounds=function(e){return Ym(this,void 0,void 0,(function(){var t,n,r,a,s,o,i,u,l=this;return Jm(this,(function(c){switch(c.label){case 0:return t=e.shape[1],n=e.shape[2],r=Ui((function(){return zi(mf.resizeBilinear(e,[l.width,l.height]),255)})),[4,this.getBoundingBoxes(r)];case 1:return null===(a=c.sent())?(r.dispose(),[2,null]):(s=a.boxes.arraySync(),o=s[0].slice(0,2),i=s[0].slice(2,4),u=a.palmLandmarks.arraySync(),r.dispose(),a.boxes.dispose(),a.palmLandmarks.dispose(),[2,(p={startPoint:o,endPoint:i,palmLandmarks:u},d=[n/this.width,t/this.height],{startPoint:[p.startPoint[0]*d[0],p.startPoint[1]*d[1]],endPoint:[p.endPoint[0]*d[0],p.endPoint[1]*d[1]],palmLandmarks:p.palmLandmarks.map((function(e){return[e[0]*d[0],e[1]*d[1]]}))})])}var p,d}))}))},e}(),ay={thumb:[1,2,3,4],indexFinger:[5,6,7,8],middleFinger:[9,10,11,12],ringFinger:[13,14,15,16],pinky:[17,18,19,20],palmBase:[0]};var sy=function(e,t){return[[1,0,e],[0,1,t],[0,0,1]]};function oy(e,t){for(var n=0,r=0;r<e.length;r++)n+=e[r]*t[r];return n}function iy(e,t){for(var n=[],r=0;r<e.length;r++)n.push(e[r][t]);return n}function uy(e,t){for(var n=[],r=e.length,a=0;a<r;a++){n.push([]);for(var s=0;s<r;s++)n[a].push(oy(e[a],iy(t,s)))}return n}function ly(e,t){var n=Math.cos(e),r=Math.sin(e),a=[[n,-r,0],[r,n,0],[0,0,1]],s=uy(sy(t[0],t[1]),a);return uy(s,sy(-t[0],-t[1]))}function cy(e,t){return[oy(e,t[0]),oy(e,t[1])]}var py=[0,-.4],dy=[0,-.1],fy=[0,5,9,13,17,1,2],hy=function(){function e(e,t,n,r,a,s){this.boundingBoxDetector=e,this.meshDetector=t,this.meshWidth=n,this.meshHeight=r,this.maxContinuousChecks=a,this.detectionConfidence=s,this.regionsOfInterest=[],this.runsWithoutHandDetector=0,this.maxHandsNumber=1}return e.prototype.getBoxForPalmLandmarks=function(e,t){var n=e.map((function(e){return cy(e.concat([1]),t)}));return ey(ty(ny(this.calculateLandmarksBoundingBox(n),py)),3)},e.prototype.getBoxForHandLandmarks=function(e){for(var t=ey(ty(ny(this.calculateLandmarksBoundingBox(e),dy)),1.65),n=[],r=0;r<fy.length;r++)n.push(e[fy[r]].slice(0,2));return t.palmLandmarks=n,t},e.prototype.transformRawCoords=function(e,t,n,r){var a,s,o,i,u=this,l=Xm(t),c=[l[0]/this.meshWidth,l[1]/this.meshHeight],p=e.map((function(e){return[c[0]*(e[0]-u.meshWidth/2),c[1]*(e[1]-u.meshHeight/2),e[2]]})),d=ly(n,[0,0]),f=p.map((function(e){return cy(e,d).concat([e[2]])})),h=(s=[[(a=r)[0][0],a[1][0]],[a[0][1],a[1][1]]],o=[a[0][2],a[1][2]],i=[-oy(s[0],o),-oy(s[1],o)],[s[0].concat(i[0]),s[1].concat(i[1]),[0,0,1]]),m=Zm(t).concat([1]),y=[oy(m,h[0]),oy(m,h[1])];return f.map((function(e){return[e[0]+y[0],e[1]+y[1],e[2]]}))},e.prototype.estimateHand=function(e){return Ym(this,void 0,void 0,(function(){var t,n,r,a,s,o,i,u,l,c,p,d,f,h,m,y,g,b,v,w;return Jm(this,(function(x){switch(x.label){case 0:return!0!==(t=this.shouldUpdateRegionsOfInterest())?[3,2]:[4,this.boundingBoxDetector.estimateHandBounds(e)];case 1:return null===(n=x.sent())?(e.dispose(),this.regionsOfInterest=[],[2,null]):(this.updateRegionsOfInterest(n,!0),this.runsWithoutHandDetector=0,[3,3]);case 2:this.runsWithoutHandDetector++,x.label=3;case 3:return r=this.regionsOfInterest[0],a=function(e,t){var n;return(n=Math.PI/2-Math.atan2(-(t[1]-e[1]),t[0]-e[0]))-2*Math.PI*Math.floor((n+Math.PI)/(2*Math.PI))}(r.palmLandmarks[0],r.palmLandmarks[2]),s=Zm(r),o=[s[0]/e.shape[2],s[1]/e.shape[1]],i=mf.rotateWithOffset(e,a,0,o),u=ly(-a,s),l=!0===t?this.getBoxForPalmLandmarks(r.palmLandmarks,u):r,c=function(e,t,n){var r=t.shape[1],a=t.shape[2],s=[[e.startPoint[1]/r,e.startPoint[0]/a,e.endPoint[1]/r,e.endPoint[0]/a]];return mf.cropAndResize(t,s,[0],n)}(l,i,[this.meshWidth,this.meshHeight]),p=zi(c,255),c.dispose(),i.dispose(),"webgl"===ji()?(f=de().get("WEBGL_PACK_DEPTHWISECONV"),de().set("WEBGL_PACK_DEPTHWISECONV",!0),d=this.meshDetector.predict(p),de().set("WEBGL_PACK_DEPTHWISECONV",f)):d=this.meshDetector.predict(p),h=d[0],m=d[1],p.dispose(),y=h.dataSync()[0],h.dispose(),y<this.detectionConfidence?(m.dispose(),this.regionsOfInterest=[],[2,null]):(g=du(m,[-1,3]),b=g.arraySync(),m.dispose(),g.dispose(),v=this.transformRawCoords(b,l,a,u),w=this.getBoxForHandLandmarks(v),this.updateRegionsOfInterest(w,!1),[2,{landmarks:v,handInViewConfidence:y,boundingBox:{topLeft:w.startPoint,bottomRight:w.endPoint}}])}}))}))},e.prototype.calculateLandmarksBoundingBox=function(e){var t=e.map((function(e){return e[0]})),n=e.map((function(e){return e[1]}));return{startPoint:[Math.min.apply(Math,t),Math.min.apply(Math,n)],endPoint:[Math.max.apply(Math,t),Math.max.apply(Math,n)]}},e.prototype.updateRegionsOfInterest=function(e,t){if(t)this.regionsOfInterest=[e];else{var n=this.regionsOfInterest[0],r=0;if(null!=n&&null!=n.startPoint){var a=e.startPoint,s=a[0],o=a[1],i=e.endPoint,u=i[0],l=i[1],c=n.startPoint,p=c[0],d=c[1],f=n.endPoint,h=f[0],m=f[1],y=Math.max(s,p),g=Math.max(o,d),b=(Math.min(u,h)-y)*(Math.min(l,m)-g);r=b/((u-s)*(l-o)+(h-p)*(m-o)-b)}this.regionsOfInterest[0]=r>.8?n:e}},e.prototype.shouldUpdateRegionsOfInterest=function(){return this.regionsOfInterest.length!==this.maxHandsNumber||this.runsWithoutHandDetector>=this.maxContinuousChecks},e}();function my(){return Ym(this,void 0,void 0,(function(){return Jm(this,(function(e){return[2,Qm("https://tfhub.dev/mediapipe/tfjs-model/handdetector/1/default/1",{fromTFHub:!0})]}))}))}function yy(){return Ym(this,void 0,void 0,(function(){return Jm(this,(function(e){return[2,Qm("https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1",{fromTFHub:!0})]}))}))}function gy(){return Ym(this,void 0,void 0,(function(){return Jm(this,(function(e){return[2,$d2cc08cc2aa8032f$exports.util.fetch("https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1/anchors.json?tfjs-format=file").then((function(e){return e.json()}))]}))}))}var by=function(){function e(e){this.pipeline=e}return e.getAnnotations=function(){return ay},e.prototype.estimateHands=function(e,t){return void 0===t&&(t=!1),Ym(this,void 0,void 0,(function(){var n,r,a,s,o,i,u,l,c;return Jm(this,(function(p){switch(p.label){case 0:return n=function(e){return e instanceof ja?[e.shape[0],e.shape[1]]:[e.height,e.width]}(e),r=n[1],a=Ui((function(){return e instanceof ja||(e=$d2cc08cc2aa8032f$exports.browser.fromPixels(e)),Bi(Ni(e,"float32"))})),[4,this.pipeline.estimateHand(a)];case 1:if(s=p.sent(),a.dispose(),null===s)return[2,[]];for(o=s,!0===t&&(o=function(e,t){var n=e.handInViewConfidence,r=e.landmarks,a=e.boundingBox;return{handInViewConfidence:n,landmarks:r.map((function(e){return[t-1-e[0],e[1],e[2]]})),boundingBox:{topLeft:[t-1-a.topLeft[0],a.topLeft[1]],bottomRight:[t-1-a.bottomRight[0],a.bottomRight[1]]}}}(s,r)),i={},u=0,l=Object.keys(ay);u<l.length;u++)c=l[u],i[c]=ay[c].map((function(e){return o.landmarks[e]}));return[2,[{handInViewConfidence:o.handInViewConfidence,boundingBox:o.boundingBox,landmarks:o.landmarks,annotations:i}]]}}))}))},e}(),vy={};vy=JSON.parse('[{"v":[584.3636022998351,344.8582126385048,-0.0012179464101791382,536.4664633715232,320.73722842007237,-2.5169224739074707,505.6124998906378,277.06574153944996,-4.851773262023926,485.2529214559489,235.75674954312223,-7.551764965057373,463.72816816556656,207.5160701578943,-10.202234268188477,533.8491170248549,226.61474306941537,-6.9158101081848145,528.9090818026452,169.64114913367018,-10.380249977111816,529.4954693655463,132.5758856354347,-11.671101570129395,529.5559189969154,100.27527109917494,-12.352293014526367,564.624495265506,222.2149359295692,-9.367969512939453,555.828928912913,158.1506078757208,-14.634042739868164,554.083455121568,114.66050479120493,-17.588485717773438,552.0418618073043,79.87090757073234,-19.273143768310547,594.2569511592052,227.00232417518146,-11.990437507629395,588.8807948804413,169.5328048359817,-17.606491088867188,587.8956879877167,132.0944647228199,-21.07335090637207,585.7469738220645,101.19789197602402,-23.156034469604492,621.9048500740382,242.818713986219,-14.757926940917969,625.3458566647054,199.54800978222227,-18.962493896484375,629.5033577133844,172.90978878006712,-21.696258544921875,631.2680604120477,146.85489049481203,-23.536596298217773],"lab":"papier"},{"v":[581.139077113274,346.5054987763471,-0.0008825734257698059,531.0627146075253,323.3559843275145,-2.9288320541381836,497.10705060925363,281.9897657094857,-5.5953569412231445,475.6960015566861,239.89003126215175,-8.161364555358887,456.0473832337364,210.6134960634259,-10.37359619140625,528.1062344943159,229.77414899073258,-10.361263275146484,518.6505539724089,169.88377303989418,-13.698031425476074,516.9660240303801,134.00951391052328,-13.588939666748047,515.0049725927973,104.8674930645952,-13.067716598510742,561.6352177582708,221.75873214857634,-12.12340259552002,549.419709096233,155.20870114220375,-17.705955505371094,545.4179983639648,113.33201316740863,-19.208662033081055,541.8754912218309,81.65125264320318,-19.38053321838379,593.7161896256781,223.43086831363854,-13.757440567016602,588.5596701234448,162.76885664345875,-19.22587013244629,587.12674625813,124.5223694907788,-20.9556884765625,584.4005325879037,94.20962431327433,-21.520299911499023,622.7914183018421,237.27663101653377,-15.460943222045898,630.3591767736862,190.33817995211996,-19.34925651550293,635.5778746963068,162.19464742447258,-20.829147338867188,637.901656656105,135.68603051570386,-21.2845458984375],"lab":"papier"},{"v":[573.6031991325705,345.47750156119207,-0.0008876696228981018,524.7794941890958,320.45423822135774,-3.859640121459961,491.7637213274761,277.6604275152787,-7.018222808837891,470.2835528875735,236.10175828629397,-10.347055435180664,448.5717674711234,208.4624530960707,-13.627950668334961,523.6691740335197,227.9860760987928,-10.28927993774414,517.2456641208819,168.57063947408824,-14.114402770996094,517.4386733640607,131.90352390458196,-14.886919021606445,517.2211211368781,100.07822094093665,-15.114534378051758,556.7466280898637,223.3190215176905,-12.756440162658691,547.2862018412304,158.0127977737917,-18.444658279418945,545.6884971804907,113.04916601629616,-20.969602584838867,544.2215934520793,76.79096821370227,-22.157875061035156,588.4461038617171,228.74370359544812,-15.375179290771484,585.0333988992356,170.56132372215978,-21.36117172241211,586.7772405510104,129.41792234882217,-24.563018798828125,586.6311401472227,94.40667727101079,-26.38443374633789,617.5775175815717,246.1713483378873,-18.22450828552246,629.0141160154889,204.2508507194595,-22.647968292236328,639.9115729616369,176.50266167614086,-25.25667953491211,647.1690569464771,146.76002921220066,-26.838531494140625],"lab":"papier"},{"v":[569.4060147415229,348.1276820060742,-0.0010231882333755493,522.300641845897,325.82614536593326,-9.013355255126953,486.4727624395383,282.9619665181357,-14.77433967590332,466.04725886619866,236.57849584816583,-20.11575698852539,449.1716204483175,206.05155445295517,-25.625469207763672,523.3127035956886,230.85539011968314,-14.62448501586914,519.8068288156674,172.1019391930529,-19.721328735351562,519.9292675335735,133.66861350507833,-22.398807525634766,519.9351680266554,99.43743563616485,-24.216503143310547,557.6080306806663,226.84264031794785,-15.612715721130371,549.8649173529795,165.68391809985602,-22.122364044189453,546.077621312294,119.58198299938297,-26.80948829650879,544.0826669595153,81.37071889073903,-29.51058578491211,589.9487379220643,233.58976253831392,-17.256391525268555,593.9266090955421,179.9858709204493,-23.69894790649414,598.8039959494878,138.16437655970606,-29.07683753967285,601.7646717283366,102.4281375545059,-32.593814849853516,618.2730549652471,251.42406292953285,-19.59078025817871,634.2572838615737,214.26016519293563,-25.146116256713867,646.2956878288347,187.88815980299503,-29.41385269165039,655.0426195084794,158.31829038657906,-32.26487350463867],"lab":"papier"},{"v":[570.1530762103721,346.775358854963,-0.0008332207798957825,522.8793770170037,321.59442751929066,-5.839845657348633,488.03240638541956,276.97013382476223,-9.780633926391602,465.77850327295494,232.48399197484795,-13.978447914123535,444.27980928114107,202.70902758902068,-18.274024963378906,521.5439970187525,225.73616459491154,-10.06639289855957,515.8823928840795,168.87563682374457,-14.41877555847168,515.0921244125987,131.83158432572242,-16.798322677612305,514.1006807416045,98.67828228871753,-18.615814208984375,555.152504014205,221.16074956660066,-12.500142097473145,545.9084388899913,160.31317934978145,-18.374671936035156,542.7296733546061,114.85327369578266,-22.549957275390625,540.7987036258202,77.07929326037967,-24.992883682250977,587.5582790941037,228.01649571484725,-15.537861824035645,588.5378040775169,174.43193797794603,-21.543184280395508,592.1482376329641,132.82969951547918,-26.173795700073242,593.7011243815452,96.550097842871,-29.222726821899414,616.9372857470464,247.4880842052482,-19.109773635864258,629.6870661642322,209.6731020032918,-24.12285804748535,640.7544518974421,183.0236260279442,-27.63009262084961,648.5707916064172,153.17360355706228,-29.99038314819336],"lab":"papier"},{"v":[575.1891371670642,339.4714131556587,-0.0008425787091255188,524.6283345274063,313.7097842141471,-7.0874176025390625,488.90221330595546,270.3533587571137,-11.665165901184082,464.7500621094088,225.3459303061257,-16.146848678588867,441.47243092632834,194.29281683707856,-20.70448875427246,524.4607901681867,219.32263058452543,-11.632038116455078,519.0926346151031,161.55088727659472,-16.029861450195312,518.8858771627664,124.0256491604603,-18.113327026367188,518.589734983133,90.96986137749265,-19.6999568939209,558.7860078341079,216.03002269878127,-13.231582641601562,552.2771766473866,154.95450981207705,-18.881820678710938,550.1146219562193,110.76565270401679,-22.8211612701416,548.6614277282532,74.84373211356443,-25.44285774230957,590.7881833582319,222.9448063778828,-15.382615089416504,590.1478177090974,169.50383485627913,-21.563920974731445,591.5909064252006,130.31935914623006,-26.358652114868164,591.6568261684763,97.7334370710246,-29.566715240478516,620.1393664380698,240.4977390802334,-18.094947814941406,632.7603941627578,203.2529427215231,-23.098491668701172,642.3149259525371,176.62229247882007,-26.63705825805664,648.9128990342736,148.6447131745851,-29.090787887573242],"lab":"papier"},{"v":[573.9917553557055,343.55746537738037,-0.0009207949042320251,523.4554091820312,318.17740369319097,-6.959974765777588,489.1528061013386,273.0568856896959,-11.62256145477295,468.4286832406631,227.26283712686273,-16.433063507080078,447.4979974425238,194.93501506598716,-21.45425033569336,519.1003535280302,221.04215579685098,-10.91989517211914,515.1310243979099,163.5164218487256,-15.701505661010742,515.9735227897771,125.45623054459956,-18.42620849609375,516.7741674738446,90.9913715661838,-20.53827476501465,552.6570940608696,218.98574060453132,-13.290406227111816,545.1961943441211,158.22700263780942,-19.50633430480957,542.5561472997464,112.28835130770328,-24.226089477539062,540.7922048867199,74.04898761833755,-27.291236877441406,584.7872107996762,227.58730065947935,-16.34201431274414,584.5196911599539,173.77174195934572,-22.947193145751953,586.3109573508144,132.83901227696285,-28.205923080444336,586.3854105722554,97.48075693767929,-31.795263290405273,615.1173479005972,247.50946290097244,-20.020286560058594,627.6217499156862,209.66042419021719,-25.624311447143555,637.6908789994831,182.50743163278153,-29.753597259521484,644.5445583977203,152.5706932595402,-32.6963005065918],"lab":"papier"},{"v":[575.5790694749602,330.8762534832794,-0.0011908113956451416,525.1698008373415,310.30193926432247,-7.621294975280762,488.99837874560757,270.5252466900175,-13.242042541503906,463.3648480341251,230.49579703833513,-18.552539825439453,435.9130484685478,203.9917304914636,-23.954837799072266,520.746220334537,216.5682880014558,-14.513233184814453,508.94215697082177,163.44924045019724,-20.442947387695312,504.41713932289616,127.88254908683103,-24.34674644470215,500.82234245223015,94.293464851273,-27.4687557220459,555.4427108702325,212.72465797251988,-16.08184242248535,544.3770732002417,153.346471620756,-22.91790771484375,538.4934981916501,109.26673336604546,-27.89989471435547,534.1623339084972,72.30038623597581,-31.693588256835938,588.3520776733163,219.9834910486001,-18.045400619506836,584.8393961752627,166.96428816497016,-24.744773864746094,583.5786524303684,127.70818357887723,-29.803985595703125,581.4910590157693,94.43136771256928,-33.79084396362305,618.5332667637448,238.47947388376335,-20.631736755371094,628.3665496742952,201.67807666930017,-26.05116844177246,635.2936219827388,175.69489414533078,-30.13573455810547,639.7036614410823,147.93340423432545,-33.46797561645508],"lab":"papier"},{"v":[573.0293845460171,334.39203703184126,-0.001330047845840454,521.8205368686788,312.2760002157519,-6.874639987945557,485.65857445470135,272.3975344614234,-12.325872421264648,459.60122136660175,231.3603606947469,-16.800535202026367,431.2981727092023,203.2064170826869,-21.104734420776367,521.7421603474987,219.63677269518655,-16.84900665283203,510.7646459054303,160.94560230594794,-22.095163345336914,506.8827992301851,125.56054058665305,-24.49646759033203,503.90952239284076,94.44962144066615,-26.07429313659668,557.1378609858414,215.5698165482782,-16.542015075683594,545.8754904813785,151.48223740200044,-22.63405990600586,539.9958280978274,109.6290811324336,-25.476837158203125,535.4534348711078,75.96444386690114,-27.290620803833008,589.1596696917056,221.40012240425037,-16.02652359008789,584.3646480601429,164.36324469363342,-21.142831802368164,581.9427512180976,126.55666109341362,-23.660982131958008,578.9886601929634,95.9248780198837,-25.426881790161133,616.8671190034784,236.82455610937498,-15.86021614074707,624.9817307533876,194.80596227156855,-19.37699317932129,630.5522555429493,167.70872388727219,-21.49569320678711,633.5876313700796,141.1718135617573,-22.97478485107422],"lab":"papier"},{"v":[568.78008814664,329.2185130362259,-0.0009428039193153381,520.5428503498268,306.9730705147576,-7.738238334655762,490.1698374178425,266.31310961193816,-13.371208190917969,468.74201300770375,228.3090744203625,-18.61046028137207,441.1446689108158,202.43618646506044,-23.814594268798828,516.6783275650286,217.10883281132288,-15.081289291381836,507.83958124517824,164.59501651718682,-21.288938522338867,505.93110005974944,129.538364090921,-25.04487419128418,504.4780135577404,96.74152841676329,-27.82912826538086,549.5000363888286,213.60906447107237,-16.7725830078125,540.2199154925855,152.44199638562208,-24.31387710571289,536.719355439872,109.22290333275268,-29.230897903442383,533.7785180751612,72.92097643463008,-32.62953186035156,580.5602582347642,220.18071454446817,-18.920154571533203,577.8691494370826,164.54613512034445,-26.52426528930664,577.1294676483581,126.45992848368546,-31.695085525512695,575.2486659669758,93.34162681260408,-35.44078063964844,608.8391024551064,238.55865155055565,-21.679428100585938,618.388954335224,198.71228023912136,-27.694154739379883,625.2268628155241,173.84128365540838,-31.931903839111328,629.5790231201563,147.22053950481748,-35.250823974609375],"lab":"papier"},{"v":[538.195751974494,289.9437630915619,-0.0002788528800010681,513.6561079295822,233.04878934604466,-0.3848091661930084,503.55645205396985,200.37630352866194,-14.388331413269043,493.6875793484648,176.5104221548346,-30.681968688964844,484.0742900860609,159.572027357383,-46.18269729614258,556.6391433557931,176.07469780451308,-45.256954193115234,497.0614034565156,156.53661263563046,-55.7399787902832,477.2770109559107,178.48678124117063,-37.819515228271484,480.37123065655453,192.34351264471255,-23.496925354003906,562.9123965954401,207.627409918373,-54.456233978271484,491.666864418997,182.4112532191876,-70.49252319335938,471.3225640896171,205.27474903156102,-47.06087112426758,481.9416481400016,214.90370567201802,-32.784358978271484,557.382182717946,240.13752365443068,-63.837406158447266,488.3124016797563,218.4204443832592,-73.43110656738281,473.71148034446855,233.72055043510352,-50.52389144897461,482.35969045608726,241.892364170196,-38.54475402832031,546.4755729140975,272.1378859981672,-73.54330444335938,489.98383663856896,251.93902944286822,-74.71871185302734,479.15723263687255,257.1702564541371,-57.4919548034668,487.6088240776054,263.46859765738986,-46.97388458251953],"lab":"steen"},{"v":[537.3191578875076,289.9623039948419,-0.0006425008177757263,507.492623441897,228.0837333210917,-2.8529837131500244,493.57191429284427,197.39725931282365,-19.250530242919922,478.93627121117817,178.82020672297645,-37.08840560913086,467.02592293294015,166.64320164121307,-55.120033264160156,558.4894347251231,172.35144609550395,-47.49673843383789,498.9900891124934,156.5331700126044,-64.46815490722656,474.0730967640195,176.66883281226248,-51.68016052246094,473.51323966331535,188.89059329653423,-38.36751174926758,564.8057073807527,208.6131733280797,-56.23469161987305,498.24988386692326,186.21320608466854,-78.29875183105469,472.54572894593167,204.89262329385164,-56.70402526855469,481.8538230576231,210.52732993627535,-41.56343078613281,558.5219803299029,245.22948814044216,-65.94865417480469,494.8447109397213,223.85491415437616,-81.60087585449219,475.69423288317785,232.8752231569121,-62.387611389160156,483.024308759153,237.1154468539335,-52.15021896362305,546.3420271873828,279.640573757109,-75.75807189941406,495.2417456563732,258.74631494034946,-82.14759826660156,481.6044702064056,258.8684189454356,-68.0387954711914,489.136541411895,262.32486582531067,-59.48326873779297],"lab":"steen"},{"v":[530.3412260455144,283.4880512103687,0.0008165091276168823,527.2747377678662,219.9771652373687,-1.472488284111023,530.0629245922046,180.14426037503807,-12.578084945678711,539.5230701523435,150.17680428269006,-22.275117874145508,554.0756433633034,127.9440000855428,-27.092348098754883,555.5223513695526,181.1012794904642,-48.04499053955078,486.6925036206853,156.34535197691923,-58.67543029785156,475.3100031790335,169.405019485323,-54.93815612792969,483.4536616983847,177.5509145254209,-55.153743743896484,553.2658055407873,216.55832917152773,-54.21162414550781,487.523439156558,190.74186781550162,-66.26200866699219,474.156573508076,199.48581951000932,-52.51084518432617,478.11052907830697,203.65649721499253,-48.57037353515625,544.0628001067531,251.25043282666087,-60.38629150390625,486.6160047839048,224.29146264412066,-68.3635482788086,476.4061006743287,228.63003824467717,-51.787174224853516,480.15545478253614,232.40144714770815,-45.911155700683594,530.3446936551042,282.8435230719965,-67.45352935791016,489.4875919717023,258.8018708853719,-74.66928100585938,480.75315410290864,255.06076586293582,-68.46416473388672,480.12035158798574,255.11169155918657,-68.71919250488281],"lab":"steen"},{"v":[532.8854582911724,279.71653203385455,0.0010924860835075378,527.8384557601322,213.11597383217804,-3.9424757957458496,529.5673659808994,174.76244031349705,-15.4100341796875,538.0176483552959,146.6202490313105,-25.059621810913086,551.1504583912308,126.87103922506807,-30.812572479248047,556.896883572423,177.52272450224652,-50.61930847167969,493.229702062415,156.07255795411228,-64.57262420654297,477.04075853905283,167.4162667658549,-63.732421875,481.0914337415272,175.23747397773954,-65.268310546875,552.5423477372964,213.273910779889,-55.809295654296875,494.4788068305852,189.77223732862035,-72.57528686523438,475.8440410406851,195.55968107529532,-60.83714294433594,478.4564116104994,198.69124676352348,-57.13677215576172,541.542692598128,248.74642805382268,-61.12120056152344,489.864779021555,223.47292851411996,-73.499267578125,474.95588697587635,223.72466112928882,-58.844627380371094,476.69377412002234,226.15473910514214,-53.884178161621094,526.5258934966378,281.0316155244148,-67.19789123535156,489.74717018386286,258.3915275976329,-77.12751770019531,478.47794154530175,252.5887353883511,-71.88191223144531,477.4622203018231,252.94354126449582,-72.4321060180664],"lab":"steen"},{"v":[524.1440477676545,288.4541200161958,0.00009150058031082153,509.3516790546353,231.52077031996558,-3.6843862533569336,502.42210545798724,193.56105532926904,-19.939048767089844,495.1822323221076,166.61445673874738,-38.15919876098633,491.04363730028473,151.44273012410622,-51.89633560180664,553.5708741808585,174.49525848218582,-49.939430236816406,495.65883553965347,154.5649234415055,-64.04389953613281,472.5469747758014,173.67992427873122,-44.401588439941406,473.274050700773,189.22354483022895,-27.252662658691406,558.4954746019894,207.32272531375708,-59.10639953613281,487.6113656600288,181.79509732311521,-76.23477935791016,472.7705763075679,201.17785137433404,-51.37144470214844,487.16837756097493,212.46408699911564,-36.06968688964844,552.7868299668157,239.60922975551722,-69.05294799804688,482.540696160014,217.92036687103243,-78.5174789428711,474.2272977303691,231.31798827712245,-51.80777359008789,486.88930596923876,239.415398915821,-37.455909729003906,540.5863699666589,271.6641523805952,-80.22259521484375,481.3802599316849,250.76653898310454,-84.59423828125,473.20753504461254,255.66567988111223,-68.961181640625,482.8632881226231,261.85782280613444,-59.962276458740234],"lab":"steen"},{"v":[520.9968369022823,278.7740056703275,0.0010238215327262878,512.9995920811017,222.23509628910563,-9.80614185333252,506.31783346633074,186.27562410015972,-29.358840942382812,496.85069023889764,163.10660528317118,-48.27663040161133,488.19964805942686,155.0991834547812,-59.85673904418945,549.181969885722,172.94048710020513,-58.16280746459961,490.7039605129596,160.43042341881028,-68.41181945800781,475.1306362480507,174.58299736928956,-47.5572624206543,479.9968260088618,183.22405057904064,-33.549861907958984,553.024423774153,206.316674458656,-64.04706573486328,485.157835884219,189.44330193837175,-78.2679443359375,477.2305054079548,200.9293079964577,-54.61867141723633,492.10646919694454,204.7100753474078,-43.579166412353516,547.6649957558096,238.62956870648577,-70.9997329711914,479.79075982783445,224.96519662647927,-75.84947204589844,476.90368544831756,230.27003680529563,-47.38398742675781,489.73608869210955,230.62399570996652,-33.937095642089844,534.3645645951455,271.18723370907037,-79.97050476074219,478.7888417643204,252.80366829745606,-82.36552429199219,474.4934459487285,254.52139129109315,-68.41804504394531,484.3512152591162,258.1986234568231,-63.526268005371094],"lab":"steen"},{"v":[526.8613723958966,272.82797964813,0.0013133883476257324,519.5971974660824,219.44426989185445,-7.826236724853516,508.89364948065537,185.4180774121493,-27.993743896484375,495.5627699423681,162.1570699190835,-48.267784118652344,484.7059033133682,150.43223778427372,-63.384151458740234,554.0489364179699,177.04863922912702,-59.252254486083984,490.4339592111877,159.63869105807854,-70.79891204833984,467.1943147393676,171.07349136710224,-52.69227981567383,466.19773793030043,179.95926203299996,-39.03916549682617,553.3602991147734,211.0580013763045,-65.79192352294922,482.8798227693556,187.57364065050973,-79.96331787109375,468.4732859830031,198.70532639859118,-55.82829666137695,482.4303064385462,202.48555279110778,-44.33899688720703,543.6238752392701,242.71787181800718,-73.17771911621094,476.7309599360424,222.6372667892121,-78.1341552734375,470.2884173459014,228.95971557366542,-50.175079345703125,483.4524366601264,230.92172194688118,-38.15315628051758,528.1119734174888,273.83989110454837,-82.44367218017578,474.583048987714,249.66483077548514,-82.91389465332031,468.5963053437788,252.37433581498158,-67.46066284179688,477.97479650672153,258.38388518692216,-62.04243087768555],"lab":"steen"},{"v":[513.2929345455085,276.41590093735255,0.0013218149542808533,510.0042732343564,214.87967848244355,-9.464064598083496,510.1138708476409,179.08529523675557,-25.69178009033203,511.8404882824189,153.16226614375583,-41.61016845703125,511.170363160338,139.87912719891875,-51.858882904052734,545.0993535924212,173.92065918469396,-55.8289794921875,495.8661852981024,157.07932340477254,-73.56281280517578,474.36703075003135,165.28048988685936,-63.4337272644043,472.4243871728559,172.8443515150617,-53.9356575012207,542.9014273220041,208.9309721962906,-61.40686798095703,487.6754159382895,188.58693138032402,-83.15996551513672,470.37195407853187,195.58331688069075,-62.640045166015625,477.2055997020377,199.7433560057265,-50.38724136352539,534.4578986466726,242.9028173713429,-68.83198547363281,481.52018730741213,226.59922335213656,-85.06934356689453,470.38339043191746,228.0068958774774,-63.10184860229492,476.07596328981805,230.37240769671192,-51.29475402832031,521.4958692917016,276.70413739760966,-77.82958221435547,478.6721647258698,260.04730543615517,-85.97480773925781,471.8052015574074,258.6024475407044,-74.08308410644531,478.0745099205883,263.0058972825538,-68.44050598144531],"lab":"steen"},{"v":[517.0371756674766,279.59698838637087,0.0013071820139884949,506.48933036500864,216.6545695562472,-12.64454460144043,499.46457121371753,182.85796462127536,-32.05168914794922,490.36435738785985,161.2729300500702,-51.30995559692383,478.4550182461708,154.28902434050718,-65.01606750488281,551.7129261656997,175.21981873388455,-59.57912063598633,495.7095796323321,158.74798572589805,-76.95040893554688,470.0879886550528,169.40113948698888,-59.09589767456055,469.6265253718934,178.04250986382468,-43.75523376464844,553.8675220413837,210.05323606553338,-64.66889190673828,487.1639024761965,187.21418915327484,-87.28361511230469,469.1030202078806,198.0984103308141,-63.093990325927734,484.67344258954193,202.60135743782666,-47.635040283203125,545.797073506229,243.22856034462177,-71.78461456298828,480.51000860020497,224.8303079798236,-85.75739288330078,469.66456648395746,228.97082953110566,-58.89521408081055,482.9922412690827,230.76768303823735,-44.25111770629883,531.3827666103177,276.371532164776,-80.57324981689453,479.1272654555007,257.1998836423212,-88.77717590332031,470.2178218028017,258.587091906958,-75.72663879394531,482.0687054467374,263.7113026890336,-69.28401184082031],"lab":"steen"},{"v":[511.39866586416997,261.4437670517408,0.0007076337933540344,507.83376358453125,213.8394958145106,-12.767600059509277,510.2632541836462,181.30904043983838,-32.364620208740234,510.27763505044527,161.2308362466638,-49.82331466674805,508.8566765459219,148.91093353977163,-61.08038330078125,532.2127762182047,179.15657447193593,-67.60813903808594,481.881513218516,158.5924378966513,-75.26902770996094,478.5443647587452,173.4027657244719,-50.49779510498047,486.44622175897246,182.6400473172435,-35.27857208251953,533.0473593109795,208.27701725998463,-70.02549743652344,478.54717366639466,187.66890838345722,-80.22380828857422,481.6866161228416,197.22501371968625,-56.11486053466797,491.7125586744375,198.65816932444295,-48.72602844238281,526.2038342748552,238.08067301069894,-72.62295532226562,470.64172169189106,220.98801950159609,-72.33484649658203,477.2246135359221,227.8278212973668,-43.13076400756836,487.2252772544675,227.28402624075292,-31.652050018310547,512.4024068889736,268.13912574408835,-77.39008331298828,468.3542609446537,249.49782359122426,-77.56981658935547,473.61341613092804,253.71121208375476,-63.0361328125,481.98887904677576,259.02920769087626,-59.438899993896484],"lab":"steen"},{"v":[493.5966369241935,336.2335518603207,-0.00044964998960494995,467.88469874626037,326.2682706039627,-16.756629943847656,464.3043598926255,303.55182965762765,-26.19772720336914,488.970474792403,289.52831514059926,-32.965248107910156,511.0450741767731,279.1209758040322,-38.74750900268555,468.34925271567124,232.4031942651318,-16.649192810058594,459.2136631332276,189.51249246908378,-26.38497543334961,451.5629664694757,157.47170556089776,-32.768646240234375,447.70523806749304,130.87457473180737,-35.05501174926758,501.49940326775817,228.39206183125472,-13.34315013885498,519.4792599323682,190.15162281075598,-21.31914710998535,540.1754788645036,156.36492989351103,-28.093629837036133,559.6908443532122,125.13300078349059,-30.734642028808594,526.9795137540194,234.92017224315651,-11.7717924118042,541.7820331648618,229.7793130172239,-23.867938995361328,527.2158331160261,272.77450228962107,-27.58234405517578,515.4330197521945,299.9833694353724,-26.250370025634766,548.1039392688808,247.6223320570533,-11.817667007446289,564.5710799380538,221.89220944162275,-20.302080154418945,568.4245453134475,209.40018806884362,-24.027969360351562,567.5473823647686,196.48952445576998,-24.90315818786621],"lab":"schaar"},{"v":[490.37070014739805,334.90779685013433,-0.0008138343691825867,467.5460372176634,321.23621714093366,-14.554636001586914,464.44617675413963,295.88015860473797,-22.488012313842773,489.5603340829648,280.32293923790627,-27.967039108276367,513.2022065889524,266.7090439166842,-32.33863067626953,467.7828063746981,227.90763415341198,-13.458791732788086,456.1737912339363,187.31495772796262,-21.971757888793945,447.1655871937512,154.1997910076921,-27.99267578125,442.75882444031373,125.63504128130297,-30.636642456054688,499.4359661333971,225.62583102026673,-11.048994064331055,515.126797444045,188.5219047564946,-17.498931884765625,535.0392922821572,150.9571099548233,-24.51071548461914,554.5195364720095,117.38304717277184,-28.843244552612305,523.7208430017945,233.6636442816656,-10.12136173248291,535.0189694283551,230.63606971504566,-22.955076217651367,516.8122927399402,265.70471996109774,-26.34657859802246,502.90084238139167,287.3200468633331,-25.17355728149414,542.2807128888222,248.3515859101544,-10.285818099975586,550.0957503630129,232.5134132459662,-21.150938034057617,545.1587261498736,235.77082420446902,-23.390243530273438,538.8001943974133,238.20121554679588,-22.896940231323242],"lab":"schaar"},{"v":[494.07931578350025,333.0414535303503,-0.0006754323840141296,469.15171772616895,321.36875650952453,-14.779594421386719,464.23786899833686,300.73432829693866,-23.330568313598633,484.2983301637495,291.68702500265385,-29.47504997253418,501.0980660084588,281.76040418477874,-35.31839370727539,466.76337935563697,227.62210239442277,-15.943683624267578,456.18494198046596,187.38006426568026,-25.643110275268555,447.4448546717227,154.60811064060806,-33.51279830932617,443.0301509534575,128.2183193260647,-37.751121520996094,498.3333831924864,224.0440630764444,-13.938249588012695,515.2236792641386,183.06091240926415,-20.746734619140625,536.0824104233421,146.2282424994426,-29.307340621948242,557.4038897950066,112.4693510016466,-34.98836135864258,521.0000346016707,231.24293174922028,-13.124701499938965,535.9313656647489,226.5743789785902,-25.17620277404785,517.8558106992383,269.0860281687691,-29.090003967285156,502.6949372145877,297.30707794537824,-28.809810638427734,541.0386553878907,244.77340580096626,-13.618965148925781,554.292504332296,223.4964281916251,-22.141576766967773,555.9202266326782,219.75800403118902,-24.509998321533203,554.546291534361,216.6975231287031,-24.93602180480957],"lab":"schaar"},{"v":[491.3788961721365,335.7843090694921,-0.000688113272190094,465.8992608887664,319.6566554737939,-14.616288185119629,462.3460946471071,292.0651135034261,-22.627981185913086,485.3547535452176,273.9556926272669,-28.51972007751465,505.4422573344537,260.01594946216875,-33.86317825317383,467.45173991637046,225.2964036965975,-13.679952621459961,457.70514876081995,182.72092974763967,-22.47502899169922,449.9006183423404,150.6911158365568,-28.56345558166504,446.1663588543503,124.2729457352892,-30.965728759765625,499.61755524522937,224.89217085195088,-11.436535835266113,515.9795125751489,187.963215890637,-18.732545852661133,535.5756960045959,154.33936716185673,-25.571134567260742,554.8654640938794,123.46860540780311,-28.568626403808594,523.9971938730175,233.6426631617872,-10.803321838378906,535.2930157342252,230.20603186812224,-22.757123947143555,516.3763193670012,270.8571365356426,-25.80141830444336,501.32075981372316,296.4265541222152,-24.149930953979492,544.2753975526444,247.77006725364123,-11.555620193481445,556.2396671511849,224.949051325872,-20.138336181640625,555.4231507589969,216.99355283955404,-22.52840805053711,550.6308089560472,208.60773172353277,-22.391098022460938],"lab":"schaar"},{"v":[489.0014300980623,333.477392852216,-0.0007387176156044006,465.7832653096405,318.0188050821727,-14.98550033569336,460.8594795701357,292.9626939348699,-23.781972885131836,480.7505325316711,279.84660654914705,-30.460498809814453,497.03093610928335,267.5730765235723,-36.749305725097656,468.1297548993981,224.86187186478332,-16.11237335205078,456.73699159837344,185.47557678041662,-25.16892433166504,447.7466631148793,152.8681331145932,-32.562660217285156,442.9815764194972,125.36386569585014,-36.73611068725586,498.6669616423105,224.82643046233238,-14.691636085510254,514.2113400543609,186.13497838326657,-22.199466705322266,531.5657947251897,149.42193861618907,-29.768678665161133,548.5284666464152,116.28112577896769,-34.087974548339844,521.0192123127089,235.39187957573165,-14.760417938232422,533.9753954861419,229.0496430223362,-27.504884719848633,512.588276435412,268.34009667076486,-31.591678619384766,495.0578653178904,293.56270987681927,-30.888713836669922,539.2638260102374,252.79980427526817,-16.20795440673828,552.569120762694,231.4362226672031,-26.815120697021484,551.2283949537486,225.74069668887745,-30.422382354736328,546.482539869058,220.03111683300975,-31.06121253967285],"lab":"schaar"},{"v":[493.28218605160805,330.638664874277,-0.0002750977873802185,467.76607786410375,320.4753728180768,-18.996261596679688,458.88394691252375,296.22621241154053,-29.788339614868164,481.7996403062843,279.25053875448225,-37.9317626953125,504.7817558574754,268.10019388216926,-44.74348831176758,468.0959262226804,224.43397571675837,-17.840471267700195,457.3566494558248,183.07443444868423,-27.908145904541016,448.6188360442519,151.9871561726032,-34.15876007080078,443.8570556350169,125.33249052584208,-36.40547180175781,501.29611333287386,221.02856367895464,-15.237336158752441,519.9730114243835,179.7375316563077,-25.549392700195312,543.0070907459551,149.07783868766734,-33.83113098144531,563.2581227293036,121.65386862338092,-37.36323547363281,527.1481313682655,228.43017442061645,-14.669062614440918,542.042656387731,215.55998525623738,-30.4094295501709,527.092443038719,250.4188913178723,-36.104705810546875,515.2253068727875,273.3202157440478,-35.386653900146484,547.1218348007625,242.46974930750594,-15.688026428222656,562.4955310572094,216.30843283482125,-26.710588455200195,562.4279714426121,204.00062010363223,-30.893482208251953,558.6789867748556,191.61680473071618,-31.613338470458984],"lab":"schaar"},{"v":[492.9842861409103,337.3088746581818,-0.0004847869277000427,467.4433306447724,322.6451008149784,-15.332282066345215,459.91377622631245,296.31881101417594,-24.04120635986328,480.884646093194,280.97449937955656,-30.7569580078125,502.28972854295085,267.3133539895269,-36.48244094848633,468.82667409658393,223.3127818908585,-14.03201675415039,456.1647517595677,183.502642087859,-23.497636795043945,446.97303146319314,150.61738731283472,-30.300508499145508,442.19867939326207,122.97922716898468,-33.63833236694336,501.12334779841586,221.76409988633773,-12.910473823547363,518.3369253240622,180.4925133478455,-19.736717224121094,539.3100186905026,143.13284616132324,-27.25169563293457,559.8288056483642,107.83068880443571,-32.05208206176758,524.6275794001779,232.05866049203578,-13.481697082519531,535.3377086840057,225.5301529790217,-27.404380798339844,513.3258660284185,265.76768831032774,-30.35863494873047,497.1550909838281,291.72408760063854,-28.71221923828125,543.2237585439738,249.58039647044592,-15.406858444213867,552.3080986552357,227.266981266237,-26.12554359436035,547.6742202016123,220.5577596048977,-28.04680633544922,540.7562403612192,214.74887190114674,-27.49437713623047],"lab":"schaar"},{"v":[490.11930295479385,333.1902841823123,-0.0010205954313278198,464.107850039575,319.2592796846733,-15.534199714660645,454.7410625829008,294.3732903748736,-24.727399826049805,476.2607615047449,283.83256181581,-31.354036331176758,499.8816412191214,273.76006440902495,-36.427738189697266,465.12871763744647,222.05078868576686,-15.231529235839844,453.91328947242584,184.99464398890126,-24.381784439086914,446.53014356222445,153.18136841062525,-30.700654983520508,444.09161188139296,123.99743364366886,-34.2733039855957,497.32980202642614,219.87595538645752,-13.429584503173828,513.2082024490203,182.4002413347244,-20.903287887573242,535.179306291644,146.91951729456528,-28.132461547851562,557.7412626321102,114.27647799045276,-33.441261291503906,522.5407984343423,228.43965542143695,-13.168002128601074,530.5327033776289,226.40063674590215,-26.931236267089844,509.32471581889286,261.43614220678023,-28.7949161529541,494.6732665161171,282.59182169215137,-26.89972496032715,540.9539193579611,245.87288113637092,-14.154565811157227,545.8224518582298,231.29226952963134,-25.769235610961914,538.9737193560597,233.63284570375654,-27.188888549804688,532.6610472281451,235.14151948304306,-26.241069793701172],"lab":"schaar"},{"v":[488.4224819484858,324.08409378234825,-0.00039359182119369507,463.1440131919948,313.22780016699306,-16.735889434814453,453.48370779476664,288.18083304424727,-26.801898956298828,477.1564911209177,276.7792056744597,-34.655426025390625,502.9656101763007,272.8473758399328,-41.09756851196289,463.0666106528843,217.18258092681694,-16.263689041137695,452.57137028642603,177.64941316768713,-24.116310119628906,444.84549607533097,147.2792646143964,-29.714385986328125,441.8219372164497,120.36816434557538,-33.144962310791016,495.8511738857077,214.0833747457874,-14.361132621765137,516.7995495894196,171.1200744627337,-21.43455696105957,536.5462544171883,134.8779965253116,-29.151599884033203,555.046296810456,102.45094673290652,-34.44422149658203,521.0968238418718,224.53536715834656,-13.938750267028809,535.0104025949087,211.78240977572983,-28.61503791809082,519.3359277486148,246.6236120451298,-33.181373596191406,509.43378689754434,270.544624588062,-32.40216827392578,538.9270282854734,243.88277151244995,-14.69406509399414,544.9236483883735,232.6776183875333,-27.998149871826172,533.0402168592127,250.9683609966507,-31.426593780517578,523.0931505966034,268.38274863416206,-31.380481719970703],"lab":"schaar"},{"v":[492.94409899045615,320.32517494104974,-0.000551365315914154,466.29474311482505,312.59108467633484,-17.061382293701172,453.2700144275057,291.41465078644586,-27.32697296142578,475.4156867596481,285.49462331336224,-35.006004333496094,501.67653187143014,283.7120809575502,-41.12029266357422,461.7834886339558,216.11426858497867,-17.05282974243164,450.69400095947424,181.52310994215122,-25.088973999023438,443.79262667624437,151.48707212378835,-30.678144454956055,441.70836149163335,123.6341382869009,-34.271217346191406,495.60022551452585,210.53202570100768,-14.842132568359375,513.2078762478172,173.35056266999027,-21.306577682495117,532.5537527089358,135.07002754368855,-29.095075607299805,551.5199302935105,99.91365988047332,-35.34737777709961,522.9517525227658,218.39829347710054,-14.070223808288574,532.856662857869,215.56886832752468,-28.328399658203125,517.9831376809577,251.47724330055297,-31.532854080200195,509.37249070283104,274.1650438677776,-30.43524932861328,542.1663749368269,237.08399510029918,-14.538322448730469,545.401442461749,229.15805545184008,-27.398263931274414,535.5062561778582,243.11747772264738,-29.608051300048828,527.5164419279855,255.59379234871543,-29.042587280273438],"lab":"schaar"},{"v":[194.07945619774122,329.0959744589758,-0.0015563517808914185,217.2252336775332,310.0578093531891,-10.81009578704834,214.66813100069223,276.9099738977396,-15.321310043334961,179.310794865247,248.78370758643408,-17.635007858276367,145.62025303097965,232.86327804383944,-17.775279998779297,219.7202121961483,228.9949348535478,-10.660587310791016,239.9807658674584,183.07848567886498,-16.63275718688965,253.11254106013683,152.10276888809506,-20.834360122680664,262.3614231247789,126.3981625878482,-23.145118713378906,190.7988069108816,225.00447120566918,-8.788702011108398,181.96522232856555,172.23055420200654,-12.736844062805176,175.54376560422244,135.95770924816162,-16.580530166625977,171.21640500028298,106.41346604675631,-19.170089721679688,167.19288607904323,233.08648016011617,-8.011005401611328,156.5305136194891,209.74366697641975,-14.17257022857666,166.37357688292587,235.48587645536463,-15.46506404876709,175.0950163581162,253.4678284724469,-15.064334869384766,148.5237092459846,248.23660149726112,-8.49127197265625,137.05439523032788,224.83730792204332,-13.965105056762695,138.60667440129836,223.35115561022752,-16.588642120361328,142.70739147996738,224.07798719439847,-18.15764617919922],"lab":"schaar"},{"v":[193.39357005556815,326.0192948703026,-0.0012854188680648804,212.98385505549646,305.42548055688906,-11.917956352233887,209.62941948319488,272.738822974133,-17.19393539428711,172.1114182592804,247.1006308079505,-20.19689178466797,138.4572399965856,233.45050915617588,-20.142120361328125,217.10593213494838,223.66330599460764,-12.135282516479492,233.6931648552398,181.6613447138571,-20.251171112060547,247.58629330439484,151.72750506932113,-25.846864700317383,258.53256348940755,125.74627535744779,-29.059249877929688,191.57121215330716,221.0895036964565,-10.459207534790039,185.99364692031756,171.3370473984095,-15.276590347290039,181.61859434742578,135.7080656206375,-20.2733097076416,178.40279672238708,106.16773524187978,-24.070388793945312,170.2252273964901,230.05920675097678,-10.078007698059082,158.99681321642137,207.64577361864696,-18.56496238708496,165.82937179032706,226.69840241320023,-18.602848052978516,171.5977004538018,237.67912252992892,-16.608430862426758,153.6106034086057,247.33647526058735,-11.07758903503418,143.08874738511813,225.356318895541,-18.08421516418457,145.06654454653858,225.65218219336316,-19.446685791015625,147.49771054282616,227.22541615029076,-19.551313400268555],"lab":"schaar"},{"v":[194.26663135928797,327.3738178440412,-0.001361258327960968,218.31535259149265,307.21493970536346,-11.004119873046875,216.25265302008395,274.7553797065058,-15.979694366455078,181.1414404560403,246.48459020609891,-18.86284637451172,146.78749023499728,230.51264406811833,-19.871126174926758,219.19995493563545,224.7432553934165,-9.816787719726562,237.0504640205999,178.6514195263165,-15.338852882385254,248.0962356660408,147.4738132042097,-18.779035568237305,255.90624313306174,120.82402092204181,-20.627979278564453,189.96974162393622,220.80894627558806,-8.264726638793945,179.62728247960746,171.03593500190345,-11.863469123840332,171.59782628706816,134.61188033801102,-15.428882598876953,166.4448187899155,104.85783499097641,-18.246017456054688,166.7107933449093,229.17313030681203,-7.975725173950195,156.863183669416,210.75716796210725,-15.191715240478516,167.8154390959006,240.99753792872494,-16.707612991333008,176.69174711615148,262.8091999068232,-16.33957862854004,148.0000942985645,245.29077697291422,-8.828068733215332,138.89249834631354,223.97463312332317,-14.990074157714844,143.52587291280523,221.24397648772708,-17.462339401245117,150.29885471796948,221.21511043568736,-19.05825424194336],"lab":"schaar"},{"v":[196.74822852270418,327.71852704664605,-0.001116633415222168,216.493523091768,312.94351411682504,-14.037344932556152,214.95672641538172,278.11385266121476,-20.023218154907227,180.70494880277727,246.96739291335746,-23.066843032836914,147.62983574873738,228.83098792869558,-24.30130386352539,220.87331928921373,223.60345490177727,-11.440195083618164,234.99513895347445,176.8706115920887,-17.135040283203125,245.55396493470593,147.08015679119464,-20.10151481628418,253.9877665238658,120.63797612138526,-21.433168411254883,191.60044093882308,217.3560250303641,-7.904621601104736,178.99511230709734,168.08814614230266,-11.637630462646484,167.36069308080008,135.6899841270341,-15.012320518493652,158.49547217370963,107.17112942380707,-17.6376895904541,169.30271070642073,222.40745931510625,-5.841876983642578,162.799094930359,207.92877169891247,-12.60549545288086,173.49849902305266,243.6228773613282,-12.8483247756958,180.94001396252548,266.8841564131057,-11.449970245361328,151.89784877214737,234.05773391240308,-5.268229961395264,145.59512075205956,214.9790962471575,-10.185803413391113,148.75932090955445,209.97450342396553,-12.00280475616455,152.86308578174044,204.93122634761406,-13.158867835998535],"lab":"schaar"},{"v":[192.85733553087192,329.27612085982014,-0.0015499666333198547,218.97649494565536,308.44718567628496,-10.09089469909668,217.69343024768025,274.76716086244693,-14.077001571655273,183.87453122318465,246.41298937424614,-15.869948387145996,151.28492109753202,231.08949157100682,-15.477128982543945,215.9938593951096,228.61484154178595,-9.655937194824219,234.15553414713688,181.83374032362,-15.155782699584961,245.5434733890259,151.1141664600659,-18.964651107788086,253.89807047676518,124.98421733914451,-21.242006301879883,186.34578169133053,225.53769605324288,-8.182486534118652,176.62877927102755,172.8627981644016,-11.729199409484863,169.33432403863725,137.80506477674555,-15.312240600585938,164.0505245586392,108.49292303456103,-18.141033172607422,163.06201330749317,234.29467019097427,-7.808134078979492,156.16566974132684,212.8117070137676,-14.063518524169922,170.5417986889354,240.36866618296696,-14.645696640014648,181.66657517749226,259.3253600995714,-14.046131134033203,144.59352726964985,250.21275652511105,-8.638137817382812,137.83353154768332,228.29264378248388,-14.446170806884766,144.3793825426278,227.5878857014846,-16.56463623046875,152.62228899137307,228.85958280849002,-17.97564697265625],"lab":"schaar"},{"v":[191.21707008674366,329.7811902700655,-0.0013612732291221619,219.37055194961897,310.164693281275,-14.866922378540039,222.42370950609157,271.6087491945437,-19.98362159729004,180.9894426647771,244.82953417822714,-22.533000946044922,144.13488852169638,238.90325315383055,-21.203832626342773,217.32979792072663,215.64775266229537,-7.268080234527588,232.1716260776843,173.76158338662157,-12.165131568908691,243.61408042469122,145.70439488075587,-14.152199745178223,251.32725292611462,120.55111343668013,-14.746971130371094,186.90290202279465,212.21831928916123,-4.514354705810547,177.56710828714404,164.89826415761783,-4.808563232421875,171.46220927186496,133.3195666484686,-6.6215643882751465,167.77361428226556,104.98622005564059,-7.826974868774414,165.0890610967579,222.98928725772544,-4.079947471618652,151.06696103160016,199.4936587097116,-15.040533065795898,168.96293654786314,229.15868026190498,-17.516603469848633,184.13132385015464,247.5632986824901,-15.06128215789795,147.96541565561026,243.5329591952696,-4.772740364074707,139.50452357019867,223.60231796896824,-16.78590965270996,155.7918372999659,240.09323124959144,-20.264930725097656,170.77605136948227,256.9111680648696,-20.144628524780273],"lab":"schaar"},{"v":[198.3263316860573,324.616035389911,-0.0014379769563674927,225.25413285750486,295.3600412459365,-8.696969032287598,226.20549025696226,261.2852829316328,-12.103782653808594,193.8785124098532,237.13692310130165,-13.955782890319824,162.1493856493845,227.6010100794884,-13.470446586608887,218.59454810001503,217.80899046880873,-5.246518135070801,234.1692381482359,171.73401825339727,-9.019064903259277,241.05582621264037,140.92324274640578,-11.3689603805542,244.11338823507884,115.18111448512573,-12.591402053833008,189.1185093861246,217.51432262532327,-4.387362480163574,177.59038571791217,169.85013157778806,-4.5778584480285645,166.52360818495396,133.092485358023,-5.771960735321045,157.56245403255886,103.75057112791617,-7.310378074645996,167.27280819332444,229.6549112964258,-5.020112991333008,154.32884095848183,210.09014998474242,-11.752641677856445,171.42204793244528,237.17446719003226,-13.645009994506836,185.05478439014323,257.5896239751231,-13.400008201599121,150.46809809349224,249.13680434945724,-6.436629772186279,140.69109556560647,229.50666590151621,-13.586730003356934,152.5962146710673,236.914975333169,-16.253711700439453,165.53558273964964,247.5233829666701,-17.903635025024414],"lab":"schaar"},{"v":[198.4655233341603,325.5234548603556,-0.0012887641787528992,218.68747079122568,301.58232942418687,-9.744932174682617,215.59376227662608,268.5430786703098,-14.520859718322754,184.05021191241158,241.57282181957294,-17.676464080810547,152.47280331699548,226.33474245227504,-18.825239181518555,219.28279497405134,220.8089302273357,-8.887535095214844,234.65274375402183,176.01381881010863,-14.810518264770508,243.78394202622246,145.32401992415978,-18.72048568725586,249.44608644191356,119.61159779260791,-21.021392822265625,193.5300505179894,219.00314274417187,-8.30238151550293,184.1340009579301,172.18393116123303,-12.073564529418945,175.1983234416178,135.26597443579777,-15.795045852661133,168.00556750103712,105.05580098056018,-19.009355545043945,173.00757098259243,228.3187284585875,-8.940752983093262,161.6165175046595,212.03656136334368,-16.15900421142578,171.6817740620925,243.20730885606773,-17.224308013916016,179.89388604636966,265.5122896380349,-16.725839614868164,156.49313659472924,244.83453660819197,-10.712512969970703,144.7146990599928,222.4667857203968,-15.828001022338867,147.20673011652545,215.16687880514922,-17.57448959350586,151.9496570320923,210.73453972751963,-19.10137176513672],"lab":"schaar"},{"v":[196.0395008755127,326.537587121293,-0.001383081078529358,218.26155776030856,302.4270039423692,-11.870100021362305,215.28138556144677,268.21948203915935,-16.633821487426758,177.92850886466255,242.4334626491687,-19.21062469482422,143.98208632782814,230.90022476181875,-19.521982192993164,219.16695551324636,218.8545025244789,-9.794296264648438,235.88524735776105,173.57694948447082,-15.716780662536621,245.89401930907013,142.8268508106791,-19.26451873779297,252.01879518868327,117.04347110033154,-20.9807186126709,191.8798261494135,217.42649056532346,-7.583025932312012,179.66910290060963,169.53578984002607,-10.537492752075195,169.65018060589705,136.44806298875142,-14.377772331237793,161.85013056780022,109.08370742897918,-17.03856086730957,170.5573858193334,227.6507811486966,-6.684375762939453,158.48860779002553,211.59142957997895,-13.488984107971191,169.5574907401823,240.60314192994088,-13.808218002319336,179.25929241646767,260.2872407303062,-11.928098678588867,153.9537473072265,245.01727731316163,-7.1783857345581055,143.50392407212243,225.1998554349864,-13.08407211303711,148.5968112016103,223.72805530256585,-14.701384544372559,155.99205001039684,224.56794015933826,-14.91724681854248],"lab":"schaar"},{"v":[200.78041646800452,323.36120349461333,-0.0015253424644470215,222.56546360498683,296.2989028285956,-6.991563320159912,218.22582853110117,265.76280450278057,-11.29715633392334,189.10943422288562,241.08670006807947,-13.894842147827148,160.1328381996581,224.69782652486498,-14.552194595336914,220.57534582359347,224.86674661923237,-12.883499145507812,236.76733806014303,177.19268312173136,-20.65638542175293,246.84091795041797,144.31773923070992,-26.34416961669922,253.70653663541395,116.38874660846065,-30.444644927978516,194.95050122232706,226.4682470775675,-12.54122543334961,183.01025499043652,174.88075755505886,-18.92715072631836,171.81468361654308,138.2424348439378,-24.610706329345703,162.1729325750726,106.74058577120532,-29.24900245666504,174.04463456720924,236.6671083099887,-12.27160358428955,163.99736481722516,219.00561672543182,-16.830333709716797,173.44616169925425,246.92553141071733,-13.25977611541748,180.4061042560661,264.43906736465595,-10.633344650268555,157.9969424079177,251.78765049103393,-13.320819854736328,146.76659574972084,227.51022977669209,-16.95236587524414,143.90654928120944,216.40837030610638,-16.657861709594727,142.6423487124655,207.62284754504995,-16.605520248413086],"lab":"schaar"},{"v":[232.11611767306616,320.58359560010706,-0.001944318413734436,255.80461783690578,306.78138697842036,-32.041847229003906,267.8902614891185,283.8392263343456,-53.7890510559082,258.9669074175263,265.81397298172664,-71.29019165039062,241.19123278536674,253.90268124576218,-87.03069305419922,234.63850797983363,250.09215926067978,-43.64913558959961,228.3679950086223,242.67804331530593,-69.8153076171875,231.6182279400738,256.78311678627256,-73.21435546875,235.89271647747142,266.5720785306932,-68.70236206054688,208.05280269102974,254.62673943575814,-38.2447395324707,206.91989285686338,252.0942171976307,-70.73637390136719,217.68839350484703,271.4293359995989,-71.15493774414062,226.2605988310746,279.4198342908042,-63.974403381347656,186.19014172686195,263.64603565247063,-36.06604766845703,187.7380474461966,266.5603372183865,-66.81128692626953,203.26833743075179,282.58779903188093,-64.67872619628906,211.36248396036038,286.0393211298769,-56.876155853271484,171.20779130851068,276.5476720653364,-35.5987548828125,169.2349474645935,277.2838058860113,-58.646026611328125,182.82046456422563,288.0791911131308,-57.4677619934082,192.93311891333482,291.79832199426767,-51.37679672241211],"lab":"steen"},{"v":[227.57339882450873,325.83595106897695,-0.0023284554481506348,252.69780843515434,312.87751956876156,-31.741281509399414,268.3584032242258,287.5026562520898,-53.01218795776367,256.9694006786989,273.61267998709013,-70.78253936767578,234.59355335647996,269.8591647991345,-87.17915344238281,237.15633219584583,243.32219307624194,-36.358707427978516,229.66418333605355,245.11130128991533,-67.2955322265625,232.10243603609297,268.3744274598597,-68.78304290771484,235.5625358242621,277.336214578743,-58.360816955566406,209.33937648454796,246.5665930856868,-32.011573791503906,205.62075289268748,254.76827338546153,-66.03021240234375,216.4848618448351,279.79839619907796,-64.83319854736328,224.95008846651817,283.78535164701407,-55.1156120300293,185.16150188860115,255.8697455891733,-31.954269409179688,186.08682410246587,271.1061379139912,-63.872276306152344,202.64384913111715,289.8636383889914,-60.12993621826172,209.15570622236487,288.1911770391046,-50.27261734008789,168.88233201951329,271.76594219444985,-33.53141403198242,170.0638768768304,282.3937768440164,-56.76202392578125,185.36900459814652,295.5507281832945,-52.980255126953125,194.04707846163447,295.8533540778276,-43.86595153808594],"lab":"steen"},{"v":[226.67630878548178,317.3807371340494,-0.002491183578968048,249.8027008601402,305.96121542867377,-28.002063751220703,266.94545593844657,283.17221155436715,-47.68342208862305,264.2152673437546,271.3206905767432,-64.13626098632812,249.32915569504277,269.2256724589196,-79.3075180053711,236.59112626958802,244.37074770710126,-37.110233306884766,235.35905049937398,240.53572260477145,-64.24022674560547,239.02261499254917,263.1372060577531,-67.3537368774414,242.0398139982823,277.4538104527429,-59.529075622558594,209.99366724017395,248.0508276410844,-33.6729850769043,208.2553986505146,247.4468182572598,-63.69193649291992,218.4379740245356,273.13675950254276,-66.79344940185547,226.31853494457937,283.8150742998305,-61.341064453125,187.82135266529735,257.091758604017,-33.571163177490234,187.36472971142237,261.53139853887075,-61.96693420410156,202.2761883844662,282.84204057361154,-64.70352172851562,210.83807762341206,288.9508463804059,-60.23930740356445,172.879773696153,271.53482785930834,-34.84602355957031,170.75250282704442,274.4133307507034,-56.14517593383789,184.14998117803526,288.43908372806425,-57.779457092285156,195.16090040513353,293.8114861842633,-53.502376556396484],"lab":"steen"},{"v":[231.8479807410988,318.43189722233296,-0.002568565309047699,256.1005328414801,305.14978288590584,-32.82406997680664,269.7965303852861,281.708435023571,-55.57627868652344,261.63380939089404,270.2054132388792,-74.26036834716797,240.7118474941552,267.9321771132843,-90.85619354248047,233.66560008300053,244.07409737498844,-45.04286193847656,227.25716799686165,245.93404302730622,-76.6163558959961,231.30506227834834,266.7851792171724,-79.1357421875,235.47765331320736,277.97889277909456,-69.69632720947266,205.98597783052844,249.09027348693144,-40.84065628051758,200.57476720145405,253.97776974041264,-77.0943374633789,212.80244743343465,277.00348828636936,-80.10210418701172,222.62815571659922,284.69446658868526,-72.95384979248047,183.48203230642363,260.02254141502,-40.13129425048828,180.222085072789,269.85632076675853,-72.89049530029297,197.70850943697351,286.4216608131097,-74.36648559570312,208.13232968661447,288.3687938001274,-67.92240905761719,170.37042660595824,276.63045926882654,-41.198822021484375,165.39601299675007,282.53080742485804,-65.61026763916016,179.65027799053357,292.87755120411657,-67.22834777832031,192.03509667605937,294.712304277241,-62.49109649658203],"lab":"steen"},{"v":[233.37907831898067,319.86264299585184,-0.0025525614619255066,255.60476742351082,304.9688409357854,-32.86289596557617,267.1390766700818,282.5508055352824,-55.85629653930664,259.31882980746906,269.9756292022278,-74.10099029541016,241.0411071338179,266.4173670228681,-90.98411560058594,232.1055975259173,253.98208055054207,-47.48274230957031,224.0600175846615,243.33914789049447,-71.80323791503906,228.89632059181855,257.25555664784684,-73.66712188720703,234.8659691922106,268.9995095766646,-67.09078979492188,206.06703989415072,260.10486399316886,-41.698368072509766,198.39910322630095,250.7334391486075,-71.9051742553711,209.6556426913912,267.0124971952264,-76.31703186035156,219.8546437415703,276.7154821986793,-72.4920425415039,186.34499799961608,271.09875029985955,-38.354515075683594,180.39475391888834,266.10801571082993,-66.81858825683594,195.24913230639493,278.6543905522608,-72.58088684082031,205.52929165351267,283.619273604048,-70.23823547363281,175.41991990558253,285.58788983221905,-36.54248046875,167.52888833269319,281.2494768260782,-58.573692321777344,178.76288156426054,288.47806819849745,-63.87974548339844,190.2188118302821,292.11073703866685,-62.932167053222656],"lab":"steen"},{"v":[225.8911069086945,314.5990727606878,-0.002777896821498871,249.3375672407998,306.37643548918646,-32.58991241455078,265.46191733259985,286.3888368069286,-55.44000244140625,262.66712609147686,279.2663417336447,-74.09782409667969,247.8006675418045,280.2498468882914,-91.69046020507812,236.17431904812247,244.96659715066912,-47.361106872558594,232.56287416389756,246.89021581639975,-78.74272918701172,235.64882629475073,271.0258473949075,-81.91834259033203,239.2544440076514,283.88907950340183,-72.63720703125,208.47487118589714,247.69975000184635,-42.632781982421875,203.60336164663613,253.10430201177002,-76.123291015625,214.86783384678543,278.9062407891197,-79.45780944824219,224.51257827443692,287.4005651519773,-73.37943267822266,185.61032780775503,257.1183560113528,-41.236549377441406,183.20540884318922,268.15495060758934,-71.98360443115234,199.89109940184497,287.6245285669013,-75.44855499267578,210.29364450855556,290.47382971479357,-71.15482330322266,171.78957973272546,272.7496522331864,-41.40483856201172,168.47194739766462,281.03684842446927,-64.53006744384766,182.2719329331744,294.3314955176354,-67.4550552368164,194.7618595419084,297.4382513401729,-64.04280090332031],"lab":"steen"},{"v":[221.3243098799546,325.2157274141566,-0.002180345356464386,242.0944431604419,313.4305654569452,-26.97560691833496,259.41013263713216,295.7087863489887,-50.62543869018555,259.26214590395807,292.487541540317,-71.79769134521484,241.15605252123788,298.34477264359737,-93.59121704101562,224.7187392545525,257.8538516284564,-43.36873245239258,231.24475469235102,255.88843402564012,-68.06253051757812,232.25861155793262,260.51461748874897,-77.60859680175781,230.1165335258376,258.967853826624,-82.10566711425781,198.64258341099583,256.5324947074265,-41.17415237426758,217.39853123186867,271.11524669019207,-69.80754852294922,228.2219787296541,286.6196756938432,-62.422733306884766,229.32623620168093,284.164454191801,-54.85299301147461,180.28393103222933,266.96013874088084,-42.709754943847656,201.54696410482026,287.48053584074387,-66.91851043701172,213.6991477757871,295.8363557575095,-48.585811614990234,212.5457439742217,288.84385643521506,-33.76946258544922,168.2175485284257,282.7774395487605,-46.61905288696289,184.59610588689043,296.9134851369896,-64.2847900390625,198.63899332145738,300.63923719264676,-50.52262496948242,201.6302810646849,294.2862092063494,-36.50376892089844],"lab":"steen"},{"v":[221.21036086893048,328.95479079528906,-0.0015500038862228394,255.52108589102448,305.90598021683377,-9.520414352416992,273.08057359347526,276.35831648063214,-14.753663063049316,272.1924238029404,251.21891775618894,-21.29109001159668,267.68469164392627,234.08698912957425,-27.567289352416992,262.7410566376596,247.77998036631934,8.512840270996094,271.9336953616766,224.3688561014313,-1.6054383516311646,277.1310459700035,209.90808203385205,-12.533087730407715,282.19762249540895,199.82400674888112,-20.00994300842285,240.2235343161557,247.27708802288612,7.6707763671875,239.2589353762455,224.38455446492708,-6.951728820800781,242.2838313178066,235.0864724830174,-18.6025333404541,246.96521411063762,245.23518826189672,-22.466293334960938,218.6383415069711,253.03071759913007,4.309063911437988,218.32881233629087,232.60713504992998,-13.116423606872559,226.12626954688693,255.28847342857836,-21.801437377929688,230.17992708531537,273.5947506691252,-22.35772132873535,197.51356142752874,264.50869424458364,0.6411521434783936,200.81415036468286,251.684002775941,-14.979246139526367,209.69682106709692,268.48021398133807,-20.739521026611328,215.0730069316992,283.18816005677024,-21.1226806640625],"lab":"steen"},{"v":[130.04040424156594,357.88839941187416,-0.0010164231061935425,166.9027080033602,325.0703099320258,-4.4515700340271,191.0808653726756,282.47676256624635,-6.086752891540527,205.00891561823966,244.13216287970658,-8.175557136535645,220.50443020822235,215.14065251924575,-10.270160675048828,164.9194095284848,228.7562870530401,0.560318112373352,167.55179835570797,177.6824585877759,-0.14118444919586182,165.96520727513865,143.69480370689217,-1.8850712776184082,163.63828599948096,115.04244898926913,-3.5345473289489746,136.95271205914767,228.52473454681953,-0.2506709098815918,143.98333065521686,170.36246297300625,-0.3728817105293274,144.78323986611372,131.33362949896835,-2.1667356491088867,143.7992010375839,100.33859940411675,-3.117363691329956,110.69315065836473,237.62947556612664,-2.269298553466797,109.48555210697086,185.72988498163545,-2.9979729652404785,106.1491794314506,148.61536743087828,-4.492300510406494,103.48255453019567,118.31052704148586,-5.418154716491699,85.98327825354892,255.19231768284564,-5.169183254241943,76.21070963984234,216.29405348918894,-6.610573768615723,67.05127500013768,189.49400098147228,-8.03943157196045,59.06214113992233,162.6571262852451,-8.804250717163086],"lab":"papier"},{"v":[113.3188591740834,362.37322133451784,-0.0010089054703712463,164.80403934665804,323.27038841880216,-5.554775714874268,193.98803021494965,280.32876220140486,-5.6690473556518555,210.01932095625725,243.2831936655591,-6.652280807495117,223.18317813017586,209.94529218335924,-7.598268032073975,162.4254703762215,229.16624092581063,11.530843734741211,167.53653504375995,179.99829060173192,14.912603378295898,168.16748616215236,146.2674685821063,14.755417823791504,167.41888040943815,118.9908850987858,13.516460418701172,133.1161926244958,228.9209723496255,11.519824981689453,139.02820669267706,173.03306675650293,16.61357307434082,139.264073520852,134.92719751704027,15.596352577209473,138.29529035544027,103.94481301509357,14.328178405761719,106.232212434636,234.8975075156437,9.404230117797852,109.21379365367991,184.67727496469433,13.382028579711914,108.51367006712539,148.1145551723088,13.059377670288086,107.60965617283564,119.07238340332752,12.303221702575684,80.10562577905907,245.8051804188078,5.799410820007324,75.98004780571848,205.59812866121132,7.812055587768555,71.86373796662518,178.08409929052718,8.100456237792969,68.57029743488742,153.04382591245275,8.255133628845215],"lab":"papier"},{"v":[123.34018099163495,358.35366746544594,-0.0010479167103767395,167.17862295150974,322.29947321807583,-2.254908561706543,193.30420932404274,278.21790240542305,-2.22351336479187,207.89313409779373,238.6481226628203,-3.1191723346710205,222.07066506446898,207.10043813377183,-4.104718208312988,168.2987326248537,228.27027340029116,5.982694625854492,171.01585667861534,176.4998491820091,6.871277809143066,169.80933106881525,142.91363382907656,5.950712203979492,167.2633699734372,115.43550245603753,4.951452255249023,139.00565106374387,228.20330235842593,4.7641706466674805,145.87088271646388,169.5184424607143,6.489216327667236,146.15318521365472,131.57915791106484,5.354779243469238,144.33643713257464,101.79758673249235,4.781777381896973,111.52691057436596,236.12668873511976,2.3655245304107666,115.58659951867668,181.6288201721637,3.882377862930298,115.96860685696912,144.85998926023672,3.7353856563568115,115.73785176035115,115.99294585293511,3.733107089996338,84.78196879003451,251.07684739518882,-0.8383558988571167,79.78556455117365,209.18448787332977,-0.42452311515808105,74.09821711355676,181.20686646752722,-0.5190972089767456,69.08275467649062,154.8073512330294,-0.3058786392211914],"lab":"papier"},{"v":[124.3647241369602,360.46207781983424,-0.0013057440519332886,172.7906044871568,323.96358333044816,-8.498099327087402,202.07581090680804,275.39054891033834,-10.532975196838379,219.23902106289802,229.43845966492688,-12.1605224609375,238.54089899647437,189.45948118412338,-13.527122497558594,169.39472956871947,224.84668680681705,2.520585060119629,173.3564842438739,167.89255594059193,3.6790804862976074,175.25326341702163,131.87503433074346,3.2523670196533203,176.75475542739687,102.5286313265817,3.04337215423584,137.12368078215786,226.18203828881317,5.352081775665283,143.07035018931535,167.3547100879893,8.758968353271484,145.66640814295818,129.23785708743134,8.740094184875488,147.32355873686467,98.13680672575778,8.929506301879883,107.55661481381848,234.81554417147595,6.582740783691406,109.6085198110029,184.04103960992515,9.942709922790527,111.8124171700744,150.2395246670758,10.541889190673828,114.00809683071516,122.95446763032899,11.011816024780273,79.21154127950706,248.259329167077,6.431929111480713,72.35135926930748,208.98649775496162,9.102937698364258,69.63562321544721,184.31463740392087,10.464532852172852,69.81139477891354,160.69521813830795,11.943675994873047],"lab":"papier"},{"v":[107.92076809431234,361.4947719941688,-0.0014416351914405823,163.1877755728651,329.4895102334398,-8.102038383483887,197.67017501791548,282.23515193153344,-9.572686195373535,219.37121738545818,238.05264443533298,-11.31928825378418,240.57920349169285,197.98863405821854,-12.831396102905273,165.36463395177228,221.21728295531517,7.695963382720947,168.69374477593658,167.77120450640234,9.410882949829102,171.055419772519,132.23093829839178,8.380346298217773,172.4276381630294,102.7533328758378,7.103892803192139,135.51207361521716,218.56932019066173,9.171125411987305,143.47263368970255,163.5495739378536,13.271147727966309,148.7769602214049,126.81827985920911,12.193259239196777,152.04126890702915,97.36896106381022,10.903169631958008,107.59866486511748,223.82866183967667,8.523354530334473,115.44837742075455,175.1029756716822,11.587966918945312,122.06549213300633,143.43633918608828,10.65993595123291,126.58980333208481,119.21298452446689,9.444962501525879,79.038433198346,233.89892903451326,6.321765422821045,84.44932821766542,193.59548707177032,8.345107078552246,90.75994252421167,169.1943187693499,8.889423370361328,97.88335902700805,147.91597393755293,9.161087036132812],"lab":"papier"},{"v":[121.4767002530524,362.74146182702486,-0.001344934105873108,169.87430063712918,325.74947362736106,-11.724855422973633,201.5285188692303,275.8855474339566,-14.97533130645752,219.50302742932882,227.8535424636238,-17.7217960357666,237.24756506255727,182.25390880530625,-20.063838958740234,170.07307995372267,217.48720637248474,3.4310874938964844,171.4101028063031,163.20176566970815,4.284053325653076,172.65860304257058,126.95553252345279,2.9477431774139404,172.14948206998392,97.33769360807852,1.5671935081481934,139.79427464652818,218.6835599762942,6.629205703735352,143.7104930186828,164.20943041301925,10.024555206298828,145.34860828822397,129.68764851054084,8.646646499633789,144.48748899166446,102.87811791586809,7.17220401763916,111.41894505339354,227.4277448572214,7.5416259765625,114.0791544601534,180.92704385363544,10.256134033203125,116.1148879236591,151.96771107472188,9.28393840789795,115.96028159614822,130.77003464804952,8.002720832824707,82.59578265303519,240.45027902669318,6.620910167694092,81.8190547885864,201.97008275185516,8.570192337036133,84.88834204359215,178.6557814232094,9.14195442199707,88.8339967537953,159.6649523678292,9.44019603729248],"lab":"papier"},{"v":[125.52834504677853,363.16209526047066,-0.0013101398944854736,169.5041514632008,327.10151873162204,-10.542327880859375,198.84498234043673,278.55328065944775,-13.503669738769531,218.95677923628958,234.0443092297699,-16.192031860351562,242.2543730609936,193.22745240205197,-18.737327575683594,167.79034770717251,219.51697824625023,3.1607675552368164,168.32152615536486,164.38625991567864,3.9676294326782227,169.18572763843565,128.72369464236667,2.80375075340271,169.26134235788044,99.20001159277174,1.7646915912628174,138.93644871135814,219.78907785344438,5.9688401222229,142.3997830249284,163.58506606835482,9.417121887207031,143.89755109056534,126.9782870539851,8.519743919372559,144.06241825648848,97.1874086752203,7.676023483276367,111.94657601735517,227.5140848521861,6.724004745483398,114.52045601498705,178.79605003872527,9.802736282348633,116.39736647976231,145.86425721106676,9.534482955932617,117.23033425157766,119.45327696348727,8.960415840148926,84.41886538004867,239.55808743665696,5.771819591522217,83.22657560410131,200.32769781940158,8.091399192810059,83.6934126453551,175.43920577707718,9.11333179473877,85.53176846720379,152.51977479632916,9.93677043914795],"lab":"papier"},{"v":[113.15015437732177,361.1202058184442,-0.0012201666831970215,167.1730760502884,326.22238054487025,-6.2963738441467285,199.2594399460678,277.5167002140934,-6.772939205169678,218.68700399092955,230.75035806551915,-7.56486177444458,239.897315581802,189.90825436288796,-8.19819450378418,166.59472759163384,218.6915340043703,8.78348159790039,167.68890398659966,164.3678508509635,10.698053359985352,168.29692397159195,129.1792207492923,9.851141929626465,167.8074171628233,100.51047906465872,8.821748733520508,136.60236512722645,216.87815053852742,10.0058012008667,141.3891875639218,160.86627926030945,14.015178680419922,144.16347676709233,125.45277393663658,12.957221984863281,144.9308079793055,97.93911629245027,11.636366844177246,108.65329050719973,223.2182568401111,9.337773323059082,113.70905941304125,173.11401848525333,12.518406867980957,117.37501424319147,142.56541135682076,11.749221801757812,119.28094880289754,119.86242992175842,10.578753471374512,80.28737036683142,234.64363615409758,7.341634273529053,83.981797230962,193.3322020623364,9.4815673828125,89.50917167182321,168.61455269559247,10.058236122131348,95.61941646218793,147.7630756276599,10.310633659362793],"lab":"papier"},{"v":[116.61202223401959,362.06921409720724,-0.0015458762645721436,167.25500349607054,330.83115654706165,-10.362808227539062,200.46804948716874,284.4213814183962,-13.146371841430664,222.62593197835574,241.53463836265118,-15.824131965637207,247.81929478042082,201.4571128592036,-18.170551300048828,167.49565358736425,217.09529071378853,5.063138961791992,166.77822041429258,163.9623812015003,5.784837245941162,167.01614827036337,128.75557654541296,4.072616100311279,166.6842208860031,100.05578166116827,2.3915598392486572,137.3812560252985,215.47599555679884,7.494640350341797,141.26150812564592,161.19057382766871,10.723286628723145,143.73744885720157,126.50331461345641,8.92660140991211,144.6152239787557,99.59273123039833,7.034441947937012,108.69329854838575,221.87420596579756,7.698662757873535,112.53817804272234,173.91534911506787,10.458358764648438,116.45730728675952,144.55410896963033,9.262541770935059,118.46319402858688,122.60454271279141,7.7194743156433105,78.80803844455362,233.0677133764855,6.1314287185668945,80.636992581349,192.8958594800756,8.13306713104248,85.53468804474181,169.17812617691578,8.62005615234375,91.58245372676686,149.24413396797144,8.78092098236084],"lab":"papier"},{"v":[123.93040015783014,361.44880205085065,-0.0015266314148902893,174.62664864772572,325.88331220194215,-10.069913864135742,205.39670493459823,277.7318213533839,-12.474303245544434,224.07242767226052,231.54645469317978,-14.571626663208008,244.86459606165317,188.47375178105034,-16.517597198486328,175.23519723004807,217.34178823629395,5.441160678863525,173.1243746451705,160.91148552055026,7.122467994689941,169.44285665802562,125.16706453243624,6.547129154205322,163.92736397055273,96.57930075986926,5.696234703063965,145.7761720475545,216.85803501767754,8.324395179748535,147.39819698591452,158.46453276545782,12.001561164855957,146.4314506025272,125.15751797398977,10.810290336608887,143.14060923741263,99.75926007767592,9.470232009887695,117.99533469009145,222.84563830257952,9.079049110412598,119.90363136848595,171.4646778895538,11.772482872009277,120.92510871147269,144.47889132274688,10.450349807739258,119.22111354890497,125.2229692598061,9.024272918701172,89.63739341667288,232.5844398840125,8.224727630615234,89.94115212083703,189.51705069828628,9.902610778808594,93.31828248425091,167.84712133489228,10.096312522888184,96.24279352753058,151.4064777683351,10.133244514465332],"lab":"papier"}]'),o("acw62");var wy={};wy=new URL(o("27Lyk").resolve("dEXh9"),import.meta.url).toString();var xy={};xy=new URL(o("27Lyk").resolve("jnIko"),import.meta.url).toString();var ky={};function Sy(e){let n;return"steen"===e.pick?n=t(wy):"papier"===e.pick?n=t(ky):"schaar"===e.pick&&(n=t(xy)),(0,u.jsx)("div",{className:`item ${e.player?"player":"computer"} ${e.pick} ${e.picked?"active":""}`,children:(0,u.jsx)("div",{className:"item-img",children:(0,u.jsx)("img",{src:n,alt:e.pick})})})}function Ny(e){return(0,u.jsxs)("div",{style:{position:"absolute",top:0,left:0,width:"250px"},children:[(0,u.jsx)("input",{type:"test",id:"poseInput",placeholder:"Name of pose..."}),(0,u.jsx)("button",{id:"poseButton",children:"Add pose"}),(0,u.jsx)("button",{id:"classifyButton",children:"Classify"}),(0,u.jsx)("button",{id:"saveTrainingButton",children:"Save training"}),(0,u.jsx)("button",{id:"deleteTrainingButton",children:"Delete training"})]})}ky=new URL(o("27Lyk").resolve("5y0iI"),import.meta.url).toString(),o("acw62");const Ey=["steen","papier","schaar"];i(document.getElementById("app")).render((0,u.jsx)((function(){const e=new kNear(3,t(vy)),n=(0,c.useRef)(null),r=(0,c.useRef)(null),[a,s]=(0,c.useState)(0),[o,i]=(0,c.useState)("Press start to start a game"),[l,d]=(0,c.useState)(""),[f,h]=(0,c.useState)(""),[m,y]=(0,c.useState)(!1);let g,b,v;return(0,c.useEffect)((()=>{(async()=>{n.current=await function(e){var t=void 0===e?{}:e,n=t.maxContinuousChecks,r=void 0===n?1/0:n,a=t.detectionConfidence,s=void 0===a?.8:a,o=t.iouThreshold,i=void 0===o?.3:o,u=t.scoreThreshold,l=void 0===u?.5:u;return Ym(this,void 0,void 0,(function(){var e,t,n,a,o,u;return Jm(this,(function(c){switch(c.label){case 0:return[4,Promise.all([gy(),my(),yy()])];case 1:return e=c.sent(),t=e[0],n=e[1],a=e[2],o=new ry(n,256,256,t,i,l),u=new hy(o,a,256,256,r,s),[2,new by(u)]}}))}))}(),console.log("Handpose loaded")})()}),[]),(0,c.useEffect)((()=>{(l||f)&&(i(`You picked ${l}! I've used my sixth sense to pick ${f}! Sorry. You lost. `),console.log("triggered"))}),[l,f]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{id:"test",children:[(0,u.jsx)("div",{children:(0,u.jsx)("h1",{style:{padding:"0",color:"white",margin:"5px",letterSpacing:"2px"},children:" ROCK PAPER SCISSORS"})}),(0,u.jsxs)("div",{id:"scoreDiv",children:[" SCORE: ",(0,u.jsx)("span",{id:"score",children:a})]})]}),(0,u.jsx)(Ny,{}),(0,u.jsx)("div",{children:(0,u.jsx)(t(p),{width:"640",height:"405",mirrored:!0,id:"webcam",audio:!1,ref:r,screenshotFormat:"image/jpeg"})}),(0,u.jsx)("button",{id:"start",disabled:m,onClick:()=>{y(!0),h(""),d(""),i("Pick scissors, rock or paper and hold the pose in front of the camera."),g=setInterval((()=>async function(){v&&(b=v);v=await async function(){if(!r.current||!n.current)return;i("Identifying pose, hold on...");const t=await n.current.estimateHands(r.current.getCanvas(),!0);if(t.length>0){const n=t[0].landmarks;n.reduce(((e,t)=>(e.push(t[0],t[1]),e)),[]);const r=e.classify(n.flat());return console.log(`results: ${r}`),r}return""}(r.current),v==b&&Ey.indexOf(v)>-1&&(d(v),"steen"==v?h("papier"):"papier"==v?h("schaar"):"schaar"==v&&h("steen"),s(a-1),clearInterval(g),y(!1))}()),1500)},children:"Start"}),(0,u.jsxs)("div",{id:"grid",children:[(0,u.jsxs)("div",{id:"container2",children:[(0,u.jsx)("div",{className:"picks",children:"YOUR PICK: "}),(0,u.jsx)("div",{className:"landmarks",children:Ey.map(((e,t)=>(0,u.jsx)(Sy,{pick:e,picked:l==e,player:!0},`player-${t}`)))})]}),(0,u.jsxs)("div",{id:"container2",children:[(0,u.jsx)("div",{className:"picks",children:"COMPUTER PICK: "}),(0,u.jsx)("div",{className:"landmarks",children:Ey.map(((e,t)=>(0,u.jsx)(Sy,{pick:e,picked:f==e,player:!1},`computer-${t}`)))})]})]}),(0,u.jsx)("div",{id:"results",children:o})]})}),{}));
//# sourceMappingURL=index.c1a56faf.js.map
