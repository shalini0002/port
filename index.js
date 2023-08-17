const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

window.addEventListener('scroll', () => {
    // console.log("scrlooed");
    navMenu.classList.remove("active");
 })

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
     
}))

// const scroll = document.querySelector(".nav-menu");
// console.log(scroll);