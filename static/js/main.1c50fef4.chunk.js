(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(5),a=e.n(r),c=e(2),o=e(6),s=e(0),u=e.n(s),i=e(3),p=(e(12),e(1)),f=function(t){var n=t.goods;return Object(p.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.color,r=t.name;return Object(p.jsx)("li",{"data-cy":"good",style:{color:e},children:r},n)}))})},d="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function l(){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var j=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(i.useState)([]),n=Object(o.a)(t,2),e=n[0],r=n[1],a=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Dynamic list of Goods"}),Object(p.jsx)("button",{type:"button","data-cy":"all-button",onClick:a,children:"Load all goods"}),Object(p.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:s,children:"Load 5 first goods"}),Object(p.jsx)("button",{type:"button","data-cy":"red-button",onClick:d,children:"Load red goods"}),Object(p.jsx)(f,{goods:e})]})};a.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1c50fef4.chunk.js.map