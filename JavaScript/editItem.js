function editItem(target) {
  const inputCh = target.querySelector(".input-ch");
  const inputTe = document.createElement("input");
  const label = target.querySelector(".label-te");
  inputCh.style.display = "none";
  inputTe.type = "text";
  inputTe.id = "input-te";
  inputTe.value = label.innerHTML;
  label.innerHTML = "";
  target.insertBefore(inputTe, label);
  const deleteOut = target.querySelector(".delete");
  deleteOut.className = "delete-inv";
}

function cleanEdit() {
  const inputTe = document.querySelector("#input-te");
  if (inputTe) {
    {
      if (inputTe.value == "") {
        const li = inputTe.parentNode;
        li.parentNode.removeChild(li);
        clickChange();
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

window.addEventListener("click",
  function (event) {
    const inputTe = document.querySelector("#input-te");
    if (!inputTe) {
      return;
    } else if (event.target.id == "input-te") {
      window.event.preventDefault();
    } else {
      cleanEdit();
    }
  }, false);

window.addEventListener("keyup",
  function (event) {
    const inputTe = document.querySelector("#input-te");
    if (!inputTe) {
      return;
    } else if (event.code == "Enter") {
      cleanEdit();
    }
  }, false);