let count = 0

function setCount() {
  document.getElementById('num').innerText = count;
}
function inc() {
  count ++;
  setCount()
}
function dec() {
  count --;
  setCount();
}