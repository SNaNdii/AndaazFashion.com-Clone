let arr = [
    "https://assets2.andaazfashion.com/media/images/m2-home-page/home-page-customization-hero-banner-d-08102022.jpg", 
    "https://assets2.andaazfashion.com/media/images/m2-home-page/home-page-plus-size-hero-banner-d-15102022.jpg",
    "https://assets2.andaazfashion.com/media/images/m2-home-page/home-page-wedding-dresses-hero-banner-d-08102022.jpg"
]
let count = 0;
setInterval(function counter(){
    let box = document.getElementById("poster");
    box.innerHTML = ""
    let img = document.createElement("img");
    img.src = arr[count]
    if(count == arr.length-1){
        count = 0
    }
    else {
        count++
    }
    box.append(img);
}, 1500)