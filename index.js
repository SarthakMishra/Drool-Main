// Animate TO for Hero Cards

let customEaseFast = CustomEase.create(
  "custom",
  "M0,0,C0,0,0.451,0.047,0.702,0.298,0.951,0.547,1,1,1,1"
);
let customEaseSlow = CustomEase.create(
  "custom",
  "M0,0 C0,0 0.602,0 0.8,0.2 0.998,0.401 1,1 1,1 "
);

let targetElement1 = $(".scroll-hero-card-1");
let targetElement2 = $(".scroll-hero-card-2");
let targetElement3 = $(".scroll-hero-card-5");
let targetElement4 = $(".scroll-hero-card-6");
let targetElement5 = $(".scroll-hero-card-3");
let targetElement6 = $(".scroll-hero-card-4");
let targetElementBaseCard = $(".scroll-hero-cards");

//Gradient Button Glow

const gradientButton = $(".gradient-button");

gradientButton.each(function (index) {
  const GlowTl = gsap.timeline({ paused: true, repeat: -1 });

  let currentElement = $(this);

  GlowTl.to(currentElement, {
    "--bgStateX": "250%",
    duration: 8,
    ease: "none"
  });

  let buttonTimer;

  function endAndStartButtonTimer(hoverInOut) {
    clearTimeout(buttonTimer);
    let t;
    function hoverInFunction() {
      buttonTimer = setTimeout(function () {
        currentElement.get(0).style.setProperty("--transitionSpeed", "0s");
      }, 200);
    }
    function hoverOutFunction() {
      buttonTimer = setTimeout(function () {
        GlowTl.pause();
        GlowTl.progress(0);
        currentElement.get(0).style.setProperty("--bgStateX", "0%");
        currentElement.removeClass("button-glow");
      }, 10);
    }
    if (hoverInOut === "in") {
      hoverInFunction();
    } else if (hoverInOut === "out") {
      hoverOutFunction();
    }
  }

  currentElement.hover(
    function () {
      GlowTl.play();
      currentElement.addClass("button-glow");
      endAndStartButtonTimer("in");
    },
    function () {
      currentElement.get(0).style.setProperty("--transitionSpeed", "0.2s");
      endAndStartButtonTimer("out");
    }
  );
});

//Hero Section Elements On Appear
if ($(window).width() >= 991) {
  // Only for bigger screen
  $(".hero-section").each(function (index) {
    let triggerElement = $(this);

    let tl = gsap.timeline();

    tl.to(
      targetElement1,
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: "6.5deg",
        duration: 1,
        ease: "power2.out"
      },
      0
    )
      .to(
        targetElement2,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: "-13.4deg",
          duration: 1,
          ease: "power2.out"
        },
        0
      )
      .to(
        targetElement3,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: "-6.2deg",
          duration: 1,
          ease: "power2.out"
        },
        0
      )
      .to(
        targetElement4,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: "10.1deg",
          duration: 1,
          ease: "power2.out"
        },
        0
      )
      .to(
        targetElement5,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: "10deg",
          duration: 1,
          ease: "power2.out"
        },
        0
      )
      .to(
        targetElement6,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: "-15.5deg",
          duration: 1,
          ease: "power2.out"
        },
        0
      )
      .to(
        $(".video-box-perspective"),
        {
          opacity: 1,
          y: 23,
          rotateX: "18deg",
          duration: 0.6,
          ease: "power2.out"
        },
        ">-0.6"
      );
  });

  //Hero Cards On Scroll
  $(".video-box-perspective").each(function (index) {
    let triggerElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom-=20%",
        end: "top top+=25%",
        scrub: 0.8
      }
    });
    tl.set(".scroll-hero-cards", { opacity: 1 });
    //Opacity
    tl.to(
      targetElementBaseCard,
      {
        opacity: 0,
        duration: 1,
        ease: customEaseFast
      },
      0
    );

    //Card1
    tl.to(
      targetElement1,
      {
        top: "80px",
        duration: 1,
        ease: customEaseFast
      },
      0
    ).to(
      targetElement1,
      {
        left: "380px",
        duration: 1,
        ease: customEaseSlow
      },
      0
    );

    //Card2
    tl.to(
      targetElement2,
      {
        top: "120px",
        duration: 1,
        ease: customEaseFast
      },
      0
    ).to(
      targetElement2,
      {
        left: "220px",
        duration: 1,
        ease: customEaseSlow
      },
      0
    );

    //Card3
    tl.to(
      targetElement3,
      {
        top: "110px",
        duration: 1,
        ease: customEaseFast
      },
      0
    ).to(
      targetElement3,
      {
        left: "80px",
        duration: 1,
        ease: customEaseSlow
      },
      0
    );

    //Card4
    tl.to(
      targetElement4,
      {
        top: "110px",
        duration: 1,
        ease: customEaseFast
      },
      0
    ).to(
      targetElement4,
      {
        right: "80px",
        duration: 1,
        ease: customEaseSlow
      },
      0
    );

    //Card 5
    tl.to(
      targetElement5,
      {
        top: "120px",
        duration: 1,
        ease: customEaseFast
      },
      0
    ).to(
      targetElement5,
      {
        right: "220px",
        duration: 1,
        ease: customEaseSlow
      },
      0
    );

    //Card6
    tl.to(
      targetElement6,
      {
        top: "80px",
        duration: 1,
        ease: customEaseFast
      },
      0
    ).to(
      targetElement6,
      {
        right: "380px",
        duration: 1,
        ease: customEaseSlow
      },
      0
    );
  });

  // Animate TO for Video-Box

  $(".video-box-perspective").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".video-box-perspective");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom-=20%",
        end: "top top+=40%",
        scrub: 0.6
      }
    });
    tl.to(targetElement, {
      rotateX: "0deg", //
      y: 0, //
      scale: 1, //
      filter: "contrast(1)", //
      duration: 1,
      ease: customEaseFast
    });
  });
} // End of - Only for bigger screen

// All Nav animations

$(".nav-link-button").each(function (index) {
  let triggerElement = $($(this).attr("href"));
  let endTriggerElement;
  if ($(this).next().length === 0) {
    endTriggerElement = $("#footer-section");
  } else {
    endTriggerElement = $($(this).next().attr("href"));
  }
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      endTrigger: endTriggerElement,
      start: "top top+=107",
      end: "top top+=107",
      scrub: 0
    }
  });

  tl.fromTo(
    $(this),
    { opacity: 0.4 },
    {
      opacity: 1,
      duration: 0.025
    },
    0
  );
  tl.to(
    $(this),
    {
      opacity: 0.4,
      clearProps: "opacity",
      duration: 0.025
    },
    1
  );
});

$(".dark-nav-trigger").each(function (index) {
  let triggerElement = $(this);
  let targetElementNavBg = $(".navigation");
  let targetElementNavLogoLight = $(".main-animated-logo-light");
  let targetElementNavLogoDark = $(".main-animated-logo-dark");
  let targetElementNavLinks = $(".nav-link-button");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top top+=107",
      end: "bottom top+=107",
      scrub: 0,
      onToggle: function ({ isActive }) {
        let menuLines = $(".mobile-nav-menu > div > svg > g > g > g > path");
        if (isActive) {
          menuLines.each(function () {
            $(this).attr("stroke", "rgb(250,245,228)");
          });
        } else {
          menuLines.each(function () {
            $(this).attr("stroke", "rgb(51,51,51)");
          });
        }
      }
    }
  });

  tl.to(
    targetElementNavBg,
    {
      backgroundColor: "rgba(0, 0, 0, .5)",
      borderColor: "rgba(255, 255, 255, .03)",
      "--navGradientOpacity": 0.3,
      duration: 0.025
    },
    0
  )
    .to(
      targetElementNavLogoLight,
      {
        opacity: 0,
        duration: 0.025
      },
      0
    )
    .to(
      targetElementNavLogoDark,
      {
        opacity: 1,
        duration: 0.025
      },
      0
    )
    .to(
      targetElementNavLinks,
      {
        color: "#FAF5E4",
        //"font-weight": 400,
        duration: 0.025
      },
      0
    );

  tl.to(
    targetElementNavBg,
    {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderColor: "rgba(0, 0, 0, 0.03)",
      duration: 0.025
    },
    1
  )
    .to(
      targetElementNavLogoLight,
      {
        opacity: 1,
        duration: 0.025
      },
      1
    )
    .to(
      targetElementNavLogoDark,
      {
        opacity: 0,
        duration: 0.025
      },
      1
    )
    .to(
      targetElementNavLinks,
      {
        color: "#333333",
        //"font-weight": 500,
        duration: 0.025
      },
      1
    );
});

let navBarScrollTransform = $(".gradient-shadow-2");
let mobileNav = $(".mobile-menu-list");
let navBaseWidth;
$(window)
  .on("resize", function () {
    if ($("html").width() > 1600) {
      navBaseWidth = 1250;
    } else if ($("html").width() <= 1600 && $("html").width() > 991) {
      navBaseWidth = 1250;
    } else if ($("html").width() <= 991) {
      navBaseWidth = $("html").width() * 0.9;
    }
    navBarScrollTransform.css("width", navBaseWidth + "px");
    mobileNav.css("width", navBaseWidth + "px");
  })
  .resize();

/* if ($("html").width() > 991) {
  ScrollTrigger.create({
    onUpdate: ({ getVelocity }) => {
      let scrollD = (getVelocity() * -1) / Math.abs(getVelocity());

      if (Math.abs(getVelocity()) >= 50) {
        navBarScrollTransform.css({
          transition: "all 0.2s cubic-bezier( 0.25, 0.46, 0.45, 0.94 )"
        });
        navBarScrollTransform.css("margin-top", 35 + 5 * scrollD + "px");
        navBarScrollTransform.css({
          transform: "perspective(1500px) rotateX(" + 12 * scrollD + "deg)"
        });
        navBarScrollTransform.css("width", navBaseWidth - 10 + "px");
      } else {
        navBarScrollTransform.css({
          transition: "all 0.4s ease-out )"
        });
        navBarScrollTransform.css("margin-top", 35 + "px");
        navBarScrollTransform.css({
          transform: "perspective(1500px) rotateX(" + 0 + "deg)"
        });
        navBarScrollTransform.css("width", navBaseWidth + "px");
      }
    }
  });
} */

mobileNavTrigger();
function mobileNavTrigger() {
  $(".menu-button").each(function () {
    let mainButton = $(this);

    mainButton.on("click.navBtnClick", function () {
      $(".mobile-menu-list").toggleClass("mobile-menu-list-active");
    });
  });
}

// Gradient Text

$(".has-gradient-text").each(function () {
  let parent = $(this).parent();
  let gradientText = $(this).find(".gradient-text");

  gradientText.each(function (index) {
    if ($(this).position().left !== 0) {
      let gradientPointA = $(this).position().left / parent.width();
      let gradientPointB =
        ($(this).position().left + $(this).width()) / parent.width();

      setrgb($(this), gradientPointA, gradientPointB);

      if ($(this).hasClass("gradient-link")) {
        let lineElement = `<div class="gradient-underline-div thisUnderline${index}"></div>`;
        $(this).parent().parent().append(lineElement);

        let lineWrapper = $(".gradient-underline-div.thisUnderline" + index);
        let leftPosUnderline =
          $(this).position().left +
          (parent.width() - $(this).parent().width()) / 2;
        lineWrapper.css("position", "absolute");
        lineWrapper.css("top", $(this).position().top + "px");
        lineWrapper.css("left", leftPosUnderline + "px");
        lineWrapper.css("width", $(this).width() + "px");
        lineWrapper.css("height", $(this).height() + 6 + "px");
        fillDivWithDots(lineWrapper, $(this).width());
        setrgb(lineWrapper, gradientPointA, gradientPointB);
      }
    }
  });

  function fillDivWithDots(divElement, width) {
    const dot = "•";
    const dotCount = Math.floor(width / 8.05); // Assuming each dot occupies 10 pixels

    const dots = dot.repeat(dotCount);
    divElement.text(dots);
  }

  $(".gradient-link").each(function () {
    $(this).hover(
      function () {
        let lineWrapper = $(this)
          .parent()
          .parent()
          .find(".gradient-underline-div");
        lineWrapper.css("letter-spacing", "0");
      },
      function () {
        let lineWrapper = $(this)
          .parent()
          .parent()
          .find(".gradient-underline-div");
        lineWrapper.css("letter-spacing", "-2.1px");
      }
    );
  });

  function setrgb(element, gradientPointA, gradientPointB) {
    //Define the points as percentages
    let points = [0.33, 0.66];

    let gradientColors = [getrgb(gradientPointA)];
    let intersectionPoints = ["0%"];
    // Loop through the points
    jQuery.each(points, function (index) {
      // Check whether L2 lies between any points or it intersects any point.
      if (points[index] >= gradientPointA && points[index] <= gradientPointB) {
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
    element.css("background", finalGradient);
    element.css("-webkit-background-clip", "text");
    element.css("-webkit-text-fill-color", "transparent");
  }

  function getrgb(gradientProgress) {
    if (gradientProgress <= 0.33) {
      let currentProgress = Math.round((gradientProgress / 0.33) * 100) / 100;
      return pickRGB([255, 99, 99], [115, 82, 255], currentProgress);
    } else if (gradientProgress > 0.33 && gradientProgress < 0.66) {
      let currentProgress =
        Math.round(((gradientProgress - 0.33) / 0.33) * 100) / 100;
      return pickRGB([248, 180, 0], [255, 99, 99], currentProgress);
    } else if (gradientProgress >= 0.66) {
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
});
if ($(window).width() >= 991) {
  $(".title-wrapper").each(function (index) {
    let targetElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: targetElement,
        // trigger element - viewport
        start: "top center+=35%",
        end: "top center+=30%",
        scrub: 0.8
      }
    });
    tl.from(targetElement, {
      rotateX: "20deg",
      y: 30,
      scale: 0.98,
      opacity: 0,
      duration: 1,
      ease: customEaseFast
    });
  });
}

//feature Section
addShadowToFeatures();
function addShadowToFeatures() {
  let featureCard = $(".feature-card");
  let parent = $(".feature-wrapper");

  featureCard.each(function () {
    let featureCardImmidiateParent = $(this).parent();
    let gradientPointA =
      featureCardImmidiateParent.position().left / parent.width();
    let gradientPointB =
      (featureCardImmidiateParent.position().left + $(this).width()) /
      parent.width();

    setrgb($(this), gradientPointA, gradientPointB);
  });

  function setrgb(element, gradientPointA, gradientPointB) {
    //Define the points as percentages
    let points = [0.33, 0.66];

    let gradientColors = [getrgb(gradientPointA)];
    let intersectionPoints = ["0%"];
    // Loop through the points
    jQuery.each(points, function (index) {
      // Check whether L2 lies between any points or it intersects any point.
      if (points[index] >= gradientPointA && points[index] <= gradientPointB) {
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
    } else if (gradientProgress >= 0.66) {
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
}

//Offerings Section
if ($(window).width() >= 991) {
  changeBgOnHover();
  function changeBgOnHover() {
    let cards = $(".offering-card");
    let bgWrapper = $(".offerings-active-image");
    let blurBg = $(".blurred-bg-image");
    bgWrapper.css("opacity", "0");

    cards.each(function () {
      let bgImageSrc = $(this).attr("backimageonhover");
      let bgImageValue = "url(" + bgImageSrc + ")";
      bgWrapper.css("background-size", "cover");
      bgWrapper.css("background-position", "center");
      if (!$(this).hasClass("this-offer-card-bottom")) {
        $(this).hover(
          function () {
            cards.each(function () {
              $(this).css("opacity", "0");
            });

            $(this).css("opacity", "1");
            $(this).css("background-color", "rgba(13,12,18, 0.8)");
            bgWrapper.css("background-image", bgImageValue);
            bgWrapper.css("opacity", "1");
            blurBg.css("opacity", "0.5");
          },
          function () {
            cards.each(function () {
              if (!$(this).hasClass("this-offer-card-bottom")) {
                $(this).css("background-color", "rgba(255, 255, 255, 0.02)");
              }
              $(this).css("opacity", "1");
            });
            bgWrapper.css("opacity", "0");
            blurBg.css("opacity", "0");
          }
        );
      }
    });
  }

  let offeringScrollTimer;
  ScrollTrigger.create({
    onUpdate: ({ getVelocity }) => {
      clearTimeout(offeringScrollTimer);
      if (Math.abs(getVelocity()) >= 50) {
        $(".offerings-list").css("pointer-events", "none");
      } else {
        offeringScrollTimer = setTimeout(function () {
          $(".offerings-list").css("pointer-events", "inherit");
        }, 100);
      }
    }
  });
}

//pricing section
seatAvailability();
function seatAvailability() {
  let visibilityCheckElement = $("#seats-left-number").hasClass(
    "w-condition-invisible"
  );
  let hideText1 = $(
    "#pricing-section > div.collection-list-wrapper.w-dyn-list > div > div:nth-child(1)"
  );
  let hideText2 = $(
    "#pricing-section > div.collection-list-wrapper.w-dyn-list > div > div:nth-child(2)"
  );

  let checkoutBtnWeekly = $("#checkoutBtnWeekly");
  let checkoutBtnMonthly = $("#checkoutBtnMonthly");
  let bookBtnWeekly = $("#bookBtnWeekly");
  let bookBtnMonthly = $("#bookBtnMonthly");

  bookBtnWeekly.hide();
  bookBtnMonthly.hide();

  if (visibilityCheckElement) {
    hideText1.hide();
    hideText2.hide();

    bookBtnWeekly.show();
    bookBtnMonthly.show();

    checkoutBtnWeekly.hide();
    checkoutBtnMonthly.hide();
  }
}

//Faq Section

faqTrigger();
function faqTrigger() {
  $(".faq-block").each(function () {
    $(this).find(".faq-paragraph-wrapper").hide();
    $(this).click(function () {
      $(this).find(".plus-wrapper").toggleClass("plus-wrapper-active");
      if ($(this).find(".faq-paragraph-wrapper").is(":hidden")) {
        $(this)
          .find(".faq-paragraph-wrapper")
          .slideDown(400, "swing", function () {
            $(this).show();
          });
      } else {
        $(this)
          .find(".faq-paragraph-wrapper")
          .slideUp(400, "swing", function () {
            $(this).hide();
          });
      }
    });
  });
}
