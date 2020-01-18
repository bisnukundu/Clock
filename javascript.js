let second = document.querySelector(".second")
let hour = document.querySelector(".hours")
let minute = document.querySelector(".minutes")
let sec = 6;
let min = 6;
let hou = 30;
// Seconds  
setInterval(function(){
	second.style =`transform:rotate(${sec}deg)`;
	sec += 6;
},1000)

//Minutes
setInterval(function(){
	minute.style =`transform:rotate(${min}deg)`;
	min += 6;
},60000)

// Hours 
setInterval(function(){
	hour.style =`transform:rotate(${hou}deg)`;
	hou += 30;
},3600000)