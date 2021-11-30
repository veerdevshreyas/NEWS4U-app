(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),o=n.n(s),r=(n(9),n(2)),l=(n(10),n(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-a active","aria-current":"page",href:"#"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function d(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:[e.heading," "]}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){console.log("On change"),s(e.target.value)},id:"myBox",rows:"3",style:{backgroundColor:"dark"===e.mode?"grey":"light"}})}),Object(l.jsx)("button",{className:"btn btn-outline-warning bg-".concat("light"===e.mode?"dark":"light"," mx-2"),onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Connverted to Uppercase","success")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{className:"btn btn-outline-warning bg-".concat("light"===e.mode?"dark":"light"," mx-2"),onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Connverted to Lowercase","success")},children:"Convert to Lowercase"}),Object(l.jsx)("button",{className:"btn btn-outline-warning bg-".concat("light"===e.mode?"dark":"light"," mx-2"),onClick:function(){s(""),e.showAlert("Message box cleared","success")},children:"Clear Text"}),Object(l.jsx)("button",{className:"btn btn-outline-warning bg-".concat("light"===e.mode?"dark":"light"," mx-2"),onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied","success")},children:"Copy Text"}),Object(l.jsx)("button",{className:"btn btn-outline-warning bg-".concat("light"===e.mode?"dark":"light"," mx-2"),onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra Spaces removed","success")},children:"Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)("h1",{children:"Your text summary"}),Object(l.jsxs)("p",{children:[c.split(" ").length," words and ",c.length]}),Object(l.jsxs)("p",{children:[.008*c.split(" ").length," Minutes to read this!!!"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:c.length>0?c:"Enter text to preview it here"})]})]})}function b(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:e.alert.msg})," ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)]})}i.defaultProps={title:"set title here",home:"Home text here",about:"About text here"};var h=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),o=Object(r.a)(s,2),h=o[0],u=o[1],j=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),5e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"NEWS4U",home:"Home",about:"About Us",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#042743",j("Dark Mode has been Enabled","success"),document.title="NEWS4U - Dark Mode",setInterval((function(){document.title="NEWS4U - Amazing"}),2e3),setInterval((function(){document.title="NEWS4U - Superb"}),1400)):(c("light"),document.body.style.backgroundColor="white",j("Light Mode has been Enabled","success"),document.title="NEWS4U - Light Mode")}}),Object(l.jsx)(b,{alert:h}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(d,{showAlert:j,heading:"Enter the text to analyze",mode:n})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.09e3c87b.chunk.js.map