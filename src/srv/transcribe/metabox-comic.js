!function(){"use strict";!function t(){if("loading"===document.readyState)return document.addEventListener("DOMContentLoaded",t);document.addEventListener("click",function(t){if("img"===t.target.tagName.toLowerCase()){for(var e=t.target;e.tagName&&!e.hasAttribute("data-webcomic-search");)e=e.parentNode;if(e.tagName&&e.hasAttribute("data-webcomic-search")){for(var a=t.target;a.tagName&&!a.hasAttribute("data-id");)a=a.parentNode;if(!a.tagName||!a.hasAttribute("data-id")){if(e.classList.contains("contain"))return e.querySelector("p").style.display=null,e.classList.remove("contain"),void(e.style.height="auto");var r=Number(t.target.getAttribute("width")),i=Number(t.target.getAttribute("height")),n=i/2*(r/i);e.querySelector("p").style.display="none",e.classList.add("contain"),e.style.height=n+"px"}}}}),document.addEventListener("click",function(t){for(var e=t.target;e.tagName&&!e.hasAttribute("data-id");)e=e.parentNode;if(e.tagName&&e.hasAttribute("data-id")){for(var a=t.target;a.tagName&&!a.hasAttribute("data-webcomic-search");)a=a.parentNode;if(a.tagName&&a.hasAttribute("data-webcomic-search")){var r=new FormData,i=new XMLHttpRequest;r.append("action","webcomic_transcript_comic_search"),r.append("post",e.getAttribute("data-id")),i.onreadystatechange=function(){if(4===i.readyState){var t=document.createElement("p"),e="";"true"===i.responseText&&(e=" checked"),t.innerHTML='\n\t\t\t\t<label class="selectit">\n\t\t\t\t\t<input type="hidden" name="webcomic_transcribe">\n\t\t\t\t\t<input type="checkbox" name="webcomic_transcribe" value="1"'+e+">\n\t\t\t\t\t"+webcomicTranscriptL10n.allow+"\n\t\t\t\t</label>\n\t\t\t",a.parentNode.insertBefore(t,a)}},i.open("POST",ajaxurl),i.send(r)}}}),document.addEventListener("click",function(t){if("a"===t.target.tagName.toLowerCase()){for(var e=t.target;e.tagName&&!e.hasAttribute("data-webcomic-search");)e=e.parentNode;e.tagName&&e.hasAttribute("data-webcomic-search")&&(e.parentNode.querySelector("p").parentNode.removeChild(e.parentNode.querySelector("p")),e.classList.remove("contain"),e.style.height="auto")}})}()}();
