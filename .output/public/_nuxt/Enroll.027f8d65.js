import{_ as s,o as d,c as m,aS as _,bC as x}from"./entry.2e60e461.js";import{u as c}from"./fetch.accb1318.js";import{g as a}from"./index.ccfc92be.js";const f={},u={class:"text-4xl sm:text-5xl md:text-7xl font-bold helvetica tracking-wide"};function h(r,n){return d(),m("span",u,[_(r.$slots,"default")])}const V=s(f,[["render",h]]);var g=(r=>(r[r.NotValid=0]="NotValid",r[r.Valid=1]="Valid",r))(g||{}),b=(r=>(r[r.Existing=0]="Existing",r[r.Successful=1]="Successful",r))(b||{});const v=x("Enroll",()=>({classFromCode:async t=>{const{data:o,error:e}=await c("/api/class/code",{body:{code:t},method:"POST"},"$3SLAKuJlx5");return a(o)},enroll:async({firstname:t,lastname:o,password:e,classID:l})=>{const{data:i,error:k}=await c("/api/enroll",{body:{firstname:t,lastname:o,password:e,classID:l},method:"POST"},"$MekC01jxWw");return a(i)}}));export{g as C,b as E,V as _,v as u};