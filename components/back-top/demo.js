webpackJsonp([39,123],{341:function(n,s){"use strict";function a(){if("undefined"==typeof window)return function(){};if(window.requestAnimationFrame)return window.requestAnimationFrame;var n=["moz","ms","webkit"].filter(function(n){return n+"RequestAnimationFrame"in window})[0];return n?window[n+"RequestAnimationFrame"]:function(n){return setTimeout(n,1e3/60)}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=a,n.exports=s["default"]},492:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function o(){}function e(){return"undefined"!=typeof window?window:null}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var p=a(6),c=t(p),l=a(8),u=t(l),i=a(3),r=t(i),k=a(5),d=t(k),f=a(4),m=t(f),g=a(1),h=t(g),b=a(36),v=t(b),y=a(163),w=t(y),x=a(7),S=t(x),N=a(26),T=t(N),C=a(12),E=t(C),z=a(342),U=t(z),_=a(341),M=t(_),j=(0,M["default"])(),B=function(){return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop},D=function(n,s,a,t){var o=a-s;return n/=t/2,n<1?o/2*n*n*n+s:o/2*((n-=2)*n*n+2)+s},O=function(n){function s(a){(0,r["default"])(this,s);var t=(0,d["default"])(this,n.call(this,a));return t.scrollToTop=function(n){var s=B(),a=Date.now(),e=function p(){var n=Date.now(),o=n-a;t.setScrollTop(D(o,s,0,450)),o<450&&j(p)};j(e),(t.props.onClick||o)(n)},t.handleScroll=function(){var n=t.props,s=n.visibilityHeight,a=n.target,o=void 0===a?e:a,p=(0,U["default"])(o(),!0);t.setState({visible:p>s})},t.state={visible:!1},t}return(0,m["default"])(s,n),s.prototype.setScrollTop=function(n){var s=(this.props.target||e)();s===window?(document.body.scrollTop=n,document.documentElement.scrollTop=n):s.scrollTop=n},s.prototype.componentDidMount=function(){this.handleScroll(),this.scrollEvent=(0,w["default"])((this.props.target||e)(),"scroll",this.handleScroll)},s.prototype.componentWillUnmount=function(){this.scrollEvent&&this.scrollEvent.remove()},s.prototype.render=function(){var n,s=this.props,a=s.prefixCls,t=void 0===a?"ant-back-top":a,o=s.className,e=void 0===o?"":o,p=s.children,l=(0,S["default"])((n={},(0,u["default"])(n,t,!0),(0,u["default"])(n,e,!!e),n)),i=h["default"].createElement("div",{className:t+"-content"},h["default"].createElement(E["default"],{className:t+"-icon",type:"to-top"})),r=(0,T["default"])(this.props,["prefixCls","className","children","visibilityHeight"]);return h["default"].createElement(v["default"],{component:"",transitionName:"fade"},this.state.visible?h["default"].createElement("div",(0,c["default"])({},r,{className:l,onClick:this.scrollToTop}),p||i):null)},s}(h["default"].Component);s["default"]=O,O.defaultProps={visibilityHeight:400},n.exports=s["default"]},493:function(n,s,a){"use strict";a(11),a(1537)},726:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(a(493),a(492)),e=t(o),p=a(1),c=t(p),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/back-top/demo/basic.md",id:"components-back-top-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> BackTop <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>BackTop</span> <span class="token punctuation" >/></span></span>\n    Scroll down to see the bottom<span class="token operator" >-</span>right\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>strong</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'rgba(64, 64, 64, 0.6)\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> gray <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>strong</span><span class="token punctuation" >></span></span>\n    button<span class="token punctuation" >.</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode<span class="token punctuation" >,</span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],null),"Scroll down to see the bottom-right",c["default"].createElement("strong",{style:{color:"rgba(64, 64, 64, 0.6)"}}," gray "),"button.")}}},727:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(a(493),a(492)),e=t(o),p=a(1),c=t(p),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56de\u5230\u9876\u90e8\u6309\u94ae\u7684\u6837\u5f0f\uff0c\u9650\u5236\u5bbd\u9ad8\uff1a",["code","40px * 40px"],"\u3002"]],"en-US":[["p","You can customize the style of the button, just note the size limit: no more than ",["code","40px * 40px"],"."]]},meta:{order:1,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6837\u5f0f","en-US":"Custom style"},filename:"components/back-top/demo/custom.md",id:"components-back-top-demo-custom"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> BackTop <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>BackTop</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-back-top-inner<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>UP<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>BackTop</span><span class="token punctuation" >></span></span>\n    Scroll down to see the bottom<span class="token operator" >-</span>right\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>strong</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#57c5f7\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> blue <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>strong</span><span class="token punctuation" >></span></span>\n    button<span class="token punctuation" >.</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode<span class="token punctuation" >,</span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],null,c["default"].createElement("div",{className:"ant-back-top-inner"},"UP")),"Scroll down to see the bottom-right",c["default"].createElement("strong",{style:{color:"#57c5f7"}}," blue "),"button.")},style:"#components-back-top-demo-custom .ant-back-top {\n  bottom: 100px;\n}\n#components-back-top-demo-custom .ant-back-top-inner {\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: #57c5f7;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token id" >#components-back-top-demo-custom</span> <span class="token class" >.ant-back-top</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >bottom</span><span class="token punctuation" >:</span> <span class="token number" >100</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token id" >#components-back-top-demo-custom</span> <span class="token class" >.ant-back-top-inner</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >40</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >40</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >40</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >4</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >background-color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#57c5f7</span><span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#fff</span><span class="token punctuation" >;</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},1193:function(n,s,a){n.exports={basic:a(726),custom:a(727)}},1537:function(n,s){}});