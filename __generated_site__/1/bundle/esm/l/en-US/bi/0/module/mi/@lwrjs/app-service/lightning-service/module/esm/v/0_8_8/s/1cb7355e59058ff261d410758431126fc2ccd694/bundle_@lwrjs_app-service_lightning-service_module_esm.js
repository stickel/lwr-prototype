import{init as f,load as u}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_8_8/s/f993708a762951aa84e93cbb4aef8f33800afc08/bundle_lwr_esmLoader.js";import"/1/bundle/esm/l/en-US/bi/0/module/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F2_32_1/s/5256cdc8593045c966b1b19c4e58e89a08b4bfe9/bundle_@lwc_synthetic-shadow.js";import{logOperationStart as h}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_8_8/s/b4a3f21db97403d99d82b6194244a3b6db5df565/bundle_lwr_profiler.js";import{createElement as _}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_32_1/s/cca224ee58702088c152ed897e61efeb2176631e/bundle_lwc.js";const w=globalThis.LWR;globalThis.LWR.define?globalThis.LWR=Object.freeze({define:globalThis.LWR.define}):delete globalThis.LWR;function g(){return w}const C="lwr.bootstrap.",F=`${C}end`;function m(e,n){return _(e,{is:n})}function b(e){return e.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const y=/-([a-z])/g;function v(e){return e.replace(y,n=>n[1].toUpperCase())}function E(e){if(typeof customElements!="undefined"&&typeof document!="undefined"){const n=document.querySelector("[lwr-root]");e.forEach(([r,s])=>{const l=b(r);let i=document.body.querySelector(l);i?document.querySelectorAll(l).forEach(o=>{const t=m(l,s);for(const{name:a,value:d}of o.attributes){t.setAttribute(a,d);const c=v(a);c in t&&(t[c]=d)}for(;o.childNodes.length>0;)t.appendChild(o.childNodes[0]);o.parentElement.replaceChild(t,o)}):(i=m(l,s),n?n.appendChild(i):document.body.appendChild(i))})}h({id:F})}const p=g(),{imports:L,index:R,importMappings:S,endpoints:T}=p;f({imports:L,index:R,importMappings:S,endpoints:T});const{rootComponents:A,ssrProps:U}=p;Promise.all(A.map(async e=>{const n=b(e);return u(e,"@lwrjs/app-service/lightning-service/module/esm/v/0_8_8").then(({default:r})=>{E([[n,r]])})}));