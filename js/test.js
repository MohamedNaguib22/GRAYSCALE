const navbar = document.querySelector("nav");
document.addEventListener("scroll",function(){
    if (window.scrollY >=2) {
        navbar.setAttribute("class", "mo1");
        navbar.style.transition = "0.3s all";

    }else {
        navbar.classList.remove("mo1");
        navbar.classList.add("mo");
        navbar.style.transition = "0.3s all";
    }
})
const dropDown = document.querySelector(".Dropdown");
const muneDrop = document.querySelector(".btn");

muneDrop.addEventListener("click", () => { 
    dropDown.style.display = "flex"
}
)
muneDrop.addEventListener("blur", () => { 
    dropDown.style.display = "none"
}
)