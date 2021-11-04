
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
    
     //Check for dropdowns
     let dropdowns = $('.dropdownValued');
     if(dropdowns.length > 0){
         initDropdownEventHandlers(dropdowns);
     }

});

function initDropdownEventHandlers(dropdowns){
    for(let i =0; i < dropdowns.length; i++){
        let dropdown = dropdowns[i];
        setDropdownValue(dropdown);
        let dropdownElements = dropdown.children[2].children;
        
        for (const option of dropdownElements) {
            option.addEventListener('click', function() {
                let currentSelected = this.parentNode.parentNode.querySelector('.selected');
                if(currentSelected != null){
                    this.parentNode.parentNode.querySelector('.selected').classList.remove('selected');
                }
                if (!this.classList.contains('selected')) {
                    this.classList.add('selected');
                    setDropdownValue(this.parentNode.parentNode);
                }
            })
        }
    }
}

function setDropdownValue(dropdown){
    console.log(dropdown);
    let value = dropdown.querySelector('.dropdown-content .selected').innerHTML;
    dropdown.querySelector('.selectedValue').innerHTML  = value;
}