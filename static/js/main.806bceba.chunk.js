(this.webpackJsonpmeep=this.webpackJsonpmeep||[]).push([[0],{18:function(e,t,a){},24:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(11),c=a.n(n),r=(a(24),a(18),a(8)),o=a(2),i=a(9),p=a(13),b=a(1),j=["places"],d={height:"100vh",width:"100vw"},u={lat:38.7223,lng:-9.1393},h={styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],disableDefaultUI:!0,zoomControl:!0},f=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(l.useState)(null),c=Object(i.a)(n,2),o=c[0],f=c[1];Object(l.useEffect)((function(){fetch("https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources?").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var m=a.slice(0,200);console.log(m);var y=Object(p.d)({id:"google-map-script",googleMapsApiKey:"AIzaSyAGi1th-ZDs-50wbcqOBQdp5SS0K_WA7tc",libraries:j}),g=y.isLoaded;return y.loadError?"Error loading maps":g?Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"https://meep.app/",target:"_blank",rel:"noopener",children:Object(b.jsx)("img",{src:"https://meep.app/wp-content/uploads/2018/06/Logo-Meep.png",style:{width:"75px"}})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{to:"/",className:"nav-link active","aria-current":"page",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{to:"/Vehicles",className:"nav-link",children:"Vehicles"})})]})})]})}),Object(b.jsx)("div",{children:Object(b.jsxs)(p.a,{mapContainerStyle:d,zoom:8,center:u,options:h,children:[m.map((function(e){return Object(b.jsx)(p.c,{position:{lat:e.y,lng:e.x},icon:{url:"https://meep.app/wp-content/uploads/2018/06/Logo-Meep.png",origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15),scaledSize:new window.google.maps.Size(30,30)},onMouseOver:function(){f(e)}},e.id)})),o?Object(b.jsx)(p.b,{position:{lat:o.y,lng:o.x},onMouseOut:function(){f(null)},children:Object(b.jsx)("div",{className:o.batteryLevel>25?"text-success":"text-danger",children:Object(b.jsxs)("h2",{children:[Object(b.jsx)("img",{src:"https://meep.app/wp-content/uploads/2018/06/Logo-Meep.png",style:{width:"30px"}}),"Battery Level: ",o.batteryLevel]})})}):null]})})]}):"Loading Maps"},m=function(e){for(var t=e.paginate,a=e.postsPerPage,l=e.totalPosts,s=[],n=0;n<=Math.ceil(l/a);n++)s.push(n);return Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{className:"pagination",children:s.map((function(e){return Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{onClick:function(){return t(e)},className:"page-link",children:e})},e)}))})})},y=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(l.useState)(""),c=Object(i.a)(n,2),o=c[0],p=c[1],j=Object(l.useState)(1),d=Object(i.a)(j,2),u=d[0],h=d[1],f=Object(l.useState)(10),y=Object(i.a)(f,1)[0];Object(l.useEffect)((function(){fetch("https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources?").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var g=[];g=a.slice(0,200),console.log(g);var v=u*y,x=v-y,O=g.slice(x,v).filter((function(e){return e.model.toLowerCase().includes(o.toLowerCase())||e.licencePlate.toLowerCase().includes(o.toLowerCase())}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",rel:"noopener",href:"https://meep.app/",target:"_blank",children:Object(b.jsx)("img",{src:"https://meep.app/wp-content/uploads/2018/06/Logo-Meep.png",style:{width:"75px"}})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{to:"/",className:"nav-link active","aria-current":"page",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{to:"/Vehicles",className:"nav-link",children:"Vehicles"})})]})})]})}),Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search...",onChange:function(e){p(e.target.value)}}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{style:{color:"black"},children:"Matr\xedcula"}),Object(b.jsx)("th",{style:{color:"black"},children:"Coordenadas"}),Object(b.jsx)("th",{style:{color:"black"},children:"Modelo"})]})}),Object(b.jsx)("tbody",{children:O.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{style:{color:"black"},children:[" ",e.licencePlate.toUpperCase()]}),Object(b.jsxs)("td",{style:{color:"black"},children:[" ",e.x," ",e.y]}),Object(b.jsx)("td",{style:{color:"black"},children:e.model})]},e.id)}))})]}),Object(b.jsx)(m,{paginate:function(e){return h(e)},postsPerPage:y,totalPosts:g.length})]})};var g=function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(b.jsx)(o.a,{exact:!0,path:"/Vehicles",component:y})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,l=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),l(e),s(e),n(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.806bceba.chunk.js.map