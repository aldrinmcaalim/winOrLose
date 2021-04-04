const blitzGames = [
  {
    blackPieces: {
      player: "Magnus Carlsen",
      isWinner: true,
    },
    whitePieces: {
      player: "Hikaru Nakamura",
      isWinner: false,
    },
  },
  {
    blackPieces: {
      player: "Hikaru Nakamura",
      isWinner: false,
    },
    whitePieces: {
      player: "Magnus Carlsen",
      isWinner: true,
    },
  },
  {
    blackPieces: {
      player: "Magnus Carlsen",
      isWinner: false,
    },
    whitePieces: {
      player: "Hikaru Nakamura",
      isWinner: true,
    },
  },
  {
    blackPieces: {
      player: "Hikaru Nakamura",
      isWinner: true,
    },
    whitePieces: {
      player: "Magnus Carlsen",
      isWinner: false,
    },
  },
  {
    blackPieces: {
      player: "Magnus Carlsen",
      isWinner: true,
    },
    whitePieces: {
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
  const { player: bPlayer } = black;
  const { player: wPlayer } = white;

  // Uses the information we have gathered to display on the HTML document
  childLi.innerText = `${bPlayer} vs. ${wPlayer}`;
  parentUl.append(childLi);
}
