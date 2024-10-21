// Hamburger menü ikonu ve kapatma ikonu seçicileri
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');

// Hamburger ikonuna tıklanınca menüyü göster
hamburgerMenu.addEventListener('click', () => {
    menu.style.display = 'flex'; // Menüyü göster
});

 // Çarpı ikonuna tıklanınca menüyü gizle
 closeMenu.addEventListener('click', () => {
     menu.style.display = 'none'; // Menüyü gizle
 });