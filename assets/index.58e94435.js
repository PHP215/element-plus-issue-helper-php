import{u as J,a as q,c as h,E as ce,z as de,d as E,o as m,b,e as p,F as R,r as S,f as a,p as _e,g as fe,n as be,t as v,h as K,i as ge,s as ve,w as Q,m as ye,j as he,k as y,l as u,q as r,v as P,x as X,y as A,A as j,B as L,C as ze,D as Ve,G as we,H as Z,I as ee,J as te,K as M,L as F,M as oe,N as Re,O as ne,P as re,Q as ke,R as xe,S as $e,T as Ce,U as Te,V as Se,W as Pe}from"./vendor.332a6c88.js";const qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const _ of l.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&o(_)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}};qe();var Ee="/assets/element-plus-logo.e55b0739.svg";let B=J("lang",navigator.language);const Ne={en:"English","zh-CN":"\u7B80\u4F53\u4E2D\u6587"},H=()=>{const{locale:e,availableLocales:t,fallbackLocale:s}=q(),o=h({get:()=>t.includes(e.value)?e.value:s.value,set:l=>{const _=t.includes(l)?l:navigator.language;e.value=_,B.value=_}}),n=h(()=>o.value==="en"?ce:de);return o.value!==B.value&&(o.value=B.value),{lang:o,epLocale:n}};var I=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s};const le=e=>(_e("data-v-1fec171e"),e=e(),fe(),e),Oe={class:"nav-menu"},je=le(()=>p("div",{flex:"~","items-center":"","ml-4":""},[p("a",{href:"https://element-plus.org/",target:"_blank"},[p("img",{src:Ee,alt:"Logo","h-6":""})])],-1)),Le={flex:""},Ae=["onClick"],Be=le(()=>p("a",{class:"nav-menu-item",href:"https://github.com/element-plus/element-plus",target:"_blank"},[p("span",{"i-mdi-github":"","text-xl":"","text-black":""})],-1)),Fe=E({setup(e){const{lang:t}=H();return(s,o)=>(m(),b("div",Oe,[je,p("div",Le,[(m(!0),b(R,null,S(a(Ne),(n,l)=>(m(),b("div",{key:l,class:be({"nav-menu-item":!0,active:l===a(t)}),onClick:_=>t.value=l},v(n),11,Ae))),128)),Be])]))}});var Ue=I(Fe,[["__scopeId","data-v-1fec171e"]]);const ae=e=>ge(`https://data.jsdelivr.com/v1/package/npm/${e}`,{initialData:[],afterFetch:t=>(t.data=t.data.versions,t)}).json().data,Me=()=>{const e=ae("vue");return h(()=>e.value.filter(t=>K(t,"3.2.0",">=")))},se=()=>{const e=ae("element-plus");return h(()=>e.value.filter(t=>K(t,"1.1.0-beta.1",">=")))},He=(e,t)=>{let s=ve([]);const o=async()=>{s.value=await fetch(`https://data.jsdelivr.com/v1/package/npm/${a(e)}@${a(t)}/flat`).then(n=>n.json()).then(n=>n.files)};return Q(()=>[a(e),a(t)],()=>{a(e)&&a(t)&&o()},{immediate:!0}),s},Ie=[{name:"Element Plus Playground",domain:"element-plus.run"},{name:"JSFiddle",domain:"jsfiddle.net"},{name:"CodePen",domain:"codepen.io"},{name:"CodeSandbox",domain:"codesandbox.io"},{name:"Docs",domain:"element-plus.org"},{name:"Docs CN",domain:"element-plus.gitee.io"},{name:"Github Repo",domain:"github.com"}],ue=e=>{try{const t=new URL(e);return Ie.find(s=>s.domain===t.hostname)}catch{return null}},De=e=>e.replace(/^!/,""),We=e=>{if([/https?:\/\/element-plus\.run\/?$/,"https://jsfiddle.net/iamkun/ods20k7t/4","https://codepen.io/iamkun/pen/YzWMaVr","https://codesandbox.io/s/element-plus-spa-ms973"].some(n=>typeof n=="string"?e.startsWith(n):n.test(e)))return new Error("please do not copy example reproduction link.");let s;try{s=new URL(e)}catch{return new Error("please provide a correct link. (if you insist, please use ! as a prefix)")}const o=ue(e);if(!o)return new Error("Currently only reproduction links of Element Plus Playground, JSFiddle, CodePen and CodeSandbox are supported. (if you insist, please use ! as a prefix)");if(o.name==="Element Plus Playground")try{const n=window.atob(s.hash.replace(/^#/,""));JSON.parse(n)}catch{return new Error("Please provide a correct link of Element Plus Playground.")}return!0},Ge=["Vite","Webpack","Vue CLI","Rollup","CDN","Other"],G=["Component","TypeScript","Style","i18n","Build","Performance","Docs","Other"],Y=["New Component","Enhancement","TypeScript","i18n","Docs","Other"],U=e=>e.replace(/^el-/,""),Ye=()=>{const e={type:"bug-report",title:"",additional:"",bugReport:{epVersion:"",vueVersion:"",browser:"",buildTool:"",bugType:"",components:[],reproductionLink:"",reproduce:"",expected:"",actual:""},featureRequest:{featureType:"",newComponentName:"",enhancedComponentName:"",description:""}};let t=J("issue",e);return{form:t,rules:{"bugReport.reproductionLink":[{validator:(n,l)=>l.startsWith("!")?!0:We(l)}]},reset:()=>t.value=e}},ie=(e,t)=>{const s=He("element-plus",h(()=>a(t)||e.value[0]));return h(()=>[...new Set(s.value.map(n=>{var l;return(l=/\/es\/components\/(.*?)\/.*$/.exec(n.name))==null?void 0:l[1]}).filter(n=>!!n).map(n=>`el-${n}`))])},Je=e=>{var o,n;const{t}=q(),s=["Bug Report"];return e.bugReport.bugType!=="Other"&&s.push(e.bugReport.bugType),e.bugReport.components.length<=2&&!e.bugReport.components.includes("N/A")&&s.push(e.bugReport.components.map(l=>U(l)).join(", ")),{title:`${s.map(l=>`[${l}]`).join(" ")} ${e.title}`,content:`
<!-- generated by https://issue.element-plus.org/ DO NOT REMOVE -->

Bug Type: **\`${e.bugReport.bugType}\`**

## Environment

- Vue Version: \`${e.bugReport.vueVersion}\`
- Element Plus Version: \`${e.bugReport.epVersion}\`
- Browser / OS: \`${e.bugReport.browser}\`
- Build Tool: \`${e.bugReport.buildTool}\`

## Reproduction

### Related Component

${e.bugReport.components.map(l=>`- \`${l}\``).join(`
`)}

### Reproduction Link

[${(n=(o=ue(e.bugReport.reproductionLink))==null?void 0:o.name)!=null?n:"Link"}](${De(e.bugReport.reproductionLink)})

### Steps to reproduce

${e.bugReport.reproduce}

### What is Expected?

${e.bugReport.expected}

### What is actually happening?

${e.bugReport.actual}

### Additional comments

${e.additional||"_(empty)_"}

<!-- ${t("screenshot")} -->

    `.trim()}},Ke=e=>{const{t}=q(),s=["Feature Request"];e.featureRequest.featureType!=="Other"&&s.push(e.featureRequest.featureType),["All","N/A"].includes(e.featureRequest.enhancedComponentName)||s.push(U(e.featureRequest.enhancedComponentName));const o=[];return e.featureRequest.featureType==="New Component"?e.featureRequest.newComponentName&&o.push(["New component name",e.featureRequest.newComponentName]):e.featureRequest.enhancedComponentName&&o.push(["Enhanced compone nt name",U(e.featureRequest.enhancedComponentName)]),{title:`${s.map(n=>`[${n}]`).join(" ")} ${e.title}`,content:`
<!-- generated by https://issue.element-plus.org/ DO NOT REMOVE -->

Feature type: **\`${e.featureRequest.featureType}\`**

## Details

${o.map(([n,l])=>`- ${n}: \`${l}\``).join(`
`)}

## Description

${e.featureRequest.description}

### Additional comments

${e.additional||"_(empty)_"}

<!-- ${t("screenshot")} -->
    `.trim()}},Qe=["innerHTML"],Xe=E({props:{modelValue:{type:Boolean},form:null},emits:["update:modelValue"],setup(e){const t=e,{t:s}=q(),o=h(()=>{switch(t.form.type){case"bug-report":return Je(t.form);case"feature-request":return Ke(t.form)}}),n=h(()=>ye(`# ${o.value.title}

${o.value.content}`,{gfm:!0,breaks:!0})),l=()=>{window.open(`https://github.com/element-plus/element-plus/issues/new?title=${encodeURIComponent(o.value.title)}&body=${encodeURIComponent(o.value.content)}`)};return(_,w)=>{const $=X,k=he;return m(),y(k,{title:a(s)("issuePreview"),"model-value":e.modelValue,"onUpdate:modelValue":w[0]||(w[0]=d=>_.$emit("update:modelValue",d))},{footer:u(()=>[r($,{type:"primary",onClick:l},{default:u(()=>[P(v(a(s)("create")),1)]),_:1})]),default:u(()=>[p("div",{class:"markdown-body","text-sm":"",innerHTML:n.value},null,8,Qe)]),_:1},8,["title","model-value"])}}}),Ze=A('<p>The issue list is reserved exclusively for bug reports and feature requests. That means we do not accept usage questions. If you open an issue that does not conform to the requirements, <strong>it will be closed immediately</strong>.</p><p class="mb-2"> For usage questions, please use the following resources: </p><ul><li>Read the <a href="https://element-plus.org/" target="_blank" rel="noopener">docs</a></li><li>Ask on the <a href="https://discord.gg/eajuBjGtA4" target="_blank" rel="noopener">Discord</a></li><li>Look for / ask questions on <a href="https://stackoverflow.com/questions/ask?tags=element-plus" target="_blank" rel="noopener">Stack Overflow</a></li></ul><p>Also try to search for your issue - it may have already been answered or even fixed in the development branch. However, if you find that an old, closed issue still persists in the latest version, you should open a new issue using the form below instead of commenting on the old issue.</p>',4),et=[Ze],tt={setup(e,{expose:t}){return t({frontmatter:{}}),(o,n)=>(m(),b("div",null,et))}};var ot=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));const nt=p("h3",{class:"my-1"},"Markdown Supported",-1),rt=p("p",null,"Please refer to code below to wrap your code, if you need to enter the code in the input box below.",-1),lt=p("summary",null,"Example Code",-1),at=p("br",null,null,-1),st={setup(e,{expose:t}){const s=`
\`\`\`vue
<script setup>
defineProps({ /* ... */ })
<\/script>

<template>
  <h1>Hello World</h1>
</template>
\`\`\``.trim();return t({frontmatter:{}}),(n,l)=>{const _=j;return m(),b("div",null,[nt,rt,p("details",null,[lt,at,p("p",null,[r(_,{class:"font-mono","model-value":a(s),type:"textarea",autosize:"",readonly:""},null,8,["model-value"])])])])}}};var ut=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));const it=A('<p>We <strong>strongly recommend</strong> using the <a href="https://element-plus.run/" target="_blank" rel="noopener">Element Plus Playground</a> to provide a reproduction, so that we can understand the issue more conveniently and clearly. Also you can provide a link to a <a href="https://jsfiddle.net/iamkun/ods20k7t/4" target="_blank" rel="noopener">JSFiddle</a>, or <a href="https://codepen.io/iamkun/pen/YzWMaVr" target="_blank" rel="noopener">CodePen</a>. If it requires a build setup, you can use <a href="https://codesandbox.io/s/element-plus-spa-ms973?file=/src/App.vue" target="_blank" rel="noopener">CodeSandbox</a> or provide a GitHub repo. Please do not just fill in a random link. We will <strong>close your issue</strong> if you do that.</p>',1),pt=[it],mt={setup(e,{expose:t}){return t({frontmatter:{}}),(o,n)=>(m(),b("div",null,pt))}};var ct=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"}));const dt=A('<p>issue \u4E13\u95E8\u662F\u4E3A\u4E86\u62A5\u544A Bug \u548C\u529F\u80FD\u8BF7\u6C42\u7528\u7684\uFF0C\u610F\u601D\u662F\u6211\u4EEC\u4E0D\u63A5\u53D7\u4F7F\u7528\u4E0A\u7684\u95EE\u9898\u3002 \u4E3A\u4E86\u4E0D\u6D6A\u8D39\u5927\u5BB6\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u4F60\u53D1\u5E03\u4E86\u4E00\u4E2A\u4E0D\u7B26\u5408\u8981\u6C42\u7684\u95EE\u9898\uFF0C<strong>issue \u5C06\u4F1A\u88AB\u7ACB\u5373\u5173\u95ED</strong>\u3002</p><p class="mb-2">\u5BF9\u4E8E\u4F7F\u7528\u4E0A\u7684\u95EE\u9898\uFF0C\u8BF7\u53C2\u8003\u4EE5\u4E0B\u8D44\u6E90: </p><ul><li>\u9605\u8BFB<a href="https://element-plus.org/" target="_blank" rel="noopener">\u6587\u6863</a></li><li>\u5728 <a href="https://discord.gg/eajuBjGtA4" target="_blank" rel="noopener">Discord</a> \u4E0A\u5BFB\u6C42\u5E2E\u52A9</li><li>\u5728 <a href="https://stackoverflow.com/questions/ask?tags=element-plus" target="_blank" rel="noopener">Stack Overflow</a> \u4E0A\u5BFB\u6C42\u5E2E\u52A9</li></ul><p>\u5E76\u4E14\uFF0C\u8BF7\u5C1D\u8BD5\u5728 GitHub \u4E0A\u641C\u7D22\u4F60\u9047\u5230\u7684\u95EE\u9898\u2014\u2014\u53EF\u80FD\u5DF2\u7ECF\u5728 dev \u5206\u652F\u4E2D\u89E3\u51B3\u6216\u4FEE\u590D\u3002 \u4F46\u662F\uFF0C\u5982\u679C\u4F60\u53D1\u73B0\u4E00\u4E2A\u5F88\u4E45\u90FD\u4E0D\u6D3B\u8DC3\u7684\u6216\u5DF2\u5173\u95ED\u7684 issue \u5728\u6700\u65B0\u7248\u672C\u4E2D\u4ECD\u7136\u5B58\u5728\uFF0C\u90A3\u4E48\u8BF7\u4F7F\u7528\u4E0B\u9762\u7684\u8868\u5355\u63D0\u4EA4\u4E00\u4E2A\u65B0\u7684 issue\uFF0C\u8BF7\u4E0D\u8981\u53D1\u8868\u8BC4\u8BBA\u5230\u65E7\u7684 issue\u3002</p><p>\u5728\u4FDD\u8BC1\u8868\u8FBE\u65E0\u8BEF\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F60\u4F7F\u7528 <strong>\u82F1\u8BED</strong> \u6765\u63CF\u8FF0\u78B0\u5230\u7684\u95EE\u9898\u3002\u4F46\u5982\u679C\u4F60\u771F\u7684\u4E0D\u4F1A\u82F1\u8BED\uFF0C\u90A3\u4E48\u4E2D\u6587\u4E5F\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\u3002Element Plus \u793E\u533A\u4E5F\u6709\u4E00\u4E9B\u975E\u4E2D\u6587\u6BCD\u8BED\u8005\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u5C3D\u53EF\u80FD\u591A\u7684\u4EBA\u80FD\u591F\u770B\u61C2\u4F60\u7684 issue\uFF0C\u5C31\u8BF7\u5C3D\u91CF\u7528\u82F1\u6587\u3002</p>',5),_t=[dt],ft={setup(e,{expose:t}){return t({frontmatter:{}}),(o,n)=>(m(),b("div",null,_t))}};var bt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"}));const gt=p("h3",{class:"my-1"},"\u652F\u6301 Markdown",-1),vt=p("p",null,"\u5982\u679C\u4F60\u9700\u8981\u8F93\u5165\u4EE3\u7801\u5230\u6587\u672C\u6846\uFF0C\u8BF7\u53C2\u8003\u548C\u4F7F\u7528\u4E0B\u9762\u7684\u7684\u683C\u5F0F\u3002",-1),yt=p("summary",null,"\u793A\u4F8B\u4EE3\u7801",-1),ht=p("br",null,null,-1),zt={setup(e,{expose:t}){const s=`
\`\`\`vue
<script setup>
defineProps({ /* ... */ })
<\/script>

<template>
  <h1>Hello World</h1>
</template>
\`\`\``.trim();return t({frontmatter:{}}),(n,l)=>{const _=j;return m(),b("div",null,[gt,vt,p("details",null,[yt,ht,p("p",null,[r(_,{class:"font-mono","model-value":a(s),type:"textarea",autosize:"",readonly:""},null,8,["model-value"])])])])}}};var Vt=Object.freeze(Object.defineProperty({__proto__:null,default:zt},Symbol.toStringTag,{value:"Module"}));const wt=A('<p>\u4EE5\u4FBF\u6211\u4EEC\u66F4\u65B9\u4FBF\u3001\u66F4\u6E05\u695A\u5730\u4E86\u89E3\u95EE\u9898\uFF0C\u6211\u4EEC <strong>\u5F3A\u70C8\u5EFA\u8BAE</strong> \u4F7F\u7528 <a href="https://element-plus.run/" target="_blank" rel="noopener">Element Plus Playground</a> \u6765\u63D0\u4F9B\u590D\u73B0\u73AF\u5883\u3002\u6216\u8005\u4F60\u4E5F\u53EF\u4EE5\u63D0\u4F9B <a href="https://jsfiddle.net/iamkun/ods20k7t/4" target="_blank" rel="noopener">JSFiddle</a> \u6216 <a href="https://codepen.io/iamkun/pen/YzWMaVr" target="_blank" rel="noopener">CodePen</a>\u3002 \u5982\u679C\u9700\u8981\u6784\u5EFA\u5DE5\u5177\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <a href="https://codesandbox.io/s/element-plus-spa-ms973?file=/src/App.vue" target="_blank" rel="noopener">CodeSandbox</a> \u6216\u63D0\u4F9B GitHub \u4ED3\u5E93\u3002\u8BF7\u63D0\u4F9B\u4E00\u4E2A\u6709\u6548\u7684\u94FE\u63A5\u3002\u5426\u5219\uFF0C\u4E3A\u4E86\u4E0D\u6D6A\u8D39\u5927\u5BB6\u7684\u65F6\u95F4\uFF0C\u6211\u4EEC\u5C06\u76F4\u63A5<strong>\u5173\u95ED issue</strong>\u3002</p>',1),Rt=[wt],kt={setup(e,{expose:t}){return t({frontmatter:{}}),(o,n)=>(m(),b("div",null,Rt))}};var xt=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"}));const D=()=>{const e=H(),t=L(e,"lang"),s=h(()=>`../texts/${t.value}/`),o=h(()=>Object.fromEntries(Object.entries({"../texts/en/before-you-start.md":ot,"../texts/en/markdown-supported.md":ut,"../texts/en/reproduction-link.md":ct,"../texts/zh-CN/before-you-start.md":bt,"../texts/zh-CN/markdown-supported.md":Vt,"../texts/zh-CN/reproduction-link.md":xt}).filter(([n])=>n.startsWith(s.value)).map(([n,l])=>[ze(Ve(n.replace(s.value,"").replace(".md",""))),we(l.default)])));return Object.fromEntries(Object.keys(o.value).map(n=>[n,h(()=>o.value[n])]))},$t={class:"bg-#fdf6ec","rounded-lg":"","mt-4":"","mb-2":"","p-4":"","text-gray-600":""},Ct=E({props:{form:null},emits:["update:form"],setup(e,{emit:t}){const s=e,{t:o}=q(),{MarkdownSupported:n}=D(),l=Z(s,"form",t),_=h(()=>Y.map(k=>o(`feature.featureTypes.${k}`,k))),w=se(),$=ie(w);return(k,d)=>{const x=ee,O=te,g=M,c=j;return m(),b(R,null,[r(g,{label:a(o)("feature.featureType"),prop:"featureRequest.featureType",required:""},{default:u(()=>[r(O,{modelValue:l.value.featureType,"onUpdate:modelValue":d[0]||(d[0]=f=>l.value.featureType=f),clearable:""},{default:u(()=>[(m(!0),b(R,null,S(a(Y),(f,C)=>(m(),y(x,{key:f,value:f,label:_.value[C]},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),l.value.featureType==="New Component"?(m(),y(g,{key:0,label:a(o)("feature.newComponentName"),prop:"featureRequest.newComponentName",required:""},{default:u(()=>[r(c,{modelValue:l.value.newComponentName,"onUpdate:modelValue":d[1]||(d[1]=f=>l.value.newComponentName=f),placeholder:"e.g. ElHelloWorld"},null,8,["modelValue"])]),_:1},8,["label"])):(m(),y(g,{key:1,label:a(o)("feature.enhancedComponentName"),prop:"featureRequest.enhancedComponentName",required:""},{default:u(()=>[r(O,{modelValue:l.value.enhancedComponentName,"onUpdate:modelValue":d[2]||(d[2]=f=>l.value.enhancedComponentName=f),filterable:"",style:{width:"100%"}},{default:u(()=>[(m(!0),b(R,null,S(["All","N/A",...a($)],f=>(m(),y(x,{key:f,label:f,value:f},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])),p("div",$t,[r(a(n))]),r(g,{label:a(o)("feature.description"),prop:"featureRequest.description",required:""},{default:u(()=>[r(c,{modelValue:l.value.description,"onUpdate:modelValue":d[3]||(d[3]=f=>l.value.description=f),"font-mono":"",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["modelValue"])]),_:1},8,["label"])],64)}}});const Tt={class:"sub-title"},St={"text-sm":"","text-gray-500":""},Pt={"text-sm":"","text-gray-500":""},qt={"text-xs":"","text-gray-500":"","font-mono":""},Et={class:"sub-title"},Nt={class:"bg-#fdf6ec","rounded-lg":"","mt-4":"","mb-2":"","p-4":"","text-gray-600":""},Ot=E({props:{form:null},emits:["update:form"],setup(e,{emit:t}){const o=Z(e,"form",t),{t:n}=q(),{ReproductionLink:l,MarkdownSupported:_}=D(),w=navigator.userAgent,$=se(),k=Me(),d=ie($,h(()=>o.value.epVersion));let x=F(5);const O=h(()=>G.map(g=>n(`bug.bugTypes.${g}`,g)));return Q(()=>o.value.components,g=>{g.includes("All")||g.includes("N/A")?(g.length>1&&(o.value.components=[g.includes("All")?"All":"N/A"]),x.value=1):x.value=5}),(g,c)=>{const f=ee,C=te,z=M,T=oe,N=j,V=Re,pe=ne,W=re;return m(),b(R,null,[r(z,{label:a(n)("bug.type"),prop:"bugReport.bugType",required:""},{default:u(()=>[r(C,{modelValue:o.value.bugType,"onUpdate:modelValue":c[0]||(c[0]=i=>o.value.bugType=i),clearable:""},{default:u(()=>[(m(!0),b(R,null,S(a(G),(i,me)=>(m(),y(f,{key:i,value:i,label:O.value[me]},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),p("h2",Tt,v(a(n)("bug.environment")),1),r(W,{gutter:16},{default:u(()=>[r(T,{span:12},{default:u(()=>[r(z,{label:a(n)("bug.elementPlusVersion"),prop:"bugReport.epVersion",required:""},{default:u(()=>[r(C,{modelValue:o.value.epVersion,"onUpdate:modelValue":c[1]||(c[1]=i=>o.value.epVersion=i),clearable:"",style:{width:"100%"}},{default:u(()=>[(m(!0),b(R,null,S(a($),i=>(m(),y(f,{key:i,value:i},{default:u(()=>[P(v(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),p("p",St,v(a(n)("bug.elementPlusVersionHint")),1)]),_:1},8,["label"])]),_:1}),r(T,{span:12},{default:u(()=>[r(z,{label:a(n)("bug.vueVersion"),prop:"bugReport.vueVersion",required:""},{default:u(()=>[r(C,{modelValue:o.value.vueVersion,"onUpdate:modelValue":c[2]||(c[2]=i=>o.value.vueVersion=i),clearable:"",style:{width:"100%"}},{default:u(()=>[(m(!0),b(R,null,S(a(k),i=>(m(),y(f,{key:i,value:i},{default:u(()=>[P(v(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),p("p",Pt,v(a(n)("bug.vueVersionHint")),1)]),_:1},8,["label"])]),_:1}),r(T,{span:12},{default:u(()=>[r(z,{label:a(n)("bug.browserOS"),prop:"bugReport.browser",required:""},{default:u(()=>[r(N,{modelValue:o.value.browser,"onUpdate:modelValue":c[3]||(c[3]=i=>o.value.browser=i),placeholder:"e.g. Chrome 96.0.4664.45 / macOS 12.0.1"},null,8,["modelValue"]),p("p",qt,"UserAgent: "+v(a(w)),1)]),_:1},8,["label"])]),_:1}),r(T,{span:12},{default:u(()=>[r(z,{label:a(n)("bug.buildTool"),prop:"bugReport.buildTool",required:""},{default:u(()=>[r(pe,{modelValue:o.value.buildTool,"onUpdate:modelValue":c[4]||(c[4]=i=>o.value.buildTool=i)},{default:u(()=>[(m(!0),b(R,null,S(a(Ge),i=>(m(),y(V,{key:i,label:i},{default:u(()=>[P(v(i),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),p("h2",Et,v(a(n)("bug.reproduction")),1),r(z,{label:a(n)("bug.affectedComponents"),prop:"bugReport.components",required:""},{default:u(()=>[r(C,{modelValue:o.value.components,"onUpdate:modelValue":c[5]||(c[5]=i=>o.value.components=i),multiple:"",filterable:"","multiple-limit":x.value,style:{width:"100%"}},{default:u(()=>[(m(!0),b(R,null,S(["All","N/A",...a(d)],i=>(m(),y(f,{key:i,label:i,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue","multiple-limit"])]),_:1},8,["label"]),r(z,{label:a(n)("bug.minimalReproduction"),prop:"bugReport.reproductionLink",required:""},{default:u(()=>[r(N,{modelValue:o.value.reproductionLink,"onUpdate:modelValue":c[6]||(c[6]=i=>o.value.reproductionLink=i)},null,8,["modelValue"]),r(a(l))]),_:1},8,["label"]),p("div",Nt,[r(a(_))]),r(z,{label:a(n)("bug.stepsToReproduce"),prop:"bugReport.reproduce",required:""},{default:u(()=>[r(N,{modelValue:o.value.reproduce,"onUpdate:modelValue":c[7]||(c[7]=i=>o.value.reproduce=i),"font-mono":"",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["modelValue"])]),_:1},8,["label"]),r(W,{gutter:16},{default:u(()=>[r(T,{span:12},{default:u(()=>[r(z,{label:a(n)("bug.expected"),prop:"bugReport.expected",required:""},{default:u(()=>[r(N,{modelValue:o.value.expected,"onUpdate:modelValue":c[8]||(c[8]=i=>o.value.expected=i),"font-mono":"",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),r(T,{span:12},{default:u(()=>[r(z,{label:a(n)("bug.actuallyHappening"),prop:"bugReport.actual",required:""},{default:u(()=>[r(N,{modelValue:o.value.actual,"onUpdate:modelValue":c[9]||(c[9]=i=>o.value.actual=i),"font-mono":"",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})],64)}}});var jt=I(Ot,[["__scopeId","data-v-8148d662"]]);const Lt={"w-full":"",flex:"~","justify-between":"","items-center":""},At=E({setup(e){const{t}=q(),s=Ye(),o=L(s,"form"),n=L(s,"rules"),l=L(s,"reset"),_=F(void 0);let w=F(!1);const $=async()=>{var k;await((k=_.value)==null?void 0:k.validate()),w.value=!0};return(k,d)=>{const x=ke,O=ne,g=M,c=j,f=jt,C=Ct,z=X,T=xe,N=Xe;return m(),b(R,null,[r(T,{ref_key:"formRef",ref:_,class:"form",model:o.value,rules:n.value,"label-position":"top"},{default:u(()=>[r(g,{label:a(t)("issueType"),prop:"type"},{default:u(()=>[r(O,{modelValue:o.value.type,"onUpdate:modelValue":d[0]||(d[0]=V=>o.value.type=V)},{default:u(()=>[r(x,{label:"bug-report"},{default:u(()=>[P(v(a(t)("issueTypeBugReport")),1)]),_:1}),r(x,{label:"feature-request"},{default:u(()=>[P(v(a(t)("issueTypeFeatureRequest")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(g,{label:a(t)("issueTitle"),prop:"title",required:""},{default:u(()=>[r(c,{modelValue:o.value.title,"onUpdate:modelValue":d[1]||(d[1]=V=>o.value.title=V)},null,8,["modelValue"])]),_:1},8,["label"]),o.value.type==="bug-report"?(m(),y(f,{key:0,form:o.value.bugReport,"onUpdate:form":d[2]||(d[2]=V=>o.value.bugReport=V)},null,8,["form"])):o.value.type==="feature-request"?(m(),y(C,{key:1,form:o.value.featureRequest,"onUpdate:form":d[3]||(d[3]=V=>o.value.featureRequest=V)},null,8,["form"])):$e("",!0),r(g,{label:a(t)("bug.additionalComments"),prop:"additional"},{default:u(()=>[r(c,{modelValue:o.value.additional,"onUpdate:modelValue":d[4]||(d[4]=V=>o.value.additional=V),"font-mono":"",type:"textarea",autosize:{minRows:3,maxRows:10}},null,8,["modelValue"])]),_:1},8,["label"]),r(g,null,{default:u(()=>[p("div",Lt,[r(z,{type:"primary",size:"large",onClick:$},{default:u(()=>[P(v(a(t)("preview")),1)]),_:1}),r(z,{type:"danger",plain:"",onClick:l.value},{default:u(()=>[P(v(a(t)("resetForm")),1)]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["model","rules"]),r(N,{modelValue:w.value,"onUpdate:modelValue":d[5]||(d[5]=V=>w.value=V),form:o.value},null,8,["modelValue","form"])],64)}}});const Bt={class:"bg-#ecf5ff","rounded-lg":"","my-4":"","p-4":""},Ft={"my-1":"","fw-400":""},Ut={"leading-6":""},Mt={"text-base":"",tabindex:"-1"},Ht=E({setup(e){const{t}=q(),{BeforeYouStart:s}=D();return(o,n)=>{const l=At,_=oe,w=re;return m(),y(w,{class:"content",justify:"center"},{default:u(()=>[r(_,{xs:18,sm:18,md:12},{default:u(()=>[p("div",Bt,[p("h1",Ft,v(a(t)("beforeYouStart")),1),p("p",Ut,[r(a(s))]),p("a",Mt,v(a(t)("whyStrict"))+" (WIP)",1)]),r(l)]),_:1})]),_:1})}}});var It=I(Ht,[["__scopeId","data-v-df6f3116"]]),Dt="/assets/element-plus-logo-small.14a55fbf.svg";const Wt={flex:"~","justify-center":"","text-base":"",style:{color:"var(--el-color-primary)"}},Gt=p("img",{src:Dt,alt:"Logo","h-6":"","mr-1":""},null,-1),Yt={"no-underline":"",style:{color:"var(--el-color-primary)"},href:"https://github.com/element-plus/element-plus-issue-helper",target:"_blank"},Jt=E({setup(e){const t="0.2.7";return(s,o)=>{const n=Ce;return m(),b(R,null,[r(n),p("p",Wt,[Gt,p("a",Yt," Element Plus Issue Helper v"+v(a(t)),1)])],64)}}});const Kt={antialiased:""},Qt=E({setup(e){const{epLocale:t}=H();return(s,o)=>{const n=Te;return m(),y(n,{locale:a(t)},{default:u(()=>[p("div",Kt,[r(Ue),r(It),r(Jt)])]),_:1},8,["locale"])}}});var Xt={beforeYouStart:e=>{const{normalize:t}=e;return t(["Before You Start..."])},whyStrict:e=>{const{normalize:t}=e;return t(["Why are we so strict about this?"])},issueTitle:e=>{const{normalize:t}=e;return t(["Issue title"])},issueType:e=>{const{normalize:t}=e;return t(["This is a"])},issueTypeBugReport:e=>{const{normalize:t}=e;return t(["Bug Report"])},issueTypeFeatureRequest:e=>{const{normalize:t}=e;return t(["Feature Request"])},issuePreview:e=>{const{normalize:t}=e;return t(["Issue Preview"])},bug:{type:e=>{const{normalize:t}=e;return t(["Bug type"])},environment:e=>{const{normalize:t}=e;return t(["Environment"])},elementPlusVersion:e=>{const{normalize:t}=e;return t(["Element Plus Version"])},elementPlusVersionHint:e=>{const{normalize:t}=e;return t(["Check if the issue is reproducible with the latest version of Element Plus."])},vueVersion:e=>{const{normalize:t}=e;return t(["Vue Version"])},vueVersionHint:e=>{const{normalize:t}=e;return t(["Check if the issue is reproducible with the latest stable version of Vue."])},browserOS:e=>{const{normalize:t}=e;return t(["Browser / OS"])},buildTool:e=>{const{normalize:t}=e;return t(["Build Tool"])},reproduction:e=>{const{normalize:t}=e;return t(["Reproduction"])},affectedComponents:e=>{const{normalize:t}=e;return t(["Affected components"])},minimalReproduction:e=>{const{normalize:t}=e;return t(["Link to minimal reproduction"])},stepsToReproduce:e=>{const{normalize:t}=e;return t(["Steps to reproduce"])},expected:e=>{const{normalize:t}=e;return t(["What is expected?"])},actuallyHappening:e=>{const{normalize:t}=e;return t(["What is actually happening?"])},additionalComments:e=>{const{normalize:t}=e;return t(["Any additional comments? (optional)"])}},feature:{featureType:e=>{const{normalize:t}=e;return t(["Feature type"])},newComponentName:e=>{const{normalize:t}=e;return t(["New Component name"])},enhancedComponentName:e=>{const{normalize:t}=e;return t(["Component name that needs to be enhanced"])},description:e=>{const{normalize:t}=e;return t(["Description"])}},screenshot:e=>{const{normalize:t}=e;return t(["If you need to insert a screenshot, please paste it here."])},resetForm:e=>{const{normalize:t}=e;return t(["Reset From"])},preview:e=>{const{normalize:t}=e;return t(["Preview"])},create:e=>{const{normalize:t}=e;return t(["Create"])}},Zt=Object.freeze(Object.defineProperty({__proto__:null,default:Xt},Symbol.toStringTag,{value:"Module"})),eo={beforeYouStart:e=>{const{normalize:t}=e;return t(["\u5728\u4F60\u5F00\u59CB\u4E4B\u524D\u2026\u2026"])},whyStrict:e=>{const{normalize:t}=e;return t(["\u4E3A\u4EC0\u4E48\u6709\u8FD9\u4E48\u591A\u9650\u5236\uFF1F"])},issueTitle:e=>{const{normalize:t}=e;return t(["issue \u6807\u9898"])},issueType:e=>{const{normalize:t}=e;return t(["\u8FD9\u662F\u4E00\u4E2A"])},issueTypeBugReport:e=>{const{normalize:t}=e;return t(["Bug \u62A5\u544A"])},issueTypeFeatureRequest:e=>{const{normalize:t}=e;return t(["\u529F\u80FD\u8BF7\u6C42"])},issuePreview:e=>{const{normalize:t}=e;return t(["issue \u9884\u89C8"])},bug:{type:e=>{const{normalize:t}=e;return t(["Bug \u7C7B\u578B"])},environment:e=>{const{normalize:t}=e;return t(["\u73AF\u5883\u4FE1\u606F"])},elementPlusVersion:e=>{const{normalize:t}=e;return t(["Element Plus \u7248\u672C"])},elementPlusVersionHint:e=>{const{normalize:t}=e;return t(["\u8BF7\u68C0\u67E5\u8BE5\u95EE\u9898\u662F\u5426\u53EF\u4EE5\u4F7F\u7528\u6700\u65B0\u7684 Element Plus \u7248\u672C\u91CD\u73B0\u3002"])},vueVersion:e=>{const{normalize:t}=e;return t(["Vue \u7248\u672C"])},vueVersionHint:e=>{const{normalize:t}=e;return t(["\u8BF7\u68C0\u67E5\u8BE5\u95EE\u9898\u662F\u5426\u53EF\u4EE5\u4F7F\u7528\u6700\u65B0\u7684 Vue \u7A33\u5B9A\u7248\u672C\u91CD\u73B0\u3002"])},browserOS:e=>{const{normalize:t}=e;return t(["\u6D4F\u89C8\u5668 / \u64CD\u4F5C\u7CFB\u7EDF"])},buildTool:e=>{const{normalize:t}=e;return t(["\u6784\u5EFA\u5DE5\u5177"])},reproduction:e=>{const{normalize:t}=e;return t(["\u590D\u73B0\u73AF\u5883"])},affectedComponents:e=>{const{normalize:t}=e;return t(["\u53D7\u5F71\u54CD\u7684\u7EC4\u4EF6"])},minimalReproduction:e=>{const{normalize:t}=e;return t(["\u6700\u5C0F\u590D\u73B0\u73AF\u5883\u7684\u94FE\u63A5"])},stepsToReproduce:e=>{const{normalize:t}=e;return t(["\u590D\u73B0\u6B65\u9AA4"])},expected:e=>{const{normalize:t}=e;return t(["\u671F\u671B\u7684\u884C\u4E3A"])},actuallyHappening:e=>{const{normalize:t}=e;return t(["\u5B9E\u9645\u7684\u884C\u4E3A"])},additionalComments:e=>{const{normalize:t}=e;return t(["\u989D\u5916\u7559\u8A00\uFF08\u53EF\u9009\uFF09"])},bugTypes:{Component:e=>{const{normalize:t}=e;return t(["\u7EC4\u4EF6"])},TypeScript:e=>{const{normalize:t}=e;return t(["TypeScript"])},Style:e=>{const{normalize:t}=e;return t(["\u6837\u5F0F"])},i18n:e=>{const{normalize:t}=e;return t(["\u56FD\u9645\u5316"])},Build:e=>{const{normalize:t}=e;return t(["\u6784\u5EFA"])},Performance:e=>{const{normalize:t}=e;return t(["\u6027\u80FD"])},Docs:e=>{const{normalize:t}=e;return t(["\u6587\u6863"])},Other:e=>{const{normalize:t}=e;return t(["\u5176\u4ED6"])}}},feature:{featureType:e=>{const{normalize:t}=e;return t(["\u529F\u80FD\u7C7B\u578B"])},newComponentName:e=>{const{normalize:t}=e;return t(["\u65B0\u589E\u7684\u7EC4\u4EF6\u540D\u79F0"])},enhancedComponentName:e=>{const{normalize:t}=e;return t(["\u9700\u8981\u589E\u5F3A\u7684\u7EC4\u4EF6"])},description:e=>{const{normalize:t}=e;return t(["\u63CF\u8FF0"])},featureTypes:{"New Component":e=>{const{normalize:t}=e;return t(["\u65B0\u589E\u7EC4\u4EF6"])},Enhancement:e=>{const{normalize:t}=e;return t(["\u589E\u5F3A"])},TypeScript:e=>{const{normalize:t}=e;return t(["TypeScript"])},i18n:e=>{const{normalize:t}=e;return t(["\u56FD\u9645\u5316"])},Docs:e=>{const{normalize:t}=e;return t(["\u6587\u6863"])},Other:e=>{const{normalize:t}=e;return t(["\u5176\u4ED6"])}}},screenshot:e=>{const{normalize:t}=e;return t(["\u5982\u679C\u4F60\u9700\u8981\u63D2\u5165\u622A\u56FE\uFF0C\u8BF7\u5728\u8FD9\u7C98\u8D34\u3002"])},resetForm:e=>{const{normalize:t}=e;return t(["\u6E05\u7A7A\u8868\u5355"])},preview:e=>{const{normalize:t}=e;return t(["\u9884\u89C8"])},create:e=>{const{normalize:t}=e;return t(["\u521B\u5EFA"])}},to=Object.freeze(Object.defineProperty({__proto__:null,default:eo},Symbol.toStringTag,{value:"Module"}));const oo=Object.fromEntries(Object.entries({"../locales/en.yml":Zt,"../locales/zh-CN.yml":to}).map(([e,t])=>{var o;return[(o=/locales\/(.*)\.ya?ml/.exec(e))==null?void 0:o[1],t.default]})),no=Se({legacy:!1,locale:navigator.language,fallbackLocale:"en",messages:oo});Pe(Qt).use(no).mount("#app");