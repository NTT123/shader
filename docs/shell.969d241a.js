parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({134:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.conf={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}]},r=exports.language={defaultToken:"",ignoreCase:!0,tokenPostfix:".shell",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],builtins:["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"],symbols:/[=><!~?&|+\-*\/\^;\.,]+/,tokenizer:{root:[{include:"@whitespace"},[/[a-zA-Z]\w*/,{cases:{"@keywords":"keyword","@builtins":"type.identifier","@default":""}}],{include:"@strings"},{include:"@parameters"},{include:"@heredoc"},[/[{}\[\]()]/,"@brackets"],[/-+\w+/,"attribute.name"],[/@symbols/,"delimiter"],{include:"@numbers"},[/[,;]/,"delimiter"]],whitespace:[[/\s+/,"white"],[/(^#!.*$)/,"metatag"],[/(^#.*$)/,"comment"]],numbers:[[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+/,"number"]],strings:[[/'/,"string","@stringBody"],[/"/,"string","@dblStringBody"]],stringBody:[[/'/,"string","@popall"],[/./,"string"]],dblStringBody:[[/"/,"string","@popall"],[/./,"string"]],heredoc:[[/(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,["constants","white","string.heredoc.delimiter","string.heredoc","string.heredoc.delimiter"]]],parameters:[[/\$\d+/,"variable.predefined"],[/\$\w+/,"variable"],[/\$[*@#?\-$!0_]/,"variable"],[/\$'/,"variable","@parameterBodyQuote"],[/\$"/,"variable","@parameterBodyDoubleQuote"],[/\$\(/,"variable","@parameterBodyParen"],[/\$\{/,"variable","@parameterBodyCurlyBrace"]],parameterBodyQuote:[[/[^#:%*@\-!_']+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[']/,"variable","@pop"]],parameterBodyDoubleQuote:[[/[^#:%*@\-!_"]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/["]/,"variable","@pop"]],parameterBodyParen:[[/[^#:%*@\-!_)]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[)]/,"variable","@pop"]],parameterBodyCurlyBrace:[[/[^#:%*@\-!_}]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[}]/,"variable","@pop"]]}};
},{}]},{},[134])
//# sourceMappingURL=shell.969d241a.map