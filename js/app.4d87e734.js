(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,_=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&_.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(_.length)_.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},o={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/boids_vue3/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var h=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23");function o(t,e){var i=Object(n["s"])("router-view");return Object(n["n"])(),Object(n["c"])(i)}const r={};r.render=o;var a=r,s=i("6c02"),c={class:"home"};function u(t,e,i,o,r,a){var s=Object(n["s"])("MainWindow");return Object(n["n"])(),Object(n["c"])("div",c,[Object(n["e"])(s,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var h=i("d4ec"),l=i("262e"),_=i("2caf"),d=i("9ab4"),p=i("ce1f"),v={id:"main"},f=Object(n["e"])("div",{id:"canvas"},null,-1);function y(t,e,i,o,r,a){return Object(n["n"])(),Object(n["c"])("div",v,[Object(n["e"])("button",{onClick:e[1]||(e[1]=function(e){return t.startStop()})},"Go"),Object(n["e"])("button",{onClick:e[2]||(e[2]=function(e){return t.newPreys()})},"Add"),Object(n["e"])("button",{onClick:e[3]||(e[3]=function(e){return t.newPredator()})},"Add Predator"),Object(n["e"])("button",{onClick:e[4]||(e[4]=function(e){return t.clear()})},"Clear"),Object(n["d"])(" "+Object(n["u"])(this.instruction)+" ",1),Object(n["e"])("div",null,"Preys: "+Object(n["u"])(this.preyNo)+" | Predators: "+Object(n["u"])(this.predatorNo),1),f])}var b=i("bee2"),w=i("7aaa"),O=function(){function t(){Object(h["a"])(this,t)}return Object(b["a"])(t,null,[{key:"setup",value:function(e,i){t.width_=e,t.height_=i,t.app_=new w["a"]({width:e,height:i,backgroundColor:15726589,antialias:!1,autoDensity:!1}),t.interactions_=new w["c"](t.app_.renderer),t.interactions_.on("mousedown",(function(){t.down=!0})),t.interactions_.on("mouseup",(function(){t.down=!1}))}},{key:"randomNum",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round(t-.5+Math.random()*(e-t+1))}}]),t}();O.down=!1;i("159b");var j=function(){function t(e,i){Object(h["a"])(this,t),this.x_=e,this.y_=i}return Object(b["a"])(t,[{key:"clone",value:function(){return new t(this.x_,this.y_)}},{key:"isNull",value:function(){return 0===this.x_&&0===this.y_}},{key:"dist",value:function(t){var e=t.x_-this.x_,i=t.y_-this.y_;return Math.sqrt(e*e+i*i)}},{key:"addP",value:function(t){return this.x_+=t.x_,this.y_+=t.y_,this}},{key:"addS",value:function(t){return this.x_+=t,this.y_+=t,this}},{key:"subP",value:function(t){return this.x_-=t.x_,this.y_-=t.y_,this}},{key:"norm2",value:function(){return Math.sqrt(this.x_*this.x_+this.y_*this.y_)}},{key:"dotProd",value:function(t){return this.x_*t.x_+this.y_*t.y_}},{key:"divS",value:function(t){return this.x_/=t,this.y_/=t,this}},{key:"multS",value:function(t){return this.x_*=t,this.y_*=t,this}}]),t}();function m(t,e,i,n,o){var r=new j(0,0);e.forEach((function(e){t!==e&&t.pos_.dist(e.pos_)<i&&t.inView(e,n)&&(r.x_+=t.pos_.x_-e.pos_.x_,r.y_+=t.pos_.y_-e.pos_.y_)})),r.multS(o),t.vel_.addP(r)}var g=function(){function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Line",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16711680;Object(h["a"])(this,t),this.graphics_=new w["b"],this.size_=3,this.pos_=e,this.graphics_.x=e.x_,this.graphics_.y=e.y_,this.vel_=i,this.MAX_VEL=n,this.style_=o,this.color_=r,this.draw()}return Object(b["a"])(t,[{key:"inView",value:function(t,e){if(this.vel_.isNull())return!1;var i=this.vel_.clone(),n=t.pos_.clone().subP(this.pos_),o=i.norm2(),r=n.norm2(),a=i.dotProd(n)/(o*r);return Math.acos(a)<=e}},{key:"draw",value:function(){this.graphics_.position.x=this.pos_.x_,this.graphics_.position.y=this.pos_.y_,"Circle"===this.style_?this.graphics_.lineStyle(0).clear().beginFill(this.color_,2).drawCircle(this.graphics_.x,this.graphics_.y,this.size_).endFill():"Line"===this.style_&&this.graphics_.clear().lineStyle(this.size_,this.color_).moveTo(this.pos_.x_,this.pos_.y_).lineTo(this.pos_.x_+this.vel_.x_*this.size_,this.pos_.y_+this.vel_.y_*this.size_).closePath()}},{key:"limitVelocity",value:function(){var t=this.vel_.norm2();t>this.MAX_VEL&&this.vel_.divS(t).multS(this.MAX_VEL)}}]),t}();function k(t,e,i,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=t.pos_.x_,s=t.pos_.y_;a<o?t.vel_.x_+=e:a>i&&(t.vel_.x_-=e),s<r?t.vel_.y_+=e:s>n&&(t.vel_.y_-=e)}var x=function(){function t(){Object(h["a"])(this,t),this.boids_=[],this.others_=[]}return Object(b["a"])(t,[{key:"createRandomBoids",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Line",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:16777215,o=0;o<t;++o){var r=this.createRandomBoid(e,i,n);this.boids_.push(r),O.app_.stage.addChild(r.graphics_)}}},{key:"createRandomBoid",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Line",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16777215;return new g(new j(Math.random()*O.width_/2,Math.random()*O.height_/2),new j(6*Math.random()-3,6*Math.random()-3),t,e,i)}},{key:"apply",value:function(t){t.limitVelocity(),this.applyOthers(t),k(t,1,O.width_/2,O.height_/2),t.pos_.addP(t.vel_),t.draw()}},{key:"applyOthers",value:function(t){this.others_.forEach((function(e){e.applyFlock(t)}))}}]),t}(),P=function(t){Object(l["a"])(i,t);var e=Object(_["a"])(i);function i(){return Object(h["a"])(this,i),e.apply(this,arguments)}return Object(b["a"])(i,[{key:"applyFlock",value:function(t){m(t,this.boids_,O.randomNum(1,35),.4*Math.PI,.2)}},{key:"move",value:function(){var t=this;this.boids_.forEach((function(e){m(e,t.boids_,75,Math.PI,.5),t.apply(e)}))}}]),i}(x);function M(t,e,i,n,o){var r=new j(0,0),a=0;e.forEach((function(e){t.pos_.dist(e.pos_)<i&&t.inView(e,n)&&(r.addP(e.pos_),a++)})),a&&(r.divS(a).subP(t.pos_).multS(o),t.vel_.addP(r))}function S(t,e,i,n,o){var r=new j(0,0),a=0;e.forEach((function(e){t.pos_.dist(e.pos_)<i&&t.inView(e,n)&&(r.addP(e.vel_),a++)})),0!==a&&(r.divS(a).subP(t.vel_).multS(o),t.vel_.addP(r))}i("a434");function C(t,e,i){for(var n=0;n<e.length;++n)if(t.pos_.dist(e[n].pos_)<i)return O.app_.stage.removeChild(e[n].graphics_),e.splice(n,1),!0;return!1}var N=function(t){Object(l["a"])(i,t);var e=Object(_["a"])(i);function i(){return Object(h["a"])(this,i),e.apply(this,arguments)}return Object(b["a"])(i,[{key:"applyFlock",value:function(t){m(t,this.boids_,100,.4*Math.PI,-5e-4),C(t,this.boids_,t.size_)&&t.size_++}},{key:"move",value:function(){var t=this;this.boids_.forEach((function(e){M(e,t.boids_,100,.3*Math.PI,.005),m(e,t.boids_,15,Math.PI,.05),S(e,t.boids_,100,.3*Math.PI,.05),t.apply(e)}))}}]),i}(x),E=function(t){Object(l["a"])(i,t);var e=Object(_["a"])(i);function i(){var t;return Object(h["a"])(this,i),t=e.call(this),O.interactions_.on("mouseup",(function(e){O.down&&t.wall(e)})).on("mousemove",(function(e){O.down&&t.wall(e)})),t}return Object(b["a"])(i,[{key:"wall",value:function(t){var e=new j(t.data.global.x,t.data.global.y);this.drawWall(e),this.boids_.push(new g(e.divS(2),new j(0,0),16711680))}},{key:"drawWall",value:function(t){var e=(new w["b"]).beginFill(0,1).drawCircle(t.x_,t.y_,2).endFill();O.app_.stage.addChild(e)}},{key:"applyFlock",value:function(t){m(t,this.boids_,10,Math.PI,.1)}},{key:"move",value:function(){}}]),i}(x),V=function(){function t(){Object(h["a"])(this,t),this.predators_=new P,this.preys_=new N,this.walls_=new E,this.predators_.others_.push(this.preys_),this.predators_.others_.push(this.walls_),this.preys_.others_.push(this.predators_),this.preys_.others_.push(this.walls_),this.predators_.createRandomBoids(3,2,"Circle",16711680),this.preys_.createRandomBoids(200,3,"Line",255)}return Object(b["a"])(t,[{key:"clear",value:function(){this.predators_.boids_=[],this.preys_.boids_=[],this.walls_.boids_=[],O.app_.stage.removeChildren()}},{key:"move",value:function(){this.preys_.move(),this.predators_.move()}}]),t}(),L=function(t){Object(l["a"])(i,t);var e=Object(_["a"])(i);function i(){var t;return Object(h["a"])(this,i),t=e.apply(this,arguments),t.start=!1,t.preyNo=0,t.predatorNo=0,t.instruction="Click on the canvas to draw walls!",t}return Object(b["a"])(i,[{key:"mounted",value:function(){var t=this;O.setup(.9*window.innerWidth,.9*window.innerHeight),O.interactions_.on("mousedown",(function(){t.instruction=""}));var e=document.getElementById("canvas");e.appendChild(O.app_.view),this.application=new V,this.boidsNo(),this.animate(this.application)}},{key:"startStop",value:function(){this.start=!this.start}},{key:"clear",value:function(){void 0!==this.application&&(this.application.clear(),this.boidsNo())}},{key:"newPreys",value:function(){void 0!==this.application&&(this.application.preys_.createRandomBoids(50,2,"Line",255),this.boidsNo())}},{key:"newPredator",value:function(){void 0!==this.application&&(this.application.predators_.createRandomBoids(1,1,"Circle",16711680),this.boidsNo())}},{key:"boidsNo",value:function(){void 0!==this.application&&(this.preyNo=this.application.preys_.boids_.length,this.predatorNo=this.application.predators_.boids_.length)}},{key:"animate",value:function(t){var e=this;O.app_.ticker.add((function(){e.start&&(t.move(),e.boidsNo())}))}}]),i}(p["b"]);L.render=y;var B=L,F=function(t){Object(l["a"])(i,t);var e=Object(_["a"])(i);function i(){return Object(h["a"])(this,i),e.apply(this,arguments)}return i}(p["b"]);F=Object(d["a"])([Object(p["a"])({components:{MainWindow:B}})],F);var I=F;I.render=u;var z=I,R=[{path:"/",name:"Home",component:z}],A=Object(s["a"])({history:Object(s["b"])("/boids_vue3/"),routes:R}),W=A;Object(n["b"])(a).use(W).mount("#app")}});
//# sourceMappingURL=app.4d87e734.js.map