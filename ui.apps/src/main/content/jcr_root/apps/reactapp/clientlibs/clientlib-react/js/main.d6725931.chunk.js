(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{287:function(t,e,n){var a={".":58,"./":58,"./index":58,"./index.js":58};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=s,t.exports=o,o.id=287},292:function(t,e,n){},293:function(t,e,n){},294:function(t,e,n){"use strict";n.r(e);n(144),n(217),n(267);var a=n(31),o=n(19),s=n(0),c=n(139),p=n(12),r=n(4),i=n(11);class m extends r.Page{render(){return Object(i.jsxs)("div",{children:[this.childComponents,this.childPages]})}}var l=Object(r.withModel)(m);a.ModelClient;var d=n(97),b=n.n(d);const j=()=>Object(i.jsx)("div",{children:"Error loading chunks!"}),u=(O=t=>Object(i.jsx)("div",{className:"loading-skeleton loading-skeleton__block",style:{height:t.skeletonHeight?t.skeletonHeight:"50px"}}),h={skeletonHeight:1e3},function(t){return Object(i.jsx)(O,{...h,...t})});var O,h;var g=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return b()(t,{loading:e,error:j})};n(292);class T extends r.Page{get containerProps(){let t=super.containerProps;return t.className=(t.className||"")+" page "+(this.props.cssClassNames||""),t}}var x,C;Object(r.MapTo)("reactapp/components/page")(Object(r.withComponentMappingContext)((x=T,class extends s.Component{render(){let t=this.props.cqPath;return t?(C=C||"html",Object(i.jsx)(p.d,{exact:!0,path:"(.*)"+t+"(."+C+")?",render:t=>Object(i.jsx)(x,{...this.props,...t})},t)):Object(i.jsx)(x,{...this.props})}})));Object(r.MapTo)("reactapp/components/container")(Object(r.withComponentMappingContext)(r.AllowedComponentsContainer),{emptyLabel:"Container",isEmpty:function(t){return!t||!t.cqItemsOrder||0===t.cqItemsOrder.length}});Object(r.MapTo)("reactapp/components/experiencefragment")(Object(r.withComponentMappingContext)(r.Container),{emptyLabel:"Experience Fragment",isEmpty:function(t){return!t||!t.configured}});n(295);var E=n(141),y=n(142),M=n(42),_=n(18);const v=g((()=>Promise.all([n.e(3),n.e(4)]).then(n.bind(null,363)))),V=g((()=>n.e(5).then(n.t.bind(null,361,7)))),I=g((()=>n.e(6).then(n.t.bind(null,362,7)))),f=g((()=>Promise.resolve().then(n.bind(null,295))));Object(r.MapTo)("reactapp/components/download")(_.DownloadV1,{isEmpty:_.DownloadV1IsEmptyFn}),Object(r.MapTo)("reactapp/components/list")(_.ListV2,{isEmpty:_.ListV2IsEmptyFn}),Object(r.MapTo)("reactapp/components/separator")(_.SeparatorV1,{isEmpty:_.SeparatorV1IsEmptyFn}),Object(r.MapTo)("reactapp/components/button")(_.ButtonV1,{isEmpty:_.ButtonV1IsEmptyFn}),Object(r.MapTo)("reactapp/components/teaser")(_.TeaserV1,{isEmpty:_.TeaserV1IsEmptyFn}),Object(r.MapTo)("reactapp/components/image")(_.ImageV2,{isEmpty:_.ImageV2IsEmptyFn}),Object(r.MapTo)("reactapp/components/title")(V,{isEmpty:y.TitleV2IsEmptyFn}),Object(r.MapTo)("reactapp/components/breadcrumb")(_.BreadCrumbV2,{isEmpty:_.BreadCrumbV2IsEmptyFn}),Object(r.MapTo)("reactapp/components/navigation")(_.NavigationV1),Object(r.MapTo)("reactapp/components/languagenavigation")(_.LanguageNavigationV1),Object(r.MapTo)("reactapp/components/tabs")(M.TabsV1,{isEmpty:M.TabsV1IsEmptyFn}),Object(r.MapTo)("reactapp/components/accordion")(M.AccordionV1,{isEmpty:M.AccordionV1IsEmptyFn}),Object(r.MapTo)("reactapp/components/carousel")(I,{isEmpty:E.CarouselV1IsEmptyFn}),Object(r.MapTo)("reactapp/components/container")(M.ContainerV1,{isEmpty:M.ContainerV1IsEmptyFn}),Object(r.MapTo)("reactapp/components/componenttest")(f);Object(r.MapTo)("reactapp/components/text")(v,{emptyLabel:"Text",isEmpty:function(t){return!t||!t.text||t.text.trim().length<1}});n(293);const P={};document.addEventListener("DOMContentLoaded",(()=>{a.ModelManager.initialize(P).then((t=>{const e=Object(o.a)();Object(c.render)(Object(i.jsx)(p.e,{history:e,children:Object(i.jsx)(l,{history:e,cqChildren:t[a.Constants.CHILDREN_PROP],cqItems:t[a.Constants.ITEMS_PROP],cqItemsOrder:t[a.Constants.ITEMS_ORDER_PROP],cqPath:t[a.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))},295:function(t,e,n){"use strict";n.r(e);var a=n(36),o=n.n(a),s=n.p+"static/media/Scare.e4515c03.png",c=n(4),p=(n(0),n(11));const r=t=>{let{textTest:e,text:n,image:a={}}=t;return Object(p.jsxs)("div",{className:o.a.container,children:[Object(p.jsx)("div",{className:o.a.CTitle,children:Object(p.jsx)("p",{className:o.a.title,children:e})}),Object(p.jsx)("div",{className:o.a.CText,children:Object(p.jsx)("p",{className:o.a.text,children:n})}),Object(p.jsx)("button",{className:o.a.button,children:"Back to homepage"}),Object(p.jsx)("img",{src:a.src,className:o.a.image})]})};r.defaultProps={textTest:"String",text:"String",image:{src:s}};e.default=Object(c.MapTo)("reactapp/components/componenttest")(r)},36:function(t,e,n){t.exports={CTitle:"ComponentTest_CTitle__1j4hu",CText:"ComponentTest_CText__2Q7vt",title:"ComponentTest_title__2ogw8",text:"ComponentTest_text__iMasT",image:"ComponentTest_image__1hjKd",button:"ComponentTest_button__2a0gb",container:"ComponentTest_container__2gTI8"}}},[[294,1,2]]]);
//# sourceMappingURL=main.d6725931.chunk.js.map