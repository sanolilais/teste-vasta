$(document).ready(function () {
    if ($(window).width() > 325) {
        var bannerHeight = $("#banner").height();
        $("#banner-items").css("top", (bannerHeight / 2) + "px");

    }
    if ($(window).width() <= 480) {
        //hideShow($("#section-about2"), $("#botao-about"), $("#text-container1"), ("#section-about2"));
        //var $("#section-about2") =  $("#section-about2");
        var bannerHeight = $("#banner").height();
        $("#banner-items").css("transform", "translate(0, "+(bannerHeight/4)+"px");
        const itemMenu = document.querySelectorAll(".menu-item");
        itemMenu.forEach(n =>n.classList.remove("menu"));
        
        $("#botao-about").remove();
        $("#image-about2").remove();
        var leiaMais = $("<a id='show-more'></a>").text("Leia Mais ˅");
        $("#section-about1").append(leiaMais);
        hideShow();

    }
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("#menu");
    const navBar = document.querySelector("#navbar");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        navBar.style.backgroundColor = "#fff"
        const navBarHeight = navBar.offsetHeight + "px";
        navMenu.style.top = navBarHeight;
    }

    const navLink = document.querySelectorAll(".menu-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

});
const hideShow = function () {

    $("#section-about2").hide(1000);

    $("#show-more").click(function () {
        $("#section-about2").show(1000);
        var showMore = $("#show-more");
        $("#show-more").remove();
        showMore.text("Mostrar menos ˄");

        showMore.click(function () {
            $("#section-about2").hide(1000);
            showMore.text("Leia Mais ˅");
            $("#section-about1").append(showMore);
            $("#show-more").click(hideShow());
        });

        $("#section-about2").append(showMore);

    });

}

