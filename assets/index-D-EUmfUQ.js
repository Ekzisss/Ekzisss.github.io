import{u as F,a as q,c as S,h as R,b as a,j as e,r as v,R as u,m as d,i as B,g as G,d as K,A as w,e as V,f as _,T as X,k as H,l as U,n as Y,o as J,P as Q}from"./vendor-CL-UjC3s.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const i={background:"#272727",color:"#f5f5f5",color2:"#a1a1a1",primary:"#3a3a3a",primary2:"#1f1f1f",primary3:"#1a1a1a",accent:"#FFCC70",gradient:"background-color: #4158D0;background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);",onlyGradient:"linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",gradientText:"color: transparent;background-clip: text;background-color: #4158D0;background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);",darkGradientText:"color: transparent;background-clip: text;background-color: #4158D0;background-image: linear-gradient(180deg, rgba(227,227,227,1) 40%, rgba(40,40,40,1) 100%);"},j=F.withTypes(),y=q.withTypes(),E=S({name:"hoverState",initialState:{value:!1},reducers:{setFalse:t=>{t.value=!1},setTrue:t=>{t.value=!0}}}),{setFalse:p,setTrue:x}=E.actions,e1=E.reducer,t1=R`
  0% {
    transform: scale(1);
  }

  10% {
    transform: scale(1.1);
  }

  20% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
`,s1=a.div`
  position: relative;
`,n1=a.a`
  font-family: "Kanit";
  ${window.innerWidth>=1024?"font-size: 2.5vw;":"font-size: 3rem;"}
  font-weight: 700;
  text-decoration: none;

  color: ${t=>t.$isActive?i.primary:i.color};

  ${t=>t.$isActive?`color: transparent;
  background-clip: text;
  background-color: #4158d0;
  ${i.gradient}`:""}

  z-index: 1;
  position: relative;
  display: block;
  transform: rotate(
    ${t=>t.$isActive?t.$isOdd?"4deg":"-4deg":""}
  );
  transition: transform linear 0.2s;
`,i1=a.div`
  opacity: 0;
  position: absolute;
  width: 130%;
  height: 130%;
  top: -10%;
  left: -30%;
  z-index: 0;
  transform: ${t=>t.$isOdd?"scale(-1, 1) rotate(4deg) translate(-20%)":""};
  transition: all linear 0.1s;

  &.active {
    opacity: 1;
  }
`,Z=a.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  rotate: ${t=>t.$color?"4deg":""};
  animation: ${t1} ease 2s infinite;
  animation-delay: 1s;

  & path {
    /* fill: url(#my-cool-gradient); */

    fill: ${t=>t.$color?"url(#my-cool-gradient)":"#f5f5f5"};
  }

  & + & {
    animation: none;
  }
`;function C({text:t,isActive:s,activeChange:n,OnCLick:r,isOdd:o}){const l=j();return e.jsxs(s1,{onMouseLeave:()=>l(p()),onMouseEnter:n,children:[e.jsx(n1,{onClick:r,$isOdd:o,$isActive:s,children:t}),e.jsxs(i1,{$isOdd:o,className:s?"active":"",children:[e.jsx(Z,{$color:i.primary,id:"Слой_1","data-name":"Слой 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 381.67 101.89",children:e.jsx("path",{id:"Контур_1","data-name":"Контур 1",className:"cls-1",d:"M48,101.89,381.67,54.4,0,0Z"})}),e.jsx(Z,{id:"Слой_1","data-name":"Слой 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 381.67 101.89",children:e.jsx("path",{id:"Контур_1","data-name":"Контур 1",className:"cls-1",d:"M48,101.89,381.67,54.4,0,0Z"})})]})]})}var m=(t=>(t[t.main=0]="main",t[t.projects=1]="projects",t[t.persona=2]="persona",t[t.contact=3]="contact",t))(m||{});const P=S({name:"sectionState",initialState:{value:m.main},reducers:{change:(t,s)=>{t.value=s.payload}}}),{change:b}=P.actions,a1=P.reducer,o1=a.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: ${i.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 6rem;
  padding-top: 2rem;

  z-index: 1;
`,r1=a.h2`
  color: ${i.primary};
  width: 100%;
  position: relative;
  ${window.innerWidth>=1024?"font-size: 1.3vw;":"font-size: 1.3rem;"}

  color: transparent;
  background-clip: text;
  background-color: #4158d0;
  ${i.gradient}
`,l1=a.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,c1=a.footer`
  padding-top: 5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;

  & a {
    text-decoration: none;
  }
`,d1=a.div`
  position: absolute;
  top: 40%;
  left: 20%;
  width: 10rem;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: ${i.primary};
  z-index: 2;
`,h1=a.div`
  position: absolute;
  height: 100vh;
  ${window.innerWidth>=1024?"width: 25vw;":"width: 45vw;"}
  background-color: ${i.primary2};
  top: 0;
  left: 0;
  transform: skew(-8deg)
    ${window.innerWidth>=1024?"translateX(-20%)":"translateX(-40%)"};
  z-index: -2;

  & h1 {
    color: ${i.primary};
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    rotate: 180deg;
    position: absolute;
    right: -2.2vw;
    font-family: "Kanit";
    white-space: nowrap;
    font-size: 10vw;
    z-index: -1;
    letter-spacing: -0.2rem;
  }

  &::before {
    content: "";
    position: absolute;
    height: 100vh;
    width: inherit;
    background-color: ${i.primary3};
    top: 0;
    left: -0.5vw;
    z-index: -1;
  }
`,T=()=>{const[t,s]=v.useState({x:0,y:0}),n=v.useCallback(r=>{s({x:r.clientX,y:r.clientY})},[]);return v.useEffect(()=>{let r,o=0;const l=c=>{const h=Date.now();h-o>16?(o=h,n(c)):(cancelAnimationFrame(r),r=requestAnimationFrame(()=>n(c)))};return window.addEventListener("mousemove",l,{passive:!0}),()=>{window.removeEventListener("mousemove",l),cancelAnimationFrame(r)}},[n]),t},m1=a.h1`
  ${window.innerWidth>=1024?"font-size: 8vw;":"font-size: 8rem;"}
  position: relative;
  width: 100%;

  span {
    content: "Ekzis";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    ${i.gradientText}
    z-index: -1;
  }
`,$={x:0,y:0},p1=()=>{const t=T(),s=v.useRef(null);return s.current&&($.x=s.current.offsetLeft+s.current.clientWidth/2,$.y=s.current.offsetTop+s.current.clientHeight/2),e.jsxs(m1,{ref:s,children:["Ekzis"," ",e.jsx("span",{style:{transform:`translate(${t.x?-50-Math.max(Math.min((t.x-$.x)/(window.innerWidth/10),3),-3):-52}%, 
                                ${t.y?-50-Math.min((t.y-$.y)/(window.innerHeight/20),7):-52}%)`},children:"Ekzis"})]})};let I=!0;function x1({initial:t}){const s=j(),n=y(c=>c.sectionState.value),[r,o]=u.useState([!0,!1,!1]);function l(c){const h=r.slice().fill(!1);s(x()),h[c]=!0,o(h)}return u.useEffect(()=>{setTimeout(()=>I=!1,1e3)},[n]),e.jsxs(o1,{as:d.div,initial:t?{clipPath:"circle(0% at 30% 40%)"}:"",transition:{duration:1},animate:t?{clipPath:"circle(100% at 30% 40%)"}:"",children:[e.jsxs(d.div,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx(p1,{}),e.jsx(r1,{children:"frontend developer"})]}),e.jsxs(l1,{children:[e.jsx(C,{OnCLick:()=>I?"":s(b(m.projects)),activeChange:()=>l(0),isActive:r[0],isOdd:0%2!==0,text:"PROJECTS"}),e.jsx(C,{OnCLick:()=>s(b(m.persona)),activeChange:()=>l(1),isActive:r[1],isOdd:1%2!==0,text:"PERSONA"}),e.jsx(C,{OnCLick:()=>s(b(m.contact)),activeChange:()=>l(2),isActive:r[2],isOdd:2%2!==0,text:"CONTACT"})]}),e.jsxs(c1,{children:[e.jsx("a",{onMouseLeave:()=>s(p()),onMouseEnter:()=>s(x()),href:"https://t.me/Ekzissss",children:"Telegram"}),e.jsx("span",{children:", "}),e.jsx("a",{onMouseLeave:()=>s(p()),onMouseEnter:()=>s(x()),href:"https://github.com/Ekzisss/Ekzisss.github.io",children:"Github"})]}),e.jsx(d1,{initial:{top:"10%",left:"10%",scale:0},transition:{duration:.5},as:d.div,exit:{scale:Math.floor(window.innerWidth/100)+4}}),e.jsx(h1,{children:e.jsx(d.h1,{animate:{y:3e3},transition:{repeat:1/0,duration:60,ease:"linear"},children:"MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN  MAIN"})})]})}a.h1`
  font-size: 8rem;
`;a.h1`
  font-size: 4rem;
`;a.h1`
  font-size: 2.5rem;
`;a.h1`
  font-size: 1.5rem;
`;const z=a.div`
  position: absolute;
  top: 0;
  left: -1rem;
  z-index: 2;
  background-color: ${i.background};
  font-size: 2rem;
  font-weight: 700;
  width: 10rem;
  height: 3rem;
  transform: skew(-10deg);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s all linear;

  &:hover {
    background: ${i.onlyGradient};

    &::after {
      letter-spacing: 3px;
    }
  }

  &::after {
    transition: 0.1s all linear;
    content: 'Back';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
  }
`,u1=a.div`
  position: absolute;
  background-color: ${i.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 100;
`,f1=a.div`
  ${window.innerWidth>1410?"width: 50%;padding-left: 2rem;":"width: 100%; overflow-y: auto; overflow-x: hidden;"}
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 5rem;
  gap: 1rem;
  ${window.innerWidth>1410?"":`&::before {
      content: '';
      position: absolute;
      top: 4rem;
      left: -2rem;
      width: 120vw;
      height: 18rem;
      background-color: #00000040;
      transform: rotate(-5deg);
      z-index: -1;
    }`}

  & h1 {
    ${i.gradientText}
    text-align: center;
    width: 100%;
    ${window.innerWidth<490?"font-size: 3rem;":"font-size: 5rem;"}
  }

  & p {
    width: 100%;
    text-align: center;
    ${window.innerWidth<490?"font-size: 0.7rem;":""}
  }

  & h2 {
    ${i.darkGradientText}
    margin-bottom: 1rem;
    ${window.innerWidth<490?"font-size: 2rem;":"font-size: 3rem;"}
  }

  & section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  & ol {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 2rem;
    list-style: none;
  }

  & li {
    perspective: 1500px;
  }

  & ul {
    padding-left: 1rem;
    border: 2px solid ${i.color};
    padding: 1rem;
    list-style: none;
    ${window.innerWidth<490?"width: 8rem;height: 8rem;font-size: 0.7rem;":"width: 13rem;height: 13rem;"}
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #00000030;

    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
    transform: rotate3d(0);

    /* background: url('src/assets/card.jpg'); */

    &:hover {
      transition-duration: 0ms;
      box-shadow: 0 5px 20px 5px ${i.color}60;
      background: ${i.onlyGradient};
    }

    & li {
      pointer-events: none;
    }

    & ul {
      pointer-events: none;
    }
  }

  & h3 {
    margin-bottom: 0.5rem;
    text-align: center;
  }
`;a.div`
  width: 50%;
`;const g1=a.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${i.color};
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(50%, -50%);
`,j1=a(g1)`
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  background: ${i.background};
  width: 80%;
`;a(j1)`
  background: ${i.color};
  width: 95%;
`;a.h1`
  position: absolute;
  top: -10%;
  left: 100%;
  font-size: 130px;
  letter-spacing: -1rem;

  /* transform: translate(50%, 50%); */

  & span {
    color: ${i.accent};
  }
`;a.svg`
  position: absolute;
  font-size: 4rem;
  rotate: 30deg;
  top: 40%;
  left: 40%;
`;function N(t,s){const n=t.clientX,r=t.clientY,o=s.left+s.width/2,l=s.top+s.height/2,c=n-o,h=r-l,f=Math.sqrt(c**2+h**2),M=t.target;M.style.transform=`
    scale3d(1.2, 1.2, 1.2)
    rotate3d(
      ${-h/100},
      ${c/100},
      0,
      ${Math.log(f)*3}deg
    )
  `}function A(t){return t.target.getBoundingClientRect()}function k(t){const s=t.target;s.style.transform=""}const w1=a.svg`
  position: absolute;
  width: 80%;
  aspect-ratio: 1;
  top: 10%;
  right: 10%;
  transform-origin: top right !important;
  z-index: -2;
`,v1=()=>e.jsxs(w1,{initial:{transformOrigin:"center",transform:"rotate(0) translate(50%, -50%)"},animate:{transformOrigin:"center",transform:"rotate(360deg) translate(50%, -50%)"},transition:{repeat:1/0,duration:120,ease:"linear"},as:d.svg,id:"Слой_1","data-name":"Слой 1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 300 300",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"grad1",x1:"3.81",y1:"149.66",x2:"296.03",y2:"149.66",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#4158d0"}),e.jsx("stop",{offset:"0.11",stopColor:"#5b56cd"}),e.jsx("stop",{offset:"0.35",stopColor:"#9c53c5"}),e.jsx("stop",{offset:"0.49",stopColor:"#c850c0"}),e.jsx("stop",{offset:"1",stopColor:"#ffcc70"})]})}),e.jsx("circle",{className:"cls-1",cx:"150",cy:"150",r:"150"}),e.jsx("circle",{className:"cls-2",cx:"150",cy:"150",r:"125"}),e.jsx("path",{className:"cls-3",d:"M295.77,162l-18.56-.55.28-9.47a6.9,6.9,0,0,1,1-3.7,5.57,5.57,0,0,1,2.52-2.11,8.29,8.29,0,0,1,3.48-.61,7.28,7.28,0,0,1,3.47.93,6,6,0,0,1,2.32,2.41,7.06,7.06,0,0,1,.76,3.59l-.12,4,5,.15Zm-9-5.63.08-2.77a2.29,2.29,0,0,0-.66-1.89,2.81,2.81,0,0,0-1.86-.67,3.13,3.13,0,0,0-2,.51,2.13,2.13,0,0,0-.78,1.75l-.08,2.91Z"}),e.jsx("path",{className:"cls-3",d:"M296,143l-18.49,1.67-1.25-13.88,4.14-.37.77,8.53,3-.27-.67-7.48,4.19-.38.67,7.48,3-.27-.77-8.53,4.13-.37Z"}),e.jsx("path",{className:"cls-3",d:"M294.32,125.89l-18.14,3.94-2-9.35a7.3,7.3,0,0,1,0-3.79,5.25,5.25,0,0,1,1.81-2.6,8,8,0,0,1,3.22-1.43,5.94,5.94,0,0,1,6.07,2.16,2.57,2.57,0,0,1,.49-.66,7.55,7.55,0,0,1,.86-.71l4.32-3.1,1.18,5.47-3.95,2.84a1.59,1.59,0,0,0-.6.7,1.66,1.66,0,0,0,0,1l.32,1.48,5.3-1.15Zm-10.49-3.22-.6-2.76a2.54,2.54,0,0,0-1-1.64,2.37,2.37,0,0,0-1.87-.25c-1.6.35-2.24,1.26-1.91,2.75l.63,2.93Z"}),e.jsx("path",{className:"cls-3",d:"M288.09,101a19.1,19.1,0,0,1,.89,3.41,12.21,12.21,0,0,1,.14,3l-4.22,1.49a14.56,14.56,0,0,0,0-3,12.77,12.77,0,0,0-.63-2.9,7,7,0,0,0-.95-2,1.05,1.05,0,0,0-1.29-.32,1.2,1.2,0,0,0-.76.71,4.19,4.19,0,0,0-.17,1.42c0,.61,0,1.41.08,2.38a12.5,12.5,0,0,1-.27,3.22,4.25,4.25,0,0,1-1.14,2,6.09,6.09,0,0,1-2.24,1.29,4.87,4.87,0,0,1-4.57-.43,9.61,9.61,0,0,1-3.25-4.93,19.74,19.74,0,0,1-.79-3,17.81,17.81,0,0,1-.33-2.66l4.24-1.49a12.91,12.91,0,0,0,.12,2.68,13.12,13.12,0,0,0,.55,2.26,9.4,9.4,0,0,0,.91,2,1,1,0,0,0,1.27.49,1.11,1.11,0,0,0,.74-1.07,20.82,20.82,0,0,0-.1-2.82,10.59,10.59,0,0,1,.25-3.74,4.42,4.42,0,0,1,1.35-2.18,7.1,7.1,0,0,1,2.29-1.27,5,5,0,0,1,4.49.48Q286.78,97.25,288.09,101Z"}),e.jsx("path",{className:"cls-3",d:"M280.12,82.31c1.38,2.71,1.78,5.12,1.17,7.24s-2.39,3.93-5.37,5.45a12.28,12.28,0,0,1-5.46,1.58,6.59,6.59,0,0,1-4.19-1.43,12.32,12.32,0,0,1-3.2-4.13,12.08,12.08,0,0,1-1.47-5,6.62,6.62,0,0,1,1.3-4.24,12.27,12.27,0,0,1,4.47-3.5q4.47-2.3,7.57-1.15C277,77.89,278.74,79.61,280.12,82.31ZM276,84.41a3.59,3.59,0,0,0-2.4-2.13,6,6,0,0,0-3.74.88,6.16,6.16,0,0,0-3,2.59,4.47,4.47,0,0,0,2.71,5.31,6.22,6.22,0,0,0,3.88-.94,6,6,0,0,0,2.9-2.52A3.6,3.6,0,0,0,276,84.41Z"}),e.jsx("path",{className:"cls-3",d:"M273.55,70.87,258.43,81.64l-2.65-3.72,4-11.36-8,5.71-3.12-4.38,15.13-10.77,2.66,3.75-4,11.31,8-5.68Z"}),e.jsx("path",{className:"cls-3",d:"M261.38,54.09l-18.25,7.84-3.94-4.09,8.44-18,3.89,4-1.77,3.85,3.85,4,3.89-1.65Zm-11.07-.17-2.86-3L245,56.23Z"}),e.jsx("path",{className:"cls-3",d:"M206.85,13.9l-6.39,17.43-8.9-3.26a7,7,0,0,1-3.19-2.13,5.6,5.6,0,0,1-1.2-3.07,8.28,8.28,0,0,1,.52-3.49,7.14,7.14,0,0,1,2-3,6,6,0,0,1,3-1.44,7,7,0,0,1,3.65.41l3.75,1.38,1.72-4.69Zm-8.19,6.74-2.6-1a2.31,2.31,0,0,0-2,0,2.75,2.75,0,0,0-1.22,1.54,3.13,3.13,0,0,0-.14,2,2.13,2.13,0,0,0,1.41,1.29l2.74,1Z"}),e.jsx("path",{className:"cls-3",d:"M188.83,7.64l-4.14,18.1-13.58-3.12.92-4,8.35,1.91.68-2.95-7.32-1.68.94-4.1L182,13.44l.67-2.95-8.35-1.92.93-4Z"}),e.jsx("path",{className:"cls-3",d:"M172,4l-1.81,18.47-9.52-.93a7.21,7.21,0,0,1-3.6-1.19,5.32,5.32,0,0,1-1.92-2.52,7.93,7.93,0,0,1-.38-3.5A6,6,0,0,1,156,11.12a6.06,6.06,0,0,1,2.67-1.93,2.54,2.54,0,0,1-.48-.67,6.81,6.81,0,0,1-.41-1l-1.63-5.05,5.57.54,1.49,4.64a1.57,1.57,0,0,0,.49.78,1.62,1.62,0,0,0,.9.31l1.5.15.53-5.4Zm-6.28,9-2.81-.28a2.54,2.54,0,0,0-1.87.44,2.36,2.36,0,0,0-.81,1.71c-.16,1.62.52,2.51,2,2.66l3,.29Z"}),e.jsx("path",{className:"cls-3",d:"M146.37,2.28a19,19,0,0,1,3.51.2,11.82,11.82,0,0,1,2.86.77l.12,4.47a14.52,14.52,0,0,0-2.88-.9A12.48,12.48,0,0,0,147,6.53a7.57,7.57,0,0,0-2.15.3A1,1,0,0,0,144.19,8a1.16,1.16,0,0,0,.44.93,3.76,3.76,0,0,0,1.3.6l2.29.66a12,12,0,0,1,3,1.24,4.14,4.14,0,0,1,1.6,1.71,6,6,0,0,1,.55,2.52,4.86,4.86,0,0,1-1.81,4.22,9.53,9.53,0,0,1-5.68,1.59,18.64,18.64,0,0,1-3.13-.17,17.44,17.44,0,0,1-2.63-.5L140,16.28a13.4,13.4,0,0,0,2.59.7,12.69,12.69,0,0,0,2.32.17,10.08,10.08,0,0,0,2.13-.27,1,1,0,0,0,.86-1.06,1.1,1.1,0,0,0-.79-1,20.94,20.94,0,0,0-2.72-.77,10.7,10.7,0,0,1-3.48-1.37,4.47,4.47,0,0,1-1.67-2,7.3,7.3,0,0,1-.5-2.57A5,5,0,0,1,140.53,4C141.8,2.92,143.74,2.35,146.37,2.28Z"}),e.jsx("path",{className:"cls-3",d:"M126.13,4.19q4.5-.75,7.25,1.08c1.83,1.22,3,3.47,3.57,6.77a12.26,12.26,0,0,1-.16,5.68,6.61,6.61,0,0,1-2.64,3.57,12.21,12.21,0,0,1-4.89,1.79A12.17,12.17,0,0,1,124,23a6.58,6.58,0,0,1-3.64-2.52,12.26,12.26,0,0,1-2-5.33q-.81-4.95,1.21-7.56T126.13,4.19Zm.75,4.55a3.59,3.59,0,0,0-2.75,1.64,6,6,0,0,0-.31,3.84,6.26,6.26,0,0,0,1.55,3.67,3.64,3.64,0,0,0,3.13.64,3.69,3.69,0,0,0,2.76-1.61,6.28,6.28,0,0,0,.28-4A6,6,0,0,0,130,9.41,3.57,3.57,0,0,0,126.88,8.74Z"}),e.jsx("path",{className:"cls-3",d:"M113.17,7l5.75,17.65-4.34,1.41-9.64-7.2,3,9.35-5.11,1.66L97.13,12.22l4.37-1.42L111.1,18l-3-9.32Z"}),e.jsx("path",{className:"cls-3",d:"M93.47,13.61l2.09,19.75-5.07,2.57L75.82,22.54l5-2.52L84,22.85l4.94-2.51-.43-4.2ZM90,24.14,86.36,26l4.3,3.94Z"}),e.jsx("path",{className:"cls-3",d:"M39,53.82l14.73,11.3L48,72.65a7,7,0,0,1-3,2.4,5.61,5.61,0,0,1-3.29.23,8.22,8.22,0,0,1-3.18-1.54A7.18,7.18,0,0,1,36.27,71a6,6,0,0,1-.47-3.31,7.06,7.06,0,0,1,1.48-3.36l2.44-3.17-4-3Zm4,9.82-1.69,2.2a2.36,2.36,0,0,0-.56,1.92,2.78,2.78,0,0,0,1.11,1.63,3.1,3.1,0,0,0,1.9.74,2.11,2.11,0,0,0,1.65-1l1.78-2.31Z"}),e.jsx("path",{className:"cls-3",d:"M27.69,69.11l16,9.42-7.07,12L33,88.43l4.34-7.38-2.6-1.54L31,86l-3.63-2.13,3.81-6.47-2.61-1.54-4.35,7.38-3.57-2.1Z"}),e.jsx("path",{className:"cls-3",d:"M19.12,84l17.05,7.35-3.79,8.79a7.34,7.34,0,0,1-2.23,3.06,5.35,5.35,0,0,1-3,1.06,7.84,7.84,0,0,1-3.44-.71,5.93,5.93,0,0,1-2.67-2.16,6,6,0,0,1-1-3.13,2.55,2.55,0,0,1-.78.25,7.87,7.87,0,0,1-1.12.08H12.82L15,93.47h4.87a1.6,1.6,0,0,0,.89-.22,1.67,1.67,0,0,0,.57-.77l.6-1.39-5-2.14Zm6.66,8.72-1.12,2.59a2.5,2.5,0,0,0-.15,1.91,2.37,2.37,0,0,0,1.38,1.3c1.5.64,2.55.27,3.15-1.13l1.19-2.75Z"}),e.jsx("path",{className:"cls-3",d:"M9.68,107.89A20.27,20.27,0,0,1,11,104.6a12.08,12.08,0,0,1,1.6-2.48l4.3,1.25a14.23,14.23,0,0,0-1.74,2.47,12.89,12.89,0,0,0-1.18,2.72,7.3,7.3,0,0,0-.36,2.14,1,1,0,0,0,.86,1,1.15,1.15,0,0,0,1-.13,4,4,0,0,0,1-1.06q.53-.75,1.32-2a12.37,12.37,0,0,1,2.09-2.45,4.16,4.16,0,0,1,2.13-1,6.2,6.2,0,0,1,2.56.25,4.87,4.87,0,0,1,3.47,3,9.58,9.58,0,0,1-.22,5.9,19.28,19.28,0,0,1-1.12,2.93,18.19,18.19,0,0,1-1.28,2.35l-4.32-1.25A13.19,13.19,0,0,0,22.52,116a12.51,12.51,0,0,0,.87-2.16,10.37,10.37,0,0,0,.4-2.11A1,1,0,0,0,23,110.6a1.09,1.09,0,0,0-1.22.43,19.79,19.79,0,0,0-1.57,2.36,10.71,10.71,0,0,1-2.37,2.89,4.46,4.46,0,0,1-2.37,1,7.31,7.31,0,0,1-2.6-.31,5,5,0,0,1-3.38-3C8.9,112.44,9,110.42,9.68,107.89Z"}),e.jsx("path",{className:"cls-3",d:"M5.31,127.7c.46-3,1.54-5.2,3.26-6.57s4.24-1.81,7.55-1.31a12.16,12.16,0,0,1,5.35,1.9,6.59,6.59,0,0,1,2.58,3.61,14,14,0,0,1-1.52,10.13A6.55,6.55,0,0,1,19,138.15a12.26,12.26,0,0,1-5.68.25q-5-.75-6.82-3.48C5.26,133.1,4.87,130.69,5.31,127.7Zm4.57.68a3.57,3.57,0,0,0,.71,3.13A6.09,6.09,0,0,0,14.14,133a6.25,6.25,0,0,0,4-.35,4.49,4.49,0,0,0,.88-5.9,6.25,6.25,0,0,0-3.7-1.49,6.09,6.09,0,0,0-3.83.36A3.59,3.59,0,0,0,9.88,128.38Z"}),e.jsx("path",{className:"cls-3",d:"M4.08,141l18.57.3-.08,4.56-9.94,6.78,9.83.16-.08,5.37-18.57-.3.08-4.6,9.91-6.75L4,146.33Z"}),e.jsx("path",{className:"cls-3",d:"M4.06,161.52l19.38,4.35.8,5.62L6.87,181.11l-.8-5.54,3.69-2.09L9,168l-4.13-.94Zm8.87,6.63.58,4.07,5.11-2.81Z"}),e.jsx("path",{className:"cls-3",d:"M24.59,226,40,215.71l5.26,7.88a7.07,7.07,0,0,1,1.31,3.61,5.55,5.55,0,0,1-.84,3.18,8.15,8.15,0,0,1-2.49,2.51,7.22,7.22,0,0,1-3.36,1.25,6,6,0,0,1-3.29-.62,7.07,7.07,0,0,1-2.7-2.49l-2.21-3.33-4.15,2.77Zm10.58-.6,1.54,2.3a2.3,2.3,0,0,0,1.63,1.16,2.74,2.74,0,0,0,1.9-.53,3.06,3.06,0,0,0,1.32-1.56,2.12,2.12,0,0,0-.38-1.87l-1.62-2.43Z"}),e.jsx("path",{className:"cls-3",d:"M35.39,241.66l14.08-12.1,9.08,10.56-3.15,2.71-5.58-6.5-2.29,2L52.42,244l-3.19,2.74-4.9-5.69L42,243l5.58,6.5-3.15,2.7Z"}),e.jsx("path",{className:"cls-3",d:"M46.72,254.57l12.47-13.76,7.09,6.43a7.35,7.35,0,0,1,2.18,3.1,5.28,5.28,0,0,1,0,3.17,7.82,7.82,0,0,1-1.78,3,6,6,0,0,1-2.9,1.82,6.07,6.07,0,0,1-3.3,0,2.51,2.51,0,0,1,0,.82,7.47,7.47,0,0,1-.29,1.08l-1.7,5-4.15-3.76,1.56-4.61A1.6,1.6,0,0,0,56,256a1.58,1.58,0,0,0-.54-.78l-1.12-1-3.64,4Zm10.41-3.49,2.09,1.9a2.49,2.49,0,0,0,1.76.76,2.35,2.35,0,0,0,1.67-.88c1.09-1.21,1.08-2.33,0-3.35l-2.22-2Z"}),e.jsx("path",{className:"cls-3",d:"M66.29,271.22A19.21,19.21,0,0,1,63.58,269a11.56,11.56,0,0,1-1.83-2.32L64.32,263a14.73,14.73,0,0,0,1.77,2.44,12.9,12.9,0,0,0,2.2,2,7.13,7.13,0,0,0,1.91,1,1,1,0,0,0,1.23-.5,1.14,1.14,0,0,0,.2-1,4,4,0,0,0-.68-1.26c-.37-.49-.85-1.12-1.45-1.89A11.69,11.69,0,0,1,67.85,261a4.19,4.19,0,0,1-.27-2.34,6,6,0,0,1,1.07-2.34,4.84,4.84,0,0,1,4-2.31,9.51,9.51,0,0,1,5.51,2.11,19.13,19.13,0,0,1,2.42,2,20.4,20.4,0,0,1,1.81,2l-2.58,3.69a12.71,12.71,0,0,0-3.42-3.63,10,10,0,0,0-1.87-1.06,1,1,0,0,0-1.32.34,1.11,1.11,0,0,0,0,1.3A20.81,20.81,0,0,0,74.9,263a10.32,10.32,0,0,1,2,3.18,4.4,4.4,0,0,1,.18,2.56,7.32,7.32,0,0,1-1.13,2.37A5,5,0,0,1,72,273.33C70.34,273.43,68.44,272.72,66.29,271.22Z"}),e.jsx("path",{className:"cls-3",d:"M83.67,281.75c-2.71-1.39-4.43-3.12-5.18-5.19S78.14,272,79.67,269a12.36,12.36,0,0,1,3.52-4.46,6.61,6.61,0,0,1,4.24-1.29,14.1,14.1,0,0,1,9.11,4.69,6.55,6.55,0,0,1,1.42,4.2,12.28,12.28,0,0,1-1.58,5.46q-2.3,4.46-5.48,5.35C88.77,283.53,86.36,283.14,83.67,281.75Zm2.11-4.1A3.54,3.54,0,0,0,89,278a5.92,5.92,0,0,0,2.53-2.89,6.2,6.2,0,0,0,1-3.87,4.47,4.47,0,0,0-5.31-2.73,6.22,6.22,0,0,0-2.59,3,6,6,0,0,0-.89,3.75A3.61,3.61,0,0,0,85.78,277.65Z"}),e.jsx("path",{className:"cls-3",d:"M95.72,287.22l5.93-17.59,4.33,1.46,3.43,11.53,3.14-9.32,5.09,1.72-5.93,17.59-4.36-1.47-3.41-11.49-3.14,9.29Z"}),e.jsx("path",{className:"cls-3",d:"M115.49,293.68l10.11-17.09,5.6,1,3.79,19.5-5.51-.95-.85-4.16-5.46-.94L121,294.64Zm9.05-6.39,4,.69-1.1-5.71Z"}),e.jsx("path",{className:"cls-3",d:"M183.26,293.83,178.08,276l9.11-2.64a7.05,7.05,0,0,1,3.83-.17A5.57,5.57,0,0,1,193.8,275a8.16,8.16,0,0,1,1.65,3.13,7.09,7.09,0,0,1,.18,3.58,6,6,0,0,1-1.58,2.95,7.09,7.09,0,0,1-3.19,1.82L187,287.55l1.39,4.79Zm2.61-10.27,2.66-.77a2.32,2.32,0,0,0,1.59-1.21,2.83,2.83,0,0,0,.07-2,3.09,3.09,0,0,0-1.1-1.72,2.14,2.14,0,0,0-1.9-.2l-2.79.81Z"}),e.jsx("path",{className:"cls-3",d:"M201.46,288.22l-7.37-17,12.79-5.53,1.65,3.81-7.86,3.4,1.2,2.78,6.89-3,1.67,3.86-6.89,3,1.2,2.78,7.86-3.4,1.65,3.81Z"}),e.jsx("path",{className:"cls-3",d:"M217.2,281.21l-9.47-16,8.22-4.88a7.27,7.27,0,0,1,3.61-1.17,5.29,5.29,0,0,1,3,.9,7.9,7.9,0,0,1,2.37,2.6,5.86,5.86,0,0,1,.88,3.31,6,6,0,0,1-1,3.13,2.47,2.47,0,0,1,.78.26,7.4,7.4,0,0,1,.95.59l4.31,3.11L226.06,276l-3.95-2.85a1.59,1.59,0,0,0-.85-.35,1.68,1.68,0,0,0-.91.29l-1.3.77,2.77,4.66Zm-.27-11,2.43-1.44a2.55,2.55,0,0,0,1.25-1.46,2.37,2.37,0,0,0-.36-1.86c-.83-1.4-1.9-1.72-3.21-.94l-2.58,1.53Z"}),e.jsx("path",{className:"cls-3",d:"M238.87,267.41a19.58,19.58,0,0,1-3,1.92,11.9,11.9,0,0,1-2.75,1.07l-2.75-3.53a14.48,14.48,0,0,0,2.86-1,12.91,12.91,0,0,0,2.55-1.51,7.18,7.18,0,0,0,1.55-1.52,1.05,1.05,0,0,0-.11-1.32,1.17,1.17,0,0,0-.91-.5,3.91,3.91,0,0,0-1.4.29c-.58.21-1.33.48-2.24.83a12.52,12.52,0,0,1-3.13.76,4.26,4.26,0,0,1-2.31-.43,6,6,0,0,1-1.93-1.71,4.83,4.83,0,0,1-1-4.47,9.56,9.56,0,0,1,3.63-4.65,20.23,20.23,0,0,1,2.63-1.72,20.54,20.54,0,0,1,2.41-1.15l2.77,3.55a12.74,12.74,0,0,0-2.51,1,12,12,0,0,0-2,1.24A9.48,9.48,0,0,0,229.7,256a1,1,0,0,0-.06,1.36,1.1,1.1,0,0,0,1.25.37,23.73,23.73,0,0,0,2.65-1,10.4,10.4,0,0,1,3.61-.95,4.39,4.39,0,0,1,2.51.58,7.42,7.42,0,0,1,1.92,1.78,4.94,4.94,0,0,1,1,4.41Q242,265,238.87,267.41Z"}),e.jsx("path",{className:"cls-3",d:"M254,253.92q-3.19,3.25-6.49,3.41T240.67,254a12.28,12.28,0,0,1-3.22-4.68,6.57,6.57,0,0,1,0-4.44,14.18,14.18,0,0,1,7.17-7.32,6.6,6.6,0,0,1,4.43-.11,12.19,12.19,0,0,1,4.75,3.13q3.58,3.51,3.49,6.81C257.25,249.57,256.16,251.75,254,253.92Zm-3.29-3.23a3.6,3.6,0,0,0,1.25-2.95,6,6,0,0,0-2-3.28,6.19,6.19,0,0,0-3.42-2.05,4.48,4.48,0,0,0-4.17,4.27,6.2,6.2,0,0,0,2.12,3.37,6,6,0,0,0,3.31,1.95A3.6,3.6,0,0,0,250.75,250.69Z"}),e.jsx("path",{className:"cls-3",d:"M262.81,244.06l-15-10.92,2.69-3.7,12,.18-7.95-5.79,3.16-4.34,15,10.93L270,234.13,258,234l7.93,5.77Z"}),e.jsx("path",{className:"cls-3",d:"M274.87,227.18l-13.23-14.82,2.62-5,19.73,2.3-2.58,5-4.22-.45-2.55,4.91,2.81,3.17Zm-3.36-10.56,1.9-3.64-5.78-.69Z"}),e.jsx("path",{className:"cls-4",d:"M150,35A115,115,0,0,0,35,150H150Z"}),e.jsx("path",{className:"cls-1",d:"M265,150h0A115,115,0,0,0,150,35h0V150Z"}),e.jsx("path",{className:"cls-4",d:"M150,150V265h0A115,115,0,0,0,265,150Z"}),e.jsx("path",{className:"cls-1",d:"M35,150A115,115,0,0,0,150,265V150Z"})]});let g;function b1(){const t=j(),s=y(n=>n.sectionState.value);return e.jsxs(u1,{as:d.div,initial:{clipPath:"circle(0% at 30% 40%)"},transition:{duration:.5,delay:.2,x:{duration:1}},animate:{clipPath:"circle(100% at 30% 40%)"},exit:{x:1},style:{zIndex:s===m.persona?"100":"0"},children:[e.jsxs(f1,{children:[e.jsx("h1",{children:"Almaz Abdulhakov"}),e.jsxs("p",{children:["21 летний студент из России ✌️. ",e.jsx("br",{}),"Создаю интерфейс с помощью React и имею опыт по созданию бэкэнда с помощью NodeJs 🔥. ",e.jsx("br",{}),"Люблю смотреть аниме 💀 и играть в видеоигры 🎮. ",e.jsx("br",{})," Программирую около 6 лет 💻."]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Stack"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("h3",{children:"Frontend (Main)"}),e.jsxs("ul",{onMouseMove:n=>N(n,g),onMouseEnter:n=>g=A(n),onMouseLeave:k,children:[e.jsx("li",{children:"React"})," ",e.jsx("li",{children:"Next"})," ",e.jsx("li",{children:"Redux"})," ",e.jsx("li",{children:"Axios"})]})]}),e.jsxs("li",{children:[e.jsx("h3",{children:"Frontend (Visual)"}),e.jsxs("ul",{onMouseMove:n=>N(n,g),onMouseEnter:n=>g=A(n),onMouseLeave:k,children:[e.jsx("li",{children:"Farmer-motion"})," ",e.jsx("li",{children:"Recharts"})," ",e.jsx("li",{children:"Styled-components"})]})]}),e.jsxs("li",{children:[e.jsx("h3",{children:"Backend"}),e.jsxs("ul",{onMouseMove:n=>N(n,g),onMouseEnter:n=>g=A(n),onMouseLeave:k,children:[e.jsx("li",{children:"Node.js"})," ",e.jsx("li",{children:"bcrypt"})," ",e.jsx("li",{children:"jsonwebtoken"})," ",e.jsx("li",{children:"multer"})]})]}),e.jsxs("li",{children:[e.jsx("h3",{children:"DataBase"}),e.jsxs("ul",{onMouseMove:n=>N(n,g),onMouseEnter:n=>g=A(n),onMouseLeave:k,children:[e.jsx("li",{children:"MySql"})," ",e.jsx("li",{children:"Mongodb"})," ",e.jsx("li",{children:"FireStore"})," ",e.jsx("li",{children:"Prisma"})]})]})]})]})]}),e.jsx(z,{onClick:()=>t(b(0))}),e.jsx(v1,{})]})}const y1=a.svg`
  position: absolute;
  top: 40%;
  left: 80%;
  transform: translate(-50%, -50%);
  min-width: 60rem;
  width: 100%;
  z-index: -1;
`,M1=()=>e.jsxs(y1,{id:"Слой_1","data-name":"Слой 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 362.2 362.2",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"Безымянный_градиент_15",x1:"-2448.73",y1:"2773.55",x2:"-2172.4",y2:"3025.77",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0.02",stopColor:"#4258a4"}),e.jsx("stop",{offset:"0.12",stopColor:"#5c58a3"}),e.jsx("stop",{offset:"0.32",stopColor:"#9d59a0"}),e.jsx("stop",{offset:"0.36",stopColor:"#a9599f"}),e.jsx("stop",{offset:"0.75",stopColor:"#fdcc72"})]})}),e.jsx("circle",{style:{fill:i.primary3},cx:"168.22",cy:"129.63",r:"129.63"}),e.jsx("ellipse",{style:{fill:i.background},cx:"172.84",cy:"129.8",rx:"125.01",ry:"129.47"}),e.jsx("path",{className:"Contact_cls-3",d:"M.33,156.57q-1.41-10.86,3.19-17.25t14.34-7.64q10-1.31,16.12,3.59t7.51,15.93a35.86,35.86,0,0,1,.3,6.7,35,35,0,0,1-.83,5.78L30.79,165a28,28,0,0,0,.88-11.71q-.72-5.64-3.65-8t-8.63-1.66q-5.58.72-7.66,3.92t-1.37,8.66a30.69,30.69,0,0,0,1.3,5.72,29.85,29.85,0,0,0,2.46,5.39L3.89,168.59a37.51,37.51,0,0,1-2.18-5.43A38.61,38.61,0,0,1,.33,156.57Z"}),e.jsx("path",{className:"Contact_cls-3",d:"M11,194.35q-3.82-9.25-1.32-16t12.55-10.89q6.94-2.86,12.09-2.41A14.33,14.33,0,0,1,43.2,169a27,27,0,0,1,6.22,9.58,27.07,27.07,0,0,1,2.34,11.17,14.44,14.44,0,0,1-3.53,9q-3.34,3.95-10.28,6.8-10.07,4.16-16.59,1.09T11,194.35Zm9.24-3.81q1.72,4.16,4.83,5.07t8.26-1.21q5.49-2.25,7-5.08c1-1.88.94-4.2-.2-7s-2.74-4.47-4.77-5.1-4.89-.18-8.55,1.33c-3.43,1.41-5.67,3.07-6.71,5S19.14,187.76,20.28,190.54Z"}),e.jsx("path",{className:"Contact_cls-3",d:"M24.21,220.61,55.7,195.52l6.24,7.83-7.21,25.16L71.4,215.23l7.33,9.19L47.24,249.51,41,241.64l7.19-25.08L31.54,229.81Z"}),e.jsx("path",{className:"Contact_cls-3",d:"M61.1,260.89l19.08-25.07-9-6.86,5.3-7,27.36,20.82-5.3,7-9-6.86L70.45,268Z"}),e.jsx("path",{className:"Contact_cls-3",d:"M78.77,275.05l30.67-30.32,11.33,5.13-2.52,43-11.17-5,.46-9.19-11.05-5-6.55,6.44Zm22.62-8.44,8.2,3.71.77-12.62Z"}),e.jsx("path",{className:"Contact_cls-3",d:"M143.59,297.88q-10.78-1.9-15.52-8.19t-3-16q1.74-10,8.23-14.32T150.7,257a35.53,35.53,0,0,1,6.5,1.71,35,35,0,0,1,5.27,2.51l-1.78,10.1A28.12,28.12,0,0,0,149.77,267q-5.6-1-8.76,1.1c-2.1,1.38-3.49,4-4.15,7.74s-.16,6.52,1.46,8.48,4.25,3.25,7.86,3.88a29.83,29.83,0,0,0,5.85.46,29.3,29.3,0,0,0,5.88-.74l-1.79,10.16a36.69,36.69,0,0,1-5.82.46A38.19,38.19,0,0,1,143.59,297.88Z"}),e.jsx("path",{className:"Contact_cls-3",d:"M172.08,299l-1.78-31.46-11.3.64-.5-8.73,34.34-1.95.49,8.74-11.3.64,1.78,31.46Z"})]}),$1={apiKey:"AIzaSyD-69zoit_dPytwulAaYBPKIbaz1kEjOMQ",authDomain:"oceanheart-8b555.firebaseapp.com",projectId:"oceanheart-8b555",storageBucket:"oceanheart-8b555.appspot.com",messagingSenderId:"877066157324",appId:"1:877066157324:web:be289d6d99e8e81c605d29",measurementId:"G-ZV2DPLJXMP"},D=B($1),W=G(D);K(D);const N1=a.div`
  position: absolute;
  background-color: ${i.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  ${window.innerWidth>=1024?"":"flex-direction: column; gap: 3rem;"}
  z-index: 100;
  justify-content: center;
  align-items: center;

  & h1 {
    padding-left: 10%;
    padding-bottom: 20%;
    ${i.gradientText}
    font-size: 4rem;
  }
`,A1=a.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 20%;
  font-family: "Kanit";
  ${window.innerWidth>=1024?"font-size: 1vw;padding-left: 10%;":"font-size: 1rem;"}

  & input {
    background-color: ${i.primary2};
    width: ${window.innerWidth>=1024?"20vw;":"18rem"};
    padding: 0.3rem;
    border: none;
    font-family: "Kanit";
    border-radius: 0.4rem;
    font-size: inherit;
  }

  & textarea {
    height: ${window.innerWidth>=1024?"8vw;":"10rem"};
    background-color: ${i.primary2};
    padding: 0.3rem;
    resize: vertical;
    border: none;
    min-height: 3rem;
    max-height: 20rem;
    border-radius: 0.4rem;
    font-size: inherit;
  }

  & button {
    font-family: "Kanit";
    background-color: ${i.primary2};
    border: none;
    padding: 0.3rem;
    transition: 0.2s linear all;
    font-size: ${window.innerWidth>=1024?"2vw;":"1.8rem"};
    border-radius: 0.4rem;

    &:hover {
      background: ${i.onlyGradient};
      letter-spacing: 0.5rem;
    }
  }
`,k1=a.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  & svg {
    fill: ${i.color};
    width: ${window.innerWidth>=1024?"2vw;":"1.5rem;"};
  }

  a:hover {
    path {
      fill: url("#my-cool-gradient");
    }
    p {
      ${i.gradientText}
    }
  }

  & a {
    display: flex;
    gap: 1rem;
    text-decoration: none;
  }

  & p {
    transition: all 0.2s linear;
    ${window.innerWidth>=1024?"font-size: 2vw;width: 20vw;":"font-size: 1.5rem;width: 16rem;"}
    ${i.darkGradientText}
  }
`,z1=a.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;function C1({submitted:t,setSubmitted:s}){const n=j(),r=y(l=>l.sectionState.value);async function o(l){l.preventDefault();const c=l.target;if(!(!c.name.value||!c.text.value))try{await V(_(W,"message"),{Date:X.fromDate(new Date),Message:c.text.value,Name:c.name.value}),s(!0)}catch(h){console.log(h)}}return e.jsxs(N1,{as:d.div,initial:{clipPath:"circle(0% at 30% 40%)"},transition:{duration:.5,delay:.2,x:{duration:1}},animate:{clipPath:"circle(100% at 30% 40%)"},exit:{x:1},style:{zIndex:r===m.contact?"100":"0"},children:[e.jsxs(k1,{children:[e.jsxs("a",{onMouseLeave:()=>n(p()),onMouseEnter:()=>n(x()),href:"https://t.me/Ekzissss",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:e.jsx("path",{d:"M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"})}),e.jsx("p",{children:"Telegram"})]}),e.jsxs("a",{onMouseLeave:()=>n(p()),onMouseEnter:()=>n(x()),href:"https://github.com/Ekzisss",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:e.jsx("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})}),e.jsx("p",{children:"Github"})]}),e.jsxs("a",{onMouseLeave:()=>n(p()),onMouseEnter:()=>n(x()),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e.jsx("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})}),e.jsx("p",{children:"almazzz-2@yandex.ru"})]})]}),e.jsxs(z1,{children:[t&&e.jsx(d.h1,{transition:{duration:1,delay:1},initial:{opacity:0,y:-100,position:"absolute"},animate:{opacity:1,y:0,position:"relative"},children:"Message sent"}),e.jsx(w,{children:!t&&e.jsxs(A1,{transition:{duration:1},as:d.form,initial:{opacity:1,y:0},exit:{opacity:0,y:100},onSubmit:o,action:"POST",children:[e.jsx("input",{type:"name",name:"name",placeholder:"Name"}),e.jsx("textarea",{name:"text",placeholder:"Message"}),e.jsx("button",{type:"submit",children:"SEND"})]})})]}),e.jsx(z,{onClick:()=>n(b(0))}),e.jsx(M1,{})]})}const Z1=a.div`
  position: relative;
  border-left: none;
  padding: 1rem;
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  background: ${i.color};
  width: ${t=>t.$isActive?"90%":"70%"};
  transition: all 0.2s linear;

  &:hover {
    ${t=>t.$isActive?"":"width: 75%;&::before {right: -5%;}"};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: ${t=>t.$isActive?"-4%":"-5.4%"};
    width: 20%;
    height: 100%;
    background-color: ${i.color};
    transform: skew(-20deg);
    transition: all 0.2s linear;
  }

  & h2 {
    ${t=>t.$isActive?i.gradientText:`color: ${i.background};`}

    &::selection {
      background-color: ${i.background};
    }
  }

  & div {
    display: flex;
    gap: 0.4rem;
  }
`,I1=a.div`
  background-color: ${i.background};
  border-radius: 0.7rem;
  padding: 0.3rem;
`,L1=({name:t,isActive:s,tags:n,onClick:r})=>{const o=j();return e.jsxs(Z1,{onMouseLeave:()=>o(p()),onMouseEnter:()=>o(x()),$isActive:s,onClick:r,children:[e.jsx("h2",{children:t}),e.jsx("div",{children:n==null?void 0:n.map((l,c)=>e.jsx(I1,{children:l},c))})]})},S1=t=>_(W,t);async function O(t){const s=[];return(await H(S1(t))).forEach(r=>{const o=r.data();s.push(o)}),s}const _1="/assets/0-CK1M51D_.webp",E1="/assets/1-B4GgNSXt.webp",P1="/assets/2-Ci05Ym_c.webp",T1="/assets/3-sgUZV3Gu.webp",D1="/assets/4-nsoFFWBG.webp",W1="/assets/5-DVpCaFRf.webp",O1=a.div`
  display: flex;
  ${window.innerWidth<690?"flex-direction: column;":"width: 50%;height: calc(100vh - 2rem);"}
  padding-left: 1rem;
  flex-direction: column;
  gap: 2rem;

  border-left: 2px ${i.primary} solid;
  ${window.innerWidth<1024?"font-size: 1rem;":"font-size: 1vw;"}
`,F1=a.div`
  display: flex;
  flex-direction: column;
  ${window.innerWidth<690?"flex-direction: column;":"width: 50%;height: 100vh;"}
  padding-top: 4rem;
  gap: 0.3rem;
  align-items: center;
  ${window.innerWidth<1420?"flex-grow: 1;":""}

  & img {
    width: 100%;
    margin-bottom: 1rem;

    object-fit: contain;

    border-radius: 1rem;
  }

  & a {
    text-align: center;

    ${i.gradientText};
    ${window.innerWidth<1024?"font-size: 1rem;":"font-size: 1vw;"}

    &:hover {
      text-decoration: underline;
      color: ${i.accent};
    }
  }
`,q1=a.h2`
  ${window.innerWidth<1024?"font-size: 4rem;":"font-size: 4vw;"}
`,R1=({project:t})=>{const s=j(),n=new URL(Object.assign({"/src/assets/0.webp":_1,"/src/assets/1.webp":E1,"/src/assets/2.webp":P1,"/src/assets/3.webp":T1,"/src/assets/4.webp":D1,"/src/assets/5.webp":W1})[`/src/assets/${t.number}.webp`],import.meta.url).href;return e.jsxs(e.Fragment,{children:[e.jsxs(O1,{children:[e.jsx("div",{children:e.jsx(q1,{children:t.name})}),e.jsx("section",{children:e.jsx("p",{children:t.description})}),e.jsxs("section",{children:[e.jsx("h2",{children:"Features"}),t.features.map((r,o)=>e.jsxs("p",{children:["- ",r]},o))]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Stack"}),t.stack.map((r,o)=>e.jsxs("p",{children:["- ",r]},o))]})]}),e.jsxs(F1,{children:[e.jsx("a",{onMouseLeave:()=>s(p()),onMouseEnter:()=>s(x()),href:t.link,children:e.jsx("img",{src:n,alt:""})}),e.jsx("a",{onMouseLeave:()=>s(p()),onMouseEnter:()=>s(x()),href:t.link,children:"Website"}),e.jsx("a",{onMouseLeave:()=>s(p()),onMouseEnter:()=>s(x()),href:t.github,children:"Github"})]})]})},B1=a.div`
  position: absolute;
  background-color: ${i.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 100;
`,G1=a.div`
  position: relative;
  width: 30rem;
  position: absolute;
  height: 100vh;
  z-index: 1;
  /* transition: 1s all linear; */

  /* ${t=>!t.$isOpened&&window.innerWidth<1420?"left: -10%;":""} */

  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 4rem;

  &::before {
    content: '';
    position: absolute;
    transform: skew(-4deg);
    background-color: ${i.primary};
    height: 100vh;
    width: 90%;
    top: 0;
    left: -2rem;
    z-index: -1;
  }
`,K1=a.div`
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  ${window.innerWidth<1420?"max-width: 100%; padding-top: 3rem;":"max-width: calc(100% - 30rem);"}
  ${window.innerWidth<690?"flex-direction: column;":""}
`,V1=a.div`
  position: absolute;
  height: 15rem;
  width: 200rem;
  background-color: ${i.primary2};
  bottom: -13%;
  right: 15%;
  transform: rotate(-10deg) translate(-1000px);
  z-index: -1;

  & h1 {
    color: ${i.primary};
    position: absolute;
    right: -3%;
    font-family: 'Kanit';
    white-space: nowrap;
    font-size: 10rem;
    z-index: -1;
    letter-spacing: -0.2rem;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${i.primary3};
    right: 1rem;
    top: 1rem;
    z-index: -1;
  }
`,X1=a(z)`
  right: -1% !important;
  left: auto;

  &::after {
    content: ${t=>t.$isOpened?'"close"':'"projects"'};
  }
`,H1={panel:t=>({x:t?0:"-100%"})};function U1(){const[t,s]=u.useState([]),[n,r]=u.useState(0),[o,l]=u.useState(!(window.innerWidth<1420)),c=j(),h=y(f=>f.sectionState.value);return u.useEffect(()=>{O("projects").then(f=>s(f)).catch(console.log)},[]),e.jsxs(B1,{as:d.div,initial:{clipPath:"circle(0% at 30% 40%)"},transition:{duration:.5,delay:.2,x:{duration:1}},animate:{clipPath:"circle(100% at 30% 40%)"},exit:{x:1},style:{zIndex:h===m.projects?"100":"0"},children:[e.jsx("div",{style:{width:window.innerWidth<1420?"0":"30rem"}}),e.jsx(K1,{children:t[n]?e.jsx(R1,{project:t[n]}):""}),e.jsx(V1,{as:d.div,animate:{transform:"rotate(-10deg) translateX(100px)"},transition:{duration:1},children:e.jsx("h1",{children:"PROJECTS"})}),e.jsx(G1,{as:d.div,custom:o,variants:H1,animate:"panel",$isOpened:o,transition:{type:U},children:t==null?void 0:t.map((f,M)=>e.jsx(L1,{onClick:()=>r(M),name:f.name,tags:f.tags,isActive:M===n},Symbol(M).toString()))}),e.jsx(z,{onClick:()=>c(b(0))}),window.innerWidth<1420&&e.jsx(X1,{$isOpened:o,onClick:()=>l(!o)})]})}const Y1=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${i.background};
  gap: 2rem;
`,J1=a.table`
  border: 2px solid ${i.color};
  text-align: center;

  & td {
    padding-inline: 0.2rem;
  }

  & tr:nth-child(even) {
    background-color: ${i.primary};
  }
`,Q1=()=>{const[t,s]=u.useState([]);return u.useEffect(()=>{O("message").then(n=>s(n)).catch(console.log)},[]),e.jsx(Y1,{children:e.jsxs(J1,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Message"}),e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Date"})]})}),e.jsx("tbody",{children:t.map(n=>e.jsxs("tr",{children:[e.jsx("td",{scope:"row",children:n.Message}),e.jsx("td",{children:n.Name}),e.jsx("td",{children:n.Date.toDate().toDateString()})]}))})]})})},ee=a.div`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999999;
  border-radius: 50%;
  backdrop-filter: invert(1) grayscale(1);
  transform: translate(-50%, -50%);

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`,te=()=>{const t=T(),s=y(n=>n.hoverState.value);return console.log(s),e.jsx(ee,{style:{top:t.y,left:t.x},children:e.jsx(w,{mode:"wait",children:s&&e.jsxs(e.Fragment,{children:[e.jsx(d.div,{initial:{x:"-50%",y:"-50%",scale:1},animate:{scale:[.9,1.05,.9],x:"-50%",y:"-50%",transition:{repeat:1/0,duration:1}},exit:{scale:.85,transition:{duration:1}},style:{border:"2px solid #2c2c2c"}}),e.jsx(d.div,{initial:{x:"-50%",y:"-50%",scale:1},animate:{scale:[1.15,1.3,1.15],x:"-50%",y:"-50%",transition:{repeat:1/0,duration:1}},exit:{scale:.85,transition:{duration:1}},style:{border:"2px solid #1c1c1c"}}),e.jsx(d.div,{initial:{x:"-50%",y:"-50%",scale:1},animate:{scale:[1.4,1.55,1.4],x:"-50%",y:"-50%",transition:{repeat:1/0,duration:1}},exit:{scale:.85,transition:{duration:1}},style:{border:"2px solid #000000"}})]})})})};var se={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ne=a.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${i.primary};
`;let L=!1;function ie(){const t=y(o=>o.sectionState.value),[s,n]=v.useState(!1),r=new URLSearchParams(window.location.search).get("admin");return v.useEffect(()=>{setTimeout(()=>L=!0,1e3)},[]),r===se.VITE_ADMIN_KEY?e.jsx(Q1,{}):e.jsxs(ne,{children:[e.jsx(w,{mode:"wait",children:t===m.main?e.jsx(x1,{initial:L}):""}),e.jsx(w,{mode:"wait",children:t===m.projects?e.jsx(U1,{}):""}),e.jsx(w,{mode:"wait",children:t===m.persona?e.jsx(b1,{}):""}),e.jsx(w,{mode:"wait",children:t===m.contact?e.jsx(C1,{submitted:s,setSubmitted:n}):""}),e.jsx(te,{}),e.jsx("svg",{"aria-hidden":"true",focusable:"false",children:e.jsxs("linearGradient",{id:"my-cool-gradient",x2:"1",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#4158D0"}),e.jsx("stop",{offset:"46%",stopColor:"#C850C0"}),e.jsx("stop",{offset:"100%",stopColor:"#FFCC70"})]})})]})}const ae=Y({reducer:{sectionState:a1,hoverState:e1}});J.createRoot(document.getElementById("root")).render(e.jsx(u.StrictMode,{children:e.jsx(Q,{store:ae,children:e.jsx(ie,{})})}));
