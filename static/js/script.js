const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navList = document.getElementById("nav-list");

// Functions
function toggleNav(){
    // Toggle: Menu Bars Open/Close
    menuBars.classList.toggle("change");
    // Toggle: Menu Active
    overlay.classList.toggle("overlay-active");
    if(overlay.classList.contains("overlay-active")){
        // Animate in - Overlay
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

        // Animate in - Nav Items
        for (let nav of navList.children){
            nav.classList.replace(`slide-out-${nav.id.slice(-1)}`,`slide-in-${nav.id.slice(-1)}`);
        }
    }
    else {
        // Animate out - Overlay
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

        // Animate out - Nav Items
        for (let nav of navList.children){
            nav.classList.replace(`slide-in-${nav.id.slice(-1)}`,`slide-out-${nav.id.slice(-1)}`);
        }
    }
}
// Event Listeners
menuBars.addEventListener("click", toggleNav);

for (let nav of navList.children) {
    document.getElementById(nav.id).addEventListener("click", toggleNav);
}
