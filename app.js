let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}


const navSlide = () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-content");
  const navLinks = document.querySelectorAll('.hide-link');

  // Set nav active status with boolean
  let isActive = false;
  console.log("nav-content-active : " + isActive)
  

  burger.addEventListener("click", ()=>{

      //Toggle nav
      nav.classList.toggle("nav-content-active");

      // Toggle nav active status to true/false
      isActive = !isActive;
      console.log("nav-content-active : " + isActive)
      
      //Animate link
      navLinks.forEach((link, index)=>{
          if(isActive) {
              link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
              console.log("nav li: "+ index + " in");
          } else {
              // link.style.animation = "";
              link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
              // link.style.animation = "";
              console.log("nav li: "+ index + " out");
          }
          console.log(link.style.animation);
      });
      
      //Burger animation
      burger.classList.toggle('toggle');
  });

}
navSlide();
