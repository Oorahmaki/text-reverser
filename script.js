const inputText = document.getElementById("inputText");
const button = document.getElementById("button");
const output = document.getElementById("output");

function textToArray() {
  const textOrigin = inputText.value;
  return textOrigin.split("");
}

button.addEventListener("click", function() {
  output.innerHTML = reverseArray();
});

function reverseArray() {
  const myArray = textToArray();
  let newArray = [];
  for (let i = myArray.length - 1; i > -1; i--) {
    const revArray = myArray[i];
    newArray.push(revArray);
  }
  return newArray.join("");
}
