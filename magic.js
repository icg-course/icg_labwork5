var i = 0;
//document.onload = function()
function create(){
  while(i < 5){
    var t = document.createElement("Transform");
    t.setAttribute("translation", "-5 0 0");
    var s = document.createElement("Shape");
    t.appendChild(s);
    var b = document.createElement("Box");
    b.setAttribute("size", "2 2 2");
    b.setAttribute("id", "MyBox");
    s.appendChild(b);
    var a = document.createElement("Appearance");
    b.appendChild(a);
    var m = document.createElement("Material");
    m.setAttribute("diffuseColor", "1 1 1");
    a.appendChild(m);
    if(i == 1){
      t.setAttribute("translation", "5 0 0");
    }
    if(i == 2){
      t.setAttribute("translation", "0 0 -5");
    }
    if(i == 3){
      t.setAttribute("translation", "0 0 5");
    }
    document.getElementById("root").appendChild(t);
    i++;
  }
}
