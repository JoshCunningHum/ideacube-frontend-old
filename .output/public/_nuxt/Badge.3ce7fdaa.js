import{_ as g,bI as u,bJ as o,f as b,b8 as y,i as f,bK as p,o as k,c as x,aS as m,d as v,t as w,aw as _}from"./entry.2e60e461.js";import{t as h}from"./tw-merge.608f89b9.js";import{u as j}from"./selectMenu.219fca56.js";import{a as S}from"./useButtonGroup.cc33183f.js";const z={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},r=u(o.ui.strategy,o.ui.badge,z),O=b({inheritAttrs:!1,props:{size:{type:String,default:()=>r.default.size,validator(t){return Object.keys(r.size).includes(t)}},color:{type:String,default:()=>r.default.color,validator(t){return[...o.ui.colors,...Object.keys(r.color)].includes(t)}},variant:{type:String,default:()=>r.default.variant,validator(t){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(e=>Object.keys(e))].includes(t)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(t){const{ui:e,attrs:i}=j("badge",y(t,"ui"),r),{size:l,rounded:n}=S({ui:e,props:t}),s=f(()=>{var c,d;const a=((d=(c=e.value.color)==null?void 0:c[t.color])==null?void 0:d[t.variant])||e.value.variant[t.variant];return h(p(e.value.base,e.value.font,n.value,e.value.size[l.value],a==null?void 0:a.replaceAll("{color}",t.color)),t.class)});return{attrs:i,badgeClass:s}}});function C(t,e,i,l,n,s){return k(),x("span",_({class:t.badgeClass},t.attrs),[m(t.$slots,"default",{},()=>[v(w(t.label),1)])],16)}const J=g(O,[["render",C]]);export{J as default};
