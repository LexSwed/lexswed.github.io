webpackJsonp([1],{"+FAt":function(e,t){},"/Ovc":function(e,t,n){e.exports=n.p+"media/Components2.afbe7a4.webm"},"7ATU":function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 90 90"}},[t("path",{attrs:{d:"M65.709 10.5c1.17 2.657 1.928 7.07.797 10.301 4.625 3.949 6.215 13.549 3.982 21.394 6.592.503 14.444-.242 19.512 1.781-4.738-.609-11.209-1.804-17.32-1.388-1.158.079-2.873-.044-2.789 1.585 7.074.555 14.104 1.16 19.912 2.973-5.761-.941-12.754-2.375-19.912-2.574-2.957 5.835-8.908 8.703-17.123 9.307.883 1.922 2.574 2.653 2.987 5.744.616 4.618-.964 11.381.595 14.459.748 1.475 1.967 1.514 2.789 2.775-2.012 2.381-7-.268-7.568-2.775-.973-4.295 1.482-10.953-1.192-13.865.188 4.685-1.108 11.264.199 15.449.515 1.646 2.002 2.281 1.593 3.766-9.352.949-5.443-12.104-6.972-19.81-1.411.101-.791 2.113-.796 2.972-.04 7.524 1.54 17.844-6.57 16.838-.237-1.582 1.088-2.119 1.593-3.563 1.479-4.233-.277-10.542.401-15.651-3.095 2.334.325 10.48-1.593 14.657-1.105 2.404-4.666 3.45-7.367 2.377.352-1.79 2.2-1.501 2.984-3.169 1.096-2.324.008-5.674.399-9.111-5.729 1.144-10.173-.166-12.348-3.764-.973-1.615-1.214-3.52-2.39-4.951-1.17-1.432-3.04-1.625-3.582-3.563 7.095-1.708 7.367 7.302 13.739 7.524 1.954.071 2.97-.563 4.778-.988.506-2.272 1.589-3.967 3.186-5.153-7.929-1.085-14.477-3.554-17.522-9.504-7.208.354-13.804 1.317-19.913 2.771 5.545-2.014 12.384-2.736 19.715-2.973-.432-2.596-4.219-1.882-6.57-1.782-4.37.192-9.87.735-13.343 1.387 5.034-1.795 12.098-1.571 18.918-1.585-2.086-6.54-1.363-16.929 3.186-20.798-1.289-3.249-.889-8.563.796-11.093 5.079.228 8.159 2.443 11.35 4.557 3.957-1.125 8.118-1.685 13.54-1.387 2.28.126 4.651 1.151 6.369.989 1.685-.158 3.542-2.049 5.178-2.771 2.131-.941 3.934-1.3 6.372-1.388z"}})])},toString:function(){return"/home/lexswed/Documents/GitHub/lexswed.github.io/src/assets/social/git.svg"}}},AtJq:function(e,t,n){e.exports=n.p+"media/Canvas.45455c1.mp4"},G0Bc:function(e,t){},HSIw:function(e,t){},KoEU:function(e,t,n){e.exports=n.p+"media/SW.52f03a6.webm"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("/5sW"),a=n("Dd8w"),r=n.n(a),o=n("qfEq"),i=n.n(o),c=n("Nu13"),l=n.n(c),u=n("7ATU"),h=n.n(u),d=n("Smjr"),v=n.n(d),m={adjs:["Eager","Passionate","Clever","Keen","Smart","Resolute","Enthusiastic"],links:[{href:"https://github.com/LexSwed",svg:h.a},{href:"https://www.linkedin.com/in/lexswed/",svg:v.a},{href:"https://facebook.com/lexswed",svg:i.a},{href:"https://twitter.com/lexswed",svg:l.a}],data:function(){return{randomNumber:0}},props:["scroll","scrollHeight"],beforeMount:function(){this.$options.links=this.$options.links.map(function(e){return r()({},e,{delay:.5*Math.random()})})},computed:{adj:function(){return this.$options.adjs[this.randomNumber]},heading:function(){return"alexander swed".split("").reduce(function(e,t,n){var s=2*Math.random()+"s",a=3*Math.random()+"s";return e.push({l:t,style:{animationDelay:s,animationDuration:a}}),e},[])},path:function(){return window.location.pathname}},methods:{setRandomNumber:function(){this.randomNumber=Math.floor(Math.random()*this.$options.adjs.length)}},beforeDestroy:function(){clearInterval(this.interval)}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"welcome"},[n("h1",{staticClass:"heading"},e._l(e.heading,function(t,s){var a=t.l,r=t.style;return n("span",{key:s,style:r},[e._v(e._s(a))])})),e._v(" "),n("p",{staticClass:"desc"},[n("b",[e._v(e._s(e.adj))]),e._v(" software engineer")]),e._v(" "),n("div",{staticClass:"social"},e._l(e.$options.links,function(e,t){var s=e.href,a=e.svg,r=e.delay;return n("a",{key:t,staticClass:"link",style:"transition-delay: "+r+"s;",attrs:{href:s,rel:"noopener",target:"_blank"}},[n(a,{tag:"component"})],1)}))])},staticRenderFns:[]};var p=n("VU/8")(m,f,!1,function(e){n("UVO1")},null,null).exports,w={words:["Blessed saints","Budha wearing gravity shoes","Functional JavaScript","Holly Abramov's glassess","Colorful neckties of Saakashvili"],data:function(){var e=Math.floor(Math.random()*this.$options.words.length);return{wowWord:this.$options.words[e]}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"show-more-header"},[t("p",[this._v("\n        "+this._s(this.wowWord)+"! I am so glad "),t("span",{staticClass:"accent-color"},[this._v("you")]),this._v(" are here!"),t("br")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        My real name is "),n("span",{staticClass:"accent-color"},[e._v("Oleksandr Shvechykov")]),e._v(".\n        I am from "),n("span",{staticClass:"accent-color"},[e._v("Ukraine")]),e._v(" but currently I study in "),n("span",{staticClass:"accent-color"},[e._v("Tartu")]),e._v(".\n        I love front end a lot, but I was taught a bit "),n("span",{staticClass:"accent-color"},[e._v("more")]),e._v(".\n    ")])}]};var _=n("VU/8")(w,g,!1,function(e){n("tJ9b")},null,null).exports,y=n("jT+b"),C=n.n(y),x=n("AtJq"),b=n.n(x),S=n("wize"),k=n.n(S),M=n("cPFB"),E=n.n(M),$=n("/Ovc"),V=n.n($),H=n("sPpf"),P=n.n(H),T=n("KoEU"),I=n.n(T),U=[{name:"Script Designer for call agents",deps:"vue, vuex, vue-router, axios, vue-slicksort, vue-dragscroll",videos:[{text:"Canvas drawings, animations and performant calculations with pure javascript",webm:C.a,mp4:b.a},{text:"A solid set of reusable and highly customizable components",webm:k.a,mp4:E.a},{text:"Fully featured Vuex usage",webm:V.a,mp4:P.a},{text:"Service Workers for heavy computations",webm:I.a,mp4:I.a}]}],j={techs:[{name:"HTML / CSS",short:"Confident in layout creation and styling. Use HTML, CSS (SCSS actually) a lot on daily basis."},{name:"Node.js",short:"Have a not long experience in creating API using Node.js."},{name:"React",short:"One of the main tools. I have a good experience rewriting a project from jQuery to React."},{name:"Vue.js",short:"Main tool for creating front end applications. Had a great experience of creating an enterprise app from 0."},{name:"Java",short:"I wrote some Java for some university courses. Don't ask me to write Java, it is here only for even parity."},{name:"Elixir",short:"We built some simple API for our university project using Phoenix framework. Pretty nifty."},{name:"F#",short:"I have learnt some basics for the `Advanced programming` course. Love it the most from all FP languages I tried."},{name:"R",short:"I have used it a lot for the Data Mining course (not because I love it, just because we had a lot of homeworks)."}]},z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"s-card"},[n("header",[e._v("What you can ask me for:")]),e._v(" "),n("ul",{staticClass:"techs"},e._l(e.$options.techs,function(t){return n("li",{key:t.name},[n("div",{staticClass:"s-name"},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"s-short"},[e._v(e._s(t.short))])])}))])},staticRenderFns:[]};var A=n("VU/8")(j,z,!1,function(e){n("aEbo")},null,null).exports,F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"s-card"},[n("header",[e._v("Education:")]),e._v(" "),n("ul",{staticClass:"edu"},[n("li",[n("div",[e._v("Applied Math "),n("span",{attrs:{title:"Dates when I knew this speciality"}},[e._v("(2012-2016)")])]),e._v(" "),n("a",{attrs:{href:"https://snu.edu.ua/en/",target:"_blank"}},[e._v("Volodymyr Dahl East Ukrainian National University")])]),e._v(" "),n("li",[n("div",[e._v("Software Engineering "),n("span",{attrs:{title:"Dates when I knew this speciality"}},[e._v("(2017-2019)")])]),e._v(" "),n("a",{attrs:{href:"https://www.ut.ee/en",target:"_blank"}},[e._v("University of Tartu")])])])])}]};var R=n("VU/8")(null,F,!1,function(e){n("+FAt")},null,null).exports,D={cases:U,methods:{radialGradient:function(e){window.getComputedStyle(e.currentTarget,null).getPropertyValue("--rad-grad");var t=e.layerX/e.currentTarget.offsetWidth*100;e.currentTarget.style.setProperty("--rad-grad",t+"%"),e.currentTarget.style.setProperty("--opacity",1)},cancelGradient:function(e){e.currentTarget.style.setProperty("--opacity",0)},selectCase:function(e){this.$emit("selectCase",e.videos)}}},N={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"s-card"},[n("header",[e._v("Showcase:")]),e._v(" "),n("ul",{staticClass:"cases"},e._l(e.$options.cases,function(t,s){return n("li",{key:s,on:{mousemove:e.radialGradient,mouseout:e.cancelGradient,click:function(n){e.selectCase(t)}}},[n("div",[e._v(e._s(t.name))]),e._v(" "),n("small",[e._v("All dependecies: "+e._s(t.deps))])])}))])},staticRenderFns:[]};var B=n("VU/8")(D,N,!1,function(e){n("ScgW")},null,null).exports,W={data:function(){return{current:0,transitionName:"case-left",touchStartX:0,touchStartY:0}},mounted:function(){window.addEventListener("keydown",this.keyPressHandler)},computed:{currentCase:function(){return this.selectedCase[this.current]}},methods:{changeCurrent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.current+e;t>=this.selectedCase.length?t=0:t<0&&(t=this.selectedCase.length-1),this.current=t,this.transitionName=e>0?"case-left":"case-right"},close:function(){this.$emit("update:selectedCase",null)},keyPressHandler:function(e){27===e.keyCode?this.close():39===e.keyCode?this.changeCurrent(1):37===e.keyCode&&this.changeCurrent(-1)},onTouchStart:function(e){this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY},onTouchEnd:function(e){var t=this.touchStartX-e.changedTouches[0].screenX;t>100?this.changeCurrent(1):t<-100&&this.changeCurrent(-1),this.touchStartY-e.changedTouches[0].screenY>200&&this.close(),this.touchStartX=0,this.touchStartY=0}},beforeDestroy:function(){window.removeEventListener("keypress",this.keyPressHandler)},props:{selectedCase:{type:Array}}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"flex flex-center case-overview",on:{touchstart:e.onTouchStart,touchend:e.onTouchEnd}},[n("button",{staticClass:"arrows",staticStyle:{left:"0"},on:{click:function(t){e.changeCurrent(-1)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M15.4 16l-4.6-4.5 4.6-4.6L14 5.5l-6 6 6 6z"}}),e._v(" "),n("path",{attrs:{fill:"none",d:"M0-.5h24v24H0z"}})])]),e._v(" "),n("transition",{attrs:{name:e.transitionName,mode:"out-in",duration:500}},[n("div",{key:e.current,staticClass:"flex flex-center flex-column case-video"},[n("h1",[e._v(e._s(e.currentCase.text))]),e._v(" "),n("video",{attrs:{autoplay:"",loop:"",frameborder:"0",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:"/"+e.currentCase.webm,type:"video/webm"}}),e._v(" "),n("source",{attrs:{src:"/"+e.currentCase.mp4,type:"video/mp4"}})])])]),e._v(" "),n("button",{staticClass:"esc-btn",on:{click:e.close}},[e._v("ESC")]),e._v(" "),n("button",{staticClass:"arrows",staticStyle:{right:"0"},on:{click:function(t){e.changeCurrent(1)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M8.6 16.3l4.6-4.6-4.6-4.5L10 5.7l6 6-6 6z"}}),e._v(" "),n("path",{attrs:{fill:"none",d:"M0-.3h24v24H0z"}})])])],1)])},staticRenderFns:[]};var L={data:function(){return{selectedCase:null}},methods:{selectCase:function(e){this.selectedCase=e}},components:{WelcomingHeader:_,Techs:A,Education:R,Showcase:B,CaseOverview:n("VU/8")(W,G,!1,function(e){n("G0Bc")},null,null).exports}},J={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"show-more"},[n("welcoming-header"),e._v(" "),n("section",[n("techs"),e._v(" "),n("education"),e._v(" "),n("showcase",{on:{selectCase:e.selectCase}})],1),e._v(" "),e.selectedCase?n("case-overview",{attrs:{selectedCase:e.selectedCase},on:{"update:selectedCase":function(t){e.selectedCase=t}}}):e._e()],1)},staticRenderFns:[]};var O=n("VU/8")(L,J,!1,function(e){n("yQ7I")},null,null).exports,q={props:{showMore:{type:Boolean,default:!1}}},X={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav"},[n("transition",{attrs:{name:"nav",appear:"","appear-class":"nav-circle-appear"}},[n("div",{staticClass:"nav-inner",on:{click:function(t){e.$emit("update:showMore",!e.showMore)}}},[n("transition",{attrs:{name:"scale",mode:"out-in"}},[e.showMore?n("svg",{attrs:{height:"24",width:"24"}},[n("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}),e._v(" "),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]):n("span",[e._v("More")])])],1)])],1)},staticRenderFns:[]};var Y={data:function(){return{showMore:!1}},mounted:function(){this.updateColor()},methods:{updateColor:function(){var e=window.getComputedStyle(this.$el,null),t=this.showMore?e.getPropertyValue("--show-more-accent"):e.getPropertyValue("--welcome-accent"),n=this.showMore?e.getPropertyValue("--show-more"):e.getPropertyValue("--welcome");document.querySelector("meta[name=theme-color]").setAttribute("content",t),document.documentElement.style.setProperty("--accent",t),document.documentElement.style.setProperty("--bg",n)}},computed:{currentView:function(){return this.showMore?"show-more":"welcome"}},watch:{showMore:function(e){var t=this;e.name;setTimeout(function(){t.updateColor()},325)}},components:{Navbar:n("VU/8")(q,X,!1,function(e){n("RoMz")},null,null).exports,Welcome:p,ShowMore:O}},K={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("navbar",{attrs:{showMore:e.showMore},on:{"update:showMore":function(t){e.showMore=t}}}),e._v(" "),n("div",{staticClass:"main"},[n("transition",{attrs:{mode:"out-in",name:e.currentView}},[e.showMore?n("show-more"):n("welcome")],1)],1)],1)},staticRenderFns:[]};var Q=n("VU/8")(Y,K,!1,function(e){n("HSIw")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",render:function(e){return e(Q)}})},Nu13:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 612 612"}},[t("path",{attrs:{d:"M612 116.258a250.746 250.746 0 0 1-72.088 19.772c25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17 24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333 0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25 28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822 18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836 104.48A125.556 125.556 0 0 1 24.63 232.21v1.568c0 60.806 43.29 111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253 87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134 0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44 56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253c24.661-17.595 46.001-39.7 62.791-64.863z"}})])},toString:function(){return"/home/lexswed/Documents/GitHub/lexswed.github.io/src/assets/social/t.svg"}}},RoMz:function(e,t){},ScgW:function(e,t){},Smjr:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 455.731 455.731"}},[t("path",{attrs:{d:"M0 0v455.73h455.73V0H0zm139.94 375.963c0 5.804-4.705 10.51-10.51 10.51H84.71c-5.804 0-10.51-4.706-10.51-10.51V185.18c0-5.804 4.706-10.51 10.51-10.51h44.72c5.805 0 10.51 4.706 10.51 10.51v190.783zM106.998 145.49c-20.308.412-38.155-16.55-38.15-38.187 0-20.985 17.28-38.105 38.407-38.088 20.873.017 38.088 17.257 38.043 38.234-.05 21.963-18.278 38.52-38.3 38.04zm279.886 236.663a4.362 4.362 0 0 1-4.364 4.362l-57.152-.014a4.361 4.361 0 0 1-4.362-4.362V264.33c0-10.182-4.126-19.406-10.802-26.078-6.764-6.768-16.15-10.916-26.5-10.8-20.28.23-36.455 17.07-36.455 37.35v117.322a4.363 4.363 0 0 1-4.365 4.362l-57.01-.014a4.362 4.362 0 0 1-4.362-4.362V179.034a4.363 4.363 0 0 1 4.363-4.363h55.795a4.364 4.364 0 0 1 4.364 4.364v23.418c.005-.01.225.018.6.075a63.404 63.404 0 0 1 3.52-5.658c11.627-16.69 30.96-27.607 52.84-27.607h11.47c39.997 0 72.42 32.423 72.42 72.42v140.47z"}})])},toString:function(){return"/home/lexswed/Documents/GitHub/lexswed.github.io/src/assets/social/linkedin.svg"}}},UVO1:function(e,t){},aEbo:function(e,t){},cPFB:function(e,t,n){e.exports=n.p+"media/Components.3a46349.mp4"},"jT+b":function(e,t,n){e.exports=n.p+"media/Canvas.c6aee70.webm"},qfEq:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96.124 96.123"}},[t("path",{attrs:{d:"M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z"}})])},toString:function(){return"/home/lexswed/Documents/GitHub/lexswed.github.io/src/assets/social/f.svg"}}},sPpf:function(e,t,n){e.exports=n.p+"media/Components2.9ad4123.mp4"},tJ9b:function(e,t){},wize:function(e,t,n){e.exports=n.p+"media/Components.42002f3.webm"},yQ7I:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7113911c31f0f25553d8.js.map