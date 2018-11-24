// // 初始化
// $(function(){
//     banner();
//     $('[data-toggle="tooltip"]').tooltip();
// });
// // 动态轮播图
// function banner(){
//     var myData;
//     // 获取数据
//     var getData=function(callback){
//         if(myData){
//             callback &&callback(myData);
//             return false;
//         }
//         $.ajax({
//             url:'js/imdex.json',
//             type:'get',
//             data:{},
//             dataType:'json',
//             success:function(data){
//                 // 请求第一次时需要记录
//                 myData-data;
//                 callback && callback(myData);
//             }
//         });
//     };
//     // 渲染
//     var render=function(){
//         var width=$(window).width();
//         var isMobile=false;
//         if(width<=768){
//             isMobile=true;
//         }
//         getData(function(data){
//             var templatePoint=_.template($('#template_point').html());
//             var templateImage=_.template($('#template_image').html());
//             var htmlPoint=templatePoint({model:data});
//             var htmlImage=templateImage({model:data,isMobile:isMobile});
//             $('.carousel-indicators').html(htmlPoint);
//             $('.carousel-inner').html(htmlImage);
//         });
//     };
//     $(window).on('resize',function(){
//         render();
//     }).trigger('resize');
//     var startX=0;
//     var moveX=0;
//     var distanceX=0;
//     var isMove=false;
//     $('.carousel-inner').on('touchstart',function(e){
//         startX=e.originalEvent.touches[0].clientX;
//     });
//     $('.carousel-inner').on('touchmove',function(e){
//         moveX=e.originalEvent.touches[0].clientX;
//         distanceX=moveX-startX;
//         isMove=true;
//     });
//     $('.carousel-inner').on('touchend',function(e){
//         if(Math.abs(distanceX)>50 && isMove){
//             if(distanceX>0){
//                 上一张
//                 $('.carousel').carousel('prev');
//             }
//             else{
//                 下一张
//                 $('.carousel').carousel('next');
//             }
//         }
//         startX=0;
//         moveX=0;
//         distanceX=0;
//         isMove=false;
//     });
// }
//初始化产品页签
function initProduct(){
var tabs=$('.nav-tabs-product');
var lis=tabs.find('li');
var width=0;
$.each(lis,function(i,item){
    width+=$(this).innerWidth();
});
tabs.width(width);
}
// 滑动
itcast.iScroll({
    swipeDom:document.querySelector('.nav-tabs-product-parent'),
    swipeType:'x',
    swipeDistance:1000
});