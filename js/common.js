//nav处的切换以及导航栏设置
$(function(){
    var box = ['首页','产品分类','装修效果图','周边服务','明星专区','品牌特卖','门窗展会','新闻资讯'],str='',urls=['index.html','assort.html','effectPic.html','nearbyService.html','star.html','brand.html','index.html','news.html'];
    for(var i=0;i<box.length;i++){
        str+='<li><a href='+urls[i]+'><span>'+box[i]+'</span></a></li>'
    }
    console.log(str)
    $('#content21').append(str);
    $('#content21').children('li').off('mouseenter').mouseenter(function(){
        $(this).addClass('navActive').siblings('.navActive').removeClass('navActive');
        if($(this).index()==1){
            $('#navZhe').removeClass('hidden');
            $('#navZhe').show();
            $('#navZhe1').stop().show('slow');
            console.log(111);
            $('.navZhe111').children('li').off('mouseover').mouseover(function(){
                $(this).addClass('assortActive').siblings('li').removeClass('assortActive');
                $('.navZhe112').children('li').eq($(this).index()).removeClass('hidden').siblings('li:visible').addClass('hidden');
                $('.navZhe113').children('li').eq($(this).index()).removeClass('hidden').siblings('li:visible').addClass('hidden');
            })
        }else{
            $('#navZhe').stop().hide();
            $('#navZhe1').stop().hide('slow');
        }
    })
    $('#content21').children('li').off('mouseleave').mouseleave(function(){
        $('#content21').children('li').removeClass('navActive');
        $('#navZhe').stop().hide();
        $('#navZhe1').stop().hide('slow');
    });
    $('#navZhe').off('mouseleave').mouseleave(function(){
        $('#navZhe1').stop().hide('slow');
        $(this).stop().hide();
    });
    $('#navZhe').off('mouseenter').on('mouseenter',function () {
        $('#navZhe').removeClass('hidden');
        $('#navZhe').show();
        $('#navZhe1').stop().show('slow');
    })
});