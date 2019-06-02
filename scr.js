    var lastpoint=[0,0,0];
    var C=[0,0];
    var direct=[0,1,0,0];
    var AB=0,AC=0,BC=0;
    var pol=[0,0,0];
    var i=0, t=0, max=0,min=0;
        function move(point) {
          AB=Math.sqrt((point[0]-lastpoint[0])*(point[0]-lastpoint[0])+(point[2]-lastpoint[2])*(point[2]-lastpoint[2]));
          C=[lastpoint[0],lastpoint[2]-1];
          AC=Math.sqrt((C[0]-lastpoint[0])*(C[0]-lastpoint[0])+(C[1]-lastpoint[2])*(C[1]-lastpoint[2]));
          BC=Math.sqrt((C[0]-point[0])*(C[0]-point[0])+(C[1]-point[2])*(C[1]-point[2]));
          if(point[0]<=0){
            direct=[0,1,0,parseFloat(Math.acos((-BC*BC+AC*AC+AB*AB)/(2*AC*AB)))];
          }else{
            direct=[0,1,0,-parseFloat(Math.acos((-BC*BC+AC*AC+AB*AB)/(2*AC*AB)))];
          }
          document.getElementById('DEER').setAttribute('rotation', direct);
          document.getElementById('DeerChaser').setAttribute('set_destination', point);
          lastpoint=point;
        }
      function create() {
        if(t==0){
          if(i>4){
            alert("Полегче! Оленей итак слишком много!");
          }else{
            min=0;
            max=5;
            var s = document.createElement("Transform");
            var b = document.createElement("Inline");
            s.setAttribute("scale", "0.75 0.75 0.75");
            s.setAttribute("rotation", "0 1 0 3.14");
            s.setAttribute("id", String(i));
            if(i%2==0){
              pol=[-i, -3.65,-4];
              s.setAttribute("translation", pol);
            }else{
              pol=[i, -3.65,-4];
              s.setAttribute("translation", pol);
            }
            b.setAttribute("url", "Deer.x3d");
            s.appendChild(b);
            document.getElementById("root").appendChild(s);
            i=i+1;
          }
        }else alert("Олени теперь боятся появляться тут :(");
        }
          function clk() {
            if(t==0){
              min=0;
              max=i;
              for(l=0;l<Math.floor(i/2);l=l+1){
                k=Math.floor(Math.random() * (max - min)) + min;
                var delNode = document.getElementById(String(k));
                delNode.remove();
              }
              i=Math.floor(i/2)-1;
              t=t+1;
          }else alert("Танос устал:(");
        }
        function toggle(){
          document.getElementById('ColorChaser').setAttribute('set_destination', '0');
          document.getElementById('HouseChaser').setAttribute('set_destination', '0 4 0');
      }
