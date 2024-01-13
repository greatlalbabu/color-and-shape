
let colorDiv = document.getElementById("colorDiv");
let shapeDiv = document.getElementById("shapeDiv");

let colorBtn = document.getElementById("colorBtn");
let shapeBtn = document.getElementById("shapeBtn");
let bgBtn = document.getElementById("bgBtn");

let str= "0123456789abcdef";

colorBtn.addEventListener("click",changeDivColor);

function changeDivColor(){
    colorDiv.style.backgroundColor= changeColor();
}

function changeColor(){
    
    let hexCode= "#";
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*str.length);
        hexCode+= str[randomIndex];
    }
    return hexCode;
}


let shapeArr = ["circle","triangle","rhombus","hexagon","pentagon","parallelogram"];

let j=0;
shapeBtn.addEventListener("click",function(){
    shapeDiv.id = shapeArr[j];
    shapeDiv.style.backgroundColor = changeColor();
    j++;
    if(j>=shapeArr.length-1){
        j=0;
    }
});