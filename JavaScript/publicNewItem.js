window.addEventListener("click",
  function (event) {
    if (event.target.id == "create-todo") {
      /* 单击正在编辑文本时阻止冒泡 */
      window.event.stopPropagation();
    } else {
      publicNewItem();
    }
  }, false);

window.addEventListener("keyup",
  function (event) {
    if (event.code == "Enter") {
      publicNewItem();
    }
  }, false);

function publicNewItem() {
  const input = document.querySelector("#create-todo");
  const content = input.value;
  if (content) {
    /* 如果content存在 */
    const todoitem = document.querySelectorAll(".todoitem");
    /* 将所有todoitems重新编号 */
    for (let i = 1; i <= todoitem.length; i++) {
      todoitem[i - 1].querySelector(".input-ch").id = i;
      todoitem[i - 1].querySelector(".label-ch").htmlFor = i;
    }

    createNewItem(content, "0", false);

    input.value = "";
    const mBmainInV = document.querySelector("#body-main-inv");
    if (mBmainInV) {
      mBmainInV.id = "body-main-v";
    }

    statusChange();
  }
}

function createNewItem(content, newItemId, status) {
  const li = document.createElement('li');
  li.className = "todoitem";
  li.innerHTML = "<input type='checkbox' class='input-ch' id='" + newItemId + "'>";
  li.innerHTML += "<label for='" + newItemId + "' class='label-ch'><img src='img\\tick.svg'></label>";
  li.innerHTML += "<label for='input-te' class='label-te'>" + content + "</label>";
  li.innerHTML += "<div class='delete'><img class='delete-icon' src='img\\cross.svg'></div>";
  li.querySelector(".input-ch").checked = status;

  const ul = document.querySelector("ul");
  const shadow = document.querySelector("#shadow");
  ul.insertBefore(li, shadow.nextSibling);
}