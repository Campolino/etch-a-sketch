const canvas = document.querySelector('.canvas');
const reset = document.querySelector('#reset-canvas');
const resize = document.querySelector('#change-size');
const sliderValue = document.querySelector('.slider');
const sliderText = document.querySelector('.sliderText');
sliderText.textContent = sliderValue.value;

// Create canvas grids
function createGrid(size) {
  for(let i = 0; i < (size * size); i++) {
    let grid = document.createElement('div');
    grid.classList.add('square');
    canvas.appendChild(grid);
  }
  gridLayout(size);
}

// Set width and height of the grids to fit the canvas
function gridLayout(size) {
  let squares = Array.from(document.querySelectorAll('.square'));
  
  squares.forEach(square => {
    square.style.backgroundColor = 'white';
    square.style.width = `calc(600px / ${size})`;
    square.style.height = `calc(600px / ${size})`;
  });

  addEvents();
}

// Listenning to when mouse is over the grid than change it's color
function addEvents() {
  let squares = Array.from(document.querySelectorAll('.square'));

  squares.forEach(square => {
    square.addEventListener('mouseover', paint);
  })
}

// This generate a random HEX color
function paint() {
  let colorGenerator = Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = "#" + colorGenerator;
}

// Wipe canvas
function wipeCanvas() {
  let squares = Array.from(document.querySelectorAll('.square'));
  // Remove all grids from the canvas
  squares.forEach(square => square.remove());

  // Call the function to recreate grids
  createGrid(sliderValue.value);
}

// Resize the canvas
function changeSize() {
  wipeCanvas();
}

// This call the function that create the grids
createGrid(sliderValue.value);

// Call function that resize canvas by the value of the slider
resize.addEventListener('click', changeSize);

// Show the value of the slider
sliderValue.addEventListener('input', function() {
  sliderText.textContent = `${sliderValue.value}`;
});

// Listenning for when the user click to reset canvas
reset.addEventListener('click', wipeCanvas);