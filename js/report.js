

$('.tato2').on('click',function(){
    $('.XS_1').hide();
    $('.tato').css('border-bottom','none')
    $('.XS_2').show();
    $('.tato2').css('border-bottom','4px solid #f8572b')
})

$('.tato').on('click',function(){
    $('.XS_2').hide();
    $('.tato2').css('border-bottom','none')
    $('.XS_1').show();
    $('.tato').css('border-bottom','4px solid #f8572b')
})

$('.dianji').on('click',function(){
    $('.dianji__').hide();
    $('.dianji_').show();
})

