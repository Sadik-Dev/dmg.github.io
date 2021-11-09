
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

        let ddType  = dropdown.getAttribute("data-type");
        switch(ddType){
            case "sort":
                setSortOnClick(dropdown);
                break;
        }

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

                option.parentNode.style.display = "none";
                setTimeout(function(){
                    option.parentNode.style.display = "";
                }, 100);
            })
        }
    }
}

function setDropdownValue(dropdown){
    let value = dropdown.querySelector('.dropdown-content .selected').innerHTML;
    dropdown.querySelector('.selectedValue').innerHTML  = value;
}

function setSortOnClick(dropdown){
    dropdown.onclick = function(){
        let isOpen = dropdown.getAttribute("data-open");
        if(isOpen == null || isOpen === "false"){
            dropdown.setAttribute("data-open","true")
            let hoverA = dropdown.querySelector('.hoverA');
            let elements = [dropdown, hoverA];
    
            for(let i = 0; i < elements.length; i++){
                let element = elements[i];
                element.style.display = "flex"
                element.style.border = "1px solid rgba(255, 255, 255, 15%)"
                element.style.color = "white"
                element.style.borderTop = "none"
                element.style.background = "rgb(0 0 0 / 70%)"
            }
        }
        else{
            dropdown.setAttribute("data-open","false")
            dropdown.children[2].style.display = "none";
            setTimeout(function(){
                dropdown.children[2].style.display = "";
            }, 100);
        }

   
    }
}