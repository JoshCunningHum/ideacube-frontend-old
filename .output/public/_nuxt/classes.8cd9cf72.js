import Dt from"./Icon.4abee38d.js";import Nt from"./Input.c13c5c5f.js";import Ft from"./FormGroup.a21e2881.js";import et from"./Button.ca57eb16.js";import Tt from"./Card.19247a1e.js";import Vt from"./Form.336d0390.js";import ct from"./Modal.feac1495.js";import{u as q}from"./Class.08781640.js";import{f as W,i as $,s as z,r as $t,j as H,o as v,k as j,w as E,b as y,a as N,d as L,g as b,l as K,t as it,c as J,h as at,m as se,n as ie,q as xt,F as Rt,v as ae,_ as le}from"./entry.2e60e461.js";import{c as zt,a as Ht}from"./index.esm.caf07660.js";import{g as S,s as P,w as ue}from"./index.ccfc92be.js";import{_ as ce}from"./DigitedInput.14a10c5f.js";import de from"./Divider.dd34ce71.js";import fe from"./Popover.a3bd6b0f.js";import{u as ge}from"./Responsive.c41aeb77.js";import"./Icon.d59a0deb.js";import"./index.b8fe2cb5.js";import"./tw-merge.608f89b9.js";import"./selectMenu.219fca56.js";import"./useFormGroup.a790b1a9.js";import"./uid.12f507af.js";import"./useButtonGroup.cc33183f.js";import"./Link.fb4a2cb7.js";import"./nuxt-link.37c5b906.js";import"./button.b8dbcbb7.js";import"./index.b36c4f78.js";import"./transition.cdc336cb.js";import"./dom.c24df755.js";import"./hidden.287ced4a.js";import"./focus-management.add74563.js";import"./use-root-containers.a607b7ae.js";import"./use-outside-click.45106478.js";import"./micro-task.89dcd6af.js";import"./open-closed.a3018940.js";import"./disposables.57da4964.js";import"./fetch.accb1318.js";import"./Generics.d9123dbf.js";import"./_commonjsHelpers.23102255.js";import"./Avatar.1bb1d94f.js";import"./usePopper.209527cd.js";import"./use-resolve-button-type.0b7aaae9.js";const he={class:"text-2xl flex items-center gap-2"},me=N("span",null,"Create Class",-1),pe={class:"flex justify-end gap-2"},we=W({__name:"Create",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const s=e,r=t,n=$({get:()=>s.modelValue,set:h=>r("update:modelValue",h)}),o=q(),{classes:i}=z(o),l=$t({classname:""}),a=zt({classname:Ht().required("Class name shouldn't be empty").test("No Duplicate Names","A class with that name already exists",()=>new Promise(h=>h(!S(i).some(g=>g.name===l.classname))))}),u=H(!1),c=h=>{P(u,!0),o.create(h.data.classname),P(u,!1),P(n,!1)};return(h,g)=>{const f=Dt,w=Nt,_=Ft,A=et,p=Tt,C=Vt,d=ct;return v(),j(d,{modelValue:b(n),"onUpdate:modelValue":g[2]||(g[2]=m=>K(n)?n.value=m:null),transition:!1,ui:{background:"bg-white dark:bg-prim-950"}},{default:E(()=>[y(C,{state:b(l),ref:"form",schema:b(a),onSubmit:c},{default:E(()=>[y(p,{ui:{background:"bg-white dark:bg-prim-950"}},{header:E(()=>[N("div",he,[y(f,{name:"i-mdi-class"}),me])]),footer:E(()=>[N("div",pe,[y(A,{color:"white",onClick:g[1]||(g[1]=m=>n.value=!1)},{default:E(()=>[L("Cancel")]),_:1}),y(A,{loading:b(u),type:"submit"},{default:E(()=>[L("Create")]),_:1},8,["loading"])])]),default:E(()=>[y(_,{name:"classname"},{default:E(()=>[y(w,{icon:"i-mdi-class",placeholder:"Class name",modelValue:b(l).classname,"onUpdate:modelValue":g[0]||(g[0]=m=>b(l).classname=m)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["state","schema"])]),_:1},8,["modelValue"])}}});var nt={},_e=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Kt={},M={};let It;const Ce=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};M.getSymbolTotalCodewords=function(t){return Ce[t]};M.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};M.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');It=t};M.isKanjiModeEnabled=function(){return typeof It<"u"};M.toSJIS=function(t){return It(t)};var dt={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+s)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,n){if(e.isValid(r))return r;try{return t(r)}catch{return n}}})(dt);function Jt(){this.buffer=[],this.length=0}Jt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let s=0;s<t;s++)this.putBit((e>>>t-s-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var ye=Jt;function ot(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}ot.prototype.set=function(e,t,s,r){const n=e*this.size+t;this.data[n]=s,r&&(this.reservedBit[n]=!0)};ot.prototype.get=function(e,t){return this.data[e*this.size+t]};ot.prototype.xor=function(e,t,s){this.data[e*this.size+t]^=s};ot.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Ee=ot,jt={};(function(e){const t=M.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,o=t(r),i=o===145?26:Math.ceil((o-13)/(2*n-2))*2,l=[o-7];for(let a=1;a<n-1;a++)l[a]=l[a-1]-i;return l.push(6),l.reverse()},e.getPositions=function(r){const n=[],o=e.getRowColCoords(r),i=o.length;for(let l=0;l<i;l++)for(let a=0;a<i;a++)l===0&&a===0||l===0&&a===i-1||l===i-1&&a===0||n.push([o[l],o[a]]);return n}})(jt);var Ot={};const Be=M.getSymbolSize,Ut=7;Ot.getPositions=function(t){const s=Be(t);return[[0,0],[s-Ut,0],[0,s-Ut]]};var Yt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const o=n.size;let i=0,l=0,a=0,u=null,c=null;for(let h=0;h<o;h++){l=a=0,u=c=null;for(let g=0;g<o;g++){let f=n.get(h,g);f===u?l++:(l>=5&&(i+=t.N1+(l-5)),u=f,l=1),f=n.get(g,h),f===c?a++:(a>=5&&(i+=t.N1+(a-5)),c=f,a=1)}l>=5&&(i+=t.N1+(l-5)),a>=5&&(i+=t.N1+(a-5))}return i},e.getPenaltyN2=function(n){const o=n.size;let i=0;for(let l=0;l<o-1;l++)for(let a=0;a<o-1;a++){const u=n.get(l,a)+n.get(l,a+1)+n.get(l+1,a)+n.get(l+1,a+1);(u===4||u===0)&&i++}return i*t.N2},e.getPenaltyN3=function(n){const o=n.size;let i=0,l=0,a=0;for(let u=0;u<o;u++){l=a=0;for(let c=0;c<o;c++)l=l<<1&2047|n.get(u,c),c>=10&&(l===1488||l===93)&&i++,a=a<<1&2047|n.get(c,u),c>=10&&(a===1488||a===93)&&i++}return i*t.N3},e.getPenaltyN4=function(n){let o=0;const i=n.data.length;for(let a=0;a<i;a++)o+=n.data[a];return Math.abs(Math.ceil(o*100/i/5)-10)*t.N4};function s(r,n,o){switch(r){case e.Patterns.PATTERN000:return(n+o)%2===0;case e.Patterns.PATTERN001:return n%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(n+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return n*o%2+n*o%3===0;case e.Patterns.PATTERN110:return(n*o%2+n*o%3)%2===0;case e.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(n,o){const i=o.size;for(let l=0;l<i;l++)for(let a=0;a<i;a++)o.isReserved(a,l)||o.xor(a,l,s(n,a,l))},e.getBestMask=function(n,o){const i=Object.keys(e.Patterns).length;let l=0,a=1/0;for(let u=0;u<i;u++){o(u),e.applyMask(u,n);const c=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(u,n),c<a&&(a=c,l=u)}return l}})(Yt);var ft={};const V=dt,rt=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],st=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ft.getBlocksCount=function(t,s){switch(s){case V.L:return rt[(t-1)*4+0];case V.M:return rt[(t-1)*4+1];case V.Q:return rt[(t-1)*4+2];case V.H:return rt[(t-1)*4+3];default:return}};ft.getTotalCodewordsCount=function(t,s){switch(s){case V.L:return st[(t-1)*4+0];case V.M:return st[(t-1)*4+1];case V.Q:return st[(t-1)*4+2];case V.H:return st[(t-1)*4+3];default:return}};var Gt={},gt={};const X=new Uint8Array(512),lt=new Uint8Array(256);(function(){let t=1;for(let s=0;s<255;s++)X[s]=t,lt[t]=s,t<<=1,t&256&&(t^=285);for(let s=255;s<512;s++)X[s]=X[s-255]})();gt.log=function(t){if(t<1)throw new Error("log("+t+")");return lt[t]};gt.exp=function(t){return X[t]};gt.mul=function(t,s){return t===0||s===0?0:X[lt[t]+lt[s]]};(function(e){const t=gt;e.mul=function(r,n){const o=new Uint8Array(r.length+n.length-1);for(let i=0;i<r.length;i++)for(let l=0;l<n.length;l++)o[i+l]^=t.mul(r[i],n[l]);return o},e.mod=function(r,n){let o=new Uint8Array(r);for(;o.length-n.length>=0;){const i=o[0];for(let a=0;a<n.length;a++)o[a]^=t.mul(n[a],i);let l=0;for(;l<o.length&&o[l]===0;)l++;o=o.slice(l)}return o},e.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let o=0;o<r;o++)n=e.mul(n,new Uint8Array([1,t.exp(o)]));return n}})(Gt);const Qt=Gt;function St(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}St.prototype.initialize=function(t){this.degree=t,this.genPoly=Qt.generateECPolynomial(this.degree)};St.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const s=new Uint8Array(t.length+this.degree);s.set(t);const r=Qt.mod(s,this.genPoly),n=this.degree-r.length;if(n>0){const o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var be=St,qt={},x={},Mt={};Mt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var k={};const Wt="[0-9]+",Ae="[A-Z $%*+\\-./:]+";let tt="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";tt=tt.replace(/u/g,"\\u");const Ne="(?:(?![A-Z0-9 $%*+\\-./:]|"+tt+`)(?:.|[\r
]))+`;k.KANJI=new RegExp(tt,"g");k.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");k.BYTE=new RegExp(Ne,"g");k.NUMERIC=new RegExp(Wt,"g");k.ALPHANUMERIC=new RegExp(Ae,"g");const Te=new RegExp("^"+tt+"$"),Ie=new RegExp("^"+Wt+"$"),Se=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");k.testKanji=function(t){return Te.test(t)};k.testNumeric=function(t){return Ie.test(t)};k.testAlphanumeric=function(t){return Se.test(t)};(function(e){const t=Mt,s=k;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,i){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?o.ccBits[0]:i<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return s.testNumeric(o)?e.NUMERIC:s.testAlphanumeric(o)?e.ALPHANUMERIC:s.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+n)}}e.from=function(o,i){if(e.isValid(o))return o;try{return r(o)}catch{return i}}})(x);(function(e){const t=M,s=ft,r=dt,n=x,o=Mt,i=7973,l=t.getBCHDigit(i);function a(g,f,w){for(let _=1;_<=40;_++)if(f<=e.getCapacity(_,w,g))return _}function u(g,f){return n.getCharCountIndicator(g,f)+4}function c(g,f){let w=0;return g.forEach(function(_){const A=u(_.mode,f);w+=A+_.getBitsLength()}),w}function h(g,f){for(let w=1;w<=40;w++)if(c(g,w)<=e.getCapacity(w,f,n.MIXED))return w}e.from=function(f,w){return o.isValid(f)?parseInt(f,10):w},e.getCapacity=function(f,w,_){if(!o.isValid(f))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=n.BYTE);const A=t.getSymbolTotalCodewords(f),p=s.getTotalCodewordsCount(f,w),C=(A-p)*8;if(_===n.MIXED)return C;const d=C-u(_,f);switch(_){case n.NUMERIC:return Math.floor(d/10*3);case n.ALPHANUMERIC:return Math.floor(d/11*2);case n.KANJI:return Math.floor(d/13);case n.BYTE:default:return Math.floor(d/8)}},e.getBestVersionForData=function(f,w){let _;const A=r.from(w,r.M);if(Array.isArray(f)){if(f.length>1)return h(f,A);if(f.length===0)return 1;_=f[0]}else _=f;return a(_.mode,_.getLength(),A)},e.getEncodedBits=function(f){if(!o.isValid(f)||f<7)throw new Error("Invalid QR Code version");let w=f<<12;for(;t.getBCHDigit(w)-l>=0;)w^=i<<t.getBCHDigit(w)-l;return f<<12|w}})(qt);var Zt={};const Et=M,Xt=1335,Me=21522,Lt=Et.getBCHDigit(Xt);Zt.getEncodedBits=function(t,s){const r=t.bit<<3|s;let n=r<<10;for(;Et.getBCHDigit(n)-Lt>=0;)n^=Xt<<Et.getBCHDigit(n)-Lt;return(r<<10|n)^Me};var te={};const ve=x;function O(e){this.mode=ve.NUMERIC,this.data=e.toString()}O.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};O.prototype.getLength=function(){return this.data.length};O.prototype.getBitsLength=function(){return O.getBitsLength(this.data.length)};O.prototype.write=function(t){let s,r,n;for(s=0;s+3<=this.data.length;s+=3)r=this.data.substr(s,3),n=parseInt(r,10),t.put(n,10);const o=this.data.length-s;o>0&&(r=this.data.substr(s),n=parseInt(r,10),t.put(n,o*3+1))};var Pe=O;const Re=x,pt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Y(e){this.mode=Re.ALPHANUMERIC,this.data=e}Y.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Y.prototype.getLength=function(){return this.data.length};Y.prototype.getBitsLength=function(){return Y.getBitsLength(this.data.length)};Y.prototype.write=function(t){let s;for(s=0;s+2<=this.data.length;s+=2){let r=pt.indexOf(this.data[s])*45;r+=pt.indexOf(this.data[s+1]),t.put(r,11)}this.data.length%2&&t.put(pt.indexOf(this.data[s]),6)};var Ue=Y,Le=function(t){for(var s=[],r=t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var i=t.charCodeAt(n+1);i>=56320&&i<=57343&&(o=(o-55296)*1024+i-56320+65536,n+=1)}if(o<128){s.push(o);continue}if(o<2048){s.push(o>>6|192),s.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){s.push(o>>12|224),s.push(o>>6&63|128),s.push(o&63|128);continue}if(o>=65536&&o<=1114111){s.push(o>>18|240),s.push(o>>12&63|128),s.push(o>>6&63|128),s.push(o&63|128);continue}s.push(239,191,189)}return new Uint8Array(s).buffer};const ke=Le,De=x;function G(e){this.mode=De.BYTE,typeof e=="string"&&(e=ke(e)),this.data=new Uint8Array(e)}G.getBitsLength=function(t){return t*8};G.prototype.getLength=function(){return this.data.length};G.prototype.getBitsLength=function(){return G.getBitsLength(this.data.length)};G.prototype.write=function(e){for(let t=0,s=this.data.length;t<s;t++)e.put(this.data[t],8)};var Fe=G;const Ve=x,$e=M;function Q(e){this.mode=Ve.KANJI,this.data=e}Q.getBitsLength=function(t){return t*13};Q.prototype.getLength=function(){return this.data.length};Q.prototype.getBitsLength=function(){return Q.getBitsLength(this.data.length)};Q.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let s=$e.toSJIS(this.data[t]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),e.put(s,13)}};var xe=Q,ee={exports:{}};(function(e){var t={single_source_shortest_paths:function(s,r,n){var o={},i={};i[r]=0;var l=t.PriorityQueue.make();l.push(r,0);for(var a,u,c,h,g,f,w,_,A;!l.empty();){a=l.pop(),u=a.value,h=a.cost,g=s[u]||{};for(c in g)g.hasOwnProperty(c)&&(f=g[c],w=h+f,_=i[c],A=typeof i[c]>"u",(A||_>w)&&(i[c]=w,l.push(c,w),o[c]=u))}if(typeof n<"u"&&typeof i[n]>"u"){var p=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(p)}return o},extract_shortest_path_from_predecessor_list:function(s,r){for(var n=[],o=r;o;)n.push(o),s[o],o=s[o];return n.reverse(),n},find_path:function(s,r,n){var o=t.single_source_shortest_paths(s,r,n);return t.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(s){var r=t.PriorityQueue,n={},o;s=s||{};for(o in r)r.hasOwnProperty(o)&&(n[o]=r[o]);return n.queue=[],n.sorter=s.sorter||r.default_sorter,n},default_sorter:function(s,r){return s.cost-r.cost},push:function(s,r){var n={value:s,cost:r};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(ee);var ze=ee.exports;(function(e){const t=x,s=Pe,r=Ue,n=Fe,o=xe,i=k,l=M,a=ze;function u(p){return unescape(encodeURIComponent(p)).length}function c(p,C,d){const m=[];let B;for(;(B=p.exec(d))!==null;)m.push({data:B[0],index:B.index,mode:C,length:B[0].length});return m}function h(p){const C=c(i.NUMERIC,t.NUMERIC,p),d=c(i.ALPHANUMERIC,t.ALPHANUMERIC,p);let m,B;return l.isKanjiModeEnabled()?(m=c(i.BYTE,t.BYTE,p),B=c(i.KANJI,t.KANJI,p)):(m=c(i.BYTE_KANJI,t.BYTE,p),B=[]),C.concat(d,m,B).sort(function(I,R){return I.index-R.index}).map(function(I){return{data:I.data,mode:I.mode,length:I.length}})}function g(p,C){switch(C){case t.NUMERIC:return s.getBitsLength(p);case t.ALPHANUMERIC:return r.getBitsLength(p);case t.KANJI:return o.getBitsLength(p);case t.BYTE:return n.getBitsLength(p)}}function f(p){return p.reduce(function(C,d){const m=C.length-1>=0?C[C.length-1]:null;return m&&m.mode===d.mode?(C[C.length-1].data+=d.data,C):(C.push(d),C)},[])}function w(p){const C=[];for(let d=0;d<p.length;d++){const m=p[d];switch(m.mode){case t.NUMERIC:C.push([m,{data:m.data,mode:t.ALPHANUMERIC,length:m.length},{data:m.data,mode:t.BYTE,length:m.length}]);break;case t.ALPHANUMERIC:C.push([m,{data:m.data,mode:t.BYTE,length:m.length}]);break;case t.KANJI:C.push([m,{data:m.data,mode:t.BYTE,length:u(m.data)}]);break;case t.BYTE:C.push([{data:m.data,mode:t.BYTE,length:u(m.data)}])}}return C}function _(p,C){const d={},m={start:{}};let B=["start"];for(let T=0;T<p.length;T++){const I=p[T],R=[];for(let F=0;F<I.length;F++){const U=I[F],Z=""+T+F;R.push(Z),d[Z]={node:U,lastCount:0},m[Z]={};for(let mt=0;mt<B.length;mt++){const D=B[mt];d[D]&&d[D].node.mode===U.mode?(m[D][Z]=g(d[D].lastCount+U.length,U.mode)-g(d[D].lastCount,U.mode),d[D].lastCount+=U.length):(d[D]&&(d[D].lastCount=U.length),m[D][Z]=g(U.length,U.mode)+4+t.getCharCountIndicator(U.mode,C))}}B=R}for(let T=0;T<B.length;T++)m[B[T]].end=0;return{map:m,table:d}}function A(p,C){let d;const m=t.getBestModeForData(p);if(d=t.from(C,m),d!==t.BYTE&&d.bit<m.bit)throw new Error('"'+p+'" cannot be encoded with mode '+t.toString(d)+`.
 Suggested mode is: `+t.toString(m));switch(d===t.KANJI&&!l.isKanjiModeEnabled()&&(d=t.BYTE),d){case t.NUMERIC:return new s(p);case t.ALPHANUMERIC:return new r(p);case t.KANJI:return new o(p);case t.BYTE:return new n(p)}}e.fromArray=function(C){return C.reduce(function(d,m){return typeof m=="string"?d.push(A(m,null)):m.data&&d.push(A(m.data,m.mode)),d},[])},e.fromString=function(C,d){const m=h(C,l.isKanjiModeEnabled()),B=w(m),T=_(B,d),I=a.find_path(T.map,"start","end"),R=[];for(let F=1;F<I.length-1;F++)R.push(T.table[I[F]].node);return e.fromArray(f(R))},e.rawSplit=function(C){return e.fromArray(h(C,l.isKanjiModeEnabled()))}})(te);const ht=M,wt=dt,He=ye,Ke=Ee,Je=jt,je=Ot,Bt=Yt,bt=ft,Oe=be,ut=qt,Ye=Zt,Ge=x,_t=te;function Qe(e,t){const s=e.size,r=je.getPositions(t);for(let n=0;n<r.length;n++){const o=r[n][0],i=r[n][1];for(let l=-1;l<=7;l++)if(!(o+l<=-1||s<=o+l))for(let a=-1;a<=7;a++)i+a<=-1||s<=i+a||(l>=0&&l<=6&&(a===0||a===6)||a>=0&&a<=6&&(l===0||l===6)||l>=2&&l<=4&&a>=2&&a<=4?e.set(o+l,i+a,!0,!0):e.set(o+l,i+a,!1,!0))}}function qe(e){const t=e.size;for(let s=8;s<t-8;s++){const r=s%2===0;e.set(s,6,r,!0),e.set(6,s,r,!0)}}function We(e,t){const s=Je.getPositions(t);for(let r=0;r<s.length;r++){const n=s[r][0],o=s[r][1];for(let i=-2;i<=2;i++)for(let l=-2;l<=2;l++)i===-2||i===2||l===-2||l===2||i===0&&l===0?e.set(n+i,o+l,!0,!0):e.set(n+i,o+l,!1,!0)}}function Ze(e,t){const s=e.size,r=ut.getEncodedBits(t);let n,o,i;for(let l=0;l<18;l++)n=Math.floor(l/3),o=l%3+s-8-3,i=(r>>l&1)===1,e.set(n,o,i,!0),e.set(o,n,i,!0)}function Ct(e,t,s){const r=e.size,n=Ye.getEncodedBits(t,s);let o,i;for(o=0;o<15;o++)i=(n>>o&1)===1,o<6?e.set(o,8,i,!0):o<8?e.set(o+1,8,i,!0):e.set(r-15+o,8,i,!0),o<8?e.set(8,r-o-1,i,!0):o<9?e.set(8,15-o-1+1,i,!0):e.set(8,15-o-1,i,!0);e.set(r-8,8,1,!0)}function Xe(e,t){const s=e.size;let r=-1,n=s-1,o=7,i=0;for(let l=s-1;l>0;l-=2)for(l===6&&l--;;){for(let a=0;a<2;a++)if(!e.isReserved(n,l-a)){let u=!1;i<t.length&&(u=(t[i]>>>o&1)===1),e.set(n,l-a,u),o--,o===-1&&(i++,o=7)}if(n+=r,n<0||s<=n){n-=r,r=-r;break}}}function tn(e,t,s){const r=new He;s.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),Ge.getCharCountIndicator(a.mode,e)),a.write(r)});const n=ht.getSymbolTotalCodewords(e),o=bt.getTotalCodewordsCount(e,t),i=(n-o)*8;for(r.getLengthInBits()+4<=i&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const l=(i-r.getLengthInBits())/8;for(let a=0;a<l;a++)r.put(a%2?17:236,8);return en(r,e,t)}function en(e,t,s){const r=ht.getSymbolTotalCodewords(t),n=bt.getTotalCodewordsCount(t,s),o=r-n,i=bt.getBlocksCount(t,s),l=r%i,a=i-l,u=Math.floor(r/i),c=Math.floor(o/i),h=c+1,g=u-c,f=new Oe(g);let w=0;const _=new Array(i),A=new Array(i);let p=0;const C=new Uint8Array(e.buffer);for(let I=0;I<i;I++){const R=I<a?c:h;_[I]=C.slice(w,w+R),A[I]=f.encode(_[I]),w+=R,p=Math.max(p,R)}const d=new Uint8Array(r);let m=0,B,T;for(B=0;B<p;B++)for(T=0;T<i;T++)B<_[T].length&&(d[m++]=_[T][B]);for(B=0;B<g;B++)for(T=0;T<i;T++)d[m++]=A[T][B];return d}function nn(e,t,s,r){let n;if(Array.isArray(e))n=_t.fromArray(e);else if(typeof e=="string"){let u=t;if(!u){const c=_t.rawSplit(e);u=ut.getBestVersionForData(c,s)}n=_t.fromString(e,u||40)}else throw new Error("Invalid data");const o=ut.getBestVersionForData(n,s);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const i=tn(t,s,n),l=ht.getSymbolSize(t),a=new Ke(l);return Qe(a,t),qe(a),We(a,t),Ct(a,s,0),t>=7&&Ze(a,t),Xe(a,i),isNaN(r)&&(r=Bt.getBestMask(a,Ct.bind(null,a,s))),Bt.applyMask(r,a),Ct(a,s,r),{modules:a,version:t,errorCorrectionLevel:s,maskPattern:r,segments:n}}Kt.create=function(t,s){if(typeof t>"u"||t==="")throw new Error("No input text");let r=wt.M,n,o;return typeof s<"u"&&(r=wt.from(s.errorCorrectionLevel,wt.M),n=ut.from(s.version),o=Bt.from(s.maskPattern),s.toSJISFunc&&ht.setToSJISFunction(s.toSJISFunc)),nn(t,n,r,o)};var ne={},vt={};(function(e){function t(s){if(typeof s=="number"&&(s=s.toString()),typeof s!="string")throw new Error("Color should be defined as hex string");let r=s.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+s);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,i=r.scale||4;return{width:o,scale:o?4:i,margin:n,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,n){return n.width&&n.width>=r+n.margin*2?n.width/(r+n.margin*2):n.scale},e.getImageWidth=function(r,n){const o=e.getScale(r,n);return Math.floor((r+n.margin*2)*o)},e.qrToImageData=function(r,n,o){const i=n.modules.size,l=n.modules.data,a=e.getScale(i,o),u=Math.floor((i+o.margin*2)*a),c=o.margin*a,h=[o.color.light,o.color.dark];for(let g=0;g<u;g++)for(let f=0;f<u;f++){let w=(g*u+f)*4,_=o.color.light;if(g>=c&&f>=c&&g<u-c&&f<u-c){const A=Math.floor((g-c)/a),p=Math.floor((f-c)/a);_=h[l[A*i+p]?1:0]}r[w++]=_.r,r[w++]=_.g,r[w++]=_.b,r[w]=_.a}}})(vt);(function(e){const t=vt;function s(n,o,i){n.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=i,o.width=i,o.style.height=i+"px",o.style.width=i+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,i,l){let a=l,u=i;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),i||(u=r()),a=t.getOptions(a);const c=t.getImageWidth(o.modules.size,a),h=u.getContext("2d"),g=h.createImageData(c,c);return t.qrToImageData(g.data,o,a),s(h,u,c),h.putImageData(g,0,0),u},e.renderToDataURL=function(o,i,l){let a=l;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),a||(a={});const u=e.render(o,i,a),c=a.type||"image/png",h=a.rendererOpts||{};return u.toDataURL(c,h.quality)}})(ne);var oe={};const on=vt;function kt(e,t){const s=e.a/255,r=t+'="'+e.hex+'"';return s<1?r+" "+t+'-opacity="'+s.toFixed(2).slice(1)+'"':r}function yt(e,t,s){let r=e+t;return typeof s<"u"&&(r+=" "+s),r}function rn(e,t,s){let r="",n=0,o=!1,i=0;for(let l=0;l<e.length;l++){const a=Math.floor(l%t),u=Math.floor(l/t);!a&&!o&&(o=!0),e[l]?(i++,l>0&&a>0&&e[l-1]||(r+=o?yt("M",a+s,.5+u+s):yt("m",n,0),n=0,o=!1),a+1<t&&e[l+1]||(r+=yt("h",i),i=0)):n++}return r}oe.render=function(t,s,r){const n=on.getOptions(s),o=t.modules.size,i=t.modules.data,l=o+n.margin*2,a=n.color.light.a?"<path "+kt(n.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",u="<path "+kt(n.color.dark,"stroke")+' d="'+rn(i,o,n.margin)+'"/>',c='viewBox="0 0 '+l+" "+l+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+c+' shape-rendering="crispEdges">'+a+u+`</svg>
`;return typeof r=="function"&&r(null,g),g};const sn=_e,At=Kt,re=ne,an=oe;function Pt(e,t,s,r,n){const o=[].slice.call(arguments,1),i=o.length,l=typeof o[i-1]=="function";if(!l&&!sn())throw new Error("Callback required as last argument");if(l){if(i<2)throw new Error("Too few arguments provided");i===2?(n=s,s=t,t=r=void 0):i===3&&(t.getContext&&typeof n>"u"?(n=r,r=void 0):(n=r,r=s,s=t,t=void 0))}else{if(i<1)throw new Error("Too few arguments provided");return i===1?(s=t,t=r=void 0):i===2&&!t.getContext&&(r=s,s=t,t=void 0),new Promise(function(a,u){try{const c=At.create(s,r);a(e(c,t,r))}catch(c){u(c)}})}try{const a=At.create(s,r);n(null,e(a,t,r))}catch(a){n(a)}}nt.create=At.create;nt.toCanvas=Pt.bind(null,re.render);nt.toDataURL=Pt.bind(null,re.renderToDataURL);nt.toString=Pt.bind(null,function(e,t,s){return an.render(e,s)});const ln=N("span",{class:"text-sm"},"Enter this 6 digit code",-1),un=N("span",{class:"text-sm"},"Scan this QR Code",-1),cn=W({__name:"Code",setup(e){const t=q(),s=window.location.host,{codeToShow:r}=z(t),n=$({get:()=>S(r)!=="",set:a=>P(r,"")}),o=$(()=>`${s}/enroll/${r.value}`),i=H(),l=H();return ue(l,a=>{a instanceof HTMLCanvasElement&&nt.toCanvas(a,o.value,{errorCorrectionLevel:"high",margin:1,scale:6,width:250},u=>{u&&console.error("Failed to generate QR CODE")})}),(a,u)=>{const c=ce,h=de,g=ct;return v(),j(g,{modelValue:b(n),"onUpdate:modelValue":u[1]||(u[1]=f=>K(n)?n.value=f:null),transition:!1,ui:{background:"bg-white dark:bg-prim-950"}},{default:E(()=>[N("div",{class:"py-12 flex flex-col gap-2 justify-center items-center",ref_key:"canvasCont",ref:i},[y(c,{modelValue:b(r),"onUpdate:modelValue":u[0]||(u[0]=f=>K(r)?r.value=f:null),length:6,disabled:!0},null,8,["modelValue"]),ln,y(h,null,{default:E(()=>[L("or")]),_:1}),un,N("canvas",{ref_key:"c",ref:l,width:"250",height:"250"},null,512)],512)]),_:1},8,["modelValue"])}}}),dn=N("div",{class:"text-2xl"},"Are you sure you want to delete?",-1),fn={key:0},gn={class:"flex justify-end gap-2"},hn=W({__name:"Delete",setup(e){const t=q(),{classToDelete:s,classes:r}=z(t),n=$(()=>S(r).find(a=>a.id===S(s))),o=$({get:()=>!!S(n),set:a=>P(s,-1)}),i=H(!1),l=async()=>{P(i,!0),await t.remove(S(s)),P(i,!1),P(o,!1)};return(a,u)=>{const c=et,h=Tt,g=ct;return v(),j(g,{modelValue:b(o),"onUpdate:modelValue":u[1]||(u[1]=f=>K(o)?o.value=f:null),transition:!1,ui:{background:"bg-white dark:bg-prim-950"}},{default:E(()=>[b(n)?(v(),j(h,{key:0,ui:{background:"bg-white dark:bg-prim-950"}},{header:E(()=>[dn]),footer:E(()=>[N("div",gn,[y(c,{color:"white",onClick:u[0]||(u[0]=f=>o.value=!1)},{default:E(()=>[L("Cancel")]),_:1}),y(c,{color:"red",loading:b(i),onClick:l},{default:E(()=>[L("Delete")]),_:1},8,["loading"])])]),default:E(()=>[N("div",null,it(b(n).name),1),N("div",null,[L("has "+it(b(n).studentCount)+" student",1),b(n).studentCount!==1?(v(),J("span",fn,"s")):at("",!0)])]),_:1})):at("",!0)]),_:1},8,["modelValue"])}}}),mn={class:"text-2xl flex items-center gap-2"},pn=N("span",null,"Rename Class",-1),wn={class:"flex justify-end gap-2"},_n=W({__name:"Rename",setup(e){const t=q(),{classes:s,classToRename:r}=z(t),n=$t({classname:""}),o=$(()=>S(s).find(c=>c.id===S(r))),i=$({get:()=>!!S(o),set:c=>P(r,-1)});se(o,c=>{!c||!c.name||(n.classname=c.name)});const l=zt({classname:Ht().required("Class name shouldn't be empty").test("No Duplicate Names","A class with that name already exists",()=>new Promise(c=>c(!S(s).some(h=>h.id!==S(r)&&h.name===n.classname))))}),a=H(!1),u=async c=>{P(a,!0),await t.rename(S(r),c.data.classname),P(a,!1),P(i,!1)};return(c,h)=>{const g=Dt,f=Nt,w=Ft,_=et,A=Tt,p=Vt,C=ct;return v(),j(C,{modelValue:b(i),"onUpdate:modelValue":h[2]||(h[2]=d=>K(i)?i.value=d:null),transition:!1,ui:{background:"bg-white dark:bg-prim-950"}},{default:E(()=>[y(p,{state:b(n),ref:"form",schema:b(l),onSubmit:u},{default:E(()=>[y(A,{ui:{background:"bg-white dark:bg-prim-950"}},{header:E(()=>[N("div",mn,[y(g,{name:"i-mdi-class"}),pn])]),footer:E(()=>[N("div",wn,[y(_,{color:"white",onClick:h[1]||(h[1]=d=>i.value=!1)},{default:E(()=>[L("Cancel")]),_:1}),y(_,{loading:b(a),type:"submit"},{default:E(()=>[L("Rename")]),_:1},8,["loading"])])]),default:E(()=>[y(w,{name:"classname"},{default:E(()=>[y(f,{icon:"i-mdi-class",placeholder:"Class name",modelValue:b(n).classname,"onUpdate:modelValue":h[0]||(h[0]=d=>b(n).classname=d)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["state","schema"])]),_:1},8,["modelValue"])}}}),Cn={class:"w-full rounded-sm overflow-hidden h-24"},yn={class:"h-2/3 text-2xl bg-prim-800 p-2"},En={class:"flex items-center justify-between"},Bn={class:"truncate"},bn={class:"flex flex-col"},An={class:"flex items-center h-1/3 justify-between bg-prim-800/50 px-2"},Nn={class:"text-xs"},Tn={key:0},In=W({__name:"Card",props:{name:{type:String,default:"[No Name]"},code:{type:String,default:""},studentCount:{type:Number,default:0},id:{type:Number,default:-1}},setup(e){const t=q(),{codeToShow:s,classToDelete:r,classToRename:n}=z(t);return(o,i)=>{const l=et,a=fe;return v(),J("div",Cn,[N("div",yn,[N("div",En,[N("span",Bn,it(e.name),1),y(a,null,{panel:E(()=>[N("div",bn,[y(l,{color:"white",icon:"i-mdi-code-tags",label:"Show Code",onClick:i[0]||(i[0]=u=>s.value=e.code)}),y(l,{color:"white",icon:"i-mdi-edit",label:"Rename",onClick:i[1]||(i[1]=u=>n.value=e.id)}),y(l,{color:"rose",icon:"i-mdi-trash",label:"Delete",onClick:i[2]||(i[2]=u=>r.value=e.id)})])]),default:E(()=>[y(l,{icon:"i-mdi-dots-vertical",variant:"ghost",color:"white",ui:{rounded:"rounded-full"}})]),_:1})])]),N("div",An,[N("span",Nn,[L(it(e.studentCount)+" student",1),e.studentCount!==1?(v(),J("span",Tn,"s")):at("",!0)])])])}}}),Sn={class:"p-4 h-full flex flex-col gap-2"},Mn={class:"flex gap-2 w-full"},vn={class:xt("flex-grow scroll-stable min-h-0 overflow-y-auto")},Pn=W({__name:"classes",setup(e){const t=q(),s=ge(),{isLessLarge:r,isLessExtra:n}=z(s),o=$(()=>`col-${S(r)?2:S(n)?3:4}`),{sync:i}=t,{classes:l}=z(t),a=H(""),u=H(!1);return ie(()=>i()),(c,h)=>{const g=we,f=cn,w=hn,_=_n,A=Nt,p=et,C=In;return v(),J("div",Sn,[y(g,{modelValue:b(u),"onUpdate:modelValue":h[0]||(h[0]=d=>K(u)?u.value=d:null)},null,8,["modelValue"]),y(f),y(w),y(_),N("div",Mn,[y(A,{icon:"i-mdi-search",placeholder:"Search...",class:"flex-grow",modelValue:b(a),"onUpdate:modelValue":h[1]||(h[1]=d=>K(a)?a.value=d:null)},null,8,["modelValue"]),y(p,{icon:"i-mdi-plus",color:"gray",onClick:h[2]||(h[2]=d=>u.value=!0)},{default:E(()=>[L("Create")]),_:1})]),N("div",vn,[N("div",{class:xt(`grid pr-4 ${b(o)} grid-rows-none gap-2`)},[(v(!0),J(Rt,null,ae(b(l),d=>(v(),J(Rt,{key:d.id},[!b(a)||d.name&&d.name.toLowerCase().includes(b(a).toLowerCase())?(v(),j(C,{key:0,name:d.name,code:d.code,"student-count":d.studentCount,id:d.id},null,8,["name","code","student-count","id"])):at("",!0)],64))),128))],2)])])}}});const yo=le(Pn,[["__scopeId","data-v-f347645f"]]);export{yo as default};
