function createNewItem(content, newItemId) {
  const li = document.createElement('li');
  li.className = "todoitem";
  li.innerHTML = "<input type='checkbox' class='input-ch' id='" + newItemId + "'>" + "<label for='" + newItemId + "' class='label-ch'><img src='img\\tick.svg'></label>";
  li.innerHTML += "<label for='input-te' class='label-te'>" + content + "</label>";
  li.innerHTML += "<div class='delete'><img class='delete-icon' src='img\\cross.svg'></div>";
  const ul = document.querySelector("ul");
  const shadow = document.querySelector("#shadow");
  ul.insertBefore(li, shadow.nextSibling);
}

function public() {
  const input = document.querySelector("#create-todo");
  const content = input.value;
  if (content) {
    const todoItem = document.querySelectorAll(".todoitem");
    const newItemId = todoItem.length;
    createNewItem(content, newItemId);
    input.value = "";
    const mBmainInV = document.querySelector("#body-main-inv");
    if (mBmainInV) {
      mBmainInV.id = "body-main-v";
    }
    clickChange();
  }
}

window.addEventListener("click",
  function (event) {
    if (event.target.id == "create-todo") {
      window.event.preventDefault();
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