const gridContainer = document.querySelector('.grid-container');
let mode;
let size;

// function to create grid and change block colours

function createGrid(size) {
  for(i = 0; i < size * size; i++) {
    const grid = document.createElement('div');
      grid.classList.add('grid');
        gridContainer.appendChild(grid);
          gridContainer.style.cssText = 
           `grid-template-columns: repeat(${size}, auto);
              grid-template-rows: repeat(${size}, auto);`
                grid.addEventListener('mouseover', (e) => {
                  if (mode === 'black') {
                    e.target.style.backgroundColor = 'black';
                  } else if (mode === 'rainbow') {
                    e.target.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) +
                    ', ' + Math.floor(Math.random() * 255) + ', ' + 
                    Math.floor(Math.random() * 255) + ')';
                  } else e.target.style.backgroundColor = 'black';
})
}
}


// creates 16 x 16 to start

createGrid(16);


// prompt to select grid size

const sizeSelector = document.getElementById("size-selector");
  sizeSelector.addEventListener('click', (e) => {
    size = prompt('Select your grid size between 1 - 100');
    if (size < 1 || size > 100) {
        alert("Grid size should be between 1 - 100, please choose again.")
    }
    else if (size) {
       gridContainer.innerHTML = "";
         createGrid(size);
    } else {
       gridContainer.innerHTML = "";
         createGrid(16);
    }     
  })


//clears grid back to 16 x 16

const clearGrid = document.getElementById("clear-grid");
  clearGrid.addEventListener('click', (e) => {
    gridContainer.innerHTML = "";
      createGrid(size);
    
  })


// select drawing colour

  const blackSelect = document.getElementById('black');
  const rainbowSelect = document.getElementById('rainbow');
  const colourSelect = document.querySelectorAll('colour-select');
  rainbowSelect.addEventListener('click', () => {
      mode = 'rainbow';
      console.log(mode);
  })
  blackSelect.addEventListener('click', () => {
      mode = 'black';
  })


// colourSelect.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         mode = e.target.id;
//         console.log(mode);

//     })
// })