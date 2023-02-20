let website = document.querySelector("html");
let body = document.querySelector("body");

let drops = document.querySelector(".c-banner__drops");
let leafTop = document.querySelector(".c-banner__leaftop");
let leafRight = document.querySelector(".c-banner__leafright");
let leafTopMobile = document.querySelector(".c-header__leaftopmenu");
let leafRightMobile = document.querySelector(".c-header__leafrightmenu");

// scroll ẩn hiện bubble và leaf
document.addEventListener("scroll", (e) => {
  if (website.scrollTop <= 1) {
    drops.classList.remove("is-hidden");

    leafTop.classList.remove("is-indented--top");
    leafRight.classList.remove("is-indented--right");
  } else {
    drops.classList.add("is-hidden");

    leafTop.classList.add("is-indented--top");
    leafRight.classList.add("is-indented--right");
  }
  // cuộn đến phần nào thì sáng nav bar phần đó
  check_el_pos();
});

let navLinks = document.querySelectorAll(".c-header__navlink");
function check_el_pos() {
  let scroll_pos = window.scrollY;
  let sections = document.querySelectorAll(".p-scroll");
  sections.forEach(function (section, index) {
    if (scroll_pos + 500 >= section.offsetTop) {
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("is-active");
      });
      navLinks[index].classList.add("is-active");
    }
  });
}

// click vào more trong point để ẩn hiện overlay trong 1 point nhung khong tat overlay cua point khac

$(".c-info__more").click(function () {
  $(this)
    .parent()
    .parent()
    .find(".c-info__overlay")
    .removeClass("c-info__overlay--flex");
  $(this).next().addClass("c-info__overlay--flex");
});

// MOBILE MENU
let menuBtnSp = document.querySelector(".c-banner__iconmenu");
let menuBar = document.querySelector(".c-header");
let bodyElement = document.querySelector("body");

function mobileMenuHandler() {
  if (menuBar.classList.contains("is-tabandspnotvisible")) {
    menuBtnSp.src = "./assets/img/header/iconmenu_green_mobile.png";
    menuBtnSp.classList.add("u-backgroundwhite");
    menuBtnSp.classList.remove("u-backgroundgreen");
    bodyElement.classList.remove("u-disablescroll");
    leafRight.classList.remove("is-notvisible");
    leafTop.classList.remove("is-notvisible");

    leafRightMobile.classList.remove("is-displayedmenumobile");
    leafTopMobile.classList.remove("is-displayedmenumobile");
  } else {
    menuBtnSp.src = "./assets/img/header/iconmenu_white_mobile.png";
    menuBtnSp.classList.remove("u-backgroundwhite");
    menuBtnSp.classList.add("u-backgroundgreen");
    bodyElement.classList.add("u-disablescroll");
    leafRight.classList.add("is-notvisible");
    leafTop.classList.add("is-notvisible");

    leafRightMobile.classList.add("is-displayedmenumobile");
    leafTopMobile.classList.add("is-displayedmenumobile");
  }
}
// click vào menu button để ẩn hiện menu bar
menuBtnSp.addEventListener("click", function () {
  menuBar.classList.toggle("is-tabandspnotvisible");
  body.classList.toggle("u-fixed");
  body.style.top = "0px"
  mobileMenuHandler();
});
// click vào nav button menu để ẩn menu bar
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    menuBar.classList.toggle("is-tabandspnotvisible");
    mobileMenuHandler();
  });
});

//click arrow down to display / hide column description
$(".c-column__sparrowblock").click(function () {
  $(this)
    .prev()
    .children(".c-column__article")
    .children(".c-column__description")
    .toggleClass("is-sphidden");
});

//arrow rotate
$(".c-column__sparrow")
  .parent()
  .click(function () {
    $(this).children().toggleClass("is-rotated");
  });
