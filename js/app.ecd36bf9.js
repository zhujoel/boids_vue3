(function(t){function e(e){for(var i,r,s=e[0],l=e[1],c=e[2],h=0,f=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/boids_vue3/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},4069:function(t,e,n){"use strict";n("e1ee")},4707:function(t,e,n){"use strict";n("722f")},"722f":function(t,e,n){},"73f1":function(t,e,n){t.exports=n.p+"img/fish.6f1fc584.png"},b99d:function(t,e,n){t.exports=n.p+"img/shark.7f2f0dd2.svg"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function a(t,e){var n=Object(i["z"])("router-view");return Object(i["s"])(),Object(i["f"])(n)}const o={};o.render=a;var r=o,s=n("6c02"),l={class:"home"};function c(t,e,n,a,o,r){var s=Object(i["z"])("MainWindow");return Object(i["s"])(),Object(i["f"])("div",l,[Object(i["i"])(s,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var u=n("d4ec"),h=n("262e"),f=n("2caf"),d=n("9ab4"),p=n("ce1f"),b={id:"main"},v={id:"settings"},_=Object(i["i"])("div",{id:"canvas"},null,-1);function y(t,e,n,a,o,r){var s=Object(i["z"])("Settings");return Object(i["s"])(),Object(i["f"])("div",b,[Object(i["i"])("div",v,[Object(i["i"])(s)]),_])}var O=n("bee2"),m=n("7aaa"),j=(n("159b"),function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;Object(u["a"])(this,t),this.graphics_=new m["b"],this.pos_=e,this.graphics_.x=e.x_,this.graphics_.y=e.y_,this.vel_=n,this.MAX_VEL=i,this.size_=a}return Object(O["a"])(t,[{key:"inView",value:function(t,e){if(this.vel_.isNull())return!1;var n=this.vel_.clone(),i=t.pos_.clone().subP(this.pos_),a=n.norm2(),o=i.norm2(),r=n.dotProd(i)/(a*o);return Math.acos(r)<=e}},{key:"limitVelocity",value:function(){var t=this.vel_.norm2(),e=Math.max(this.MAX_VEL-.3*this.size_,.4);t>e&&this.vel_.divS(t).multS(e)}}]),t}()),k=function(){function t(e,n){Object(u["a"])(this,t),this.x_=e,this.y_=n}return Object(O["a"])(t,[{key:"clone",value:function(){return new t(this.x_,this.y_)}},{key:"isNull",value:function(){return 0===this.x_&&0===this.y_}},{key:"dist",value:function(t){var e=t.x_-this.x_,n=t.y_-this.y_;return Math.sqrt(e*e+n*n)}},{key:"addP",value:function(t){return this.x_+=t.x_,this.y_+=t.y_,this}},{key:"addS",value:function(t){return this.x_+=t,this.y_+=t,this}},{key:"subP",value:function(t){return this.x_-=t.x_,this.y_-=t.y_,this}},{key:"norm2",value:function(){return Math.sqrt(this.x_*this.x_+this.y_*this.y_)}},{key:"dotProd",value:function(t){return this.x_*t.x_+this.y_*t.y_}},{key:"divS",value:function(t){return this.x_/=t,this.y_/=t,this}},{key:"multS",value:function(t){return this.x_*=t,this.y_*=t,this}}]),t}();function g(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,r=t.pos_.x_,s=t.pos_.y_;r<a?t.vel_.x_+=e:r>n&&(t.vel_.x_-=e),s<o?t.vel_.y_+=e:s>i&&(t.vel_.y_-=e)}var w=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(u["a"])(this,t),this.name_=e,this.rules_=[],this.boids_=[],this.others_=[],this.color_=n}return Object(O["a"])(t,[{key:"createRandomBoids",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=0;i<t;++i){var a=this.createRandomBoid(e,n);this.boids_.push(a),z.app_.stage.addChild(a.graphics_)}this.draw()}},{key:"createRandomBoid",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return new j(new k(Math.random()*z.width_/2,Math.random()*z.height_/2),new k(2*Math.random()-1,2*Math.random()-1),t,e)}},{key:"apply",value:function(t){g(t,1,z.width_/2,z.height_/2),t.limitVelocity(),this.applyOthers(t),t.pos_.addP(t.vel_)}},{key:"applyOthers",value:function(t){this.others_.forEach((function(e){e.applyFlock(t)}))}},{key:"draw",value:function(){var t=this;this.boids_.forEach((function(e){e.graphics_.position.x=e.pos_.x_,e.graphics_.position.y=e.pos_.y_,e.graphics_.clear().lineStyle(e.size_,t.color_).moveTo(e.pos_.x_,e.pos_.y_).lineTo(e.pos_.x_+e.vel_.x_*e.size_,e.pos_.y_+e.vel_.y_*e.size_).closePath()}))}}]),t}(),x=function t(e){Object(u["a"])(this,t),this.params_={},this.name_=e},S=function(t){Object(h["a"])(n,t);var e=Object(f["a"])(n);function n(t,i,a,o){var r;return Object(u["a"])(this,n),r=e.call(this,t),r.params_.dist=i,r.params_.angle=a,r.params_.mag=o,r}return Object(O["a"])(n,[{key:"isSeparation",value:function(){return!0}},{key:"apply",value:function(t,e){var n=this,i=new k(0,0);e.forEach((function(e){t!==e&&t.pos_.dist(e.pos_)<n.params_.dist&&t.inView(e,n.params_.angle)&&(i.x_+=t.pos_.x_-e.pos_.x_,i.y_+=t.pos_.y_-e.pos_.y_)})),i.multS(this.params_.mag),t.vel_.addP(i)}}]),n}(x),P=function(t){Object(h["a"])(n,t);var e=Object(f["a"])(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(u["a"])(this,n),i=e.call(this,t,a),i.rules_.push(new S("Separation",25,Math.PI,.5)),i}return Object(O["a"])(n,[{key:"isPreyFlock",value:function(){return!1}},{key:"applyFlock",value:function(t){var e=new S("Separation",z.randomNum(1,35),.4*Math.PI,.1);e.apply(t,this.boids_)}},{key:"move",value:function(){var t=this;this.boids_.forEach((function(e){t.rules_.forEach((function(n){n.apply(e,t.boids_)})),t.apply(e)})),this.draw()}}]),n}(w),M=function(t){Object(h["a"])(n,t);var e=Object(f["a"])(n);function n(t,i,a,o){var r;return Object(u["a"])(this,n),r=e.call(this,t),r.params_.dist=i,r.params_.angle=a,r.params_.mag=o,r}return Object(O["a"])(n,[{key:"isSeparation",value:function(){return!1}},{key:"apply",value:function(t,e){var n=this,i=new k(0,0),a=0;e.forEach((function(e){t.pos_.dist(e.pos_)<n.params_.dist&&t.inView(e,n.params_.angle)&&(i.addP(e.vel_),a++)})),0!==a&&(i.divS(a).subP(t.vel_).multS(this.params_.mag),t.vel_.addP(i))}}]),n}(x),C=function(t){Object(h["a"])(n,t);var e=Object(f["a"])(n);function n(t,i,a,o){var r;return Object(u["a"])(this,n),r=e.call(this,t),r.params_.dist=i,r.params_.angle=a,r.params_.mag=o,r}return Object(O["a"])(n,[{key:"isSeparation",value:function(){return!1}},{key:"apply",value:function(t,e){var n=this,i=new k(0,0),a=0;e.forEach((function(e){t.pos_.dist(e.pos_)<n.params_.dist&&t.inView(e,n.params_.angle)&&(i.addP(e.pos_),a++)})),a&&(i.divS(a).subP(t.pos_).multS(this.params_.mag),t.vel_.addP(i))}}]),n}(x);n("a434");function I(t,e,n){for(var i=0;i<e.length;++i)if(t.pos_.dist(e[i].pos_)<n)return z.removeBoidFromApp(e[i]),e.splice(i,1),!0;return!1}var F=function(t){Object(h["a"])(n,t);var e=Object(f["a"])(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(u["a"])(this,n),i=e.call(this,t,a),i.applyFlockRule=new S("Separation",100,.4*Math.PI,-5e-4),i.rules_.push(new M("Alignment",100,.3*Math.PI,.05)),i.rules_.push(new C("Cohesion",20,.3*Math.PI,.005)),i.rules_.push(new S("Separation",3,Math.PI,.05)),i}return Object(O["a"])(n,[{key:"isPreyFlock",value:function(){return!0}},{key:"applyFlock",value:function(t){this.applyFlockRule.apply(t,this.boids_),I(t,this.boids_,.5*t.size_)&&t.size_<10&&t.size_++}},{key:"move",value:function(){var t=this;this.boids_.forEach((function(e){t.rules_.forEach((function(n){n.apply(e,t.boids_)})),t.apply(e)})),this.draw()}}]),n}(w),V=function(t){Object(h["a"])(n,t);var e=Object(f["a"])(n);function n(t){var i;return Object(u["a"])(this,n),i=e.call(this,t),z.interactions_.on("mouseup",(function(t){z.down&&i.wall(t)})).on("mousemove",(function(t){z.down&&i.wall(t)})),i}return Object(O["a"])(n,[{key:"isPreyFlock",value:function(){return!1}},{key:"wall",value:function(t){var e=new k(t.data.global.x,t.data.global.y),n=new j(e.divS(2),new k(0,0),16711680,15);this.boids_.push(n),n.graphics_=(new m["b"]).beginFill(10987431,1).drawCircle(2*n.pos_.x_,2*n.pos_.y_,n.size_).endFill(),z.app_.stage.addChild(n.graphics_)}},{key:"applyFlock",value:function(t){var e=new S("Separation",10+t.size_,Math.PI,.1);e.apply(t,this.boids_)}},{key:"move",value:function(){}}]),n}(w),A=function(){function t(){Object(u["a"])(this,t),this.walls_=new V("Wall"),this.flocks_=[new P("Predator",16711680),new F("Prey",0)],this.flocks_[0].others_.push(this.flocks_[1]),this.flocks_[1].others_.push(this.flocks_[0]),this.flocks_[0].others_.push(this.walls_),this.flocks_[1].others_.push(this.walls_),this.flocks_[0].createRandomBoids(2,2,6),this.flocks_[1].createRandomBoids(200,3)}return Object(O["a"])(t,[{key:"move",value:function(t){this.flocks_.forEach((function(t){return t.move()})),t.update()}}]),t}(),z=function(){function t(){Object(u["a"])(this,t)}return Object(O["a"])(t,null,[{key:"setup",value:function(e,n){t.width_=e,t.height_=n,t.app_=new m["a"]({width:e,height:n,backgroundColor:15726589,antialias:!1,autoDensity:!1}),t.interactions_=new m["c"](t.app_.renderer),t.interactions_.on("mousedown",(function(){t.down=!0})),t.interactions_.on("mouseup",(function(){t.down=!1})),this.flocks_=new A}},{key:"randomNum",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round(t-.5+Math.random()*(e-t+1))}},{key:"removeBoidFromApp",value:function(e){t.app_.stage.removeChild(e.graphics_)}},{key:"removeFlockFromApp",value:function(e){for(var n=0;n<e.boids_.length;++n)t.removeBoidFromApp(e.boids_[n]);e.boids_=[]}}]),t}();z.down=!1;var B=n("73f1"),N=n.n(B),E=n("b99d"),T=n.n(E),R=Object(i["i"])("i",{class:"pi pi-play",style:{margin:"auto"}},null,-1),L=Object(i["i"])("i",{class:"pi pi-pause",style:{margin:"auto"}},null,-1),H=Object(i["i"])("br",null,null,-1),W={style:{margin:"auto"}},U={key:0,class:"flock-logo",alt:"logo",src:N.a,style:{width:"1.5rem","margin-left":"auto","margin-right":"0"}},q={key:1,class:"flock-logo",alt:"logo",src:T.a,style:{width:"1.5rem","margin-left":"auto","margin-right":"0"}},D={style:{width:"100%"}},J=Object(i["i"])("td",null," Color: ",-1),$=Object(i["i"])("td",null," Add boids: ",-1),X={style:{width:"30%"}},K={id:"flock-input"},Y={key:0,alt:"logo",src:N.a,style:{width:"1.5rem"}},Z={key:1,alt:"logo",src:T.a,style:{width:"1.5rem"}},G=Object(i["h"])(" This page simulates complex "),Q=Object(i["i"])("b",null,"flocking behaviour",-1),tt=Object(i["h"])(" as we can naturally see in birds or fishes."),et=Object(i["i"])("br",null,null,-1),nt=Object(i["h"])(" It is largely inspired by "),it=Object(i["i"])("a",{href:"http://www.red3d.com/cwr/boids/"},"Craig Reynolds' algorithm",-1),at=Object(i["h"])(" as well as "),ot=Object(i["i"])("a",{href:"http://www.kfish.org/boids/pseudocode.html"},"Conrad Parker's pseudocode",-1),rt=Object(i["h"])("."),st=Object(i["i"])("br",null,null,-1),lt=Object(i["i"])("br",null,null,-1),ct=Object(i["h"])(" Here you may: "),ut=Object(i["h"])(" Start the simulation."),ht=Object(i["h"])("Create new "),ft=Object(i["i"])("b",null,"flocks:",-1),dt=Object(i["h"])(),pt=Object(i["i"])("br",null,null,-1),bt=Object(i["i"])("img",{alt:"logo",src:N.a,style:{width:"1.5rem"}},null,-1),vt=Object(i["i"])("b",null," Prey:",-1),_t=Object(i["h"])(" Preys are regular boids and will run away from predators. "),yt=Object(i["i"])("br",null,null,-1),Ot=Object(i["i"])("img",{alt:"logo",src:T.a,style:{width:"1.5rem"}},null,-1),mt=Object(i["i"])("b",null," Predator:",-1),jt=Object(i["h"])(" Predators swim toward any prey and will eat it if close enough! "),kt=Object(i["h"])("Change "),gt=Object(i["i"])("b",null,"rules: ",-1),wt=Object(i["h"])(),xt=Object(i["i"])("ul",null,[Object(i["i"])("li",null,[Object(i["i"])("b",null,"Alignment:"),Object(i["h"])(" Fly towards nearby boids.")]),Object(i["i"])("li",null,[Object(i["i"])("b",null,"Cohesion:"),Object(i["h"])(" Match the speed of near boids.")]),Object(i["i"])("li",null,[Object(i["i"])("b",null,"Separation:"),Object(i["h"])(" Keep away from other boids. ")]),Object(i["i"])("li",null,[Object(i["h"])("The higher the slider, the more "),Object(i["i"])("b",null,"impact"),Object(i["h"])(" the rule will have.")])],-1),St=Object(i["i"])("li",null,[Object(i["h"])("Click on the canvas to "),Object(i["i"])("b",null,"draw walls"),Object(i["h"])(".")],-1),Pt=Object(i["i"])("a",{id:"gh-pages",href:"https://github.com/zhujoel/boids_vue3"},"By Joël ZHU",-1);function Mt(t,e,n,a,o,r){var s=this,l=Object(i["z"])("Button"),c=Object(i["z"])("Slider"),u=Object(i["z"])("AccordionTab"),h=Object(i["z"])("Accordion"),f=Object(i["z"])("InputText"),d=Object(i["z"])("OverlayPanel");return Object(i["s"])(),Object(i["f"])(i["a"],null,[this.start?(Object(i["s"])(),Object(i["f"])(l,{key:1,class:"start-btn p-button-warning",onClick:e[2]||(e[2]=function(e){return t.startStop()})},{default:Object(i["I"])((function(){return[L]})),_:1})):(Object(i["s"])(),Object(i["f"])(l,{key:0,class:"start-btn p-button-success",onClick:e[1]||(e[1]=function(e){return t.startStop()})},{default:Object(i["I"])((function(){return[R]})),_:1})),H,Object(i["i"])(h,{multiple:!0},{default:Object(i["I"])((function(){return[(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(s.flocks.flocks_,(function(e){return Object(i["s"])(),Object(i["f"])(u,{key:e.name_},{header:Object(i["I"])((function(){return[Object(i["i"])("span",null,Object(i["D"])(e.name_),1),Object(i["i"])("span",W,Object(i["D"])(s.view.counter(e)),1),e.isPreyFlock()?(Object(i["s"])(),Object(i["f"])("img",U)):(Object(i["s"])(),Object(i["f"])("img",q)),Object(i["i"])(l,{class:"p-button-text p-button-danger",icon:"pi pi-trash",onClick:function(n){return t.deleteFlock(e)}},null,8,["onClick"])]})),default:Object(i["I"])((function(){return[Object(i["i"])("table",D,[Object(i["i"])("tr",null,[J,Object(i["i"])("td",null,[Object(i["i"])("input",{class:"color-input",type:"color",onChange:function(n){return t.changeColor(n,e)}},null,40,["onChange"])])]),Object(i["i"])("tr",null,[$,Object(i["i"])("td",null,[Object(i["i"])("input",{type:"number",value:"0",onChange:function(n){return t.noBoidsToAdd(n,e)}},null,40,["onChange"]),Object(i["i"])(l,{class:"p-button-text",icon:"pi pi-plus",style:{padding:"0"},onClick:function(n){return t.addBoids(e)}},null,8,["onClick"])])]),(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(e.rules_,(function(t){return Object(i["s"])(),Object(i["f"])("tr",{key:t.name_},[Object(i["i"])("td",X,Object(i["D"])(t.name_),1),Object(i["i"])("td",null,[t.isSeparation()?(Object(i["s"])(),Object(i["f"])(c,{key:0,min:0,max:30,modelValue:t.params_.dist,"onUpdate:modelValue":function(e){return t.params_.dist=e}},null,8,["modelValue","onUpdate:modelValue"])):(Object(i["s"])(),Object(i["f"])(c,{key:1,min:0,max:120,modelValue:t.params_.dist,"onUpdate:modelValue":function(e){return t.params_.dist=e}},null,8,["modelValue","onUpdate:modelValue"]))])])})),128))])]})),_:2},1024)})),128))]})),_:1}),Object(i["i"])("div",K,[Object(i["i"])(l,{onClick:e[3]||(e[3]=function(e){return t.changeIcon()})},{default:Object(i["I"])((function(){return[s.preySelected?(Object(i["s"])(),Object(i["f"])("img",Y)):(Object(i["s"])(),Object(i["f"])("img",Z))]})),_:1}),Object(i["i"])(f,{id:"add-flock-name",placeholder:"Flock name",modelValue:this.flockName,"onUpdate:modelValue":e[4]||(e[4]=function(t){return s.flockName=t})},null,8,["modelValue"]),Object(i["i"])(l,{class:"p-button-rounded p-button-text",icon:"pi pi-plus-circle",onClick:e[5]||(e[5]=function(e){return t.addFlock()})})]),Object(i["i"])(d,{ref:"op"},{default:Object(i["I"])((function(){return[G,Q,tt,et,nt,it,at,ot,rt,st,lt,ct,Object(i["i"])("ul",null,[Object(i["i"])("li",null,[Object(i["i"])(l,{class:"p-button-success",icon:"pi pi-play"}),ut]),Object(i["i"])("li",null,[ht,ft,dt,pt,Object(i["i"])(l,null,{default:Object(i["I"])((function(){return[bt]})),_:1}),vt,_t,yt,Object(i["i"])(l,{style:{"margin-top":"2px"}},{default:Object(i["I"])((function(){return[Ot]})),_:1}),mt,jt]),Object(i["i"])("li",null,[kt,gt,wt,Object(i["i"])(c,{modelValue:s.overlayValue,"onUpdate:modelValue":e[6]||(e[6]=function(t){return s.overlayValue=t}),min:0,max:100,style:{width:"50%",display:"inline-block"}},null,8,["modelValue"]),xt]),St])]})),_:1},512),Object(i["i"])("a",{id:"overlay-text",href:"javascript:void(0);",onClick:e[7]||(e[7]=function(e){return t.togglePanel(e)})},"What is this?"),Pt],64)}n("4d90"),n("d3b7"),n("25f0"),n("4de4"),n("fb6a");var Ct=function(){function t(e){Object(u["a"])(this,t),this.cnts_=[3,200],this.adds_=[0,0],this.app_=e}return Object(O["a"])(t,[{key:"update",value:function(){for(var t=0;t<this.app_.flocks_.length;++t)this.cnts_[t]=this.app_.flocks_[t].boids_.length}},{key:"counter",value:function(t){var e=this.app_.flocks_.indexOf(t);return this.cnts_[e]}}]),t}(),It=(n("99af"),n("ddb0"),function(){function t(e,n,i){Object(u["a"])(this,t),this.set(e,n,i)}return Object(O["a"])(t,[{key:"toString",value:function(){return"rgb(".concat(Math.round(this.r),", ").concat(Math.round(this.g),", ").concat(Math.round(this.b),")")}},{key:"set",value:function(t,e,n){this.r=this.clamp(t),this.g=this.clamp(e),this.b=this.clamp(n)}},{key:"hueRotate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t=t/180*Math.PI;var e=Math.sin(t),n=Math.cos(t);this.multiply([.213+.787*n-.213*e,.715-.715*n-.715*e,.072-.072*n+.928*e,.213-.213*n+.143*e,.715+.285*n+.14*e,.072-.072*n-.283*e,.213-.213*n-.787*e,.715-.715*n+.715*e,.072+.928*n+.072*e])}},{key:"grayscale",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.multiply([.2126+.7874*(1-t),.7152-.7152*(1-t),.0722-.0722*(1-t),.2126-.2126*(1-t),.7152+.2848*(1-t),.0722-.0722*(1-t),.2126-.2126*(1-t),.7152-.7152*(1-t),.0722+.9278*(1-t)])}},{key:"sepia",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.multiply([.393+.607*(1-t),.769-.769*(1-t),.189-.189*(1-t),.349-.349*(1-t),.686+.314*(1-t),.168-.168*(1-t),.272-.272*(1-t),.534-.534*(1-t),.131+.869*(1-t)])}},{key:"saturate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.multiply([.213+.787*t,.715-.715*t,.072-.072*t,.213-.213*t,.715+.285*t,.072-.072*t,.213-.213*t,.715-.715*t,.072+.928*t])}},{key:"multiply",value:function(t){var e=this.clamp(this.r*t[0]+this.g*t[1]+this.b*t[2]),n=this.clamp(this.r*t[3]+this.g*t[4]+this.b*t[5]),i=this.clamp(this.r*t[6]+this.g*t[7]+this.b*t[8]);this.r=e,this.g=n,this.b=i}},{key:"brightness",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.linear(t)}},{key:"contrast",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.linear(t,-.5*t+.5)}},{key:"linear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.r=this.clamp(this.r*t+255*e),this.g=this.clamp(this.g*t+255*e),this.b=this.clamp(this.b*t+255*e)}},{key:"invert",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.r=this.clamp(255*(t+this.r/255*(1-2*t))),this.g=this.clamp(255*(t+this.g/255*(1-2*t))),this.b=this.clamp(255*(t+this.b/255*(1-2*t)))}},{key:"hsl",value:function(){var t,e,n=this.r/255,i=this.g/255,a=this.b/255,o=Math.max(n,i,a),r=Math.min(n,i,a),s=(o+r)/2;if(o===r)t=e=0;else{var l=o-r;switch(e=s>.5?l/(2-o-r):l/(o+r),o){case n:t=(i-a)/l+(i<a?6:0);break;case i:t=(a-n)/l+2;break;case a:t=(n-i)/l+4;break}t/=6}return{h:100*t,s:100*e,l:100*s}}},{key:"clamp",value:function(t){return t>255?t=255:t<0&&(t=0),t}}]),t}()),Ft=function(){function t(e){Object(u["a"])(this,t),this.target=e,this.targetHSL=e.hsl(),this.reusedColor=new It(0,0,0)}return Object(O["a"])(t,[{key:"solve",value:function(){var t=this.solveNarrow(this.solveWide());return{values:t.values,loss:t.loss,filter:this.css(t.values)}}},{key:"solveWide",value:function(){for(var t=5,e=15,n=[60,180,18e3,600,1.2,1.2],i={loss:1/0},a=0;i.loss>25&&a<3;a++){var o=[50,20,3750,50,100,100],r=this.spsa(t,n,e,o,1e3);r.loss<i.loss&&(i=r)}return i}},{key:"solveNarrow",value:function(t){var e=t.loss,n=2,i=e+1,a=[.25*i,.25*i,i,.25*i,.2*i,.2*i];return this.spsa(e,a,n,t.values,500)}},{key:"spsa",value:function(t,e,n,i,a){for(var o=1,r=.16666666666666666,s=null,l=1/0,c=new Array(6),u=new Array(6),h=new Array(6),f=0;f<a;f++){for(var d=n/Math.pow(f+1,r),p=0;p<6;p++)c[p]=Math.random()>.5?1:-1,u[p]=i[p]+d*c[p],h[p]=i[p]-d*c[p];for(var b=this.loss(u)-this.loss(h),v=0;v<6;v++){var _=b/(2*d)*c[v],y=e[v]/Math.pow(t+f+1,o);i[v]=m(i[v]-y*_,v)}var O=this.loss(i);O<l&&(s=i.slice(0),l=O)}return{values:s,loss:l};function m(t,e){var n=100;return 2===e?n=7500:4!==e&&5!==e||(n=200),3===e?t>n?t%=n:t<0&&(t=n+t%n):t<0?t=0:t>n&&(t=n),t}}},{key:"loss",value:function(t){var e=this.reusedColor;e.set(0,0,0),e.invert(t[0]/100),e.sepia(t[1]/100),e.saturate(t[2]/100),e.hueRotate(3.6*t[3]),e.brightness(t[4]/100),e.contrast(t[5]/100);var n=e.hsl();return Math.abs(e.r-this.target.r)+Math.abs(e.g-this.target.g)+Math.abs(e.b-this.target.b)+Math.abs(n.h-this.targetHSL.h)+Math.abs(n.s-this.targetHSL.s)+Math.abs(n.l-this.targetHSL.l)}},{key:"css",value:function(t){function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round(t[e]*n)}return"invert(".concat(e(0),"%) sepia(").concat(e(1),"%) saturate(").concat(e(2),"%) hue-rotate(").concat(e(3,3.6),"deg) brightness(").concat(e(4),"%) contrast(").concat(e(5),"%)")}}]),t}(),Vt=n("3835"),At=(n("ac1f"),n("466d"),n("25eb"),n("a9e3"),n("d81d"),n("a630"),n("3ca3"),/^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i),zt=function(t){var e=String(t).match(At)||[],n=Object(Vt["a"])(e,3),i=n[1],a=n[2];if(a){var o=Number.parseInt(a,16);return[o>>16,o>>8&255,255&o]}if(i)return Array.from(i,(function(t){return Number.parseInt(t,16)})).map((function(t){return t<<4|t}))},Bt=function(t){Object(h["a"])(n,t);var e=Object(f["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.apply(this,arguments),t.start=!1,t.flocks=z.flocks_,t.view=new Ct(z.flocks_),t.flockName="New Flock",t.preySelected=!0,t.overlayValue=50,t}return Object(O["a"])(n,[{key:"beforeMount",value:function(){this.view.update()}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.animate()})),this.changeLogoColor()}},{key:"togglePanel",value:function(t){var e=this.$refs.op;e.toggle(t)}},{key:"changeLogoColor",value:function(){for(var t=document.querySelectorAll(".flock-logo"),e=document.querySelectorAll(".color-input"),n=0;n<t.length;++n){var i=t[n],a=e[n],o=zt(this.flocks.flocks_[n].color_.toString(16).padStart(6,"0"));a.value="#"+this.flocks.flocks_[n].color_.toString(16).padStart(6,"0");var r=new It(o[0],o[1],o[2]),s=new Ft(r),l=s.solve();i.style.filter=l.filter}}},{key:"animate",value:function(){var t=this;z.app_.ticker.add((function(){t.start&&z.flocks_.move(t.view)}))}},{key:"changeColor",value:function(t,e){var n=t.target.value,i=this.flocks.flocks_.indexOf(e);z.flocks_.flocks_[i].color_=parseInt(n.slice(1),16),this.changeLogoColor()}},{key:"noBoidsToAdd",value:function(t,e){var n=t.target.value,i=this.flocks.flocks_.indexOf(e);this.view.adds_[i]=n}},{key:"startStop",value:function(){this.start=!this.start}},{key:"changeIcon",value:function(){this.preySelected=!this.preySelected}},{key:"addBoids",value:function(t){var e=this.flocks.flocks_.indexOf(t),n=this.view.adds_[e];z.flocks_.flocks_[e].createRandomBoids(n,3)}},{key:"addFlock",value:function(){var t=this.preySelected?new F(this.flockName):new P(this.flockName);t.createRandomBoids(10),z.flocks_.flocks_.forEach((function(e){(t instanceof F&&e instanceof P||t instanceof P)&&(e.others_.push(t),t.others_.push(e))})),t.others_.push(z.flocks_.walls_),this.flocks.flocks_.push(t)}},{key:"deleteFlock",value:function(t){var e=this.flocks.flocks_.indexOf(t);z.removeFlockFromApp(z.flocks_.flocks_[e]),this.flocks.flocks_.splice(e,1)}}]),n}(p["b"]);n("4069");Bt.render=Mt;var Nt=Bt,Et=function(t){Object(h["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(u["a"])(this,n),e.apply(this,arguments)}return Object(O["a"])(n,[{key:"created",value:function(){z.setup(.8*window.innerWidth,.99*window.innerHeight)}},{key:"mounted",value:function(){var t=document.getElementById("canvas");t.appendChild(z.app_.view)}}]),n}(p["b"]);Et=Object(d["a"])([Object(p["a"])({components:{Settings:Nt}})],Et);var Tt=Et;n("4707");Tt.render=y;var Rt=Tt,Lt=function(t){Object(h["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(u["a"])(this,n),e.apply(this,arguments)}return n}(p["b"]);Lt=Object(d["a"])([Object(p["a"])({components:{MainWindow:Rt}})],Lt);var Ht=Lt;Ht.render=c;var Wt=Ht,Ut=[{path:"/",name:"Home",component:Wt}],qt=Object(s["a"])({history:Object(s["b"])("/boids_vue3/"),routes:Ut}),Dt=qt,Jt=n("9319"),$t=n("bb57"),Xt=n("de53"),Kt=n("c8c8"),Yt=n("14f2"),Zt=n("8398"),Gt=n("e75f"),Qt=n("3822"),te=n("ae1f"),ee=n("2db7");n("098b"),n("e1ae"),n("4121");Object(i["e"])(r).use(Dt).use(Jt["a"]).component("Button",$t["a"]).component("Accordion",Xt["a"]).component("AccordionTab",Kt["a"]).component("Slider",Yt["a"]).component("InputText",Zt["a"]).component("ColorPicker",Gt["a"]).component("InputNumber",Qt["a"]).component("ScrollPanel",te["a"]).component("OverlayPanel",ee["a"]).mount("#app")},e1ee:function(t,e,n){}});
//# sourceMappingURL=app.ecd36bf9.js.map