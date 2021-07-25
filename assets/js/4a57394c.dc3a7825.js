(self.webpackChunkphpreel_org=self.webpackChunkphpreel_org||[]).push([[517],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4356:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},l="Getting started with themes",c={unversionedId:"themes/getting-started-with-themes",id:"themes/getting-started-with-themes",isDocsHomePage:!1,title:"Getting started with themes",description:"Starter layout",source:"@site/docs/themes/getting-started-with-themes.md",sourceDirName:"themes",slug:"/themes/getting-started-with-themes",permalink:"/themes/getting-started-with-themes",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Blade views",permalink:"/themes/blade-views"},next:{title:"phpReel components",permalink:"/components/phpreel-components"}},p=[{value:"Starter layout",id:"starter-layout",children:[]},{value:"Components",id:"components",children:[]},{value:"Blade directives",id:"blade-directives",children:[]}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-themes"},"Getting started with themes"),(0,o.kt)("h2",{id:"starter-layout"},"Starter layout"),(0,o.kt)("p",null,'At the core of any theme there is a layout. This file includes general information which is required on every page of the theme. You can have as many layouts as you may wish. To create a new one just create a new ".blade.php" file inside the layouts folder. Down below you are going to find a template that can be used as a starter for your next theme.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-HTML"},'<!doctype html>\n<html lang="en">\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="csrf-token" content="{{ csrf_token() }}">\n    @yield(\'meta\')\n\n    <link rel="stylesheet" href="{{ Asset::css(\'style.css\') }}">\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap">\n\n    @yield(\'style\')\n\n    <title>@yield(\'title\')</title>\n</head>\n<body>\n    @yield(\'content\')\n\n    <script src="{{ Asset::js("jquery-3.6.0.min.js") }}"><\/script>\n    <script src="{{ Asset::js("bootstrap.bundle.min.js") }}"><\/script>\n\n    @yield(\'script\')\n</body>\n</html>\n')),(0,o.kt)("p",null,'A layout is a normal ".blade.php" file, thus you have access to any Blade, Laravel or phpReel components that you would normally use. Detailed description on these components is provided later in this documentation.'),(0,o.kt)("p",null,"The first thing to note from the layout about is the @yield('') directive. This acts as a placeholder for different content. For example, if you access the home page of your application, Blade will automatically replace @yield('content') with the content of that particular page. Thus you can separate different pages of your application while at the same time keeping the same layout across the whole app."),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("p",null,"As we previously stated, components are basic functions that help you link phpReel to your HTML5 template (stuff like embedding a video, linking CSS or js files, and so on). In this section we will discuss in detail everything about these components, what is their purpose, and how you can use them to create your themes."),(0,o.kt)("p",null,"There are two types of components you can call from within your views: Blade directives and phpReel components."),(0,o.kt)("p",null,"!> ",(0,o.kt)("strong",{parentName:"p"},"Keep in mind!")," Components take arguments in order to work. These arguments are PHP variables accessible in the themes files. Every file inside the theme has access to the exact variables it needs to serve its purpose."),(0,o.kt)("h2",{id:"blade-directives"},"Blade directives"),(0,o.kt)("p",null,"This components are provided directly by the Blade template engine or they are registered directly through it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"@componentName(param1)\n")),(0,o.kt)("p",null,"The Blade directives always start with @"))}h.isMDXComponent=!0}}]);