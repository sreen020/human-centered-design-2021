function playSoundOnHover() {
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

  buttonE.addEventListener("mouseover", () => {
    console.log("buttonE");
    // audioE.muted = true;
    audioE.currentTime = 0;
    audioE.play();
    return false;
  });

  buttonB.addEventListener("mouseover", () => {
    console.log("buttonB");
    // audioB.muted = true;
    audioB.currentTime = 0;
    audioB.play();
    return false;
  });

  buttonG.addEventListener("mouseover", () => {
    console.log("buttonG");
    // audioG.muted = true;
    audioG.currentTime = 0;
    audioG.play();
    return false;
  });

  buttonD.addEventListener("mouseover", () => {
    console.log("buttonD");
    // audioD.muted = true;
    audioD.currentTime = 0;
    audioD.play();
    return false;
  });

  buttonA.addEventListener("mouseover", () => {
    console.log("buttonA");
    // audioA.muted = true;
    audioA.currentTime = 0;
    audioA.play();
    return false;
  });

  button6.addEventListener("mouseover", () => {
    console.log("button6");
    // audio6.muted = true;
    audio6.currentTime = 0;
    audio6.play();
    return false;
  });
}
playSoundOnHover();
