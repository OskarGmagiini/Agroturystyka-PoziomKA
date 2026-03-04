const burger=document.querySelector(".burger-nav");
const sideMenu=document.querySelector(".sideMenu");
const sideMenuLinks=document.querySelectorAll(".sideMenuLinks")
console.log(sideMenu);
console.log(burger);
var show = false;

burger.addEventListener("click",function(){
    console.log("Burger has been clicked")
    sideMenu.classList.toggle("sideMenuShow")
})
sideMenuLinks.forEach(ml => {
    console.log("askdjlkasdj")
  ml.addEventListener("click", () => {
    sideMenu.classList.toggle("sideMenuShow");
    console.log("lkasclsk")
    
    

    })})