import{S as K,i as $,s as G,k as x,a as A,q as Q,H as W,l as j,m as E,h as c,c as B,r as X,n as o,I as O,p as R,F as h,b as U,J as V,K as z,A as H,L as Y,o as Z,M as ee}from"../../chunks/index-3def1fb1.js";const{document:F}=ee;function te(_){let m,d,b,i,M,f,a,u,p,S,n,l,D,y,N,q,s,e,g;return{c(){m=x("link"),d=x("script"),i=x("script"),f=A(),a=x("div"),u=x("div"),p=x("div"),S=A(),n=x("div"),l=x("input"),D=A(),y=x("button"),N=Q("diffuse the f rest"),this.h()},l(r){const t=W('[data-svelte="svelte-18yikln"]',F.head);m=j(t,"LINK",{href:!0,rel:!0}),d=j(t,"SCRIPT",{src:!0});var w=E(d);w.forEach(c),i=j(t,"SCRIPT",{src:!0});var v=E(i);v.forEach(c),t.forEach(c),f=B(r),a=j(r,"DIV",{class:!0});var T=E(a);u=j(T,"DIV",{class:!0});var I=E(u);p=j(I,"DIV",{id:!0,style:!0}),E(p).forEach(c),S=B(I),n=j(I,"DIV",{class:!0});var C=E(n);l=j(C,"INPUT",{type:!0,class:!0,placeholder:!0}),D=B(C),y=j(C,"BUTTON",{class:!0});var k=E(y);N=X(k,"diffuse the f rest"),k.forEach(c),C.forEach(c),I.forEach(c),T.forEach(c),this.h()},h(){o(m,"href","https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.css"),o(m,"rel","stylesheet"),O(d.src,b="https://code.jquery.com/jquery-1.12.4.min.js")||o(d,"src",b),O(i.src,M="https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.min.js")||o(i,"src",M),o(p,"id","board-container"),R(p,"width","512px"),R(p,"height","545px"),o(l,"type","text"),o(l,"class","border-2 "),o(l,"placeholder","Add prompt"),o(y,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"),o(n,"class",q="flex gap-x-2 mt-4 items-center justify-center "+(_[1]?"animate-pulse":"")),o(u,"class",s=_[1]?"pointer-events-none":""),o(a,"class","flex flex-wrap gap-x-8 justify-center mt-16")},m(r,t){h(F.head,m),h(F.head,d),h(F.head,i),U(r,f,t),U(r,a,t),h(a,u),h(u,p),h(u,S),h(u,n),h(n,l),V(l,_[0]),h(n,D),h(n,y),h(y,N),e||(g=[z(l,"input",_[3]),z(y,"click",_[2])],e=!0)},p(r,[t]){t&1&&l.value!==r[0]&&V(l,r[0]),t&2&&q!==(q="flex gap-x-2 mt-4 items-center justify-center "+(r[1]?"animate-pulse":""))&&o(n,"class",q),t&2&&s!==(s=r[1]?"pointer-events-none":"")&&o(u,"class",s)},i:H,o:H,d(r){c(m),c(d),c(i),r&&c(f),r&&c(a),e=!1,Y(g)}}}const L=500,J=3e3,P=512;async function ae(_){const m=_.toDataURL("png"),b=await(await fetch(m)).blob();return new File([b],"canvas shot.png",{type:"image/png"})}function ne(_,m,d){let b="",i=!1,M=!1,f,a,u,p,S,n;async function l(){if(!a)return;const s=a.createImageData(f.width,f.height),e=s.data;for(let t=0,w=e.length;t<w;t+=4)e[t]=40*Math.random()*7,e[t+1]=40*Math.random()*7,e[t+2]=40*Math.random()*7,e[t+3]=255;const g=await createImageBitmap(s),r=performance.now()-u;a.globalAlpha=Math.min(r,J)/J,a.drawImage(g,0,0,P,P),i&&window.requestAnimationFrame(l)}function D(s){if(!a)return;const e=performance.now()-p;a.globalAlpha=Math.min(e,L)/L,a.drawImage(s,0,0,P,P),e<L&&window.requestAnimationFrame(()=>D(s))}async function y(){if(!b)return alert("Please add prompt");if(!f||!a)return;d(1,i=!0),u=performance.now(),l();const s=await ae(f),e=new FormData;e.append("prompt","owl"),e.append("image",s);const g=await fetch("https://sdb.pcuenca.net/i2i",{method:"POST",body:e}),r=JSON.parse(await g.text()),{images:t}=r,w=await Promise.all(t.map(async T=>{const I=new Image;return I.src=`data:image/png;base64, ${T}`,await new Promise((C,k)=>{I.onload=()=>C(I)}),I}));d(1,i=!1),n&&clearInterval(n);let v=0;p=performance.now(),D(w[v%w.length]),S=()=>{n&&clearInterval(n),p=performance.now(),v=v+1,D(w[v%w.length])},n=setInterval(()=>{v=v+1,p=performance.now(),D(w[v%w.length])},2500),M||N()}function N(){const s=document.createElement("div");s.className="drawing-board-control";const e=document.createElement("button");e.innerHTML="\u23EF",e.onclick=S,s.append(e);const g=document.querySelector(".drawing-board-controls");g&&(g.appendChild(s),M=!0,g.onclick=()=>{n&&clearInterval(n)})}Z(()=>{f=new window.DrawingBoard.Board("board-container",{size:10,controls:["Color",{Size:{type:"dropdown"}},{DrawingMode:{filler:!1}},"Navigation"]}).canvas,a=f.getContext("2d")});function q(){b=this.value,d(0,b)}return[b,i,y,q]}class re extends K{constructor(m){super(),$(this,m,ne,te,G,{})}}export{re as default};
