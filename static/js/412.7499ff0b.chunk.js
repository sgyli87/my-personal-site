(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[412],{3412:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(9439),i=n(2791),s=n(1087),a=n(6842),c=n(184),o=function(e){var t=e.data;return(0,c.jsx)("article",{className:"degree-container",children:(0,c.jsxs)("header",{children:[(0,c.jsx)("h4",{className:"degree",children:t.degree}),(0,c.jsxs)("p",{className:"school",children:[(0,c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},u=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"education",children:[(0,c.jsx)("div",{className:"link-to",id:"education"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,c.jsx)(o,{data:e},e.school)}))]})};u.defaultProps={data:[]};var l=u,d=n(7892),h=n.n(d),f=n(2773),m=function(e){var t=e.data,n=t.name,r=t.position,i=t.url,s=t.startDate,a=t.endDate,o=t.summary,u=t.highlights;return(0,c.jsxs)("article",{className:"jobs-container",children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("h4",{children:[(0,c.jsx)("a",{href:i,children:n})," - ",r]}),(0,c.jsxs)("p",{className:"daterange",children:[" ",h()(s).format("MMMM YYYY")," - ",a?h()(a).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,c.jsx)(f.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,u?(0,c.jsx)("ul",{className:"points",children:u.map((function(e){return(0,c.jsx)("li",{children:e},e)}))}):null]})},p=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"experience",children:[(0,c.jsx)("div",{className:"link-to",id:"experience"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,c.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};p.defaultProps={data:[]};var y=p,g=n(9142);function v(e,t,n){return(t=(0,g.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},x=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,s=t.title,a={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},o=j(j({},a),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,c.jsxs)("div",{className:"skillbar clearfix",children:[(0,c.jsx)("div",{className:"skillbar-title",style:a,children:(0,c.jsx)("span",{children:s})}),(0,c.jsx)("div",{className:"skillbar-bar",style:o}),(0,c.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};x.defaultProps={categories:[]};var D=x,S=function(e){var t=e.skills,n=e.categories,s=Object.fromEntries([["All",!1]].concat(n.map((function(e){return[e.name,!1]})))),a=(0,i.useState)(s),o=(0,r.Z)(a,2),u=o[0],l=o[1],d=function(e){var t=Object.keys(u).reduce((function(t,n){return j(j({},t),{},v({},n,e===n&&!u[n]))}),{});t.All=!Object.keys(u).some((function(e){return t[e]})),l(t)};return(0,c.jsxs)("div",{className:"skills",children:[(0,c.jsx)("div",{className:"link-to",id:"skills"}),(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h3",{children:"Skills"}),(0,c.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,c.jsx)("div",{className:"skill-button-container",children:Object.keys(u).map((function(e){return(0,c.jsx)($,{label:e,active:u,handleClick:d},e)}))}),(0,c.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(u).reduce((function(e,t){return u[t]?t:e}),"All");return t.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,c.jsx)(D,{categories:n,data:e},e.title)}))}()})]})};S.defaultProps={skills:[],categories:[]};var M=S,k=function(e){var t=e.data,n=e.last;return(0,c.jsxs)("li",{className:"course-container",children:[(0,c.jsxs)("a",{href:t.link,children:[(0,c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,c.jsx)("div",{className:"course-dot",children:(0,c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};k.defaultProps={last:!1};var w=k,O=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,c.jsx)(w,{data:t,last:n===e.length-1},t.title)}))},N=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"courses",children:[(0,c.jsx)("div",{className:"link-to",id:"courses"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Selected Courses"})}),(0,c.jsx)("ul",{className:"course-list",children:O(t)})]})};N.defaultProps={data:[]};var C=N,L=[{title:"Computer Communication Network",number:"EE 565",link:"https://myplan.uw.edu/course/#/courses/E%20E565",university:"UW"},{title:"Comupter Vision",number:"CSE 576",link:"http://courses.cs.washington.edu/courses/cse576/",university:"UW"},{title:"Data Visualization",number:"CSE 412",link:"http://courses.cs.washington.edu/courses/cse412/",university:"UW"},{title:"Advanced Algorithms",number:"CSE 417",link:"http://courses.cs.washington.edu/courses/cse417/",university:"UW"},{title:"Programming Concepts and Tools",number:"CSE 374",link:"http://courses.cs.washington.edu/courses/cse374/",university:"UW"},{title:"Statistical Learning",number:"EE 511",link:"https://people.ece.uw.edu/bilmes/classes/ee511/ee511_spring_2020/",university:"UW"},{title:"Distributed Systems",number:"COMP 212",link:"",university:"Liverpool"},{title:"Software Engineering I",number:"COMP 201",link:"",university:"Liverpool"},{title:"Database Development",number:"COMP 207",link:"",university:"Liverpool"},{title:"Mutli-Agent Systems",number:"COMP 310",link:"",university:"Liverpool"},{title:"Signal Processing",number:"ELEC 270",link:"",university:"Liverpool"},{title:"Embedded Computer System",number:"ELEC 370",link:"",university:"Liverpool"},{title:"Computer System",number:"COMP 101",link:"",university:"Liverpool"}],E=[{school:"University of Washington",degree:"M.S. Electrical & Computer Engineering",year:2024},{school:"University of Liverpool",degree:"BEng(Hons) Computer Science & Engineering",year:2021}],P=[{name:"PACCAR",position:"Software Developer UW Engine",startDate:"2023-01-01",endDate:"2023-06-01"},{name:"HYC SiscanTech",position:"Software Engineer Intern",startDate:"2021-08-01",endDate:"2022-03-01"},{name:"University of Liverpool MIF",position:"Research Intern @ DSTA",startDate:"2020-08-01",endDate:"2021-05-01"}],T=n(3433),W=[{title:"Java",competency:5,category:["Languages"]},{title:"Node.JS",competency:4,category:["Web Development","Javascript"]},{title:"React",competency:4,category:["Web Development","Javascript","Framework"]},{title:"Bash/Linux",competency:3,category:["Tools","Languages"]},{title:"MongoDB",competency:2,category:["Web Development","Databases"]},{title:"SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"D3/Vega-Lite",competency:2,category:["Web Development","Javascript"]},{title:"Git",competency:4,category:["Tools"]},{title:"Azure",competency:3,category:["Tools","Web Development"]},{title:"Docker",competency:3,category:["Tools"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Tensorflow + Keras",competency:3,category:["ML Engineering","Python"]},{title:"PyTorch",competency:3,category:["ML Engineering","Python"]},{title:"Jupyter/Observable",competency:3,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"C++",competency:4,category:["Languages"]},{title:"MATLAB",competency:4,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"Scikit-Learn",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"gRPC",competency:4,category:["Backend Development"]},{title:".NET",competency:4,category:["Framework"]}].map((function(e){return j(j({},e),{},{category:e.category.sort()})})),Y=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=(0,T.Z)(new Set(W.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:Y[t]}})),A={Education:function(){return(0,c.jsx)(l,{data:E})},Experience:function(){return(0,c.jsx)(y,{data:P})},Skills:function(){return(0,c.jsx)(M,{skills:W,categories:_})},Courses:function(){return(0,c.jsx)(C,{data:L})}},H=function(){return(0,c.jsx)(a.Z,{title:"Resume",description:"Yang Li's Resume.",children:(0,c.jsxs)("article",{className:"post",id:"resume",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{children:(0,c.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,c.jsx)("div",{className:"link-container",children:Object.keys(A).map((function(e){return(0,c.jsx)("h4",{children:(0,c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(A).map((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,c.jsx)(i,{},n)}))]})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",c="day",o="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},g=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),s=n-i<0,a=t.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:o,d:c,D:h,h:a,m:s,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",j={};j[b]=y;var $=function(e){return e instanceof M},x=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var s=t.toLowerCase();j[s]&&(i=s),n&&(j[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var c=t.name;j[c]=t,i=c}return!r&&i&&(b=i),i||!r&&b},D=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},S=v;S.l=x,S.i=$,S.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function y(e){this.$L=x(e.locale,null,!0),this.parse(e)}var g=y.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return D(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<D(e)},g.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,r=!!S.u(t)||t,l=S.p(e),f=function(e,t){var i=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(c)},m=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,y=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case u:return r?f(1,y):f(0,y+1);case o:var b=this.$locale().weekStart||0,j=(p<b?p+7:p)-b;return f(r?g-j:g+(6-j),y);case c:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case i:return m(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,o=S.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[c]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===c?this.$D+(t-this.$W):t;if(o===u||o===d){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[S.p(e)]()},g.add=function(r,l){var h,f=this;r=Number(r);var m=S.p(l),p=function(e){var t=D(f);return S.w(t.date(t.date()+Math.round(e*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===c)return p(1);if(m===o)return p(7);var y=(h={},h[s]=t,h[a]=n,h[i]=e,h)[m]||1,g=this.$d.getTime()+r*y;return S.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,c=this.$M,o=n.weekdays,u=n.months,l=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},d=function(e){return S.s(s%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:S.s(this.$y,4,"0"),M:c+1,MM:S.s(c+1,2,"0"),MMM:l(n.monthsShort,c,u,3),MMMM:l(u,c),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(e,t){return t||m[e]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,f){var m,p=S.p(h),y=D(r),g=(y.utcOffset()-this.utcOffset())*t,v=this-y,b=S.m(this,y);return b=(m={},m[d]=b/12,m[u]=b,m[l]=b/3,m[o]=(v-g)/6048e5,m[c]=(v-g)/864e5,m[a]=v/n,m[s]=v/t,m[i]=v/e,m)[p]||v,f?b:S.a(b)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return j[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),k=M.prototype;return D.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",c],["$M",u],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,M,D),e.$i=!0),D},D.locale=x,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=j[b],D.Ls=j,D.p={},D}()}}]);
//# sourceMappingURL=412.7499ff0b.chunk.js.map