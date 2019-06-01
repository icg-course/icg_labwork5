var mp3;
var mushroomActive = 0;
var bottleActive = document.querySelector(".bottle-active");

mp3 = new Audio();

function prihodSound() {
	mp3.src = 'prihod.mp3';
	mp3.autoplay = true;
	mp3.loop = true;
}

function drinkSound() {
	mp3.src = 'bulbul.mp3';
	mp3.autoplay = true;
	mp3.loop = false;
}

window.onload = function() { 	
	mp3.src = 'utro.mp3';
	mp3.autoplay = true;
	mp3.loop = true;
}

$( "#button1" ).click(function(){ 
	$('#golovka').append(
		'<Appearance>' +
          '<Material diffuseColor="red"></Material>' +
        '</Appearance>' +
        '<Dish radius="3" height="0.5"></Dish>' );
	$('#stvol').append(
		'<Appearance>' +
	        '<Material diffuseColor="white"></Material>' +
	      '</Appearance>' +
	      '<cylinder radius="0.15" height="0.6" solid="false"></cylinder>' );
	$('#arrow_id').append(
		'<Appearance>' +
           '<ImageTexture url="https://raw.githubusercontent.com/mihalichpalich/icg_labwork5/gh-pages/arrow.png"></ImageTexture>' +
        '</Appearance>' +
        '<Box size="3 2.5 0.01"></Box>' );
	$('scene').append(
        "<TimeSensor DEF='arrow_move' cycleInterval='1' loop='true' enabled='true'></TimeSensor>" +
        "<PositionInterpolator DEF='arrow_pos' key='0 0.5 1' keyValue='0 -1 30, 0 -0.5 30, 0 -1 30'></PositionInterpolator>" +
        "<ROUTE fromNode='arrow_move' fromField='fraction_changed' toNode='arrow_pos' toField='set_fraction'>" +
        '</ROUTE>' + 
        "<ROUTE fromNode='arrow_pos' fromField='value_changed' toNode='arrow' toField='set_translation'>" +
        '</ROUTE>'
	);
	$('#text').text("Ух ты, а они рядом растут! Надо бы распробовать, что за гриб, а то вдруг поганка");
	mushroomActive = 1;
	$('.second_text').text("<Нажмите на гриб>");
	$(this).remove();
});

var mushroom = document.querySelectorAll(".mushroom");
for (var i = 0; i < mushroom.length; i++) {
  mushroom[i].onclick = function(){
	if (mushroomActive == 1) {
		mushroom[0].remove();
		mushroom[1].remove();
		document.getElementById("arrow_id").remove();
	}
	$("#sky").attr('skyColor', '0.7 1 0');
	$("Fog").attr('visibilityRange', '150');
	$('#text').text("Ой, а грибочек-то ядовитый. Походу галюны пошли... Надо бы минералочки выпить, чтоб отпустило. В одной из бутылок по-любому должно остаться.");
	$('.second_text').text("<Нажимайте на бутылки, пока не найдете ту, в которой есть минералка>");
	$('#animation').append(
        "<TimeSensor DEF='Time_camp' cycleInterval='10' loop='true'></TimeSensor>" +
        "<ColorInterpolator DEF='Colcamp' key='0 0.1 0.3 0.5 0.6 0.8 1' keyValue='1 0 0, 0.3 0 0, 0.3 0 0.6, 1 0 0, 0 1 0, 0.5 0.4 0, 0 1 0'></ColorInterpolator>" +
        "<ROUTE fromNode='Time_camp' fromField='fraction_changed' toNode='Colcamp' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='Colcamp' fromField='value_changed' toNode='camp' toField='set_diffuseColor'></ROUTE>" +
        "<TimeSensor DEF='rotation_start' cycleInterval='6' loop='true'></TimeSensor>" +
        "<OrientationInterpolator DEF='rotation_end' key='0 0.5 1' keyValue='0 1 0 0, 0 1 0 3.14, 0 1 0 6.28'></OrientationInterpolator>" +
        "<ROUTE fromNode='rotation_start' fromField='fraction_changed' toNode='rotation_end' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='rotation_end' fromField='value_changed' toNode='skameyka_1' toField='set_rotation'></ROUTE>" +
        "<TimeSensor DEF='rotation_start' cycleInterval='6' loop='true'></TimeSensor>" +
        "<OrientationInterpolator DEF='rotation_end' key='0 0.5 1' keyValue='0 1 0 0, 0 1 0 3.14, 0 1 0 6.28'></OrientationInterpolator>" +
        "<ROUTE fromNode='rotation_start' fromField='fraction_changed' toNode='rotation_end' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='rotation_end' fromField='value_changed' toNode='skameyka_2' toField='set_rotation'></ROUTE>" +
        "<TimeSensor DEF='rotation_start' cycleInterval='6' loop='true'></TimeSensor>" +
        "<OrientationInterpolator DEF='rotation_end' key='0 0.5 1' keyValue='0 1 0 0, 0 1 0 3.14, 0 1 0 6.28'></OrientationInterpolator>" +
        "<ROUTE fromNode='rotation_start' fromField='fraction_changed' toNode='rotation_end' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='rotation_end' fromField='value_changed' toNode='skameyka_3' toField='set_rotation'></ROUTE>" +
        "<TimeSensor DEF='rotation_start' cycleInterval='6' loop='true'></TimeSensor>" +
        "<OrientationInterpolator DEF='rotation_end' key='0 0.5 1' keyValue='1 0 0 0, 1 0 0 3.14, 1 0 0 6.28'></OrientationInterpolator>" +
        "<ROUTE fromNode='rotation_start' fromField='fraction_changed' toNode='rotation_end' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='rotation_end' fromField='value_changed' toNode='mangal' toField='set_rotation'></ROUTE>"
	);
	prihodSound();
	$("#bottle").addClass("bottle-active");
  };	
}

bottleActive.onclick = function() {
	drinkSound();
	$("#sky").attr('skyColor', '0.156 0.196 0.862');
	$("Fog").attr('visibilityRange', '400');
	bottleActive.remove();
	$('#animation').html(
        "<TimeSensor DEF='Time_camp' cycleInterval='10' loop='true'></TimeSensor>" +
        "<ColorInterpolator DEF='Colcamp' key='0 0.1 0.3 0.5 0.6 0.8 1' keyValue='0.294 0.325 0.125, 0.294 0.325 0.125, 0.294 0.325 0.125, 0.294 0.325 0.125, 0.294 0.325 0.125, 0.294 0.325 0.125, 0.294 0.325 0.125'></ColorInterpolator>" +
        "<ROUTE fromNode='Time_camp' fromField='fraction_changed' toNode='Colcamp' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='Colcamp' fromField='value_changed' toNode='camp' toField='set_diffuseColor'></ROUTE>" +
        "<TimeSensor DEF='rotation_start' cycleInterval='6' loop='true'></TimeSensor>" +
        "<OrientationInterpolator DEF='rotation_end' key='0 0.5 1' keyValue='0 1 0 0, 0 1 0 0, 0 1 0 0'></OrientationInterpolator>" +
        "<ROUTE fromNode='rotation_start' fromField='fraction_changed' toNode='rotation_end' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='rotation_end' fromField='value_changed' toNode='skameyka_1' toField='set_rotation'></ROUTE>" +
        "<TimeSensor DEF='rotation_start' cycleInterval='6' loop='true'></TimeSensor>" +
        "<OrientationInterpolator DEF='rotation_end' key='0 0.5 1' keyValue='0 1 0 0, 0 1 0 0, 0 1 0 0'></OrientationInterpolator>" +
        "<ROUTE fromNode='rotation_start' fromField='fraction_changed' toNode='rotation_end' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='rotation_end' fromField='value_changed' toNode='skameyka_2' toField='set_rotation'></ROUTE>" +
        "<TimeSensor DEF='rotation_start' cycleInterval='6' loop='true'></TimeSensor>" +
        "<OrientationInterpolator DEF='rotation_end' key='0 0.5 1' keyValue='0 1 0 0, 0 1 0 0, 0 1 0 0'></OrientationInterpolator>" +
        "<ROUTE fromNode='rotation_start' fromField='fraction_changed' toNode='rotation_end' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='rotation_end' fromField='value_changed' toNode='skameyka_3' toField='set_rotation'></ROUTE>" +
        "<TimeSensor DEF='rotation_start' cycleInterval='6' loop='true'></TimeSensor>" +
        "<OrientationInterpolator DEF='rotation_end' key='0 0.5 1' keyValue='1 0 0 0, 1 0 0 0, 1 0 0 0'></OrientationInterpolator>" +
        "<ROUTE fromNode='rotation_start' fromField='fraction_changed' toNode='rotation_end' toField='set_fraction'></ROUTE>" +
        "<ROUTE fromNode='rotation_end' fromField='value_changed' toNode='mangal' toField='set_rotation'></ROUTE>"
	);
	$('#text').text("Ох, отошел кажется... Надо было смотреть, какой гриб попробовал. Может за ягодами сходить..");
	$('.second_text').remove();
};
