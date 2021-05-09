window.addEventListener("load", function () {
  const ul = document.querySelector("ul");
  ul.addEventListener("click", function (event) {
    if (event.target.className == "delete-icon") {
      /* 单击delete-icon实现项目删除 */
      deleteItem(event.target.parentNode.parentNode);
      /* 删除时切换状态 */
      statusChange();
    }
  }, false);
}, false);

function deleteItem(todoitem) {
  todoitem.parentNode.removeChild(todoitem);
}