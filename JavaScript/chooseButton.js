window.addEventListener("load", function (event) {
  const buttons = document.querySelector("#buttons");
  buttons.addEventListener("click", function (event) {
    if (event.target.parentNode == buttons) {
      chooseButton(event.target);
    }
  }, false);
}, false);

function chooseButton(target) {
  const todoitems = document.querySelector("#todoitems-all, #todoitems-active, #todoitems-completed");
  if (target.innerHTML == "All") {
    todoitems.id = "todoitems-all";
  } else if (target.innerHTML == "Active") {
    todoitems.id = "todoitems-active";
  } else if (target.innerHTML == "Completed") {
    todoitems.id = "todoitems-completed";
  }

  for (let i = 0; i < buttons.childNodes.length; i++) {
    if (buttons.childNodes[i].nodeName == "DIV") {
      buttons.childNodes[i].id = "";
    }
  }
  target.id = "b-choiced";

  statusChange();
}