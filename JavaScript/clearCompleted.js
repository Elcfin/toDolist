window.addEventListener("load", function () {
  const bottom = document.querySelector("#body-bottom");
  bottom.addEventListener("click", function (event) {
    if (event.target.id == "clear-completed") {
      clearCompletedClick()
    }
  }, false)
}, false);

function clearCompletedClick() {
  const todoitem = document.querySelectorAll(".todoitem");
  let flag = true;
  /*  flag - true 所有项目被清除 */

  for (let i = 0; i < todoitem.length; i++) {
    const todoitemInput = todoitem[i].querySelector(".input-ch");
    if (todoitemInput.checked) {
      deleteItem(todoitem[i]);
    } else {
      flag = false;
    }
  }

  if (flag) {
    const mBmainV = document.querySelector("#body-main-v");
    if (mBmainV) {
      mBmainV.id = "body-main-inv";
    }
  }

  const clearCompleted = document.querySelector("#clear-completed");
  clearCompleted.style.display = "none";
}