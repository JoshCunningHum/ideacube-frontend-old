import k from"./Kbd.db66044c.js";import{_ as M,bI as O,bJ as y,f as A,b8 as v,i as N,bM as $,j,o as s,c as n,aS as g,d as u,q as i,b as B,w as b,a as d,h as p,t as h,F as D,v as S,k as z,aw as w,A as F}from"./entry.2e60e461.js";import{a as L,u as V}from"./selectMenu.219fca56.js";import{u as U}from"./usePopper.209527cd.js";import"./tw-merge.608f89b9.js";import"./index.b36c4f78.js";import"./index.ccfc92be.js";const I={wrapper:"relative inline-flex",container:"z-20 group",width:"max-w-xs",background:"bg-white dark:bg-gray-900",color:"text-gray-900 dark:text-white",shadow:"shadow",rounded:"rounded",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{strategy:"fixed"},arrow:L},K=O(y.ui.strategy,y.ui.tooltip,I),P=A({components:{UKbd:k},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:o,attrs:f}=V("tooltip",v(e,"ui"),K,v(e,"class")),l=N(()=>$({},e.popper,o.value.popper)),[m,c]=U(l.value),r=j(!1);let t=null,a=null;function C(){a&&(clearTimeout(a),a=null),!r.value&&(t=t||setTimeout(()=>{r.value=!0,t=null},e.openDelay))}function T(){t&&(clearTimeout(t),t=null),r.value&&(a=a||setTimeout(()=>{r.value=!1,a=null},e.closeDelay))}return{ui:o,attrs:f,popper:l,trigger:m,container:c,open:r,onMouseOver:C,onMouseLeave:T}}}),q=d("span",{class:"mx-1 text-gray-700 dark:text-gray-200"},"·",-1);function E(e,o,f,l,m,c){const r=k;return s(),n("div",w({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseover:o[0]||(o[0]=(...t)=>e.onMouseOver&&e.onMouseOver(...t)),onMouseleave:o[1]||(o[1]=(...t)=>e.onMouseLeave&&e.onMouseLeave(...t))}),[g(e.$slots,"default",{open:e.open},()=>[u(" Hover ")]),e.open&&!e.prevent?(s(),n("div",{key:0,ref:"container",class:i([e.ui.container,e.ui.width])},[B(F,w({appear:""},e.ui.transition),{default:b(()=>{var t;return[d("div",null,[e.popper.arrow?(s(),n("div",{key:0,"data-popper-arrow":"",class:i(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.ui.arrow)])},null,2)):p("",!0),d("div",{class:i([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[g(e.$slots,"text",{},()=>[u(h(e.text),1)]),(t=e.shortcuts)!=null&&t.length?(s(),n("span",{key:0,class:i(e.ui.shortcuts)},[q,(s(!0),n(D,null,S(e.shortcuts,a=>(s(),z(r,{key:a,size:"xs"},{default:b(()=>[u(h(a),1)]),_:2},1024))),128))],2)):p("",!0)],2)])]}),_:3},16)],2)):p("",!0)],16)}const Y=M(P,[["render",E]]);export{Y as default};
