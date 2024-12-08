$(document).ready(function () {
  $(".info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          focusOnSelect: false,
        },
      },
    ],
  });

  $(".info-slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          focusOnSelect: false,
        },
      },
    ],
  });

  $(".infrastructure-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $(".header").toggleClass("red");
    $("body, html").toggleClass("overflow");
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 1,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    initialSlide: 1, // Синхронизация со вторым слайдом
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          focusOnSelect: false,
          autoplay: true,
        },
      },
    ],
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".main-menu li a").smoothScroll({
    speed: 1000,
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".advantages", {
    opacity: 1,
    y: 0,
    duration: 1.5, // Продолжительность будет игнорироваться, если есть scrub
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".advantages",
      start: "top 100%",
      end: "top 20%",
      toggleActions: "play none none none",
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".video-wrap", {
    opacity: 1,
    y: 0,
    duration: 1.5, // Продолжительность будет игнорироваться, если есть scrub
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".video-wrap",
      start: "top 100%",
      end: "top 20%",
      toggleActions: "play none none none",
    },
  });

  AOS.init();
});
