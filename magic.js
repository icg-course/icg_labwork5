var line = 0, i = 0;
function move(point){
  line = 0;
  i = 0;
  while(i < 1){
  switch (line) {
    case 0:
      if(point[2] > -5){
        line = 1;
      }
      else if(point[2] > -15){
          line = 2;
        }else if (point[2] > -25){
              line = 3;
            }else if(point[2] > -35){
                  line = 4;
                }else if(point[2] > -45){
                      line = 5;
                    }else if(point[2] > -55){
                          line = 6;
                        }else if(point[2] > -65){
                              line = 7;
                            }else if(point[2] > -75){
                                  line = 8;
                              }
      break;
      case 1:
        if(point[0] < -35){
          point = [-40,0,0];
          i++;
        }else if (point[0] < -25) {
          point = [-30,0,0];
          i++;
        }else if (point[0] < -15) {
          point = [-20,0,0];
          i++;
        }else if (point[0] < -5) {
          point = [-10,0,0];
          i++;
        }else if (point[0] < 5) {
          point = [0,0,0];
          i++;
        }else if (point[0] < 15) {
          point = [10,0,0];
          i++;
        }else if (point[0] < 25) {
          point = [20,0,0];
          i++;
        }else if (point[0] < 35) {
          point = [30,0,0];
          i++;
        }
      break;
      case 2:
        if(point[0] < -35){
          point = [-40,0,-10];
          i++;
        }else if(point[0] < -25){
          point = [-30,0,-10];
          i++;
        }else if(point[0] < -15){
          point = [-20,0,-10];
          i++;
        }else if(point[0] < -5){
          point = [-10,0,-10];
          i++;
        }else if(point[0] < 5){
          point = [0,0,-10];
          i++;
        }else if(point[0] < 15){
          point = [10,0,-10];
          i++;
        }else if(point[0] < 25){
          point = [20,0,-10];
          i++;
        }else if(point[0] < 35){
          point = [30,0,-10];
          i++;
        }
      break;
      case 3:
        if(point[0] < -35){
          point = [-40,0,-20];
          i++;
        }else if(point[0] < -25){
          point = [-30,0,-20];
          i++;
        }else if(point[0] < -15){
          point = [-20,0,-20];
          i++;
        }else if(point[0] < -5){
          point = [-10,0,-20];
          i++;
        }else if(point[0] < 5){
          point = [0,0,-20];
          i++;
        }else if(point[0] < 15){
          point = [10,0,-20];
          i++;
        }else if(point[0] < 25){
          point = [20,0,-20];
          i++;
        }else if(point[0] < 35){
          point = [30,0,-20];
          i++;
        }
      break;
      case 4:
        if(point[0] < -35){
          point = [-40,0,-30];
          i++;
        }else if(point[0] < -25){
          point = [-30,0,-30];
          i++;
        }else if(point[0] < -15){
          point = [-20,0,-30];
          i++;
        }else if(point[0] < -5){
          point = [-10,0,-30];
          i++;
        }else if(point[0] < 5){
          point = [0,0,-30];
          i++;
        }else if(point[0] < 15){
          point = [10,0,-30];
          i++;
        }else if(point[0] < 25){
          point = [20,0,-30];
          i++;
        }else if(point[0] < 35){
          point = [30,0,-30];
          i++;
        }
      break;
      case 5:
        if(point[0] < -35){
          point = [-40,0,-40];
          i++;
        }else if(point[0] < -25){
          point = [-30,0,-40];
          i++;
        }else if(point[0] < -15){
          point = [-20,0,-40];
          i++;
        }else if(point[0] < -5){
          point = [-10,0,-40];
          i++;
        }else if(point[0] < 5){
          point = [0,0,-40];
          i++;
        }else if(point[0] < 15){
          point = [10,0,-40];
          i++;
        }else if(point[0] < 25){
          point = [20,0,-40];
          i++;
        }else if(point[0] < 35){
          point = [30,0,-40];
          i++;
        }
      break;
      case 6:
      if(point[0] < -35){
        point = [-40,0,-50];
        i++;
      }else if(point[0] < -25){
        point = [-30,0,-50];
        i++;
      }else if(point[0] < -15){
        point = [-20,0,-50];
        i++;
      }else if(point[0] < -5){
        point = [-10,0,-50];
        i++;
      }else if(point[0] < 5){
        point = [0,0,-50];
        i++;
      }else if(point[0] < 15){
        point = [10,0,-50];
        i++;
      }else if(point[0] < 25){
        point = [20,0,-50];
        i++;
      }else if(point[0] < 35){
        point = [30,0,-50];
        i++;
      }
      break;
      case 7:
      if(point[0] < -35){
        point = [-40,0,-60];
        i++;
      }else if(point[0] < -25){
        point = [-30,0,-60];
        i++;
      }else if(point[0] < -15){
        point = [-20,0,-60];
        i++;
      }else if(point[0] < -5){
        point = [-10,0,-60];
        i++;
      }else if(point[0] < 5){
        point = [0,0,-60];
        i++;
      }else if(point[0] < 15){
        point = [10,0,-60];
        i++;
      }else if(point[0] < 25){
        point = [20,0,-60];
        i++;
      }else if(point[0] < 35){
        point = [30,0,-60];
        i++;
      }
      break;
      case 8:
      if(point[0] < -35){
        point = [-40,0,-70];
        i++;
      }else if(point[0] < -25){
        point = [-30,0,-70];
        i++;
      }else if(point[0] < -15){
        point = [-20,0,-70];
        i++;
      }else if(point[0] < -5){
        point = [-10,0,-70];
        i++;
      }else if(point[0] < 5){
        point = [0,0,-70];
        i++;
      }else if(point[0] < 15){
        point = [10,0,-70];
        i++;
      }else if(point[0] < 25){
        point = [20,0,-70];
        i++;
      }else if(point[0] < 35){
        point = [30,0,-70];
        i++;
      }
      break;
    default:

  }
}
  point[1] +=5.2;
  document.getElementById('peskaChaser').setAttribute('set_destination', point);
}
///////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
function coloA1(q) {
  if(q == 1){
  var col = document.getElementById('cA1');
  }if(q == 3){
  var col = document.getElementById('cA3');
  }if(q == 5){
  var col = document.getElementById('cA5');
  }if(q == 7){
  var col = document.getElementById('cA7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorA1(q) {
  if(q == 1){
  var col = document.getElementById('cA1');
  }if(q == 3){
  var col = document.getElementById('cA3');
  }if(q == 5){
  var col = document.getElementById('cA5');
  }if(q == 7){
  var col = document.getElementById('cA7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorAA1(q) {
  if(q == 1){
  var col = document.getElementById('cA1');
  }if(q == 3){
  var col = document.getElementById('cA3');
  }if(q == 5){
  var col = document.getElementById('cA5');
  }if(q == 7){
  var col = document.getElementById('cA7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}

function coloA2(q) {
  if(q == 2){
  var col = document.getElementById('cA2');
}if(q == 4){
  var col = document.getElementById('cA4');
}if(q == 6){
  var col = document.getElementById('cA6');
}if(q == 8){
  var col = document.getElementById('cA8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorA2(q) {
  if(q == 2){
  var col = document.getElementById('cA2');
}if(q == 4){
  var col = document.getElementById('cA4');
}if(q == 6){
  var col = document.getElementById('cA6');
}if(q == 8){
  var col = document.getElementById('cA8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorAA2(q) {
  if(q == 2){
  var col = document.getElementById('cA2');
}if(q == 4){
  var col = document.getElementById('cA4');
}if(q == 6){
  var col = document.getElementById('cA6');
}if(q == 8){
  var col = document.getElementById('cA8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
//////////////////////////////////////////////////////////////////////////////////////////////////BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
function coloB1(q) {
  if(q == 1){
  var col = document.getElementById('cB1');
  }if(q == 3){
  var col = document.getElementById('cB3');
  }if(q == 5){
  var col = document.getElementById('cB5');
  }if(q == 7){
  var col = document.getElementById('cB7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorB1(q) {
  if(q == 1){
  var col = document.getElementById('cB1');
  }if(q == 3){
  var col = document.getElementById('cB3');
  }if(q == 5){
  var col = document.getElementById('cB5');
  }if(q == 7){
  var col = document.getElementById('cB7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorBB1(q) {
  if(q == 1){
  var col = document.getElementById('cB1');
  }if(q == 3){
  var col = document.getElementById('cB3');
  }if(q == 5){
  var col = document.getElementById('cB5');
  }if(q == 7){
  var col = document.getElementById('cB7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}

function coloB2(q) {
  if(q == 2){
  var col = document.getElementById('cB2');
}if(q == 4){
  var col = document.getElementById('cB4');
}if(q == 6){
  var col = document.getElementById('cB6');
}if(q == 8){
  var col = document.getElementById('cB8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorB2(q) {
  if(q == 2){
  var col = document.getElementById('cB2');
}if(q == 4){
  var col = document.getElementById('cB4');
}if(q == 6){
  var col = document.getElementById('cB6');
}if(q == 8){
  var col = document.getElementById('cB8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorBB2(q) {
  if(q == 2){
  var col = document.getElementById('cB2');
}if(q == 4){
  var col = document.getElementById('cB4');
}if(q == 6){
  var col = document.getElementById('cB6');
}if(q == 8){
  var col = document.getElementById('cB8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
//////////////////////////////////////////////////////////////////////////////////////////////////CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
function coloC1(q) {
  if(q == 1){
  var col = document.getElementById('cC1');
  }if(q == 3){
  var col = document.getElementById('cC3');
  }if(q == 5){
  var col = document.getElementById('cC5');
  }if(q == 7){
  var col = document.getElementById('cC7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorC1(q) {
  if(q == 1){
  var col = document.getElementById('cC1');
  }if(q == 3){
  var col = document.getElementById('cC3');
  }if(q == 5){
  var col = document.getElementById('cC5');
  }if(q == 7){
  var col = document.getElementById('cC7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorCC1(q) {
  if(q == 1){
  var col = document.getElementById('cC1');
  }if(q == 3){
  var col = document.getElementById('cC3');
  }if(q == 5){
  var col = document.getElementById('cC5');
  }if(q == 7){
  var col = document.getElementById('cC7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}

function coloC2(q) {
  if(q == 2){
  var col = document.getElementById('cC2');
}if(q == 4){
  var col = document.getElementById('cC4');
}if(q == 6){
  var col = document.getElementById('cC6');
}if(q == 8){
  var col = document.getElementById('cC8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorC2(q) {
  if(q == 2){
  var col = document.getElementById('cC2');
}if(q == 4){
  var col = document.getElementById('cC4');
}if(q == 6){
  var col = document.getElementById('cC6');
}if(q == 8){
  var col = document.getElementById('cC8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorCC2(q) {
  if(q == 2){
  var col = document.getElementById('cC2');
}if(q == 4){
  var col = document.getElementById('cC4');
}if(q == 6){
  var col = document.getElementById('cC6');
}if(q == 8){
  var col = document.getElementById('cC8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
function coloD1(q) {
  if(q == 1){
  var col = document.getElementById('cD1');
  }if(q == 3){
  var col = document.getElementById('cD3');
  }if(q == 5){
  var col = document.getElementById('cD5');
  }if(q == 7){
  var col = document.getElementById('cD7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorD1(q) {
  if(q == 1){
  var col = document.getElementById('cD1');
  }if(q == 3){
  var col = document.getElementById('cD3');
  }if(q == 5){
  var col = document.getElementById('cD5');
  }if(q == 7){
  var col = document.getElementById('cD7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorDD1(q) {
  if(q == 1){
  var col = document.getElementById('cD1');
  }if(q == 3){
  var col = document.getElementById('cD3');
  }if(q == 5){
  var col = document.getElementById('cD5');
  }if(q == 7){
  var col = document.getElementById('cD7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}

function coloD2(q) {
  if(q == 2){
  var col = document.getElementById('cD2');
}if(q == 4){
  var col = document.getElementById('cD4');
}if(q == 6){
  var col = document.getElementById('cD6');
}if(q == 8){
  var col = document.getElementById('cD8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorD2(q) {
  if(q == 2){
  var col = document.getElementById('cD2');
}if(q == 4){
  var col = document.getElementById('cD4');
}if(q == 6){
  var col = document.getElementById('cD6');
}if(q == 8){
  var col = document.getElementById('cD8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorDD2(q) {
  if(q == 2){
  var col = document.getElementById('cD2');
}if(q == 4){
  var col = document.getElementById('cD4');
}if(q == 6){
  var col = document.getElementById('cD6');
}if(q == 8){
  var col = document.getElementById('cD8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
////////////////////////////////////////////////////////////////////////////////////////////////////EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
function coloE1(q) {
  if(q == 1){
  var col = document.getElementById('cE1');
  }if(q == 3){
  var col = document.getElementById('cE3');
  }if(q == 5){
  var col = document.getElementById('cE5');
  }if(q == 7){
  var col = document.getElementById('cE7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorE1(q) {
  if(q == 1){
  var col = document.getElementById('cE1');
  }if(q == 3){
  var col = document.getElementById('cE3');
  }if(q == 5){
  var col = document.getElementById('cE5');
  }if(q == 7){
  var col = document.getElementById('cE7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorEE1(q) {
  if(q == 1){
  var col = document.getElementById('cE1');
  }if(q == 3){
  var col = document.getElementById('cE3');
  }if(q == 5){
  var col = document.getElementById('cE5');
  }if(q == 7){
  var col = document.getElementById('cE7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}

function coloE2(q) {
  if(q == 2){
  var col = document.getElementById('cE2');
}if(q == 4){
  var col = document.getElementById('cE4');
}if(q == 6){
  var col = document.getElementById('cE6');
}if(q == 8){
  var col = document.getElementById('cE8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorE2(q) {
  if(q == 2){
  var col = document.getElementById('cE2');
}if(q == 4){
  var col = document.getElementById('cE4');
}if(q == 6){
  var col = document.getElementById('cE6');
}if(q == 8){
  var col = document.getElementById('cE8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorEE2(q) {
  if(q == 2){
  var col = document.getElementById('cE2');
}if(q == 4){
  var col = document.getElementById('cE4');
}if(q == 6){
  var col = document.getElementById('cE6');
}if(q == 8){
  var col = document.getElementById('cE8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
function coloF1(q) {
  if(q == 1){
  var col = document.getElementById('cF1');
  }if(q == 3){
  var col = document.getElementById('cF3');
  }if(q == 5){
  var col = document.getElementById('cF5');
  }if(q == 7){
  var col = document.getElementById('cF7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorF1(q) {
  if(q == 1){
  var col = document.getElementById('cF1');
  }if(q == 3){
  var col = document.getElementById('cF3');
  }if(q == 5){
  var col = document.getElementById('cF5');
  }if(q == 7){
  var col = document.getElementById('cF7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorFF1(q) {
  if(q == 1){
  var col = document.getElementById('cF1');
  }if(q == 3){
  var col = document.getElementById('cF3');
  }if(q == 5){
  var col = document.getElementById('cF5');
  }if(q == 7){
  var col = document.getElementById('cF7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}

function coloF2(q) {
  if(q == 2){
  var col = document.getElementById('cF2');
}if(q == 4){
  var col = document.getElementById('cF4');
}if(q == 6){
  var col = document.getElementById('cF6');
}if(q == 8){
  var col = document.getElementById('cF8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorF2(q) {
  if(q == 2){
  var col = document.getElementById('cF2');
}if(q == 4){
  var col = document.getElementById('cF4');
}if(q == 6){
  var col = document.getElementById('cF6');
}if(q == 8){
  var col = document.getElementById('cF8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorFF2(q) {
  if(q == 2){
  var col = document.getElementById('cF2');
}if(q == 4){
  var col = document.getElementById('cF4');
}if(q == 6){
  var col = document.getElementById('cF6');
}if(q == 8){
  var col = document.getElementById('cF8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
function coloG1(q) {
  if(q == 1){
  var col = document.getElementById('cG1');
  }if(q == 3){
  var col = document.getElementById('cG3');
  }if(q == 5){
  var col = document.getElementById('cG5');
  }if(q == 7){
  var col = document.getElementById('cG7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorG1(q) {
  if(q == 1){
  var col = document.getElementById('cG1');
  }if(q == 3){
  var col = document.getElementById('cG3');
  }if(q == 5){
  var col = document.getElementById('cG5');
  }if(q == 7){
  var col = document.getElementById('cG7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorGG1(q) {
  if(q == 1){
  var col = document.getElementById('cG1');
  }if(q == 3){
  var col = document.getElementById('cG3');
  }if(q == 5){
  var col = document.getElementById('cG5');
  }if(q == 7){
  var col = document.getElementById('cG7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}

function coloG2(q) {
  if(q == 2){
  var col = document.getElementById('cG2');
}if(q == 4){
  var col = document.getElementById('cG4');
}if(q == 6){
  var col = document.getElementById('cG6');
}if(q == 8){
  var col = document.getElementById('cG8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorG2(q) {
  if(q == 2){
  var col = document.getElementById('cG2');
}if(q == 4){
  var col = document.getElementById('cG4');
}if(q == 6){
  var col = document.getElementById('cG6');
}if(q == 8){
  var col = document.getElementById('cG8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorGG2(q) {
  if(q == 2){
  var col = document.getElementById('cG2');
}if(q == 4){
  var col = document.getElementById('cG4');
}if(q == 6){
  var col = document.getElementById('cG6');
}if(q == 8){
  var col = document.getElementById('cG8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
function coloH1(q) {
  if(q == 1){
  var col = document.getElementById('cH1');
  }if(q == 3){
  var col = document.getElementById('cH3');
  }if(q == 5){
  var col = document.getElementById('cH5');
  }if(q == 7){
  var col = document.getElementById('cH7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}
function colorH1(q) {
  if(q == 1){
  var col = document.getElementById('cH1');
  }if(q == 3){
  var col = document.getElementById('cH3');
  }if(q == 5){
  var col = document.getElementById('cH5');
  }if(q == 7){
  var col = document.getElementById('cH7');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorHH1(q) {
  if(q == 1){
  var col = document.getElementById('cH1');
  }if(q == 3){
  var col = document.getElementById('cH3');
  }if(q == 5){
  var col = document.getElementById('cH5');
  }if(q == 7){
  var col = document.getElementById('cH7');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 1 + " " + 1);
}

function coloH2(q) {
  if(q == 2){
  var col = document.getElementById('cH2');
}if(q == 4){
  var col = document.getElementById('cH4');
}if(q == 6){
  var col = document.getElementById('cH6');
}if(q == 8){
  var col = document.getElementById('cH8');
  }
  col.setAttribute("diffuseColor", " " + 1 + " " + 0 + " " + 0);
  sleep(10000);
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
function colorH2(q) {
  if(q == 2){
  var col = document.getElementById('cH2');
}if(q == 4){
  var col = document.getElementById('cH4');
}if(q == 6){
  var col = document.getElementById('cH6');
}if(q == 8){
  var col = document.getElementById('cH8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 1 + " " + 0);
}
function colorHH2(q) {
  if(q == 2){
  var col = document.getElementById('cH2');
}if(q == 4){
  var col = document.getElementById('cH4');
}if(q == 6){
  var col = document.getElementById('cH6');
}if(q == 8){
  var col = document.getElementById('cH8');
  }
  col.setAttribute("diffuseColor", " " + 0 + " " + 0 + " " + 0);
}
