parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({106:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.conf={comments:{lineComment:"REM"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],folding:{markers:{start:new RegExp("^\\s*(::\\s*|REM\\s+)#region"),end:new RegExp("^\\s*(::\\s*|REM\\s+)#endregion")}}},s=exports.language={defaultToken:"",ignoreCase:!0,tokenPostfix:".bat",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:/call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,symbols:/[=><!~?&|+\-*\/\^;\.,]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/^(\s*)(rem(?:\s.*|))$/,["","comment"]],[/(\@?)(@keywords)(?!\w)/,[{token:"keyword"},{token:"keyword.$2"}]],[/[ \t\r\n]+/,""],[/setlocal(?!\w)/,"keyword.tag-setlocal"],[/endlocal(?!\w)/,"keyword.tag-setlocal"],[/[a-zA-Z_]\w*/,""],[/:\w*/,"metatag"],[/%[^%]+%/,"variable"],[/%%[\w]+(?!\w)/,"variable"],[/[{}()\[\]]/,"@brackets"],[/@symbols/,"delimiter"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"/,"string",'@string."'],[/'/,"string","@string.'"]],string:[[/[^\\"'%]+/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/%[\w ]+%/,"variable"],[/%%[\w]+(?!\w)/,"variable"],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/$/,"string","@popall"]]}};
},{}]},{},[106])
//# sourceMappingURL=bat.bc6c89d2.map