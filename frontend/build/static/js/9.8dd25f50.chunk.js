(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{133:function(e,t,r){"use strict";var a=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=a(r(5997))},134:function(e,t,r){"use strict";var a=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=a(r(5998))},135:function(e,t,r){"use strict";var a=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=a(r(5999))},21:function(e,t,r){"use strict";var a=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createGenerateClassName",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"createMuiTheme",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"jssPreset",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"MuiThemeProvider",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"createStyles",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"withStyles",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"withTheme",{enumerable:!0,get:function(){return l.default}});var n=a(r(129)),o=a(r(77)),i=a(r(128)),u=a(r(446)),c=a(r(449)),s=a(r(8)),l=a(r(79))},446:function(e,t,r){"use strict";var a=r(447),n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MuiThemeProviderOld=void 0;var o=n(r(3)),i=n(r(6)),u=n(r(10)),c=n(r(11)),s=n(r(12)),l=n(r(13)),f=n(r(14)),d=n(r(1)),m=n(r(2)),p=(n(r(7)),n(r(448))),h=r(9),b=a(r(78)),v=function(e){function t(e,r){var a;return(0,u.default)(this,t),(a=(0,s.default)(this,(0,l.default)(t).call(this))).broadcast=(0,p.default)(),a.outerTheme=b.default.initial(r),a.broadcast.setState(a.mergeOuterLocalTheme(e.theme)),a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){var e,t=this.props,r=t.disableStylesGeneration,a=t.sheetsCache,n=t.sheetsManager,o=this.context.muiThemeProviderOptions||{};return void 0!==r&&(o.disableStylesGeneration=r),void 0!==a&&(o.sheetsCache=a),void 0!==n&&(o.sheetsManager=n),e={},(0,i.default)(e,b.CHANNEL,this.broadcast),(0,i.default)(e,"muiThemeProviderOptions",o),e}},{key:"componentDidMount",value:function(){var e=this;this.unsubscribeId=b.default.subscribe(this.context,function(t){e.outerTheme=t,e.broadcast.setState(e.mergeOuterLocalTheme(e.props.theme))})}},{key:"componentDidUpdate",value:function(e){this.props.theme!==e.theme&&this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme))}},{key:"componentWillUnmount",value:function(){null!==this.unsubscribeId&&b.default.unsubscribe(this.context,this.unsubscribeId)}},{key:"mergeOuterLocalTheme",value:function(e){return"function"===typeof e?e(this.outerTheme):this.outerTheme?(0,o.default)({},this.outerTheme,e):e}},{key:"render",value:function(){return this.props.children}}]),t}(d.default.Component);t.MuiThemeProviderOld=v,v.childContextTypes=(0,o.default)({},b.default.contextTypes,{muiThemeProviderOptions:m.default.object}),v.contextTypes=(0,o.default)({},b.default.contextTypes,{muiThemeProviderOptions:m.default.object}),h.ponyfillGlobal.__MUI_STYLES__||(h.ponyfillGlobal.__MUI_STYLES__={}),h.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider||(h.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider=v);var y=h.ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider;t.default=y},447:function(e,t,r){var a=r(29);function n(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}},448:function(e,t,r){"use strict";r.r(t),t.default=function(e){var t={},r=1,a=e;return{getState:function(){return a},setState:function(e){a=e;for(var r=Object.keys(t),n=0,o=r.length;n<o;n++)t[r[n]]&&t[r[n]](e)},subscribe:function(e){if("function"!==typeof e)throw new Error("listener must be a function.");var a=r;return t[a]=e,r+=1,a},unsubscribe:function(e){t[e]=void 0}}}},449:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e}},5952:function(e,t,r){"use strict";var a=r(1),n=r.n(a),o=r(2),i=r.n(o),u=r(17),c=r.n(u),s=r(87),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=a=f(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!d(e)){e.preventDefault();var t=a.context.router.history,r=a.props,n=r.replace,o=r.to;n?t.replace(o):t.push(o)}},f(a,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,a=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(s.b)(t,null,null,o.location):t,u=o.createHref(i);return n.a.createElement("a",l({},a,{onClick:this.handleClick,href:u,ref:r}))},t}(n.a.Component);m.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=m},5994:function(e,t,r){e.exports=r.p+"static/media/bookmark.b4affb78.gif"},5995:function(e,t,r){e.exports=r.p+"static/media/embed.481b2e90.gif"},5996:function(e,t,r){e.exports=r.p+"static/media/save.77881588.gif"},5997:function(e,t,r){"use strict";var a=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(r(3)),o=a(r(4)),i=a(r(1)),u=(a(r(2)),a(r(5))),c=a(r(55)),s=a(r(8)),l={root:{overflow:"hidden"}};function f(e){var t=e.classes,r=e.className,a=e.raised,s=(0,o.default)(e,["classes","className","raised"]);return i.default.createElement(c.default,(0,n.default)({className:(0,u.default)(t.root,r),elevation:a?8:1},s))}t.styles=l,f.defaultProps={raised:!1};var d=(0,s.default)(l,{name:"MuiCard"})(f);t.default=d},5998:function(e,t,r){"use strict";var a=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(r(6)),o=a(r(3)),i=a(r(4)),u=a(r(1)),c=(a(r(2)),a(r(5))),s=(a(r(7)),r(9),a(r(8))),l={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};t.styles=l;var f=["video","audio","picture","iframe","img"];function d(e){var t=e.classes,r=e.className,a=e.component,s=e.image,l=e.src,d=e.style,m=(0,i.default)(e,["classes","className","component","image","src","style"]),p=-1!==f.indexOf(a),h=!p&&s?(0,o.default)({backgroundImage:'url("'.concat(s,'")')},d):d;return u.default.createElement(a,(0,o.default)({className:(0,c.default)(t.root,(0,n.default)({},t.media,p),r),style:h,src:p?s||l:void 0},m))}d.defaultProps={component:"div"};var m=(0,s.default)(l,{name:"MuiCardMedia"})(d);t.default=m},5999:function(e,t,r){"use strict";var a=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(r(3)),o=a(r(4)),i=a(r(1)),u=(a(r(2)),a(r(5))),c=(r(9),a(r(8))),s={root:{padding:16,"&:last-child":{paddingBottom:24}}};function l(e){var t=e.classes,r=e.className,a=e.component,c=(0,o.default)(e,["classes","className","component"]);return i.default.createElement(a,(0,n.default)({className:(0,u.default)(t.root,r)},c))}t.styles=s,l.defaultProps={component:"div"};var f=(0,c.default)(s,{name:"MuiCardContent"})(l);t.default=f},6314:function(e,t,r){"use strict";r.r(t);var a=r(35),n=r(36),o=r(38),i=r(37),u=r(39),c=r(76),s=r.n(c),l=r(133),f=r.n(l),d=r(135),m=r.n(d),p=r(134),h=r.n(p),b=r(41),v=r.n(b),y=r(21),g=r(42),O=r.n(g),_=r(1),j=r(5952),P=r(5994),E=r.n(P),T=r(5995),M=r.n(T),k=r(5996),w=r.n(k),S=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.classes;return _.createElement(v.a,{container:!0,justify:"center"},_.createElement(v.a,{className:e.item,xs:12,sm:12,md:10,lg:8,item:!0},_.createElement(f.a,{className:e.card},_.createElement(h.a,{className:e.media,image:w.a}),_.createElement(m.a,null,_.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Easily Save Articles")))),_.createElement(v.a,{className:e.item,xs:12,sm:12,md:10,lg:8,item:!0},_.createElement(f.a,{className:e.card},_.createElement(h.a,{className:e.media,image:E.a}),_.createElement(m.a,null,_.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Automatic bookmarks for synced reading between devices")))),_.createElement(v.a,{className:e.item,xs:12,sm:12,md:10,lg:8,item:!0},_.createElement(f.a,{className:e.card},_.createElement(h.a,{className:e.media,image:M.a}),_.createElement(m.a,null,_.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Embedded reader for skimming linked articles")))),_.createElement(v.a,{item:!0,container:!0,xs:12,sm:12,md:12,lg:12,justify:"center"},_.createElement(v.a,{item:!0},_.createElement(j.a,{to:"/list"},_.createElement(s.a,{variant:"fab",color:"primary"},"Try Anonymously"))),_.createElement(v.a,{item:!0},_.createElement(j.a,{to:"/list"},_.createElement(s.a,{variant:"fab",color:"primary"},"Create account")))))}}]),t}(_.Component);t.default=Object(y.withStyles)({card:{minWidth:275},item:{padding:"2em"},media:{minHeight:600},title:{fontSize:14}})(S)}}]);
//# sourceMappingURL=9.8dd25f50.chunk.js.map