"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[90562,49804,27423,5042,82661,39328,16947,94566,72185,70756,48375,6237,28618,50999,73380,95761,18142,40523,62904,85285,7666,35238,12857,8e4,57619,45714,23333,90476,68095,56190,33809,99631,22012,54869,77250,89155,11536,44393,66774,20583,42964,90608,68227,45846,23465,1084,78703,56322,33941,89179,3417,25798,48179,70560,13893,36274,58655,81036,24369,46750,16226,93845,60988,38607,5750,83369,50512,28131,37178,14797,29035,51416,84273,6654,39511,61892,94749,17130,8083,30464,31452,9071,86690,64309,20976,98595,76214,53833,52404,30023,44261,66642,89023,11404,33785,56166,78547,928,65213,87594,22455,44836,77693,74,11979,34360,67217,89598,1503,23884,9646,87265,54408,32027,20122,97741,64884,42503,88694,66313,96837,19218,41599,63980,86361,8742,31123,53504,17789,40170,84028,61647,39266,16885],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5400:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(96540),o=r(20053);const a={tabItem:"tabItem_Ymn6"};function i({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:t},e)}},53720:(e,t,r)=>{r.d(t,{A:()=>D});var n=r(96540),o=r(20053),a=r(65697),i=r(56347),u=r(9226),l=r(34387),s=r(28609);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function m(e){return function(e){var t,r;return null!==(r=null===(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:m(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const r=(0,i.W6)(),o=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),a=(0,u.aZ)(o),l=(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[o,r]);return[a,l]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=d(e),[i,u]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,c]=y({queryString:r,groupId:o}),[p,m]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,o]=(0,s.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:o}),b=(()=>{const e=null!=l?l:p;return f({value:e,tabValues:a})?e:null})();(0,n.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),m(e)}),[c,m,a]),tabValues:a}}var g=r(20162);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function j({className:e,block:t,selectedValue:r,selectValue:i,tabValues:u}){const l=[],{blockElementScrollPositionUntilNextRender:s}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),o=u[n].value;o!==r&&(s(t),i(o))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;var r;t=null!==(r=l[n])&&void 0!==r?r:l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;var n;t=null!==(n=l[r])&&void 0!==n?n:l[l.length-1];break}}null==t||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},e)},u.map((({value:e,label:t,attributes:a})=>n.createElement("li",w(O({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>l.push(e),onKeyDown:p,onClick:c},a),{className:(0,o.A)("tabs__item",h.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function P({lazy:e,children:t,selectedValue:r}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=b(e);return n.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},n.createElement(j,O({},e,t)),n.createElement(P,O({},e,t)))}function D(e){const t=(0,g.A)();return n.createElement(T,O({key:String(t)},e))}},73514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>d});r(96540);var n=r(15680),o=r(53720),a=r(5400);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Documentation Forms",slug:"/api/tutorials/forms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/forms.md"},c="Documentation Forms",p={unversionedId:"docs/api/tutorials/forms",id:"docs/api/tutorials/forms",title:"Documentation Forms",description:"Why Would You Use Documentation Forms?",source:"@site/genDocs/docs/api/tutorials/forms.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/forms",permalink:"/docs/api/tutorials/forms",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/forms.md",tags:[],version:"current",frontMatter:{title:"Documentation Forms",slug:"/api/tutorials/forms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/forms.md"},sidebar:"overviewSidebar",previous:{title:"Domains",permalink:"/docs/api/tutorials/domains"},next:{title:"Data Lineage",permalink:"/docs/api/tutorials/lineage"}},m={},d=[{value:"Why Would You Use Documentation Forms?",id:"why-would-you-use-documentation-forms",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Form",id:"create-a-form",level:2},{value:"Read Property Definition",id:"read-property-definition",level:2}],f={toc:d},y="wrapper";function b(e){var{components:t}=e,r=l(e,["components"]);return(0,n.yg)(y,u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"documentation-forms"},"Documentation Forms"),(0,n.yg)("h2",{id:"why-would-you-use-documentation-forms"},"Why Would You Use Documentation Forms?"),(0,n.yg)("p",null,"Documentation Forms are a way for end-users to fill out all mandatory attributes associated with a data asset. The form will be dynamically generated based on the definitions provided by administrators and stewards and matching rules."),(0,n.yg)("p",null,"Learn more about forms in the ",(0,n.yg)("a",{parentName:"p",href:"/docs/features/feature-guides/documentation-forms"},"Documentation Forms Feature Guide"),"."),(0,n.yg)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,n.yg)("p",null,"This guide will show you how to create and read forms."),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed information, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,n.yg)(o.A,{mdxType:"Tabs"},(0,n.yg)(a.A,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,n.yg)("p",null,"Install the relevant CLI version. Forms are available as of CLI version ",(0,n.yg)("inlineCode",{parentName:"p"},"0.13.1"),". The corresponding SaaS release version is ",(0,n.yg)("inlineCode",{parentName:"p"},"v0.2.16.5"),"\nConnect to your instance via ",(0,n.yg)("a",{parentName:"p",href:"/docs/cli/#init"},"init"),":"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Run ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub init")," to update the instance you want to load into"),(0,n.yg)("li",{parentName:"ol"},"Set the server to your sandbox instance, ",(0,n.yg)("inlineCode",{parentName:"li"},"https://{your-instance-address}/gms")),(0,n.yg)("li",{parentName:"ol"},"Set the token to your access token")))),(0,n.yg)("h2",{id:"create-a-form"},"Create a Form"),(0,n.yg)(o.A,{mdxType:"Tabs"},(0,n.yg)(a.A,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,n.yg)("p",null,"Create a yaml file representing the forms you\u2019d like to load.\nFor example, below file represents a form ",(0,n.yg)("inlineCode",{parentName:"p"},"123456")," You can see the full example ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/example-yaml-sp/metadata-ingestion/examples/forms/forms.yaml"},"here"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'- id: 123456\n  # urn: "urn:li:form:123456"  # optional if id is provided\n  type: VERIFICATION # Supported Types: DOCUMENTATION, VERIFICATION\n  name: "Metadata Initiative 2023"\n  description: "How we want to ensure the most important data assets in our organization have all of the most important and expected pieces of metadata filled out"\n  prompts:\n    - id: "123"\n      title: "Retention Time"\n      description: "Apply Retention Time structured property to form"\n      type: STRUCTURED_PROPERTY\n      structured_property_id: io.acryl.privacy.retentionTime\n      required: True # optional, will default to True\n  entities: # Either pass a list of urns or a group of filters. This example shows a list of urns\n    urns:\n      - urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)\n  # optionally assign the form to a specific set of users and/or groups\n  # when omitted, form will be assigned to Asset owners\n  actors: \n    users:\n      - urn:li:corpuser:jane@email.com  # note: these should be urns\n      - urn:li:corpuser:john@email.com\n    groups:\n      - urn:li:corpGroup:team@email.com  # note: these should be urns\n')),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Note that the structured properties and related entities should be created before you create the form.\nPlease refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/api/tutorials/structured-properties"},"Structured Properties Tutorial")," for more information.")),(0,n.yg)("p",null,"You can apply forms to either a list of entity urns, or a list of filters. For a list of entity urns, use this structure:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"entities:\nurns:\n  - urn:li:dataset:...\n")),(0,n.yg)("p",null,"For a list of filters, use this structure:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"entities:\nfilters:\n  types:\n    - dataset  # you can use entity type name or urn\n  platforms:\n    - snowflake  # you can use platform name or urn\n  domains:\n    - urn:li:domain:finance  # you must use domain urn\n  containers:\n    - urn:li:container:my_container  # you must use container urn\n")),(0,n.yg)("p",null,"Note that you can filter to entity types, platforms, domains, and/or containers."),(0,n.yg)("p",null,"Use the CLI to create your properties:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-commandline"},"datahub forms upsert -f {forms_yaml}\n")),(0,n.yg)("p",null,"If successful, you should see ",(0,n.yg)("inlineCode",{parentName:"p"},"Created form urn:li:form:...")))),(0,n.yg)("h2",{id:"read-property-definition"},"Read Property Definition"),(0,n.yg)(o.A,{mdxType:"Tabs"},(0,n.yg)(a.A,{value:"CLI",label:"CLI",mdxType:"TabItem"},(0,n.yg)("p",null,"You can see the properties you created by running the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-commandline"},"datahub forms get --urn {urn}\n")),(0,n.yg)("p",null,"For example, you can run ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub forms get --urn urn:li:form:123456"),"."),(0,n.yg)("p",null,"If successful, you should see metadata about your form returned like below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "urn": "urn:li:form:123456",\n  "name": "Metadata Initiative 2023",\n  "description": "How we want to ensure the most important data assets in our organization have all of the most important and expected pieces of metadata filled out",\n  "prompts": [\n    {\n      "id": "123",\n      "title": "Retention Time",\n      "description": "Apply Retention Time structured property to form",\n      "type": "STRUCTURED_PROPERTY",\n      "structured_property_urn": "urn:li:structuredProperty:io.acryl.privacy.retentionTime"\n    }\n  ],\n  "type": "VERIFICATION"\n}\n')))))}b.isMDXComponent=!0}}]);