(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[167],{2942:function(t,e,n){"use strict";n(2791);var i=n(7892),r=n.n(i),s=n(184);e.Z=function(t){var e=t.data;return(0,s.jsx)("div",{className:"cell-container",children:(0,s.jsxs)("article",{className:"mini-post",children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("h3",{children:(0,s.jsx)("a",{href:e.link,children:e.title})}),(0,s.jsx)("time",{className:"published",children:r()(e.date).format("MMMM, YYYY")})]}),(0,s.jsx)("a",{href:e.link,className:"image",children:(0,s.jsx)("img",{src:"".concat("/my-personal-site").concat(e.image),alt:e.title})}),(0,s.jsx)("div",{className:"description",children:(0,s.jsx)("p",{children:e.desc})})]})})}},167:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});n(2791);var i=n(1087),r=n(6842),s=n(2942),a=[{title:"UW Engine Showcase Day",subtitle:"",link:"",image:"/images/gallery/showcase.jpg",date:"2023-06-15",desc:"UW Engine poster showcase day with Prof David B Laning and my teammate Lu"},{title:"HYC SiscanTech Team",subtitle:"",link:"",image:"/images/gallery/colleague.jpg",date:"2021-12-15",desc:"My awesome team and colleagues back to when I was an intern at HYC SiscanTech, I was the youngest among these wonderful engineers."}],u=n(184),o=function(){return(0,u.jsx)(r.Z,{title:"gallery",description:"Take a look at my casual gallery.",children:(0,u.jsxs)("article",{className:"post",id:"gallery",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(i.rU,{to:"/gallery",children:"Gallery"})}),(0,u.jsx)("p",{children:"Random photos"})]})}),a.map((function(t){return(0,u.jsx)(s.Z,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",u="day",o="week",c="month",h="quarter",l="year",d="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},M={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+y(i,2,"0")+":"+y(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:o,d:u,D:d,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",v={};v[p]=g;var D=function(t){return t instanceof j},w=function t(e,n,i){var r;if(!e)return p;if("string"==typeof e){var s=e.toLowerCase();v[s]&&(r=s),n&&(v[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var u=e.name;v[u]=e,r=u}return!i&&r&&(p=r),r||!i&&p},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new j(n)},x=M;x.l=w,x.i=D,x.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function g(t){this.$L=w(t.locale,null,!0),this.parse(t)}var y=g.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match($);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,i=!!x.u(e)||e,h=x.p(t),f=function(t,e){var r=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(u)},$=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,g=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case l:return i?f(1,0):f(31,11);case c:return i?f(1,g):f(0,g+1);case o:var p=this.$locale().weekStart||0,v=(m<p?m+7:m)-p;return f(i?y-v:y+(6-v),g);case u:case d:return $(M+"Hours",0);case a:return $(M+"Minutes",1);case s:return $(M+"Seconds",2);case r:return $(M+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,o=x.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[u]=h+"Date",n[d]=h+"Date",n[c]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===l){var m=this.clone().set(d,1);m.$d[f]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[x.p(t)]()},y.add=function(i,h){var d,f=this;i=Number(i);var $=x.p(h),m=function(t){var e=S(f);return x.w(e.date(e.date()+Math.round(t*i)),f)};if($===c)return this.set(c,this.$M+i);if($===l)return this.set(l,this.$y+i);if($===u)return m(1);if($===o)return m(7);var g=(d={},d[s]=e,d[a]=n,d[r]=t,d)[$]||1,y=this.$d.getTime()+i*g;return x.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=x.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},l=function(t){return x.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:x.s(this.$y,4,"0"),M:u+1,MM:x.s(u+1,2,"0"),MMM:h(n.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:x.s(s,2,"0"),h:l(1),hh:l(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:r};return i.replace(m,(function(t,e){return e||$[t]||r.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(i,d,f){var $,m=x.p(d),g=S(i),y=(g.utcOffset()-this.utcOffset())*e,M=this-g,p=x.m(this,g);return p=($={},$[l]=p/12,$[c]=p,$[h]=p/3,$[o]=(M-y)/6048e5,$[u]=(M-y)/864e5,$[a]=M/n,$[s]=M/e,$[r]=M/t,$)[m]||M,f?p:x.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return v[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),O=j.prototype;return S.prototype=O,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",u],["$M",c],["$y",l],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,j,S),t.$i=!0),S},S.locale=w,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=v[p],S.Ls=v,S.p={},S}()}}]);
//# sourceMappingURL=167.6544837d.chunk.js.map