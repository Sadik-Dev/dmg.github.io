
$(document).ready(function(){

    //Init AOS Library
    AOS.init();

    //Init auto sliders
    if($('#autoSlider').length){
        initAutoSlider();
    }

    //ImageGlider
    if($('.fadingImageContainer').length){
        $('.fadingImageContainer').hover(imageGliderMouseIn,imageGliderMouseOut);
    }
    
    //Menu Event handler
    $('.menuB').click(function(){
        openMenu();
    });
    $('#closeMenu').click(function(){
        closeMenu();
    });
  

});

