(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{17:function(t,n,e){},19:function(t,n,e){"use strict";e.r(n);var o=e(4),r=e.n(o),a=e(5),c=e(6),i=e(7),s=e(11),u=e(10),d=e(3),l=e.n(d),f=e(1),j=e.n(f),h=(e(17),e(9));function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var g=function(){return b().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return Object(h.a)(t).slice(0,5)}))},p=function(){return b().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},O=e(0),m=function(t){var n=t.goods;return Object(O.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.name,o=t.color;return Object(O.jsx)("li",{style:{color:o},children:e},n)}))})},v=function(t){Object(s.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(c.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).state={goods:[],isLoading:!1,loadingError:!1},t.loadData=function(){var n=Object(a.a)(l.a.mark((function n(e){var o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setState({isLoading:!0,loadingError:!1}),n.prev=1,n.next=4,e();case 4:o=n.sent,t.setState({goods:o,isLoading:!1}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t.setState({loadingError:!0,isLoading:!1});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}(),t}return Object(i.a)(e,[{key:"render",value:function(){var t=this,n=this.state,e=n.goods,o=n.isLoading,r=n.loadingError;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Dynamic list of Goods"}),Object(O.jsx)("button",{type:"button",onClick:function(){t.loadData(b)},children:"Load All goods"}),Object(O.jsx)("button",{type:"button",onClick:function(){t.loadData(g)},children:"Load 5 first goods"}),Object(O.jsx)("button",{type:"button",onClick:function(){t.loadData(p)},children:"Load red goods"}),r&&Object(O.jsx)("p",{children:"Loading error"}),o?Object(O.jsx)("p",{children:"Loading..."}):Object(O.jsx)(m,{goods:e})]})}}]),e}(j.a.Component),x=v;r.a.render(Object(O.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.830a7fbe.chunk.js.map