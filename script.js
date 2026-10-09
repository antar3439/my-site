const signalButton = document.querySelector("#signal-btn");
const signalOutput = document.querySelector("#signal-output");

const messages = [
  "> SIGNAL RECEIVED. HELLO, INTERNET STRANGER.",
  "> ERROR 404: ADULTING NOT FOUND.",
  "> SYSTEM MESSAGE: DRINK SOME WATER.",
  "> LIFE IS STILL LOADING...",
  "> KEEP BEING WEIRD. IT LOOKS GOOD ON YOU.",
  "> YOU HAVE UNLOCKED: EXISTING."
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