let website = document.querySelector("html");
let body = document.querySelector("body");
let drops = document.querySelector(".c-banner__drops");
let leafTop = document.querySelector(".c-banner__leaftop");
let leafRight = document.querySelector(".c-banner__leafright");
let leafTopMobile = document.querySelector(".c-header__leaftopmenu");
let leafRightMobile = document.querySelector(".c-header__leafrightmenu");

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

$(".c-info__more").click(function () {
  $(this)
    .parent()
    .parent()
    .parent()
    .find(".c-info__overlay")
    .removeClass("c-info__overlay--flex");
  $(this).parent().next().addClass("c-info__overlay--flex");
});

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

menuBtnSp.addEventListener("click", function () {
  menuBar.classList.toggle("is-tabandspnotvisible");
  body.style.top = "0px"
  mobileMenuHandler();
});

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    menuBar.classList.toggle("is-tabandspnotvisible");
    mobileMenuHandler();
  });
});

$(".c-column__sparrowblock").click(function () {
  $(this)
    .prev()
    .children(".c-column__article")
    .children(".c-column__description")
    .toggleClass("is-sphidden");
});

$(".c-column__sparrow")
  .parent()
  .click(function () {
    $(this).children().toggleClass("is-rotated");
  });

