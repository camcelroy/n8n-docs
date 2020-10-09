(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{1108:function(t,e,s){"use strict";s.r(e);var a=s(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("It is possible to change some of the n8n defaults via special environment variables.\nThe ones that currently exist are:")]),t._v(" "),s("h2",{attrs:{id:"publish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[t._v("#")]),t._v(" Publish")]),t._v(" "),s("p",[t._v("Sets how n8n should be made available.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The port n8n should be made available on")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This ones are currently only important for the webhook URL creation.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# So if "WEBHOOK_TUNNEL_URL" got set they do get ignored. It is however')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# encouraged to set them correctly anyway in case they will become")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# important in the future.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_PROTOCOL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n8n.example.com\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The IP address n8n should listen on")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_LISTEN_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".1.1\n")])])]),s("h2",{attrs:{id:"base-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-url"}},[t._v("#")]),t._v(" Base URL")]),t._v(" "),s("p",[t._v("Tells the frontend how to reach the REST API of the backend.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("VUE_APP_URL_BASE_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://n8n.example.com/"')]),t._v("\n")])])]),s("h2",{attrs:{id:"security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[t._v("#")]),t._v(" Security")]),t._v(" "),s("p",[t._v("You can find information about securing your n8n instance "),s("RouterLink",{attrs:{to:"/reference/security.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"encryption-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encryption-key"}},[t._v("#")]),t._v(" Encryption Key")]),t._v(" "),s("p",[t._v("n8n creates a random encryption key automatically on the first launch and saves\nit in the "),s("code",[t._v("~/.n8n")]),t._v(" folder. That key is used to encrypt the credentials before\nthey get saved to the database. It is also possible to overwrite that key and\nset it via an environment variable.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_ENCRYPTION_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<SOME RANDOM STRING>"')]),t._v("\n")])])]),s("h2",{attrs:{id:"execution-data-manual-runs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution-data-manual-runs"}},[t._v("#")]),t._v(" Execution Data Manual Runs")]),t._v(" "),s("p",[t._v("Normally executions which got started via the Editor UI will not be saved as\nthey are normally only for testing and debugging. That default can be changed\nwith this environment variable.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),s("p",[t._v("This setting can also be overwritten on a per workflow basis in the workflow\nsettings in the Editor UI.")]),t._v(" "),s("h2",{attrs:{id:"execution-data-error-success"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution-data-error-success"}},[t._v("#")]),t._v(" Execution Data Error/Success")]),t._v(" "),s("p",[t._v("When a workflow gets executed, it will save the result in the database. That's\nthe case for executions that succeeded and for the ones that failed. The\ndefault behavior can be changed like this:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_ON_ERROR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_SAVE_ON_SUCCESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none\n")])])]),s("p",[t._v("Possible values are:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("all")]),t._v(": Saves all data")]),t._v(" "),s("li",[s("strong",[t._v("none")]),t._v(': Does not save anything (recommended if a workflow runs very often and/or processes a lot of data, set up "Error Workflow" instead)')])]),t._v(" "),s("p",[t._v("These settings can also be overwritten on a per workflow basis in the workflow\nsettings in the Editor UI.")]),t._v(" "),s("h2",{attrs:{id:"execute-in-same-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-in-same-process"}},[t._v("#")]),t._v(" Execute In Same Process")]),t._v(" "),s("p",[t._v("All workflows get executed in their own separate process. This ensures that all CPU cores\nget used and that they do not block each other on CPU intensive tasks. Additionally, this makes sure that\nthe crash of one execution does not take down the whole application. The disadvantage is, however,\nthat it slows down the start-time considerably and uses much more memory. So in case the\nworkflows are not CPU intensive and they have to start very fast, it is possible to run them\nall directly in the main-process with this setting.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_PROCESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("main\n")])])]),s("h2",{attrs:{id:"execution-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution-timeout"}},[t._v("#")]),t._v(" Execution Timeout")]),t._v(" "),s("p",[t._v("A workflow times out and gets canceled after this time (in seconds). If the workflow is executed in the main process, a soft timeout is executed (takes effect after the current node finishes). If a workflow is running in its own process, a soft timeout is tried first. The process is killed after waiting for an additional fifth of the given timeout duration.")]),t._v(" "),s("p",[t._v("By default "),s("code",[t._v("EXECUTIONS_TIMEOUT")]),t._v(" is set to "),s("code",[t._v("-1")]),t._v(". For example, if you want to set the timeout to one hour:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v("\n")])])]),s("p",[t._v("You can also set maximum execution time (in seconds) for each workflow individually. For example, if you want to set maximum execution time to two hours:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_TIMEOUT_MAX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7200")]),t._v("\n")])])]),s("h2",{attrs:{id:"prune-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prune-data"}},[t._v("#")]),t._v(" Prune Data")]),t._v(" "),s("p",[t._v("It is possible to prune the execution data. This prevents exceeding the database's capacity and keeping its size moderate. The execution data gets pruned regularly (default: 1-hour interval). All saved execution data older than the max-age will be deleted. To delete data of past executions on a rolling basis:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_PRUNE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),s("p",[t._v("You can also set how old (in hours) the execution data has to be to get deleted.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_MAX_AGE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("672")]),t._v("\n")])])]),s("p",[t._v("You can also set the timeout (in seconds) after execution data has been pruned.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXECUTIONS_DATA_PRUNE_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7200")]),t._v("\n")])])]),s("h2",{attrs:{id:"exclude-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exclude-nodes"}},[t._v("#")]),t._v(" Exclude Nodes")]),t._v(" "),s("p",[t._v('It is possible to not allow users to use nodes of a specific node type. For example, if you\ndo not want that people can write data to the disk with the "n8n-nodes-base.writeBinaryFile"\nnode and that they cannot execute commands with the "n8n-nodes-base.executeCommand" node, you can\nset the following:')]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODES_EXCLUDE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"['),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("n8n-nodes-base.executeCommand"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("n8n-nodes-base.writeBinaryFile"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(']"')]),t._v("\n")])])]),s("h2",{attrs:{id:"custom-nodes-location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-nodes-location"}},[t._v("#")]),t._v(" Custom Nodes Location")]),t._v(" "),s("p",[t._v("Every user can add custom nodes that get loaded by n8n on startup. The default\nlocation is in the subfolder "),s("code",[t._v(".n8n/custom")]),t._v(" of the user who started n8n.\nAdditional folders can be defined with an environment variable.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_CUSTOM_EXTENSIONS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/jim/n8n/custom-nodes;/data/n8n/nodes"')]),t._v("\n")])])]),s("h2",{attrs:{id:"use-built-in-and-external-modules-in-function-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-built-in-and-external-modules-in-function-nodes"}},[t._v("#")]),t._v(" Use built-in and external modules in Function-Nodes")]),t._v(" "),s("p",[t._v("For security reasons, importing modules is restricted by default in the Function-Nodes.\nIt is, however, possible to lift that restriction for built-in and external modules by\nsetting the following environment variables:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("NODE_FUNCTION_ALLOW_BUILTIN")]),t._v(": For builtin modules")]),t._v(" "),s("li",[s("code",[t._v("NODE_FUNCTION_ALLOW_EXTERNAL")]),t._v(": For external modules sourced from n8n/node_modules directory. External module support is disabled when env variable is not set.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Allows usage of all builtin modules")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_FUNCTION_ALLOW_BUILTIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("*\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Allows usage of only crypto")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_FUNCTION_ALLOW_BUILTIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("crypto\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Allows usage of only crypto and fs")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_FUNCTION_ALLOW_BUILTIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("crypto,fs\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Allow usage of external npm modules. Wildcard matching is not supported.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_FUNCTION_ALLOW_EXTERNAL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("moment,lodash\n")])])]),s("h2",{attrs:{id:"ssl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssl"}},[t._v("#")]),t._v(" SSL")]),t._v(" "),s("p",[t._v("It is possible to start n8n with SSL enabled by supplying a certificate to use:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_PROTOCOL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_SSL_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/certs/server.key\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_SSL_CERT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/certs/server.pem\n")])])]),s("h2",{attrs:{id:"timezone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timezone"}},[t._v("#")]),t._v(" Timezone")]),t._v(" "),s("p",[t._v('The timezone is set by default to "America/New_York". For instance, it is used by the\nCron node to know at what time the workflow should be started. To set a different\ndefault timezone, set '),s("code",[t._v("GENERIC_TIMEZONE")]),t._v(" to the appropriate value. For example,\nif you want to set the timezone to Berlin (Germany):")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GENERIC_TIMEZONE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Europe/Berlin"')]),t._v("\n")])])]),s("p",[t._v("You can find the name of your timezone here:\n"),s("a",{attrs:{href:"https://momentjs.com/timezone/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://momentjs.com/timezone/"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"user-folder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-folder"}},[t._v("#")]),t._v(" User Folder")]),t._v(" "),s("p",[t._v("User-specific data like the encryption key, SQLite database file, and\nthe ID of the tunnel (if used) gets saved by default in the subfolder\n"),s("code",[t._v(".n8n")]),t._v(" of the user who started n8n. It is possible to overwrite the\nuser-folder via an environment variable.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_USER_FOLDER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/jim/n8n"')]),t._v("\n")])])]),s("h2",{attrs:{id:"webhook-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webhook-url"}},[t._v("#")]),t._v(" Webhook URL")]),t._v(" "),s("p",[t._v("The webhook URL will normally be created automatically by combining\n"),s("code",[t._v("N8N_PROTOCOL")]),t._v(", "),s("code",[t._v("N8N_HOST")]),t._v(" and "),s("code",[t._v("N8N_PORT")]),t._v(". However, if n8n runs behind a\nreverse proxy that would not work. That's because n8n runs internally\non port 5678 but is exposed to the web via the reverse proxy on port 443. In\nthat case, it is important to set the webhook URL manually so that it can be\ndisplayed correctly in the Editor UI and even more important is that the correct\nwebhook URLs get registred with the external services.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WEBHOOK_TUNNEL_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://n8n.example.com/"')]),t._v("\n")])])]),s("h2",{attrs:{id:"overwrites-for-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overwrites-for-credentials"}},[t._v("#")]),t._v(" Overwrites for credentials")]),t._v(" "),s("p",[t._v("It is also possible to set default values for credentials. These credentials get automatically prefilled. To set default credentials, use the following format.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CREDENTIALS_OVERWRITE_DATA")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CREDENTIAL_NAME:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PARAMATER: Value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"configuration-via-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-via-file"}},[t._v("#")]),t._v(" Configuration via file")]),t._v(" "),s("p",[t._v("It is also possible to configure n8n using a configuration file.")]),t._v(" "),s("p",[t._v("It is not necessary to define all values but only the ones that should be\ndifferent from the defaults.")]),t._v(" "),s("p",[t._v("If needed multiple files can also be supplied to. For example, have generic\nbase settings and some specific ones depending on the environment.")]),t._v(" "),s("p",[t._v("The path to the JSON configuration file to use can be set using the environment\nvariable "),s("code",[t._v("N8N_CONFIG_FILES")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Single file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_CONFIG_FILES")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/folder/my-config.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Multiple files can be comma-separated")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("N8N_CONFIG_FILES")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/folder/my-config.json,/folder/production.json\n")])])]),s("p",[t._v("A possible configuration file could look like this:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"executions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"process"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"saveDataOnSuccess"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"generic"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timezone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Europe/Berlin"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"basicAuth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frank"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some-secure-password"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exclude"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[\\"n8n-nodes-base.executeCommand\\",\\"n8n-nodes-base.writeBinaryFile\\"]"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("All possible values which can be set and their defaults can be found here:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/cli/config/index.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/n8n-io/n8n/blob/master/packages/cli/config/index.ts"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);