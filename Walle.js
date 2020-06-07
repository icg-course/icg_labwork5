var pos = [0, 0];

function VoiceWalle() {
	var speaker = document.getElementById("Walle");
	speaker.setAttribute("enabled", "true");
}

function VoiceEva() {
	var speaker = document.getElementById("Eva");
	speaker.setAttribute("enabled", "true");
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
	point[1] += 1.5;
	document.getElementById("PosChaser").setAttribute("set_destination", point);
}

function arms()
    {
		var TS = document.getElementById('TS');
        var enabled = TS.getAttribute("enabled");
		var button = document.getElementById('buttonarms');
        if (enabled == "false") {
            TS.setAttribute("enabled", "true");
            button.value = "Выключить анимацию рук";
        }
        else 
		{
            TS.setAttribute("enabled", "false");
            button.value = "Включить анимацию рук";
        }
	}

	function stars()
    {
		var Eva = document.getElementById('TimeForStars');
        var enabled = Eva.getAttribute("enabled");
		var button = document.getElementById('buttonstars');
        if (enabled == "false") {
            Eva.setAttribute("enabled", "true");
            button.value = "Остановить падение звёзд";
        }
        else 
		{
            Eva.setAttribute("enabled", "false");
            button.value = "Включить падение звёзд";
        }
	}
	