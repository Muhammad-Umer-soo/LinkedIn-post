const inputValue = document.getElementById("display");
const displayValue = (num) => {
  inputValue.value += num;
  console.log(num);
};

const calculator = () => {
  inputValue.value = eval(inputValue.value);
};

function clearAll() {
  inputValue.value = "";
}

const del = () => {
  inputValue.value = inputValue.value.slice(0, -1); // include all slice and delete last value(-1)
};
