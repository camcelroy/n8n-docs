(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{533:function(t,e,n){t.exports=n.p+"assets/img/workflow.57432bdb.png"},534:function(t,e,n){t.exports=n.p+"assets/img/Function_node.335e2cbf.png"},535:function(t,e,n){t.exports=n.p+"assets/img/SplitInBatches_node.d7752cb8.png"},536:function(t,e,n){t.exports=n.p+"assets/img/RSSFeedRead_node.7bb732b7.png"},943:function(t,e,n){"use strict";n.r(e);var s=n(26),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"split-in-batches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-in-batches"}},[t._v("#")]),t._v(" Split In Batches")]),t._v(" "),s("p",[t._v("The Split In Batches node saves the original incoming data, and with each iteration, it returns a predefined amount of data. This node can be used to loop through the data.")]),t._v(" "),s("h2",{attrs:{id:"node-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[t._v("#")]),t._v(" Node Reference")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Batch Size:")]),t._v(" The number of items to return with each call.")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("Options")])]),t._v(" "),s("ul",[s("li",[s("em",[s("strong",[t._v("Reset:")])]),t._v(" If set to true, the node will reset.")])])])]),t._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),s("p",[t._v("This workflow allows you to read RSS feed from two different sources using the Split In Batches node. The Split in Batches node is needed in the workflow since the RSS Read node only processes the first item it receives. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/687",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),s("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following nodes.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[t._v("Function")])],1),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("Split In Batches")])]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/RSSRead/"}},[t._v("RSS Read")])],1)]),t._v(" "),s("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),s("p",[s("img",{attrs:{src:n(533),alt:"A workflow with the Split In Batches node"}})]),t._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),s("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_2-function-node"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_2-function-node"}},[t._v("#")]),t._v(" 2. Function node")]),t._v(" "),s("ol",[s("li",[t._v("Paste the following JavaScript code snippet in the "),s("em",[s("strong",[t._v("Function")])]),t._v(" field.")])]),t._v(" "),s("div",{pre:!0,attrs:{class:"language-js extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://medium.com/feed/n8n-io'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://dev.to/feed/n8n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{pre:!0,attrs:{start:"2"}},[s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[s("img",{attrs:{src:n(534),alt:"Using the Function node to return URLs"}})]),t._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_3-splitinbatches-node"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-splitinbatches-node"}},[t._v("#")]),t._v(" 3. SplitInBatches node")]),t._v(" "),s("ol",[s("li",[t._v("Set the batch size to "),s("code",[t._v("1")]),t._v(" in the "),s("em",[s("strong",[t._v("Batch Size")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[s("img",{attrs:{src:n(535),alt:"Using the Split In Batches node to split the data"}})]),t._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_4-rss-read-node"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-rss-read-node"}},[t._v("#")]),t._v(" 4. RSS Read node")]),t._v(" "),s("ol",[s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("URL")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > SplitInBatches > Output Data > JSON > url. You can also add the following expression: "),s("code",[t._v('{{$node["SplitInBatches"].json["url"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the workflow.")])])]),s("p",[s("img",{attrs:{src:n(536),alt:"Using the RSS Read node to read data from RSS feed"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);