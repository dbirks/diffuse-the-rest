import{S as ne,i as se,s as re,k as I,a as U,q as Q,H as oe,l as E,m as S,h as o,c as W,r as X,n as s,I as K,F as i,b as Z,J as $,K as ee,A as te,L as ie,o as le,z as ce,M as de,N as Y}from"../../chunks/index-3db9fbe0.js";const{document:H}=de;function pe(f){let j,a,D,_,z,r,v,B,p,x,y,l,u,c,d,w,b,k,C,R,N,L,P,O,T,V,t;return{c(){j=I("link"),a=I("script"),_=I("script"),r=I("script"),B=U(),p=I("div"),x=I("canvas"),l=U(),u=I("div"),c=I("div"),d=U(),w=I("div"),b=I("input"),k=U(),C=I("button"),R=Q("diffuse the f rest"),L=U(),P=I("p"),O=Q("pro tip: upload img by dropping on the canvas"),this.h()},l(e){const n=oe('[data-svelte="svelte-bw39ln"]',H.head);j=E(n,"LINK",{href:!0,rel:!0}),a=E(n,"SCRIPT",{src:!0});var M=S(a);M.forEach(o),_=E(n,"SCRIPT",{src:!0});var m=S(_);m.forEach(o),r=E(n,"SCRIPT",{src:!0});var q=S(r);q.forEach(o),n.forEach(o),B=W(e),p=E(e,"DIV",{class:!0});var h=S(p);x=E(h,"CANVAS",{class:!0}),S(x).forEach(o),l=W(h),u=E(h,"DIV",{class:!0});var g=S(u);c=E(g,"DIV",{id:!0}),S(c).forEach(o),d=W(g),w=E(g,"DIV",{class:!0});var F=S(w);b=E(F,"INPUT",{type:!0,class:!0,placeholder:!0}),k=W(F),C=E(F,"BUTTON",{class:!0});var A=S(C);R=X(A,"diffuse the f rest"),A.forEach(o),F.forEach(o),L=W(g),P=E(g,"P",{class:!0});var J=S(P);O=X(J,"pro tip: upload img by dropping on the canvas"),J.forEach(o),g.forEach(o),h.forEach(o),this.h()},h(){s(j,"href","https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.css"),s(j,"rel","stylesheet"),K(a.src,D="https://code.jquery.com/jquery-1.12.4.min.js")||s(a,"src",D),K(_.src,z="https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.min.js")||s(_,"src",z),K(r.src,v="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.contentWindow.min.js")||s(r,"src",v),s(x,"class",y="border-2 "+(f[5]?"":"hidden")),s(c,"id","board-container"),s(b,"type","text"),s(b,"class","border-2 "),s(b,"placeholder","Add prompt"),s(C,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"),s(w,"class",N="flex gap-x-2 mt-4 items-center justify-center "+(f[1]?"animate-pulse":"")),s(P,"class","mt-2 opacity-50"),s(u,"class",T="flex flex-col items-center "+(f[1]?"pointer-events-none":"")),s(p,"class","flex flex-wrap gap-x-4 gap-y-2 justify-center my-8")},m(e,n){i(H.head,j),i(H.head,a),i(H.head,_),i(H.head,r),Z(e,B,n),Z(e,p,n),i(p,x),f[7](x),i(p,l),i(p,u),i(u,c),f[8](c),i(u,d),i(u,w),i(w,b),$(b,f[0]),i(w,k),i(w,C),i(C,R),i(u,L),i(u,P),i(P,O),f[10](p),V||(t=[ee(b,"input",f[9]),ee(C,"click",f[6])],V=!0)},p(e,[n]){n&32&&y!==(y="border-2 "+(e[5]?"":"hidden"))&&s(x,"class",y),n&1&&b.value!==e[0]&&$(b,e[0]),n&2&&N!==(N="flex gap-x-2 mt-4 items-center justify-center "+(e[1]?"animate-pulse":""))&&s(w,"class",N),n&2&&T!==(T="flex flex-col items-center "+(e[1]?"pointer-events-none":""))&&s(u,"class",T)},i:te,o:te,d(e){o(j),o(a),o(_),o(r),e&&o(B),e&&o(p),f[7](null),f[8](null),f[10](null),V=!1,ie(t)}}}const G=500,ae=3e3;function ue(f,j,a){let D="",_=!1,z=!1,r,v,B,p,x,y,l=400,u,c,d,w=!1;async function b(){if(!v)return;const t=v.createImageData(r.width,r.height),e=t.data;for(let m=0,q=e.length;m<q;m+=4)e[m]=40*Math.random()*7,e[m+1]=40*Math.random()*7,e[m+2]=40*Math.random()*7,e[m+3]=255;const n=await createImageBitmap(t),M=performance.now()-B;v.globalAlpha=Math.min(M,ae)/ae,v.drawImage(n,0,0,l,l),_&&window.requestAnimationFrame(b)}function k(t){if(!v)return;const e=performance.now()-p;v.globalAlpha=Math.min(e,G)/G,v.drawImage(t,0,0,l,l),e<G&&window.requestAnimationFrame(()=>k(t))}async function C(t){const e=t.toDataURL("png"),M=await(await fetch(e)).blob(),m=new File([M],"canvas shot.png",{type:"image/png"}),q=t.getContext("2d").getImageData(0,0,l,l),h=await createImageBitmap(q);return{imgFile:m,imgBitmap:h}}async function R(){if(!D)return alert("Please add prompt");if(!r||!v)return;a(1,_=!0),a(5,w=!1),L(),B=performance.now(),b();const{imgFile:t,imgBitmap:e}=await C(r),n=new FormData;n.append("prompt",D),n.append("image",t);const M=await fetch("https://sdb.pcuenca.net/i2i",{method:"POST",body:n});try{const m=JSON.parse(await M.text()),{images:q}=m;if(!q.length)return alert("All the results were flagged. Please try again with diffeerent sketch + prompt");const h=await Promise.all(q.map(async F=>{const A=new Image;return A.src=`data:image/png;base64, ${F}`,await new Promise((J,fe)=>{A.onload=()=>J(A)}),A}));a(1,_=!1),y&&clearInterval(y),a(5,w=!0);let g=0;p=performance.now(),k(h[g%h.length]),x=()=>{y&&clearInterval(y),p=performance.now(),g=g+1,k(h[g%h.length])},y=setInterval(()=>{g=g+1,p=performance.now(),k(h[g%h.length])},2500),z||N()}catch(m){console.error(m),alert("Error happened, queue might be full. Please try again in a bit :)")}}function N(){const t=document.createElement("div");t.className="drawing-board-control";const e=document.createElement("button");e.innerHTML="\u23EF",e.onclick=x,t.append(e);const n=document.querySelector(".drawing-board-controls");n&&(n.appendChild(t),z=!0,a(3,c.onclick=()=>{y&&clearInterval(y)},c))}function L(){const t=d.getContext("2d");a(4,d.width=r.width,d),a(4,d.height=r.height,d),t.drawImage(r,0,0)}le(async()=>{const{innerWidth:t}=window;l=Math.min(l,Math.floor(t*.75)),a(3,c.style.width=`${l}px`,c),a(3,c.style.height=`${l}px`,c),a(4,d.style.width=`${l}px`,d),a(4,d.style.height=`${l}px`,d),await ce(),r=new window.DrawingBoard.Board("board-container",{size:10,controls:["Color",{Size:{type:"dropdown"}},{DrawingMode:{filler:!1}}],droppable:!0,webStorage:!1,enlargeYourContainer:!0}).canvas,v=r.getContext("2d")});function P(t){Y[t?"unshift":"push"](()=>{d=t,a(4,d)})}function O(t){Y[t?"unshift":"push"](()=>{c=t,a(3,c)})}function T(){D=this.value,a(0,D)}function V(t){Y[t?"unshift":"push"](()=>{u=t,a(2,u)})}return[D,_,u,c,d,w,R,P,O,T,V]}class he extends ne{constructor(j){super(),se(this,j,ue,pe,re,{})}}export{he as default};