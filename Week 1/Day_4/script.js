//1.
document.getElementById("container").style.color = "black";

//2.
document.querySelector(".first").style.color = "blue";

//3.
var secondArr = document.getElementsByClassName("second");
for (let i = 0; i < secondArr.length; i++){
	secondArr[i].style.color = "red";
}

//4.
var matches = document.getElementsByTagName("ol")[0].querySelectorAll(".third");
for (let i = 0; i < matches.length; i++){
	matches[i].style.backgroundColor = "gray";
}

//5.
//document.getElementById("container").innerText = "Hello!";

//6.
document.getElementsByClassName("footer")[0].classList.add("main");

//7.
document.getElementsByClassName("footer")[0].classList.add("main");

//8.
var myLi = document.createElement("li");

//9.
myLi.innerText = "four";

//10.
document.getElementsByTagName("ul")[0].appendChild(myLi);

//12.
var myUls = document.getElementsByTagName("ul");
for (let i = 0; i < myUls.length; i++){
	myUls[i].style.backgroundColor = "green";
}

//13.
document.getElementsByClassName("footer")[0].remove();