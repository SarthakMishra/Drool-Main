//video controls

if ($(window).width() >= 991) {
  let plyrVideoWrapper = $("#hero-video");
  let playPauseBtn = $(".hero-video-button").eq(0);
  let heroVideoWrap = $(".div-block-5").get(0);

  const player = new Plyr("#plyrCustomVideo", {
    controls: [
      "play", // Play/pause playback
      "progress", // The progress bar and scrubber for playback and buffering
      "current-time", // The current time of playback
      "mute", // Toggle mute
      "volume", // Volume control
      "fullscreen", // Toggle fullscreen
    ],
    hideControls: false,
    previewThumbnails: {
      enabled: true,
      src: "https://assests.trydrool.com/Drool-Demo-Reel-3.webm.vtt",
    },
    keyboard: { focused: true, global: true },
  });

  (function ($) {
    var timeout;
    $(document).on("mousemove", function (event) {
      if (timeout !== undefined) {
        window.clearTimeout(timeout);
      }
      timeout = window.setTimeout(function () {
        // trigger the new event on event.target, so that it can bubble appropriately
        $(event.target).trigger("mousemoveend");
      }, 100);
    });
  })(jQuery);

  (function ($) {
    $.fn.mousemoveend = function (cb) {
      return this.on("mousemoveend", cb);
    };
  })(jQuery);

  player.volume = 0.7;

  player.on("ready", (event) => {
    player.toggleControls(false);
  });
  player.on("seeking", (event) => {
    player.toggleControls(true);
    player.toggleControls(true);
    playPauseBtn.addClass("hero-video-button-hide");
    playPauseBtn.hide();
    $(".div-block-6").eq(0).removeClass("videoDarkOverlay");
    heroVideoWrap.style.setProperty(
      "--shadowOnHover",
      "inset 0px 3px 15px 0px rgba(0, 0, 0, 0.3)",
    );
  });

  let playPauseTimer;

  function endAndStartPlayPauseTimer(addOrRemove) {
    clearTimeout(playPauseTimer);

    playPauseTimer = setTimeout(() => {
      if (
        addOrRemove === "add" &&
        !playPauseBtn.hasClass("hero-video-button-hide")
      ) {
        playPauseBtn.addClass("hero-video-button-hide");
      } else if (
        addOrRemove === "remove" &&
        playPauseBtn.hasClass("hero-video-button-hide")
      ) {
        playPauseBtn.removeClass("hero-video-button-hide");
      }
    }, 100);
  }

  player.on("play", (event) => {
    player.toggleControls(true);
    endAndStartPlayPauseTimer("add");
    playPauseBtn.hide();
    $(".div-block-6").eq(0).removeClass("videoDarkOverlay");
    heroVideoWrap.style.setProperty(
      "--shadowOnHover",
      "inset 0px 3px 15px 0px rgba(0, 0, 0, 0.3)",
    );
  });

  player.on("pause", (event) => {
    if (player.seeking === false) {
      player.toggleControls(false);
      playPauseBtn.show();
      endAndStartPlayPauseTimer("remove");
      $(".div-block-6").eq(0).addClass("videoDarkOverlay");
      heroVideoWrap.style.setProperty(
        "--shadowOnHover",
        "inset 0 5px 60px 0px rgba(0, 0, 0, 0.6)",
      );
      plyrVideoWrapper.css("cursor", "inherit");
    }
  });

  let endCheckTimer;

  function endStartEndCheckTimer() {
    clearTimeout(endCheckTimer);
    player.stop();
    endCheckTimer = setTimeout(function () {
      if (player.stopped) {
        player.toggleControls(false);
        playPauseBtn.show();
        endAndStartPlayPauseTimer("remove");
        $(".div-block-6").eq(0).addClass("videoDarkOverlay");
        heroVideoWrap.style.setProperty(
          "--shadowOnHover",
          "inset 0 5px 60px 0px rgba(0, 0, 0, 0.6)",
        );
        plyrVideoWrapper.css("cursor", "inherit");
      }
    });
  }

  player.on("ended", (event) => {
    if (playPauseBtn.hasClass("hero-video-button-hide")) {
      endStartEndCheckTimer();
    }
  });

  playPauseBtn.click(function () {
    player.play();
  });

  let hideControlsOnPlayTimer;

  function endAndStartTimer() {
    clearTimeout(hideControlsOnPlayTimer);

    hideControlsOnPlayTimer = setTimeout(() => {
      player.toggleControls(false);
      plyrVideoWrapper.css("cursor", "none");
    }, 2000);
  }

  plyrVideoWrapper.mousemoveend(function () {
    if (player.playing && !player.seeking) {
      endAndStartTimer();
    } else {
      plyrVideoWrapper.css("cursor", "inherit");
    }
  });

  plyrVideoWrapper.mousemove(function () {
    if (player.playing && !player.seeking) {
      clearTimeout(hideControlsOnPlayTimer);
      player.toggleControls(true);
      plyrVideoWrapper.css("cursor", "inherit");
    }
  });

  let volumeTimer;

  function endAndStartVolumeTimer(hoverInOut, timeOut) {
    function hoverInFunction() {
      volumeTimer = setTimeout(() => {
        player.increaseVolume(0.1);
      }, timeOut * 100);
    }
    function hoverOutFunction() {
      volumeTimer = setTimeout(() => {
        player.decreaseVolume(0.1);
      }, timeOut * 100);
    }
    if (hoverInOut === "in") {
      hoverInFunction();
    } else if (hoverInOut === "out") {
      hoverOutFunction();
    } else {
      player.volume = 0.7;
    }
  }

  function upDownVolume(inOrOut, volumeTo) {
    clearTimeout(volumeTimer);
    if (player.volume > 0.7) {
      player.volume = 0.7;
    } else if (player.volume < 0.1) {
      player.volume = 0.1;
    } else {
      for (let i = 0; i < 6; i++) {
        let currentV = player.volume;
        if (currentV === volumeTo) {
          break;
        } else {
          endAndStartVolumeTimer(inOrOut, i);
        }
      }
    }
  }

  let hoverControlsTimer;

  plyrVideoWrapper.hover(
    function () {
      //upDownVolume("in", 0.7);
      clearTimeout(hoverControlsTimer);
      if (player.playing) {
        player.toggleControls(true);
      }
    },
    function () {
      //upDownVolume("out", 0.1);
      clearTimeout(hoverControlsTimer);
      hoverControlsTimer = setTimeout(() => {
        player.toggleControls(false);
      }, 200);
    },
  );

  //Video Slider Color

  function pickHex(color1, color2, weight) {
    let p = weight;
    let w = p * 2 - 1;
    let w1 = (w / 1 + 1) / 2;
    let w2 = 1 - w1;
    let rgb = [
      Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2),
    ];
    return rgb;
  }

  player.on("timeupdate", (event) => {
    let playerProgress = player.currentTime / player.duration;
    function setrgb(input) {
      $("#hero-video").css("--plyr-color-main", "rgb(" + input.join() + ")");
      $(
        "#hero-video > div.div-block-9.hero-video-button > div > svg > g > g:nth-child(3) > g > path",
      ).css("fill", "rgb(" + input.join() + ")");
    }
    if (playerProgress <= 0.33) {
      let currentProgress = Math.round((playerProgress / 0.33) * 100) / 100;
      setrgb(pickHex([255, 99, 99], [115, 82, 255], currentProgress));
    } else if (playerProgress > 0.33 && playerProgress < 0.66) {
      let currentProgress =
        Math.round(((playerProgress - 0.33) / 0.33) * 100) / 100;
      setrgb(pickHex([248, 180, 0], [255, 99, 99], currentProgress));
    } else if (playerProgress > 0.66) {
      let currentProgress =
        Math.round(((playerProgress - 0.66) / 0.33) * 100) / 100;
      setrgb(pickHex([14, 183, 112], [248, 180, 0], currentProgress));
    }
  });
}

//mobile video
const playerMobile = new Plyr("#plyrCustomVideoMobile", {
  controls: [
    "play", // Play/pause playback
    "progress", // The progress bar and scrubber for playback and buffering
    "current-time", // The current time of playback
    "mute", // Toggle mute
    "volume", // Volume control
    "fullscreen", // Toggle fullscreen
  ],
  hideControls: false,
  previewThumbnails: {
    enabled: true,
    src: "https://assests.trydrool.com/Drool-Demo-Reel-3.webm.vtt",
  },
  keyboard: { focused: true, global: true },
});

videoLightboxTrigger();
function videoLightboxTrigger() {
  $(".video-lightbox-btn").each(function () {
    let mainButton = $(this);

    mainButton.on("click", function () {
      playerMobile.fullscreen.enter();
      playerMobile.play();
    });
  });
}

playerMobile.on("exitfullscreen", (event) => {
  playerMobile.pause();
});
