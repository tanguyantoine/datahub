"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[45186,49804,27423,5042,82661,39328,16947,94566,72185,70756,48375,6237,28618,50999,73380,95761,18142,40523,62904,85285,7666,35238,12857,8e4,57619,45714,23333,90476,68095,56190,33809,99631,22012,54869,77250,89155,11536,44393,66774,20583,42964,90608,68227,45846,23465,1084,78703,56322,33941,89179,3417,25798,48179,70560,13893,36274,58655,81036,24369,46750,16226,93845,60988,38607,5750,83369,50512,28131,37178,14797,29035,51416,84273,6654,39511,61892,94749,17130,8083,30464,31452,9071,86690,64309,20976,98595,76214,53833,52404,30023,44261,66642,89023,11404,33785,56166,78547,928,65213,87594,22455,44836,77693,74,11979,34360,67217,89598,1503,23884,9646,87265,54408,32027,20122,97741,64884,42503,88694,66313,96837,19218,41599,63980,86361,8742,31123,53504,17789,40170,84028,61647,39266,16885],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5400:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function i({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,n),hidden:t},e)}},53720:(e,t,n)=>{n.d(t,{A:()=>E});var r=n(96540),a=n(20053),o=n(65697),i=n(56347),l=n(9226),s=n(34387),u=n(28609);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function g(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:g(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const n=(0,i.W6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,l.aZ)(a),s=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[a,n]);return[o,s]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:a}),[p,g]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,u.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),m=(()=>{const e=null!=s?s:p;return y({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=n(20162);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function N(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function w({className:e,block:t,selectedValue:n,selectValue:i,tabValues:l}){const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=s.indexOf(t),a=l[r].value;a!==n&&(u(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;var n;t=null!==(n=s[r])&&void 0!==n?n:s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;var r;t=null!==(r=s[n])&&void 0!==r?r:s[s.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>r.createElement("li",N(O({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>s.push(e),onKeyDown:p,onClick:c},o),{className:(0,a.A)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function j({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function P(e){const t=m(e);return r.createElement("div",{className:(0,a.A)("tabs-container",h.tabList)},r.createElement(w,O({},e,t)),r.createElement(j,O({},e,t)))}function E(e){const t=(0,b.A)();return r.createElement(P,O({key:String(t)},e))}},40995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>d});n(96540);var r=n(15680),a=n(53720),o=n(5400);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={sidebar_position:17,title:"Feast",slug:"/generated/ingestion/sources/feast",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/feast.md"},c="Feast",p={unversionedId:"docs/generated/ingestion/sources/feast",id:"docs/generated/ingestion/sources/feast",title:"Feast",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/feast.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/feast",permalink:"/docs/generated/ingestion/sources/feast",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/feast.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"Feast",slug:"/generated/ingestion/sources/feast",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/feast.md"},sidebar:"overviewSidebar",previous:{title:"Elasticsearch",permalink:"/docs/generated/ingestion/sources/elasticsearch"},next:{title:"File",permalink:"/docs/generated/ingestion/sources/file"}},g={},d=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],y={toc:d},f="wrapper";function m(e){var{components:t}=e,n=s(e,["components"]);return(0,r.yg)(f,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"feast"},"Feast"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.yg)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Capability"),(0,r.yg)("th",{parentName:"tr",align:null},"Status"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,r.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,r.yg)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,r.yg)("p",null,"This plugin extracts:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Entities as ",(0,r.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlprimarykey"},(0,r.yg)("inlineCode",{parentName:"a"},"MLPrimaryKey"))),(0,r.yg)("li",{parentName:"ul"},"Fields as ",(0,r.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeature"},(0,r.yg)("inlineCode",{parentName:"a"},"MLFeature"))),(0,r.yg)("li",{parentName:"ul"},"Feature views and on-demand feature views as ",(0,r.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeaturetable"},(0,r.yg)("inlineCode",{parentName:"a"},"MLFeatureTable"))),(0,r.yg)("li",{parentName:"ul"},"Batch and stream source details as ",(0,r.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataset"},(0,r.yg)("inlineCode",{parentName:"a"},"Dataset"))),(0,r.yg)("li",{parentName:"ul"},"Column types associated with each entity and feature")),(0,r.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[feast]'\n")),(0,r.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: feast\n  config:\n    # Coordinates\n    path: "/path/to/repository/"\n    # Options\n    environment: "PROD"\n\nsink:\n  # sink configs\n\n')),(0,r.yg)("h3",{id:"config-details"},"Config Details"),(0,r.yg)(a.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.yg)("p",null,"Note that a ",(0,r.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.yg)("div",{className:"config-table"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"path"),"\xa0",(0,r.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Path to Feast repository")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"environment"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Environment to use when constructing URNs ",(0,r.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.yg)("span",{className:"default-value"},"PROD")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"fs_yaml_file"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Path to the ",(0,r.yg)("inlineCode",{parentName:"td"},"feature_store.yaml")," file used to configure the feature store")))))),(0,r.yg)(o.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "FeastRepositorySourceConfig",\n  "type": "object",\n  "properties": {\n    "path": {\n      "title": "Path",\n      "description": "Path to Feast repository",\n      "type": "string"\n    },\n    "fs_yaml_file": {\n      "title": "Fs Yaml File",\n      "description": "Path to the `feature_store.yaml` file used to configure the feature store",\n      "type": "string"\n    },\n    "environment": {\n      "title": "Environment",\n      "description": "Environment to use when constructing URNs",\n      "default": "PROD",\n      "type": "string"\n    }\n  },\n  "required": [\n    "path"\n  ],\n  "additionalProperties": false\n}\n')))),(0,r.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Class Name: ",(0,r.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.feast.FeastRepositorySource")),(0,r.yg)("li",{parentName:"ul"},"Browse on ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/feast.py"},"GitHub"))),(0,r.yg)("h2",null,"Questions"),(0,r.yg)("p",null,"If you've got any questions on configuring ingestion for Feast, feel free to ping us on ",(0,r.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}m.isMDXComponent=!0}}]);