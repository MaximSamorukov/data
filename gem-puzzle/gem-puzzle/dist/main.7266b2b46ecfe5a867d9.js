(()=>{var e={171:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(645),r=n.n(i)()((function(e){return e[1]}));r.push([e.id,"* {\n  font-family: 'Boogaloo', cursive;\n}\n\n.game-container {\n  width: 500px;\n  height: 500px;\n  background-color: white;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  /* border: 1px solid black; */\n  flex-direction: column;\n}\n\n.menu-container {\n  width: 255px;\n  height: 80px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px, solid black;\n  display: flex;\n  justify-content: start;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  /* background-color: turquoise; */\n}\n\nselect {\n  margin-right: auto;\n  margin-left: auto;\n  width: 90px;\n  height: 22px;\n  margin: 0;\n  margin-right: 3px;\n\n\n}\n\n.select-btn, .save-btn {\n  margin-right: 23px;\n}\n\n.game-area {\n  width: 255px;\n  height: 255px;\n  background-color: rgb(255, 255, 255);\n  border: 3px solid blue;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  padding: 2px;\n}\n.four-on-four {\n\n}\n\n.three-on-three {\n\n}\n\n.eight-on-eight {\n\n}\n\n.blue {\n  background-color: rgb(255, 255, 255);\n  border: 3px solid blue;\n}\n\n\n.item-60 {\n  width: 60px;\n  height: 60px;\n\n  border-radius: 10px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 28px;\n  cursor: pointer;\n}\n\n.item-80 {\n  width: 80px;\n  height: 80px;\n\n  border-radius: 15px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 12px;\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.item-30 {\n  width: 30px;\n  height: 30px;\n  border: 1px solid blue;\n  border-radius: 3px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 3px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.item-zero {\n  background-color: rgb(255, 255, 255);\n  border: 0;\n  color: white;\n}\n\n\n\n.green {\n  background-color: rgb(89, 226, 43);\n}\n\n.win {\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.best {\n  /* border: 1px solid black; */\n  cursor: pointer;\n}\n\n.table-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: blanchedalmond;\n  opacity: 1;\n}\n\n.table {\n  margin-top: 100px;\n  width: 310px;\n  opacity: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: stretch;\n  margin-right: auto;\n  margin-left: auto;\n\n\n}\n\n.table-item {\n  color: black;\n  height: 30px;\n  background-color:white;\n  width: 100%;\n  font-size: 22px;\n  margin-top: 10px;\n  opacity: 0.7;\n\n\n}\n\nspan {\n  width: 200px;\n  margin-right: 30px;\n}\n\n.table-noitem {\n  text-align: center;\n}\n\n.background {\n  /* background-color: violet; */\n}\n\n.main {\n  background-color: turquoise;\n}\n\n.item-opacity {\n  opacity: 0;\n}\n\n.click-zone {\n  /* border: 1px solid violet; */\n\n}\n\n.time-zone {\n  /* border: 1px solid violet; */\n  margin-left: 15px;\n  margin-right: 25px;\n}",""]);const o=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},527:e=>{e.exports=function(){const e=document.querySelector("body"),t=document.createElement("div");e.appendChild(t);const n=document.createElement("div");t.appendChild(n),n.className="table",t.className="table-container";const i=window.localStorage,r=JSON.parse(i.getItem("results"));let o=[];r.length>0&&(o=r.map(((e,t)=>`<div class="table-item"><span>${t<9?`0${t+1}`:`${t+1}`}.</span><span>Time: ${e.time}</span> <span>Steps:${e.clicks}</span></div>`)));const a=r.length>0?o.join(""):'<div class="table-item table-noitem">No results yet</div>';n.innerHTML=a,t.addEventListener("click",(()=>{e.removeChild(t)}))}},379:(e,t,n)=>{"use strict";var i,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(m)):o.push({identifier:d,updater:g(m,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function m(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,h=0;function g(e,t){var n,i,r;if(t.singleton){var o=h++;n=p||(p=c(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=c(t),i=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=a(n[i]);o[r].references--}for(var c=s(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=c}}}}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";var e=n(379),t=n.n(e),i=n(171);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const r=n.p+"97feba23a2c79ed802610c1aed594ad4.wav",o=n(527),a={iftime:!1,delta:0,key:!1,timeOrigin:0,verdict:!1,steps:0,soundfile:"",randomArray(e){let t=[];for(let n=0;n<e;n+=1)t.push(n);const n=[];for(let i=0;i<e;i+=1){const e=t[Math.floor(Math.random()*t.length)];t=t.filter((t=>t!==e)),n.push(e)}return n},myFunc(){const e=document.querySelector(".time-zone");this.timeOrigin=0===this.timeOrigin?new Date:this.timeOrigin;const t=new Date,n=new Date(t.valueOf()-this.timeOrigin.valueOf()+this.delta),i=[n.getUTCHours()<10?`0${n.getUTCHours()}`:`${n.getUTCHours()}`,n.getMinutes()<10?`0${n.getMinutes()}`:`${n.getMinutes()}`,n.getSeconds()<10?`0${n.getSeconds()}`:`${n.getSeconds()}`];e.textContent=e.textContent.split(":").map(((e,t)=>i[t])).join(":")},fnTime(){const e=document.querySelector(".game-area");if(!1!==this.iftime){if(this.iftime=!1,this.myFunc(),!1===this.key){const e=window.setInterval(this.myFunc.bind(this),1e3);this.key=e}e.removeEventListener("mousedown",this.fnTime)}},canMove(e,t=16){const{children:n}=e.target.parentNode,i=Array.from(n);let r=0;i.map(((e,t)=>(""===e.textContent&&(r=t+1),e.textContent)));const o=t**.5,a=Math.ceil(r/o),s=r%o==0?o:r%o;return r={row:a,column:s},0!==[{row:a-1,column:s},{row:a+1,column:s},{row:a,column:s+1},{row:a,column:s-1}].filter((e=>((e,t)=>{let n=Object.values(e);return n=n.filter((e=>e<t+1&&e>0)),2===n.length&&e})(e,t**.5))).map((e=>(({row:e,column:t},n)=>n[(e-1)*n.length**.5+(t-1)])(e,n))).filter((t=>t===e.target)).length},move(e){if(this.verdict=!1,this.canMove(e,this.n**2)){this.steps+=1,this.iftime=!0,this.soundfile.play(),document.querySelector(".click-zone").textContent=`Clicks: ${this.steps}`;const t=e.target,{children:n}=e.target.parentNode,i=Array.from(n).filter((e=>""===e.textContent))[0],r=t.textContent;t.textContent="",i.textContent=r,t.classList.add("item-zero"),i.classList.remove("item-zero"),t.classList.remove("blue"),i.classList.add("blue")}},items(e=4,t){const n=document.querySelector(".game-area");this.randomArray({3:9,4:16,8:64}[`${e}`]).map((i=>{const r=document.createElement("div");return r.className=`item-${t} blue`,n.appendChild(r),0===i?(r.className=`item-${t} item-zero`,r.textContent=""):r.textContent=`${i}`,this.n=e,r.addEventListener("click",this.move.bind(this)),r.addEventListener("mousedown",(e=>{this.move(e),!1!==this.verdict&&(e.target.className=`item-${t} item-zero`)})),r.addEventListener("mouseup",(e=>{!1!==this.verdict&&(this.verdict=!1,e.target.className=`item-${t} blue`)})),i}))},createItemsOnLoad(e){const t=e.split(":").length**.5,n=10*Math.floor(25/t),i=document.querySelector(".game-area");e.split(":").map((e=>{const r=document.createElement("div");return r.className=`item-${n} blue`,i.appendChild(r),""===e?(r.className=`item-${n} item-zero`,r.textContent=""):r.textContent=`${e}`,this.n=t,r.addEventListener("click",this.move.bind(this)),r.addEventListener("mousedown",(e=>{!1!==this.verdict&&(e.target.className=`item-${n} item-zero`)})),r.addEventListener("mouseup",(e=>{!1!==this.verdict&&(this.verdict=!1,e.target.className=`item-${n} blue`)})),e}))},makeSelected(e,t){let n=1;3===t&&(n=0),8===t&&(n=2),e[n].selected=!0},gameAreaConstruct(e){const t=10*Math.floor(25/e),n={3:"three-on-three",4:"four-on-four",8:"eight-on-eight"},i=document.body,r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),s=document.createElement("select"),c=document.createElement("option"),l=document.createElement("option"),d=document.createElement("option"),u=document.createElement("button");u.name="save-btn",u.textContent="Save",u.className="save-btn",u.addEventListener("click",(()=>{const e=document.querySelector(".game-area").childNodes,t=this.steps,n=document.querySelector(".time-zone").textContent;let i="";e.forEach((e=>(i=`${i}:${e.textContent}`,e))),i=i.slice(1),i=`${t};${n};${i}`,window.localStorage.setItem("data",i)}));const m=document.createElement("button");m.name="load-btn",m.textContent="Load",m.className="load-btn",m.addEventListener("click",(()=>{this.steps=0,window.clearInterval(this.key),this.key=!1;const e=window.localStorage.getItem("data"),[t,n,i]=e.split(";"),r=new Date(n.split(":").map((e=>parseInt(e,10))).reduce((function(e,t,n){return 0===n?e+60*t*60*1e3:1===n?e+60*t*1e3:2===n?e+1e3*t:t}),0));this.delta=r.valueOf(),this.steps=parseInt(t,10),this.timeOrigin=0;const o=document.querySelector(".click-zone");document.querySelector(".time-zone").textContent=n,o.textContent=`Clicks: ${t}`;const a=document.querySelector(".game-area");a.innerHTML="",this.createItemsOnLoad(i),this.makeSelected(s,i.split(":").length**.5),a.addEventListener("mousedown",this.fnTime.bind(this))}));const p=document.createElement("button");p.type="submit",p.name="select-btn",p.textContent="Apply",p.className="select-btn",p.addEventListener("click",(e=>{const t=parseInt(e.target.parentNode.children[0].value[0],10);i.removeChild(r),this.init(t)})),c.textContent="3 x 3",l.textContent="4 x 4",d.textContent="8 x 8",s.name="gameOptions",c.value="3 x 3",l.value="4 x 4",d.value="8 x 8",s.appendChild(c),s.appendChild(l),s.appendChild(d),this.makeSelected(s,e);const h=document.createElement("div");h.textContent="Clicks: 0",h.className="click-zone";const g=document.createElement("div");g.className="time-zone",g.textContent="00:00:00";const f=document.createElement("div");f.className="best",f.addEventListener("click",this.getBest.bind(this)),f.textContent="Show best results";const b=document.createElement("div");b.className="win",b.addEventListener("click",this.ifwin.bind(this)),b.textContent="Win",r.appendChild(a),a.appendChild(s),a.appendChild(p),a.appendChild(u),a.appendChild(m),a.appendChild(h),a.appendChild(g),a.appendChild(f),a.className="menu-container",r.appendChild(o),r.className=`game-container ${n[`${e}`]}-container`,o.className=`game-area ${n[`${e}`]}-game-area`,i.appendChild(r),this.items(e,t)},getBest(){o()},ifwin(){const e=this.steps,t={time:document.querySelector(".time-zone").textContent,clicks:e},n=window.localStorage;let i=JSON.parse(n.getItem("results"));i.push(t),i.sort(((e,t)=>e.clicks-t.clicks)),i=i.slice(0,10);const r=JSON.stringify(i);n.setItem("results",r)},init(e){this.key&&window.clearInterval(this.key),this.key=!1,this.soundfile=new Audio(r),this.delta=0,this.timeOrigin=0,this.steps=0,this.gameAreaConstruct(e);const t=window.localStorage;t.getItem("results")||t.setItem("results",JSON.stringify([])),document.querySelector(".game-area").addEventListener("mousedown",this.fnTime.bind(this))}};window.addEventListener("DOMContentLoaded",(()=>{a.init(4)}))})()})();