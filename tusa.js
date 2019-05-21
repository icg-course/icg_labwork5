 document.onload = function(){
 document.getElementById('b1').onclick = () => {
     document.getElementById('c1').setAttribute("transparency", "0.2");
     document.getElementById('c3').setAttribute("transparency", "0.2");
     document.getElementById('c5').setAttribute("transparency", "0.3");
     document.getElementById('c7').setAttribute("transparency", "0.2");
     document.getElementById('c9').setAttribute("transparency", "0.3");
     interval = setInterval(() => {
        i = Math.floor(Math.random() * 45);
        switch(i) {
            case 1: translation = document.getElementById('c').setAttribute("translation", "-5 0.01 5"); break;
            case 2: translation = document.getElementById('c').setAttribute("translation", "-5 0.01 0"); break;
            case 3: translation = document.getElementById('c').setAttribute("translation", "-5 0.01 -5"); break;
            case 4: translation = document.getElementById('c').setAttribute("translation", "5 0.01 5"); break;
            case 5: translation = document.getElementById('c').setAttribute("translation", "5 0.01 -5"); break;
            case 6: translation = document.getElementById('c').setAttribute("translation", "0 0.01 5"); break;
            case 7: translation = document.getElementById('c').setAttribute("translation", "5 0.01 0"); break;
            case 8: translation = document.getElementById('c').setAttribute("translation", "0 0.01 -5"); break;
            case 9: translation = document.getElementById('c').setAttribute("translation", "0 0.01 0"); break;
            case 10: translation = document.getElementById('c2').setAttribute("translation", "-5 0.01 5"); break;
            case 11: translation = document.getElementById('c2').setAttribute("translation", "-5 0.01 0"); break;
            case 12: translation = document.getElementById('c2').setAttribute("translation", "-5 0.01 -5"); break;
            case 13: translation = document.getElementById('c2').setAttribute("translation", "5 0.01 5"); break;
            case 14: translation = document.getElementById('c2').setAttribute("translation", "5 0.01 -5"); break;
            case 15: translation = document.getElementById('c2').setAttribute("translation", "0 0.01 5"); break;
            case 16: translation = document.getElementById('c2').setAttribute("translation", "5 0.01 0"); break;
            case 17: translation = document.getElementById('c2').setAttribute("translation", "0 0.01 -5"); break;
            case 18: translation = document.getElementById('c2').setAttribute("translation", "0 0.01 0"); break;
            case 19: translation = document.getElementById('c4').setAttribute("translation", "-5 0.01 5"); break;
            case 20: translation = document.getElementById('c4').setAttribute("translation", "-5 0.01 0"); break;
            case 21: translation = document.getElementById('c4').setAttribute("translation", "-5 0.01 -5"); break;
            case 22: translation = document.getElementById('c4').setAttribute("translation", "5 0.01 5"); break;
            case 23: translation = document.getElementById('c4').setAttribute("translation", "5 0.01 -5"); break;
            case 24: translation = document.getElementById('c4').setAttribute("translation", "0 0.01 5"); break;
            case 25: translation = document.getElementById('c4').setAttribute("translation", "5 0.01 0"); break;
            case 26: translation = document.getElementById('c4').setAttribute("translation", "0 0.01 -5"); break;
            case 27: translation = document.getElementById('c4').setAttribute("translation", "0 0.01 0"); break;
            case 28: translation = document.getElementById('c6').setAttribute("translation", "-5 0.01 5"); break;
            case 29: translation = document.getElementById('c6').setAttribute("translation", "-5 0.01 0"); break;
            case 30: translation = document.getElementById('c6').setAttribute("translation", "-5 0.01 -5"); break;
            case 31: translation = document.getElementById('c6').setAttribute("translation", "5 0.01 5"); break;
            case 32: translation = document.getElementById('c6').setAttribute("translation", "5 0.01 -5"); break;
            case 33: translation = document.getElementById('c6').setAttribute("translation", "0 0.01 5"); break;
            case 34: translation = document.getElementById('c6').setAttribute("translation", "5 0.01 0"); break;
            case 35: translation = document.getElementById('c6').setAttribute("translation", "0 0.01 -5"); break;
            case 36: translation = document.getElementById('c6').setAttribute("translation", "0 0.01 0"); break;
            case 37: translation = document.getElementById('c8').setAttribute("translation", "-5 0.01 5"); break;
            case 38: translation = document.getElementById('c8').setAttribute("translation", "-5 0.01 0"); break;
            case 39: translation = document.getElementById('c8').setAttribute("translation", "-5 0.01 -5"); break;
            case 40: translation = document.getElementById('c8').setAttribute("translation", "5 0.01 5"); break;
            case 41: translation = document.getElementById('c8').setAttribute("translation", "5 0.01 -5"); break;
            case 42: translation = document.getElementById('c8').setAttribute("translation", "0 0.01 5"); break;
            case 43: translation = document.getElementById('c8').setAttribute("translation", "5 0.01 0"); break;
            case 44: translation = document.getElementById('c8').setAttribute("translation", "0 0.01 -5"); break;
            case 45: translation = document.getElementById('c8').setAttribute("translation", "0 0.01 0"); break;
        }
        document.getElementById('pos').setAttribute("toField", translation);

    }, 70)

}
document.getElementById('b2').onclick = () => {
   document.getElementById("hit").setAttribute("keyValue", "0 1.5 0, 0 0 0, 0 0 0, 0 0 0");
   document.getElementById("hit1").setAttribute("keyValue", "0 1.6 0, 0 0 0, 0 0 0, 0 0 0");
   document.getElementById("hit2").setAttribute("keyValue", "0 1.4 0, 0 0 0, 0 0 0, 0 0 0");
   document.getElementById("hit3").setAttribute("keyValue", "0 1.5 0, 0 0 0, 0 0 0, 0 0 0");
   document.getElementById("hit4").setAttribute("keyValue", "0 1.6 0, 0 0 0, 0 0 0, 0 0 0");
   document.getElementById("hit5").setAttribute("keyValue", "0 1 0, 0 0 0, 0 0 0, 0 0 0");
   document.getElementById("hit6").setAttribute("keyValue", "0 1.5 0, 0 0 0, 0 0 0, 0 0 0");
   document.getElementById("hit7").setAttribute("keyValue", "0 1.6 0, 0 0 0, 0 0 0, 0 0 0");
}
document.getElementById('b2').onmouseout = function () {
    document.getElementById("Tr").setAttribute("scale", "0.1 0.1 0.1");
    document.getElementById("Tr1").setAttribute("scale", "0.1 0.1 0.1");
    document.getElementById("Tr2").setAttribute("scale", "0.1 0.1 0.1");
    document.getElementById("Tr3").setAttribute("scale", "0.15 0.15 0.15");
    document.getElementById("Tr4").setAttribute("scale", "0.1 0.1 0.1");
    document.getElementById("Tr5").setAttribute("scale", "0.1 0.1 0.1");
    document.getElementById("Tr6").setAttribute("scale", "0.1 0.1 0.1");
    document.getElementById("Tr7").setAttribute("scale", "0.1 0.1 0.1");
}
document.getElementById('b2').onmouseover = function () {
    document.getElementById("Tr").setAttribute("scale", "0.12 0.12 0.12");
    document.getElementById("Tr1").setAttribute("scale", "0.12 0.12 0.12");
    document.getElementById("Tr2").setAttribute("scale", "0.12 0.12 0.12");
    document.getElementById("Tr3").setAttribute("scale", "0.2 0.2 0.2");
    document.getElementById("Tr4").setAttribute("scale", "0.12 0.12 0.12");
    document.getElementById("Tr5").setAttribute("scale", "0.12 0.12 0.12");
    document.getElementById("Tr6").setAttribute("scale", "0.12 0.12 0.12");
    document.getElementById("Tr7").setAttribute("scale", "0.12 0.12 0.12");
}

document.getElementById('b3').onclick = () => {
 window.alert('Не сегодня. СЕГОДНЯ У НАС ТУСА!');
}  
document.getElementById('b4').onclick = function() { 
   document.getElementById('c1').setAttribute("transparency", "1");
   document.getElementById('c3').setAttribute("transparency", "1");
   document.getElementById('c5').setAttribute("transparency", "1");
   document.getElementById('c7').setAttribute("transparency", "1");
   document.getElementById('c9').setAttribute("transparency", "1");
}
document.getElementById('b5').onclick = function(){
    document.getElementById("hit").setAttribute("keyValue", "0 0 0, 0 0 0, 0 0 0, 0 0 0");
    document.getElementById("hit1").setAttribute("keyValue", "0 0 0, 0 0 0, 0 0 0, 0 0 0");
    document.getElementById("hit2").setAttribute("keyValue", "0 0 0, 0 0 0, 0 0 0, 0 0 0");
    document.getElementById("hit3").setAttribute("keyValue", "0 0 0, 0 0 0, 0 0 0, 0 0 0");
    document.getElementById("hit4").setAttribute("keyValue", "0 0 0, 0 0 0, 0 0 0, 0 0 0");
    document.getElementById("hit5").setAttribute("keyValue", "0 0 0, 0 0 0, 0 0 0, 0 0 0");
    document.getElementById("hit6").setAttribute("keyValue", "0 0 0, 0 0 0, 0 0 0, 0 0 0");
    document.getElementById("hit7").setAttribute("keyValue", "0 0 0, 0 0 0, 0 0 0, 0 0 0");
}
}