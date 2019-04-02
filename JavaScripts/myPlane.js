document.onload = function()
{
  var audio = new Audio();
  var speed = 0;
  var speedup = 0;
  var flag1 = false;
  var flag2 = false;
  var flag3 = false;
  var start_f = false;
  var stop_f = false;
  var timerId1 = setInterval(function() //вызов вращения самолета в зависимости от закрылок
  {
    if((speed + speedup) > 0)
    {
      fun1();
      fun2();
      fun3();
    }
    fly();
    speedRaschet();
  }, 10);

  var timerId2 = setInterval(function()
  {
    forFlapNull();
  }, 5); //вызов стягивания закрылок в ноль

  function speedRaschet()
  {
    if(start_f)
    {
      speed += 0.1;
      if(speed > 10)
        speed = 10;
    }
    if(stop_f)
    {
      speed -= 0.1;
      if(speed < 0)
        speed = 0;
      speedup -= 0.05;
      if(speedup < 0)
        speedup = 0;
    }
  }

  function fly()
  {
    var flyPlane = document.getElementById('trans').getAttribute("translation");
    var arr = flyPlane.split(' ');
    var rot_LR = document.getElementById('trans2').getAttribute("rotation");
    var arr_LR = rot_LR.split(' ');
    var rot_UD = document.getElementById('trans1').getAttribute("rotation");
    var arr_UD = rot_UD.split(' ');
    //arr[0] = arr[0] + speed *  Math.cos(arr_LR[3]);
    //arr[2] = arr[2] + speed / 5 *  Math.sin(arr_LR[3]);

    arr[0] = forFlySin(arr[0], arr_LR[3]);
    arr[1] = forFlySin(arr[1], '-' + arr_UD[3]);

    //arr[2] = forFlyCos(arr[2], );
    arr[2] = forFlyCos(arr[2], '-' + arr_UD[3], arr_LR[3]);

    //arr[2] = forFlyCos(arr[2], '-' + arr_UD[3]);
    //arr[0] = forFlyCos(arr[0], '-' + arr_UD[3]);
    flyPlane = String(arr[0] + ' ');
    flyPlane = String(flyPlane + arr[1] + ' ');
    flyPlane = String(flyPlane + arr[2]);
    document.getElementById('trans').setAttribute("translation", flyPlane);
  }

  function forFlyCos(x, y, z)
  {
    return String(parseFloat(x) - (speed + speedup) / 100 * Math.cos(parseFloat(y)) * Math.cos(parseFloat(z)));
    //Math.sqrt
    //Math.pow
  }
  function forFlySin(x, y)
  {
    return String(parseFloat(x) - (speed + speedup) / 100 * Math.sin(parseFloat(y)));
    //Math.sqrt
    //Math.pow
  }

  function forFlapNull() //возвращение закрылок в ноль если это нужно и если они не в нуле
  {
    if(flag3)
    {
      var rotation = document.getElementById('flap_1_left').getAttribute("rotation");
      if(rotation != "1 0 0 0")
      {
        rotation = flapToNull(rotation);
        document.getElementById('flap_1_left').setAttribute("rotation",  rotation);
        document.getElementById('flap_2_left').setAttribute("rotation",  rotation);
      }
      rotation = document.getElementById('flap_1_right').getAttribute("rotation");
      if(rotation != "1 0 0 0")
      {
        rotation = flapToNull(rotation);
        document.getElementById('flap_1_right').setAttribute("rotation",  rotation);
        document.getElementById('flap_2_right').setAttribute("rotation",  rotation);
      }
    }

    if(flag1)
    {
      rotation = document.getElementById('flap_1').getAttribute("rotation");
      if(rotation != "1 0 0 0")
      {
        rotation = flapToNull(rotation);
        document.getElementById('flap_1').setAttribute("rotation",  rotation);
        document.getElementById('flap_2').setAttribute("rotation",  rotation);
      }
      rotation = document.getElementById('rear_flap').getAttribute("rotation");
      if(rotation != "1 0 0 0")
      {
        rotation = flapToNull(rotation);
        document.getElementById('rear_flap').setAttribute("rotation",  rotation);
      }
    }

    if(flag2)
    {
      rotation = document.getElementById('tail_flap').getAttribute("rotation");
      if(rotation != "0 1 0 0")
      {
        rotation = flapToNull(rotation);
        document.getElementById('tail_flap').setAttribute("rotation",  rotation);
      }
    }
  }

  function flapToNull(povorot)  //поворот закрылки в ноль
  {
    var arr = povorot.split(' ');
    if(parseFloat(arr[3]) > 0)
    {
      arr[3] = String(parseFloat(arr[3]) - 0.05);
      if(parseFloat(arr[3]) < 0)
        arr[3] = String(0);
    }
    else
    {
      arr[3] = String(parseFloat(arr[3]) + 0.05);
      if(parseFloat(arr[3]) > 0)
        arr[3] = String(0);
    }
    return connect_rotation(arr);
  }

  var forFlap = function(povorot, coef, ogranich) //для поворота закрылки
  {
    var arr = povorot.split(' ');
    arr[3] = String(parseFloat(arr[3]) + coef);

    if(parseFloat(arr[3]) > ogranich)
      arr[3] = String(ogranich);
    if(parseFloat(arr[3]) < -ogranich)
      arr[3] = String(-ogranich);

    if(parseFloat(arr[3]) > -coef * 0.8 && parseFloat(arr[3]) < coef * 0.8)
      arr[3] = String(0);
    return connect_rotation(arr);
  }

  function fun1() //наклон
  {
    var rot = document.getElementById('trans1').getAttribute("rotation");
    var arr = rot.split(' ');
    var rot2 = document.getElementById('rear_flap').getAttribute("rotation");
    var arr2 = rot2.split(' ');
    /*if(parseFloat(arr2[3]) > 0)
      document.getElementById('trans1').setAttribute("center","0 5 0");
    else
      document.getElementById('trans1').setAttribute("center","0 -5 0");*/
    arr[3] = String(parseFloat(arr[3]) + parseFloat(arr2[3]) / 200 * (speed + speedup));
    rot = connect_rotation(arr);
    document.getElementById('trans1').setAttribute("rotation", rot);
  }

  function fun2() //поворот
  {
    var rot = document.getElementById('trans2').getAttribute("rotation");
    var arr = rot.split(' ');
    var rot2 = document.getElementById('tail_flap').getAttribute("rotation");
    var arr2 = rot2.split(' ');
    arr[3] = String(parseFloat(arr[3]) - parseFloat(arr2[3]) / 1000 * (speed + speedup));
    rot = connect_rotation(arr);
    document.getElementById('trans2').setAttribute("rotation", rot);
  }

  function fun3() //бочка
  {
    var rot = document.getElementById('trans3').getAttribute("rotation");
    var arr = rot.split(' ');
    var rot2 = document.getElementById('flap_1_left').getAttribute("rotation");
    var arr2 = rot2.split(' ');
    arr[3] = String(parseFloat(arr[3]) - parseFloat(arr2[3]) / 1000 * (speed + speedup));
    rot = connect_rotation(arr);
    document.getElementById('trans3').setAttribute("rotation", rot);
  }

  function connect_rotation(arr) //соединение массива из элементов в строку
  {
    var rotation = String(arr[0] + ' ');
    for(var i = 1; i < 3; i++)
    {
      rotation = String(rotation + arr[i] + ' ');
    }
    rotation = String(rotation + arr[3]);
    return rotation;
          //return String(arr[0] + ' ' + arr[1] + ' ' arr[2] + ' ' arr[3]);
  }

  addEventListener("keyup", function(event) //установка флагов если была отжата кнопка управления
  {
    if (event.keyCode == 37 || event.keyCode == 39)
      flag2 = true;
    if (event.keyCode == 38 || event.keyCode == 40)
      flag1 = true;
    if (event.keyCode == 100 || event.keyCode == 102)
      flag3 = true;
  });

  addEventListener("keydown", function(event) //обработка нажатия кнопок управления
  {
    if (event.keyCode == 104 || event.keyCode == 98)  //speed + or -
      if(document.getElementById('id_time_propeller').getAttribute("enabled") == "true")
      {
        var oborots = parseFloat(document.getElementById('id_time_propeller').getAttribute("cycleInterval"));
        if(event.keyCode == 104)
        {
          oborots = oborots - 0.03;
          if(oborots < 0.1)
            oborots = 0.1
        }
        else
        {
          oborots = oborots + 0.03;
          if(oborots > 1)
            oborots = 1
        }
        speedup = 5 / oborots;
        document.getElementById('id_time_propeller').setAttribute("enabled", "false");
        document.getElementById('id_time_propeller').setAttribute("cycleInterval", String(oborots));
        document.getElementById('id_time_propeller').setAttribute("enabled", "true");
      }

    if (event.keyCode == 37 || event.keyCode == 39)  //left or right
    {
      flag2 = false;
      var povorot = document.getElementById("tail_flap").getAttribute("rotation");
      if(event.keyCode == 37)
        povorot = forFlap(povorot, -0.03, 0.5);
      else
        povorot = forFlap(povorot, 0.03, 0.5);
      document.getElementById('tail_flap').setAttribute("rotation", povorot);
    }

          if (event.keyCode == 38 || event.keyCode == 40)  //up or down
          {
            flag1 = false;
            var back = document.getElementById('rear_flap').getAttribute("rotation");
            var front = document.getElementById('flap_1').getAttribute("rotation");
            if(event.keyCode == 38)
            {
              back = forFlap(back, -0.03, 0.7);
              front = forFlap(front, 0.03, 0.7);
            }
            else
            {
              back = forFlap(back, 0.03, 0.7);
              front = forFlap(front, -0.03, 0.7);
            }
            document.getElementById('rear_flap').setAttribute("rotation", back);
            document.getElementById('flap_1').setAttribute("rotation", front);
            document.getElementById('flap_2').setAttribute("rotation", front);
          }

    if (event.keyCode == 100 || event.keyCode == 102)  //barrel left or right
    {
      flag3 = false;
      var barrel_l = document.getElementById('flap_1_left').getAttribute("rotation");
      var barrel_r = document.getElementById('flap_1_right').getAttribute("rotation");
      if(event.keyCode == 100)
      {
        barrel_l = forFlap(barrel_l, -0.03, 0.7);
        barrel_r = forFlap(barrel_r, 0.03, 0.7);
      }
      else
      {
        barrel_l = forFlap(barrel_l, 0.03, 0.7);
        barrel_r = forFlap(barrel_r, -0.03, 0.7);
      }
      document.getElementById('flap_1_left').setAttribute("rotation",  barrel_l);
      document.getElementById('flap_1_right').setAttribute("rotation",  barrel_r);
      document.getElementById('flap_2_left').setAttribute("rotation",  barrel_l);
      document.getElementById('flap_2_right').setAttribute("rotation",  barrel_r);
    }
  });

  document.getElementById('btn_start').onclick = function() //обработчик нажатия кнопки старт
  {
    start_f = true;
    stop_f = false;
    document.getElementById('id_time_propeller').setAttribute("cycleInterval", "1");
    document.getElementById('id_time_propeller').setAttribute("enabled", "true");
    if(!audio.autoplay)
    {
      audio.src = 'music/ot_vinta.mp3';
      audio.autoplay = true;
      audio.loop = true
    }
  }
  document.getElementById('btn_stop').onclick = function() //обработчик нажатия кнопки стоп
  {
    stop_f = true;
    start_f = false;
    document.getElementById('id_time_propeller').setAttribute("enabled", "false");
    audio.autoplay = false;
    audio.src = 'music/ot_vinta.mp3';
  }
}