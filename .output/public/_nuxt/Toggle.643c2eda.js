import B from"./Icon.4abee38d.js";import{f as j,al as D,i as o,j as F,n as T,m as U,af as C,F as L,_ as N,bI as P,bJ as x,b8 as R,bK as g,aT as G,o as k,k as J,w as M,a as q,q as f,c as I,b as S,h as z,aw as Q}from"./entry.2e60e461.js";import{t as W}from"./tw-merge.608f89b9.js";import{u as X}from"./selectMenu.219fca56.js";import{u as Y}from"./useFormGroup.a790b1a9.js";import{t as Z,o as _,K as ee,H as ae,T as te,a as V}from"./dom.c24df755.js";import{b as le}from"./use-resolve-button-type.0b7aaae9.js";import{f as ne,a as oe}from"./hidden.287ced4a.js";import{d as re,p as ie}from"./use-controllable.6f70f839.js";import"./Icon.d59a0deb.js";import"./index.b8fe2cb5.js";import"./uid.12f507af.js";import"./index.ccfc92be.js";const se={base:"relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",rounded:"rounded-full",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",active:"bg-{color}-500 dark:bg-{color}-400",inactive:"bg-gray-200 dark:bg-gray-700",size:{"2xs":"h-3 w-5",xs:"h-3.5 w-6",sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11",xl:"h-7 w-[3.25rem]","2xl":"h-8 w-[3.75rem]"},container:{base:"pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",active:{"2xs":"translate-x-2 rtl:-translate-x-2",xs:"translate-x-2.5 rtl:-translate-x-2.5",sm:"translate-x-3 rtl:-translate-x-3",md:"translate-x-4 rtl:-translate-x-4",lg:"translate-x-5 rtl:-translate-x-5",xl:"translate-x-6 rtl:-translate-x-6","2xl":"translate-x-7 rtl:-translate-x-7"},inactive:"translate-x-0 rtl:-translate-x-0",size:{"2xs":"h-2 w-2",xs:"h-2.5 w-2.5",sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5",xl:"h-6 w-6","2xl":"h-7 w-7"}},icon:{base:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",active:"opacity-100 ease-in duration-200",inactive:"opacity-0 ease-out duration-100",size:{"2xs":"h-2 w-2",xs:"h-2 w-2",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4",xl:"h-5 w-5","2xl":"h-6 w-6"},on:"text-{color}-500 dark:text-{color}-400",off:"text-gray-400 dark:text-gray-500"},default:{onIcon:null,offIcon:null,color:"primary",size:"md"}};let ue=Symbol("GroupContext"),ce=j({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${Z()}`}},inheritAttrs:!1,setup(e,{emit:u,attrs:a,slots:m,expose:v}){let l=D(ue,null),[n,c]=re(o(()=>e.modelValue),t=>u("update:modelValue",t),o(()=>e.defaultChecked));function r(){c(!n.value)}let h=F(null),s=l===null?h:l.switchRef,b=le(o(()=>({as:e.as,type:a.type})),s);v({el:s,$el:s});function y(t){t.preventDefault(),r()}function w(t){t.key===V.Space?(t.preventDefault(),r()):t.key===V.Enter&&ie(t.currentTarget)}function A(t){t.preventDefault()}let p=o(()=>{var t,i;return(i=(t=_(s))==null?void 0:t.closest)==null?void 0:i.call(t,"form")});return T(()=>{U([p],()=>{if(!p.value||e.defaultChecked===void 0)return;function t(){c(e.defaultChecked)}return p.value.addEventListener("reset",t),()=>{var i;(i=p.value)==null||i.removeEventListener("reset",t)}},{immediate:!0})}),()=>{let{id:t,name:i,value:$,form:E,...H}=e,K={checked:n.value},O={id:t,ref:s,role:"switch",type:b.value,tabIndex:0,"aria-checked":n.value,"aria-labelledby":l==null?void 0:l.labelledby.value,"aria-describedby":l==null?void 0:l.describedby.value,onClick:y,onKeyup:w,onKeypress:A};return C(L,[i!=null&&n.value!=null?C(ne,ee({features:oe.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:n.value,form:E,name:i,value:$})):null,ae({ourProps:O,theirProps:{...a,...te(H,["modelValue","defaultChecked"])},slot:K,attrs:a,slots:m,name:"Switch"})])}}});const d=P(x.ui.strategy,x.ui.toggle,se),de=j({components:{HSwitch:ce,UIcon:B},inheritAttrs:!1,props:{id:{type:String,default:null},name:{type:String,default:null},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onIcon:{type:String,default:()=>d.default.onIcon},offIcon:{type:String,default:()=>d.default.offIcon},color:{type:String,default:()=>d.default.color,validator(e){return x.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:void 0},size:{type:String,default:d.default.size,validator(e){return Object.keys(d.size).includes(e)}},ui:{type:Object,default:void 0}},emits:["update:modelValue"],setup(e,{emit:u}){const{ui:a,attrs:m}=X("toggle",R(e,"ui"),d),{emitFormChange:v,color:l,inputId:n,name:c}=Y(e),r=o({get(){return e.modelValue},set(w){u("update:modelValue",w),v()}}),h=o(()=>W(g(a.value.base,a.value.size[e.size],a.value.rounded,a.value.ring.replaceAll("{color}",l.value),(r.value?a.value.active:a.value.inactive).replaceAll("{color}",l.value)),e.class)),s=o(()=>g(a.value.container.base,a.value.container.size[e.size],r.value?a.value.container.active[e.size]:a.value.container.inactive)),b=o(()=>g(a.value.icon.size[e.size],a.value.icon.on.replaceAll("{color}",l.value))),y=o(()=>g(a.value.icon.size[e.size],a.value.icon.off.replaceAll("{color}",l.value)));return{ui:a,attrs:m,name:c,inputId:n,active:r,switchClass:h,containerClass:s,onIconClass:b,offIconClass:y}}});function fe(e,u,a,m,v,l){const n=B,c=G("HSwitch");return k(),J(c,Q({id:e.inputId,modelValue:e.active,"onUpdate:modelValue":u[0]||(u[0]=r=>e.active=r),name:e.name,disabled:e.disabled,class:e.switchClass},e.attrs),{default:M(()=>[q("span",{class:f(e.containerClass)},[e.onIcon?(k(),I("span",{key:0,class:f([e.active?e.ui.icon.active:e.ui.icon.inactive,e.ui.icon.base]),"aria-hidden":"true"},[S(n,{name:e.onIcon,class:f(e.onIconClass)},null,8,["name","class"])],2)):z("",!0),e.offIcon?(k(),I("span",{key:1,class:f([e.active?e.ui.icon.inactive:e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[S(n,{name:e.offIcon,class:f(e.offIconClass)},null,8,["name","class"])],2)):z("",!0)],2)]),_:1},16,["id","modelValue","name","disabled","class"])}const ze=N(de,[["render",fe]]);export{ze as default};