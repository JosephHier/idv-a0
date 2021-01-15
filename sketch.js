let yDrop;
let secHeight;
let minHeight;
let hourHeight;
let pacman, cherry, lemon, orange, strawberry, bann;

function preload(){
  pacman = loadImage("./pacman.png");
  cherry = loadImage("./cherry.png");
  lemon = loadImage("./lemon.jpg");
  orange = loadImage("./orange.jpg");
  strawberry = loadImage("./strawberry.png");
  bann = loadImage("./bann.jpg")
}

function setup() {
  createCanvas(600, 600);
  yDrop = 0;
}

function draw() {
  background(255, 255, 255);
  drawAxis();
  dropSec();
  dropMin();
  dropHour();
  secHeight = 600 - (second() * 480/60)
  minHeight = 600 - (minute() * 480/60)
  hourHeight = 600 - (hour() * 480/24)
  rect(100, secHeight, 100, second() * 480/60);
  rect(250, minHeight, 100, minute() * 480/60);
  rect(400, hourHeight, 100, hour() * 480/24);

  image(pacman, 100, secHeight - 65, 100, 100)
  image(pacman, 250, minHeight - 65, 100, 100)
  image(pacman, 400, hourHeight - 65, 100, 100)
}

function drawAxis() {
  // minute/second axis
  line(35, 600, 35, 120);
  line(30, 480, 40, 480);
  line(30, 360, 40, 360);
  line(30, 240, 40, 240);
  line(30, 120, 40, 120);
  fill(50);
  textSize(16);
  text("15", 5, 485);
  text("30", 5, 365);
  text("45", 5, 245);
  text("60", 5, 125);

  // hour axis
  line(525, 600, 525, 120);

  let i = 580;
  let j = 1;
  while (i >= 120) {
    line(520, i, 530, i);
    if (j % 4 == 0) {
      textSize(16);
      fill(50);
      text(j.toString(), 555, i + 5);
    }
    i -= 20;
    j++;
  }
}

function dropSec() {
  //ellipse(150, yDrop, 25, 25);
  image(cherry, 125, yDrop, 50, 45)
  yDrop += 10;
  if (yDrop >= 600) {
  //if (yDrop >= secHeight) {
    yDrop = 0;
  }
}

function dropMin() {
  if (second() % 5 == 0) {
    image(orange, 275, yDrop, 50, 60);
  }
}

function dropHour() {
  //if (minute() == 0) {
  if (true) {
    image(bann, 425, yDrop, 50, 50);
  }
}
