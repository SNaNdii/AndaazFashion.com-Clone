let arr = [
    "Free India Shipping On Order Over 936Rs", 
    "Extra 10% Off, Coupon Code: WEDDING"
]
let count = 0;
setInterval(function counter(){
    let box = document.getElementById("nav_1_2");
    box.innerHTML = arr[count]
    if(count == arr.length-1){
        count = 0
    }
    else {
        count++
    }
}, 1500)