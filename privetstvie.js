window.alert("Лаба не привязана к сюжетной линии, представляя собой виртуальную песочницу, в которой игрок может управлять сценой по своему желанию и усмотрению.");
window.alert("Нажимайте на циферки клавиатуры для смены обстановки. Зёленый ромб делает приятно вашим ушам. Фиолетовый показывает, что души у вас нет. Измени что-нибудь, прежде, чем проверить.");
window.alert("Ну где там лаба, давай показывай уже");
document.onload = function()
{
  addEventListener("keydown", function(event) //обработка нажатия кнопок управления
  {
    if (event.keyCode == 49)  //единичка для стен
    {
      var a = Math.floor(Math.random() * 100) / 100;
      var b = Math.floor(Math.random() * 100) / 100;
      var c = Math.floor(Math.random() * 100) / 100;
      var color_rand = String(a + ' ' + b + ' ' + c);
      if(Math.floor(Math.random() * 2) % 2 == 0)
        document.getElementById('stena1').setAttribute("diffuseColor", color_rand);
      else
        document.getElementById('stena2').setAttribute("diffuseColor", color_rand);
    }
    if (event.keyCode == 50)  //двоечка для картины
    {
      var a = Math.floor(Math.random() * 8) + 1;
      var kart_rand = String("ft" + a + ".jpg");
        document.getElementById('foto').setAttribute("url", kart_rand);
    }
     if (event.keyCode == 51)  //троечка для пола
    {
      var a = Math.floor(Math.random() * 3) + 1;
      var pol_rand = String("чистый-кирпич_" + a + ".jpg");
        document.getElementById('napol').setAttribute("url", pol_rand);
    }
    if (event.keyCode == 52)  //четверочка для телепуткера
    {
      var a = Math.floor(Math.random() * 6) + 1;
      var TV_rand = String("telepuk" + a + ".jpg");
        document.getElementById('kartinka').setAttribute("url", TV_rand);
    }
    if (event.keyCode == 53)  //пятерочка для ковра
    {
      var a = Math.floor(Math.random() * 2) + 1;
      var kov_rand = String("ковры" + a + ".jpg");
        document.getElementById('kovri').setAttribute("url", kov_rand);
    }

    var k = 0
    document.getElementById('b1').onclick = function() {
    if (k == 30) {
          document.getElementById('goodrandom').setAttribute("url",'W6IhU8cqNgQ.jpg');
      }
          if (k > 30) {
          window.alert("Ладно, давайте зачетку");
      }
        k = k + 1 ;

  }
    var audio = new Audio();
    document.getElementById('b3').onclick = function() {
    if(!audio.autoplay)
    {
      audio.src = 'kv.mp3';
      audio.autoplay = true;
      audio.loop = false;
    }}
    var audio = new Audio();
    document.getElementById('b4').onclick = function() {
    if(audio.autoplay)
    {
      audio.src = 'kv.mp3';
      audio.autoplay = false;
      audio.loop = false;
    }}
  });
}

