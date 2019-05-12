<X3D>
<Scene id="root">
</Scene>
</X3D>
<script>
 document.onload = function () {
            var interval;
                document.getElementById('btn1').onmouseover = function () {
                        document.getElementById('Tr').setAttribute("scale", "2 2 2");
            }
            document.getElementById('btn1').onmouseout = function () {
                        document.getElementById('Tr').setAttribute("scale", "1 1 1");
            }
            document.getElementById('btn1').onclick = () => {
                interval = setInterval(() => {
                    i = Math.floor(Math.random() * 36);
                    str = document.getElementById('eg').getAttribute("height");
                    arr = str.split(" ");
                    if (parseFloat(arr[i]) > 2) { arr[i]="1.5"; }
                    else if (parseFloat(arr[i]) < -1) { arr[i]="-0.5"; }
                    else arr[i] = (parseFloat(arr[i]) + Math.random()-0.5).toString();
                    document.getElementById('eg').setAttribute("height", arr.join(" "));
                }, 10)
            }
            document.getElementById('stop').onclick = () => {
                clearInterval(interval);
            }
            document.getElementById('btn2').onclick = () => {
                interval = setInterval(() => {
                    i = Math.floor(Math.random() * 7);
                    switch(i) {
                        case 1: rotation = "1 0 0 1.57"; break;
                        case 2: rotation = "0 1 0 1.57"; break;
                        case 3: rotation = "0 0 1 1.57"; break;
                        case 4: rotation = "1 0 0 -1.57"; break;
                        case 5: rotation = "0 1 0 -1.57"; break;
                        case 6: rotation = "0 0 1 -1.57"; break;
                    }
                    document.getElementById('OrCh').setAttribute("set_destination", rotation);

                }, 100)
            }

        }
</script>
