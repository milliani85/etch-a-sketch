const gridContainer = document.querySelector('.grid-container');
const sizeSelector = document.getElementById("size-selector");
const clearGrid = document.getElementById("clear-grid");
const blackSelect = document.getElementById('black');
const rainbowSelect = document.getElementById('rainbow');
const colourSelect = document.querySelectorAll('colour-select');


let mode;
let size;
let gridSelect;



//Creates 16 x 16 to start
createGrid(16);



//Function to create grid.
function createGrid(size) {
  for(i = 0; i < size * size; i++) {
      grid = document.createElement('div');
      grid.classList.add('grid');
      gridContainer.appendChild(grid);
      gridContainer.style.cssText = 
        `grid-template-columns: repeat(${size}, auto);
         grid-template-rows: repeat(${size}, auto);`
         grid.addEventListener('mouseover', (e) => {
          gridSelect = e.target;
          colourBlock()
        })  
  }
}



//Changes grid box colour.  
function colourBlock() {
  if (mode === 'black') {
    gridSelect.style.backgroundColor = 'black';
  }else if (mode === 'rainbow') {
    gridSelect.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) +
    ', ' + Math.floor(Math.random() * 255) + ', ' + 
    Math.floor(Math.random() * 255) + ')';
  }else gridSelect.style.backgroundColor = 'black';
}



//Prompt to select grid size
sizeSelector.addEventListener('click', (e) => {
  size = prompt('Select your grid size between 1 - 100');
    if (size < 1 || size > 100) {
      alert("Grid size should be between 1 - 100, please choose again.")
    }else if (size) {
      gridContainer.innerHTML = "";
      createGrid(size);
    }else {
      gridContainer.innerHTML = "";
      createGrid(16);
  }     
})



//Clears grid back to 16 x 16
clearGrid.addEventListener('click', (e) => {
  gridContainer.innerHTML = "";
     createGrid(16);
})



//Select drawing colour
rainbowSelect.addEventListener('click', () => {
  mode = 'rainbow';
})
blackSelect.addEventListener('click', () => {
  mode = 'black';
})

