!function(){"use strict";!function t(){if("loading"===document.readyState)return document.addEventListener("DOMContentLoaded",t);function e(t,a,n){var i=document.querySelector('[name="'+t.getAttribute("data-input")+'"]'),r=new FormData,o=new XMLHttpRequest,c=i.value.split(",");i.value=a.toString(),c.toString()!==a.toString()&&i.dispatchEvent(new Event("change",{bubbles:!0})),r.append("action","webcomic_update_media_manager"),r.append("media",a),o.onreadystatechange=function(){4===o.readyState&&(a=a.map(function(t){return parseInt(t)}),function(t,a,n,i){t.innerHTML="";for(var r=0;r<i.length;r++)t.innerHTML+=(o=i[r].id,c=i[r].media,'\n\t\t\t<div data-id="'+o+'">\n\t\t\t\t'+c+'\n\t\t\t\t<a class="dashicons dashicons-no" style="cursor:pointer">\n\t\t\t\t\t<span class="screen-reader-text">'+webcomicMediaManagerL10n.remove+"</span>\n\t\t\t\t</a>\n\t\t\t</div>");var o,c;t.innerHTML+=(s=i,l=n,m="dashicons-format-image",p=webcomicMediaManagerL10n.add,g="",l&&(m="dashicons-images-alt2"),s.length&&(p=webcomicMediaManagerL10n.change),g='\n\t\t\t<p>\n\t\t\t\t<button type="button" class="button button-large">\n\t\t\t\t\t<span class="dashicons '+m+'"></span> '+p+"\n\t\t\t\t</button>\n\t\t\t</p>",1<s.length&&l&&(g+='<p class="description">'+webcomicMediaManagerL10n.drag+"</p>"),g),n&&(d=t,u=n,jQuery(d).sortable({items:"div",start:function(t,e){e.placeholder.height(e.helper.outerHeight())},stop:function(){e(d,jQuery(d).sortable("toArray",{attribute:"data-id"}),u)}}));var d,u;var s,l,m,p,g;t.querySelector("button").addEventListener("click",function(){var a,i;a=t,i=n,wp.media.frames.webcomicMedia=wp.media({title:webcomicMediaManagerL10n.title,button:{text:webcomicMediaManagerL10n.update},library:{type:"image"},multiple:i}).on("select",function(){for(var t=[],n=wp.media.frames.webcomicMedia.state().get("selection"),r=0;r<n.length;r++)t.push(n.models[r].id);e(a,t,i)}).open()});for(var b=t.querySelectorAll("a"),f=function(i){b[i].addEventListener("click",function(r){r.preventDefault();var o=a.indexOf(Number(b[i].parentNode.getAttribute("data-id")));a.splice(o,1),e(t,a,n)})},v=0;v<b.length;v++)f(v)}(t,a,n,JSON.parse(o.responseText)))},o.open("POST",ajaxurl),o.send(r)}!function(t){for(var a=0;a<t.length;a++)e(t[a],document.querySelector('[name="'+t[a].getAttribute("data-input")+'"]').value.split(","),Boolean(t[a].getAttribute("data-webcomic-media-manager")))}(document.querySelectorAll("[data-webcomic-media-manager]")),jQuery(document).on("widget-added widget-updated",function(t,a){if(!a[0].id.match(/_mgsisk_webcomic_/))return;for(var n=a[0].querySelectorAll("[data-webcomic-media-manager]"),i=0;i<n.length;i++)e(n[i],document.querySelector('[name="'+n[i].getAttribute("data-input")+'"]').value.split(","),Boolean(n[i].getAttribute("data-webcomic-media-manager")))})}()}();
