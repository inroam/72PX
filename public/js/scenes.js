/**
 * Created by hujj on 2016/5/18.
 */
/* ----------------------约拍场景列表 ------------------------------*/
var height = $(window).height();
$("#scenesMap").height((height-60)+"px");
$("#scenesTopMain").height((height-210)+"px");
$("#scenesTopMain").perfectScrollbar();

$(window).resize(function(){
    $('#scenesTopMain').perfectScrollbar('update');
});


/* ------------------------------ 地图的渲染 --------------------------------*/
var map = new BMap.Map("scenesMap");          // 创建地图实例
var scenesItems = {
    marker : [],
    infoWindow :[]
} // 初始化场景列表对象
initMap();
function  initMap(){
    var point = new BMap.Point(104.786774,31.479462); // 创建点坐标
    map.enableScrollWheelZoom();                            //启用滚轮放大缩小
    map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
    map.disable3DBuilding();
    map.setMapStyle({style:"grayscale"});    //设置地图模板为高端灰
    map.centerAndZoom(point, 13);   //设置地图中心点

    //创建信息窗口
    $(".detail").each(function(k){
        var markObj = createFocus($(this),k);
        var infoWindowObj = new BMap.InfoWindow($(".detail"+k).html());  // 创建信息窗口对象
        markObj.addEventListener("click", function(){
            this.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            this.openInfoWindow(infoWindowObj);
            //图片加载完毕重绘infowindow
            $(".detailImg"+k).onload = function (){
                infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
            }
        });
        scenesItems.marker[k] = markObj
        scenesItems.infoWindow[k] = infoWindowObj;
    });
}

// 创建标注
function createFocus(obj,k){
    var lat = obj.attr("data-lat");
    var lng = obj.attr("data-lng");
    var pt = new BMap.Point(lat,lng); //动态获取标注点经纬度
    var marker = createIcon(pt,k);
    map.addOverlay(marker);
    return marker;
}

//更换场景标注
function changeScenes(k){
    scenesItems.marker[k].openInfoWindow( scenesItems.infoWindow[k]);
}


//单击获取点击的经纬度
map.addEventListener("click",function(e){
    console.log(e.point.lng + "," + e.point.lat);
});

// 创建自定义图标
function createIcon(pt,k){
    var pic = "../images/icon/" + (k+1) + ".png";
    var myIcon = new BMap.Icon(pic, new BMap.Size(70,70));
    var marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
    return marker;
}