let btc =document.getElementById("bitcoin");
let eth =document.getElementById("ethereum");
let dog =document.getElementById("dogecoin");

let settings = {
    "async": true,
    "scrossDomain": true,
    "url" :"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "method":"GET",
    "headers":{}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    dog.innerHTML = response.dogecoin.inr;
});

let Navigation = document.getElementById("navbar")
let Icon = document.getElementById("icon");


function mobileMenu(){
    Navigation.classList.toggle('responsive');

    if(Navigation.classList.contains("responsive")){
        Icon.innerHTML = "&#10005;";
        Icon.style.transform =" rotate(180deg)";
        Icon.style.transition =" all 0.2s linear";
        
    } else {
        Icon.innerHTML = "&#8801;";
        Icon.style.transform =" rotate(0deg)";
        Icon.style.transition =" all 0.2s linear";
    }

}

