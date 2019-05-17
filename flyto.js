	var tor=0
	var y=1
	var olen=0
	var numgroup=0
	var transolen=0
	var trav=0
	
		document.onload = function () {
			document.getElementById("Dvizol").setAttribute("enabled", 'false')
			document.getElementById("Dvizol").setAttribute("loop", 'false')
			document.getElementById("Solnc").setAttribute("translation", '0 30 30')
			}
		function Reload()
		{
			interval = setInterval(() => {
				document.getElementById("Deern1").setAttribute("translation", "-1 "+y+" "+ 0)
				y++
				}, 20)
		}
		
		function Flyto()
		{
			var objSel = document.myForm.mySelect
			if(objSel.selectedIndex==0)
				{interval = setInterval(() => {
				document.getElementById("group1").setAttribute("translation", "0 "+olen+" "+olen)
				objSel.options[0] = null
				numgroup=1
				olen++
				}, 20)}
			else {{interval = setInterval(() => {
				document.getElementById("group2").setAttribute("translation", "0 "+olen+" "+olen)
				objSel.options[1] = null
				olen++
				numgroup=0
				}, 20)}}
			
				
		}
		function Startapokal()
		{
			var j=30
			interval = setInterval(() => {
			mas=new Array(41)
			if(j>0)
			{
				document.getElementById("Solnc").setAttribute("translation", "0 "-j+" "+j)
				j-=0.3
				tor =1
			}
			for (var i=0;i<41;i++)
			{
				mas[i]=Math.floor(Math.random()*(5-1+1))+1
			}
			document.getElementById("lava").setAttribute("height",mas.join(",") )
			}, 30)
			document.getElementById("nametrsolnc").setAttribute("toNode", 'Solnc')
			document.getElementById("Dvizsol").setAttribute("enabled", 'true')
			document.getElementById("Dvizsol").setAttribute("loop", 'false')	
		}
		function Moonf()
		{
			if(numgroup==0)
			{
				document.getElementById("mymoon").setAttribute("translation", '-24 -4.6 -5')
				document.getElementById("mymoon").setAttribute("scale", '20 10 10')
			}
			else{
				document.getElementById("mymoon").setAttribute("translation", '-24 -3 4')
				document.getElementById("mymoon").setAttribute("scale", '20 10 10')
			}
			if(numgroup==5)
			{
				Flyto();
				Startapokal();
				travel();
				Moonf();
				Reload();
				Gotomoon();
			}
		}
		function Gotomoon()
		{
			if(numgroup==0 && tor==0)
			{
				interval = setInterval(() => {
					if(transolen<76)
					{
						document.getElementById("group1").setAttribute("translation", -0.3*transolen +" "+transolen*0.1+" "+0)
						transolen++
					}
				}, 30)
			}
			if(numgroup==1 && tor==0)
			{
				interval = setInterval(() => {
					if(transolen<76)
					{
						document.getElementById("group2").setAttribute("translation", -0.3*transolen +" "+transolen*0.1+" "+0)
						transolen++
					}
				}, 30)
			}
			if(numgroup==5)
			{
				Moonf();
			}
		}
		function travel()
		{
			if(numgroup==0)
			{
				interval = setInterval(() => {
						document.getElementById("group1").setAttribute("translation", -24-trav+" 7 0")
						transolen++
						document.getElementById("mymoon").setAttribute("translation", -24-trav+" "+"-4.6 -5")
						trav++
				}, 30)
			}
			if(numgroup==1){
			interval = setInterval(() => {
						document.getElementById("group2").setAttribute("translation", -24-trav+" 7.8 0")
						transolen++
						document.getElementById("mymoon").setAttribute("translation", -24-trav+" "+"-3 4")
						trav++
				}, 30)
			}
		}
		