(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return _}));n("91GP"),n("Vd3H");var r=n("q1tI"),a=n.n(r),i=n("Bl7J"),o=n("vrFN"),c="object"==typeof window,s=(n("nkPT"),function(e){Object(r.useEffect)(e,[])}),l=function(e){var t=Object(r.useRef)(e);t.current=e,s((function(){return function(){return t.current()}}))},u=function(e){var t=Object(r.useRef)(0),n=Object(r.useState)(e),a=n[0],i=n[1],o=Object(r.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){i(e)}))}),[]);return l((function(){cancelAnimationFrame(t.current)})),[a,o]},m=function(){var e=u({x:c?window.pageXOffset:0,y:c?window.pageYOffset:0}),t=e[0],n=e[1];return Object(r.useEffect)((function(){var e=function(){n({x:window.pageXOffset,y:window.pageYOffset})};return window.addEventListener("scroll",e,{capture:!1,passive:!0}),function(){window.removeEventListener("scroll",e)}}),[]),t},h=n("bdgK"),f=function(){var e=Object(r.useState)({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0}),t=e[0],n=e[1],a=Object(r.useState)((function(){return new h.a((function(e){var t=e[0];t&&n(t.contentRect)}))}))[0];return[Object(r.useCallback)((function(e){a.disconnect(),e&&a.observe(e)}),[a]),t]},d=n("Wbzz"),p=n("9eSz"),b=n.n(p);var v=function(e){var t=e.slug,n=e.title,r=e.thumbnail,i=e.backgroundColor;return a.a.createElement(d.Link,{className:"w-full px-2 py-2 sm:w-1/2 md:w-1/3 project-preview",to:"/portfolio/"+t},a.a.createElement("div",{className:"relative trigger overflow-hidden th-background"},a.a.createElement(b.a,{alt:n,backgroundColor:i,className:"w-full h-96 sm:h-auto object-cover thumbnail",fluid:r,loading:"eager"}),a.a.createElement("div",{className:"touch description-touch"},a.a.createElement("h2",{className:"text-lg mb-0 font-bold text-white leading-none"},n)),a.a.createElement("div",{className:"absolute z-10 bottom-0 w-full h-full flex items-center text-light target overlay"},a.a.createElement("div",{className:"p-4 flex flex-col items-center m-auto w-auto text-center th-trigger"},a.a.createElement("h2",{className:"tracking-wide text-3xl font-medium leading-none mb-4"},n),a.a.createElement("button",{className:"border-2 border-light cta-preview px-2 py-1"},"View more")))))},g=Object(r.memo)((function(e){var t=e.projects,n=e.imagesSharp;return t.map((function(e){var t=e.slug,r=e.thumbnail,i=e.title;return a.a.createElement(v,{key:t,slug:t,thumbnail:n[r].childImageSharp.fluid,title:i})}))})),E=n("1eu9"),y=n.n(E),w=n("oEq0"),_="152325015";var O=Object(r.memo)((function(e){var t=e.heroDivRef,n=e.heroImages;return a.a.createElement(y.a,{Tag:"section",className:"relative h-screen hero",critical:!0,fluid:n,id:"home",style:{backgroundSize:"cover",backgroundPositionX:"0%",backgroundPositionY:"bottom",backgroundRepeat:"no-repeat"}},a.a.createElement(w.AnchorLink,{to:"/#portfolio"},a.a.createElement("div",{className:"absolute w-full arrow-contain"},a.a.createElement("div",{className:"arrow-t mx-auto"},a.a.createElement("span",null)),a.a.createElement("div",{className:"arrow mx-auto"},a.a.createElement("span",null)))),a.a.createElement("div",{className:"container max-w-6xl justify-center flex items-center h-full mx-auto text-center",ref:t},a.a.createElement("div",{className:"intro-text mb-40 mt-4 md:mt-30 md:mb-56 lg:mb-48 px-6 ",style:{width:"600px"}},a.a.createElement("h1",{className:"mb-3 mt-0 text-xl"},"Hi there!"),a.a.createElement("p",{className:"font-medium text-lg mb-4"},"I'm Sonia, an experienced Digital Designer based in London.",a.a.createElement("br",null),"Welcome to my portfolio and of course,",a.a.createElement("br",null)," feel free to reach out :)"),a.a.createElement(w.AnchorLink,{className:"intro text-lg mt-3 border-dark text-dark border rounded-full px-3 py-1 font-medium",to:"/#contact"},"Let's chat!"))))})),x=Object(r.memo)((function(e){var t=e.projects,n=e.images,i=e.sortingArray,o=Object(r.useMemo)((function(){return e=i,t.sort((function(t,n){return e.indexOf(t.slug)<e.indexOf(n.slug)?-1:1}));var e}),[t,i]),c=Object(r.useMemo)((function(){return o.slice(0,12)}),[o]),s=Object(r.useMemo)((function(){return o.slice(12)}),[o]),l=Object(r.useMemo)((function(){return n.reduce((function(e,t){var n;return Object.assign({},e,((n={})[t.relativePath]=t,n))}),{})}),[n]),u=Object(r.useState)(!1),m=u[0],h=u[1],f=Object(r.useCallback)((function(){h(!0)}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{"aria-hidden":"true",className:"block relative",id:"portfolio",style:{top:"-50px",height:0,width:0}}," "),a.a.createElement("section",{className:"mt-12",id:"gallery"},a.a.createElement("h1",{className:"padding"},"Portfolio"),a.a.createElement("div",{className:"overflow-hidden"},a.a.createElement("div",{className:"flex flex-wrap -mx-2"},a.a.createElement(g,{imagesSharp:l,projects:c}),!m&&a.a.createElement("div",{className:"mx-auto my-6"},a.a.createElement("button",{className:"cta",onClick:f},"More projects"))),a.a.createElement("div",{className:"flex flex-wrap -mx-2 collapsible "+(m&&"expanded")},a.a.createElement(g,{imagesSharp:l,projects:s})))),a.a.createElement("hr",{className:"border-t border-gray-300 bg-light border-0 mt-8"}))})),j=Object(r.memo)((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"block relative",id:"about",style:{top:"-50px"}}),a.a.createElement("section",{className:"padding"},a.a.createElement("h1",null,"About"),a.a.createElement("div",null,a.a.createElement("p",null,"All in all, I have quite a traditional Designer background: after seven years of hard-doodling practice on notebooks and school tables, design was definitely my passion. Therefore after high school, I naturally studied economics and attended a business school... But this is about the time when I started doing my first commissioned works. Further non-design-related jobs brought me to create various communications materials, and I developed in parallel a real taste for web design and vector illustrations."),a.a.createElement("p",null,"Long story short, I'm now a full-time Digital Design Manager with many years of experience working on multidisciplinary projects including digital content creation, UX design, project management and digital strategy. I'm currently leading a team of Digital Designers and Web Publishers looking after an eCommerce website."),a.a.createElement("p",null,"Please feel free to get in touch! You'll find my contact details below. Cheers!")),a.a.createElement("div",{className:"mt-8 mb-8 pb-5"},a.a.createElement("a",{className:"cta",href:"/documents/CV-Sonia_Lahcene.pdf",target:"blank"},"Download my CV"))),a.a.createElement("hr",{className:"border-t border-gray-300 bg-light border-0 mt-8"}))})),k=Object(r.memo)((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"block relative",id:"contact",style:{top:"-50px"}}),a.a.createElement("section",{className:"padding pb-12"},a.a.createElement("h1",null,"Contact"),a.a.createElement("ul",{className:"ml-6"},a.a.createElement("li",{className:"mb-3 contact-trigger"},a.a.createElement("a",{href:"mailto:contact@sonialahcene.com",target:"blank",title:"Contact Sonia Lahcene"},a.a.createElement("span",{className:"icon-mail text-xl mr-2 align-text-bottom"}),"Contact me at"," ",a.a.createElement("span",{className:"font-medium"},"contact@sonialahcene.com"))),a.a.createElement("li",{className:"mb-3 contact-trigger"},a.a.createElement("a",{href:"http://uk.linkedin.com/in/sonialahcene",target:"blank",title:"LinkedIn Sonia Lahcene"},a.a.createElement("span",{className:"icon-in text-xl mr-2 align-text-bottom"}),"Find me on ",a.a.createElement("span",{className:"font-medium"},"LinkedIn"))),a.a.createElement("li",{className:"mb-3 contact-trigger"},a.a.createElement("a",{href:"https://www.behance.net/sonialahcene",target:"blank",title:"Behance Sonia Lahcene"},a.a.createElement("span",{className:"icon-be text-xl mr-2 align-text-bottom"}),"Check out my ",a.a.createElement("span",{className:"font-medium"},"Behance"))))))}));t.default=function(e){var t=e.data,n=t.allProjectsJson,c=t.sortingJson,s=n.nodes,l=c.sorting,u=t.allFile.nodes,h=Object(r.useMemo)((function(){return[t.heroMobileImage.childImageSharp.fluid,Object.assign({},t.heroDesktopImage.childImageSharp.fluid,{media:"(min-width: 425px)"})]}),[t.heroDesktopImage.childImageSharp.fluid,t.heroMobileImage.childImageSharp.fluid]),d=m().y,p=f(),b=p[0],v=d/(.2*p[1].height),g=v<1?v:1;return a.a.createElement(i.a,{scrollRatio:g},a.a.createElement(o.a,{keywords:["contact","about","projects"],title:"Home"}),a.a.createElement(O,{heroDivRef:b,heroImages:h}),a.a.createElement("main",{className:"container max-w-6xl mx-auto"},a.a.createElement(x,{images:u,projects:s,sortingArray:l}),a.a.createElement(j,null),a.a.createElement(k,null)))}},bdgK:function(e,t,n){"use strict";(function(e){n("EK0E"),n("bWfx"),n("hHhE"),n("DNiP"),n("RW0V"),n("0l/t"),n("V+eJ"),n("eM6i"),n("2Spj"),n("8+KV"),n("HAE/"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var a=r[n];e.call(t,a[1],a[0])}},t}()}(),a="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var c=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,l=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,a=0;function i(){n&&(n=!1,e()),r&&s()}function c(){o(i)}function s(){var e=Date.now();if(n){if(e-a<2)return;r=!0}else n=!0,r=!1,setTimeout(c,t);a=e}return s}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){a&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){a&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;c.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),u=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var a=r[n];Object.defineProperty(e,a,{value:t[a],enumerable:!1,writable:!1,configurable:!0})}return e},m=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},h=g(0,0,0,0);function f(e){return parseFloat(e)||0}function d(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+f(e["border-"+n+"-width"])}),0)}function p(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return h;var r=m(e).getComputedStyle(e),a=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var a=r[n],i=e["padding-"+a];t[a]=f(i)}return t}(r),i=a.left+a.right,o=a.top+a.bottom,c=f(r.width),s=f(r.height);if("border-box"===r.boxSizing&&(Math.round(c+i)!==t&&(c-=d(r,"left","right")+i),Math.round(s+o)!==n&&(s-=d(r,"top","bottom")+o)),!function(e){return e===m(e).document.documentElement}(e)){var l=Math.round(c+i)-t,u=Math.round(s+o)-n;1!==Math.abs(l)&&(c-=l),1!==Math.abs(u)&&(s-=u)}return g(a.left,a.top,c,s)}var b="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof m(e).SVGGraphicsElement}:function(e){return e instanceof m(e).SVGElement&&"function"==typeof e.getBBox};function v(e){return a?b(e)?function(e){var t=e.getBBox();return g(0,0,t.width,t.height)}(e):p(e):h}function g(e,t,n,r){return{x:e,y:t,width:n,height:r}}var E=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=g(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=v(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),y=function(e,t){var n,r,a,i,o,c,s,l=(r=(n=t).x,a=n.y,i=n.width,o=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(c.prototype),u(s,{x:r,y:a,width:i,height:o,top:a,right:r+i,bottom:o+a,left:r}),s);u(this,{target:e,contentRect:l})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof m(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new E(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof m(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new y(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),_="undefined"!=typeof WeakMap?new WeakMap:new r,O=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=l.getInstance(),r=new w(t,n,this);_.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){O.prototype[e]=function(){var t;return(t=_.get(this))[e].apply(t,arguments)}}));var x=void 0!==i.ResizeObserver?i.ResizeObserver:O;t.a=x}).call(this,n("yLpj"))},nkPT:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("RW0V"),n("a1Th"),n("h7Nl"),n("Btvt"),n("OEbY"),n("Oyvg"),n("LK8F"),e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,a,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,i[a]))return!1;for(a=r;0!=a--;){var o=i[a];if(("_owner"!==o||!t.$$typeof)&&!e(t[o],n[o]))return!1}return!0}return t!=t&&n!=n}}}]);
//# sourceMappingURL=component---src-pages-index-js-fd7897265001cf91a978.js.map