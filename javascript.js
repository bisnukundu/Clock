let second = document.querySelector(".second");
let minute = document.querySelector(".minutes");
let hour = document.querySelector(".hours");
let se = 6;
let mi = 6;
let hou = 30;

function test() {
	let date = new Date();
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()
	let final = hours + ":" + minutes + ":" + seconds
	// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	let s = `transform:rotate(${se}deg)`
	se += 6
	second.style = s
}

setInterval(test, 1000)
// ================================================

function min() {
	let date = new Date();
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()
	let final = hours + ":" + minutes + ":" + seconds
	// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	let m = `transform:rotate(${mi}deg)`
	mi += 6
	minute.style = m
}

setInterval(min, 60000)

// ======================================================

function houe() {
	let date = new Date();
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()
	let final = hours + ":" + minutes + ":" + seconds
	// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	let h = `transform:rotate(${hou}deg)`
	hou += 6
	hour.style = h
}

setInterval(houe, 3600000)