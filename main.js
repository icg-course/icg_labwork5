$(document).ready(function(){
    $('#button1').on('click',function(){
        document.getElementById('Time').enabled = "true";
    })

    $('#button2').on('click',function(){
        document.getElementById('Time').enabled = "false";
    })

    $('#button3').on('click',function(){
        document.getElementById('Time3').enabled = "true";
    })

    $('#button4').on('click',function(){
        document.getElementById('Time3').enabled = "false";
    })
})
