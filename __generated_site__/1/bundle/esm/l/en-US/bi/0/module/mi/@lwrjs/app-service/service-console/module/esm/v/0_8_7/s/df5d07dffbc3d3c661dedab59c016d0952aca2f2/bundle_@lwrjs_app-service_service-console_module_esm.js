import{init as u,load as b}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_8_7/s/8b50c2347cfdfde75dc2e8f723c6ff95cd1a7d0b/bundle_lwr_esmLoader.js";import"/1/bundle/esm/l/en-US/bi/0/module/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F2_32_1/s/5256cdc8593045c966b1b19c4e58e89a08b4bfe9/bundle_@lwc_synthetic-shadow.js";import{logOperationStart as _}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_8_7/s/a7a74d6a29233372125079d49ad780ad64d372d3/bundle_lwr_profiler.js";import{createElement as h}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_32_1/s/cca224ee58702088c152ed897e61efeb2176631e/bundle_lwc.js";const w=globalThis.LWR;globalThis.LWR.define?globalThis.LWR=Object.freeze({define:globalThis.LWR.define}):delete globalThis.LWR;function g(){return w}const C="lwr.bootstrap.",F=`${C}end`;function m(e,o){return h(e,{is:o})}function p(e){return e.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,o=>`-${o.toLowerCase()}`)}const y=/-([a-z])/g;function v(e){return e.replace(y,o=>o[1].toUpperCase())}function E(e){if(typeof customElements!="undefined"&&typeof document!="undefined"){const o=document.querySelector("[lwr-root]");e.forEach(([s,r])=>{const l=p(s);let i=document.body.querySelector(l);i?document.querySelectorAll(l).forEach(n=>{const t=m(l,r);for(const{name:d,value:c}of n.attributes){t.setAttribute(d,c);const a=v(d);a in t&&(t[a]=c)}for(;n.childNodes.length>0;)t.appendChild(n.childNodes[0]);n.parentElement.replaceChild(t,n)}):(i=m(l,r),o?o.appendChild(i):document.body.appendChild(i))})}_({id:F})}const f=g(),{imports:L,index:R,importMappings:S,endpoints:T}=f;u({imports:L,index:R,importMappings:S,endpoints:T});const{rootComponents:A,ssrProps:U}=f;Promise.all(A.map(async e=>{const o=p(e);return b(e,"@lwrjs/app-service/service-console/module/esm/v/0_8_7").then(({default:s})=>{E([[o,s]])})}));
