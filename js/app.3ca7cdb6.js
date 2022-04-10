(function(){"use strict";var t={6095:function(t,e,r){var s=r(8935),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"bg-gray-900 h-24 flex items-center text-2xl"},[r("div",{staticClass:"w-screen max-w-screen-xl m-auto text-white flex justify-between"},[r("span",[t._v(" MDX Course Work ")]),r("button",{staticClass:"border-2 text-sm p-2 font-extralight hover:bg-black cursor-pointer",on:{click:t.navigate}},[t._v(" View "+t._s(t.pageInverse)+" "+t._s(t.cartItemCount)+" "+t._s(0==t.cartItemCount?"(disabled)":"")+" ")])])]),"home"===t.currentPage?r("section",[r("Lessons",{attrs:{"items-in-cart":t.itemsInCart,"is-enabled":t.isEnabled,subjects:t.subjects,"sort-by-place-holder":t.sortByPlaceHolder,"order-by-placeholder":t.orderByPlaceholder},on:{"add-to-cart":t.addToCart,"set-state":t.setState}})],1):t._e(),"cart"===t.currentPage?r("section",[r("cart",{attrs:{"items-in-cart":t.itemsInCart,"get-cart-products":t.getCartProducts(),"is-enabled":t.isEnabled,"cart-item-count":t.cartItemCount,navigate:t.navigate},on:{"add-to-cart":t.addToCart,"remove-from-cart":t.removeFromCart}})],1):t._e(),"checkout"===t.currentPage?r("section",[r("Checkout",{attrs:{form:t.form,"create-an-order":t.createAnOrder,"get-cart-products":t.getCartProducts(),"is-form-button-valid":t.isFormButtonValid,"total-cart-sum":t.totalCartSum},on:{"set-state":t.setState,navigate:t.navigate,"create-an-order":t.createAnOrder}})],1):t._e(),"success"===t.currentPage?r("section",[r("main",{staticClass:"max-w-screen-xl py-20 text-gray-100 m-auto"},[r("h1",{staticClass:"text-xl"},[t._v("Success 🎉")]),r("p",{staticClass:"font-thin"},[t._v(" Your order has been made successfully, Thank you for time. ")]),r("button",{staticClass:"border-2 bg-white text-black text-sm p-2 font-extralight mt-5 w-80 text-center hover:bg-black hover:text-white cursor-pointer",on:{click:function(e){return t.navigate("home")}}},[t._v(" Go Back to Home ")])])]):t._e(),t._m(0)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-white text-center w-screen py-20 font-thin"},[t._v(" Developed By "),r("a",{staticClass:"underline",attrs:{href:"https://rajaosama.me"}},[t._v("Raja Osama")])])}],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"max-w-screen-xl py-20 text-gray-100 m-auto"},[r("h1",{staticClass:"text-xl"},[t._v("Checkout 💰")]),r("p",{staticClass:"font-thin"},[t._v(" Complete the checkout by filling the form below, and then click on complete checkout. ")]),r("div",{staticClass:"grid grid-cols-2 gap-4 pt-20"},[r("div",[r("h1",{staticClass:"text-xl"},[t._v("Complete the form to checkout.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formApp.name,expression:"formApp.name"}],staticClass:"bg-black w-80 p-2 border-2 mt-2 font-thin",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.formApp.name},on:{input:function(e){e.target.composing||t.$set(t.formApp,"name",e.target.value)}}}),r("p",{staticClass:"text-pink-700"},[t._v(" "+t._s(t.formApp.nameError)+" ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formApp.phone,expression:"formApp.phone"}],staticClass:"bg-black w-80 p-2 border-2 mt-2 font-thin",attrs:{type:"number",placeholder:"Phone"},domProps:{value:t.formApp.phone},on:{input:function(e){e.target.composing||t.$set(t.formApp,"phone",e.target.value)}}}),t._v(" "+t._s(t.formApp.phoneError)+" "),r("button",{staticClass:"border-2 bg-white text-black text-sm p-2 font-extralight mt-5 w-80 text-center hover:bg-black hover:text-white cursor-pointer",on:{click:function(e){return t.createAnOrder("success")}}},[t._v(" Complete "+t._s(t.isFormButtonValid?"":"(disabled)")+" ")])]),r("div",{staticClass:"border-2 p-2"},[r("h1",{staticClass:"text-lg font-thin"},[t._v("Summary")]),r("hr"),t._l(t.getCartProducts,(function(e){return r("div",{key:e.title,staticClass:"flex justify-between font-thin"},[r("span",[t._v(" "+t._s(e.title)+" ")]),r("span",[t._v(" "+t._s(e.inCart)+" x "+t._s(e.price)+" = "+t._s(e.inCart*e.price)+" ")])])})),r("hr"),r("div",{staticClass:"flex justify-between"},[r("span",[t._v(" Total ")]),r("span",[t._v(" "+t._s(t.totalCartSum)+" ")])])],2)])])},i=[],c={name:"checkout-app",props:["form","getCartProducts","isFormButtonValid","totalCartSum","setState"],methods:{createAnOrder(t){console.log({e:t}),this.$emit("navigate",t)}},created(){console.log({props:this.form})},data(){return{formApp:this.form}},watch:{form:{handler(t){this.formApp=t},deep:!0},formApp:{handler(t){console.log({newVal:t}),this.$emit("setState","form",t)},deep:!0}}},l=c,u=r(1001),d=(0,u.Z)(l,n,i,!1,null,null,null),h=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"max-w-screen-xl py-20 text-gray-100 m-auto"},[r("h1",{staticClass:"text-xl"},[t._v("Subjects 📕")]),r("p",{staticClass:"font-thin"},[t._v(" Below are the subjects Available for extra classes, you can book a session by on:clicking on the link below ")]),r("div",{staticClass:"flex justify-between"}),r("div",{staticClass:"grid grid-cols-2 lg:grid-cols-3 gap-4 mt-20"},t._l(t.subjects,(function(e){return r("div",{key:e.title,staticClass:"mx-10 border-2 border-gray-700 p-5 bg-gray-900"},[r("img",{staticClass:"w-full h-80",staticStyle:{"object-fit":"cover"},attrs:{src:e.image}}),r("div",{staticClass:"flex justify-between pt-2"},[r("div",[r("h1",{staticClass:"text-xl"},[t._v(" "+t._s(e.title)+" ")]),r("p",{staticClass:"font-thin"},[t._v(" Class Location : "+t._s(e.location)+" "),r("br"),t._v(" Spaces Available : "+t._s(e.spaces-t.itemsInCart(e.id))),r("br"),t._l(5,(function(s){return r("span",{key:s},[t._v(" "+t._s(t.abc(s,e))+" ")])}))],2)]),r("span",[t._v(" "+t._s(e.price)+"$ ")])]),r("button",{staticClass:"border-2 text-sm p-2 font-extralight mt-5 w-full text-center hover:bg-black cursor-pointer",attrs:{disabled:!t.isEnabled(e.id)},on:{click:function(){return t.addToCart(e.id)}}},[t._v(" Add to Cart "+t._s(t.isEnabled(e.id)?"":"(disabled)")+" ")])])})),0)])},m=[],f={name:"lesson-app",props:["subjects","sortByPlaceHolder","orderByPlaceholder","setState","isEnabled","itemsInCart"],created(){console.log(this.subjects)},data(){return{orderBy:"",sortBy:"",search:""}},watch:{sortBy:function(t){this.$emit("setState","sortBy",t)},orderBy:function(t){this.$emit("setState","orderBy",t)},search:function(t){console.log("Serch"),this.$emit("setState","search",t)}},methods:{abc(t,e){return t<=e.rating?"★":"☆"},addToCart(t){this.$emit("add-to-cart",t)}}},b=f,g=(0,u.Z)(b,p,m,!1,null,null,null),v=g.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"max-w-screen-xl py-20 text-gray-100 m-auto"},[r("h1",{staticClass:"text-xl"},[t._v("Cart📕")]),r("p",{staticClass:"font-thin"},[t._v(" Below are the products that you have added in the cart, you can remove them if you want or checkout from the form below ")]),r("button",{staticClass:"border-2 text-sm p-2 font-extralight mt-5 w-full text-center hover:bg-black hover:text-white cursor-pointer bg-white text-black",on:{click:function(){return t.navigate("checkout")}}},[t._v(" Proceed with Checkout "+t._s(0==t.cartItemCount?"(disabled)":"")+" ")]),r("div",{staticClass:"grid grid-cols-3 gap-4 mt-20"},t._l(t.getCartProducts,(function(e){return r("div",{key:e.title,staticClass:"mx-10 border-2 border-gray-700 p-5 bg-gray-900"},[r("img",{staticClass:"w-full h-80",staticStyle:{"object-fit":"cover"},attrs:{src:e.image}}),r("div",{staticClass:"flex justify-between pt-2"},[r("div",[r("h1",{staticClass:"text-xl"},[t._v(" "+t._s(e.title)+" ")]),r("p",{staticClass:"font-thin"},[t._v(" Class Location : "+t._s(e.location)+" "),r("br"),t._v(" Spaces Available : "+t._s(e.spaces-t.itemsInCart(e.id))),r("br"),t._l(5,(function(s){return r("span",{key:s},[t._v(" "+t._s(t.abc(s,e))+" ")])}))],2)]),r("span",[t._v(" "+t._s(e.price)+"$ ")])]),r("button",{staticClass:"border-2 text-sm p-2 font-extralight mt-5 w-full text-center hover:bg-black cursor-pointer",attrs:{disabled:!t.isEnabled(e.id)},on:{click:function(){return t.addToCart(e.id)}}},[t._v(" Add to Cart "+t._s(t.isEnabled(e.id)?"":"(disabled)")+" ")]),r("button",{staticClass:"border-2 text-sm p-2 font-extralight mt-5 w-full text-center hover:bg-black cursor-pointer",on:{click:function(){return t.removeFromCart(e.id)}}},[t._v(" Remove from Cart ("+t._s(e.inCart)+") ")])])})),0)])},x=[],_={name:"cart-app",props:["form","getCartProducts","isFormButtonValid","cartItemCount","navigate","itemsInCart","isEnabled"],methods:{abc(t,e){return t<=e.rating?"★":"☆"},addToCart(t){this.$emit("add-to-cart",t)},removeFromCart(t){this.$emit("remove-from-cart",t)}},created(){console.log({props:this.$props})},data(){return{}}},y=_,w=(0,u.Z)(y,C,x,!1,null,null,null),k=w.exports,j={name:"App",components:{Lessons:v,Checkout:h,cart:k},data:()=>({form:{name:"",nameError:"",phone:"",phoneError:""},cartItems:[],orderBy:"",sortBy:"",search:"",currentPage:"home",sortByPlaceHolder:["location","price","spaces","rating","title"],orderByPlaceholder:["ascending","descending"],subjects:[],originalData:[]}),created:function(){fetch("https://express-vue-app-raja.herokuapp.com/collection/webstore").then((t=>{t.json().then((t=>{console.log({json:t});const e=t.map((t=>({...t,id:t._id})));this.originalData=e,this.subjects=e}))}))},methods:{setState(t,e){console.log({key:t,value:e}),this[t]=e},createAnOrder(t){const e=this.cartItems.reduce(((t,e)=>(t[e]=t[e]?t[e]+1:1,t)),{}),r={name:this.form.name,phone:this.form.phone,lessons:Object.entries(e).map((([t,e])=>({lessonId:t,spaces:e})))};var s=new Headers;s.append("Content-Type","application/json"),fetch("https://express-vue-app-raja.herokuapp.com/collection/order",{method:"POST",headers:s,body:JSON.stringify({...r})}).then((t=>t.text())).then((t=>console.log(t))).catch((t=>console.log("error",t))),Object.entries(e).forEach((([t,e])=>{const{spaces:r}=this.subjects.find((e=>e._id===t));console.log({spaces:r}),fetch(`https://express-vue-app-raja.herokuapp.com/collection/webstore/${t}`,{method:"PUT",headers:s,body:JSON.stringify({spaces:r-e})}).then((t=>t.text())).then((t=>console.log(t))).catch((t=>console.log("error",t)))})),this.navigate(t)},navigate(t){if(t&&"string"===typeof t)return this.currentPage=t;const e="home"===this.currentPage?"cart":"home";this.currentPage=e},removeFromCart(t){console.log({id:t});const e=this.cartItems;var r=e.findIndex((e=>e===t));r>-1&&e.splice(r,1),this.cartItems=e},getCartProducts(){const t=this.subjects,e=this.cartItems.reduce(((e,r)=>{if(e[`id-${r}`])return e[`id-${r}`]={...e[`id-${r}`],inCart:e[`id-${r}`].inCart+1},e;const s=t.find((t=>t.id==r));return e[`id-${r}`]={...s,inCart:1},e}),{});return Object.values(e)},addToCart(t){const e=this.cartItems;e.push(t)},itemsInCart(t){return this?.cartItems.filter((e=>e===t)).length},isEnabled(t){const e=this.subjects.find((e=>e.id===t)),r=this.itemsInCart(e.id);return console.log(e.spaces>r),e.spaces>r}},watch:{search(t){fetch(`https://express-vue-app-raja.herokuapp.com/collection/webstore?search=title:${t}`).then((function(t){t.json().then((function(t){this.subjects=t.map((t=>({...t,id:t._id})))}))}))},orderBy(t){const{subjects:e,sortBy:r}=this,s="ascending"===t?-1:1,a="ascending"===t?1:-1,o=e.sort((function(t,e){return t[r]<e[r]?s:t[r]>e[r]?a:0}));console.log({subjects:e}),this.subjects=o},isFormButtonValid(){if(!this.form.name||!this.form.phone)return!1;const t=new RegExp("^[0-9]*$","g"),e=new RegExp("^[a-zA-Z_ ]*$","g"),r=this.form.phone.match(t),s=this.form.name.match(e);return r&&s?(this.form.nameError="",this.form.phoneError="",!0):(!s&&(this.form.nameError="Kindly make sure to only input string"),!r&&(this.form.phoneError="Kindly make sure to only input Number"),!1)},sortBy(t){const{subjects:e,orderBy:r}=this,s="ascending"===r?-1:1,a="ascending"===r?1:-1,o=e.sort((function(e,r){return e[t]<r[t]?s:e[t]>r[t]?a:0}));console.log({subjects:e}),this.subjects=o}},computed:{pageInverse(){const t="home"===this.currentPage?"cart":"home";return t},totalCartSum(){return this.getCartProducts().reduce(((t,e)=>(t+=e.price*e.inCart,t)),0)},cartItemCount(){return this.cartItems.length},isCartEnabled(){return this.cartItemCount.length>0}}},P=j,$=(0,u.Z)(P,a,o,!1,null,null,null),B=$.exports;s.Z.config.productionTip=!1,new s.Z({render:t=>t(B)}).$mount("#app")}},e={};function r(s){var a=e[s];if(void 0!==a)return a.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,s,a,o){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],a=t[u][1],o=t[u][2];for(var i=!0,c=0;c<s.length;c++)(!1&o||n>=o)&&Object.keys(r.O).every((function(t){return r.O[t](s[c])}))?s.splice(c--,1):(i=!1,o<n&&(n=o));if(i){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,a,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,o,n=s[0],i=s[1],c=s[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(e&&e(s);l<n.length;l++)o=n[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},s=self["webpackChunkcw2_web"]=self["webpackChunkcw2_web"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(6095)}));s=r.O(s)})();
//# sourceMappingURL=app.3ca7cdb6.js.map