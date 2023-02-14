function show(element){
    element.style.display = '';
}

function hide(element){
    element.style.display = 'none';
}

function new_game(){
    show(game_selection);
    hide(game1);
    hide(game2);
    message1.innerText = "";
}

let computer_number;
function start_player_guess_game(){
    computer_number = Math.floor(Math.random() * 100)+1;
    hide(game_selection);
    show(game1);
    hide(restart_button1);
    hide(game2);
}

function tryNumber(){
    let numberTried = document.getElementById("player_input").value;
    if(numberTried < computer_number){
        message1.innerText = "Non, c'est plus grand!";
    } else if(numberTried > computer_number){
        message1.innerText = "Non, c'est plus petit!";
    } else{
        message1.innerText = "Bravo!, vous avez trouvé le bon nombre!";
        show(restart_button1);
    }

    document.getElementById("player_input").value = "";
}

let min;
let max;
let middle;
function start_computer_guess_game(){
    min = 0;
    max = 101;
    middle = Math.floor((min + max) / 2);
    hide(game_selection);
    show(game2);
    hide(restart_button2);
    hide(game1);
    show(smaller_button);
    show(bigger_button);
    show(found_button);
    message2.innerText = "Pensez à un nombre entre 1 et 100 inclus. \nEst-ce que c'est bien : " + middle +"?";
}

let click = 0;

function click_smaller(){
    click = 1;
    lookForNumber();
}

function click_bigger(){
    click = 2;
    lookForNumber();
}

function click_found(){
    click = 3;
    lookForNumber();
}    

function lookForNumber(){
    if(click == 1){
        max = middle;
        middle = Math.floor((min + max) / 2);
        message2.innerText = "Est ce que c'est bien : " + middle + "?";
    } else if(click == 2){
        min = middle;
        middle = Math.floor((min + max) / 2);
        message2.innerText = "Est ce que c'est bien : " + middle + "?";
    } else {
        show(restart_button2);
        message2.innerText = "";
        hide(smaller_button);
        hide(bigger_button);
        hide(found_button)
    }
}