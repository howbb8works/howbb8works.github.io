!function(){function e(e){var n={};return e&&"[object Function]"===n.toString.call(e)}function n(e,n){return"string"!=typeof n||0===n.length||g.test(e)?e:n+("/"===n.substr(-1)?"":"/")+e}function t(e,n){var t=new XMLHttpRequest,o,i=!1;t.open("GET",e,!0),o=function(){i||(i=!0,0===t.status||t.status>=200&&t.status<400?n(null,t.responseText):n(null,void 0))},t.onreadystatechange=function(){4===t.readyState&&o()},t.onload=o,t.onerror=function(e){n(e)},t.send()}function o(e,n){if(m[e])m[e].loaded?n():m[e].listeners.push(n);else{var t=document.createElement("script");t.setAttribute("type","application/javascript"),t.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(t),m[e]={listeners:[],loaded:!1},t.onload=function(){m[e].loaded=!0,m[e].listeners.forEach(function(e){e()}),m[e].listeners=[]},m[e].listeners.push(n)}}function i(e,n){if(m[e])m[e].loaded?n():m[e].listeners.push(n);else{var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e),document.getElementsByTagName("head")[0].appendChild(t),m[e]={listeners:[],loaded:!1},t.onload=function(){m[e].loaded=!0,m[e].listeners.forEach(function(e){e()}),m[e].listeners=[]},m[e].listeners.push(n)}}function s(e,n){var t=new XMLHttpRequest;t.open("GET",e,!0),t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status||t.status>=200&&t.status<400){var e=JSON.parse(t.responseText);n(null,e)}else n(null,void 0)},t.onerror=function(e){n(e)},t.send()}function a(e,n,t,o){var i=n.config.runtimeVersion.split("."),s=parseInt(i[0]),a=parseInt(i[1]),r=parseInt(i[2]);switch(a){case 7:u(e,n,t,o);break;case 6:switch(r){case 0:c(e,n,t,o);break;case 1:d(e,n,t,o);break;default:u(e,n,t,o);break}break;default:p(e,n,t,o);break}}function r(e,a,r,l){var c=4,d=0,u={settings:a.application.settings,project:a.project},p=document.querySelector(e);if(!p)return void console.error("Could not find element matching selector: "+e);var g=r.baseUrl||".";f.apiBaseUrl=n(a.config.apiBaseUrl,g),f.assetsBaseUrl=n(a.config.assetsBaseUrl,g),f.staticBaseUrl=n(a.config.staticBaseUrl,g),f.glAssetsBaseUrl=n(a.config.glAssetsBaseUrl,g),window.require?require([f.assetsBaseUrl+"/runtime/verold-runtime-requirejs-"+a.config.runtimeVersion+(r.development||a.config.development?".js":".min.js")],function(){require(["VeroldEngine/VAPI"],function(e){++d>=4&&l(g,u)})}):o(f.assetsBaseUrl+"/runtime/verold-runtime-"+a.config.runtimeVersion+(r.development||a.config.development?".js":".min.js"),function(){++d>=4&&l(g,u)}),i(n(a.resources.css,g),function(){++d>=4&&l(g,u)}),s(n(a.resources.entities,g),function(e,n){u.entities=n,++d>=4&&l(g,u)}),t(n(a.resources.html,g),function(e,n){p.innerHTML+=n,++d>=4&&l(g,u)})}function l(e,t,i){var a=2,r=0,l={settings:e.application.settings,project:e.project},c=t.baseUrl||".";f.apiBaseUrl=n(e.config.apiBaseUrl,c),f.assetsBaseUrl=n(e.config.assetsBaseUrl,c),f.staticBaseUrl=n(e.config.staticBaseUrl,c),f.glAssetsBaseUrl=n(e.config.glAssetsBaseUrl,c),window.VAPI?++r>=2&&i(c,l):window.require?require([f.assetsBaseUrl+"/runtime/verold-runtime-requirejs-"+e.config.runtimeVersion+(t.development||e.config.development?".js":".min.js")],function(){require(["VeroldEngine/VAPI"],function(e){++r>=2&&i(c,l)})}):o(f.assetsBaseUrl+"/runtime/verold-runtime-"+e.config.runtimeVersion+(t.development||e.config.development?".js":".min.js"),function(){++r>=2&&i(c,l)}),s(n(e.resources.entities,c),function(e,n){l.entities=n,++r>=2&&i(c,l)})}function c(n,t,o,i){r(n,t,o,function(n,t){var o=new VAPI.EntityCollection(t.entities),s=o.get(t.project.startupApplicationId),a=s&&s.get("payload.container")||"#verold3d",r=s&&s.get("payload.engineName")||"Default",l=s&&s.get("payload.useVeroldLoader")||!0,c=s&&s.get("payload.loadStartupScene"),d,u=new VAPI.Engine({engineName:r,container:document.querySelector(a)});u.initialize({entities:o,componentSettings:{runtime:!0}}),d=u.assetRegistry.assets[s.id],l?d.addComponent("loader_component",{scene:c},"scene_loader",{success:function(){d.load({load:function(){console.log("application loaded!"),e(i)&&i(d)}})}}):d.load({load:function(){console.log("application loaded!"),e(i)&&i(d)}})})}function d(n,t,o,i){l(t,o,function(n,t){var o=new VAPI.EntityCollection(t.entities),s=o.get(t.project.startupApplicationId),a=s&&s.get("payload.container")||"#verold3d",r=s&&s.get("payload.engineName")||"Default",l=s&&s.get("payload.useVeroldLoader")||!0,c=s&&s.get("payload.loadStartupScene"),d,u=new VAPI.Engine({engineName:r,container:document.querySelector(a)});u.initialize({entities:o,componentSettings:{runtime:!0}}),d=u.assetRegistry.assets[s.id],l?d.addComponent("loader_component",{scene:c},"scene_loader",{success:function(){d.load({load:function(){console.log("application loaded!"),e(i)&&i(d)}})}}):d.load({load:function(){console.log("application loaded!"),e(i)&&i(d)}})})}function u(n,t,o,i){l(t,o,function(n,t){var s=new VAPI.EntityCollection(t.entities),a=s.get(t.project.startupApplicationId),r=o.container||a&&a.get("payload.container")||"#verold3d",l=o.engineName||a&&a.get("payload.engineName")||"Default",c=a&&a.get("payload.useVeroldLoader")||!0,d=a&&a.get("payload.loadStartupScene"),u,p=new VAPI.Engine({engineName:l,container:r});p.initialize({entities:s,componentSettings:{runtime:!0}},function(){u=p.assetRegistry.assets[a.id],c?u.addComponent("loader_component",{scene:d},"scene_loader",{success:function(){u.load({load:function(){console.log("application loaded!"),e(i)&&i(u)}})}}):u.load({load:function(){console.log("application loaded!"),e(i)&&i(u)}})})})}function p(e,t,i,s){r(e,t,i,function(e,i){window.$=window.$||window.jQuery,VAPI.addProjectData(i),o(n(t.resources.js,e),function(){console.log("loaded!")})})}var f=window.verold=window.verold||{},g=new RegExp("^(?:/|.+://)"),m={};f.load=function(e,n,t,o){var i;t=t||{},"string"==typeof n?(i=n.split("/"),i.pop(),s(n,function(n,s){t.baseUrl=s&&s.resources&&s.resources.baseUrl||i.join("/"),a(e,s,t,o)})):a(e,n,t,o)},f.supportsWebGL=function(){var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))},f.isMobile=function(){return/iphone|ipad|ipod|android|blackberry|bb10|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())},f.getBrowsers=function(){var e=navigator.userAgent,n={chrome:e.indexOf("Chrome")>-1,ie:e.indexOf("MSIE")>-1||e.indexOf("Microsoft")>-1,firefox:e.indexOf("Firefox")>-1,opera:e.indexOf("Presto")>-1,netscape:e.indexOf("Netscape")>-1};return n.firefox_mac=e.indexOf("Mac")>-1&&n.firefox,n.safari=e.indexOf("Safari")>-1&&!n.chrome,n}}();