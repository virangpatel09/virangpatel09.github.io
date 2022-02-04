
$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.navbar .nav-container').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    $('.navbar .nav-container li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
        $('.navbar .nav-container').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    
});