

// const menu = document.getElementById("menu")

// function showMenu() {
//     menu.style.display = "block";
//     menu.style
// }

const menu = document.getElementById("menu")
let humburger = document.querySelector(".humburger")
const windowBody = document.getElementsByTagName("body")[0];

function displayMenu() {
    
    if (humburger.innerText === "+") {
        humburger.innerHTML = "x"
        menu.style.display = "block";
        humburger.classList.add("is-minus")
    }else {
        humburger.innerHTML = "+";
        menu.style.display = "none";
        humburger.classList.remove("is-minus")
    } 
}
