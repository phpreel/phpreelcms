(self.webpackChunkphpreel_org=self.webpackChunkphpreel_org||[]).push([[16],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(a,".").concat(m)]||f[m]||l[m]||s;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4347:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),i=["components"],c={},a="Asset",p={unversionedId:"components/asset",id:"components/asset",isDocsHomePage:!1,title:"Asset",description:'Asset::js("script.js")',source:"@site/docs/components/asset.md",sourceDirName:"components",slug:"/components/asset",permalink:"/components/asset",editUrl:"https://github.com/phpreel/developer.phpreel.github.io/docs/components/asset.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"phpReel components",permalink:"/components/phpreel-components"},next:{title:"Utilities",permalink:"/components/utilities"}},u=[{value:"Asset::js(&quot;script.js&quot;)",id:"assetjsscriptjs",children:[]}],l={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"asset"},"Asset"),(0,s.kt)("h2",{id:"assetjsscriptjs"},'Asset::js("script.js")'),(0,s.kt)("p",null,"Returns the path to a Javascript resource stored inside the js folder of your theme. It takes only one string argument which is a path to the js file. If that file is inside a directory you can include that file too."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'//File is situated in js/script.js\nAsset::js("script.js")\n\n//File is situated in js/demo/script.js\nAsset::js("demo/script.js")\n')))}f.isMDXComponent=!0}}]);