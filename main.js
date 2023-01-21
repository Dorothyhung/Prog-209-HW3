
origArray=[2, 3, 4];



(function (){
    //anonymous function
}());

document.addEventListener("DOMContentLoaded", function(event) {
    //write values of origArray into the 3 textboxes
    document.getElementById("textbox1").value=origArray[0];
    document.getElementById("textbox2").value=origArray[1];
    document.getElementById("textbox3").value=origArray[2];

    document.addEventListener("click", function (){
        //anonymous function
    }());

    document.addEventListener("click", button3);
})

function button1(){
    squaredArray=origArray.map(square)
    for(let i = 0; i < squaredArray.length; i++) {
        document.getElementById("textbox"+(i).toString).value = squaredArray[i];
    }
}

function square(oneItem) {
    Math.pow(oneItem, 2);
}

function button3() {

}