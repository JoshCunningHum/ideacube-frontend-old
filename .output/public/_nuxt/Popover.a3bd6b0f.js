import{f as R,j as k,i as C,aM as ve,bs as Q,af as O,F as X,n as _,aK as de,al as x,_ as he,bI as we,bJ as ne,b8 as le,bM as $e,aT as G,o as N,k as re,w as H,b as q,aS as ue,a as se,A as ie,aw as U,c as W,q as V,h as z,az as ke}from"./entry.2e60e461.js";import{a as Ce,u as Ee}from"./selectMenu.219fca56.js";import{u as Fe}from"./usePopper.209527cd.js";import{o as n,u as D,H as ee,t as A,N as pe,a as I}from"./dom.c24df755.js";import{m as oe,E as te,w as Te,h as Be,P as M,N as T,T as J}from"./focus-management.add74563.js";import{c as Oe,l as K,p as Ie}from"./open-closed.a3018940.js";import{b as Me}from"./use-resolve-button-type.0b7aaae9.js";import{y as De}from"./use-outside-click.45106478.js";import{V as Ne,p as He,E as Ae,n as ce,d as B}from"./use-root-containers.a607b7ae.js";import{f as Y,a as Z}from"./hidden.287ced4a.js";import"./index.b36c4f78.js";import"./index.ccfc92be.js";const je={wrapper:"relative",container:"z-50 group",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},arrow:Ce};var Le=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Le||{});let fe=Symbol("PopoverContext");function ae(e){let m=x(fe,null);if(m===null){let S=new Error(`<${e} /> is missing a parent <${ye.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(S,ae),S}return m}let Ve=Symbol("PopoverGroupContext");function be(){return x(Ve,null)}let me=Symbol("PopoverPanelContext");function ze(){return x(me,null)}let ye=R({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:m,attrs:S,expose:E}){var t;let o=k(null);E({el:o,$el:o});let f=k(1),r=k(null),P=k(null),v=k(null),c=k(null),h=C(()=>oe(o)),F=C(()=>{var a,u;if(!n(r)||!n(c))return!1;for(let L of document.querySelectorAll("body > *"))if(Number(L==null?void 0:L.contains(n(r)))^Number(L==null?void 0:L.contains(n(c))))return!0;let i=te(),$=i.indexOf(n(r)),j=($+i.length-1)%i.length,ge=($+1)%i.length,Pe=i[j],Se=i[ge];return!((a=n(c))!=null&&a.contains(Pe))&&!((u=n(c))!=null&&u.contains(Se))}),d={popoverState:f,buttonId:k(null),panelId:k(null),panel:c,button:r,isPortalled:F,beforePanelSentinel:P,afterPanelSentinel:v,togglePopover(){f.value=D(f.value,{0:1,1:0})},closePopover(){f.value!==1&&(f.value=1)},close(a){d.closePopover();let u=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?n(a):n(d.button):n(d.button))();u==null||u.focus()}};ve(fe,d),Oe(C(()=>D(f.value,{0:K.Open,1:K.Closed})));let w={buttonId:d.buttonId,panelId:d.panelId,close(){d.closePopover()}},g=be(),p=g==null?void 0:g.registerPopover,[y,s]=Ne(),l=He({mainTreeNodeRef:g==null?void 0:g.mainTreeNodeRef,portals:y,defaultContainers:[r,c]});function b(){var a,u,i,$;return($=g==null?void 0:g.isFocusWithinPopoverGroup())!=null?$:((a=h.value)==null?void 0:a.activeElement)&&(((u=n(r))==null?void 0:u.contains(h.value.activeElement))||((i=n(c))==null?void 0:i.contains(h.value.activeElement)))}return Q(()=>p==null?void 0:p(w)),Ae((t=h.value)==null?void 0:t.defaultView,"focus",a=>{var u,i;a.target!==window&&a.target instanceof HTMLElement&&f.value===0&&(b()||r&&c&&(l.contains(a.target)||(u=n(d.beforePanelSentinel))!=null&&u.contains(a.target)||(i=n(d.afterPanelSentinel))!=null&&i.contains(a.target)||d.closePopover()))},!0),De(l.resolveContainers,(a,u)=>{var i;d.closePopover(),Te(u,Be.Loose)||(a.preventDefault(),(i=n(r))==null||i.focus())},C(()=>f.value===0)),()=>{let a={open:f.value===0,close:d.close};return O(X,[O(s,{},()=>ee({theirProps:{...e,...S},ourProps:{ref:o},slot:a,slots:m,attrs:S,name:"Popover"})),O(l.MainTreeNode)])}}}),Ke=R({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${A()}`}},inheritAttrs:!1,setup(e,{attrs:m,slots:S,expose:E}){let t=ae("PopoverButton"),o=C(()=>oe(t.button));E({el:t.button,$el:t.button}),_(()=>{t.buttonId.value=e.id}),de(()=>{t.buttonId.value=null});let f=be(),r=f==null?void 0:f.closeOthers,P=ze(),v=C(()=>P===null?!1:P.value===t.panelId.value),c=k(null),h=`headlessui-focus-sentinel-${A()}`;v.value||Q(()=>{t.button.value=c.value});let F=Me(C(()=>({as:e.as,type:m.type})),c);function d(l){var b,a,u,i,$;if(v.value){if(t.popoverState.value===1)return;switch(l.key){case I.Space:case I.Enter:l.preventDefault(),(a=(b=l.target).click)==null||a.call(b),t.closePopover(),(u=n(t.button))==null||u.focus();break}}else switch(l.key){case I.Space:case I.Enter:l.preventDefault(),l.stopPropagation(),t.popoverState.value===1&&(r==null||r(t.buttonId.value)),t.togglePopover();break;case I.Escape:if(t.popoverState.value!==0)return r==null?void 0:r(t.buttonId.value);if(!n(t.button)||(i=o.value)!=null&&i.activeElement&&!(($=n(t.button))!=null&&$.contains(o.value.activeElement)))return;l.preventDefault(),l.stopPropagation(),t.closePopover();break}}function w(l){v.value||l.key===I.Space&&l.preventDefault()}function g(l){var b,a;e.disabled||(v.value?(t.closePopover(),(b=n(t.button))==null||b.focus()):(l.preventDefault(),l.stopPropagation(),t.popoverState.value===1&&(r==null||r(t.buttonId.value)),t.togglePopover(),(a=n(t.button))==null||a.focus()))}function p(l){l.preventDefault(),l.stopPropagation()}let y=ce();function s(){let l=n(t.panel);if(!l)return;function b(){D(y.value,{[B.Forwards]:()=>M(l,T.First),[B.Backwards]:()=>M(l,T.Last)})===J.Error&&M(te().filter(a=>a.dataset.headlessuiFocusGuard!=="true"),D(y.value,{[B.Forwards]:T.Next,[B.Backwards]:T.Previous}),{relativeTo:n(t.button)})}b()}return()=>{let l=t.popoverState.value===0,b={open:l},{id:a,...u}=e,i=v.value?{ref:c,type:F.value,onKeydown:d,onClick:g}:{ref:c,id:a,type:F.value,"aria-expanded":t.popoverState.value===0,"aria-controls":n(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:d,onKeyup:w,onClick:g,onMousedown:p};return O(X,[ee({ourProps:i,theirProps:{...m,...u},slot:b,attrs:m,slots:S,name:"PopoverButton"}),l&&!v.value&&t.isPortalled.value&&O(Y,{id:h,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:s})])}}}),Re=R({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${A()}`}},inheritAttrs:!1,setup(e,{attrs:m,slots:S,expose:E}){let{focus:t}=e,o=ae("PopoverPanel"),f=C(()=>oe(o.panel)),r=`headlessui-focus-sentinel-before-${A()}`,P=`headlessui-focus-sentinel-after-${A()}`;E({el:o.panel,$el:o.panel}),_(()=>{o.panelId.value=e.id}),de(()=>{o.panelId.value=null}),ve(me,o.panelId),Q(()=>{var p,y;if(!t||o.popoverState.value!==0||!o.panel)return;let s=(p=f.value)==null?void 0:p.activeElement;(y=n(o.panel))!=null&&y.contains(s)||M(n(o.panel),T.First)});let v=Ie(),c=C(()=>v!==null?(v.value&K.Open)===K.Open:o.popoverState.value===0);function h(p){var y,s;switch(p.key){case I.Escape:if(o.popoverState.value!==0||!n(o.panel)||f.value&&!((y=n(o.panel))!=null&&y.contains(f.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),o.closePopover(),(s=n(o.button))==null||s.focus();break}}function F(p){var y,s,l,b,a;let u=p.relatedTarget;u&&n(o.panel)&&((y=n(o.panel))!=null&&y.contains(u)||(o.closePopover(),((l=(s=n(o.beforePanelSentinel))==null?void 0:s.contains)!=null&&l.call(s,u)||(a=(b=n(o.afterPanelSentinel))==null?void 0:b.contains)!=null&&a.call(b,u))&&u.focus({preventScroll:!0})))}let d=ce();function w(){let p=n(o.panel);if(!p)return;function y(){D(d.value,{[B.Forwards]:()=>{var s;M(p,T.First)===J.Error&&((s=n(o.afterPanelSentinel))==null||s.focus())},[B.Backwards]:()=>{var s;(s=n(o.button))==null||s.focus({preventScroll:!0})}})}y()}function g(){let p=n(o.panel);if(!p)return;function y(){D(d.value,{[B.Forwards]:()=>{let s=n(o.button),l=n(o.panel);if(!s)return;let b=te(),a=b.indexOf(s),u=b.slice(0,a+1),i=[...b.slice(a+1),...u];for(let $ of i.slice())if($.dataset.headlessuiFocusGuard==="true"||l!=null&&l.contains($)){let j=i.indexOf($);j!==-1&&i.splice(j,1)}M(i,T.First,{sorted:!1})},[B.Backwards]:()=>{var s;M(p,T.Previous)===J.Error&&((s=n(o.button))==null||s.focus())}})}y()}return()=>{let p={open:o.popoverState.value===0,close:o.close},{id:y,focus:s,...l}=e,b={ref:o.panel,id:y,onKeydown:h,onFocusout:t&&o.popoverState.value===0?F:void 0,tabIndex:-1};return ee({ourProps:b,theirProps:{...m,...l},attrs:m,slot:p,slots:{...S,default:(...a)=>{var u;return[O(X,[c.value&&o.isPortalled.value&&O(Y,{id:r,ref:o.beforePanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:w}),(u=S.default)==null?void 0:u.call(S,...a),c.value&&o.isPortalled.value&&O(Y,{id:P,ref:o.afterPanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:g})])]}},features:pe.RenderStrategy|pe.Static,visible:c.value,name:"PopoverPanel"})}}});const Ge=we(ne.ui.strategy,ne.ui.popover,je),qe=R({components:{HPopover:ye,HPopoverButton:Ke,HPopoverPanel:Re},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:open"],setup(e){const{ui:m,attrs:S}=Ee("popover",le(e,"ui"),Ge,le(e,"class")),E=C(()=>$e(e.mode==="hover"?{offsetDistance:0}:{},e.popper,m.value.popper)),[t,o]=Fe(E.value),f=k(null),r=k(null);let P=null,v=null;_(()=>{var g;const d=(g=f.value)==null?void 0:g.$.provides;if(!d)return;const w=Object.getOwnPropertySymbols(d);r.value=w.length&&d[w[0]]});const c=C(()=>{var g,p;const w=`${((g=e.popper)==null?void 0:g.offsetDistance)||((p=m.value.popper)==null?void 0:p.offsetDistance)||8}px`;return e.mode==="hover"?{paddingTop:w,paddingBottom:w,paddingLeft:w,paddingRight:w}:{}});function h(){e.mode!=="hover"||!r.value||(v&&(clearTimeout(v),v=null),r.value.popoverState!==0&&(P=P||setTimeout(()=>{r.value.togglePopover&&r.value.togglePopover(),P=null},e.openDelay)))}function F(){e.mode!=="hover"||!r.value||(P&&(clearTimeout(P),P=null),r.value.popoverState!==1&&(v=v||setTimeout(()=>{r.value.closePopover&&r.value.closePopover(),v=null},e.closeDelay)))}return{ui:m,attrs:S,popover:f,popper:E,trigger:t,container:o,containerStyle:c,onMouseOver:h,onMouseLeave:F}}}),Ue=["disabled"];function We(e,m,S,E,t,o){const f=G("HPopoverButton"),r=G("HPopoverPanel"),P=G("HPopover");return N(),re(P,U({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:H(({open:v,close:c})=>[q(f,{ref:"trigger",as:"div",disabled:e.disabled,class:"inline-flex w-full",role:"button",onMouseover:e.onMouseOver},{default:H(()=>[ue(e.$slots,"default",{open:e.open!==void 0?e.open:v,close:c},()=>[se("button",{disabled:e.disabled}," Open ",8,Ue)])]),_:2},1032,["disabled","onMouseover"]),e.overlay?(N(),re(ie,U({key:0,appear:""},e.ui.overlay.transition),{default:H(()=>[(e.open!==void 0?e.open:v)?(N(),W("div",{key:0,class:V([e.ui.overlay.base,e.ui.overlay.background]),onClick:m[0]||(m[0]=h=>e.$emit("update:open"))},null,2)):z("",!0)]),_:2},1040)):z("",!0),(e.open!==void 0?e.open:v)?(N(),W("div",{key:1,ref:"container",class:V([e.ui.container,e.ui.width]),style:ke(e.containerStyle),onMouseover:m[1]||(m[1]=(...h)=>e.onMouseOver&&e.onMouseOver(...h))},[q(ie,U({appear:""},e.ui.transition),{default:H(()=>[se("div",null,[e.popper.arrow?(N(),W("div",{key:0,"data-popper-arrow":"",class:V(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.ui.arrow)])},null,2)):z("",!0),q(r,{class:V([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:H(()=>[ue(e.$slots,"panel",{open:e.open!==void 0?e.open:v,close:c})]),_:2},1032,["class"])])]),_:2},1040)],38)):z("",!0)]),_:3},16,["class","onMouseleave"])}const lo=he(qe,[["render",We]]);export{lo as default};
