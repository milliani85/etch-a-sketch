const container = document.querySelector('.grid-container');
let size;

const gridSize = document.getElementById('grid-size');
  gridSize.addEventListener('click', (e) => {
      size = prompt('Pick your grid size');
  })



for(i = 0; i < 256; i++) {
  const grid = document.createElement('div');
    grid.classList.add('grid');
      container.appendChild(grid);
        //grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
         // grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
            grid.addEventListener('mouseover', (e) => {
              e.target.style.backgroundColor = 'black';

        })
}

