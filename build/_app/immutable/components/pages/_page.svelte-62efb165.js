import{S as fe,i as me,s as he,k as f,a as V,q as ae,H as ge,l as m,m as _,h as c,c as z,r as ne,n as o,I as se,p as we,F as s,b as le,J as ce,K as Q,L as be,M as ve,A as de,N as _e,o as ye,z as Ie,O as Ee,P as re}from"../../chunks/index-c0a82f06.js";const{document:X,window:pe}=Ee;function De(p){let k,n,N,y,H,j,w,l,I,E,O,b,a,u,A,r,v,d,L,D,W,U,J,M,K,R,q,P,x,Y,F,G,Z;return{c(){k=f("link"),n=f("script"),y=f("script"),j=f("script"),l=V(),I=f("div"),E=f("canvas"),b=V(),a=f("div"),u=f("div"),A=V(),r=f("div"),v=f("div"),d=f("input"),L=V(),D=f("button"),W=ae("diffuse the f rest"),J=V(),M=f("p"),K=ae("pro tip: upload img by pasting OR dropping on the canvas"),R=V(),q=f("div"),P=f("label"),x=f("input"),Y=ae(`
					upload img`),this.h()},l(e){const t=ge('[data-svelte="svelte-bw39ln"]',X.head);k=m(t,"LINK",{href:!0,rel:!0}),n=m(t,"SCRIPT",{src:!0});var i=_(n);i.forEach(c),y=m(t,"SCRIPT",{src:!0});var C=_(y);C.forEach(c),j=m(t,"SCRIPT",{src:!0});var g=_(j);g.forEach(c),t.forEach(c),l=z(e),I=m(e,"DIV",{class:!0});var S=_(I);E=m(S,"CANVAS",{class:!0}),_(E).forEach(c),b=z(S),a=m(S,"DIV",{class:!0});var h=_(a);u=m(h,"DIV",{id:!0}),_(u).forEach(c),A=z(h),r=m(h,"DIV",{});var B=_(r);v=m(B,"DIV",{class:!0});var T=_(v);d=m(T,"INPUT",{type:!0,class:!0,placeholder:!0}),L=z(T),D=m(T,"BUTTON",{class:!0});var $=_(D);W=ne($,"diffuse the f rest"),$.forEach(c),T.forEach(c),J=z(B),M=m(B,"P",{class:!0});var ee=_(M);K=ne(ee,"pro tip: upload img by pasting OR dropping on the canvas"),ee.forEach(c),R=z(B),q=m(B,"DIV",{class:!0});var ie=_(q);P=m(ie,"LABEL",{class:!0});var te=_(P);x=m(te,"INPUT",{accept:!0,style:!0,type:!0}),Y=ne(te,`
					upload img`),te.forEach(c),ie.forEach(c),B.forEach(c),h.forEach(c),S.forEach(c),this.h()},h(){o(k,"href","https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.css"),o(k,"rel","stylesheet"),se(n.src,N="https://code.jquery.com/jquery-1.12.4.min.js")||o(n,"src",N),se(y.src,H="https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.min.js")||o(y,"src",H),se(j.src,w="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.contentWindow.min.js")||o(j,"src",w),o(E,"class",O="border-[1.2px] desktop:mt-[34px] "+(p[5]?"":"hidden")),o(u,"id","board-container"),o(d,"type","text"),o(d,"class","border-2 py-1"),o(d,"placeholder","Add prompt"),o(D,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4"),o(v,"class",U="flex gap-x-2 mt-3 items-center justify-center "+(p[1]?"animate-pulse":"")),o(M,"class","no-hover:hidden mt-2 opacity-50"),o(x,"accept","image/*"),we(x,"display","none"),o(x,"type","file"),o(P,"class","with-hover:hidden border py-1 px-1.5 bg-slate-200 cursor-pointer"),o(q,"class","mt-2"),o(a,"class",F="flex flex-col items-center "+(p[1]?"pointer-events-none":"")),o(I,"class","flex flex-wrap gap-x-4 gap-y-2 justify-center my-8")},m(e,t){s(X.head,k),s(X.head,n),s(X.head,y),s(X.head,j),le(e,l,t),le(e,I,t),s(I,E),p[10](E),s(I,b),s(I,a),s(a,u),p[11](u),s(a,A),s(a,r),s(r,v),s(v,d),ce(d,p[0]),s(v,L),s(v,D),s(D,W),s(r,J),s(r,M),s(M,K),s(r,R),s(r,q),s(q,P),s(P,x),p[13](x),s(P,Y),G||(Z=[Q(pe,"drop",be(ve(p[8]))),Q(pe,"paste",p[9]),Q(d,"input",p[12]),Q(D,"click",p[6]),Q(x,"change",p[7])],G=!0)},p(e,[t]){t&32&&O!==(O="border-[1.2px] desktop:mt-[34px] "+(e[5]?"":"hidden"))&&o(E,"class",O),t&1&&d.value!==e[0]&&ce(d,e[0]),t&2&&U!==(U="flex gap-x-2 mt-3 items-center justify-center "+(e[1]?"animate-pulse":""))&&o(v,"class",U),t&2&&F!==(F="flex flex-col items-center "+(e[1]?"pointer-events-none":""))&&o(a,"class",F)},i:de,o:de,d(e){c(k),c(n),c(y),c(j),e&&c(l),e&&c(I),p[10](null),p[11](null),p[13](null),G=!1,_e(Z)}}}const oe=500,ue=3e3;function Ce(p,k,n){let N="",y=!1,H=!1,j,w,l,I,E,O,b,a=400,u,A,r,v=!1,d=[];async function L(){if(!l)return;const e=l.createImageData(w.width,w.height),t=e.data;for(let g=0,S=t.length;g<S;g+=4)t[g]=40*Math.random()*7,t[g+1]=40*Math.random()*7,t[g+2]=40*Math.random()*7,t[g+3]=255;const i=await createImageBitmap(e),C=performance.now()-I;l.globalAlpha=Math.min(C,ue)/ue,l.drawImage(i,0,0,a,a),y&&window.requestAnimationFrame(L)}function D(e){if(!l)return;const t=performance.now()-E;l.globalAlpha=Math.min(t,oe)/oe,l.drawImage(e,0,0,a,a),t<oe&&window.requestAnimationFrame(()=>D(e))}async function W(e){const t=e.toDataURL("png"),C=await(await fetch(t)).blob(),g=new File([C],"canvas shot.png",{type:"image/png"}),S=e.getContext("2d").getImageData(0,0,a,a),h=await createImageBitmap(S);return{imgFile:g,imgBitmap:h}}async function U(){try{if(!N)return alert("Please add prompt");if(!w||!l)return;n(1,y=!0),n(5,v=!1),K(),I=performance.now(),L();const{imgFile:e,imgBitmap:t}=await W(w),i=new FormData;i.append("prompt",N),i.append("strength","0.85"),i.append("image",e);const C=await fetch("https://sdb.pcuenca.net/i2i",{method:"POST",body:i}),g=JSON.parse(await C.text()),{images:S}=g;if(!S.length)return alert("All the results were flagged. Please try again with diffeerent sketch + prompt");d=await Promise.all(S.map(async B=>{const T=new Image;return T.src=`data:image/png;base64, ${B}`,await new Promise(($,ee)=>{T.onload=()=>$(T)}),T})),n(1,y=!1),b&&clearInterval(b),n(5,v=!0);let h=0;E=performance.now(),D(d[h%d.length]),O=()=>{b&&clearInterval(b),E=performance.now(),h=h+1,D(d[h%d.length])},b=setInterval(()=>{h=h+1,E=performance.now(),D(d[h%d.length])},2500),!H&&d.length>1&&J()}catch(e){console.error(e),alert("Error happened, queue might be full. Please try again in a bit :)")}}function J(){const e=document.createElement("div");e.className="drawing-board-control";const t=document.createElement("button");t.innerHTML="\u23EF",t.onclick=O,e.append(t);const i=document.querySelector(".drawing-board-controls");i&&(i.appendChild(e),H=!0,n(2,u.onclick=()=>{b&&clearInterval(b)},u))}function M(){const e=document.createElement("div");e.className="drawing-board-control";const t=document.createElement("button");t.innerHTML="\u{1F9F9}",t.onclick=()=>{l==null||l.clearRect(0,0,a,a)},e.append(t);const i=document.querySelector(".drawing-board-controls");i&&i.appendChild(e)}function K(){const e=r.getContext("2d");n(4,r.width=w.width,r),n(4,r.height=w.height,r),e.drawImage(w,0,0)}async function R(e){b&&clearInterval(b);const t=new Image;t.src=URL.createObjectURL(e),await new Promise((g,S)=>{t.onload=()=>g(t)});const{width:i,height:C}=t;l==null||l.drawImage(t,0,0,i,C,0,0,a,a)}function q(){var t;const e=(t=A.files)==null?void 0:t[0];e&&R(e)}function P(e){var C;if(!((C=e.dataTransfer)!=null&&C.files))return;e.preventDefault();const i=Array.from(e.dataTransfer.files)[0];R(i)}function x(e){if(!e.clipboardData)return;const t=Array.from(e.clipboardData.files);if(t.length===0)return;e.preventDefault();const i=t[0];R(i)}ye(async()=>{console.log("ONMOUNT svelte");const{innerWidth:e}=window;a=Math.min(a,Math.floor(e*.75)),n(2,u.style.width=`${a}px`,u),n(2,u.style.height=`${a}px`,u),n(4,r.style.width=`${a}px`,r),n(4,r.style.height=`${a}px`,r),await Ie(),j=new window.DrawingBoard.Board("board-container",{size:10,controls:["Color",{Size:{type:"dropdown"}},{DrawingMode:{filler:!1}}],webStorage:!1,enlargeYourContainer:!0}),w=j.canvas,l=w.getContext("2d"),w.ondragover=function(t){return t.preventDefault(),!1},M()});function Y(e){re[e?"unshift":"push"](()=>{r=e,n(4,r)})}function F(e){re[e?"unshift":"push"](()=>{u=e,n(2,u)})}function G(){N=this.value,n(0,N)}function Z(e){re[e?"unshift":"push"](()=>{A=e,n(3,A)})}return[N,y,u,A,r,v,U,q,P,x,Y,F,G,Z]}class je extends fe{constructor(k){super(),me(this,k,Ce,De,he,{})}}export{je as default};
