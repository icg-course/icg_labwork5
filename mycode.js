document.onload = function()
{
  var flagUp = false;
  var speed = 0.2;

  // function fly(where) {
  // var currentQuadrocopterPos = document.getElementById('BALL').getAttribute("translation");
  // var arr = currentQuadrocopterPos.split(' ');
  // if (where == "Up") {
  //   arr[1] = String(parseFloat(arr[1]) + 0.1);
  //   fly = String(arr[0] + ' ');
  //   fly = String(fly+ arr[1] + ' ');
  //   fly = String(fly + arr[2]);
  //   document.getElementById('BALL').setAttribute("translation", fly);
  // }
};

addEventListener("keydown", function(event) {
  alert("hello");
      if(event.keyCode == 48){
        speed = 0;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        window.alert("hello");
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

        document.getElementById('root').
      }
      if(event.keyCode == 49){
        speed = 0.1;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        document.getElementById('id_time_wings_speed').setAttribute("cycleInterval","0.6");
        document.getElementById('id_time_wings_speed').setAttribute("enabled", "true");
      }
      if(event.keyCode == 50){
        speed = 0.2;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        document.getElementById('id_time_wings_speed').setAttribute("cycleInterval","0.5");
        document.getElementById('id_time_wings_speed').setAttribute("enabled", "true");
      }
      if(event.keyCode == 51){
        speed = 0.3;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        document.getElementById('id_time_wings_speed').setAttribute("cycleInterval","0.4");
        document.getElementById('id_time_wings_speed').setAttribute("enabled", "true");
      }
      if(event.keyCode == 52){
        speed = 0.4;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        document.getElementById('id_time_wings_speed').setAttribute("cycleInterval","0.3");
        document.getElementById('id_time_wings_speed').setAttribute("enabled", "true");
      }
      if(event.keyCode == 53){
        speed = 0.5;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        document.getElementById('id_time_wings_speed').setAttribute("cycleInterval","0.2");
        document.getElementById('id_time_wings_speed').setAttribute("enabled", "true");
      }
      if(event.keyCode == 54){
        speed = 0.6;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        document.getElementById('id_time_wings_speed').setAttribute("cycleInterval","0.1");
        document.getElementById('id_time_wings_speed').setAttribute("enabled", "true");
      }
      if(event.keyCode == 55){
        speed = 0.7;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        document.getElementById('id_time_wings_speed').setAttribute("cycleInterval","0.04");
        document.getElementById('id_time_wings_speed').setAttribute("enabled", "true");
      }
      if(event.keyCode == 56){
        speed = 0.8;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        document.getElementById('id_time_wings_speed').setAttribute("cycleInterval","0.035");
        document.getElementById('id_time_wings_speed').setAttribute("enabled", "true");
      }
      if(event.keyCode == 57){
        speed = 0.9;
        document.getElementById('id_time_wings_speed').setAttribute("enabled","false");
        document.getElementById('id_time_wings_speed').setAttribute("cycleInterval","0.03");
        document.getElementById('id_time_wings_speed').setAttribute("enabled", "true");
      }



 if (event.keyCode == 90 || event.keyCode == 88 ) { //вверх/вниз
  var currentQuadrocopterPos = document.getElementById('BALL').getAttribute("translation");
  var arr = currentQuadrocopterPos.split(' ');
  if (event.keyCode == 90)  {//летим вверх
     arr[1] = String(parseFloat(arr[1]) + speed);
     fly = String(arr[0] + ' ');
     fly = String(fly+ arr[1] + ' ');
     fly = String(fly + arr[2]);
     document.getElementById('BALL').setAttribute("translation", fly);
  }
  if (event.keyCode == 88)  {               //летим вниз
    arr[1] = String(parseFloat(arr[1]) - speed);
    fly = String(arr[0] + ' ');
    fly = String(fly+ arr[1] + ' ');
    fly = String(fly + arr[2]);
    document.getElementById('BALL').setAttribute("translation", fly);
  }
 }

 if (event.keyCode == 38 || event.keyCode == 40 ) { //вперед назад
  var currentQuadrocopterPos = document.getElementById('BALL').getAttribute("translation");
  var arr = currentQuadrocopterPos.split(' ');
  if (event.keyCode == 38)  {//летим вперед
     arr[2] = String(parseFloat(arr[2]) - speed);
     fly = String(arr[0] + ' ');
     fly = String(fly+ arr[1] + ' ');
     fly = String(fly + arr[2]);
     document.getElementById('BALL').setAttribute("translation", fly);
  }
  if (event.keyCode == 40)  {               //летим назад
    arr[2] = String(parseFloat(arr[2]) + speed);
    fly = String(arr[0] + ' ');
    fly = String(fly+ arr[1] + ' ');
    fly = String(fly + arr[2]);
    document.getElementById('BALL').setAttribute("translation", fly);
  }
 }

 if (event.keyCode == 37 || event.keyCode == 39 ) { //влево вправо
   var currentQuadrocopterPos = document.getElementById('BALL').getAttribute("translation");
   var arr = currentQuadrocopterPos.split(' ');
   if (event.keyCode == 37)  {//летим влево
     arr[0] = String(parseFloat(arr[0]) - speed);
     fly = String(arr[0] + ' ');
     fly = String(fly+ arr[1] + ' ');
     fly = String(fly + arr[2]);
     document.getElementById('BALL').setAttribute("translation", fly);
  }
  if (event.keyCode == 39)  {               //летим вправо
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
