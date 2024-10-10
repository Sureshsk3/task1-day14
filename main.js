// -------------------   Creat Calculator Usin DOM --------------------------------//

let element = document.createElement("div");
element.setAttribute("class", "mainDiv");

let firstDiv = document.createElement("div");
firstDiv.setAttribute("class", "firstDiv");

let inpDis = document.createElement("input");
inpDis.setAttribute("class", "display");

element.append(inpDis, firstDiv);
document.body.append(element);

let btn1 = document.createElement("button");
btn1.setAttribute("onclick", "clearAllFn('AC')");
btn1.setAttribute("class", "editBtn");
btn1.innerText = "C";
let btn2 = document.createElement("button");
btn2.setAttribute("onclick", "appendbtnFn('**')");
btn2.setAttribute("class", "editBtn");
btn2.innerText = "Sq";
let btn3 = document.createElement("button");
btn3.setAttribute("onclick", "appendbtnFn('%')");
btn3.setAttribute("class", "editBtn");
btn3.innerText = "%";
let btn4 = document.createElement("button");
btn4.setAttribute("onclick", "appendbtnFn('/')");
btn4.setAttribute("class", "editBtn");
btn4.innerText = "/";
let btn5 = document.createElement("button");
btn5.setAttribute("onclick", "appendbtnFn('7')");
btn5.innerText = "7";
let btn6 = document.createElement("button");
btn6.setAttribute("onclick", "appendbtnFn('8')");
btn6.innerText = "8";
let btn7 = document.createElement("button");
btn7.setAttribute("onclick", "appendbtnFn('9')");
btn7.innerText = "9";
let btn8 = document.createElement("button");
btn8.setAttribute("onclick", "appendbtnFn('*')");
btn8.setAttribute("class", "editBtn");
btn8.innerText = "*";
let btn9 = document.createElement("button");
btn9.setAttribute("onclick", "appendbtnFn('6')");
btn9.innerText = "6";
let btn10 = document.createElement("button");
btn10.setAttribute("onclick", "appendbtnFn('5')");
btn10.innerText = "5";
let btn11 = document.createElement("button");
btn11.setAttribute("onclick", "appendbtnFn('4')");
btn11.innerText = "4";
let btn12 = document.createElement("button");
btn12.setAttribute("onclick", "appendbtnFn('-')");
btn12.setAttribute("class", "editBtn");
btn12.innerText = "-";
let btn13 = document.createElement("button");
btn13.setAttribute("onclick", "appendbtnFn('3')");
btn13.innerText = "3";
let btn14 = document.createElement("button");
btn14.setAttribute("onclick", "appendbtnFn('2')");
btn14.innerText = "2";
let btn15 = document.createElement("button");
btn15.setAttribute("onclick", "appendbtnFn('1')");
btn15.innerText = "1";
let btn16 = document.createElement("button");
btn16.setAttribute("onclick", "appendbtnFn('+')");
btn16.setAttribute("class", "editBtn");
btn16.innerText = "+";
let btn17 = document.createElement("button");
btn17.setAttribute("onclick", "appendbtnFn('0')");
btn17.setAttribute("class", "btn");
btn17.innerText = "0";
let btn18 = document.createElement("button");
btn18.setAttribute("onclick", "appendbtnFn('.')");
btn18.innerText = ".";
let btn19 = document.createElement("button");
btn19.setAttribute("onclick", "calculateFn('=')");
btn19.setAttribute("class", "editBtn");
btn19.innerText = "=";
firstDiv.append(
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn10,
  btn11,
  btn12,
  btn13,
  btn14,
  btn15,
  btn16,
  btn17,
  btn18,
  btn19
);

function appendbtnFn(input) {
  inpDis.value += input;
}

function clearAllFn() {
  inpDis.value = "";
}

function calculateFn() {
  inpDis.value = eval(inpDis.value);
}
