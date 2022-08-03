const gridContainer = document.querySelector('.grid-container');

function createGrid(size) {

for(i = 0; i < size * size; i++) {
  const grid = document.createElement('div');
    grid.classList.add('grid');
      gridContainer.appendChild(grid);
        gridContainer.style.cssText = 
        `grid-template-columns: repeat(${size}, auto);
         grid-template-rows: repeat(${size}, auto);`
           grid.addEventListener('mouseover', (e) => {
             e.target.style.backgroundColor = 'black';
})
}
}

createGrid(16);

const sizeSelector = document.getElementById("size-selector");
  sizeSelector.addEventListener('click', (e) => {
    const size = prompt('Select your grid size between 1 - 100');
       gridContainer.innerHTML = "";
         createGrid(size);
  })


const clearGrid = document.getElementById("clear-grid");
  clearGrid.addEventListener('click', (e) => {
    gridContainer.innerHTML = "";
      createGrid(16);
    
  })