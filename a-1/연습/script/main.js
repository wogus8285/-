$(function(){

    // 지엔비
    $('.gnb').hover(function(){
        // console.log('dd')
        $(this).find('ul').stop().slideDown()
    },
    function(){
        // console.log('ee')
        $(this).find('ul').stop().slideUp()
    },)
    



})