;(function($){var r=window.dialogArguments||opener||parent||top;var s=r.send_to_editor;function getPageLink(a){var b=1;if("next"==a){b=1+12*currentPage}else{b=1+12*(currentPage-2)}return"http://gdata.youtube.com/feeds/api/videos?q="+encodeURIComponent(lastQuery)+"&orderby="+lastOrderby+"&max-results=12&v=2&alt=json&start-index="+b};function paging(){if(currentPage>1){$("#prev_page_wrapper").show();$("#prev_page").attr("href",getPageLink("prev"))}else{$("#prev_page_wrapper").hide()}$("#next_page_wrapper").show();$("#next_page").attr("href",getPageLink("next"))};function flashHtml(a){return'<object width="'+videoWidth+'" height="'+videoHeight+'"><param name="movie" value="'+a+'"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="'+a+'" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="'+videoWidth+'" height="'+videoHeight+'"></embed></object>'}function search(q){q=q||{};q['action']="search_video";if(xhr){xhr.abort()}q['orderby']=$("#orderby").val();xhr=$.post(ajaxurl,q,function(c){if(c&&String==c.constructor){c=jsonParse(c)}var d=c.feed.entry;var f='';for(var i=0,len=d.length;i<len;++i){var g="";var h="";var j="";var k=d[i].media$group.yt$videoid.$t;var j="http://youtube.com/v/"+k+'?autoplay=1';var l="http://youtube.com/v/"+k;var m=d[i].media$group.media$thumbnail;g=m[0].url;h=m[m.length-1].url;f+='<li class="search-result"><img class="search-result-img" src="'+g+'" /><div style="text-align: center; margin-top: 0;"><a href="'+h+'" class="view-larger">View larger</a> | <a href="'+j+'" class="view" >View video</a> | <a href="'+l+'" class="insert">Insert</a></div></li>'}$("#search_results").html(f);$(".view-larger").bind("click",function(e){e.preventDefault();var a=$(this);var b=a.attr("href");$("#large_image").attr("src",b);$("#insert_from_image").attr("href",a.parent().find(".insert").attr("href"));$("#search_wrapper").hide();$("#large_image_container").show()});$(".view").bind("click",function(e){e.preventDefault();var a=$(this);var b=flashHtml($(this).attr("href"));$("#insert_from_video").attr("href",a.parent().find(".insert").attr("href"));$("#video_container").html(b);$("#search_wrapper").hide();$("#video_screen_container").show()});$(".insert").bind("click",function(e){e.preventDefault();var a=flashHtml($(this).attr("href"));s(a)});var n=c.feed.link;var o="";var p="";for(var i=0,len=n.length;i<len;++i){if("next"==n[i].rel){o=n[i].href}if("previous"==n[i].rel){p=n[i].href}}paging(o,p);$(".loading").hide();xhr=null})};$(function(){$("#img_search").bind("click",function(e){e.preventDefault();currentPage=1;var q=$.trim($("#q").val());lastQuery=q;lastOrderby=$("#orderby").val();$("#form_loading").show();search({q:q})});$("#q").bind("keypress",function(e){if(13==e.keyCode){e.preventDefault();$("#img_search").trigger("click")}});$(".paging").bind("click",function(e){e.preventDefault();var a=$(this);if("next_page"==a.attr("id")){++currentPage;$("#next_loading").show()}else{--currentPage;$("#prev_loading").show()}var b=a.attr("href");search({uri:b})});$(".back-search").bind("click",function(e){e.preventDefault();$("#search_wrapper").show();$("#large_image_container").hide();$("#video_screen_container").hide();$("#video_container").children().remove()});$("#search_options").hide();$("#options_link").bind("click",function(e){e.preventDefault();$("#search_options").toggle()})})})(jQuery);
