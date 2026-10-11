/* ODDITY REALM | staged, touch-first interactions */
(() => {
"use strict";
const $=id=>document.getElementById(id);
const landing=$("landingScreen"),wordmark=$("wordmark"),wordmarkWhisper=$("wordmarkWhisper"),enterLink=$("enterLink"),curiousLink=$("curiousLink");
const artworkScreen=$("artworkScreen"),firstArtwork=$("firstArtwork"),lookAgain=$("lookAgain");
const contactLink=$("contactLink"),contactWhisper=$("contactWhisper"),contactScreen=$("contactScreen"),contactBack=$("contactBack"),dontPush=$("dontPush"),pushMessage=$("pushMessage"),pushMessageSecond=$("pushMessageSecond");
const gardenPortal=$("gardenPortal"),gardenScreen=$("gardenScreen"),gardenKeyhole=$("gardenKeyhole"),gardenBack=$("gardenBack");
const growthScreen=$("growthScreen"),growthBack=$("growthBack"),growthContinue=$("growthContinue");
const careScreen=$("careScreen"),careBack=$("careBack");
let room="landing",timers=[],lookTimer=null,hideLookTimer=null;
function later(fn,ms){const t=setTimeout(fn,ms);timers.push(t);return t}
function clearTimers(){timers.forEach(clearTimeout);timers=[];clearTimeout(lookTimer);clearTimeout(hideLookTimer)}
function showContactLink(){contactLink.classList.add("is-visible")}
function hideContactLink(){contactLink.classList.remove("is-visible")}
function enterArtwork(){if(room!=="landing")return;clearTimers();room="way-in";landing.classList.add("leaving");artworkScreen.classList.add("revealed","boom");later(()=>artworkScreen.classList.add("settled"),1750);later(()=>artworkScreen.classList.remove("boom"),1800);later(showContactLink,1400)}
wordmark.addEventListener("click",()=>{wordmarkWhisper.classList.add("show");later(()=>wordmarkWhisper.classList.remove("show"),1800)});
/* ENTER only teases. CURIOUS? is the sole entrance. */
enterLink.addEventListener("click",()=>{if(room!=="landing")return;enterLink.textContent="YOU SHOULD BE MORE CURIOUS.";enterLink.classList.add("changed")});
curiousLink.addEventListener("click",()=>{if(room!=="landing")return;curiousLink.textContent="GOOD.";curiousLink.classList.add("good");later(enterArtwork,450)});
function showLookAgain(){if(room!=="way-in")return;artworkScreen.classList.add("details-visible");lookAgain.classList.remove("show");clearTimeout(lookTimer);clearTimeout(hideLookTimer);lookTimer=setTimeout(()=>{lookAgain.classList.add("show");hideLookTimer=setTimeout(()=>lookAgain.classList.remove("show"),1800)},900)}
function hideArtworkDetails(){artworkScreen.classList.remove("details-visible");lookAgain.classList.remove("show");clearTimeout(lookTimer);clearTimeout(hideLookTimer)}
firstArtwork.addEventListener("click",()=>artworkScreen.classList.contains("details-visible")?hideArtworkDetails():showLookAgain());
firstArtwork.addEventListener("mouseenter",showLookAgain);firstArtwork.addEventListener("mouseleave",hideArtworkDetails);
function backToWayIn(){clearTimers();room="way-in";contactScreen.classList.remove("open");contactWhisper.classList.remove("show");gardenScreen.classList.remove("open","title-in","title-up","art-in","ready","portal");growthScreen.classList.remove("open","title-sprout","title-rise","art-sprout","ready","leaving");careScreen.classList.remove("open","reveal-eye","reveal-hand","reveal-title","reveal-please","ready");landing.classList.add("leaving");artworkScreen.classList.add("revealed","settled");pushMessage.classList.remove("show");pushMessageSecond.classList.remove("show");dontPush.classList.remove("gone");showContactLink()}
contactLink.addEventListener("click",()=>{if(room!=="way-in")return;room="contact-whisper";hideContactLink();contactWhisper.classList.add("show");later(()=>{contactWhisper.classList.remove("show");contactScreen.classList.add("open");room="contact"},3000)});
contactBack.addEventListener("click",backToWayIn);
dontPush.addEventListener("click",()=>{if(room!=="contact")return;dontPush.classList.add("gone");pushMessage.classList.add("show");later(()=>{pushMessage.classList.remove("show");later(()=>{pushMessageSecond.classList.add("show");later(()=>{pushMessageSecond.classList.remove("show");backToWayIn()},1900)},500)},1550)});
function openGarden(){if(room!=="way-in")return;room="garden";hideContactLink();gardenScreen.classList.add("open");gardenScreen.classList.remove("title-in","title-up","art-in","ready","portal");later(()=>gardenScreen.classList.add("title-in"),100);later(()=>gardenScreen.classList.add("title-up"),1800);later(()=>gardenScreen.classList.add("art-in"),2550);later(()=>gardenScreen.classList.add("ready"),4000)}
gardenPortal.addEventListener("click",openGarden);
function openGrowth(){
 if(room!=="garden")return;
 room="growth";
 clearTimers();
 gardenScreen.classList.add("portal");
 growthScreen.classList.remove("title-sprout","title-rise","art-sprout","ready","leaving");
 growthScreen.classList.add("open");
 /* Start the next room immediately, so there is no empty black-screen gap. */
 later(()=>growthScreen.classList.add("title-sprout"),520);
 later(()=>growthScreen.classList.add("title-rise"),2250);
 later(()=>growthScreen.classList.add("art-sprout"),3000);
 later(()=>growthScreen.classList.add("ready"),5000);
 later(()=>gardenScreen.classList.remove("open","title-in","title-up","art-in","ready","portal"),1500);
}
gardenKeyhole.addEventListener("click",openGrowth);gardenBack.addEventListener("click",backToWayIn);
function openCare(){if(room!=="growth")return;room="care";growthScreen.classList.add("leaving");later(()=>{growthScreen.classList.remove("open","title-sprout","title-rise","art-sprout","ready","leaving");careScreen.classList.add("open");careScreen.classList.remove("reveal-eye","reveal-hand","reveal-title","reveal-please","ready");later(()=>careScreen.classList.add("reveal-eye"),350);later(()=>careScreen.classList.add("reveal-hand"),2650);later(()=>careScreen.classList.add("reveal-title"),4400);later(()=>careScreen.classList.add("reveal-please"),5700);later(()=>careScreen.classList.add("ready"),5700)},650)}
growthContinue.addEventListener("click",openCare);
growthBack.addEventListener("click",()=>{if(room!=="growth")return;clearTimers();room="garden";growthScreen.classList.remove("open","title-sprout","title-rise","art-sprout","ready");gardenScreen.classList.add("open","title-in","title-up","art-in","ready")});
careBack.addEventListener("click",()=>{if(room!=="care")return;clearTimers();room="growth";careScreen.classList.remove("open","reveal-eye","reveal-hand","reveal-title","reveal-please","ready");growthScreen.classList.add("open","title-sprout","title-rise","art-sprout","ready")});
})();
