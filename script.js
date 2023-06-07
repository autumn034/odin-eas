let rainbowMode = false;
let defaultPaintColor = '#161616';

// grid creation
function createGrid(range) {
    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${range}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${range}, 1fr)`;
    
    grid.innerHTML = ''; // clear grid
    for (let i=0; i < range * range; i++) {
        let box = document.createElement('div');
        box.classList.add('grid__box');

        box.addEventListener('mouseover', () => {
            box.style.background = defaultPaintColor;
        });

        grid.appendChild(box);        
    }
}

let changeSizeBtn = document.querySelector('#changeSize');
changeSizeBtn.addEventListener('click', () => {
    let newRange = prompt("Enter new grid size; 16 = 16x16 grid: ", "16");

    if (newRange > 100) {
        newRange = 100;
    } else if (!newRange > 0) { // ensure int and not negative
        newRange = 16;
    }

    createGrid(newRange);
});

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.grid__box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    });
});

let rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.grid__box');    
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {    
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);    
            box.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
    });
});

let blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.grid__box');    
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {     
            box.style.backgroundColor = defaultPaintColor;
        });
    });
});


// inital grid
createGrid(16);
