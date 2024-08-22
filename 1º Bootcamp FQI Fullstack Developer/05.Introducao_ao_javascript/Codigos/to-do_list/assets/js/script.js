// FIRST ATTEMPT
// var toDoList = ;

// var toDoWrapper = document.getElementsByClassName('toDo');

// var toDo = '';

// // document.getElementsByClassName('add_task').addEventListener('click', adicionar);

// function adicionar() {
//     // o que for escrito dentro do <input id=toggle type=text> quero que seja adicionado no <input class=to-do type=checkbox> = toDoList
//     toDo = toDo + document.getElementsByClassName('toDo');

//     toDoWrapper.innerHTML = toDo;

//     // document.getElementsByClassName('toDos').innerHTML = toDo;
// }

// SECOND ATTEMPT
// var textWrote = document.getElementById('toggle');

// var textToShow = document.getElementById('toDo');

// function adicionar() {
//     document.getElementById('try').innerHTML = textWrote;
// }

// THIRD ATTEMPT
function addTask() {
    var x = document.getElementById('task').value;

    console.log(x);

    document.getElementById('toDo').innerHTML =  x;

    console.log(document.getElementById('toDo'));
}