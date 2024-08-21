const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function pageA4Animation(){
  // code to display fixed div only when hover over the tags //
  // when to display image //
  const elemC = document.querySelector("#elem-container");
  const fixed = document.querySelector("#fixed-image");

  elemC.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave",() => {
    fixed.style.display = "none";
  })

  // code to change the image in the fixed div // 
  // which image is to display  // 
  let elems = document.querySelectorAll(".elem");
  elems.forEach((elem) => {
    elem.addEventListener("mouseenter",()=>{
      
      const image = elem.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    })
  })
}

function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

function menuAnimation(){
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click",()=>{
    if(flag===0){
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    }
    else{
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 1;
    }
    
  });
}

function loaderAnimation(){
  var loader = document.querySelector("#loader");
  setTimeout(()=>{
    loader.style.top = "-100%";
  },4200)
}

swiperAnimation();
pageA4Animation();
menuAnimation();
loaderAnimation();


