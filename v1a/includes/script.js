console.log("JS dosyası yüklendi");

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

console.log("hamburger:", hamburger);
console.log("navMenu:", navMenu);

hamburger.addEventListener("click", () => {
    console.log("Hamburger tıklandı");

    if (navMenu.style.maxHeight && navMenu.style.maxHeight !== "0px") {
        navMenu.style.maxHeight = "0px";
    } else {
        navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    }
});
