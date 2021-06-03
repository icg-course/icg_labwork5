$(document).ready(function(){
    $('#button1').on('click',function(){
        document.getElementById('all').enabled = "true";
        document.getElementById('all1').enabled = "true";
    })

    $('#button2').on('click',function(){
        document.getElementById('all').enabled = "false";
        document.getElementById('all1').enabled = "false";
    })

    $('#button3').on('click',function(){
        document.getElementsByID('TT').enabled = "true";
    })

    $('#button4').on('click',function(){
        document.getElementsByID('TT').enabled = "false";
        document.getElementsByID('T2').enabled = "false";
    })

})
