$(document).ready(function(){
    $('#button1').on('click',function(){
        document.getElementById('Time').enabled = "true";
    })

    $('#button2').on('click',function(){
        document.getElementById('Time').enabled = "false";
    })

    $('#button3').on('click',function(){
        document.getElementById('Time1').enabled = "true";
    })

    $('#button4').on('click',function(){
        document.getElementById('Time1').enabled = "false";
    })

    $('#button5').on('click',function(){
        document.getElementById('Time').enabled = "true";
        document.getElementById('Time1').enabled = "true";
    })

    $('#button6').on('click',function(){
        document.getElementById('Time').enabled = "false";
        document.getElementById('Time1').enabled = "false";
    })
})