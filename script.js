const btnMobile = document.getElementById("mobile-menu-btn");
const sidePanel = document.getElementById("side-panel");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");

btnMobile.addEventListener("click", () => {
  sidePanel.classList.add("open");
  overlay.classList.add("visible");
});
closeMenu.addEventListener("click", () => {
  sidePanel.classList.remove("open");
  overlay.classList.remove("visible");
});

function close(){
    if (sidePanel.classList.contains("open")) {
    sidePanel.classList.toggle("open");
    overlay.classList.toggle("visible");
  }
}
closeMenu.addEventListener("click", () => {
  close();
});
overlay.addEventListener("click", () => {
    close();
})

