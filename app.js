const blitzGames = [
  {
    blackPieces: {
      color: "black",
      player: "Magnus Carlsen",
      isWinner: true,
    },
    whitePieces: {
      color: "white",
      player: "Hikaru Nakamura",
      isWinner: false,
    },
  },
  {
    blackPieces: {
      color: "black",
      player: "Hikaru Nakamura",
      isWinner: false,
    },
    whitePieces: {
      color: "white",
      player: "Magnus Carlsen",
      isWinner: true,
    },
  },
  {
    blackPieces: {
      color: "black",
      player: "Magnus Carlsen",
      isWinner: false,
    },
    whitePieces: {
      color: "white",
      player: "Hikaru Nakamura",
      isWinner: true,
    },
  },
  {
    blackPieces: {
      color: "black",
      player: "Hikaru Nakamura",
      isWinner: true,
    },
    whitePieces: {
      color: "white",
      player: "Magnus Carlsen",
      isWinner: false,
    },
  },
  {
    blackPieces: {
      color: "black",
      player: "Magnus Carlsen",
      isWinner: true,
    },
    whitePieces: {
      color: "white",
      player: "Hikaru Nakamura",
      isWinner: false,
    },
  },
];

console.log(blitzGames[0].blackPieces.player);
console.log(blitzGames[0].blackPieces.isWinner);

const body = document.body;
const parentUl = document.createElement("ul");
body.append(parentUl);

// childLi.innerText = "Magnus Carlsen vs. Hikaru Nakamura win-lose";
// parentUl.append(childLi);

for (let blitzGame of blitzGames) {
  // Creates a new li child to append onto the document after every loop
  const childLi = document.createElement("li");

  // Removes the bullet from the li after every loop
  childLi.style.listStyleType = "none";
  // deconstructs the information from the object
  const { blackPieces: black } = blitzGame;
  const { whitePieces: white } = blitzGame;
  const { player: bPlayer, color: bColor, isWinner: bWinner } = black;
  const { player: wPlayer, color: wColor, isWinner: wWinner } = white;

  if (bWinner) {
    childLi.classList.add("winner");
    childLi.classList.remove("loser");
  } else {
    childLi.classList.add("loser");
    childLi.classList.remove("winner");
  }
  //   childLi.style.backgroundColor = "red";
  // Uses the information we have gathered to display on the HTML document
  childLi.innerText = `${bColor} vs. ${wColor} ${bPlayer} vs. ${wPlayer}`;
  parentUl.append(childLi);
}
