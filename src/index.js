function isEmpty(string) {
  const isEmptyString = string == "" ? "Empty" : string;
  return isEmptyString;
}

function getApp() {
  const color = null;
  const type = document.getElementById("type");
  const value = type.value;
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const titleHeader = document.getElementById("titleHeader");

  const body = document.body;
  const headingThree = document.getElementById("emptyMessage");

  if (isEmpty(value)) {
    headingThree.textContent = "Empty...".toUpperCase();
    body.style.backgroundColor = "red";
  }

  if (value === "RGB") {
    type.style.display = "none";
    input.style.display = "inline-block";

    headingThree.style.display = "none";
    const heading = document.createElement("h3");

    body.style.backgroundColor = "green";
    body.style.fontFamily = "sans-serif";

    document.body.appendChild(heading);
    heading.textContent = "You Have Successfully Entered the Realm";

    titleHeader.textContent = "Welcome to My Dumb IDEA...";
    type.value = "";
    input.value = "";
  }

  if (value == "Random") {
    const r = Math.floor(Math.random() * 255).toString(16);
    const g = Math.floor(Math.random() * 255).toString(16);
    const b = Math.floor(Math.random() * 255).toString(16);

    document.body.style.backgroundColor = "#" + r + g + b;
    type.value = "";
    // input.value = "";
  }
}

button.addEventListener("click", getApp);
