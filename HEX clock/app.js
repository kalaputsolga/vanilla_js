function time() {
	var date = new Date();
	var hours = date.getHours();
	var minutes =  date.getMinutes();
	var seconds = date.getSeconds();
	var arr = [hours, minutes, seconds].map(function(num) {
		return num < 10 ? '0' + num : String(num);
	});
	hours = arr[0];
	minutes = arr[1];
	seconds = arr[2];
	
	return hours + minutes + seconds;
}

function output(time) {
	var color = '#' + time;
	document.body.bgColor = color;
	document.body.style.height = '100vh';
	document.body.textContent = color;
	document.body.style.color = 'white';
}

function startClick(callback) {
	document.body.addEventListener('dblclick', function(event) {
		callback();
	});
}

function stopClick(callback, name) {
	document.body.addEventListener('click', function(event) {
		callback(name);//clearInterval(tick);
	});
}


function init() {
	var tick = setInterval(function() { output(time())}, 1000);
	stopClick(clearInterval, tick);
	startClick(init);
}

init();

















