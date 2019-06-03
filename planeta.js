document.onload = function(){
  var batton = true;
  var audio = new Audio();
  var inc= 0.1;
  //var stamp = document.getElementById('id_n_s').getAttribute("time");
  document.getElementById('butt1').onclick = () =>{
    if(audio.autoplay)
    {
      audio.src = 'initialD.mp3';
      audio.autoplay = false;
      audio.loop = false;
    }
      document.getElementById('id_me_s').setAttribute("enabled", !batton);
      document.getElementById('id_v_s').setAttribute("enabled", !batton);
      document.getElementById('id_e_s').setAttribute("enabled", !batton);
      document.getElementById('id_m_s').setAttribute("enabled", !batton);
      document.getElementById('id_j_s').setAttribute("enabled", !batton);
      document.getElementById('id_s_s').setAttribute("enabled", !batton);
      document.getElementById('id_u_s').setAttribute("enabled", !batton);
      document.getElementById('id_n_s').setAttribute("enabled", !batton);
      document.getElementById('id_me_s').setAttribute("loop", !batton);
      document.getElementById('id_v_s').setAttribute("loop", !batton);
      document.getElementById('id_e_s').setAttribute("loop", !batton);
      document.getElementById('id_m_s').setAttribute("loop", !batton);
      document.getElementById('id_j_s').setAttribute("loop", !batton);
      document.getElementById('id_s_s').setAttribute("loop", !batton);
      document.getElementById('id_u_s').setAttribute("loop", !batton);
      document.getElementById('id_n_s').setAttribute("loop", !batton);
      document.getElementById('id_me_s').setAttribute("enabled", batton);
      document.getElementById('id_v_s').setAttribute("enabled", batton);
      document.getElementById('id_e_s').setAttribute("enabled", batton);
      document.getElementById('id_m_s').setAttribute("enabled", batton);
      document.getElementById('id_j_s').setAttribute("enabled", batton);
      document.getElementById('id_s_s').setAttribute("enabled", batton);
      document.getElementById('id_u_s').setAttribute("enabled", batton);
      document.getElementById('id_n_s').setAttribute("enabled", batton);

}
      document.getElementById('butt3').onclick = () =>{
          if(audio.autoplay)
    {
      audio.src = 'initialD.mp3';
      audio.autoplay = false;
      audio.loop = false;
    }
      document.getElementById('id_me_s').setAttribute("enabled", !batton);
      document.getElementById('id_v_s').setAttribute("enabled", !batton);
      document.getElementById('id_e_s').setAttribute("enabled", !batton);
      document.getElementById('id_m_s').setAttribute("enabled", !batton);
      document.getElementById('id_j_s').setAttribute("enabled", !batton);
      document.getElementById('id_s_s').setAttribute("enabled", !batton);
      document.getElementById('id_u_s').setAttribute("enabled", !batton);
      document.getElementById('id_n_s').setAttribute("enabled", !batton);
      document.getElementById('id_me_s').setAttribute("cycleInterval", 2.4);
      document.getElementById('id_v_s').setAttribute("cycleInterval", 5);
      document.getElementById('id_e_s').setAttribute("cycleInterval", 10);
      document.getElementById('id_m_s').setAttribute("cycleInterval", 18);
      document.getElementById('id_j_s').setAttribute("cycleInterval", 12);
      document.getElementById('id_s_s').setAttribute("cycleInterval", 290);
      document.getElementById('id_u_s').setAttribute("cycleInterval", 840);
      document.getElementById('id_n_s').setAttribute("cycleInterval", 1540);
      document.getElementById('id_me_s').setAttribute("loop", batton);
      document.getElementById('id_v_s').setAttribute("loop", batton);
      document.getElementById('id_e_s').setAttribute("loop", batton);
      document.getElementById('id_m_s').setAttribute("loop", batton);
      document.getElementById('id_j_s').setAttribute("loop", batton);
      document.getElementById('id_s_s').setAttribute("loop", batton);
      document.getElementById('id_u_s').setAttribute("loop", batton);
      document.getElementById('id_n_s').setAttribute("loop", batton);
      document.getElementById('id_me_s').setAttribute("enabled", batton);
      document.getElementById('id_v_s').setAttribute("enabled", batton);
      document.getElementById('id_e_s').setAttribute("enabled", batton);
      document.getElementById('id_m_s').setAttribute("enabled", batton);
      document.getElementById('id_j_s').setAttribute("enabled", batton);
      document.getElementById('id_s_s').setAttribute("enabled", batton);
      document.getElementById('id_u_s').setAttribute("enabled", batton);
      document.getElementById('id_n_s').setAttribute("enabled", batton);
  }
    document.getElementById('butt2').onclick = () =>{
      document.getElementById('id_me_s').setAttribute("enabled", !batton);
      document.getElementById('id_v_s').setAttribute("enabled", !batton);
      document.getElementById('id_e_s').setAttribute("enabled", !batton);
      document.getElementById('id_m_s').setAttribute("enabled", !batton);
      document.getElementById('id_j_s').setAttribute("enabled", !batton);
      document.getElementById('id_s_s').setAttribute("enabled", !batton);
      document.getElementById('id_u_s').setAttribute("enabled", !batton);
      document.getElementById('id_n_s').setAttribute("enabled", !batton);

      document.getElementById('id_me_s').setAttribute("cycleInterval", document.getElementById('id_me_s').getAttribute("cycleInterval")*inc);
      document.getElementById('id_v_s').setAttribute("cycleInterval",  document.getElementById('id_v_s').getAttribute("cycleInterval")*inc);
      document.getElementById('id_e_s').setAttribute("cycleInterval", document.getElementById('id_e_s').getAttribute("cycleInterval")*inc);
      document.getElementById('id_m_s').setAttribute("cycleInterval", document.getElementById('id_m_s').getAttribute("cycleInterval")*inc);
      document.getElementById('id_j_s').setAttribute("cycleInterval", document.getElementById('id_j_s').getAttribute("cycleInterval")*inc);
      document.getElementById('id_s_s').setAttribute("cycleInterval", document.getElementById('id_s_s').getAttribute("cycleInterval")*inc);
      document.getElementById('id_u_s').setAttribute("cycleInterval", document.getElementById('id_u_s').getAttribute("cycleInterval")*inc);
      document.getElementById('id_n_s').setAttribute("cycleInterval", document.getElementById('id_n_s').getAttribute("cycleInterval")*inc);

      document.getElementById('id_me_s').setAttribute("enabled", batton);
      document.getElementById('id_v_s').setAttribute("enabled", batton);
      document.getElementById('id_e_s').setAttribute("enabled", batton);
      document.getElementById('id_m_s').setAttribute("enabled", batton);
      document.getElementById('id_j_s').setAttribute("enabled", batton);
      document.getElementById('id_s_s').setAttribute("enabled", batton);
      document.getElementById('id_u_s').setAttribute("enabled", batton);
      document.getElementById('id_n_s').setAttribute("enabled", batton);
      if(!audio.autoplay)
      {
        audio.src = 'initialD.mp3';
        audio.autoplay = true;
        audio.loop = true;
      }
}
  document.getElementById('butt4').onclick = () =>{
    var a = Math.floor(Math.random() * 10) ;
    var delete_plan = String("plan" + a);
    document.getElementById(delete_plan).remove();
  }

  document.getElementById('butt5').onclick = () =>{
      //var bbbt = String(Math.floor(Math.random() * 5) + " " + Math.floor(Math.random() * 5)  + " " + Math.floor(Math.random() * 5) + " " );
      // var bbt = String(Math.floor(Math.random() * 5) + " " + Math.floor(Math.random() * 5) + " " + Math.floor(Math.random() * 5) + " " );
      document.getElementById('anim123').setAttribute("keyValue", "1 1 1 0 "+"1 1 1 3.14 "+"1 1 1 6.28");
      
  }
}