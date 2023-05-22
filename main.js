const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-item"); 
const abtme = document.querySelector(".container1"); 

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    abtme.classList.toggle("active");
}
)
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    abtme.classList.remove("active");

}))