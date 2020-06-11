document.onload = function() 
{ 
 document.getElementById("stop").onclick = function()  //кнопка STOP - ОСТАНОВКА АНИМАЦИИ БИЕНИЯ МЯЧА ОБ ПОЛЕ
 { 
 var od = document.getElementById("time").setAttribute("enebled");  //обращение к атрибуту через айди мячика
 document.getElementById("time").setAttribute("enabled", od="false"); // изменение атрибута анимации на отрицательную
 
 } 
 
 document.getElementById("play").onclick = function() //кнопка START - ЗАПУСКЛ АНИМАЦИИ БИЕНИЯ МЯЧА ОБ ПОЛЕ
 { 
 var od = document.getElementById("time").setAttribute("enebled");  //обращение к атрибуту через айди мячика
 document.getElementById("time").setAttribute("enabled", od="true"); // изменение атрибута анимации на положительную
 } 
var click0=0;    
        document.getElementById('scale').onclick = function() //кнопка SCALE - УВЕЛИЧЕНИЕ РАДИУСА МЯЧИКА
    {
            click0=click0+0.5; // формула увеличения размера на 0.5
            if (click0<=10) // если размер мяча <=10, то выполняется условие
            {
                    document.getElementById('sp').setAttribute("radius", click0); //изменение радиуса мяча
            }
    }
            document.getElementById('deffolt').onclick = function() //кнопка DEFFOLT - УМЕНЬШЕНИЕ РАДИУСА МЯЧИКА
    {
            click0=click0-0.5; // формула уменьшения размера на 0.5
            if (click0>=1) // если размер мяча >=10, то выполняется условие
            {
                    document.getElementById('sp').setAttribute("radius", click0); //изменение радиуса мяча
            }
  }
}
