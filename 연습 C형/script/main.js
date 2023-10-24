$(function(){
    
        $('.gnb > li').hover(function(){
            $(this).find('ul').stop().slideDown()
        },
        function(){
            $(this).find('ul').stop().slideUp()
        }
        )
    

    
        setInterval(function(){
            $('.slides').animate({top: '-100%'}, function(){
                $('.slide').first().appendTo($(this))
                $(this).css('top', 0)
            })            
        }, 3000)
    

    
        $('.gallery_list').hide()

        $('.titles h2').click(function(){
            $('.titles h2').removeClass('active')
            $(this).addClass('active')
        
            var idx = $(this).index()

            $('.item').hide()
            $('.item').eq(idx).show()
        })
    

    
        $('.show_modal').click(function(){
            $('.modal').show()
        })
        $('.close_modal').click(function(){
            $('.modal').hide()
        })
    
})