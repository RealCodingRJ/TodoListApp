function isEmpty(string) {
  const isEmptyString = string === "" ? "Empty" : string;
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

  if (isEmpty(value)) {
    const headingThree = document.createElement("h3");
    body.append(headingThree);
    headingThree.textContent = "Empty...".toUpperCase();
    body.style.backgroundColor = "red";
  } else {
    if (value == "RGB") {
      type.style.display = "none";
      input.style.display = "inline-block";
      type.value = "";
      input.value = "";

      const heading = document.createElement("h3");

      body.style.backgroundColor = "green";
      body.style.fontFamily = "sans-serif";

      document.body.appendChild(heading);
      heading.textContent = "You Have Successfully Entered the Realm";

      titleHeader.textContent = "Welcome to My Dumb IDEA...";
    }
  }
}

button.addEventListener("click", getApp);
