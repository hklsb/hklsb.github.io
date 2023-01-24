const icon = document.getElementById("hamburger");
const menu = document.getElementById("mobile_nav");
const h1 = document.querySelector("h1");
const screenWidth = window.screen.width;
const price = document.querySelector(".price_value");
const product = document.querySelector(".product");

icon.addEventListener("click",callMe);
h1.addEventListener("mouseenter",changeText);
h1.addEventListener("mouseleave",changeTextAgain);
product.addEventListener("mouseenter",priceIncrease);
product.addEventListener("mouseleave",priceNormal);


const mobile = 640;
const tablet = 960;
const desktop = 1366;

firstTime = true;

function priceIncrease() {
    price.innerText = "10.00";
}

function priceNormal() {
    price.innerText = "2.00";
}

function changeText() {
    h1.innerText = "You touched me!!";
}

function changeTextAgain() {
    h1.innerText = "You left me!!";
}

function callMe() {
    if(firstTime) {
        mobile_nav.setAttribute("class","show");
        icon.setAttribute("src","/icons/menu_close.svg");
        icon.setAttribute("width","40px");
        firstTime=false;
    }
    else {
        mobile_nav.setAttribute("class","mobile_nav");
        icon.setAttribute("src","/icons/menu_open.svg");
        icon.setAttribute("width","50px");
        firstTime=true;
    } 

}

if(screenWidth >= mobile) {
    icon.style.setProperty("display","none");
    mobile_nav.setAttribute("class","show_desktop");
}
