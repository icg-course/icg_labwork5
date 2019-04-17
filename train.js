document.onload = function()
{
    	var click0=0;
    	var click1=0;
    	var click2=0;
    	var click3=0;
    	document.getElementById('FaceScale').onclick = function()
    		{
    			click0=1+click0;
    			if (click0<13)
    			{
					var ChangeScale = document.getElementById("Face").getAttribute("scale");
					var sc = ChangeScale.split(' ');
					sc[0]=1.1*sc[0];
					sc[1]=1.1*sc[1];
					sc[2]=1.1*sc[2];
					fmul = String(sc[0] + ' ');
	      			fmul = String(fmul+ sc[1] + ' ');
	      			fmul = String(fmul + sc[2]);
	      			document.getElementById('Face').setAttribute("scale", fmul);

	      			var ChangeTr = document.getElementById("Face").getAttribute("translation");
					var tr = ChangeTr.split(' ');
					tr[0]=1*tr[0];
					tr[1]=1.06*tr[1];
					tr[2]=1*tr[2];
					tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
	      			document.getElementById('Face').setAttribute("translation", tmul);
	      		}
	      		else
	      		{
	      			window.alert('Ты сюда учиться пришел или качаться? Займись делом!');
	      		}
	      		if ((click0>=13) && (click1>=10) && (click2>=10) && (click3>=12))
	      		{
	      			window.alert ('Ты машина');
	      		}
			}

		document.getElementById('BodyScale').onclick = function()
    		{
    			click1=1+click1;
    			if (click1<10)
    			{
				var ChangeScale = document.getElementById("Body").getAttribute("scale");
				var sc = ChangeScale.split(' ');
				sc[0]=1.1*sc[0];
				sc[1]=1*sc[1];
				sc[2]=1.3*sc[2];
				fmul = String(sc[0] + ' ');
      			fmul = String(fmul+ sc[1] + ' ');
      			fmul = String(fmul + sc[2]);
      			document.getElementById('Body').setAttribute("scale", fmul);

      			var ChangeLHand = document.getElementById("LHand").getAttribute("translation");
      			var tr = ChangeLHand.split(' ');
				tr[0]=1.04*tr[0];
				tr[1]=1*tr[1];
				tr[2]=1*tr[2];
				tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
      			document.getElementById('LHand').setAttribute("translation", tmul);

      			var ChangeRHand = document.getElementById("RHand").getAttribute("translation");
      			var tr = ChangeRHand.split(' ');
				tr[0]=1.1*tr[0];
				tr[1]=1*tr[1];
				tr[2]=1*tr[2];
				tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
      			document.getElementById('RHand').setAttribute("translation", tmul);

      			var ChangeLFist = document.getElementById("LFist").getAttribute("translation");
      			var tr = ChangeLFist.split(' ');
				tr[0]=1.03*tr[0];
				tr[1]=1*tr[1];
				tr[2]=1*tr[2];
				tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
      			document.getElementById('LFist').setAttribute("translation", tmul);

      			var ChangeRFist = document.getElementById("RFist").getAttribute("translation");
      			var tr = ChangeRFist.split(' ');
				tr[0]=1.055*tr[0];
				tr[1]=1*tr[1];
				tr[2]=1*tr[2];
				tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
      			document.getElementById('RFist').setAttribute("translation", tmul);
      			}
      			
	      		else
	      		{
	      			window.alert('Любая девушка позавидует твоей груди, пора остановиться');
	      		}
	      		if ((click0>=13) && (click1>=10) && (click2>=10) && (click3>=12))
	      		{
	      			window.alert ('Ты машина');
	      		}
      		}


      		document.getElementById('HandScale').onclick = function()
    		{
    			click2=1+click2;
    			if (click2<10)
    			{
					var ChangeScale = document.getElementById("Hand").getAttribute("scale");
					var sc = ChangeScale.split(' ');
					sc[0]=1*sc[0];
					sc[1]=1.1*sc[1];
					sc[2]=1.1*sc[2];
					fmul = String(sc[0] + ' '+ sc[1] + ' '+ sc[2]);
	      			document.getElementById('Hand').setAttribute("scale", fmul);

	      			var ChangeLHand = document.getElementById("LHand").getAttribute("translation");
	      			var tr = ChangeLHand.split(' ');
					tr[0]=1*tr[0];
					tr[1]=0.8*tr[1];
					tr[2]=0.9*tr[2];
					tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
	      			document.getElementById('LHand').setAttribute("translation", tmul);

	      			var ChangeRHand = document.getElementById("RHand").getAttribute("translation");
	      			var tr = ChangeRHand.split(' ');
					tr[0]=1*tr[0];
					tr[1]=0.8*tr[1];
					tr[2]=0.9*tr[2];
					tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
	      			document.getElementById('RHand').setAttribute("translation", tmul);

					var ChangeLFist = document.getElementById("LFist").getAttribute("translation");
	      			var tr = ChangeLFist.split(' ');
					tr[0]=1*tr[0];
					tr[1]=0.9*tr[1];
					tr[2]=1*tr[2];
					tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
	      			document.getElementById('LFist').setAttribute("translation", tmul);

	      			var ChangeRFist = document.getElementById("RFist").getAttribute("translation");
	      			var tr = ChangeRFist.split(' ');
					tr[0]=1*tr[0];
					tr[1]=0.9*tr[1];
					tr[2]=1*tr[2];
					tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
	      			document.getElementById('RFist').setAttribute("translation", tmul);
      		    }
      			else
	      		{
	      			window.alert('Базуки заряжены');
	      		}

	      		if ((click0>=13) && (click1>=10) && (click2>=10) && (click3>=12))
	      		{
	      			window.alert ('Ты машина');
	      		}
      		}

      		document.getElementById('LegsScale').onclick = function()
    		{
    			click3=1+click3;
    			if (click3<12)
    			{
					var ChangeScale = document.getElementById("Legs").getAttribute("scale");
					var sc = ChangeScale.split(' ');
					sc[0]=1.1*sc[0];
					sc[1]=1*sc[1];
					sc[2]=1.1*sc[2];
					fmul = String(sc[0] + ' '+ sc[1] + ' '+ sc[2]);
	      			document.getElementById('Legs').setAttribute("scale", fmul);

	      			var ChangeLLeg = document.getElementById("LLeg").getAttribute("translation");
	      			var tr = ChangeLLeg.split(' ');
					tr[0]=0.9*tr[0];
					tr[1]=1*tr[1];
					tr[2]=0.9*tr[2];
					tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
	      			document.getElementById('LLeg').setAttribute("translation", tmul);

	      			var ChangeRLeg = document.getElementById("RLeg").getAttribute("translation");
	      			var tr = ChangeRLeg.split(' ');
					tr[0]=0.9*tr[0];
					tr[1]=1*tr[1];
					tr[2]=0.9*tr[2];
					tmul = String(tr[0] + ' '+ tr[1] + ' '+ tr[2]);
	      			document.getElementById('RLeg').setAttribute("translation", tmul);
	      		}
	      		else
	      		{
	      			window.alert('Ноги забиты по максимуму');
	      		}
	      		if ((click0>=13) && (click1>=10) && (click2>=10) && (click3>=12))
	      		{
	      			window.alert ('Ты машина');
	      		}
      		}
}