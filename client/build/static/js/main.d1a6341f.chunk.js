(this["webpackJsonpfish-only"]=this["webpackJsonpfish-only"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"domain":"fish-only.auth0.com","clientId":"XKTQ90ITb2DqC5qJ2NwmnvOS1rBNYNC2"}')},24:function(e,t,n){e.exports=n(38)},33:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),i=n(10),l=n(7),u=n.n(l),s=n(12),p=n(8),d=n(20),m=n(21),f=n.n(m),h=function(){return window.history.replaceState({},document.title,window.location.pathname)},g=r.a.createContext(),b=function(){return Object(a.useContext)(g)},v=(n(33),function(){var e=b(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return r.a.createElement("div",null,!t&&r.a.createElement("button",{onClick:function(){return n({})}},"Log in"),t&&r.a.createElement("button",{onClick:function(){return a()}},"Log out"),t&&r.a.createElement("span",null,r.a.createElement(i.b,{to:"/"},"Home"),"\xa0",r.a.createElement(i.b,{to:"/profile"},"Profile")))}),w=function(){var e=b(),t=e.loading,n=e.user;return t||!n?r.a.createElement("div",null,"Loading..."):r.a.createElement(a.Fragment,null,r.a.createElement("img",{src:n.picture,alt:"Profile"}),r.a.createElement("h2",null,n.name),r.a.createElement("p",null,n.email),r.a.createElement("code",null,JSON.stringify(n,null,2)))},E=n(6);var k=function(){return b().loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0}),r.a.createElement(E.a,{path:"/profile",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(16);o.a.render(r.a.createElement((function(e){var t=e.children,n=e.onRedirectCallback,c=void 0===n?h:n,o=Object(d.a)(e,["children","onRedirectCallback"]),i=Object(a.useState)(),l=Object(p.a)(i,2),m=l[0],b=l[1],v=Object(a.useState)(),w=Object(p.a)(v,2),E=w[0],k=w[1],O=Object(a.useState)(),x=Object(p.a)(O,2),y=x[0],j=x[1],C=Object(a.useState)(!0),S=Object(p.a)(C,2),R=S[0],W=S[1],T=Object(a.useState)(!1),P=Object(p.a)(T,2),I=P[0],N=P[1];Object(a.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(o);case 2:if(t=e.sent,j(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,c(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,b(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:i=e.sent,k(i);case 19:W(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var J=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},N(!0),e.prev=2,e.next=5,y.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,N(!1),e.finish(10);case 13:return e.next=15,y.getUser();case 15:n=e.sent,k(n),b(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,y.handleRedirectCallback();case 3:return e.next=5,y.getUser();case 5:t=e.sent,W(!1),b(!0),k(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:{isAuthenticated:m,user:E,loading:R,popupOpen:I,loginWithPopup:J,handleRedirectCallback:U,getIdTokenClaims:function(){return y.getIdTokenClaims.apply(y,arguments)},loginWithRedirect:function(){return y.loginWithRedirect.apply(y,arguments)},getTokenSilently:function(){return y.getTokenSilently.apply(y,arguments)},getTokenWithPopup:function(){return y.getTokenWithPopup.apply(y,arguments)},logout:function(){return y.logout.apply(y,arguments)}}},t)}),{domain:O.domain,client_id:O.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.d1a6341f.chunk.js.map