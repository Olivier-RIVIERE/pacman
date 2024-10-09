let pacman = document.getElementById("pacman");
let playground = document.getElementById("playground");

//pour integrer le tactile
let hammertime = new Hammer(playground);

let posX = 0, posY = 0;
console.dir(playground);
let widthPlayground = playground.clientWidth;
let heightPlayground = playground.clientHeight;

console.dir(pacman);

////declaration de fonction

function movePacman(direction) {
  // condition qui definit les limites de deplacement de mon pacman
  // posX > 0 => gauche
  // posX > 0 => haut
  // posX < widthPlayground - 150 => droite
  // posY < heightPlayground - 105 => bas
  switch (direction) {
    case "gauche":
      if (posX > 0) {
        posX -= 50;
      }
      break;
    case "haut":
      if (posY > 0) {
        posY -= 50;
      }
      break;
    case "droite":
      if (posX < widthPlayground - 150) {
        posX += 50;
      }
      break;
    case "bas":
      if (posY < heightPlayground - 150) {
        posY += 50;
      }
      break;
    default:
      break;
  }
  pacman.style.transform = "translate(" + posX + "px," + posY + "px)";
}

// window pour javascript represente "le navigateur"
window.addEventListener("keyup", function (e) {
  switch (e.keyCode) {
    case 37: //gauche
    case 81: //Q
      movePacman("gauche");
      break;
    case 38: //haut
    case 90: //Z
      movePacman("haut");
      break;
    case 39: //droite
    case 68: //D
      movePacman("droite");
      break;
    case 40: //bas
    case 83: //S
      movePacman("bas");
      break;

    default:
      console.log(e.keyCode);
      break;
  }
});

///gestion tactile
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
hammertime.on("swipeleft swiperight swipeup swipedown", function (ev) {
  console.dir(ev.type);
  switch (ev.type) {
    case "swipeleft":// gauche
      movePacman("gauche");
      break;

    case "swipeup":// haut
      movePacman("haut");
      break;

    case "swiperight":// droite
      movePacman("droite");
      break;

    case "swipedown":// bas
      movePacman("bas");
      break;

    default:
      break;
  }
});