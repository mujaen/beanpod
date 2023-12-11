"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[667],{1667:(e,t,o)=>{o.d(t,{Z:()=>h});var r=o(6566),a=o(3812),n=o(9149),i=o(6254);const s=i.F4`
  0% {
    transform: scale(1);
  }
  99.9% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`,d=i.F4`
  0% { 
    background: transparent; 
  } 
  100% { 
    background: rgba(0, 0, 0, .7); 
  }
`,l=i.F4`
  0% {
    background: rgba(0, 0, 0, .7); 
  }
  100% { 
    background: transparent; 
  }
`,c=i.F4`
  0% {
    /* 모달 콘텐츠를 하단에 위치시킴 */
    transform: scale(.8) translateY(300px);
    opacity: 0;
  }
  100% {
    /* 모달 콘텐츠를 본래 위치로 돌려놓음 */
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`,f=i.F4`
  0% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  100% {
    transform: scale(.8) translateY(300px);
    opacity: 0;
  }
`,p=n.Z.div`
  margin: auto;
  height: auto;
  background: #fff;
  padding: 30px;
  display: inline-block;
  border-radius: 3px;
  position: relative;
  box-sizing: border-box;

  h2 {
    ${({theme:e})=>e.fonts.R400};
    margin-bottom: 30px;
    text-align: left;
  }

  p {
    font-size: 18px;
    line-height: 22px;
  }

  dl {
    display: flex;
    border-bottom: 1px solid ${({theme:e})=>e.colors.gray500};
  }

  dl:first-of-type {
    border-top: 1px solid ${({theme:e})=>e.colors.gray500};
  }

  dl:last-of-type {
    margin-bottom: 30px;
  }

  dt {
    width: 100px;

    color: ${({theme:e})=>e.colors.gray900};
    background-color: ${({theme:e})=>e.colors.gray200};

    ${({theme:e})=>e.fonts.R100};
  }

  dd {
    width: 180px;

    color: ${({theme:e})=>e.colors.gray800};
    ${({theme:e})=>e.fonts.L100};
    line-height: 1.2;
  }

  dt,
  dd {
    display: flex;
    align-items: center;

    padding: 6px 16px;
    box-sizing: border-box;
    text-align: left;
  }

  input {
    width: 100%;
  }
`,m=n.Z.button`
  position: fixed;
  right: 15px;
  top: 15px;
  background: none;
  border: none;
  stroke: #ffffff;
  cursor: pointer;
`,b=n.Z.div`
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  vertical-align: middle;
  transition: 0.3s;
  overflow: auto;
`,g=n.Z.div`
  overflow: hidden;

  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  height: 100%;
  width: 100%;
  z-index: 1;
  /* hidden 처리 */
  transform: scale(0);

  &.show {
    transform: scale(1);

    > div {
      background: transparent;
      animation: ${d} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    > div > div {
      opacity: 0;
      animation: ${c} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }

  &.hidden {
    transform: scale(1);

    animation: ${s} 0s 0.5s linear forwards;

    > div {
      animation: ${l} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    > div > div {
      animation: ${f} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }
`;const h=function({show:e,onClose:t,children:o}){const n=e?"show":"boolean"===typeof e?"hidden":"";return(0,r.useEffect)((()=>{const t=document.getElementsByTagName("body")[0];e?t.style.overflow="hidden":t.removeAttribute("style")}),[e]),r.createElement(g,{className:`${n}`},r.createElement(b,null,r.createElement(p,null,r.createElement(m,{onClick:()=>t(!1)},r.createElement(a.Z,{icon:"close",width:40,height:40})),o)))}}}]);