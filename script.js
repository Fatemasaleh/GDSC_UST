$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.home .home-content .text-1').addClass("none");
        $('.home .home-content .text-1').addClass("none");

    });


     // scroll up btn
     $(window).scroll(function(){
        if(this.scrollY > 500){
           $('.scroll-up-btn').addClass("show");
       }
       else{
           $('.scroll-up-btn').removeClass("show");
       }
       });

        // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


})