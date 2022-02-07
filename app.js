var a = document.getElementById("parent");
var TEXT = document.getElementById("TEXT");
function createElem() {
var Alpha = document.createElement("P");
Alpha.setAttribute("class", "IN-WORD");
var text = TEXT.value;
var finalText = document.createTextNode(text);
Alpha.appendChild(finalText);

var editBtn = document.createElement("BUTTON");
editBtn.setAttribute("class", "BTN-2");
editBtn.setAttribute("onclick", "editTodo(this)");
var editText = 'EDIT';
editBtn.innerHTML = editText;

var deleteBtn = document.createElement("BUTTON");
deleteBtn.setAttribute("class", "BTN-2");
deleteBtn.setAttribute("onclick", "removeTodo(this)");
var deleteText = 'DELETE';
deleteBtn.innerHTML = deleteText;

var btnParent = document.createElement("DIV");
btnParent.appendChild(deleteBtn);
btnParent.appendChild(editBtn);
Alpha.appendChild(btnParent);

a.appendChild(Alpha);
console.log(Alpha);
TEXT.value = "";
}


function removeTodo(e) {
  console.log(e.parentNode.parentNode);
  e.parentNode.parentNode.remove();
}


function editTodo(e) {
var todoLi = e.parentNode.parentNode;
var newText = prompt("Enter New Text", todoLi.firstChild.nodeValue);
todoLi.firstChild.nodeValue = newText;
console.log(todoLi.firstChild);
}
