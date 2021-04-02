let scores = [
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
];

var rows = 2;

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

function createGamePanel(item) {
  let panel = document.createElement("div");

  let name = document.createElement("div");
  name.classList.add("name");

  let description = document.createElement("div");
  description.classList.add("description");

  let imageDiv = document.createElement("div");
  imageDiv.classList.add("img");

  let image = document.createElement("img");

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
