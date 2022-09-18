let joxx = ["What did the snail who was riding on the turtle's back say? Wheeeee!",
"I was going to tell a time traveling joke, but you guys didn't like it.",
"What do you call a lazy kangaroo? A pouch potato.",
"I used to run a dating service for chickens, but I was struggling to make hens meet.",
"Why was the coach yelling at the vending machine? He wanted his quarter back."]


document.getElementsByClassName("joke").innerHTML = joxx[Math.floor(Math.random() * joxx.length)]

let btn = document.getElementById("btn");


function jokk() {
  let index = Math.floor(Math.random() * joxx.length)
  document.getElementsByClassName("joke")[0].innerHTML = joxx[index]
}
btn.addEventListener("click", jokk)
