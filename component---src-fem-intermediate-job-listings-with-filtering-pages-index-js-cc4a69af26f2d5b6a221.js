(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2Hgx":function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var l,c,u,s;if(Array.isArray(t)){if((l=t.length)!=i.length)return!1;for(c=l;0!=c--;)if(!e(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=t.entries();!(c=s.next()).done;)if(!e(c.value[1],i.get(c.value[0])))return!1;return!0}if(o&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((l=t.length)!=i.length)return!1;for(c=l;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((l=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,u[c]))return!1;if(n&&t instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!e(t[u[c]],i[u[c]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},"8Jek":function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},"9e3I":function(e,t,n){e.exports={filter:"Filter-module--filter--2SmpG",filterList:"Filter-module--filterList--th1yC",filterItem:"Filter-module--filterItem--H9rSU",clearBtn:"Filter-module--clearBtn--2xlxE"}},AWdv:function(e,t,n){e.exports={job:"JobItem-module--job--3BWZA",jobHighlighted:"JobItem-module--jobHighlighted--3uR3V",logo:"JobItem-module--logo--1mgpX",body:"JobItem-module--body--QdpR-",heading:"JobItem-module--heading--14p4P",position:"JobItem-module--position--3qZS7",details:"JobItem-module--details--3poRm",hr:"JobItem-module--hr--2RlM3",tagList:"JobItem-module--tagList--2DcnO",tagListItem:"JobItem-module--tagListItem--2QuxV"}},AcT4:function(e,t,n){},CCBQ:function(e,t,n){e.exports={logo:"Logo-module--logo--1D0Sa"}},Hrl7:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ge}));var r,o,a,i,l=n("W0B4"),c=n.n(l),u=n("WiT8"),s=n.n(u),f=n("2Hgx"),p=n.n(f),d=n("mXGw"),m=n.n(d),g=n("6qGY"),y=n.n(g),h="bodyAttributes",v="htmlAttributes",b="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",A="href",S="http-equiv",C="innerHTML",O="itemprop",j="name",k="property",x="rel",L="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",F="encodeSpecialCharacters",R="onChangeClientState",J="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),H=[T.NOSCRIPT,T.SCRIPT,T.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=Z(e,T.TITLE),n=Z(e,J);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,N);return t||r||void 0},z=function(e){return Z(e,R)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],c=l.toLowerCase();-1===t.indexOf(c)||n===x&&"canonical"===e[n].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==C&&l!==E&&l!==O||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],c=y()({},r[l],o[l]);r[l]=c}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ce(T.BODY,r),ce(T.HTML,o),le(f,p);var d={baseTag:ue(T.BASE,n),linkTags:ue(T.LINK,a),metaTags:ue(T.META,i),noscriptTags:ue(T.NOSCRIPT,l),scriptTags:ue(T.SCRIPT,u),styleTags:ue(T.STYLE,s)},m={},g={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=d[e].oldTags)})),t&&t(),c(e,m,g)},ie=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(T.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[m.a.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(v,o,r),link:pe(T.LINK,a,r),meta:pe(T.META,i,r),noscript:pe(T.NOSCRIPT,l,r),script:pe(T.SCRIPT,c,r),style:pe(T.STYLE,u,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},me=s()((function(e){return{baseTag:V([A,P],e),bodyAttributes:G(h,e),defer:Z(e,M),encode:Z(e,F),htmlAttributes:G(v,e),linkTags:X(T.LINK,[x,A],e),metaTags:X(T.META,[j,w,S,k,O],e),noscriptTags:X(T.NOSCRIPT,[C],e),onChangeClientState:z(e),scriptTags:X(T.SCRIPT,[L,C],e),styleTags:X(T.STYLE,[E],e),title:Q(e),titleAttributes:G(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),ge=(o=me,i=a=function(e){function t(){return U(this,t),q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return W({},o,((t={})[r.type]=i,t.titleAttributes=W({},a),t));case T.BODY:return W({},o,{bodyAttributes:W({},a)});case T.HTML:return W({},o,{htmlAttributes:W({},a)})}return W({},o,((n={})[r.type]=W({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(_(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=_(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),a.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind}).call(this,n("pCvA"))},WiT8:function(e,t,n){"use strict";var r,o=n("mXGw"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",l),f}}},"Z/Hh":function(e,t,n){},bGYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}},ciEU:function(e,t,n){e.exports={wrapper:"Tag-module--wrapper--3ElXg",tag:"Tag-module--tag--10717",delete:"Tag-module--delete--2nYM7",btn:"Tag-module--btn--2Ne90"}},m2aQ:function(e,t,n){e.exports={chip:"Chip-module--chip--2H4-s",dark:"Chip-module--dark--2wosZ",label:"Chip-module--label--3KJkM"}},pCvA:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},tKQe:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},vKYP:function(e,t,n){e.exports={jobList:"JobList-module--jobList--1jfLt",extraMargin:"JobList-module--extraMargin--YzpO8"}},"xc/d":function(e,t,n){e.exports={wrapper:"Layout-module--wrapper--E5QAM",container:"Layout-module--container--2nPR6"}},yWMY:function(e,t,n){},ytf2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var r=n("5WRv"),o=n.n(r),a=(n("Z/Hh"),n("yWMY"),n("AcT4"),n("Wbzz")),i=n("mXGw"),l=n.n(i),c=n("tKQe"),u=n("8Jek"),s=n.n(u),f=n("ciEU"),p=n.n(f),d=function(e){var t=e.onClick,n=e.onDelete,r=e.children;return l.a.createElement("div",{className:p.a.wrapper},t?l.a.createElement("button",{type:"button",className:s()(p.a.tag,p.a.btn),onClick:t},r):l.a.createElement("div",{className:p.a.tag},r),n&&l.a.createElement("button",{type:"button",className:s()(p.a.delete,p.a.btn),"aria-label":"Remove "+r+" tag",onClick:n}))};d.defaultProps={onClick:null,onDelete:null};var m=d,g=n("9e3I"),y=n.n(g),h=function(e){var t=e.tags,n=e.onRemoveTag,r=e.onClearTags;return l.a.createElement("div",{className:y.a.filter},l.a.createElement("ul",{className:y.a.filterList},t.map((function(e){return l.a.createElement("li",{key:e,className:y.a.filterItem},l.a.createElement(m,{onDelete:n(e)},e))}))),l.a.createElement("button",{type:"button",className:y.a.clearBtn,onClick:r},"Clear"))},v=n("bGYK"),b=n("m2aQ"),T=n.n(b),w=function(e){var t,n=e.color,r=e.children;return l.a.createElement("div",{className:s()(T.a.chip,(t={},t[T.a.dark]="dark"===n,t))},l.a.createElement("span",{className:T.a.label},r))};w.defaultProps={color:"primary"};var E=w,A=n("CCBQ"),S=n.n(A),C=function(e){var t=e.src,n=e.alt;return l.a.createElement("img",{src:t,alt:n,className:S.a.logo})},O=n("AWdv"),j=n.n(O),k=function(e){var t,n=e.data,r=e.onTagClick,o=n.company,a=n.logoUrl,i=n.new,c=n.featured,u=n.position,f=n.postedAt,p=n.contract,d=n.location,g=n.tags;return l.a.createElement("div",{className:s()(j.a.job,(t={},t[j.a.jobHighlighted]=c,t))},l.a.createElement("div",{className:j.a.logo},l.a.createElement(C,{src:a,alt:"Photosnap logo"})),l.a.createElement("div",{className:j.a.body},l.a.createElement("div",{className:j.a.heading},l.a.createElement("h2",null,o),i&&l.a.createElement(E,null,"New!"),c&&l.a.createElement(E,{color:"dark"},"Featured")),l.a.createElement("a",{href:"#",className:j.a.position},l.a.createElement("h3",null,u)),l.a.createElement("div",{className:j.a.details},l.a.createElement("span",null,f),l.a.createElement("span",null,p),l.a.createElement("span",null,d))),l.a.createElement("hr",{className:j.a.hr}),l.a.createElement("ul",{className:j.a.tagList},g.map((function(e){return l.a.createElement("li",{className:j.a.tagListItem,key:Object(v.a)()},l.a.createElement(m,{onClick:r(e)},e))}))))},x=n("vKYP"),L=n.n(x),P=function(e){var t,n=e.jobs,r=e.onTagClick,o=e.extraMargin;return l.a.createElement("ul",{className:s()(L.a.jobList,(t={},t[L.a.extraMargin]=o,t))},n.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(k,{data:e,onTagClick:r}))})))};P.defaultProps={extraMargin:!0};var I=P,N=n("Hrl7"),M=function(e){var t,n,r=e.lang,o=e.title,i=e.description,c=e.meta,u=Object(a.useStaticQuery)("3116433873").site,s=i||u.siteMetadata.description,f=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return l.a.createElement(N.a,{htmlAttributes:{lang:r},title:o,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:s},{name:"author",content:null===(n=u.siteMetadata)||void 0===n?void 0:n.author}].concat(c)})};M.defaultProps={lang:"en",meta:[],description:""};var F=M,R=n("xc/d"),J=n.n(R),D=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{title:"Job Listings"}),l.a.createElement("div",{className:J.a.wrapper},l.a.createElement("div",{className:J.a.container},t)))},H=function(){var e=Object(a.useStaticQuery)("977106616").allFile.edges,t=c.map((function(t){var n=t.logo.split("/")[2],r=e.find((function(e){return e.node.base===n})).node.publicURL,a=t.role,i=t.level,l=t.languages,c=t.tools,u=[a,i].concat(o()(l),o()(c));return Object.assign({},t,{logoUrl:r,tags:u})})),n=Object(i.useState)([]),r=n[0],u=n[1],s=r.length>0,f=t.filter((function(e){var t=e.tags;return r.every((function(e){return t.includes(e)}))}));return l.a.createElement(D,null,s&&l.a.createElement(h,{tags:r,onRemoveTag:function(e){return function(){u((function(t){return t.filter((function(t){return t!==e}))}))}},onClearTags:function(){u([])}}),l.a.createElement(I,{jobs:f,onTagClick:function(e){return function(){u((function(t){return t.includes(e)?t:[].concat(o()(t),[e])}))}},extraMargin:!s}))}}}]);
//# sourceMappingURL=component---src-fem-intermediate-job-listings-with-filtering-pages-index-js-cc4a69af26f2d5b6a221.js.map