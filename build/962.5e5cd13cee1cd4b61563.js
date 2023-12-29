"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[962],{5962:(e,r,o)=>{o.d(r,{Z:()=>b});var t=o(6566);const a=o(9149).Z.select`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  height: 26px;
  width: 100%;

  font-size: 12px;
  color: ${({theme:e,disabled:r})=>r?e.colors.gray600:e.colors.gray800};

  cursor: ${({disabled:e})=>e?"default":"pointer"};

  border: 1px solid
    ${({theme:e,disabled:r})=>r?e.colors.gray400:e.colors.gray600};
  background-color: ${({theme:e,disabled:r})=>r?e.colors.gray100:e.colors.white900};
`;var n=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,r,o)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;const b=function(e){var r,o=e,{options:n=[],onChange:b}=o,d=((e,r)=>{var o={};for(var t in e)i.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&s)for(var t of s(e))r.indexOf(t)<0&&p.call(e,t)&&(o[t]=e[t]);return o})(o,["options","onChange"]);return t.createElement(a,(r=((e,r)=>{for(var o in r||(r={}))i.call(r,o)&&f(e,o,r[o]);if(s)for(var o of s(r))p.call(r,o)&&f(e,o,r[o]);return e})({},d),l(r,c({onChange:b}))),n.map((e=>t.createElement("option",{key:e.accessor,value:e.accessor},e.value))))}}}]);