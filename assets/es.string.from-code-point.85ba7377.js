import{a6 as i,a7 as v,a8 as d}from"./iframe.e5260eea.js";var s=i,f=v,g=d,m=RangeError,a=String.fromCharCode,e=String.fromCodePoint,u=f([].join),C=!!e&&e.length!=1;s({target:"String",stat:!0,arity:1,forced:C},{fromCodePoint:function(h){for(var t=[],n=arguments.length,o=0,r;n>o;){if(r=+arguments[o++],g(r,1114111)!==r)throw m(r+" is not a valid code point");t[o]=r<65536?a(r):a(((r-=65536)>>10)+55296,r%1024+56320)}return u(t,"")}});
//# sourceMappingURL=es.string.from-code-point.85ba7377.js.map