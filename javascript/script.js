const inputFields = ["email"];

function validInputs(inputsArray = inputFields) {
  inputsArray.map((item) => {
    let elem = document.getElementById(item);
    if (!elem.checkValidity()) {
      document.getElementById(item + "Error").style.display = "inline-block";
      document.getElementById(item + "ErrorIcon").style.display =
        "inline-block";
      document.getElementById(item).style.border = "1px solid red";
    } else {
      document.getElementById(item + "Error").style.display = "none";
      document.getElementById(item + "ErrorIcon").style.display = "none";
      document.getElementById(item).style.border =
        "1px solid var(--ColorDesaturatedRed)";
    }
  });
}
