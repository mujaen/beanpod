"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[178],{1178:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var n=l(6566),r=l(2777),o=l(3812),a=l(5532),c=l(9149),i=Object.defineProperty,m=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,l)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,h=(e,t)=>{for(var l in t||(t={}))s.call(t,l)&&u(e,l,t[l]);if(m)for(var l of m(t))p.call(t,l)&&u(e,l,t[l]);return e};const d=c.Z.div`
  display: flex;
  width: 100%;
`,b=c.Z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({theme:e})=>e.colors.white900};
`,g=c.Z.div`
  h1 {
    margin-bottom: 10px;

    ${({theme:e})=>e.fonts.M500};
    line-height: 28px;
  }

  h1 span {
    display: block;
  }

  p {
    margin-bottom: 40px;

    ${({theme:e})=>e.fonts.L100};
    color: ${({theme:e})=>e.colors.gray900};
  }
`,f=c.Z.form`
  display: flex;
  flex-direction: column;

  color: #333;
  ${({theme:e})=>e.fonts.M200};
  letter-spacing: 0.1px;

  label {
    margin-bottom: 7px;

    ${({theme:e})=>e.fonts.R100};
  }

  input {
    ${({theme:e})=>e.fonts.L100};

    border-radius: 4px;
    border: none;
    outline: none;

    background-color: ${({theme:e})=>e.colors.white900};
    border: 1px solid ${({theme:e})=>e.colors.gray400};

    margin-bottom: 19px;

    padding: 12px 10px;

    ::placeholder {
      color: #959ca8;
    }

    :last-of-type {
      margin-bottom: 16px;
    }
  }

  a {
    align-self: end;
    margin-bottom: 38px;

    :visited,
    :link {
      color: #000;
    }
  }

  button {
    background-color: ${({theme:e})=>e.colors.blue500};
    border: none;
    border-radius: 4px;

    color: #fff;
    ${({theme:e})=>e.fonts.R100};

    height: 40px;
    width: 100%;
  }
`,x=c.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({theme:e})=>e.colors.blue500};

  color: ${({theme:e})=>e.colors.white900};

  h1 {
    margin-bottom: 16px;
  }

  p {
    ${({theme:e})=>e.fonts.L100};
    line-height: 16px;
  }

  strong {
    ${({theme:e})=>e.fonts.M100};
  }
`;const y=function({}){var e;const{register:t,formState:{errors:l},handleSubmit:c}=(0,r.cI)({mode:"onSubmit",defaultValues:{email:"",pdata:""}});return n.createElement(d,null,n.createElement(b,null,n.createElement(g,null,n.createElement("h1",null,n.createElement("span",null,"\ud68c\uc6d0\uac00\uc785 \uc815\ubcf4\ub97c"),n.createElement("span",null,"\uc785\ub825\ud574 \uc8fc\uc138\uc694.")),n.createElement("p",null,"\uc544\ub798\uc758 \uac00\uc785\uc815\ubcf4\ub97c \uc785\ub825 \ud6c4 \ud68c\uc6d0\uac00\uc785 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud574 \uc8fc\uc138\uc694."),n.createElement(f,{onSubmit:c((e=>{return t=this,l=null,n=function*(){console.log(e)},new Promise(((e,r)=>{var o=e=>{try{c(n.next(e))}catch(e){r(e)}},a=e=>{try{c(n.throw(e))}catch(e){r(e)}},c=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,a);c((n=n.apply(t,l)).next())}));var t,l,n}))},n.createElement("label",null,"\uc774\uba54\uc77c\uc8fc\uc18c"),n.createElement("input",h({type:"text",placeholder:"\uc774\uba54\uc77c\uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"},t("email",{required:!0,minLength:{value:4,message:"6\uc790 \uc774\uc0c1 \ud544\uc218"}}))),n.createElement("label",null,"\ube44\ubc00\ubc88\ud638"),n.createElement("input",h({type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"},t("pdata",{required:!0,minLength:{value:4,message:"4\uc790 \uc774\uc0c1 \ud544\uc218"}}))),n.createElement("label",null,"\ube44\ubc00\ubc88\ud638 \ud655\uc778"),n.createElement("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694",onBlur:()=>alert("blur")}),l.pdata&&n.createElement("span",null,null==(e=l.pdata)?void 0:e.message),n.createElement(a.Z,{type:"submit"},"\ud68c\uc6d0\uac00\uc785")))),n.createElement(x,null,n.createElement(o.Z,{icon:"logo",width:200,height:200}),n.createElement("h1",null,"Welcome to BxB"),n.createElement("p",null,"\uac00\uce58\uad00\uc744 \ud1b5\ud55c \ub9cc\ub0a8\uc744 \ud560 \uc218 \uc788\ub3c4\ub85d"),n.createElement("p",null,n.createElement("strong",null,"\uc815\uc2e0\uc801, \uac10\uc131\uc801 \ucee8\ud150\uce20\ub97c \uc81c\uacf5\ud558\ub294 \ub370\uc774\ud305\uc571"))))}}}]);