$(function(){

    // <!-- 지엔비 -->

        $('.gnb').hover(function(){
            // console.log('dd')
            $('.gnb ul').stop().slideDown()

            $('.header').addClass('active')
        },
        
        
        function(){
            // console.log('ee')
            $('.gnb ul').stop().slideUp()

            $('.header').removeClass('active')
        })


// <!-- 모달 -->

        $('.close_modal').click(function(){
            $('.modal').hide()},
            )

        $('.show_modal').click(function(){
            $('.modal').show()},
        )
   

// <!-- 슬라이드 -->

        setInterval(function(){
            $('.slides').animate({top: '-100%'}, function(){
                $('.slide').first().appendTo($(this))
                $(this).css('top', 0)
            })            
        }, 3000)
   

// <!-- 보더 -->

        $('.gallery_list').hide()

        $('.titles h2').click(function(){
            $('.titles h2').removeClass('active')
            $(this).addClass('active')
        
            var idx = $(this).index()

            $('.item').hide()
            $('.item').eq(idx).show()
        })

   
})