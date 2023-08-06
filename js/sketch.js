const density =  'Ñ@#W$9876543210?!abc;:+=-,._';

let nika;

function preload() {
    nika = loadImage("img/nika.png", ()=>console.log("success"), ()=>console.log("failed"));
}

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  console.log("hello");
}

function draw() {
  background(0);
//   image(nika, 0, 0, width, height);

  let w = width / nika.width;
  let h = height / nika.height;

  nika.loadPixels();

  for(let i = 0; i < nika.width; i++) {
    for(let j = 0; j < nika.height; j++) {
        const pixelIndex = (i + j * nika.width) * 4;
        const r = nika.pixels[pixelIndex + 0];
        const g = nika.pixels[pixelIndex + 1];
        const b = nika.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;

        const len = density.length;
        const charIndex = floor(map(avg, 0, 255, len, 0));
        noStroke();
        fill(255);
        // square(i*w, j*h, w);
        textSize(w);
        textAlign(CENTER, CENTER);
        // text('G', i * w + w * 0.5, j * h + h * 0.5);
        text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
    }
  }
}

function render(char) {}