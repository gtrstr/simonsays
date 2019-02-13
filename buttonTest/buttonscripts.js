var theButton = document.getElementById("b");
theButton.onclick = listTest;

function listTest() {
    var place = document.getElementById("write");
    var testList = []
    testList = listGen();
    place.innerHTML = testList[0];
}

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
