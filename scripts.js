
var counter = 1;
var playButton = document.getElementById("play-game");
playButton.onclick = gameStart;

function gameStart() {
    document.getElementById("play-game").disabled = true; //Disable Play
    var newList = [];
    newList = listGen();
    //document.getElementById("current-list").innerHTML = newList[2];
    if (counter < 11) {
        //document.getElementById("counterTest").innerHTML = String(counter);
        
        counter += 1;
    }
}

function gameClear() {
    document.getElementById("play-game").disabled = false;
}

//Creates a list of colors, representing the selections Simon will make
function listGen() {
    var colors = ["red","green","yellow","blue"];
    var newList = [];
    var i;
    for (i=0; i<10; i++) {
        var randInt = Math.floor(Math.random() * 4);
        newList.push(colors[randInt]);
    }
    return newList;
}

//Currently testing on blue
function lightUp() { //Will need to pass in an argument based on input
    currentButton = document.getElementById("blue");
    currentButton.style.background = "lightblue";
    setTimeout(changeBack,200);
    function changeBack() { //TODO: make this fancier
        currentButton.style.background = "blue";
    }
}


//Button testing
var clearButton = document.getElementById("clear-game");
clearButton.onclick = gameClear;

var theButton = document.getElementById("blue");
theButton.onclick = lightUp;