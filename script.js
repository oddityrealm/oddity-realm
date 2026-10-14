/* ODDITY REALM | fixed interactions + continuous eye reveal */
(() => {
  "use strict";

  const $ = id => document.getElementById(id);

  const landing = $("landingScreen");
  const wordmark = $("wordmark");
  const wordmarkWhisper = $("wordmarkWhisper");
  const enterLink = $("enterLink");
  const curiousLink = $("curiousLink");

  const artworkScreen = $("artworkScreen");
  const firstArtwork = $("firstArtwork");
  const lookAgain = $("lookAgain");
  const contactLink = $("contactLink");
  const contactWhisper = $("contactWhisper");
  const contactScreen = $("contactScreen");
  const contactBack = $("contactBack");
  const dontPush = $("dontPush");
  const pushMessage = $("pushMessage");
  const pushMessageSecond = $("pushMessageSecond");

  const gardenPortal = $("gardenPortal");
  const gardenScreen = $("gardenScreen");
  const gardenKeyhole = $("gardenKeyhole");
  const gardenBack = $("gardenBack");
  const growthScreen = $("growthScreen");
  const growthBack = $("growthBack");
  const growthContinue = $("growthContinue");

  const careScreen = $("careScreen");
  const careBack = $("careBack");

  let room = "landing";
  let timers = [];
  let lookTimer = null;
  let hideLookTimer = null;

  function later(fn, ms) {
    const t = setTimeout(fn, ms);
    timers.push(t);
    return t;
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
    clearTimeout(lookTimer);
    clearTimeout(hideLookTimer);
  }

  function showContactLink() {
    contactLink.classList.add("is-visible");
  }

  function hideContactLink() {
    contactLink.classList.remove("is-visible");
  }

  function enterArtwork() {
    if (room !== "landing") return;

    clearTimers();
    room = "way-in";

    landing.classList.add("leaving");
    artworkScreen.classList.add("revealed", "boom");

    later(() => artworkScreen.classList.add("settled"), 1750);
    later(() => artworkScreen.classList.remove("boom"), 1800);
    later(showContactLink, 1400);
  }

  wordmark.addEventListener("click", () => {
    wordmarkWhisper.classList.add("show");
    later(() => wordmarkWhisper.classList.remove("show"), 1800);
  });

  enterLink.addEventListener("click", () => {
    if (room !== "landing") return;
    enterLink.textContent = "YOU SHOULD BE MORE CURIOUS.";
    enterLink.classList.add("changed");
  });

  curiousLink.addEventListener("click", () => {
    if (room !== "landing") return;
    curiousLink.textContent = "GOOD.";
    curiousLink.classList.add("good");
    later(enterArtwork, 450);
  });

  function showLookAgain() {
    if (room !== "way-in") return;

    artworkScreen.classList.add("details-visible");
    lookAgain.classList.remove("show");

    clearTimeout(lookTimer);
    clearTimeout(hideLookTimer);

    lookTimer = setTimeout(() => {
      lookAgain.classList.add("show");

      hideLookTimer = setTimeout(() => {
        lookAgain.classList.remove("show");
      }, 1800);
    }, 900);
  }

  function hideArtworkDetails() {
    artworkScreen.classList.remove("details-visible");
    lookAgain.classList.remove("show");

    clearTimeout(lookTimer);
    clearTimeout(hideLookTimer);
  }

  firstArtwork.addEventListener("click", () => {
    if (artworkScreen.classList.contains("details-visible")) {
      hideArtworkDetails();
    } else {
      showLookAgain();
    }
  });

  firstArtwork.addEventListener("mouseenter", showLookAgain);
  firstArtwork.addEventListener("mouseleave", hideArtworkDetails);

  function backToWayIn() {
    clearTimers();
    room = "way-in";

    contactScreen.classList.remove("open");
    contactWhisper.classList.remove("show");

    gardenScreen.classList.remove(
      "open", "title-in", "title-up", "art-in", "ready", "portal"
    );

    growthScreen.classList.remove(
      "open", "title-sprout", "title-rise", "art-sprout", "ready", "leaving"
    );

    careScreen.classList.remove(
      "open", "reveal-pupil", "reveal-eye", "reveal-hand",
      "reveal-full", "reveal-title", "reveal-please", "ready"
    );

    landing.classList.add("leaving");
    artworkScreen.classList.add("revealed", "settled");

    pushMessage.classList.remove("show");
    pushMessageSecond.classList.remove("show");
    dontPush.classList.remove("gone");

    showContactLink();
  }

  contactLink.addEventListener("click", () => {
    if (room !== "way-in") return;

    room = "contact-whisper";
    hideContactLink();
    contactWhisper.classList.add("show");

    later(() => {
      contactWhisper.classList.remove("show");
      contactScreen.classList.add("open");
      room = "contact";
    }, 3000);
  });

  contactBack.addEventListener("click", backToWayIn);

  dontPush.addEventListener("click", () => {
    if (room !== "contact") return;

    dontPush.classList.add("gone");
    pushMessage.classList.add("show");

    later(() => {
      pushMessage.classList.remove("show");

      later(() => {
        pushMessageSecond.classList.add("show");

        later(() => {
          pushMessageSecond.classList.remove("show");
          backToWayIn();
        }, 1900);
      }, 500);
    }, 1550);
  });

  function openGarden() {
    if (room !== "way-in") return;

    room = "garden";
    hideContactLink();

    gardenScreen.classList.add("open");
    gardenScreen.classList.remove(
      "title-in", "title-up", "art-in", "ready", "portal"
    );

    later(() => gardenScreen.classList.add("title-in"), 100);
    later(() => gardenScreen.classList.add("title-up"), 1800);
    later(() => gardenScreen.classList.add("art-in"), 2550);
    later(() => gardenScreen.classList.add("ready"), 4000);
  }

  gardenPortal.addEventListener("click", openGarden);

  function openGrowth() {
    if (room !== "garden") return;

    room = "growth";
    clearTimers();

    gardenScreen.classList.add("portal");

    growthScreen.classList.remove(
      "title-sprout", "title-rise", "art-sprout", "ready", "leaving"
    );

    growthScreen.classList.add("open");

    later(() => growthScreen.classList.add("title-sprout"), 520);
    later(() => growthScreen.classList.add("title-rise"), 2250);
    later(() => growthScreen.classList.add("art-sprout"), 3000);
    later(() => growthScreen.classList.add("ready"), 8000);

    later(() => {
      gardenScreen.classList.remove(
        "open", "title-in", "title-up", "art-in", "ready", "portal"
      );
    }, 1500);
  }

  gardenKeyhole.addEventListener("click", openGrowth);
  gardenBack.addEventListener("click", backToWayIn);

  function openCare() {
    if (room !== "growth") return;

    room = "care";
    growthScreen.classList.add("leaving");

    later(() => {
      growthScreen.classList.remove(
        "open", "title-sprout", "title-rise",
        "art-sprout", "ready", "leaving"
      );

      careScreen.classList.add("open");

      careScreen.classList.remove(
        "reveal-pupil", "reveal-eye", "reveal-hand",
        "reveal-full", "reveal-title", "reveal-please", "ready"
      );

      /* Start the continuous reveal at the pupil. */
      later(() => careScreen.classList.add("reveal-pupil"), 350);

      /* Title after the 12-second reveal. */
      later(() => careScreen.classList.add("reveal-title"), 12700);

      /* Final whisper. */
      later(() => careScreen.classList.add("reveal-please"), 16700);

      later(() => careScreen.classList.add("ready"), 17000);
    }, 650);
  }

  /* IMPORTANT: listeners stay outside openCare(). */
  growthContinue.addEventListener("click", openCare);

  growthBack.addEventListener("click", () => {
    if (room !== "growth") return;

    clearTimers();
    room = "garden";

    growthScreen.classList.remove(
      "open", "title-sprout", "title-rise", "art-sprout", "ready"
    );

    gardenScreen.classList.add(
      "open", "title-in", "title-up", "art-in", "ready"
    );
  });

  careBack.addEventListener("click", () => {
    if (room !== "care") return;

    clearTimers();
    room = "growth";

    careScreen.classList.remove(
      "open", "reveal-pupil", "reveal-eye", "reveal-hand",
      "reveal-full", "reveal-title", "reveal-please", "ready"
    );
later(openWrongRoom, 18000);
    growthScreen.classList.add(
      "open", "title-sprout", "title-rise", "art-sprout", "ready"
    );
  });
  
/* THE WRONG ROOM + THE UNIVERSE IS SOUP */
const wrongRoom = $("wrongRoom");
const wrongNext = $("wrongNext");
const wrongBackToSoup = $("soupBack");
const soupRoom = $("soupRoom");

let wrongTimers = [];

function wrongLater(fn, ms) {
  const timer = setTimeout(fn, ms);
  wrongTimers.push(timer);
  return timer;
}

function clearWrongTimers() {
  wrongTimers.forEach(clearTimeout);
  wrongTimers = [];
}

function openWrongRoom() {
  if (room !== "care") return;

  clearWrongTimers();
  room = "wrong-room";

  careScreen.classList.remove("open");
  wrongRoom.classList.add("active");
  wrongRoom.classList.remove(
    "intro-start",
    "whisper-start",
    "whisper-complete",
    "intro-out",
    "uncomfortable-start",
    "uncomfortable-out",
    "title-start",
    "artwork-start",
    "next-ready"
  );

  wrongLater(() => wrongRoom.classList.add("intro-start"), 150);
  wrongLater(() => wrongRoom.classList.add("whisper-start"), 2100);
  wrongLater(() => wrongRoom.classList.add("whisper-complete"), 3000);
  wrongLater(() => wrongRoom.classList.add("intro-out"), 5900);
  wrongLater(() => wrongRoom.classList.add("uncomfortable-start"), 6900);
  wrongLater(() => wrongRoom.classList.add("uncomfortable-out"), 10300);
  wrongLater(() => wrongRoom.classList.add("title-start"), 11900);
  wrongLater(() => wrongRoom.classList.add("artwork-start"), 13700);
  wrongLater(() => wrongRoom.classList.add("next-ready"), 17200);
}

function openSoupRoom() {
  if (room !== "wrong-room") return;

  clearWrongTimers();
  room = "soup";

  wrongRoom.classList.remove("active");
  soupRoom.classList.add("active");
}

wrongNext.addEventListener("click", openSoupRoom);

wrongBackToSoup.addEventListener("click", () => {
  if (room !== "soup") return;

  soupRoom.classList.remove("active");
  wrongRoom.classList.add("active");
  room = "wrong-room";
});

})();
