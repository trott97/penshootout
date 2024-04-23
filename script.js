let score = 0;
let highscore = 0;

function updatescoredisplay() {
    document.getElementById('score').textContent = score;
    document.getElementById('high-score').textContent = highscore;
}

function goalkeeperSave() {
    console.log("Goalkeeper saved")
    if (score > highscore) {
        highscore = score;
    }
    score = 0;
    console.log("score reset to 0")
    updatescoredisplay();
}

function movegoalkeeper(direction) {
    var goalkeeper = document.querySelector('.goalkeeper');
    var newPosition;

    if (direction === 'left') {
        newPosition = '5%';
    } else if (direction === 'middle') {
        newPosition = '25%';
    } else if (direction === 'right') {
        newPosition = '55%';
    }

    goalkeeper.style.left = newPosition;
}

function moveball(direction) {
    var ball = document.querySelector('.ball');
    var newPositionleft, newPositiontop;

    if (direction === 'left') {
        newPositionleft = '5%';
    } else if (direction === 'middle') {
        newPositionleft = '45%';
    } else if (direction === 'right') {
        newPositionleft = '70%';

    }

    newPositiontop = '30%';

    ball.style.left = newPositionleft;
    ball.style.top = newPositiontop
}


function shoot(direction) {
    var goalkeepermovement = generategoalkeepermovement();

    moveball(direction);

    if (goalkeepermovement === 0) {
        movegoalkeeper('left');
    } else if (goalkeepermovement === 1) {
        movegoalkeeper('middle');
    } else {
        movegoalkeeper('right');
    }

    if (direction === 'left' && goalkeepermovement !== 1) {
        alert('GOLAZO');
        increasescore();
    } else if (direction === 'middle' && goalkeepermovement !== 1) {
        alert('GOLAZO');
        increasescore();
    } else if (direction === 'right' && goalkeepermovement !== 2) {
        alert('GOLAZO');
        increasescore();
    } else {
        alert('SAVED!');
        goalkeeperSave();
    }
}

document.getElementById('left').addEventListener('click', function() {
    shoot('left');
});

document.getElementById('middle').addEventListener('click', function() {
    shoot('middle');
});

document.getElementById('right').addEventListener('click', function() {
    shoot('right');
});

updatescoredisplay();

function generategoalkeepermovement() {
    return Math.floor(Math.random() * 3);
}

function increasescore() {
    score++;
    updatescoredisplay();
}
