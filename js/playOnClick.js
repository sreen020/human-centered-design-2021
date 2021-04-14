function playSoundOnClick() {
  const buttonE = document.getElementById("button-gitaar-e");
  const buttonB = document.getElementById("button-gitaar-b");
  const buttonG = document.getElementById("button-gitaar-g");
  const buttonD = document.getElementById("button-gitaar-d");
  const buttonA = document.getElementById("button-gitaar-a");
  const button6 = document.getElementById("button-gitaar-6");

  const audioE = new Audio("./assets/1st_String_E_64kb.mp3");
  const audioB = new Audio("./assets/2nd_String_B__64kb.mp3");
  const audioG = new Audio("./assets/3rd_String_G_64kb.mp3");
  const audioD = new Audio("./assets/4th_String_D_64kb.mp3");
  const audioA = new Audio("./assets/5th_String_A_64kb.mp3");
  const audio6 = new Audio("./assets/6th_String_E_64kb.mp3");

  // chords
  const buttonChordC = document.getElementById("button-gitaar-chord-c");
  const buttonChordD = document.getElementById("button-gitaar-chord-d");
  const buttonChordDm = document.getElementById("button-gitaar-chord-dm");
  const buttonChordE = document.getElementById("button-gitaar-chord-e");

  const audioChordC = new Audio("./assets/C_64kb.mp3");
  const audioChordD = new Audio("./assets/D_64kb.mp3");
  const audioChordDm = new Audio("./assets/Dm_64kb.mp3");
  const audioChordE = new Audio("./assets/E_64kb.mp3");

  buttonE.addEventListener("click", () => {
    console.log("buttonE");
    // audioE.muted = true;
    audioE.currentTime = 0;
    audioE.play();
    return false;
  });

  buttonB.addEventListener("click", () => {
    console.log("buttonB");
    // audioB.muted = true;
    audioB.currentTime = 0;
    audioB.play();
    return false;
  });

  buttonG.addEventListener("click", () => {
    console.log("buttonG");
    // audioG.muted = true;
    audioG.currentTime = 0;
    audioG.play();
    return false;
  });

  buttonD.addEventListener("click", () => {
    console.log("buttonD");
    // audioD.muted = true;
    audioD.currentTime = 0;
    audioD.play();
    return false;
  });

  buttonA.addEventListener("click", () => {
    console.log("buttonA");
    // audioA.muted = true;
    audioA.currentTime = 0;
    audioA.play();
    return false;
  });

  button6.addEventListener("click", () => {
    console.log("button6");
    // audio6.muted = true;
    audio6.currentTime = 0;
    audio6.play();
    return false;
  });

  //chords
  console.log(buttonChordC);
  buttonChordC.addEventListener("click", () => {
    console.log("buttonE");
    // audioE.muted = true;
    audioChordC.currentTime = 0;
    audioChordC.play();
    return false;
  });

  buttonChordD.addEventListener("click", () => {
    console.log("buttonE");
    // audioE.muted = true;
    audioChordD.currentTime = 0;
    audioChordD.play();
    return false;
  });

  buttonChordDm.addEventListener("click", () => {
    console.log("buttonE");
    // audioE.muted = true;
    audioChordDm.currentTime = 0;
    audioChordDm.play();
    return false;
  });

  buttonChordE.addEventListener("click", () => {
    console.log("buttonE");
    // audioE.muted = true;
    audioChordE.currentTime = 0;
    audioChordE.play();
    return false;
  });
}
playSoundOnClick();
