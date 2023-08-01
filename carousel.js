if ($(window).width() > 991) {
  let glider;
  let testimonialWrap = $(".testimonial-slider-section");

  testimonialWrap
    .find(".glide__track")
    .get(0)
    .style.setProperty("opacity", "0");

  testimonialWrap.each(function () {
    glider = new Glide($(this).get(0), {
      type: "carousel",
      startAt: 0,
      perView: 2,
      focusAt: 1,
      gap: 0,
      autoplay: 5000,
      hoverpause: false,
      bound: true,
      dragThreshold: 1,
      peek: {
        before: 400,
        after: 330
      },
      animationDuration: 1000,
      animationTimingFunc: "cubic-bezier(0.65, 0, 0.35, 1)"
    });
    glider.mount();
    SetClassForActive(
      testimonialWrap
        .find(".glide__slide--active")
        .eq(0)
        .find(".testimonial-card")
        .eq(0)
    );
    testimonialWrap
      .find(".glide__track")
      .get(0)
      .style.setProperty("opacity", "1");
  });

  function SetClassForActive(activeSlide) {
    activeSlide.addClass("active-testimonial-card");
    testimonialWrap.find(".glide__slide--active").addClass("remove-blur");
    testimonialWrap
      .find(".glide__slide--active")
      .get(0)
      .style.setProperty("pointer-events", "inherit");
    setCardCSS(activeSlide, "1px", "10px", "15px", "30px", "0.2");
  }

  glider.on(["build.before", "run.after"], function () {
    let activeSlide = testimonialWrap
      .find(".glide__slide--active")
      .eq(0)
      .find(".testimonial-card")
      .eq(0);
    let allSlide = $(".testimonial-card");

    testimonialWrap.find(".glide__slide").each(function () {
      $(this).removeClass("remove-blur");
      $(this).get(0).style.setProperty("pointer-events", "none");
    });
    allSlide.each(function () {
      $(this).removeClass("active-testimonial-card");
      setCardCSS($(this), "0px", "0px", "2px", "0px", "0");
    });

    SetClassForActive(activeSlide);
  });

  glider.on(["move"], function () {
    let allSlide = $(".testimonial-card");

    testimonialWrap.find(".glide__slide").each(function () {
      $(this).removeClass("remove-blur");
      $(this).get(0).style.setProperty("pointer-events", "none");
    });
    allSlide.each(function () {
      $(this).removeClass("active-testimonial-card");
      setCardCSS($(this), "0px", "0px", "2px", "0px", "0");
    });
  });

  function setCardCSS(
    element,
    gradientBorder,
    gradientShadowInset,
    gradientShadowTransformY,
    gradientShadowBlur,
    gradientShadowOpacity
  ) {
    element.get(0).style.setProperty("--gradientBorder", gradientBorder);
    element
      .get(0)
      .style.setProperty("--gradientShadowInset", gradientShadowInset);
    element
      .get(0)
      .style.setProperty(
        "--gradientShadowTransformY",
        gradientShadowTransformY
      );
    element
      .get(0)
      .style.setProperty("--gradientShadowBlur", gradientShadowBlur);
    element
      .get(0)
      .style.setProperty("--gradientShadowOpacity", gradientShadowOpacity);
  }

  let topLayerMarginLeft;

  function bulletPositionSetter(leftMargin, before, after) {
    let bullet = $(".main-bullets");
    let bulletParent = $(".div-block-16");
    let widthLi = ($("html").width() - (before + after)) / 2;
    let bulletWrapperLeft =
      before + widthLi + widthLi / 2 - bullet.eq(0).width() / 2 - leftMargin;
    let bulletWrapperTop = bulletParent.height() - 20;
    bullet.get(0).style.setProperty("top", bulletWrapperTop + "px");
    bullet.get(0).style.setProperty("left", bulletWrapperLeft + "px");
  }

  $(window)
    //For Media Queries
    .on("resize", function () {
      let maxWidthVar;
      if ($(document).width() <= 1600) {
        maxWidthVar = 1150;
      } else {
        maxWidthVar = 1200;
      }

      if ($(document).width() > maxWidthVar) {
        topLayerMarginLeft = ($("html").width() - maxWidthVar) / 2;
      } else {
        topLayerMarginLeft = 0;
      }
      $(".testimonial-top-wrapper")
        .get(0)
        .style.setProperty("margin-left", topLayerMarginLeft + "px");
      bulletPositionSetter(
        topLayerMarginLeft,
        topLayerMarginLeft * 1.5,
        topLayerMarginLeft
      );

      glider.update({
        peek: {
          before: topLayerMarginLeft * 1.5,
          after: topLayerMarginLeft
        }
      });
    })
    .resize();

  glider.on("resize", function () {
    glider.update({
      peek: {
        before: topLayerMarginLeft * 1.5,
        after: topLayerMarginLeft
      }
    });
  });

  /* logo Ticker */

  let logoTicker;
  let logoTickerWrap = $(".logo-ticker-component > .glide");

  logoTickerWrap.each(function () {
    logoTicker = new Glide($(this).parent().find(".glide").get(0), {
      type: "carousel",
      startAt: 0,
      perView: 7.5,
      gap: 0,
      autoplay: -1,
      hoverpause: false,
      bound: true,
      dragThreshold: 10,
      animationDuration: 3000,
      animationTimingFunc: "linear"
    });
    logoTicker.mount();
  });

  /*Portfolio Showcase*/

  let showcaseTicker1;
  let showcaseTickerWrap1 = $(".showcase-ticker-wrapper-1 > .glide");

  showcaseTickerWrap1.each(function () {
    showcaseTicker1 = new Glide($(this).get(0), {
      type: "carousel",
      startAt: 0,
      perView: 2,
      focusAt: "center",
      gap: 30,
      autoplay: -1,
      hoverpause: false,
      bound: true,
      dragThreshold: 1,
      animationDuration: 10000,
      animationTimingFunc: "linear"
    });
    showcaseTicker1.mount();
  });

  let showcaseTicker2;
  let showcaseTickerWrap2 = $(".showcase-ticker-wrapper-2 > .glide");

  showcaseTickerWrap2.each(function () {
    showcaseTicker2 = new Glide($(this).get(0), {
      type: "carousel",
      startAt: 0,
      perView: 2,
      focusAt: "center",
      gap: 30,
      autoplay: -1,
      hoverpause: false,
      bound: true,
      dragThreshold: 1,
      animationDuration: 10000,
      animationTimingFunc: "linear"
    });
    showcaseTicker2.mount();
  });

  updatePerViewForShowcase(showcaseTicker1);
  updatePerViewForShowcase(showcaseTicker2);

  function updatePerViewForShowcase(glideVar) {
    if ($("html").width() > 1600) {
      glideVar.update({
        perView: 2.5
      });
    } else {
      glideVar.update({
        perView: 2
      });
    }
  }

  $(".showcase-scroll-control").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-block-29");

    let moveWidth = $("html").width() - targetElement.eq(0).width();

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom-=10%",
        end: "bottom top+=10%",
        scrub: 0.8
      }
    });
    tl.fromTo(
      targetElement,
      {
        x: moveWidth * -1 + "px"
      },
      {
        x: moveWidth + "px",
        duration: 1,
        ease: "circ.out"
      }
    );
  });

  let showcaseShadowTimer = false;

  /*  ScrollTrigger.create({
    trigger: $(".showcase-scroll-control"),
    // trigger element - viewport
    start: "top bottom",
    end: "bottom top",
    onToggle: () => {
      if (showcaseShadowTimer === false) {
        addShadowToShowcase();
      } else {
        clearInterval(showcaseShadowTimer);
        showcaseShadowTimer = false;
      }
    }
  }); */

  /* function addShadowToShowcase() {
    let showcaseImage = $(".showcase-image");
    let parent = $("html");
    showcaseImage.addClass("gradient-shadow");

    showcaseImage.each(function () {
      let currentImageElement = $(this);
      showcaseShadowTimer = setInterval(function () {
        let gradientPointA = currentImageElement.offset().left / parent.width();
        let gradientPointB =
          (currentImageElement.offset().left + currentImageElement.width()) /
          parent.width();
        if (
          gradientPointA >= 0 &&
          gradientPointA <= 100 &&
          gradientPointB >= 0 &&
          gradientPointB <= 100
        ) {
          setrgb(currentImageElement, gradientPointA, gradientPointB);
        }
      }, 50);
    });

    function setrgb(element, gradientPointA, gradientPointB) {
      //Define the points as percentages
      let points = [0.33, 0.66];

      let gradientColors = [getrgb(gradientPointA)];
      let intersectionPoints = ["0%"];
      // Loop through the points
      jQuery.each(points, function (index) {
        // Check whether L2 lies between any points or it intersects any point.
        if (
          points[index] >= gradientPointA &&
          points[index] <= gradientPointB
        ) {
          // Calculate the intersection point relative to L2 start.
          gradientColors.push(getrgb(points[index]));
          intersectionPoints.push(
            String((points[index] - gradientPointA) * 100) + "%"
          );
        }
      });

      gradientColors.push(getrgb(gradientPointB));
      intersectionPoints.push("100%");
      let gradientPointHTML = ``;

      jQuery.each(gradientColors, function (index) {
        gradientPointHTML =
          gradientPointHTML +
          `, rgba(${gradientColors[index].join()}, 1) ${
            intersectionPoints[index]
          }`;
      });

      let finalGradient = `linear-gradient( 90deg ${gradientPointHTML})`;
      element.css("--gradientBackground", finalGradient);
    }

    function getrgb(gradientProgress) {
      if (gradientProgress <= 0.33) {
        let currentProgress = Math.round((gradientProgress / 0.33) * 100) / 100;
        return pickRGB([255, 99, 99], [115, 82, 255], currentProgress);
      } else if (gradientProgress > 0.33 && gradientProgress < 0.66) {
        let currentProgress =
          Math.round(((gradientProgress - 0.33) / 0.33) * 100) / 100;
        return pickRGB([248, 180, 0], [255, 99, 99], currentProgress);
      } else if (gradientProgress > 0.66) {
        let currentProgress =
          Math.round(((gradientProgress - 0.66) / 0.33) * 100) / 100;
        return pickRGB([14, 183, 112], [248, 180, 0], currentProgress);
      }
    }

    function pickRGB(color1, color2, weight) {
      let p = weight;
      let w = p * 2 - 1;
      let w1 = (w / 1 + 1) / 2;
      let w2 = 1 - w1;
      let rgb = [
        Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)
      ];
      return rgb;
    }
  } */
} else {
  // for mobile
  let glider;
  let testimonialWrap = $(".div-block-12-mobile");

  testimonialWrap
    .find(".glide__track")
    .get(0)
    .style.setProperty("opacity", "0");

  testimonialWrap.each(function () {
    glider = new Glide($(this).get(0), {
      type: "carousel",
      startAt: 0,
      perView: 1,
      focusAt: 1,
      gap: 0,
      autoplay: 4000,
      hoverpause: false,
      bound: true,
      dragThreshold: 1,
      animationDuration: 400,
      animationTimingFunc: "cubic-bezier(0.65, 0, 0.35, 1)"
    });
    glider.mount();

    testimonialWrap
      .find(".glide__track")
      .get(0)
      .style.setProperty("opacity", "1");
  });

  /* logo Ticker */

  let logoTicker;
  let logoTickerWrap = $(".logo-ticker-component > .glide");

  logoTickerWrap.each(function () {
    logoTicker = new Glide($(this).parent().find(".glide").get(0), {
      type: "carousel",
      startAt: 0,
      perView: 2,
      gap: 0,
      autoplay: -1,
      hoverpause: false,
      bound: true,
      dragThreshold: 10,
      animationDuration: 3000,
      animationTimingFunc: "linear"
    });
    logoTicker.mount();
  });

  /*Portfolio Showcase*/

  let showcaseTicker1;
  let showcaseTickerWrap1 = $(".showcase-ticker-wrapper-1 > .glide");

  showcaseTickerWrap1.each(function () {
    showcaseTicker1 = new Glide($(this).get(0), {
      type: "carousel",
      startAt: 0,
      perView: 0.6,
      focusAt: "center",
      gap: 30,
      autoplay: -1,
      hoverpause: false,
      bound: true,
      dragThreshold: 1,
      animationDuration: 10000,
      animationTimingFunc: "linear"
    });
    showcaseTicker1.mount();
  });

  let showcaseTicker2;
  let showcaseTickerWrap2 = $(".showcase-ticker-wrapper-2 > .glide");

  showcaseTickerWrap2.each(function () {
    showcaseTicker2 = new Glide($(this).get(0), {
      type: "carousel",
      startAt: 0,
      perView: 0.6,
      focusAt: "center",
      gap: 30,
      autoplay: -1,
      hoverpause: false,
      bound: true,
      dragThreshold: 1,
      animationDuration: 10000,
      animationTimingFunc: "linear"
    });
    showcaseTicker2.mount();
  });
}
