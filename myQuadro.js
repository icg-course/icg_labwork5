document.onload = function()
{
  var flagUp = false;
  function fly(where) {
    var currentQuadrocopterPos = document.getElementById('quadrocopter').getAttribute("translation");
    var arr = currentQuadrocopterPos.split(' ');
    if (where == "Up") {
      arr[1] = String(parseFloat(arr[1]) + 0.1);
      fly = String(arr[0] + ' ');
      fly = String(fly+ arr[1] + ' ');
      fly = String(fly + arr[2]);
      document.getElementById('quadrocopter').setAttribute("translation", fly);
    }
  };

  addEventListener("keydown", function(event) {
   if (event.keyCode == 38 || event.keyCode == 40 ) { //вверх/вниз
    var currentQuadrocopterPos = document.getElementById('quadrocopter').getAttribute("translation");
    var arr = currentQuadrocopterPos.split(' ');
    if (event.keyCode == 38)  {//летим вверх
       arr[1] = String(parseFloat(arr[1]) + 0.1);
       fly = String(arr[0] + ' ');
       fly = String(fly+ arr[1] + ' ');
       fly = String(fly + arr[2]);
       document.getElementById('quadrocopter').setAttribute("translation", fly);
    }
    if (event.keyCode == 40)  {               //летим вниз
      arr[1] = String(parseFloat(arr[1]) - 0.1);
      fly = String(arr[0] + ' ');
      fly = String(fly+ arr[1] + ' ');
      fly = String(fly + arr[2]);
      document.getElementById('quadrocopter').setAttribute("translation", fly);
    }
   }

   if (event.keyCode == 100 || event.keyCode == 102) { //крен влево вправо
    var currentQuadrocopterPos = document.getElementById('quadrocopter').getAttribute("rotation");
    var arr = currentQuadrocopterPos.split(' ');
    if (event.keyCode == 100)  {//крен влево
       //window.alert(arr);
       arr[0] = 0;
       arr[1] = 0;
       arr[2] = 1;
       arr[3] = String(parseFloat(arr[3]) + 0.01);
       if (parseFloat(arr[3])<0.4) {
         fly = String(arr[0] + ' ');
         fly = String(fly+ arr[1] + ' ');
         fly = String(fly + arr[2]+ ' ');
         fly = String(fly + arr[3]);
         //window.alert(fly);
         document.getElementById('quadrocopter').setAttribute("rotation", fly);
       }
    }
    if (event.keyCode == 102)  {               //крен вправо
      //window.alert(arr);
      arr[0] = 0;
      arr[1] = 0;
      arr[2] = 1;
      arr[3] = String(parseFloat(arr[3]) - 0.01);
      if (parseFloat(arr[3])> -0.4) {
        fly = String(arr[0] + ' ');
        fly = String(fly+ arr[1] + ' ');
        fly = String(fly + arr[2]+ ' ');
        fly = String(fly + arr[3]);
        //window.alert(fly);
        document.getElementById('quadrocopter').setAttribute("rotation", fly);
      }
    }
   }

   if (event.keyCode == 98 || event.keyCode == 104) { //крен вниз вверх
    var currentQuadrocopterPos = document.getElementById('quadrocopter').getAttribute("rotation");
    var arr = currentQuadrocopterPos.split(' ');
    if (event.keyCode == 98)  {//крен вниз
       //window.alert(arr);
       arr[0] = 1;
       arr[1] = 0;
       arr[2] = 0;
       arr[3] = String(parseFloat(arr[3]) + 0.01);
       if (parseFloat(arr[3])<0.4) {
         fly = String(arr[0] + ' ');
         fly = String(fly+ arr[1] + ' ');
         fly = String(fly + arr[2]+ ' ');
         fly = String(fly + arr[3]);
         //window.alert(fly);
         document.getElementById('quadrocopter').setAttribute("rotation", fly);
       }
    }
    if (event.keyCode == 104)  {               //крен вверх
      //window.alert(arr);
      arr[0] = 1;
      arr[1] = 0;
      arr[2] = 0;
      arr[3] = String(parseFloat(arr[3]) - 0.01);
      if (parseFloat(arr[3])> -0.4) {
        fly = String(arr[0] + ' ');
        fly = String(fly+ arr[1] + ' ');
        fly = String(fly + arr[2]+ ' ');
        fly = String(fly + arr[3]);
        //window.alert(fly);
        document.getElementById('quadrocopter').setAttribute("rotation", fly);
      }
    }
   }


   if (event.keyCode == 87 || event.keyCode == 83 ) { //вперед назад
    var currentQuadrocopterPos = document.getElementById('quadrocopter').getAttribute("translation");
    var arr = currentQuadrocopterPos.split(' ');
    if (event.keyCode == 87)  {//летим вперед
       arr[2] = String(parseFloat(arr[2]) - 2);
       fly = String(arr[0] + ' ');
       fly = String(fly+ arr[1] + ' ');
       fly = String(fly + arr[2]);
       document.getElementById('quadrocopter').setAttribute("translation", fly);
    }
    if (event.keyCode == 83)  {               //летим назад
      arr[2] = String(parseFloat(arr[2]) + 0.1);
      fly = String(arr[0] + ' ');
      fly = String(fly+ arr[1] + ' ');
      fly = String(fly + arr[2]);
      document.getElementById('quadrocopter').setAttribute("translation", fly);
    }
   }

   if (event.keyCode == 37 || event.keyCode == 39 ) { //влево вправо
     var currentQuadrocopterPos = document.getElementById('quadrocopter').getAttribute("translation");
     var arr = currentQuadrocopterPos.split(' ');
     if (event.keyCode == 37)  {//летим влево
       arr[0] = String(parseFloat(arr[0]) - 0.1);
       fly = String(arr[0] + ' ');
       fly = String(fly+ arr[1] + ' ');
       fly = String(fly + arr[2]);
       document.getElementById('quadrocopter').setAttribute("translation", fly);
    }
    if (event.keyCode == 39)  {               //летим вправо
      arr[0] = String(parseFloat(arr[0]) + 0.1);
      fly = String(arr[0] + ' ');
      fly = String(fly+ arr[1] + ' ');
      fly = String(fly + arr[2]);
      document.getElementById('quadrocopter').setAttribute("translation", fly);
    }
   }
 });

 document.getElementById('button_start').onclick = function() { //старт
   document.getElementById('id_time_propeller').setAttribute("cycleInterval","0.1");
   document.getElementById('id_time_propeller').setAttribute("enabled", "true");
 }
 document.getElementById('button_stop').onclick = function() { //стоп
   document.getElementById('id_time_propeller').setAttribute("enabled","false");
 }

}
