/**
 * ICS3U 4.5 - Events in HTML/JS
 * Mr. Brash 🐿️
 *
 * Make sure you read the lesson and watch the in-class demo.
 *
 * Author:
 */

'use strict';

// Event Listeners and Globals
document.getElementById("over").addEventListener("mouseover", over)
document.getElementById("enter").addEventListener("mouseenter", enter)
document.getElementById("move").addEventListener("mousemove", move)
document.getElementById("btn_show_hide").addEventListener("click", peakaboo)
document.getElementById("door").addEventListener("click", openClose)
// keypress
window.addEventListener("keydown", keydown)

let mouseover_count = 0;
let mouseenter_count = 0;
let mousemove_count = 0;
let doorOpen = false

function over() {
  document.getElementById("over_span").innerText = ++mouseover_count;
}

function enter() {
  document.getElementById("enter_span").innerText = ++mouseenter_count;
}

function move() {
  document.getElementById("move_span").innerText = ++mousemove_count;
}

function peakaboo() {
  document.getElementById("hidden_text").hidden = !document.getElementById("hidden_text").hidden
}

function openClose() {
  if (doorOpen) {
    document.getElementById("door").src = "images/door_closed.png"
  } else {
    document.getElementById("door").src = "images/door_open.png"
  }
  doorOpen = !doorOpen  
}

function keydown(event) {
  console.log(event.key)
  event.preventDefault()
}