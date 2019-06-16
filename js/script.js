$(document).ready(function () {

    //  CIRCLES

    var circleNumber = 10 + Math.random() * 10; // circle number
    var lead = document.getElementById("lead");

    for (i = 0; i < circleNumber; i++) {
        let positionTop = Math.random() * 100; // position top
        let positionLeft = Math.random() * 90; // position left
        let circleSize = parseInt(1 + Math.random() * 100); // size
        let circlecolorR = parseInt(Math.random() * 255);
        let circlecolorG = parseInt(Math.random() * 255);
        let circlecolorB = parseInt(Math.random() * 255);
        let circleOpacity = 0.1 + Math.random() * 0.4; // opacity
        let circle = document.createElement('div');
        // setting className - defined in css
        circle.className = "circle";
        // setting position, width, height and colors
        circle.style.left = positionLeft + "%";
        circle.style.top = positionTop + "vh";
        circle.style.width = circleSize + "px";
        circle.style.height = circleSize + "px";
        circle.style.background = `rgba(${circlecolorR},${circlecolorG},${circlecolorB},${circleOpacity})`;

        // append child to div with id lead
        lead.appendChild(circle);
    };

    // HAMBURGER MENU 
    $(".menu-icon").click(function () {
        $(".menu-icon").toggleClass('change');
        $("nav #navbar ul li").toggle(function () {
            $("#nav #navbar ul li").css({
                display: "none"
            });
        }, function () {
            $("#nav #navbar ul li").css({
                display: "block"
            });
        });
    });

    //   SCROLL
    var scrollLink = $('.scroll');
    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 20;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    // LIGHTBOX 
    // Click on small img
    $("#projects #gallery img").click(function () {
        // Display lightbox (delete class d-none)
        $("#lightbox").removeClass("d-none");
        // Make imgSrc is path to clicked img
        var imgSrc = $(this).attr("src");
        // Set imgSrc as path to big pic
        $("#lightbox #lightbox-items img").attr("src", imgSrc);
        var indexA = $(this).index();
        $("#lightbox #lightbox-items #text p").eq(indexA).removeClass("d-none");

        // Click on next event
        $("#next").click(function () {
            // if index of actual pic is the last
            if ($("#projects #gallery img").eq(indexA).is(":last-child")) {
                // Set index to 0
                indexA = 0;
            }
            // In any other case, set new index to index+1
            else {
                indexA = indexA + 1
            }
            // Path to the new img from projects section
            var imgSrc2 = $("#projects #gallery img").eq(indexA).attr("src");
            // Set path
            $("#lightbox #lightbox-items img").attr("src", imgSrc2);
            $("#lightbox #lightbox-items p").addClass("d-none");
            $("#lightbox #lightbox-items p").eq(indexA).removeClass("d-none");
        });

        // Click on back - event
        $("#prev").click(function () {
            if ($("#projects #gallery img").eq(indexA).is(":first-child")) {
                indexA = $("#projects #gallery img:last-child").index();
            } else {
                indexA = indexA - 1
            }
            var imgSrc2 = $("#projects #gallery img").eq(indexA).attr("src");
            $("#lightbox #lightbox-items img").attr("src", imgSrc2);
            $("#lightbox #lightbox-items p").addClass("d-none");
            $("#lightbox #lightbox-items p").eq(indexA).removeClass("d-none");
        });
    });

    // Click on close - event
    $("#close").click(function () {
        // Add class d-none
        $("#lightbox").addClass("d-none");
        $("#lightbox #lightbox-items #text p").addClass("d-none");
    });
});