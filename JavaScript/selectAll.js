window.addEventListener("load", function () {
  const mainBody = document.querySelector("#main-body");
  mainBody.addEventListener("click", function (event) {
    if (event.target.id == "check-all" || event.target.id == "uncheck-all") {
      selectAllClick(event.target);
    }
  }, false);
}, false);

function selectAllClick(target) {
  const inputCh = document.querySelectorAll(".todoitem .input-ch");
  let flag = true;
  /* 判断是否处在全选状态 flag - true 全选状态 */
  for (let i = 0; i < inputCh.length; i++) {
    if (!inputCh[i].checked) {
      flag = false;
      break;
    }
  }

  if (flag) {
    /* 如果全选，则全不选 */
    for (let i = 0; i < inputCh.length; i++) {
      inputCh[i].checked = false;
    }
    target.id = "uncheck-all";
  } else {
    /* 否则全选 */
    for (let i = 0; i < inputCh.length; i++) {
      inputCh[i].checked = true;
    }
    target.id = "check-all";
  }

  statusChange();
}