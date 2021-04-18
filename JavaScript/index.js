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

function storageIn() {
  const storage = window.localStorage;
  const todoitem = document.querySelectorAll(".todoitem");
  storage.clear();
  let i;
  for (i = 0; i < todoitem.length; i++) {
    const item = {
      id: todoitem[i].querySelector(".input-ch").id,
      content: todoitem[i].querySelector(".label-te").innerHTML,
      status: todoitem[i].querySelector(".input-ch").checked
    };
    storage.setItem(i, JSON.stringify(item));
  }
  storage.setItem("length", i);
  alert(storage.getItem("length"));
}

function storageOut() {
  const storage = window.localStorage;
  for (let i = storage.getItem("length") - 1; i >= 0; i--) {
    const id = JSON.parse(storage.getItem(i)).id;
    const content = JSON.parse(storage.getItem(i)).content;
    const status = JSON.parse(storage.getItem(i)).status;
    createNewItem(content, id, status);
  }
  const mBmainInV = document.querySelector("#body-main-inv");
  if (mBmainInV) {
    mBmainInV.id = "body-main-v";
  }
  clickChange();
}

window.addEventListener("beforeunload", function () {
  storageIn();
}, false);

window.addEventListener("load", function () {
  storageOut();
}, false);