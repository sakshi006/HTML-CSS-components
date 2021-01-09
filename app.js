const btn = document.querySelector(".btn");


btn.addEventListener("click",function(){
    var element = document.body;
   element.classList.toggle("dark-mode")
})

jQuery(document).ready(function ($) {
    $(window).load(function() {
        setTimeout(function(){
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow",function(){
});
},0500);
    });
});

