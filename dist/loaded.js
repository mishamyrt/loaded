var Loaded=function(){"use strict";var r=/url\(\s*(['"]?)(.*)\1\s*\)/,n=function(n){var e=getComputedStyle(n);if(""!==e.background||""!==e.backgroundImage){var t=e.background.match(r);return t?t[2]:""}return""},e=function(r){var e=[],t=!0,o=!1,a=void 0;try{for(var u,i=r[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var c=u.value;if("IMG"===c.tagName)e.push(c.getAttribute("src"));else{var l=n(c);l&&e.push(l)}}}catch(r){o=!0,a=r}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return e},t=function(r){return new Promise(function(n){var e=new Image;e.onload=n,e.onerror=n,e.src=r})},o=function(r){return new Promise(function(n){var o=Array.from(r.querySelectorAll("*"));o.push(r);var a=e(o);if(0===a.length)n(r);else{var u=[];a.forEach(function(r){u.push(t(r))}),Promise.all(u).then(function(){n(r)})}})},a=t,u=function(r){return new Promise(function(n){var e=setInterval(function(){var t=document.querySelector(r);t&&(clearInterval(e),n(t))},100)})};window.imagesLoaded=o,window.imageLoaded=a,window.nodeLoaded=u;return{}}();
