import{u}from"./fetch.accb1318.js";import{bC as p,j as m}from"./entry.2e60e461.js";import{C as c}from"./Generics.d9123dbf.js";import{g as t}from"./index.ccfc92be.js";const l=p("Quiz",()=>{const n=m([]),S=m(-1),o=async()=>{const{data:e,error:a}=await u("/api/quiz",{method:"GET"},"$LCZ48s8E2p");t(a)||t(n).splice(0),e.value&&e.value.quizzes&&t(n).push(...e.value.quizzes)};return{sync:o,create:async(e,a)=>{var s;const{data:r,error:i}=await u("/api/quiz/create",{method:"POST",body:{name:e,classID:a}},"$rAHq467sSt");return((s=t(r))==null?void 0:s.status)===c.SUCCESS&&o(),t(r)},remove:async e=>{var i;const{data:a,error:r}=await u("/api/quiz/delete",{method:"POST",body:{id:e}},"$q0LIeWGCFy");return((i=t(a))==null?void 0:i.status)===c.SUCCESS&&o(),t(a)},rename:async(e,a)=>{var s;const{data:r,error:i}=await u("/api/quiz/rename",{method:"POST",body:{id:e,name:a}},"$zOpuWGmXci");return((s=t(r))==null?void 0:s.status)===c.SUCCESS&&o(),t(r)},quizzes:n,quizToDelete:S}});export{l as u};