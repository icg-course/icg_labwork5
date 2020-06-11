document.onload = function () 
{
		document.getElementById('left').onclick = function ()
		{
			var ChangeTranslation = document.getElementById("Box").getAttribute("translation");
			var ct = ChangeTranslation.split(' ');
			ct[0]= parseFloat(ct[0]);
			ct[1]= parseFloat(ct[1]);
			ct[2]= parseFloat(ct[2]);
			ct[0] = -1 + ct[0];
			ct[1] = 0 + ct[1];
			ct[2] = 0 + ct[2];
			fmul = String(ct[0] + ' ');
			fmul = String(fmul + ct[1] + ' ');
			fmul = String(fmul + ct[2]);
			document.getElementById('Box').setAttribute("translation", fmul);
		}
		
		document.getElementById('right').onclick = function ()
		{
			var ChangeTranslation = document.getElementById("Box").getAttribute("translation");
			var ct = ChangeTranslation.split(' ');
			ct[0]= parseFloat(ct[0]);
			ct[1]= parseFloat(ct[1]);
			ct[2]= parseFloat(ct[2]);
			ct[0] = 1 + ct[0];
			ct[1] = 0 + ct[1];
			ct[2] = 0 + ct[2];
			fmul = String(ct[0] + ' ');
			fmul = String(fmul + ct[1] + ' ');
			fmul = String(fmul + ct[2]);
			document.getElementById('Box').setAttribute("translation", fmul);
		}
		
		document.getElementById('forward').onclick = function () 
		{
			var ChangeTranslation = document.getElementById("Box").getAttribute("translation");
			var ct = ChangeTranslation.split(' ');
			ct[0]= parseFloat(ct[0]);
			ct[1]= parseFloat(ct[1]);
			ct[2]= parseFloat(ct[2]);
			ct[0] = 0 + ct[0];
			ct[1] = 0 + ct[1];
			ct[2] = -1 + ct[2];
			fmul = String(ct[0] + ' ');
			fmul = String(fmul + ct[1] + ' ');
			fmul = String(fmul + ct[2]);
			document.getElementById('Box').setAttribute("translation", fmul);
		}
		
		document.getElementById('back').onclick = function () 
		{
			var ChangeTranslation = document.getElementById("Box").getAttribute("translation");
			var ct = ChangeTranslation.split(' ');
			ct[0]= parseFloat(ct[0]);
			ct[1]= parseFloat(ct[1]);
			ct[2]= parseFloat(ct[2]);
			ct[0] = 0 + ct[0];
			ct[1] = 0 + ct[1];
			ct[2] = 1 + ct[2];
			fmul = String(ct[0] + ' ');
			fmul = String(fmul + ct[1] + ' ');
			fmul = String(fmul + ct[2]);
			document.getElementById('Box').setAttribute("translation", fmul);
		}
		document.getElementById('return').onclick = function ()
		{
			var ChangeTranslation = document.getElementById("Box").getAttribute("translation");
			var ct = ChangeTranslation.split(' ');
			ct[0]= parseFloat(ct[0]);
			ct[1]= parseFloat(ct[1]);
			ct[2]= parseFloat(ct[2]);
			ct[0] = 5;
			ct[1] = 0.665;
			ct[2] = 5;
			fmul = String(ct[0] + ' ');
			fmul = String(fmul + ct[1] + ' ');
			fmul = String(fmul + ct[2]);
			document.getElementById('Box').setAttribute("translation", fmul);
		}
}