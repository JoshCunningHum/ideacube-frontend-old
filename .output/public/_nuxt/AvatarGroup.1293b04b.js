import{f as y,b8 as o,i,bL as x,bK as v,M as b,af as f,bI as c,bJ as s}from"./entry.2e60e461.js";import{t as z}from"./tw-merge.608f89b9.js";import{_ as h,a as w}from"./Avatar.1bb1d94f.js";import{u as C}from"./selectMenu.219fca56.js";import"./Icon.4abee38d.js";import"./Icon.d59a0deb.js";import"./index.b8fe2cb5.js";const G={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},m=c(s.ui.strategy,s.ui.avatar,w),_=c(s.ui.strategy,s.ui.avatarGroup,G),M=y({inheritAttrs:!1,props:{size:{type:String,default:null,validator(a){return Object.keys(m.size).includes(a)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(a,{slots:g}){const{ui:t,attrs:p}=C("avatarGroup",o(a,"ui"),_,o(a,"class")),n=i(()=>x(g)),r=i(()=>typeof a.max=="string"?parseInt(a.max,10):a.max),d=i(()=>n.value.map((l,u)=>{const e={};return!a.max||r.value&&u<r.value?(a.size&&(e.size=a.size),e.class=l.props.class||"",e.class=z(v(e.class,t.value.ring,t.value.margin),e.class),b(l,e)):r.value!==void 0&&u===r.value?f(h,{size:a.size||m.default.size,text:`+${n.value.length-r.value}`,class:v(t.value.ring,t.value.margin)}):null}).filter(Boolean).reverse());return()=>f("div",{class:t.value.wrapper,...p.value},d.value)}});export{M as default};
