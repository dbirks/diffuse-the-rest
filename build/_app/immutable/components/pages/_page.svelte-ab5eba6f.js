import{S as ft,i as pt,s as ut,k as s,a as N,q as m,H as ht,l,m as i,h as n,c as R,r as g,n as a,I as qe,F as e,b as ye,J as pe,K as mt,L as gt,A as et,M as lt,o as wt,z as bt,N as vt,O as tt,p as at,u as _t,P as Fe}from"../../chunks/index-a207c28c.js";const{document:xe,window:nt}=vt;function ot(c){let p,r,y,S,V,d;return{c(){p=s("div"),r=s("p"),y=m("Loading\u2026"),S=N(),V=s("p"),d=m("\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592")},l(H){p=l(H,"DIV",{});var k=i(p);r=l(k,"P",{});var P=i(r);y=g(P,"Loading\u2026"),P.forEach(n),S=R(k),V=l(k,"P",{});var v=i(V);d=g(v,"\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592"),v.forEach(n),k.forEach(n)},m(H,k){ye(H,p,k),e(p,r),e(r,y),e(p,S),e(p,V),e(V,d)},d(H){H&&n(p)}}}function rt(c){let p,r,y,S,V,d,H,k,P,v,w,E,A,O,I,b,j,J,f,D,C,z,$,B,re,ee,W,Q,se,te,F,le;return{c(){p=s("div"),r=s("div"),y=s("p"),S=m("Strength:"),V=N(),d=s("span"),H=N(),k=s("div"),P=s("p"),v=m("Prompt:"),w=N(),E=s("span"),A=N(),O=s("div"),I=s("button"),b=m("diffuse \u{1FA84}"),J=N(),f=s("div"),D=s("label"),C=s("input"),z=m(`
						 upload img`),$=N(),B=s("p"),re=m("pro tip: upload img by dropping on the canvas"),ee=N(),W=s("div"),Q=s("p"),se=m("Images returned: "),te=m(c[2]),this.h()},l(L){p=l(L,"DIV",{});var x=i(p);r=l(x,"DIV",{class:!0});var ae=i(r);y=l(ae,"P",{class:!0});var X=i(y);S=g(X,"Strength:"),X.forEach(n),V=R(ae),d=l(ae,"SPAN",{class:!0,role:!0,contenteditable:!0,spellcheck:!0,dir:!0,maxlength:!0}),i(d).forEach(n),ae.forEach(n),H=R(x),k=l(x,"DIV",{class:!0});var ne=i(k);P=l(ne,"P",{class:!0});var ie=i(P);v=g(ie,"Prompt:"),ie.forEach(n),w=R(ne),E=l(ne,"SPAN",{class:!0,role:!0,contenteditable:!0,style:!0,spellcheck:!0,dir:!0,maxlength:!0}),i(E).forEach(n),ne.forEach(n),A=R(x),O=l(x,"DIV",{class:!0});var Z=i(O);I=l(Z,"BUTTON",{class:!0});var ce=i(I);b=g(ce,"diffuse \u{1FA84}"),ce.forEach(n),Z.forEach(n),J=R(x),f=l(x,"DIV",{class:!0});var t=i(f);D=l(t,"LABEL",{class:!0});var o=i(D);C=l(o,"INPUT",{accept:!0,style:!0,type:!0}),z=g(o,`
						 upload img`),o.forEach(n),$=R(t),B=l(t,"P",{class:!0});var u=i(B);re=g(u,"pro tip: upload img by dropping on the canvas"),u.forEach(n),t.forEach(n),ee=R(x),W=l(x,"DIV",{});var h=i(W);Q=l(h,"P",{class:!0});var _=i(Q);se=g(_,"Images returned: "),te=g(_,c[2]),_.forEach(n),h.forEach(n),x.forEach(n),this.h()},h(){a(y,"class","font-bold align-middle py-2"),a(d,"class","overflow-auto resize-y py-2 px-3 min-h-[42px] max-h-[500px] !w-[181px] whitespace-pre-wrap inline-block border border-gray-200 shadow-inner outline-none svelte-1wfa7x9"),a(d,"role","textbox"),a(d,"contenteditable",""),a(d,"spellcheck","false"),a(d,"dir","auto"),a(d,"maxlength","200"),c[1]===void 0&&tt(()=>c[16].call(d)),a(r,"class","flex gap-x-2 mt-3 items-start justify-center align-vertical"),a(P,"class","font-bold align-middle py-2"),a(E,"class","overflow-auto resize-y py-2 px-3 min-h-[42px] max-h-[500px] !w-[181px] whitespace-pre-wrap inline-block border border-gray-200 shadow-inner outline-none svelte-1wfa7x9"),a(E,"role","textbox"),a(E,"contenteditable",""),at(E,"--placeholder","'Add prompt'"),a(E,"spellcheck","false"),a(E,"dir","auto"),a(E,"maxlength","1000"),c[0]===void 0&&tt(()=>c[17].call(E)),a(k,"class","flex gap-x-2 mt-3 items-start justify-center"),a(I,"class","bg-green-700 hover:bg-green-800 text-white font-bold py-[0.555rem] px-4 rounded-xl"),a(O,"class",j="flex gap-x-2 mt-3 items-start justify-center "+(c[3]?"animate-pulse":"")),a(C,"accept","image/*"),at(C,"display","none"),a(C,"type","file"),a(D,"class","inline border py-2 px-3 bg-slate-200 cursor-pointer"),a(B,"class","hidden desktop:inline mt-2 opacity-50"),a(f,"class","mt-4"),a(Q,"class","my-4")},m(L,x){ye(L,p,x),e(p,r),e(r,y),e(y,S),e(r,V),e(r,d),c[1]!==void 0&&(d.textContent=c[1]),e(p,H),e(p,k),e(k,P),e(P,v),e(k,w),e(k,E),c[0]!==void 0&&(E.textContent=c[0]),e(p,A),e(p,O),e(O,I),e(I,b),e(p,J),e(p,f),e(f,D),e(D,C),c[18](C),e(D,z),e(f,$),e(f,B),e(B,re),e(p,ee),e(p,W),e(W,Q),e(Q,se),e(Q,te),F||(le=[pe(d,"input",c[16]),pe(d,"keydown",c[13]),pe(E,"input",c[17]),pe(E,"keydown",c[13]),pe(I,"click",c[9]),pe(C,"change",c[10])],F=!0)},p(L,x){x[0]&2&&L[1]!==d.textContent&&(d.textContent=L[1]),x[0]&1&&L[0]!==E.textContent&&(E.textContent=L[0]),x[0]&8&&j!==(j="flex gap-x-2 mt-3 items-start justify-center "+(L[3]?"animate-pulse":""))&&a(O,"class",j),x[0]&4&&_t(te,L[2])},d(L){L&&n(p),c[18](null),F=!1,lt(le)}}}function yt(c){let p,r,y,S,V,d,H,k,P,v,w,E,A,O,I,b,j,J,f,D,C,z,$,B,re,ee,W,Q,se,te,F,le,L,x,ae,X,ne,ie,Z,ce,t,o,u,h,_,q,M,ue,Y,we,be,de,Ee,Ae,Ie,Le,Te,fe,je,he,Be,Me,me,Ne,Se,Re,He,G=!c[4]&&ot(),U=c[4]&&rt(c);return{c(){p=s("link"),r=s("script"),S=s("script"),d=s("script"),k=N(),P=s("div"),v=s("canvas"),E=N(),A=s("div"),G&&G.c(),O=N(),I=s("div"),b=N(),U&&U.c(),J=N(),f=s("article"),D=s("div"),C=m(`Hi Rachel \u{1F44B}\u{1F642}
`),z=s("p"),$=m("Stable Diffusion model by "),B=s("a"),re=m("CompVis"),ee=m(" and "),W=s("a"),Q=m("Stability AI"),se=m(" - Demo by \u{1F917} Hugging Face"),te=N(),F=s("p"),le=m("Powered by "),L=s("a"),x=m("\u{1F917} Diffusers: State-of-the-art diffusion models for image and audio generation in PyTorch"),ae=m(". Based on "),X=s("a"),ne=m("notebook by @psuraj28"),ie=N(),Z=s("p"),ce=m("Check out "),t=s("a"),o=m("Stable Diffusion Gradio demo"),u=N(),h=s("h3"),_=m("LICENSE"),q=N(),M=s("p"),ue=m("The model is licensed with a "),Y=s("a"),we=m("CreativeML Open RAIL-M"),be=m(" license. The authors claim no rights on the outputs you generate, you are free to use them and are accountable for their use which must not go against the provisions set in this license. The license forbids you from sharing any content that violates any laws, produce any harm to a person, disseminate any personal information that would be meant for harm, spread misinformation and target vulnerable groups. For the full list of restrictions please "),de=s("a"),Ee=m("read the license"),Ae=N(),Ie=s("h3"),Le=m("Biases and content acknowledgment"),Te=N(),fe=s("p"),je=m("Despite how impressive being able to turn text into image is, beware to the fact that this model may output content that reinforces or exacerbates societal biases, as well as realistic faces, pornography and violence. The model was trained on the "),he=s("a"),Be=m("LAION-5B dataset"),Me=m(", which scraped non-curated image-text-pairs from the internet (the exception being the removal of illegal content) and is meant for research purposes. You can read more in the "),me=s("a"),Ne=m("model card"),this.h()},l(T){const K=ht('[data-svelte="svelte-bw39ln"]',xe.head);p=l(K,"LINK",{href:!0,rel:!0}),r=l(K,"SCRIPT",{src:!0});var it=i(r);it.forEach(n),S=l(K,"SCRIPT",{src:!0});var ct=i(S);ct.forEach(n),d=l(K,"SCRIPT",{src:!0});var dt=i(d);dt.forEach(n),K.forEach(n),k=R(T),P=l(T,"DIV",{class:!0});var Pe=i(P);v=l(Pe,"CANVAS",{class:!0}),i(v).forEach(n),E=R(Pe),A=l(Pe,"DIV",{class:!0});var ve=i(A);G&&G.l(ve),O=R(ve),I=l(ve,"DIV",{id:!0}),i(I).forEach(n),b=R(ve),U&&U.l(ve),ve.forEach(n),Pe.forEach(n),J=R(T),f=l(T,"ARTICLE",{class:!0});var oe=i(f);D=l(oe,"DIV",{class:!0});var ge=i(D);C=g(ge,`Hi Rachel \u{1F44B}\u{1F642}
`),z=l(ge,"P",{});var _e=i(z);$=g(_e,"Stable Diffusion model by "),B=l(_e,"A",{href:!0,rel:!0});var Oe=i(B);re=g(Oe,"CompVis"),Oe.forEach(n),ee=g(_e," and "),W=l(_e,"A",{href:!0,rel:!0});var ze=i(W);Q=g(ze,"Stability AI"),ze.forEach(n),se=g(_e," - Demo by \u{1F917} Hugging Face"),_e.forEach(n),te=R(ge),F=l(ge,"P",{});var De=i(F);le=g(De,"Powered by "),L=l(De,"A",{href:!0,rel:!0});var We=i(L);x=g(We,"\u{1F917} Diffusers: State-of-the-art diffusion models for image and audio generation in PyTorch"),We.forEach(n),ae=g(De,". Based on "),X=l(De,"A",{href:!0,rel:!0});var Ge=i(X);ne=g(Ge,"notebook by @psuraj28"),Ge.forEach(n),De.forEach(n),ie=R(ge),Z=l(ge,"P",{});var Ve=i(Z);ce=g(Ve,"Check out "),t=l(Ve,"A",{href:!0,rel:!0});var Ke=i(t);o=g(Ke,"Stable Diffusion Gradio demo"),Ke.forEach(n),Ve.forEach(n),ge.forEach(n),u=R(oe),h=l(oe,"H3",{});var Ye=i(h);_=g(Ye,"LICENSE"),Ye.forEach(n),q=R(oe),M=l(oe,"P",{});var ke=i(M);ue=g(ke,"The model is licensed with a "),Y=l(ke,"A",{href:!0,rel:!0});var Je=i(Y);we=g(Je,"CreativeML Open RAIL-M"),Je.forEach(n),be=g(ke," license. The authors claim no rights on the outputs you generate, you are free to use them and are accountable for their use which must not go against the provisions set in this license. The license forbids you from sharing any content that violates any laws, produce any harm to a person, disseminate any personal information that would be meant for harm, spread misinformation and target vulnerable groups. For the full list of restrictions please "),de=l(ke,"A",{href:!0,rel:!0});var Qe=i(de);Ee=g(Qe,"read the license"),Qe.forEach(n),ke.forEach(n),Ae=R(oe),Ie=l(oe,"H3",{});var Xe=i(Ie);Le=g(Xe,"Biases and content acknowledgment"),Xe.forEach(n),Te=R(oe),fe=l(oe,"P",{});var Ce=i(fe);je=g(Ce,"Despite how impressive being able to turn text into image is, beware to the fact that this model may output content that reinforces or exacerbates societal biases, as well as realistic faces, pornography and violence. The model was trained on the "),he=l(Ce,"A",{href:!0,rel:!0});var Ze=i(he);Be=g(Ze,"LAION-5B dataset"),Ze.forEach(n),Me=g(Ce,", which scraped non-curated image-text-pairs from the internet (the exception being the removal of illegal content) and is meant for research purposes. You can read more in the "),me=l(Ce,"A",{href:!0,rel:!0});var $e=i(me);Ne=g($e,"model card"),$e.forEach(n),Ce.forEach(n),oe.forEach(n),this.h()},h(){a(p,"href","https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.css"),a(p,"rel","stylesheet"),qe(r.src,y="https://code.jquery.com/jquery-1.12.4.min.js")||a(r,"src",y),qe(S.src,V="https://cdnjs.cloudflare.com/ajax/libs/drawingboard.js/0.4.2/drawingboard.min.js")||a(S,"src",V),qe(d.src,H="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.contentWindow.min.js")||a(d,"src",H),a(v,"class",w="border-[1.2px] desktop:mt-[34px] "+(c[8]?"":"hidden")),a(I,"id","board-container"),a(A,"class",j="flex flex-col items-center "+(c[3]?"pointer-events-none":"")),a(P,"class","flex flex-wrap gap-x-4 gap-y-2 justify-center my-8"),a(B,"href","https://huggingface.co/CompVis"),a(B,"rel","nofollow"),a(W,"href","https://huggingface.co/stabilityai"),a(W,"rel","nofollow"),a(L,"href","https://github.com/huggingface/diffusers"),a(L,"rel","nofollow"),a(X,"href","https://twitter.com/psuraj28/status/1562039265126670339"),a(X,"rel","nofollow"),a(t,"href","https://huggingface.co/spaces/stabilityai/stable-diffusion"),a(t,"rel","nofollow"),a(D,"class","text-center"),a(Y,"href","https://huggingface.co/spaces/CompVis/stable-diffusion-license"),a(Y,"rel","nofollow"),a(de,"href","https://huggingface.co/spaces/CompVis/stable-diffusion-license"),a(de,"rel","nofollow"),a(he,"href","https://laion.ai/blog/laion-5b/"),a(he,"rel","nofollow"),a(me,"href","https://huggingface.co/CompVis/stable-diffusion-v1-4"),a(me,"rel","nofollow"),a(f,"class",Se="prose-sm px-4 md:px-12 lg:px-56 mb-8 "+(c[4]?"":"hidden"))},m(T,K){e(xe.head,p),e(xe.head,r),e(xe.head,S),e(xe.head,d),ye(T,k,K),ye(T,P,K),e(P,v),c[14](v),e(P,E),e(P,A),G&&G.m(A,null),e(A,O),e(A,I),c[15](I),e(A,b),U&&U.m(A,null),ye(T,J,K),ye(T,f,K),e(f,D),e(D,C),e(D,z),e(z,$),e(z,B),e(B,re),e(z,ee),e(z,W),e(W,Q),e(z,se),e(D,te),e(D,F),e(F,le),e(F,L),e(L,x),e(F,ae),e(F,X),e(X,ne),e(D,ie),e(D,Z),e(Z,ce),e(Z,t),e(t,o),e(f,u),e(f,h),e(h,_),e(f,q),e(f,M),e(M,ue),e(M,Y),e(Y,we),e(M,be),e(M,de),e(de,Ee),e(f,Ae),e(f,Ie),e(Ie,Le),e(f,Te),e(f,fe),e(fe,je),e(fe,he),e(he,Be),e(fe,Me),e(fe,me),e(me,Ne),Re||(He=[pe(nt,"drop",mt(gt(c[11]))),pe(nt,"paste",c[12])],Re=!0)},p(T,K){K[0]&256&&w!==(w="border-[1.2px] desktop:mt-[34px] "+(T[8]?"":"hidden"))&&a(v,"class",w),T[4]?G&&(G.d(1),G=null):G||(G=ot(),G.c(),G.m(A,O)),T[4]?U?U.p(T,K):(U=rt(T),U.c(),U.m(A,null)):U&&(U.d(1),U=null),K[0]&8&&j!==(j="flex flex-col items-center "+(T[3]?"pointer-events-none":""))&&a(A,"class",j),K[0]&16&&Se!==(Se="prose-sm px-4 md:px-12 lg:px-56 mb-8 "+(T[4]?"":"hidden"))&&a(f,"class",Se)},i:et,o:et,d(T){n(p),n(r),n(S),n(d),T&&n(k),T&&n(P),c[14](null),G&&G.d(),c[15](null),U&&U.d(),T&&n(J),T&&n(f),Re=!1,lt(He)}}}const Ue=500,st=3e3;function Et(){window.createImageBitmap=async function(c){return new Promise((p,r)=>{const y=document.createElement("canvas"),S=y.getContext("2d");y.width=c.width,y.height=c.height,S.putImageData(c,0,0);const V=y.toDataURL(),d=document.createElement("img");d.addEventListener("load",()=>{p(d)}),d.src=V})}}function It(){const c=document.querySelectorAll("a");for(const p of c)p.target="_blank"}function Dt(c,p,r){let y="",S="0.85",V="0",d=!1,H=!1,k=!1,P,v,w,E,A,O,I,b=400,j,J,f,D=!1,C=[],z;async function $(){if(!w)return;const t=w.createImageData(v.width,v.height),o=t.data;for(let _=0,q=o.length;_<q;_+=4)o[_]=40*Math.random()*7,o[_+1]=40*Math.random()*7,o[_+2]=40*Math.random()*7,o[_+3]=10;const u=await createImageBitmap(t),h=performance.now()-E;w.globalAlpha=Math.min(h,st)/st,w.drawImage(u,0,0,b,b),d&&window.requestAnimationFrame($)}function B(t){if(!w)return;const o=performance.now()-A;w.globalAlpha=Math.min(o,Ue)/Ue,w.drawImage(t,0,0,b,b),o<Ue&&window.requestAnimationFrame(()=>B(t))}async function re(t){const o=t.toDataURL("png"),h=await(await fetch(o)).blob(),_=new File([h],"canvas shot.png",{type:"image/png"}),q=t.getContext("2d").getImageData(0,0,b,b),M=await createImageBitmap(q);return{imgFile:_,imgBitmap:M}}async function ee(){if(!y)return alert("Please add prompt");if(!v||!w)return;I&&clearInterval(I),r(3,d=!0),r(8,D=!1),k=!1,te(),E=performance.now(),$();const{imgFile:t,imgBitmap:o}=await re(v),u=new FormData;u.append("prompt",y),u.append("strength",S),u.append("image",t);try{const h=await fetch("https://sdb.pcuenca.net/i2i",{method:"POST",body:u}),_=JSON.parse(await h.text()),{images:q}=_;if(r(2,V=q.length.toString()),!q.length)return alert("All the results were flagged. Please try again with diffeerent sketch + prompt");C=await Promise.all(q.map(async ue=>{const Y=new Image;return Y.src=`data:image/png;base64, ${ue}`,await new Promise((we,be)=>{Y.onload=()=>we(Y)}),Y})),C.push(o),z={sketch:t,generations:await Promise.all(q.map(async ue=>{const Y=`data:image/jpeg;base64, ${ue}`,be=await(await fetch(Y)).blob(),Ee=`diffuse-the-rest-${Date.now()%200}.jpeg`;return new File([be],Ee,{type:"image/jpeg"})}))},r(8,D=!0);let M=0;A=performance.now(),B(C[M%C.length]),O=()=>{I&&clearInterval(I),A=performance.now(),M=M+1,B(C[M%C.length])},I=setInterval(()=>{M=M+1,A=performance.now(),B(C[M%C.length])},2500),H||W(),k=!0}catch(h){console.error(h),alert("Error happened, queue might be full. Please try again in a bit :)")}finally{r(3,d=!1)}}function W(){const t=document.createElement("div");t.className="drawing-board-control";const o=document.createElement("button");o.innerHTML="\u23EF",o.onclick=O,t.append(o);const u=document.querySelector(".drawing-board-controls");u&&C.length>1&&(u.appendChild(t),H=!0,r(5,j.onclick=()=>{I&&clearInterval(I)},j))}function Q(){const t=document.createElement("div");t.className="drawing-board-control";const o=document.createElement("button");o.innerHTML="\u{1F9F9}",o.onclick=()=>{w==null||w.clearRect(0,0,b,b),C=[],r(8,D=!1)},t.append(o);const u=document.querySelector(".drawing-board-controls");u&&u.appendChild(t)}function se(){const t=document.createElement("div");t.className="drawing-board-control";const o=document.createElement("button");o.innerHTML="\u2B07\uFE0F",o.onclick=()=>{if(!v)return;const h=document.createElement("a"),_=Date.now()%200;h.download=`diffuse-the-rest-${_}.png`,h.href=v.toDataURL(),h.click()},t.append(o);const u=document.querySelector(".drawing-board-controls");u&&u.appendChild(t)}function te(){const t=f.getContext("2d");r(7,f.width=v.width,f),r(7,f.height=v.height,f),t.drawImage(v,0,0)}async function F(t){I&&clearInterval(I);const o=new Image;o.src=URL.createObjectURL(t),await new Promise((_,q)=>{o.onload=()=>_(o)});const{width:u,height:h}=o;if(u==h)w==null||w.drawImage(o,0,0,u,h,0,0,b,b);else if(u>h){const _=Math.floor(b*h/u),q=Math.floor((b-_)/2);w==null||w.drawImage(o,0,0,u,h,0,q,b,_)}else{const _=Math.floor(b*u/h),q=Math.floor((b-_)/2);w==null||w.drawImage(o,0,0,u,h,q,0,_,b)}}function le(){var o;const t=(o=J.files)==null?void 0:o[0];t&&F(t)}function L(t){var h;if(!((h=t.dataTransfer)!=null&&h.files))return;t.preventDefault();const u=Array.from(t.dataTransfer.files)[0];F(u)}function x(t){if(!t.clipboardData)return;const o=Array.from(t.clipboardData.files);if(o.length===0)return;t.preventDefault();const u=o[0];F(u)}function ae(t){if(d)return t.preventDefault();t.code==="Enter"&&(t.preventDefault(),ee())}wt(async()=>{typeof createImageBitmap>"u"&&Et();const{innerWidth:t}=window;b=Math.min(b,Math.floor(t*.75)),r(5,j.style.width=`${b}px`,j),r(5,j.style.height=`${b}px`,j),r(7,f.style.width=`${b}px`,f),r(7,f.style.height=`${b}px`,f),await bt(),P=new window.DrawingBoard.Board("board-container",{size:10,controls:["Color",{Size:{type:"dropdown"}},{DrawingMode:{filler:!1}}],webStorage:!1,enlargeYourContainer:!0}),r(4,v=P.canvas),w=v.getContext("2d"),r(4,v.ondragover=function(o){return o.preventDefault(),!1},v),Q(),se(),It()});function X(t){Fe[t?"unshift":"push"](()=>{f=t,r(7,f)})}function ne(t){Fe[t?"unshift":"push"](()=>{j=t,r(5,j)})}function ie(){S=this.textContent,r(1,S)}function Z(){y=this.textContent,r(0,y)}function ce(t){Fe[t?"unshift":"push"](()=>{J=t,r(6,J)})}return[y,S,V,d,v,j,J,f,D,ee,le,L,x,ae,X,ne,ie,Z,ce]}class Ct extends ft{constructor(p){super(),pt(this,p,Dt,yt,ut,{},null,[-1,-1])}}export{Ct as default};