"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[101],{8101:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(6566),l=a(1325),n=a(5962),o=a(3590),i=a(5532);const s=function({searchField:e=[{accessor:"",value:""}],onCreate:t}){const[a,s]=(0,r.useState)(e[0].accessor),[d,c]=(0,r.useState)("");return r.createElement(l.i,null,r.createElement(n.Z,{options:e,defaultValue:a,onChange:e=>s(e.target.value)}),r.createElement(o.Z,{onChange:e=>c(e.target.value)}),r.createElement(i.Z,{onClick:()=>t({type:a,value:d})},"\uac80\uc0c9"))}},1325:(e,t,a)=>{a.d(t,{_:()=>l,i:()=>n});var r=a(9149);const l=r.Z.div`
  margin-bottom: 30px;
  padding: 20px;

  border: 1px solid ${({theme:e})=>e.colors.gray600};
  border-radius: 4px;
  background-color: ${({theme:e})=>e.colors.gray100};

  > div {
    display: flex;
    margin-bottom: 6px;
  }
  dl {
    display: flex;
    align-items: center;
    width: 100%;
  }

  dt {
    min-width: 100px;
  }

  select {
    width: 140px;
  }

  input {
    min-width: 140px;
  }

  dt,
  dd {
    ${({theme:e})=>e.fonts.L100};
    color: ${({theme:e})=>e.colors.gray900};
  }
`,n=r.Z.div`
  display: flex;
  align-items: center;
  gap: 6px;

  width: 100%;
`}}]);