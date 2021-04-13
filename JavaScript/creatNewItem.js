function createNewItem(content) {
    let li = document.createElement('li');
    li.className = "todoItem";
    li.innerHTML = content;
    let ul = document.querySelector("#todoItems ul");
    let shadow = document.querySelector("#todoItems #shadow");
    ul.insertBefore(li, shadow.nextSibling);
}

function public() {
    let input = document.querySelector("#createTodo");
    let content = input.value;
    if (content) {
        createNewItem(content);
        input.value = "";
    }
    let mBmainInV = document.querySelector("#mB-mainInV");
    if (mBmainInV) {
        mBmainInV.id = "mB-mainV";
    }
    let numbers = document.querySelector("#numbers");
    let todoItem = document.querySelectorAll(".todoItem");
    if (todoItem.length == 1) {
        numbers.innerHTML = todoItem.length + " item left";
    } else {
        numbers.innerHTML = todoItem.length + " items left";
    }
}

window.addEventListener("click",
    function (event) {
        if (event.target.id == "createTodo") {
            event.preventDefault();
        } else {
            public();
        }
    }, false);

window.addEventListener("keyup", function (event) {
    if (event.code == "Enter") {
        public();
    }
});