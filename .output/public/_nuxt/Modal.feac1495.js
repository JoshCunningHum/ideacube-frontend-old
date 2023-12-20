import{u as T}from"./selectMenu.219fca56.js";import{_ as k,bI as B,bJ as c,f as V,b8 as y,i as g,aT as s,o as v,k as h,w as t,b as u,aw as p,a as d,q as r,h as D,aS as H}from"./entry.2e60e461.js";import{U as S,G as $,S as F,h as O}from"./transition.cdc336cb.js";import"./dom.c24df755.js";import"./hidden.287ced4a.js";import"./focus-management.add74563.js";import"./use-root-containers.a607b7ae.js";import"./use-outside-click.45106478.js";import"./micro-task.89dcd6af.js";import"./open-closed.a3018940.js";import"./disposables.57da4964.js";const P={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right overflow-hidden w-full flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"sm:max-w-lg",height:"",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},R=B(c.ui.strategy,c.ui.modal,P),j=V({components:{HDialog:S,HDialogPanel:$,TransitionRoot:F,TransitionChild:O},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","close"],setup(e,{emit:a}){const{ui:i,attrs:m}=T("modal",y(e,"ui"),R,y(e,"class")),l=g({get(){return e.modelValue},set(o){a("update:modelValue",o)}}),f=g(()=>e.transition?{...i.value.transition}:{});function n(o){l.value=o,a("close")}return{ui:i,attrs:m,isOpen:l,transitionClass:f,close:n}}});function N(e,a,i,m,l,f){const n=s("TransitionChild"),o=s("HDialogPanel"),b=s("HDialog"),w=s("TransitionRoot");return v(),h(w,{appear:e.appear,show:e.isOpen,as:"template"},{default:t(()=>[u(b,p({class:e.ui.wrapper},e.attrs,{onClose:a[0]||(a[0]=C=>!e.preventClose&&e.close(C))}),{default:t(()=>[e.overlay?(v(),h(n,p({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:t(()=>[d("div",{class:r([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):D("",!0),d("div",{class:r(e.ui.inner)},[d("div",{class:r([e.ui.container,!e.fullscreen&&e.ui.padding])},[u(n,p({as:"template",appear:e.appear},e.transitionClass),{default:t(()=>[u(o,{class:r([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?"w-screen":e.ui.width,e.fullscreen?"h-screen":e.ui.height,e.fullscreen?"rounded-none":e.ui.rounded,e.fullscreen?"m-0":e.ui.margin])},{default:t(()=>[H(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class"])]),_:3},8,["appear","show"])}const Q=k(j,[["render",N]]);export{Q as default};