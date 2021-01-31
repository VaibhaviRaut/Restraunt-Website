var menuIcon = document.querySelector(".hamburger-menu");
var navbar = document.querySelector(".navbar");


menuIcon.addEventListener("click", () =>{
    navbar.classList.toggle("change");
});



$(document).ready(function(){
    $('#menu-toggle').click(function(){
        $('#side-nav').toggle();
        $('#inform').css({'margin-top':'50px'});
        $('#rl').css({'margin-bottom':'120px'});
    });
    $('#contact-btn').click(function(){
        $('#cnt-form').toggle();
    });
    $('#send-btn').click(function(){
        $('#cnt-form').toggle();
    });
    $('#rating-btn').click(function(){
        $('#rate-us-form').toggle();
    });
    $('#rate-us-btn').click(function(){
        $('#rate-us-form').toggle();
    });
    $('#apa-ref-btn').click(function(){
        $('#apa-references').toggle();
    });
});


$(document).ready(function(){
    $('#send-btn').click(function(){
        $('#contact-form-elements')[0].reset();
    });
});


$(document).ready(function(){
    $('#rate-us-btn').click(function(){
        $('#rate-form-elements')[0].reset();
    });
});