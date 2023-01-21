
origArray=[2, 3, 4];

document.addEventListener("DOMContentLoaded", function(event) {
    //write values of origArray into the 3 textboxes
    for (let i = 0; i < origArray.length; i++) {
        document.getElementById("textbox"+String(i+1)).value=origArray[i];
    }

    //write values of cubed values into textboxes - anonymous function
    document.getElementById("button2").addEventListener("click", function (){
        let cubedArray=origArray.map(cubedArray => Math.pow(cubedArray, 3));
        for (let i = 0; i < cubedArray.length; i++) {
            document.getElementById("textbox"+String(i+1)).value=cubedArray[i];
        }
    });

    //write values of quartic values into textbox, reads function button3()
    document.getElementById("button3").addEventListener("click", button3);
})

//read from html for button1 to square values in textbox
function squarebutton(){
    let squaredArray=origArray.map(squaredArray => Math.pow(squaredArray,2));
    for (let i = 0; i < squaredArray.length; i++) {
        document.getElementById("textbox"+String(i+1)).value=squaredArray[i];
    }
}

//calculates quartic values
function button3(){
    let quarticArray=origArray.map(quarticArray => Math.pow(quarticArray,4));
    for (let i = 0; i < quarticArray.length; i++) {
        document.getElementById("textbox"+String(i+1)).value=quarticArray[i];
    }
}