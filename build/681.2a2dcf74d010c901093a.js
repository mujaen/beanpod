"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[681],{8681:(e,t,l)=>{l.r(t),l.d(t,{default:()=>E});var n=l(6566),r=l(2929),o=l(2777),a=l(5532),i=l(3812),c=l(9149);const m=c.Z.div`
  background-color: ${({theme:e})=>e.colors.gray300};

  display: flex;

  height: 100vh;
  width: 100%;
`,p=c.Z.div`
  height: 562px;

  margin: auto;

  display: grid;
  grid-template-columns: minmax(40%, 400px) minmax(60%, 600px);
`,s=c.Z.div`
  box-sizing: border-box;
  background-color: ${({theme:e})=>e.colors.blue500};

  color: ${({theme:e})=>e.colors.white900};
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 150px 0;

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
`,u=c.Z.div`
  background-color: #fff;

  display: grid;
  align-content: center;

  gap: 24px;

  padding: 0 46px;
`,d=c.Z.form`
  display: flex;
  flex-direction: column;

  color: #333;
  ${({theme:e})=>e.fonts.M200};
  letter-spacing: 0.1px;

  label {
    margin-bottom: 5px;
  }

  input {
    ${({theme:e})=>e.fonts.L200};

    border-radius: 4px;
    border: none;
    outline: none;

    background-color: ${({theme:e})=>e.colors.gray100};

    margin-bottom: 19px;

    padding: 18px 15px;

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
    color: #fff;
    ${({theme:e})=>e.fonts.M200};

    height: 55px;
    width: 100%;
  }
`,g=c.Z.span`
  margin-top: 16px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1px;
  align-self: center;

  a {
    margin-left: 6px;
    color: ${({theme:e})=>e.colors.blue500};
    font-weight: 700;

    :visited,
    :link {
      color: ${({theme:e})=>e.colors.blue500};
    }
  }
`;var h=Object.defineProperty,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,v=(e,t,l)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,y=(e,t)=>{for(var l in t||(t={}))f.call(t,l)&&v(e,l,t[l]);if(b)for(var l of b(t))x.call(t,l)&&v(e,l,t[l]);return e};const E=function({}){var e;const{register:t,formState:{errors:l},handleSubmit:c}=(0,o.cI)({mode:"onSubmit",defaultValues:{user_id:"",pdata:""}});return n.createElement(m,null,n.createElement(p,null,n.createElement(s,null,n.createElement(i.Z,{icon:"logo",width:200,height:200}),n.createElement("h1",null,"Welcome to BxB"),n.createElement("p",null,"\uac00\uce58\uad00\uc744 \ud1b5\ud55c \ub9cc\ub0a8\uc744 \ud560 \uc218 \uc788\ub3c4\ub85d"),n.createElement("p",null,n.createElement("strong",null,"\uc815\uc2e0\uc801, \uac10\uc131\uc801 \ucee8\ud150\uce20\ub97c \uc81c\uacf5\ud558\ub294 \ub370\uc774\ud305\uc571"))),n.createElement(u,null,n.createElement("h1",null,"\ub85c\uadf8\uc778"),n.createElement(d,{onSubmit:c((e=>{return t=this,l=null,n=function*(){console.log(e)},new Promise(((e,r)=>{var o=e=>{try{i(n.next(e))}catch(e){r(e)}},a=e=>{try{i(n.throw(e))}catch(e){r(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,a);i((n=n.apply(t,l)).next())}));var t,l,n}))},n.createElement("label",null,"\uc544\uc774\ub514"),n.createElement("input",y({type:"text",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"},t("user_id",{required:!0,minLength:{value:4,message:"6\uc790 \uc774\uc0c1 \ud544\uc218"}}))),n.createElement("label",null,"\ube44\ubc00\ubc88\ud638"),n.createElement("input",y({type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"},t("pdata",{required:!0,minLength:{value:4,message:"4\uc790 \uc774\uc0c1 \ud544\uc218"}}))),l.pdata&&n.createElement("span",null,null==(e=l.pdata)?void 0:e.message),n.createElement(r.rU,{to:"/"},"\uc544\uc774\ub514\u318d\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"),n.createElement(a.Z,{type:"submit"},"\ub85c\uadf8\uc778"),n.createElement(g,null,"\uc544\uc9c1 \ud68c\uc6d0\uc774 \uc544\ub2cc\uac00\uc694?",n.createElement(r.rU,{to:"/join"},"\ud68c\uc6d0\uac00\uc785"))))))}}}]);