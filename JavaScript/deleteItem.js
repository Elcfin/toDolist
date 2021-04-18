function deleteItem(todoItem) {
  todoItem.parentNode.removeChild(todoItem);
}

function clearCompleted() {
  const clearCompleted = document.querySelector("#clear-completed");
  clearCompleted.addEventListener("click", function () {
    const todoItem = document.querySelectorAll(".todoitem");
    let flag = true;
    for (let i = 0; i < todoItem.length; i++) {
      let todoItemInput = todoItem[i].querySelector(".input-ch");
      if (todoItemInput.checked) {
        deleteItem(todoItem[i]);
      } else {
        flag = false;
      }
    }

    if (flag) {
      let mBmainV = document.querySelector("#body-main-v");
      if (mBmainV) {
        mBmainV.id = "body-main-inv";
      }
    }

    clearCompleted.style.display = "none";
  }, false);
}

window.addEventListener("load", function () {
  clearCompleted();
}, false);