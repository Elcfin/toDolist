window.addEventListener("load", function () {
  const ul = document.querySelector("ul");

  ul.addEventListener("dblclick", function (event) {
    const inputTe = document.querySelector("#input-te");
    /* 双击实现内容编辑 */
    if (event.target.className == "label-ch" || event.target.nodeName == "IMG") {
      /* 若选中checkbox则取消冒泡 */
      window.event.stopPropagation();
    } else if (inputTe) {
      /* 如果已经处于编辑状态 */
      return;
    } else if (event.target.className == "todoitem") {
      /* 若选中todoitem且非checkbox则编辑内容 */
      editItem(event.target);
    } else if (event.target.className == "label-te") {
      editItem(event.target.parentNode);
    }

  }, false);
}, false);

window.addEventListener("click",
  function (event) {
    const inputTe = document.querySelector("#input-te");
    if (!inputTe) {
      return;
    } else if (event.target.id == "input-te") {
      window.event.stopPropagation();
    } else {
      stopEdit();
    }
  }, false);

window.addEventListener("keyup",
  function (event) {
    const inputTe = document.querySelector("#input-te");
    if (!inputTe) {
      return;
    } else if (event.code == "Enter") {
      stopEdit();
    }
  }, false);

function editItem(target) {
  const inputCh = target.querySelector(".input-ch");
  const label = target.querySelector(".label-te");
  const inputTe = document.createElement("input");

  inputCh.style.display = "none";
  inputTe.type = "text";
  inputTe.id = "input-te";
  inputTe.value = label.innerHTML;
  label.innerHTML = "";
  target.insertBefore(inputTe, label);

  const deleteOut = target.querySelector(".delete");
  deleteOut.className = "delete-inv";
}

function stopEdit() {
  const inputTe = document.querySelector("#input-te");
  if (inputTe) {
    {
      if (inputTe.value == "") {
        /* 如果编辑后内容为空 */
        const li = inputTe.parentNode;
        li.parentNode.removeChild(li);
        statusChange;
        return;
      }

      const labelTe = inputTe.parentNode.querySelector(".label-te");
      const inputCh = inputTe.parentNode.querySelector(".input-ch");
      const deleteInV = inputTe.parentNode.querySelector(".delete-inv");
      labelTe.innerHTML = inputTe.value;
      inputCh.style.display = "block";
      deleteInV.className = "delete";
      inputTe.parentNode.removeChild(inputTe);
    }
  }
}