import{f as ue}from"./index.b36c4f78.js";import{u as ie}from"./selectMenu.219fca56.js";import{f as $,j as h,af as D,i as g,aM as W,n as C,m as te,bs as oe,F as q,aK as ae,al as M,_ as de,bI as pe,bJ as K,b8 as J,aT as A,o as E,k as V,w as F,b as Q,q as O,az as ce,a as L,c as X,v as Y,aS as Z,t as _,d as ve,aw as fe}from"./entry.2e60e461.js";import{o as m,H as B,T as be,t as le,N as ee,u as R,a as k}from"./dom.c24df755.js";import{O as z,T as j,m as me,P as H,N as x}from"./focus-management.add74563.js";import{b as ge}from"./use-resolve-button-type.0b7aaae9.js";import{a as he,f as ne}from"./hidden.287ced4a.js";import{t as ye}from"./micro-task.89dcd6af.js";import"./index.ccfc92be.js";const we={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:""}}};let Te=$({props:{onFocus:{type:Function,required:!0}},setup(e){let o=h(!0);return()=>o.value?D(ne,{as:"button",type:"button",features:he.Focusable,onFocus(c){c.preventDefault();let d,r=50;function a(){var s;if(r--<=0){d&&cancelAnimationFrame(d);return}if((s=e.onFocus)!=null&&s.call(e)){o.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(a)}d=requestAnimationFrame(a)}}):null}});var Ie=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Ie||{}),ke=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ke||{});let re=Symbol("TabsContext");function N(e){let o=M(re,null);if(o===null){let c=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,N),c}return o}let U=Symbol("TabsSSRContext"),xe=$({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:o,attrs:c,emit:d}){var r;let a=h((r=e.selectedIndex)!=null?r:e.defaultIndex),s=h([]),p=h([]),v=g(()=>e.selectedIndex!==null),f=g(()=>v.value?e.selectedIndex:a.value);function i(l){var t;let u=z(n.tabs.value,m),y=z(n.panels.value,m),P=u.filter(T=>{var I;return!((I=m(T))!=null&&I.hasAttribute("disabled"))});if(l<0||l>u.length-1){let T=R(a.value===null?0:Math.sign(l-a.value),{[-1]:()=>1,0:()=>R(Math.sign(l),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),I=R(T,{0:()=>u.indexOf(P[0]),1:()=>u.indexOf(P[P.length-1])});I!==-1&&(a.value=I),n.tabs.value=u,n.panels.value=y}else{let T=u.slice(0,l),I=[...u.slice(l),...T].find(se=>P.includes(se));if(!I)return;let G=(t=u.indexOf(I))!=null?t:n.selectedIndex.value;G===-1&&(G=n.selectedIndex.value),a.value=G,n.tabs.value=u,n.panels.value=y}}let n={selectedIndex:g(()=>{var l,t;return(t=(l=a.value)!=null?l:e.defaultIndex)!=null?t:null}),orientation:g(()=>e.vertical?"vertical":"horizontal"),activation:g(()=>e.manual?"manual":"auto"),tabs:s,panels:p,setSelectedIndex(l){f.value!==l&&d("change",l),v.value||i(l)},registerTab(l){var t;if(s.value.includes(l))return;let u=s.value[a.value];s.value.push(l),s.value=z(s.value,m);let y=(t=s.value.indexOf(u))!=null?t:a.value;y!==-1&&(a.value=y)},unregisterTab(l){let t=s.value.indexOf(l);t!==-1&&s.value.splice(t,1)},registerPanel(l){p.value.includes(l)||(p.value.push(l),p.value=z(p.value,m))},unregisterPanel(l){let t=p.value.indexOf(l);t!==-1&&p.value.splice(t,1)}};W(re,n);let b=h({tabs:[],panels:[]}),w=h(!1);C(()=>{w.value=!0}),W(U,g(()=>w.value?null:b.value));let S=g(()=>e.selectedIndex);return C(()=>{te([S],()=>{var l;return i((l=e.selectedIndex)!=null?l:e.defaultIndex)},{immediate:!0})}),oe(()=>{if(!v.value||f.value==null||n.tabs.value.length<=0)return;let l=z(n.tabs.value,m);l.some((t,u)=>m(n.tabs.value[u])!==m(t))&&n.setSelectedIndex(l.findIndex(t=>m(t)===m(n.tabs.value[f.value])))}),()=>{let l={selectedIndex:a.value};return D(q,[s.value.length<=0&&D(Te,{onFocus:()=>{for(let t of s.value){let u=m(t);if((u==null?void 0:u.tabIndex)===0)return u.focus(),!0}return!1}}),B({theirProps:{...c,...be(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:l,slots:o,attrs:c,name:"TabGroup"})])}}}),Pe=$({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:o,slots:c}){let d=N("TabList");return()=>{let r={selectedIndex:d.selectedIndex.value},a={role:"tablist","aria-orientation":d.orientation.value};return B({ourProps:a,theirProps:e,slot:r,attrs:o,slots:c,name:"TabList"})}}}),Se=$({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${le()}`}},setup(e,{attrs:o,slots:c,expose:d}){let r=N("Tab"),a=h(null);d({el:a,$el:a}),C(()=>r.registerTab(a)),ae(()=>r.unregisterTab(a));let s=M(U),p=g(()=>{if(s.value){let t=s.value.tabs.indexOf(e.id);return t===-1?s.value.tabs.push(e.id)-1:t}return-1}),v=g(()=>{let t=r.tabs.value.indexOf(a);return t===-1?p.value:t}),f=g(()=>v.value===r.selectedIndex.value);function i(t){var u;let y=t();if(y===j.Success&&r.activation.value==="auto"){let P=(u=me(a))==null?void 0:u.activeElement,T=r.tabs.value.findIndex(I=>m(I)===P);T!==-1&&r.setSelectedIndex(T)}return y}function n(t){let u=r.tabs.value.map(y=>m(y)).filter(Boolean);if(t.key===k.Space||t.key===k.Enter){t.preventDefault(),t.stopPropagation(),r.setSelectedIndex(v.value);return}switch(t.key){case k.Home:case k.PageUp:return t.preventDefault(),t.stopPropagation(),i(()=>H(u,x.First));case k.End:case k.PageDown:return t.preventDefault(),t.stopPropagation(),i(()=>H(u,x.Last))}if(i(()=>R(r.orientation.value,{vertical(){return t.key===k.ArrowUp?H(u,x.Previous|x.WrapAround):t.key===k.ArrowDown?H(u,x.Next|x.WrapAround):j.Error},horizontal(){return t.key===k.ArrowLeft?H(u,x.Previous|x.WrapAround):t.key===k.ArrowRight?H(u,x.Next|x.WrapAround):j.Error}}))===j.Success)return t.preventDefault()}let b=h(!1);function w(){var t;b.value||(b.value=!0,!e.disabled&&((t=m(a))==null||t.focus({preventScroll:!0}),r.setSelectedIndex(v.value),ye(()=>{b.value=!1})))}function S(t){t.preventDefault()}let l=ge(g(()=>({as:e.as,type:o.type})),a);return()=>{var t;let u={selected:f.value},{id:y,...P}=e,T={ref:a,onKeydown:n,onMousedown:S,onClick:w,id:y,role:"tab",type:l.value,"aria-controls":(t=m(r.panels.value[v.value]))==null?void 0:t.id,"aria-selected":f.value,tabIndex:f.value?0:-1,disabled:e.disabled?!0:void 0};return B({ourProps:T,theirProps:P,slot:u,attrs:o,slots:c,name:"Tab"})}}}),$e=$({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:o,attrs:c}){let d=N("TabPanels");return()=>{let r={selectedIndex:d.selectedIndex.value};return B({theirProps:e,ourProps:{},slot:r,attrs:c,slots:o,name:"TabPanels"})}}}),Oe=$({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${le()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:o,slots:c,expose:d}){let r=N("TabPanel"),a=h(null);d({el:a,$el:a}),C(()=>r.registerPanel(a)),ae(()=>r.unregisterPanel(a));let s=M(U),p=g(()=>{if(s.value){let i=s.value.panels.indexOf(e.id);return i===-1?s.value.panels.push(e.id)-1:i}return-1}),v=g(()=>{let i=r.panels.value.indexOf(a);return i===-1?p.value:i}),f=g(()=>v.value===r.selectedIndex.value);return()=>{var i;let n={selected:f.value},{id:b,tabIndex:w,...S}=e,l={ref:a,id:b,role:"tabpanel","aria-labelledby":(i=m(r.tabs.value[v.value]))==null?void 0:i.id,tabIndex:f.value?w:-1};return!f.value&&e.unmount&&!e.static?D(ne,{as:"span",...l}):B({ourProps:l,theirProps:S,slot:n,attrs:o,slots:c,features:ee.Static|ee.RenderStrategy,visible:f.value,name:"TabPanel"})}}});const He=pe(K.ui.strategy,K.ui.tabs,we),Ae=$({components:{HTabGroup:xe,HTabList:Pe,HTab:Se,HTabPanels:$e,HTabPanel:Oe},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:c,attrs:d}=ie("tabs",J(e,"ui"),He,J(e,"class")),r=h(),a=h([]),s=h(),p=h(e.modelValue||e.defaultIndex);function v(i){var b;const n=(b=a.value[i])==null?void 0:b.$el;n&&(s.value.style.top=`${n.offsetTop}px`,s.value.style.left=`${n.offsetLeft}px`,s.value.style.width=`${n.offsetWidth}px`,s.value.style.height=`${n.offsetHeight}px`)}function f(i){p.value=i,o("change",i),e.modelValue!==void 0&&o("update:modelValue",i),v(i)}return ue(r,()=>{v(p.value)}),te(()=>e.modelValue,i=>{p.value=i,v(i)}),C(()=>v(p.value)),{ui:c,attrs:d,listRef:r,itemRefs:a,markerRef:s,selectedIndex:p,onChange:f}}}),Ee={class:"truncate"};function Fe(e,o,c,d,r,a){const s=A("HTab"),p=A("HTabList"),v=A("HTabPanel"),f=A("HTabPanels"),i=A("HTabGroup");return E(),V(i,fe({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:F(()=>[Q(p,{ref:"listRef",class:O([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:ce([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:F(()=>[L("div",{ref:"markerRef",class:O(e.ui.list.marker.wrapper)},[L("div",{class:O([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(E(!0),X(q,null,Y(e.items,(n,b)=>(E(),V(s,{key:b,ref_for:!0,ref:"itemRefs",disabled:n.disabled,as:"template"},{default:F(({selected:w,disabled:S})=>[L("button",{class:O([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,w?e.ui.list.tab.active:e.ui.list.tab.inactive])},[Z(e.$slots,"default",{item:n,index:b,selected:w,disabled:S},()=>[L("span",Ee,_(n.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),Q(f,{class:O(e.ui.container)},{default:F(()=>[(E(!0),X(q,null,Y(e.items,(n,b)=>(E(),V(v,{key:b,class:O(e.ui.base),tabindex:"-1"},{default:F(({selected:w})=>[Z(e.$slots,n.slot||"item",{item:n,index:b,selected:w},()=>[ve(_(n.content),1)])]),_:2},1032,["class"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const Ve=de(Ae,[["render",Fe]]);export{Ve as default};
