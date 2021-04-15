function createNewItem(content, newItemId) {
    let li = document.createElement('li');
    li.className = "todoItem";
    //li.innerHTML = "<div class='todoItemInput'>" + "<input type='checkbox' id='" + newItemId + "'>" + "</div>" + "<label for='" + newItemId + "'>" + content + "</label>" + "<div class='delet'><img src='img\\cross.svg'></div>";
    li.innerHTML = "<input type='checkbox' class='inputCh' id='" + newItemId + "'>" + "<label for='" + newItemId + "' class='labelCh'><img src='img\\tick.svg'></label>" + "<label for='inputTe' class='labelTe'>" + content + "</label>" + "<div class='delete'><img class='deleteIcon' src='img\\cross.svg'></div>";
    li.addEventListener("click", function (event) {
        if (event.target.type == "checkbox") {
            buttonChoicedNumberChange();
            buttonChoicedItemsChange();
        } else if (event.target.className == "deleteIcon") {
            deleteItem(this);
            buttonChoicedNumberChange();
            buttonChoicedItemsChange();
        }
    }, false);
    li.addEventListener("dblclick", function (event) {
        if (event.target.className == "inputCh") {
            event.preventDefault();
        } else {
            let inputCh = this.querySelector("input[type=checkbox]");
            let inputTe = document.createElement("input");
            let label = this.querySelector(".labelTe");
            inputCh.style.display = "none";
            inputTe.type = "text";
            inputTe.id = "inputTe";
            inputTe.value = label.innerHTML;
            label.innerHTML = "";
            this.insertBefore(inputTe, label);
            let deleteOut = this.querySelector(".delete");
            deleteOut.className = "deleteInV";
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

    let checkAll = document.querySelector("#checkAll,#uncheckAll");
    let clearCompleted = document.querySelector("#clearCompleted");
    if (todoItemCheckedLength) {
        clearCompleted.style.display = "block";
        if (!todoItemUnCheckedLength && checkAll.id == "checkAll") {
            checkAll.id = "uncheckAll";
        } else if (todoItemUnCheckedLength && checkAll.id == "uncheckAll") {
            checkAll.id = "checkAll";
        }
    } else {
        clearCompleted.style.display = "none";
        if (checkAll.id == "uncheckAll") {
            checkAll.id = "checkAll";
        }
    }

    if (!todoItemInput.length) {
        let mBmainV = document.querySelector("#mB-mainV");
        if (mBmainV) {
            mBmainV.id = "mB-mainInV";
        }
    }

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

function buttonChoicedItemsChange() {
    let todoItems = document.querySelector("#todoItemsAll, #todoItemsActived, #todoItemsCompleted");
    let todoItemInput = document.querySelectorAll(".todoItem Input");
    for (let i = 0; i < todoItemInput.length; i++) {
        if ((!todoItemInput[i].checked) && todoItems.id == "todoItemsCompleted") {
            todoItemInput[i].parentNode.style.display = "none";
        } else if (todoItemInput[i].checked && todoItems.id == "todoItemsActived") {
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
            buttonChoicedItemsChange();
        }
    }, false)
}

function checkAll() {
    let mainBody = document.querySelector("#mainBody");
    mainBody.addEventListener("click", function (event) {
        if (event.target.id == "checkAll" || event.target.id == "uncheckAll") {
            let todoItemInput = document.querySelectorAll(".todoItem Input");
            let flag = true;
            for (let i = 0; i < todoItemInput.length; i++) {
                if (!todoItemInput[i].checked) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                for (let i = 0; i < todoItemInput.length; i++) {
                    todoItemInput[i].checked = false;
                }
                event.target.id = "checkAll";
                buttonChoicedNumberChange();
                buttonChoicedItemsChange();
            } else if (!flag) {
                for (let i = 0; i < todoItemInput.length; i++) {
                    todoItemInput[i].checked = true;
                }
                event.target.id = "uncheckAll";
                buttonChoicedNumberChange();
                buttonChoicedItemsChange();
            }
        }

    }, false);
}

function deleteItem(todoItem) {
    todoItem.parentNode.removeChild(todoItem);
}

function clearCompleted() {
    let clearCompleted = document.querySelector("#clearCompleted");
    clearCompleted.addEventListener("click", function () {
        let todoItem = document.querySelectorAll(".todoItem");
        let flag = true;
        for (let i = 0; i < todoItem.length; i++) {
            let todoItemInput = todoItem[i].querySelector("input");
            if (todoItemInput.checked) {
                todoItem[i].parentNode.removeChild(todoItem[i]);
            } else {
                flag = false;
            }
        }
        if (flag) {
            let mBmainV = document.querySelector("#mB-mainV");
            if (mBmainV) {
                mBmainV.id = "mB-mainInV";
            }
        }
        clearCompleted.style.display = "none";
    }, false);
}

window.addEventListener("load", function (event) {
    clearCompleted();
}, false);

window.addEventListener("load", function (event) {
    buttonChoiced(event);
}, false);

window.addEventListener("load", function (event) {
    checkAll(event);
}, false);

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

window.addEventListener("click",
    function (event) {
        if (event.target.id == "inputTe") {
            event.preventDefault();
        } else {
            let inputTe = document.querySelector("#inputTe");
            if (inputTe) {
                {
                    let label = inputTe.parentNode.querySelector(".labelTe");
                    let inputCh = inputTe.parentNode.querySelector(".inputCh");
                    let deleteInV = inputTe.parentNode.querySelector(".deleteInV");
                    deleteInV.className = "delete";
                    label.innerHTML = inputTe.value;
                    inputCh.style.display = "block";
                    inputTe.parentNode.removeChild(inputTe);
                }
            }
        }
    }, false);

window.addEventListener("keyup",
    function (event) {
        if (event.code == "Enter") {
            let inputTe = document.querySelector("#inputTe");
            if (inputTe) {
                {
                    let label = inputTe.parentNode.querySelector(".labelTe");
                    let inputCh = inputTe.parentNode.querySelector(".inputCh");
                    let deleteInV = inputTe.parentNode.querySelector(".deleteInV");
                    deleteInV.className = "delete";
                    label.innerHTML = inputTe.value;
                    inputCh.style.display = "block";
                    inputTe.parentNode.removeChild(inputTe);
                }
            }
        }
    }, false);