function checkAll() {
  const mainBody = document.querySelector("#main-body");
  mainBody.addEventListener("click", function (event) {
    if (event.target.id == "check-all" || event.target.id == "uncheck-all") {
      const InputCh = document.querySelectorAll(".todoitem .input-ch");
      let flag = true;
      for (let i = 0; i < InputCh.length; i++) {
        if (!InputCh[i].checked) {
          flag = false;
          break;
        }
      }

      if (flag) {
        for (let i = 0; i < InputCh.length; i++) {
          InputCh[i].checked = false;
        }
        event.target.id = "check-all";
      } else if (!flag) {
        for (let i = 0; i < InputCh.length; i++) {
          InputCh[i].checked = true;
        }
        event.target.id = "uncheck-all";
      }
      clickChange();
    }
  }, false);
}

window.addEventListener("load", function (event) {
  checkAll(event);
}, false);