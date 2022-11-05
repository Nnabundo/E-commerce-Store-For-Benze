let burgerMenu = document.getElementById("burger-menu")
let nav = document.querySelector('.link-section')
let navLinks = document.querySelectorAll('.link-section a')

console.log(navLinks)





burgerMenu.addEventListener("click", ()=>{
   nav.classList.toggle('burger-active')

   navLinks.forEach((link, index)=>{
    
    if(link.style.animation){
        link.style.animation = ""
    }
    else{link.style.animation = ` navaction 0.5s ease forwards ${index / 7 + 0.5}s`}
   })

})
