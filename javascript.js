const container = document.querySelector('.canvas');
const resetCanvas = document.querySelector('.reset-canvas');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "item";
  };
};

resetCanvas.addEventListener('click', function() {
  size = parseInt(window.prompt("Wich size it should be?"));
  container.innerHTML = '';
  makeRows(size, size);
});

makeRows(16, 16);