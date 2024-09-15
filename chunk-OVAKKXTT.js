import{a as $}from"./chunk-PWKRLK2E.js";import{a as z}from"./chunk-RAPWQHQA.js";import{a as j}from"./chunk-NI2JTGJR.js";import"./chunk-FLUMEVMZ.js";import"./chunk-RIBHYCL7.js";import"./chunk-TL4XESSE.js";import"./chunk-FULDPKUR.js";import"./chunk-PCPYVHWC.js";import{a as H}from"./chunk-O2URA6YY.js";import{a as T}from"./chunk-BHWXHIPA.js";import{$ as _,Ab as D,Fb as p,Pa as I,Ra as n,V as b,Wa as M,Yb as E,_ as k,ab as P,ca as m,eb as f,ib as y,lb as F,mb as O,nb as l,ob as s,pb as r,r as C,rb as W,t as x,va as w,x as v,yb as a,zb as A}from"./chunk-OH6YQK27.js";import{a as u,b as h}from"./chunk-7A67K276.js";var d=class i{softSkill=w.required();imageWidth="60";constructor(){this.setWidth(window.innerWidth)}onResize(e){let t=e.target.innerWidth;this.setWidth(t)}setWidth(e){e>580?this.imageWidth="80":this.imageWidth="60"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-soft-skill-item"]],hostBindings:function(t,o){t&1&&W("resize",function(S){return o.onResize(S)},!1,I)},inputs:{softSkill:[1,"softSkill"]},standalone:!0,features:[p],decls:8,vars:5,consts:[[1,"softskills-avatar-box"],["loaderPadding","20",3,"width","src","alt"],[1,"h4","softskills-item-title"],[1,"softskills-text"]],template:function(t,o){t&1&&(l(0,"ui-content-card")(1,"figure",0),r(2,"ui-image",1),s(),l(3,"h4",2),a(4),s(),l(5,"div",3)(6,"p"),a(7),s()()()),t&2&&(n(2),f("width",o.imageWidth)("src",o.softSkill().image)("alt",o.softSkill().image),n(2),A(o.softSkill().title),n(3),D(" ",o.softSkill().description," "))},dependencies:[H,$],styles:["[_nghost-%COMP%]{margin-bottom:25px}ui-content-card[_ngcontent-%COMP%]{padding-top:45px}.softskills-avatar-box[_ngcontent-%COMP%]{position:absolute;top:0;left:0;transform:translate(15px,-25px);background:var(--bg-gradient-onyx);border-radius:14px;box-shadow:var(--shadow-1)}.softskills-item-title[_ngcontent-%COMP%]{margin-bottom:7px}.softskills-text[_ngcontent-%COMP%]{color:var(--light-gray);font-size:var(--fs-6);font-weight:var(--fw-300);line-height:1.6;line-clamp:4;overflow:hidden}.loader[_ngcontent-%COMP%]{width:60px;height:60px}@media (min-width: 580px){.softskills-avatar-box[_ngcontent-%COMP%]{transform:translate(30px,-30px);border-radius:20px}.softskills-item-title[_ngcontent-%COMP%]{margin-bottom:10px;margin-left:95px}.softskills-text[_ngcontent-%COMP%]{line-clamp:2;-webkit-line-clamp:2}.loader[_ngcontent-%COMP%]{width:80px;height:80px}}"]})};var c=class i{constructor(e,t){this.firestore=e;this.storage=t;this.softSkillsCollection=this.firestore.collection("softSkills"),this.getSoftSkills()}softSkillsCollection;softSkills=M([]);getSoftSkills(){this.softSkillsCollection.valueChanges({idField:"id"}).pipe(x(t=>{let o=t.map(g=>this.storage.ref(g.image).getDownloadURL().pipe(C(S=>h(u({},g),{image:S}))));return v(o)})).subscribe(t=>this.softSkills.set(t))}static \u0275fac=function(t){return new(t||i)(k(j),k(z))};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})};var R=(i,e)=>e.title;function q(i,e){i&1&&r(0,"ui-loader",1)}function J(i,e){if(i&1&&(l(0,"li"),r(1,"app-soft-skill-item",3),s()),i&2){let t=e.$implicit;n(),f("softSkill",t)}}var B=class i{softSkillsService=_(c);softSkills=E(()=>this.softSkillsService.softSkills());static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-soft-skills"]],standalone:!0,features:[p],decls:6,vars:1,consts:[[1,"h3","softskills-title"],["width","100"],[1,"softskills-list"],[3,"softSkill"]],template:function(t,o){t&1&&(l(0,"h3",0),a(1,"Soft Skills"),s(),P(2,q,1,0,"ui-loader",1),l(3,"ul",2),F(4,J,2,1,"li",null,R),s()),t&2&&(n(2),y(o.softSkills().length?-1:2),n(2),O(o.softSkills()))},dependencies:[d,T],styles:[".softskills-title[_ngcontent-%COMP%]{margin-bottom:40px}.softskills-list[_ngcontent-%COMP%]{margin-bottom:35px;display:grid;grid-template-columns:1fr;gap:20px}@media (min-width: 580px){.softskills-title[_ngcontent-%COMP%]{margin-bottom:25px}.softskills-list[_ngcontent-%COMP%]{gap:30px;margin:0 -30px;padding:30px 30px 35px}}@media (min-width: 1024px){.softskills-list[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;gap:20px 25px}}"]})};export{B as SoftSkillsComponent};
