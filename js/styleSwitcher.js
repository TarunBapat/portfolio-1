const lists = document.querySelectorAll(".alternate-style");
const totalLinks = lists.length;

function setActiveStyle(color) {
  console.log(color);
  for (let i = 0; i < totalLinks; i++) {
    console.log(lists[i]);
    if (color === lists[i].getAttribute("title")) {
      lists[i].removeAttribute("disabled");
    } else {
      lists[i].setAttribute("disabled", "true");
    }
  }
}

/* Body Skin*/

const bodySkin = document.querySelectorAll(".body-skin");
console.log("bodySkin", bodySkin);
const totalBodySkins = bodySkin.length;
for (i = 0; i < totalBodySkins; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  });
}

document
  .querySelector(".toggle-style-switcher")
  .addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
  });
