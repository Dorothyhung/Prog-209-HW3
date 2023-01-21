
origArray=[2, 3, 4];



(function (){
    //anonymous function
}());

document.addEventListener("DOMContentLoaded", function(event) {
    //write values of origArray into the 3 textboxes
    for(let i = 0; i < origArray.length-1; i++) {
        document.getElementByID("textbox1").value = origArray[i];
    }

    document.addEventListener(function (){
        //anonymous function
    }());
})

function button1(){
    squaredArray=origArray.map(square)
    for(let i = 0; i < squaredArray.length-1; i++) {
        document.getElementyByID("textbox1").value = squaredArray[i];
    }
}

function square(oneItem) {
    Math.pow(oneItem, 2);
}

function button2() {

}