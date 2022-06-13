function createNewTag(tag, element, value) {         
  const createTag = document.createElement(tag);        
  createTag.setAttribute(element, value);    
  return createTag;
}
// Requisito 1:
// HTML;

// Requisito 2 e 12 (refatorado):
function createRandomColors(number) {
  const red = Math.floor(Math.random() * number);
  const green = Math.floor(Math.random() * number);
  const blue = Math.floor(Math.random() * number);
  return 'rgb' + `(${red}, ${green}, ${blue})`;
}

const colorPalette = document.querySelector('#color-palette');
function createColorPalette() {
  for (let color = 0; color < 4; color += 1) {    
    const createColorPixels = colorPalette.appendChild(createNewTag('div', 'class', 'color'));    
    createColorPixels.style.backgroundColor = createRandomColors(255);
  }
}
createColorPalette();
const paletteColors = document.querySelectorAll('.color');
paletteColors[0].style.backgroundColor = 'black';

// Requisito 3: Cor preta inserida no requisito 2;

// Requisito 4:
const pixelBoard = document.querySelector('#pixel-board');

var pixelBoardSize = 25;

function changePixelBoardStyle() {
  let boardWidth =  (pixelBoardSize) * 10 + 'px';
  let boardHeight =  (pixelBoardSize) * 10 + 'px';
  pixelBoard.style.width = boardWidth;
  pixelBoard.style.height = boardHeight;
  pixelBoard.style.margin = 'auto';
};
changePixelBoardStyle();

function createColorBoard() {   
  for (let pixel = 0; pixel < pixelBoardSize; pixel += 1) {
  pixelBoard.appendChild(createNewTag('div', 'class', 'pixel'));  
  }
}
createColorBoard();



// Requisito 5: CSS

// Requisito 6:
const blackColor = document.querySelectorAll('.color')[0];
window.onload = function () {
  blackColor.classList.add('selected');
}

// Requisito 7:
function changeSelectedColor(event) {   
  for (let color = 0; color < paletteColors.length; color += 1) {
    paletteColors[color].classList.remove('selected');
    event.target.classList.add('selected'); 
  }  
}

function addPaletteEvent() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const color = paletteColors[index];
    color.addEventListener('click', changeSelectedColor);
  }
}
addPaletteEvent();

// Requisito 8:
function paintPixel(event) {  
  for (let index = 0; index < paletteColors.length; index += 1) {
    let color = paletteColors[index];
    if (color.className === 'color selected') {
      const getStyle = window.getComputedStyle(paletteColors[index], null);
      const background = getStyle.getPropertyValue('background-color');
      event.target.style.background = background;      
    }    
  }  
}

const pixels = document.getElementsByClassName('pixel');

function addPixelEvent() {  
  for (let index = 0; index < pixels.length; index += 1) {
    const color = pixels[index];
    color.addEventListener('click', paintPixel);
  }  
}
addPixelEvent();

// Requisito 9:
const clearButton = document.getElementById('clear-board');

function reset() {
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', reset);

// Requisito 10:
const boardButton = document.getElementById('generate-board');

function createNewBoard () {
  let input = parseInt(document.getElementById('board-size').value);  
  if (isNaN(input)) {        
    alert('Board inválido!');      
  } else if (input < 5) {
    while(pixels.length > 0) { 
      pixels[0].parentNode.removeChild(pixels[0]);
      // Enquanto o número de pixels for maior que zero, eles serão removidos a partir do elemento pai.
      // link: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
      // Primeira resposta.
    }  
    for (let pixel = 0; pixel < 25; pixel += 1) {    
      pixelBoard.appendChild(createNewTag('div', 'class', 'pixel'));    
      // pixelBoard.style.width = width;
      // pixelBoard.style.height = height;
      addPixelEvent();   
    }  
  } else if (input > 50) {
    while(pixels.length > 0) { 
      pixels[0].parentNode.removeChild(pixels[0]);
      // Enquanto o número de pixels for maior que zero, eles serão removidos a partir do elemento pai.
      // link: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
      // Primeira resposta.
    }  
    for (let pixel = 0; pixel < 2500; pixel += 1) {    
      pixelBoard.appendChild(createNewTag('div', 'class', 'pixel'));    
      // pixelBoard.style.width = width;
      // pixelBoard.style.height = height;
      addPixelEvent();   
    }  
  } else {
    while(pixels.length > 0) { 
      pixels[0].parentNode.removeChild(pixels[0]);
      // Enquanto o número de pixels for maior que zero, eles serão removidos a partir do elemento pai.
      // link: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
      // Primeira resposta.
    }  
    var boardSize = input * input;
    let width = (input) * 45 + 'px';
    let height = (input) * 45 + 'px';
    for (let pixel = 0; pixel < boardSize; pixel += 1) {    
      pixelBoard.appendChild(createNewTag('div', 'class', 'pixel'));       
      addPixelEvent();   
    }  
      pixelBoard.style.width = width;
      pixelBoard.style.height = height;
  }  
}
boardButton.addEventListener('click', createNewBoard);

// Requisito 11 dentro do requisito 10.

