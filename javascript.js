const canvas = document.querySelector('.canvas');

function createGrid(size) {
  for(let i = 0; i < (size * size); i++) {
    let grid = document.createElement('div');
    grid.classList.add('square');
    canvas.appendChild(grid);
  }
  gridLayout(size);
}

function gridLayout(size) {
  console.log(canvas.childElementCount);
  let squares = Array.from(document.querySelectorAll('.square'));
  squares.forEach(square => {
    square.style.backgroundColor = 'black';
    square.style.width = `calc(600px / ${size})`;
    square.style.height = `calc(600px / ${size})`;
  });
}

createGrid(16);