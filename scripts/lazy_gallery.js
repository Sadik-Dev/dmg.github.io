

   let numberOfSliders = 1;
   let counters = Array.apply(null, Array(numberOfSliders)).map(Number.prototype.valueOf, 0);
   let imageCache = [...Array(numberOfSliders)].map(x => Array());       
   
//If you hardcode the paths use next var structure and delete the parameter in Lazy() function

let images =
[
  // Slideshow 1 paths

    [
    "https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519",
    "resources/images/3d-rendering-house-visualisation.jpg",
    "https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg",
    "resources/images/couple-moving-new-home-happy-married-people-buy-new-apartment-start-new-life-together (1).jpg"
    ]
]

    
async function Lazy() {
   
    let sliders = document.getElementsByClassName("sliderFrame");

    for (let x = 0; x < sliders.length; x++) {

     const fill = new Promise((resolve, reject) => {
        for (let y = 0; y < images[x].length; y++) {

            let img = document.createElement("img");
            img.src = images[x][y];
            sliders[x].lastElementChild.firstElementChild.appendChild(img);
        }
        resolve(true);
    });

    //Eventhandlers
    fill.then(bool => {
        SlideShow(sliders[x], x);
    });
    }  
}
   
function SlideShow(slideshow, i) {
    let images = slideshow.lastElementChild.firstElementChild.children;
    let slide = slideshow.firstElementChild.firstElementChild;

    counters[i] = (counters[i] + 1) % images.length;
    let newPath = images[counters[i]].src
    slide.firstElementChild.src = newPath;
     
    //Carousel
    for (let y = 0; y < images.length; y++) {
        images[y].onclick = function () {
            slide.firstElementChild.src = images[y].src;
            counters[i] = y;
        }
}

}
   
   
   