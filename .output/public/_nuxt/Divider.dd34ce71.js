import y from"./Icon.4abee38d.js";import{_ as g}from"./Avatar.1bb1d94f.js";import{_ as z,bI as w,bJ as b,f as C,b8 as k,i as s,bK as i,o as t,c as d,a as u,q as o,F as S,aS as _,t as $,k as f,aw as m,h}from"./entry.2e60e461.js";import{t as U}from"./tw-merge.608f89b9.js";import{u as A}from"./selectMenu.219fca56.js";import"./Icon.d59a0deb.js";import"./index.b8fe2cb5.js";const B={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:"border-t",vertical:"border-s"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm"},I=w(b.ui.strategy,b.ui.divider,B),j=C({components:{UIcon:y,UAvatar:g},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:c}=A("divider",k(e,"ui"),I),r=s(()=>e.orientation==="horizontal"),p=s(()=>U(i(a.value.wrapper.base,r.value?a.value.wrapper.horizontal:a.value.wrapper.vertical),e.class)),v=s(()=>i(a.value.container.base,r.value?a.value.container.horizontal:a.value.container.vertical)),l=s(()=>{const n={solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}[e.type];return i(a.value.border.base,r.value?a.value.border.horizontal:a.value.border.vertical,r.value?a.value.border.size.horizontal:a.value.border.size.vertical,n)});return{ui:a,attrs:c,wrapperClass:p,containerClass:v,borderClass:l}}});function O(e,a,c,r,p,v){const l=y,n=g;return t(),d("div",m({class:e.wrapperClass},e.attrs),[u("div",{class:o(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(t(),d(S,{key:0},[u("div",{class:o(e.containerClass)},[_(e.$slots,"default",{},()=>[e.label?(t(),d("span",{key:0,class:o(e.ui.label)},$(e.label),3)):e.icon?(t(),f(l,{key:1,name:e.icon,class:o(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(t(),f(n,m({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):h("",!0)])],2),u("div",{class:o(e.borderClass)},null,2)],64)):h("",!0)],16)}const H=z(j,[["render",O]]);export{H as default};
