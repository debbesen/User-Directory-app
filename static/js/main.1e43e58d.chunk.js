(this["webpackJsonpuser-directory-app"]=this["webpackJsonpuser-directory-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n.n(r),i=n(12),u=n.n(i);n(20),n(21);var a=function(e){return e.type,e.className,e.children,e.onClick,Object(c.jsx)("button",{type:"button",className:"btn btn-secondary",children:"Add New"})};var j=function(){return Object(c.jsx)("div",{className:"jumbotron text-center",children:Object(c.jsx)("h1",{children:"Employee Directory"})})},o=n(14),d=n(13),l=n.n(d),b={getUsers:function(){return l.a.get("https://randomuser.me/api/?results=10&nat=us")}},h=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];Object(r.useEffect)((function(){b.getUsers().then((function(e){return s(e.data.results)})).catch((function(e){return console.log(e)}))}),[]);return Object(c.jsx)("div",{children:Object(c.jsx)("table",{className:"table table-bordered table-dark",children:Object(c.jsxs)("tbody",{children:[Object(c.jsx)("tr",{children:["name","email","number"].map((function(e,t){return Object(c.jsx)("th",{scope:"col",children:e},t)}))}),n.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.cell})]},e.login.uuid)}))]})})})},O=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{}),Object(c.jsx)(a,{}),Object(c.jsx)(h,{})]})};var x=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(O,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};u.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}},[[39,1,2]]]);
//# sourceMappingURL=main.1e43e58d.chunk.js.map