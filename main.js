let container = document.getElementById('container');
let id = 0;
let currentId = 1124;
let currentPosition = 'gridTile' + currentId;

for(let i = 0; i < 2500; i++) {
    let gridTile = document.createElement('div');
    gridTile.id = 'gridTile' + " " + id;
    gridTile.className = "gridTile";
    container.appendChild(gridTile);

    ++id
}


document.onkeydown = checkKey;
document.addEventListener('keydown', checkKey());
console.log(e.keyCode)


function checkKey(e) {
    e = e || window.event;
    let x = e.keyCode;


    if (x == '38') {
        return currentId - 50; 
    }
    else if (x == '40') {
        return currentId + 50;
    }
    else if (x == '37') {
       return currentId - 1;
    }
    else if (x == '39') {
       return currentId + 2;
    }
}

function moveTile() {
    checkKey();
    currentPosition.style.background = 'black';
}

document.getElementById('play-btn').addEventListener('click', () => {
    let startTile = document.getElementById('gridTile ' + currentId);
    startTile.style.background = "black";
});

moveTile();


