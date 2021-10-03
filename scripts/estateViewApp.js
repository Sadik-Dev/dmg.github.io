let allitems = [];
let currentList = [];

//Filters
let city = null;
let type = null;
let lastTypeDOM = null;
let options = [];
let bedrooms = null;
let lastBedroomDOM = null;
let price = null;
let livSurface = null;
let totSurface = null;


let map;
let currentSort = "asc";

function initMap(){
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3Vzc2FtYS1zYWRpayIsImEiOiJja3U4Yzl6NXAyMWR5MnBvNjNia2dsajRrIn0.6WlWCU6Nx5KekViBUuh5fg';
    map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [ 3.6005095, 50.7505367],
    zoom: 13 
    });
}
function setEVAList(list){
    allitems = list;
    currentList = allitems;
    sortList(list);;
    showListInPage(list);
    setBedroomsLimit();
    setPriceLimit();
    setLivSurfaceLimit();
    setTotSurfaceLimit();
    initEventHandlers();
}

function changeSort(){
    if(currentSort === "asc"){
        currentSort = "desc";
        $('#sortImg').attr("src","Resources/Icons/arrow-down.png");

    }
    else{
        currentSort = "asc";
        $('#sortImg').attr("src","Resources/Icons/arrow-up.png");
 
    }

    sortList(currentList);
    showListInPage(currentList);
}

function sortList(list){
    if(currentSort === "asc" ){
        list.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }
    else{
        list.sort((a, b) => (a.price < b.price) ? 1 : -1)
    }
}

function setBedroomsLimit(){
    let maxB = Math.max.apply(Math, allitems.map(function(o) { return o.bedrooms; }))
    let parent = document.getElementById("bedroomsD");
    for(let i = 0; i < maxB; i++){
        let p = document.createElement('p');
        p.className = "solop";
        p.innerHTML = i + 1;
        p.onclick = function(){
            addFilter("bedrooms", p.innerHTML, p);
        }
        parent.append(p);
    }
}

function setPriceLimit(){
    let maxB = Math.max.apply(Math, allitems.map(function(o) { return o.price; }))
    let parent = document.getElementById("pricerange");
    parent.max = maxB + 20000;
    parent.value = parent.max;
    setRangeSpan(parent, document.getElementById("pricerangespan"), "€");
}
function setLivSurfaceLimit(){
    let maxB = Math.max.apply(Math, allitems.map(function(o) { return o.livSurface; }))
    let parent = document.getElementById("livSurfaceRange");
    parent.max = maxB + 20;
    parent.value = parent.max;
    setRangeSpan(parent, document.getElementById("livSurfaceRangeSpan"), "m²");
}
function setTotSurfaceLimit(){
    let maxB = Math.max.apply(Math, allitems.map(function(o) { return o.totSurface; }))
    let parent = document.getElementById("totSurfaceRange");
    parent.max = maxB + 20;
    parent.value = parent.max;
    setRangeSpan(parent, document.getElementById("totSurfaceRangeSpan"), "m²");
}


function inputRangeFilterChanged(value, filterType){
    let range;
    let span;
    let symbol;

    switch(filterType){
        case "price":
            range = document.getElementById("pricerange");
            span = document.getElementById("pricerangespan");
            symbol = "€";
            break;
        case "livSurface":
            range = document.getElementById("livSurfaceRange");
            span = document.getElementById("livSurfaceRangeSpan");
            symbol = "m²";
            break;
        case "totSurface":
            range = document.getElementById("totSurfaceRange");
            span = document.getElementById("totSurfaceRangeSpan");
            symbol = "m²";
            break;
    }

    setRangeSpan(range,span,symbol);
    addFilter(filterType,value,null);
}

function setRangeSpan(range,span,symbol){
    let value = range.value;
    span.innerHTML = value + " " + symbol;
}
function showListInPage(list){
    //Set the amout of results
    $('#listCount').html(list.length + " padden");
    //Clean container
    let parent = document.getElementById("padsContainer");
    parent.innerHTML = "";
    for(let i = 0; i < list.length; i++){
        let pad = list[i];

        let padCard = document.createElement("div");
        padCard.className = "pad-card";

        //Top Of card
        let padImages = document.createElement("div");
        padImages.className = "padImages";

        let padImg = document.createElement('img');
        padImg.className = "padImage";
        padImg.src = pad.img;

        padImages.append(padImg);
        padCard.append(padImages);

        //Bot of Card
        let padInfo = document.createElement('div');
        padInfo.className = "pad-info";

        let infoRow1 = document.createElement('div');
        infoRow1.className = "info-row";
        let span1 = document.createElement("span");
        span1.innerHTML = "For Sale";
        let span2 = document.createElement("span");
        span2.innerHTML = pad.type;

        infoRow1.append(span1);
        infoRow1.append(span2);

        let infoRow2 = document.createElement('div');
        infoRow2.className = "info-row";
        let priceSpan = document.createElement('span');
        priceSpan.innerHTML = "€ " + pad.price;
        infoRow2.append(priceSpan);

        let infoRow3 = document.createElement('div');
        infoRow3.className = "info-row";

        let info = document.createElement('info');
        info.className = "info";
        let bedroomsSpan = document.createElement('span');
        bedroomsSpan.innerHTML = pad.bedrooms;
        let iconBedrooms = document.createElement('img');
        iconBedrooms.src = "Resources/Icons/bedroom-grey.png";
        info.append(bedroomsSpan);
        info.append(iconBedrooms);

        let info2 = document.createElement('info');
        info2.className = "info";
        let bathRoomsSpan = document.createElement('span');
        bathRoomsSpan.innerHTML = pad.bathrooms;
        let iconBathRooms = document.createElement('img');
        iconBathRooms.src = "Resources/Icons/bath-grey.png";
        info2.append(bathRoomsSpan);
        info2.append(iconBathRooms);
        
        let info3 = document.createElement('info');
        info3.className = "info";
        let surfaceSpan = document.createElement('span');
        surfaceSpan.innerHTML = pad.livSurface + ' m²';
        info3.append(surfaceSpan);

        infoRow3.append(info);
        infoRow3.append(info2);
        infoRow3.append(info3);

        let infoRow4 = document.createElement('div');
        infoRow4.className = "info-row";

        let streetSpan = document.createElement('span');
        streetSpan.innerHTML = pad.adress;
        let citySpan = document.createElement('span');
        citySpan.innerHTML = pad.city;

        infoRow4.append(streetSpan);
        infoRow4.append(citySpan);

        padInfo.append(infoRow1);
        padInfo.append(infoRow2);
        padInfo.append(infoRow3);
        padInfo.append(infoRow4);
        padCard.append(padInfo);
        
        addMarkerToMap(pad);
        parent.append(padCard);
    }
 
}

function initEventHandlers(){
    //Search by city
    document.getElementById('streetSearch').addEventListener('input', function (evt) {
        //Filter
         addFilter('city', this.value);
    });
}

function closeDropDown(){
    let dropdowns = $('.dropdown .dropdown-content');
    dropdowns.removeClass('hoverA');
    setTimeout(function(){
        dropdowns.addClass('hoverA')
    },100);

}

function addMarkerToMap(property){
    
  const el = document.createElement('div');
  el.className = 'marker';
  switch(property.type.toLowerCase()){
      case "huis":
        el.className = 'markerBuilding';
        break;
      case "garage":
        el.className = 'markerGarage';
        break;
      case "land":
        el.className = 'markerLand';
        break;
      default:
        el.className = 'markerBuilding';
        break;
  }
  let title = "hi";
  let description = "desc";
  new mapboxgl.Marker(el)
  .setLngLat([property.localisation[0], property.localisation[1]])
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(`<h3>€ ${property.price }</h3><p>${property.adress}</p>`)
  )
  .addTo(map);
}

function addFilter(filterType, value, element){
    let reset = false;
    let parent;
    let resetOldDOM;
    closeDropDown();
    
    switch(filterType){
        case "type":
            parent = $('#typespan');
            //Filter removed
            if(type == value){
                parent.html("Type");
                $('.type .dropdown-content').css('box-shadow', '0 1px 2px #0000001c');
                $('.type').css('box-shadow', '0 1px 2px #0000001c');
                type = null;
            }
            //Filter Added
            else{
                parent.html(value);
                $('.type').css('box-shadow', '#0075ff 0 1px 6px');
                $('.type .dropdown-content').css('box-shadow', '#0075ff 0 7px 6px');
                type = value;
            }
            if(lastTypeDOM){
                reset = true;
            }
            resetOldDOM = colorizeSpan(element, lastTypeDOM);
            if(resetOldDOM == true){
                lastTypeDOM = null;
            }
            else {
                lastTypeDOM = element;
            }
            break;
        case "option":
            options.push(value)
            break;
        case "bedrooms":
            parent = $('#bedroomsspan');
            
            //Filter removed
            if(bedrooms == value){
                parent.html("Slaapkamers");
                $('.bedrooms').css('box-shadow', '0 1px 2px #0000001c');
                $('.bedrooms .dropdown-content').css('box-shadow', '0 1px 2px #0000001c');
                bedrooms = null;
            }
            //Filter Added
            else{
                parent.html(value);
                $('.bedrooms').css('box-shadow', '#0075ff 0 1px 6px');
                $('.bedrooms .dropdown-content').css('box-shadow', '#0075ff 0 7px 6px');
                bedrooms = value;
            }
            if(lastBedroomDOM){
                reset = true;
            }
            resetOldDOM = colorizeSpan(element, lastBedroomDOM);
            if(resetOldDOM){
                lastBedroomDOM = null;
            }
            else lastBedroomDOM = element;

            break;
        case "city":
            console.log(value);
                     //Filter removed
                     if(value === "" ){
                        city = null;
                        reset = true;
                    }
                    //Filter Added
                    else{
                        city = value;
                    }
            break;
        case "price":
            parent = $('#pricespan');
            reset = true;
            parent.html(value);
            $('.price').css('box-shadow', '#0075ff 0 1px 6px');
            $('.price .dropdown-content').css('box-shadow', '#0075ff 0 7px 6px');
            price = value;
            break;
        case "livSurface": 
            parent = $('#livSurfaceSpan');
            reset = true;
            parent.html(value + " m² bew. Opp");
            $('.bewopp').css('box-shadow', '#0075ff 0 1px 6px');
            $('.bewopp .dropdown-content').css('box-shadow', '#0075ff 0 7px 6px');
            livSurface = value;
            break;
        case "totSurface":
            parent = $('#totSurfaceSpan');
            reset = true;
            parent.html(value + " m² Grond Opp");
            $('.grondopp').css('box-shadow', '#0075ff 0 1px 6px');
            $('.grondopp .dropdown-content').css('box-shadow', '#0075ff 0 7px 6px');
            totSurface = value;
            break;
            
    }


    filterList(reset,filterType);
}

function colorizeSpan(element, oldElement){

     //Colorize
     if(element != null){
        element.classList.add("selected");
        
        if(oldElement != null){
            oldElement.classList.remove("selected");

            if(oldElement.innerHTML === element.innerHTML){
                element.classList.remove("selected");
                return true;
            }
        }
    }
}


function filterList(reset, filterType){
    let result = currentList;

    if(reset){
        result = allitems;
    }
  
    //Type of the property
    if(filterType === "type" || reset){
        if(type != null){
            result = result.filter(function (prop) {
                return prop.type === type;
              });
        }
    }

    if(filterType === "option" || (reset && options.length > 0)){
     //TODO
    }

    if(filterType === "bedrooms" || reset){
        if(bedrooms != null){
            result = result.filter(function (prop) {
                return prop.bedrooms == bedrooms;
              });
        }
     }

     if(filterType === "city" || reset ){
         if(city != null){
            result = result.filter(function (prop) {
                return prop.city.toLowerCase().includes(city.toLowerCase());
              });
         }
     }

     if(filterType === "price" || reset){
         if(price != null){
            result = result.filter(function (prop) {
                return prop.price <= price;
            });
         }
     }

     if(filterType === "livSurface" || reset){
         if(livSurface != null){
            result = result.filter(function (prop) {
                return prop.livSurface <= livSurface;
              });
         }    
     }

     if(filterType === "totSurface" || reset){
         if(totSurface != null){
            result = result.filter(function (prop) {
                return prop.totSurface < totSurface;
              });
         }
     }
     currentList = result;
     showListInPage(result);
}