//nav处的切换以及导航栏设置
$(function () {
    var box = ['首页', '产品分类', '装修效果图', '周边服务', '明星专区', '品牌特卖', '门窗展会', '新闻资讯'],
        str = '',
        urls = ['index.html', 'assort.html', 'effectPic.html', 'nearbyService.html', 'star.html', 'brand.html', 'expo.html', 'news.html'];
    for (var i = 0; i < box.length; i++) {
        str += '<li><a href=' + urls[i] + '><span>' + box[i] + '</span></a></li>'
    }
    console.log(str)
    $('#content21').append(str);
    $('#content21').children('li').off('mouseenter').mouseenter(function () {
        $(this).addClass('navActive').siblings('.navActive').removeClass('navActive');
        if ($(this).index() == 1) {
            $('#navZhe').removeClass('hidden');
            $('#navZhe').show();
            $('#navZhe1').stop().show('slow');
            console.log(111);
            $('.navZhe111').children('li').off('mouseover').mouseover(function () {
                $(this).addClass('assortActive').siblings('li').removeClass('assortActive');
                $('.navZhe112').children('li').eq($(this).index()).removeClass('hidden').siblings('li:visible').addClass('hidden');
                $('.navZhe113').children('li').eq($(this).index()).removeClass('hidden').siblings('li:visible').addClass('hidden');
            })
        } else {
            $('#navZhe').stop().hide();
            $('#navZhe1').stop().hide('slow');
        }
    })
    $('#content21').children('li').off('mouseleave').mouseleave(function () {
        $('#content21').children('li').removeClass('navActive');
        $('#navZhe').stop().hide();
        $('#navZhe1').stop().hide('slow');
    });
    $('#navZhe').off('mouseleave').mouseleave(function () {
        $('#navZhe1').stop().hide('slow');
        $(this).stop().hide();
    });
    $('#navZhe').off('mouseenter').on('mouseenter', function () {
        $('#navZhe').removeClass('hidden');
        $('#navZhe').show();
        $('#navZhe1').stop().show('slow');
    })
});

//头部我的众湃以及商户中心下拉
$(function () {


    $('.la_down').mouseenter(function () {
        $(this).children('ul').removeClass('hidden');
        $(this).css({
            background: '#fff url(img/index114.jpg) no-repeat  68px 10px'
        })
        $(this).children('span').css({
            color: '#ab0001'
        })
    });
    $('.la_down ul').mouseenter(function () {
        $(this).removeClass('hidden');
        $(this).parents('li').css({
            background: '#fff url(img/index114.jpg) no-repeat  68px 10px'
        })
        $(this).siblings('span').css({
            color: '#ab0001'
        })
    });
    $('.la_down ul').mouseleave(function () {
        $(this).addClass('hidden');
        $(this).parents('li').css({
            background: 'url(img/down.jpg) no-repeat  68px 10px'
        })
        $(this).siblings('span').css({
            color: '#000'
        })
    });

    $('.la_down').mouseleave(function () {
        $(this).children('ul').addClass('hidden');
        $(this).css({
            background: 'url(img/down.jpg) no-repeat  68px 10px'
        })
        $(this).children('span').css({
            color: '#000'
        })
    });
})


//跳转首页

$(function(){
    $('.myself_11 h2').off('click').click(function(){
        window.location.href = 'index.html'
    })
    $('.cmpRLogo').off('click').click(function(){
        window.location.href = 'index.html'
    })
})


$(function(){
    $('.content13Html img').off('click').click(function(){
        window.location.href='join.html'
    })
})