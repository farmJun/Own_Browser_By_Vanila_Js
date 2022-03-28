const toDoForm=document.getElementById("todo-form");
const toDOInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

let toDos=[]



function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter(toDO=>toDO.id!==parseInt(li.id));
    saveToDos();
}

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li= document.createElement("li");
    li.id=newTodo.id;
    const span= document.createElement("span");
    span.innerText=newTodo.text;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDOInput.value;
    toDOInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos=localStorage.getItem("todos");

if(savedToDos!==null){
    const parsedToDos= JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}


