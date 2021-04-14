function createNewItem(content, newItemId) {
    let li = document.createElement('li');
    li.className = "todoItem";
    //li.innerHTML = "<div class='todoItemInput'>" + "<input type='checkbox' id='" + newItemId + "'>" + "</div>" + "<label for='" + newItemId + "'>" + content + "</label>" + "<div class='delet'><img src='img\\cross.svg'></div>";
    li.innerHTML = "<input type='checkbox' id='" + newItemId + "'>" + "<label for='" + newItemId + "'>" + content + "</label>" + "<div class='delet'><img src='img\\cross.svg'></div>";
    li.addEventListener("click", function (event) {
        if (event.target.type == "checkbox") {
            buttonChoicedNumberChange();
        }
    }, false);
    let ul = document.querySelector("ul");
    let shadow = document.querySelector("#shadow");
    ul.insertBefore(li, shadow.nextSibling);
}

function public() {
    let input = document.querySelector("#createTodo");
    let content = input.value;
    if (content) {
        let todoItem = document.querySelectorAll(".todoItem");
        let newItemId = todoItem.length;
        createNewItem(content, newItemId);
        input.value = "";
        let mBmainInV = document.querySelector("#mB-mainInV");
        if (mBmainInV) {
            mBmainInV.id = "mB-mainV";
        }
        buttonChoicedNumberChange();
    }
}

function buttonChoicedNumberChange() {
    let numbers = document.querySelector("#numbers");
    let todoItemInput = document.querySelectorAll(".todoItem Input");
    let todoItemCheckedLength = 0;
    for (let i = 0; i < todoItemInput.length; i++) {
        if (todoItemInput[i].checked) {
            todoItemCheckedLength++;
        }
    }
    let todoItemUnCheckedLength = todoItemInput.length - todoItemCheckedLength;

    let bChoiced = document.querySelector("#b-Choiced");
    if (bChoiced.innerHTML == "All" || bChoiced.innerHTML == "Active") {
        if (todoItemUnCheckedLength == 1) {
            numbers.innerHTML = todoItemUnCheckedLength + " item left";
        } else {
            numbers.innerHTML = todoItemUnCheckedLength + " items left";
        }
    } else if (bChoiced.innerHTML == "Completed") {
        if (todoItemCheckedLength == 1) {
            numbers.innerHTML = todoItemCheckedLength + " item left";
        } else {
            numbers.innerHTML = todoItemCheckedLength + " items left";
        }
    }
}

function getLength() {
    let todoItemInput = document.querySelectorAll(".todoItem Input");
    let todoItemCheckedLength = 0;
    for (let i = 0; i < todoItemInput.length; i++) {
        if (todoItemInput[i].checked) {
            todoItemCheckedLength++;
        }
    }
    let todoItemUnCheckedLength = todoItemInput.length - todoItemCheckedLength;
}

function buttonChoicedItemsChange(id) {
    let todoItemInput = document.querySelectorAll(".todoItem Input");
    for (let i = 0; i < todoItemInput.length; i++) {
        if ((!todoItemInput[i].checked) && id == "todoItemsCompleted") {
            todoItemInput[i].parentNode.style.display = "none";
        } else if (todoItemInput[i].checked && id == "todoItemsActived") {
            todoItemInput[i].parentNode.style.display = "none";
        } else {
            todoItemInput[i].parentNode.style.display = "flex";
        }
    }
}

function buttonChoiced(event) {
    let buttons = document.querySelector("#buttons");
    buttons.addEventListener("click", function (event) {
        if (event.target.parentNode == buttons) {
            let todoItems = document.querySelector("#todoItemsAll, #todoItemsActived, #todoItemsCompleted");
            if (event.target.innerHTML == "All") {
                todoItems.id = "todoItemsAll";
            } else if (event.target.innerHTML == "Active") {
                todoItems.id = "todoItemsActived";
            } else if (event.target.innerHTML == "Completed") {
                todoItems.id = "todoItemsCompleted";
            }
            for (let i = 0; i < buttons.childNodes.length; i++) {
                if (buttons.childNodes[i].nodeName == "DIV") {
                    buttons.childNodes[i].id = "";
                }
            }
            event.target.id = "b-Choiced";
            buttonChoicedNumberChange();
            buttonChoicedItemsChange(todoItems.id);
        }
    }, false)
}

window.onload = function (event) {
    buttonChoiced(event);
}
window.addEventListener("click",
    function (event) {
        if (event.target.id == "createTodo") {
            event.preventDefault();
        } else {
            public();
        }
    }, false);

window.addEventListener("keyup",
    function (event) {
        if (event.code == "Enter") {
            public();
        }
    }, false);