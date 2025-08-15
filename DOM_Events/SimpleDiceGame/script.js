let Player1_score = document.getElementById("pl1_score");
let Player2_score = document.getElementById("pl2_score");
let Player1_img = document.getElementById("player1_img");
let Player2_img = document.getElementById("player2_img");
let RollDice = document.getElementById("roll_dice");
let wonStatus = document.getElementById("won_status_text");
let resetState = false;
let images = [
  "images/one.png",
  "images/two.png",
  "images/three.png",
  "images/four.png",
  "images/five.png",
  "images/six.png",
];

let Player1_score_count = 0;
let Player2_score_count = 0;

RollDice.addEventListener("click", function () {
  if (resetState) {
    resetGame();
    return;
  }
  Player1_img.innerHTML = "";
  Player2_img.innerHTML = "";
  console.log("hello");
  let Player1_dice_number = Math.floor(Math.random() * 6 + 1);
  let Player2_dice_number = Math.floor(Math.random() * 6 + 1);
  console.log(Player1_dice_number);
  console.log(Player2_dice_number);
  let CreateImage1 = document.createElement("img");
  let CreateImage2 = document.createElement("img");
  CreateImage1.setAttribute("src", `${images[Player1_dice_number - 1]}`);
  CreateImage2.setAttribute("src", `${images[Player2_dice_number - 1]}`);
  console.log(CreateImage1);
  console.log(CreateImage2);

  Player1_img.appendChild(CreateImage1);
  Player2_img.appendChild(CreateImage2);

  Player1_score.textContent = `Score: ${(Player1_score_count +=
    Player1_dice_number)}`;

  Player2_score.textContent = `Score: ${(Player2_score_count +=
    Player2_dice_number)}`;

  if (Player1_score_count > 50 && Player2_score_count > 50) {
    wonStatus.textContent = "DRAW!";
    resetState = true;
    return;
  } else if (Player1_score_count > 50) {
    wonStatus.textContent = "Player 1 Won!";
    resetState = true;
    return;
  } else if (Player2_score_count > 50) {
    wonStatus.textContent = "Player 2 Won!";
    resetState = true;
  }
});
function resetGame() {
  Player1_score_count = 0;
  Player2_score_count = 0;
  Player1_score.textContent = "Score: 0";
  Player2_score.textContent = "Score: 0";
  wonStatus.textContent = "";
  Player1_img.innerHTML = "";
  Player2_img.innerHTML = "";
  resetState = false;
}
