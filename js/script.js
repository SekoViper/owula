/* Open */
window.openMenu = function openMenu() {
    const menu = getMenu();
    console.log()
    menu.style.display = "block";
    menu.style.height = "100vh"
    hideMenuBtn();
    showCloseBtn();
    window.document.body.style.overflowY = 'hidden';
    window.document.body.style.position = 'fixed';
    window.document.body.style.left = '2.6rem';
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
    const menu = getMenu();
    menu.style.height = "0vh"
    menu.style.display = "none";
    hideCloseBtn();
    showMenuBtn();
    window.document.body.style.overflowY = 'scroll';
    window.document.body.style.position = '';
    window.document.body.style.left = '0';
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
