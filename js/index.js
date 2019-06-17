// 点击左按钮
$('#AN_l').on('click',function(){
    $('.LB_').animate({
        marginLeft:"-1000px"
    },1000,function(){
        $('.LB_>li').slice(0,4).appendTo($('.LB_'))
        $('.LB_').css('margin-left','0px');
    })
})
//点击右按钮
$('#AN_r').on('click',function(){
    $('.LB_').css('margin-left','-1000px');
    $('.LB_>li').slice(4,8).prependTo($('.LB_'));
    $('.LB_').animate({
        marginLeft:"0px"
    },1000,function(){
    })
})
// 自动轮播
function TZ_Q(){
    $('.LB_').animate({
        marginLeft:"-1000px"
    },4000,function(){
        $('.LB_>li').slice(0,4).appendTo($('.LB_'))
        $('.LB_').css('margin-left','0px');
        nus++;
    })
}
var nus = 0;
var TZ = setInterval(TZ_Q,1000);
// 鼠标移入停止计时器
$('.LB').on('mouseenter',function(){
    clearInterval(TZ);
})
$('.LB').on('mouseleave',function(){
    TZ = setInterval(TZ_Q,1000);
})

$('.TZ_').on('mouseenter',function(){
    clearInterval(TZ);
})
$('.TZ_').on('mouseleave',function(){
    TZ = setInterval(TZ_Q,1000);
})


// 精选报告图片

$.ajax({
    url:"../js/index_1.json",
    success:function(data){
        console.log(data)
        var lis = ''
        for(var i=0;i<data.length;i++){
            console.log(data[i].img)
            lis+='<li>'
            lis+='<img src="'+data[i].img+'" width="230px" height="130px" class="bbb qqq">'
            lis+='<div class="q2">'
            lis+='<p class="text_1">'+data[i].text+'</p>'
            lis+='<p class="text_2">'+data[i].span+'</p>'
            lis+='</div>'
            lis+='<div class="q3">'
            lis+='<span class="text_3"><img src="'+data[i].img_2+'">3</span>'
            lis+='<span class="text_3"><img src="'+data[i].img_3+'">3</span>'
            lis+='</div>'
            lis+='</li>'
        }
        $('.QFD').append($(lis))
    }
})


// 发现酷玩ajax
$.ajax({
    url:"../js/index_2.json",
    success:function(a){
        // console.log(a)
        var li = ''
        for(j=0;j<a.length;j++){
            li+='<li>'
            li+='<div class="box_p">'
            li+='<img src="'+a[j].img+'" width="228px" height="130px" class="bbb">'
            li+='<div class="box_p_">'
            li+='<p class="text_5">'+a[j].text_5+'</p>'
            li+='<p class="text_6">'+a[j].text_6+'</p>'
            li+='<div class="box_z">'
            li+='<span id="text_z">'+a[j].text_7+'</span>'
            li+='<span class="color_3"><img src="'+a[j].img_2+'">3</span>'
            li+='<span class="color_3"><img src="'+a[j].img_3+'">3</span>'
            li+='</div>'
            li+='</div>'
            li+='</div>'
            li+='</li>'
        }
        $('.qwe').append($(li))
    }
})


// 点击加载中
$('.jiazai').on('click',function(){
    $('.jiazai').hide();
    $('.JZZ').show();
})

// 返回顶部
window.onscroll = function () {
    if ( $(window).scrollTop() >= 300 ) {
    $('#fanhui_').show();
    } else {
        $('#fanhui_').hide();
    }
    $('#fanhui_').on('click',function(){
        var h = document.documentElement.scrollTop;
        var num = 30;
       var ewq= setInterval(function(){
        h=h-30;
        document.documentElement.scrollTop=h;
            if(h>=0){
                clearInterval(ewq);
            }
        },1)

    })
      

}





