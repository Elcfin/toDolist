window.addEventListener("beforeunload", function () {
  /* 页面关闭前刷新localStorage中数据 */
  storageIn();
}, false);

window.addEventListener("load", function () {
  /* 页面加载时从localStorage中读取数据 */
  storageOut();
}, false);

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
    /* 将对象转换成字符串存储 */
    storage.setItem(i, JSON.stringify(item));
  }
  storage.setItem("length", i);
}

function storageOut() {
  const storage = window.localStorage;

  for (let i = storage.getItem("length") - 1; i >= 0; i--) {
    const info = JSON.parse(storage.getItem(i));
    createNewItem(info.content, info.id, info.status);
  }

  const mBmainInV = document.querySelector("#body-main-inv");
  if (mBmainInV) {
    mBmainInV.id = "body-main-v";
  }

  statusChange();
}