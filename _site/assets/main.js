$(".full img").on("click",function(){$(this).toggleClass("zoom")}),function(n){n.fn.menumaker=function(s){var i=n(this),e=n.extend({title:"Menu",format:"dropdown",sticky:!1},s);return this.each(function(){return i.prepend('<div id="menu-button">'+e.title+"</div>"),n(this).find("#menu-button").on("click",function(){n(this).toggleClass("menu-opened");var s=n(this).next("ul");s.hasClass("open")?s.hide().removeClass("open"):(s.show().addClass("open"),"dropdown"===e.format&&s.find("ul").show())}),i.find("li ul").parent().addClass("has-sub"),multiTg=function(){i.find(".has-sub").prepend('<span class="submenu-button"></span>'),i.find(".submenu-button").on("click",function(){n(this).toggleClass("submenu-opened"),n(this).siblings("ul").hasClass("open")?n(this).siblings("ul").removeClass("open").hide():n(this).siblings("ul").addClass("open").show()})},"multitoggle"===e.format?multiTg():i.addClass("dropdown"),e.sticky===!0&&i.css("position","fixed"),resizeFix=function(){n(window).width()>768&&i.find("ul").show(),n(window).width()<=768&&i.find("ul").hide().removeClass("open")},resizeFix(),n(window).on("resize",resizeFix)})}}(jQuery),function(n){n(document).ready(function(){n(document).ready(function(){n("#cssmenu").menumaker({title:"Menu",format:"multitoggle"}),n("#cssmenu").prepend("<div id='menu-line'></div>");var s,i,e,t,o=0,u=n("#cssmenu #menu-line");t=i=s.width(),e=o=s.position().left,u.css("width",i),u.css("left",o),n("#cssmenu > ul > li").hover(function(){s=n(this),i=s.width(),o=s.position().left,u.css("width",i),u.css("left",o)},function(){u.css("left",e),u.css("width",t)})})})}(jQuery);