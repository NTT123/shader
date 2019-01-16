parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"4xK5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.language=exports.conf=void 0;var e={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:"(",close:")",notIn:["string"]},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]}],folding:{markers:{start:new RegExp("^\\s*(#|//)region\\b"),end:new RegExp("^\\s*(#|//)endregion\\b")}}};exports.conf=e;var t={defaultToken:"",tokenPostfix:"",tokenizer:{root:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.root"}],[/<!DOCTYPE/,"metatag.html","@doctype"],[/<!--/,"comment.html","@comment"],[/(<)(\w+)(\/>)/,["delimiter.html","tag.html","delimiter.html"]],[/(<)(script)/,["delimiter.html",{token:"tag.html",next:"@script"}]],[/(<)(style)/,["delimiter.html",{token:"tag.html",next:"@style"}]],[/(<)([:\w]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/(<\/)(\w+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/</,"delimiter.html"],[/[^<]+/]],doctype:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.comment"}],[/[^>]+/,"metatag.content.html"],[/>/,"metatag.html","@pop"]],comment:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.comment"}],[/-->/,"comment.html","@pop"],[/[^-]+/,"comment.content.html"],[/./,"comment.content.html"]],otherTag:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.otherTag"}],[/\/?>/,"delimiter.html","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],script:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.script"}],[/type/,"attribute.name","@scriptAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.text/javascript",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],scriptAfterType:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.scriptAfterType"}],[/=/,"delimiter","@scriptAfterTypeEquals"],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.text/javascript",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.scriptAfterTypeEquals"}],[/"([^"]*)"/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.text/javascript",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptWithCustomType:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.scriptWithCustomType.$S2"}],[/>/,{token:"delimiter.html",next:"@scriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInEmbeddedState.scriptEmbedded.$S2",nextEmbedded:"@pop"}],[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],style:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.style"}],[/type/,"attribute.name","@styleAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter.html",next:"@styleEmbedded.text/css",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,["delimiter.html","tag.html",{token:"delimiter.html",next:"@pop"}]]],styleAfterType:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.styleAfterType"}],[/=/,"delimiter","@styleAfterTypeEquals"],[/>/,{token:"delimiter.html",next:"@styleEmbedded.text/css",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleAfterTypeEquals:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.styleAfterTypeEquals"}],[/"([^"]*)"/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/>/,{token:"delimiter.html",next:"@styleEmbedded.text/css",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleWithCustomType:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInSimpleState.styleWithCustomType.$S2"}],[/>/,{token:"delimiter.html",next:"@styleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleEmbedded:[[/<\?((php)|=)?/,{token:"@rematch",switchTo:"@phpInEmbeddedState.styleEmbedded.$S2",nextEmbedded:"@pop"}],[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}]],phpInSimpleState:[[/<\?((php)|=)?/,"metatag.php"],[/\?>/,{token:"metatag.php",switchTo:"@$S2.$S3"}],{include:"phpRoot"}],phpInEmbeddedState:[[/<\?((php)|=)?/,"metatag.php"],[/\?>/,{token:"metatag.php",switchTo:"@$S2.$S3",nextEmbedded:"$S3"}],{include:"phpRoot"}],phpRoot:[[/[a-zA-Z_]\w*/,{cases:{"@phpKeywords":{token:"keyword.php"},"@phpCompileTimeConstants":{token:"constant.php"},"@default":"identifier.php"}}],[/[$a-zA-Z_]\w*/,{cases:{"@phpPreDefinedVariables":{token:"variable.predefined.php"},"@default":"variable.php"}}],[/[{}]/,"delimiter.bracket.php"],[/[\[\]]/,"delimiter.array.php"],[/[()]/,"delimiter.parenthesis.php"],[/[ \t\r\n]+/],[/#/,"comment.php","@phpLineComment"],[/\/\//,"comment.php","@phpLineComment"],[/\/\*/,"comment.php","@phpComment"],[/"/,"string.php","@phpDoubleQuoteString"],[/'/,"string.php","@phpSingleQuoteString"],[/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,\@]/,"delimiter.php"],[/\d*\d+[eE]([\-+]?\d+)?/,"number.float.php"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float.php"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F]/,"number.hex.php"],[/0[0-7']*[0-7]/,"number.octal.php"],[/0[bB][0-1']*[0-1]/,"number.binary.php"],[/\d[\d']*/,"number.php"],[/\d/,"number.php"]],phpComment:[[/\*\//,"comment.php","@pop"],[/[^*]+/,"comment.php"],[/./,"comment.php"]],phpLineComment:[[/\?>/,{token:"@rematch",next:"@pop"}],[/.$/,"comment.php","@pop"],[/[^?]+$/,"comment.php","@pop"],[/[^?]+/,"comment.php"],[/./,"comment.php"]],phpDoubleQuoteString:[[/[^\\"]+/,"string.php"],[/@escapes/,"string.escape.php"],[/\\./,"string.escape.invalid.php"],[/"/,"string.php","@pop"]],phpSingleQuoteString:[[/[^\\']+/,"string.php"],[/@escapes/,"string.escape.php"],[/\\./,"string.escape.invalid.php"],[/'/,"string.php","@pop"]]},phpKeywords:["abstract","and","array","as","break","callable","case","catch","cfunction","class","clone","const","continue","declare","default","do","else","elseif","enddeclare","endfor","endforeach","endif","endswitch","endwhile","extends","false","final","for","foreach","function","global","goto","if","implements","interface","instanceof","insteadof","namespace","new","null","object","old_function","or","private","protected","public","resource","static","switch","throw","trait","try","true","use","var","while","xor","die","echo","empty","exit","eval","include","include_once","isset","list","require","require_once","return","print","unset","yield","__construct"],phpCompileTimeConstants:["__CLASS__","__DIR__","__FILE__","__LINE__","__NAMESPACE__","__METHOD__","__FUNCTION__","__TRAIT__"],phpPreDefinedVariables:["$GLOBALS","$_SERVER","$_GET","$_POST","$_FILES","$_REQUEST","$_SESSION","$_ENV","$_COOKIE","$php_errormsg","$HTTP_RAW_POST_DATA","$http_response_header","$argc","$argv"],escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/};exports.language=t;
},{}]},{},["4xK5"], null)
//# sourceMappingURL=/php.cd4010cd.map