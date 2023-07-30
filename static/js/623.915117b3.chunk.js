"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[623],{8623:function(u,D,n){n.r(D),n.d(D,{default:function(){return au}});var e=n(2791),t=n(4270),F=n(3458),r=n(4165),C=n(5861),A=n(9439),i=n(8854),o=n(1686),E=n.n(o),a="NOT_FOUND";var c=function(u,D){return u===D};function B(u,D){var n="object"===typeof D?D:{equalityCheck:D},e=n.equalityCheck,t=void 0===e?c:e,F=n.maxSize,r=void 0===F?1:F,C=n.resultEqualityCheck,A=function(u){return function(D,n){if(null===D||null===n||D.length!==n.length)return!1;for(var e=D.length,t=0;t<e;t++)if(!u(D[t],n[t]))return!1;return!0}}(t),i=1===r?function(u){var D;return{get:function(n){return D&&u(D.key,n)?D.value:a},put:function(u,n){D={key:u,value:n}},getEntries:function(){return D?[D]:[]},clear:function(){D=void 0}}}(A):function(u,D){var n=[];function e(u){var e=n.findIndex((function(n){return D(u,n.key)}));if(e>-1){var t=n[e];return e>0&&(n.splice(e,1),n.unshift(t)),t.value}return a}return{get:e,put:function(D,t){e(D)===a&&(n.unshift({key:D,value:t}),n.length>u&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(r,A);function o(){var D=i.get(arguments);if(D===a){if(D=u.apply(null,arguments),C){var n=i.getEntries().find((function(u){return C(u.value,D)}));n&&(D=n.value)}i.put(arguments,D)}return D}return o.clearCache=function(){return i.clear()},o}function s(u){for(var D=arguments.length,n=new Array(D>1?D-1:0),e=1;e<D;e++)n[e-1]=arguments[e];return function(){for(var D=arguments.length,e=new Array(D),t=0;t<D;t++)e[t]=arguments[t];var F,r=0,C={memoizeOptions:void 0},A=e.pop();if("object"===typeof A&&(C=A,A=e.pop()),"function"!==typeof A)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof A+"]");var i=C.memoizeOptions,o=void 0===i?n:i,E=Array.isArray(o)?o:[o],a=function(u){var D=Array.isArray(u[0])?u[0]:u;if(!D.every((function(u){return"function"===typeof u}))){var n=D.map((function(u){return"function"===typeof u?"function "+(u.name||"unnamed")+"()":typeof u})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return D}(e),c=u.apply(void 0,[function(){return r++,A.apply(null,arguments)}].concat(E)),B=u((function(){for(var u=[],D=a.length,n=0;n<D;n++)u.push(a[n].apply(null,arguments));return F=c.apply(null,u)}));return Object.assign(B,{resultFunc:A,memoizedResultFunc:c,dependencies:a,lastResult:function(){return F},recomputations:function(){return r},resetRecomputations:function(){return r=0}}),B}}var p,l,d,f,x,m,h,g,v,b,y,Z,j,w,k,P,z,N,S,I,T=s(B),q=function(u){return u.contacts.isLoading},L=function(u){return u.contacts.items},O=function(u){return u.filter.filter},R=T([L,O],(function(u,D){return u.filter((function(u){return u.name.toLowerCase().includes(D.toLowerCase())}))})),X=n(168),K=n(5867),W=n(6891),$=K.ZP.form(p||(p=(0,X.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n  margin-left: auto;\n  margin-right: auto;\n\n  ","\n"])),(0,K.iv)(l||(l=(0,X.Z)(["\n    @media screen and (max-width: 767px) {\n      & {\n        width: 280px;\n      }\n    }\n    @media screen and (min-width: 768px) and (max-width: 900px) {\n      & {\n        width: 600px;\n      }\n    }\n  "])))),G=(0,K.ZP)(W.lX)(d||(d=(0,X.Z)(["\n  top: ",";\n  font-size: ",";\n"])),(function(u){return u.isNameInputFocused?"-15px":"5px"}),(function(u){return u.isNameInputFocused?"14px":"18px"})),J=(0,K.ZP)(W.lX)(f||(f=(0,X.Z)(["\n  top: ",";\n  font-size: ",";\n"])),(function(u){return u.isNumberInputFocused?"-15px":"5px"}),(function(u){return u.isNumberInputFocused?"14px":"18px"})),M=n(7270),U=n(3329),_=function(){var u=(0,e.useState)(""),D=(0,A.Z)(u,2),n=D[0],t=D[1],o=(0,e.useState)(""),a=(0,A.Z)(o,2),c=a[0],B=a[1],s=(0,e.useState)(!1),p=(0,A.Z)(s,2),l=p[0],d=p[1],f=(0,e.useState)(!1),x=(0,A.Z)(f,2),m=x[0],h=x[1],g=(0,e.useState)(!1),v=(0,A.Z)(g,2),b=v[0],y=v[1],Z=(0,i.T)(),j=(0,i.C)(L),w=(0,i.C)(q),k=function(u){return/^(?:[\t-\r '\x2DA-Za-z\xA0\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2000-\u200A\u2028\u2029\u202F\u205F\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3000\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFEFF\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])+$/.test(u)},P=function(u){return/^\+?[0-9 ()-]+$/.test(u)},z=function(){var u=(0,C.Z)((0,r.Z)().mark((function u(D){var e,C,A,i;return(0,r.Z)().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:if(D.preventDefault(),e=D.currentTarget,A=c,k(C=n)){u.next=6;break}return u.abrupt("return",E().Notify.info("Name may contain only letters, apostrophe, dash and spaces",{width:"500px",fontSize:"20px"}));case 6:if(P(A)){u.next=8;break}return u.abrupt("return",E().Notify.info("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",{width:"500px",fontSize:"20px"}));case 8:if(void 0===(i=j.find((function(u){return u.name.toLowerCase()===C.toLowerCase()})))){u.next=12;break}return e.reset(),u.abrupt("return",E().Notify.info("".concat(i.name," is already in contacts!"),{width:"500px",fontSize:"20px"}));case 12:return d(!1),u.next=15,Z((0,F.uK)({name:C,number:A}));case 15:d(!0),t(""),B(""),e.reset(),h(!1),y(!1);case 21:case"end":return u.stop()}}),u)})));return function(D){return u.apply(this,arguments)}}();return(0,U.jsxs)($,{onSubmit:z,children:[(0,U.jsxs)(W.Wz,{children:[(0,U.jsx)(G,{isNameInputFocused:m,children:"Name"}),(0,U.jsx)(W.yt,{type:"text",name:"name",value:n,onChange:function(u){return t(u.target.value.trim())},onFocus:function(){return h(!0)},onBlur:function(){h(!!n)},title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",autoComplete:"on",required:!0})]}),(0,U.jsxs)(W.Wz,{children:[(0,U.jsx)(J,{isNumberInputFocused:b,children:"Number"}),(0,U.jsx)(W.yt,{type:"tel",name:"number",value:c,onChange:function(u){return B(u.target.value.trim())},onFocus:function(){return y(!0)},onBlur:function(){y(!!c)},title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",autoComplete:"on",required:!0})]}),(0,U.jsx)(W.zx,{type:"submit",children:!l&&w?(0,U.jsx)(M.a,{}):"Add contact"})]})},H=n(2616),Q=K.ZP.li(x||(x=(0,X.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 768px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 3px 10px;\n  border-radius: 10px;\n  transition-property: background-color;\n  transition-duration: 0.3s;\n\n  ","\n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: rgba(83, 140, 214, 0.5);\n  }\n"])),(0,K.iv)(m||(m=(0,X.Z)(["\n    @media screen and (max-width: 479px) {\n      flex-direction: column;\n    }\n  "])))),V=K.ZP.div(h||(h=(0,X.Z)(["\n  ","\n"])),(0,K.iv)(g||(g=(0,X.Z)(["\n    @media screen and (max-width: 479px) {\n      text-align: center;\n    }\n  "])))),Y=K.ZP.p(v||(v=(0,X.Z)(["\n  margin-bottom: 5px;\n  word-break: break-all;\n  font-size: 17px;\n  color: red;\n"]))),uu=K.ZP.p(b||(b=(0,X.Z)(["\n  padding-left: 10px;\n  font-size: 18px;\n  font-weight: 500;\n\n  ","\n"])),(0,K.iv)(y||(y=(0,X.Z)(["\n    @media screen and (max-width: 480px) {\n      padding-left: 0;\n      margin-bottom: 5px;\n    }\n  "])))),Du=K.ZP.button(Z||(Z=(0,X.Z)(["\n  min-width: 120px;\n  height: 30px;\n  border-radius: 5px;\n  border: none;\n  font-size: 18px;\n  background-color: #e2e2e2;\n  transition-property: background-color color;\n  transition-duration: 0.3s;\n\n  ","\n\n  &:hover,\n  &:focus {\n    background-color: #ff1919;\n    color: white;\n    cursor: pointer;\n  }\n"])),(0,K.iv)(j||(j=(0,X.Z)(["\n    @media screen and (min-width: 480px) {\n      margin-left: auto;\n    }\n  "])))),nu=function(u){var D=u.name,n=u.id,t=u.number,r=(0,e.useState)(!1),C=(0,A.Z)(r,2),o=C[0],E=C[1],a=(0,i.T)(),c=(0,i.C)(O),B=(0,i.C)(q);return(0,U.jsxs)(Q,{children:[(0,U.jsxs)(V,{children:[(0,U.jsx)(Y,{children:D}),(0,U.jsx)(uu,{children:t})]}),(0,U.jsx)(Du,{id:n,type:"button",onClick:function(u){n===u.currentTarget.id&&(a((0,F.GK)(n)),E(!o)),c&&a((0,H.x)(""))},children:B&&o?(0,U.jsx)(M.a,{}):"Delete"})]})},eu=K.ZP.ul(w||(w=(0,X.Z)(["\n  max-height: 300px;\n  border-top: 1px solid black;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  overflow-y: auto;\n"]))),tu=function(u){var D=u.children,n=(0,i.C)(R);return(0,U.jsxs)(eu,{children:[n.map((function(u){var D=u.name,n=u.id,e=u.number;return(0,U.jsx)(nu,{name:D,id:n,number:e},n)})),D]})},Fu=K.ZP.div(k||(k=(0,X.Z)(["\n  display: flex;\n  justify-content: center;\n  min-width: 280px;\n  margin-bottom: 30px;\n"]))),ru=K.ZP.div(P||(P=(0,X.Z)(["\n  position: relative;\n"]))),Cu=(0,K.ZP)(W.lX)(z||(z=(0,X.Z)(["\n  top: ",";\n  font-size: ",";\n"])),(function(u){return u.isFindInputFocused?"-15px":"5px"}),(function(u){return u.isFindInputFocused?"14px":"18px"})),Au=function(){var u=(0,e.useState)(!1),D=(0,A.Z)(u,2),n=D[0],t=D[1],F=(0,i.T)(),r=(0,i.C)(O);return(0,e.useEffect)((function(){t(!!r)}),[r,t]),(0,U.jsx)(Fu,{children:(0,U.jsxs)(ru,{children:[(0,U.jsx)(Cu,{isFindInputFocused:n,children:"Find a contact by name"}),(0,U.jsx)(W.yt,{type:"text",name:"filter",value:r,onChange:function(u){F((0,H.x)(u.target.value.trim()))},onFocus:function(){return t(!0)},onBlur:function(){t(!!r)},autoComplete:"on",required:!0})]})})},iu=K.ZP.div(N||(N=(0,X.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-bottom: 1px solid;\n  padding-top: 20px;\n"]))),ou=K.ZP.h1(S||(S=(0,X.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n"]))),Eu=K.ZP.p(I||(I=(0,X.Z)(["\n  font-size: 20px;\n  text-align: center;\n"]))),au=function(){var u=(0,i.T)(),D=(0,i.C)(L),n=(0,i.C)(R);return(0,e.useEffect)((function(){u((0,F.yF)())}),[u]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(t.q,{children:(0,U.jsx)("title",{children:"Phonebook"})}),(0,U.jsxs)(iu,{children:[(0,U.jsx)(ou,{children:"Phonebook"}),(0,U.jsx)(_,{}),0!==D.length?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Au,{}),0!==n.length?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)("p",{children:["contacts: ",n.length]}),(0,U.jsx)(tu,{children:!0})]}):(0,U.jsx)(Eu,{children:"No matches found"})]}):(0,U.jsx)(Eu,{children:"There are no contacts yet. Please fill the form to add a new one!"})]})]})}}}]);
//# sourceMappingURL=623.915117b3.chunk.js.map