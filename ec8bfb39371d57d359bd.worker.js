!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Rath/",r(r.s=6)}([function(e,t,r){"use strict";this&&this.__assign;Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=r(5),i=r(1),o={sum:i.sum_unsafe,mean:i.mean,count:i.count};function u(e){var t=e.type,r=e.aggFunc,a=void 0===r?i.count:r,o=e.factTable,u=void 0===o?[]:o,s=e.dimensions,c=void 0===s?[]:s,l=e.measures,f=void 0===l?[]:l;switch(t){case"period":return new n.periodCube({aggFunc:a,factTable:u,dimensions:c,measures:f});case"moment":default:return new n.momentCube({aggFunc:a,factTable:u,dimensions:c,measures:f})}}t.createCube=u,t.default=function(e){var t=e.dimensions,r=e.measures,n=e.asFields,s=e.operator,c=e.dataSource,l=u({type:"moment",aggFunc:o[s]||i.count,dimensions:t,measures:r,factTable:c}),f=a.tree2Table({dimensions:t,measures:r,cube:l});return f.forEach((function(e){n.forEach((function(t,n){e[t]=e[r[n]]}))})),f},function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(1))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sum_unsafe=function(e,t){var r={};t.forEach((function(e){r[e]=0}));for(var n=function(n,a){t.forEach((function(t){r[t]+=e[n][t]}))},a=0,i=e.length;a<i;a++)n(a);return r},t.sum=function(e,t){var r={};t.forEach((function(e){r[e]=0}));for(var n=function(n,a){t.forEach((function(t){r[t]+=Number(e[n][t])||0}))},a=0,i=e.length;a<i;a++)n(a);return r},t.count=function(e,t){var r={};t.forEach((function(e){r[e]=0}));for(var n=0,a=e.length;n<a;n++)t.forEach((function(e){r[e]++}));return r},t.mean=function(e,t){var r={};t.forEach((function(e){r[e]=0}));for(var n=function(n,a){t.forEach((function(t){r[t]+=Number(e[n][t])||0}))},a=0,i=e.length;a<i;a++)n(a);return t.forEach((function(t){r[t]/=e.length})),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.periodCube=n.default;var a=r(4);t.momentCube=a.default},function(e,t,r){"use strict";var n=this&&this.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o},a=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(n(arguments[t]));return e},i=this&&this.__values||function(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.children=new Map,this._rawData=[],this.aggFunc=e,this.cache=!1}return e.prototype.push=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];(e=this._rawData).push.apply(e,a(t))},e.prototype.aggData=function(e){return void 0===e&&(e=[]),this.cache||(this._aggData=this.aggFunc(this.rawData,e),this.cache=!0),this._aggData},e.prototype.clearCache=function(){this.cache=!1},Object.defineProperty(e.prototype,"rawData",{get:function(){var e,t;if(!this.cache){if(0!==this.children.size){var r=this.children.values(),n=[];try{for(var a=i(r),o=a.next();!o.done;o=a.next()){var u=o.value,s=void 0,c=u.rawData,l=c.length;for(s=0;s<l;s++)n.push(c[s])}}catch(f){e={error:f}}finally{try{o&&!o.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}this._rawData=n}this.cache=!0}return this._rawData},enumerable:!0,configurable:!0}),e.prototype.getNode=function(e){return function t(r,a){var o,u;if(a===e.length)return r;var s=r.children.entries();try{for(var c=i(s),l=c.next();!l.done;l=c.next()){var f=n(l.value,2),h=f[0],d=f[1];if(h===e[a])return t(d,a+1)}}catch(v){o={error:v}}finally{try{l&&!l.done&&(u=c.return)&&u.call(c)}finally{if(o)throw o.error}}return null}(this,0)},e}(),u=function(){function e(e){this.aggFunc=e.aggFunc,this.factTable=e.factTable,this.dimensions=e.dimensions,this.measures=e.measures}return e.prototype.get=function(e){var t=this.tree,r=(this.aggFunc,this.measures);return function t(a,o){var u,s;if(o===e.length)return a.aggData(r);var c=a.children.entries();try{for(var l=i(c),f=l.next();!f.done;f=l.next()){var h=n(f.value,2),d=h[0],v=h[1];if(d===e[o])return t(v,o+1)}}catch(g){u={error:g}}finally{try{f&&!f.done&&(s=l.return)&&s.call(l)}finally{if(u)throw u.error}}return!1}(t,0)},e.prototype.getNode=function(e){return this.tree.getNode(e)},e.prototype.buildTree=function(){var e,t=new o(this.aggFunc),r=this.factTable.length;for(e=0;e<r;e++)this.insertNode(this.factTable[e],t,0);return this.tree=t,t},e.prototype.insertNode=function(e,t,r){if(t.push(e),t.cache=!1,r<this.dimensions.length){var n=e[this.dimensions[r]];t.children.has(n)||t.children.set(n,new o(this.aggFunc)),this.insertNode(e,t.children.get(n),r+1)}},e.prototype.aggTree=function(e){var t,r;void 0===e&&(e=this.tree);var n=e.children.values();try{for(var a=i(n),o=a.next();!o.done;o=a.next()){var u=o.value;this.aggTree(u)}}catch(s){t={error:s}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return e.aggData(this.measures),e},e.prototype.aggNode=function(e){var t,r;void 0===e&&(e=this.tree);var n=e.children.values();try{for(var a=i(n),o=a.next();!o.done;o=a.next()){var u=o.value;this.aggTree(u)}}catch(s){t={error:s}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return e.aggData(this.measures),e},e}();t.default=u},function(e,t,r){"use strict";var n=this&&this.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o},a=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(n(arguments[t]));return e},i=this&&this.__values||function(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.children=new Map,this.rawData=[]}return e.prototype.push=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];(e=this.rawData).push.apply(e,a(t))},e.prototype.aggData=function(e,t){return void 0===t&&(t=[]),this._aggData=e(this.rawData,t),this._aggData},e.prototype.getNode=function(e){return function t(r,a){var o,u;if(a===e.length)return r;var s=r.children.entries();try{for(var c=i(s),l=c.next();!l.done;l=c.next()){var f=n(l.value,2),h=f[0],d=f[1];if(h===e[a])return t(d,a+1)}}catch(v){o={error:v}}finally{try{l&&!l.done&&(u=c.return)&&u.call(c)}finally{if(o)throw o.error}}return null}(this,0)},e}();t.Node=o;var u=function(){function e(e){this.aggFunc=e.aggFunc,this.factTable=e.factTable,this.dimensions=e.dimensions,this.measures=e.measures,this.buildTree(),this.aggTree()}return e.prototype.get=function(e){var t=this.tree,r=this.aggFunc,a=this.measures;return function t(o,u){var s,c;if(u===e.length)return o.aggData(r,a);var l=o.children.entries();try{for(var f=i(l),h=f.next();!h.done;h=f.next()){var d=n(h.value,2),v=d[0],g=d[1];if(v===e[u])return t(g,u+1)}}catch(y){s={error:y}}finally{try{h&&!h.done&&(c=f.return)&&c.call(f)}finally{if(s)throw s.error}}return!1}(t,0)},e.prototype.getNode=function(e){return this.tree.getNode(e)},e.prototype.setData=function(e){var t=e.aggFunc,r=void 0===t?this.aggFunc:t,n=e.factTable,a=void 0===n?this.factTable:n,i=e.dimensions,o=void 0===i?this.dimensions:i,u=e.measures,s=void 0===u?this.measures:u;o!==this.dimensions||a!==this.factTable?(this.dimensions=o,this.factTable=a,this.measures=s,this.aggFunc=r,this.buildTree(),this.aggTree()):s===this.measures&&r===this.aggFunc||(this.measures=s,this.aggFunc=r,this.aggTree())},e.prototype.buildTree=function(){var e,t=new o,r=this.factTable.length;for(e=0;e<r;e++)this.insertNode(this.factTable[e],t,0);return this.tree=t,t},e.prototype.insertNode=function(e,t,r){if(r===this.dimensions.length)t.push(e);else{var n=e[this.dimensions[r]];t.children.has(n)||t.children.set(n,new o),this.insertNode(e,t.children.get(n),r+1)}},e.prototype.aggTree=function(e){var t,r;if(void 0===e&&(e=this.tree),e.children.size>0){e.rawData=[];var n=e.children.values();try{for(var a=i(n),o=a.next();!o.done;o=a.next()){var u=o.value,s=void 0,c=this.aggTree(u).rawData,l=c.length;for(s=0;s<l;s++)e.rawData.push(c[s])}}catch(f){t={error:f}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}}return e.aggData(this.aggFunc,this.measures),e},e}();t.default=u},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__values||function(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return o};Object.defineProperty(t,"__esModule",{value:!0}),t.tree2Table=function(e){var t=e.dimensions,r=(e.measures,e.cube),o=(r.aggFunc,[]);return function e(r,u,s){var c,l,f;if(0!==r.children.size)try{for(var h=a(r.children.entries()),d=h.next();!d.done;d=h.next()){var v=i(d.value,2),g=v[0];e(v[1],n(n({},u),((f={})[t[s]]=g,f)),s+1)}}catch(p){c={error:p}}finally{try{d&&!d.done&&(l=h.return)&&l.call(h)}finally{if(c)throw c.error}}else{var y=r._aggData;o.push(n(n({},u),y))}}(r.tree,{},0),o}},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.r(t);r(0);function a(e){for(var t=[],r=0;r<e.length;r++)for(var n=r+1;n<e[r].length;n++)t.push([[r,n],Math.abs(e[r][n])]);return t}function i(e,t){return e[t]===t?t:e[t]=i(e,e[t])}function o(e,t,r){var n=i(e,t),a=i(e,r);e[n]=a,i(e,t),i(e,r)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=a(e);r.sort((function(e,t){return t[1]-e[1]}));var u=[],s=e.map((function(e,t){return t})),c=n(s),l=!1,f=!0,h=!1,d=void 0;try{for(var v,g=r[Symbol.iterator]();!(f=(v=g.next()).done);f=!0){var y=v.value;i(s,y[0][0])!==i(s,y[0][1])&&(o(s,y[0][0],y[0][1]),u.push([y[0],y[1],l]));for(var p=0;p<s.length;p++)s[p]=i(s,p);var m=new Set(s);if(m.size<=t?l=!0:c=n(s),1===m.size)break}}catch(b){h=!0,d=b}finally{try{f||null==g.return||g.return()}finally{if(h)throw d}}return{edgesInMST:u,groups:c}}function s(e){let t=0,r=e.length;for(let n=0;n<r;n++)t+=e[n];return t}self.addEventListener("message",e=>{console.log("[cluster measures]");try{const{spaces:t,maxGroupNumber:r}=e.data;let n=[];for(let e of t){const{edgesInMST:t,groups:a}=u(e.matrix,r);let i=new Map;for(let r=0;r<a.length;r++)i.has(a[r])||i.set(a[r],[]),i.get(a[r]).push(e.measures[r]);for(let r of i.values())n.push({dimensions:e.dimensions,measures:r.map(e=>e.name),score:s(r.map(e=>e.value))})}n.sort((e,t)=>e.score-t.score),self.postMessage({success:!0,data:n})}catch(t){self.postMessage({success:!1,message:t.toString()})}},!1)}]);
//# sourceMappingURL=ec8bfb39371d57d359bd.worker.js.map