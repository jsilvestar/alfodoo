/*! CmisJS - v0.2.0 - 2015-05-20
* a CMIS client library written in Javascript for node and the browser
* http://github.com/agea/CmisJS
* Copyright (c) 2015 Andrea Agili; Licensed  */
!function(){function a(b,c,d){var e=a.resolve(b);if(null==e){d=d||b,c=c||"root";var f=new Error('Failed to require "'+d+'" from "'+c+'"');throw f.path=d,f.parent=c,f.require=!0,f}var g=a.modules[e];return g.exports||(g.exports={},g.client=g.component=!0,g.call(this,g.exports,a.relative(e),g)),g.exports}a.modules={},a.aliases={},a.resolve=function(b){"/"===b.charAt(0)&&(b=b.slice(1));for(var c=b+"/index.js",d=[b,b+".js",b+".json",b+"/index.js",b+"/index.json"],e=0;e<d.length;e++){var b=d[e];if(a.modules.hasOwnProperty(b))return b}return a.aliases.hasOwnProperty(c)?a.aliases[c]:void 0},a.normalize=function(a,b){var c=[];if("."!=b.charAt(0))return b;a=a.split("/"),b=b.split("/");for(var d=0;d<b.length;++d)".."==b[d]?a.pop():"."!=b[d]&&""!=b[d]&&c.push(b[d]);return a.concat(c).join("/")},a.register=function(b,c){a.modules[b]=c},a.alias=function(b,c){if(!a.modules.hasOwnProperty(b))throw new Error('Failed to alias "'+b+'", it does not exist');a.aliases[c]=b},a.relative=function(b){function c(a,b){for(var c=a.length;c--;)if(a[c]===b)return c;return-1}function d(c){var e=d.resolve(c);return a(e,b,c)}var e=a.normalize(b,"..");return d.resolve=function(d){var f=d.charAt(0);if("/"==f)return d.slice(1);if("."==f)return a.normalize(e,d);var g=b.split("/"),h=c(g,"deps")+1;return h||(h=0),d=g.slice(0,h+1).join("/")+"/deps/"+d},d.exists=function(b){return a.modules.hasOwnProperty(d.resolve(b))},d},a.register("component-indexof/index.js",function(a,b,c){var d=[].indexOf;c.exports=function(a,b){if(d)return a.indexOf(b);for(var c=0;c<a.length;++c)if(a[c]===b)return c;return-1}}),a.register("component-emitter/index.js",function(a,b,c){function d(a){return a?e(a):void 0}function e(a){for(var b in d.prototype)a[b]=d.prototype[b];return a}var f=b("indexof");c.exports=d,d.prototype.on=function(a,b){return this._callbacks=this._callbacks||{},(this._callbacks[a]=this._callbacks[a]||[]).push(b),this},d.prototype.once=function(a,b){function c(){d.off(a,c),b.apply(this,arguments)}var d=this;return this._callbacks=this._callbacks||{},b._off=c,this.on(a,c),this},d.prototype.off=d.prototype.removeListener=d.prototype.removeAllListeners=function(a,b){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var c=this._callbacks[a];if(!c)return this;if(1==arguments.length)return delete this._callbacks[a],this;var d=f(c,b._off||b);return~d&&c.splice(d,1),this},d.prototype.emit=function(a){this._callbacks=this._callbacks||{};var b=[].slice.call(arguments,1),c=this._callbacks[a];if(c){c=c.slice(0);for(var d=0,e=c.length;e>d;++d)c[d].apply(this,b)}return this},d.prototype.listeners=function(a){return this._callbacks=this._callbacks||{},this._callbacks[a]||[]},d.prototype.hasListeners=function(a){return!!this.listeners(a).length}}),a.register("RedVentures-reduce/index.js",function(a,b,c){c.exports=function(a,b,c){for(var d=0,e=a.length,f=3==arguments.length?c:a[d++];e>d;)f=b.call(null,f,a[d],++d,a);return f}}),a.register("superagent/lib/client.js",function(a,b,c){function d(){}function e(a){var b={}.toString.call(a);switch(b){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function f(){if(r.XMLHttpRequest&&("file:"!=r.location.protocol||!r.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){}return!1}function g(a){return a===Object(a)}function h(a){if(!g(a))return a;var b=[];for(var c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")}function i(a){for(var b,c,d={},e=a.split("&"),f=0,g=e.length;g>f;++f)c=e[f],b=c.split("="),d[decodeURIComponent(b[0])]=decodeURIComponent(b[1]);return d}function j(a){var b,c,d,e,f=a.split(/\r?\n/),g={};f.pop();for(var h=0,i=f.length;i>h;++h)c=f[h],b=c.indexOf(":"),d=c.slice(0,b).toLowerCase(),e=s(c.slice(b+1)),g[d]=e;return g}function k(a){return a.split(/ *; */).shift()}function l(a){return q(a.split(/ *; */),function(a,b){var c=b.split(/ *= */),d=c.shift(),e=c.shift();return d&&e&&(a[d]=e),a},{})}function m(a,b){b=b||{},this.xhr=a,this.text=a.responseText,this.setStatusProperties(a.status),this.header=this.headers=j(a.getAllResponseHeaders()),this.header["content-type"]=a.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body=this.parseBody(this.text)}function n(a,b){var c=this;p.call(this),this._query=this._query||[],this.method=a,this.url=b,this.header={},this._header={},this.set("X-Requested-With","XMLHttpRequest"),this.on("end",function(){var b=new m(c.xhr);"HEAD"==a&&(b.text=null),c.callback(null,b)})}function o(a,b){return"function"==typeof b?new n("GET",a).end(b):1==arguments.length?new n("GET",a):new n(a,b)}var p=b("emitter"),q=b("reduce"),r="undefined"==typeof window?this:window,s="".trim?function(a){return a.trim()}:function(a){return a.replace(/(^\s*|\s*$)/g,"")};o.serializeObject=h,o.parseString=i,o.types={html:"text/html",json:"application/json",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},o.serialize={"application/x-www-form-urlencoded":h,"application/json":JSON.stringify},o.parse={"application/x-www-form-urlencoded":i,"application/json":JSON.parse},m.prototype.get=function(a){return this.header[a.toLowerCase()]},m.prototype.setHeaderProperties=function(){var a=this.header["content-type"]||"";this.type=k(a);var b=l(a);for(var c in b)this[c]=b[c]},m.prototype.parseBody=function(a){var b=o.parse[this.type];return b?b(a):null},m.prototype.setStatusProperties=function(a){var b=a/100|0;this.status=a,this.statusType=b,this.info=1==b,this.ok=2==b,this.clientError=4==b,this.serverError=5==b,this.error=4==b||5==b?this.toError():!1,this.accepted=202==a,this.noContent=204==a||1223==a,this.badRequest=400==a,this.unauthorized=401==a,this.notAcceptable=406==a,this.notFound=404==a,this.forbidden=403==a},m.prototype.toError=function(){var a="got "+this.status+" response",b=new Error(a);return b.status=this.status,b},o.Response=m,n.prototype=new p,n.prototype.constructor=n,n.prototype.timeout=function(a){return this._timeout=a,this},n.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},n.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},n.prototype.set=function(a,b){if(g(a)){for(var c in a)this.set(c,a[c]);return this}return this._header[a.toLowerCase()]=b,this.header[a]=b,this},n.prototype.getHeader=function(a){return this._header[a.toLowerCase()]},n.prototype.type=function(a){return this.set("Content-Type",o.types[a]||a),this},n.prototype.auth=function(a,b){var c=btoa(a+":"+b);return this.set("Authorization","Basic "+c),this},n.prototype.query=function(a){return"string"!=typeof a&&(a=h(a)),a&&this._query.push(a),this},n.prototype.send=function(a){var b=g(a),c=this.getHeader("Content-Type");if(b&&g(this._data))for(var d in a)this._data[d]=a[d];else"string"==typeof a?(c||this.type("form"),c=this.getHeader("Content-Type"),this._data="application/x-www-form-urlencoded"==c?this._data?this._data+"&"+a:a:(this._data||"")+a):this._data=a;return b?(c||this.type("json"),this):this},n.prototype.callback=function(a,b){var c=this._callback;return 2==c.length?c(a,b):a?this.emit("error",a):(c(b),void 0)},n.prototype.crossDomainError=function(){var a=new Error("Origin is not allowed by Access-Control-Allow-Origin");a.crossDomain=!0,this.callback(a)},n.prototype.timeoutError=function(){var a=this._timeout,b=new Error("timeout of "+a+"ms exceeded");b.timeout=a,this.callback(b)},n.prototype.withCredentials=function(){return this._withCredentials=!0,this},n.prototype.end=function(a){var b=this,c=this.xhr=f(),g=this._query.join("&"),h=this._timeout,i=this._data;if(this._callback=a||d,this._withCredentials&&(c.withCredentials=!0),c.onreadystatechange=function(){return 4==c.readyState?0==c.status?b.aborted?b.timeoutError():b.crossDomainError():(b.emit("end"),void 0):void 0},c.upload&&(c.upload.onprogress=function(a){a.percent=a.loaded/a.total*100,b.emit("progress",a)}),h&&!this._timer&&(this._timer=setTimeout(function(){b.abort()},h)),g&&(g=o.serializeObject(g),this.url+=~this.url.indexOf("?")?"&"+g:"?"+g),c.open(this.method,this.url,!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof i&&!e(i)){var j=o.serialize[this.getHeader("Content-Type")];j&&(i=j(i))}for(var k in this.header)null!=this.header[k]&&c.setRequestHeader(k,this.header[k]);return c.send(i),this},o.Request=n,o.get=function(a,b,c){var d=o("GET",a);return"function"==typeof b&&(c=b,b=null),b&&d.query(b),c&&d.end(c),d},o.head=function(a,b,c){var d=o("HEAD",a);return"function"==typeof b&&(c=b,b=null),b&&d.send(b),c&&d.end(c),d},o.del=function(a,b){var c=o("DELETE",a);return b&&c.end(b),c},o.patch=function(a,b,c){var d=o("PATCH",a);return"function"==typeof b&&(c=b,b=null),b&&d.send(b),c&&d.end(c),d},o.post=function(a,b,c){var d=o("POST",a);return"function"==typeof b&&(c=b,b=null),b&&d.send(b),c&&d.end(c),d},o.put=function(a,b,c){var d=o("PUT",a);return"function"==typeof b&&(c=b,b=null),b&&d.send(b),c&&d.end(c),d},c.exports=o}),a.alias("component-emitter/index.js","superagent/deps/emitter/index.js"),a.alias("component-emitter/index.js","emitter/index.js"),a.alias("component-indexof/index.js","component-emitter/deps/indexof/index.js"),a.alias("RedVentures-reduce/index.js","superagent/deps/reduce/index.js"),a.alias("RedVentures-reduce/index.js","reduce/index.js"),a.alias("superagent/lib/client.js","superagent/index.js"),"object"==typeof exports?module.exports=a("superagent"):"function"==typeof define&&define.amd?define(function(){return a("superagent")}):this.superagent=a("superagent")}(),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["superagent"],function(a){return b(a)}):a.cmis=b()}(this,function(){"use strict";var a={},b="undefined"!=typeof module&&module.exports,c=b&&"undefined"==typeof window;return b&&(module.exports=a),a.createSession=function(a){function b(a,b){var c=i,d=j,e=k;a.on("error",e).end(function(a){a.ok?c.scope?c.scope.$apply(function(){b?c(a.text):c(a.body)}):b?c(a.text):c(a.body):d.scope?d.scope.$apply(function(){d(a)}):d(a)}),this.ok=function(a){return c=a||i,this},this.$ok=function(a,b){return b.scope=a,this.ok(b)},this.notOk=function(a){return d=a||i,this},this.$notOk=function(a,b){return b.scope=a,this.notOk(b)},this.error=function(b){return e=b||i,a.on("error",e),this},this.$error=function(a,b){return b.scope=a,this.error(b)}}var d={};d.setToken=function(a){return p.token=a,d},d.setCredentials=function(a,b){return g=a,h=b,d},d.setGlobalHandlers=function(a,b){return j=a||i,k=b||i,d},d.loadRepositories=function(){var c=new b(m(a)).ok(function(a){for(var b in a){d.defaultRepository=a[b];break}d.repositories=a,void 0!==f&&f(a)});return c.ok=function(a){return f=a,c},c},d.getObject=function(a,c,e){return e=q(e),e.cmisselector="object",e.objectId=a,("latestmajor"==c||"latest"==c)&&(e.returnVersion=c),new b(m(d.defaultRepository.rootFolderUrl).query(e))},d.getObjectByPath=function(a,c){return c=q(c),c.cmisselector="object",new b(m(d.defaultRepository.rootFolderUrl+a).query(c))},d.createFolder=function(a,c,e,f,g){var h=q({});"string"==typeof c&&(c={"cmis:name":c});var i=c||{};return i["cmis:objectTypeId"]||(i["cmis:objectTypeId"]="cmis:folder"),h.objectId=a,r(i,h),e&&s(e,h),f&&t(f,"add",h),g&&t(g,"remove",h),h.repositoryId=d.defaultRepository.repositoryId,h.cmisaction="createFolder",new b(n(d.defaultRepository.rootFolderUrl).send(h))},d.deleteObject=function(a,c,e){var e=q(e);return e.repositoryId=d.defaultRepository.repositoryId,e.cmisaction="delete",e.objectId=a,e.allVersions=!!c,new b(n(d.defaultRepository.rootFolderUrl).send(e))},d.getRepositoryInfo=function(a){return a=q(a),a.cmisselector="repositoryInfo",new b(m(d.defaultRepository.repositoryUrl).query(a))},d.getTypeChildren=function(a,c,e){return e=q(e),a&&(e.typeId=a),e.includePropertyDefinitions=c,e.cmisselector="typeChildren",new b(m(d.defaultRepository.repositoryUrl).query(e))},d.getTypeDescendants=function(a,c,e,f){return f=q(f),a&&(f.typeId=a),f.depth=c||1,f.includePropertyDefinitions=e,f.cmisselector="typeDescendants",new b(m(d.defaultRepository.repositoryUrl).query(f))},d.getTypeDefinition=function(a,c){return c=q(c),c.typeId=a,c.cmisselector="typeDefinition",new b(m(d.defaultRepository.repositoryUrl).query(c))},d.getCheckedOutDocs=function(a,c){return c=q(c),a&&(c.objectId=a),c.cmisselector="checkedOut",new b(m(d.defaultRepository.repositoryUrl).query(c))},d.createDocument=function(a,b,c,e,f,g,h,i,j){var j=q(j);"string"==typeof c&&(c={"cmis:name":c});var k=c||{};return k["cmis:objectTypeId"]||(k["cmis:objectTypeId"]="cmis:document"),f&&(j.versioningState=f),j.objectId=a,r(k,j),g&&s(g,j),h&&t(h,"add",j),i&&t(i,"remove",j),j.repositoryId=d.defaultRepository.repositoryId,j.cmisaction="createDocument",o(d.defaultRepository.rootFolderUrl,j,b,e,k["cmis:name"])},d.createDocumentFromSource=function(a,b,c,e,f,g,h,i,j,k){var k=q(k);"string"==typeof e&&(e={"cmis:name":e});var l=e||{};return l["cmis:objectTypeId"]||(l["cmis:objectTypeId"]="cmis:document"),g&&(k.versioningState=g),k.objectId=a,k.sourceId=b,r(l,k),h&&s(h,k),i&&t(i,"add",k),j&&t(j,"remove",k),k.repositoryId=d.defaultRepository.repositoryId,k.cmisaction="createDocumentFromSource",o(d.defaultRepository.rootFolderUrl,k,c,f,l["cmis:name"])},d.createRelationship=function(a,c,e,f,g){return g=q(g),r(a,g),c&&s(c,g),e&&t(e,"add",g),f&&t(f,"remove",g),g.cmisaction="createRelationship",new b(n(d.defaultRepository.repositoryUrl).send(g))},d.createPolicy=function(a,c,e,f,g,h){return h=q(h),h.objectId=a,r(c,h),e&&s(e,h),f&&t(f,"add",h),g&&t(g,"remove",h),h.cmisaction="createPolicy",new b(n(d.defaultRepository.rootFolderUrl).send(h))},d.createItem=function(a,c,e,f,g,h){return h=q(h),h.objectId=a,r(c,h),e&&s(e,h),f&&t(f,"add",h),g&&t(g,"remove",h),h.cmisaction="createItem",new b(n(d.defaultRepository.rootFolderUrl).send(h))},d.bulkUpdateProperties=function(a,c,e,f,g){for(var g=q(g),h=a.length-1;h>=0;h--)g["objectId["+h+"]"]=a[h];return g.objectIds=a,r(c,g),e&&u(e,"add",g),f&&u(f,"remove",g),g.cmisaction="bulkUpdate",new b(n(d.defaultRepository.repositoryUrl).send(g))},d.query=function(a,c,e){return e=q(e),e.cmisaction="query",e.statement=a,e.searchAllVersions=!!c,new b(n(d.defaultRepository.repositoryUrl).send(e))},d.getContentChanges=function(a,c,e,f,g){return g=q(g),g.cmisselector="contentChanges",a&&(g.changeLogToken=a),g.includeProperties=!!c,g.includePolicyIds=!!e,g.includeACL=!!f,new b(m(d.defaultRepository.repositoryUrl).query(g))},d.createType=function(a,c){return c=q(c),c.cmisaction="createType",c.type=JSON.stringify(a),new b(n(d.defaultRepository.repositoryUrl).send(c))},d.updateType=function(a,c){return c=q(c),c.cmisaction="updateType",c.type=JSON.stringify(a),new b(n(d.defaultRepository.repositoryUrl).send(c))},d.deleteType=function(a,c){return c=q(c),c.cmisaction="deleteType",c.typeId=a,new b(n(d.defaultRepository.repositoryUrl).send(c))},d.getLastResult=function(a){return a=q(a),a.cmisaction="lastResult",new b(n(d.defaultRepository.repositoryUrl).send(a))},d.getChildren=function(a,c){return c=q(c),c.cmisselector="children",c.objectId=a,new b(m(d.defaultRepository.rootFolderUrl).query(c))},d.getDescendants=function(a,c,e){return e=q(e),e.cmisselector="descendants",c&&(e.depth=c),e.objectId=a,new b(m(d.defaultRepository.rootFolderUrl).query(e))},d.getFolderTree=function(a,c,e){return e=q(e),e.cmisselector="folderTree",c&&(e.depth=c),e.objectId=a,new b(m(d.defaultRepository.rootFolderUrl).query(e))},d.getFolderParent=function(a,c){return c=q(c),c.cmisselector="parent",c.objectId=a,new b(m(d.defaultRepository.rootFolderUrl).query(c))},d.getParents=function(a,c){return c=q(c),c.cmisselector="parents",c.objectId=a,new b(m(d.defaultRepository.rootFolderUrl).query(c))},d.getAllowableActions=function(a,c){return c=q(c),c.cmisselector="allowableActions",c.objectId=a,new b(m(d.defaultRepository.rootFolderUrl).query(c))},d.getProperties=function(a,c,e){return e=q(e),e.cmisselector="properties",e.objectId=a,("latestmajor"==c||"latest"==c)&&(e.returnVersion=c),new b(m(d.defaultRepository.rootFolderUrl).query(e))},d.getContentStream=function(a,c,e){return e=q(e),e.cmisselector="content",e.objectId=a,e.download=c?"attachment":"inline",new b(m(d.defaultRepository.rootFolderUrl).query(e),!0)},c&&(d.pipeContentStream=function(a,b,c){b=q(b),b.cmisselector="content",b.objectId=a,m(d.defaultRepository.rootFolderUrl).query(b).pipe(c)}),d.getContentStreamURL=function(a,b,c){c=q(c),c.cmisselector="content",c.objectId=a,c.download=b?"attachment":"inline";var e=[];for(var f in c)e.push(encodeURIComponent(f)+"="+encodeURIComponent(c[f]));var g=e.join("&");return d.defaultRepository.rootFolderUrl+"?"+g},d.getRenditions=function(a,c){return c=q(c),c.cmisselector="renditions",c.objectId=a,c.renditionFilter=c.renditionFilter||"*",new b(m(d.defaultRepository.rootFolderUrl).query(c))},d.updateProperties=function(a,c,e){var e=q(e);return e.objectId=a,r(c,e),e.cmisaction="update",new b(n(d.defaultRepository.rootFolderUrl).send(e))},d.moveObject=function(a,c,e,f){var f=q(f);return f.objectId=a,f.cmisaction="move",f.targetFolderId=e,f.sourceFolderId=c,new b(n(d.defaultRepository.rootFolderUrl).send(f))},d.deleteTree=function(a,c,e,f,g){var g=q(g);return g.repositoryId=d.defaultRepository.repositoryId,g.cmisaction="deleteTree",g.objectId=a,g.allVersions=!!c,e&&(g.unfileObjects=e),g.continueOnFailure=!!f,new b(n(d.defaultRepository.rootFolderUrl).send(g))},d.setContentStream=function(a,b,c,e,f){var f=q(f);return f.objectId=a,f.overwriteFlag=!!c,f.cmisaction="setContent",o(d.defaultRepository.rootFolderUrl,f,b,e)},d.appendContentStream=function(a,b,c,e){var e=q(e);return e.objectId=a,e.cmisaction="appendContent",e.isLastChunk=!!c,o(d.defaultRepository.rootFolderUrl,e,b)},d.deleteContentStream=function(a,c){var c=q(c);return c.objectId=a,c.cmisaction="deleteContent",new b(n(d.defaultRepository.rootFolderUrl).send(c))},d.addObjectToFolder=function(a,c,e,f){var f=q(f);return f.objectId=a,f.cmisaction="addObjectToFolder",f.allVersions=!!e,f.folderId=c,new b(n(d.defaultRepository.rootFolderUrl).send(f))},d.removeObjectFromFolder=function(a,c,e){var e=q(e);return e.objectId=a,e.cmisaction="removeObjectFromFolder",e.folderId=c,new b(n(d.defaultRepository.rootFolderUrl).send(e))},d.checkOut=function(a,c){var c=q(c);return c.objectId=a,c.cmisaction="checkOut",new b(n(d.defaultRepository.rootFolderUrl).send(c))},d.cancelCheckOut=function(a,c){var c=q(c);return c.objectId=a,c.cmisaction="cancelCheckOut",new b(n(d.defaultRepository.rootFolderUrl).send(c))},d.checkIn=function(a,b,c,e,f,g,h,i,j){var j=q(j);"string"==typeof c&&(c={"cmis:name":c});var k=c||{};return f&&(j.checkinComment=f),j.major=!!b,j.objectId=a,r(k,j),g&&s(g,j),h&&t(h,"add",j),i&&t(i,"remove",j),j.cmisaction="checkIn",o(d.defaultRepository.rootFolderUrl,j,e,j.mimeType||k["cmis:contentStreamMimeType"],k["cmis:name"])},d.getAllVersions=function(a,c){var c=q(c);return c.objectId=a,c.cmisselector="versions",new b(m(d.defaultRepository.rootFolderUrl).query(c))},d.getObjectRelationships=function(a,c,e,f,g){var g=q(g);return g.objectId=a,g.includeSubRelationshipTypes=!!c,g.relationshipDirection=e||"either",f&&(g.typeId=f),g.cmisselector="relationships",new b(m(d.defaultRepository.rootFolderUrl).query(g))},d.getAppliedPolicies=function(a,c){var c=q(c);return c.objectId=a,c.cmisselector="policies",new b(m(d.defaultRepository.rootFolderUrl).query(c))},d.applyPolicy=function(a,c,e){var e=q(e);return e.objectId=a,e.policyId=c,e.cmisaction="applyPolicy",new b(n(d.defaultRepository.rootFolderUrl).send(e))},d.removePolicy=function(a,c,e){var e=q(e);return e.objectId=a,e.policyId=c,e.cmisaction="removePolicy",new b(n(d.defaultRepository.rootFolderUrl).send(e))},d.applyACL=function(a,c,e,f,g){var g=q(g);return g.objectId=a,g.cmisaction="applyACL",t(c,"add",g),t(e,"remove",g),new b(n(d.defaultRepository.rootFolderUrl).send(g))},d.getACL=function(a,c,e){var e=q(e);return e.objectId=a,e.onlyBasicPermissions=!!c,e.cmisselector="acl",new b(m(d.defaultRepository.rootFolderUrl).query(e))};var e;e="undefined"!=typeof module&&module.exports?require("superagent"):window.superagent;var f,g=null,h=null,i=function(){},j=i,k=i,l=function(a,b){var c=e(a,b);return g&&h?c.auth(g,h):c},m=function(a){return l("GET",a)},n=function(a,b){var c=l("POST",a).type("form");return b||(c.send=c.query),c},o=function(a,d,e,f){var g=n(a,!0);if(c){var h=g.type("multipart/form-data").part();e&&(h.set("Content-Disposition",'form-data; name="content"; filename="data"'),f&&h.set("Content-Type",f),h.write(e));for(var i in d)g.part().set("Content-Disposition",'form-data; name="'+i+'"').set("Content-Type","text/plain").write(""+d[i])}else{var j=new FormData;e&&("string"==typeof e&&(e=new Blob([e])),j.append("content",e));for(var i in d)j.append(i,d[i]);g.send(j),delete g.header["Content-Type"]}return new b(g)},p={succinct:!0},q=function(a){var b={};for(var c in p)b[c]=p[c];if(void 0===a)return b;for(c in a)b[c]=a[c];return b},r=function(a,b){var c=0;for(var d in a){b["propertyId["+c+"]"]=d;var e=a[d];if(null!==e&&void 0!==e)if("[object Array]"==Object.prototype.toString.apply(e))for(var f=0;f<e.length;f++)b["propertyValue["+c+"]["+f+"]"]=e[f];else b["propertyValue["+c+"]"]=e;c++}},s=function(a,b){for(var c=0;c<a.length;c++)b["policy["+c+"]"]=a[c]},t=function(a,b,c){var d=0;for(var e in a){c[b+"ACEPrincipal["+d+"]"]=e;for(var f=a[e],g=0;g<f.length;g++)c[b+"ACEPermission["+d+"]["+g+"]"]=a[e][g];d++}},u=function(a,b,c){for(var d=0;d<a.length;d++)c[b+"SecondaryTypeId["+d+"]"]=a[d]};return d},a});