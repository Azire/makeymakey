//random color
function pickColor(){
    var colorArray = ["#FA00FF", "#00CCFF", "#FF8F00", "white"];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

///random placement
function pickPos(){
    return Math.floor((Math.random()*800)+100) + "px";
}

function addSquare(){
    var div = document.createElement("div");

    //call color
    div.style.background = pickColor();

    //call placements
    div.style.left=pickPos();
    div.style.top=pickPos();

    $("body").append(div);
}

$(document).keydown(function(e) {
    if(e.which == 32) {
      addSquare();
    }
});
