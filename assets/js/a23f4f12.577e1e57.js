(self.webpackChunkphpreel_org=self.webpackChunkphpreel_org||[]).push([[357],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5491:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Getting started with translation",u={unversionedId:"translation/getting-started-with-translation",id:"translation/getting-started-with-translation",isDocsHomePage:!1,title:"Getting started with translation",description:"phpReel integrates a translation feature that lets you translate your application to any language you might want, using a simple UI right from your dashboard. This feature is great but considering you are developing a new theme that might contain different keywords that have to be translated you have to take one extra step and that is creating your default language file.",source:"@site/docs/translation/getting-started-with-translation.md",sourceDirName:"translation",slug:"/translation/getting-started-with-translation",permalink:"/translation/getting-started-with-translation",editUrl:"https://github.com/phpreel/developer.phpreel.github.io/docs/translation/getting-started-with-translation.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Utilities",permalink:"/components/utilities"}},p=[],c={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-translation"},"Getting started with translation"),(0,o.kt)("p",null,"phpReel integrates a translation feature that lets you translate your application to any language you might want, using a simple UI right from your dashboard. This feature is great but considering you are developing a new theme that might contain different keywords that have to be translated you have to take one extra step and that is creating your default language file."),(0,o.kt)("p",null,'To do that, go to your "lang" directory situated inside your theme folder, then navigate to "default" and open "default.json". This is the JSON document that contains all the words available for translation. It is structured as a key-value pair as shown in the example below. The left side will contain the word to be translated and the right side will always be left empty. You should have a key-value pair for every word or group of words that you want to translate.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Name": "",\n    "Password": "",\n    "Confirm password": "",\n    "Already registered?": "",\n    "Remember me": "",\n    "Forgot your password?": "",\n    "Log in": ""\n}\n')),(0,o.kt)("p",null,"Remember that the last key-value pair MUST NOT have a comma."),(0,o.kt)("p",null,"When you are writing the words inside your theme you have to write them inside ",(0,o.kt)("inlineCode",{parentName:"p"},"{{__('your word or group of words go here')}}"),". The words that you write there must match the words written in the JSON file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!--This works because the words match the words from the JSON file--\x3e\n<label>{{__('Forgot your password?')}}</label>\n\n\x3c!--This will not work because the words don't match the words from the JSON file--\x3e\n<label>{{__('Login')}}</label>\n")),(0,o.kt)("p",null,"It is not mandatory to work with translations, if you don't need them then just skip updating the default.json file or writing the words inside the special tag. Your theme will continue to work just fine but will not have the translation feature."))}d.isMDXComponent=!0}}]);