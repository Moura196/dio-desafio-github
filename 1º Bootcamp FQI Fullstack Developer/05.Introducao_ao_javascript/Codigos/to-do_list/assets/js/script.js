// var toDoList = ;

var toDo = [document.getElementsByClassName('toDo')];

document.getElementsByClassName('add_task').addEventListener('click', adicionar);

function adicionar() {
    // o que for escrito dentro do <input id=toggle type=text> quero que seja adicionado no <input class=to-do type=checkbox> = toDoList
    toDo = toDo + '';


    document.getElementsByClassName('add_task').innerHTML = toDo;
}