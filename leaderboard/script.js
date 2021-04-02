let scores = [
  { name: "Player 1", score: 300, image: "batman" },
  { name: "Player 2", score: 370, image: "chaplin" },
  { name: "Player 3", score: 500, image: "girl_1" },
  { name: "Player 4", score: 430, image: "girl_2" },
  { name: "Player 5", score: 340, image: "grandma" },
  { name: "Player 6", score: 340, image: "hipster" },
  { name: "Player 7", score: 340, image: "indian" },
  { name: "Player 8", score: 340, image: "male" },
  { name: "Player 9", score: 340, image: "marilyn" },
];

function createUserEntry(item) {
  let board = document.createElement("div");
  board.classList.add("lboard_mem");

  let name = document.createElement("div");
  let points = document.createElement("div");
  let imageDiv = document.createElement("div");
  let image = document.createElement("img");

  name.classList.add("name_bar");
  points.classList.add("points");
  imageDiv.classList.add("img");

  imageDiv.appendChild(image);

  name.innerText = item.name;
  points.innerText = item.score;
  image.src = `assets/${item.image}.png`;

  board.appendChild(image);
  board.appendChild(name);
  board.appendChild(points);
  return board;
}

function updateLeaderboardView() {
  let leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = "";

  scores.sort(function (a, b) {
    return b.score - a.score;
  });

  var size = 5;
  var players = scores.slice(0, size).map((i) => {
    return i;
  });
  // create elements for each player
  for (let i = 0; i < players.length; i++) {
    console.log(i);
    let userEntryRow = createUserEntry(scores[i]);
    leaderboard.appendChild(userEntryRow);
  }
}

updateLeaderboardView();
function randomize() {
  for (var i = 0; i < scores.length; i++) {
    scores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  }
  // when your data changes, call updateLeaderboardView
  updateLeaderboardView();
}
