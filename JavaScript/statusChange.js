window.addEventListener("load", function () {
  const ul = document.querySelector("ul");
  ul.addEventListener("click", function (event) {
    if (event.target.type == "checkbox") {
      /* 单击checkbox实现状态切换 */
      statusChange();
    }
  }, false);
}, false);

function statusChange() {
  /* 
   * 状态切换时
   * 实现bottom状态改变
   * 实现item状态改变
   */
  bottomStatusChange();
  itemStatusChange();
}

function bottomStatusChange() {
  const inputCh = document.querySelectorAll(".todoitem .input-ch");
  let checkedLength = 0;
  for (let i = 0; i < inputCh.length; i++) {
    if (inputCh[i].checked) {
      checkedLength++;
    }
  }
  let unCheckedLength = inputCh.length - checkedLength;

  const selectAll = document.querySelector("#check-all, #uncheck-all");
  const clearCompleted = document.querySelector("#clear-completed");
  if (checkedLength) {
    clearCompleted.style.display = "block";
    if (!unCheckedLength && selectAll.id == "uncheck-all") {
      /* 如果被全选 */
      selectAll.id = "check-all";
    } else if (unCheckedLength && selectAll.id == "check-all") {
      selectAll.id = "uncheck-all";
    }
  } else {
    clearCompleted.style.display = "none";
    if (selectAll.id == "check-all") {
      selectAll.id = "uncheck-all";
    }
  }

  if (!inputCh.length) {
    let mBmainV = document.querySelector("#body-main-v");
    if (mBmainV) {
      mBmainV.id = "body-main-inv";
    }
  }

  const numbers = document.querySelector("#numbers");
  const btnChoiced = document.querySelector("#b-choiced");
  if (btnChoiced.innerHTML == "All" || btnChoiced.innerHTML == "Active") {
    if (unCheckedLength == 1) {
      numbers.innerHTML = unCheckedLength + " item left";
    } else {
      numbers.innerHTML = unCheckedLength + " items left";
    }
  } else if (btnChoiced.innerHTML == "Completed") {
    if (checkedLength == 1) {
      numbers.innerHTML = checkedLength + " item left";
    } else {
      numbers.innerHTML = checkedLength + " items left";
    }
  }
}

function itemStatusChange() {
  const todoitems = document.querySelector("#todoitems-all, #todoitems-active, #todoitems-completed");
  const todoitemInputCh = document.querySelectorAll(".todoitem .input-ch");
  for (let i = 0; i < todoitemInputCh.length; i++) {
    if ((!todoitemInputCh[i].checked) && todoitems.id == "todoitems-completed") {
      todoitemInputCh[i].parentNode.style.display = "none";
    } else if (todoitemInputCh[i].checked && todoitems.id == "todoitems-active") {
      todoitemInputCh[i].parentNode.style.display = "none";
    } else {
      todoitemInputCh[i].parentNode.style.display = "flex";
    }
  }
}