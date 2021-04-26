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
      text.classList.add("removeButton");

      text.innerText = "X";

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
    const chordImage = document.getElementById("chord-image");

    btn.addEventListener("click", () => {
      const audio = new Audio(`./assets/chords/${btn.innerText}.mp4`);
      // const image = new Image(`./assets/chords-pics/${btn.innerText}.png`);

      chordImage.src = `./assets/chords-pics/${btn.innerText}.png`;

      audio.currentTime = 0;
      audio.play();
    });

    deleteBtn.addEventListener("click", () => {
      deleteBtn.parentNode.parentNode.removeChild(btnContainer);
    });
  });
}

addButtonToSelection();
