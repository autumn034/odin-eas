// grid creation
let grid = document.querySelector('.grid');
for (let i=0; i<16; i++) {
    let row = document.createElement('div');
    row.cssText = "line-height: 0px;";
    for (let j=0; j<16; j++) {
        let box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
    }
    grid.appendChild(row);
}

// change box color upon mouse over
let boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    });
});