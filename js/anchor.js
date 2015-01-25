/*!
 * AnchorJS
 * https://github.com/bryanbraun/anchorjs/commit/54abd90e660927649b1a050a65e1be318088b2ed
 * Copyright (c) 2014 Bryan Braun; Licensed MIT
 */
function addAnchors(t){"use strict";if(t){if("string"!=typeof t)throw new Error("AnchorJS accepts only strings; you used a "+typeof t)}else t="h1, h2, h3, h4, h5, h6";for(var e=document.querySelectorAll(t),r=0;r<e.length;r++){var n;if(e[r].hasAttribute("id"))n=e[r].getAttribute("id");else{var s=document.body.textContent?"textContent":"innerText",o=e[r][s],a=o.replace(/\s+/g,"-").toLowerCase();e[r].setAttribute("id",a),n=a}var i='<a class="anchorjs-link" href="#'+n+'"><span class="anchorjs-icon"></span></a>';e[r].innerHTML+=i}}
