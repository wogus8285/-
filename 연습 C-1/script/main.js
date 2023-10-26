// $(function(){
//     //슬라이드
//     var c = $('.slide')
//     var current = 0

//     c.eq(0).show()

//     setInterval(function(){
//         var next = (current + 1) % c.length

//         console.log(next , current)


//         c.eq(current).fadeOut()
//         c.eq(next).fadeIn()

//         current++

//         current = next

//     }, 2000)


//     //menu
//     $('.gnb > li').hover(
//         function() {
//             $(this).find('ul').stop().slideDown()
//         },
//         function() {
//             $(this).find('ul').stop().slideUp()
//         }
//     )



// })