import{a as Ge,b as We,c as ge,d as me,f as Ve,g as Xe,h as Ke,j as Ye}from"./chunk-FLUMEVMZ.js";import{a as Re}from"./chunk-FULDPKUR.js";import{A as ee,G as $e,J as ze,O as pe,h as je,q as He,z as x}from"./chunk-PCPYVHWC.js";import{Aa as qe,C as Me,P as _e,V as Be,Y as X,_ as U,c as De,m as V,n as fe,r as Le,ta as Fe}from"./chunk-OH6YQK27.js";import{e as W}from"./chunk-7A67K276.js";var it="firebasestorage.googleapis.com",ot="storageBucket",Dt=2*60*1e3,Lt=10*60*1e3,Mt=1e3;var _=class t extends He{constructor(e,n,s=0){super(be(e),`Firebase Storage: ${n} (${be(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return be(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}},h=function(t){return t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment",t}(h||{});function be(t){return"storage/"+t}function Ie(){let t="An unknown error occurred, please check the error payload for server response.";return new _(h.UNKNOWN,t)}function Bt(t){return new _(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ft(t){return new _(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qt(){let t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _(h.UNAUTHENTICATED,t)}function jt(){return new _(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ht(t){return new _(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function at(){return new _(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ut(){return new _(h.CANCELED,"User canceled the upload/download.")}function $t(t){return new _(h.INVALID_URL,"Invalid URL '"+t+"'.")}function zt(t){return new _(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Gt(){return new _(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ot+"' property when initializing the app?")}function ct(){return new _(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Wt(){return new _(h.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Vt(){return new _(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Xt(t){return new _(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function v(t){return new _(h.INVALID_ARGUMENT,t)}function lt(){return new _(h.APP_DELETED,"The Firebase app was deleted.")}function Pe(t){return new _(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Y(t,e){return new _(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function K(t){throw new _(h.INTERNAL_ERROR,"Internal error: "+t)}var y=class t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=t.makeFromUrl(e,n)}catch{return new t(e,"")}if(s.path==="")return s;throw zt(e)}static makeFromUrl(e,n){let s=null,r="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}let o="(/(.*))?$",u=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}let l="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${p}/${l}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},E=n===it?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",S=new RegExp(`^https?://${E}/${r}/${m}`,"i"),T=[{regex:u,indices:a,postModify:i},{regex:f,indices:g,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<T.length;R++){let D=T[R],L=D.regex.exec(e);if(L){let he=L[D.indices.bucket],G=L[D.indices.path];G||(G=""),s=new t(he,G),D.postModify(s);break}}if(s==null)throw $t(e);return s}},we=class{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function Kt(t,e,n){let s=1,r=null,i=null,o=!1,u=0;function a(){return u===2}let c=!1;function l(...m){c||(c=!0,e.apply(null,m))}function p(m){r=setTimeout(()=>{r=null,t(f,a())},m)}function d(){i&&clearTimeout(i)}function f(m,...S){if(c){d();return}if(m){d(),l.call(null,m,...S);return}if(a()||o){d(),l.call(null,m,...S);return}s<64&&(s*=2);let T;u===1?(u=2,T=0):T=(s+Math.random())*1e3,p(T)}let g=!1;function E(m){g||(g=!0,d(),!c&&(r!==null?(m||(u=2),clearTimeout(r),p(0)):m||(u=1)))}return p(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function Yt(t){t(!1)}function Zt(t){return t!==void 0}function Jt(t){return typeof t=="function"}function Qt(t){return typeof t=="object"&&!Array.isArray(t)}function se(t){return typeof t=="string"||t instanceof String}function Ze(t){return Se()&&t instanceof Blob}function Se(){return typeof Blob<"u"}function ye(t,e,n,s){if(s<e)throw v(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw v(`Invalid value for '${t}'. Expected ${n} or less.`)}function N(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ht(t){let e=encodeURIComponent,n="?";for(let s in t)if(t.hasOwnProperty(s)){let r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var F=function(t){return t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT",t}(F||{});function dt(t,e){let n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}var ke=class{constructor(e,n,s,r,i,o,u,a,c,l,p,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=u,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=p,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){let e=(s,r)=>{if(r){s(!1,new B(!1,null,!0));return}let i=this.connectionFactory_();this.pendingConnection_=i;let o=u=>{let a=u.loaded,c=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;let u=i.getErrorCode()===F.NO_ERROR,a=i.getStatus();if(!u||dt(a,this.additionalRetryCodes_)&&this.retry){let l=i.getErrorCode()===F.ABORT;s(!1,new B(!1,null,l));return}let c=this.successCodes_.indexOf(a)!==-1;s(!0,new B(c,i))})},n=(s,r)=>{let i=this.resolve_,o=this.reject_,u=r.connection;if(r.wasSuccessCode)try{let a=this.callback_(u,u.getResponse());Zt(a)?i(a):i()}catch(a){o(a)}else if(u!==null){let a=Ie();a.serverResponse=u.getErrorText(),this.errorCallback_?o(this.errorCallback_(u,a)):o(a)}else if(r.canceled){let a=this.appDelete_?lt():ut();o(a)}else{let a=at();o(a)}};this.canceled_?n(!1,new B(!1,null,!0)):this.backoffId_=Kt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Yt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},B=class{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}};function en(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tn(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nn(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sn(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rn(t,e,n,s,r,i,o=!0){let u=ht(t.urlParams),a=t.url+u,c=Object.assign({},t.headers);return nn(c,e),en(c,n),tn(c,i),sn(c,s),new ke(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}function on(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function an(...t){let e=on();if(e!==void 0){let n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Se())return new Blob(t);throw new _(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function un(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}function cn(t){if(typeof atob>"u")throw Xt("base-64");return atob(t)}var k={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},Z=class{constructor(e,n){this.data=e,this.contentType=n||null}};function Oe(t,e){switch(t){case k.RAW:return new Z(ft(e));case k.BASE64:case k.BASE64URL:return new Z(_t(t,e));case k.DATA_URL:return new Z(hn(e),dn(e))}throw Ie()}function ft(t){let e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{let i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function ln(t){let e;try{e=decodeURIComponent(t)}catch{throw Y(k.DATA_URL,"Malformed data URL.")}return ft(e)}function _t(t,e){switch(t){case k.BASE64:{let r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Y(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case k.BASE64URL:{let r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Y(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=cn(e)}catch(r){throw r.message.includes("polyfill")?r:Y(t,"Invalid character found")}let s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}var ne=class{constructor(e){this.base64=!1,this.contentType=null;let n=e.match(/^data:([^,]+)?,/);if(n===null)throw Y(k.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let s=n[1]||null;s!=null&&(this.base64=fn(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}};function hn(t){let e=new ne(t);return e.base64?_t(k.BASE64,e.rest):ln(e.rest)}function dn(t){return new ne(t).contentType}function fn(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}var q=class t{constructor(e,n){let s=0,r="";Ze(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ze(this.data_)){let s=this.data_,r=un(s,e,n);return r===null?null:new t(r)}else{let s=new Uint8Array(this.data_.buffer,e,n-e);return new t(s,!0)}}static getBlob(...e){if(Se()){let n=e.map(s=>s instanceof t?s.data_:s);return new t(an.apply(null,n))}else{let n=e.map(o=>se(o)?Oe(k.RAW,o).data:o.data_),s=0;n.forEach(o=>{s+=o.byteLength});let r=new Uint8Array(s),i=0;return n.forEach(o=>{for(let u=0;u<o.length;u++)r[i++]=o[u]}),new t(r,!0)}}uploadData(){return this.data_}};function xe(t){let e;try{e=JSON.parse(t)}catch{return null}return Qt(e)?e:null}function _n(t){if(t.length===0)return null;let e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pn(t,e){let n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function pt(t){let e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}function gn(t,e){return e}var b=class{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||gn}},te=null;function mn(t){return!se(t)||t.length<2?t:pt(t)}function re(){if(te)return te;let t=[];t.push(new b("bucket")),t.push(new b("generation")),t.push(new b("metageneration")),t.push(new b("name","fullPath",!0));function e(i,o){return mn(o)}let n=new b("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}let r=new b("size");return r.xform=s,t.push(r),t.push(new b("timeCreated")),t.push(new b("updated")),t.push(new b("md5Hash",null,!0)),t.push(new b("cacheControl",null,!0)),t.push(new b("contentDisposition",null,!0)),t.push(new b("contentEncoding",null,!0)),t.push(new b("contentLanguage",null,!0)),t.push(new b("contentType",null,!0)),t.push(new b("metadata","customMetadata",!0)),te=t,te}function Rn(t,e){function n(){let s=t.bucket,r=t.fullPath,i=new y(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function bn(t,e,n){let s={};s.type="file";let r=n.length;for(let i=0;i<r;i++){let o=n[i];s[o.local]=o.xform(s,e[o.server])}return Rn(s,t),s}function gt(t,e,n){let s=xe(e);return s===null?null:bn(t,s,n)}function Tn(t,e,n,s){let r=xe(e);if(r===null||!se(r.downloadTokens))return null;let i=r.downloadTokens;if(i.length===0)return null;let o=encodeURIComponent;return i.split(",").map(c=>{let l=t.bucket,p=t.fullPath,d="/b/"+o(l)+"/o/"+o(p),f=N(d,n,s),g=ht({alt:"media",token:c});return f+g})[0]}function Ne(t,e){let n={},s=e.length;for(let r=0;r<s;r++){let i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}var Je="prefixes",Qe="items";function wn(t,e,n){let s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Je])for(let r of n[Je]){let i=r.replace(/\/$/,""),o=t._makeStorageReference(new y(e,i));s.prefixes.push(o)}if(n[Qe])for(let r of n[Qe]){let i=t._makeStorageReference(new y(e,r.name));s.items.push(i)}return s}function yn(t,e,n){let s=xe(n);return s===null?null:wn(t,e,s)}var A=class{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};function P(t){if(!t)throw Ie()}function ie(t,e){function n(s,r){let i=gt(t,r,e);return P(i!==null),i}return n}function kn(t,e){function n(s,r){let i=yn(t,e,r);return P(i!==null),i}return n}function En(t,e){function n(s,r){let i=gt(t,r,e);return P(i!==null),Tn(i,r,t.host,t._protocol)}return n}function $(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=jt():r=qt():n.getStatus()===402?r=Ft(t.bucket):n.getStatus()===403?r=Ht(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function oe(t){let e=$(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Bt(t.path)),i.serverResponse=r.serverResponse,i}return n}function mt(t,e,n){let s=e.fullServerUrl(),r=N(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new A(r,i,ie(t,n),o);return u.errorHandler=oe(e),u}function Un(t,e,n,s,r){let i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n&&n.length>0&&(i.delimiter=n),s&&(i.pageToken=s),r&&(i.maxResults=r);let o=e.bucketOnlyServerUrl(),u=N(o,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,l=new A(u,a,kn(t,e.bucket),c);return l.urlParams=i,l.errorHandler=$(e),l}function An(t,e,n){let s=e.fullServerUrl(),r=N(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new A(r,i,En(t,n),o);return u.errorHandler=oe(e),u}function In(t,e,n,s){let r=e.fullServerUrl(),i=N(r,t.host,t._protocol),o="PATCH",u=Ne(n,s),a={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,l=new A(i,o,ie(t,s),c);return l.headers=a,l.body=u,l.errorHandler=oe(e),l}function Pn(t,e){let n=e.fullServerUrl(),s=N(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(a,c){}let u=new A(s,r,o,i);return u.successCodes=[200,204],u.errorHandler=oe(e),u}function Sn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Rt(t,e,n){let s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Sn(null,e)),s}function On(t,e,n,s,r){let i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function u(){let T="";for(let R=0;R<2;R++)T=T+Math.random().toString().slice(2);return T}let a=u();o["Content-Type"]="multipart/related; boundary="+a;let c=Rt(e,s,r),l=Ne(c,n),p="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+a+"--",f=q.getBlob(p,s,d);if(f===null)throw ct();let g={name:c.fullPath},E=N(i,t.host,t._protocol),m="POST",S=t.maxUploadRetryTime,O=new A(E,m,ie(t,n),S);return O.urlParams=g,O.headers=o,O.body=f.uploadData(),O.errorHandler=$(e),O}var j=class{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}};function ve(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{P(!1)}return P(!!n&&(e||["active"]).indexOf(n)!==-1),n}function xn(t,e,n,s,r){let i=e.bucketOnlyServerUrl(),o=Rt(e,s,r),u={name:o.fullPath},a=N(i,t.host,t._protocol),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=Ne(o,n),d=t.maxUploadRetryTime;function f(E){ve(E);let m;try{m=E.getResponseHeader("X-Goog-Upload-URL")}catch{P(!1)}return P(se(m)),m}let g=new A(a,c,f,d);return g.urlParams=u,g.headers=l,g.body=p,g.errorHandler=$(e),g}function Nn(t,e,n,s){let r={"X-Goog-Upload-Command":"query"};function i(c){let l=ve(c,["active","final"]),p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{P(!1)}p||P(!1);let d=Number(p);return P(!isNaN(d)),new j(d,s.size(),l==="final")}let o="POST",u=t.maxUploadRetryTime,a=new A(n,o,i,u);return a.headers=r,a.errorHandler=$(e),a}var et=256*1024;function vn(t,e,n,s,r,i,o,u){let a=new j(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw Wt();let c=a.total-a.current,l=c;r>0&&(l=Math.min(l,r));let p=a.current,d=p+l,f="";l===0?f="finalize":c===l?f="upload, finalize":f="upload";let g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${a.current}`},E=s.slice(p,d);if(E===null)throw ct();function m(R,D){let L=ve(R,["active","final"]),he=a.current+l,G=s.size(),de;return L==="final"?de=ie(e,i)(R,D):de=null,new j(he,G,L==="final",de)}let S="POST",O=e.maxUploadRetryTime,T=new A(n,S,m,O);return T.headers=g,T.body=E.uploadData(),T.progressCallback=u||null,T.errorHandler=$(t),T}var bt={STATE_CHANGED:"state_changed"},w={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Te(t){switch(t){case"running":case"pausing":case"canceling":return w.RUNNING;case"paused":return w.PAUSED;case"success":return w.SUCCESS;case"canceled":return w.CANCELED;case"error":return w.ERROR;default:return w.ERROR}}var Ee=class{constructor(e,n,s){if(Jt(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{let i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}};function M(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}var tt=null,Ue=class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=F.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=F.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=F.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw K("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(let i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw K("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw K("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw K("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw K("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}},Ae=class extends Ue{initXhr(){this.xhr_.responseType="text"}};function I(){return tt?tt():new Ae}var J=class{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=re(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(h.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let i=this.isExponentialBackoffExpired();if(dt(r.status,[]))if(i)r=at();else{this.sleepTime=Math.max(this.sleepTime*2,Mt),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(h.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{let s=xn(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,I,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((n,s)=>{let r=Nn(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,I,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=et*this._chunkMultiplier,n=new j(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=vn(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}let u=this._ref.storage._makeRequest(o,I,r,i,!1);this._request=u,u.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){et*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{let s=mt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,I,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{let s=On(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,I,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ut(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){let e=Te(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){let i=new Ee(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Te(this._state)){case w.SUCCESS:M(this._resolve.bind(null,this.snapshot))();break;case w.CANCELED:case w.ERROR:let n=this._reject;M(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Te(this._state)){case w.RUNNING:case w.PAUSED:e.next&&M(e.next.bind(e,this.snapshot))();break;case w.SUCCESS:e.complete&&M(e.complete.bind(e))();break;case w.CANCELED:case w.ERROR:e.error&&M(e.error.bind(e,this._error))();break;default:e.error&&M(e.error.bind(e,this._error))()}}resume(){let e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){let e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){let e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}};var H=class t{constructor(e,n){this._service=e,n instanceof y?this._location=n:this._location=y.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new t(e,n)}get root(){let e=new y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pt(this._location.path)}get storage(){return this._service}get parent(){let e=_n(this._location.path);if(e===null)return null;let n=new y(this._location.bucket,e);return new t(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Pe(e)}};function Cn(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new J(t,new q(e),n)}function Dn(t){let e={prefixes:[],items:[]};return Tt(t,e).then(()=>e)}function Tt(t,e,n){return W(this,null,function*(){let r=yield wt(t,{pageToken:n});e.prefixes.push(...r.prefixes),e.items.push(...r.items),r.nextPageToken!=null&&(yield Tt(t,e,r.nextPageToken))})}function wt(t,e){e!=null&&typeof e.maxResults=="number"&&ye("options.maxResults",1,1e3,e.maxResults);let n=e||{},s=Un(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,I)}function Ln(t){t._throwIfRoot("getMetadata");let e=mt(t.storage,t._location,re());return t.storage.makeRequestWithTokens(e,I)}function Mn(t,e){t._throwIfRoot("updateMetadata");let n=In(t.storage,t._location,e,re());return t.storage.makeRequestWithTokens(n,I)}function Bn(t){t._throwIfRoot("getDownloadURL");let e=An(t.storage,t._location,re());return t.storage.makeRequestWithTokens(e,I).then(n=>{if(n===null)throw Vt();return n})}function Fn(t){t._throwIfRoot("deleteObject");let e=Pn(t.storage,t._location);return t.storage.makeRequestWithTokens(e,I)}function yt(t,e){let n=pn(t._location.path,e),s=new y(t._location.bucket,n);return new H(t.storage,s)}function qn(t){return/^[A-Za-z]+:\/\//.test(t)}function jn(t,e){return new H(t,e)}function kt(t,e){if(t instanceof Q){let n=t;if(n._bucket==null)throw Gt();let s=new H(n,n._bucket);return e!=null?kt(s,e):s}else return e!==void 0?yt(t,e):t}function Hn(t,e){if(e&&qn(e)){if(t instanceof Q)return jn(t,e);throw v("To use ref(service, url), the first argument must be a Storage instance.")}else return kt(t,e)}function nt(t,e){let n=e?.[ot];return n==null?null:y.makeFromBucketSpec(n,t)}function $n(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";let{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:je(r,t.app.options.projectId))}var Q=class{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=it,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dt,this._maxUploadRetryTime=Lt,this._requests=new Set,r!=null?this._bucket=y.makeFromBucketSpec(r,this._host):this._bucket=nt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=y.makeFromBucketSpec(this._url,e):this._bucket=nt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ye("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ye("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return W(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let n=yield e.getToken();if(n!==null)return n.accessToken}return null})}_getAppCheckToken(){return W(this,null,function*(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new H(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new we(lt());{let o=rn(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}makeRequestWithTokens(e,n){return W(this,null,function*(){let[s,r]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()})}},st="@firebase/storage",rt="0.13.1";var zn="storage";function Et(t,e,n){return t=x(t),Cn(t,e,n)}function Ut(t){return t=x(t),Ln(t)}function At(t,e){return t=x(t),Mn(t,e)}function It(t,e){return t=x(t),wt(t,e)}function Pt(t){return t=x(t),Dn(t)}function St(t){return t=x(t),Bn(t)}function Ot(t){return t=x(t),Fn(t)}function Ce(t,e){return t=x(t),Hn(t,e)}function xt(t,e){return yt(t,e)}function Nt(t,e,n,s={}){$n(t,e,n,s)}function Gn(t,{instanceIdentifier:e}){let n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Q(n,s,r,e,ze)}function Wn(){$e(new ee(zn,Gn,"PUBLIC").setMultipleInstances(!0)),pe(st,rt,""),pe(st,rt,"esm2017")}Wn();var z=class{constructor(e,n,s){this._delegate=e,this.task=n,this.ref=s}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}};var ae=class{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new z(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(s=>{if(e)return e(new z(s,this,this._ref))},n)}on(e,n,s,r){let i;return n&&(typeof n=="function"?i=o=>n(new z(o,this,this._ref)):i={next:n.next?o=>n.next(new z(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,i,s||void 0,r||void 0)}},ue=class{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new C(e,this._service))}get items(){return this._delegate.items.map(e=>new C(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}};var C=class t{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){let n=xt(this._delegate,e);return new t(n,this.storage)}get root(){return new t(this._delegate.root,this.storage)}get parent(){let e=this._delegate.parent;return e==null?null:new t(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new ae(Et(this._delegate,e,n),this)}putString(e,n=k.RAW,s){this._throwIfRoot("putString");let r=Oe(n,e),i=Object.assign({},s);return i.contentType==null&&r.contentType!=null&&(i.contentType=r.contentType),new ae(new J(this._delegate,new q(r.data,!0),i),this)}listAll(){return Pt(this._delegate).then(e=>new ue(e,this.storage))}list(e){return It(this._delegate,e||void 0).then(n=>new ue(n,this.storage))}getMetadata(){return Ut(this._delegate)}updateMetadata(e){return At(this._delegate,e)}getDownloadURL(){return St(this._delegate)}delete(){return this._throwIfRoot("delete"),Ot(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw Pe(e)}};var ce=class{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(vt(e))throw v("ref() expected a child path but got a URL, use refFromURL instead.");return new C(Ce(this._delegate,e),this)}refFromURL(e){if(!vt(e))throw v("refFromURL() expected a full URL but got a child path, use ref() instead.");try{y.makeFromUrl(e,this._delegate.host)}catch{throw v("refFromUrl() expected a valid full URL but got an invalid one.")}return new C(Ce(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,s={}){Nt(this._delegate,e,n,s)}};function vt(t){return/^[A-Za-z]+:\/\//.test(t)}var Vn="@firebase/storage-compat",Xn="0.3.11";var Kn="storage-compat";function Yn(t,{instanceIdentifier:e}){let n=t.getProvider("app-compat").getImmediate(),s=t.getProvider("storage").getImmediate({identifier:e});return new ce(n,s)}function Zn(t){let e={TaskState:w,TaskEvent:bt,StringFormat:k,Storage:ce,Reference:C};t.INTERNAL.registerComponent(new ee(Kn,Yn,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Vn,Xn)}Zn(Re);function Jn(t){return new De(e=>{let n=o=>e.next(o),s=o=>e.error(o),r=()=>e.complete();n(t.snapshot);let i=t.on("state_changed",n);return t.then(o=>{n(o),r()},o=>{n(t.snapshot),s(o)}),function(){i()}}).pipe(Me(0))}function Ct(t){let e=Jn(t);return{task:t,then:t.then.bind(t),catch:t.catch.bind(t),pause:t.pause.bind(t),cancel:t.cancel.bind(t),resume:t.resume.bind(t),snapshotChanges:()=>e,percentageChanges:()=>e.pipe(Le(n=>n.bytesTransferred/n.totalBytes*100))}}function le(t){return{getDownloadURL:()=>fe(void 0).pipe(ge,_e(()=>t.getDownloadURL()),me),getMetadata:()=>fe(void 0).pipe(ge,_e(()=>t.getMetadata()),me),delete:()=>V(t.delete()),child:e=>le(t.child(e)),updateMetadata:e=>V(t.updateMetadata(e)),put:(e,n)=>{let s=t.put(e,n);return Ct(s)},putString:(e,n,s)=>{let r=t.putString(e,n,s);return Ct(r)},list:e=>V(t.list(e)),listAll:()=>V(t.listAll())}}var Qn=new X("angularfire2.storageBucket"),es=new X("angularfire2.storage.maxUploadRetryTime"),ts=new X("angularfire2.storage.maxOperationRetryTime"),ns=new X("angularfire2.storage.use-emulator"),qs=(()=>{class t{storage;constructor(n,s,r,i,o,u,a,c,l,p){let d=Ke(n,o,s);this.storage=Ye(`${d.name}.storage.${r}`,"AngularFireStorage",d.name,()=>{let f=o.runOutsideAngular(()=>d.storage(r||void 0)),g=l;return g&&f.useEmulator(...g),a&&f.setMaxUploadRetryTime(a),c&&f.setMaxOperationRetryTime(c),f},[a,c])}ref(n){return le(this.storage.ref(n))}refFromURL(n){return le(this.storage.refFromURL(n))}upload(n,s,r){let i=this.storage.ref(n);return le(i).put(s,r)}static \u0275fac=function(s){return new(s||t)(U(Ve),U(Xe,8),U(Qn,8),U(qe),U(Fe),U(We),U(es,8),U(ts,8),U(ns,8),U(Ge,8))};static \u0275prov=Be({token:t,factory:t.\u0275fac,providedIn:"any"})}return t})();export{qs as a};
