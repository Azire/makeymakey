var x=0; //increment to cap dots

//random color
function pickColor(){
    var colorArray = ["#FA00FF", "#00CCFF", "#FF8F00", "white"];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

///random placement
function pickPos(){
    return Math.floor((Math.random()*800)) + "px";
}

function addSquare(){
    var div = document.createElement("div");

    //call color
    div.style.background = pickColor();

    //call placements
    div.style.left=pickPos();
    div.style.top=pickPos();

    $("p").append(div);
}

$(document).keydown(function(e) {
    if(e.which == 32 && x < 1500) {
      addSquare();
      x = x + 1;
    }
});
