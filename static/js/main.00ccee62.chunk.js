(this["webpackJsonptop-ramen"]=this["webpackJsonptop-ramen"]||[]).push([[0],{19:function(e,a,t){e.exports=t(39)},24:function(e,a,t){},25:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=(t(24),t(25),t(10)),s=t(17),m=t.n(s);var u=function(e){return r.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-1"},r.a.createElement("div",{className:"card text-white bg-dark mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,e.brand),r.a.createElement("p",null,e.variety),r.a.createElement("p",null,e.style),r.a.createElement("p",null,e.country),r.a.createElement("p",null,e.style),r.a.createElement("p",null,e.stars),r.a.createElement("p",null,e.top_ten))))},i=[],d=new Set;var v=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),v=s[0],b=s[1],E=Object(n.useState)([]),p=Object(o.a)(E,2),y=p[0],f=p[1];return Object(n.useEffect)((function(){fetch("http://starlord.hackerearth.com/TopRamen").then((function(e){return e.json()})).then((function(e){b(!0),f(e)}),(function(e){b(!0),l(e)}))}),[]),t?r.a.createElement("div",null,"Error: ",t.message):v?(console.log("Items: ",y),r.a.createElement("div",{className:"row"},y.map((function(e){return function(e){return i.push(e.Country),d.add(e.country),r.a.createElement(u,{key:m.a.generate(),brand:e.Brand,variety:e.Variety,style:e.Style,country:e.Country,stars:e.Stars,top_ten:e.top_ten})}(e)})),console.log("Set items are : "),d.forEach((function(e){return console.log(e)})))):r.a.createElement("div",null,"Loading...")};var b=function(){return console.log("List countries is called."),console.log("data is : "+i),r.a.createElement("div",{className:"row"},i.map((function(e,a){return function(e,a){return r.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-1",key:a},r.a.createElement("div",{className:"card text-white bg-dark mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,e))))}(e,a)})))},E=t(9),p=t(1);var y=function(){return r.a.createElement(E.a,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top justify-content-between navbar-custom"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav mr-auto"},r.a.createElement(E.b,{className:"nav-item nav-link active",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement(E.b,{className:"nav-item nav-link",to:"/countries"},"List Country")),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search by Brand","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/"},r.a.createElement(p.a,{to:"/"})),r.a.createElement(p.b,{path:"/countries"},r.a.createElement(b,null))))))};var f=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"})};var g=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(v,null),r.a.createElement(f,null))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.00ccee62.chunk.js.map