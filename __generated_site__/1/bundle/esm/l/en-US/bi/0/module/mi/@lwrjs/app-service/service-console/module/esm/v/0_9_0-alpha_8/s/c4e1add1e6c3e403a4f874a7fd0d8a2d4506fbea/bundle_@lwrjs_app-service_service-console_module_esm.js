import{init as u,load as f}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_9_0-alpha_8/s/0bce4b746ab86414a9ee8d821b5b2570ccc9be35/bundle_lwr_esmLoader.js";import"/1/bundle/esm/l/en-US/bi/0/module/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F2_32_1/s/5256cdc8593045c966b1b19c4e58e89a08b4bfe9/bundle_@lwc_synthetic-shadow.js";import{logOperationStart as _}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_9_0-alpha_8/s/d97bcd79d4985c2a3b967ffebc40fa2f69da7932/bundle_lwr_profiler.js";import{createElement as h}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_32_1/s/cca224ee58702088c152ed897e61efeb2176631e/bundle_lwc.js";const w=globalThis.LWR;globalThis.LWR.define?globalThis.LWR=Object.freeze({define:globalThis.LWR.define}):delete globalThis.LWR;function g(){return w}const C="lwr.bootstrap.",F=`${C}end`;function p(e,o){return h(e,{is:o})}function b(e){return e.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,o=>`-${o.toLowerCase()}`)}const y=/-([a-z])/g;function v(e){return e.replace(y,o=>o[1].toUpperCase())}function E(e){if(typeof customElements!="undefined"&&typeof document!="undefined"){const o=document.querySelector("[lwr-root]");e.forEach(([s,r])=>{const l=b(s);let i=document.body.querySelector(l);i?document.querySelectorAll(l).forEach(n=>{const t=p(l,r);for(const{name:a,value:c}of n.attributes){t.setAttribute(a,c);const d=v(a);d in t&&(t[d]=c)}for(;n.childNodes.length>0;)t.appendChild(n.childNodes[0]);n.parentElement.replaceChild(t,n)}):(i=p(l,r),o?o.appendChild(i):document.body.appendChild(i))})}_({id:F})}const m=g(),{imports:L,index:R,importMappings:S,endpoints:T}=m;u({imports:L,index:R,importMappings:S,endpoints:T});const{rootComponents:A,ssrProps:U}=m;Promise.all(A.map(async e=>{const o=b(e);return f(e,"@lwrjs/app-service/service-console/module/esm/v/0_9_0-alpha_8").then(({default:s})=>{E([[o,s]])})}));
