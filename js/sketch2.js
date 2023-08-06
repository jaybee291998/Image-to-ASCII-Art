const density =  'Ñ@#W$9876543210?!abc;:+=-,._ ';
let nika;
let vid;
let asciiDiv;
function setup() {
//   noCanvas();
    frameRate(30);
  vid = createVideo(
    ['vid/bad_apple.mp4'],
    vidLoad
  );

  vid.size(100, 100);
  asciiDiv = createDiv();
}

function draw() {
    vid.loadPixels();
    console.log(vid.pixels[0]);
    let asciiImage = "";
    for(let j = 0; j < vid.height; j++){
        for(let i = 0; i < vid.width; i++) {
            const pixelIndex = (i + j * vid.width) * 4;
            const r = vid.pixels[pixelIndex + 0];
            const g = vid.pixels[pixelIndex + 1];
            const b = vid.pixels[pixelIndex + 2];
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

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(100);
}