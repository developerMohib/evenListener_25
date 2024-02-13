// 2nd styte to call funtion

function defaultBg(){
    document.body.style.backgroundColor = 'white';
}

function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

// 3rd system to call fuction 

let makeRed = document.getElementById('makeRed');
    makeRed.onclick = function(){
    document.body.style.backgroundColor = 'red';
}
// 3rd another system

let makeBlue = document.getElementById('makeBlue');
makeBlue.onclick = make_Blue ;
function make_Blue(){
    document.body.style.backgroundColor = 'blue';
}

// 4rth system to call function

let makeYellow = document.getElementById('yellow');
makeYellow.addEventListener('click', makeYollow);

function makeYollow(){
    document.body.style.backgroundColor = 'yellow';
}
let makePink = document.getElementById('pink');
makePink.addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
});

