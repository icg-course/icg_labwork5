var i = 0;
var pos = [0, 0];

function beep() {
	var speaker = document.getElementById("beep" + nextBeep());
	speaker.setAttribute("enabled", "true");
}

function nextBeep() {
	i += 1;
	if (i == 6)
		i = 1;
	return i;
}

function move(point) {
	var angle = Math.atan((point[2] - pos[1]) / (point[0] - pos[0]));
	if (pos[0] > point[0])
		angle = Math.PI - angle;
	else if (pos[0] < point[0])
		angle = -angle;
	angle += Math.PI / 2;
	var rot = "0, 1, 0, " + angle;
	document.getElementById("OrChaser").setAttribute("set_destination", rot);
	
	pos[0] = point[0];
	pos[1] = point[2];
	point[1] += 2.1;
	document.getElementById("PosChaser").setAttribute("set_destination", point);
}