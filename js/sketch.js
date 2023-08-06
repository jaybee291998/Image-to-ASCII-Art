const density =  'Ñ@#W$9876543210?!abc;:+=-,._ ';
let nika;
let asciiDiv;
function preload() {
    nika = loadImage("img/bad.png", ()=>console.log("success"), ()=>console.log("failed"));
}

function setup() {
    createCanvas(400, 400);
    frameRate(30);
    asciiDiv = createDiv();
}

function draw() {
    // background(255);
    // image(capture, 0, 0, 320, 240);
    nika.loadPixels();
    let asciiImage = "";
    for(let j = 0; j < nika.height; j++){
        for(let i = 0; i < nika.width; i++) {
            const pixelIndex = (i + j * nika.width) * 4;
            const r = nika.pixels[pixelIndex + 0];
            const g = nika.pixels[pixelIndex + 1];
            const b = nika.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;

            const len = density.length;
            
            const charIndex = floor(map(avg, 0, 255, 0, len - 1));
            let c = density.charAt(charIndex);
            if(c === ' ') c = "&nbsp;";
            asciiImage += c;
        }
        asciiImage += "<br>";
    }
    asciiDiv.html(asciiImage);
}