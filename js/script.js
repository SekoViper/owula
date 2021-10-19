/* Open */
window.openMenu = function openMenu() {
    getMenu().style.display = "block";
    hideMenuBtn();
    showCloseBtn();
    window.document.body.style.overflowY = 'hidden';
}

function showMenuBtn() {
    document.getElementById("menuBtn").style.display = "block";
}

function showShopMenuBtn() {
    document.getElementById("shop-btn").style.display = "block";
}

function hideMenuBtn() {
    document.getElementById("menuBtn").style.display = "none";
}

function hideShopMenuBtn() {
    document.getElementById("shop-btn").style.display = "none";
}


window.goToShop = function () {
    window.location = '/shop.html'
}

window.goToShopDetail = function () {
    console.log('clicked');
    window.location = '/shop-detail.html'
}

/* close menu */
window.closeMenu = function closeMenu() {
    getMenu().style.display = "none";
    hideCloseBtn();
    showMenuBtn();
    window.document.body.style.overflowY = 'scroll';
}

window.openLettersReadMore = function () {
    document.getElementsByClassName("read-more-expanded")[0].style.display = "block";
    document.getElementsByClassName("read-more-contracted")[0].style.display = "none";
}

window.openLettersReadLess = function () {
    document.getElementsByClassName("read-more-expanded")[0].style.display = "none";
    document.getElementsByClassName("read-more-contracted")[0].style.display = "block";
}


window.goToDetail = function () {
    window.location = '/letter-detail.html'
}

function showCloseBtn() {
    document.getElementById("closeBtn").style.display = "block";
}


function hideCloseBtn() {
    document.getElementById("closeBtn").style.display = "none";
}



function getMenu() {
    return document.getElementById("mainMenu");
}
