const canvas = document.querySelector('.canvas');
const reset = document.querySelector('#reset-canvas');

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
  console.log(canvas.childElementCount);
  let squares = Array.from(document.querySelectorAll('.square'));
  
  squares.forEach(square => {
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
  createGrid(16);
}

// This call the function that create the grids
createGrid(16);

// Listenning for when the user click to reset canvas
reset.addEventListener('click', wipeCanvas);