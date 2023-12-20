import{_ as p,f as w,j as v,aM as h,o as b,c as E,aS as g,bA as _}from"./entry.2e60e461.js";import{u as S}from"./index.b36c4f78.js";import{u as O}from"./uid.12f507af.js";import"./index.ccfc92be.js";class l extends Error{constructor(s){super(s),this.message=s,Object.setPrototypeOf(this,l.prototype)}}const j=w({props:{schema:{type:Object,default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:s,emit:r}){const i=S(`form-${O()}`);i.on(async t=>{var n;t.type!=="submit"&&((n=e.validateOn)!=null&&n.includes(t.type))&&await m(t.path,{silent:!0})});const a=v([]);h("form-errors",a),h("form-events",i);const f=v({});h("form-inputs",f);async function c(){let t=await e.validate(e.state);if(e.schema)if(Y(e.schema))t=t.concat(await k(e.state,e.schema));else if($(e.schema))t=t.concat(await J(e.state,e.schema));else if(B(e.schema))t=t.concat(await x(e.state,e.schema));else if(M(e.schema))t=t.concat(await P(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function m(t,n={silent:!1}){if(t){const o=a.value.filter(u=>u.path!==t),d=(await c()).filter(u=>u.path===t);a.value=o.concat(d)}else a.value=await c();if(!n.silent&&a.value.length>0)throw new l(`Form validation failed: ${JSON.stringify(a.value,null,2)}`);return e.state}async function y(t){var n;try{(n=e.validateOn)!=null&&n.includes("submit")&&await m();const o={...t,data:e.state};r("submit",o)}catch(o){if(!(o instanceof l))throw o;const d={...t,errors:a.value.map(u=>({...u,id:f.value[u.path]}))};r("error",d)}}return s({validate:m,errors:a,setErrors(t,n){a.value=t,n?a.value=a.value.filter(o=>o.path!==n).concat(t):a.value=t},getErrors(t){return t?a.value.filter(n=>n.path===t):a.value},clear(t){t?a.value=a.value.filter(n=>n.path===t):a.value=[]}}),{onSubmit:y}}});function $(e){return e.validate&&e.__isYupSchema__}function A(e){return e.inner!==void 0}async function J(e,s){try{return await s.validate(e,{abortEarly:!1}),[]}catch(r){if(A(r))return r.inner.map(i=>({path:i.path??"",message:i.message}));throw r}}function Y(e){return e.parse!==void 0}async function k(e,s){const r=await s.safeParseAsync(e);return r.success===!1?r.error.issues.map(i=>({path:i.path.join("."),message:i.message})):[]}function B(e){return e.validateAsync!==void 0&&e.id!==void 0}function F(e){return e.isJoi===!0}async function x(e,s){try{return await s.validateAsync(e,{abortEarly:!1}),[]}catch(r){if(F(r))return r.details.map(i=>({path:i.path.join("."),message:i.message}));throw r}}function M(e){return e._parse!==void 0}async function P(e,s){const r=await s._parse(e);return r.issues?r.issues.map(i=>({path:i.path.map(a=>a.key).join("."),message:i.message})):[]}function V(e,s,r,i,a,f){return b(),E("form",{onSubmit:s[0]||(s[0]=_((...c)=>e.onSubmit&&e.onSubmit(...c),["prevent"]))},[g(e.$slots,"default")],32)}const U=p(j,[["render",V]]);export{U as default};
