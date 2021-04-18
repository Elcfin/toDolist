function liClick() {
  const ul = document.querySelector("ul");
  ul.addEventListener("click", function (event) {
    if (event.target.type == "checkbox") {
      clickChange();
    } else if (event.target.className == "delete-icon") {
      deleteItem(event.target.parentNode.parentNode);
      clickChange();
    }
  }, false);

  ul.addEventListener("dblclick", function (event) {
    const inputTe = document.querySelector("#input-te");
    if (event.target.className == "label-ch" || event.target.nodeName == "IMG") {
      window.event.preventDefault();
    } else if (inputTe) {
      return;
    } else if (event.target.className == "todoitem") {
      editItem(event.target);
    }
  }, false);
}

window.addEventListener("load", function () {
  liClick();
}, false);

function clickChange() {
  checkChangeBottom();
  buttonChangeItems();
}