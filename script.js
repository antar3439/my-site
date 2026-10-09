const signalButton = document.querySelector("#signal-btn");
const signalOutput = document.querySelector("#signal-output");

const messages = [
  "> SYSTEM MESSAGE: DRINK SOME WATER.",
  "> LIFE IS STILL LOADING...",
  "> YOU HAVE UNLOCKED: EXISTING.",

  "> STRAY BIRDS OF SUMMER COME TO MY WINDOW TO SING AND FLY AWAY.",
  "> Do NOT SEAT YOUR LOVE UPON A PRECIPICE BECAUSE IT IS HIGH",
  "> If YOU SHED TEARS WHEN YOU MISS THE SUN, YOU ALSO MISS THE STARS.",
  "> THAT I EXIST IS A PERPETUAL SURPRISE WHICH IS LIFE.", 
  "> HIS OWN MORNINGS ARE NEW SURPRISES TO GOD. ",
  "> YOU SMILED AND TALKED TO ME OF NOTHING AND I FELT THAT FOR THIS I HAD BEEN WAITING LONG.",
  "> YOUR IDOL IS SHATTED IN THE DUST TO PROVE THAT GOD’S DUST IS GREATER THAN YOUR IDOL.",

  "> IN THE MIDDLE OF THE JOURNEY OF OUR LIFE I CAME TO MYSELF WITHIN A DARK WOOD WHERE THE STRAIGHT WAY WAS LOST.",
  "> ABANDON ALL HOPE YE WHO ENTER HERE.",
  "> THROUGH ME YOU GO TO THE GRIEF WRACKED CITY; THROUGH ME YOU GO TO EVERLASTING PAIN; THROUGH ME YOU GO A PASS AMONG LOST SOULS.",
  "> EVERY WHERE IS HERE AND EVERY TIME IS NOW.",
  
  "> SHALL I COMPARE THEE TO A SUMMER’S DAY?  ",
  "> I AM DETERMINED TO PROVE A VILLAIN AND HATE THE IDLE PLEASURES OF THESE DAYS.",
  "> TO BE OR NOT TO BE, THAT IS THE QUESTION.",
];

let lastIndex = -1;

signalButton.addEventListener("click", () => {
  let index;

  do {
    index = Math.floor(Math.random() * messages.length);
  } while (messages.length > 1 && index === lastIndex);

  lastIndex = index;
  signalOutput.textContent = messages[index];
});

const obsessions = [
  {
    DATE: "2026 OCT",
    FILM: "Tokyo international film festival",
    MUSIC: "Unholy by Sam Smith and Kim Petras <br> Moon and Back by JVKE",
    READING: "Unfortunately there's none.",
    THOUGHT: "(WITH ANNUAL AUTUMN DLC) <br>Learning how to speak to machines. <br>Spending an unreasonably large amount of time on puzzles and perler beads. <br>Contemplating moving somewhere new."
  },

  {
    DATE: "",
    FILM: "",
    MUSIC: "",
    READING: "",
    THOUGHT: ""
  },

  {
    DATE: "",
    FILM: "",
    MUSIC: "",
    READING: "",
    THOUGHT: ""
  }
];

const sortedObsessions = [...obsessions].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const currentContainer = document.querySelector("#obsession-current");
const archiveContainer = document.querySelector("#obsession-archive");
const archiveButton = document.querySelector("#archive-btn");

function createObsessionEntry(entry, isCurrent = false) {
  return `
    <article class="obsession-entry ${isCurrent ? "is-current" : ""}">
      <p class="obsession-date">
        ${isCurrent ? "CURRENTLY // " : ""}${entry.DATE}
      </p>

      <div class="obsession-grid">
        <div class="obsession-item">
          <h3>NEXT DESTINATION</h3>
          <p>${entry.FILM}</p>
        </div>

        <div class="obsession-item">
          <h3>RECENTLY READ</h3>
          <p>${entry.READING}</p>
        </div>

        <div class="obsession-item">
          <h3>ON REPEAT</h3>
          <p>${entry.MUSIC}</p>
        </div>

        <div class="obsession-item">
          <h3>THINGS CURRENTLY HAPPENING</h3>
          <p>${entry.THOUGHT}</p>
        </div>
      </div>
    </article>
  `;
}

const currentObsession = sortedObsessions[0];
const pastObsessions = sortedObsessions.slice(1);

currentContainer.innerHTML = createObsessionEntry(
  currentObsession,
  true
);

archiveContainer.innerHTML = pastObsessions
  .map(entry => createObsessionEntry(entry))
  .join("");

archiveButton.addEventListener("click", () => {
  const archiveIsHidden = archiveContainer.hidden;

  archiveContainer.hidden = !archiveIsHidden;
  archiveButton.setAttribute(
    "aria-expanded",
    String(archiveIsHidden)
  );

  archiveButton.textContent = archiveIsHidden
    ? "MAYBE ENOUGH FOR TODAY ↑"
    : "PERHAPS A LITTLE MORE ↓";
});
