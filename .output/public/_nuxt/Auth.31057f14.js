import{u as a}from"./Account.9c8f71b4.js";import{bC as m,bE as e}from"./entry.2e60e461.js";import{u as l}from"./fetch.accb1318.js";import{g as i}from"./index.ccfc92be.js";var d=(r=>(r[r.AdminAccount=-1]="AdminAccount",r[r.StudentAccount=0]="StudentAccount",r[r.WrongPassword=1]="WrongPassword",r[r.NonExistingEmail=2]="NonExistingEmail",r))(d||{});const b=m("Auth",()=>{const r=a(),t=e();return{login:async(c,n)=>{var u;const{data:o,error:f}=await l("/api/login",{body:{username:c,password:n},method:"POST"},"$mVYqm3RM2Y");return r.user.value=((u=o.value)==null?void 0:u.user)||null,i(o)},logout:()=>{r.user.value=null,t.push("/")}}});export{d as L,b as u};
