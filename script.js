let digit = ["1",
"2",
"3",
"4",
"5",
"6"]


// document.getElementsByClassName("dice").innerHTML = digit[Math.floor(Math.random() * digit.length)]

let btn = document.getElementById("btn");

function xyz() {
  let index = Math.floor(Math.random() * digit.length)
  document.getElementsByClassName("dice")[0].innerHTML = digit[index]
}
btn.addEventListener("click", xyz)
