const input = document.getElementById("inputBox");
const list_container = document.getElementById("listContainer");

function addTask(){
    if(input.value === ""){
        alert("Debes escribir algo");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
    }
    input.value = "";
}