
function defaultBg(){
    document.body.style.backgroundColor = 'white';
}

function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

let makeRed = document.getElementById('makeRed');
    makeRed.onclick = function(){
    document.body.style.backgroundColor = 'red';
}