(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("oEq0");var i=function(e){var t=e.scrollRatio,n=void 0!==t?t:1;return r.a.createElement("nav",{className:"fixed z-50 top-0 right-0 left-0 shadow pt-4 pb-3 px-5 hidden sm:block text-sm",style:{backgroundColor:"rgba(255,254,253,"+n+")",boxShadow:"0 1px 3px 0 rgba(0,0,0,"+.1*n+"), 0 1px 2px 0 rgba(0,0,0,"+.06*n+")"}},r.a.createElement("div",{className:"max-w-6xl mx-auto"},r.a.createElement("div",{className:"flex justify-between"},r.a.createElement(o.AnchorLink,{title:"Home",to:"/#home"},r.a.createElement("span",{className:"icon-logo text-2xl"})),r.a.createElement("div",null,r.a.createElement("ul",{className:"flex tracking-wider uppercase font-bold"},r.a.createElement("li",{className:"mr-4"},r.a.createElement(o.AnchorLink,{title:"Portfolio",to:"/#portfolio"},"Portfolio")),r.a.createElement("li",{className:"mr-4"},r.a.createElement(o.AnchorLink,{title:"About",to:"/#about"},"About")),r.a.createElement("li",null,r.a.createElement(o.AnchorLink,{title:"Contact",to:"/#contact"},"Contact")))))))};var c=function(e){var t=e.onMenuButtonClicked,n=e.isSidebarMenuVisible;return r.a.createElement("nav",{className:"sm:hidden"},r.a.createElement("div",{className:"fixed z-30 top-0 right-0 left-0 menu-opacity shadow pt-5 pb-3"},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"fixed z-50 top-0 my-5 mx-4",id:"menu-button",onClick:t},r.a.createElement("span",{className:"icon-Hamburger text-xl cursor-pointer"})),r.a.createElement(o.AnchorLink,{title:"Home",to:"/#home"},r.a.createElement("span",{className:"icon-logo text-2xl"})))),r.a.createElement("div",{className:"sidebar-menu fixed z-40 w-4/6 shadow menu-opacity h-screen "+(n?"open":""),id:"sidebar-menu"},r.a.createElement("div",{className:"p-3"},r.a.createElement("span",{className:"icon-logo-portfolio2019 text-xl"})),r.a.createElement("ul",{className:"flex flex-col px-4",onClick:t},r.a.createElement("li",{className:"mb-4 font-bold"},r.a.createElement(o.AnchorLink,{title:"Portfolio",to:"/#portfolio"},"Portfolio")),r.a.createElement("li",{className:"mb-4 font-bold"},r.a.createElement(o.AnchorLink,{title:"About",to:"/#about"},"About")),r.a.createElement("li",{className:"mb-4 font-bold"},r.a.createElement(o.AnchorLink,{title:"Contact",to:"/#contact"},"Contact")))))};var s=function(e){var t=e.onMenuButtonClicked,n=e.isSidebarMenuVisible,a=e.scrollRatio;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidebar-menu-body-overlay fixed top-0 bottom-0 left-0 right-0 bg-gray-900 z-40 "+(n?"activated":"hidden"),id:"sidebar-menu-body-overlay",onClick:t}),r.a.createElement("header",null,r.a.createElement(c,{isSidebarMenuVisible:n,onMenuButtonClicked:t}),r.a.createElement(i,{scrollRatio:a})))};var l=function(){var e=(new Date).getFullYear();return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{className:"border-t border-gray-400 bg-light border-0"}),r.a.createElement("footer",{className:"max-w-6xl mx-auto mt-5 mb-5"},r.a.createElement("div",{className:"padding"},r.a.createElement("p",{className:"mb-0"},r.a.createElement("span",{className:"icon-logo text-xl"})),r.a.createElement("p",{className:"mb-0 mt-1 text-sm"},"©",e," - All rights reserved"),r.a.createElement("p",{className:"text-sm"},"Handmade by"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/fabiendemangeat/en",target:"blank",title:"LinkedIn Fabien Demangeat"},"Fabien Demangeat")," ","and myself"))))},u=n("6Wt+");t.a=function(e){var t=e.children,n=e.scrollRatio,o=Object(a.useState)(!1),i=o[0],c=o[1];return r.a.createElement(u.a,{isSidebarMenuVisible:i},r.a.createElement(s,{isSidebarMenuVisible:i,onMenuButtonClicked:function(){return c(!i)},scrollRatio:n}),t,r.a.createElement(l,null))}},F0uZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=s;var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("Wbzz"),i=n("dj5g"),c=n("PDH8");function s(e){var t=e.to,n=e.title,a=e.children,c=e.className,s=e.stripHash,l=void 0!==s&&s,u={to:l?(0,i.stripHashedLocation)(t):t,onClick:function(e){return l?(0,i.handleStrippedLinkClick)(t,e):(0,i.handleLinkClick)(t,e)}};return n&&(u.title=n),c&&(u.className=c),r.default.createElement(o.Link,u,Boolean(a)?a:n)}s.propTypes=c.anchorLinkTypes},PDH8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var a,r=(a=n("17x9"))&&a.__esModule?a:{default:a};var o={to:r.default.string.isRequired,title:r.default.string,className:r.default.string,stripHash:r.default.bool,children:r.default.node};t.anchorLinkTypes=o},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return _}));n("91GP"),n("Vd3H");var a=n("q1tI"),r=n.n(a),o=n("Bl7J"),i=n("vrFN"),c="object"==typeof window,s=(n("nkPT"),function(e){Object(a.useEffect)(e,[])}),l=function(e){var t=Object(a.useRef)(e);t.current=e,s((function(){return function(){return t.current()}}))},u=function(e){var t=Object(a.useRef)(0),n=Object(a.useState)(e),r=n[0],o=n[1],i=Object(a.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){o(e)}))}),[]);return l((function(){cancelAnimationFrame(t.current)})),[r,i]},m=function(){var e=u({x:c?window.pageXOffset:0,y:c?window.pageYOffset:0}),t=e[0],n=e[1];return Object(a.useEffect)((function(){var e=function(){n({x:window.pageXOffset,y:window.pageYOffset})};return window.addEventListener("scroll",e,{capture:!1,passive:!0}),function(){window.removeEventListener("scroll",e)}}),[]),t},d=n("bdgK"),f=function(){var e=Object(a.useState)({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0}),t=e[0],n=e[1],r=Object(a.useState)((function(){return new d.a((function(e){var t=e[0];t&&n(t.contentRect)}))}))[0];return[Object(a.useCallback)((function(e){r.disconnect(),e&&r.observe(e)}),[r]),t]},h=n("Wbzz"),b=n("9eSz"),p=n.n(b);var v=function(e){var t=e.slug,n=e.title,a=e.thumbnail,o=e.backgroundColor;return r.a.createElement(h.Link,{className:"w-full px-2 py-2 sm:w-1/2 md:w-1/3 project-preview",to:"/portfolio/"+t},r.a.createElement("div",{className:"relative trigger overflow-hidden th-background"},r.a.createElement(p.a,{alt:n,backgroundColor:o,className:"w-full h-96 sm:h-auto object-cover thumbnail",fluid:a}),r.a.createElement("div",{className:"touch description-touch"},r.a.createElement("h2",{className:"text-lg mb-0 font-bold text-white leading-none"},n)),r.a.createElement("div",{className:"absolute z-10 bottom-0 w-full h-full flex items-center text-light target overlay"},r.a.createElement("div",{className:"p-4 flex flex-col items-center m-auto w-auto text-center th-trigger"},r.a.createElement("h2",{className:"mb-1 tracking-wide text-3xl font-medium leading-none mb-4"},n),r.a.createElement("button",{className:"border-2 border-light cta-preview px-2 py-1"},"View more")))))},g=Object(a.memo)((function(e){var t=e.projects,n=e.imagesSharp;return t.map((function(e){var t=e.slug,a=e.thumbnail,o=e.title;return r.a.createElement(v,{slug:t,thumbnail:n[a].childImageSharp.fluid,title:o})}))})),E=n("1eu9"),y=n.n(E),w=n("oEq0"),_="4090645998";var x=Object(a.memo)((function(e){var t=e.heroDivRef,n=e.heroImages;return r.a.createElement(y.a,{className:"relative h-screen hero",critical:!0,fluid:n,id:"home",style:{backgroundSize:"cover",backgroundPositionX:"0%",backgroundPositionY:"bottom",backgroundRepeat:"no-repeat"},Tag:"section"},r.a.createElement(w.AnchorLink,{to:"/#portfolio"},r.a.createElement("div",{className:"absolute w-full arrow-contain"},r.a.createElement("div",{className:"arrow-t mx-auto"},r.a.createElement("span",null)),r.a.createElement("div",{className:"arrow mx-auto"},r.a.createElement("span",null)))),r.a.createElement("div",{className:"container max-w-6xl justify-center flex items-center h-full mx-auto text-center",ref:t},r.a.createElement("div",{className:"intro-text mb-40 mt-4 md:mt-30 md:mb-56 lg:mb-48 px-6 ",style:{width:"600px"}},r.a.createElement("h1",{className:"mb-3 mt-0 text-xl"},"Hi there!"),r.a.createElement("p",{className:"font-medium text-lg mb-4"},"I'm Sonia, an experienced Digital Designer based in London.",r.a.createElement("br",null),"Welcome to my portfolio and of course,",r.a.createElement("br",null)," feel free to reach out :)"),r.a.createElement(w.AnchorLink,{className:"intro text-lg mt-3 border-dark text-dark border rounded-full px-3 py-1 font-medium",to:"/#contact"},"Let's chat!"))))})),O=Object(a.memo)((function(e){var t=e.projects,n=e.images,o=e.sortingArray,i=Object(a.useMemo)((function(){return e=o,t.sort((function(t,n){return e.indexOf(t.slug)<e.indexOf(n.slug)?-1:1}));var e}),[t,o]),c=Object(a.useMemo)((function(){return i.slice(0,12)}),[i]),s=Object(a.useMemo)((function(){return i.slice(12)}),[i]),l=Object(a.useMemo)((function(){return n.reduce((function(e,t){var n;return Object.assign({},e,((n={})[t.relativePath]=t,n))}),{})}),[n]),u=Object(a.useState)(!1),m=u[0],d=u[1],f=Object(a.useCallback)((function(){d(!0)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{"aria-hidden":"true",className:"block relative",id:"portfolio",style:{top:"-50px",height:0,width:0}}," "),r.a.createElement("section",{className:"mt-12",id:"gallery"},r.a.createElement("h1",{className:"padding"},"Portfolio"),r.a.createElement("div",{className:"overflow-hidden"},r.a.createElement("div",{className:"flex flex-wrap -mx-2"},r.a.createElement(g,{imagesSharp:l,projects:c}),!m&&r.a.createElement("div",{className:"mx-auto my-6"},r.a.createElement("button",{className:"cta",onClick:f},"More projects"))),r.a.createElement("div",{className:"flex flex-wrap -mx-2 collapsible "+(m&&"expanded")},r.a.createElement(g,{imagesSharp:l,projects:s})))),r.a.createElement("hr",{className:"border-t border-gray-300 bg-light border-0 mt-8"}))})),k=Object(a.memo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"block relative",id:"about",style:{top:"-50px"}}),r.a.createElement("section",{className:"padding"},r.a.createElement("h1",null,"About"),r.a.createElement("div",null,r.a.createElement("p",null,"All in all, I have quite a traditional Designer background: after seven years of hard-doodling practice on notebooks and school tables, design was definitely my passion. Therefore after high school, I naturally studied economics and attended a business school... But this is about the time when I started doing my first commissioned works. Further non-design-related jobs brought me to create various communications materials, and I developed in parallel a real taste for web design and vector illustrations."),r.a.createElement("p",null,"Long story short, I'm now a full-time Digital Design Manager with many years of experience working on multidisciplinary projects including digital content creation, UX design, project management and digital strategy. I'm currently leading a team of Digital Designers and Web Publishers looking after an eCommerce website."),r.a.createElement("p",null,"Please feel free to get in touch! You'll find my contact details below. Cheers!")),r.a.createElement("div",{className:"mt-8 mb-8 pb-5"},r.a.createElement("a",{className:"cta",href:"/documents/CV-Sonia_Lahcene.pdf",target:"blank"},"Download my CV"))),r.a.createElement("hr",{className:"border-t border-gray-300 bg-light border-0 mt-8"}))})),N=Object(a.memo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"block relative",id:"contact",style:{top:"-50px"}}),r.a.createElement("section",{className:"padding pb-12"},r.a.createElement("h1",null,"Contact"),r.a.createElement("ul",{className:"ml-6"},r.a.createElement("li",{className:"mb-3 contact-trigger"},r.a.createElement("a",{href:"mailto:contact@sonialahcene.com",target:"blank",title:"Contact Sonia Lahcene"},r.a.createElement("span",{className:"icon-mail text-xl mr-2 align-text-bottom"}),"Contact me at"," ",r.a.createElement("span",{className:"font-medium"},"contact@sonialahcene.com"))),r.a.createElement("li",{className:"mb-3 contact-trigger"},r.a.createElement("a",{href:"http://uk.linkedin.com/in/sonialahcene",target:"blank",title:"LinkedIn Sonia Lahcene"},r.a.createElement("span",{className:"icon-in text-xl mr-2 align-text-bottom"}),"Find me on ",r.a.createElement("span",{className:"font-medium"},"LinkedIn"))),r.a.createElement("li",{className:"mb-3 contact-trigger"},r.a.createElement("a",{href:"https://www.behance.net/sonialahcene",target:"blank",title:"Behance Sonia Lahcene"},r.a.createElement("span",{className:"icon-be text-xl mr-2 align-text-bottom"}),"Check out my ",r.a.createElement("span",{className:"font-medium"},"Behance"))))))}));t.default=function(e){var t=e.data,n=t.allProjectsJson,c=t.sortingJson,s=n.nodes,l=c.sorting,u=t.allFile.nodes,d=Object(a.useMemo)((function(){return[t.heroMobileImage.childImageSharp.fluid,Object.assign({},t.heroDesktopImage.childImageSharp.fluid,{media:"(min-width: 425px)"})]}),[t.heroDesktopImage.childImageSharp.fluid,t.heroMobileImage.childImageSharp.fluid]),h=m().y,b=f(),p=b[0],v=h/(.2*b[1].height),g=v<1?v:1;return r.a.createElement(o.a,{scrollRatio:g},r.a.createElement(i.a,{keywords:["contact","about","projects"],title:"Home"}),r.a.createElement(x,{heroDivRef:p,heroImages:d}),r.a.createElement("main",{className:"container max-w-6xl mx-auto"},r.a.createElement(O,{images:u,projects:s,sortingArray:l}),r.a.createElement(k,null),r.a.createElement(N,null)))}},bdgK:function(e,t,n){"use strict";(function(e){n("EK0E"),n("bWfx"),n("hHhE"),n("DNiP"),n("RW0V"),n("0l/t"),n("V+eJ"),n("eM6i"),n("2Spj"),n("8+KV"),n("HAE/"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var a=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,a){return e[0]===t&&(n=a,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),a=this.__entries__[n];return a&&a[1]},t.prototype.set=function(t,n){var a=e(this.__entries__,t);~a?this.__entries__[a][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,a=e(n,t);~a&&n.splice(a,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,a=this.__entries__;n<a.length;n++){var r=a[n];e.call(t,r[1],r[0])}},t}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),i="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var c=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,l=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,a=!1,r=0;function o(){n&&(n=!1,e()),a&&s()}function c(){i(o)}function s(){var e=Date.now();if(n){if(e-r<2)return;a=!0}else n=!0,a=!1,setTimeout(c,t);r=e}return s}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;c.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),u=function(e,t){for(var n=0,a=Object.keys(t);n<a.length;n++){var r=a[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},m=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},d=g(0,0,0,0);function f(e){return parseFloat(e)||0}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+f(e["border-"+n+"-width"])}),0)}function b(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return d;var a=m(e).getComputedStyle(e),r=function(e){for(var t={},n=0,a=["top","right","bottom","left"];n<a.length;n++){var r=a[n],o=e["padding-"+r];t[r]=f(o)}return t}(a),o=r.left+r.right,i=r.top+r.bottom,c=f(a.width),s=f(a.height);if("border-box"===a.boxSizing&&(Math.round(c+o)!==t&&(c-=h(a,"left","right")+o),Math.round(s+i)!==n&&(s-=h(a,"top","bottom")+i)),!function(e){return e===m(e).document.documentElement}(e)){var l=Math.round(c+o)-t,u=Math.round(s+i)-n;1!==Math.abs(l)&&(c-=l),1!==Math.abs(u)&&(s-=u)}return g(r.left,r.top,c,s)}var p="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof m(e).SVGGraphicsElement}:function(e){return e instanceof m(e).SVGElement&&"function"==typeof e.getBBox};function v(e){return r?p(e)?function(e){var t=e.getBBox();return g(0,0,t.width,t.height)}(e):b(e):d}function g(e,t,n,a){return{x:e,y:t,width:n,height:a}}var E=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=g(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=v(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),y=function(e,t){var n,a,r,o,i,c,s,l=(a=(n=t).x,r=n.y,o=n.width,i=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(c.prototype),u(s,{x:a,y:r,width:o,height:i,top:r,right:a+o,bottom:i+r,left:a}),s);u(this,{target:e,contentRect:l})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new a,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof m(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new E(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof m(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new y(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),_="undefined"!=typeof WeakMap?new WeakMap:new a,x=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=l.getInstance(),a=new w(t,n,this);_.set(this,a)};["observe","unobserve","disconnect"].forEach((function(e){x.prototype[e]=function(){var t;return(t=_.get(this))[e].apply(t,arguments)}}));var O=void 0!==o.ResizeObserver?o.ResizeObserver:x;t.a=O}).call(this,n("yLpj"))},nkPT:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("RW0V"),n("a1Th"),n("h7Nl"),n("Btvt"),n("OEbY"),n("Oyvg"),n("LK8F"),e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var a,r,o;if(Array.isArray(t)){if((a=t.length)!=n.length)return!1;for(r=a;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((a=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=a;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,o[r]))return!1;for(r=a;0!=r--;){var i=o[r];if(("_owner"!==i||!t.$$typeof)&&!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n}},oEq0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return a.AnchorLink}});var a=n("F0uZ")}}]);
//# sourceMappingURL=component---src-pages-index-js-8df08b127e5fb5bd4bbd.js.map