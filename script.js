// grid creation
function createGrid(range) {
    let boxHeightWidth =  512 / range;
    let grid = document.querySelector('.grid');
    grid.innerHTML = ''; // clear grid
    for (let i=0; i<range; i++) {
        let row = document.createElement('div');
        row.cssText = "line-height: 0px;";
        for (let j=0; j<range; j++) {
            let box = document.createElement('div');
            box.classList.add('grid__box');
            box.style.width = boxHeightWidth + "px";
            box.style.height = boxHeightWidth + "px";
            
            box.addEventListener('mouseover', () => {
                box.style.background = 'black';
            });

            row.appendChild(box);
        }
        grid.appendChild(row);
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

// inital grid
createGrid(16);
