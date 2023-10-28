let result = "0";

function updateResult() {
  document.getElementById("result").value = result;
}

function appendToResult(char) {
  if (result === "0" && char !== "+" && char !== "-" && char !== "*" && char !== "/") {
    result = char;
  } else {
    result += char;
  }
  updateResult();
}

function calculateResult() {
  try {
    result = eval(result).toString();
  } catch (error) {
    result = "Error";
  }
  updateResult();
}

function clearResult() {
  result = "0";
  updateResult();
}
