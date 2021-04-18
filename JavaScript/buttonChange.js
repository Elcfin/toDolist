function checkChangeBottom() {
  const numbers = document.querySelector("#numbers");
  const InputCh = document.querySelectorAll(".todoitem .input-ch");

  let CheckedLength = 0;
  let UnCheckedLength = 0;
  for (let i = 0; i < InputCh.length; i++) {
    if (InputCh[i].checked) {
      CheckedLength++;
    }
  }
  UnCheckedLength = InputCh.length - CheckedLength;

  const checkAll = document.querySelector("#check-all, #uncheck-all");
  const clearCompleted = document.querySelector("#clear-completed");
  if (CheckedLength) {
    clearCompleted.style.display = "block";
    if (!UnCheckedLength && checkAll.id == "check-all") {
      checkAll.id = "uncheck-all";
    } else if (UnCheckedLength && checkAll.id == "uncheck-all") {
      checkAll.id = "check-all";
    }
  } else {
    clearCompleted.style.display = "none";
    if (checkAll.id == "uncheck-all") {
      checkAll.id = "check-all";
    }
  }

  if (!InputCh.length) {
    let mBmainV = document.querySelector("#body-main-v");
    if (mBmainV) {
      mBmainV.id = "body-main-inv";
    }
  }

  let bChoiced = document.querySelector("#b-choiced");
  if (bChoiced.innerHTML == "All" || bChoiced.innerHTML == "Active") {
    if (UnCheckedLength == 1) {
      numbers.innerHTML = UnCheckedLength + " item left";
    } else {
      numbers.innerHTML = UnCheckedLength + " items left";
    }
  } else if (bChoiced.innerHTML == "Completed") {
    if (CheckedLength == 1) {
      numbers.innerHTML = CheckedLength + " item left";
    } else {
      numbers.innerHTML = CheckedLength + " items left";
    }
  }
}

function buttonChangeItems() {
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

function buttonChoiced() {
  const buttons = document.querySelector("#buttons");
  buttons.addEventListener("click", function (event) {
    if (event.target.parentNode == buttons) {
      const todoItems = document.querySelector("#todoitems-all, #todoitems-active, #todoitems-completed");
      if (event.target.innerHTML == "All") {
        todoItems.id = "todoitems-all";
      } else if (event.target.innerHTML == "Active") {
        todoItems.id = "todoitems-active";
      } else if (event.target.innerHTML == "Completed") {
        todoItems.id = "todoitems-completed";
      }

      for (let i = 0; i < buttons.childNodes.length; i++) {
        if (buttons.childNodes[i].nodeName == "DIV") {
          buttons.childNodes[i].id = "";
        }
      }
      event.target.id = "b-choiced";
      clickChange();
    }
  }, false);
}

window.addEventListener("load", function (event) {
  buttonChoiced(event);
}, false);