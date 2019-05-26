document.onload = function()
{
  var udar = 0;
  var raz = 27;
  var m = 0;
  var z = 0;
  addEventListener("keyup", function(event) 
  {

    if (z == 3) {
     document.getElementById('5_url').setAttribute("url","green.x3d");
     window.alert("Вы справились с багом \n  Поздравляем!" );
     
   }
   if (z == 4) {
    window.alert("Вы справились с багом \n  Остановитесь!" );
    
  }

  if (z == 5) {
    window.alert("Хватит! Вы сделаете только хуже!" );
    
  }

  if (z == 6) {
    window.alert("Я вас предупредил..." );
    
  }

  if (z == 10) {
   document.getElementById('5_url').setAttribute("url","black.x3d");
   window.alert("Ну вот, ты доволен???!!!111" );
   
 }




 if (udar == raz  && m < 1) {
  window.alert('Кажется ваши ' + udar  + " ударов не помогли \n Попробуйme ещё что-нибудь" );
}

if (udar < 15  && m < 1  ) {
 
  if(event.keyCode == 97 && udar < raz ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 45 0, -8 15 12, 0 45 0");
    document.getElementById('time').setAttribute("loop","false");
  }
  
  if(event.keyCode == 98 && udar < raz ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 45 0, 0 15 12, 0 45 0");
    document.getElementById('time').setAttribute("loop","false");
  }
  
  
  if(event.keyCode == 99 && udar < raz ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 45 0, 8 15 12, 0 45 0");
    document.getElementById('time').setAttribute("loop","false");
  }

  if(event.keyCode == 100 && udar < raz ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 45 0, -8 15 4, 0 45 0");
    document.getElementById('time').setAttribute("loop","false");
  }
  
  if(event.keyCode == 101 && udar < raz ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 45 0, 0 15 4, 0 45 0");
    document.getElementById('time').setAttribute("loop","false");
  }
  
  
  if(event.keyCode == 102 && udar < raz ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 45 0, 8 15 4, 0 45 0");
    document.getElementById('time').setAttribute("loop","false");
  }
  
  if(event.keyCode == 103 && udar < raz ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 45 0, -8 15 -4, 0 45 0");
    document.getElementById('time').setAttribute("loop","false");
  }
  
  if(event.keyCode == 104 && udar < raz ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 45 0, 0 15 -4, 0 45 0");
    document.getElementById('time').setAttribute("loop","false");
  }
  
  
  if(event.keyCode == 105 && udar < raz ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 45 0, 8 15 -4, 0 45 0");
    document.getElementById('time').setAttribute("loop","false");
  }
}

if(udar == 15 ){
  document.getElementById('5_pos').setAttribute("keyValue",'0 0 0,0 0 0,0 0 0,0 0 0,0 0 0,0 0 0,0 0 0,0 0 0,0 0 0,0 0 0,0 0 0');
  document.getElementById('5').setAttribute("scale","15,15,15");
  document.getElementById('molot').setAttribute("translation",'0 60 0'); 
}






if (udar >= 15  && m < 1  && udar < raz ) {
  if(event.keyCode == 97 || event.keyCode == 98  || event.keyCode == 99   || event.keyCode == 100   || event.keyCode == 101   || event.keyCode == 102   || event.keyCode == 103  || event.keyCode == 104  || event.keyCode == 105  ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 60 20, 0 55 5, 0 60 20");
    document.getElementById('time').setAttribute("loop","false");
  }
  

  if (udar % 2 == 0) {
   document.getElementById('5_url').setAttribute("url","gray.x3d");
 }
 else {
  document.getElementById('5_url').setAttribute("url","andr.x3d");
}
}







if (udar >= raz  && m >= 1 && z < 10) {
  z = z + 1;
  if(event.keyCode == 97  || event.keyCode == 98  || event.keyCode == 99   || event.keyCode == 100   || event.keyCode == 101   || event.keyCode == 102   || event.keyCode == 103  || event.keyCode == 104  || event.keyCode == 105  ){
    udar = udar + 1;
    document.getElementById('time').setAttribute("loop","true");
    document.getElementById('molot_or').setAttribute("keyValue","1 0 0 0,1 0 0 -1.57,1 0 0 0");
    document.getElementById('molot_po').setAttribute("keyValue","0 30 50, 0 55 25, 0 30 50");
    document.getElementById('time').setAttribute("loop","false");
  }
  


}














});
document.getElementById('b1').onclick = function() {
 window.alert('Бей молотком с помощью клавиш NUM PAD \n И РАЗБЕРИСЬ УЖЕ С ЭТИМИ БАГАМИ!');
}


document.getElementById('b2').onclick = function() {
 if (udar < raz && m < 1 ) {
  window.alert('Полегче бой  \n  Попробуй разобраться с ними так!');}
  else {
    m = m + 1 ;
    document.getElementById('molot').setAttribute("scale","5 5 5")
    document.getElementById('molot').setAttribute("translation","0 30 50");


  }
  



}




}