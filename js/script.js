$(document).ready(function () {

    //  CIRCLES

    var circleNumber = 10 + Math.random() * 10;
    var lead = document.getElementById("lead");

    for (i = 0; i < circleNumber; i++) {
        let positionTop = Math.random() * 100;
        let positionLeft = Math.random() * 90;
        let circleSize = parseInt(1 + Math.random() * 100);
        let circle = document.createElement('div');
        circle.className = "circle";
        circle.style.left = positionLeft + "%";
        circle.style.top = positionTop + "vh";
        circle.style.width = circleSize + "px";
        circle.style.height = circleSize + "px";
        lead.appendChild(circle);
    }

    // hamburger menu
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
    // Kliknięcie na mały obrazek
    $("#projects #gallery img").click(function () {
        // Wyświetlenie okienka z powiększeniem (usuwam klasę d-none)
        $("#lightbox").removeClass("d-none");
        // ustalam, że zmienna imgSrc to ścieżka do klikniętego obrazka
        var imgSrc = $(this).attr("src");
        // ustalam że ścieżka dużego obrazka to imgSrc
        $("#lightbox #lightbox-items img").attr("src", imgSrc);
        var indexA = $(this).index();
        $("#lightbox #lightbox-items #text p").eq(indexA).removeClass("d-none");
        // alert(indexA);

        // Kliknięcie na "dalej"
        $("#next").click(function () {

            // Jeżeli indeks bieżącego obrazka jest ostatnim
            if ($("#projects #gallery img").eq(indexA).is(":last-child")) {
                // Ustal index na 0
                indexA = 0;
            }
            // W każdym innym wypadku nowy index to index+1
            else {
                indexA = indexA + 1
            }
            // Ścieżka nowego obrazka z sekcji projects
            var imgSrc2 = $("#projects #gallery img").eq(indexA).attr("src");
            // Wrzucenie ścieżki 
            $("#lightbox #lightbox-items img").attr("src", imgSrc2);
            $("#lightbox #lightbox-items p").addClass("d-none");
            $("#lightbox #lightbox-items p").eq(indexA).removeClass("d-none");

        });

        // Kliknięcie wstecz

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

    // Kliknięcie na "zamknij"
    $("#close").click(function () {
        // Dodanie klasy d-none - lightbox się nie wyświetla   
        $("#lightbox").addClass("d-none");
        $("#lightbox #lightbox-items #text p").addClass("d-none");
    });

});

// BUBBLES