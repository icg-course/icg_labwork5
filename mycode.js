document.onload = function()
{
  var flagUp = true;
  var speed = 0.2;

addEventListener("keydown", function(event) //codefactor one love
 {
      if(event.keyCode == 48){
        speed = 0;
        flagUp = false;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        var curRotation1 = document.getElementById('id_wing1').getAttribute("rotation");
        var curRotation2 = document.getElementById('id_wing2').getAttribute("rotation");
        var arr1 = curRotation1.split(' ');
        var arr2 = curRotation2.split(' ');
        arr1[0] = 0;
        arr1[1] = 0;
        arr1[2] = 1;
        arr1[3] = 1.7;
        fly = String(arr1[0] + ' ');
        fly = String(fly+ arr1[1] + ' ');
        fly = String(fly + arr1[2]+ ' ');
        fly = String(fly + arr1[3]);
        document.getElementById('id_wing1').setAttribute("rotation", fly);
        arr2[0] = 0;
        arr2[1] = 0;
        arr2[2] = 1;
        arr2[3] = 4.6;
        fly = String(arr2[0] + ' ');
        fly = String(fly+ arr2[1] + ' ');
        fly = String(fly + arr2[2]+ ' ');
        fly = String(fly + arr2[3]);
        document.getElementById('id_wing2').setAttribute("rotation", fly);

        var myTimer = setInterval(function() //вызов вращения самолета в зависимости от закрылок
          {
            if(flagUp==false){
            var flySnitch = document.getElementById('BALL').getAttribute("translation");
            var arr = flySnitch.split(' ');

            arr[1] = String(parseFloat(arr[1]) - 0.1);
            flySnitch = String(arr[0] + ' ');
            flySnitch = String(flySnitch+ arr[1] + ' ');
            flySnitch = String(flySnitch + arr[2]);
            document.getElementById('BALL').setAttribute("translation", flySnitch);

            if(String(parseFloat(arr[1]))<=(-8.6)){
              clearInterval(myTimer);
            }
          } else {
            clearInterval(myTimer);
          }
        }, 20);

      }
      if(event.keyCode == 49){
        speed = 0.1;
        flagUp = true;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        document.getElementById('id_time_spd').setAttribute("cycleInterval","0.6");
        document.getElementById('id_time_spd').setAttribute("enabled", "true");
      }
      if(event.keyCode == 50){
        speed = 0.2;
        flagUp = true;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        document.getElementById('id_time_spd').setAttribute("cycleInterval","0.5");
        document.getElementById('id_time_spd').setAttribute("enabled", "true");
      }
      if(event.keyCode == 51){
        speed = 0.3;
        flagUp = true;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        document.getElementById('id_time_spd').setAttribute("cycleInterval","0.4");
        document.getElementById('id_time_spd').setAttribute("enabled", "true");
      }
      if(event.keyCode == 52){
        speed = 0.4;
        flagUp = true;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        document.getElementById('id_time_spd').setAttribute("cycleInterval","0.3");
        document.getElementById('id_time_spd').setAttribute("enabled", "true");
      }
      if(event.keyCode == 53){
        speed = 0.5;
        flagUp = true;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        document.getElementById('id_time_spd').setAttribute("cycleInterval","0.2");
        document.getElementById('id_time_spd').setAttribute("enabled", "true");
      }
      if(event.keyCode == 54){
        speed = 0.6;
        flagUp = true;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        document.getElementById('id_time_spd').setAttribute("cycleInterval","0.1");
        document.getElementById('id_time_spd').setAttribute("enabled", "true");
      }
      if(event.keyCode == 55){
        speed = 0.7;
        flagUp = true;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        document.getElementById('id_time_spd').setAttribute("cycleInterval","0.04");
        document.getElementById('id_time_spd').setAttribute("enabled", "true");
      }
      if(event.keyCode == 56){
        speed = 0.8;
        flagUp = true;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        document.getElementById('id_time_spd').setAttribute("cycleInterval","0.035");
        document.getElementById('id_time_spd').setAttribute("enabled", "true");
      }
      if(event.keyCode == 57){
        speed = 0.9;
        flagUp = true;
        document.getElementById('id_time_spd').setAttribute("enabled","false");
        document.getElementById('id_time_spd').setAttribute("cycleInterval","0.03");
        document.getElementById('id_time_spd').setAttribute("enabled", "true");
      }



 if (event.keyCode == 90 || event.keyCode == 88 ) {
  var currentSnitchPos = document.getElementById('BALL').getAttribute("translation");
  var arr = currentSnitchPos.split(' ');
  if (event.keyCode == 90)  {
     arr[1] = String(parseFloat(arr[1]) + speed);
     fly = String(arr[0] + ' ');
     fly = String(fly+ arr[1] + ' ');
     fly = String(fly + arr[2]);
     document.getElementById('BALL').setAttribute("translation", fly);
  }
  if (event.keyCode == 88)  {
    arr[1] = String(parseFloat(arr[1]) - speed);
    fly = String(arr[0] + ' ');
    fly = String(fly+ arr[1] + ' ');
    fly = String(fly + arr[2]);
    document.getElementById('BALL').setAttribute("translation", fly);
  }
 }

 if (event.keyCode == 38 || event.keyCode == 40 ) {
  var currentSnitchPos = document.getElementById('BALL').getAttribute("translation");
  var arr = currentSnitchPos.split(' ');
  if (event.keyCode == 38)  {
     arr[2] = String(parseFloat(arr[2]) - speed);
     fly = String(arr[0] + ' ');
     fly = String(fly+ arr[1] + ' ');
     fly = String(fly + arr[2]);
     document.getElementById('BALL').setAttribute("translation", fly);
  }
  if (event.keyCode == 40)  {
    arr[2] = String(parseFloat(arr[2]) + speed);
    fly = String(arr[0] + ' ');
    fly = String(fly+ arr[1] + ' ');
    fly = String(fly + arr[2]);
    document.getElementById('BALL').setAttribute("translation", fly);
  }
 }

 if (event.keyCode == 37 || event.keyCode == 39 ) {
   var currentSnitchPos = document.getElementById('BALL').getAttribute("translation");
   var arr = currentSnitchPos.split(' ');
   if (event.keyCode == 37)  {
     arr[0] = String(parseFloat(arr[0]) - speed);
     fly = String(arr[0] + ' ');
     fly = String(fly+ arr[1] + ' ');
     fly = String(fly + arr[2]);
     document.getElementById('BALL').setAttribute("translation", fly);
  }
  if (event.keyCode == 39)  {
    arr[0] = String(parseFloat(arr[0]) + speed);
    fly = String(arr[0] + ' ');
    fly = String(fly+ arr[1] + ' ');
    fly = String(fly + arr[2]);
    document.getElementById('BALL').setAttribute("translation", fly);
  }
 }
});



  document.getElementById('button_start').onclick = function() { //старт
    document.getElementById('id_time_wings_color').setAttribute("cycleInterval","5");
    document.getElementById('id_time_wings_color').setAttribute("enabled", "true");
  }
  document.getElementById('button_stop').onclick = function() { //стоп
    document.getElementById('id_time_wings_color').setAttribute("enabled","false");
  }
}
