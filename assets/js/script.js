const albumCards = document.querySelectorAll(".album-card");
const featuredImg = document.querySelectorAll(".featured-image");
const modal = document.querySelector(".modal");
const imgPopup = document.querySelector(".img-popup");
const modalTitle = document.querySelector(".modal-title");
const albumTitle = document.querySelectorAll(".album-title");
const modalDesc = document.querySelector(".modal-desc");
const desc = document.querySelectorAll(".desc");
const mobileMenu = document.querySelector(".mobile-menu");
const mainMenu = document.querySelector(".main-menu");
const menuItem = document.querySelector(".menu-item");

albumCards.forEach((album, index) => {
    album.addEventListener("click", () => {
      modal.classList.toggle("open");
      feature(index);
    });
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
});

function feature(indexNumber) {
    console.log(indexNumber);
    const currentImg = featuredImg[indexNumber];
    const source = currentImg.getAttribute("src");
    const currentTitle = albumTitle[indexNumber];
    modalTitle.textContent = currentTitle.textContent;
    const currentText = desc[indexNumber];
    modalDesc.textContent = currentText.textContent;
    imgPopup.src = source;
}

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-active");
    mainMenu.classList.toggle("main-active");
});