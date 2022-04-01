
let searchBtn = document.getElementById("search-icon");
let searchBar = document.querySelector(".search-bar-container")

let formBtn = document.getElementById("login-btn");
let formCloseBtn = document.getElementById("icon-form-close");
let loginForm = document.querySelector(".login-form-container");

let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar-container");

let videoBtnLists = document.querySelectorAll(".vid-btn");


window.onscroll = () =>{
	searchBtn.classList.remove("fa-times");
	searchBar.classList.remove("display");
	menu.classList.remove("fa-times");
	navbar.classList.remove("display-navbar");
}

searchBtn.addEventListener("click",()=>{
	searchBtn.classList.toggle("fa-times");
	searchBar.classList.toggle("display");
})

formBtn.addEventListener("click",()=>{
	loginForm.classList.add("display-form");
})

formCloseBtn.addEventListener("click",()=>{
	loginForm.classList.remove("display-form");
})

menu.addEventListener("click",()=>{
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("display-navbar");
})

console.log(videoBtnLists)

videoBtnLists.forEach( btn =>{
	btn.addEventListener("click",()=>{
		document.querySelector(".vid-btn.play-video").classList.remove("play-video");
		btn.classList.add("play-video");
		let src = btn.getAttribute("src-videos");
		document.querySelector("#banner").src=src;
	});
});



var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});