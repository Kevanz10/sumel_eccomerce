!function(){"use strict";var t=jQuery.fn.revolution,e=t.is_mobile(),i={alias:"Navigation Min JS",name:"revolution.extensions.navigation.min.js",min_core:"5.3",version:"1.3.2"};jQuery.extend(!0,t,{hideUnHideNav:function(t){var e=t.c.width(),i=t.navigation.arrows,a=t.navigation.bullets,n=t.navigation.thumbnails,r=t.navigation.tabs;p(i)&&T(t.c.find(".tparrows"),i.hide_under,e,i.hide_over),p(a)&&T(t.c.find(".tp-bullets"),a.hide_under,e,a.hide_over),p(n)&&T(t.c.parent().find(".tp-thumbs"),n.hide_under,e,n.hide_over),p(r)&&T(t.c.parent().find(".tp-tabs"),r.hide_under,e,r.hide_over),y(t)},resizeThumbsTabs:function(t,e){if(t.navigation&&t.navigation.tabs.enable||t.navigation&&t.navigation.thumbnails.enable){var i=(jQuery(window).width()-480)/500,a=new punchgs.TimelineLite,r=t.navigation.tabs,s=t.navigation.thumbnails,o=t.navigation.bullets;if(a.pause(),i=i>1?1:i<0?0:i,p(r)&&(e||r.width>r.min_width)&&n(i,a,t.c,r,t.slideamount,"tab"),p(s)&&(e||s.width>s.min_width)&&n(i,a,t.c,s,t.slideamount,"thumb"),p(o)&&e){var d=t.c.find(".tp-bullets");d.find(".tp-bullet").each(function(t){var e=jQuery(this),i=t+1,a=e.outerWidth()+parseInt(void 0===o.space?0:o.space,0),n=e.outerHeight()+parseInt(void 0===o.space?0:o.space,0);"vertical"===o.direction?(e.css({top:(i-1)*n+"px",left:"0px"}),d.css({height:(i-1)*n+e.outerHeight(),width:e.outerWidth()})):(e.css({left:(i-1)*a+"px",top:"0px"}),d.css({width:(i-1)*a+e.outerWidth(),height:e.outerHeight()}))})}a.play(),y(t)}return!0},updateNavIndexes:function(e){function i(t){a.find(t).lenght>0&&a.find(t).each(function(t){jQuery(this).data("liindex",t)})}var a=e.c;i(".tp-tab"),i(".tp-bullet"),i(".tp-thumb"),t.resizeThumbsTabs(e,!0),t.manageNavigation(e)},manageNavigation:function(e){var i=t.getHorizontalOffset(e.c.parent(),"left"),n=t.getHorizontalOffset(e.c.parent(),"right");p(e.navigation.bullets)&&("fullscreen"!=e.sliderLayout&&"fullwidth"!=e.sliderLayout&&(e.navigation.bullets.h_offset_old=void 0===e.navigation.bullets.h_offset_old?e.navigation.bullets.h_offset:e.navigation.bullets.h_offset_old,e.navigation.bullets.h_offset="center"===e.navigation.bullets.h_align?e.navigation.bullets.h_offset_old+i/2-n/2:e.navigation.bullets.h_offset_old+i-n),b(e.c.find(".tp-bullets"),e.navigation.bullets,e)),p(e.navigation.thumbnails)&&b(e.c.parent().find(".tp-thumbs"),e.navigation.thumbnails,e),p(e.navigation.tabs)&&b(e.c.parent().find(".tp-tabs"),e.navigation.tabs,e),p(e.navigation.arrows)&&("fullscreen"!=e.sliderLayout&&"fullwidth"!=e.sliderLayout&&(e.navigation.arrows.left.h_offset_old=void 0===e.navigation.arrows.left.h_offset_old?e.navigation.arrows.left.h_offset:e.navigation.arrows.left.h_offset_old,e.navigation.arrows.left.h_offset="right"===e.navigation.arrows.left.h_align?e.navigation.arrows.left.h_offset_old+n:e.navigation.arrows.left.h_offset_old+i,e.navigation.arrows.right.h_offset_old=void 0===e.navigation.arrows.right.h_offset_old?e.navigation.arrows.right.h_offset:e.navigation.arrows.right.h_offset_old,e.navigation.arrows.right.h_offset="right"===e.navigation.arrows.right.h_align?e.navigation.arrows.right.h_offset_old+n:e.navigation.arrows.right.h_offset_old+i),b(e.c.find(".tp-leftarrow.tparrows"),e.navigation.arrows.left,e),b(e.c.find(".tp-rightarrow.tparrows"),e.navigation.arrows.right,e)),p(e.navigation.thumbnails)&&a(e.c.parent().find(".tp-thumbs"),e.navigation.thumbnails),p(e.navigation.tabs)&&a(e.c.parent().find(".tp-tabs"),e.navigation.tabs)},createNavigation:function(n,r){if("stop"===t.compare_version(i).check)return!1;var d=n.parent(),u=r.navigation.arrows,f=r.navigation.bullets,m=r.navigation.thumbnails,b=r.navigation.tabs,_=p(u),y=p(f),T=p(m),S=p(b);s(n,r),o(n,r),_&&v(n,u,r),r.li.each(function(t){var e=jQuery(r.li[r.li.length-1-t]),i=jQuery(this);y&&(r.navigation.bullets.rtl?w(n,f,e,r):w(n,f,i,r)),T&&(r.navigation.thumbnails.rtl?x(n,m,e,"tp-thumb",r):x(n,m,i,"tp-thumb",r)),S&&(r.navigation.tabs.rtl?x(n,b,e,"tp-tab",r):x(n,b,i,"tp-tab",r))}),n.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){var t=0==n.find(".next-revslide").length?n.find(".active-revslide").data("index"):n.find(".next-revslide").data("index");n.find(".tp-bullet").each(function(){var e=jQuery(this);e.data("liref")===t?e.addClass("selected"):e.removeClass("selected")}),d.find(".tp-thumb, .tp-tab").each(function(){var e=jQuery(this);e.data("liref")===t?(e.addClass("selected"),e.hasClass("tp-tab")?a(d.find(".tp-tabs"),b):a(d.find(".tp-thumbs"),m)):e.removeClass("selected")});var e=0,i=!1;r.thumbs&&jQuery.each(r.thumbs,function(a,n){e=!1===i?a:e,i=n.id===t||a===t||i});var s=e>0?e-1:r.slideamount-1,o=e+1==r.slideamount?0:e+1;if(!0===u.enable){var l=u.tmp;if(void 0!=r.thumbs[s]&&jQuery.each(r.thumbs[s].params,function(t,e){l=l.replace(e.from,e.to)}),u.left.j.html(l),l=u.tmp,o>r.slideamount)return;jQuery.each(r.thumbs[o].params,function(t,e){l=l.replace(e.from,e.to)}),u.right.j.html(l),punchgs.TweenLite.set(u.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+r.thumbs[s].src+")"}),punchgs.TweenLite.set(u.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+r.thumbs[o].src+")"})}}),h(u),h(f),h(m),h(b),d.on("mouseenter mousemove",function(){d.hasClass("tp-mouseover")||(d.addClass("tp-mouseover"),punchgs.TweenLite.killDelayedCallsTo(g),_&&u.hide_onleave&&g(d.find(".tparrows"),u,"show"),y&&f.hide_onleave&&g(d.find(".tp-bullets"),f,"show"),T&&m.hide_onleave&&g(d.find(".tp-thumbs"),m,"show"),S&&b.hide_onleave&&g(d.find(".tp-tabs"),b,"show"),e&&(d.removeClass("tp-mouseover"),c(n,r)))}),d.on("mouseleave",function(){d.removeClass("tp-mouseover"),c(n,r)}),_&&u.hide_onleave&&g(d.find(".tparrows"),u,"hide",0),y&&f.hide_onleave&&g(d.find(".tp-bullets"),f,"hide",0),T&&m.hide_onleave&&g(d.find(".tp-thumbs"),m,"hide",0),S&&b.hide_onleave&&g(d.find(".tp-tabs"),b,"hide",0),T&&l(d.find(".tp-thumbs"),r),S&&l(d.find(".tp-tabs"),r),"carousel"===r.sliderType&&l(n,r,!0),"on"==r.navigation.touch.touchenabled&&l(n,r,"swipebased")}});var a=function(t,e){var i=(t.hasClass("tp-thumbs"),t.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),a=t.hasClass("tp-thumbs")?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",n=t.hasClass("tp-thumbs")?".tp-thumb":".tp-tab",r=t.find(i),s=r.find(a),o=e.direction,d="vertical"===o?r.find(n).first().outerHeight(!0)+e.space:r.find(n).first().outerWidth(!0)+e.space,l="vertical"===o?r.height():r.width(),h=parseInt(r.find(n+".selected").data("liindex"),0),p=l/d,u="vertical"===o?r.height():r.width(),c=0-h*d,g="vertical"===o?s.height():s.width(),v=c<0-(g-u)?0-(g-u):v>0?0:c,f=s.data("offset");p>2&&(v=c-(f+d)<=0?c-(f+d)<0-d?f:v+d:v,v=c-d+f+l<d&&c+(Math.round(p)-2)*d<f?c+(Math.round(p)-2)*d:v),v=v<0-(g-u)?0-(g-u):v>0?0:v,"vertical"!==o&&r.width()>=s.width()&&(v=0),"vertical"===o&&r.height()>=s.height()&&(v=0),t.hasClass("dragged")||("vertical"===o?s.data("tmmove",punchgs.TweenLite.to(s,.5,{top:v+"px",ease:punchgs.Power3.easeInOut})):s.data("tmmove",punchgs.TweenLite.to(s,.5,{left:v+"px",ease:punchgs.Power3.easeInOut})),s.data("offset",v))},n=function(t,e,i,a,n,r){var s=i.parent().find(".tp-"+r+"s"),o=s.find(".tp-"+r+"s-inner-wrapper"),d=s.find(".tp-"+r+"-mask"),l=a.width*t<a.min_width?a.min_width:Math.round(a.width*t),h=Math.round(l/a.width*a.height),p="vertical"===a.direction?l:l*n+a.space*(n-1),u="vertical"===a.direction?h*n+a.space*(n-1):h,c="vertical"===a.direction?{width:l+"px"}:{height:h+"px"};e.add(punchgs.TweenLite.set(s,c)),e.add(punchgs.TweenLite.set(o,{width:p+"px",height:u+"px"})),e.add(punchgs.TweenLite.set(d,{width:p+"px",height:u+"px"}));var g=o.find(".tp-"+r);return g&&jQuery.each(g,function(t,i){"vertical"===a.direction?e.add(punchgs.TweenLite.set(i,{top:t*(h+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"})):"horizontal"===a.direction&&e.add(punchgs.TweenLite.set(i,{left:t*(l+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"}))}),e},r=function(t){var e=0,i=0,a=0,n=0,r=1,s=1,o=1;return"detail"in t&&(i=t.detail),"wheelDelta"in t&&(i=-t.wheelDelta/120),"wheelDeltaY"in t&&(i=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=i,i=0),a=e*r,n=i*r,"deltaY"in t&&(n=t.deltaY),"deltaX"in t&&(a=t.deltaX),(a||n)&&t.deltaMode&&(1==t.deltaMode?(a*=s,n*=s):(a*=o,n*=o)),a&&!e&&(e=a<1?-1:1),n&&!i&&(i=n<1?-1:1),n=navigator.userAgent.match(/mozilla/i)?10*n:n,(n>300||n<-300)&&(n/=10),{spinX:e,spinY:i,pixelX:a,pixelY:n}},s=function(e,i){"on"===i.navigation.keyboardNavigation&&jQuery(document).keydown(function(a){("horizontal"==i.navigation.keyboard_direction&&39==a.keyCode||"vertical"==i.navigation.keyboard_direction&&40==a.keyCode)&&(i.sc_indicator="arrow",i.sc_indicator_dir=0,t.callingNewSlide(e,1)),("horizontal"==i.navigation.keyboard_direction&&37==a.keyCode||"vertical"==i.navigation.keyboard_direction&&38==a.keyCode)&&(i.sc_indicator="arrow",i.sc_indicator_dir=1,t.callingNewSlide(e,-1))})},o=function(e,i){if("on"===i.navigation.mouseScrollNavigation||"carousel"===i.navigation.mouseScrollNavigation){i.isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),i.isSafari=!!navigator.userAgent.match(/safari/i),i.ischrome=!!navigator.userAgent.match(/chrome/i);var a=i.ischrome?-49:i.isIEEleven||i.isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,n=i.ischrome?49:i.isIEEleven||i.isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;e.on("mousewheel DOMMouseScroll",function(s){var o=r(s.originalEvent),d=e.find(".tp-revslider-slidesli.active-revslide").index(),l=e.find(".tp-revslider-slidesli.processing-revslide").index(),h=-1!=d&&0==d||-1!=l&&0==l,p=-1!=d&&d==i.slideamount-1||1!=l&&l==i.slideamount-1,u=!0;"carousel"==i.navigation.mouseScrollNavigation&&(h=p=!1),-1==l?o.pixelY<a?(h||(i.sc_indicator="arrow","reverse"!==i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=1,t.callingNewSlide(e,-1)),u=!1),p||(i.sc_indicator="arrow","reverse"===i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=0,t.callingNewSlide(e,1)),u=!1)):o.pixelY>n&&(p||(i.sc_indicator="arrow","reverse"!==i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=0,t.callingNewSlide(e,1)),u=!1),h||(i.sc_indicator="arrow","reverse"===i.navigation.mouseScrollReverse&&(i.sc_indicator_dir=1,t.callingNewSlide(e,-1)),u=!1)):u=!1;var c=i.c.offset().top-jQuery("body").scrollTop(),g=c+i.c.height();return"carousel"!=i.navigation.mouseScrollNavigation?("reverse"!==i.navigation.mouseScrollReverse&&(c>0&&o.pixelY>0||g<jQuery(window).height()&&o.pixelY<0)&&(u=!0),"reverse"===i.navigation.mouseScrollReverse&&(c<0&&o.pixelY<0||g>jQuery(window).height()&&o.pixelY>0)&&(u=!0)):u=!1,0==u?(s.preventDefault(s),!1):void 0})}},d=function(t,i,a){return t=e?jQuery(a.target).closest("."+t).length||jQuery(a.srcElement).closest("."+t).length:jQuery(a.toElement).closest("."+t).length||jQuery(a.originalTarget).closest("."+t).length,!0===t||1===t?1:0},l=function(i,a,n){var r=a.carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),r.Limit="endless";var s=(e||t.get_browser(),i),o="vertical"===a.navigation.thumbnails.direction||"vertical"===a.navigation.tabs.direction?"none":"vertical",l=a.navigation.touch.swipe_direction||"horizontal";o="swipebased"==n&&"vertical"==l?"none":n?"vertical":o,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults=new Object),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",s.swipetp({allowPageScroll:o,triggerOnTouchLeave:!0,treshold:a.navigation.touch.swipe_treshold,fingers:a.navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(e,n,s,o){var h=d("rev_slider_wrapper",i,e),p=d("tp-thumbs",i,e),u=d("tp-tabs",i,e),c=jQuery(this).attr("class"),g=!!c.match(/tp-tabs|tp-thumb/gi);if("carousel"===a.sliderType&&(("move"===n||"end"===n||"cancel"==n)&&a.dragStartedOverSlider&&!a.dragStartedOverThumbs&&!a.dragStartedOverTabs||"start"===n&&h>0&&0===p&&0===u))switch(a.dragStartedOverSlider=!0,o=s&&s.match(/left|up/g)?Math.round(-1*o):o=Math.round(1*o),n){case"start":void 0!==r.positionanim&&(r.positionanim.kill(),r.slide_globaloffset="off"===r.infinity?r.slide_offset:t.simp(r.slide_offset,r.maxwidth)),r.overpull="none",r.wrap.addClass("dragged");break;case"move":if(a.c.find(".tp-withaction").addClass("tp-temporarydisabled"),r.slide_offset="off"===r.infinity?r.slide_globaloffset+o:t.simp(r.slide_globaloffset+o,r.maxwidth),"off"===r.infinity){var v="center"===r.horizontal_align?(r.wrapwidth/2-r.slide_width/2-r.slide_offset)/r.slide_width:(0-r.slide_offset)/r.slide_width;"none"!==r.overpull&&0!==r.overpull||!(v<0||v>a.slideamount-1)?v>=0&&v<=a.slideamount-1&&(v>=0&&o>r.overpull||v<=a.slideamount-1&&o<r.overpull)&&(r.overpull=0):r.overpull=o,r.slide_offset=v<0?r.slide_offset+(r.overpull-o)/1.1+Math.sqrt(Math.abs((r.overpull-o)/1.1)):v>a.slideamount-1?r.slide_offset+(r.overpull-o)/1.1-Math.sqrt(Math.abs((r.overpull-o)/1.1)):r.slide_offset}t.organiseCarousel(a,s,!0,!0);break;case"end":case"cancel":r.slide_globaloffset=r.slide_offset,r.wrap.removeClass("dragged"),t.carouselToEvalPosition(a,s),a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1,setTimeout(function(){a.c.find(".tp-withaction").removeClass("tp-temporarydisabled")},19)}else{if(("move"!==n&&"end"!==n&&"cancel"!=n||a.dragStartedOverSlider||!a.dragStartedOverThumbs&&!a.dragStartedOverTabs)&&!("start"===n&&h>0&&(p>0||u>0))){if("end"==n&&!g){if(a.sc_indicator="arrow","horizontal"==l&&"left"==s||"vertical"==l&&"up"==s)return a.sc_indicator_dir=0,t.callingNewSlide(a.c,1),!1;if("horizontal"==l&&"right"==s||"vertical"==l&&"down"==s)return a.sc_indicator_dir=1,t.callingNewSlide(a.c,-1),!1}return a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1,!0}p>0&&(a.dragStartedOverThumbs=!0),u>0&&(a.dragStartedOverTabs=!0);var f=a.dragStartedOverThumbs?".tp-thumbs":".tp-tabs",m=a.dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",b=a.dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",w=a.dragStartedOverThumbs?".tp-thumb":".tp-tab",_=a.dragStartedOverThumbs?a.navigation.thumbnails:a.navigation.tabs;o=s&&s.match(/left|up/g)?Math.round(-1*o):o=Math.round(1*o);var x=i.parent().find(m),y=x.find(b),T=_.direction,S="vertical"===T?y.height():y.width(),j="vertical"===T?x.height():x.width(),C="vertical"===T?x.find(w).first().outerHeight(!0)+_.space:x.find(w).first().outerWidth(!0)+_.space,L=void 0===y.data("offset")?0:parseInt(y.data("offset"),0),k=0;switch(n){case"start":i.parent().find(f).addClass("dragged"),L="vertical"===T?y.position().top:y.position().left,y.data("offset",L),y.data("tmmove")&&y.data("tmmove").pause();break;case"move":if(S<=j)return!1;k=L+o,k=k>0?"horizontal"===T?k-y.width()*(k/y.width()*k/y.width()):k-y.height()*(k/y.height()*k/y.height()):k;var Q="vertical"===T?0-(y.height()-x.height()):0-(y.width()-x.width());k=k<Q?"horizontal"===T?k+y.width()*(k-Q)/y.width()*(k-Q)/y.width():k+y.height()*(k-Q)/y.height()*(k-Q)/y.height():k,"vertical"===T?punchgs.TweenLite.set(y,{top:k+"px"}):punchgs.TweenLite.set(y,{left:k+"px"});break;case"end":case"cancel":if(g)return k=L+o,k="vertical"===T?k<0-(y.height()-x.height())?0-(y.height()-x.height()):k:k<0-(y.width()-x.width())?0-(y.width()-x.width()):k,k=k>0?0:k,k=Math.abs(o)>C/10?o<=0?Math.floor(k/C)*C:Math.ceil(k/C)*C:o<0?Math.ceil(k/C)*C:Math.floor(k/C)*C,k="vertical"===T?k<0-(y.height()-x.height())?0-(y.height()-x.height()):k:k<0-(y.width()-x.width())?0-(y.width()-x.width()):k,k=k>0?0:k,"vertical"===T?punchgs.TweenLite.to(y,.5,{top:k+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(y,.5,{left:k+"px",ease:punchgs.Power3.easeOut}),k=k||("vertical"===T?y.position().top:y.position().left),y.data("offset",k),y.data("distance",o),setTimeout(function(){a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1},100),i.parent().find(f).removeClass("dragged"),!1}}}})},h=function(t){t.hide_delay=jQuery.isNumeric(parseInt(t.hide_delay,0))?t.hide_delay/1e3:.2,t.hide_delay_mobile=jQuery.isNumeric(parseInt(t.hide_delay_mobile,0))?t.hide_delay_mobile/1e3:.2},p=function(t){return t&&t.enable},u=function(t){return t&&t.enable&&!0===t.hide_onleave&&(void 0===t.position||!t.position.match(/outer/g))},c=function(t,i){var a=t.parent();u(i.navigation.arrows)&&punchgs.TweenLite.delayedCall(e?i.navigation.arrows.hide_delay_mobile:i.navigation.arrows.hide_delay,g,[a.find(".tparrows"),i.navigation.arrows,"hide"]),u(i.navigation.bullets)&&punchgs.TweenLite.delayedCall(e?i.navigation.bullets.hide_delay_mobile:i.navigation.bullets.hide_delay,g,[a.find(".tp-bullets"),i.navigation.bullets,"hide"]),u(i.navigation.thumbnails)&&punchgs.TweenLite.delayedCall(e?i.navigation.thumbnails.hide_delay_mobile:i.navigation.thumbnails.hide_delay,g,[a.find(".tp-thumbs"),i.navigation.thumbnails,"hide"]),u(i.navigation.tabs)&&punchgs.TweenLite.delayedCall(e?i.navigation.tabs.hide_delay_mobile:i.navigation.tabs.hide_delay,g,[a.find(".tp-tabs"),i.navigation.tabs,"hide"])},g=function(t,e,i,a){switch(a=void 0===a?.5:a,i){case"show":punchgs.TweenLite.to(t,a,{autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});break;case"hide":punchgs.TweenLite.to(t,a,{autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"})}},v=function(t,e,i){e.style=void 0===e.style?"":e.style,e.left.style=void 0===e.left.style?"":e.left.style,e.right.style=void 0===e.right.style?"":e.right.style,0===t.find(".tp-leftarrow.tparrows").length&&t.append('<div class="tp-leftarrow tparrows '+e.style+" "+e.left.style+'">'+e.tmp+"</div>"),0===t.find(".tp-rightarrow.tparrows").length&&t.append('<div class="tp-rightarrow tparrows '+e.style+" "+e.right.style+'">'+e.tmp+"</div>");var a=t.find(".tp-leftarrow.tparrows"),n=t.find(".tp-rightarrow.tparrows");e.rtl?(a.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=0,t.revnext()}),n.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=1,t.revprev()})):(n.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=0,t.revnext()}),a.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=1,t.revprev()})),e.right.j=t.find(".tp-rightarrow.tparrows"),e.left.j=t.find(".tp-leftarrow.tparrows"),e.padding_top=parseInt(i.carousel.padding_top||0,0),e.padding_bottom=parseInt(i.carousel.padding_bottom||0,0),b(a,e.left,i),b(n,e.right,i),e.left.opt=i,e.right.opt=i,"outer-left"!=e.position&&"outer-right"!=e.position||(i.outernav=!0)},f=function(t,e,i){var a=t.outerHeight(!0),n=(t.outerWidth(!0),void 0==e.opt?0:0==i.conh?i.height:i.conh),r="layergrid"==e.container?"fullscreen"==i.sliderLayout?i.height/2-i.gridheight[i.curWinRange]*i.bh/2:"on"==i.autoHeight||void 0!=i.minHeight&&i.minHeight>0?n/2-i.gridheight[i.curWinRange]*i.bh/2:0:0,s="top"===e.v_align?{top:"0px",y:Math.round(e.v_offset+r)+"px"}:"center"===e.v_align?{top:"50%",y:Math.round(0-a/2+e.v_offset)+"px"}:{top:"100%",y:Math.round(0-(a+e.v_offset+r))+"px"};t.hasClass("outer-bottom")||punchgs.TweenLite.set(t,s)},m=function(t,e,i){var a=(t.outerHeight(!0),t.outerWidth(!0)),n="layergrid"==e.container?"carousel"===i.sliderType?0:i.width/2-i.gridwidth[i.curWinRange]*i.bw/2:0,r="left"===e.h_align?{left:"0px",x:Math.round(e.h_offset+n)+"px"}:"center"===e.h_align?{left:"50%",x:Math.round(0-a/2+e.h_offset)+"px"}:{left:"100%",x:Math.round(0-(a+e.h_offset+n))+"px"};punchgs.TweenLite.set(t,r)},b=function(t,e,i){var a=t.closest(".tp-simpleresponsive").length>0?t.closest(".tp-simpleresponsive"):t.closest(".tp-revslider-mainul").length>0?t.closest(".tp-revslider-mainul"):t.closest(".rev_slider_wrapper").length>0?t.closest(".rev_slider_wrapper"):t.parent().find(".tp-revslider-mainul"),n=a.width(),r=a.height();if(f(t,e,i),m(t,e,i),"outer-left"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout?"outer-right"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout||punchgs.TweenLite.set(t,{right:0-t.outerWidth()+"px",x:e.h_offset+"px"}):punchgs.TweenLite.set(t,{left:0-t.outerWidth()+"px",x:e.h_offset+"px"}),t.hasClass("tp-thumbs")||t.hasClass("tp-tabs")){var s=t.data("wr_padding"),o=t.data("maxw"),d=t.data("maxh"),l=t.hasClass("tp-thumbs")?t.find(".tp-thumb-mask"):t.find(".tp-tab-mask"),h=parseInt(e.padding_top||0,0),p=parseInt(e.padding_bottom||0,0);o>n&&"outer-left"!==e.position&&"outer-right"!==e.position?(punchgs.TweenLite.set(t,{left:"0px",x:0,maxWidth:n-2*s+"px"}),punchgs.TweenLite.set(l,{maxWidth:n-2*s+"px"})):(punchgs.TweenLite.set(t,{maxWidth:o+"px"}),punchgs.TweenLite.set(l,{maxWidth:o+"px"})),d+2*s>r&&"outer-bottom"!==e.position&&"outer-top"!==e.position?(punchgs.TweenLite.set(t,{top:"0px",y:0,maxHeight:h+p+(r-2*s)+"px"}),punchgs.TweenLite.set(l,{maxHeight:h+p+(r-2*s)+"px"})):(punchgs.TweenLite.set(t,{maxHeight:d+"px"}),punchgs.TweenLite.set(l,{maxHeight:d+"px"})),"outer-left"!==e.position&&"outer-right"!==e.position&&(h=0,p=0),!0===e.span&&"vertical"===e.direction?(punchgs.TweenLite.set(t,{maxHeight:h+p+(r-2*s)+"px",height:h+p+(r-2*s)+"px",top:0-h,y:0}),f(l,e,i)):!0===e.span&&"horizontal"===e.direction&&(punchgs.TweenLite.set(t,{maxWidth:"100%",width:n-2*s+"px",left:0,x:0}),m(l,e,i))}},w=function(t,e,i,a){0===t.find(".tp-bullets").length&&(e.style=void 0===e.style?"":e.style,t.append('<div class="tp-bullets '+e.style+" "+e.direction+'"></div>'));var n=t.find(".tp-bullets"),r=i.data("index"),s=e.tmp;jQuery.each(a.thumbs[i.index()].params,function(t,e){s=s.replace(e.from,e.to)}),n.append('<div class="justaddedbullet tp-bullet">'+s+"</div>");var o=t.find(".justaddedbullet"),d=t.find(".tp-bullet").length,l=o.outerWidth()+parseInt(void 0===e.space?0:e.space,0),h=o.outerHeight()+parseInt(void 0===e.space?0:e.space,0);"vertical"===e.direction?(o.css({top:(d-1)*h+"px",left:"0px"}),n.css({height:(d-1)*h+o.outerHeight(),width:o.outerWidth()})):(o.css({left:(d-1)*l+"px",top:"0px"}),n.css({width:(d-1)*l+o.outerWidth(),height:o.outerHeight()})),o.find(".tp-bullet-image").css({backgroundImage:"url("+a.thumbs[i.index()].src+")"}),o.data("liref",r),o.click(function(){a.sc_indicator="bullet",t.revcallslidewithid(r),t.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),o.removeClass("justaddedbullet"),e.padding_top=parseInt(a.carousel.padding_top||0,0),e.padding_bottom=parseInt(a.carousel.padding_bottom||0,0),e.opt=a,"outer-left"!=e.position&&"outer-right"!=e.position||(a.outernav=!0),n.addClass("nav-pos-hor-"+e.h_align),n.addClass("nav-pos-ver-"+e.v_align),n.addClass("nav-dir-"+e.direction),b(n,e,a)},_=function(t,e){return e=parseFloat(e),t=t.replace("#",""),"rgba("+parseInt(t.substring(0,2),16)+","+parseInt(t.substring(2,4),16)+","+parseInt(t.substring(4,6),16)+","+e+")"},x=function(t,e,i,a,n){var r="tp-thumb"===a?".tp-thumbs":".tp-tabs",s="tp-thumb"===a?".tp-thumb-mask":".tp-tab-mask",o="tp-thumb"===a?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",d="tp-thumb"===a?".tp-thumb":".tp-tab",l="tp-thumb"===a?".tp-thumb-image":".tp-tab-image";if(e.visibleAmount=e.visibleAmount>n.slideamount?n.slideamount:e.visibleAmount,e.sliderLayout=n.sliderLayout,0===t.parent().find(r).length){e.style=void 0===e.style?"":e.style;var h=!0===e.span?"tp-span-wrapper":"",p='<div class="'+a+"s "+h+" "+e.position+" "+e.style+'"><div class="'+a+'-mask"><div class="'+a+'s-inner-wrapper" style="position:relative;"></div></div></div>';"outer-top"===e.position?t.parent().prepend(p):"outer-bottom"===e.position?t.after(p):t.append(p),e.padding_top=parseInt(n.carousel.padding_top||0,0),e.padding_bottom=parseInt(n.carousel.padding_bottom||0,0),"outer-left"!=e.position&&"outer-right"!=e.position||(n.outernav=!0)}var u=i.data("index"),c=t.parent().find(r),g=c.find(s),v=g.find(o),f="horizontal"===e.direction?e.width*e.visibleAmount+e.space*(e.visibleAmount-1):e.width,m="horizontal"===e.direction?e.height:e.height*e.visibleAmount+e.space*(e.visibleAmount-1),w=e.tmp;jQuery.each(n.thumbs[i.index()].params,function(t,e){w=w.replace(e.from,e.to)}),v.append('<div data-liindex="'+i.index()+'" data-liref="'+u+'" class="justaddedthumb '+a+'" style="width:'+e.width+"px;height:"+e.height+'px;">'+w+"</div>");var x=c.find(".justaddedthumb"),y=c.find(d).length,T=x.outerWidth()+parseInt(void 0===e.space?0:e.space,0),S=x.outerHeight()+parseInt(void 0===e.space?0:e.space,0);x.find(l).css({backgroundImage:"url("+n.thumbs[i.index()].src+")"}),"vertical"===e.direction?(x.css({top:(y-1)*S+"px",left:"0px"}),v.css({height:(y-1)*S+x.outerHeight(),width:x.outerWidth()})):(x.css({left:(y-1)*T+"px",top:"0px"}),v.css({width:(y-1)*T+x.outerWidth(),height:x.outerHeight()})),c.data("maxw",f),c.data("maxh",m),c.data("wr_padding",e.wrapper_padding);var j="outer-top"===e.position||"outer-bottom"===e.position?"relative":"absolute";"outer-top"!==e.position&&"outer-bottom"!==e.position||e.h_align,g.css({maxWidth:f+"px",maxHeight:m+"px",overflow:"hidden",position:"relative"}),c.css({maxWidth:f+"px",maxHeight:m+"px",overflow:"visible",position:j,background:_(e.wrapper_color,e.wrapper_opacity),padding:e.wrapper_padding+"px",boxSizing:"contet-box"}),x.click(function(){n.sc_indicator="bullet";var e=t.parent().find(o).data("distance");e=void 0===e?0:e,Math.abs(e)<10&&(t.revcallslidewithid(u),t.parent().find(r).removeClass("selected"),jQuery(this).addClass("selected"))}),x.removeClass("justaddedthumb"),e.opt=n,c.addClass("nav-pos-hor-"+e.h_align),c.addClass("nav-pos-ver-"+e.v_align),c.addClass("nav-dir-"+e.direction),b(c,e,n)},y=function(t){var e=t.c.parent().find(".outer-top"),i=t.c.parent().find(".outer-bottom");t.top_outer=e.hasClass("tp-forcenotvisible")?0:e.outerHeight()||0,t.bottom_outer=i.hasClass("tp-forcenotvisible")?0:i.outerHeight()||0},T=function(t,e,i,a){e>i||i>a?t.addClass("tp-forcenotvisible"):t.removeClass("tp-forcenotvisible")}}(jQuery);