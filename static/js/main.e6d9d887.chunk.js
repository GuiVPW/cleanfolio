(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var r,i,o,c,a,l,s,d,h,j,m,b,u,p,x,f,g,O,y,w,v,k,C,S,z,T,F,N,P,D=t(12),E=t(5),I=t(1),A=t(0),R=Object(I.createContext)([{themeName:"light"}]),B=function(n){var e=n.children,t=Object(I.useState)("light"),r=Object(E.a)(t,2),i=r[0],o=r[1];Object(I.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(A.jsx)(R.Provider,{value:[{themeName:i,toggleTheme:function(){var n="dark"===i?"light":"dark";localStorage.setItem("themeName",n),o(n)}}],children:e})},L=t(3),G=t(2),Q=Object(G.b)(r||(r=Object(L.a)(["\n\t* {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tborder: 0;\n\t\toutline: 0;\n\t\tbackground-color: inherit;\n\t\tcolor: inherit;\n\t\tfont-family: inherit;\n\t\tfont-size: inherit;\n\t\tbox-shadow: none;\n\t\tbox-sizing: border-box;\n\t}\n\n\thtml {\n\t\tscroll-behavior: smooth;\n\t}\n\n\th1,\n\th2,\n\th3,\n\th4 {\n\t\tline-height: 1.2;\n\t\tcolor: ",";\n\t}\n\n\th1 {\n\t\tfont-size: 4rem;\n\n\t\t@media only screen and (max-width: 900px) {\n\t\t\tfont-size: 2.6rem;\n\t\t}\n\t}\n\n\th2 {\n\t\tfont-size: 2rem;\n\t}\n\n\th3 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\th4 {\n\t\tfont-size: 1.3rem;\n\t}\n\n\tul {\n\t\tlist-style-type: none;\n\t}\n\n\ta {\n\t\ttext-decoration: none;\n\t}\n\n\tbutton {\n\t\tcursor: pointer;\n\t}\n"])),(function(n){return n.theme.foreground.alt})),W=t(16),Y={background:{main:"#FCFCFC",alt:"#FFF"},foreground:{main:"#555",alt:"#444"},primary:"#2978B5",shadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"},M=Object(W.a)(Object(W.a)({},Y),{},{background:{main:"#23283E",alt:"#2A2F4C"},foreground:{main:"#BDBDDD",alt:"#CDCDFF"},primary:"#90A0D9",shadow:"rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px"}),V=function(n){var e=n.children,t=Object(I.useContext)(R),r=Object(E.a)(t,1)[0].themeName;return Object(A.jsx)(G.a,{theme:"light"===r?Y:M,children:e})},H=G.d.div(i||(i=Object(L.a)(["\n  font-family: 'Poppins', sans-serif;\n  line-height: 1.5;\n  color: ",";\n  background-color: ",";\n\n  .center {\n    display: flex;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.foreground.main}),(function(n){return n.theme.background.main})),J=G.d.main(o||(o=Object(L.a)(["\n  max-width: 1100px;\n  width: 95%;\n  margin: 0 auto;\n"]))),U={name:"Guilherme Vieira de Paiva",role:"Full-stack Engineer",description:"I am a huge lover of physics, astronomy & astrophysics. I enjoy creating out of the box projects and huge ideas in simple codes.",social:{linkedin:"https://www.linkedin.com/in/guilhermevp",github:"https://github.com/GuiVPW"}},_="guivpw68@gmail.com",K="http://guivpw.github.io/cleanfolio",Z="TS.",q=[],X=["Node","Typescript","SQL","NoSQL","Cache","Rest APIs","GraphQL APIs","Nest","Unit, Integration and E2E tests","CQRS and parallelism","React","React hooks","Typescript","Babel","Webpack","Redux, Context, Zustand and Storeon","Styled-components","SASS","Material UI, Ant Design and Bootstrap","Caching","Testing-library","Storybook","Docker","CI/CD","AWS Cloud","AWS, Vercel and Heroku Deploy","Elastic Stack","Profiling and Monitoring with APM, Beats and Kibana","Git"],$=t(23),nn=t.n($),en=t(22),tn=t.n(en),rn=t(25),on=t.n(rn),cn=t(24),an=t.n(cn),ln=G.d.button.withConfig({shouldForwardProp:function(n){return!["buttonType"].includes(n)}})(c||(c=Object(L.a)(["\n  display: block;\n  cursor: pointer;\n  padding: 0.8em 1.4em;\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-transform: lowercase;\n  transition: transform 0.2s ease-in-out;\n\n  ","\n\n  ","\n\n\t","\n"])),(function(n){return"outline"===n.buttonType&&Object(G.c)(a||(a=Object(L.a)(["\n      color: ",";\n      border: 2px solid ",";\n      position: relative;\n      overflow: hidden;\n      z-index: 1;\n\n      &:hover,\n      &:focus {\n        color: ",";\n      }\n\n      &:before {\n        content: '';\n        position: absolute;\n        background-color: ",";\n        right: 100%;\n        bottom: 0;\n        left: 0;\n        top: 0;\n        z-index: -1;\n        transition: right 0.2s ease-in-out;\n      }\n\n      &:hover:before,\n      &:focus:before {\n        right: 0;\n      }\n    "])),n.theme.primary,n.theme.primary,n.theme.background.main,n.theme.primary)}),(function(n){return"plain"===n.buttonType&&Object(G.c)(l||(l=Object(L.a)(["\n      text-transform: initial;\n      background-color: ",";\n      box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;\n      border: 0;\n\n      &:hover {\n        transform: translateY(-4px);\n      }\n    "])),n.theme.background.alt)}),(function(n){return"icon"===n.buttonType&&Object(G.c)(s||(s=Object(L.a)(["\n      padding: 0;\n      &:hover,\n      &:focus {\n        color: ",";\n      }\n      &:active {\n        transform: translateY(-5px);\n      }\n    "])),n.theme.primary)})),sn=G.d.a.withConfig({shouldForwardProp:function(n){return!["type"].includes(n)}})(d||(d=Object(L.a)(["\n  padding: 0 0 0.3em 0;\n  position: relative;\n\n  &:hover {\n    color: ",";\n  }\n\n  &::before {\n    content: '';\n    display: inline;\n    width: 0%;\n    height: 0.2em;\n    position: absolute;\n    bottom: 0;\n    background-color: ",";\n    transition: width 0.2s ease-in;\n  }\n\n  &:hover::before,\n  &:focus::before {\n    width: 100%;\n  }\n\n  ","\n  ","\n\t","\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),(function(n){return"normal"===n.type&&{color:n.theme.foreground.main}}),(function(n){return"nav"===n.type&&Object(G.c)(h||(h=Object(L.a)(["\n      color: ",";\n      text-transform: lowercase;\n      font-weight: 500;\n    "])),n.theme.foreground.main)}),(function(n){return"icon"===n.type&&{color:n.theme.primary}})),dn=G.d.ul.withConfig({shouldForwardProp:function(n){return!["show"].includes(n)}})(j||(j=Object(L.a)(["\n  margin-right: 1.5em;\n  display: flex;\n\n  li {\n    margin-left: 1.5em;\n  }\n\n  @media only screen and (max-width: 600px) {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n\n    li {\n      margin: 0.5em 0;\n    }\n  }\n"]))),hn=Object(G.d)(ln)(m||(m=Object(L.a)(["\n  display: none;\n\n  @media only screen and (max-width: 600px) {\n    display: flex;\n    z-index: 2;\n    margin-left: 0.8em;\n  }\n"]))),jn=function(){var n=Object(I.useContext)(R),e=Object(E.a)(n,1)[0],t=e.themeName,r=e.toggleTheme,i=Object(I.useState)(!1),o=Object(E.a)(i,2),c=o[0],a=o[1];if(!_)return null;var l=function(){return a(!c)};return Object(A.jsxs)("nav",{className:"center",children:[Object(A.jsxs)(dn,{style:{display:c?"flex":void 0},children:[q.length>0&&Object(A.jsx)("li",{children:Object(A.jsx)(sn,{type:"nav",href:"#projects",onClick:l,children:"Projects"})}),X.length>0&&Object(A.jsx)("li",{children:Object(A.jsx)(sn,{type:"nav",href:"#skills",onClick:l,children:"Skills"})}),_&&Object(A.jsx)("li",{children:Object(A.jsx)(sn,{type:"nav",href:"#contact",onClick:l,children:"Contact"})})]}),Object(A.jsx)(ln,{buttonType:"icon",type:"button",onClick:r,className:"center","aria-label":"toggle theme",children:"dark"===t?Object(A.jsx)(tn.a,{}):Object(A.jsx)(nn.a,{})}),Object(A.jsx)(hn,{buttonType:"icon",type:"button",onClick:l,"aria-label":"toggle navigation",children:c?Object(A.jsx)(an.a,{}):Object(A.jsx)(on.a,{})})]})},mn=G.d.header(b||(b=Object(L.a)(["\n  height: 8em;\n  max-width: 1100px;\n  width: 95%;\n  margin: 0 auto;\n  justify-content: space-between;\n\n  @media only screen and (max-width: 600px) {\n    height: 6em;\n  }\n"]))),bn=function(){var n=K,e=Z;return Object(A.jsxs)(mn,{className:"center",children:[Object(A.jsx)("h3",{children:n?Object(A.jsx)(sn,{href:n,type:"normal",children:e}):e}),Object(A.jsx)(jn,{})]})},un=t(14),pn=t.n(un),xn=t(26),fn=t.n(xn),gn=G.d.div(u||(u=Object(L.a)(["\n  flex-direction: column;\n  margin-top: 3em;\n\n  @media only screen and (max-width: 600px) {\n    align-items: flex-start;\n    margin-top: 2em;\n  }\n"]))),On=G.d.span(p||(p=Object(L.a)(["\n  color: ",";\n"])),(function(n){return n.theme.primary})),yn=G.d.h2(x||(x=Object(L.a)(["\n  margin-top: 1.2em;\n"]))),wn=G.d.p(f||(f=Object(L.a)(["\n  font-size: 1rem;\n  max-width: 600px;\n  margin-top: 2.4em;\n"]))),vn=G.d.div(g||(g=Object(L.a)(["\n  margin-top: 2.4em;\n"]))),kn=Object(G.d)(sn)(O||(O=Object(L.a)(["\n  ","\n"])),(function(n){return"icon"===n.type&&{marginRight:"0.8em"}})),Cn=Object(G.d)(ln)(y||(y=Object(L.a)(["\n  ","\n"])),(function(n){return"outline"===n.buttonType&&{marginRight:"1em"}})),Sn=function(){var n=U.name,e=U.role,t=U.description,r=U.resume,i=U.social;return Object(A.jsxs)(gn,{className:"center",children:[n&&Object(A.jsxs)("h1",{children:["Hi, I am ",Object(A.jsxs)(On,{children:[n,"."]})]}),e&&Object(A.jsxs)(yn,{children:["A ",e,"."]}),Object(A.jsx)(wn,{children:t&&t}),Object(A.jsxs)(vn,{className:"center",children:[r&&Object(A.jsx)("a",{href:r,children:Object(A.jsx)(Cn,{buttonType:"outline",children:"Resume"})}),i&&Object(A.jsxs)(A.Fragment,{children:[i.github&&Object(A.jsx)(kn,{type:"icon",href:i.github,"aria-label":"github",children:Object(A.jsx)(pn.a,{})}),i.linkedin&&Object(A.jsx)(kn,{type:"icon",href:i.linkedin,"aria-label":"linkedin",children:Object(A.jsx)(fn.a,{})})]})]})]})},zn=t(9),Tn=t.n(zn),Fn=t(27),Nn=t.n(Fn),Pn=G.d.div(w||(w=Object(L.a)(["\n  padding: 2em;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: ",";\n  transition: transform 0.2s linear;\n\n  &:hover {\n    transform: translateY(-7px);\n  }\n\n  a {\n    margin-left: 0.5em;\n  }\n"])),(function(n){return n.theme.shadow})),Dn=G.d.p(v||(v=Object(L.a)(["\n  margin-top: 1em;\n"]))),En=G.d.ul(k||(k=Object(L.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1.2em 0;\n\n  li {\n    margin: 0.5em;\n    font-weight: 500;\n    font-size: 0.8rem;\n    color: ",";\n  }\n"])),(function(n){return n.theme.foreground.alt})),In=function(n){var e=n.project;return Object(A.jsxs)(Pn,{children:[Object(A.jsx)("h3",{children:e.name}),Object(A.jsx)(Dn,{children:e.description}),e.stack&&Object(A.jsx)(En,{children:e.stack.map((function(n){return Object(A.jsx)("li",{children:n},Tn()())}))}),e.sourceCode&&Object(A.jsx)(sn,{type:"icon",target:"_blank",rel:"noreferrer noopener",href:e.sourceCode,"aria-label":"source code",children:Object(A.jsx)(pn.a,{})}),e.livePreview&&Object(A.jsx)(sn,{type:"icon",target:"_blank",rel:"noreferrer noopener",href:e.livePreview,"aria-label":"live preview",children:Object(A.jsx)(Nn.a,{})})]})},An=G.d.section(C||(C=Object(L.a)(["\n  margin-top: 5em;\n\n  @media only screen and (max-width: 600px) {\n    margin-top: 4em;\n  }\n"]))),Rn=G.d.h2(S||(S=Object(L.a)(["\n  text-align: center;\n  margin-bottom: 1em;\n  text-transform: uppercase;\n"]))),Bn=G.d.div(z||(z=Object(L.a)(["\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));\n  grid-gap: 2em;\n"]))),Ln=function(){return q.length?Object(A.jsxs)(An,{id:"projects",children:[Object(A.jsx)(Rn,{children:"Projects"}),Object(A.jsx)(Bn,{children:q.map((function(n){return Object(A.jsx)(In,{project:n},Tn()())}))})]}):null},Gn=G.d.ul(T||(T=Object(L.a)(["\n  max-width: 450px;\n  width: 95%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  li {\n    margin: 0.5em;\n  }\n"]))),Qn=function(){return X.length?Object(A.jsxs)(An,{id:"skills",children:[Object(A.jsx)(Rn,{children:"Skills"}),Object(A.jsx)(Gn,{children:X.map((function(n){return Object(A.jsx)("li",{children:Object(A.jsx)(ln,{buttonType:"plain",children:n})},Tn()())}))})]}):null},Wn=t(28),Yn=t.n(Wn),Mn=G.d.div(F||(F=Object(L.a)(["\n  position: fixed;\n  bottom: 2em;\n  right: 4em;\n  background-color: transparent;\n\n  @media only screen and (max-width: 900px) {\n    display: none;\n  }\n"]))),Vn=function(){var n=Object(I.useState)(!1),e=Object(E.a)(n,2),t=e[0],r=e[1];return Object(I.useEffect)((function(){var n=function(){return window.pageYOffset>500?r(!0):r(!1)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),t?Object(A.jsx)(Mn,{children:Object(A.jsx)("a",{href:"#top",children:Object(A.jsx)(Yn.a,{fontSize:"large"})})}):Object(A.jsx)(A.Fragment,{})},Hn=function(){return _?Object(A.jsxs)(An,{className:"center",id:"contact",style:{flexDirection:"column"},children:[Object(A.jsx)(Rn,{children:"Contact"}),Object(A.jsx)("a",{href:"mailto:".concat(_),children:Object(A.jsx)(ln,{buttonType:"outline",type:"button",children:"Email me"})})]}):null},Jn=G.d.footer(N||(N=Object(L.a)(["\n  padding: 3em 0;\n  margin-top: 4em;\n  text-align: center;\n\n  @media only screen and (max-width: 600px) {\n    padding: 2em;\n    margin-top: 3em;\n  }\n"]))),Un=Object(G.d)(sn)(P||(P=Object(L.a)(["\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.foreground.main})),_n=function(){return Object(A.jsx)(Jn,{children:Object(A.jsx)(Un,{href:"https://github.com/rajshekhar26/cleanfolio",children:"Created By Raj Shekhar"})})},Kn=function(){return Object(A.jsxs)(H,{id:"top",children:[Object(A.jsx)(bn,{}),Object(A.jsxs)(J,{children:[Object(A.jsx)(Sn,{}),Object(A.jsx)(Ln,{}),Object(A.jsx)(Qn,{}),Object(A.jsx)(Hn,{})]}),Object(A.jsx)(Vn,{}),Object(A.jsx)(_n,{})]})};Object(D.render)(Object(A.jsx)(B,{children:Object(A.jsxs)(V,{children:[Object(A.jsx)(Q,{}),Object(A.jsx)(Kn,{})]})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e6d9d887.chunk.js.map