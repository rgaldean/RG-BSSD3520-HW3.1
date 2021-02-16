'use strict';

let CHOICE_CLASS = "choicebutton";

document.addEventListener("DOMContentLoaded", () => {
    let nameButton = document.getElementById("name");
        surveyButton.addEventListener("click", () => {
            surveyButton.remove(); //delete the button
            createNames();
        });
});

//build survey buttons
function createNames() {
    let Names = ["Turtles", "Cat", "HedgeDog"];
    for(let i=0; i<Names.length; i++) {
        //create a button for each animal in the array 
        let btn = document.createElement('button');
            btn.innerHTML = Namess[i];
            btn.className = CHOICE_CLASS;
            btn.addEventListener('click', buttonClicked);
        document.getElementById('content').append(btn);
    }
} //end function buttonClicked() 

function buttonClicked(event) {
    clearChoices();
    displayChoice(event.target.innerHTML); 
}//end function displayChoice (choic


function clearChoices(){
    let buttons = document.getElementsByClassName("choiceButton");
    //console.log(buttons)
    while (buttons.length > 0) {
        buttons[0].remove();
    }
}//end function
 

function displayChoice(choice) {
    let div = document.getElementById('content');
        div.innerHTML = 'What a great choice <em>$ {choice}</em> is.';
}//end fucntion displayChoice(choice)