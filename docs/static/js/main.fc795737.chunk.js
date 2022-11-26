(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{43:function(n,e,t){"use strict";t.r(e);var r,a,i,o=t(24),c=t.n(o),s=t(17),l=t(4),u=t(5),d=t(7),m=t(6),p=t(1),j=t(2),b=t(8),h=t(3),g=Object(j.b)(r||(r=Object(h.a)(["\n    @media print\n    {    \n        body\n        {\n            height: calc(29.7cm * 2 - 1px);\n        }\n\n        .no-print, .no-print *\n        {\n            display: none !important;\n        }\n        \n        a\n        {\n            text-decoration: none;\n        }\n    }\n\n    @page\n    {\n        size: 21cm 29.7cm;\n        /* size: A4; */\n        background-color: ",";\n        margin: 0;\n        padding: 2mm;  \n    }\n\n    body\n    {\n        display: block;\n        margin: 0;\n        padding: 0;\n        \n        color: ",";\n        font-size: 10.5px;\n        font-family: Roboto Mono, Arial, Helvetica, sans-serif;\n        word-spacing: -1px;\n        \n        background-color: ",";\n    }\n    \n    ul\n    {\n        padding: 0 10px;\n    }\n    \n    button\n    {\n        padding: 0;\n        margin: 0;\n        \n        text-decoration: none;\n    \n        border: none;\n        outline: none;\n        \n        background-color: transparent;\n        \n        cursor: pointer;\n        user-select: none;\n    }\n\n    p\n    {\n        margin: 0 0 10px 0;\n    }\n    \n    a\n    {\n        color: ",";\n    }\n    \n    /* width */\n    ::-webkit-scrollbar\n    {\n        /* height: 7px; */\n        width: 10px;\n        /* margin: 10px; */\n    }\n    \n    /* Track */\n    ::-webkit-scrollbar-track\n    {\n        background: #161616;\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb\n    {\n        background: ",";\n        border: 1px solid #161616;\n        border-radius: 5px;\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover\n    {\n        background: ",";\n    }\n    \n    #react-logo\n    {\n        width: 15px;\n        height: 15px;\n        vertical-align: middle;\n        margin-right: 2.5px;\n    }\n\n    #footer\n    {\n        /* position: absolute; */\n        display: flex;\n        flex-direction: column;\n\n        margin: 50px 0;\n\n        text-align: center;\n        font-size: smaller;\n        font-weight: bold;\n    }\n\n    #loading-overlay\n    {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        position: fixed;\n        width: 100vw;\n        height: 100vh;\n\n        font-size: xx-large;\n        color: ",";\n        \n        background-color: ",";\n        z-index: 9999;\n    }\n"])),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.text}),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.primary.light}),(function(n){return n.theme.color.primary.normal}),(function(n){return n.theme.color.primary.dark}),(function(n){return n.theme.color.primary.light}),(function(n){return n.theme.color.background})),f={color:{primary:{light:"#2f90c9",normal:"#004872",dark:"#003756"},secondary:{light:"",normal:"",dark:""},succes:{light:"#16f25f",normal:"#13be4c",dark:"#0f943b"},warning:{light:"",normal:"#ff4141",dark:""},background:"#1a1a1a",text:"#ffffff"}},O=t(0);!function(n){n.REGULAR="material-icons",n.OUTLINED="material-icons-outlined",n.TWO_TONE="material-icons-two-tone",n.ROUND="material-icons-round",n.SHARP="material-icons-sharp"}(i||(i={}));var x,k,v,y,w,T,z,P,C,S=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var n=this.props,e=n.icon,t=n.color,r=n.size,a=n.type,o=n.className;return Object(O.jsx)(I,{color:t,size:r,className:"".concat(a||i.REGULAR," ").concat(o),children:e})}}]),t}(p.Component),I=j.c.span(a||(a=Object(h.a)(["\n    user-select: none;\n    margin: 5px;\n    \n    font-size: ",";\n    \n    color: ",";\n"])),(function(n){return void 0===n.size?"1.3em":n.size}),(function(n){switch(n.color){case"foreground":return n.theme.color.text;case"background":return n.theme.color.background;case"theme":return n.theme.color.primary.normal;default:return n.color}})),L=S,E=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r}return Object(u.a)(t,[{key:"getIconComponent",value:function(n){return Object(O.jsx)(L,{icon:n,color:"white",size:"25px",type:i.OUTLINED})}},{key:"render",value:function(){var n=this.props,e=n.className,t=n.address,r=n.phoneNumber,a=n.emailAddress,i=n.websiteUrl,o=n.birthday;return Object(O.jsxs)(A,{className:e,children:[Object(O.jsxs)(N,{children:[Object(O.jsxs)(R,{children:[this.getIconComponent("home"),t.Translate()]}),Object(O.jsxs)(R,{children:[this.getIconComponent("phone"),r]})]}),Object(O.jsxs)(N,{children:[Object(O.jsxs)(R,{children:[this.getIconComponent("alternate_email"),Object(O.jsx)(G,{href:"mailto:".concat(a),children:a})]}),Object(O.jsxs)(R,{children:[this.getIconComponent("public"),Object(O.jsx)(G,{href:i,target:"_blank",children:i})]})]}),o?Object(O.jsxs)(R,{children:[this.getIconComponent("cake"),o]}):null]})}}]),t}(p.Component),A=j.c.div(x||(x=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 15px;\n"]))),N=j.c.span(k||(k=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 15px;\n"]))),R=j.c.div(v||(v=Object(h.a)(["\n    display: flex;\n    align-items: center;\n\n    color: white;\n"]))),G=j.c.a(y||(y=Object(h.a)(["\n    color: white;\n"]))),M=E,D=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r}return Object(u.a)(t,[{key:"render",value:function(){var n=this.props.personalInformation,e=n.name,t=n.surname,r=this.props.contactInformation,a=r.address,i=r.phoneNumber,o=r.emailAddress,c=r.websiteUrl;return Object(O.jsxs)(B,{children:[Object(O.jsxs)(U,{children:[e," ",t]}),Object(O.jsx)(F,{address:a,phoneNumber:i,emailAddress:o,websiteUrl:c})]})}}]),t}(p.Component),B=j.c.header(w||(w=Object(h.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    padding: 20px 25px;\n    \n    background-color: ",";\n"])),(function(n){return n.theme.color.primary.normal})),U=j.c.h1(T||(T=Object(h.a)(['\n    flex: 6;\n    margin: 0 0 5px 0;\n    \n    color: white;\n    font-size: 50px;\n    font-family: "Bebas Neue";\n    letter-spacing: 10px;\n    word-spacing: 10px;\n']))),F=Object(j.c)(M)(z||(z=Object(h.a)(["\n    \n"]))),H=D;!function(n){n.sk="sk",n.en="en"}(P||(P={})),function(n){n.A1="A1",n.A2="A2",n.B1="B1",n.B2="B2",n.C1="C1",n.C2="C2",n.MOTHER_TONGUE="MOTHER_TONGUE"}(C||(C={}));var W=P.sk,V=function(){function n(e){Object(l.a)(this,n),this.translations=void 0,this.translations=e}return Object(u.a)(n,[{key:"Translate",value:function(){return this.translations[n.currentLanguage]}}]),n}();V.currentLanguage=W;var _,J,Q,Y,X,Z,q,K,$,nn,en,tn,rn,an,on,cn,sn,ln,un,dn,mn,pn,jn,bn,hn,gn,fn,On,xn,kn,vn,yn,wn,Tn,zn,Pn,Cn={A1:new V({sk:"za\u010diato\u010dn\xedk",en:"beginner"}),A2:new V({sk:"za\u010diato\u010dn\xedk",en:"elementary"}),B1:new V({sk:"stredne pokro\u010dil\xfd",en:"intermidiate"}),B2:new V({sk:"stredne pokro\u010dil\xfd",en:"upper intermidiate"}),C1:new V({sk:"pokro\u010dil\xfd",en:"advanced"}),C2:new V({sk:"pokro\u010dil\xfd",en:"mastery"}),MOTHER_TONGUE:new V({sk:"materinsk\xfd jazyk",en:"mother tongue"})},Sn=new V({sk:"\u017diadne relevantn\xe9",en:"None that are relevant"}),In=new V({sk:"Expert v:",en:"Expert in:"}),Ln=(new V({sk:"Zru\u010dn\xfd v:",en:"Proficient in:"}),new V({sk:"Obozn\xe1men\xfd s:",en:"Familiar with:"}),new V({sk:"Vzdelanie",en:"Education"})),En=new V({sk:"Jazykov\xe9 znalosti",en:"Language skills"}),An=new V({sk:"Pracovn\xe9 sk\xfasenosti",en:"Work experience"}),Nn=new V({sk:"Technick\xe9 znalosti",en:"Technical skills"}),Rn=new V({sk:"Projekty",en:"Projects"}),Gn=new V({sk:"Jazyk",en:"Language"}),Mn=new V({sk:"V\u0161etky moje projekty n\xe1jdete na mojom GitHub-e (odkaz v hlavi\u010dke)...",en:"All my projects can be found on my GitHub (link in the header)..."}),Dn=new V({sk:"Odkaz",en:"Link"}),Bn=new V({sk:"Pre",en:"For"}),Un=new V({sk:"Osobn\xfd projekt",en:"Personal project"}),Fn=new V({sk:"Jazyky",en:"Languages"}),Hn=new V({sk:"Technol\xf3gie",en:"Technologies"}),Wn=new V({sk:"Programy",en:"Programs"}),Vn=new V({sk:"Popis",en:"Description"}),_n=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r}return Object(u.a)(t,[{key:"render",value:function(){var n=this.props,e=n.icon,t=n.title,r=n.children;return Object(O.jsxs)(Jn,{children:[Object(O.jsxs)(Yn,{children:[Object(O.jsx)(Qn,{icon:e,size:"20px",color:"white"}),Object(O.jsx)(Xn,{children:t.Translate()})]}),Object(O.jsx)(Zn,{children:r||Sn.Translate()})]})}}]),t}(p.Component),Jn=j.c.section(_||(_=Object(h.a)(["\n    margin-bottom: 15px;\n"]))),Qn=Object(j.c)(L)(J||(J=Object(h.a)(["\n    margin: 0 10px 0 0;\n    background-color: ",";\n    border-radius: 50px;\n    padding: 7px;\n"])),(function(n){return n.theme.color.primary.normal})),Yn=j.c.h2(Q||(Q=Object(h.a)(["\n    display: flex;\n    align-items: center;\n    \n    margin: 0 0 10px 0;\n"]))),Xn=j.c.span(Y||(Y=Object(h.a)(['\n    position: relative;\n    flex: 1;\n    \n    &:after\n    {\n        content: "";\n        \n        position: absolute;\n        left: 0;\n        bottom: -10px;\n        \n        height: 2px;\n        width: 100%;\n        \n        background: ',";\n    }\n"])),(function(n){return n.theme.color.primary.normal})),Zn=j.c.div(X||(X=Object(h.a)(["\n    margin-left: 60px;\n"]))),qn=_n,Kn=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r}return Object(u.a)(t,[{key:"getEducationListItems",value:function(){return this.props.data.map((function(n){var e,t,r;return Object(O.jsx)($n,{children:Object(O.jsxs)(ne,{children:[Object(O.jsxs)(ee,{children:[n.attendanceYears.start," - ",n.attendanceYears.end]}),Object(O.jsxs)(te,{children:[Object(O.jsx)(re,{children:n.name.Translate()}),Object(O.jsx)(ae,{children:null===(e=n.faculty)||void 0===e?void 0:e.Translate()}),Object(O.jsx)(ie,{children:null===(t=n.study)||void 0===t?void 0:t.Translate()}),Object(O.jsx)(oe,{children:null===(r=n.program)||void 0===r?void 0:r.Translate()})]})]})},n.name.Translate())}))}},{key:"render",value:function(){return Object(O.jsx)(qn,{icon:"school",title:Ln,children:Object(O.jsx)("ul",{children:this.getEducationListItems()})})}}]),t}(p.Component),$n=j.c.li(Z||(Z=Object(h.a)(["\n    margin-bottom: 15px;\n"]))),ne=j.c.div(q||(q=Object(h.a)(["\n    display: flex;\n"]))),ee=j.c.span(K||(K=Object(h.a)(["\n    width: 100px;\n"]))),te=j.c.div($||($=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),re=j.c.span(nn||(nn=Object(h.a)(["\n    font-weight: 700;\n    color: ",";\n"])),(function(n){return n.theme.color.primary.light})),ae=j.c.span(en||(en=Object(h.a)(["\n    font-style: italic;\n"]))),ie=j.c.span(tn||(tn=Object(h.a)(["\n    font-style: italic;\n"]))),oe=j.c.span(rn||(rn=Object(h.a)(['\n    font: "Roboto Thin";\n']))),ce=Kn,se=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r}return Object(u.a)(t,[{key:"getLanguageListItems",value:function(){return this.props.data.map((function(n){return Object(O.jsx)(le,{children:Object(O.jsxs)(ue,{children:[Object(O.jsx)(de,{children:n.name.Translate()}),Object(O.jsxs)(me,{children:[Object(O.jsx)(pe,{children:Cn[n.proficiency].Translate()})," (",n.proficiency,")"]})]})},n.name.Translate())}))}},{key:"render",value:function(){return Object(O.jsx)(qn,{icon:"translate",title:En,children:Object(O.jsx)("ul",{children:this.getLanguageListItems()})})}}]),t}(p.Component),le=j.c.li(an||(an=Object(h.a)(["\n    margin-bottom: 10px;\n"]))),ue=j.c.div(on||(on=Object(h.a)(["\n    display: flex;\n"]))),de=j.c.span(cn||(cn=Object(h.a)(["\n    width: 125px;\n"]))),me=j.c.div(sn||(sn=Object(h.a)(["\n    \n"]))),pe=j.c.span(ln||(ln=Object(h.a)(["\n    font-style: italic;\n"]))),je=se,be=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r}return Object(u.a)(t,[{key:"render",value:function(){return Object(O.jsx)(qn,{icon:"work",title:An})}}]),t}(p.Component),he=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r}return Object(u.a)(t,[{key:"getTechnicalSkills",value:function(n){var e=this;return n.map((function(n){return Object(O.jsxs)(fe,{children:[Object(O.jsx)(Oe,{children:n.name.Translate()}),Object(O.jsxs)("ul",{children:[void 0!==n.skills.expert?Object(O.jsxs)("li",{children:[Object(O.jsx)("h4",{children:In.Translate()}),Object(O.jsx)("ul",{children:e.getTechnicalSkillsListItems(n.skills.expert)})]}):null,void 0!==n.skills.fluent?e.getTechnicalSkillsListItems(n.skills.fluent):null,void 0!==n.skills.nocategory?Object(O.jsx)(O.Fragment,{children:e.getTechnicalSkillsListItems(n.skills.nocategory)}):null]})]},n.name.Translate())}))}},{key:"getTechnicalSkillsListItems",value:function(n){return n.map((function(n){return Object(O.jsx)(xe,{children:n.name},n.name)}))}},{key:"render",value:function(){var n=this.props.data;return Object(O.jsx)(qn,{icon:"code",title:Nn,children:Object(O.jsx)(ge,{children:this.getTechnicalSkills(n)})})}}]),t}(p.Component),ge=j.c.div(un||(un=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n\n    @media only screen and (max-width: 768px)\n    {\n        flex-direction: row;\n    }\n"]))),fe=j.c.div(dn||(dn=Object(h.a)(["\n    margin: 0 20px 10px 0;\n"]))),Oe=j.c.h3(mn||(mn=Object(h.a)(["\n    color: ",";\n    margin: 0 0 10px 0;\n"])),(function(n){return n.theme.color.primary.light})),xe=j.c.li(pn||(pn=Object(h.a)(["\n    margin-bottom: 5px;\n"]))),ke=he,ve=t(14),ye=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r.print=r.print.bind(Object(ve.a)(r)),r}return Object(u.a)(t,[{key:"print",value:function(){var n=this.props.fileName,e=document.title,t=n;document.title=t,window.print(),document.title=e}},{key:"render",value:function(){return Object(O.jsx)(we,{className:"no-print",onClick:this.print,children:Object(O.jsx)(L,{icon:"download",color:"white",size:"20px"})})}}]),t}(p.Component),we=j.c.button(jn||(jn=Object(h.a)(["\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    \n    margin: 10px;\n    padding: 10px;\n    \n    border-radius: 50%;\n    \n    background-color: ",";\n    cursor: pointer;\n"])),(function(n){return n.theme.color.primary.normal})),Te=ye,ze=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r.onChange=r.onChange.bind(Object(ve.a)(r)),r}return Object(u.a)(t,[{key:"onChange",value:function(n){var e=n.target.value;this.props.history.push("/".concat(e))}},{key:"getOptions",value:function(){var n=[];for(var e in P){var t=Object(O.jsx)("option",{value:e,children:e},e);n.push(t)}return n}},{key:"render",value:function(){return Object(O.jsxs)(Pe,{className:"no-print",children:[Object(O.jsx)(L,{icon:"g_translate",color:"white"}),Object(O.jsx)(Ce,{htmlFor:"language",children:Gn.Translate()}),Object(O.jsx)("select",{name:"language",onChange:this.onChange,value:V.currentLanguage.toString(),children:this.getOptions()})]})}}]),t}(p.Component),Pe=j.c.div(bn||(bn=Object(h.a)(["\n    position: fixed;\n    left: 50%;\n    bottom: 0;\n    \n    display: flex;\n    align-items: center;\n    margin: 10px;\n    padding: 10px 25px;\n    \n    color: ",";\n    \n    border-radius: 5px;\n    background-color: ",";\n    \n    transform: translateX(-50%); \n"])),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.primary.normal})),Ce=j.c.label(hn||(hn=Object(h.a)(["\n    margin-right: 5px;\n    color: white;\n"]))),Se=Object(b.f)(ze),Ie=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"getProject",value:function(n){return Object(O.jsxs)("div",{children:[n.pagebreak?Object(O.jsx)(Ae,{}):null,Object(O.jsxs)(Ee,{children:[Object(O.jsx)(Ge,{children:n.name}),Object(O.jsxs)(Ne,{children:[Object(O.jsxs)(Re,{children:[Dn.Translate(),":"]})," ",Object(O.jsx)(Me,{href:n.link,children:n.link})]}),Object(O.jsxs)(Ne,{children:[Object(O.jsxs)(Re,{children:[Bn.Translate(),":"]}),n.for]}),Object(O.jsxs)(Ne,{children:[Object(O.jsxs)(Re,{children:[Fn.Translate(),":"]}),n.languages.join(", ")]}),Object(O.jsxs)(Ne,{children:[Object(O.jsxs)(Re,{children:[Hn.Translate(),":"]}),n.technologies.join(", ")]}),Object(O.jsxs)(Ne,{children:[Object(O.jsxs)(Re,{children:[Wn.Translate(),":"]}),n.programs.join(", ")]}),Object(O.jsxs)(Ne,{children:[Object(O.jsxs)(Re,{children:[Vn.Translate(),":"]}),n.description.Translate()]})]})]},n.name)}},{key:"getProjects",value:function(n){var e=this;return n.map((function(n){return e.getProject(n)}))}},{key:"render",value:function(){var n=this.props.data;return Object(O.jsxs)(qn,{icon:"terminal",title:Rn,children:[Object(O.jsx)(Le,{children:this.getProjects(n)}),Object(O.jsx)(De,{href:"https://github.com/Peter-Polak?tab=repositories",children:Mn.Translate()})]})}}]),t}(p.Component),Le=j.c.div(gn||(gn=Object(h.a)(["\n"]))),Ee=j.c.div(fn||(fn=Object(h.a)(["\n    padding: 15px 25px;\n    margin: 20px 0px;\n    border: 2px solid ",";\n    border-radius: 10px;\n    \n    /* page-break-inside: avoid; */\n\n    /* &:nth-of-type(2n)\n    {\n        border-style: dashed;\n    } */\n"])),(function(n){return n.theme.color.primary.normal})),Ae=j.c.div(On||(On=Object(h.a)(["\n     @media print \n     {\n        height: 40px;\n        page-break-before: always;\n     }\n"]))),Ne=j.c.p(xn||(xn=Object(h.a)(["\n    margin: 0 0 5px 0;\n"]))),Re=j.c.span(kn||(kn=Object(h.a)(["\n    font-weight: bold;\n    margin-right: 5px;\n    color: ",";\n"])),(function(n){return n.theme.color.primary.light})),Ge=j.c.p(vn||(vn=Object(h.a)(["\n    margin: 0 0 10px 0;\n    font-size: medium;\n    font-weight: bold;\n    color: ",";\n"])),(function(n){return n.theme.color.primary.light})),Me=j.c.a(yn||(yn=Object(h.a)(["\n    color: ",";\n"])),(function(n){return n.theme.color.text})),De=j.c.a(wn||(wn=Object(h.a)(["\n    display:block;\n    text-align: center;\n    font-size: smaller;\n    font-style: italic;\n    width: 100%;\n    color: ",";\n"])),(function(n){return n.theme.color.text})),Be=Ie,Ue=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r}return Object(u.a)(t,[{key:"render",value:function(){var n=this.props,e=n.person,t=n.language;return V.currentLanguage=t,Object(O.jsxs)("div",{children:[Object(O.jsx)(H,{personalInformation:e.personalInformation,contactInformation:e.contactInformation}),Object(O.jsxs)(Fe,{children:[Object(O.jsxs)(He,{children:[Object(O.jsx)(ce,{data:e.education}),Object(O.jsx)(je,{data:e.languageSkills}),Object(O.jsx)(be,{data:e.workExperience}),Object(O.jsx)(Be,{data:e.projects})]}),Object(O.jsx)(We,{children:Object(O.jsx)(ke,{data:e.technicalSkills})})]}),Object(O.jsx)(Se,{}),Object(O.jsx)(Te,{fileName:"".concat(e.personalInformation.surname,"-").concat(e.personalInformation.name,"_Resume_").concat(t)})]})}}]),t}(p.Component),Fe=j.c.div(Tn||(Tn=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    margin: 20px 20px;\n\n    @media only screen and (max-width: 768px)\n    {\n        flex-direction: column;\n    }\n"]))),He=j.c.main(zn||(zn=Object(h.a)(["\n    margin-right: 15px;\n    width: 70%;\n\n    @media only screen and (max-width: 768px)\n    {\n        width: auto;\n    }\n"]))),We=j.c.div(Pn||(Pn=Object(h.a)(["\n    width: auto;\n"]))),Ve=Ue,_e="[REDACTED]";function Je(n,e){return e}var Qe={personalInformation:{name:"Peter",surname:"Pol\xe1k",birthday:Je(0,_e),gender:new V({sk:"Mu\u017e",en:"Male"})},contactInformation:{address:new V({sk:Je(0,"".concat(_e,", Slovensko")),en:Je(0,"".concat(_e,", Slovakia"))}),phoneNumber:Je(0,_e),emailAddress:"peter.polak.mail@gmail.com",websiteUrl:"https://github.com/Peter-Polak",birthday:Je(0,_e)},education:[{name:new V({sk:Je(0,"Univerzita ".concat(_e)),en:Je(0,"University ".concat(_e))}),faculty:new V({sk:Je(0,"Fakulta informatiky"),en:Je(0,"Faculty of Informatics")}),study:new V({sk:"Bakal\xe1rske \u0161t\xfadium",en:"Bachelor Study"}),program:new V({sk:"Informatika (ukon\u010den\xe9 ne\xfaspe\u0161ne)",en:"Informatics (finished unsuccessfully)"}),attendanceYears:{start:"2017",end:"2021"}},{name:new V({sk:Je(0,"Gymn\xe1zium ".concat(_e)),en:Je(0,"High school ".concat(_e))}),program:new V({sk:"Informatika",en:"Informatics"}),attendanceYears:{start:"2013",end:"2017"}}],workExperience:[],languageSkills:[{name:new V({sk:"Anglick\xfd jazyk",en:"English"}),proficiency:C.B2},{name:new V({sk:"Nemeck\xfd jazyk",en:"German"}),proficiency:C.A2}],technicalSkills:[{name:new V({sk:"Programovacie jazyky",en:"Programming languages"}),skills:{fluent:[{name:"C#"},{name:"JavaScript/TypeScript"}],familiar:[{name:"C"},{name:"Java"},{name:"Python"},{name:"x86 Assembly"}]}},{name:new V({sk:"In\xe9 jazyky",en:"Other languages"}),skills:{nocategory:[{name:"SQL"},{name:"HTML"},{name:"CSS"},{name:"XAML"}]}},{name:new V({sk:"Technol\xf3gie",en:"Technologies"}),skills:{nocategory:[{name:".NET"},{name:"WPF"},{name:"Blazor"},{name:"Unity"},{name:"ASP.NET"},{name:"React"}]}},{name:new V({sk:"Datab\xe1zy",en:"Databasies"}),skills:{nocategory:[{name:"SQLite"}]}},{name:new V({sk:"Programy - Dev",en:"Programs - Dev"}),skills:{nocategory:[{name:"Visual Studio"},{name:"Visual Studio Code"},{name:"Git"}]}},{name:new V({sk:"Programy - Office",en:"Programs - Office"}),skills:{nocategory:[{name:"Microsoft Word"},{name:"Microsoft Excel"},{name:"Microsoft PowerPoint"}]}},{name:new V({sk:"Programy - Editory",en:"Programs - Editors"}),skills:{nocategory:[{name:"Adobe Photoshop"},{name:"Adobe Illustrator"},{name:"Vegas Pro"}]}}],projects:[{name:"Fitness center management application",link:"https://github.com/Peter-Polak/fitness-center-wpf",for:"Fitness centrum Cardio Sport",languages:["C#","XAML","SQL"],technologies:[".NET","WPF","SQLite"],programs:["Visual Studio","DB Browser for SQLite","Git"],description:new V({sk:"Aplik\xe1cia pre syst\xe9my Windows na spr\xe1vu fitness centra. Sl\xfa\u017ei na evidenciu vstupov \u010dlenov, predaja permanentiek, vstupov, tovaru, preh\u013ead tr\u017eby, pl\xe1novanie zmien zamestnancov a komunik\xe1ciu medzi pou\u017e\xedvatelmi aplik\xe1cie cez spr\xe1vy.",en:"WIP"})},{name:"LED",link:"https://github.com/Peter-Polak/led",for:Un.Translate(),languages:["C#","HTML","CSS"],technologies:[".NET","ASP.NET","Blazor","Raspberry Pi"],programs:["Visual Studio","Git"],description:new V({sk:"Web aplik\xe1cia na ovladanie ovl\xe1date\u013en\xfdch LED zariaden\xed. Za\u010dal ako projekt na zadne osvetlenie + smerovky na m\xf4j batoh po\u010das bicyklovania. Moment\xe1lne podporuje iba LED matice typu Hub75. Podporuje obr\xe1zkov, GIF-ov, textu + smerovky. Server be\u017e\xed na Raspberry Pi na ktorom be\u017e\xed Wi-Fi hotspot.",en:"WIP"})},{name:"Reservation system",link:"https://github.com/Peter-Polak/fitness-centre-cardio-sport-reservation-sysytem",for:"Fitness centrum Cardio Sport",languages:["TypeScript","HTML","CSS"],technologies:["Google Forms","Google Sheets","Google Apps Script","Surge"],programs:["VS Code","Git"],description:new V({sk:"Mal\xed online rezerva\u010dn\xfd syst\xe9m na rezervovanie vstupu do fitness centra po\u010das platenia maxim\xe1lneho po\u010dtu z\xe1kazn\xedkov po\u010das pand\xe9mie COVID-19.",en:"Small scale reservation system. WIP"}),pagebreak:!0}]},Ye=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).state={},r}return Object(u.a)(t,[{key:"componentDidMount",value:function(){document.title="Resume - ".concat(Qe.personalInformation.name," ").concat(Qe.personalInformation.surname)}},{key:"getRoutes",value:function(){var n=[],e=function(e){var t=Object(O.jsx)(b.a,{path:"/".concat(e),render:function(n){return Object(O.jsx)(Ve,{language:e,person:Qe})}},e);n.push(t)};for(var t in P)e(t);var r=Object(O.jsx)(b.a,{path:"/",render:function(n){return Object(O.jsx)(Ve,{language:W,person:Qe})}},W);return n.push(r),n}},{key:"render",value:function(){return Object(O.jsxs)(j.a,{theme:f,children:[Object(O.jsx)(b.c,{children:this.getRoutes()}),Object(O.jsx)(g,{})]})}}]),t}(p.Component);c.a.render(Object(O.jsx)(s.a,{basename:"/resume",children:Object(O.jsx)(Ye,{})}),document.getElementById("root"))}},[[43,1,2]]]);