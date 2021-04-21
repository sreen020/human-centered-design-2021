function addButtonToSelection() {
  const chordSectionButtons = document.querySelectorAll(
    ".chords-section div button"
  );
  const chordSectionButtonContainer = document.querySelectorAll(
    ".chords-section div"
  );
  const selectedChordSection = document.getElementById(
    "selected-chord-section"
  );

  chordSectionButtonContainer.forEach((buttonContainer) => {
    const button = buttonContainer.querySelector("button");
    const testBtn = buttonContainer.querySelector("p");

    testBtn.addEventListener("click", () => {
      const audio = new Audio(`./assets/chords/${button.innerText}.mp4`);

      audio.currentTime = 0;
      audio.play();
    });

    button.addEventListener("click", () => {
      const cln = buttonContainer.cloneNode(true);
      const text = cln.querySelector("p");

      text.innerText = "remove";

      selectedChordSection.appendChild(cln);
      playSoundOnClick();
    });
  });
}

function playSoundOnClick() {
  const selectedbuttons = document.querySelectorAll(
    "#selected-chord-section div"
  );

  selectedbuttons.forEach((btnContainer) => {
    const btn = btnContainer.querySelector("button");
    const deleteBtn = btnContainer.querySelector("p");

    btn.addEventListener("click", () => {
      const audio = new Audio(`./assets/chords/${btn.innerText}.mp4`);

      audio.currentTime = 0;
      audio.play();
    });

    deleteBtn.addEventListener("click", () => {
      deleteBtn.parentNode.parentNode.removeChild(btnContainer);
    });
  });
}

addButtonToSelection();
