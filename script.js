const chai = document.getElementById("Tea");

chai.onmouseover = function()
{
    //Если навели на чайник, то изменить его цвет на красный
    document.getElementById("ch").setAttribute("diffuseColor",'#ff0000');
    document.getElementById("nos").setAttribute("diffuseColor",'#ff0000');
    document.getElementById("ruch").setAttribute("diffuseColor",'#ff0000');
}
chai.onmouseout = function()
{
    //Если убрали курсор с чайника, то восстановить его цвет
    document.getElementById("ch").setAttribute("diffuseColor",'#303030');
    document.getElementById("nos").setAttribute("diffuseColor",'#303030');
    document.getElementById("ruch").setAttribute("diffuseColor",'#303030');
}
let flag = 0;
document.getElementById("Shapka").onclick = function()
{
    //Проверка на включенность/выключенность лампы и его включение/выключение
    if(!flag)
    {
        document.getElementById("point").setAttribute("radius", 0);
        flag = 1;
    }
    else
    {
        document.getElementById("point").setAttribute("radius", 1);
        flag = 0;
    }
}

chai.onclick = function()
{
    changePosition(chai);
}
let newsc = 0;
async function changePosition(e)
{
    //Сначала переместить чайник вверх, потом на обратную позицию
    for(let i = 0; i < 100; i++)
    {
        e.setAttribute("translation", "0 " + newsc + " 0");
        newsc+=0.01;
        await sleep(10);
    }
    for(let i = 0; i < 100; i++)
    {
        e.setAttribute("translation", "0 " + newsc + " 0");
        newsc-=0.01;
        await sleep(10);
    }
}
function sleep(ms)
{
    //Функция паузы для плавной анимации
    return new Promise(resolve=>setInterval(resolve,ms)); 
}