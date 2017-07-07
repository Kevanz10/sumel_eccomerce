!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("8",tinymce.util.Tools.resolve),g("1",["8"],function(a){return a("tinymce.html.Node")}),g("2",["8"],function(a){return a("tinymce.PluginManager")}),g("3",["8"],function(a){return a("tinymce.util.Tools")}),g("9",["8"],function(a){return a("tinymce.html.Writer")}),g("a",["8"],function(a){return a("tinymce.html.SaxParser")}),g("b",["8"],function(a){return a("tinymce.html.Schema")}),g("5",["3","9","a","b"],function(a,b,c,d){var e=function(a,e){if(a.settings.media_filter_html===!1)return e;var f,g=new b;return new c({validate:!1,allow_conditional_comments:!1,special:"script,noscript",comment:function(a){g.comment(a)},cdata:function(a){g.cdata(a)},text:function(a,b){g.text(a,b)},start:function(b,c,d){if(f=!0,"script"!==b&&"noscript"!==b){for(var e=0;e<c.length;e++){if(0===c[e].name.indexOf("on"))return;"style"===c[e].name&&(c[e].value=a.dom.serializeStyle(a.dom.parseStyle(c[e].value),b))}g.start(b,c,d),f=!1}},end:function(a){f||g.end(a)}},new d({})).parse(e),g.getContent()};return{sanitize:e}}),g("c",[],function(){var a=function(a,b){if(a)for(var c=0;c<a.length;c++)if(b.indexOf(a[c].filter)!==-1)return a[c]};return{getVideoScriptMatch:a}}),g("d",["8"],function(a){return a("tinymce.Env")}),g("4",["5","c","1","d"],function(a,b,c,d){var e=function(a,b){var e,f=b.name;return e=new c("img",1),e.shortEnded=!0,g(a,b,e),e.attr({width:b.attr("width")||"300",height:b.attr("height")||("audio"===f?"30":"150"),style:b.attr("style"),src:d.transparentSrc,"data-mce-object":f,"class":"mce-object mce-object-"+f}),e},f=function(a,b){var d,e,f,h=b.name;return d=new c("span",1),d.attr({contentEditable:"false",style:b.attr("style"),"data-mce-object":h,"class":"mce-preview-object mce-object-"+h}),g(a,b,d),e=new c(h,1),e.attr({src:b.attr("src"),allowfullscreen:b.attr("allowfullscreen"),width:b.attr("width")||"300",height:b.attr("height")||("audio"===h?"30":"150"),frameborder:"0"}),f=new c("span",1),f.attr("class","mce-shim"),d.append(e),d.append(f),d},g=function(b,c,d){var e,f,g,h,i;for(g=c.attributes,h=g.length;h--;)e=g[h].name,f=g[h].value,"width"!==e&&"height"!==e&&"style"!==e&&("data"!==e&&"src"!==e||(f=b.convertURL(f,e)),d.attr("data-mce-p-"+e,f));i=c.firstChild&&c.firstChild.value,i&&(d.attr("data-mce-html",escape(a.sanitize(b,i))),d.firstChild=null)},h=function(a){for(;a=a.parent;)if(a.attr("data-ephox-embed-iri"))return!0;return!1},i=function(a){return function(c){for(var g,i,j=c.length;j--;)g=c[j],g.parent&&(g.parent.attr("data-mce-object")||("script"!==g.name||(i=b.getVideoScriptMatch(a.settings.media_scripts,g.attr("src"))))&&(i&&(i.width&&g.attr("width",i.width.toString()),i.height&&g.attr("height",i.height.toString())),"iframe"===g.name&&a.settings.media_live_embeds!==!1&&d.ceFalse?h(g)||g.replace(f(a,g)):h(g)||g.replace(e(a,g))))}};return{createPreviewIframeNode:f,createPlaceholderNode:e,placeHolderConverter:i}}),g("e",["8"],function(a){return a("tinymce.dom.DOMUtils")}),g("f",[],function(){var a=function(a){return a.replace(/px$/,"")},b=function(a){return/^[0-9.]+$/.test(a)?a+"px":a},c=function(b){return function(c){return c?a(c.style[b]):""}},d=function(a){return function(c,d){c&&(c.style[a]=b(d))}};return{getMaxWidth:c("maxWidth"),getMaxHeight:c("maxHeight"),setMaxWidth:d("maxWidth"),setMaxHeight:d("maxHeight")}}),g("6",["9","a","b","e","f"],function(a,b,c,d,e){var f=d.DOM,g=function(a,b){var c,d,e,f;for(c in b)if(e=""+b[c],a.map[c])for(d=a.length;d--;)f=a[d],f.name===c&&(e?(a.map[c]=e,f.value=e):(delete a.map[c],a.splice(d,1)));else e&&(a.push({name:c,value:e}),a.map[c]=e)},h=function(c){var d=new a,e=new b(d);return e.parse(c),d.getContent()},i=function(d,e,f){var h,i=new a,j=0;return new b({validate:!1,allow_conditional_comments:!0,special:"script,noscript",comment:function(a){i.comment(a)},cdata:function(a){i.cdata(a)},text:function(a,b){i.text(a,b)},start:function(a,b,c){switch(a){case"video":case"object":case"embed":case"img":case"iframe":void 0!==e.height&&void 0!==e.width&&g(b,{width:e.width,height:e.height})}if(f)switch(a){case"video":g(b,{poster:e.poster,src:""}),e.source2&&g(b,{src:""});break;case"iframe":g(b,{src:e.source1});break;case"source":if(j++,j<=2&&(g(b,{src:e["source"+j],type:e["source"+j+"mime"]}),!e["source"+j]))return;break;case"img":if(!e.poster)return;h=!0}i.start(a,b,c)},end:function(a){if("video"===a&&f)for(var b=1;b<=2;b++)if(e["source"+b]){var c=[];c.map={},j<b&&(g(c,{src:e["source"+b],type:e["source"+b+"mime"]}),i.start("source",c,!0))}if(e.poster&&"object"===a&&f&&!h){var d=[];d.map={},g(d,{src:e.poster,width:e.width,height:e.height}),i.start("img",d,!0)}i.end(a)}},new c({})).parse(d),i.getContent()},j=function(a){var b=f.createFragment(a);return""!==f.getAttrib(b.firstChild,"data-ephox-embed-iri")},k=function(a,b){var c=f.createFragment(a),d=c.firstChild;return e.setMaxWidth(d,b.width),e.setMaxHeight(d,b.height),h(d.outerHTML)},l=function(a,b,c){return j(a)?k(a,b):i(a,b,c)};return{updateHtml:l}}),g("g",["8"],function(a){return a("tinymce.util.Delay")}),g("h",["3","a","b","e","c","f"],function(a,b,c,d,e,f){var g=d.DOM,h=function(a){return g.getAttrib(a,"data-ephox-embed-iri")},i=function(a){var b=g.createFragment(a);return""!==h(b.firstChild)},j=function(c,d){var f={};return new b({validate:!1,allow_conditional_comments:!0,special:"script,noscript",start:function(b,d){if(f.source1||"param"!==b||(f.source1=d.map.movie),"iframe"!==b&&"object"!==b&&"embed"!==b&&"video"!==b&&"audio"!==b||(f.type||(f.type=b),f=a.extend(d.map,f)),"script"===b){var g=e.getVideoScriptMatch(c,d.map.src);if(!g)return;f={type:"script",source1:d.map.src,width:g.width,height:g.height}}"source"===b&&(f.source1?f.source2||(f.source2=d.map.src):f.source1=d.map.src),"img"!==b||f.poster||(f.poster=d.map.src)}}).parse(d),f.source1=f.source1||f.src||f.data,f.source2=f.source2||"",f.poster=f.poster||"",f},k=function(a){var b=g.createFragment(a),c=b.firstChild;return{type:"ephox-embed-iri",source1:h(c),source2:"",poster:"",width:f.getMaxWidth(c),height:f.getMaxHeight(c)}},l=function(a,b){return i(b)?k(b):j(a,b)};return{htmlToData:l}}),g("m",[],function(){var a=function(a){var b={mp3:"audio/mpeg",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"},c=a.toLowerCase().split(".").pop(),d=b[c];return d?d:""};return{guess:a}}),g("n",[],function(){var a=[{regex:/youtu\.be\/([\w\-.]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\-_]+(?:\?.+)?)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowfullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowfullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0}];return{urlPatterns:a}}),g("k",["m","h","n","c","6","3"],function(a,b,c,d,e,f){var g=function(g,h){var i="",j=f.extend({},h);if(!j.source1&&(f.extend(j,b.htmlToData(g.settings.media_scripts,j.embed)),!j.source1))return"";if(j.source2||(j.source2=""),j.poster||(j.poster=""),j.source1=g.convertURL(j.source1,"source"),j.source2=g.convertURL(j.source2,"source"),j.source1mime=a.guess(j.source1),j.source2mime=a.guess(j.source2),j.poster=g.convertURL(j.poster,"poster"),f.each(c.urlPatterns,function(a){var b,c,d=a.regex.exec(j.source1);if(d){for(c=a.url,b=0;d[b];b++)c=c.replace("$"+b,function(){return d[b]});j.source1=c,j.type=a.type,j.allowFullscreen=a.allowFullscreen,j.width=j.width||a.w,j.height=j.height||a.h}}),j.embed)i=e.updateHtml(j.embed,j,!0);else{var k=d.getVideoScriptMatch(g.settings.media_scripts,j.source1);if(k&&(j.type="script",j.width=k.width,j.height=k.height),j.width=j.width||300,j.height=j.height||150,f.each(j,function(a,b){j[b]=g.dom.encode(a)}),"iframe"===j.type){var l=j.allowFullscreen?' allowFullscreen="1"':"";i+='<iframe src="'+j.source1+'" width="'+j.width+'" height="'+j.height+'"'+l+"></iframe>"}else"application/x-shockwave-flash"===j.source1mime?(i+='<object data="'+j.source1+'" width="'+j.width+'" height="'+j.height+'" type="application/x-shockwave-flash">',j.poster&&(i+='<img src="'+j.poster+'" width="'+j.width+'" height="'+j.height+'" />'),i+="</object>"):j.source1mime.indexOf("audio")!==-1?g.settings.audio_template_callback?i=g.settings.audio_template_callback(j):i+='<audio controls="controls" src="'+j.source1+'">'+(j.source2?'\n<source src="'+j.source2+'"'+(j.source2mime?' type="'+j.source2mime+'"':"")+" />\n":"")+"</audio>":"script"===j.type?i+='<script src="'+j.source1+'"></script>':i=g.settings.video_template_callback?g.settings.video_template_callback(j):'<video width="'+j.width+'" height="'+j.height+'"'+(j.poster?' poster="'+j.poster+'"':"")+' controls="controls">\n<source src="'+j.source1+'"'+(j.source1mime?' type="'+j.source1mime+'"':"")+" />\n"+(j.source2?'<source src="'+j.source2+'"'+(j.source2mime?' type="'+j.source2mime+'"':"")+" />\n":"")+"</video>"}return i};return{dataToHtml:g}}),g("l",["8"],function(a){return a("tinymce.util.Promise")}),g("i",["k","l"],function(a,b){var c=function(a,c,d){var e={};return new b(function(b,f){var g=function(d){return d.html&&(e[a.source1]=d),b({url:a.source1,html:d.html?d.html:c(a)})};e[a.source1]?g(e[a.source1]):d({url:a.source1},g,f)})},d=function(a,c){return new b(function(b){b({html:c(a),url:a.source1})})},e=function(b){return function(c){return a.dataToHtml(b,c)}},f=function(a,b){var f=a.settings.media_url_resolver;return f?c(b,e(a),f):d(b,e(a))};return{getEmbedHtml:f}}),g("j",[],function(){var a=function(a,b){a.state.set("oldVal",a.value()),b.state.set("oldVal",b.value())},b=function(a,b){var c=a.find("#width")[0],d=a.find("#height")[0],e=a.find("#constrain")[0];c&&d&&e&&b(c,d,e.checked())},c=function(b,c,d){var e=b.state.get("oldVal"),f=c.state.get("oldVal"),g=b.value(),h=c.value();d&&e&&f&&g&&h&&(g!==e?(h=Math.round(g/e*h),isNaN(h)||c.value(h)):(g=Math.round(h/f*g),isNaN(g)||b.value(g))),a(b,c)},d=function(c){b(c,a)},e=function(a){b(a,c)},f=function(a){var b=function(){a(function(a){e(a)})};return{type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:5,onchange:b,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:5,onchange:b,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}};return{createUi:f,syncSize:d,updateSize:e}}),g("7",["g","h","6","i","f","3","d","j"],function(a,b,c,d,e,f,g,h){var i=g.ie&&g.ie<=8?"onChange":"onInput",j=function(a){return function(b){var c=b&&b.msg?"Media embed handler error: "+b.msg:"Media embed handler threw unknown error.";a.notificationManager.open({type:"error",text:c})}},k=function(a){var c=a.selection.getNode(),d=c.getAttribute("data-ephox-embed-iri");return d?{source1:d,"data-ephox-embed-iri":d,width:e.getMaxWidth(c),height:e.getMaxHeight(c)}:c.getAttribute("data-mce-object")?b.htmlToData(a.settings.media_scripts,a.serializer.serialize(c,{selection:!0})):{}},l=function(a){var b=a.selection.getNode();if(b.getAttribute("data-mce-object")||b.getAttribute("data-ephox-embed-iri"))return a.selection.getContent()},m=function(a,c){return function(d){var e=d.html,g=a.find("#embed")[0],i=f.extend(b.htmlToData(c.settings.media_scripts,e),{source1:d.url});a.fromJSON(i),g&&(g.value(e),h.updateSize(a))}},n=function(a,b){var c,d,e=a.dom.select("img[data-mce-object]");for(c=0;c<b.length;c++)for(d=e.length-1;d>=0;d--)b[c]===e[d]&&e.splice(d,1);a.selection.select(e[0])},o=function(a,b){var c=a.dom.select("img[data-mce-object]");a.insertContent(b),n(a,c),a.nodeChanged()},p=function(a,b){var e=a.toJSON();e.embed=c.updateHtml(e.embed,e),e.embed?o(b,e.embed):d.getEmbedHtml(b,e).then(function(a){o(b,a.html)})["catch"](j(b))},q=function(a,b){f.each(b,function(b,c){a.find("#"+c).value(b)})},r=function(a){var e,g,n=[{name:"source1",type:"filepicker",filetype:"media",size:40,autofocus:!0,label:"Source",onpaste:function(){setTimeout(function(){d.getEmbedHtml(a,e.toJSON()).then(m(e,a))["catch"](j(a))},1)},onchange:function(b){d.getEmbedHtml(a,e.toJSON()).then(m(e,a))["catch"](j(a)),q(e,b.meta)},onbeforecall:function(a){a.meta=e.toJSON()}}],o=[],r=function(a){a(e),g=e.toJSON(),e.find("#embed").value(c.updateHtml(g.embed,g))};if(a.settings.media_alt_source!==!1&&o.push({name:"source2",type:"filepicker",filetype:"media",size:40,label:"Alternative source"}),a.settings.media_poster!==!1&&o.push({name:"poster",type:"filepicker",filetype:"image",size:40,label:"Poster"}),a.settings.media_dimensions!==!1){var s=h.createUi(r);n.push(s)}g=k(a);var t={id:"mcemediasource",type:"textbox",flex:1,name:"embed",value:l(a),multiline:!0,rows:5,label:"Source"},u=function(){g=f.extend({},b.htmlToData(a.settings.media_scripts,this.value())),this.parent().parent().fromJSON(g)};t[i]=u,e=a.windowManager.open({title:"Insert/edit media",data:g,bodyType:"tabpanel",body:[{title:"General",type:"form",items:n},{title:"Embed",type:"container",layout:"flex",direction:"column",align:"stretch",padding:10,spacing:10,items:[{type:"label",text:"Paste your embed code below:",forId:"mcemediasource"},t]},{title:"Advanced",type:"form",items:o}],onSubmit:function(){h.updateSize(e),p(e,a)}}),h.syncSize(e)};return{showDialog:r}}),g("0",["1","2","3","4","5","6","7"],function(a,b,c,d,e,f,g){var h=function(b){b.on("ResolveName",function(a){var b;1===a.target.nodeType&&(b=a.target.getAttribute("data-mce-object"))&&(a.name=b)}),b.on("preInit",function(){var f=b.schema.getSpecialElements();c.each("video audio iframe object".split(" "),function(a){f[a]=new RegExp("</"+a+"[^>]*>","gi")});var g=b.schema.getBoolAttrs();c.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(a){g[a]={}}),b.parser.addNodeFilter("iframe,video,audio,object,embed,script",d.placeHolderConverter(b)),b.serializer.addAttributeFilter("data-mce-object",function(c,d){for(var f,g,h,i,j,k,l,m,n=c.length;n--;)if(f=c[n],f.parent){for(l=f.attr(d),g=new a(l,1),"audio"!==l&&"script"!==l&&(m=f.attr("class"),m&&m.indexOf("mce-preview-object")!==-1?g.attr({width:f.firstChild.attr("width"),height:f.firstChild.attr("height")}):g.attr({width:f.attr("width"),height:f.attr("height")})),g.attr({style:f.attr("style")}),i=f.attributes,h=i.length;h--;){var o=i[h].name;0===o.indexOf("data-mce-p-")&&g.attr(o.substr(11),i[h].value)}"script"===l&&g.attr("type","text/javascript"),j=f.attr("data-mce-html"),j&&(k=new a("#text",3),k.raw=!0,k.value=e.sanitize(b,unescape(j)),g.append(k)),f.replace(g)}})}),b.on("click keyup",function(){var a=b.selection.getNode();a&&b.dom.hasClass(a,"mce-preview-object")&&b.dom.getAttrib(a,"data-mce-selected")&&a.setAttribute("data-mce-selected","2")}),b.on("ObjectSelected",function(a){var b=a.target.getAttribute("data-mce-object");"audio"!==b&&"script"!==b||a.preventDefault()}),b.on("objectResized",function(a){var b,c=a.target;c.getAttribute("data-mce-object")&&(b=c.getAttribute("data-mce-html"),b&&(b=unescape(b),c.setAttribute("data-mce-html",escape(f.updateHtml(b,{width:a.width,height:a.height})))))}),this.showDialog=function(){g.showDialog(b)},b.addButton("media",{tooltip:"Insert/edit media",onclick:this.showDialog,stateSelector:["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"]}),b.addMenuItem("media",{icon:"media",text:"Media",onclick:this.showDialog,context:"insert",prependToContext:!0}),b.on("setContent",function(){b.$("span.mce-preview-object").each(function(a,c){var d=b.$(c);0===d.find("span.mce-shim",c).length&&d.append('<span class="mce-shim"></span>')})}),b.addCommand("mceMedia",this.showDialog)};return b.add("media",h),function(){}}),d("0")()}();
