/**
 * Created by hujj on 2016/5/19.
 */
var home = $("#home");
var bg = home.attr("data-bg");
var height = $(window).height();
home.height((height-60)+"px");
home.css("background-image","url(../"+bg+")");

