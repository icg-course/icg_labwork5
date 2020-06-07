document.onload = function()
{
 addEventListener("keydown", function(event) {
   if (event.keyCode == 38 || event.keyCode == 40 ) { // вверх/вниз
    var currentFlyPos = document.getElementById('fly1').getAttribute("translation");
    var arr = currentFlyPos.split(' ');
    if (event.keyCode == 38)  {//летим вверх
       arr[1] = String(parseFloat(arr[1]) + 0.1);
       fly = String(arr[0] + ' ');
       fly = String(fly+ arr[1] + ' ');
       fly = String(fly + arr[2]);
       document.getElementById('fly1').setAttribute("translation", fly);
    }
    if (event.keyCode == 40)  {               // летим вниз
      arr[1] = String(parseFloat(arr[1]) - 0.1);
      fly = String(arr[0] + ' ');
      fly = String(fly+ arr[1] + ' ');
      fly = String(fly + arr[2]);
      document.getElementById('fly1').setAttribute("translation", fly);
    }
   }
 });
var click0=0;    
        document.getElementById('scale').onclick = function() //кнопка SCALE - УВЕЛИЧЕНИЕ РАДИУСА
    {
            click0=click0+0.5; // формула увеличения размера на 0.5
            if (click0<=10) // если размер мяча <=10, то выполняется условие
            {
                    document.getElementById('sp').setAttribute("radius", click0); //изменение радиуса
            }
    }
            document.getElementById('deffolt').onclick = function() //кнопка DEFFOLT - УМЕНЬШЕНИЕ РАДИУСА
    {
            click0=click0-0.5; // формула уменьшения размера на 0.5
            if (click0>=1) // если размер мяча >=10, то выполняется условие
            {
                    document.getElementById('sp').setAttribute("radius", click0); //изменение радиуса
            }
  }
}