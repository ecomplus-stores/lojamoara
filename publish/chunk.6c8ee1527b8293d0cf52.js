(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{271:function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"b",(function(){return r}));var o=c(36),n=c(31),a=c(53);const i=o.$ecomConfig.get("currency")||"BRL",r=e=>{const t={name:Object(n.a)(e),id:e.sku,price:Object(a.a)(e).toFixed(2)};return e.quantity&&(t.quantity=e.quantity),t}},283:function(e,t,c){"use strict";var o=c(12),n=c(271);t.a=e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let c,a,i;const r=()=>{const e=[];return o.a.data&&Array.isArray(o.a.data.items)&&o.a.data.items.forEach((t=>{e.push(Object(n.b)(t))})),e},s=t=>{e.push({event:"eec.checkout_option",ecommerce:{currencyCode:n.a,checkout_option:{actionField:t}}})},u=(t,o)=>{const i={step:t,option:o};t<=1||!c?(e.push({event:"eec.checkout",ecommerce:{currencyCode:n.a,checkout:{actionField:i,products:r()}}}),e.push({event:"checkout"}),c=!0):a||(s(i),e.push({event:"checkoutOption"}),a=!0)},d=(t,c)=>{if(!i){const{amount:a}=window.storefrontApp,u={id:t,revenue:(a&&a.total||o.a.data&&o.a.data.subtotal||0).toFixed(2)};let d;if(a&&(void 0!==a.freight&&(u.shipping=a.freight.toFixed(2)),void 0!==a.tax&&(u.tax=a.tax.toFixed(2))),c)try{d=JSON.parse(c)}catch(e){}d&&(["payment_method_label","shipping_method_label"].forEach(((e,t)=>{d[e]&&s({step:3+t,option:d[e]})})),d.extra_discount&&d.extra_discount.discount_coupon&&(u.coupon=d.extra_discount.discount_coupon)),e.push({event:"eec.purchase",ecommerce:{currencyCode:n.a,purchase:{actionField:u,products:r()}}}),i=!0}};let p;const h=e=>{let{name:t,params:c}=e;switch(t){case"cart":u(1,"Review Cart");break;case"checkout":u(2,"Confirm Purchase");break;case"confirmation":clearTimeout(p),c.json?d(c.id,decodeURIComponent(c.json)):p=setTimeout((()=>{d(c.id)}),1500)}};t.currentRoute&&h(t.currentRoute),t.afterEach(h)}}},284:function(e,t,c){"use strict";var o=c(12),n=c(271);t.a=e=>{const t={},c=c=>{const o=Object(n.b)(c);e.push({event:"eec.add",ecommerce:{currencyCode:n.a,add:{products:[o]}}}),e.push({event:"addToCart"}),t[c.sku]=o},a=c=>{const o=t[c.sku];e.push({event:"eec.remove",ecommerce:{currencyCode:n.a,remove:{products:[o?Object.assign({},o):Object(n.b)(c)]}}}),e.push({event:"removeFromCart"}),delete t[c.sku]};o.a.on("addItem",(e=>{let{item:t}=e;return c(t)})),o.a.on("increaseItemQnt",(e=>{let{item:o}=e;const n=t[o.sku];if(n){const e=o.quantity-n.quantity;e>0?c({...o,quantity:e}):a({...o,quantity:-e})}else c(o)})),o.a.on("removeItem",(e=>{let{item:t}=e;return a(t)})),o.a.on("clear",(()=>{for(const e in t)t[e]&&a(t[e])}))}},416:function(e,t,c){"use strict";c.r(t);var o=c(283);const{location:n,$:a}=window;var i=(e,t)=>{const c=()=>setTimeout((()=>{e("event","page_view",{page_title:document.title||"Checkout",page_path:"/".concat(n.hash.split("/")[1]),send_to:t})}),300);Object(o.a)({push:t=>{let o,{event:i,ecommerce:r}=t;switch(i){case"eec.checkout":case"eec.checkout_option":o=r&&r.checkout,o&&e("event","begin_checkout",{items:o.products}),e("event","set_checkout_option",{checkout_step:n.hash.startsWith("#/cart")?1:2});break;case"eec.purchase":c(),o=r&&r.purchase,o&&o.actionField&&e("event","purchase",{transaction_id:o.actionField.id,affiliation:a('meta[name="author"]').attr("content")||"Shop",value:Number(o.actionField.revenue),currency:r.currencyCode,tax:o.actionField.tax?Number(o.actionField.tax):0,shipping:o.actionField.shipping?Number(o.actionField.shipping):0,items:o.products});break;default:c()}}})},r=c(284),s=e=>{Object(r.a)({push:t=>{let{event:c,ecommerce:o}=t;if(o&&("eec.add"===c||"eec.remove"===c)){const t=o[c.slice(4)];t&&t.products&&e("event","eec.add"===c?"add_to_cart":"remove_from_cart",{items:t.products})}}})};t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{gaTrackingId:t}=e,{gtag:c}=window;"function"==typeof c&&(i(c,t),s(c))}}}]);