(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+6Dn":function(e,t,n){"use strict";n("RIqP");var r=n("pVnL"),a=n.n(r),c=n("TSYQ"),o=n.n(c),i=n("q1tI"),s=n.n(i),l=n("ZeOK"),u=n("ICNK"),d=n("Y53p"),f=n("MZgk");function m(e){var t=e.children,n=e.className,r=e.computer,c=e.color,i=e.floated,f=e.largeScreen,p=e.mobile,b=e.only,h=e.stretched,y=e.tablet,v=e.textAlign,O=e.verticalAlign,j=e.widescreen,g=e.width,w=o()(c,Object(l.a)(h,"stretched"),Object(l.c)(b,"only"),Object(l.d)(v),Object(l.e)(i,"floated"),Object(l.f)(O),Object(l.g)(r,"wide computer"),Object(l.g)(f,"wide large screen"),Object(l.g)(p,"wide mobile"),Object(l.g)(y,"wide tablet"),Object(l.g)(j,"wide widescreen"),Object(l.g)(g,"wide"),"column",n),N=Object(u.a)(m,e),E=Object(d.a)(m,e);return s.a.createElement(E,a()({},N,{className:w}),t)}m.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],m.create=Object(f.c)(m,(function(e){return{children:e}}));var p=m;function b(e){var t=e.centered,n=e.children,r=e.className,c=e.color,i=e.columns,f=e.divided,m=e.only,p=e.reversed,h=e.stretched,y=e.textAlign,v=e.verticalAlign,O=o()(c,Object(l.a)(t,"centered"),Object(l.a)(f,"divided"),Object(l.a)(h,"stretched"),Object(l.c)(m,"only"),Object(l.c)(p,"reversed"),Object(l.d)(y),Object(l.f)(v),Object(l.g)(i,"column",!0),"row",r),j=Object(u.a)(b,e),g=Object(d.a)(b,e);return s.a.createElement(g,a()({},j,{className:O}),n)}b.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"];var h=b;function y(e){var t=e.celled,n=e.centered,r=e.children,c=e.className,i=e.columns,f=e.container,m=e.divided,p=e.doubling,b=e.inverted,h=e.padded,v=e.relaxed,O=e.reversed,j=e.stackable,g=e.stretched,w=e.textAlign,N=e.verticalAlign,E=o()("ui",Object(l.a)(n,"centered"),Object(l.a)(f,"container"),Object(l.a)(p,"doubling"),Object(l.a)(b,"inverted"),Object(l.a)(j,"stackable"),Object(l.a)(g,"stretched"),Object(l.b)(t,"celled"),Object(l.b)(m,"divided"),Object(l.b)(h,"padded"),Object(l.b)(v,"relaxed"),Object(l.c)(O,"reversed"),Object(l.d)(w),Object(l.f)(N),Object(l.g)(i,"column",!0),"grid",c),S=Object(u.a)(y,e),x=Object(d.a)(y,e);return s.a.createElement(x,a()({},S,{className:E}),r)}y.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],y.Column=p,y.Row=h;t.a=y},"7evw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function(){return a.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function(){return c.DiscussionEmbed}}),t.default=void 0;var r=n("UZsz"),a=n("Bp/N"),c=n("HhXV"),o={CommentCount:r.CommentCount,CommentEmbed:a.CommentEmbed,DiscussionEmbed:c.DiscussionEmbed};t.default=o},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"Bp/N":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=c(n("q1tI")),a=c(n("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,e);var t,n,a,c=u(o);function o(){return i(this,o),c.apply(this,arguments)}return t=o,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&s(t.prototype,n),a&&s(t,a),o}(r.default.Component);t.CommentEmbed=m,m.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},m.propTypes={commentId:a.default.string.isRequired,showMedia:a.default.bool,showParentComment:a.default.bool,width:a.default.number,height:a.default.number}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},HhXV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=o(n("q1tI")),a=o(n("17x9")),c=n("ZMnY");function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,n,a,o=f(i);function i(){return l(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),b.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",s({},this.props,{id:"disqus_thread"}))}}])&&u(t.prototype,n),a&&u(t,a),i}(r.default.Component);t.DiscussionEmbed=h,h.propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string,language:a.default.string,categoryID:a.default.string,remoteAuthS3:a.default.string,apiKey:a.default.string,preData:a.default.func,preInit:a.default.func,onInit:a.default.func,onReady:a.default.func,afterRender:a.default.func,preReset:a.default.func,onIdentify:a.default.func,beforeComment:a.default.func,onNewComment:a.default.func,onPaginate:a.default.func}).isRequired}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},QILm:function(e,t,n){var r=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c},e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),c=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||c(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},UZsz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=o(n("q1tI")),a=o(n("17x9")),c=n("ZMnY");function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(i,e);var t,n,a,o=d(i);function i(){return s(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?p():(0,c.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&l(t.prototype,n),a&&l(t,a),i}(r.default.Component);t.CommentCount=b,b.propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string}).isRequired}},ZMnY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var a=this,c=arguments,o=function(){r=null,n||e.apply(a,c)},i=n&&!r;window.clearTimeout(r),r=setTimeout(o,t),i&&e.apply(a,c)}},t.isReactElement=i,t.shallowComparison=function e(t,n){var r,a=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw a}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(a.s();!(r=a.n()).done;){var s=r.value;if("object"===c(t[s])){if(e(t[s],n[s]))return!0}else if(t[s]!==n[s]&&!i(t[s]))return!0}}catch(l){a.e(l)}finally{a.f()}return!1};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},cZrw:function(e,t,n){"use strict";n.r(t);var r=n("mwIZ"),a=n.n(r),c=n("q1tI"),o=n.n(c),i=n("Wbzz"),s=n("MqQV"),l=n("pVnL"),u=n.n(l),d=n("TSYQ"),f=n.n(d),m=n("ZeOK"),p=n("ICNK"),b=n("Y53p"),h=n("H+2d");function y(e){var t=e.active,n=e.className,r=e.children,a=e.content,c=f()(Object(m.a)(t,"active"),n),i=Object(p.a)(y,e),s=Object(b.a)(y,e);return o.a.createElement(s,u()({},i,{className:c}),h.a.isNil(r)?a:r)}y.handledProps=["active","as","children","className","content"],y.defaultProps={as:"a"};var v=y;function O(e){var t=e.className,n=e.children,r=e.content,a=f()("actions",t),c=Object(p.a)(O,e),i=Object(b.a)(O,e);return o.a.createElement(i,u()({},c,{className:a}),h.a.isNil(n)?r:n)}O.handledProps=["as","children","className","content"];var j=O;function g(e){var t=e.className,n=e.children,r=e.content,a=f()("author",t),c=Object(p.a)(g,e),i=Object(b.a)(g,e);return o.a.createElement(i,u()({},c,{className:a}),h.a.isNil(n)?r:n)}g.handledProps=["as","children","className","content"];var w=g,N=n("J4zp"),E=n.n(N),S=n("526f"),x=n("MZgk");function P(e){var t=e.className,n=e.src,r=f()("avatar",t),a=Object(p.a)(P,e),c=Object(S.b)(a,{htmlProps:S.a}),i=E()(c,2),s=i[0],l=i[1],d=Object(b.a)(P,e);return o.a.createElement(d,u()({},l,{className:r}),Object(x.a)(n,{autoGenerateKey:!1,defaultProps:s}))}P.handledProps=["as","className","src"];var C=P;function _(e){var t=e.className,n=e.children,r=e.content,a=f()(t,"content"),c=Object(p.a)(_,e),i=Object(b.a)(_,e);return o.a.createElement(i,u()({},c,{className:a}),h.a.isNil(n)?r:n)}_.handledProps=["as","children","className","content"];var k=_;n("Wt1U");function I(e){var t=e.className,n=e.children,r=e.collapsed,a=e.content,c=e.minimal,i=e.size,s=e.threaded,l=f()("ui",i,Object(m.a)(r,"collapsed"),Object(m.a)(c,"minimal"),Object(m.a)(s,"threaded"),"comments",t),d=Object(p.a)(I,e),y=Object(b.a)(I,e);return o.a.createElement(y,u()({},d,{className:l}),h.a.isNil(n)?a:n)}I.handledProps=["as","children","className","collapsed","content","minimal","size","threaded"];var A=I;function D(e){var t=e.className,n=e.children,r=e.content,a=f()("metadata",t),c=Object(p.a)(D,e),i=Object(b.a)(D,e);return o.a.createElement(i,u()({},c,{className:a}),h.a.isNil(n)?r:n)}D.handledProps=["as","children","className","content"];var q=D;function R(e){var t=e.className,n=e.children,r=e.content,a=f()(t,"text"),c=Object(p.a)(R,e),i=Object(b.a)(R,e);return o.a.createElement(i,u()({},c,{className:a}),h.a.isNil(n)?r:n)}R.handledProps=["as","children","className","content"];var M=R;function T(e){var t=e.className,n=e.children,r=e.collapsed,a=e.content,c=f()(Object(m.a)(r,"collapsed"),"comment",t),i=Object(p.a)(T,e),s=Object(b.a)(T,e);return o.a.createElement(s,u()({},i,{className:c}),h.a.isNil(n)?a:n)}T.handledProps=["as","children","className","collapsed","content"],T.Author=w,T.Action=v,T.Actions=j,T.Avatar=C,T.Content=k,T.Group=A,T.Metadata=q,T.Text=M;var G=T,K=n("lwsE"),U=n.n(K),Q=n("W8MJ"),Z=n.n(Q),z=n("a1gu"),B=n.n(z),W=n("Nsbk"),L=n.n(W),V=n("PJYZ"),Y=n.n(V),H=n("7W2i"),J=n.n(H),X=n("lSNA"),F=n.n(X),$=n("5XkN");function ee(e){var t=e.children,n=e.className,r=e.content,a=e.textAlign,c=f()(Object(m.d)(a),"description",n),i=Object(p.a)(ee,e),s=Object(b.a)(ee,e);return o.a.createElement(s,u()({},i,{className:c}),h.a.isNil(t)?r:t)}ee.handledProps=["as","children","className","content","textAlign"];var te=ee;function ne(e){var t=e.children,n=e.className,r=e.content,a=e.textAlign,c=f()(Object(m.d)(a),"header",n),i=Object(p.a)(ne,e),s=Object(b.a)(ne,e);return o.a.createElement(s,u()({},i,{className:c}),h.a.isNil(t)?r:t)}ne.handledProps=["as","children","className","content","textAlign"];var re=ne;function ae(e){var t=e.children,n=e.className,r=e.content,a=e.textAlign,c=f()(Object(m.d)(a),"meta",n),i=Object(p.a)(ae,e),s=Object(b.a)(ae,e);return o.a.createElement(s,u()({},i,{className:c}),h.a.isNil(t)?r:t)}ae.handledProps=["as","children","className","content","textAlign"];var ce=ae;function oe(e){var t=e.children,n=e.className,r=e.content,a=e.description,c=e.extra,i=e.header,s=e.meta,l=e.textAlign,d=f()(Object(m.a)(c,"extra"),Object(m.d)(l),"content",n),y=Object(p.a)(oe,e),v=Object(b.a)(oe,e);return h.a.isNil(t)?h.a.isNil(r)?o.a.createElement(v,u()({},y,{className:d}),Object(x.b)(re,(function(e){return{content:e}}),i,{autoGenerateKey:!1}),Object(x.b)(ce,(function(e){return{content:e}}),s,{autoGenerateKey:!1}),Object(x.b)(te,(function(e){return{content:e}}),a,{autoGenerateKey:!1})):o.a.createElement(v,u()({},y,{className:d}),r):o.a.createElement(v,u()({},y,{className:d}),t)}oe.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"];var ie=oe,se=n("3WF5"),le=n.n(se);function ue(e){var t=e.centered,n=e.children,r=e.className,a=e.content,c=e.doubling,i=e.items,s=e.itemsPerRow,l=e.stackable,d=e.textAlign,y=f()("ui",Object(m.a)(t,"centered"),Object(m.a)(c,"doubling"),Object(m.a)(l,"stackable"),Object(m.d)(d),Object(m.g)(s),"cards",r),v=Object(p.a)(ue,e),O=Object(b.a)(ue,e);if(!h.a.isNil(n))return o.a.createElement(O,u()({},v,{className:y}),n);if(!h.a.isNil(a))return o.a.createElement(O,u()({},v,{className:y}),a);var j=le()(i,(function(e){var t=e.key||[e.header,e.description].join("-");return o.a.createElement(fe,u()({key:t},e))}));return o.a.createElement(O,u()({},v,{className:y}),j)}ue.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"];var de=ue,fe=function(e){function t(){var e,n;U()(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return n=B()(this,(e=L()(t)).call.apply(e,[this].concat(a))),F()(Y()(n),"handleClick",(function(e){var t=n.props.onClick;t&&t(e,n.props)})),n}return J()(t,e),Z()(t,[{key:"render",value:function(){var e=this.props,n=e.centered,r=e.children,a=e.className,c=e.color,i=e.content,s=e.description,l=e.extra,d=e.fluid,y=e.header,v=e.href,O=e.image,j=e.link,g=e.meta,w=e.onClick,N=e.raised,E=f()("ui",c,Object(m.a)(n,"centered"),Object(m.a)(d,"fluid"),Object(m.a)(j,"link"),Object(m.a)(N,"raised"),"card",a),S=Object(p.a)(t,this.props),x=Object(b.a)(t,this.props,(function(){if(w)return"a"}));return h.a.isNil(r)?h.a.isNil(i)?o.a.createElement(x,u()({},S,{className:E,href:v,onClick:this.handleClick}),$.a.create(O,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(s||y||g)&&o.a.createElement(ie,{description:s,header:y,meta:g}),l&&o.a.createElement(ie,{extra:!0},l)):o.a.createElement(x,u()({},S,{className:E,href:v,onClick:this.handleClick}),i):o.a.createElement(x,u()({},S,{className:E,href:v,onClick:this.handleClick}),r)}}]),t}(c.Component);F()(fe,"Content",ie),F()(fe,"Description",te),F()(fe,"Group",de),F()(fe,"Header",re),F()(fe,"Meta",ce),F()(fe,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]);var me=n("yE/o"),pe=n("3mGJ");function be(e){var t=e.children,n=e.className,r=e.content,a=f()("header",n),c=Object(p.a)(be,e),i=Object(b.a)(be,e);return o.a.createElement(i,u()({},c,{className:a}),h.a.isNil(t)?r:t)}be.handledProps=["as","children","className","content"],be.create=Object(x.c)(be,(function(e){return{content:e}}));var he=be;function ye(e){var t=e.children,n=e.className,r=e.content,a=f()("description",n),c=Object(p.a)(ye,e),i=Object(b.a)(ye,e);return o.a.createElement(i,u()({},c,{className:a}),h.a.isNil(t)?r:t)}ye.handledProps=["as","children","className","content"],ye.create=Object(x.c)(ye,(function(e){return{content:e}}));var ve=ye;function Oe(e){var t=e.children,n=e.className,r=e.content,a=f()("extra",n),c=Object(p.a)(Oe,e),i=Object(b.a)(Oe,e);return o.a.createElement(i,u()({},c,{className:a}),h.a.isNil(t)?r:t)}Oe.handledProps=["as","children","className","content"],Oe.create=Object(x.c)(Oe,(function(e){return{content:e}}));var je=Oe;function ge(e){var t=e.children,n=e.className,r=e.content,a=f()("meta",n),c=Object(p.a)(ge,e),i=Object(b.a)(ge,e);return o.a.createElement(i,u()({},c,{className:a}),h.a.isNil(t)?r:t)}ge.handledProps=["as","children","className","content"],ge.create=Object(x.c)(ge,(function(e){return{content:e}}));var we=ge;function Ne(e){var t=e.children,n=e.className,r=e.content,a=e.description,c=e.extra,i=e.header,s=e.meta,l=e.verticalAlign,d=f()(Object(m.f)(l),"content",n),y=Object(p.a)(Ne,e),v=Object(b.a)(Ne,e);return h.a.isNil(t)?o.a.createElement(v,u()({},y,{className:d}),he.create(i,{autoGenerateKey:!1}),we.create(s,{autoGenerateKey:!1}),ve.create(a,{autoGenerateKey:!1}),je.create(c,{autoGenerateKey:!1}),r):o.a.createElement(v,u()({},y,{className:d}),t)}Ne.handledProps=["as","children","className","content","description","extra","header","meta","verticalAlign"];var Ee=Ne,Se=n("QILm"),xe=n.n(Se);function Pe(e){var t=e.children,n=e.className,r=e.content,a=e.divided,c=e.items,i=e.link,s=e.relaxed,l=e.unstackable,d=f()("ui",Object(m.a)(a,"divided"),Object(m.a)(i,"link"),Object(m.a)(l,"unstackable"),Object(m.b)(s,"relaxed"),"items",n),y=Object(p.a)(Pe,e),v=Object(b.a)(Pe,e);if(!h.a.isNil(t))return o.a.createElement(v,u()({},y,{className:d}),t);if(!h.a.isNil(r))return o.a.createElement(v,u()({},y,{className:d}),r);var O=le()(c,(function(e){var t=e.childKey,n=xe()(e,["childKey"]),r=t||[n.content,n.description,n.header,n.meta].join("-");return o.a.createElement(Ae,u()({},n,{key:r}))}));return o.a.createElement(v,u()({},y,{className:d}),O)}Pe.handledProps=["as","children","className","content","divided","items","link","relaxed","unstackable"];var Ce=Pe;function _e(e){var t=e.size,n=Object(p.a)(_e,e);return o.a.createElement($.a,u()({},n,{size:t,ui:!!t,wrapped:!0}))}_e.handledProps=["size"],_e.create=Object(x.c)(_e,(function(e){return{src:e}}));var ke=_e;function Ie(e){var t=e.children,n=e.className,r=e.content,a=e.description,c=e.extra,i=e.header,s=e.image,l=e.meta,d=f()("item",n),m=Object(p.a)(Ie,e),y=Object(b.a)(Ie,e);return h.a.isNil(t)?o.a.createElement(y,u()({},m,{className:d}),ke.create(s,{autoGenerateKey:!1}),o.a.createElement(Ee,{content:r,description:a,extra:c,header:i,meta:l})):o.a.createElement(y,u()({},m,{className:d}),t)}Ie.handledProps=["as","children","className","content","description","extra","header","image","meta"],Ie.Content=Ee,Ie.Description=ve,Ie.Extra=je,Ie.Group=Ce,Ie.Header=he,Ie.Image=ke,Ie.Meta=we;var Ae=Ie,De=n("aQu0"),qe=n("+6Dn"),Re=n("D1pA"),Me=function(){return c.createElement(pe.a,{vertical:!0},c.createElement(De.a,{as:"h2"},c.createElement(Re.a,{name:"newspaper"}),c.createElement(De.a.Content,null,"Blog",c.createElement(De.a.Subheader,null,"All about this starter kit"))))},Te=n("7evw"),Ge=n("soUV");t.default=Object(Ge.b)((function(e){var t=e.data.post,n=t.frontmatter,r=t.html,o=t.timeToRead,l=n.author.avatar.children[0],u=e.data.post.frontmatter.tags.map((function(e){return c.createElement(s.a,{key:e},c.createElement(i.Link,{to:"/blog/tags/"+e+"/"},e))})),d=e.data.recents.edges.map((function(e){var t=e.node,n=t.frontmatter.author.avatar.children[0],r=a()(t,"frontmatter.image.children.0.fixed",{}),o=c.createElement(G.Group,null,c.createElement(G,null,c.createElement(G.Avatar,{src:n.fixed.src,srcSet:n.fixed.srcSet}),c.createElement(G.Content,null,c.createElement(G.Author,{style:{fontWeight:400}},t.frontmatter.author.id),c.createElement(G.Metadata,{style:{margin:0}},t.timeToRead," min read"))));return c.createElement("div",{key:t.fields.slug,style:{paddingBottom:"1em"}},c.createElement(fe,{as:i.Link,to:t.fields.slug,image:r,header:t.frontmatter.title,extra:o}))})),f=a()(n,"image.children.0.fixed",{});return c.createElement(me.a,null,c.createElement(Me,null),c.createElement(pe.a,{vertical:!0,style:{border:"none"}},c.createElement(Ae.Group,null,c.createElement(Ae,null,c.createElement(Ae.Image,{size:"tiny",src:l.fixed.src,srcSet:l.fixed.srcSet,circular:!0}),c.createElement(Ae.Content,null,c.createElement(Ae.Description,null,n.author.id),c.createElement(Ae.Meta,null,n.author.bio),c.createElement(Ae.Extra,null,n.updatedDate," - ",o," min read")))),c.createElement(De.a,{as:"h1"},n.title)),c.createElement($.a,Object.assign({},f,{fluid:!0})),c.createElement(pe.a,{vertical:!0,style:{border:"none"},dangerouslySetInnerHTML:{__html:r}}),c.createElement(pe.a,{vertical:!0},u),e.data.site&&e.data.site.siteMetadata&&e.data.site.siteMetadata.disqus&&c.createElement(pe.a,{vertical:!0},c.createElement(Te.DiscussionEmbed,{shortname:e.data.site.siteMetadata.disqus,config:{}})),c.createElement(pe.a,{vertical:!0},c.createElement(qe.a,{padded:!0,centered:!0},d)))}))}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-11005d07c376faa86333.js.map