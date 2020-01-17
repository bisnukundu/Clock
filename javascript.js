
let second = document.querySelector(".second");
let minute = document.querySelector(".minutes");
let hour = document.querySelector(".hours");
let date = new Date();
let se = 6;
let mi = 6;
let hou = 30;

// Seconds 
function sec() {
	let seconds = date.getSeconds()
	let s = `transform:rotate(${se}deg)`
	se += 6
	second.style = s
}

setInterval(sec, 1000)
// Minutes 
function min() {
	let minutes = date.getMinutes()
	let m = `transform:rotate(${mi}deg)`
	mi += 6
	minute.style = m
}

setInterval(min, 60000)

// Hours 
function houe() {
	let hours = date.getHours()
	let h = `transform:rotate(${hou}deg)`
	hou += 30
	hour.style = h
}

setInterval(houe,3600000)