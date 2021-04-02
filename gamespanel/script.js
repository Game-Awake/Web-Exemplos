let gamesInfo = [
  {
    name: "Game 1",
    description: "Jogo exemplo 1",
    image: "snake",
    link: "http://google.com.br",
  },
  {
    name: "Game 2",
    description: "Jogo exemplo 2",
    image: "snake",
    link: "http://google.com.br",
  },
  {
    name: "Game 1",
    description: "Jogo exemplo 1",
    image: "snake",
    link: "http://google.com.br",
  },
  {
    name: "Game 2",
    description: "Jogo exemplo 2",
    image: "snake",
    link: "http://google.com.br",
  },
  {
    name: "Game 2",
    description: "Jogo exemplo 2",
    image: "snake",
    link: "http://google.com.br",
  },
];

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

function createGamePanel(item) {
  let panel = document.createElement("div");
  panel.classList.add("column");

  let name = document.createElement("div");
  name.classList.add("name");
  name.innerText = item.name;

  let description = document.createElement("div");
  description.classList.add("description");
  description.innerText = item.description;

  let imageDiv = document.createElement("div");
  imageDiv.classList.add("img");

  let image = document.createElement("img");
  image.src = `assets/${item.image}.png`;
  imageDiv.appendChild(image);

  panel.appendChild(name);
  panel.appendChild(description);
  panel.appendChild(imageDiv);

  return panel;
}

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

function createGameBoard() {
  var maxRows = 2;
  let length = gamesInfo.length;
  let rows = Math.round(length / maxRows);

  let gameBoardDiv = document.getElementById("gameBoard");

  console.log("A", gameBoardDiv);
  let itensPlaced = 0;

  for (let columns = 0; columns < rows; columns++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let rows = 0; rows < maxRows; rows++) {
      if (itensPlaced < length) {
        const element = gamesInfo[itensPlaced++];
        let column = createGamePanel(element);
        row.appendChild(column);
      }
    }
    gameBoardDiv.appendChild(row);
  }
}

createGameBoard();

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
