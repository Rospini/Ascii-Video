const density = 'Ñ@#W$987654321?!abc;:+=-,._  '

let input
let asciiDiv


function setup() {

  noCanvas()
  video = createCapture(VIDEO)
  video.size(64, 64);
  asciiDiv = createDiv()
}

function draw() {
  video.loadPixels()
  let asciiImage = ''
  for(let j=0; j < video.width; j++){
    for(let i=0; i < video.height; i++){
      const pixelIndex = (i + j * video.width)*4
      const r = video.pixels[pixelIndex + 0]
      const g = video.pixels[pixelIndex + 1]
      const b = video.pixels[pixelIndex + 2]
      const average = (r + g + b) /3
      const length = density.length
      const charIndex = floor(map(average, 0, 255, length,0 ))

      
      const c = density.charAt(charIndex)
      if (c == ' ') asciiImage += '&nbsp'
      else asciiImage += c

    }
    asciiImage+= '<br/>'
  }
  asciiDiv.html(asciiImage)
}
