/* ODDITY REALM: staged interactions, designed for tap and click */

(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

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
  const copyEmail = $("copyEmail");

  const gardenPortal = $("gardenPortal");
  const gardenScreen = $("gardenScreen");
  const gardenKeyhole = $("gardenKeyhole");
  const gardenBack = $("gardenBack");

  const growthScreen = $("growthScreen");
  const growthPortal = $("growthPortal");
  const growthBack = $("growthBack");

  const careScreen = $("careScreen");
  const careBack = $("careBack");

  let currentRoom = "landing";
  let timers = [];
  let lookTimer = null;
  let hideLookTimer = null;
  let contactFlowTimer = null;

  function later(callback, delay) {
    const timer = window.setTimeout(callback, delay);
    timers.push(timer);
    return timer;
  }

  function clearTimers() {
    timers.forEach(window.clearTimeout);
    timers = [];
    window.clearTimeout(lookTimer);
    window.clearTimeout(hideLookTimer);
    window.clearTimeout(contactFlowTimer);
  }

  function showContactLink() {
    contactLink.classList.add("is-visible");
  }

  function hideContactLink() {
    contactLink.classList.remove("is-visible");
  }

  /* LANDING -> THE WAY IN */

  function enterArtwork() {
    if (currentRoom !== "landing") return;

    currentRoom = "way-in";
    clearTimers();

    landing.classList.add("leaving");
    artworkScreen.classList.add("revealed", "boom");

    later(() => {
      artworkScreen.classList.add("settled");
    }, 1750);

    later(() => {
      artworkScreen.classList.remove("boom");
    }, 1800);

    later(showContactLink, 1400);
  }

  wordmark.addEventListener("click", () => {
    wordmarkWhisper.classList.add("show");

    later(() => {
      wordmarkWhisper.classList.remove("show");
    }, 1800);
  });

  enterLink.addEventListener("click", () => {
    if (currentRoom !== "landing") return;

    enterLink.textContent = "YOU SHOULD BE MORE CURIOUS.";
    enterLink.classList.add("changed");

    later(enterArtwork, 900);
  });

  curiousLink.addEventListener("click", () => {
    if (currentRoom !== "landing") return;

    curiousLink.textContent = "GOOD.";
    curiousLink.classList.add("good");

    later(enterArtwork, 450);
  });

  /* THE WAY IN: details and LOOK AGAIN */

  function showLookAgain() {
    if (currentRoom !== "way-in") return;

    artworkScreen.classList.add("details-visible");
    lookAgain.classList.remove("show");

    window.clearTimeout(lookTimer);
    window.clearTimeout(hideLookTimer);

    lookTimer = window.setTimeout(() => {
      lookAgain.classList.add("show");

      hideLookTimer = window.setTimeout(() => {
        lookAgain.classList.remove("show");
      }, 1800);
    }, 900);
  }

  function hideArtworkDetails() {
    artworkScreen.classList.remove("details-visible");
    lookAgain.classList.remove("show");

    window.clearTimeout(lookTimer);
    window.clearTimeout(hideLookTimer);
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

  /* CONTACT: whisper first, room second */

  function startContact() {
    if (currentRoom !== "way-in") return;

    currentRoom = "contact-whisper";
    hideContactLink();

    contactWhisper.classList.add("show");

    contactFlowTimer = window.setTimeout(() => {
      contactWhisper.classList.remove("show");
      contactScreen.classList.add("open");
      currentRoom = "contact";
    }, 2100);
  }

  contactLink.addEventListener("click", startContact);

  function backToWayIn() {
    clearTimers();

    currentRoom = "way-in";

    contactScreen.classList.remove("open");
    contactWhisper.classList.remove("show");

    gardenScreen.classList.remove(
      "open", "title-in", "title-up", "art-in", "ready", "portal"
    );

    growthScreen.classList.remove(
      "open", "growing", "ready", "leaving"
    );

    careScreen.classList.remove("open", "ready");

    landing.classList.add("leaving");
    artworkScreen.classList.add("revealed", "settled");

    pushMessage.classList.remove("show");
    pushMessageSecond.classList.remove("show");
    dontPush.classList.remove("gone");

    showContactLink();
  }

  contactBack.addEventListener("click", backToWayIn);

  /* DON'T PUSH */

  function pushButton() {
    if (currentRoom !== "contact") return;

    dontPush.classList.add("gone");
    pushMessage.classList.add("show");

    later(() => {
      pushMessage.classList.remove("show");

      later(() => {
        pushMessageSecond.classList.add("show");

        later(() => {
          pushMessageSecond.classList.remove("show");
          backToWayIn();
        }, 1700);
      }, 450);
    }, 1350);
  }

  dontPush.addEventListener("click", pushButton);

  /* COPY EMAIL */

  copyEmail.addEventListener("click", async () => {
    const email = "oddityrealmstudio@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      copyEmail.textContent = "COPIED.";
    } catch (error) {
      window.location.href = "mailto:" + email;
      copyEmail.textContent = "OPENING EMAIL.";
    }

    later(() => {
      copyEmail.textContent = "COPY ADDRESS";
    }, 1600);
  });

  /* THE WAY IN -> THE GARDEN BETWEEN */

  function openGarden() {
    if (currentRoom !== "way-in") return;

    currentRoom = "garden";
    hideContactLink();

    gardenScreen.classList.add("open");
    gardenScreen.classList.remove(
      "title-in", "title-up", "art-in", "ready", "portal"
    );

    // First: title appears in the centre.
    later(() => {
      gardenScreen.classList.add("title-in");
    }, 100);

    // Second: title travels upwards.
    later(() => {
      gardenScreen.classList.add("title-up");
    }, 1150);

    // Third: the artwork rises into view from below.
    later(() => {
      gardenScreen.classList.add("art-in");
    }, 1950);

    // Fourth: the invitation appears after the image settles.
    later(() => {
      gardenScreen.classList.add("ready");
    }, 3400);
  }

  gardenPortal.addEventListener("click", openGarden);

  /* KEYHOLE -> SPIRAL PORTAL -> GROWTH */

  function openGrowth() {
    if (currentRoom !== "garden") return;

    currentRoom = "growth";
    gardenScreen.classList.add("portal");

    later(() => {
      gardenScreen.classList.remove(
        "open", "title-in", "title-up", "art-in", "ready", "portal"
      );

      growthScreen.classList.add("open");
      growthScreen.classList.remove("growing", "ready");

      later(() => {
        growthScreen.classList.add("growing");
      }, 150);

      later(() => {
        growthScreen.classList.add("ready");
      }, 2100);
    }, 600);
  }

  gardenKeyhole.addEventListener("click", openGrowth);

  gardenBack.addEventListener("click", backToWayIn);

  growthBack.addEventListener("click", () => {
    if (currentRoom !== "growth") return;

    currentRoom = "garden";

    growthScreen.classList.remove("open", "growing", "ready");

    gardenScreen.classList.add(
      "open", "title-in", "title-up", "art-in", "ready"
    );
  });

  /* GROWTH -> HANDLE WITH CARE */

  function openCare() {
    if (currentRoom !== "growth") return;

    currentRoom = "care";
    growthScreen.classList.add("leaving");

    later(() => {
      growthScreen.classList.remove(
        "open", "growing", "ready", "leaving"
      );

      careScreen.classList.add("open");
      careScreen.classList.remove("ready");

      later(() => {
        careScreen.classList.add("ready");
      }, 1650);
    }, 400);
  }

  growthPortal.addEventListener("click", openCare);

  careBack.addEventListener("click", () => {
    if (currentRoom !== "care") return;

    currentRoom = "growth";

    careScreen.classList.remove("open", "ready");
    growthScreen.classList.add("open", "growing", "ready");
  });

})();
