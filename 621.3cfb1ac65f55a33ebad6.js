"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[621],{2621:(e,l,t)=>{t.r(l),t.d(l,{data:()=>b,default:()=>f});var n=t(6566),a=t(1835),r=t(9149);const c=r.Z.div`
  h3:first-of-type {
    margin-top: 0;
  }

  h3 {
    color: ${({theme:e})=>e.colors.gray800};
    ${({theme:e})=>e.fonts.M200};

    margin-top: 50px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.gray500};
  }

  ul {
    display: flex;
    gap: 30px;

    margin-top: 30px;
  }

  button:first-of-type {
    color: ${({theme:e})=>e.colors.white900};
    border: 1px solid ${({theme:e})=>e.colors.point300};
    background-color: ${({theme:e})=>e.colors.point200};
  }

  dl {
    display: flex;
    border-bottom: 1px solid ${({theme:e})=>e.colors.gray500};
  }

  dt {
    color: ${({theme:e})=>e.colors.gray900};
  }

  dd {
    color: ${({theme:e})=>e.colors.gray800};
  }

  dt,
  dd {
    display: flex;
    align-items: center;

    width: 100%;
    height: 38px;
    padding: 0 16px;
    box-sizing: border-box;
    text-align: left;
  }

  select {
    width: 100%;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  button {
    border-radius: 4px;
  }
`,m=r.Z.dt`
  background-color: ${({theme:e})=>e.colors.gray200};

  ${({theme:e})=>e.fonts.R100};
`,u=r.Z.dd`
  ${({theme:e})=>e.fonts.L100};
`;const i=function({data:e,renderItem:l}){return n.createElement(c,null,l(e))};var o=t(5962),s=t(5532);const E=r.Z.div`
  display: flex;
  align-items: center;
  justify-content: ${({align:e})=>e};
  gap: 10px;

  margin-top: 30px;
`;const d=function({align:e="left",children:l}){return n.createElement(E,{align:e},l)};var p=t(4524),_=t(1667),g=t(3590);const h=function({show:e,suspend:l,onClose:t}){return n.createElement(_.Z,{show:e,onClose:t},n.createElement("h2",null,"\ud68c\uc6d0 \uc81c\uc7ac"),n.createElement("dl",null,n.createElement("dt",null,"\uc720\ud615"),n.createElement("dd",null,(e=>{switch(e){default:case"waring":return"\uacbd\uace0";case"pause":return"\uc77c\uc2dc\uc815\uc9c0";case"ban":return"\uc601\uad6c\uc815\uc9c0"}})(l))),n.createElement("dl",null,n.createElement("dt",null,"\uc815\uc9c0 \uc0ac\uc720"),n.createElement("dd",null,n.createElement(g.Z,{placeholder:"\uc120\ud0dd"}))),n.createElement(s.Z,{size:"medium",onClick:()=>console.log("patch")},"\ud655\uc778"))},b={seq:1,rank:"gold",email:"jinjerkim@gmail.com",nick_name:"\uc9c4\uc800",kakao_id:"jinjer",phone:"010-1234-5678",age:34,gender:"male",height:172,job:"\ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790",education_level:"4\ub144\uc81c",location:"\uc11c\uc6b8",mbti:"ENFJ",hobbies:"\uc545\uae30\uc5f0\uc8fc",drink:"1",smoke:"2",religion:"\uae30\ub3c5\uad50",is_phone_verified:!0,is_profile_public:"waiting",is_profile_contents:!1,state:"active",referrer_nick_name:"\uc624\ubc15\uc0ac",is_special_member:!1,is_pause:!1,is_suspended:!1,suspension_reason:"\ud5c8\uc704 \ud504\ub85c\ud544",is_phone_block:!0,warning_cnt:2,min_age:27,max_age:35,preferred_location_1:"\uc11c\uc6b8",preferred_location_2:"\uc778\ucc9c",is_drinker:"\uc0c1\uad00\uc5c6\uc74c",is_religion:"\uc0c1\uad00\uc5c6\uc74c",is_smoker:"\uc0c1\uad00\uc5c6\uc74c",is_hobbies:"\uc0b0\ucc45",created_at:"2023/09/05",updated_at:"",deleted_at:""};const f=function({}){const[e,l]=(0,n.useState)(),[t,r]=(0,n.useState)("warning"),c=[{accessor:"diamond",value:"\ub2e4\uc774\uc544"},{accessor:"gold",value:"\uace8\ub4dc"},{accessor:"silver",value:"\uc2e4\ubc84"}],E=[{accessor:"waiting",value:"\ub300\uae30"},{accessor:"public",value:"\uacf5\uac1c"},{accessor:"private",value:"\ube44\uacf5\uac1c"}];return n.createElement(n.Fragment,null,n.createElement(a.Z,{title:"\ud68c\uc6d0 \uc815\ubcf4"}),n.createElement(p.AU,null,n.createElement(i,{data:b,renderItem:e=>n.createElement(n.Fragment,null,n.createElement("h3",null,"\uae30\ubcf8 \uc815\ubcf4"),n.createElement("dl",null,n.createElement(m,null,"\ub2c9\ub124\uc784"),n.createElement(u,null,e.nick_name),n.createElement(m,null,"\uc774\uba54\uc77c"),n.createElement(u,null,e.email),n.createElement(m,null,"\ub098\uc774"),n.createElement(u,null,e.age,"\uc138"),n.createElement(m,null,"\uc131\ubcc4"),n.createElement(u,null,"male"===e.gender?"\ub0a8\uc131":"\uc5ec\uc131")),n.createElement("dl",null,n.createElement(m,null,"\ud0a4"),n.createElement(u,null,e.height,"cm"),n.createElement(m,null,"\ub4f1\ub85d\uc77c"),n.createElement(u,null,e.created_at),n.createElement(m,null,"\uc218\uc815\uc77c"),n.createElement(u,null,e.updated_at),n.createElement(m,null,"\ud0c8\ud1f4\uc77c"),n.createElement(u,null,e.deleted_at)),n.createElement("dl",null,n.createElement(m,null,"\uc804\ud654\ubc88\ud638"),n.createElement(u,null,e.phone),n.createElement(m,null,"\uce74\uce74\uc624\ud1a1 \uc544\uc774\ub514"),n.createElement(u,null,e.kakao_id),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null)),n.createElement("h3",null,"\ud68c\uc6d0 \uc0c1\ud0dc"),n.createElement("dl",null,n.createElement(m,null,"\ub4f1\uae09"),n.createElement(u,null,n.createElement(o.Z,{options:c,defaultValue:e.rank,onChange:e=>alert(e.target.value)})),n.createElement(m,null,"\ud504\ub85c\ud544 \uacf5\uac1c \uc5ec\ubd80"),n.createElement(u,null,n.createElement(o.Z,{options:E,defaultValue:e.is_profile_public,onChange:e=>alert(e.target.value)})),n.createElement(m,null,"\uc6b0\uc218\ud68c\uc6d0 \uc5ec\ubd80"),n.createElement(u,null,e.is_special_member?"Y":"N"),n.createElement(m,null,"\uc18c\uac1c\uae00 \ub4f1\ub85d \uc5ec\ubd80"),n.createElement(u,null,e.is_profile_contents?"Y":"N")),n.createElement("dl",null,n.createElement(m,null,"\uc9c0\uc778\ucc28\ub2e8 \uc5ec\ubd80"),n.createElement(u,null,e.is_phone_block?"Y":"N"),n.createElement(m,null,"\uc77c\uc2dc\uc815\uc9c0 \uc5ec\ubd80"),n.createElement(u,null,e.is_pause?"Y":"N"),n.createElement(m,null,"\uc601\uad6c\uc815\uc9c0 \uc5ec\ubd80"),n.createElement(u,null,e.is_suspended?"Y":"N"),n.createElement(m,null,"\uc815\uc9c0 \uc0ac\uc720"),n.createElement(u,null,e.suspension_reason)),n.createElement("dl",null,n.createElement(m,null,"\ucd94\ucc9c\uc778"),n.createElement(u,null,e.referrer_nick_name),n.createElement(m,null,"\uacbd\uace0 \ud69f\uc218"),n.createElement(u,null,e.warning_cnt),n.createElement(m,null,"\ubc88\ud638\uc778\uc99d \uc5ec\ubd80"),n.createElement(u,null,e.is_phone_verified?"Y":"N"),n.createElement(m,null,"\uc0c1\ud0dc"),n.createElement(u,null,(e=>{switch(e){default:case"active":return"\ud65c\ub3d9\uc911";case"dormancy":return"\ud734\uba74";case"pause":return"\uc77c\uc2dc\uc815\uc9c0";case"ban":return"\uc601\uad6c\uc815\uc9c0"}})(e.state))),n.createElement(d,{align:"center"},n.createElement(s.Z,{size:"medium",onClick:()=>{r("ban"),l(!0)}},"\uc601\uad6c\uc815\uc9c0"),n.createElement(s.Z,{size:"medium",onClick:()=>{r("pause"),l(!0)}},"\uc77c\uc2dc\uc815\uc9c0"),n.createElement(s.Z,{size:"medium",onClick:()=>{r("warning"),l(!0)}},"\uacbd\uace0\ubd80\uc5ec")),n.createElement("h3",null,"\ud504\ub85c\ud544 \uc815\ubcf4"),n.createElement("dl",null,n.createElement(m,null,"\uc9c1\uc5c5"),n.createElement(u,null,e.job),n.createElement(m,null,"\ud559\ub825"),n.createElement(u,null,e.education_level),n.createElement(m,null,"\uc9c0\uc5ed"),n.createElement(u,null,e.location),n.createElement(m,null,"MBTI"),n.createElement(u,null,e.mbti)),n.createElement("dl",null,n.createElement(m,null,"\ud761\uc5f0"),n.createElement(u,null,e.smoke),n.createElement(m,null,"\uc74c\uc8fc"),n.createElement(u,null,e.drink),n.createElement(m,null,"\uc885\uad50"),n.createElement(u,null,e.religion),n.createElement(m,null,"\ucde8\ubbf8"),n.createElement(u,null,e.hobbies)),n.createElement("dl",null,n.createElement(m,null,"\ub098\uc758 \uc2a4\ud0c0\uc77c"),n.createElement(u,null,"E001, E018, E026"),n.createElement(m,null,"\uc774\uc0c1\ud615"),n.createElement(u,null,"B001, B018, B026"),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null),n.createElement(u,null)),n.createElement("h3",null,"\uc774\uc0c1\ud615 \uc124\uc815"),n.createElement("dl",null,n.createElement(m,null,"\ucd5c\uc18c \ub098\uc774"),n.createElement(u,null,e.min_age,"\uc138"),n.createElement(m,null,"\ucd5c\ub300 \ub098\uc774"),n.createElement(u,null,e.max_age,"\uc138"),n.createElement(m,null,"\uc120\ud638 \uc9c0\uc5ed1"),n.createElement(u,null,e.preferred_location_1),n.createElement(m,null,"\uc120\ud638 \uc9c0\uc5ed2"),n.createElement(u,null,e.preferred_location_2)),n.createElement("dl",null,n.createElement(m,null,"\uc74c\uc8fc \uc5ec\ubd80"),n.createElement(u,null,e.is_drinker),n.createElement(m,null,"\uc885\uad50 \uc5ec\ubd80"),n.createElement(u,null,e.is_religion),n.createElement(m,null,"\ud761\uc5f0 \uc5ec\ubd80"),n.createElement(u,null,e.is_smoker),n.createElement(m,null,"\ucde8\ubbf8"),n.createElement(u,null,e.is_hobbies)))})),n.createElement(h,{show:e,suspend:t,onClose:e=>l(e)}))}}}]);