
//pythagoras

let a_pyth = 0;
let b_pyth = 0;
let c_pyth = 0;

document.getElementById("submitButton_pyth").onclick = function(){

    a_pyth = document.getElementById("aTextBox_pyth").value;
    a_pyth = Number(a_pyth);

    b_pyth = document.getElementById("bTextBox_pyth").value;
    b_pyth = Number(b_pyth);

    c_pyth = Math.sqrt(Math.pow(a_pyth, 2) + Math.pow(b_pyth, 2));

    document.getElementById("cLabel_pyth").innerHTML = "Side C: " + c_pyth;
}

document.getElementById("clearButton_pyth").onclick =function(){
    
    document.getElementById("cLabel_pyth").innerHTML = "Side C: ";
}




//triangleArea

let tBase = 0;
let tHeight = 0;
let tArea = 0;

document.getElementById("submitButton_tArea").onclick = function(){

    tBase = document.getElementById("aTextBox_tArea").value;
    tBase = Number(tBase);

    tHeight = document.getElementById("bTextBox_tArea").value;
    tHeight = Number(tHeight);

    tArea = 0.5 * tBase * tHeight;

    document.getElementById("cLabel_tArea").innerHTML = "Area: " + tArea;
}

document.getElementById("clearButton_tArea").onclick =function(){
    
    document.getElementById("cLabel_tArea").innerHTML = "Area: ";
}




//rectangleArea

let rLenght = 0;
let rWidth = 0;
let rArea = 0;

document.getElementById("submitbutton_rArea").onclick = function(){

    rLenght = document.getElementById("aTextBox_rArea").value;
    rLenght = Number(rLenght);

    rWidth = document.getElementById("bTextBox_rArea").value;
    rWidth = Number(rWidth);

    rArea = rLenght * rWidth;

    document.getElementById("cLabel_rArea").innerHTML = "Area: " + rArea;
}

document.getElementById("clearButton_rArea").onclick =function(){
    
    document.getElementById("cLabel_rArea").innerHTML = "Area: ";
}




//circleArea

let cRadius = 0;
let cArea = 0;

document.getElementById("submitButton_cArea").onclick = function(){

    cRadius = document.getElementById("aTextBox_cArea").value;
    cRadius = Number(cRadius);

    cArea = Math.PI * cRadius**2;

    document.getElementById("cLabel_cArea").innerHTML = "Area: " + cArea;
}

document.getElementById("clearButton_cArea").onclick =function(){

    document.getElementById("cLabel_cArea").innerHTML = "Area: ";
}
