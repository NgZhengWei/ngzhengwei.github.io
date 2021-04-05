//have not implemented darken effect
let gridArr = [];

for (let i = 0; i < 16 * 16; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    gridArr.push(grid);
    document.querySelector('.grids').appendChild(grid);
}

gridArr.forEach((grid) => {
    grid.addEventListener('mouseenter', changeColor);
});

function changeColor(e) {
    if (!e.target.style.backgroundColor){
        e.target.style.backgroundColor = randomColor();
    }
    else if (!e.target.value){
        let regex = /^rgb\((\d+), (\d+), (\d+)\)$/gm;
        let reArr = regex.exec(e.target.style.backgroundColor);
        let deductArr = [];
        for (let i = 1; i < 4; i++) {
            deductArr.push(reArr[i] / 10);
        }
        e.target.value = deductArr.join(',');
        e.target.style.backgroundColor = 'rgb(' + (reArr[1] - deductArr[0]) + ',' + (reArr[2] - deductArr[1]) + ',' + (reArr[3] - deductArr[2]) + ')';
    }
    else {
        let regex = /^rgb\((\d+), (\d+), (\d+)\)$/gm;
        let reArr = regex.exec(e.target.style.backgroundColor);
        let deductArr = e.target.value.split(',');
        e.target.style.backgroundColor = 'rgb(' + (reArr[1] - deductArr[0]) + ',' + (reArr[2] - deductArr[1]) + ',' + (reArr[3] - deductArr[2]) + ')';
    }
}

function randomColor() {
    let color = '#';
    const letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', (e) => {
    let gridNum = prompt('How many grids to draw next?');
    if (!gridNum) return;
    document.querySelector('.grids').innerHTML = ''; //clean out current grids
    drawGrids(gridNum);
    gridArr.forEach((grid) => {
        grid.addEventListener('mouseenter', changeColor);
    });
});

function drawGrids(n) {
    gridArr = [];
    document.querySelector('.grids').style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    document.querySelector('.grids').style.gridTemplateRows = `repeat(${n}, 1fr)`;
    for (let i = 0, totalGrid = n * n; i < totalGrid; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        gridArr.push(grid);
        document.querySelector('.grids').appendChild(grid);
    }
}

function darken10(e, r, g, b) {
    
}